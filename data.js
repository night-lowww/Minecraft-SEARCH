// Minecraft SEARCH data.js — Wikiベースの構造化データパックリファレンス
// 対象: Java Edition 1.21.1 / data pack format 48
// Wiki文章の全文転載ではなく、見出し・構造・フィールド・実例を検索可能な項目に要約。
// 関連する公開データは下の拡張ローダーでも取り込みます。
const database = [
  {
    "name": "/advancement",
    "kind": "command",
    "description": "進捗の付与・取り消し・確認",
    "syntax": "/advancement grant <targets> only <advancement>",
    "tags": [
      "データパック"
    ],
    "details": "grant/revokeとeverything/from/through/until/onlyを組み合わせる。"
  },
  {
    "name": "/attribute",
    "kind": "command",
    "description": "エンティティ属性の取得・変更",
    "syntax": "/attribute <target> <attribute> <get|base|modifier>",
    "tags": [
      "エンティティ"
    ],
    "details": "属性値の取得、基礎値変更、modifierの操作。"
  },
  {
    "name": "/bossbar",
    "kind": "command",
    "description": "ボスバーを作成・変更",
    "syntax": "/bossbar <add|remove|list|set|get>",
    "tags": [
      "RPG"
    ],
    "details": "HPゲージやイベント進行表示に使う。"
  },
  {
    "name": "/clear",
    "kind": "command",
    "description": "インベントリのアイテムを消去",
    "syntax": "/clear [<targets>] [<item>] [<maxCount>]",
    "tags": [
      "基本",
      "アイテム"
    ],
    "details": "対象、アイテム、最大個数を指定。"
  },
  {
    "name": "/clone",
    "kind": "command",
    "description": "ブロック領域を複製",
    "syntax": "/clone <begin> <end> <destination> [<maskMode>] [<cloneMode>]",
    "tags": [
      "基本"
    ],
    "details": "建築物のコピーに使用。"
  },
  {
    "name": "/damage",
    "kind": "command",
    "description": "対象にダメージを与える",
    "syntax": "/damage <target> <amount> [<damageType>]",
    "tags": [
      "エンティティ"
    ],
    "details": "ダメージ種別や原因エンティティも指定可能。"
  },
  {
    "name": "/data",
    "kind": "command",
    "description": "エンティティ・ブロック・ストレージのデータを操作",
    "syntax": "/data <get|merge|remove|modify> <entity|block|storage>",
    "tags": [
      "データパック"
    ],
    "details": "NBTデータの取得・変更。"
  },
  {
    "name": "/datapack",
    "kind": "command",
    "description": "データパックを管理",
    "syntax": "/datapack <enable|disable|list>",
    "tags": [
      "データパック"
    ],
    "details": "有効化、無効化、読み込み状況の確認。"
  },
  {
    "name": "/difficulty",
    "kind": "command",
    "description": "ワールド難易度を設定",
    "syntax": "/difficulty <peaceful|easy|normal|hard>",
    "tags": [
      "基本"
    ],
    "details": "難易度を変更。"
  },
  {
    "name": "/effect",
    "kind": "command",
    "description": "状態効果を付与・解除",
    "syntax": "/effect <give|clear>",
    "tags": [
      "エンティティ"
    ],
    "details": "効果、時間、増幅値、パーティクル表示を指定。"
  },
  {
    "name": "/enchant",
    "kind": "command",
    "description": "アイテムにエンチャントを付与",
    "syntax": "/enchant <targets> <enchantment> [<level>]",
    "tags": [
      "アイテム"
    ],
    "details": "対象の持つアイテムに付与。"
  },
  {
    "name": "/execute",
    "kind": "command",
    "description": "実行条件・位置・実行者を変えてコマンドを実行",
    "syntax": "/execute <subcommand> ... run <command>",
    "tags": [
      "条件分岐",
      "エンティティ"
    ],
    "details": "as/at/positioned/rotated/facing/align/anchored/in/on/summon/if/unless/storeなどを連結。"
  },
  {
    "name": "/experience",
    "kind": "command",
    "description": "経験値を追加・設定・確認",
    "syntax": "/experience <add|set|query>",
    "tags": [
      "基本"
    ],
    "details": "xpは別名。"
  },
  {
    "name": "/fill",
    "kind": "command",
    "description": "領域をブロックで埋める",
    "syntax": "/fill <from> <to> <block> [<replace|destroy|hollow|outline|keep>]",
    "tags": [
      "基本"
    ],
    "details": "建築や地形生成。"
  },
  {
    "name": "/fillbiome",
    "kind": "command",
    "description": "領域のバイオームを変更",
    "syntax": "/fillbiome <from> <to> <biome> [<replace|keep>]",
    "tags": [
      "基本"
    ],
    "details": "指定領域のバイオームを変更。"
  },
  {
    "name": "/forceload",
    "kind": "command",
    "description": "チャンクの強制読み込みを管理",
    "syntax": "/forceload <add|remove|query>",
    "tags": [
      "データパック"
    ],
    "details": "装置や処理の常時稼働に利用。"
  },
  {
    "name": "/function",
    "kind": "command",
    "description": "データパックの関数を実行",
    "syntax": "/function <function> [with <data source>]",
    "tags": [
      "データパック"
    ],
    "details": "名前空間付き関数IDを指定。"
  },
  {
    "name": "/gamemode",
    "kind": "command",
    "description": "ゲームモードを変更",
    "syntax": "/gamemode <survival|creative|adventure|spectator> [<target>]",
    "tags": [
      "基本"
    ],
    "details": "対象プレイヤーのモードを変更。"
  },
  {
    "name": "/gamerule",
    "kind": "command",
    "description": "ゲームルールを取得・設定",
    "syntax": "/gamerule <rule> [<value>]",
    "tags": [
      "基本"
    ],
    "details": "ルールごとに値の型が異なる。"
  },
  {
    "name": "/give",
    "kind": "command",
    "description": "アイテムを与える",
    "syntax": "/give <targets> <item> [<count>]",
    "tags": [
      "基本",
      "アイテム"
    ],
    "details": "アイテムIDと個数を指定。"
  },
  {
    "name": "/item",
    "kind": "command",
    "description": "スロットのアイテムを操作",
    "syntax": "/item <ターゲットスロット> <replace|modify> ...",
    "tags": [
      "アイテム"
    ],
    "details": "replace/modify/fromなどを使用。"
  },
  {
    "name": "/kill",
    "kind": "command",
    "description": "エンティティを倒す・削除する",
    "syntax": "/kill [<targets>]",
    "tags": [
      "エンティティ"
    ],
    "details": "対象を省略すると実行者が対象。"
  },
  {
    "name": "/locate",
    "kind": "command",
    "description": "構造物・バイオーム・POIを探す",
    "syntax": "/locate <structure|biome|poi> <id>",
    "tags": [
      "基本"
    ],
    "details": "最寄りの対象を検索。"
  },
  {
    "name": "/loot",
    "kind": "command",
    "description": "ルートテーブルの結果を取得・配布",
    "syntax": "/loot <spawn|give|insert|replace> ...",
    "tags": [
      "アイテム",
      "データパック"
    ],
    "details": "ルートテーブルを利用した報酬生成。"
  },
  {
    "name": "/particle",
    "kind": "command",
    "description": "パーティクルを表示",
    "syntax": "/particle <name> [<pos>] [<delta>] [<speed>] [<count>] [<normal|force>]",
    "tags": [
      "エンティティ"
    ],
    "details": "演出や視覚化に利用。"
  },
  {
    "name": "/place",
    "kind": "command",
    "description": "フィーチャーや構造物を配置",
    "syntax": "/place <feature|jigsaw|structure|template> ...",
    "tags": [
      "データパック"
    ],
    "details": "ワールド生成要素を指定位置に配置。"
  },
  {
    "name": "/playsound",
    "kind": "command",
    "description": "サウンドを再生",
    "syntax": "/playsound <sound> <source> <targets> [<pos>] [<volume>] [<pitch>] [<minVolume>]",
    "tags": [
      "エンティティ"
    ],
    "details": "カテゴリ、音量、ピッチを指定。"
  },
  {
    "name": "/recipe",
    "kind": "command",
    "description": "レシピを解放・取り消し",
    "syntax": "/recipe <give|take> <targets> [<recipe>]",
    "tags": [
      "データパック"
    ],
    "details": "プレイヤーにレシピを解放。"
  },
  {
    "name": "/reload",
    "kind": "command",
    "description": "データパックを再読み込み",
    "syntax": "/reload",
    "tags": [
      "データパック"
    ],
    "details": "関数やJSONの変更を反映。"
  },
  {
    "name": "/return",
    "kind": "command",
    "description": "関数から戻り値・終了状態を返す",
    "syntax": "/return <run|fail|value> ...",
    "tags": [
      "データパック"
    ],
    "details": "関数から呼び出し元へ値や状態を返す。"
  },
  {
    "name": "/ride",
    "kind": "command",
    "description": "エンティティの乗車関係を操作",
    "syntax": "/ride <target> <start_riding|stop_riding> ...",
    "tags": [
      "エンティティ"
    ],
    "details": "乗る・降りる動作を制御。"
  },
  {
    "name": "/schedule",
    "kind": "command",
    "description": "関数を後で実行する予約を管理",
    "syntax": "/schedule <function> <time> [append|replace]",
    "tags": [
      "データパック"
    ],
    "details": "時間指定で関数を遅延実行。"
  },
  {
    "name": "/scoreboard",
    "kind": "command",
    "description": "スコアボード目標とスコアを管理",
    "syntax": "/scoreboard <objectives|players> ...",
    "tags": [
      "スコア"
    ],
    "details": "カウンター、状態管理、演算、表示スロット。"
  },
  {
    "name": "/setblock",
    "kind": "command",
    "description": "ブロックを設置",
    "syntax": "/setblock <pos> <block> [destroy|keep|replace]",
    "tags": [
      "基本"
    ],
    "details": "単一座標のブロックを変更。"
  },
  {
    "name": "/spawnpoint",
    "kind": "command",
    "description": "プレイヤーのリスポーン地点を設定",
    "syntax": "/spawnpoint [<targets>] [<pos>] [<angle>]",
    "tags": [
      "エンティティ"
    ],
    "details": "プレイヤー別に設定。"
  },
  {
    "name": "/spreadplayers",
    "kind": "command",
    "description": "対象を範囲内に分散配置",
    "syntax": "/spreadplayers <center> <spreadDistance> <maxRange> <under> <targets>",
    "tags": [
      "エンティティ"
    ],
    "details": "プレイヤーやエンティティをばらけさせる。"
  },
  {
    "name": "/stopsound",
    "kind": "command",
    "description": "サウンド再生を停止",
    "syntax": "/stopsound <targets> [<source>] [<sound>]",
    "tags": [
      "エンティティ"
    ],
    "details": "対象やサウンドカテゴリを指定。"
  },
  {
    "name": "/summon",
    "kind": "command",
    "description": "エンティティを召喚",
    "syntax": "/summon <entity> [<pos>] [<nbt>]",
    "tags": [
      "エンティティ"
    ],
    "details": "位置やNBTを指定。"
  },
  {
    "name": "/tag",
    "kind": "command",
    "description": "エンティティタグを管理",
    "syntax": "/tag <targets> <add|remove|list>",
    "tags": [
      "エンティティ",
      "条件分岐"
    ],
    "details": "対象の識別に利用。"
  },
  {
    "name": "/team",
    "kind": "command",
    "description": "チームを管理",
    "syntax": "/team <add|remove|empty|join|leave|list|modify>",
    "tags": [
      "エンティティ"
    ],
    "details": "色、表示名、衝突などを設定。"
  },
  {
    "name": "/teleport",
    "kind": "command",
    "description": "エンティティをテレポート",
    "syntax": "/teleport <targets> <destination>",
    "tags": [
      "エンティティ"
    ],
    "details": "tpは別名。座標や対象を指定。"
  },
  {
    "name": "/tellraw",
    "kind": "command",
    "description": "JSONテキストをチャット表示",
    "syntax": "/tellraw <targets> <message>",
    "tags": [
      "データパック"
    ],
    "details": "色付きテキストなどに利用。"
  },
  {
    "name": "/time",
    "kind": "command",
    "description": "ワールド時刻を取得・変更",
    "syntax": "/time <set|add|query>",
    "tags": [
      "基本"
    ],
    "details": "昼夜サイクルを操作。"
  },
  {
    "name": "/title",
    "kind": "command",
    "description": "画面タイトル・字幕を表示",
    "syntax": "/title <targets> <clear|reset|title|subtitle|actionbar|times>",
    "tags": [
      "RPG"
    ],
    "details": "演出や通知に利用。"
  },
  {
    "name": "/trigger",
    "kind": "command",
    "description": "trigger型スコアを変更",
    "syntax": "/trigger <objective> <add|set> [<value>]",
    "tags": [
      "スコア"
    ],
    "details": "プレイヤーが許可されたtrigger目標を操作。"
  },
  {
    "name": "/weather",
    "kind": "command",
    "description": "天候を変更",
    "syntax": "/weather <clear|rain|thunder> [<duration>]",
    "tags": [
      "基本"
    ],
    "details": "天候と継続時間を設定。"
  },
  {
    "name": "/worldborder",
    "kind": "command",
    "description": "ワールド境界を管理",
    "syntax": "/worldborder <set|add|center|damage|warning|get>",
    "tags": [
      "基本"
    ],
    "details": "境界サイズや警告を設定。"
  },
  {
    "name": "/xp",
    "kind": "command",
    "description": "経験値を追加・設定・確認",
    "syntax": "/xp <add|set|query>",
    "tags": [
      "基本"
    ],
    "details": "experienceの別名。"
  },
  {
    "name": "pack.mcmeta",
    "kind": "file",
    "description": "データパックのメタデータ",
    "syntax": "pack.mcmeta",
    "tags": [
      "データパック"
    ],
    "details": "pack_formatは対象バージョンに合わせる。"
  },
  {
    "name": "functionファイル",
    "kind": "file",
    "description": "複数コマンドをまとめる関数",
    "syntax": "data/<namespace>/function/<name>.mcfunction",
    "tags": [
      "データパック"
    ],
    "details": "1.21.1ではfunctionフォルダ名は単数形。コマンドを1行ずつ書く。"
  },
  {
    "name": "tick.json",
    "kind": "file",
    "description": "毎tick実行する関数タグ",
    "syntax": "data/minecraft/tags/function/tick.json",
    "tags": [
      "データパック"
    ],
    "details": "values配列に関数IDを指定。"
  },
  {
    "name": "load.json",
    "kind": "file",
    "description": "読み込み時に実行する関数タグ",
    "syntax": "data/minecraft/tags/function/load.json",
    "tags": [
      "データパック"
    ],
    "details": "データパック読み込み時の初期化に使用。"
  },
  {
    "name": "advancement JSON",
    "kind": "file",
    "description": "進捗定義",
    "syntax": "data/<namespace>/advancement/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "criteria、display、requirements、rewardsなど。"
  },
  {
    "name": "recipe JSON",
    "kind": "file",
    "description": "レシピ定義",
    "syntax": "data/<namespace>/recipe/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "1.21.1ではrecipeフォルダ。形式はレシピ種別に依存。"
  },
  {
    "name": "loot_table JSON",
    "kind": "file",
    "description": "ルートテーブル定義",
    "syntax": "data/<namespace>/loot_table/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "pools、entries、conditions、functionsなど。"
  },
  {
    "name": "predicate JSON",
    "kind": "file",
    "description": "条件判定定義",
    "syntax": "data/<namespace>/predicate/<name>.json",
    "tags": [
      "データパック",
      "条件分岐"
    ],
    "details": "条件をJSONとして定義する。"
  },
  {
    "name": "item_modifier JSON",
    "kind": "file",
    "description": "アイテム修飾定義",
    "syntax": "data/<namespace>/item_modifier/<name>.json",
    "tags": [
      "データパック",
      "アイテム"
    ],
    "details": "ルートテーブル関数群でアイテムを加工。"
  },
  {
    "name": "damage_type JSON",
    "kind": "file",
    "description": "ダメージ種別定義",
    "syntax": "data/<namespace>/damage_type/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "データ駆動のダメージ種別。"
  },
  {
    "name": "enchantment JSON",
    "kind": "file",
    "description": "エンチャント定義",
    "syntax": "data/<namespace>/enchantment/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "1.21系のデータ駆動エンチャント。"
  },
  {
    "name": "ブロックタグ",
    "kind": "file",
    "description": "ブロックタグJSON",
    "syntax": "data/<namespace>/tags/block/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "values配列にブロックIDやタグ参照を記述。"
  },
  {
    "name": "アイテムタグ",
    "kind": "file",
    "description": "アイテムタグJSON",
    "syntax": "data/<namespace>/tags/item/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "values配列にアイテムIDやタグ参照を記述。"
  },
  {
    "name": "エンティティタイプタグ",
    "kind": "file",
    "description": "エンティティタイプタグJSON",
    "syntax": "data/<namespace>/tags/entity_type/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "エンティティ種別をグループ化。"
  },
  {
    "name": "関数タグ",
    "kind": "file",
    "description": "関数タグJSON",
    "syntax": "data/<namespace>/tags/function/<name>.json",
    "tags": [
      "データパック"
    ],
    "details": "tick/loadなどの関数グループを定義。"
  },
  {
    "name": "tick関数登録",
    "kind": "example",
    "description": "毎tickの処理を関数タグに登録",
    "syntax": "data/minecraft/tags/function/tick.json: {\"values\":[\"example:tick\"]}",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "data/example/function/tick.mcfunctionを作り、tick.jsonから登録。"
  },
  {
    "name": "load関数登録",
    "kind": "example",
    "description": "読み込み時の初期化関数を登録",
    "syntax": "data/minecraft/tags/function/load.json: {\"values\":[\"example:load\"]}",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "目標作成など読み込み時に実行する処理を置く。"
  },
  {
    "name": "スコア目標の作成",
    "kind": "example",
    "description": "カウンター用の目標を作る",
    "syntax": "scoreboard objectives add example dummy",
    "tags": [
      "スコア"
    ],
    "details": "同名目標が存在すると作成に失敗する。"
  },
  {
    "name": "タグで対象を判定",
    "kind": "example",
    "description": "特定のエンティティだけを処理",
    "syntax": "execute as @e[tag=target] at @s run particle minecraft:happy_villager ~ ~1 ~ 0 0 0 0 1",
    "tags": [
      "エンティティ",
      "条件分岐"
    ],
    "details": "事前にtagコマンドでタグを付与する。"
  },
  {
    "name": "色付き通知",
    "kind": "example",
    "description": "チャットに色付きメッセージを表示",
    "syntax": "tellraw @a {\"text\":\"イベント開始！\",\"color\":\"gold\",\"bold\":true}",
    "tags": [
      "データパック",
      "RPG"
    ],
    "details": "JSONテキストコンポーネントを使う。"
  },
  {
    "name": "スコア条件分岐",
    "kind": "example",
    "description": "スコア値を範囲で判定",
    "syntax": "execute if score @s example matches 1.. run say 条件成立",
    "tags": [
      "条件分岐",
      "スコア"
    ],
    "details": "matchesで数値範囲を指定。"
  },
  {
    "name": "関数を実行",
    "kind": "example",
    "description": "名前空間付き関数を呼び出す",
    "syntax": "function example:main",
    "tags": [
      "データパック"
    ],
    "details": "関数IDはnamespace:path形式。"
  },
  {
    "name": "データパックとは",
    "kind": "file",
    "description": "Java Editionのワールドへデータ定義を追加・上書きする仕組み",
    "syntax": "",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "データパックはフォルダまたはZIPで配置できる。バニラ側の定義も同種の仕組みで読み込まれる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックの配置先",
    "kind": "file",
    "description": "ワールドごとのdatapacksフォルダに入れる",
    "syntax": ".minecraft/saves/<ワールド名>/datapacks/",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "フォルダ形式とZIP形式のどちらでもよい。ワールド作成時のデータパック選択画面からも追加可能。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックの必須ファイル",
    "kind": "file",
    "description": "ルート直下のpack.mcmetaが必須",
    "syntax": "pack.mcmeta",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "pack.pngは任意で、選択画面のサムネイル用途。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックの名前空間",
    "kind": "file",
    "description": "data/<namespace>/以下でIDの衝突を避ける",
    "syntax": "data/<namespace>/<registry>/<path>.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "namespaceとpathはResource Locationの一部。minecraft名前空間はバニラ定義の上書きにも使われる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックのロード順",
    "kind": "file",
    "description": "優先順位の高いパックの定義が前の定義を上書きする",
    "syntax": "/datapack list enabled",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "ロード順は作成画面や/datapackコマンドで確認・変更できる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "同じパスのファイルが複数ある場合",
    "kind": "file",
    "description": "後から読み込まれたパックの同名ファイルが採用される",
    "syntax": "data/minecraft/recipe/example.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "通常の同一ファイルは置き換えになる。タグファイルはreplace設定によって結合動作が異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "タグファイルのマージ",
    "kind": "file",
    "description": "replaceがtrueでないタグは前のパックの値を引き継いで結合する",
    "syntax": "{\"replace\":false,\"values\":[\"minecraft:stone\"]}",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "replace:trueを使うとそれ以前のタグ内容を置き換える。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックの再読み込み",
    "kind": "file",
    "description": "対応するデータを/reloadで読み直す",
    "syntax": "/reload",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "関数、タグ、レシピ、進捗、ルートテーブル、述語などの変更は通常再読み込み対象。実験的な動的レジストリ等はワールド再起動が必要。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "実験的機能を含むデータパック",
    "kind": "file",
    "description": "実験的なフォルダに有効な定義を含むと警告の対象になる",
    "syntax": "data/<namespace>/worldgen/",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "対象機能は実行バージョンによって異なる。1.21.1ではディメンションやワールド生成系などを特に注意する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックのセーフモード",
    "kind": "file",
    "description": "データ読み込みに致命的な不整合がある場合に全パックを無効にして起動を試せる",
    "syntax": "Safe Mode",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "バニラのデータパックを残して起動し、破損した定義を修正するための手段。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "関数ファイルの拡張子",
    "kind": "file",
    "description": "コマンド列は.mcfunctionファイルに記述する",
    "syntax": ".mcfunction",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "ファイル内は1行につきコマンド1つ。通常は先頭にスラッシュを付けない。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "構造ファイルの拡張子",
    "kind": "file",
    "description": "保存構造は.nbtファイルで表す",
    "syntax": ".nbt",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "structureフォルダに置き、structureブロック等で保存した構造を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "タグのファイル位置",
    "kind": "file",
    "description": "レジストリの集合はtags配下に置く",
    "syntax": "data/<namespace>/tags/<registry>/<path>.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "タグIDは#<namespace>:<path>として参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "複数namespaceの利用",
    "kind": "file",
    "description": "data配下に複数のnamespaceフォルダを置ける",
    "syntax": "data/example/",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "別の作品や機能ごとに名前空間を分けるとID衝突を避けやすい。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "pack.png",
    "kind": "file",
    "description": "データパック選択画面で表示する画像",
    "syntax": "pack.png",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "任意ファイル。pack.mcmetaと同じルートに配置する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "バニラ定義の上書き",
    "kind": "file",
    "description": "minecraft namespaceで同じIDのファイルを定義すると既存定義を置換できる",
    "syntax": "data/minecraft/loot_table/chests/simple_dungeon.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "上書き対象のバージョンに合ったファイル形式を用いる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "関数タグの読み込み時実行",
    "kind": "file",
    "description": "minecraft:loadタグに入れた関数はデータパック読み込み時に実行される",
    "syntax": "data/minecraft/tags/function/load.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "初期化処理やスコアボードobjective作成などに利用する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "関数タグの毎tick実行",
    "kind": "file",
    "description": "minecraft:tickタグに入れた関数はゲームtickごとに実行される",
    "syntax": "data/minecraft/tags/function/tick.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "毎tick処理には負荷がかかるので、頻度を下げる工夫も検討する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "pack format 48",
    "kind": "file",
    "description": "Java Edition 1.21～1.21.1のデータパック形式番号",
    "syntax": "\"pack_format\": 48",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "1.21.1向けパックではpack.mcmetaのpack_formatを48にする。異なる版では必ず対象版を確認する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "オーバーレイの扱い",
    "kind": "file",
    "description": "新しい版ではpack overlaysが使われるが1.21.1用の基本構成とは分けて考える",
    "syntax": "pack.mcmeta → overlays",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "新しい版のpack.mcmetaを1.21.1にそのまま持ち込まない。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: advancement",
    "kind": "file",
    "description": "進捗の条件・表示・報酬",
    "syntax": "data/<namespace>/advancement/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。JSON。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: advancement",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/advancement/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。JSON。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: banner_pattern",
    "kind": "file",
    "description": "旗模様の定義",
    "syntax": "data/<namespace>/banner_pattern/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。実験的ではない機能。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: banner_pattern",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/banner_pattern/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。実験的ではない機能。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: chat_type",
    "kind": "file",
    "description": "チャット表示の形式",
    "syntax": "data/<namespace>/chat_type/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。チャットコンポーネント。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: chat_type",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/chat_type/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。チャットコンポーネント。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: damage_type",
    "kind": "file",
    "description": "ダメージ属性や死亡メッセージ用情報",
    "syntax": "data/<namespace>/damage_type/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.19.4以降のデータ定義。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: damage_type",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/damage_type/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.19.4以降のデータ定義。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: dimension",
    "kind": "file",
    "description": "ディメンションの生成と環境設定",
    "syntax": "data/<namespace>/dimension/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。実験的機能として扱われる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: dimension",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/dimension/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。実験的機能として扱われる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: dimension_type",
    "kind": "file",
    "description": "ディメンションの物理的特性",
    "syntax": "data/<namespace>/dimension_type/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。実験的機能として扱われる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: dimension_type",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/dimension_type/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。実験的機能として扱われる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: enchantment",
    "kind": "file",
    "description": "エンチャントの効果や適用条件",
    "syntax": "data/<namespace>/enchantment/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21でデータ駆動化。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: enchantment",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/enchantment/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21でデータ駆動化。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: enchantment_provider",
    "kind": "file",
    "description": "用途別のエンチャント選択定義",
    "syntax": "data/<namespace>/enchantment_provider/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。エンチャントの選択をデータ定義する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: enchantment_provider",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/enchantment_provider/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。エンチャントの選択をデータ定義する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: item_modifier",
    "kind": "file",
    "description": "アイテムスタックに適用する変更処理",
    "syntax": "data/<namespace>/item_modifier/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。/itemやloot tableから参照できる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: item_modifier",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/item_modifier/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。/itemやloot tableから参照できる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: jukebox_song",
    "kind": "file",
    "description": "ジュークボックス用の楽曲情報",
    "syntax": "data/<namespace>/jukebox_song/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21でカスタム定義に対応。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: jukebox_song",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/jukebox_song/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21でカスタム定義に対応。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: loot_table",
    "kind": "file",
    "description": "宝箱・ブロック・Mobなどから出るアイテム",
    "syntax": "data/<namespace>/loot_table/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21では単数形loot_table。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: loot_table",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/loot_table/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21では単数形loot_table。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: painting_variant",
    "kind": "file",
    "description": "絵画のサイズや画像バリアント",
    "syntax": "data/<namespace>/painting_variant/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21でデータ駆動化。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: painting_variant",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/painting_variant/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21でデータ駆動化。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: predicate",
    "kind": "file",
    "description": "条件を組み合わせて真偽判定する定義",
    "syntax": "data/<namespace>/predicate/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。ルートテーブル等から利用する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: predicate",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/predicate/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。ルートテーブル等から利用する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: recipe",
    "kind": "file",
    "description": "クラフト・精錬などのレシピ",
    "syntax": "data/<namespace>/recipe/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21では単数形recipe。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: recipe",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/recipe/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21では単数形recipe。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: structure",
    "kind": "file",
    "description": "構造物テンプレートを参照する定義",
    "syntax": "data/<namespace>/structure/<id>.nbt",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。保存した構造のバイナリデータ。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: structure",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/structure/<id>.nbt",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。保存した構造のバイナリデータ。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: tags/advancement",
    "kind": "file",
    "description": "進捗IDをグループ化するタグ",
    "syntax": "data/<namespace>/tags/advancement/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。タグ対象の種類がadvancement。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: tags/advancement",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/tags/advancement/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。タグ対象の種類がadvancement。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: tags/block",
    "kind": "file",
    "description": "ブロックIDの集合",
    "syntax": "data/<namespace>/tags/block/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21では単数形block。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: tags/block",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/tags/block/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21では単数形block。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: tags/entity_type",
    "kind": "file",
    "description": "エンティティ種類の集合",
    "syntax": "data/<namespace>/tags/entity_type/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21では単数形entity_type。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: tags/entity_type",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/tags/entity_type/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21では単数形entity_type。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: tags/fluid",
    "kind": "file",
    "description": "流体IDの集合",
    "syntax": "data/<namespace>/tags/fluid/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21では単数形fluid。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: tags/fluid",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/tags/fluid/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21では単数形fluid。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: tags/function",
    "kind": "file",
    "description": "関数IDの集合・イベントフック",
    "syntax": "data/<namespace>/tags/function/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。load/tickが代表例。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: tags/function",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/tags/function/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。load/tickが代表例。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: tags/game_event",
    "kind": "file",
    "description": "ゲームイベントIDの集合",
    "syntax": "data/<namespace>/tags/game_event/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21では単数形game_event。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: tags/game_event",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/tags/game_event/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21では単数形game_event。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: tags/item",
    "kind": "file",
    "description": "アイテムIDの集合",
    "syntax": "data/<namespace>/tags/item/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。1.21では単数形item。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: tags/item",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/tags/item/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。1.21では単数形item。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: trim_material",
    "kind": "file",
    "description": "鍛冶型で使う防具装飾の素材",
    "syntax": "data/<namespace>/trim_material/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。素材名・色・素材アイテム等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: trim_material",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/trim_material/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。素材名・色・素材アイテム等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: trim_pattern",
    "kind": "file",
    "description": "防具装飾の模様定義",
    "syntax": "data/<namespace>/trim_pattern/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1で使用するファイル種別。模様名や模様アセット等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: trim_pattern",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/trim_pattern/<id>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。模様名や模様アセット等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/biome",
    "kind": "file",
    "description": "バイオームの特徴・生成設定",
    "syntax": "data/<namespace>/worldgen/biome/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。環境・生成・音・色など。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/biome",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/biome/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。環境・生成・音・色など。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/configured_carver",
    "kind": "file",
    "description": "洞窟等の地形を削る処理の設定",
    "syntax": "data/<namespace>/worldgen/configured_carver/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。configured carver ID。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/configured_carver",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/configured_carver/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。configured carver ID。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/configured_feature",
    "kind": "file",
    "description": "地形生成featureのパラメータ",
    "syntax": "data/<namespace>/worldgen/configured_feature/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。feature種類とconfigを指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/configured_feature",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/configured_feature/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。feature種類とconfigを指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/density_function",
    "kind": "file",
    "description": "地形値を計算する関数定義",
    "syntax": "data/<namespace>/worldgen/density_function/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。密度関数を組み合わせる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/density_function",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/density_function/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。密度関数を組み合わせる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/flat_level_generator_preset",
    "kind": "file",
    "description": "スーパーフラット用プリセット",
    "syntax": "data/<namespace>/worldgen/flat_level_generator_preset/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。地層やバイオーム等を設定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/flat_level_generator_preset",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/flat_level_generator_preset/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。地層やバイオーム等を設定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/noise",
    "kind": "file",
    "description": "ノイズのパラメータ",
    "syntax": "data/<namespace>/worldgen/noise/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。地形生成のノイズ設定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/noise",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/noise/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。地形生成のノイズ設定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/noise_settings",
    "kind": "file",
    "description": "地形の形状やノイズ生成設定",
    "syntax": "data/<namespace>/worldgen/noise_settings/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。地形ブロックやノイズルーター等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/noise_settings",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/noise_settings/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。地形ブロックやノイズルーター等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/placed_feature",
    "kind": "file",
    "description": "configured featureをチャンクへ配置する設定",
    "syntax": "data/<namespace>/worldgen/placed_feature/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。配置修飾子を順番に使用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/placed_feature",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/placed_feature/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。配置修飾子を順番に使用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/processor_list",
    "kind": "file",
    "description": "構造生成後にブロックを加工するリスト",
    "syntax": "data/<namespace>/worldgen/processor_list/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。構造テンプレートの処理段階で利用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/processor_list",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/processor_list/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。構造テンプレートの処理段階で利用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/structure",
    "kind": "file",
    "description": "構造物生成条件",
    "syntax": "data/<namespace>/worldgen/structure/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。構造タイプ・バイオーム・配置等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/structure",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/structure/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。構造タイプ・バイオーム・配置等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/structure_set",
    "kind": "file",
    "description": "構造物群のワールド内配置",
    "syntax": "data/<namespace>/worldgen/structure_set/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。構造物候補と配置設定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/structure_set",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/structure_set/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。構造物候補と配置設定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/template_pool",
    "kind": "file",
    "description": "ジグソー構造用テンプレート群",
    "syntax": "data/<namespace>/worldgen/template_pool/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。structure templateとweightを組む。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/template_pool",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/template_pool/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。structure templateとweightを組む。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データフォルダ: worldgen/world_preset",
    "kind": "file",
    "description": "新規ワールド画面に出すワールド設定",
    "syntax": "data/<namespace>/worldgen/world_preset/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "1.21.1で使用するファイル種別。ディメンション構成を定義。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "パス規則: worldgen/world_preset",
    "kind": "jsonfield",
    "description": "この種類のデータを配置するディレクトリパス",
    "syntax": "data/<namespace>/worldgen/world_preset/<id>.json",
    "tags": [
      "データパック",
      "JSON",
      "ワールド生成"
    ],
    "details": "IDは通常namespace:path形式で、path部分にサブフォルダを含められる。ディメンション構成を定義。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "pack",
    "kind": "jsonfield",
    "description": "トップレベルのメタデータオブジェクト",
    "syntax": "pack",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "pack.mcmeta内の主要設定を格納する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "pack.pack_format",
    "kind": "jsonfield",
    "description": "対象バージョンのデータパック形式番号",
    "syntax": "48",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "Java 1.21–1.21.1では48。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "pack.description",
    "kind": "jsonfield",
    "description": "データパックの表示用説明",
    "syntax": "\"description\": \"説明文\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "文字列または対象版で受け入れられるテキストコンポーネントを指定する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "filter",
    "kind": "jsonfield",
    "description": "下位優先度のパックから一部のファイルを除外する設定",
    "syntax": "\"filter\": {\"block\": [...]}",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "フィルターは上位パックに置き、下位パックの一致ファイルを見えなくする。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "filter.block",
    "kind": "jsonfield",
    "description": "除外するパターンの配列",
    "syntax": "\"block\": [{\"namespace\":\"example\",\"path\":\".*\"}]",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "各パターンはnamespace/pathを正規表現で指定できる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "filter.block[].namespace",
    "kind": "jsonfield",
    "description": "対象namespaceの正規表現",
    "syntax": "\"namespace\": \"minecraft\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "省略時は全namespaceが対象となる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "filter.block[].path",
    "kind": "jsonfield",
    "description": "ファイル相対パスの正規表現",
    "syntax": "\"path\": \"loot_table/.*\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "省略時は全パスが対象となる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "pack.mcmetaのJSON形式",
    "kind": "jsonfield",
    "description": "コメントを含めない有効なJSONで書く",
    "syntax": "{\"pack\":{\"pack_format\":48,\"description\":\"My Datapack\"}}",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "末尾カンマはJSONとして無効。ファイル名はpack.mcmeta。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "pack.mcmetaとpack.pngの位置",
    "kind": "jsonfield",
    "description": "両ファイルはデータパックのルート直下に置く",
    "syntax": "my_pack/pack.mcmeta",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "dataフォルダの内側ではなく、最上位に置く。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "namespace命名",
    "kind": "jsonfield",
    "description": "自作機能ごとに固有の英小文字namespaceを使う",
    "syntax": "example:boss/start",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "パスやnamespaceはIDの一部になる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "resource location",
    "kind": "jsonfield",
    "description": "名前空間とパスからなるID表記",
    "syntax": "namespace:path",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "名前空間が省略された場合minecraftとして扱われる場所もあるが、データ定義では明示指定が安全。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "1.21のpack形式の変更",
    "kind": "jsonfield",
    "description": "1.21では形式番号48、フォルダ名の単数形化が重要",
    "syntax": "loot_table / recipe / advancement / function",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.6以前の複数形パスを1.21.1用に流用しない。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack list",
    "kind": "command",
    "description": "使用可能なパックを一覧表示",
    "syntax": "/datapack list",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。availableとenabledの区分で確認する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack list available",
    "kind": "command",
    "description": "検出されているデータパックを表示",
    "syntax": "/datapack list available",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。無効なものも含む使用可能なパックの確認に使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack list enabled",
    "kind": "command",
    "description": "現在有効なデータパックを表示",
    "syntax": "/datapack list enabled",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。ロード順・有効化状態を確認する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack enable",
    "kind": "command",
    "description": "データパックを有効化",
    "syntax": "/datapack enable <name>",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。対応IDまたは名前を指定する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack enable first",
    "kind": "command",
    "description": "最高優先度で有効化",
    "syntax": "/datapack enable <name> first",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。既存パックの上位側に置く。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack enable last",
    "kind": "command",
    "description": "最低優先度で有効化",
    "syntax": "/datapack enable <name> last",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。既存パックの下位側に置く。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack enable before",
    "kind": "command",
    "description": "指定パックより高い優先度に置く",
    "syntax": "/datapack enable <name> before <existing>",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。比較対象は有効な既存データパック。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack enable after",
    "kind": "command",
    "description": "指定パックより低い優先度に置く",
    "syntax": "/datapack enable <name> after <existing>",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。比較対象は有効な既存データパック。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack disable",
    "kind": "command",
    "description": "データパックを無効化",
    "syntax": "/datapack disable <name>",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。既に無効・存在しないパック等では失敗する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack name引数",
    "kind": "command",
    "description": "操作対象パックの名前を指定",
    "syntax": "<name>",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。空白を含む場合は引用符で囲む必要がある。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "/datapack existing引数",
    "kind": "command",
    "description": "優先順位基準の既存パック名",
    "syntax": "<existing>",
    "tags": [
      "コマンド",
      "データパック"
    ],
    "details": "対象: Java Edition 1.21.1。before/afterで参照する。有効である必要がある。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.13",
    "kind": "file",
    "description": "データパック機能の初導入",
    "syntax": "4",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "データパックによるゲームデータのカスタマイズが導入された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.13 / 17w46a",
    "kind": "file",
    "description": "/datapackコマンドの導入",
    "syntax": "/datapack",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "ロード済みデータパックを操作するコマンドが追加された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.13 / 17w48a",
    "kind": "file",
    "description": "カスタムレシピとpack形式4",
    "syntax": "recipe/*.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "データパック形式番号4が導入された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.13 / 17w49a",
    "kind": "file",
    "description": "データパックによるタグ定義",
    "syntax": "tags/<registry>/*.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "レジストリの集合をタグとして定義できるようになった。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.13 / 17w49b",
    "kind": "file",
    "description": "関数タグが追加",
    "syntax": "tags/function/*.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "関数をイベントタグから実行する仕組みが追加された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.15",
    "kind": "file",
    "description": "パック形式5",
    "syntax": "5",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "述語(predicate)がデータパックで利用できるようになった。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.16.2",
    "kind": "file",
    "description": "パック形式6",
    "syntax": "6",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "カスタムワールド生成の実験的な対応が進んだ。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.17",
    "kind": "file",
    "description": "パック形式7",
    "syntax": "7",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "/replaceitemから/itemへの移行が進み、ルート関数の型指定等が変更された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.18",
    "kind": "file",
    "description": "パック形式8",
    "syntax": "8",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "ルートテーブル関数のtypeなど要件が変化した。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.18.2",
    "kind": "file",
    "description": "パック形式9",
    "syntax": "9",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "/locateが構造物種別ではなく設定された構造物を基準にするように変化。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.19",
    "kind": "file",
    "description": "パック形式10",
    "syntax": "10",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "pack.mcmetaにfilter設定が使えるようになり、locatebiomeがlocateへ統合された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.19.4",
    "kind": "file",
    "description": "パック形式12",
    "syntax": "12",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "damage_typeの定義が追加され、バイオームフィールド等も変更された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.20",
    "kind": "file",
    "description": "パック形式15",
    "syntax": "15",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "看板テキスト、進捗トリガー、predicate等の形式が変更された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.20.2",
    "kind": "file",
    "description": "パック形式18",
    "syntax": "18",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "関数マクロが追加され、複数pack形式とoverlayが導入された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.20.3",
    "kind": "file",
    "description": "パック形式26",
    "syntax": "26",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "テキストコンポーネントの検証が厳格化され、一部IDやscoreboard表示形式が変更。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.20.5",
    "kind": "file",
    "description": "パック形式41",
    "syntax": "41",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "アイテムデータの多くが構造化コンポーネントへ移行。レシピ出力もcomponent指定に対応。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.21",
    "kind": "file",
    "description": "パック形式48",
    "syntax": "48",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "エンチャントと絵画バリアントがデータ駆動化し、関数・レシピ・ルートテーブルなどのフォルダが単数形に統一された。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック履歴 1.21.1",
    "kind": "file",
    "description": "pack format 48を維持",
    "syntax": "48",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "1.21と同じデータパック形式を使用する。1.21.2以降の変更は含めない。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display",
    "kind": "jsonfield",
    "description": "進捗画面での表示設定",
    "syntax": "\"display\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "任意。非表示にしても条件自体の評価は続く。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display.icon",
    "kind": "jsonfield",
    "description": "進捗に表示するアイテム",
    "syntax": "\"display.icon\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降のアイテムスタック形式に注意。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display.title",
    "kind": "jsonfield",
    "description": "進捗タイトルのテキストコンポーネント",
    "syntax": "\"display.title\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "例: {\"text\":\"最初の一歩\"}\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display.description",
    "kind": "jsonfield",
    "description": "進捗の説明文",
    "syntax": "\"display.description\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "テキストコンポーネントを指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display.background",
    "kind": "jsonfield",
    "description": "タブ背景のテクスチャパス",
    "syntax": "\"display.background\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "主にタブのroot進捗で使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display.frame",
    "kind": "jsonfield",
    "description": "表示フレーム種別",
    "syntax": "\"display.frame\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "task / goal / challenge\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display.show_toast",
    "kind": "jsonfield",
    "description": "獲得時に画面通知を出すか",
    "syntax": "\"display.show_toast\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display.announce_to_chat",
    "kind": "jsonfield",
    "description": "獲得をチャット通知するか",
    "syntax": "\"display.announce_to_chat\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.display.hidden",
    "kind": "jsonfield",
    "description": "進捗一覧上で隠すか",
    "syntax": "\"display.hidden\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.parent",
    "kind": "jsonfield",
    "description": "親進捗ID",
    "syntax": "\"parent\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "namespace:path\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.criteria",
    "kind": "jsonfield",
    "description": "獲得条件の辞書",
    "syntax": "\"criteria\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "少なくとも必要な条件を定義する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.requirements",
    "kind": "jsonfield",
    "description": "必要条件のAND/ORグループ",
    "syntax": "\"requirements\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "入れ子配列でcriterion名を並べる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.rewards",
    "kind": "jsonfield",
    "description": "獲得時の報酬",
    "syntax": "\"rewards\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "experience / loot / recipes / function\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.criteria.*.trigger",
    "kind": "jsonfield",
    "description": "トリガーのID",
    "syntax": "\"criteria.*.trigger\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "minecraft:tick等\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "advancement.criteria.*.conditions",
    "kind": "jsonfield",
    "description": "トリガー固有の条件",
    "syntax": "\"criteria.*.conditions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "イベント型により使用可能項目が異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.type",
    "kind": "jsonfield",
    "description": "ルートテーブルの利用コンテキスト",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "例: minecraft:chest、minecraft:entity。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.random_sequence",
    "kind": "jsonfield",
    "description": "乱数系列ID",
    "syntax": "\"random_sequence\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "再現可能な乱数の系列指定に使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.pools",
    "kind": "jsonfield",
    "description": "抽選プール配列",
    "syntax": "\"pools\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "各poolはrolls回選択を行う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.functions",
    "kind": "jsonfield",
    "description": "ルート全体へのアイテム修飾処理",
    "syntax": "\"functions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "poolやentry内にも置ける。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.pools[].rolls",
    "kind": "jsonfield",
    "description": "基本抽選回数",
    "syntax": "\"pools[].rolls\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "整数またはnumber provider。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.pools[].bonus_rolls",
    "kind": "jsonfield",
    "description": "幸運等に依存する追加抽選数",
    "syntax": "\"pools[].bonus_rolls\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "number providerを指定できる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.pools[].entries",
    "kind": "jsonfield",
    "description": "抽選対象エントリー",
    "syntax": "\"pools[].entries\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "item/empty/loot_table/tag/composite系。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.pools[].conditions",
    "kind": "jsonfield",
    "description": "プール抽選の条件",
    "syntax": "\"pools[].conditions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "条件がfalseならプール対象外。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.pools[].functions",
    "kind": "jsonfield",
    "description": "プール結果への修飾",
    "syntax": "\"pools[].functions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "結果の各スタックに適用する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.entries[].type",
    "kind": "jsonfield",
    "description": "エントリー方式",
    "syntax": "\"entries[].type\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "item / empty / loot_table / tag / alternatives / sequence / group\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.entries[].name",
    "kind": "jsonfield",
    "description": "参照するID",
    "syntax": "\"entries[].name\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "item、loot_table等の種類に応じて使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.entries[].weight",
    "kind": "jsonfield",
    "description": "抽選重み",
    "syntax": "\"entries[].weight\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "同じ条件の候補間の相対的な重み。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.entries[].quality",
    "kind": "jsonfield",
    "description": "幸運値に応じた重み調整",
    "syntax": "\"entries[].quality\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "エントリー選択率に影響する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.entries[].functions",
    "kind": "jsonfield",
    "description": "エントリー固有の修飾関数",
    "syntax": "\"entries[].functions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "プールやテーブル全体の関数より前に適用される位置に注意。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.entries[].conditions",
    "kind": "jsonfield",
    "description": "エントリー固有の条件",
    "syntax": "\"entries[].conditions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "条件がfalseなら対象外。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.entries[].children",
    "kind": "jsonfield",
    "description": "複合エントリーが持つ子エントリー",
    "syntax": "\"entries[].children\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "alternatives/sequence/groupで使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "loot_table.conditions",
    "kind": "jsonfield",
    "description": "各種ルート条件オブジェクト",
    "syntax": "\"conditions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "condition IDと条件に必要な項目を指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.type",
    "kind": "jsonfield",
    "description": "レシピ方式のID",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "crafting_shaped / crafting_shapeless / smelting等\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.group",
    "kind": "jsonfield",
    "description": "レシピ本でまとめるグループ名",
    "syntax": "\"group\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "省略可能。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.category",
    "kind": "jsonfield",
    "description": "作業台UIでのカテゴリ",
    "syntax": "\"category\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "対応タイプで指定する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.pattern",
    "kind": "jsonfield",
    "description": "shapedレシピの形を表す行配列",
    "syntax": "\"pattern\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "各行の文字はkeyの記号と対応する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.key",
    "kind": "jsonfield",
    "description": "patternの文字と材料ingredientを対応付ける辞書",
    "syntax": "\"key\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "空白以外の各記号を割り当てる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.ingredients",
    "kind": "jsonfield",
    "description": "shapelessレシピの材料配列",
    "syntax": "\"ingredients\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "材料の種類ごとにingredientを指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.ingredient",
    "kind": "jsonfield",
    "description": "レシピ材料条件",
    "syntax": "\"ingredient\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "アイテムID、タグ、コンポーネント条件等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.result",
    "kind": "jsonfield",
    "description": "完成品のアイテムスタック",
    "syntax": "\"result\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降の出力形式ではid/components等に注意。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.experience",
    "kind": "jsonfield",
    "description": "精錬で得られる経験値",
    "syntax": "\"experience\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "smelting系で使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.cookingtime",
    "kind": "jsonfield",
    "description": "精錬に必要なtick数",
    "syntax": "\"cookingtime\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "smelting / blasting / smoking / campfire_cooking\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.template",
    "kind": "jsonfield",
    "description": "鍛冶レシピのテンプレート材料",
    "syntax": "\"template\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "smithing_transform / smithing_trim\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.base",
    "kind": "jsonfield",
    "description": "鍛冶の基礎装備",
    "syntax": "\"base\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "smithing系\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.addition",
    "kind": "jsonfield",
    "description": "鍛冶の追加材料",
    "syntax": "\"addition\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "smithing系\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "recipe.count",
    "kind": "jsonfield",
    "description": "出力個数",
    "syntax": "\"count\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "result等のスタック数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.condition",
    "kind": "jsonfield",
    "description": "判定方式のID",
    "syntax": "\"condition\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "例: minecraft:entity_properties。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.conditions",
    "kind": "jsonfield",
    "description": "複数条件をまとめる配列",
    "syntax": "\"conditions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "all_of/any_of等の複合判定で用いる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.terms",
    "kind": "jsonfield",
    "description": "all_of等で評価する条件配列",
    "syntax": "\"terms\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "複合condition typeに応じて使用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.term",
    "kind": "jsonfield",
    "description": "inverted等で反転対象となる条件",
    "syntax": "\"term\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "condition object。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.entity",
    "kind": "jsonfield",
    "description": "条件対象のエンティティ指定",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "this / attacker / direct_attacker / shooter等、conditionで有効範囲が異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.predicate",
    "kind": "jsonfield",
    "description": "エンティティサブ述語",
    "syntax": "\"predicate\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "種別、装備、状態など細部の判定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.location",
    "kind": "jsonfield",
    "description": "位置判定条件",
    "syntax": "\"location\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "biome、dimension、座標、ブロック等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.position",
    "kind": "jsonfield",
    "description": "判定する座標や位置プロバイダー",
    "syntax": "\"position\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "condition typeに応じて使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.offsetX",
    "kind": "jsonfield",
    "description": "X方向の位置オフセット",
    "syntax": "\"offsetX\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "位置判定で任意指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.offsetY",
    "kind": "jsonfield",
    "description": "Y方向の位置オフセット",
    "syntax": "\"offsetY\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "位置判定で任意指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.offsetZ",
    "kind": "jsonfield",
    "description": "Z方向の位置オフセット",
    "syntax": "\"offsetZ\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "位置判定で任意指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.block",
    "kind": "jsonfield",
    "description": "ブロック条件",
    "syntax": "\"block\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "ブロックID、状態、ブロックエンティティ等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.state",
    "kind": "jsonfield",
    "description": "ブロック状態プロパティの判定",
    "syntax": "\"state\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "プロパティ値でブロックを絞る。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.tool",
    "kind": "jsonfield",
    "description": "使用アイテムの条件",
    "syntax": "\"tool\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "アイテムとコンポーネント等で判定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.damage_source",
    "kind": "jsonfield",
    "description": "ダメージ源サブ述語",
    "syntax": "\"damage_source\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "ダメージ種類や属性など。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.scores",
    "kind": "jsonfield",
    "description": "スコアボード値の範囲",
    "syntax": "\"scores\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "objective名に整数範囲等を割り当てる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.value",
    "kind": "jsonfield",
    "description": "数値プロバイダー",
    "syntax": "\"value\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "rangeと組み合わせる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.range",
    "kind": "jsonfield",
    "description": "数値の範囲条件",
    "syntax": "\"range\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "min/maxや境界含有指定等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.chance",
    "kind": "jsonfield",
    "description": "確率",
    "syntax": "\"chance\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "0.0から1.0の乱数判定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.looting_multiplier",
    "kind": "jsonfield",
    "description": "略奪レベルによる確率補正",
    "syntax": "\"looting_multiplier\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "random_chance_with_looting等で使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.reference",
    "kind": "jsonfield",
    "description": "別predicateのID",
    "syntax": "\"reference\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "既存のpredicateを再利用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.weather",
    "kind": "jsonfield",
    "description": "天候条件",
    "syntax": "\"weather\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "raining/thundering等、対応形式に従う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.time",
    "kind": "jsonfield",
    "description": "ワールド時刻の範囲条件",
    "syntax": "\"time\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "time_check等で使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.period",
    "kind": "jsonfield",
    "description": "時刻周期",
    "syntax": "\"period\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "time_check条件で任意指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.enchantment",
    "kind": "jsonfield",
    "description": "エンチャント条件",
    "syntax": "\"enchantment\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "アイテムサブ述語等で利用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.items",
    "kind": "jsonfield",
    "description": "対象アイテム条件",
    "syntax": "\"items\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "item sub-predicate形式。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "predicate.count",
    "kind": "jsonfield",
    "description": "アイテム数条件",
    "syntax": "\"count\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "item conditionによる数範囲。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.function",
    "kind": "jsonfield",
    "description": "修飾関数の種類",
    "syntax": "\"function\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "minecraft:set_count等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.conditions",
    "kind": "jsonfield",
    "description": "修飾関数を適用する条件",
    "syntax": "\"conditions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "falseなら変更せず次へ。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.count",
    "kind": "jsonfield",
    "description": "設定するアイテム数",
    "syntax": "\"count\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "set_countで使用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.add",
    "kind": "jsonfield",
    "description": "既存値に加算するか",
    "syntax": "\"add\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "set_count等、対応関数だけで使用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.damage",
    "kind": "jsonfield",
    "description": "耐久値変更の量/割合",
    "syntax": "\"damage\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "set_damage形式と対象バージョンを確認。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.name",
    "kind": "jsonfield",
    "description": "アイテム名コンポーネント",
    "syntax": "\"name\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "set_nameで利用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.lore",
    "kind": "jsonfield",
    "description": "説明文の配列",
    "syntax": "\"lore\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "set_loreで利用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.enchantments",
    "kind": "jsonfield",
    "description": "追加・設定するエンチャント",
    "syntax": "\"enchantments\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1のエンチャント定義形式に沿う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.levels",
    "kind": "jsonfield",
    "description": "エンチャントレベル用のnumber provider",
    "syntax": "\"levels\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "enchant_with_levels等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.treasure",
    "kind": "jsonfield",
    "description": "トレジャーエンチャントを許すか",
    "syntax": "\"treasure\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "対応関数で使用。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.loot_table",
    "kind": "jsonfield",
    "description": "参照するloot table ID",
    "syntax": "\"loot_table\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "set_loot_table等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.block_entity_data",
    "kind": "jsonfield",
    "description": "ブロックエンティティデータの変更",
    "syntax": "\"block_entity_data\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "対象アイテムが設置ブロック等の場合に使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.entity_data",
    "kind": "jsonfield",
    "description": "エンティティデータの変更",
    "syntax": "\"entity_data\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "スポーンエッグ等に利用される。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.potion",
    "kind": "jsonfield",
    "description": "ポーション効果の識別子",
    "syntax": "\"potion\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "set_potion等の対象になる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.components",
    "kind": "jsonfield",
    "description": "上書きまたは付与するアイテムコンポーネント",
    "syntax": "\"components\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "set_components形式。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.remove",
    "kind": "jsonfield",
    "description": "除去するコンポーネントID",
    "syntax": "\"remove\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降のアイテムコンポーネント形式。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.component",
    "kind": "jsonfield",
    "description": "指定するコンポーネントID",
    "syntax": "\"component\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "copy/custom component系の修飾で使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.source",
    "kind": "jsonfield",
    "description": "コピー元の値",
    "syntax": "\"source\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "copy系modifierの種類に依存。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "item_modifier.ops",
    "kind": "jsonfield",
    "description": "操作のリスト",
    "syntax": "\"ops\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "copy_nbt系等で使用する操作配列。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "damage_type.message_id",
    "kind": "jsonfield",
    "description": "死亡メッセージの識別キー",
    "syntax": "\"message_id\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "通常はdamage typeに応じた翻訳キー。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "damage_type.scaling",
    "kind": "jsonfield",
    "description": "ダメージ補正スケーリング方式",
    "syntax": "\"scaling\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "never / always / when_caused_by_living_non_player等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "damage_type.exhaustion",
    "kind": "jsonfield",
    "description": "飢餓度消耗の値",
    "syntax": "\"exhaustion\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "数値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "damage_type.effects",
    "kind": "jsonfield",
    "description": "画面・音響などのダメージ演出タイプ",
    "syntax": "\"effects\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "hurt / thorns / drowning / burning / poking / freezing等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "damage_type.death_message_type",
    "kind": "jsonfield",
    "description": "死亡メッセージの形式",
    "syntax": "\"death_message_type\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "default / fall_variants / intentional_game_design等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "damage_type.tags",
    "kind": "jsonfield",
    "description": "damage typeタグとの関係",
    "syntax": "\"tags\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "一部の条件はタグ判定で扱う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.description",
    "kind": "jsonfield",
    "description": "エンチャント名のテキストコンポーネント",
    "syntax": "\"description\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "翻訳キーまたはtext。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.supported_items",
    "kind": "jsonfield",
    "description": "適用可能なアイテムのタグ/条件",
    "syntax": "\"supported_items\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "どの装備・アイテムへ付けられるか。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.primary_items",
    "kind": "jsonfield",
    "description": "エンチャントテーブル等の候補対象",
    "syntax": "\"primary_items\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "対応版のエンチャント形式に従う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.weight",
    "kind": "jsonfield",
    "description": "候補抽選の重み",
    "syntax": "\"weight\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "エンチャント選択時の相対的な出現率。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.max_level",
    "kind": "jsonfield",
    "description": "最大レベル",
    "syntax": "\"max_level\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "正の整数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.min_cost",
    "kind": "jsonfield",
    "description": "最小コストの式",
    "syntax": "\"min_cost\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "base/per_level等の式オブジェクト。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.max_cost",
    "kind": "jsonfield",
    "description": "最大コストの式",
    "syntax": "\"max_cost\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "base/per_level等の式オブジェクト。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.anvil_cost",
    "kind": "jsonfield",
    "description": "金床で必要なコスト係数",
    "syntax": "\"anvil_cost\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "整数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.slots",
    "kind": "jsonfield",
    "description": "影響する装備スロット",
    "syntax": "\"slots\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "mainhand/armor等のスロット定義。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.effects",
    "kind": "jsonfield",
    "description": "エンチャント効果の定義",
    "syntax": "\"effects\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "効果タイプごとの条件と値を指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.exclusive_set",
    "kind": "jsonfield",
    "description": "同時付与を制限するグループ",
    "syntax": "\"exclusive_set\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "タグやエンチャントの集合を指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "enchantment.damage",
    "kind": "jsonfield",
    "description": "攻撃/受けるダメージ等の効果設定",
    "syntax": "\"damage\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "効果形式によりネスト項目が異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.has_precipitation",
    "kind": "jsonfield",
    "description": "降水の有無",
    "syntax": "\"has_precipitation\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.19.4以降はprecipitation文字列でなくboolean。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.temperature",
    "kind": "jsonfield",
    "description": "バイオーム温度",
    "syntax": "\"temperature\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "気候、雪や雨などに関係する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.downfall",
    "kind": "jsonfield",
    "description": "湿潤度",
    "syntax": "\"downfall\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "植生等に関係する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects",
    "kind": "jsonfield",
    "description": "色・音・粒子等の環境演出",
    "syntax": "\"effects\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "water_color、fog_color等を含む。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.spawners",
    "kind": "jsonfield",
    "description": "自然スポーンするエンティティ群",
    "syntax": "\"spawners\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "カテゴリごとにweight/minCount/maxCount。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.spawn_costs",
    "kind": "jsonfield",
    "description": "スポーンコスト制御",
    "syntax": "\"spawn_costs\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "energy_budgetとcharge等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.carvers",
    "kind": "jsonfield",
    "description": "地形を削るconfigured_carver ID",
    "syntax": "\"carvers\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDの配列。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.features",
    "kind": "jsonfield",
    "description": "段階別のplaced_feature ID",
    "syntax": "\"features\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "ワールド生成段階順の配列。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects.sky_color",
    "kind": "jsonfield",
    "description": "空の色",
    "syntax": "\"effects.sky_color\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "RGBの整数値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects.fog_color",
    "kind": "jsonfield",
    "description": "霧の色",
    "syntax": "\"effects.fog_color\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "RGBの整数値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects.water_color",
    "kind": "jsonfield",
    "description": "水の色",
    "syntax": "\"effects.water_color\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "RGBの整数値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects.water_fog_color",
    "kind": "jsonfield",
    "description": "水中霧の色",
    "syntax": "\"effects.water_fog_color\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "RGBの整数値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects.grass_color",
    "kind": "jsonfield",
    "description": "草の色を上書き",
    "syntax": "\"effects.grass_color\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "任意項目。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects.foliage_color",
    "kind": "jsonfield",
    "description": "葉の色を上書き",
    "syntax": "\"effects.foliage_color\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "任意項目。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects.mood_sound",
    "kind": "jsonfield",
    "description": "環境音のMood設定",
    "syntax": "\"effects.mood_sound\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "sound/tick/delay/offset等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "biome.effects.music",
    "kind": "jsonfield",
    "description": "バイオームのBGM条件",
    "syntax": "\"effects.music\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "sound/min_delay/max_delay/replace_current_music等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.ultrawarm",
    "kind": "jsonfield",
    "description": "水や溶岩等の挙動に関係する超高温設定",
    "syntax": "\"ultrawarm\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.natural",
    "kind": "jsonfield",
    "description": "自然ディメンションとして扱うか",
    "syntax": "\"natural\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.coordinate_scale",
    "kind": "jsonfield",
    "description": "ネザー移動等に使う座標倍率",
    "syntax": "\"coordinate_scale\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "数値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.bed_works",
    "kind": "jsonfield",
    "description": "ベッドを使用できるか",
    "syntax": "\"bed_works\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.respawn_anchor_works",
    "kind": "jsonfield",
    "description": "リスポーンアンカーが使用できるか",
    "syntax": "\"respawn_anchor_works\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.has_skylight",
    "kind": "jsonfield",
    "description": "空の光を持つか",
    "syntax": "\"has_skylight\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.has_ceiling",
    "kind": "jsonfield",
    "description": "天井を持つ扱いか",
    "syntax": "\"has_ceiling\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.ambient_light",
    "kind": "jsonfield",
    "description": "環境光の明るさ",
    "syntax": "\"ambient_light\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "0から1の値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.logical_height",
    "kind": "jsonfield",
    "description": "コマンド等で扱う論理高さ",
    "syntax": "\"logical_height\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "整数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.infiniburn",
    "kind": "jsonfield",
    "description": "燃え続けるブロックタグ",
    "syntax": "\"infiniburn\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "例: #minecraft:infiniburn_overworld。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.effects",
    "kind": "jsonfield",
    "description": "クライアント側のディメンション演出ID",
    "syntax": "\"effects\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "minecraft:overworld / the_nether / the_end等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.min_y",
    "kind": "jsonfield",
    "description": "最小Y座標",
    "syntax": "\"min_y\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "整数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "dimension_type.height",
    "kind": "jsonfield",
    "description": "ディメンションの高さ",
    "syntax": "\"height\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "整数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "chat_type.chat",
    "kind": "jsonfield",
    "description": "通常チャットの表示テンプレート",
    "syntax": "\"chat\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "translation_keyとparametersを設定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "chat_type.narration",
    "kind": "jsonfield",
    "description": "読み上げ用テンプレート",
    "syntax": "\"narration\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "翻訳キーとパラメータを指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "chat_type.chat.translation_key",
    "kind": "jsonfield",
    "description": "チャット用翻訳キー",
    "syntax": "\"chat.translation_key\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "例: chat.type.text。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "chat_type.chat.parameters",
    "kind": "jsonfield",
    "description": "テンプレートのパラメータ一覧",
    "syntax": "\"chat.parameters\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "sender/content等。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "chat_type.narration.translation_key",
    "kind": "jsonfield",
    "description": "ナレーション用翻訳キー",
    "syntax": "\"narration.translation_key\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "読み上げの出力を制御。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "chat_type.narration.parameters",
    "kind": "jsonfield",
    "description": "ナレーションのパラメータ一覧",
    "syntax": "\"narration.parameters\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "送信者・本文など。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "painting_variant.asset_id",
    "kind": "jsonfield",
    "description": "使用する絵画テクスチャのID",
    "syntax": "\"asset_id\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "namespace:path形式。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "painting_variant.width",
    "kind": "jsonfield",
    "description": "絵画の横幅ブロック数",
    "syntax": "\"width\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "整数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "painting_variant.height",
    "kind": "jsonfield",
    "description": "絵画の高さブロック数",
    "syntax": "\"height\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "整数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "painting_variant.title",
    "kind": "jsonfield",
    "description": "絵画名に使うテキストコンポーネント",
    "syntax": "\"title\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "任意。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "painting_variant.author",
    "kind": "jsonfield",
    "description": "作者名に使うテキストコンポーネント",
    "syntax": "\"author\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "任意。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "jukebox_song.sound_event",
    "kind": "jsonfield",
    "description": "再生するサウンドイベントID",
    "syntax": "\"sound_event\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "sound_eventオブジェクトを指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "jukebox_song.description",
    "kind": "jsonfield",
    "description": "ディスク名のテキストコンポーネント",
    "syntax": "\"description\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "アイテム名とは別の楽曲表示情報。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "jukebox_song.length_in_seconds",
    "kind": "jsonfield",
    "description": "曲の長さ（秒）",
    "syntax": "\"length_in_seconds\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "正の数値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "jukebox_song.comparator_output",
    "kind": "jsonfield",
    "description": "比較器の出力値",
    "syntax": "\"comparator_output\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "0〜15程度の整数。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_material.asset_name",
    "kind": "jsonfield",
    "description": "防具装飾に使う素材アセット名",
    "syntax": "\"asset_name\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "素材テクスチャ層の名前に影響。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_material.ingredient",
    "kind": "jsonfield",
    "description": "素材として受け付けるアイテムタグ/ID",
    "syntax": "\"ingredient\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "対応する素材アイテムを指定。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_material.item_model_index",
    "kind": "jsonfield",
    "description": "アイテムモデルの表示索引",
    "syntax": "\"item_model_index\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "数値。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_material.override_armor_materials",
    "kind": "jsonfield",
    "description": "防具素材ごとのアセット上書き",
    "syntax": "\"override_armor_materials\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "任意マップ。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_material.description",
    "kind": "jsonfield",
    "description": "素材名のテキストコンポーネント",
    "syntax": "\"description\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "鍛冶画面表示に使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_pattern.asset_id",
    "kind": "jsonfield",
    "description": "防具装飾模様のアセットID",
    "syntax": "\"asset_id\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "namespace:path形式。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_pattern.template_item",
    "kind": "jsonfield",
    "description": "模様テンプレートとして必要なアイテム",
    "syntax": "\"template_item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "アイテムID。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_pattern.description",
    "kind": "jsonfield",
    "description": "模様名のテキストコンポーネント",
    "syntax": "\"description\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "UI表示名。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "trim_pattern.decal",
    "kind": "jsonfield",
    "description": "表面装飾を描画するか",
    "syntax": "\"decal\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_shaped",
    "kind": "file",
    "description": "形を持つ作業台レシピ",
    "syntax": "\"type\": \"minecraft:crafting_shaped\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: pattern/key/ingredients/result。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_shapeless",
    "kind": "file",
    "description": "形を問わない作業台レシピ",
    "syntax": "\"type\": \"minecraft:crafting_shapeless\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: ingredients/result。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:smelting",
    "kind": "file",
    "description": "かまど精錬",
    "syntax": "\"type\": \"minecraft:smelting\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: ingredient/result/experience/cookingtime。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:blasting",
    "kind": "file",
    "description": "溶鉱炉精錬",
    "syntax": "\"type\": \"minecraft:blasting\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: ingredient/result/experience/cookingtime。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:smoking",
    "kind": "file",
    "description": "燻製器精錬",
    "syntax": "\"type\": \"minecraft:smoking\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: ingredient/result/experience/cookingtime。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:campfire_cooking",
    "kind": "file",
    "description": "焚き火調理",
    "syntax": "\"type\": \"minecraft:campfire_cooking\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: ingredient/result/experience/cookingtime。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:stonecutting",
    "kind": "file",
    "description": "石切台レシピ",
    "syntax": "\"type\": \"minecraft:stonecutting\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: ingredient/result。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:smithing_transform",
    "kind": "file",
    "description": "鍛冶で装備等を変換",
    "syntax": "\"type\": \"minecraft:smithing_transform\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: template/base/addition/result。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:smithing_trim",
    "kind": "file",
    "description": "防具装飾を付与",
    "syntax": "\"type\": \"minecraft:smithing_trim\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: template/base/addition。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_armordye",
    "kind": "file",
    "description": "防具染色の組み込みレシピ",
    "syntax": "\"type\": \"minecraft:crafting_special_armordye\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type; 1.21.1のデータ駆動可否に注意。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_bookcloning",
    "kind": "file",
    "description": "エンチャント本複製",
    "syntax": "\"type\": \"minecraft:crafting_special_bookcloning\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_mapcloning",
    "kind": "file",
    "description": "地図複製",
    "syntax": "\"type\": \"minecraft:crafting_special_mapcloning\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_mapextending",
    "kind": "file",
    "description": "地図拡張",
    "syntax": "\"type\": \"minecraft:crafting_special_mapextending\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_firework_rocket",
    "kind": "file",
    "description": "ロケット花火作成",
    "syntax": "\"type\": \"minecraft:crafting_special_firework_rocket\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_firework_star",
    "kind": "file",
    "description": "花火の星作成",
    "syntax": "\"type\": \"minecraft:crafting_special_firework_star\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_firework_star_fade",
    "kind": "file",
    "description": "花火の星の色褪せ",
    "syntax": "\"type\": \"minecraft:crafting_special_firework_star_fade\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_tippedarrow",
    "kind": "file",
    "description": "効果付きの矢",
    "syntax": "\"type\": \"minecraft:crafting_special_tippedarrow\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_bannerduplicate",
    "kind": "file",
    "description": "旗模様複製",
    "syntax": "\"type\": \"minecraft:crafting_special_bannerduplicate\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_shielddecoration",
    "kind": "file",
    "description": "盾の旗模様付け",
    "syntax": "\"type\": \"minecraft:crafting_special_shielddecoration\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_shulkerboxcoloring",
    "kind": "file",
    "description": "シュルカーボックス染色",
    "syntax": "\"type\": \"minecraft:crafting_special_shulkerboxcoloring\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_suspiciousstew",
    "kind": "file",
    "description": "怪しげなシチュー",
    "syntax": "\"type\": \"minecraft:crafting_special_suspiciousstew\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピtype: minecraft:crafting_special_repairitem",
    "kind": "file",
    "description": "同種アイテム修理",
    "syntax": "\"type\": \"minecraft:crafting_special_repairitem\"",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "1.21.1のレシピJSONのtype候補。主な関連項目: special recipe type。個別の特殊レシピの扱いは対象バージョンに合わせて検証する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "進捗トリガー候補: ベッド睡眠",
    "kind": "jsonfield",
    "description": "睡眠系の進捗条件は対象版のtrigger一覧を参照",
    "syntax": "",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "Wikiの進捗関連記事を参照し、正確なIDは1.21.1のバニラ定義で再確認する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:all_of",
    "kind": "jsonfield",
    "description": "すべての子条件が成立する",
    "syntax": "\"condition\": \"minecraft:all_of\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:any_of",
    "kind": "jsonfield",
    "description": "子条件の少なくとも1つが成立する",
    "syntax": "\"condition\": \"minecraft:any_of\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:inverted",
    "kind": "jsonfield",
    "description": "条件結果を反転する",
    "syntax": "\"condition\": \"minecraft:inverted\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:block_state_property",
    "kind": "jsonfield",
    "description": "対象ブロックの状態プロパティを判定",
    "syntax": "\"condition\": \"minecraft:block_state_property\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:damage_source_properties",
    "kind": "jsonfield",
    "description": "ダメージ源の属性を判定",
    "syntax": "\"condition\": \"minecraft:damage_source_properties\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:entity_properties",
    "kind": "jsonfield",
    "description": "エンティティの状態等を判定",
    "syntax": "\"condition\": \"minecraft:entity_properties\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:entity_scores",
    "kind": "jsonfield",
    "description": "スコアボード値を判定",
    "syntax": "\"condition\": \"minecraft:entity_scores\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:killed_by_player",
    "kind": "jsonfield",
    "description": "プレイヤーによる撃破か判定",
    "syntax": "\"condition\": \"minecraft:killed_by_player\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:location_check",
    "kind": "jsonfield",
    "description": "ルート位置の場所条件を判定",
    "syntax": "\"condition\": \"minecraft:location_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:match_tool",
    "kind": "jsonfield",
    "description": "使用ツールが条件に一致するか判定",
    "syntax": "\"condition\": \"minecraft:match_tool\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:random_chance",
    "kind": "jsonfield",
    "description": "指定確率で成立",
    "syntax": "\"condition\": \"minecraft:random_chance\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:survives_explosion",
    "kind": "jsonfield",
    "description": "爆発破壊後に残ったか判定",
    "syntax": "\"condition\": \"minecraft:survives_explosion\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:table_bonus",
    "kind": "jsonfield",
    "description": "エンチャントレベル別確率表を参照",
    "syntax": "\"condition\": \"minecraft:table_bonus\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:time_check",
    "kind": "jsonfield",
    "description": "ワールド時刻の範囲を判定",
    "syntax": "\"condition\": \"minecraft:time_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:weather_check",
    "kind": "jsonfield",
    "description": "天候状態を判定",
    "syntax": "\"condition\": \"minecraft:weather_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:value_check",
    "kind": "jsonfield",
    "description": "数値プロバイダーの値を範囲判定",
    "syntax": "\"condition\": \"minecraft:value_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:reference",
    "kind": "jsonfield",
    "description": "他のpredicateを参照",
    "syntax": "\"condition\": \"minecraft:reference\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート条件: minecraft:enchantment_active_check",
    "kind": "jsonfield",
    "description": "エンチャント効果の有効状態を判定",
    "syntax": "\"condition\": \"minecraft:enchantment_active_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルや述語で使用される条件ID。必要な追加フィールドは条件型ごとに異なる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_count",
    "kind": "jsonfield",
    "description": "アイテム数を指定または調整",
    "syntax": "\"function\": \"minecraft:set_count\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_damage",
    "kind": "jsonfield",
    "description": "耐久値相当のdamageコンポーネントを調整",
    "syntax": "\"function\": \"minecraft:set_damage\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_name",
    "kind": "jsonfield",
    "description": "カスタム名を設定",
    "syntax": "\"function\": \"minecraft:set_name\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_lore",
    "kind": "jsonfield",
    "description": "説明文を設定",
    "syntax": "\"function\": \"minecraft:set_lore\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_enchantments",
    "kind": "jsonfield",
    "description": "エンチャントのレベルを設定",
    "syntax": "\"function\": \"minecraft:set_enchantments\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:enchant_randomly",
    "kind": "jsonfield",
    "description": "候補からランダムにエンチャント",
    "syntax": "\"function\": \"minecraft:enchant_randomly\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:enchant_with_levels",
    "kind": "jsonfield",
    "description": "指定レベル相当でエンチャント",
    "syntax": "\"function\": \"minecraft:enchant_with_levels\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:copy_nbt",
    "kind": "jsonfield",
    "description": "エンティティ等のデータをアイテムへコピー",
    "syntax": "\"function\": \"minecraft:copy_nbt\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:copy_state",
    "kind": "jsonfield",
    "description": "ブロック状態をアイテムデータへ反映",
    "syntax": "\"function\": \"minecraft:copy_state\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_loot_table",
    "kind": "jsonfield",
    "description": "アイテムに参照ルートテーブルを設定",
    "syntax": "\"function\": \"minecraft:set_loot_table\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_contents",
    "kind": "jsonfield",
    "description": "コンテナ等の内容を設定",
    "syntax": "\"function\": \"minecraft:set_contents\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:explosion_decay",
    "kind": "jsonfield",
    "description": "爆発で消失する確率を調整",
    "syntax": "\"function\": \"minecraft:explosion_decay\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:furnace_smelt",
    "kind": "jsonfield",
    "description": "精錬可能アイテムを精錬後のアイテムに変換",
    "syntax": "\"function\": \"minecraft:furnace_smelt\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:limit_count",
    "kind": "jsonfield",
    "description": "個数を指定範囲に制限",
    "syntax": "\"function\": \"minecraft:limit_count\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_attributes",
    "kind": "jsonfield",
    "description": "属性modifierを設定",
    "syntax": "\"function\": \"minecraft:set_attributes\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_stew_effect",
    "kind": "jsonfield",
    "description": "怪しげなシチューの効果を設定",
    "syntax": "\"function\": \"minecraft:set_stew_effect\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_potion",
    "kind": "jsonfield",
    "description": "ポーションIDを設定",
    "syntax": "\"function\": \"minecraft:set_potion\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_custom_data",
    "kind": "jsonfield",
    "description": "custom_dataコンポーネントを設定",
    "syntax": "\"function\": \"minecraft:set_custom_data\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_components",
    "kind": "jsonfield",
    "description": "アイテムコンポーネントを設定",
    "syntax": "\"function\": \"minecraft:set_components\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:modify_contents",
    "kind": "jsonfield",
    "description": "コンテナ内容のアイテムに修飾を適用する形式",
    "syntax": "\"function\": \"minecraft:modify_contents\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:filtered",
    "kind": "jsonfield",
    "description": "条件に合致するアイテムに修飾を適用する形式",
    "syntax": "\"function\": \"minecraft:filtered\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:reference",
    "kind": "jsonfield",
    "description": "別item_modifier IDの処理を参照",
    "syntax": "\"function\": \"minecraft:reference\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:sequence",
    "kind": "jsonfield",
    "description": "修飾処理を順番に適用",
    "syntax": "\"function\": \"minecraft:sequence\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "ルート関数: minecraft:set_banner_pattern",
    "kind": "jsonfield",
    "description": "旗模様を設定する修飾。実装版で利用可否を確認",
    "syntax": "\"function\": \"minecraft:set_banner_pattern\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムコンポーネントの仕様変更がある。1.21.1対応の個別形式を参照する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.type",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: type",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.config",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: config",
    "syntax": "\"config\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.state_provider",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: state_provider",
    "syntax": "\"state_provider\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.size",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: size",
    "syntax": "\"size\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.discard_chance_on_air_exposure",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: discard_chance_on_air_exposure",
    "syntax": "\"discard_chance_on_air_exposure\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.tries",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: tries",
    "syntax": "\"tries\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.xz_spread",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: xz_spread",
    "syntax": "\"xz_spread\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.y_spread",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: y_spread",
    "syntax": "\"y_spread\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.height",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: height",
    "syntax": "\"height\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.count",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: count",
    "syntax": "\"count\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.chance",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: chance",
    "syntax": "\"chance\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.radius",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: radius",
    "syntax": "\"radius\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.targets",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: targets",
    "syntax": "\"targets\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_feature.feature",
    "kind": "jsonfield",
    "description": "configured_feature定義で使用される項目候補: feature",
    "syntax": "\"feature\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.feature",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: feature",
    "syntax": "\"feature\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.placement",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: placement",
    "syntax": "\"placement\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.count",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: count",
    "syntax": "\"count\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.rarity_filter",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: rarity_filter",
    "syntax": "\"rarity_filter\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.in_square",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: in_square",
    "syntax": "\"in_square\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.height_range",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: height_range",
    "syntax": "\"height_range\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.biome",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: biome",
    "syntax": "\"biome\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.environment_scan",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: environment_scan",
    "syntax": "\"environment_scan\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.block_predicate_filter",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: block_predicate_filter",
    "syntax": "\"block_predicate_filter\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/placed_feature.surface_relative_threshold_filter",
    "kind": "jsonfield",
    "description": "placed_feature定義で使用される項目候補: surface_relative_threshold_filter",
    "syntax": "\"surface_relative_threshold_filter\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はplaced_featureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.type",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: type",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.config",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: config",
    "syntax": "\"config\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.probability",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: probability",
    "syntax": "\"probability\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.y",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: y",
    "syntax": "\"y\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.yScale",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: yScale",
    "syntax": "\"yScale\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.lava_level",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: lava_level",
    "syntax": "\"lava_level\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.aquifers_enabled",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: aquifers_enabled",
    "syntax": "\"aquifers_enabled\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.horizontal_radius_multiplier",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: horizontal_radius_multiplier",
    "syntax": "\"horizontal_radius_multiplier\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.vertical_radius_multiplier",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: vertical_radius_multiplier",
    "syntax": "\"vertical_radius_multiplier\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.debug_settings",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: debug_settings",
    "syntax": "\"debug_settings\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/configured_carver.replaceable",
    "kind": "jsonfield",
    "description": "configured_carver定義で使用される項目候補: replaceable",
    "syntax": "\"replaceable\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はconfigured_carverのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.type",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: type",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.biomes",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: biomes",
    "syntax": "\"biomes\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.step",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: step",
    "syntax": "\"step\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.spawn_overrides",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: spawn_overrides",
    "syntax": "\"spawn_overrides\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.terrain_adaptation",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: terrain_adaptation",
    "syntax": "\"terrain_adaptation\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.size",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: size",
    "syntax": "\"size\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.start_pool",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: start_pool",
    "syntax": "\"start_pool\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.start_height",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: start_height",
    "syntax": "\"start_height\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.project_start_to_heightmap",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: project_start_to_heightmap",
    "syntax": "\"project_start_to_heightmap\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure.max_distance_from_center",
    "kind": "jsonfield",
    "description": "structure定義で使用される項目候補: max_distance_from_center",
    "syntax": "\"max_distance_from_center\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructureのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.structures",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: structures",
    "syntax": "\"structures\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.placement",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: placement",
    "syntax": "\"placement\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.salt",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: salt",
    "syntax": "\"salt\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.spacing",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: spacing",
    "syntax": "\"spacing\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.separation",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: separation",
    "syntax": "\"separation\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.spread_type",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: spread_type",
    "syntax": "\"spread_type\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.frequency",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: frequency",
    "syntax": "\"frequency\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.frequency_reduction_method",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: frequency_reduction_method",
    "syntax": "\"frequency_reduction_method\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/structure_set.exclusion_zone",
    "kind": "jsonfield",
    "description": "structure_set定義で使用される項目候補: exclusion_zone",
    "syntax": "\"exclusion_zone\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はstructure_setのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.name",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: name",
    "syntax": "\"name\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.fallback",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: fallback",
    "syntax": "\"fallback\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.elements",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: elements",
    "syntax": "\"elements\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.element",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: element",
    "syntax": "\"element\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.weight",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: weight",
    "syntax": "\"weight\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.projection",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: projection",
    "syntax": "\"projection\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.processors",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: processors",
    "syntax": "\"processors\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.location",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: location",
    "syntax": "\"location\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.ground_level_delta",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: ground_level_delta",
    "syntax": "\"ground_level_delta\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.jigsaw_name",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: jigsaw_name",
    "syntax": "\"jigsaw_name\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/template_pool.final_state",
    "kind": "jsonfield",
    "description": "template_pool定義で使用される項目候補: final_state",
    "syntax": "\"final_state\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はtemplate_poolのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.noise",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: noise",
    "syntax": "\"noise\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.default_block",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: default_block",
    "syntax": "\"default_block\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.default_fluid",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: default_fluid",
    "syntax": "\"default_fluid\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.sea_level",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: sea_level",
    "syntax": "\"sea_level\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.disable_mob_generation",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: disable_mob_generation",
    "syntax": "\"disable_mob_generation\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.aquifers_enabled",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: aquifers_enabled",
    "syntax": "\"aquifers_enabled\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.ore_veins_enabled",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: ore_veins_enabled",
    "syntax": "\"ore_veins_enabled\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.legacy_random_source",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: legacy_random_source",
    "syntax": "\"legacy_random_source\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.noise_router",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: noise_router",
    "syntax": "\"noise_router\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.surface_rule",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: surface_rule",
    "syntax": "\"surface_rule\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise_settings.spawn_target",
    "kind": "jsonfield",
    "description": "noise_settings定義で使用される項目候補: spawn_target",
    "syntax": "\"spawn_target\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoise_settingsのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise.firstOctave",
    "kind": "jsonfield",
    "description": "noise定義で使用される項目候補: firstOctave",
    "syntax": "\"firstOctave\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoiseのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/noise.amplitudes",
    "kind": "jsonfield",
    "description": "noise定義で使用される項目候補: amplitudes",
    "syntax": "\"amplitudes\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はnoiseのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.type",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: type",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.argument",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: argument",
    "syntax": "\"argument\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.argument1",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: argument1",
    "syntax": "\"argument1\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.argument2",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: argument2",
    "syntax": "\"argument2\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.input",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: input",
    "syntax": "\"input\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.noise",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: noise",
    "syntax": "\"noise\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.shift_x",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: shift_x",
    "syntax": "\"shift_x\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.shift_y",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: shift_y",
    "syntax": "\"shift_y\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.shift_z",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: shift_z",
    "syntax": "\"shift_z\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.scale",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: scale",
    "syntax": "\"scale\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.max",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: max",
    "syntax": "\"max\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.min",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: min",
    "syntax": "\"min\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.value",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: value",
    "syntax": "\"value\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.entries",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: entries",
    "syntax": "\"entries\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/density_function.spline",
    "kind": "jsonfield",
    "description": "density_function定義で使用される項目候補: spline",
    "syntax": "\"spline\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdensity_functionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/world_preset.dimensions",
    "kind": "jsonfield",
    "description": "world_preset定義で使用される項目候補: dimensions",
    "syntax": "\"dimensions\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はworld_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/world_preset.type",
    "kind": "jsonfield",
    "description": "world_preset定義で使用される項目候補: type",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はworld_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/world_preset.generator",
    "kind": "jsonfield",
    "description": "world_preset定義で使用される項目候補: generator",
    "syntax": "\"generator\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はworld_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/world_preset.biome_source",
    "kind": "jsonfield",
    "description": "world_preset定義で使用される項目候補: biome_source",
    "syntax": "\"biome_source\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はworld_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/world_preset.settings",
    "kind": "jsonfield",
    "description": "world_preset定義で使用される項目候補: settings",
    "syntax": "\"settings\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はworld_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/world_preset.seed",
    "kind": "jsonfield",
    "description": "world_preset定義で使用される項目候補: seed",
    "syntax": "\"seed\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はworld_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/flat_level_generator_preset.settings",
    "kind": "jsonfield",
    "description": "flat_level_generator_preset定義で使用される項目候補: settings",
    "syntax": "\"settings\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はflat_level_generator_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/flat_level_generator_preset.layers",
    "kind": "jsonfield",
    "description": "flat_level_generator_preset定義で使用される項目候補: layers",
    "syntax": "\"layers\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はflat_level_generator_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/flat_level_generator_preset.block",
    "kind": "jsonfield",
    "description": "flat_level_generator_preset定義で使用される項目候補: block",
    "syntax": "\"block\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はflat_level_generator_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/flat_level_generator_preset.height",
    "kind": "jsonfield",
    "description": "flat_level_generator_preset定義で使用される項目候補: height",
    "syntax": "\"height\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はflat_level_generator_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/flat_level_generator_preset.biome",
    "kind": "jsonfield",
    "description": "flat_level_generator_preset定義で使用される項目候補: biome",
    "syntax": "\"biome\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はflat_level_generator_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/flat_level_generator_preset.structures",
    "kind": "jsonfield",
    "description": "flat_level_generator_preset定義で使用される項目候補: structures",
    "syntax": "\"structures\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はflat_level_generator_presetのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/biome.effects",
    "kind": "jsonfield",
    "description": "biome定義で使用される項目候補: effects",
    "syntax": "\"effects\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はbiomeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/biome.spawners",
    "kind": "jsonfield",
    "description": "biome定義で使用される項目候補: spawners",
    "syntax": "\"spawners\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はbiomeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/biome.spawn_costs",
    "kind": "jsonfield",
    "description": "biome定義で使用される項目候補: spawn_costs",
    "syntax": "\"spawn_costs\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はbiomeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/biome.carvers",
    "kind": "jsonfield",
    "description": "biome定義で使用される項目候補: carvers",
    "syntax": "\"carvers\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はbiomeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/biome.features",
    "kind": "jsonfield",
    "description": "biome定義で使用される項目候補: features",
    "syntax": "\"features\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はbiomeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/biome.temperature",
    "kind": "jsonfield",
    "description": "biome定義で使用される項目候補: temperature",
    "syntax": "\"temperature\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はbiomeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/biome.downfall",
    "kind": "jsonfield",
    "description": "biome定義で使用される項目候補: downfall",
    "syntax": "\"downfall\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はbiomeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/biome.has_precipitation",
    "kind": "jsonfield",
    "description": "biome定義で使用される項目候補: has_precipitation",
    "syntax": "\"has_precipitation\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はbiomeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension.type",
    "kind": "jsonfield",
    "description": "dimension定義で使用される項目候補: type",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimensionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension.generator",
    "kind": "jsonfield",
    "description": "dimension定義で使用される項目候補: generator",
    "syntax": "\"generator\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimensionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension.biome_source",
    "kind": "jsonfield",
    "description": "dimension定義で使用される項目候補: biome_source",
    "syntax": "\"biome_source\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimensionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension.seed",
    "kind": "jsonfield",
    "description": "dimension定義で使用される項目候補: seed",
    "syntax": "\"seed\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimensionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension.settings",
    "kind": "jsonfield",
    "description": "dimension定義で使用される項目候補: settings",
    "syntax": "\"settings\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimensionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension.layers",
    "kind": "jsonfield",
    "description": "dimension定義で使用される項目候補: layers",
    "syntax": "\"layers\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimensionのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.min_y",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: min_y",
    "syntax": "\"min_y\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.height",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: height",
    "syntax": "\"height\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.logical_height",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: logical_height",
    "syntax": "\"logical_height\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.coordinate_scale",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: coordinate_scale",
    "syntax": "\"coordinate_scale\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.ambient_light",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: ambient_light",
    "syntax": "\"ambient_light\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.ultrawarm",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: ultrawarm",
    "syntax": "\"ultrawarm\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.natural",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: natural",
    "syntax": "\"natural\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.has_skylight",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: has_skylight",
    "syntax": "\"has_skylight\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.has_ceiling",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: has_ceiling",
    "syntax": "\"has_ceiling\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.bed_works",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: bed_works",
    "syntax": "\"bed_works\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.respawn_anchor_works",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: respawn_anchor_works",
    "syntax": "\"respawn_anchor_works\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.infiniburn",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: infiniburn",
    "syntax": "\"infiniburn\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/dimension_type.effects",
    "kind": "jsonfield",
    "description": "dimension_type定義で使用される項目候補: effects",
    "syntax": "\"effects\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はdimension_typeのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/processor_list.processors",
    "kind": "jsonfield",
    "description": "processor_list定義で使用される項目候補: processors",
    "syntax": "\"processors\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はprocessor_listのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/processor_list.processor_type",
    "kind": "jsonfield",
    "description": "processor_list定義で使用される項目候補: processor_type",
    "syntax": "\"processor_type\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はprocessor_listのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/processor_list.predicate",
    "kind": "jsonfield",
    "description": "processor_list定義で使用される項目候補: predicate",
    "syntax": "\"predicate\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はprocessor_listのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/processor_list.input_predicate",
    "kind": "jsonfield",
    "description": "processor_list定義で使用される項目候補: input_predicate",
    "syntax": "\"input_predicate\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はprocessor_listのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/processor_list.output_state",
    "kind": "jsonfield",
    "description": "processor_list定義で使用される項目候補: output_state",
    "syntax": "\"output_state\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はprocessor_listのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "worldgen/processor_list.rule",
    "kind": "jsonfield",
    "description": "processor_list定義で使用される項目候補: rule",
    "syntax": "\"rule\": ...",
    "tags": [
      "データパック",
      "ワールド生成",
      "JSON"
    ],
    "details": "フィールドの詳細な型と必須性はprocessor_listのtype / schemaに依存する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tags/block/*.json",
    "kind": "file",
    "description": "ブロックIDのタグファイル",
    "syntax": "data/<namespace>/tags/block/<tag>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "タグIDは#<namespace>:<tag>。1.21.1のフォルダ名はblock。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tags/item/*.json",
    "kind": "file",
    "description": "アイテムIDのタグファイル",
    "syntax": "data/<namespace>/tags/item/<tag>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "タグIDは#<namespace>:<tag>。1.21.1のフォルダ名はitem。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tags/entity_type/*.json",
    "kind": "file",
    "description": "エンティティ種類のタグファイル",
    "syntax": "data/<namespace>/tags/entity_type/<tag>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "タグIDは#<namespace>:<tag>。1.21.1のフォルダ名はentity_type。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tags/fluid/*.json",
    "kind": "file",
    "description": "流体IDのタグファイル",
    "syntax": "data/<namespace>/tags/fluid/<tag>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "タグIDは#<namespace>:<tag>。1.21.1のフォルダ名はfluid。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tags/function/*.json",
    "kind": "file",
    "description": "関数IDのタグファイル",
    "syntax": "data/<namespace>/tags/function/<tag>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "タグIDは#<namespace>:<tag>。1.21.1のフォルダ名はfunction。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tags/game_event/*.json",
    "kind": "file",
    "description": "ゲームイベントIDのタグファイル",
    "syntax": "data/<namespace>/tags/game_event/<tag>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "タグIDは#<namespace>:<tag>。1.21.1のフォルダ名はgame_event。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tags/advancement/*.json",
    "kind": "file",
    "description": "進捗IDのタグファイル",
    "syntax": "data/<namespace>/tags/advancement/<tag>.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "タグIDは#<namespace>:<tag>。1.21.1のフォルダ名はadvancement。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tag.replace",
    "kind": "jsonfield",
    "description": "前のデータパックの同じタグを置換するか",
    "syntax": "\"replace\": true",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "省略またはfalseでは通常、前のパックから値がマージされる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tag.values",
    "kind": "jsonfield",
    "description": "タグに含めるIDまたは別タグの一覧",
    "syntax": "\"values\": [\"minecraft:stone\", \"#minecraft:logs\"]",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "先頭に#を付けると別タグを参照する。存在しない参照はデータ読み込みの不具合につながる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "tag.values[].required",
    "kind": "jsonfield",
    "description": "参照IDが存在しない場合の扱い",
    "syntax": "{\"id\":\"example:optional_item\",\"required\":false}",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "optional entry objectでrequiredをfalseにすると未登録IDを許容できる場合がある。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "関数タグ: minecraft:load",
    "kind": "file",
    "description": "パック読み込み時の初期化関数を列挙",
    "syntax": "data/minecraft/tags/function/load.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "valuesに関数IDを設定。objective作成等は重複エラーにならない形にする。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "関数タグ: minecraft:tick",
    "kind": "file",
    "description": "毎tick実行する関数を列挙",
    "syntax": "data/minecraft/tags/function/tick.json",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "tick負荷を小さく保ち、必要な処理をfunctionへ分割する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "最小pack.mcmeta",
    "kind": "code",
    "description": "データパックのメタデータ最小例",
    "syntax": "{\"pack\":{\"pack_format\":48,\"description\":\"Example datapack\"}}",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "pack.mcmetaをデータパックのルートへ置く。1.21.1向け。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "関数のロードタグ",
    "kind": "code",
    "description": "ロード時に初期化関数を呼び出す",
    "syntax": "{\"values\":[\"example:load\"]}",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "data/minecraft/tags/function/load.jsonに保存。namespace内のfunctionsではなく1.21以降はfunctionフォルダ。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "関数のtickタグ",
    "kind": "code",
    "description": "毎tick関数を呼び出す",
    "syntax": "{\"values\":[\"example:tick\"]}",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "data/minecraft/tags/function/tick.jsonに保存。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "簡単な関数ファイル",
    "kind": "code",
    "description": "チャットに動作確認メッセージを出す",
    "syntax": "say Minecraft SEARCH datapack test",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "data/example/function/test.mcfunction。ファイル内のコマンドに先頭スラッシュは不要。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "関数を実行する例",
    "kind": "code",
    "description": "namespace付きfunctionを呼び出す",
    "syntax": "/function example:test",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "ファイルはdata/example/function/test.mcfunction。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "namespace付きレシピパス",
    "kind": "code",
    "description": "自作レシピを定義する位置",
    "syntax": "data/example/recipe/example_recipe.json",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.21以降はrecipesではなくrecipe。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "namespace付き進捗パス",
    "kind": "code",
    "description": "自作進捗を定義する位置",
    "syntax": "data/example/advancement/first.json",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.21以降はadvancementsではなくadvancement。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "namespace付きルートテーブルパス",
    "kind": "code",
    "description": "自作ルートテーブルを定義する位置",
    "syntax": "data/example/loot_table/chests/reward.json",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.21以降はloot_tablesではなくloot_table。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "namespace付きpredicateパス",
    "kind": "code",
    "description": "条件定義を置く位置",
    "syntax": "data/example/predicate/is_night.json",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.21以降はpredicatesではなくpredicate。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "タグの例",
    "kind": "code",
    "description": "ブロックタグに石を追加",
    "syntax": "{\"replace\":false,\"values\":[\"minecraft:stone\"]}",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "data/example/tags/block/my_blocks.jsonに配置。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックを一覧",
    "kind": "code",
    "description": "有効化済みのパックを確認",
    "syntax": "/datapack list enabled",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "読み込み済みデータパックの名前を確認できる。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックを有効化",
    "kind": "code",
    "description": "パックをロード対象にする",
    "syntax": "/datapack enable example_pack",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "ワールドのdatapacksフォルダ等に有効なパックを置いておく。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックを再読込",
    "kind": "code",
    "description": "ファイル編集を再読み込み",
    "syntax": "/reload",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "ログにエラーがないかも確認する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックを優先",
    "kind": "code",
    "description": "優先順位を指定して有効化",
    "syntax": "/datapack enable example_pack first",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "同じIDパスを上書きする場合はロード順が結果に影響する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "フィルターの例",
    "kind": "code",
    "description": "下位パックのexample namespaceを隠す",
    "syntax": "{\"pack\":{\"pack_format\":48,\"description\":\"Filter example\"},\"filter\":{\"block\":[{\"namespace\":\"example\",\"path\":\".*\"}]}}",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.19+のfilterを使用。1.21.1のpack_formatは48。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパックが一覧に出ない",
    "kind": "example",
    "description": "pack.mcmetaの配置、フォルダ階層、ZIP内の階層を確認",
    "syntax": "pack.mcmetaがルート直下にあるか",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "ZIPを展開したとき内側のフォルダがさらに一段入れ子になっていないか確認する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "データパック形式警告",
    "kind": "example",
    "description": "pack.mcmetaのpack_formatが実行版と合うか確認",
    "syntax": "\"pack_format\": 48",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "Java 1.21.1用の数値。別バージョンへ流用しない。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "functionが見つからない",
    "kind": "example",
    "description": "フォルダ名と名前空間、拡張子、関数IDを確認",
    "syntax": "data/example/function/test.mcfunction",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "1.21以降はfunctionsではなくfunction。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "レシピが読み込まれない",
    "kind": "example",
    "description": "recipeの単数形パスとtype/ingredient/resultを確認",
    "syntax": "data/example/recipe/test.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "1.21.1のアイテムスタック形式を使う。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "タグが読み込まれない",
    "kind": "example",
    "description": "tags下のレジストリ名と各IDの存在を確認",
    "syntax": "data/example/tags/item/my_tag.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "item/blocksなど複数形の古いフォルダ名を避ける。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "変更が反映されない",
    "kind": "example",
    "description": "/reloadのログを読み、動的レジストリならワールド再起動",
    "syntax": "/reload",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "すべての種類がreloadだけで更新されるわけではない。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "JSON構文エラー",
    "kind": "example",
    "description": "カンマ、引用符、括弧、型を確認",
    "syntax": "JSON lintで検証",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "Minecraftのログに出るファイルパスや行情報を確認する。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "同じIDが意図せず上書きされた",
    "kind": "example",
    "description": "ロード優先順位と同一namespace/pathを確認",
    "syntax": "/datapack list enabled",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "同一のregistry/pathは優先順位の高いファイルが採用される。タグはreplace設定にも注意。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "セーフモードが提示された",
    "kind": "example",
    "description": "最後に追加したパックを確認し無効化・修正",
    "syntax": "Safe Mode",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "不正なタグ参照など致命的なデータ読み込みエラーが原因になり得る。\n参考: Minecraft Wiki「Data pack」。文章の丸写しではなく、検索用に要約・構造化。対象はJava Edition 1.21.1 / data pack format 48。参照: https://theminecraftwiki.com/wiki/data-pack/ と https://minecraft.wiki/w/Template:Data_pack_format"
  },
  {
    "name": "進捗trigger: minecraft:allay_drop_item_on_block",
    "kind": "jsonfield",
    "description": "アレイがブロック上にアイテムを落とす",
    "syntax": "\"trigger\": \"minecraft:allay_drop_item_on_block\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:avoid_vibration",
    "kind": "jsonfield",
    "description": "振動イベントを避ける",
    "syntax": "\"trigger\": \"minecraft:avoid_vibration\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:bee_nest_destroyed",
    "kind": "jsonfield",
    "description": "蜂の巣・養蜂箱を破壊する",
    "syntax": "\"trigger\": \"minecraft:bee_nest_destroyed\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:bred_animals",
    "kind": "jsonfield",
    "description": "動物を繁殖させる",
    "syntax": "\"trigger\": \"minecraft:bred_animals\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:brewed_potion",
    "kind": "jsonfield",
    "description": "ポーションを醸造する",
    "syntax": "\"trigger\": \"minecraft:brewed_potion\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:changed_dimension",
    "kind": "jsonfield",
    "description": "ディメンション間を移動する",
    "syntax": "\"trigger\": \"minecraft:changed_dimension\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:channeled_lightning",
    "kind": "jsonfield",
    "description": "召雷のトライデントで稲妻を命中させる",
    "syntax": "\"trigger\": \"minecraft:channeled_lightning\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:construct_beacon",
    "kind": "jsonfield",
    "description": "ビーコンを構築する",
    "syntax": "\"trigger\": \"minecraft:construct_beacon\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:consume_item",
    "kind": "jsonfield",
    "description": "アイテムを消費する",
    "syntax": "\"trigger\": \"minecraft:consume_item\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:cured_zombie_villager",
    "kind": "jsonfield",
    "description": "村人ゾンビを治療する",
    "syntax": "\"trigger\": \"minecraft:cured_zombie_villager\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:effects_changed",
    "kind": "jsonfield",
    "description": "ステータス効果が変化する",
    "syntax": "\"trigger\": \"minecraft:effects_changed\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:enchanted_item",
    "kind": "jsonfield",
    "description": "エンチャントテーブルでアイテムをエンチャントする",
    "syntax": "\"trigger\": \"minecraft:enchanted_item\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:enter_block",
    "kind": "jsonfield",
    "description": "特定ブロックに入る",
    "syntax": "\"trigger\": \"minecraft:enter_block\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:entity_hurt_player",
    "kind": "jsonfield",
    "description": "プレイヤーがダメージを受ける",
    "syntax": "\"trigger\": \"minecraft:entity_hurt_player\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:entity_killed_player",
    "kind": "jsonfield",
    "description": "エンティティにプレイヤーが倒される",
    "syntax": "\"trigger\": \"minecraft:entity_killed_player\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:fall_from_height",
    "kind": "jsonfield",
    "description": "落下後に着地する",
    "syntax": "\"trigger\": \"minecraft:fall_from_height\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:filled_bucket",
    "kind": "jsonfield",
    "description": "バケツを満たす",
    "syntax": "\"trigger\": \"minecraft:filled_bucket\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:fishing_rod_hooked",
    "kind": "jsonfield",
    "description": "釣り竿でアイテムやエンティティを釣る",
    "syntax": "\"trigger\": \"minecraft:fishing_rod_hooked\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:hero_of_the_village",
    "kind": "jsonfield",
    "description": "村の英雄効果を得る",
    "syntax": "\"trigger\": \"minecraft:hero_of_the_village\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:impossible",
    "kind": "jsonfield",
    "description": "通常プレイでは成立しないトリガー",
    "syntax": "\"trigger\": \"minecraft:impossible\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:inventory_changed",
    "kind": "jsonfield",
    "description": "インベントリ内容が変化する",
    "syntax": "\"trigger\": \"minecraft:inventory_changed\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:item_durability_changed",
    "kind": "jsonfield",
    "description": "アイテムの耐久値が変化する",
    "syntax": "\"trigger\": \"minecraft:item_durability_changed\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:item_used_on_block",
    "kind": "jsonfield",
    "description": "アイテムをブロックに使う",
    "syntax": "\"trigger\": \"minecraft:item_used_on_block\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:kill_mob_near_sculk_catalyst",
    "kind": "jsonfield",
    "description": "スカルクカタリスト付近でMobを倒す",
    "syntax": "\"trigger\": \"minecraft:kill_mob_near_sculk_catalyst\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:killed_by_crossbow",
    "kind": "jsonfield",
    "description": "クロスボウでエンティティを倒す",
    "syntax": "\"trigger\": \"minecraft:killed_by_crossbow\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:levitation",
    "kind": "jsonfield",
    "description": "浮遊効果中に移動する",
    "syntax": "\"trigger\": \"minecraft:levitation\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:lightning_strike",
    "kind": "jsonfield",
    "description": "稲妻が落ちる",
    "syntax": "\"trigger\": \"minecraft:lightning_strike\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:location",
    "kind": "jsonfield",
    "description": "位置条件を満たす",
    "syntax": "\"trigger\": \"minecraft:location\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:nether_travel",
    "kind": "jsonfield",
    "description": "ネザー移動距離の条件を満たす",
    "syntax": "\"trigger\": \"minecraft:nether_travel\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:placed_block",
    "kind": "jsonfield",
    "description": "ブロックを設置する",
    "syntax": "\"trigger\": \"minecraft:placed_block\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:player_generates_container_loot",
    "kind": "jsonfield",
    "description": "コンテナのルートを生成する",
    "syntax": "\"trigger\": \"minecraft:player_generates_container_loot\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:player_hurt_entity",
    "kind": "jsonfield",
    "description": "プレイヤーがエンティティにダメージを与える",
    "syntax": "\"trigger\": \"minecraft:player_hurt_entity\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:player_interacted_with_block",
    "kind": "jsonfield",
    "description": "プレイヤーがブロックと対話する",
    "syntax": "\"trigger\": \"minecraft:player_interacted_with_block\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:player_interacted_with_entity",
    "kind": "jsonfield",
    "description": "プレイヤーがエンティティと対話する",
    "syntax": "\"trigger\": \"minecraft:player_interacted_with_entity\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:player_killed_entity",
    "kind": "jsonfield",
    "description": "プレイヤーがエンティティを倒す",
    "syntax": "\"trigger\": \"minecraft:player_killed_entity\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:recipe_crafted",
    "kind": "jsonfield",
    "description": "レシピを作成する",
    "syntax": "\"trigger\": \"minecraft:recipe_crafted\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:recipe_unlocked",
    "kind": "jsonfield",
    "description": "レシピを解放する",
    "syntax": "\"trigger\": \"minecraft:recipe_unlocked\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:ride_entity_in_lava",
    "kind": "jsonfield",
    "description": "溶岩上で乗り物に乗る",
    "syntax": "\"trigger\": \"minecraft:ride_entity_in_lava\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:shot_crossbow",
    "kind": "jsonfield",
    "description": "クロスボウを発射する",
    "syntax": "\"trigger\": \"minecraft:shot_crossbow\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:slide_down_block",
    "kind": "jsonfield",
    "description": "ブロック面を滑り降りる",
    "syntax": "\"trigger\": \"minecraft:slide_down_block\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:started_riding",
    "kind": "jsonfield",
    "description": "乗り物に乗り始める",
    "syntax": "\"trigger\": \"minecraft:started_riding\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:summoned_entity",
    "kind": "jsonfield",
    "description": "エンティティが召喚される",
    "syntax": "\"trigger\": \"minecraft:summoned_entity\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:tame_animal",
    "kind": "jsonfield",
    "description": "動物を手懐ける",
    "syntax": "\"trigger\": \"minecraft:tame_animal\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:target_hit",
    "kind": "jsonfield",
    "description": "的に命中させる",
    "syntax": "\"trigger\": \"minecraft:target_hit\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:thrown_item_picked_up_by_entity",
    "kind": "jsonfield",
    "description": "投げられたアイテムをエンティティが拾う",
    "syntax": "\"trigger\": \"minecraft:thrown_item_picked_up_by_entity\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:thrown_item_picked_up_by_player",
    "kind": "jsonfield",
    "description": "投げられたアイテムをプレイヤーが拾う",
    "syntax": "\"trigger\": \"minecraft:thrown_item_picked_up_by_player\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:tick",
    "kind": "jsonfield",
    "description": "tickごとに判定する",
    "syntax": "\"trigger\": \"minecraft:tick\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:used_ender_eye",
    "kind": "jsonfield",
    "description": "エンダーアイを使用する",
    "syntax": "\"trigger\": \"minecraft:used_ender_eye\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:used_totem",
    "kind": "jsonfield",
    "description": "不死のトーテムを使用する",
    "syntax": "\"trigger\": \"minecraft:used_totem\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:using_item",
    "kind": "jsonfield",
    "description": "アイテムを使用中である",
    "syntax": "\"trigger\": \"minecraft:using_item\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:villager_trade",
    "kind": "jsonfield",
    "description": "村人と取引する",
    "syntax": "\"trigger\": \"minecraft:villager_trade\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "進捗trigger: minecraft:voluntary_exile",
    "kind": "jsonfield",
    "description": "襲撃の開始につながるイベント",
    "syntax": "\"trigger\": \"minecraft:voluntary_exile\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "advancement JSON の criteria.<criterion>.trigger に指定する。conditions の追加フィールドはトリガーごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.root.display",
    "kind": "jsonfield",
    "description": "進捗の表示設定",
    "syntax": "\"display\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "任意。表示する場合はicon/title/descriptionが重要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.root.parent",
    "kind": "jsonfield",
    "description": "親進捗のID",
    "syntax": "\"parent\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "親子関係と画面タブの配置を決める。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.root.criteria",
    "kind": "jsonfield",
    "description": "進捗判定条件の辞書",
    "syntax": "\"criteria\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "criterion名ごとにtriggerと任意conditionsを設定する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.root.requirements",
    "kind": "jsonfield",
    "description": "criterionのAND/OR組み合わせ",
    "syntax": "\"requirements\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "内側配列内はOR、外側配列同士はAND。省略時は全criteriaが必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.root.rewards",
    "kind": "jsonfield",
    "description": "進捗獲得報酬",
    "syntax": "\"rewards\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "経験値、ルート、レシピ、関数を指定する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.root.sends_telemetry_event",
    "kind": "jsonfield",
    "description": "達成時にテレメトリーイベントを送るか",
    "syntax": "\"sends_telemetry_event\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.21.1形式の任意boolean。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.icon.id",
    "kind": "jsonfield",
    "description": "アイコンに表示するアイテムID",
    "syntax": "\"id\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はアイテムスタック形式の版差に注意。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.icon.components",
    "kind": "jsonfield",
    "description": "アイコンに適用するアイテムコンポーネント",
    "syntax": "\"components\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "対象バージョンで対応する成分だけを使用。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.title",
    "kind": "jsonfield",
    "description": "進捗タイトル",
    "syntax": "\"title\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSONテキストコンポーネント。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.description",
    "kind": "jsonfield",
    "description": "進捗説明文",
    "syntax": "\"description\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSONテキストコンポーネント。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.background",
    "kind": "jsonfield",
    "description": "タブ背景テクスチャ",
    "syntax": "\"background\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "root advancement向け。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.frame",
    "kind": "jsonfield",
    "description": "タスク/ゴール/チャレンジの表示枠",
    "syntax": "\"frame\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "task / goal / challenge。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.show_toast",
    "kind": "jsonfield",
    "description": "獲得時トーストを出すか",
    "syntax": "\"show_toast\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.announce_to_chat",
    "kind": "jsonfield",
    "description": "獲得をチャットに通知するか",
    "syntax": "\"announce_to_chat\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.display.hidden",
    "kind": "jsonfield",
    "description": "進捗画面で隠すか",
    "syntax": "\"hidden\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "boolean。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.rewards.experience",
    "kind": "jsonfield",
    "description": "付与する経験値",
    "syntax": "\"experience\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "整数。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.rewards.loot",
    "kind": "jsonfield",
    "description": "獲得時に生成するルートテーブルID",
    "syntax": "\"loot\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDの配列。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.rewards.recipes",
    "kind": "jsonfield",
    "description": "解放するレシピID",
    "syntax": "\"recipes\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "IDの配列。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.rewards.function",
    "kind": "jsonfield",
    "description": "獲得時に実行する関数ID",
    "syntax": "\"function\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "関数タグではなく特定の関数IDを指定。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.criteria.*.trigger",
    "kind": "jsonfield",
    "description": "進捗イベントID",
    "syntax": "\"trigger\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "minecraft:名前の形式。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.criteria.*.conditions",
    "kind": "jsonfield",
    "description": "イベント固有の追加条件",
    "syntax": "\"conditions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "triggerが定義する条件だけ指定。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement.criteria.*.conditions.player",
    "kind": "jsonfield",
    "description": "獲得対象プレイヤーのエンティティ条件",
    "syntax": "\"player\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "impossible以外の多くのtriggerで利用。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: construct_beacon.level",
    "kind": "jsonfield",
    "description": "construct_beaconトリガーで使う条件項目: level",
    "syntax": "\"level\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: consume_item.item",
    "kind": "jsonfield",
    "description": "consume_itemトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: cured_zombie_villager.villager",
    "kind": "jsonfield",
    "description": "cured_zombie_villagerトリガーで使う条件項目: villager",
    "syntax": "\"villager\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: cured_zombie_villager.zombie",
    "kind": "jsonfield",
    "description": "cured_zombie_villagerトリガーで使う条件項目: zombie",
    "syntax": "\"zombie\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: effects_changed.effects",
    "kind": "jsonfield",
    "description": "effects_changedトリガーで使う条件項目: effects",
    "syntax": "\"effects\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: effects_changed.source",
    "kind": "jsonfield",
    "description": "effects_changedトリガーで使う条件項目: source",
    "syntax": "\"source\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: enchanted_item.item",
    "kind": "jsonfield",
    "description": "enchanted_itemトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: enchanted_item.levels",
    "kind": "jsonfield",
    "description": "enchanted_itemトリガーで使う条件項目: levels",
    "syntax": "\"levels\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: entity_hurt_player.damage",
    "kind": "jsonfield",
    "description": "entity_hurt_playerトリガーで使う条件項目: damage",
    "syntax": "\"damage\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: entity_killed_player.entity",
    "kind": "jsonfield",
    "description": "entity_killed_playerトリガーで使う条件項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: entity_killed_player.killing_blow",
    "kind": "jsonfield",
    "description": "entity_killed_playerトリガーで使う条件項目: killing_blow",
    "syntax": "\"killing_blow\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: fall_from_height.start_position",
    "kind": "jsonfield",
    "description": "fall_from_heightトリガーで使う条件項目: start_position",
    "syntax": "\"start_position\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: fall_from_height.distance",
    "kind": "jsonfield",
    "description": "fall_from_heightトリガーで使う条件項目: distance",
    "syntax": "\"distance\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: filled_bucket.item",
    "kind": "jsonfield",
    "description": "filled_bucketトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: fishing_rod_hooked.entity",
    "kind": "jsonfield",
    "description": "fishing_rod_hookedトリガーで使う条件項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: fishing_rod_hooked.item",
    "kind": "jsonfield",
    "description": "fishing_rod_hookedトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: fishing_rod_hooked.rod",
    "kind": "jsonfield",
    "description": "fishing_rod_hookedトリガーで使う条件項目: rod",
    "syntax": "\"rod\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: inventory_changed.items",
    "kind": "jsonfield",
    "description": "inventory_changedトリガーで使う条件項目: items",
    "syntax": "\"items\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: inventory_changed.slots.empty",
    "kind": "jsonfield",
    "description": "inventory_changedトリガーで使う条件項目: slots.empty",
    "syntax": "\"slots.empty\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: inventory_changed.slots.full",
    "kind": "jsonfield",
    "description": "inventory_changedトリガーで使う条件項目: slots.full",
    "syntax": "\"slots.full\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: inventory_changed.slots.occupied",
    "kind": "jsonfield",
    "description": "inventory_changedトリガーで使う条件項目: slots.occupied",
    "syntax": "\"slots.occupied\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: item_durability_changed.delta",
    "kind": "jsonfield",
    "description": "item_durability_changedトリガーで使う条件項目: delta",
    "syntax": "\"delta\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: item_durability_changed.durability",
    "kind": "jsonfield",
    "description": "item_durability_changedトリガーで使う条件項目: durability",
    "syntax": "\"durability\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: item_durability_changed.item",
    "kind": "jsonfield",
    "description": "item_durability_changedトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: item_used_on_block.location",
    "kind": "jsonfield",
    "description": "item_used_on_blockトリガーで使う条件項目: location",
    "syntax": "\"location\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: killed_by_crossbow.unique_entity_types",
    "kind": "jsonfield",
    "description": "killed_by_crossbowトリガーで使う条件項目: unique_entity_types",
    "syntax": "\"unique_entity_types\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: killed_by_crossbow.victims",
    "kind": "jsonfield",
    "description": "killed_by_crossbowトリガーで使う条件項目: victims",
    "syntax": "\"victims\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: lightning_strike.lightning",
    "kind": "jsonfield",
    "description": "lightning_strikeトリガーで使う条件項目: lightning",
    "syntax": "\"lightning\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: lightning_strike.bystander",
    "kind": "jsonfield",
    "description": "lightning_strikeトリガーで使う条件項目: bystander",
    "syntax": "\"bystander\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: nether_travel.distance",
    "kind": "jsonfield",
    "description": "nether_travelトリガーで使う条件項目: distance",
    "syntax": "\"distance\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: placed_block.block",
    "kind": "jsonfield",
    "description": "placed_blockトリガーで使う条件項目: block",
    "syntax": "\"block\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: placed_block.state",
    "kind": "jsonfield",
    "description": "placed_blockトリガーで使う条件項目: state",
    "syntax": "\"state\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: placed_block.location",
    "kind": "jsonfield",
    "description": "placed_blockトリガーで使う条件項目: location",
    "syntax": "\"location\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: placed_block.item",
    "kind": "jsonfield",
    "description": "placed_blockトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: player_generates_container_loot.loot_table",
    "kind": "jsonfield",
    "description": "player_generates_container_lootトリガーで使う条件項目: loot_table",
    "syntax": "\"loot_table\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: player_hurt_entity.damage",
    "kind": "jsonfield",
    "description": "player_hurt_entityトリガーで使う条件項目: damage",
    "syntax": "\"damage\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: player_hurt_entity.entity",
    "kind": "jsonfield",
    "description": "player_hurt_entityトリガーで使う条件項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: player_killed_entity.entity",
    "kind": "jsonfield",
    "description": "player_killed_entityトリガーで使う条件項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: player_killed_entity.killing_blow",
    "kind": "jsonfield",
    "description": "player_killed_entityトリガーで使う条件項目: killing_blow",
    "syntax": "\"killing_blow\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: player_interacted_with_block.location",
    "kind": "jsonfield",
    "description": "player_interacted_with_blockトリガーで使う条件項目: location",
    "syntax": "\"location\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: player_interacted_with_entity.entity",
    "kind": "jsonfield",
    "description": "player_interacted_with_entityトリガーで使う条件項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: recipe_crafted.recipe_id",
    "kind": "jsonfield",
    "description": "recipe_craftedトリガーで使う条件項目: recipe_id",
    "syntax": "\"recipe_id\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: recipe_crafted.ingredients",
    "kind": "jsonfield",
    "description": "recipe_craftedトリガーで使う条件項目: ingredients",
    "syntax": "\"ingredients\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: recipe_unlocked.recipe",
    "kind": "jsonfield",
    "description": "recipe_unlockedトリガーで使う条件項目: recipe",
    "syntax": "\"recipe\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: ride_entity_in_lava.start_position",
    "kind": "jsonfield",
    "description": "ride_entity_in_lavaトリガーで使う条件項目: start_position",
    "syntax": "\"start_position\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: ride_entity_in_lava.distance",
    "kind": "jsonfield",
    "description": "ride_entity_in_lavaトリガーで使う条件項目: distance",
    "syntax": "\"distance\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: shot_crossbow.item",
    "kind": "jsonfield",
    "description": "shot_crossbowトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: slide_down_block.block",
    "kind": "jsonfield",
    "description": "slide_down_blockトリガーで使う条件項目: block",
    "syntax": "\"block\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: summoned_entity.entity",
    "kind": "jsonfield",
    "description": "summoned_entityトリガーで使う条件項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: target_hit.projectile",
    "kind": "jsonfield",
    "description": "target_hitトリガーで使う条件項目: projectile",
    "syntax": "\"projectile\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: target_hit.shooter",
    "kind": "jsonfield",
    "description": "target_hitトリガーで使う条件項目: shooter",
    "syntax": "\"shooter\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: target_hit.signal_strength",
    "kind": "jsonfield",
    "description": "target_hitトリガーで使う条件項目: signal_strength",
    "syntax": "\"signal_strength\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: thrown_item_picked_up_by_entity.item",
    "kind": "jsonfield",
    "description": "thrown_item_picked_up_by_entityトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: thrown_item_picked_up_by_entity.entity",
    "kind": "jsonfield",
    "description": "thrown_item_picked_up_by_entityトリガーで使う条件項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: thrown_item_picked_up_by_player.item",
    "kind": "jsonfield",
    "description": "thrown_item_picked_up_by_playerトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: thrown_item_picked_up_by_player.entity",
    "kind": "jsonfield",
    "description": "thrown_item_picked_up_by_playerトリガーで使う条件項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: used_ender_eye.distance",
    "kind": "jsonfield",
    "description": "used_ender_eyeトリガーで使う条件項目: distance",
    "syntax": "\"distance\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: used_totem.item",
    "kind": "jsonfield",
    "description": "used_totemトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: villager_trade.item",
    "kind": "jsonfield",
    "description": "villager_tradeトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: villager_trade.villager",
    "kind": "jsonfield",
    "description": "villager_tradeトリガーで使う条件項目: villager",
    "syntax": "\"villager\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: changed_dimension.from",
    "kind": "jsonfield",
    "description": "changed_dimensionトリガーで使う条件項目: from",
    "syntax": "\"from\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: changed_dimension.to",
    "kind": "jsonfield",
    "description": "changed_dimensionトリガーで使う条件項目: to",
    "syntax": "\"to\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: bred_animals.parent",
    "kind": "jsonfield",
    "description": "bred_animalsトリガーで使う条件項目: parent",
    "syntax": "\"parent\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: bred_animals.partner",
    "kind": "jsonfield",
    "description": "bred_animalsトリガーで使う条件項目: partner",
    "syntax": "\"partner\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: bred_animals.child",
    "kind": "jsonfield",
    "description": "bred_animalsトリガーで使う条件項目: child",
    "syntax": "\"child\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: channeled_lightning.victims",
    "kind": "jsonfield",
    "description": "channeled_lightningトリガーで使う条件項目: victims",
    "syntax": "\"victims\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: allay_drop_item_on_block.item",
    "kind": "jsonfield",
    "description": "allay_drop_item_on_blockトリガーで使う条件項目: item",
    "syntax": "\"item\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "advancement condition: allay_drop_item_on_block.location",
    "kind": "jsonfield",
    "description": "allay_drop_item_on_blockトリガーで使う条件項目: location",
    "syntax": "\"location\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "この項目は該当triggerのconditions内に配置する。型・必須性はMinecraft WikiのAdvancement/JSON format該当triggerの説明に従う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.type",
    "kind": "jsonfield",
    "description": "エンティティID・タグによる種類判定",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.distance",
    "kind": "jsonfield",
    "description": "起点からの距離範囲",
    "syntax": "\"distance\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.location",
    "kind": "jsonfield",
    "description": "現在位置のロケーション述語",
    "syntax": "\"location\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.stepping_on",
    "kind": "jsonfield",
    "description": "踏んでいるブロックの条件",
    "syntax": "\"stepping_on\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.effects",
    "kind": "jsonfield",
    "description": "付与中のステータス効果",
    "syntax": "\"effects\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.nbt",
    "kind": "jsonfield",
    "description": "NBTデータ条件",
    "syntax": "\"nbt\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.flags.is_on_fire",
    "kind": "jsonfield",
    "description": "燃焼中か",
    "syntax": "\"is_on_fire\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.flags.is_sneaking",
    "kind": "jsonfield",
    "description": "スニーク中か",
    "syntax": "\"is_sneaking\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.flags.is_sprinting",
    "kind": "jsonfield",
    "description": "ダッシュ中か",
    "syntax": "\"is_sprinting\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.flags.is_swimming",
    "kind": "jsonfield",
    "description": "泳いでいるか",
    "syntax": "\"is_swimming\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.flags.is_baby",
    "kind": "jsonfield",
    "description": "子どもエンティティか",
    "syntax": "\"is_baby\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.flags.is_on_ground",
    "kind": "jsonfield",
    "description": "地面に接地しているか",
    "syntax": "\"is_on_ground\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.flags.is_flying",
    "kind": "jsonfield",
    "description": "飛行状態か",
    "syntax": "\"is_flying\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.equipment.mainhand",
    "kind": "jsonfield",
    "description": "メインハンドの装備アイテム条件",
    "syntax": "\"mainhand\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.equipment.offhand",
    "kind": "jsonfield",
    "description": "オフハンドの装備アイテム条件",
    "syntax": "\"offhand\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.equipment.head",
    "kind": "jsonfield",
    "description": "頭装備条件",
    "syntax": "\"head\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.equipment.chest",
    "kind": "jsonfield",
    "description": "胴装備条件",
    "syntax": "\"chest\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.equipment.legs",
    "kind": "jsonfield",
    "description": "脚装備条件",
    "syntax": "\"legs\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.equipment.feet",
    "kind": "jsonfield",
    "description": "足装備条件",
    "syntax": "\"feet\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.player.level",
    "kind": "jsonfield",
    "description": "プレイヤーレベル条件",
    "syntax": "\"level\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.player.gamemode",
    "kind": "jsonfield",
    "description": "ゲームモード条件",
    "syntax": "\"gamemode\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.player.recipes",
    "kind": "jsonfield",
    "description": "解放済みレシピ条件",
    "syntax": "\"recipes\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.player.advancements",
    "kind": "jsonfield",
    "description": "進捗状態条件",
    "syntax": "\"advancements\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.type_specific",
    "kind": "jsonfield",
    "description": "エンティティ種別固有の条件",
    "syntax": "\"type_specific\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.type_specific.type",
    "kind": "jsonfield",
    "description": "種別固有predicateの対象型",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.type_specific.cat",
    "kind": "jsonfield",
    "description": "ネコ固有条件",
    "syntax": "\"cat\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.type_specific.fishing_hook",
    "kind": "jsonfield",
    "description": "釣り針固有条件",
    "syntax": "\"fishing_hook\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.type_specific.lightning_bolt",
    "kind": "jsonfield",
    "description": "雷固有条件",
    "syntax": "\"lightning_bolt\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.vehicle",
    "kind": "jsonfield",
    "description": "乗っている乗り物の条件",
    "syntax": "\"vehicle\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.passenger",
    "kind": "jsonfield",
    "description": "乗せている乗客の条件",
    "syntax": "\"passenger\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.targeted_entity",
    "kind": "jsonfield",
    "description": "対象にしているエンティティの条件",
    "syntax": "\"targeted_entity\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.team",
    "kind": "jsonfield",
    "description": "チーム名条件",
    "syntax": "\"team\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.slots",
    "kind": "jsonfield",
    "description": "指定インベントリスロットの条件",
    "syntax": "\"slots\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.periodic_ticks",
    "kind": "jsonfield",
    "description": "周期tick値の条件",
    "syntax": "\"periodic_ticks\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "entity.movement",
    "kind": "jsonfield",
    "description": "移動速度等の移動条件",
    "syntax": "\"movement\": ...",
    "tags": [
      "データパック",
      "JSON",
      "エンティティ"
    ],
    "details": "主にadvancementのentity predicate、predicateファイルのentity_properties等に関連する。対応可能な対象はcontextとフィールドによって異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.biomes",
    "kind": "jsonfield",
    "description": "対象位置のバイオームID/タグ",
    "syntax": "\"biomes\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.dimension",
    "kind": "jsonfield",
    "description": "ディメンションID",
    "syntax": "\"dimension\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.feature",
    "kind": "jsonfield",
    "description": "構造物/ワールド生成feature条件",
    "syntax": "\"feature\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.light",
    "kind": "jsonfield",
    "description": "明るさ範囲",
    "syntax": "\"light\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.block",
    "kind": "jsonfield",
    "description": "その位置のブロック条件",
    "syntax": "\"block\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.fluid",
    "kind": "jsonfield",
    "description": "その位置の流体条件",
    "syntax": "\"fluid\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.position.x",
    "kind": "jsonfield",
    "description": "X座標範囲",
    "syntax": "\"x\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.position.y",
    "kind": "jsonfield",
    "description": "Y座標範囲",
    "syntax": "\"y\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.position.z",
    "kind": "jsonfield",
    "description": "Z座標範囲",
    "syntax": "\"z\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.can_see_sky",
    "kind": "jsonfield",
    "description": "空が見える位置か",
    "syntax": "\"can_see_sky\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.smokey",
    "kind": "jsonfield",
    "description": "煙判定に関連する位置条件",
    "syntax": "\"smokey\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "location.structures",
    "kind": "jsonfield",
    "description": "構造物ID/タグの条件",
    "syntax": "\"structures\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.items",
    "kind": "jsonfield",
    "description": "受け入れるアイテムID・タグ一覧",
    "syntax": "\"items\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.count",
    "kind": "jsonfield",
    "description": "スタック数範囲",
    "syntax": "\"count\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.components",
    "kind": "jsonfield",
    "description": "アイテムコンポーネントの一致条件",
    "syntax": "\"components\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.predicates",
    "kind": "jsonfield",
    "description": "コンポーネントサブ述語の条件マップ",
    "syntax": "\"predicates\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.custom_data",
    "kind": "jsonfield",
    "description": "minecraft:custom_dataの判定",
    "syntax": "\"custom_data\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.damage",
    "kind": "jsonfield",
    "description": "耐久値・ダメージ値の範囲",
    "syntax": "\"damage\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.enchantments",
    "kind": "jsonfield",
    "description": "エンチャント条件",
    "syntax": "\"enchantments\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.stored_enchantments",
    "kind": "jsonfield",
    "description": "保存エンチャント条件",
    "syntax": "\"stored_enchantments\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.potions",
    "kind": "jsonfield",
    "description": "ポーションID/タグの条件",
    "syntax": "\"potions\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.container",
    "kind": "jsonfield",
    "description": "コンテナ内容を検査する条件",
    "syntax": "\"container\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.bundle_contents",
    "kind": "jsonfield",
    "description": "束の内容物を検査する条件",
    "syntax": "\"bundle_contents\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.food",
    "kind": "jsonfield",
    "description": "食料コンポーネントの条件",
    "syntax": "\"food\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.weapon",
    "kind": "jsonfield",
    "description": "武器コンポーネントの条件",
    "syntax": "\"weapon\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.trim",
    "kind": "jsonfield",
    "description": "防具装飾コンポーネント条件",
    "syntax": "\"trim\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.writable_book_content",
    "kind": "jsonfield",
    "description": "書き込み可能な本の内容条件",
    "syntax": "\"writable_book_content\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "item.written_book_content",
    "kind": "jsonfield",
    "description": "記入済みの本の内容条件",
    "syntax": "\"written_book_content\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "block.blocks",
    "kind": "jsonfield",
    "description": "ブロックIDまたはタグ",
    "syntax": "\"blocks\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "block.state",
    "kind": "jsonfield",
    "description": "ブロック状態プロパティ条件",
    "syntax": "\"state\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "block.nbt",
    "kind": "jsonfield",
    "description": "ブロックエンティティNBT条件",
    "syntax": "\"nbt\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "block.components",
    "kind": "jsonfield",
    "description": "ブロック内アイテム等のcomponent判定",
    "syntax": "\"components\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "fluid.fluids",
    "kind": "jsonfield",
    "description": "流体IDまたはタグ",
    "syntax": "\"fluids\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "fluid.state",
    "kind": "jsonfield",
    "description": "流体状態プロパティ条件",
    "syntax": "\"state\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "damage.type",
    "kind": "jsonfield",
    "description": "ダメージタイプ条件",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "damage.source_entity",
    "kind": "jsonfield",
    "description": "ダメージを直接発生させたエンティティ条件",
    "syntax": "\"source_entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "damage.direct_entity",
    "kind": "jsonfield",
    "description": "直接衝突したエンティティ条件",
    "syntax": "\"direct_entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "damage.tags[].id",
    "kind": "jsonfield",
    "description": "照合するdamage typeタグID",
    "syntax": "\"id\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "damage.tags[].expected",
    "kind": "jsonfield",
    "description": "指定タグを持つべきかどうか",
    "syntax": "\"expected\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "damage.is_projectile",
    "kind": "jsonfield",
    "description": "飛び道具ダメージか（旧式フラグではなくタグ形式を確認）",
    "syntax": "\"is_projectile\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "1.20.5以降はitem/block/fluid predicate形式がコンポーネントベースへ移行した。1.21.1の形式と対応するサブ述語を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:all_of",
    "kind": "jsonfield",
    "description": "すべての子条件がtrue",
    "syntax": "\"condition\": \"minecraft:all_of\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:any_of",
    "kind": "jsonfield",
    "description": "子条件のどれかがtrue",
    "syntax": "\"condition\": \"minecraft:any_of\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:block_state_property",
    "kind": "jsonfield",
    "description": "ブロックIDと状態プロパティを検査",
    "syntax": "\"condition\": \"minecraft:block_state_property\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:damage_source_properties",
    "kind": "jsonfield",
    "description": "ダメージ源の属性を検査",
    "syntax": "\"condition\": \"minecraft:damage_source_properties\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:enchantment_active_check",
    "kind": "jsonfield",
    "description": "エンチャント効果が有効かを検査",
    "syntax": "\"condition\": \"minecraft:enchantment_active_check\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:entity_properties",
    "kind": "jsonfield",
    "description": "エンティティのpredicateを検査",
    "syntax": "\"condition\": \"minecraft:entity_properties\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:entity_scores",
    "kind": "jsonfield",
    "description": "エンティティのscoreboard値を検査",
    "syntax": "\"condition\": \"minecraft:entity_scores\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:inverted",
    "kind": "jsonfield",
    "description": "条件を反転",
    "syntax": "\"condition\": \"minecraft:inverted\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:killed_by_player",
    "kind": "jsonfield",
    "description": "プレイヤーがキラーとして存在するか",
    "syntax": "\"condition\": \"minecraft:killed_by_player\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:location_check",
    "kind": "jsonfield",
    "description": "原点のlocation predicateを検査",
    "syntax": "\"condition\": \"minecraft:location_check\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:match_tool",
    "kind": "jsonfield",
    "description": "道具/item predicateを検査",
    "syntax": "\"condition\": \"minecraft:match_tool\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:random_chance",
    "kind": "jsonfield",
    "description": "指定確率で成功",
    "syntax": "\"condition\": \"minecraft:random_chance\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:random_chance_with_enchanted_bonus",
    "kind": "jsonfield",
    "description": "指定エンチャントレベルに基づく確率",
    "syntax": "\"condition\": \"minecraft:random_chance_with_enchanted_bonus\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:reference",
    "kind": "jsonfield",
    "description": "別predicateを参照",
    "syntax": "\"condition\": \"minecraft:reference\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:survives_explosion",
    "kind": "jsonfield",
    "description": "爆発時にアイテムが残る確率",
    "syntax": "\"condition\": \"minecraft:survives_explosion\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:table_bonus",
    "kind": "jsonfield",
    "description": "エンチャントレベル別確率テーブル",
    "syntax": "\"condition\": \"minecraft:table_bonus\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:time_check",
    "kind": "jsonfield",
    "description": "ワールド時刻を範囲判定",
    "syntax": "\"condition\": \"minecraft:time_check\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:value_check",
    "kind": "jsonfield",
    "description": "数値を範囲判定",
    "syntax": "\"condition\": \"minecraft:value_check\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate condition: minecraft:weather_check",
    "kind": "jsonfield",
    "description": "雨・雷状態を判定",
    "syntax": "\"condition\": \"minecraft:weather_check\"",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "JSON predicateのcondition値。1.21.1形式を対象とし、後のバージョンで追加されたtype名への移行は含めない。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.all_of.terms",
    "kind": "jsonfield",
    "description": "all_of条件の項目: terms",
    "syntax": "\"terms\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:all_ofの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.any_of.terms",
    "kind": "jsonfield",
    "description": "any_of条件の項目: terms",
    "syntax": "\"terms\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:any_ofの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.block_state_property.block",
    "kind": "jsonfield",
    "description": "block_state_property条件の項目: block",
    "syntax": "\"block\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:block_state_propertyの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.block_state_property.properties",
    "kind": "jsonfield",
    "description": "block_state_property条件の項目: properties",
    "syntax": "\"properties\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:block_state_propertyの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.damage_source_properties.predicate",
    "kind": "jsonfield",
    "description": "damage_source_properties条件の項目: predicate",
    "syntax": "\"predicate\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:damage_source_propertiesの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.enchantment_active_check.active",
    "kind": "jsonfield",
    "description": "enchantment_active_check条件の項目: active",
    "syntax": "\"active\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:enchantment_active_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.entity_properties.entity",
    "kind": "jsonfield",
    "description": "entity_properties条件の項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:entity_propertiesの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.entity_properties.predicate",
    "kind": "jsonfield",
    "description": "entity_properties条件の項目: predicate",
    "syntax": "\"predicate\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:entity_propertiesの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.entity_scores.entity",
    "kind": "jsonfield",
    "description": "entity_scores条件の項目: entity",
    "syntax": "\"entity\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:entity_scoresの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.entity_scores.scores",
    "kind": "jsonfield",
    "description": "entity_scores条件の項目: scores",
    "syntax": "\"scores\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:entity_scoresの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.inverted.term",
    "kind": "jsonfield",
    "description": "inverted条件の項目: term",
    "syntax": "\"term\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:invertedの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.location_check.offsetX",
    "kind": "jsonfield",
    "description": "location_check条件の項目: offsetX",
    "syntax": "\"offsetX\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:location_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.location_check.offsetY",
    "kind": "jsonfield",
    "description": "location_check条件の項目: offsetY",
    "syntax": "\"offsetY\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:location_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.location_check.offsetZ",
    "kind": "jsonfield",
    "description": "location_check条件の項目: offsetZ",
    "syntax": "\"offsetZ\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:location_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.location_check.predicate",
    "kind": "jsonfield",
    "description": "location_check条件の項目: predicate",
    "syntax": "\"predicate\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:location_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.match_tool.predicate",
    "kind": "jsonfield",
    "description": "match_tool条件の項目: predicate",
    "syntax": "\"predicate\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:match_toolの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.random_chance.chance",
    "kind": "jsonfield",
    "description": "random_chance条件の項目: chance",
    "syntax": "\"chance\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:random_chanceの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.random_chance_with_enchanted_bonus.unenchanted_chance",
    "kind": "jsonfield",
    "description": "random_chance_with_enchanted_bonus条件の項目: unenchanted_chance",
    "syntax": "\"unenchanted_chance\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:random_chance_with_enchanted_bonusの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.random_chance_with_enchanted_bonus.enchanted_chance",
    "kind": "jsonfield",
    "description": "random_chance_with_enchanted_bonus条件の項目: enchanted_chance",
    "syntax": "\"enchanted_chance\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:random_chance_with_enchanted_bonusの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.random_chance_with_enchanted_bonus.enchantment",
    "kind": "jsonfield",
    "description": "random_chance_with_enchanted_bonus条件の項目: enchantment",
    "syntax": "\"enchantment\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:random_chance_with_enchanted_bonusの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.reference.name",
    "kind": "jsonfield",
    "description": "reference条件の項目: name",
    "syntax": "\"name\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:referenceの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.table_bonus.enchantment",
    "kind": "jsonfield",
    "description": "table_bonus条件の項目: enchantment",
    "syntax": "\"enchantment\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:table_bonusの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.table_bonus.chances",
    "kind": "jsonfield",
    "description": "table_bonus条件の項目: chances",
    "syntax": "\"chances\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:table_bonusの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.time_check.value",
    "kind": "jsonfield",
    "description": "time_check条件の項目: value",
    "syntax": "\"value\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:time_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.time_check.period",
    "kind": "jsonfield",
    "description": "time_check条件の項目: period",
    "syntax": "\"period\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:time_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.value_check.value",
    "kind": "jsonfield",
    "description": "value_check条件の項目: value",
    "syntax": "\"value\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:value_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.value_check.range",
    "kind": "jsonfield",
    "description": "value_check条件の項目: range",
    "syntax": "\"range\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:value_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.weather_check.raining",
    "kind": "jsonfield",
    "description": "weather_check条件の項目: raining",
    "syntax": "\"raining\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:weather_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "predicate.weather_check.thundering",
    "kind": "jsonfield",
    "description": "weather_check条件の項目: thundering",
    "syntax": "\"thundering\": ...",
    "tags": [
      "データパック",
      "JSON"
    ],
    "details": "predicate condition minecraft:weather_checkの内部フィールド。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot entry type: minecraft:item",
    "kind": "jsonfield",
    "description": "アイテムを直接ドロップ対象にする",
    "syntax": "\"type\": \"minecraft:item\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのpools[].entries[]で使う候補種別。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot entry type: minecraft:empty",
    "kind": "jsonfield",
    "description": "何も出さない候補を作る",
    "syntax": "\"type\": \"minecraft:empty\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのpools[].entries[]で使う候補種別。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot entry type: minecraft:loot_table",
    "kind": "jsonfield",
    "description": "別ルートテーブルを参照する",
    "syntax": "\"type\": \"minecraft:loot_table\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのpools[].entries[]で使う候補種別。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot entry type: minecraft:tag",
    "kind": "jsonfield",
    "description": "タグ内の候補から選ぶ",
    "syntax": "\"type\": \"minecraft:tag\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのpools[].entries[]で使う候補種別。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot entry type: minecraft:alternatives",
    "kind": "jsonfield",
    "description": "成功する最初の子候補を使う",
    "syntax": "\"type\": \"minecraft:alternatives\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのpools[].entries[]で使う候補種別。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot entry type: minecraft:sequence",
    "kind": "jsonfield",
    "description": "順に評価し失敗で打ち切る",
    "syntax": "\"type\": \"minecraft:sequence\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのpools[].entries[]で使う候補種別。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot entry type: minecraft:group",
    "kind": "jsonfield",
    "description": "子候補をまとめて評価する",
    "syntax": "\"type\": \"minecraft:group\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのpools[].entries[]で使う候補種別。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entries[].name",
    "kind": "jsonfield",
    "description": "アイテム/ルートテーブル/タグのID",
    "syntax": "\"name\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのentryオブジェクトの共通項目。typeで有効性が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entries[].children",
    "kind": "jsonfield",
    "description": "複合entryの子候補配列",
    "syntax": "\"children\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのentryオブジェクトの共通項目。typeで有効性が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entries[].expand",
    "kind": "jsonfield",
    "description": "タグ候補を全候補へ展開するか",
    "syntax": "\"expand\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのentryオブジェクトの共通項目。typeで有効性が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entries[].weight",
    "kind": "jsonfield",
    "description": "抽選の基準重み",
    "syntax": "\"weight\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのentryオブジェクトの共通項目。typeで有効性が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entries[].quality",
    "kind": "jsonfield",
    "description": "幸運値による重み補正",
    "syntax": "\"quality\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのentryオブジェクトの共通項目。typeで有効性が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entries[].functions",
    "kind": "jsonfield",
    "description": "entryに適用する修飾関数",
    "syntax": "\"functions\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのentryオブジェクトの共通項目。typeで有効性が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entries[].conditions",
    "kind": "jsonfield",
    "description": "entry候補の条件",
    "syntax": "\"conditions\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのentryオブジェクトの共通項目。typeで有効性が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entries[].type",
    "kind": "jsonfield",
    "description": "entry型",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "loot_tableのentryオブジェクトの共通項目。typeで有効性が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:all_of",
    "kind": "jsonfield",
    "description": "すべての条件がtrue",
    "syntax": "\"condition\": \"minecraft:all_of\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:any_of",
    "kind": "jsonfield",
    "description": "いずれかがtrue",
    "syntax": "\"condition\": \"minecraft:any_of\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:block_state_property",
    "kind": "jsonfield",
    "description": "ブロックIDと状態を判定",
    "syntax": "\"condition\": \"minecraft:block_state_property\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:damage_source_properties",
    "kind": "jsonfield",
    "description": "ダメージ源predicateを判定",
    "syntax": "\"condition\": \"minecraft:damage_source_properties\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:enchantment_active_check",
    "kind": "jsonfield",
    "description": "有効なエンチャント効果を判定",
    "syntax": "\"condition\": \"minecraft:enchantment_active_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:entity_properties",
    "kind": "jsonfield",
    "description": "対象エンティティを判定",
    "syntax": "\"condition\": \"minecraft:entity_properties\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:entity_scores",
    "kind": "jsonfield",
    "description": "スコア条件を判定",
    "syntax": "\"condition\": \"minecraft:entity_scores\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:inverted",
    "kind": "jsonfield",
    "description": "条件を反転",
    "syntax": "\"condition\": \"minecraft:inverted\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:killed_by_player",
    "kind": "jsonfield",
    "description": "プレイヤーキラーの有無を判定",
    "syntax": "\"condition\": \"minecraft:killed_by_player\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:location_check",
    "kind": "jsonfield",
    "description": "originの位置を判定",
    "syntax": "\"condition\": \"minecraft:location_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:match_tool",
    "kind": "jsonfield",
    "description": "採掘ツールを判定",
    "syntax": "\"condition\": \"minecraft:match_tool\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:random_chance",
    "kind": "jsonfield",
    "description": "確率判定",
    "syntax": "\"condition\": \"minecraft:random_chance\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:random_chance_with_enchanted_bonus",
    "kind": "jsonfield",
    "description": "特定エンチャントで確率を補正",
    "syntax": "\"condition\": \"minecraft:random_chance_with_enchanted_bonus\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:reference",
    "kind": "jsonfield",
    "description": "predicateファイルを参照",
    "syntax": "\"condition\": \"minecraft:reference\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:survives_explosion",
    "kind": "jsonfield",
    "description": "爆発からの残存判定",
    "syntax": "\"condition\": \"minecraft:survives_explosion\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:table_bonus",
    "kind": "jsonfield",
    "description": "エンチャントレベル確率テーブル",
    "syntax": "\"condition\": \"minecraft:table_bonus\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:time_check",
    "kind": "jsonfield",
    "description": "時刻範囲を判定",
    "syntax": "\"condition\": \"minecraft:time_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:value_check",
    "kind": "jsonfield",
    "description": "数値範囲を判定",
    "syntax": "\"condition\": \"minecraft:value_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot condition 1.21.1: minecraft:weather_check",
    "kind": "jsonfield",
    "description": "天候を判定",
    "syntax": "\"condition\": \"minecraft:weather_check\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Minecraft Wiki Predicate / Loot table の1.21.1対象条件をもとにした索引。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number provider: minecraft:constant",
    "kind": "jsonfield",
    "description": "固定数値",
    "syntax": "{\"type\":\"minecraft:constant\",\"value\":1}",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルやpredicateの数値入力で使う。バージョンによりインライン指定とnumber_providerレジストリ参照の仕様差に注意。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number provider: minecraft:uniform",
    "kind": "jsonfield",
    "description": "min/maxの一様ランダム値",
    "syntax": "{\"type\":\"minecraft:uniform\",\"min\":1,\"max\":3}",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルやpredicateの数値入力で使う。バージョンによりインライン指定とnumber_providerレジストリ参照の仕様差に注意。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number provider: minecraft:binomial",
    "kind": "jsonfield",
    "description": "試行回数と成功確率で乱数値を作る",
    "syntax": "{\"type\":\"minecraft:binomial\",\"n\":5,\"p\":0.5}",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルやpredicateの数値入力で使う。バージョンによりインライン指定とnumber_providerレジストリ参照の仕様差に注意。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number provider: minecraft:score",
    "kind": "jsonfield",
    "description": "scoreboard値を数値として使う",
    "syntax": "{\"type\":\"minecraft:score\",\"target\":\"this\",\"score\":\"points\"}",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ルートテーブルやpredicateの数値入力で使う。バージョンによりインライン指定とnumber_providerレジストリ参照の仕様差に注意。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:apply_bonus",
    "kind": "jsonfield",
    "description": "エンチャントに応じてドロップ数を増やす",
    "syntax": "\"function\": \"minecraft:apply_bonus\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:copy_name",
    "kind": "jsonfield",
    "description": "参照エンティティ/ブロック名をコピー",
    "syntax": "\"function\": \"minecraft:copy_name\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:copy_nbt",
    "kind": "jsonfield",
    "description": "NBT経路からデータをコピー",
    "syntax": "\"function\": \"minecraft:copy_nbt\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:copy_state",
    "kind": "jsonfield",
    "description": "ブロック状態をコピー",
    "syntax": "\"function\": \"minecraft:copy_state\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:enchanted_count_increase",
    "kind": "jsonfield",
    "description": "エンチャントレベルに応じて個数を加算",
    "syntax": "\"function\": \"minecraft:enchanted_count_increase\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:enchanted_damage",
    "kind": "jsonfield",
    "description": "エンチャントに応じてダメージを調整",
    "syntax": "\"function\": \"minecraft:enchanted_damage\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:enchanted_durability",
    "kind": "jsonfield",
    "description": "耐久値損耗をエンチャントに応じて調整",
    "syntax": "\"function\": \"minecraft:enchanted_durability\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:enchanted_lore",
    "kind": "jsonfield",
    "description": "エンチャント関連の説明文を設定",
    "syntax": "\"function\": \"minecraft:enchanted_lore\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:enchant_randomly",
    "kind": "jsonfield",
    "description": "候補からランダムなエンチャントを設定",
    "syntax": "\"function\": \"minecraft:enchant_randomly\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:enchant_with_levels",
    "kind": "jsonfield",
    "description": "指定レベル相当でエンチャント",
    "syntax": "\"function\": \"minecraft:enchant_with_levels\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:exploration_map",
    "kind": "jsonfield",
    "description": "探索地図を生成する",
    "syntax": "\"function\": \"minecraft:exploration_map\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:explosion_decay",
    "kind": "jsonfield",
    "description": "爆発によるアイテム損失を適用",
    "syntax": "\"function\": \"minecraft:explosion_decay\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:fill_player_head",
    "kind": "jsonfield",
    "description": "プレイヤーヘッドに所有者を設定",
    "syntax": "\"function\": \"minecraft:fill_player_head\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:filtered",
    "kind": "jsonfield",
    "description": "述語に一致するアイテムだけ修飾",
    "syntax": "\"function\": \"minecraft:filtered\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:furnace_smelt",
    "kind": "jsonfield",
    "description": "精錬レシピに応じて出力を設定",
    "syntax": "\"function\": \"minecraft:furnace_smelt\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:limit_count",
    "kind": "jsonfield",
    "description": "アイテム数を範囲に制限",
    "syntax": "\"function\": \"minecraft:limit_count\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:looting_enchant",
    "kind": "jsonfield",
    "description": "略奪レベルで個数を増加",
    "syntax": "\"function\": \"minecraft:looting_enchant\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:modify_contents",
    "kind": "jsonfield",
    "description": "コンテナ内容物に修飾を適用",
    "syntax": "\"function\": \"minecraft:modify_contents\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:reference",
    "kind": "jsonfield",
    "description": "別item_modifierを参照",
    "syntax": "\"function\": \"minecraft:reference\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_attributes",
    "kind": "jsonfield",
    "description": "属性modifierを設定",
    "syntax": "\"function\": \"minecraft:set_attributes\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_banner_pattern",
    "kind": "jsonfield",
    "description": "旗模様を設定",
    "syntax": "\"function\": \"minecraft:set_banner_pattern\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_components",
    "kind": "jsonfield",
    "description": "アイテムコンポーネントを設定",
    "syntax": "\"function\": \"minecraft:set_components\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_contents",
    "kind": "jsonfield",
    "description": "コンテナ内容を設定",
    "syntax": "\"function\": \"minecraft:set_contents\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_count",
    "kind": "jsonfield",
    "description": "アイテム数を設定",
    "syntax": "\"function\": \"minecraft:set_count\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_custom_data",
    "kind": "jsonfield",
    "description": "custom_dataコンポーネントを設定",
    "syntax": "\"function\": \"minecraft:set_custom_data\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_damage",
    "kind": "jsonfield",
    "description": "耐久度/ダメージ値を設定",
    "syntax": "\"function\": \"minecraft:set_damage\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_enchantments",
    "kind": "jsonfield",
    "description": "エンチャントのレベルを設定",
    "syntax": "\"function\": \"minecraft:set_enchantments\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_fireworks",
    "kind": "jsonfield",
    "description": "花火データを設定",
    "syntax": "\"function\": \"minecraft:set_fireworks\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_instrument",
    "kind": "jsonfield",
    "description": "楽器コンポーネントを設定（1.21.1で使用可能なIDを確認）",
    "syntax": "\"function\": \"minecraft:set_instrument\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_loot_table",
    "kind": "jsonfield",
    "description": "参照するルートテーブルを設定",
    "syntax": "\"function\": \"minecraft:set_loot_table\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_lore",
    "kind": "jsonfield",
    "description": "説明文を設定",
    "syntax": "\"function\": \"minecraft:set_lore\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_name",
    "kind": "jsonfield",
    "description": "表示名を設定",
    "syntax": "\"function\": \"minecraft:set_name\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_ominous_bottle_amplifier",
    "kind": "jsonfield",
    "description": "不吉な瓶の増幅値を設定",
    "syntax": "\"function\": \"minecraft:set_ominous_bottle_amplifier\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_potion",
    "kind": "jsonfield",
    "description": "ポーション効果を指定",
    "syntax": "\"function\": \"minecraft:set_potion\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_stew_effect",
    "kind": "jsonfield",
    "description": "怪しげなシチューの効果を設定",
    "syntax": "\"function\": \"minecraft:set_stew_effect\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_writable_book_pages",
    "kind": "jsonfield",
    "description": "書き込み可能な本のページを設定",
    "syntax": "\"function\": \"minecraft:set_writable_book_pages\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot function 1.21.1: minecraft:set_written_book_pages",
    "kind": "jsonfield",
    "description": "記入済みの本のページを設定",
    "syntax": "\"function\": \"minecraft:set_written_book_pages\"",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "Item modifierとloot tableで使う関数種別。各種function固有のフィールドが別途必要。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "range.min",
    "kind": "jsonfield",
    "description": "rangeデータのmin項目",
    "syntax": "\"min\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "range.max",
    "kind": "jsonfield",
    "description": "rangeデータのmax項目",
    "syntax": "\"max\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "range.min_inclusive",
    "kind": "jsonfield",
    "description": "rangeデータのmin_inclusive項目",
    "syntax": "\"min_inclusive\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "range.max_inclusive",
    "kind": "jsonfield",
    "description": "rangeデータのmax_inclusive項目",
    "syntax": "\"max_inclusive\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number_provider.uniform.min",
    "kind": "jsonfield",
    "description": "number_provider.uniformデータのmin項目",
    "syntax": "\"min\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number_provider.uniform.max",
    "kind": "jsonfield",
    "description": "number_provider.uniformデータのmax項目",
    "syntax": "\"max\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number_provider.binomial.n",
    "kind": "jsonfield",
    "description": "number_provider.binomialデータのn項目",
    "syntax": "\"n\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number_provider.binomial.p",
    "kind": "jsonfield",
    "description": "number_provider.binomialデータのp項目",
    "syntax": "\"p\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number_provider.score.target",
    "kind": "jsonfield",
    "description": "number_provider.scoreデータのtarget項目",
    "syntax": "\"target\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number_provider.score.score",
    "kind": "jsonfield",
    "description": "number_provider.scoreデータのscore項目",
    "syntax": "\"score\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "number_provider.score.scale",
    "kind": "jsonfield",
    "description": "number_provider.scoreデータのscale項目",
    "syntax": "\"scale\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.root.type",
    "kind": "jsonfield",
    "description": "loot_table.rootデータのtype項目",
    "syntax": "\"type\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.root.random_sequence",
    "kind": "jsonfield",
    "description": "loot_table.rootデータのrandom_sequence項目",
    "syntax": "\"random_sequence\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.root.pools",
    "kind": "jsonfield",
    "description": "loot_table.rootデータのpools項目",
    "syntax": "\"pools\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.root.functions",
    "kind": "jsonfield",
    "description": "loot_table.rootデータのfunctions項目",
    "syntax": "\"functions\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.rolls",
    "kind": "jsonfield",
    "description": "loot_table.poolデータのrolls項目",
    "syntax": "\"rolls\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.bonus_rolls",
    "kind": "jsonfield",
    "description": "loot_table.poolデータのbonus_rolls項目",
    "syntax": "\"bonus_rolls\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.entries",
    "kind": "jsonfield",
    "description": "loot_table.poolデータのentries項目",
    "syntax": "\"entries\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.conditions",
    "kind": "jsonfield",
    "description": "loot_table.poolデータのconditions項目",
    "syntax": "\"conditions\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.functions",
    "kind": "jsonfield",
    "description": "loot_table.poolデータのfunctions項目",
    "syntax": "\"functions\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entry.item.name",
    "kind": "jsonfield",
    "description": "loot_table.entry.itemデータのname項目",
    "syntax": "\"name\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entry.item.weight",
    "kind": "jsonfield",
    "description": "loot_table.entry.itemデータのweight項目",
    "syntax": "\"weight\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entry.item.quality",
    "kind": "jsonfield",
    "description": "loot_table.entry.itemデータのquality項目",
    "syntax": "\"quality\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entry.item.functions",
    "kind": "jsonfield",
    "description": "loot_table.entry.itemデータのfunctions項目",
    "syntax": "\"functions\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.entry.item.conditions",
    "kind": "jsonfield",
    "description": "loot_table.entry.itemデータのconditions項目",
    "syntax": "\"conditions\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.entry.item.components.minecraft:custom_name",
    "kind": "jsonfield",
    "description": "loot_table.pool.entry.item.componentsデータのminecraft:custom_name項目",
    "syntax": "\"minecraft:custom_name\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.entry.item.components.minecraft:custom_data",
    "kind": "jsonfield",
    "description": "loot_table.pool.entry.item.componentsデータのminecraft:custom_data項目",
    "syntax": "\"minecraft:custom_data\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.entry.item.components.minecraft:damage",
    "kind": "jsonfield",
    "description": "loot_table.pool.entry.item.componentsデータのminecraft:damage項目",
    "syntax": "\"minecraft:damage\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "loot_table.pool.entry.item.components.minecraft:enchantments",
    "kind": "jsonfield",
    "description": "loot_table.pool.entry.item.componentsデータのminecraft:enchantments項目",
    "syntax": "\"minecraft:enchantments\": ...",
    "tags": [
      "データパック",
      "ルートテーブル",
      "JSON"
    ],
    "details": "ネストする親オブジェクトとtypeにより有効な項目が変わる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "functionファイル",
    "kind": "code",
    "description": "コマンドを1行ずつ記述するファイル",
    "syntax": ".mcfunction",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.21以降、関数フォルダ名はfunctionsではなくfunction。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "function ID",
    "kind": "code",
    "description": "namespace:pathからなる関数参照",
    "syntax": "example:boss/start",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.21以降、関数フォルダ名はfunctionsではなくfunction。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "functionタグのvalues",
    "kind": "code",
    "description": "登録する関数IDの配列",
    "syntax": "{\"values\":[\"example:load\"]}",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.21以降、関数フォルダ名はfunctionsではなくfunction。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "functionタグのreplace",
    "kind": "code",
    "description": "以前のタグ定義を置換する設定",
    "syntax": "{\"replace\":true,\"values\":[]}",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.21以降、関数フォルダ名はfunctionsではなくfunction。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "function macro",
    "kind": "code",
    "description": "$()形式の変数を使う関数マクロ",
    "syntax": "$(target)",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.20.2で追加。マクロ行は呼出側からNBT/SNBT引数等を渡す方式で、一般の関数行と区別される。 1.21以降、関数フォルダ名はfunctionsではなくfunction。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "function macro call",
    "kind": "code",
    "description": "関数マクロへの引数付き呼び出し",
    "syntax": "function example:macro with storage example:args",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "マクロ関数を呼ぶ際に使う。構文詳細は対象版の/function記事と照合する。 1.21以降、関数フォルダ名はfunctionsではなくfunction。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "returnコマンドと関数",
    "kind": "code",
    "description": "関数から結果や制御を返す機能",
    "syntax": "return 1",
    "tags": [
      "データパック",
      "コード例"
    ],
    "details": "1.20.2以降の関数制御に関連。コマンド実行環境で使える構文を確認。 1.21以降、関数フォルダ名はfunctionsではなくfunction。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "recipe.show_notification",
    "kind": "jsonfield",
    "description": "作成時通知を出すか",
    "syntax": "\"show_notification\": ...",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "個々のレシピtypeで有効か、フィールドが必須かはtypeごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "recipe.result.id",
    "kind": "jsonfield",
    "description": "出力アイテムID",
    "syntax": "\"id\": ...",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "個々のレシピtypeで有効か、フィールドが必須かはtypeごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "recipe.result.count",
    "kind": "jsonfield",
    "description": "出力アイテム数",
    "syntax": "\"count\": ...",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "個々のレシピtypeで有効か、フィールドが必須かはtypeごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "recipe.result.components",
    "kind": "jsonfield",
    "description": "出力アイテムのcomponent map",
    "syntax": "\"components\": ...",
    "tags": [
      "データパック",
      "レシピ",
      "JSON"
    ],
    "details": "個々のレシピtypeで有効か、フィールドが必須かはtypeごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "データパックID",
    "kind": "file",
    "description": "パック内のファイルIDはnamespace:pathで参照",
    "syntax": "example:loot/boss_reward",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "ディレクトリのサブ階層はID内のスラッシュに反映される。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "JSONファイルとIDの対応",
    "kind": "file",
    "description": "data/example/recipe/a/b.jsonはexample:a/bとして参照",
    "syntax": "data/example/recipe/a/b.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "registry typeがrecipe、namespaceがexample、pathがa/bとなる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "ファイル相対パス",
    "kind": "file",
    "description": "registry名の下にサブフォルダを置ける",
    "syntax": "data/example/loot_table/chests/boss.json",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "サブフォルダ名はIDのpathに含まれる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "バニラパックとの競合",
    "kind": "file",
    "description": "minecraft名前空間と同じIDはバニラ定義を上書きし得る",
    "syntax": "data/minecraft/...",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "意図しない上書きを避けるには固有namespaceを使う。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "実験的データと再起動",
    "kind": "file",
    "description": "動的レジストリの変更は/reloadだけでは反映されないことがある",
    "syntax": "ワールドを閉じて開き直す",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "ディメンション、ワールド生成等の定義は特に再起動の必要性を確認する。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "タグの循環参照",
    "kind": "file",
    "description": "タグ同士の参照が循環しないようにする",
    "syntax": "values:[\"#example:other\"]",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "循環参照や不明IDはエラーの原因になる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  },
  {
    "name": "JSONのキーと型",
    "kind": "file",
    "description": "フィールド名の綴り、配列/オブジェクト/boolean/数値を正確にする",
    "syntax": "JSON",
    "tags": [
      "データパック",
      "基本"
    ],
    "details": "同名フィールドでも型はスキーマごとに異なる。\n参考: Minecraft Wikiのデータパックおよび各JSON形式関連記事を参照し、1.21.1向けに検索項目として要約。https://theminecraftwiki.com/wiki/data-pack/ ; https://theminecraftwiki.com/wiki/predicate/ ; https://theminecraftwiki.com/wiki/advancement/json-format/"
  }
];

/* Minecraft SEARCH 1.21.1 — expansion loader
 * Data source: misode/mcmeta, 1.21.1-summary and 1.21.1-data branches.
 * Runtime fetches public metadata directly; no Java/Python build tools are required.
 * Generated records distinguish IDs/paths/properties from normative JSON schema definitions.
 */
(function MinecraftSearchExpansion(){
  const BASE = 'https://raw.githubusercontent.com/misode/mcmeta/1.21.1-summary/';
  const DATA_BASE = 'https://raw.githubusercontent.com/misode/mcmeta/1.21.1-data/';
  const TREE_API = 'https://api.github.com/repos/misode/mcmeta/git/trees/1.21.1-data?recursive=1';
  const counts = {commands:0, commandNodes:0, blocks:0, blockProperties:0, blockValues:0, itemComponentMappings:0, registries:0, datapackFiles:0, jsonFields:0, schemaFields:0, sounds:0, errors:0};
  const keyOf = x => `${x.kind}|${x.name}|${x.syntax || ''}`;
  const known = new Set(database.map(keyOf));
  const nameFor = (id, prefix='minecraft:') => String(id).includes(':') ? String(id) : prefix + id;
  const shortName = s => String(s||'').split('/').pop().replace(/\.json$/i,'');
  function add(item, counter){
    item.tags = Array.isArray(item.tags) ? item.tags : ['基本'];
    item.description = item.description || 'Minecraft Java Edition 1.21.1 の公開データに収録された項目。';
    item.details = item.details || '';
    const k = keyOf(item);
    if (known.has(k)) return false;
    known.add(k); database.push(item);
    if(counter) counts[counter]++;
    return true;
  }
  function emitProgress(stage){
    window.dispatchEvent(new CustomEvent('mc-search-data-progress',{detail:{stage,counts:{...counts},total:database.length}}));
  }
  async function fetchJSON(url){
    const res = await fetch(url, {cache:'force-cache'});
    if(!res.ok) throw new Error(`${res.status} ${url}`);
    return await res.json();
  }
  function addCommandTree(tree){
    // Every Brigadier node is searchable: roots, literals, argument parsers,
    // parser properties, and executable/non-executable prefixes.
    const parserLabels={
      'brigadier:bool':'真偽値（true/false）','brigadier:double':'小数','brigadier:float':'浮動小数','brigadier:integer':'整数','brigadier:long':'長整数','brigadier:string':'文字列',
      'minecraft:entity':'エンティティ対象セレクター','minecraft:score_holder':'スコア保持者','minecraft:game_profile':'プレイヤー名/プロフィール',
      'minecraft:resource_location':'リソースロケーションID','minecraft:resource':'指定レジストリのID','minecraft:resource_or_tag':'IDまたはタグ',
      'minecraft:resource_or_tag_key':'レジストリIDまたはタグキー','minecraft:team':'チーム名','minecraft:objective':'スコアボード目標',
      'minecraft:criteria':'統計/基準','minecraft:operation':'スコア演算子','minecraft:particle':'パーティクルID','minecraft:item_stack':'アイテムスタック',
      'minecraft:item_predicate':'アイテム条件','minecraft:block_state':'ブロック状態','minecraft:block_predicate':'ブロック条件',
      'minecraft:entity_anchor':'エンティティ基準点','minecraft:angle':'角度','minecraft:rotation':'回転','minecraft:vec2':'2D座標','minecraft:vec3':'3D座標',
      'minecraft:block_pos':'ブロック座標','minecraft:column_pos':'X/Z座標','minecraft:vec3':'3Dベクトル','minecraft:swizzle':'座標軸の組み合わせ',
      'minecraft:dimension':'ディメンションID','minecraft:gamemode':'ゲームモード','minecraft:time':'時間/時刻','minecraft:color':'色','minecraft:component':'テキストコンポーネント',
      'minecraft:message':'メッセージ文字列','minecraft:nbt_compound_tag':'SNBT複合タグ','minecraft:nbt_tag':'SNBTタグ','minecraft:nbt_path':'NBTパス',
      'minecraft:objective_criteria':'スコア基準','minecraft:template_mirror':'構造ミラー','minecraft:template_rotation':'構造回転','minecraft:heightmap':'高さマップ',
      'minecraft:loot_table':'ルートテーブルID','minecraft:resource_location':'リソースロケーションID','minecraft:function':'関数ID','minecraft:uuid':'UUID'
    };
    const tagFor=(root,path)=>{
      const s=(root+' '+path).toLowerCase(), t=['コマンド'];
      if(/execute|if|unless|condition|score|matches/.test(s))t.push('条件分岐');
      if(/scoreboard|score|trigger/.test(s))t.push('スコア');
      if(/entity|summon|teleport|\btp\b|ride|damage|effect|attribute|tag/.test(s))t.push('エンティティ');
      if(/function|datapack|advancement|loot|recipe|schedule|return/.test(s))t.push('データパック');
      if(/item|give|clear|replaceitem|component/.test(s))t.push('アイテム');
      return [...new Set(t)];
    };
    function walk(node, segments, root){
      if(!node||typeof node!=='object'||!segments.length)return;
      const syntax='/'+segments.map(seg=>seg.type==='argument'?`<${seg.name}>`:seg.name).join(' ');
      const last=segments[segments.length-1];
      const parser=node.parser||'';
      const props=node.properties&&typeof node.properties==='object'?node.properties:null;
      const children=node.children&&typeof node.children==='object'?Object.entries(node.children):[];
      const literalChildren=children.filter(([,child])=>child&&child.type==='literal').map(([key])=>key);
      const argumentChildren=children.filter(([,child])=>child&&child.type==='argument').map(([key])=>key);
      const parserText=parser?`${parserLabels[parser]||parser}（${parser}）`:'';
      const desc=node.type==='argument'
        ? `引数ノード「${last.name}」。${parserText?`入力型: ${parserText}。`:'引数型はこのノード単体では未指定。'}${node.executable===true?'この位置でコマンド実行可能。':'この位置では構文途中。'}`
        : `リテラル構文「${last.name}」。${node.executable===true?'この位置でコマンド実行可能。':'この位置は構文途中で、後続要素が必要。'}`;
      const detail=[
        '仕様基準: Minecraft Java Edition 1.21.1（Data Pack Format 48）',
        `構文パス: ${syntax}`,
        `ノード種別: ${node.type||'unknown'}`,
        `実行可能: ${node.executable===true?'はい':'いいえ（このパスだけでは実行不可）'}`,
        parser?`引数パーサー: ${parser}${parserLabels[parser]?` — ${parserLabels[parser]}`:''}`:'引数パーサー: なし（リテラルまたは引数定義なし）',
        props?`パーサー制約/プロパティ: ${JSON.stringify(props)}`:'パーサー制約/プロパティ: なし',
        `直下のリテラル候補: ${literalChildren.join(', ')||'なし'}`,
        `直下の引数候補: ${argumentChildren.map(x=>`<${x}>`).join(', ')||'なし'}`,
        `直下の子ノード数: ${children.length}`,
        'データ出典: misode/mcmeta 1.21.1-summary/commands/data.json（MinecraftのBrigadierコマンド構文ツリー）',
        '注意: コマンドの権限、対象の存在、実行コンテキスト等の意味的条件までは構文ツリーだけで検証しません。'
      ].join('\n');
      add({name:syntax,kind:'command',description:desc,syntax,tags:tagFor(root,segments.map(x=>x.name).join(' ')),details:detail},'commands');
      counts.commandNodes++;
      for(const [key,child] of children){
        const seg={name:key,type:child?.type||'literal'};
        walk(child,[...segments,seg],root);
      }
    }
    for(const [root,node] of Object.entries(tree?.children||{})){
      walk(node,[{name:root,type:node?.type||'literal'}],root);
    }
  }
  function addBlocks(obj){
    for(const [id,entry] of Object.entries(obj||{})){
      const block=nameFor(id), props=entry?.[0]||{}, defaults=entry?.[1]||{};
      add({name:block,kind:'block',description:'Java 1.21.1のバニラブロックID。ブロック状態のプロパティと既定値を参照できます。',syntax:`/setblock ~ ~ ~ ${block}`,tags:['ブロック','基本'],details:`公開レポート: misode/mcmeta 1.21.1-summary/blocks/data.json\nブロック状態の既定値: ${JSON.stringify(defaults)}\nプロパティ数: ${Object.keys(props).length}`},'blocks');
      for(const [prop,valsRaw] of Object.entries(props)){
        const vals=Array.isArray(valsRaw)?valsRaw.map(String):[];
        add({name:`${block} · プロパティ ${prop}`,kind:'block',description:`ブロック状態プロパティ「${prop}」。${vals.length?`値候補: ${vals.join(', ')}`:'値候補の記載なし'}`,syntax:`${block}[${prop}=<value>]`,tags:['ブロック','JSON'],details:`既定値: ${defaults[prop]??'（データ内に記載なし）'}\n値候補: ${vals.join(', ')||'（定義なし）'}\n出典: misode/mcmeta 1.21.1-summary/blocks/data.json`},'blockProperties');
        for(const val of vals){
          add({name:`${block} · ${prop}=${val}`,kind:'block',description:`ブロック状態「${prop}」に指定できる値「${val}」。`,syntax:`${block}[${prop}=${val}]`,tags:['ブロック'],details:`ブロックID: ${block}\nプロパティ: ${prop}\n値: ${val}\n既定値: ${defaults[prop]??'不明'}\n出典: misode/mcmeta 1.21.1-summary/blocks/data.json`},'blockValues');
        }
      }
    }
  }
  function addRegistries(regs){
    for(const [registry, entries] of Object.entries(regs||{})){
      if(!Array.isArray(entries)) continue;
      for(const raw of entries){
        if(typeof raw!=='string')continue;
        const id=nameFor(raw);
        add({name:id,kind:'registry',description:`レジストリID「${id}」。所属: ${registry}`,syntax:id,tags:['レジストリ',registry.includes('entity')?'エンティティ':(registry.includes('item')?'アイテム':'基本')],details:`レジストリ: ${registry}\n識別子: ${id}\n出典: misode/mcmeta 1.21.1-summary/registries/data.json\nレジストリの種類により、コマンド引数・データパック・ゲーム内部データなどで使われます。`},'registries');
      }
    }
  }
  function addItemComponents(obj){
    for(const [itemRaw,compRaw] of Object.entries(obj||{})){
      const item=nameFor(itemRaw), comps=compRaw?.components ?? compRaw ?? {};
      const keys=(comps&&typeof comps==='object'&&!Array.isArray(comps))?Object.keys(comps):[];
      add({name:item,kind:'item',description:'Java 1.21.1のアイテムID。公開レポートにある既定コンポーネントを検索できます。',syntax:`/give @p ${item}`,tags:['アイテム','基本'],details:`既定コンポーネント: ${keys.join(', ')||'このレポートでは個別コンポーネントなし'}\n出典: misode/mcmeta 1.21.1-summary/item_components/data.json`},'itemComponentMappings');
      for(const [component,value] of Object.entries(comps||{})){
        const comp=nameFor(component,'minecraft:');
        add({name:`${item} · ${comp}`,kind:'component',description:`アイテム「${item}」の既定コンポーネント「${comp}」。`,syntax:`/give @p ${item}[${comp.replace(/^minecraft:/,'')}=${JSON.stringify(value)}]`,tags:['アイテム','コンポーネント','JSON'],details:`アイテム: ${item}\nコンポーネント: ${comp}\n既定値の抜粋: ${JSON.stringify(value).slice(0,500)}\n出典: misode/mcmeta 1.21.1-summary/item_components/data.json`},'itemComponentMappings');
        // Make nested component data paths independently searchable.
        const visit=(v,path)=>{
          if(!v||typeof v!=='object')return;
          for(const [k,child] of Object.entries(v)){
            const next=[...path,k];
            add({name:`${item} · ${comp}.${next.join('.')}`,kind:'jsonfield',description:`${item}の${comp}データ内で観測されたJSONパス。`,syntax:next.join('.'),tags:['アイテム','コンポーネント','JSON'],details:`値の例: ${JSON.stringify(child).slice(0,350)}\nこれは公開されたバニラ既定データに存在するパスで、全カスタム値の型制約を保証するスキーマではありません。`},'jsonFields');
            if(child&&typeof child==='object')visit(child,next);
          }
        };
        visit(value,[component]);
      }
    }
  }
  function addSounds(obj){
    for(const [id,value] of Object.entries(obj||{})){
      add({name:`minecraft:${id}`,kind:'registry',description:'Minecraft Java 1.21.1のサウンドイベント。playsoundコマンドで利用できます。',syntax:`/playsound minecraft:${id} master @a`,tags:['レジストリ','サウンド'],details:`サウンド定義の抜粋: ${JSON.stringify(value).slice(0,450)}\n出典: misode/mcmeta 1.21.1-summary/sounds/data.json`},'sounds');
    }
  }
  function pathCategory(path){
    // Keep worldgen subtypes and tag registry types separate; one giant "worldgen"
    // bucket caused earlier sampling to miss most kinds of world-generation JSON.
    const parts=String(path).split('/');
    if(parts[0]==='data' && parts[1] && parts[2]==='worldgen' && parts[3]) return `worldgen/${parts[3]}`;
    if(parts[0]==='data' && parts[1] && parts[2]==='tags' && parts[3]) return `tags/${parts[3]}`;
    return parts[2]||'datapack';
  }
  const TYPE_LABELS={
    'advancement':'進捗','loot_table':'ルートテーブル','item_modifier':'アイテム修飾子','predicate':'述語','recipe':'レシピ',
    'tags/block':'ブロックタグ','tags/item':'アイテムタグ','tags/entity_type':'エンティティタグ','tags/function':'関数タグ',
    'tags/fluid':'流体タグ','tags/game_event':'ゲームイベントタグ','tags/painting_variant':'絵画タグ','tags/instrument':'楽器タグ',
    'worldgen/biome':'ワールド生成・バイオーム','worldgen/configured_feature':'ワールド生成・設定済みフィーチャ',
    'worldgen/placed_feature':'ワールド生成・配置済みフィーチャ','worldgen/structure':'ワールド生成・構造物',
    'worldgen/structure_set':'ワールド生成・構造物セット','worldgen/template_pool':'ワールド生成・テンプレートプール',
    'worldgen/processor_list':'ワールド生成・プロセッサリスト','worldgen/noise_settings':'ワールド生成・ノイズ設定',
    'worldgen/density_function':'ワールド生成・密度関数','worldgen/noise':'ワールド生成・ノイズ',
    'worldgen/surface_rule':'ワールド生成・サーフェスルール','worldgen/placed_feature':'ワールド生成・配置済みフィーチャ',
    'worldgen/world_preset':'ワールド生成・ワールドプリセット','worldgen/flat_level_generator_preset':'ワールド生成・スーパーフラットプリセット',
    'worldgen/biome_source':'ワールド生成・バイオームソース','damage_type':'ダメージタイプ','enchantment':'エンチャント',
    'function':'関数','dimension':'ディメンション','dimension_type':'ディメンションタイプ','painting_variant':'絵画バリアント',
    'trim_material':'装飾素材','trim_pattern':'装飾パターン','instrument':'楽器','jukebox_song':'ジュークボックスの曲'
  };
  function humanType(folder){return TYPE_LABELS[folder]||({advancements:'進捗',advancement:'進捗',loot_tables:'ルートテーブル',loot_table:'ルートテーブル',item_modifiers:'アイテム修飾子',item_modifier:'アイテム修飾子',predicates:'述語',predicate:'述語',recipes:'レシピ',recipe:'レシピ',tags:'タグ',worldgen:'ワールド生成',damage_type:'ダメージタイプ',enchantment:'エンチャント',enchantments:'エンチャント',function:'関数',functions:'関数',structure:'構造物',structures:'構造物',trim_material:'装飾素材',trim_pattern:'装飾パターン',painting_variant:'絵画バリアント',instrument:'楽器',dimension:'ディメンション',dimension_type:'ディメンションタイプ'})[folder]||folder||'データパック';}
  function tagsForFolder(folder){
    const t=['データパック','JSON'];
    const jp=humanType(folder);
    if(jp.includes('ルートテーブル'))t.push('ルートテーブル');
    if(jp.includes('レシピ'))t.push('レシピ');
    if(jp.includes('ワールド生成'))t.push('ワールド生成');
    if(jp.includes('進捗'))t.push('進捗');
    if(jp.includes('関数'))t.push('関数');
    if(folder==='tags/item')t.push('アイテム');
    if(folder==='tags/block')t.push('ブロック');
    return [...new Set(t)];
  }
  function addDataPaths(tree){
    const paths=(tree?.tree||[]).filter(x=>x.type==='blob'&&x.path.startsWith('data/minecraft/')&&x.path.toLowerCase().endsWith('.json'));
    const byType=new Map();
    for(const file of paths){
      const category=pathCategory(file.path);
      if(!byType.has(category))byType.set(category,[]);
      byType.get(category).push(file.path);
      add({name:file.path,kind:'file',description:`Minecraft Java Edition 1.21.1のバニラデータにあるJSONファイル。種類: ${humanType(category)}。`,syntax:file.path,tags:tagsForFolder(category),details:`パス: ${file.path}\n形式カテゴリ: ${humanType(category)}\n取得元: misode/mcmeta 1.21.1-data\nこれは実在ファイルの索引であり、それ自体がJSON Schemaを意味するものではありません。`},'datapackFiles');
    }
    return {paths,byType};
  }
  function inferType(v){
    if(v===null)return 'null'; if(Array.isArray(v))return 'array'; return typeof v;
  }
  function flattenJsonFields(root, folder, filePath){
    const seen=new Set();
    const walk=(v, path)=>{
      if(!v||typeof v!=='object')return;
      if(Array.isArray(v)){
        // Represent array members as [] rather than unstable numeric indexes.
        for(const child of v) if(child&&typeof child==='object') walk(child,[...path,'[]']);
        return;
      }
      for(const [key,val] of Object.entries(v)){
        const full=[...path,key], p=full.join('.');
        if(!seen.has(p)){
          seen.add(p);
          add({name:`JSON項目 · ${folder} · ${p}`,kind:'jsonfield',description:`${humanType(folder)}形式のバニラJSONで観測されたフィールド「${p}」。サンプル型: ${inferType(val)}。`,syntax:p,tags:tagsForFolder(folder),details:`フィールドパス: ${p}\nサンプル型: ${inferType(val)}\nサンプルファイル: ${filePath}\n値の例: ${JSON.stringify(val).slice(0,400)}\n注意: バニラデータ内で確認できた観測例です。これは全パターンに対する厳密なJSON Schemaではありません。`},'jsonFields');
        }
        if(val&&typeof val==='object')walk(val,full);
      }
    };
    walk(root,[]);
    return seen.size;
  }
  async function addJsonFieldSamples(treeResult){
    if(!treeResult?.byType)return;
    // Use all modest-sized categories and representative files from large generated
    // worldgen registries. Categories are split by worldgen JSON type to avoid
    // sampling only biome files. The schema catalog below covers common formats.
    const candidates=[];
    for(const [folder, allRaw] of treeResult.byType.entries()){
      const all=[...allRaw].sort((a,b)=>a.localeCompare(b));
      const preferred=all.filter(p=>!p.includes('/tags/'));
      const list=preferred.length?preferred:all;
      const perCategory=folder.startsWith('worldgen/')?14:(folder.startsWith('tags/')?6:30);
      for(const p of list.slice(0,perCategory))candidates.push({folder,path:p});
    }
    // A cap prevents browsers from issuing several thousand requests at once,
    // while still taking samples from every identified JSON category.
    const maxTotal=1200;
    const jobs=candidates.slice(0,maxTotal);
    let done=0,cursor=0;
    const concurrency=8;
    async function worker(){
      while(true){
        const i=cursor++;if(i>=jobs.length)return;
        const job=jobs[i];
        try{const data=await fetchJSON(DATA_BASE+job.path);flattenJsonFields(data,job.folder,job.path);}
        catch(e){counts.errors++;}
        done++;
        if(done%25===0||done===jobs.length)emitProgress(`JSONフィールドを調査中 ${done}/${jobs.length}`);
      }
    }
    await Promise.all(Array.from({length:concurrency},worker));
  }
  function addSchemaCatalog(){
    // Curated, version-scoped field reference based on the Minecraft Wiki's
    // format descriptions and the 1.21.1 (data pack format 48) field naming.
    // This is a searchable reference catalogue, not a full JSON Schema validator.
    const rows=[];
    const S=(format,path,type,requirement,description,example='',constraints='',source='')=>rows.push({format,path,type,requirement,description,example,constraints,source});
    const adv='https://minecraft.wiki/w/Advancement/JSON_format';
    const loot='https://minecraft.wiki/w/Loot_table';
    const pred='https://minecraft.wiki/w/Predicate';
    const mod='https://minecraft.wiki/w/Item_modifier';
    const rec='https://minecraft.wiki/w/Recipe';
    const ench='https://minecraft.wiki/w/Enchantment_definition';
    const world='https://minecraft.wiki/w/Worldgen';
    const tag='https://minecraft.wiki/w/Tag';
    const damage='https://minecraft.wiki/w/Damage_type';
    const pack='https://minecraft.wiki/w/Pack.mcmeta';
    // pack.mcmeta
    S('pack.mcmeta','pack','object','必須','リソースパック/データパックのメタデータ。','{"pack":{"pack_format":48,"description":"Example"}}','root object',pack);
    S('pack.mcmeta','pack.pack_format','integer','必須','対応するデータパック形式番号。Java 1.21–1.21.1は48。','48','整数。Java 1.21.1では48。',pack);
    S('pack.mcmeta','pack.description','text component|string','必須','ランチャーやワールド選択画面に表示する説明。','{"text":"Example datapack"}','テキストコンポーネント形式。',pack);
    S('pack.mcmeta','pack.supported_formats','integer|object|array','任意','パックが対応すると宣言する形式範囲。','{"min_inclusive":48,"max_inclusive":48}','対応するバージョン範囲の宣言。',pack);
    S('pack.mcmeta','pack.supported_formats.min_inclusive','integer','supported_formatsがobjectなら必須','対応範囲の最小形式番号。','48','pack_formatとの整合を確認。',pack);
    S('pack.mcmeta','pack.supported_formats.max_inclusive','integer','supported_formatsがobjectなら必須','対応範囲の最大形式番号。','48','pack_formatとの整合を確認。',pack);
    S('pack.mcmeta','overlays','array','任意','形式範囲に応じて追加データを重ねるオーバーレイ一覧。','[{"formats":[48],"directory":"overlays/v48"}]','各要素はformatsとdirectoryを持つ。',pack);
    S('pack.mcmeta','overlays.entries[].formats','integer|array|object','必須','オーバーレイを適用するデータパック形式。','[48]','対応形式範囲。',pack);
    S('pack.mcmeta','overlays.entries[].directory','string','必須','オーバーレイとして読み込むディレクトリ。','"overlays/v48"','パック内の相対パス。',pack);
    // Advancements
    S('Advancement','parent','resource location','任意','親進捗ID。','"minecraft:adventure/root"','namespace:path形式。',adv);
    S('Advancement','display','object','任意','進捗画面と通知の表示設定。','{"icon":{"id":"minecraft:diamond"},"title":{"text":"Example"},"description":{"text":"Desc"}}','設定する場合はアイコン・タイトル等の表示データを記述。',adv);
    S('Advancement','display.icon','item stack object','displayがある場合は必須','進捗アイコンのアイテムスタック。','{"id":"minecraft:diamond","count":1}','1.20.5以降のアイテムスタックJSONを使用。',adv);
    S('Advancement','display.icon.id','resource location','icon内で必須','アイコンに使うアイテムID。','"minecraft:diamond"','アイテムレジストリに存在するID。',adv);
    S('Advancement','display.icon.count','integer','任意','アイコンスタックの個数。','1','通常は正の整数。',adv);
    S('Advancement','display.icon.components','object','任意','アイコン用アイテムに適用するコンポーネント。','{"minecraft:custom_model_data":1}','コンポーネント形式を使う。',adv);
    S('Advancement','display.title','text component','displayがある場合は必須','進捗名。','{"text":"First steps"}','JSONテキストコンポーネント。',adv);
    S('Advancement','display.description','text component','任意','進捗説明文。','{"text":"Collect an item"}','JSONテキストコンポーネント。',adv);
    S('Advancement','display.frame','string enum','任意','通知アイコンの枠種別。','"task"','task / goal / challenge。',adv);
    S('Advancement','display.background','resource location','任意','進捗画面の背景テクスチャ。','"minecraft:textures/gui/advancements/backgrounds/stone.png"','通常はroot進捗で指定。',adv);
    S('Advancement','display.show_toast','boolean','任意','達成時の通知トーストを表示するか。','true','既定値はtrue。',adv);
    S('Advancement','display.announce_to_chat','boolean','任意','達成をチャットに通知するか。','false','真偽値。',adv);
    S('Advancement','display.hidden','boolean','任意','未達成時に進捗を隠すか。','false','真偽値。',adv);
    S('Advancement','criteria','object','必須','達成条件を名前付きで定義する。','{"get_diamond":{"trigger":"minecraft:inventory_changed"}}','各criteria entryにはtriggerが必要。',adv);
    S('Advancement','criteria.<criterion>.trigger','resource location','各criteria内で必須','条件イベントのトリガーID。','"minecraft:inventory_changed"','Minecraftの進捗トリガーID。',adv);
    S('Advancement','criteria.<criterion>.conditions','object','任意','トリガー固有の条件パラメータ。','{"items":[{"items":"minecraft:diamond"}]}','構造はtriggerの種類に依存。',adv);
    S('Advancement','requirements','array of arrays of strings','任意','条件名の論理グループ。','[["get_diamond"]]','各内側配列はOR、外側配列はANDとして評価。',adv);
    S('Advancement','rewards','object','任意','進捗達成時に与える報酬。','{"experience":10,"loot":["example:reward"]}','子フィールドは任意。',adv);
    S('Advancement','rewards.experience','integer','任意','付与する経験値。','10','0以上。',adv);
    S('Advancement','rewards.loot','array of resource locations','任意','報酬として引くルートテーブル一覧。','["example:reward"]','loot_table IDの配列。',adv);
    S('Advancement','rewards.recipes','array of resource locations','任意','アンロックするレシピ一覧。','["minecraft:bread"]','recipe IDの配列。',adv);
    S('Advancement','rewards.function','resource location','任意','達成時に実行する関数ID。','"example:rewards/diamond"','関数ファイルへのID。',adv);
    // Loot tables root and pools
    S('Loot table','type','resource location','任意','ルートテーブルのコンテキスト種別。','"minecraft:entity"','省略時はgeneral/generic相当。実際の有効値とcontextは用途依存。',loot);
    S('Loot table','random_sequence','resource location','任意','決定論的乱数系列の識別子。','"minecraft:chests/simple_dungeon"','resource location。',loot);
    S('Loot table','pools','array','任意','アイテム抽選プール。','[{"rolls":1,"entries":[{"type":"minecraft:item","name":"minecraft:diamond"}]}]','各poolはrollsとentriesを中心に構成。',loot);
    S('Loot table','pools[].rolls','number provider','各poolで必須','抽選回数。','1','数値またはnumber provider。',loot);
    S('Loot table','pools[].bonus_rolls','number provider','任意','幸運などに応じた追加抽選数。','0','数値またはnumber provider。',loot);
    S('Loot table','pools[].conditions','array','任意','プールを実行する条件一覧。','[{"condition":"minecraft:survives_explosion"}]','loot condition objectの配列。',loot);
    S('Loot table','pools[].entries','array','各poolで必須','抽選候補となるエントリ。','[{"type":"minecraft:item","name":"minecraft:diamond"}]','entry typeによって追加フィールドが異なる。',loot);
    S('Loot table','pools[].functions','array','任意','プール結果に適用する関数一覧。','[{"function":"minecraft:set_count","count":2}]','item modifier function objectの配列。',loot);
    S('Loot table','pools[].rolls.type','string','number providerがobjectの場合に必須','数値プロバイダーの種類。','"minecraft:uniform"','constant/uniformなどの型を指定。',loot);
    S('Loot table','pools[].rolls.value','number','constant型の場合','定数値。','1','number providerのtypeに応じて使用。',loot);
    S('Loot entry','type','resource location','必須','エントリ種別。','"minecraft:item"','item / loot_table / tag / alternatives / sequence / group / empty など。',loot);
    S('Loot entry','name','resource location','item/loot_table/tag等で必須','対象アイテム、ルートテーブルまたはタグID。','"minecraft:diamond"','typeに応じたID。',loot);
    S('Loot entry','weight','integer','任意','抽選重み。','1','既定値1。',loot);
    S('Loot entry','quality','integer','任意','幸運値に応じて重みを調整する値。','0','整数。',loot);
    S('Loot entry','children','array','group/sequence等で使用','子エントリ群。','[{"type":"minecraft:item","name":"minecraft:apple"}]','複合entryの構造に依存。',loot);
    S('Loot entry','conditions','array','任意','エントリ単位の条件一覧。','[{"condition":"minecraft:killed_by_player"}]','loot condition配列。',loot);
    S('Loot entry','functions','array','任意','アイテム結果に適用するitem modifier関数。','[{"function":"minecraft:set_count","count":3}]','item modifier function配列。',loot);
    // Loot conditions and number providers
    for(const [p,t,r,d,e] of [
      ['condition','resource location','必須','条件タイプID。','"minecraft:random_chance"'],
      ['chance','number','random_chanceで必須','成功確率。','0.25'],
      ['conditions','array','all_of/any_ofで必須','子条件の一覧。','[{"condition":"minecraft:killed_by_player"}]'],
      ['term','object','invertedで必須','反転対象の条件。','{"condition":"minecraft:killed_by_player"}'],
      ['predicate','object','referenceなどで使用','参照先や子条件。','{}'],
      ['entity','string enum','entity_propertiesで必須','検査するエンティティ文脈。','"this"'],
      ['predicate','object','entity_properties内で使用','エンティティ条件JSON。','{"type":"minecraft:zombie"}']
    ]) S('Loot condition',p,t,r,d,e,'条件タイプ別に必須項目が異なる。',loot);
    S('Number provider','type','resource location','object形式の場合に必須','数値生成方式。','"minecraft:uniform"','constant / uniform / binomial / score 等の型を指定。',loot);
    S('Number provider','min','number provider','uniform型で必須','生成範囲の下限。','1','入れ子の数値プロバイダーも指定可能。',loot);
    S('Number provider','max','number provider','uniform型で必須','生成範囲の上限。','3','min以下にならないようにする。',loot);
    S('Number provider','n','integer','binomial型で必須','二項分布の試行回数。','3','整数。',loot);
    S('Number provider','p','number','binomial型で必須','二項分布の成功確率。','0.5','0〜1。',loot);
    // Predicates (condition-format JSON)
    S('Predicate','condition','resource location','必須','述語条件のタイプID。','"minecraft:entity_properties"','condition種別で残りフィールドが異なる。',pred);
    S('Predicate','entity','string enum','entity_propertiesで必須','評価するエンティティ文脈。','"this"','this / direct_killer / killer / player 等。',pred);
    S('Predicate','predicate','object','任意/条件種別依存','エンティティ、アイテム、位置などの子述語。','{}','condition typeに応じて形が変わる。',pred);
    S('Predicate','conditions','array','all_of/any_ofで必須','複数条件の論理結合。','[{"condition":"minecraft:random_chance","chance":0.5}]','子述語の配列。',pred);
    S('Predicate','term','object','invertedで必須','結果を反転する条件。','{"condition":"minecraft:random_chance","chance":0.5}','子述語。',pred);
    S('Predicate','chance','number','random_chanceで必須','条件が成立する確率。','0.5','0〜1。',pred);
    S('Predicate','block','object','location_check等の条件で使用','検査対象ブロックの述語。','{"blocks":"minecraft:stone"}','ブロックID/tag/state等で条件指定。',pred);
    S('Predicate','items','array','アイテム条件で使用','一致するアイテムスタック条件。','[{"items":"minecraft:diamond"}]','Item predicateの配列。1.20.5以降の形式を使用。',pred);
    // Item modifiers
    S('Item modifier','function','resource location','各関数オブジェクトで必須','適用するアイテム修飾関数の種類。','"minecraft:set_count"','function IDにより引数が変わる。',mod);
    S('Item modifier','count','number provider','set_countで必須','アイテム個数を設定する数値。','{"type":"minecraft:uniform","min":1,"max":3}','number provider。',mod);
    S('Item modifier','add','boolean','set_countで任意','既存個数に加算するか。','false','真偽値。',mod);
    S('Item modifier','components','object','set_componentsで必須','設定するアイテムコンポーネント一覧。','{"minecraft:custom_name":"{\\"text\\":\\"Gift\\"}"}','1.21.1のコンポーネント名を使用。',mod);
    S('Item modifier','tag','object/string','set_custom_data等で使用','アイテムに追加するカスタムデータ。','{"gift":true}','SNBT/JSON表現は関数ごとに確認。',mod);
    S('Item modifier','name','text component','set_nameで必須','アイテム名コンポーネント。','{"text":"Legendary"}','JSON text component。',mod);
    S('Item modifier','lore','array of text components','set_loreで必須','説明文行の配列。','[{"text":"Reward"}]','テキストコンポーネント配列。',mod);
    S('Item modifier','levels','number provider','enchant_with_levelsで必須','エンチャント付与レベル。','30','number provider。',mod);
    S('Item modifier','enchantments','array','enchant_randomly等で使用','付与/操作するエンチャントID。','["minecraft:unbreaking"]','関数ごとに受け付ける形式が異なる。',mod);
    S('Item modifier','damage','number provider','set_damageで必須','耐久度割合/ダメージ値を設定するプロバイダー。','0.2','関数での意味を確認する。',mod);
    S('Item modifier','conditions','array','任意','関数を適用する条件。','[{"condition":"minecraft:random_chance","chance":0.5}]','loot condition配列。',mod);
    // Recipes - common root fields
    S('Recipe','type','resource location','必須','レシピタイプ。','"minecraft:crafting_shaped"','crafting_shaped/shapeless/smelting/blasting/smoking/campfire_cooking/stonecutting/smithing_transform/smithing_trim 等。',rec);
    S('Recipe','group','string','任意','レシピブック内でまとめるグループ名。','"building"','文字列。',rec);
    S('Recipe','category','string enum','任意','レシピブックのカテゴリ。','"misc"','crafting系でbuilding/redstone/equipment/misc等。',rec);
    S('Recipe','show_notification','boolean','任意','レシピ解除時に通知するか。','true','クラフトレシピで使用。',rec);
    S('Shaped recipe','pattern','array of strings','必須','作業台の形状を行ごとに定義する。','["AB","BA"]','各行の幅は一致させ、通常最大3x3。',rec);
    S('Shaped recipe','key','object','必須','pattern内の記号を材料に割り当てる。','{"A":{"item":"minecraft:diamond"},"B":{"item":"minecraft:stick"}}','記号を材料のIngredientに対応させる。',rec);
    S('Shaped recipe','key.<symbol>.item','resource location','Ingredientのいずれか','材料アイテムID。','"minecraft:diamond"','itemまたはtagなどのIngredient形式。',rec);
    S('Shaped recipe','key.<symbol>.tag','resource location','Ingredientのいずれか','材料に使えるアイテムタグID。','"minecraft:planks"','tag形式。',rec);
    S('Shapeless recipe','ingredients','array','必須','材料スロットを構成するIngredient一覧。','[{"item":"minecraft:iron_ingot"}]','作業台の最大材料数内。',rec);
    S('Cooking recipe','ingredient','object','必須','焼成材料。','{"item":"minecraft:raw_iron"}','Ingredient形式。',rec);
    S('Cooking recipe','result','item stack object','必須','完成品スタック。','{"id":"minecraft:iron_ingot","count":1}','Java 1.20.5+のアイテムスタック形式。',rec);
    S('Cooking recipe','experience','number','任意','精錬完了時の経験値。','0.7','数値。',rec);
    S('Cooking recipe','cookingtime','integer','任意','調理に必要なtick数。','200','整数。',rec);
    S('Stonecutting recipe','count','integer','任意','出力アイテムの個数。','2','正の整数。',rec);
    S('Smithing transform recipe','template','object','必須','鍛冶型材料。','{"item":"minecraft:netherite_upgrade_smithing_template"}','Ingredient。',rec);
    S('Smithing transform recipe','base','object','必須','変換元アイテム。','{"item":"minecraft:diamond_sword"}','Ingredient。',rec);
    S('Smithing transform recipe','addition','object','必須','追加素材。','{"item":"minecraft:netherite_ingot"}','Ingredient。',rec);
    S('Smithing trim recipe','template','object','必須','装飾用鍛冶型。','{"item":"minecraft:coast_armor_trim_smithing_template"}','Ingredient。',rec);
    // Item stack and ingredient substructures
    S('Item stack','id','resource location','必須','アイテムスタックID。','"minecraft:diamond"','item registryに存在するID。',rec);
    S('Item stack','count','integer','任意','スタック数。','1','正の整数。',rec);
    S('Item stack','components','object','任意','完成品に付けるデータコンポーネント。','{"minecraft:custom_name":"{\\"text\\":\\"Gift\\"}"}','Java 1.20.5+形式。',rec);
    S('Ingredient','item','resource location','item/tagのいずれか','材料として許可する単一アイテム。','"minecraft:diamond"','itemまたはtagを使用。',rec);
    S('Ingredient','tag','resource location','item/tagのいずれか','材料として許可するアイテムタグ。','"minecraft:planks"','itemまたはtagを使用。',rec);
    // Enchantments (data-driven in 1.21)
    S('Enchantment','description','text component or string','必須','エンチャント名の表示コンポーネント。','{"translate":"enchantment.example.reach"}','1.21のデータ駆動エンチャント。',ench);
    S('Enchantment','supported_items','tag/resource location','必須','このエンチャントを適用できるアイテム集合。','"#minecraft:enchantable/mining"','アイテムタグまたは該当するID形式。',ench);
    S('Enchantment','primary_items','tag/resource location','任意','エンチャントテーブル等で優先対象となるアイテム集合。','"#minecraft:enchantable/mining"','supported_itemsの部分集合として扱う。',ench);
    S('Enchantment','weight','integer','必須','エンチャント抽選時の重み。','5','正の整数。',ench);
    S('Enchantment','max_level','integer','必須','最大レベル。','3','1以上。',ench);
    S('Enchantment','min_cost','object','必須','適用可能になるエンチャントレベルの下限計算。','{"base":1,"per_level_above_first":1}','base/per_level_above_first。',ench);
    S('Enchantment','min_cost.base','integer','必須','最小コストの基準値。','1','整数。',ench);
    S('Enchantment','min_cost.per_level_above_first','integer','必須','レベル1超過分の最小コスト加算。','1','整数。',ench);
    S('Enchantment','max_cost','object','必須','適用可能レベルの上限計算。','{"base":51,"per_level_above_first":10}','base/per_level_above_first。',ench);
    S('Enchantment','max_cost.base','integer','必須','最大コストの基準値。','51','整数。',ench);
    S('Enchantment','max_cost.per_level_above_first','integer','必須','レベル1超過分の最大コスト加算。','10','整数。',ench);
    S('Enchantment','anvil_cost','integer','必須','金床で使用するコスト基礎値。','4','整数。',ench);
    S('Enchantment','slots','array of strings','必須','効果を有効にする装備スロット。','["hand"]','例: any / mainhand / offhand / head / chest / legs / feet / body / armor。',ench);
    S('Enchantment','exclusive_set','tag/resource location/list','任意','同時に付与できないエンチャント集合。','"#minecraft:exclusive_set/damage"','タグまたはID集合形式。',ench);
    S('Enchantment','effects','object','必須','エンチャントによるゲーム効果定義。','{"minecraft:attributes":[]}','キーはeffect component type。',ench);
    S('Enchantment effect: attributes','id','resource location','各効果で必須','属性修飾子の一意なID。','"minecraft:example/reach"','1.21形式のID。',ench);
    S('Enchantment effect: attributes','attribute','resource location','各効果で必須','対象の属性ID。','"minecraft:block_interaction_range"','attribute registry ID。',ench);
    S('Enchantment effect: attributes','amount','number provider','各効果で必須','属性効果量を与える数値プロバイダー。','{"type":"minecraft:linear","base":1,"per_level_above_first":1}','level-based value。',ench);
    S('Enchantment effect: attributes','operation','string enum','各効果で必須','属性演算方式。','"add_value"','add_value / add_multiplied_base / add_multiplied_total。',ench);
    S('Enchantment effect: attributes','slot','string enum or list','任意','効果を適用する装備スロット。','"hand"','slotsと組み合わせて使用。',ench);
    // Damage type
    S('Damage type','message_id','string','必須','死亡メッセージの識別子。','"example"','文字列。',damage);
    S('Damage type','scaling','string enum','必須','難易度でダメージ量を調整する方式。','"when_caused_by_living_non_player"','always / when_caused_by_living_non_player / never。',damage);
    S('Damage type','exhaustion','number','必須','プレイヤーに与える満腹度消耗量。','0.1','数値。',damage);
    S('Damage type','effects','string enum','任意','ダメージの視覚/音響効果タイプ。','"hurt"','hurt / thorns / drowning / burning / poking / freezing等。',damage);
    S('Damage type','death_message_type','string enum','任意','死亡メッセージの分類。','"default"','default / fall_variants / intentional_game_design。',damage);
    // Tags
    S('Tag JSON','replace','boolean','任意','既存タグ値を置き換えるか。','false','trueの場合、同じIDの既存定義を置換。',tag);
    S('Tag JSON','values','array','必須','タグに含めるリソースID/別タグ一覧。','["minecraft:stone","#minecraft:base_stone_overworld"]','文字列IDまたはIDとrequiredを持つobject。',tag);
    S('Tag JSON','values[]','resource location|string object','values内で必須','タグ対象IDまたはタグ参照。','"minecraft:stone"','先頭#はタグ参照。',tag);
    S('Tag JSON','values[].id','resource location','object形式では必須','参照するIDまたはタグキー。','"minecraft:stone"','タグの種類に合ったレジストリ。',tag);
    S('Tag JSON','values[].required','boolean','任意','指定IDが存在しない場合の扱い。','false','falseは対象IDが存在しなくてもエラー扱いしない用途。',tag);
    // Biome worldgen
    S('Biome','has_precipitation','boolean','必須','雨/雪の降水を有効にするか。','true','真偽値。',world);
    S('Biome','temperature','number','必須','バイオームの基礎温度。','0.8','数値。',world);
    S('Biome','downfall','number','必須','植生などに使う降水量係数。','0.4','通常0〜1の数値。',world);
    S('Biome','effects','object','必須','空・水・霧・草等の環境色と環境音。','{"sky_color":7907327,"water_color":4159204,"fog_color":12638463}','subfields参照。',world);
    S('Biome','effects.sky_color','integer','必須','空の色をRGB整数で指定。','7907327','10進RGB整数。',world);
    S('Biome','effects.water_color','integer','必須','水の色。','4159204','10進RGB整数。',world);
    S('Biome','effects.fog_color','integer','必須','霧の色。','12638463','10進RGB整数。',world);
    S('Biome','effects.grass_color','integer','任意','草の色の上書き。','9470285','10進RGB整数。',world);
    S('Biome','effects.foliage_color','integer','任意','葉の色の上書き。','10387789','10進RGB整数。',world);
    S('Biome','effects.grass_color_modifier','string enum','任意','草色の修飾方式。','"dark_forest"','dark_forest / swamp。',world);
    S('Biome','effects.mood_sound','object','任意','環境ムード音の設定。','{"sound":"minecraft:ambient.cave","tick_delay":6000,"block_search_extent":8,"offset":2.0}','sound/tick_delay/block_search_extent/offset等。',world);
    S('Biome','effects.music','object','任意','バイオームの音楽設定。','{"sound":"minecraft:music.overworld.forest","min_delay":12000,"max_delay":24000,"replace_current_music":false}','sound/min_delay/max_delay/replace_current_music等。',world);
    S('Biome','carvers','object','必須','地形を掘るカーバーの配置。','{"air":["minecraft:cave"]}','step別のID配列。',world);
    S('Biome','features','array of arrays','必須','世代ステップごとの配置済みフィーチャ。','[[],["minecraft:ore_coal_upper"]]','世代ステップ順のネスト配列。',world);
    S('Biome','spawners','object','必須','自然スポーンするエンティティ種別の重み付き設定。','{"monster":[]}','カテゴリ別配列。',world);
    S('Biome','spawn_costs','object','必須','エンティティごとのスポーンコスト。','{}','IDごとのenergy_budget/charge。',world);
    S('Biome','temperature_modifier','string enum','任意','温度を変化させる修飾子。','"frozen"','none / frozen。',world);
    // Configured/placed features and noise settings
    S('Configured feature','type','resource location','必須','フィーチャ生成器の種類。','"minecraft:ore"','typeに対応するconfig schema。',world);
    S('Configured feature','config','object','必須','フィーチャ種類ごとの設定。','{"size":9,"discard_chance_on_air_exposure":0.0,"targets":[]}','type固有フィールド。',world);
    S('Placed feature','feature','resource location','必須','参照するconfigured_feature ID。','"minecraft:ore_diamond"','configured_feature参照。',world);
    S('Placed feature','placement','array','必須','配置方法のmodifier一覧。','[{"type":"minecraft:count","count":10},{"type":"minecraft:in_square"},{"type":"minecraft:biome"}]','modifierのtypeごとに引数が異なる。',world);
    S('Placement modifier','type','resource location','必須','配置modifier種別。','"minecraft:count"','count / rarity_filter / in_square / heightmap / biome等。',world);
    S('Placement modifier','count','integer or provider','countで必須','配置試行回数。','10','数値またはprovider。',world);
    S('Placement modifier','heightmap','resource location','heightmapで必須','高さ決定に使うheightmap。','"WORLD_SURFACE_WG"','heightmap type。',world);
    S('Structure set','structures','array','必須','生成する構造物と重み。','[{"structure":"minecraft:village_plains","weight":1}]','structure/weightペアの配列。',world);
    S('Structure set','placement','object','必須','構造物セットの配置規則。','{"type":"minecraft:random_spread","spacing":34,"separation":8,"salt":10387312}','typeにより配置パラメータが異なる。',world);
    S('Template pool','fallback','resource location','必須','プールが利用できない場合のフォールバックプール。','"minecraft:empty"','template_pool ID。',world);
    S('Template pool','elements','array','必須','構造テンプレート要素一覧。','[{"weight":1,"element":{"element_type":"minecraft:single_pool_element","location":"minecraft:village/plains/houses/plains_small_house_1","processors":"minecraft:empty","projection":"rigid"}}]','各entryにweightとelement。',world);
    S('Template pool element','element_type','resource location','必須','テンプレート要素の種類。','"minecraft:single_pool_element"','single_pool_element / list_pool_element / feature_pool_element / empty_pool_element等。',world);
    S('Noise settings','noise','object','必須','ノイズベース地形の基本設定。','{"min_y":-64,"height":384,"size_horizontal":1,"size_vertical":2}','noise設定内のfield。',world);
    S('Noise settings','default_block','block state object','必須','地形生成の既定ブロック。','{"Name":"minecraft:stone"}','ブロック状態表現。',world);
    S('Noise settings','default_fluid','block state object','必須','地形生成の既定流体。','{"Name":"minecraft:water"}','ブロック状態表現。',world);
    S('Noise settings','sea_level','integer','必須','海面高度。','63','整数。',world);
    S('Noise settings','noise_router','object','必須','地形ノイズの各役割に使うdensity function。','{"continents":"minecraft:overworld/continents"}','多数のdensity function参照フィールドを持つ。',world);
    S('Noise settings','surface_rule','object','必須','地表ブロック決定ルール。','{"type":"minecraft:sequence","sequence":[]}','Surface rule typeの再帰構造。',world);
    // Dimension/world preset
    S('Dimension','type','resource location or inline object','必須','dimension_type IDまたはインライン定義。','"minecraft:overworld"','dimension_type参照。',world);
    S('Dimension','generator','object','必須','ワールド生成方式。','{"type":"minecraft:noise","settings":"minecraft:overworld","biome_source":{}}','generator typeによってfieldsが変わる。',world);
    S('Noise generator','settings','resource location or object','noise generatorで必須','使用するnoise_settings。','"minecraft:overworld"','noise_settings参照またはinline値。',world);
    S('Noise generator','biome_source','object','noise generatorで必須','バイオーム配置方法。','{"type":"minecraft:multi_noise","preset":"minecraft:overworld"}','biome source typeに依存。',world);
    S('World preset','dimensions','object','必須','ディメンションIDごとの定義。','{"minecraft:overworld":{"type":"minecraft:overworld","generator":{}}}','キーはdimension ID。',world);
    // Other 1.21 data-driven formats
    S('Painting variant','width','integer','必須','絵画の幅（ブロック単位）。','4','正の整数。',world);
    S('Painting variant','height','integer','必須','絵画の高さ（ブロック単位）。','3','正の整数。',world);
    S('Painting variant','asset_id','resource location','必須','絵画のアセットID。','"minecraft:kebab"','painting variant asset identifier。',world);
    S('Trim material','asset_name','string','必須','防具トリムの素材アセット名。','"quartz"','素材アセット識別子。',world);
    S('Trim material','ingredient','resource location','必須','素材に使うアイテムID。','"minecraft:quartz"','item ID。',world);
    S('Trim material','item_model_index','number','必須','アイテムモデルの選択値。','0.1','数値。',world);
    S('Trim material','description','text component','必須','トリム素材名の表示コンポーネント。','{"translate":"trim_material.minecraft.quartz"}','text component。',world);
    S('Trim pattern','asset_id','resource location','必須','トリムパターンのアセットID。','"minecraft:coast"','pattern identifier。',world);
    S('Trim pattern','template_item','resource location','必須','テンプレートアイテムID。','"minecraft:coast_armor_trim_smithing_template"','item ID。',world);
    S('Trim pattern','description','text component','必須','トリムパターンの説明/名前。','{"translate":"trim_pattern.minecraft.coast"}','text component。',world);
    S('Trim pattern','decal','boolean','必須','素材パターンをモデル上でデカール表示するか。','false','真偽値。',world);
    S('Jukebox song','sound_event','object','必須','曲を再生するときに使用するサウンドイベント。','{"sound_id":"minecraft:music_disc.otherside"}','sound_idを持つ。',world);
    S('Jukebox song','description','text component','必須','曲アイテムのツールチップ説明。','{"translate":"jukebox_song.minecraft.otherside"}','text component。',world);
    S('Jukebox song','length_in_seconds','number','必須','曲の再生時間（秒）。','195.0','正の数。',world);
    S('Jukebox song','comparator_output','integer','必須','再生中に出力するコンパレーター信号。','4','1〜15の範囲。',world);
    // Additional fields commonly used by worldgen JSON definitions in 1.21.1.
    S('Noise settings','aquifers_enabled','boolean','必須','洞窟内の帯水層生成を有効にするか。','true','真偽値。',world);
    S('Noise settings','ore_veins_enabled','boolean','必須','鉱石鉱脈生成を有効にするか。','true','真偽値。',world);
    S('Noise settings','disable_mob_generation','boolean','必須','通常のモブ生成を抑止するか。','false','真偽値。',world);
    S('Noise settings','legacy_random_source','boolean','任意','旧方式の乱数ソースを使用するか。','false','真偽値。',world);
    S('Noise settings','spawn_target','array','必須','スポーン地点候補のノイズ範囲条件。','[]','continentalness/depth/erosion/humidity/temperature/weirdness等。',world);
    S('Height provider','type','resource location','object形式で必須','高さ決定方式。','"minecraft:uniform"','uniform / biased_to_bottom / very_biased_to_bottom等。',world);
    S('Height provider','min_inclusive','height provider','uniform等で必須','生成範囲の最小高さ（含む）。','{"absolute":-64}','absolute/above_bottom/below_top等のheight provider。',world);
    S('Height provider','max_inclusive','height provider','uniform等で必須','生成範囲の最大高さ（含む）。','{"absolute":320}','absolute/above_bottom/below_top等のheight provider。',world);
    S('Height provider','height','height provider','height_range placementで必須','高さ範囲の指定。','{"type":"minecraft:uniform","min_inclusive":{"absolute":0},"max_inclusive":{"absolute":64}}','height provider object。',world);
    S('Structure','type','resource location','必須','構造物生成方式の種類。','"minecraft:jigsaw"','構造形式に対応したtype固有フィールド。',world);
    S('Structure','biomes','tag/resource location/list','必須','生成可能なバイオーム条件。','"#minecraft:has_structure/village_plains"','biome tagまたは許可リスト。',world);
    S('Structure','step','string enum','必須','構造物を生成するワールド生成ステップ。','"surface_structures"','例: underground_structures / surface_structures / strongholds / underground_decoration。',world);
    S('Structure','terrain_adaptation','string enum','任意','構造物周辺の地形調整方式。','"beard_thin"','none / beard_thin / beard_box / bury等。',world);
    S('Jigsaw structure','start_pool','resource location','必須','開始テンプレートプールID。','"minecraft:village/plains/town_centers"','template_pool ID。',world);
    S('Jigsaw structure','size','integer','必須','Jigsaw構造の最大深度/サイズ。','6','整数。',world);
    S('Jigsaw structure','max_distance_from_center','integer','任意','中心から許可する最大距離。','80','整数。',world);
    S('Jigsaw structure','use_expansion_hack','boolean','任意','互換用拡張ロジックを使うか。','false','真偽値。',world);
    S('Jigsaw structure','start_height','height provider','必須','開始テンプレートの開始高度。','{"absolute":0}','height provider。',world);
    S('Structure set placement','spacing','integer','random_spreadで必須','構造物配置チャンク間隔。','34','separationより大きい整数。',world);
    S('Structure set placement','separation','integer','random_spreadで必須','構造物配置の最小間隔。','8','spacing未満の整数。',world);
    S('Structure set placement','salt','integer','任意/方式依存','配置位置の乱数シード。','10387312','整数。',world);
    S('Dimension type','ultrawarm','boolean','必須','水が蒸発する等の超高温ディメンションか。','false','真偽値。',world);
    S('Dimension type','natural','boolean','必須','自然なディメンションとして扱うか。','true','真偽値。',world);
    S('Dimension type','coordinate_scale','number','必須','オーバーワールド座標に対する比率。','1.0','数値。',world);
    S('Dimension type','has_skylight','boolean','必須','空の光を持つか。','true','真偽値。',world);
    S('Dimension type','has_ceiling','boolean','必須','天井を持つディメンションか。','false','真偽値。',world);
    S('Dimension type','ambient_light','number','必須','環境光レベル。','0.0','通常0〜1。',world);
    S('Dimension type','logical_height','integer','必須','ポータル等で用いる論理的な高さ上限。','384','整数。',world);
    S('Dimension type','min_y','integer','必須','最小ビルドY座標。','-64','整数。',world);
    S('Dimension type','height','integer','必須','ディメンションの高さ。','384','整数。',world);
    S('Dimension type','infiniburn','tag/resource location','必須','火が燃え続けるブロックタグ。','"#minecraft:infiniburn_overworld"','block tag。',world);
    S('Dimension type','effects','resource location','必須','クライアント表示に使う環境エフェクトID。','"minecraft:overworld"','resource location。',world);
    S('Dimension type','monster_spawn_block_light_limit','integer','必須','モンスター出現を制限するブロック光の閾値。','0','0〜15。',world);
    S('Dimension type','monster_spawn_light_level','integer/provider','必須','モンスターが出現できる光レベル条件。','0','整数またはprovider。',world);
    S('Loot table','functions','array','任意','ルートテーブル全体に適用する関数。','[{"function":"minecraft:set_count","count":2}]','item modifier function配列。',loot);
    S('Loot table','pools[].entries[].type','resource location','必須','ルートエントリタイプ。','"minecraft:item"','item/loot_table/tag/empty/alternatives/group/sequence等。',loot);
    S('Loot condition','looting_multiplier','number','random_chance_with_lootingで任意','ドロップ増加レベルごとの追加確率。','0.01','数値。',loot);
    S('Loot condition','block','resource location/object','block_state_property等で必須','条件に使うブロック情報。','"minecraft:stone"','condition typeにより型が異なる。',loot);
    S('Loot condition','state','object','block_state_propertyで任意','ブロック状態プロパティ条件。','{"lit":"true"}','プロパティ名と値。',loot);
    S('Loot condition','value','number provider/object','value_check等で必須','比較する値または数値プロバイダー。','1','condition typeにより形式が異なる。',loot);
    S('Loot condition','range','object','value_checkで必須','数値の許容範囲。','{"min":1,"max":10}','min/maxまたは境界形式。',loot);
    S('Predicate','location','object','location_check等で使用','位置条件の定義。','{"biomes":"minecraft:plains"}','biome/dimension/structure/light等、条件種別に依存。',pred);
    S('Predicate','flags','object','entity_properties等で使用','エンティティ状態フラグ。','{"is_on_fire":true,"is_sneaking":false}','状態フラグの集合。',pred);
    S('Predicate','equipment','object','entity_properties等で使用','装備スロットごとのアイテム条件。','{"mainhand":{"items":"minecraft:diamond_sword"}}','slotごとにitem predicate。',pred);
    S('Predicate','effects','object','entity_properties等で使用','状態効果ごとの条件。','{"minecraft:speed":{"amplifier":{"min":1}}}','effect IDごとにamplifier/duration等。',pred);
    S('Predicate','type','resource location/tag','entity_properties等で使用','エンティティ型条件。','"minecraft:zombie"','entity type IDまたはtag。',pred);
    S('Predicate','distance','object','location/attacker predicate等で使用','距離の範囲条件。','{"horizontal":{"min":0,"max":10}}','複数の距離軸。',pred);
    S('Predicate','enchantments','array','item predicate等で使用','エンチャント条件。','[{"enchantments":"minecraft:sharpness","levels":{"min":2}}]','1.21.1ではitem sub-predicateの形式に注意。',pred);
    S('Predicate','components','object','item predicate等で使用','アイテムコンポーネント条件。','{"minecraft:custom_data":{"gift":true}}','1.20.5以降は旧nbt/durability/potions等の形式と混同しない。',pred);
    // Function tags and file-specific common keys
    S('Function tag','replace','boolean','任意','既存の関数タグを置換するか。','false','boolean。',tag);
    S('Function tag','values','array of resource locations','必須','ロード時/毎tick等に実行する関数ID一覧。','["example:tick"]','function ID配列。',tag);
    // Materialize searchable records
    for(const r of rows){
      const tags=['データパック','JSON'];
      if(/Loot|Number provider/i.test(r.format))tags.push('ルートテーブル');
      if(/Recipe|Ingredient|Cooking|Shaped|Shapeless|Stonecutting|Smithing/i.test(r.format))tags.push('レシピ');
      if(/Biome|Feature|Noise|Structure|Template pool|Dimension|World preset/i.test(r.format))tags.push('ワールド生成');
      const name=`JSON仕様 · ${r.format} · ${r.path}`;
      const detail=[
        '仕様対象: Minecraft Java Edition 1.21.1 / Data Pack Format 48',
        `形式: ${r.format}`,
        `JSONパス: ${r.path}`,
        `型: ${r.type}`,
        `必須/任意: ${r.requirement}`,
        `説明: ${r.description}`,
        r.example?`例: ${r.example}`:'例: 個別形式のサンプルを確認',
        r.constraints?`制約/補足: ${r.constraints}`:'',
        r.source?`参照: ${r.source}`:'',
        '分類: Wiki記述を整理した仕様参照。Minecraft内部の全スキーマを形式検証するvalidatorではありません。'
      ].filter(Boolean).join('\n');
      add({name,kind:'jsonfield',description:`${r.requirement}。型: ${r.type}。${r.description}`,syntax:r.path,tags,details:detail},'schemaFields');
    }
    // Common condition/function variants searchable independently; details differ by type.
    const conditionTypes=[
      ['minecraft:random_chance','chance','number','確率条件。chanceで成功確率を指定。'],
      ['minecraft:random_chance_with_looting','chance','number','ドロップ増加を考慮した確率条件。chanceとlooting_multiplier。'],
      ['minecraft:survives_explosion','','','爆発耐性に応じてドロップ判定。'],
      ['minecraft:killed_by_player','','','プレイヤー撃破かを判定。'],
      ['minecraft:entity_properties','entity','string','指定文脈のエンティティをpredicateで検査。'],
      ['minecraft:location_check','predicate','object','現在位置をlocation predicateで検査。'],
      ['minecraft:time_check','value','number provider','ワールド時刻を検査。'],
      ['minecraft:weather_check','raining','boolean','雨/雷条件を検査。'],
      ['minecraft:all_of','terms','array','すべての子条件がtrueの場合に成功。'],
      ['minecraft:any_of','terms','array','いずれかの子条件がtrueの場合に成功。'],
      ['minecraft:inverted','term','object','子条件の結果を反転。'],
      ['minecraft:reference','name','resource location','別のpredicate/loot conditionを参照。'],
      ['minecraft:match_tool','predicate','object','使用アイテムをpredicateで検査。'],
      ['minecraft:table_bonus','enchantment','resource location','指定エンチャントレベルに応じた抽選条件。'],
      ['minecraft:value_check','value','number provider','数値範囲を検査。'],
      ['minecraft:entity_scores','scores','object','エンティティのscoreboard値を検査。'],
      ['minecraft:damage_source_properties','predicate','object','ダメージソースを検査。']
    ];
    for(const [id,field,type,desc] of conditionTypes){
      add({name:`Loot condition · ${id}`,kind:'jsonfield',description:desc,syntax:JSON.stringify({condition:id,...(field?{[field]:type==='number'?.25:type==='boolean'?true:type==='array'?[]:type==='object'?{}:type==='resource location'?'minecraft:example':type==='string'?'this':1}:{})}),tags:['データパック','JSON','ルートテーブル'],details:`条件ID: ${id}\n代表フィールド: ${field||'追加フィールドなし'}${type?`（${type}）`:''}\n説明: ${desc}\n詳細なフィールドはLoot conditionの形式および1.21.1のバニラJSON観測例を参照。\n出典: ${loot}`},'schemaFields');
    }
    const lootFunctions=[
      ['minecraft:set_count','count','数値プロバイダーでスタック数を設定','{"function":"minecraft:set_count","count":2}'],
      ['minecraft:set_components','components','アイテムコンポーネントを設定','{"function":"minecraft:set_components","components":{"minecraft:custom_data":{"gift":true}}}'],
      ['minecraft:set_custom_data','tag','カスタムデータを設定/マージ','{"function":"minecraft:set_custom_data","tag":{"gift":true}}'],
      ['minecraft:set_name','name','アイテム名を設定','{"function":"minecraft:set_name","name":{"text":"Reward"}}'],
      ['minecraft:set_lore','lore','説明文を設定','{"function":"minecraft:set_lore","lore":[{"text":"Rare"}]}'],
      ['minecraft:enchant_randomly','enchantments','候補からランダムにエンチャント','{"function":"minecraft:enchant_randomly","enchantments":["minecraft:unbreaking"]}'],
      ['minecraft:enchant_with_levels','levels','エンチャントレベル指定で付与','{"function":"minecraft:enchant_with_levels","levels":30}'],
      ['minecraft:set_damage','damage','耐久値/ダメージ割合を設定','{"function":"minecraft:set_damage","damage":0.25}'],
      ['minecraft:limit_count','limit','スタック数を上限/下限に制限','{"function":"minecraft:limit_count","limit":{"max":16}}'],
      ['minecraft:copy_state','properties','ブロック状態プロパティをコピー','{"function":"minecraft:copy_state","block":"minecraft:chest","properties":{"facing":"facing"}}'],
      ['minecraft:exploration_map','destination','探索地図の目的地を設定','{"function":"minecraft:exploration_map","destination":"minecraft:buried_treasure"}'],
      ['minecraft:furnace_smelt','','かまど精錬結果に変換','{"function":"minecraft:furnace_smelt"}'],
      ['minecraft:set_potion','id','ポーション種別を設定','{"function":"minecraft:set_potion","id":"minecraft:water"}'],
      ['minecraft:set_instrument','options','楽器を設定','{"function":"minecraft:set_instrument","options":"#minecraft:goat_horns"}'],
      ['minecraft:fill_player_head','entity','プレイヤーヘッドの所有者を設定','{"function":"minecraft:fill_player_head","entity":"this"}'],
      ['minecraft:set_fireworks','flight_duration','ロケット花火効果を設定','{"function":"minecraft:set_fireworks","flight_duration":1,"explosions":[]}'],
      ['minecraft:set_book_cover','title','本の表紙情報を設定','{"function":"minecraft:set_book_cover","title":"Book","author":"Author"}'],
      ['minecraft:toggle_tooltips','toggles','アイテムコンポーネントのtooltip表示を切り替える','{"function":"minecraft:toggle_tooltips","toggles":{"minecraft:enchantments":false}}']
    ];
    for(const [id,field,desc,example] of lootFunctions){
      add({name:`Item modifier function · ${id}`,kind:'jsonfield',description:desc,syntax:example,tags:['データパック','JSON','アイテム'],details:`function ID: ${id}\n主なフィールド: ${field||'追加引数なし'}\n例: ${example}\n注意: 関数ごとの条件付きフィールド/対応型は1.21.1の仕様で最終確認してください。\n出典: ${mod}`},'schemaFields');
    }
  }
  async function run(){
    emitProgress('構造化JSON仕様カタログを登録中');
    addSchemaCatalog();
    emitProgress('JSON仕様カタログを登録');
    const sources=[
      ['コマンド構文',()=>fetchJSON(BASE+'commands/data.json'),v=>addCommandTree(v)],
      ['ブロック・状態プロパティ',()=>fetchJSON(BASE+'blocks/data.json'),addBlocks],
      ['アイテムコンポーネント',()=>fetchJSON(BASE+'item_components/data.json'),addItemComponents],
      ['レジストリID',()=>fetchJSON(BASE+'registries/data.json'),addRegistries],
      ['サウンドイベント',()=>fetchJSON(BASE+'sounds/data.json'),addSounds]
    ];
    for(const [label,loader,transform] of sources){
      emitProgress(`${label}を取得中`);
      try{const value=await loader();transform(value);emitProgress(`${label}を登録`);}
      catch(e){counts.errors++;console.warn('[Minecraft SEARCH]',label,e);emitProgress(`${label}の取得に失敗`);}
    }
    emitProgress('データパックの全JSONパスを取得中');
    let pathResult=null;
    try{pathResult=addDataPaths(await fetchJSON(TREE_API));}
    catch(e){counts.errors++;console.warn('[Minecraft SEARCH] JSONファイル一覧',e);}
    emitProgress('代表JSONから項目名を抽出中');
    if(pathResult) await addJsonFieldSamples(pathResult);
    const result={added:database.length, total:database.length, counts:{...counts}, errors:counts.errors};
    window.dispatchEvent(new CustomEvent('mc-search-data-loaded',{detail:result}));
    console.info('[Minecraft SEARCH] data load result', result);
  }
  window.mcSearchCoverage=counts;
  emitProgress('データベースを準備中');
  run();
})();
