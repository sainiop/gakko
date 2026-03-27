// ===== DATA =====
const dataset = [
{
  kanji: "入",
  en: "to enter",
  hira: ["はいる","いれる"],
  type: "verb",
  examples: [
    { kanji: "入る", en: "to enter", hira: ["はいる"], type: "verb" },
    { kanji: "入れる", en: "to put in", hira: ["いれる"], type: "verb" },
    { kanji: "入口", en: "entrance", hira: ["いりぐち"], type: "noun" },
    { kanji: "入学", en: "school entry", hira: ["にゅうがく"], type: "noun" }
  ]
},{
      kanji: "右",
      primaryRadical: { radical: "口", name: "くち", meaning: "mouth" },
      en: "right",
      hira: ["みぎ"],
      type: "noun",
      examples: [
        { kanji: "右手", en: "right hand", hira: ["みぎて"], type: "noun" },
        { kanji: "右足", en: "right foot", hira: ["みぎあし"], type: "noun" },
        { kanji: "右側", en: "right side", hira: ["みぎがわ"], type: "noun" },
        { kanji: "右上", en: "upper right", hira: ["みぎうえ"], type: "noun" },
        { kanji: "左右", en: "left and right", hira: ["さゆう"], type: "noun" }
      ]
    },
    {
        kanji: "一",
        primaryRadical: { radical: "一", name: "いち", meaning: "one" },
        en: "one",
        hira: ["いち", "ひとつ"],
        type: "noun",
        examples: [
          { kanji: "一つ", en: "one thing", hira: ["ひとつ"], type: "noun" },
          { kanji: "一人", en: "one person", hira: ["ひとり"], type: "noun" },
          { kanji: "一日", en: "one day", hira: ["いちにち"], type: "noun" },
          { kanji: "一回", en: "one time", hira: ["いっかい"], type: "noun" },
          { kanji: "一口", en: "one bite", hira: ["ひとくち"], type: "noun" }
        ]
      },
      {
        kanji: "右",
        primaryRadical: { radical: "口", name: "くち", meaning: "mouth" },
        en: "right",
        hira: ["みぎ"],
        type: "noun",
        examples: [
          { kanji: "右手", en: "right hand", hira: ["みぎて"], type: "noun" },
          { kanji: "右足", en: "right foot", hira: ["みぎあし"], type: "noun" },
          { kanji: "右側", en: "right side", hira: ["みぎがわ"], type: "noun" },
          { kanji: "右上", en: "upper right", hira: ["みぎうえ"], type: "noun" },
          { kanji: "左右", en: "left and right", hira: ["さゆう"], type: "noun" }
        ]
      },
      {
        kanji: "雨",
        primaryRadical: { radical: "雨", name: "あめ", meaning: "rain" },
        en: "rain",
        hira: ["あめ"],
        type: "noun",
        examples: [
          { kanji: "雨水", en: "rainwater", hira: ["あまみず"], type: "noun" },
          { kanji: "大雨", en: "heavy rain", hira: ["おおあめ"], type: "noun" },
          { kanji: "雨天", en: "rainy weather", hira: ["うてん"], type: "noun" },
          { kanji: "雨具", en: "rain gear", hira: ["あまぐ"], type: "noun" },
          { kanji: "雨音", en: "sound of rain", hira: ["あまおと"], type: "noun" }
        ]
      },
      {
        kanji: "円",
        primaryRadical: { radical: "囗", name: "くにがまえ", meaning: "enclosure" },
        en: "yen / circle",
        hira: ["えん"],
        type: "noun",
        examples: [
          { kanji: "百円", en: "100 yen", hira: ["ひゃくえん"], type: "noun" },
          { kanji: "円形", en: "circle shape", hira: ["えんけい"], type: "noun" },
          { kanji: "円高", en: "strong yen", hira: ["えんだか"], type: "noun" },
          { kanji: "円安", en: "weak yen", hira: ["えんやす"], type: "noun" },
          { kanji: "円周", en: "circumference", hira: ["えんしゅう"], type: "noun" }
        ]
      },
      {
        kanji: "王",
        primaryRadical: { radical: "玉", name: "たま", meaning: "jade" },
        en: "king",
        hira: ["おう"],
        type: "noun",
        examples: [
          { kanji: "王様", en: "king", hira: ["おうさま"], type: "noun" },
          { kanji: "王国", en: "kingdom", hira: ["おうこく"], type: "noun" },
          { kanji: "王子", en: "prince", hira: ["おうじ"], type: "noun" },
          { kanji: "女王", en: "queen", hira: ["じょおう"], type: "noun" },
          { kanji: "王位", en: "throne", hira: ["おうい"], type: "noun" }
        ]
      },
      {
        kanji: "音",
        primaryRadical: { radical: "音", name: "おと", meaning: "sound" },
        en: "sound",
        hira: ["おと", "おん"],
        type: "noun",
        examples: [
          { kanji: "音楽", en: "music", hira: ["おんがく"], type: "noun" },
          { kanji: "音声", en: "voice", hira: ["おんせい"], type: "noun" },
          { kanji: "物音", en: "noise", hira: ["ものおと"], type: "noun" },
          { kanji: "足音", en: "footsteps", hira: ["あしおと"], type: "noun" },
          { kanji: "音量", en: "volume", hira: ["おんりょう"], type: "noun" }
        ]
      },
      {
        kanji: "下",
        primaryRadical: { radical: "一", name: "いち", meaning: "one" },
        en: "down",
        hira: ["した", "さがる"],
        type: "noun",
        examples: [
          { kanji: "下", en: "below", hira: ["した"], type: "noun" },
          { kanji: "下げる", en: "to lower", hira: ["さげる"], type: "verb" },
          { kanji: "下がる", en: "to go down", hira: ["さがる"], type: "verb" },
          { kanji: "地下", en: "underground", hira: ["ちか"], type: "noun" },
          { kanji: "下着", en: "underwear", hira: ["したぎ"], type: "noun" }
        ]
      },
      {
        kanji: "火",
        primaryRadical: { radical: "火", name: "ひ", meaning: "fire" },
        en: "fire",
        hira: ["ひ"],
        type: "noun",
        examples: [
          { kanji: "火山", en: "volcano", hira: ["かざん"], type: "noun" },
          { kanji: "火事", en: "fire accident", hira: ["かじ"], type: "noun" },
          { kanji: "花火", en: "fireworks", hira: ["はなび"], type: "noun" },
          { kanji: "火力", en: "firepower", hira: ["かりょく"], type: "noun" },
          { kanji: "火曜日", en: "Tuesday", hira: ["かようび"], type: "noun" }
        ]
      },
      {
        kanji: "花",
        primaryRadical: { radical: "艹", name: "くさかんむり", meaning: "grass" },
        en: "flower",
        hira: ["はな"],
        type: "noun",
        examples: [
          { kanji: "花見", en: "flower viewing", hira: ["はなみ"], type: "noun" },
          { kanji: "花火", en: "fireworks", hira: ["はなび"], type: "noun" },
          { kanji: "花束", en: "bouquet", hira: ["はなたば"], type: "noun" },
          { kanji: "生花", en: "fresh flowers", hira: ["せいか"], type: "noun" },
          { kanji: "花壇", en: "flower bed", hira: ["かだん"], type: "noun" }
        ]
      },
      {
        kanji: "貝",
        primaryRadical: { radical: "貝", name: "かい", meaning: "shell / money" },
        en: "shell",
        hira: ["かい"],
        type: "noun",
        examples: [
          { kanji: "貝殻", en: "shell", hira: ["かいがら"], type: "noun" },
          { kanji: "貝類", en: "shellfish", hira: ["かいるい"], type: "noun" },
          { kanji: "買う", en: "to buy", hira: ["かう"], type: "verb" },
          { kanji: "売る", en: "to sell", hira: ["うる"], type: "verb" },
          { kanji: "財布", en: "wallet", hira: ["さいふ"], type: "noun" }
        ]
      },
      {
        kanji: "学",
        primaryRadical: { radical: "子", name: "こ", meaning: "child" },
        en: "study",
        hira: ["がく","まなぶ"],
        type: "verb",
        examples: [
          { kanji: "学ぶ", en: "to study", hira: ["まなぶ"], type: "verb" },
          { kanji: "学生", en: "student", hira: ["がくせい"], type: "noun" },
          { kanji: "学校", en: "school", hira: ["がっこう"], type: "noun" },
          { kanji: "学年", en: "grade", hira: ["がくねん"], type: "noun" },
          { kanji: "学ぶ人", en: "learner", hira: ["まなぶひと"], type: "noun" }
        ]
      },
      {
        kanji: "気",
        primaryRadical: { radical: "气", name: "き", meaning: "air / spirit" },
        en: "spirit",
        hira: ["き"],
        type: "noun",
        examples: [
          { kanji: "元気", en: "healthy", hira: ["げんき"], type: "na-adjective" },
          { kanji: "気分", en: "feeling", hira: ["きぶん"], type: "noun" },
          { kanji: "天気", en: "weather", hira: ["てんき"], type: "noun" },
          { kanji: "気持ち", en: "feeling", hira: ["きもち"], type: "noun" },
          { kanji: "気をつける", en: "to be careful", hira: ["きをつける"], type: "verb" }
        ]
      },
      {
        kanji: "九",
        primaryRadical: { radical: "乙", name: "おつ", meaning: "curved" },
        en: "nine",
        hira: ["きゅう","ここのつ"],
        type: "noun",
        examples: [
          { kanji: "九つ", en: "nine things", hira: ["ここのつ"], type: "noun" },
          { kanji: "九人", en: "nine people", hira: ["きゅうにん"], type: "noun" },
          { kanji: "九日", en: "nine days", hira: ["ここのか"], type: "noun" },
          { kanji: "九回", en: "nine times", hira: ["きゅうかい"], type: "noun" },
          { kanji: "九月", en: "September", hira: ["くがつ"], type: "noun" }
        ]
      },
      {
        kanji: "休",
        primaryRadical: { radical: "亻", name: "にんべん", meaning: "person" },
        en: "rest",
        hira: ["やすむ"],
        type: "verb",
        examples: [
          { kanji: "休む", en: "to rest", hira: ["やすむ"], type: "verb" },
          { kanji: "休日", en: "holiday", hira: ["きゅうじつ"], type: "noun" },
          { kanji: "休み", en: "rest", hira: ["やすみ"], type: "noun" },
          { kanji: "昼休み", en: "lunch break", hira: ["ひるやすみ"], type: "noun" },
          { kanji: "夏休み", en: "summer vacation", hira: ["なつやすみ"], type: "noun" }
        ]
      },
      {
        kanji: "玉",
        primaryRadical: { radical: "玉", name: "たま", meaning: "jade / ball" },
        en: "ball",
        hira: ["たま"],
        type: "noun",
        examples: [
          { kanji: "玉", en: "ball", hira: ["たま"], type: "noun" },
          { kanji: "目玉", en: "eyeball", hira: ["めだま"], type: "noun" },
          { kanji: "玉ねぎ", en: "onion", hira: ["たまねぎ"], type: "noun" },
          { kanji: "宝玉", en: "gem", hira: ["ほうぎょく"], type: "noun" },
          { kanji: "水玉", en: "polka dot", hira: ["みずたま"], type: "noun" }
        ]
      },
      {
        kanji: "金",
        primaryRadical: { radical: "金", name: "かね", meaning: "gold / metal" },
        en: "gold / money",
        hira: ["かね","きん"],
        type: "noun",
        examples: [
          { kanji: "お金", en: "money", hira: ["おかね"], type: "noun" },
          { kanji: "金魚", en: "goldfish", hira: ["きんぎょ"], type: "noun" },
          { kanji: "金色", en: "gold color", hira: ["きんいろ"], type: "noun" },
          { kanji: "料金", en: "fee", hira: ["りょうきん"], type: "noun" },
          { kanji: "金曜日", en: "Friday", hira: ["きんようび"], type: "noun" }
        ]
      },
      {
        kanji: "空",
        primaryRadical: { radical: "穴", name: "あな", meaning: "hole" },
        en: "sky",
        hira: ["そら","くう"],
        type: "noun",
        examples: [
          { kanji: "空", en: "sky", hira: ["そら"], type: "noun" },
          { kanji: "空気", en: "air", hira: ["くうき"], type: "noun" },
          { kanji: "青空", en: "blue sky", hira: ["あおぞら"], type: "noun" },
          { kanji: "空く", en: "to become empty", hira: ["すく"], type: "verb" },
          { kanji: "空ける", en: "to empty", hira: ["あける"], type: "verb" }
        ]
      },
      {
        kanji: "月",
        primaryRadical: { radical: "月", name: "つき", meaning: "moon" },
        en: "moon",
        hira: ["つき","げつ"],
        type: "noun",
        examples: [
          { kanji: "月", en: "moon", hira: ["つき"], type: "noun" },
          { kanji: "月曜日", en: "Monday", hira: ["げつようび"], type: "noun" },
          { kanji: "今月", en: "this month", hira: ["こんげつ"], type: "noun" },
          { kanji: "来月", en: "next month", hira: ["らいげつ"], type: "noun" },
          { kanji: "満月", en: "full moon", hira: ["まんげつ"], type: "noun" }
        ]
      },
      {
        kanji: "犬",
        primaryRadical: { radical: "犬", name: "いぬ", meaning: "dog" },
        en: "dog",
        hira: ["いぬ"],
        type: "noun",
        examples: [
          { kanji: "犬", en: "dog", hira: ["いぬ"], type: "noun" },
          { kanji: "子犬", en: "puppy", hira: ["こいぬ"], type: "noun" },
          { kanji: "野犬", en: "stray dog", hira: ["やけん"], type: "noun" },
          { kanji: "犬小屋", en: "doghouse", hira: ["いぬごや"], type: "noun" },
          { kanji: "番犬", en: "guard dog", hira: ["ばんけん"], type: "noun" }
        ]
      },
      {
        kanji: "見",
        primaryRadical: { radical: "見", name: "みる", meaning: "see" },
        en: "to see",
        hira: ["みる"],
        type: "verb",
        examples: [
          { kanji: "見る", en: "to see", hira: ["みる"], type: "verb" },
          { kanji: "見せる", en: "to show", hira: ["みせる"], type: "verb" },
          { kanji: "見える", en: "to be visible", hira: ["みえる"], type: "verb" },
          { kanji: "見学", en: "field trip", hira: ["けんがく"], type: "noun" },
          { kanji: "意見", en: "opinion", hira: ["いけん"], type: "noun" }
        ]
      },
      {
        kanji: "五",
        primaryRadical: { radical: "二", name: "に", meaning: "two" },
        en: "five",
        hira: ["ご","いつつ"],
        type: "noun",
        examples: [
          { kanji: "五つ", en: "five things", hira: ["いつつ"], type: "noun" },
          { kanji: "五人", en: "five people", hira: ["ごにん"], type: "noun" },
          { kanji: "五日", en: "five days", hira: ["いつか"], type: "noun" },
          { kanji: "五回", en: "five times", hira: ["ごかい"], type: "noun" },
          { kanji: "五月", en: "May", hira: ["ごがつ"], type: "noun" }
        ]
      },
      {
        kanji: "口",
        primaryRadical: { radical: "口", name: "くち", meaning: "mouth" },
        en: "mouth",
        hira: ["くち"],
        type: "noun",
        examples: [
          { kanji: "口", en: "mouth", hira: ["くち"], type: "noun" },
          { kanji: "入口", en: "entrance", hira: ["いりぐち"], type: "noun" },
          { kanji: "出口", en: "exit", hira: ["でぐち"], type: "noun" },
          { kanji: "人口", en: "population", hira: ["じんこう"], type: "noun" },
          { kanji: "口数", en: "number of words", hira: ["くちかず"], type: "noun" }
        ]
      },
      {
        kanji: "校",
        primaryRadical: { radical: "木", name: "き", meaning: "tree" },
        en: "school",
        hira: ["こう"],
        type: "noun",
        examples: [
          { kanji: "学校", en: "school", hira: ["がっこう"], type: "noun" },
          { kanji: "高校", en: "high school", hira: ["こうこう"], type: "noun" },
          { kanji: "校長", en: "principal", hira: ["こうちょう"], type: "noun" },
          { kanji: "校庭", en: "schoolyard", hira: ["こうてい"], type: "noun" },
          { kanji: "登校", en: "to go to school", hira: ["とうこう"], type: "verb" }
        ]
      },
      {
        kanji: "左",
        primaryRadical: { radical: "工", name: "こう", meaning: "work" },
        en: "left",
        hira: ["ひだり"],
        type: "noun",
        examples: [
          { kanji: "左手", en: "left hand", hira: ["ひだりて"], type: "noun" },
          { kanji: "左足", en: "left foot", hira: ["ひだりあし"], type: "noun" },
          { kanji: "左側", en: "left side", hira: ["ひだりがわ"], type: "noun" },
          { kanji: "左上", en: "upper left", hira: ["ひだりうえ"], type: "noun" },
          { kanji: "左右", en: "left and right", hira: ["さゆう"], type: "noun" }
        ]
      },
      {
        kanji: "三",
        primaryRadical: { radical: "一", name: "いち", meaning: "one" },
        en: "three",
        hira: ["さん","みっつ"],
        type: "noun",
        examples: [
          { kanji: "三つ", en: "three things", hira: ["みっつ"], type: "noun" },
          { kanji: "三人", en: "three people", hira: ["さんにん"], type: "noun" },
          { kanji: "三日", en: "three days", hira: ["みっか"], type: "noun" },
          { kanji: "三回", en: "three times", hira: ["さんかい"], type: "noun" },
          { kanji: "三月", en: "March", hira: ["さんがつ"], type: "noun" }
        ]
      },
      {
        kanji: "山",
        primaryRadical: { radical: "山", name: "やま", meaning: "mountain" },
        en: "mountain",
        hira: ["やま"],
        type: "noun",
        examples: [
          { kanji: "山", en: "mountain", hira: ["やま"], type: "noun" },
          { kanji: "火山", en: "volcano", hira: ["かざん"], type: "noun" },
          { kanji: "山道", en: "mountain path", hira: ["やまみち"], type: "noun" },
          { kanji: "山川", en: "mountains and rivers", hira: ["やまかわ"], type: "noun" },
          { kanji: "山登り", en: "mountain climbing", hira: ["やまのぼり"], type: "noun" }
        ]
      },
      {
        kanji: "子",
        primaryRadical: { radical: "子", name: "こ", meaning: "child" },
        en: "child",
        hira: ["こ"],
        type: "noun",
        examples: [
          { kanji: "子ども", en: "child", hira: ["こども"], type: "noun" },
          { kanji: "男子", en: "boy", hira: ["だんし"], type: "noun" },
          { kanji: "女子", en: "girl", hira: ["じょし"], type: "noun" },
          { kanji: "親子", en: "parent and child", hira: ["おやこ"], type: "noun" },
          { kanji: "子犬", en: "puppy", hira: ["こいぬ"], type: "noun" }
        ]
      },
      {
        kanji: "四",
        primaryRadical: { radical: "囗", name: "くにがまえ", meaning: "enclosure" },
        en: "four",
        hira: ["し","よっつ"],
        type: "noun",
        examples: [
          { kanji: "四つ", en: "four things", hira: ["よっつ"], type: "noun" },
          { kanji: "四人", en: "four people", hira: ["よにん"], type: "noun" },
          { kanji: "四日", en: "four days", hira: ["よっか"], type: "noun" },
          { kanji: "四回", en: "four times", hira: ["よんかい"], type: "noun" },
          { kanji: "四月", en: "April", hira: ["しがつ"], type: "noun" }
        ]
      },
      {
        kanji: "糸",
        primaryRadical: { radical: "糸", name: "いと", meaning: "thread" },
        en: "thread",
        hira: ["いと"],
        type: "noun",
        examples: [
          { kanji: "糸", en: "thread", hira: ["いと"], type: "noun" },
          { kanji: "毛糸", en: "wool yarn", hira: ["けいと"], type: "noun" },
          { kanji: "糸口", en: "clue", hira: ["いとぐち"], type: "noun" },
          { kanji: "赤糸", en: "red thread", hira: ["あかいと"], type: "noun" },
          { kanji: "糸車", en: "spinning wheel", hira: ["いとぐるま"], type: "noun" }
        ]
      },
      {
        kanji: "字",
        primaryRadical: { radical: "宀", name: "うかんむり", meaning: "roof" },
        en: "character",
        hira: ["じ"],
        type: "noun",
        examples: [
          { kanji: "文字", en: "letter / character", hira: ["もじ"], type: "noun" },
          { kanji: "数字", en: "number", hira: ["すうじ"], type: "noun" },
          { kanji: "漢字", en: "kanji", hira: ["かんじ"], type: "noun" },
          { kanji: "名字", en: "surname", hira: ["みょうじ"], type: "noun" },
          { kanji: "字を書く", en: "to write characters", hira: ["じをかく"], type: "verb" }
        ]
      },
      {
        kanji: "耳",
        primaryRadical: { radical: "耳", name: "みみ", meaning: "ear" },
        en: "ear",
        hira: ["みみ"],
        type: "noun",
        examples: [
          { kanji: "耳", en: "ear", hira: ["みみ"], type: "noun" },
          { kanji: "耳元", en: "near the ear", hira: ["みみもと"], type: "noun" },
          { kanji: "耳鳴り", en: "ringing in ears", hira: ["みみなり"], type: "noun" },
          { kanji: "耳にする", en: "to hear", hira: ["みみにする"], type: "verb" },
          { kanji: "大耳", en: "big ears", hira: ["おおみみ"], type: "noun" }
        ]
      },
      {
        kanji: "七",
        primaryRadical: { radical: "一", name: "いち", meaning: "one" },
        en: "seven",
        hira: ["なな","しち"],
        type: "noun",
        examples: [
          { kanji: "七つ", en: "seven things", hira: ["ななつ"], type: "noun" },
          { kanji: "七人", en: "seven people", hira: ["しちにん"], type: "noun" },
          { kanji: "七日", en: "seven days", hira: ["なのか"], type: "noun" },
          { kanji: "七回", en: "seven times", hira: ["ななかい"], type: "noun" },
          { kanji: "七月", en: "July", hira: ["しちがつ"], type: "noun" }
        ]
      },
      {
        kanji: "車",
        primaryRadical: { radical: "車", name: "くるま", meaning: "car" },
        en: "car",
        hira: ["くるま"],
        type: "noun",
        examples: [
          { kanji: "車", en: "car", hira: ["くるま"], type: "noun" },
          { kanji: "電車", en: "train", hira: ["でんしゃ"], type: "noun" },
          { kanji: "自転車", en: "bicycle", hira: ["じてんしゃ"], type: "noun" },
          { kanji: "車道", en: "roadway", hira: ["しゃどう"], type: "noun" },
          { kanji: "車庫", en: "garage", hira: ["しゃこ"], type: "noun" }
        ]
      },
      {
        kanji: "手",
        primaryRadical: { radical: "手", name: "てへん", meaning: "hand" },
        en: "hand",
        hira: ["て"],
        type: "noun",
        examples: [
          { kanji: "手紙", en: "letter", hira: ["てがみ"], type: "noun" },
          { kanji: "手伝う", en: "to help", hira: ["てつだう"], type: "verb" },
          { kanji: "上手", en: "skillful", hira: ["じょうず"], type: "na-adjective" },
          { kanji: "下手", en: "unskilled", hira: ["へた"], type: "na-adjective" },
          { kanji: "手首", en: "wrist", hira: ["てくび"], type: "noun" }
        ]
      },
      {
        kanji: "十",
        primaryRadical: { radical: "十", name: "じゅう", meaning: "ten" },
        en: "ten",
        hira: ["じゅう"],
        type: "noun",
        examples: [
          { kanji: "十", en: "ten", hira: ["じゅう"], type: "noun" },
          { kanji: "十日", en: "ten days", hira: ["とおか"], type: "noun" },
          { kanji: "十人", en: "ten people", hira: ["じゅうにん"], type: "noun" },
          { kanji: "十回", en: "ten times", hira: ["じゅっかい"], type: "noun" },
          { kanji: "十円", en: "ten yen", hira: ["じゅうえん"], type: "noun" }
        ]
      },
      {
        kanji: "出",
        primaryRadical: { radical: "凵", name: "かんにょう", meaning: "container" },
        en: "to go out",
        hira: ["でる","だす"],
        type: "verb",
        examples: [
          { kanji: "出る", en: "to go out", hira: ["でる"], type: "verb" },
          { kanji: "出す", en: "to take out", hira: ["だす"], type: "verb" },
          { kanji: "出口", en: "exit", hira: ["でぐち"], type: "noun" },
          { kanji: "出発", en: "departure", hira: ["しゅっぱつ"], type: "noun" },
          { kanji: "思い出", en: "memory", hira: ["おもいで"], type: "noun" }
        ]
      },
      {
        kanji: "女",
        primaryRadical: { radical: "女", name: "おんな", meaning: "woman" },
        en: "woman",
        hira: ["おんな"],
        type: "noun",
        examples: [
          { kanji: "女", en: "woman", hira: ["おんな"], type: "noun" },
          { kanji: "女性", en: "woman", hira: ["じょせい"], type: "noun" },
          { kanji: "女の子", en: "girl", hira: ["おんなのこ"], type: "noun" },
          { kanji: "男女", en: "men and women", hira: ["だんじょ"], type: "noun" },
          { kanji: "彼女", en: "she / girlfriend", hira: ["かのじょ"], type: "noun" }
        ]
      },
      {
        kanji: "小",
        primaryRadical: { radical: "小", name: "しょう", meaning: "small" },
        en: "small",
        hira: ["ちいさい","しょう"],
        type: "i-adjective",
        examples: [
          { kanji: "小さい", en: "small", hira: ["ちいさい"], type: "i-adjective" },
          { kanji: "小学校", en: "elementary school", hira: ["しょうがっこう"], type: "noun" },
          { kanji: "小鳥", en: "small bird", hira: ["ことり"], type: "noun" },
          { kanji: "小川", en: "stream", hira: ["おがわ"], type: "noun" },
          { kanji: "小さな町", en: "small town", hira: ["ちいさなまち"], type: "noun" }
        ]
      },
      {
        kanji: "上",
        primaryRadical: { radical: "一", name: "いち", meaning: "one" },
        en: "up",
        hira: ["うえ","あがる"],
        type: "noun",
        examples: [
          { kanji: "上", en: "above", hira: ["うえ"], type: "noun" },
          { kanji: "上がる", en: "to go up", hira: ["あがる"], type: "verb" },
          { kanji: "上げる", en: "to raise", hira: ["あげる"], type: "verb" },
          { kanji: "上手", en: "skillful", hira: ["じょうず"], type: "na-adjective" },
          { kanji: "机の上", en: "on the desk", hira: ["つくえのうえ"], type: "noun" }
        ]
      },
      {
        kanji: "森",
        primaryRadical: { radical: "木", name: "き", meaning: "tree" },
        en: "forest",
        hira: ["もり"],
        type: "noun",
        examples: [
          { kanji: "森", en: "forest", hira: ["もり"], type: "noun" },
          { kanji: "森林", en: "forest", hira: ["しんりん"], type: "noun" },
          { kanji: "森の中", en: "inside the forest", hira: ["もりのなか"], type: "noun" },
          { kanji: "森道", en: "forest path", hira: ["もりみち"], type: "noun" },
          { kanji: "森へ行く", en: "to go to the forest", hira: ["もりへいく"], type: "verb" }
        ]
      },
      {
        kanji: "人",
        primaryRadical: { radical: "人", name: "ひと", meaning: "person" },
        en: "person",
        hira: ["ひと","じん"],
        type: "noun",
        examples: [
          { kanji: "人", en: "person", hira: ["ひと"], type: "noun" },
          { kanji: "日本人", en: "Japanese person", hira: ["にほんじん"], type: "noun" },
          { kanji: "外国人", en: "foreigner", hira: ["がいこくじん"], type: "noun" },
          { kanji: "大人", en: "adult", hira: ["おとな"], type: "noun" },
          { kanji: "一人", en: "one person", hira: ["ひとり"], type: "noun" }
        ]
      },
      {
        kanji: "水",
        primaryRadical: { radical: "水", name: "みず", meaning: "water" },
        en: "water",
        hira: ["みず"],
        type: "noun",
        examples: [
          { kanji: "水", en: "water", hira: ["みず"], type: "noun" },
          { kanji: "水道", en: "water supply", hira: ["すいどう"], type: "noun" },
          { kanji: "水曜日", en: "Wednesday", hira: ["すいようび"], type: "noun" },
          { kanji: "水泳", en: "swimming", hira: ["すいえい"], type: "noun" },
          { kanji: "水を飲む", en: "to drink water", hira: ["みずをのむ"], type: "verb" }
        ]
      },
      {
        kanji: "正",
        primaryRadical: { radical: "止", name: "とめる", meaning: "stop" },
        en: "correct",
        hira: ["ただしい"],
        type: "i-adjective",
        examples: [
          { kanji: "正しい", en: "correct", hira: ["ただしい"], type: "i-adjective" },
          { kanji: "正月", en: "New Year", hira: ["しょうがつ"], type: "noun" },
          { kanji: "正解", en: "correct answer", hira: ["せいかい"], type: "noun" },
          { kanji: "正しい答え", en: "correct answer", hira: ["ただしいこたえ"], type: "noun" },
          { kanji: "正す", en: "to correct", hira: ["ただす"], type: "verb" }
        ]
      },
      {
        kanji: "生",
        primaryRadical: { radical: "生", name: "いきる", meaning: "life" },
        en: "life",
        hira: ["いきる","せい"],
        type: "verb",
        examples: [
          { kanji: "生きる", en: "to live", hira: ["いきる"], type: "verb" },
          { kanji: "学生", en: "student", hira: ["がくせい"], type: "noun" },
          { kanji: "先生", en: "teacher", hira: ["せんせい"], type: "noun" },
          { kanji: "生活", en: "life", hira: ["せいかつ"], type: "noun" },
          { kanji: "生まれる", en: "to be born", hira: ["うまれる"], type: "verb" }
        ]
      },
      {
        kanji: "青",
        primaryRadical: { radical: "青", name: "あお", meaning: "blue" },
        en: "blue",
        hira: ["あお"],
        type: "noun",
        examples: [
          { kanji: "青い", en: "blue", hira: ["あおい"], type: "i-adjective" },
          { kanji: "青空", en: "blue sky", hira: ["あおぞら"], type: "noun" },
          { kanji: "青春", en: "youth", hira: ["せいしゅん"], type: "noun" },
          { kanji: "青信号", en: "green light", hira: ["あおしんごう"], type: "noun" },
          { kanji: "青山", en: "blue mountain", hira: ["あおやま"], type: "noun" }
        ]
      },
      {
        kanji: "夕",
        primaryRadical: { radical: "夕", name: "ゆう", meaning: "evening" },
        en: "evening",
        hira: ["ゆう"],
        type: "noun",
        examples: [
          { kanji: "夕方", en: "evening", hira: ["ゆうがた"], type: "noun" },
          { kanji: "夕日", en: "sunset", hira: ["ゆうひ"], type: "noun" },
          { kanji: "夕食", en: "dinner", hira: ["ゆうしょく"], type: "noun" },
          { kanji: "夕焼け", en: "sunset glow", hira: ["ゆうやけ"], type: "noun" },
          { kanji: "夕方に帰る", en: "to return in the evening", hira: ["ゆうがたにかえる"], type: "verb" }
        ]
      },
      {
        kanji: "石",
        primaryRadical: { radical: "石", name: "いし", meaning: "stone" },
        en: "stone",
        hira: ["いし"],
        type: "noun",
        examples: [
          { kanji: "石", en: "stone", hira: ["いし"], type: "noun" },
          { kanji: "石油", en: "oil", hira: ["せきゆ"], type: "noun" },
          { kanji: "石炭", en: "coal", hira: ["せきたん"], type: "noun" },
          { kanji: "宝石", en: "gem", hira: ["ほうせき"], type: "noun" },
          { kanji: "石段", en: "stone steps", hira: ["いしだん"], type: "noun" }
        ]
      },
      {
        kanji: "赤",
        primaryRadical: { radical: "赤", name: "あか", meaning: "red" },
        en: "red",
        hira: ["あか"],
        type: "noun",
        examples: [
          { kanji: "赤い", en: "red", hira: ["あかい"], type: "i-adjective" },
          { kanji: "赤ちゃん", en: "baby", hira: ["あかちゃん"], type: "noun" },
          { kanji: "赤信号", en: "red light", hira: ["あかしんごう"], type: "noun" },
          { kanji: "真っ赤", en: "bright red", hira: ["まっか"], type: "na-adjective" },
          { kanji: "赤字", en: "deficit", hira: ["あかじ"], type: "noun" }
        ]
      },
      {
        kanji: "千",
        primaryRadical: { radical: "十", name: "じゅう", meaning: "ten" },
        en: "thousand",
        hira: ["せん"],
        type: "noun",
        examples: [
          { kanji: "千円", en: "1000 yen", hira: ["せんえん"], type: "noun" },
          { kanji: "千人", en: "thousand people", hira: ["せんにん"], type: "noun" },
          { kanji: "千回", en: "thousand times", hira: ["せんかい"], type: "noun" },
          { kanji: "千年", en: "thousand years", hira: ["せんねん"], type: "noun" },
          { kanji: "何千", en: "thousands", hira: ["なんぜん"], type: "noun" }
        ]
      },
      {
        kanji: "川",
        primaryRadical: { radical: "川", name: "かわ", meaning: "river" },
        en: "river",
        hira: ["かわ"],
        type: "noun",
        examples: [
          { kanji: "川", en: "river", hira: ["かわ"], type: "noun" },
          { kanji: "川辺", en: "riverside", hira: ["かわべ"], type: "noun" },
          { kanji: "小川", en: "stream", hira: ["おがわ"], type: "noun" },
          { kanji: "川口", en: "river mouth", hira: ["かわぐち"], type: "noun" },
          { kanji: "川に行く", en: "to go to the river", hira: ["かわにいく"], type: "verb" }
        ]
      },
      {
        kanji: "先",
        primaryRadical: { radical: "儿", name: "にんにょう", meaning: "legs" },
        en: "ahead",
        hira: ["さき","せん"],
        type: "noun",
        examples: [
          { kanji: "先", en: "ahead", hira: ["さき"], type: "noun" },
          { kanji: "先生", en: "teacher", hira: ["せんせい"], type: "noun" },
          { kanji: "先週", en: "last week", hira: ["せんしゅう"], type: "noun" },
          { kanji: "先に行く", en: "to go ahead", hira: ["さきにいく"], type: "verb" },
          { kanji: "先月", en: "last month", hira: ["せんげつ"], type: "noun" }
        ]
      },
      {
        kanji: "早",
        primaryRadical: { radical: "日", name: "ひ", meaning: "sun" },
        en: "early",
        hira: ["はやい"],
        type: "i-adjective",
        examples: [
          { kanji: "早い", en: "early", hira: ["はやい"], type: "i-adjective" },
          { kanji: "早朝", en: "early morning", hira: ["そうちょう"], type: "noun" },
          { kanji: "早口", en: "fast speech", hira: ["はやくち"], type: "noun" },
          { kanji: "早く行く", en: "to go early", hira: ["はやくいく"], type: "verb" },
          { kanji: "早起き", en: "early rising", hira: ["はやおき"], type: "noun" }
        ]
      },
      {
        kanji: "草",
        primaryRadical: { radical: "艹", name: "くさかんむり", meaning: "grass" },
        en: "grass",
        hira: ["くさ"],
        type: "noun",
        examples: [
          { kanji: "草", en: "grass", hira: ["くさ"], type: "noun" },
          { kanji: "草花", en: "plants and flowers", hira: ["くさばな"], type: "noun" },
          { kanji: "草原", en: "grassland", hira: ["そうげん"], type: "noun" },
          { kanji: "雑草", en: "weed", hira: ["ざっそう"], type: "noun" },
          { kanji: "草取り", en: "weeding", hira: ["くさとり"], type: "noun" }
        ]
      },
      {
        kanji: "足",
        primaryRadical: { radical: "足", name: "あし", meaning: "foot" },
        en: "foot",
        hira: ["あし"],
        type: "noun",
        examples: [
          { kanji: "足", en: "foot", hira: ["あし"], type: "noun" },
          { kanji: "足りる", en: "to be enough", hira: ["たりる"], type: "verb" },
          { kanji: "足す", en: "to add", hira: ["たす"], type: "verb" },
          { kanji: "足音", en: "footsteps", hira: ["あしおと"], type: "noun" },
          { kanji: "満足", en: "satisfaction", hira: ["まんぞく"], type: "noun" }
        ]
      },
      {
        kanji: "村",
        primaryRadical: { radical: "木", name: "き", meaning: "tree" },
        en: "village",
        hira: ["むら"],
        type: "noun",
        examples: [
          { kanji: "村", en: "village", hira: ["むら"], type: "noun" },
          { kanji: "村人", en: "villager", hira: ["むらびと"], type: "noun" },
          { kanji: "農村", en: "farming village", hira: ["のうそん"], type: "noun" },
          { kanji: "山村", en: "mountain village", hira: ["さんそん"], type: "noun" },
          { kanji: "村に住む", en: "to live in a village", hira: ["むらにすむ"], type: "verb" }
        ]
      },
      {
        kanji: "大",
        primaryRadical: { radical: "大", name: "だい", meaning: "big" },
        en: "big",
        hira: ["おおきい","だい"],
        type: "i-adjective",
        examples: [
          { kanji: "大きい", en: "big", hira: ["おおきい"], type: "i-adjective" },
          { kanji: "大学", en: "university", hira: ["だいがく"], type: "noun" },
          { kanji: "大人", en: "adult", hira: ["おとな"], type: "noun" },
          { kanji: "大雨", en: "heavy rain", hira: ["おおあめ"], type: "noun" },
          { kanji: "大好き", en: "to really like", hira: ["だいすき"], type: "na-adjective" }
        ]
      },
      {
        kanji: "男",
        primaryRadical: { radical: "田", name: "た", meaning: "field" },
        en: "man",
        hira: ["おとこ"],
        type: "noun",
        examples: [
          { kanji: "男", en: "man", hira: ["おとこ"], type: "noun" },
          { kanji: "男の子", en: "boy", hira: ["おとこのこ"], type: "noun" },
          { kanji: "男性", en: "male", hira: ["だんせい"], type: "noun" },
          { kanji: "男女", en: "men and women", hira: ["だんじょ"], type: "noun" },
          { kanji: "男友達", en: "male friend", hira: ["おとこともだち"], type: "noun" }
        ]
      },
      {
        kanji: "竹",
        primaryRadical: { radical: "竹", name: "たけ", meaning: "bamboo" },
        en: "bamboo",
        hira: ["たけ"],
        type: "noun",
        examples: [
          { kanji: "竹", en: "bamboo", hira: ["たけ"], type: "noun" },
          { kanji: "竹林", en: "bamboo grove", hira: ["ちくりん"], type: "noun" },
          { kanji: "竹の子", en: "bamboo shoot", hira: ["たけのこ"], type: "noun" },
          { kanji: "竹道", en: "bamboo path", hira: ["たけみち"], type: "noun" },
          { kanji: "竹細工", en: "bamboo craft", hira: ["たけざいく"], type: "noun" }
        ]
      },
      {
        kanji: "中",
        primaryRadical: { radical: "丨", name: "ぼう", meaning: "stick" },
        en: "middle",
        hira: ["なか","ちゅう"],
        type: "noun",
        examples: [
          { kanji: "中", en: "inside", hira: ["なか"], type: "noun" },
          { kanji: "中国", en: "China", hira: ["ちゅうごく"], type: "noun" },
          { kanji: "途中", en: "on the way", hira: ["とちゅう"], type: "noun" },
          { kanji: "中学校", en: "middle school", hira: ["ちゅうがっこう"], type: "noun" },
          { kanji: "家の中", en: "inside the house", hira: ["いえのなか"], type: "noun" }
        ]
      },
      {
        kanji: "虫",
        primaryRadical: { radical: "虫", name: "むし", meaning: "insect" },
        en: "insect",
        hira: ["むし"],
        type: "noun",
        examples: [
          { kanji: "虫", en: "insect", hira: ["むし"], type: "noun" },
          { kanji: "虫歯", en: "cavity", hira: ["むしば"], type: "noun" },
          { kanji: "昆虫", en: "insect", hira: ["こんちゅう"], type: "noun" },
          { kanji: "毛虫", en: "caterpillar", hira: ["けむし"], type: "noun" },
          { kanji: "虫を取る", en: "to catch insects", hira: ["むしをとる"], type: "verb" }
        ]
      },
      {
        kanji: "町",
        primaryRadical: { radical: "田", name: "た", meaning: "field" },
        en: "town",
        hira: ["まち"],
        type: "noun",
        examples: [
          { kanji: "町", en: "town", hira: ["まち"], type: "noun" },
          { kanji: "町中", en: "downtown", hira: ["まちなか"], type: "noun" },
          { kanji: "下町", en: "old town", hira: ["したまち"], type: "noun" },
          { kanji: "町長", en: "town mayor", hira: ["ちょうちょう"], type: "noun" },
          { kanji: "町に行く", en: "to go to town", hira: ["まちにいく"], type: "verb" }
        ]
      },
      {
        kanji: "天",
        primaryRadical: { radical: "大", name: "だい", meaning: "big" },
        en: "heaven",
        hira: ["てん"],
        type: "noun",
        examples: [
          { kanji: "天気", en: "weather", hira: ["てんき"], type: "noun" },
          { kanji: "天国", en: "heaven", hira: ["てんごく"], type: "noun" },
          { kanji: "天才", en: "genius", hira: ["てんさい"], type: "noun" },
          { kanji: "天井", en: "ceiling", hira: ["てんじょう"], type: "noun" },
          { kanji: "天の川", en: "Milky Way", hira: ["あまのがわ"], type: "noun" }
        ]
      },
      {
        kanji: "田",
        primaryRadical: { radical: "田", name: "た", meaning: "rice field" },
        en: "rice field",
        hira: ["た"],
        type: "noun",
        examples: [
          { kanji: "田", en: "rice field", hira: ["た"], type: "noun" },
          { kanji: "田んぼ", en: "rice field", hira: ["たんぼ"], type: "noun" },
          { kanji: "山田", en: "Yamada (name)", hira: ["やまだ"], type: "noun" },
          { kanji: "水田", en: "paddy field", hira: ["すいでん"], type: "noun" },
          { kanji: "田植え", en: "rice planting", hira: ["たうえ"], type: "noun" }
        ]
      },
      {
        kanji: "土",
        primaryRadical: { radical: "土", name: "つち", meaning: "earth" },
        en: "earth",
        hira: ["つち"],
        type: "noun",
        examples: [
          { kanji: "土", en: "soil", hira: ["つち"], type: "noun" },
          { kanji: "土曜日", en: "Saturday", hira: ["どようび"], type: "noun" },
          { kanji: "土地", en: "land", hira: ["とち"], type: "noun" },
          { kanji: "土足", en: "with shoes on", hira: ["どそく"], type: "noun" },
          { kanji: "土に植える", en: "to plant in soil", hira: ["つちにうえる"], type: "verb" }
        ]
      },
      {
        kanji: "二",
        primaryRadical: { radical: "二", name: "に", meaning: "two" },
        en: "two",
        hira: ["に","ふたつ"],
        type: "noun",
        examples: [
          { kanji: "二つ", en: "two things", hira: ["ふたつ"], type: "noun" },
          { kanji: "二人", en: "two people", hira: ["ふたり"], type: "noun" },
          { kanji: "二日", en: "two days", hira: ["ふつか"], type: "noun" },
          { kanji: "二回", en: "two times", hira: ["にかい"], type: "noun" },
          { kanji: "二月", en: "February", hira: ["にがつ"], type: "noun" }
        ]
      },
      {
        kanji: "日",
        primaryRadical: { radical: "日", name: "ひ", meaning: "sun / day" },
        en: "day",
        hira: ["ひ","にち"],
        type: "noun",
        examples: [
          { kanji: "日", en: "day", hira: ["ひ"], type: "noun" },
          { kanji: "今日", en: "today", hira: ["きょう"], type: "noun" },
          { kanji: "毎日", en: "every day", hira: ["まいにち"], type: "noun" },
          { kanji: "日曜日", en: "Sunday", hira: ["にちようび"], type: "noun" },
          { kanji: "休日", en: "day off", hira: ["きゅうじつ"], type: "noun" }
        ]
      },
      {
        kanji: "入",
        primaryRadical: { radical: "入", name: "いる", meaning: "enter" },
        en: "to enter",
        hira: ["はいる","いれる"],
        type: "verb",
        examples: [
          { kanji: "入る", en: "to enter", hira: ["はいる"], type: "verb" },
          { kanji: "入れる", en: "to put in", hira: ["いれる"], type: "verb" },
          { kanji: "入口", en: "entrance", hira: ["いりぐち"], type: "noun" },
          { kanji: "入学", en: "school entry", hira: ["にゅうがく"], type: "noun" },
          { kanji: "入れる音", en: "sound to insert", hira: ["いれるおと"], type: "noun" }
        ]
      },
      {
        kanji: "年",
        primaryRadical: { radical: "干", name: "かん", meaning: "dry" },
        en: "year",
        hira: ["ねん","とし"],
        type: "noun",
        examples: [
          { kanji: "年", en: "year", hira: ["とし"], type: "noun" },
          { kanji: "今年", en: "this year", hira: ["ことし"], type: "noun" },
          { kanji: "来年", en: "next year", hira: ["らいねん"], type: "noun" },
          { kanji: "毎年", en: "every year", hira: ["まいとし"], type: "noun" },
          { kanji: "年上", en: "older", hira: ["としうえ"], type: "noun" }
        ]
      },
      {
        kanji: "白",
        primaryRadical: { radical: "白", name: "しろ", meaning: "white" },
        en: "white",
        hira: ["しろ"],
        type: "noun",
        examples: [
          { kanji: "白い", en: "white", hira: ["しろい"], type: "i-adjective" },
          { kanji: "白紙", en: "blank paper", hira: ["はくし"], type: "noun" },
          { kanji: "白線", en: "white line", hira: ["はくせん"], type: "noun" },
          { kanji: "真っ白", en: "pure white", hira: ["まっしろ"], type: "na-adjective" },
          { kanji: "白ご飯", en: "white rice", hira: ["しろごはん"], type: "noun" }
        ]
      },
      {
        kanji: "八",
        primaryRadical: { radical: "八", name: "はち", meaning: "eight" },
        en: "eight",
        hira: ["はち","やっつ"],
        type: "noun",
        examples: [
          { kanji: "八つ", en: "eight things", hira: ["やっつ"], type: "noun" },
          { kanji: "八人", en: "eight people", hira: ["はちにん"], type: "noun" },
          { kanji: "八日", en: "eight days", hira: ["ようか"], type: "noun" },
          { kanji: "八回", en: "eight times", hira: ["はちかい"], type: "noun" },
          { kanji: "八月", en: "August", hira: ["はちがつ"], type: "noun" }
        ]
      },
      {
        kanji: "百",
        primaryRadical: { radical: "白", name: "しろ", meaning: "white" },
        en: "hundred",
        hira: ["ひゃく"],
        type: "noun",
        examples: [
          { kanji: "百円", en: "100 yen", hira: ["ひゃくえん"], type: "noun" },
          { kanji: "百人", en: "hundred people", hira: ["ひゃくにん"], type: "noun" },
          { kanji: "百科", en: "encyclopedia", hira: ["ひゃっか"], type: "noun" },
          { kanji: "百回", en: "hundred times", hira: ["ひゃっかい"], type: "noun" },
          { kanji: "数百", en: "hundreds", hira: ["すうひゃく"], type: "noun" }
        ]
      },
      {
        kanji: "文",
        primaryRadical: { radical: "文", name: "ぶん", meaning: "sentence" },
        en: "sentence",
        hira: ["ぶん","もん"],
        type: "noun",
        examples: [
          { kanji: "文", en: "sentence", hira: ["ぶん"], type: "noun" },
          { kanji: "作文", en: "composition", hira: ["さくぶん"], type: "noun" },
          { kanji: "文学", en: "literature", hira: ["ぶんがく"], type: "noun" },
          { kanji: "文化", en: "culture", hira: ["ぶんか"], type: "noun" },
          { kanji: "長文", en: "long sentence", hira: ["ちょうぶん"], type: "noun" }
        ]
      },
      {
        kanji: "木",
        primaryRadical: { radical: "木", name: "き", meaning: "tree" },
        en: "tree",
        hira: ["き"],
        type: "noun",
        examples: [
          { kanji: "木", en: "tree", hira: ["き"], type: "noun" },
          { kanji: "木曜日", en: "Thursday", hira: ["もくようび"], type: "noun" },
          { kanji: "木材", en: "wood material", hira: ["もくざい"], type: "noun" },
          { kanji: "大木", en: "big tree", hira: ["たいぼく"], type: "noun" },
          { kanji: "木の下", en: "under the tree", hira: ["きのした"], type: "noun" }
        ]
      },
      {
        kanji: "本",
        primaryRadical: { radical: "木", name: "き", meaning: "tree" },
        en: "book",
        hira: ["ほん"],
        type: "noun",
        examples: [
          { kanji: "本", en: "book", hira: ["ほん"], type: "noun" },
          { kanji: "日本", en: "Japan", hira: ["にほん"], type: "noun" },
          { kanji: "本屋", en: "bookstore", hira: ["ほんや"], type: "noun" },
          { kanji: "本当", en: "truth", hira: ["ほんとう"], type: "noun" },
          { kanji: "一本", en: "one long object", hira: ["いっぽん"], type: "noun" }
        ]
      },
      {
        kanji: "名",
        primaryRadical: { radical: "口", name: "くち", meaning: "mouth" },
        en: "name",
        hira: ["な","めい"],
        type: "noun",
        examples: [
          { kanji: "名前", en: "name", hira: ["なまえ"], type: "noun" },
          { kanji: "有名", en: "famous", hira: ["ゆうめい"], type: "na-adjective" },
          { kanji: "名字", en: "surname", hira: ["みょうじ"], type: "noun" },
          { kanji: "名所", en: "famous place", hira: ["めいしょ"], type: "noun" },
          { kanji: "名人", en: "expert", hira: ["めいじん"], type: "noun" }
        ]
      },
      {
        kanji: "目",
        primaryRadical: { radical: "目", name: "め", meaning: "eye" },
        en: "eye",
        hira: ["め"],
        type: "noun",
        examples: [
          { kanji: "目", en: "eye", hira: ["め"], type: "noun" },
          { kanji: "目的", en: "purpose", hira: ["もくてき"], type: "noun" },
          { kanji: "目標", en: "goal", hira: ["もくひょう"], type: "noun" },
          { kanji: "一目", en: "a glance", hira: ["ひとめ"], type: "noun" },
          { kanji: "目立つ", en: "to stand out", hira: ["めだつ"], type: "verb" }
        ]
      },
      {
        kanji: "立",
        primaryRadical: { radical: "立", name: "たつ", meaning: "stand" },
        en: "to stand",
        hira: ["たつ"],
        type: "verb",
        examples: [
          { kanji: "立つ", en: "to stand", hira: ["たつ"], type: "verb" },
          { kanji: "立てる", en: "to set up", hira: ["たてる"], type: "verb" },
          { kanji: "国立", en: "national", hira: ["こくりつ"], type: "noun" },
          { kanji: "立場", en: "position", hira: ["たちば"], type: "noun" },
          { kanji: "目立つ", en: "to stand out", hira: ["めだつ"], type: "verb" }
        ]
      },
      {
        kanji: "力",
        primaryRadical: { radical: "力", name: "ちから", meaning: "power" },
        en: "power",
        hira: ["ちから"],
        type: "noun",
        examples: [
          { kanji: "力", en: "power", hira: ["ちから"], type: "noun" },
          { kanji: "体力", en: "physical strength", hira: ["たいりょく"], type: "noun" },
          { kanji: "努力", en: "effort", hira: ["どりょく"], type: "noun" },
          { kanji: "力持ち", en: "strong person", hira: ["ちからもち"], type: "noun" },
          { kanji: "力を入れる", en: "to put effort into", hira: ["ちからをいれる"], type: "verb" }
        ]
      },
      {
        kanji: "林",
        primaryRadical: { radical: "木", name: "き", meaning: "tree" },
        en: "woods",
        hira: ["はやし"],
        type: "noun",
        examples: [
          { kanji: "林", en: "woods", hira: ["はやし"], type: "noun" },
          { kanji: "森林", en: "forest", hira: ["しんりん"], type: "noun" },
          { kanji: "林業", en: "forestry", hira: ["りんぎょう"], type: "noun" },
          { kanji: "竹林", en: "bamboo grove", hira: ["ちくりん"], type: "noun" },
          { kanji: "林道", en: "forest road", hira: ["りんどう"], type: "noun" }
        ]
      },
      {
        kanji: "六",
        primaryRadical: { radical: "八", name: "はち", meaning: "eight" },
        en: "six",
        hira: ["ろく","むっつ"],
        type: "noun",
        examples: [
          { kanji: "六つ", en: "six things", hira: ["むっつ"], type: "noun" },
          { kanji: "六人", en: "six people", hira: ["ろくにん"], type: "noun" },
          { kanji: "六日", en: "six days", hira: ["むいか"], type: "noun" },
          { kanji: "六回", en: "six times", hira: ["ろっかい"], type: "noun" },
          { kanji: "六月", en: "June", hira: ["ろくがつ"], type: "noun" }
        ]
      }
];


