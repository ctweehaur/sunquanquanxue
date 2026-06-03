const quizQuestions = [
    {
        id: 1,
        textStructure: [{w: "下列", p: "xià liè"}, {w: "句子", p: "jù zi"}, "中，", {w: "固定句式", p: "gù dìng jù shì"}, "“", {w: "不可不学", p: "bù kě bù xué"}, "”", {w: "表达了", p: "biǎo dá le"}, {w: "怎样的", p: "zěnyàng de"}, {w: "语气", p: "yǔ qì"}, "？"],
        en: "What tone does the grammar pattern '不可不学' express?",
        options: [
            { textStructure: [{w: "犹豫不决的", p: "yóu yù bù jué de"}, {w: "商量语气", p: "shāng liang yǔ qì"}], en: "A hesitating, discussing tone.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，“", {w: "不可不", p: "bù kě bù"}, "”", {w: "是双重否定", p: "shì shuāng chóng fǒu dìng"}, "，", {w: "语气非常坚定", p: "yǔ qì fēi cháng jiān dìng"}, "。"], explanationEn: "Incorrect. '不可不' is a double negative, which makes the statement firm, not hesitating." },
            { textStructure: [{w: "严厉责备的", p: "yán lì zé bèi de"}, {w: "命令语气", p: "mìng lìng yǔ qì"}], en: "A strict, punishing command.", correct: false, explanationStructure: [{w: "不对", p: "bú duì"}, "，", {w: "孙权是以", p: "sūn quán ... ǐ"}, {w: "长官和长辈身份", p: "zhǎng guān hé zhǎng bèi shēn fèn"}, {w: "关怀劝导", p: "guān huái quàn dǎo"}, "，", {w: "不是骂人", p: "bú ... i mà rén"}, "。"], explanationEn: "Incorrect. Sun Quan was advising him out of care as a leader, not scolding him with anger." },
            { textStructure: [{w: "坚决肯定且", p: "jiān jué kěn dìng qiě"}, {w: "语重心长的", p: "yǔ zhòng xīn cháng de"}, {w: "劝勉语气", p: "quàn miǎn yǔ qì"}], en: "A strong, firm, and encouraging tone of advice.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，“", {w: "不可不", p: "bù kě bù"}, "”", {w: "即“一定要”", p: "jí yí dìng yào"}, "，", {w: "体现了对吕蒙的", p: "tǐ xiàn le duì lǚ méng de"}, {w: "殷切期望", p: "yīn qiè qī wàng"}, "。"], explanationEn: "Correct. Double negatives equal a strong positive choice ('must study'), showing his high expectations for his general." },
            { textStructure: [{w: "开玩笑的", p: "kāi wán xiào de"}, {w: "幽默语气", p: "yōu mò yǔ qì"}], en: "A joking or funny tone.", correct: false, explanationStructure: [{w: "离题", p: "lí tí"}, "，", {w: "学习是一件", p: "xué xí ... yí jiàn"}, {w: "严肃的国家要务", p: "yán sù de guó jiā yào wù"}, "。"], explanationEn: "Incorrect. Upgrading the general's strategy was a serious matter of national success, not a joke." }
        ]
    },
    {
        id: 2,
        textStructure: [{w: "吕蒙最初", p: "lǚ méng zuì chū"}, {w: "不想读书的", p: "bù xiǎng dú shū de"}, {w: "借口和理由", p: "jiè kǒu hé lǐ yóu"}, {w: "是", p: "shì"}, "？"],
        en: "What excuse did Lyu Meng use at first to avoid reading?",
        options: [
            { textStructure: [{w: "自己年纪太大", p: "zì jǐ nián jì tài dà"}, "，", {w: "记忆力不好", p: "jì yì lì bù hǎo"}], en: "He was too old to memorize text.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "吕蒙并没有", p: "lǚ méng bìng méi yǒu"}, {w: "抱怨过年龄", p: "bào yuàn guò nián líng"}, "。"], explanationEn: "Incorrect. Lyu Meng never complained about his age or memory power in the story." },
            { textStructure: [{w: "家里太穷", p: "jiā lǐ tài qióng"}, "，", {w: "买不起珍贵书籍", p: "mǎi bù qǐ zhēn guì shū jí"}], en: "His family was too poor to buy expensive books.", correct: false, explanationStructure: [{w: "瞎猜的", p: "xiā cāi de"}, "，", {w: "他当时已经是", p: "tā dāng shí yǐ jīng shì"}, {w: "高官将军", p: "gāo guān jiāng jūn"}, "。"], explanationEn: "Incorrect. He was already a high-ranking military leader, so money was not an issue." },
            { textStructure: [{w: "军营里事务繁多", p: "jūn yíng lǐ ... ù fán duō"}, "，", {w: "抽不出时间", p: "chōu bù chū shí jiān"}], en: "The military affairs were too busy to spare any time.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，“", {w: "蒙辞以军中多务", p: "méi cí yǐ jūn zhōng duō wù"}, "”", {w: "说明把工作忙", p: "shuō míng bǎ gōng zuò máng"}, {w: "当成不读书的挡箭牌", p: "dāng chéng bù dú shū de dǎng jiàn pái"}, "。"], explanationEn: "Correct. He said '军中多务', claiming that his work duties in the army occupied all his time." },
            { textStructure: [{w: "他更喜欢", p: "tā gèng xǐ huan"}, {w: "上战场打仗", p: "shàng zhàn chǎng dǎ zhàng"}, "，", {w: "讨厌文字", p: "tǎo yàn wén zì"}], en: "He preferred fighting battles over dealing with words.", correct: false, explanationStructure: [{w: "不完全对", p: "bù wán quán duì"}, "，", {w: "虽然他是武将", p: "suī rán tā ... è wǔ jiàng"}, "，", {w: "但原文给的理由", p: "dàn yuán wén gěi de lǐ yóu"}, {w: "只有事务忙", p: "zhǐ ... sù máng"}, "。"], explanationEn: "Incorrect. While he was a warrior, the only reason he stated explicitly was being too busy." }
        ]
    },
    {
        id: 3,
        textStructure: [{w: "句子", p: "jù zi"}, "“", {w: "但当涉猎", p: "dàn dāng shè liè"}, "”", {w: "中的", p: "zhōng de"}, "“", {w: "但", p: "dàn"}, "”", {w: "字正确的", p: "zì zhèng què de"}, {w: "解释是", p: "jiě shì shì"}, "？"],
        en: "What is the correct meaning of the character 'dàn' in this sentence?",
        options: [
            { textStructure: [{w: "连词", p: "lián cí"}, "，“", {w: "但是", p: "dàn shì"}, "”"], en: "A conjunction, meaning 'but' or 'however'.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这是现代汉语的", p: "zhè ... xiàn dài hàn yǔ de"}, {w: "最常用法", p: "zuì cháng yòng fǎ"}, "，", {w: "不是文言古义", p: "bú shì wén yán gǔ yì"}, "。"], explanationEn: "Incorrect. This is the modern meaning, but it does not fit the classical grammar here." },
            // 🎯【完美补正】：把刚才漏掉的大括号间英文逗号稳稳补上
            { textStructure: [{w: "副词", p: "fù cí"}, "，“", {w: "只", p: "zhǐ"}, "”"], en: "An adverb, meaning 'only' or 'just'.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，“", {w: "但当涉猎", p: "dàn dāng shè liè"}, "”", {w: "意思是", p: "yì si ..."}, "“", {w: "只是应当粗略阅读", p: "zhǐ shì yīng dāng cū lüè ..."}, "”", "。"], explanationEn: "Correct. In this context, 'dàn' acts as an adverb meaning 'only'—reassuring Lyu Meng that he doesn't need to overstudy." },
            { textStructure: [{w: "形容词", p: "xíng róng cí"}, "，“", {w: "平淡的", p: "píng dàn de"}, "”"], en: "An adjective, meaning plain or tasteless.", correct: false, explanationStructure: [{w: "词性不符", p: "cí xìng bù fú"}, "。"], explanationEn: "Incorrect. This adjective choice completely breaks down the grammar." },
            { textStructure: [{w: "名词", p: "míng cí"}, "，“", {w: "炸弹", p: "zhà dàn"}, "”"], en: "A noun, meaning a bomb.", correct: false, explanationStructure: [{w: "字音混淆", p: "zì yīn hùn xiáo"}, "，", {w: "极度荒谬", p: "jí dù huāng miù"}, "。"], explanationEn: "Incorrect. This mistakes it for a modern noun weapon based on sound; it is absurd." }
        ]
    },
    {
        id: 4,
        textStructure: [{w: "成语", p: "chéng yǔ"}, "“", {w: "吴下阿蒙", p: "wú xià ā méng"}, "”", {w: "在现代生活中", p: "zài xiàn dài shēng huó zhōng"}, "，", {w: "主要用来比喻", p: "zhǔ yào yòng lái bǐ yù"}, "？"],
        en: "What does the idiom 'Wuxia Ameng' describe in modern contexts?",
        options: [
            { textStructure: [{w: "常年居住在", p: "cháng nián jū zhù zài"}, {w: "吴国江东地区的", p: "wú guó jiāng dōng dì qū de"}, {w: "老百姓", p: "lǎo bǎi xìng"}], en: "Ordinary citizens who live in the region of Wu.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "它已经演变为", p: "tā ... jīng yǎn biàn wéi"}, {w: "特定的形容成语", p: "tè dìng de xíng róng chéng yǔ"}, "。"], explanationEn: "Incorrect. The phrase has evolved into a stable metaphor and is no longer an address for locals." },
            { textStructure: [{w: "武功高强", p: "wǔ gōng gāo qiáng"}, {w: "但性格粗鲁的", p: "dàn xìng gé cū lǔ de"}, {w: "大将军", p: "dà jiāng jūn"}], en: "A powerful but rude general in war.", correct: false, explanationStructure: [{w: "不准确", p: "bú zhǔn què"}, "，", {w: "重点在于", p: "zhòng diǎn zài yú"}, {w: "学识有无", p: "xué shí ... ú"}, "，", {w: "不在于武力", p: "bú zài yú wǔ lì"}, "。"], explanationEn: "Incorrect. The idiom focuses on someone's knowledge level, not their physical power or raw violence." },
            { textStructure: [{w: "学识浅薄", p: "xué shí qiǎn báo"}, "、", {w: "没有眼界和进步的", p: "méi yǒu yǎn jiè hé jìn bù de"}, {w: "粗人", p: "cū rén"}], en: "A person who lacks knowledge, vision, or academic progress.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "用来形容", p: "yòng lái ... róng"}, {w: "一个人没有学识", p: "yí gè ... i yǒu xué shí"}, "，", {w: "或者某人", p: "huò zhě mǒu ..."}, {w: "长久没有进步", p: "cháng jiǔ méi ... ìn bù"}, "。"], explanationEn: "Correct. It is a common metaphor describing someone who lacks knowledge, education, or remains stagnant over time." },
            { textStructure: [{w: "非常擅长", p: "fēi cháng shàn cháng"}, {w: "带兵打仗的", p: "dài bīng dǎ zhàng de"}, {w: "军事天才", p: "jūn ... iān cái"}], en: "A brilliant military leader who is expert at war strategy.", correct: false, explanationStructure: [{w: "完全颠倒", p: "wán quán diān dǎo"}, "，", {w: "这是吕蒙", p: "zhè ... lǚ méng"}, {w: "读书前的黑历史", p: "dú shū qián de hēi lì shǐ"}, "。"], explanationEn: "Incorrect. This completely reverses the meaning; the phrase mocks his past uneducated state." }
        ]
    },
    {
        id: 5,
        textStructure: [{w: "鲁肃最后", p: "lǔ sù zuì hòu"}, "“", {w: "遂拜蒙母，结友而别", p: "suì bài méng mǔ jié yǒu ér bié"}, "”", {w: "的举动", p: "de jǔ dòng"}, "，", {w: "侧面烘托了", p: "cè miàn hōng tuō le"}, "？"],
        en: "What did Lu Su's final respectful actions emphasize from a side perspective?",
        options: [
            { textStructure: [{w: "烘托了鲁肃", p: "hōng tuō le lǔ sù"}, {w: "非常喜欢拜访", p: "fēi cháng xǐ huan bài fǎng"}, {w: "别人的长辈", p: "bié rén de zhǎng bèi"}], en: "Lu Su loved visiting elderly parents.", correct: false, explanationStructure: [{w: "好笑", p: "hǎo xiào"}, "，", {w: "这是出于敬意", p: "zhè ... chū yú jìng yì"}, "，", {w: "不是私人爱好", p: "bú ... sī rén ài hào"}, "。"], explanationEn: "Incorrect. This action was done purely out of deep professional respect, not a casual hobby." },
            { textStructure: [{w: "烘托了吕蒙", p: "hōng tuō le lǚ méng"}, {w: "通过读书", p: "tōng guò ... hū"}, {w: "才略大进", p: "cái lüè dà jìn"}, "，", {w: "赢得了有识之士的", p: "yíng dé le yǒu shí ... de"}, {w: "由衷敬重", p: "yóu zhōng jìng zhòng"}], en: "Lyu Meng's huge progress won him genuine respect from scholars.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "鲁肃极其高傲", p: "lǔ sù jí qí gāo ào"}, "，", {w: "能让他向普通武将的母亲", p: "néng ràng tā ... qǐng pǔ tōng wǔ jiàng de mǔ qīn"}, {w: "下拜结交", p: "xià bài jié jiāo"}, "，", {w: "说明吕蒙的才干彻底折服了他", p: "shuō míng lǚ méng de ... h r chè dǐ zhé fú le tā"}, "。"], explanationEn: "Correct. Lu Su was a proud scholar. The fact that he bowed to Lyu's mother shows that Lyu Meng's mental upgrade thoroughly amazed and humbled him." },
            { textStructure: [{w: "烘托了吴国军队", p: "hōng tuō le wú guó jūn duì"}, {w: "极度缺乏", p: "jí dù quē fá"}, {w: "优秀的年轻将领", p: "yōu xiù de nián qīng jiāng lǐng"}], en: "The army of Wu was running short of quality generals.", correct: false, explanationStructure: [{w: "胡说", p: "hú shuō"}, "，", {w: "方向完全想偏了", p: "fāng xiàng wán quán xiǎng piān le"}, "。"], explanationEn: "Incorrect. This deduction goes completely off track from the theme of the text." },
            { textStructure: [{w: "烘托了当时", p: "hōng tuō le dāng shí"}, {w: "鲁肃的工作很闲", p: "lǔ sù de gōng zuò hěn xián"}, "，", {w: "不急着回家", p: "bù jí zhe huí jiā"}], en: "Lu Su had a lot of free time and was not in a hurry to go home.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "他们都是", p: "tā men dōu ..."}, {w: "日理万机的", p: "rì lǐ wàn jī de"}, {w: "军国重臣", p: "jūn guó zhòng chén"}, "。"], explanationEn: "Incorrect. They were both top-tier leaders handling wartime operations, certainly not lazy or idle." }
        ]
    }
];
