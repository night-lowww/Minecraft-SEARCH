/* Minecraft SEARCH: 逆引き検索 + エラー診断
 * 対象: Java Edition 1.21.1。助言型ツールであり、Minecraft実機の完全な構文検証器ではありません。
 */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const btnCopy = (code) => `<button class="tool-button secondary" type="button" data-tool-copy="${esc(code)}">コピー</button>`;
  const makeCard = (title, intro, code, files, note = '') => `<article class="tool-card"><h3>${esc(title)}</h3><p>${esc(intro)}</p>${code ? `<pre>${esc(code)}</pre>${btnCopy(code)}` : ''}${files ? `<p><strong>関連ファイル</strong><br>${esc(files)}</p>` : ''}${note ? `<p class="tool-note">${esc(note)}</p>` : ''}</article>`;

  // Each mapping is a practical starting point; pack-specific details may need editing.
  const reverseRules = [
    {id:'kill-reward',diagType:'json',diagPath:'data/example/advancement/kill_zombie.json',diagCode:`{\n  \"criteria\": {\n    \"kill_zombie\": {\n      \"trigger\": \"minecraft:player_killed_entity\",\n      \"conditions\": { \"entity\": { \"type\": \"minecraft:zombie\" } }\n    }\n  },\n  \"rewards\": { \"function\": \"example:reward\" }\n}`,title:'特定の敵を倒したら報酬を渡す',keys:['ボスを倒','敵を倒','倒したら報酬','撃破報酬','モブを倒','kill reward','player_killed_entity'],desc:'進捗トリガーで撃破を検知し、rewards.functionから報酬関数を実行する構成。',steps:['advancement JSONで minecraft:player_killed_entity を設定する','条件に対象エンティティを指定する','rewards.functionから報酬用functionを呼び出す'],code:`// data/example/advancement/kill_zombie.json\n{\n  "criteria": {\n    "kill_zombie": {\n      "trigger": "minecraft:player_killed_entity",\n      "conditions": {\n        "entity": { "type": "minecraft:zombie" }\n      }\n    }\n  },\n  "rewards": { "function": "example:reward" }\n}\n\n# data/example/function/reward.mcfunction\ngive @s minecraft:emerald 3\ntellraw @s {"text":"報酬を獲得！","color":"gold"}`,files:'data/example/advancement/kill_zombie.json、data/example/function/reward.mcfunction',note:'一度達成した進捗は通常は再達成できないため、繰り返し報酬にするなら進捗のrevokeなどを含む設計が必要。'},
    {id:'cooldown',title:'スキルにクールダウンを付ける',keys:['クールダウン','スキルのct','スキルにct','再使用時間','cooldown','クールタイム'],desc:'scoreboardをタイマーとして使い、tick functionで毎tick値を減らす基本構成。',steps:['ロード時にdummy objectiveを作成する','tick functionで1以上の値を減らす','スキル実行時は0のときだけ実行し、クールダウン値をセットする'],code:`# load function（最初に一度実行）\nscoreboard objectives add skill_cd dummy\n\n# tick function（毎tick）\nscoreboard players remove @a[scores={skill_cd=1..}] skill_cd 1\n\n# スキル発動の例：使用可能なプレイヤーだけ処理\nexecute as @a[scores={skill_cd=0}] run function example:skill/use\n\n# data/example/function/skill/use.mcfunction\neffect give @s minecraft:speed 5 1 true\nscoreboard players set @s skill_cd 100`,files:'data/example/function/load.mcfunction、tick.mcfunction、skill/use.mcfunctionとfunctionタグ',note:'objective未設定のプレイヤーをどう初期化するか、入力操作をどう検知するかは実装に合わせて追加する。'},
    {id:'item-check',title:'特定のアイテムを持っているか判定する',keys:['アイテムを持','所持しているか','手に持','メインハンド','武器を持','持っているか判定','if items'],desc:'1.20.5以降の /execute if items で装備スロットやインベントリを調べる。',steps:['対象プレイヤーをexecute asで指定する','entityスロットとアイテムIDを指定する','成功時のfunctionやコマンドをrunする'],code:`execute as @a if items entity @s weapon.mainhand minecraft:diamond_sword run function example:skill/activate\n\n# 例：防具スロットのヘルメット判定\nexecute as @a if items entity @s armor.head minecraft:diamond_helmet run effect give @s minecraft:resistance 2 0 true`,files:'data/example/function/skill/activate.mcfunction',note:'アイテムコンポーネントまで限定したい場合は、1.21.1のitem predicate/コンポーネント書式を追加で確認する。'},
    {id:'quest',title:'クエストの進行度を管理する',keys:['クエスト','進行度','ミッション','quest','ステージ'],desc:'scoreboardでプレイヤーごとの段階を保持し、条件達成時に段階を進める。複数段階なら状態遷移を明示する。',steps:['quest_stageなどのdummy objectiveを作成する','受注時にステージ値を設定する','条件が成立したらexecute if scoreで次の段階へ進める','完了時に報酬functionを呼ぶ'],code:`scoreboard objectives add quest_stage dummy\n\n# 受注\nscoreboard players set @s quest_stage 1\n\n# 例：指定条件を満たしたとき\nexecute if score @s quest_stage matches 1 run function example:quest/step_1_complete\n\n# data/example/function/quest/step_1_complete.mcfunction\ntellraw @s {"text":"クエスト進行！","color":"green"}\nscoreboard players set @s quest_stage 2`,files:'data/example/function/quest/*.mcfunction、load.mcfunction',note:'objectiveの初期化、再受注、途中離脱、クリア後のリセットを仕様として決めておく。'},
    {id:'recipe',diagType:'json',diagPath:'data/example/recipe/ruby_block.json',title:'カスタムクラフトレシピを作る',keys:['レシピ','クラフト','作業台','crafting_shaped','crafting_shapeless'],desc:'レシピJSONをdata/<namespace>/recipe/に配置する。1.21.1のresultはidとcountを使う形式。',steps:['namespaceを決める','shapedならpattern/key、shapelessならingredientsを記述する','resultに出力アイテムを指定する'],code:`{\n  "type": "minecraft:crafting_shaped",\n  "pattern": ["RRR", "RRR", "RRR"],\n  "key": { "R": { "item": "minecraft:redstone_block" } },\n  "result": { "id": "minecraft:diamond_block", "count": 1 }\n}`,files:'data/example/recipe/ruby_block.json',note:'これは構造例。素材と結果のID、patternの一致、1.21.1のレシピ形式をゲームで検証する。'},
    {id:'bossbar',title:'ボスのHPバーを表示する',keys:['hpバー','体力バー','ボスバー','bossbar','ボスのhp','hpゲージ'],desc:'/bossbarで表示バーを作り、プレイヤーへの表示と値の更新をfunctionで管理する。',steps:['bossbarを作成してプレイヤーに表示する','ボスのHealth/max_healthから値を取る仕組みを作る','ボス死亡時に非表示にして後始末する'],code:`bossbar add example:boss {"text":"ボス"}\nbossbar set example:boss players @a\nbossbar set example:boss max 100\nbossbar set example:boss value 100\nbossbar set example:boss color red\nbossbar set example:boss style progress`,files:'data/example/function/bossbar/*.mcfunction',note:'HP値の自動同期はボスの最大体力・複数体出現・死亡処理を考慮して追加する必要がある。'},
    {id:'random-tp',title:'ランダムな場所にテレポートする',keys:['ランダムテレポート','ランダムな場所','ランダム転移','spreadplayers','ばらまく'],desc:'/spreadplayersで指定した中心座標の周囲に対象を分散する。',steps:['中心座標を決める','最低間隔と最大範囲を決める','対象セレクターを指定する'],code:`spreadplayers 0 0 10 100 false @a`,files:'任意のfunction内に配置可能',note:'これは円形範囲内で完全な一様ランダム地点を保証するコマンドではなく、対象を分散配置する機能。安全な地面やワールド境界も考慮する。'},
    {id:'custom-item',title:'名前やエンチャント付きアイテムを配る',keys:['カスタムアイテム','名前付きアイテム','特殊武器','エンチャント付き','give custom','custom_name'],desc:'1.20.5以降のアイテムコンポーネント構文を使う。',steps:['/giveのアイテムIDの後ろに角括弧でcomponentsを指定する','custom_nameにはJSON text componentを指定する','enchantmentsにはlevelsを指定する'],code:`give @p minecraft:diamond_sword[minecraft:custom_name='{"text":"Flame Sword","italic":false}',minecraft:enchantments={levels:{"minecraft:sharpness":5}}] 1`,files:'function内またはチャットコマンド',note:'古い{display:{Name:...}}形式と1.21.1のアイテムコンポーネント構文を混在させない。'},
    {id:'summon-mob',title:'名前・タグ付きのボスを召喚する',keys:['ボスを召喚','モブを召喚','カスタムモブ','名前付きゾンビ','summon mob'],desc:'/summonのNBTで識別用タグや表示名を付ける例。',steps:['MobのIDを決める','Tagsなど後でセレクターから参照する値を付ける','function側はtag=bossなどで対象を識別する'],code:`summon minecraft:zombie ~ ~ ~ {Tags:["example_boss"],CustomName:'{"text":"ボス","color":"dark_red"}',PersistenceRequired:1b}\n\n# 後から対象を参照\nexecute as @e[type=minecraft:zombie,tag=example_boss] run say ボスが存在する`,files:'function内または召喚コマンド',note:'HealthなどのエンティティNBTは型やバージョンに依存するため、必要な属性は別途設定・検証する。'},
    {id:'actionbar',title:'アクションバーに文字を表示する',keys:['アクションバー','画面下に表示','actionbar','タイトル表示'],desc:'title actionbarで画面下部にテキストを表示する。',steps:['対象セレクターを選ぶ','JSON text componentを書く','必要ならtickから条件付きで繰り返し表示する'],code:`title @a actionbar {"text":"スキル使用可能！","color":"green"}`,files:'function内に配置可能'},
    {id:'timer',title:'一定時間後に処理を実行する',keys:['タイマー','一定時間後','遅延','数秒後','schedule function','遅らせる'],desc:'/schedule functionでfunctionの実行を後ろに予約する。20 game ticksがおよそ1秒。',steps:['遅延先のfunctionを作成する','/schedule function <namespace:path> <time> replaceを指定する','重複予約とキャンセルの扱いを決める'],code:`schedule function example:timer/after_5s 100t replace`,files:'data/example/function/timer/after_5s.mcfunction',note:'ラグがあると現実時間の厳密な5秒とは一致しない。'},
    {id:'biome',title:'特定のバイオームにいるか判定する',keys:['バイオーム','biome','特定の場所にいる','砂漠にいる'],desc:'execute if biomeで対象座標のバイオームを判定する。',steps:['判定する座標を指定する','名前空間付きのバイオームIDを指定する','成功時の処理をrunする'],code:`execute as @a at @s if biome ~ ~ ~ minecraft:desert run effect give @s minecraft:haste 2 0 true`,files:'tick functionなどに配置可能'},
    {id:'score-range',title:'スコアが指定範囲なら処理する',keys:['スコアが','得点','scoreboard','範囲内','matches'],desc:'execute if score <target> <objective> matches <range>で値を判定する。',steps:['objectiveを作成する','プレイヤー等のスコアを更新する','matchesで単一値・範囲・比較を指定する'],code:`execute as @a if score @s mana matches 10.. run function example:skill/cast`,files:'load/tick/function'},
    {id:'detect-block',title:'プレイヤーの足元のブロックを判定する',keys:['ブロックを踏ん','足元のブロック','detect block','if block'],desc:'execute atで位置をプレイヤー基準にし、if blockで座標のブロックを検査する。',steps:['対象プレイヤーの位置へコンテキストを移す','相対座標とブロックIDを指定する','処理functionを呼び出す'],code:`execute as @a at @s if block ~ ~-1 ~ minecraft:diamond_block run function example:checkpoint`,files:'tick function、checkpoint function'},
    {id:'area-effect',title:'範囲内のプレイヤーに効果を付与する',keys:['範囲内','近くのプレイヤー','半径','距離','distance'],desc:'距離セレクターで対象を絞り、effect giveやfunctionを実行する。',steps:['実行中心（at @s等）を設定する','@a[distance=..5]などで範囲を指定する','効果やfunctionを実行する'],code:`execute as @e[type=minecraft:armor_stand,tag=healer] at @s run effect give @a[distance=..5] minecraft:regeneration 2 0 true`,files:'tick function等'},
    {id:'loot',diagType:'json',diagPath:'data/example/loot_table/reward.json',title:'独自ドロップテーブルを作る',keys:['ドロップ','ルートテーブル','loot table','アイテムを落とす','報酬テーブル'],desc:'loot_table JSONのpools、entries、functionsで抽選とアイテム加工を定義する。',steps:['data/<namespace>/loot_table/にJSONを作成する','poolsのrollsとentriesを定義する','/lootやモブのloot table指定で動作確認する'],code:`{\n  "type": "minecraft:generic",\n  "pools": [\n    {\n      "rolls": 1,\n      "entries": [\n        { "type": "minecraft:item", "name": "minecraft:emerald" }\n      ]\n    }\n  ]\n}`,files:'data/example/loot_table/reward.json',note:'1.21.1の個別条件・数値プロバイダー・関数フィールドを使う場合は形式ごとに検証する。'},
    {id:'custom-advancement',diagType:'json',diagPath:'data/example/advancement/get_diamond.json',title:'独自の進捗を作る',keys:['進捗','advancement','実績','criteria','進捗を作る'],desc:'advancement JSONでcriteria.triggerを選び、必要に応じてdisplayとrewardsを追加する。',steps:['data/<namespace>/advancement/にJSONを置く','criteriaを最低1つ設定する','requirementsを指定する場合はcriteria名と一致させる'],code:`{\n  "criteria": {\n    "get_diamond": {\n      "trigger": "minecraft:inventory_changed",\n      "conditions": {\n        "items": [{ "items": ["minecraft:diamond"] }]\n      }\n    }\n  },\n  "display": {\n    "icon": { "id": "minecraft:diamond" },\n    "title": { "text": "最初のダイヤ" },\n    "description": { "text": "ダイヤを入手する" },\n    "frame": "task",\n    "show_toast": true,\n    "announce_to_chat": true,\n    "hidden": false\n  }\n}`,files:'data/example/advancement/get_diamond.json',note:'進捗triggerごとにconditionsの形式は異なる。実際の1.21.1形式を確認してから使用する。'},
    {id:'function-tags',diagType:'json',diagPath:'data/minecraft/tags/function/load.json',diagCode:`{ \"values\": [\"example:load\"] }`,title:'load/tick functionを設定する',keys:['load.json','tick.json','tick function','毎tick','毎回実行','データパックを読み込んだ時','起動時処理','ロード時'],desc:'minecraft:load / minecraft:tickのfunction tagから関数を自動実行する。1.21.1ではtags/functionに置く。',steps:['functionファイルを作る','tags/function/load.jsonにload時の関数を列挙する','tags/function/tick.jsonに毎tickの関数を列挙する'],code:`// data/minecraft/tags/function/load.json\n{ "values": ["example:load"] }\n\n// data/minecraft/tags/function/tick.json\n{ "values": ["example:tick"] }`,files:'data/minecraft/tags/function/load.json、tick.json、data/example/function/load.mcfunction、tick.mcfunction',note:'function tag内のvaluesはfunction IDの一覧。JSON拡張子とフォルダの単数形に注意。'},
    {id:'team',title:'チームごとに処理や表示を分ける',keys:['チーム','team','team color','チーム分け'],desc:'teamコマンドでチームを作り、プレイヤーを所属させてセレクターで利用する。',steps:['チームを作成する','参加・脱退処理を設ける','@a[team=red]のようなセレクターで絞り込む'],code:`team add red "Red Team"\nteam modify red color red\nteam join red @p\nexecute as @a[team=red] run tellraw @s {"text":"赤チーム","color":"red"}`,files:'function内に配置可能'},
    {id:'structure',title:'構造物の位置を探す',keys:['構造物を探','locate structure','村を探','古代都市','探すコマンド'],desc:'/locate structureで構造物を検索する。見つかった座標へテレポートする場合は結果を確認してから行う。',steps:['構造物IDを指定する','ゲーム内チャットに表示される座標を確認する','必要なら座標を使ってテレポートする'],code:`locate structure minecraft:ancient_city`,files:'チャットコマンド/関数'},
    {id:'storage',title:'function間でデータを保存・共有する',keys:['データを保存','storage','persistent data','data storage','function間'],desc:'/data storageと/data modifyでコマンドから共有データを保存する。',steps:['一意なnamespaceのstorage IDを決める','/data modify storageで値を設定する','/data get storageで確認する'],code:`data modify storage example:state mana set value 100\ndata get storage example:state mana`,files:'function内に配置可能',note:'storageのJSON/NBT構造は自分で設計する必要がある。'},
    {id:'pack-meta',diagType:'json',diagPath:'pack.mcmeta',title:'データパックの最小構成を作る',keys:['データパック作成','pack.mcmeta','フォルダ構成','最小構成','datapackを作る'],desc:'pack.mcmeta、namespaceフォルダ、functionタグ、関数ファイルを作るところから始める。',steps:['pack.mcmetaをデータパック直下に置く','data/<namespace>/function/に関数を置く','data/minecraft/tags/function/load.jsonでload functionを登録する','/reload後にログを確認する'],code:`{\n  "pack": {\n    "pack_format": 48,\n    "description": "Example datapack for Java 1.21.1"\n  }\n}`,files:'pack.mcmeta、data/example/function/load.mcfunction、data/minecraft/tags/function/load.json',note:'Java Edition 1.21.1のdata pack formatは48。ターゲットバージョンを変えるとpack_formatも見直す。'},
    {id:'weather-time',title:'時間・天候を条件にする',keys:['時間帯','夜になったら','天候','雨のとき','weather','time query'],desc:'time queryやexecute if predicate / time_checkなどを目的に応じて使い分ける。',steps:['ワールド時刻を直接確認するか、predicate JSONを使うか決める','時間や天候の条件を設定する','tick functionから必要な間隔で判定する'],code:`time query daytime\nweather rain 600`,files:'function内に配置可能',note:'この例は状態を確認・変更するコマンド。条件付き自動実行には別途execute条件またはpredicateが必要。'}
  ];

  function normalize(s) { return String(s || '').toLowerCase().replace(/[\s　・、。,.!！?？:：/\\_-]+/g, ''); }
  function scoreRule(rule, q) {
    const nq = normalize(q);
    let score = 0;
    for (const key of rule.keys) {
      const nk = normalize(key);
      if (!nk) continue;
      if (nq.includes(nk)) score += nk.length >= 4 ? 5 : 3;
      else if (nk.includes(nq) && nq.length >= 2) score += 1;
    }
    const words = q.toLowerCase().split(/[\s　、,。]+/).filter(Boolean);
    const blob = normalize(rule.title + ' ' + rule.desc + ' ' + rule.keys.join(' '));
    for (const w of words) if (w.length > 1 && blob.includes(normalize(w))) score += 1;
    return score;
  }
  function runReverse(query) {
    const q = query.trim();
    const out = $('reverseResults');
    if (!q) { out.innerHTML = '<div class="tool-card"><h3>目的を入力してね</h3><p>例：「ボスを倒したら報酬を渡す」「スキルにクールダウンを付ける」</p></div>'; return; }
    const ranked = reverseRules.map(r => ({r, score: scoreRule(r,q)})).filter(x => x.score > 0).sort((a,b)=>b.score-a.score).slice(0,6);
    if (!ranked.length) {
      out.innerHTML = '<div class="tool-card"><h3>ぴったりのテンプレートが見つからなかった</h3><p>「スコア」「進捗」「レシピ」「ボス」「アイテム」「時間」など、仕組みの名前か、やりたいことを短く入力してみて。</p></div>';
      return;
    }
    out.innerHTML = ranked.map(({r}) => `<article class="tool-card"><h3>${esc(r.title)}</h3><p>${esc(r.desc)}</p><p><strong>手順</strong><br>${r.steps.map((s,i)=>`${i+1}. ${esc(s)}`).join('<br>')}</p><pre>${esc(r.code)}</pre><div class="tool-row"><button class="tool-button" type="button" data-tool-copy="${esc(r.code)}">コードをコピー</button><button class="tool-button secondary" type="button" data-diagnose-snippet="${esc(r.diagCode || r.code)}" data-diagnose-type="${esc(r.diagType || ((r.code.trim().startsWith('{') || r.code.trim().startsWith('[')) ? 'json' : 'function'))}" data-diagnose-path="${esc(r.diagPath || '')}">エラー診断へ送る</button></div><p><strong>関連ファイル</strong><br>${esc(r.files)}</p>${r.note?`<p class="tool-note">${esc(r.note)}</p>`:''}</article>`).join('');
  }

  // ---------------------- Error diagnosis ----------------------
  const issue = (severity, title, message, fix='') => ({severity,title,message,fix});
  const idRe = /^[a-z0-9_.-]+:[a-z0-9/._-]+$/;
  function locForPos(text, pos) {
    const before = text.slice(0, Math.max(0,pos));
    const lines = before.split('\n');
    return {line: lines.length, col: lines[lines.length-1].length + 1};
  }
  function getJsonType() {
    const chosen = $('jsonKind').value;
    if (chosen !== 'auto') return chosen;
    const path = $('diagPath').value.toLowerCase().replace(/\\/g,'/');
    if (path.endsWith('pack.mcmeta')) return 'pack.mcmeta';
    for (const t of ['advancement','recipe','loot_table','predicate','item_modifier']) if (path.includes('/'+t+'/') || path.includes('/'+t+'.json')) return t;
    if (path.includes('/tags/')) return 'tag';
    return 'generic';
  }
  function validatePath(path) {
    const issues=[]; const p=path.trim().replace(/\\/g,'/');
    if (!p) return [issue('warn','ファイルパス未指定','パスが空なので、構文ではなくパス形式の例のみ確認します。','pack.mcmeta または data/<namespace>/function/<path>.mcfunction のような形にする。')];
    if (p === 'pack.mcmeta' || p.endsWith('/pack.mcmeta')) {
      if (p !== 'pack.mcmeta') issues.push(issue('error','pack.mcmetaの配置','pack.mcmetaはデータパックのルート直下に配置する。','<datapack>/pack.mcmeta に置く。'));
      return issues;
    }
    if (!p.startsWith('data/')) issues.push(issue('error','data/から始まっていない','pack.mcmeta以外のデータファイルは通常 data/<namespace>/ 以下に置く。','data/example/function/tick.mcfunction のようなパスにする。'));
    const seg=p.split('/');
    if (seg.length>=2 && seg[0]==='data' && !/^[a-z0-9_.-]+$/.test(seg[1])) issues.push(issue('error','namespaceが不正','namespaceは小文字英数字、アンダースコア、ハイフン、ピリオドを基本にする。','example や my_pack のようなnamespaceを使う。'));
    const allowed=new Set(['advancement','dimension','dimension_type','function','item_modifier','loot_table','predicate','recipe','structure','worldgen','tags']);
    if (seg.length>=3 && seg[0]==='data' && !allowed.has(seg[2])) issues.push(issue('warn','フォルダ名を確認','1.21.1ではデータパック内の多くのフォルダ名が単数形。','例：loot_table、recipe、function、advancement。'));
    if (seg.length>=4 && seg[2]==='tags') {
      const tagTypes=new Set(['block','entity_type','fluid','function','game_event','item','worldgen']);
      if(!tagTypes.has(seg[3])) issues.push(issue('warn','タグ種類フォルダを確認',`tags/${seg[3]} は一般的な1.21.1のタグ種類一覧に見当たらない。`,'tags/block、tags/item、tags/function など、対象に合った種類を使う。'));
    }
    const leaf=seg[seg.length-1];
    if (seg[2]==='function' && !leaf.endsWith('.mcfunction')) issues.push(issue('error','functionの拡張子','functionファイルは .mcfunction を使う。','tick.mcfunction のように変更する。'));
    else if (seg[2]!=='function' && !leaf.endsWith('.json')) issues.push(issue('warn','拡張子を確認','JSON形式のデータファイルは通常 .json。','必要な形式に応じて .json を付ける。'));
    if (seg.includes('functions') || seg.includes('recipes') || seg.includes('loot_tables') || seg.includes('advancements') || seg.includes('predicates')) issues.push(issue('warn','古い複数形フォルダ名','Java 1.21以降ではフォルダ名が単数形へ変更されているものがある。','functions→function、recipes→recipe、loot_tables→loot_table、advancements→advancement、predicates→predicate を確認する。'));
    return issues;
  }
  function validateCommand(raw) {
    const issues=[]; const original=raw.trim();
    if (!original) return [issue('error','コマンドが空','コマンドを入力してください。')];
    if (original.includes('\n')) issues.push(issue('warn','複数行が含まれている','チャット用の単一コマンド診断では1行ずつ入力する。functionファイルなら診断対象をfunctionに切り替える。'));
    if (/<[^>]+>/.test(original)) issues.push(issue('warn','説明用プレースホルダーが残っている','<targets>や<item>はWikiの説明用表記で、そのままコマンドに入れる値ではない。','実際の値に置き換える。例：<targets> → @a、<item> → minecraft:diamond。'));
    const clean=original.replace(/^\s*\/\s*/, '');
    const tokens=clean.split(/\s+/).filter(Boolean); const root=tokens[0]?.toLowerCase() || '';
    const roots = new Set(['advancement','attribute','ban','ban-ip','banlist','bossbar','clear','clone','damage','data','datapack','debug','defaultgamemode','deop','difficulty','effect','enchant','execute','experience','fill','fillbiome','forceload','function','tp','gamemode','gamerule','give','help','item','jfr','kick','kill','list','locate','loot','me','msg','op','pardon','pardon-ip','particle','perf','place','playsound','publish','random','recipe','reload','return','ride','say','schedule','scoreboard','seed','setblock','setidletimeout','setworldspawn','spawnpoint','spectate','spreadplayers','stop','stopsound','summon','tag','team','teammsg','teleport','tell','tellraw','time','title','trigger','weather','whitelist','worldborder','xp','help','?']);
    if (!roots.has(root)) {
      const typos={excecute:'execute',summonm:'summon',teleportation:'teleport',scorboard:'scoreboard',funtion:'function',datapacks:'datapack'};
      if(typos[root]) issues.push(issue('error','コマンド名の入力ミスの可能性',`「${root}」ではなく「${typos[root]}」の可能性がある。`,`/${typos[root]} ... のように確認する。`));
      else issues.push(issue('warn','コマンド名を確認',`「${root}」は診断ツールの既知コマンド一覧にありません。独自コマンドや未収録構文の可能性もあるため、無効とは断定しません。`,'1.21.1のコマンド一覧、入力したバージョン、権限を確認する。'));
    }
    if(root==='execute') {
      const runAt=tokens.indexOf('run');
      if(runAt<0) issues.push(issue('error','executeにrunがない','executeはコンテキスト変更・条件設定の後にrun <command>を使う構文。','例：execute as @a run say hello'));
      else if(runAt===tokens.length-1) issues.push(issue('error','runの後ろにコマンドがない','runの後ろに実行するコマンドを指定する。','例：execute as @a run say hello'));
      const modifiers=new Set(['as','at','positioned','rotated','facing','align','anchored','in','on','summon']);
      for(let i=1;i<tokens.length;i++){
        if(modifiers.has(tokens[i]) && (!tokens[i+1] || tokens[i+1]==='run' || ['if','unless'].includes(tokens[i+1]))) issues.push(issue('error',`execute ${tokens[i]} の引数がない`,`「${tokens[i]}」の後ろに対象や座標などが必要。`,`execute ${tokens[i]} <値> run <コマンド> の形にする。`));
        if(['if','unless'].includes(tokens[i]) && (!tokens[i+1] || tokens[i+1]==='run')) issues.push(issue('error',`execute ${tokens[i]} の条件がない`,`if/unlessの後ろにblock、entity、score、itemsなどの条件が必要。`));
      }
      if(/\bexecute\b/.test(clean) && /\brun\s+\/\s*/.test(clean)) issues.push(issue('warn','runの後ろのスラッシュ','functionやexecute run内では通常、コマンド先頭の/を省く。','run say hello のように記述する。'));
    }
    const minArgs={give:3,summon:2,function:2,kill:1,clear:1,teleport:2,tp:2,effect:3,scoreboard:2,bossbar:2,schedule:2,advancement:3,recipe:2,loot:2};
    if(minArgs[root]!==undefined && tokens.length<minArgs[root]) issues.push(issue('error',`/${root} の引数不足`,`コマンドの後ろに必要な引数が不足しているようです。`,'コマンド構文辞典で引数を確認する。'));
    if(root==='function' && tokens[1] && !idRe.test(tokens[1])) issues.push(issue('error','function IDの形式','関数IDは通常 namespace:path の形を使う。','例：example:tick'));
    if(root==='schedule' && tokens[1]==='function') {
      if(tokens.length<4) issues.push(issue('error','schedule functionの引数不足','function IDと実行までの時間を指定する。','例：schedule function example:delayed 20t replace'));
      else if(!idRe.test(tokens[2])) issues.push(issue('error','scheduleのfunction ID','namespace:path形式になっているか確認する。'));
    }
    if(root==='scoreboard') {
      if(tokens[1]==='objectives' && tokens[2]==='add' && tokens.length<4) issues.push(issue('error','objective名がない','scoreboard objectives addにはobjectives名とcriterionが必要。','例：scoreboard objectives add mana dummy'));
      if(tokens[1]==='players' && !tokens[2]) issues.push(issue('error','playersサブコマンドが不足','list、get、set、add、remove、reset、operation等を確認する。'));
    }
    if(/\b(undefined|null)\b/i.test(clean)) issues.push(issue('warn','値の置き忘れを確認','undefined/nullが実際の入力に含まれている。意図したIDや数値か確認する。'));
    if (!issues.length) issues.push(issue('ok','よくあるミスは検出されなかった','この簡易診断で検出できる明らかな問題は見つかりませんでした。','ゲーム内で実行し、チャット・latest.log・function実行結果でも確認してください。'));
    return issues;
  }
  function validateFunction(raw) {
    const issues=[]; const lines=raw.split(/\r?\n/);
    lines.forEach((line,i)=>{
      const t=line.trim(); if(!t || t.startsWith('#')) return;
      if(t.startsWith('/')) issues.push(issue('warn',`行${i+1}：先頭の/`,`functionファイルでは通常、各コマンドの先頭に/を付けずに記述する。`,`行${i+1}：${t.replace(/^\/+/,'')}`));
      for (const check of validateCommand(t)) if (check.severity==='error') issues.push(issue('warn',`行${i+1}：${check.title}`,check.message,check.fix));
      const balance=checkBalanced(t); if(balance) issues.push(issue('error',`行${i+1}：括弧・引用符の不一致`,balance,'{ }、[ ]、( )、シングル/ダブルクォートの対応を確認する。'));
    });
    if(!issues.length) issues.push(issue('ok','簡易チェック完了','行ごとの明らかな問題は検出されませんでした。','ゲーム内で/reloadし、ログも確認してください。'));
    return issues;
  }
  function checkBalanced(text) {
    const stack=[]; let quote=null, escaped=false;
    const pair={')':'(',']':'[','}':'{'};
    for(let i=0;i<text.length;i++){
      const c=text[i];
      if(quote){ if(escaped){escaped=false;continue;} if(c==='\\'){escaped=true;continue;} if(c===quote)quote=null; continue; }
      if(c==='"'||c==="'"){quote=c;continue;}
      if(c==='('||c==='['||c==='{') stack.push({c,i});
      else if(pair[c]){const last=stack.pop();if(!last||last.c!==pair[c])return `位置${i+1}付近の「${c}」に対応する開始記号がない。`;}
    }
    if(quote) return '引用符が閉じられていない。';
    if(stack.length) return `「${stack[stack.length-1].c}」が閉じられていない。`;
    return '';
  }
  function checkJsonSemantics(obj,type) {
    const issues=[];
    const err=(title,msg,fix='')=>issues.push(issue('error',title,msg,fix));
    const warn=(title,msg,fix='')=>issues.push(issue('warn',title,msg,fix));
    if(type==='pack.mcmeta') {
      if(!obj || typeof obj!=='object' || Array.isArray(obj)) err('ルートがオブジェクトではない','pack.mcmetaの最上位はJSONオブジェクト。');
      else {
        if(!obj.pack || typeof obj.pack!=='object') err('packがない','最上位にpackオブジェクトが必要。','{"pack":{"pack_format":48,"description":"My datapack"}}');
        else { if(!Number.isInteger(obj.pack.pack_format)) err('pack_formatが整数ではない','pack.pack_formatに整数を指定する。','Java Edition 1.21.1はpack_format 48。'); else if(obj.pack.pack_format!==48) warn('pack_formatが48ではない',`選択対象はJava 1.21.1（format 48）です。現在値は${obj.pack.pack_format}。`,`1.21.1を対象にするならpack_formatを48にする。`); if(obj.pack.description===undefined) warn('descriptionがない','pack.descriptionを設定するのが一般的。'); }
      }
    } else if(type==='advancement') {
      if(!obj || typeof obj!=='object'||Array.isArray(obj)) err('ルートがオブジェクトではない','進捗JSONの最上位はオブジェクト。');
      else {
        if(!obj.criteria || typeof obj.criteria!=='object' || Array.isArray(obj.criteria) || Object.keys(obj.criteria).length===0) err('criteriaがない/空','進捗には少なくとも1つcriteriaが必要。');
        else Object.entries(obj.criteria).forEach(([name,v])=>{if(!v||typeof v!=='object'||typeof v.trigger!=='string')err(`criteria.${name}.triggerが不正`,'各criterionにtrigger文字列が必要。');});
        if(obj.requirements!==undefined && Array.isArray(obj.requirements) && obj.criteria){for(const group of obj.requirements){if(!Array.isArray(group)) {warn('requirementsの形式','requirementsはcriterion名の配列の配列として指定する。');break;}for(const c of group)if(!(c in obj.criteria))err('requirementsに存在しないcriterionがある',`criteriaに「${c}」が定義されていない。`);}}
        if(obj.rewards?.function && typeof obj.rewards.function==='string'&&!idRe.test(obj.rewards.function))warn('rewards.function IDを確認','function IDはnamespace:path形式か確認する。');
        if(!issues.some(x=>x.severity==='error'))warn('進捗triggerの条件を確認','triggerごとにconditionsの許可フィールドが違う。このツールでは全triggerの完全検証はしない。');
      }
    } else if(type==='recipe') {
      if(!obj||typeof obj!=='object'||Array.isArray(obj)) err('レシピのルートがオブジェクトではない','recipe JSONの最上位はオブジェクト。');
      else {
        if(typeof obj.type!=='string') err('typeがない','レシピのtypeにminecraft:crafting_shapedなどの種類を指定する。');
        if(obj.type==='minecraft:crafting_shaped') { if(!Array.isArray(obj.pattern)||!obj.pattern.length)err('patternがない','crafting_shapedにはpattern配列が必要。');if(!obj.key||typeof obj.key!=='object')err('keyがない','pattern内の記号に対応するkeyを指定する。');else Object.entries(obj.key).forEach(([k,v])=>{if(!v||typeof v!=='object'||(!v.item&&!v.tag))warn(`key.${k}の素材形式を確認`,'Java 1.21.1のレシピ素材は一般に {"item":"minecraft:stone"} またはタグ指定のオブジェクト。','例："key":{"R":{"item":"minecraft:redstone_block"}}');});if(!obj.result||typeof obj.result!=='object'||!obj.result.id)err('result.idがない','1.21.1ではresultにidを指定する。','"result":{"id":"minecraft:diamond","count":1}'); if(Array.isArray(obj.pattern)&&obj.key){const chars=new Set(obj.pattern.join('').replace(/ /g,''));const keys=new Set(Object.keys(obj.key));for(const c of chars)if(!keys.has(c))warn(`patternの記号「${c}」にkeyがない`,'pattern内の記号がkeyに定義されているか確認する。');}}
        if(obj.type==='minecraft:crafting_shapeless'){if(!Array.isArray(obj.ingredients)||!obj.ingredients.length)err('ingredientsがない','crafting_shapelessにはingredients配列が必要。');if(!obj.result||!obj.result.id)err('result.idがない','1.21.1形式のresult.idを確認する。');}
        if(obj.result && typeof obj.result==='object' && 'item' in obj.result && !('id' in obj.result)) warn('古いresult形式の可能性','1.21.1ではresult.itemではなくresult.idを使用する。','"result":{"id":"minecraft:diamond","count":1}');
      }
    } else if(type==='loot_table') {
      if(!obj||typeof obj!=='object'||Array.isArray(obj)) err('ルートテーブルはオブジェクトで指定','最上位はオブジェクト。');
      else if(!Array.isArray(obj.pools)) warn('pools配列がない','ルートテーブルでは一般的にpools配列で抽選を定義する。');
      else obj.pools.forEach((pool,i)=>{if(!pool||typeof pool!=='object')err(`pools[${i}]がオブジェクトではない`,'各poolはオブジェクト。');else {if(pool.rolls===undefined)warn(`pools[${i}].rollsがない`,'poolの抽選回数を指定する。');if(!Array.isArray(pool.entries))warn(`pools[${i}].entriesがない`,'poolにentries配列を指定する。');}});
    } else if(type==='predicate') {
      if(!obj||typeof obj!=='object'||Array.isArray(obj)) err('predicateのルートがオブジェクトではない','述語JSONの最上位はオブジェクト。');
      else if(typeof obj.condition!=='string') err('conditionがない','述語JSONのconditionに条件IDを指定する。','{"condition":"minecraft:random_chance","chance":0.5}');
      else {const need={ 'minecraft:random_chance':['chance'],'minecraft:all_of':['terms'],'minecraft:any_of':['terms'],'minecraft:inverted':['term'],'minecraft:entity_properties':['entity','predicate'],'minecraft:location_check':['predicate'],'minecraft:time_check':['value'],'minecraft:value_check':['value'] }[obj.condition]||[];for(const f of need)if(obj[f]===undefined)err(`${f}が不足`,`${obj.condition}では${f}フィールドが必要になる形式。`);}
    } else if(type==='item_modifier') {
      if(!Array.isArray(obj)) err('item_modifierのルート形式を確認','アイテム修飾子ファイルは多くのバージョン/用途で関数配列の形式。1.21.1の対象形式を確認する。');
      else obj.forEach((x,i)=>{if(!x||typeof x!=='object'||typeof x.function!=='string')err(`[${i}]にfunctionがない`,'各修飾子項目にfunction IDを指定する。');});
    } else if(type==='tag') {
      if(!obj||typeof obj!=='object'||Array.isArray(obj))err('タグのルートがオブジェクトではない','タグJSONはオブジェクト。');
      else {if(obj.values!==undefined&&!Array.isArray(obj.values))err('valuesが配列ではない','valuesはIDを並べる配列。');if(obj.replace!==undefined&&typeof obj.replace!=='boolean')err('replaceが真偽値ではない','replaceはtrue/false。');if(Array.isArray(obj.values))obj.values.forEach((v,i)=>{const id=typeof v==='string'?v:v&&typeof v.id==='string'?v.id:null;if(!id)err(`values[${i}]の形式を確認`,'値はID文字列またはidを持つオブジェクトにする。');else if(!id.startsWith('#')&&!idRe.test(id))warn(`values[${i}]のID形式を確認`,`「${id}」はnamespace:path形式ではない可能性。`);});}
    } else {
      if(!obj || typeof obj!=='object') warn('JSONのルート値を確認','形式によって配列やスカラーを使うJSONもあります。ファイル種別を選択し直してください。');
      warn('一般的なJSON構文のみ確認済み','ファイル固有の必須フィールドは自動検証していません。JSONの型と1.21.1の形式を確認してください。');
    }
    return issues;
  }
  function parseJsonAndDiagnose(raw,type) {
    let obj;
    try { obj=JSON.parse(raw); }
    catch(e) {
      const msg=String(e.message||e); const m=msg.match(/position\s+(\d+)/i); const pos=m?Number(m[1]):null;
      if(pos!==null){const lc=locForPos(raw,pos);const from=Math.max(0,pos-45),to=Math.min(raw.length,pos+45);return [issue('error','JSON構文エラー',`${msg}\n位置：${lc.line}行 ${lc.col}列`,'付近の内容：\n'+raw.slice(from,to)+'\n'+(' '.repeat(Math.min(pos-from,45))+'^')+'\nカンマ、引用符、括弧、末尾カンマなどを確認する。')];}
      return [issue('error','JSON構文エラー',msg,'ダブルクォート、カンマ、波括弧、配列の閉じ方を確認する。')];
    }
    const found=checkJsonSemantics(obj,type); return found.length ? found : [issue('ok','基本チェックを通過','JSON構文と、この形式の代表的な項目に明らかな問題は見つかりませんでした。','このツールは全フィールドの完全検証ではありません。ゲーム内で/reloadし、ログも確認してください。')];
  }
  function showIssues(issues) {
    const errors=issues.filter(x=>x.severity==='error').length, warns=issues.filter(x=>x.severity==='warn').length, oks=issues.filter(x=>x.severity==='ok').length;
    $('diagSummary').textContent=errors ? `診断結果：問題 ${errors} 件、確認推奨 ${warns} 件` : warns ? `診断結果：確認推奨 ${warns} 件。致命的な問題は検出されませんでした。` : oks ? '診断結果：簡易チェックで明らかな問題は検出されませんでした。' : '診断結果：項目を確認してください。';
    $('diagResults').innerHTML=issues.map(x=>`<article class="tool-card"><span class="severity ${esc(x.severity)}">${x.severity==='error'?'問題':x.severity==='warn'?'確認推奨':'OK'}</span><h3>${esc(x.title)}</h3><p>${esc(x.message).replace(/\n/g,'<br>')}</p>${x.fix?`<pre>${esc(x.fix)}</pre>`:''}${x.fix?btnCopy(x.fix):''}</article>`).join('');
  }
  function runDiagnostic() {
    const kind=$('diagType').value, raw=$('diagInput').value;
    let issues=[];
    if(kind==='command') issues=validateCommand(raw);
    else if(kind==='function') issues=validateFunction(raw);
    else if(kind==='path') issues=validatePath($('diagPath').value || raw);
    else {
      if(!raw.trim()){showIssues([issue('error','JSONが空','診断するJSONを貼り付けるか、例を挿入してください。')]);return;}
      const type=getJsonType(); issues=parseJsonAndDiagnose(raw,type);
    }
    const path=$('diagPath').value.trim();
    if(path && ['json','function'].includes(kind)) issues=[...validatePath(path),...issues];
    showIssues(issues);
  }
  const jsonExamples={
    'pack.mcmeta':`{\n  "pack": {\n    "pack_format": 48,\n    "description": "My Java 1.21.1 datapack"\n  }\n}`,
    advancement:`{\n  "criteria": {\n    "get_diamond": {\n      "trigger": "minecraft:inventory_changed",\n      "conditions": { "items": [{ "items": ["minecraft:diamond"] }] }\n    }\n  }\n}`,
    recipe:`{\n  "type": "minecraft:crafting_shaped",\n  "pattern": ["RRR", "RRR", "RRR"],\n  "key": { "R": { "item": "minecraft:redstone_block" } },\n  "result": { "id": "minecraft:diamond_block", "count": 1 }\n}`,
    loot_table:`{\n  "type": "minecraft:generic",\n  "pools": [{\n    "rolls": 1,\n    "entries": [{ "type": "minecraft:item", "name": "minecraft:emerald" }]\n  }]\n}`,
    predicate:`{ "condition": "minecraft:random_chance", "chance": 0.5 }`,
    item_modifier:`[{ "function": "minecraft:set_count", "count": 2 }]`,
    tag:`{ "replace": false, "values": ["minecraft:stone", "minecraft:deepslate"] }`,
    generic:`{\n  "example": true,\n  "id": "example:value"\n}`
  };
  function updateDiagInputs(){ $('jsonKindWrap').classList.toggle('hidden', $('diagType').value!=='json'); }
  document.querySelectorAll('#modeTabs button').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('#modeTabs button').forEach(x=>x.classList.toggle('active',x===b));
    ['searchMode','reverseMode','errorMode'].forEach(id=>$(id).classList.toggle('hidden',id!==b.dataset.mode));
  }));
  $('reverseButton').addEventListener('click',()=>runReverse($('reverseQuery').value));
  $('reverseQuery').addEventListener('keydown',e=>{if(e.key==='Enter')runReverse($('reverseQuery').value)});
  $('reverseExamples').addEventListener('click',e=>{const b=e.target.closest('[data-goal]');if(!b)return;$('reverseQuery').value=b.dataset.goal;runReverse(b.dataset.goal)});
  $('diagType').addEventListener('change',updateDiagInputs);
  $('diagnoseButton').addEventListener('click',runDiagnostic);
  $('clearDiag').addEventListener('click',()=>{$('diagInput').value='';$('diagPath').value='';$('diagSummary').textContent='入力したら「診断する」を押してね。';$('diagResults').innerHTML='';});
  $('fillJsonExample').addEventListener('click',()=>{const t=getJsonType();$('diagInput').value=jsonExamples[t]||jsonExamples.generic;if(t==='pack.mcmeta')$('diagPath').value='pack.mcmeta';else if(t!=='generic')$('diagPath').value=`data/example/${t==='tag'?'tags/item':t}/sample.json`;});
  document.addEventListener('click', async e=>{
    const copy=e.target.closest('[data-tool-copy]');
    if(copy){try{await navigator.clipboard.writeText(copy.dataset.toolCopy);const old=copy.textContent;copy.textContent='コピーしました';setTimeout(()=>{copy.textContent=old},1500);}catch{const ta=document.createElement('textarea');ta.value=copy.dataset.toolCopy;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');copy.textContent='コピーしました';}catch{}ta.remove();}return;}
    const send=e.target.closest('[data-diagnose-snippet]');
    if(send){const snippet=send.dataset.diagnoseSnippet;const diagType=send.dataset.diagnoseType || ((snippet.trim().startsWith('{')||snippet.trim().startsWith('['))?'json':'function');$('diagType').value=diagType;updateDiagInputs();$('diagInput').value=snippet;$('diagPath').value=send.dataset.diagnosePath||'';if(diagType==='json'){const path=$('diagPath').value;const match=path.match(/\/(advancement|recipe|loot_table|predicate|item_modifier)\//);if(path.endsWith('pack.mcmeta'))$('jsonKind').value='pack.mcmeta';else if(match)$('jsonKind').value=match[1];else if(path.includes('/tags/'))$('jsonKind').value='tag';else $('jsonKind').value='auto';}document.querySelector('#modeTabs button[data-mode="errorMode"]').click();runDiagnostic();}
  });
  updateDiagInputs();
  console.info('[Minecraft SEARCH tools] reverse lookup and diagnostics ready');
})();