// ================= STATE =================
let mode, totalQ, timeLimit;
let currentIndex = 0;
let timerInterval, timeLeft;

let correct = 0;
let wrong = 0;
let wrongList = [];

let currentQuestion = null;

// ================= STORAGE =================
let srs = JSON.parse(localStorage.getItem("srs")) || {};
const DAILY_GOAL = 20;

// ================= HELPERS =================
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildKey(q) {
  return `${q.kanji}|${q.hira}|${q.en}`;
}

function parseKey(key) {
  const [kanji, hira, en] = key.split("|");
  return { kanji, hira, en };
}

// ================= GLOBAL POOLS =================
const globalPools = { hira: [], kanji: [], en: [] };

dataset.forEach(d => {
  globalPools.hira.push(...d.hira);
  globalPools.kanji.push(d.kanji);
  globalPools.en.push(d.en);

  d.examples.forEach(e => {
    globalPools.hira.push(...e.hira);
    globalPools.kanji.push(e.kanji);
    globalPools.en.push(e.en);
  });
});

Object.keys(globalPools).forEach(k => {
  globalPools[k] = [...new Set(globalPools[k])];
});

// ================= CHOICES =================
function buildChoices(correct, pool) {
  let unique = [...new Set(pool)];
  let distractors = unique.filter(x => x !== correct);

  while (distractors.length < 2) {
    distractors.push(random(unique));
  }

  return shuffle([correct, ...shuffle(distractors).slice(0, 2)]);
}

// ================= SRS =================
function updateSRS(q, isCorrect) {
  const key = buildKey(q);

  let item = srs[key] || {
    interval: 1,
    repetition: 0,
    ease: 2.5,
    correct: 0,
    wrong: 0,
    lastReview: 0
  };

  if (isCorrect) {
    item.correct++;
    item.repetition++;
  } else {
    item.wrong++;
    item.repetition = 0;
    item.interval = 1;
  }

  if (item.repetition === 1) item.interval = 1;
  else if (item.repetition === 2) item.interval = 6;
  else item.interval = Math.round(item.interval * item.ease);

  item.next = Date.now() + item.interval * 86400000;
  item.lastReview = Date.now();

  srs[key] = item;
  localStorage.setItem("srs", JSON.stringify(srs));
}

// ================= DUE =================
function getDueItems() {
  const now = Date.now();
  return Object.keys(srs).filter(k => !srs[k].next || srs[k].next <= now);
}

// ================= ANALYTICS =================
function getLearningStats() {
  let learned = 0, learning = 0, weak = 0;

  Object.values(srs).forEach(i => {
    if (i.repetition >= 3) learned++;
    else if (i.repetition > 0) learning++;
    else if (i.wrong > 0) weak++;
  });

  const total = Object.keys(srs).length;

  const totalCorrect = Object.values(srs).reduce((a,i)=>a+i.correct,0);
  const totalAttempts = Object.values(srs).reduce((a,i)=>a+i.correct+i.wrong,0);

  return {
    total,
    learned,
    learning,
    weak,
    newItems: total - (learned + learning + weak),
    accuracy: totalAttempts ? Math.round((totalCorrect/totalAttempts)*100) : 0
  };
}

function getMastery() {
  const s = getLearningStats();
  return s.total ? Math.round((s.learned/s.total)*100) : 0;
}

function getTodayProgress() {
  const today = new Date().toDateString();
  return Object.values(srs).filter(i =>
    new Date(i.lastReview).toDateString() === today
  ).length;
}

// ================= STREAK =================
function updateStreak() {
  let streak = JSON.parse(localStorage.getItem("streak")) || { last:null, count:0 };

  const today = new Date().toDateString();
  const yesterday = new Date(Date.now()-86400000).toDateString();

  if (streak.last === today) return;

  if (streak.last === yesterday) streak.count++;
  else streak.count = 1;

  streak.last = today;
  localStorage.setItem("streak", JSON.stringify(streak));
}

// ================= NAV =================
function goHome() { location.reload(); }
function goBack() { goHome(); }

// ================= START =================
function startQuiz() {
  mode = +document.getElementById("mode").value;
  totalQ = +document.getElementById("qCount").value;
  timeLimit = +document.getElementById("timeLimit").value * 60;

  currentIndex = 0;
  correct = 0;
  wrong = 0;
  wrongList = [];

  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  timeLeft = timeLimit;
  updateStreak();
  startTimer();
  nextQuestion();
}

// ================= TIMER =================
function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `⏱ ${timeLeft}s`;
    if (timeLeft <= 0) finishQuiz();
  }, 1000);
}

// ================= QUESTION =================
function nextQuestion() {
  if (currentIndex >= totalQ) return finishQuiz();

  document.getElementById("progress").innerText =
    `Q ${currentIndex+1}/${totalQ}`;

  let q;
  const due = getDueItems();

  if (due.length) q = parseKey(random(due));
  else {
    const d = random(dataset);
    const v = random(d.examples);
    q = { kanji:v.kanji, hira:v.hira[0], en:v.en };
  }

  currentQuestion = q;

  let correctAnswer, choices;

  if (mode === 1) {
    document.getElementById("question").innerText = q.kanji;
    correctAnswer = q.en;
    choices = buildChoices(correctAnswer, globalPools.en);
  }

  if (mode === 2) {
    document.getElementById("question").innerText = q.kanji;
    correctAnswer = q.hira;
    choices = buildChoices(correctAnswer, globalPools.hira);
  }

  if (mode === 3) {
    document.getElementById("question").innerText = q.hira;
    correctAnswer = q.kanji;
    choices = buildChoices(correctAnswer, globalPools.kanji);
  }

  if (mode === 4) {
    document.getElementById("question").innerText = q.kanji;
    correctAnswer = q.hira;
    choices = buildChoices(correctAnswer, globalPools.hira);
  }

  renderAnswers(choices, correctAnswer);
}

// ================= ANSWERS =================
function renderAnswers(choices, correctAnswer) {
  const div = document.getElementById("answers");
  div.innerHTML = "";
  let answered = false;

  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.innerText = c;

    btn.onclick = () => {
      if (answered) return;
      answered = true;

      const isCorrect = c === correctAnswer;

      btn.classList.add(isCorrect ? "correct" : "wrong");

      if (!isCorrect) wrongList.push(currentQuestion);

      isCorrect ? correct++ : wrong++;

      updateSRS(currentQuestion, isCorrect);
      showExplanation(correctAnswer);

      currentIndex++;
      setTimeout(nextQuestion, 900);
    };

    div.appendChild(btn);
  });
}

// ================= EXPLANATION =================
function showExplanation(ans) {
  document.getElementById("explanation").innerText =
    `✔ ${ans} | ${currentQuestion.en}`;
}

// ================= FINISH =================
function finishQuiz() {
  clearInterval(timerInterval);

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  drawChart();
}

// ================= CHART =================
function drawChart() {
  const canvas = document.getElementById("chart");
  const ctx = canvas.getContext("2d");

  const total = correct + wrong || 1;
  const angle = (correct / total) * Math.PI * 2;

  ctx.clearRect(0,0,300,300);

  ctx.beginPath();
  ctx.moveTo(150,150);
  ctx.arc(150,150,100,0,angle);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(150,150);
  ctx.arc(150,150,100,angle,Math.PI*2);
  ctx.fill();
}

// ================= WRONG REVIEW =================
function showWrong() {
  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("wrongScreen").classList.remove("hidden");

  const div = document.getElementById("wrongList");
  div.innerHTML = "";

  wrongList.forEach(w => {
    const el = document.createElement("div");

    el.innerHTML = `
      <div style="padding:10px;margin:10px;background:#f9fafb;border-radius:8px;">
        <div style="font-size:22px">${w.kanji}</div>
        <div>${w.hira}</div>
        <div style="color:#666">${w.en}</div>
      </div>
    `;

    div.appendChild(el);
  });
}

// ================= DASHBOARD =================
function renderDashboard() {
  const s = getLearningStats();
  const due = getDueItems().length;
  const mastery = getMastery();
  const today = getTodayProgress();

  const streak = JSON.parse(localStorage.getItem("streak")) || { count:0 };

  const div = document.createElement("div");

  div.innerHTML = `
    <h3>📊 Progress</h3>
    <p>Mastery: ${mastery}% | Accuracy: ${s.accuracy}%</p>

    <h3>📚 Items</h3>
    <p>Total: ${s.total} | Learned: ${s.learned}</p>
    <p>Learning: ${s.learning} | Weak: ${s.weak}</p>

    <h3>⏰ Due</h3>
    <p>${due} items</p>

    <h3>🎯 Daily</h3>
    <p>${today}/${DAILY_GOAL}</p>

    <h3>🔥 Streak</h3>
    <p>${streak.count} days</p>
  `;

  document.getElementById("home").appendChild(div);
}

// INIT
renderDashboard();


