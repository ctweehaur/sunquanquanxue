const poemData = [
    { text: "初", py: "chū", zh: "副词，当初，起初，引出故事的开头。", en: "At first," },
    { text: "，", punc: true },
    // 🎯【死绑定】：动宾结构，告诉吕蒙
    { text: "权谓吕蒙", py: "quán wèi lǚ méng", zh: "孙权对吕蒙说。谓：对……说。", en: "Sun Quan said to Lyu Meng," },
    { text: "曰", py: "yuē", zh: "说。", en: "said," },
    { text: "：", punc: true },
    { text: "“", punc: true },
    { text: "卿", py: "qīng", zh: "代词，古代君对臣或朋友之间的爱称，相当于“你”。", en: "You" },
    { text: "今", py: "jīn", zh: "现在。", en: "now" },
    // 🎯【死绑定】：当权掌管事务
    { text: "当涂掌事", py: "dāng tú zhǎng shì", zh: "成语/词组，当权掌管政事。当涂：当权，掌管权力。", en: "are in power and handling important affairs,", exam: true },
    { text: "，", punc: true },
    // 🎯【死绑定】：双重否定，不能不学习
    { text: "不可不学", py: "bù kě bù xué", zh: "固定句式，不能不学习（强调学习的必要性）。", en: "cannot live without learning!", exam: true },
    { text: "！", punc: true },
    { text: "”", punc: true },
    // 🎯【死绑定】：用军务繁忙来推托
    { text: "蒙辞以军中多务", py: "méng cí yǐ jūn zhōng duō wù", zh: "吕蒙用军中事务繁多来推托。辞：推托；以：用、拿。", en: "Lyu Meng excused himself by using the many military duties.", exam: true },
    { text: "。", punc: true },
    { text: "权", py: "quán", zh: "孙权。", en: "Sun Quan" },
    { text: "曰", py: "yuē", zh: "说。", en: "said," },
    { text: "：", punc: true },
    { text: "“", punc: true },
    { text: "孤", py: "gū", zh: "代词，古代王侯的自称，相当于“我”。", en: "I" },
    // 🎯【死绑定】：难道想要你……
    { text: "岂欲", py: "qǐ yù", zh: "副词短语，难道想要。岂：难道；欲：想要。", en: "how could I want" },
    { text: "卿", py: "qīng", zh: "你。", en: "you to" },
    // 🎯【死绑定】：研究经典成为博士
    { text: "治经为博士", py: "zhì jīng wéi bó shì", zh: "词组，研究儒家经典而成为学官。博士：古代掌管经学传授的学官。", en: "study classic books to become an academic scholar", exam: true },
    { text: "邪", py: "yé", zh: "文言句末疑问语气词，通“耶”，相当于“吗”或“呢”。", en: "?", exam: true },
    { text: "！", punc: true },
    // 🎯【死绑定】：只应当粗略地阅读
    { text: "但当涉猎", py: "dàn dāng shè liè", zh: "词组，只应当粗略地阅读。但：只，仅仅；涉猎：粗略地阅读。", en: "You should only read widely", exam: true },
    { text: "，", punc: true },
    // 🎯【死绑定】：了解历史往事罢了
    { text: "见往事耳", py: "jiàn wǎng shì ěr", zh: "词组，了解历史往事罢了。见：了解；耳：语气词，罢了。", en: "to know historical events only.", exam: true },
    { text: "。", punc: true },
    { text: "卿", py: "qīng", zh: "你。", en: "You" },
    { text: "言", py: "yán", zh: "动词，说。", en: "say you have" },
    { text: "多务", py: "duō wù", zh: "事务繁多。", en: "many duties," },
    { text: "，", punc: true },
    // 🎯【死绑定】：哪一个比得上我
    { text: "孰若孤", py: "shú ruò gū", zh: "固定句式，哪一个比得上我？孰：谁，哪一个；若：比得上。", en: "but who can compare to me?", exam: true },
    { text: "？", punc: true },
    { text: "孤", py: "gū", zh: "我（孙权自称）。", en: "I" },
    { text: "常", py: "cháng", zh: "副词，经常，常常。", en: "always" },
    { text: "读书", py: "dú shū", zh: "动宾短语，阅读书籍。", en: "read books," },
    { text: "，", punc: true },
    // 🎯【死绑定】：自己认为大有益处
    { text: "自以为", py: "zì yǐ wéi", zh: "固定词组，自己认为。", en: "and I think myself" },
    { text: "大有所益", py: "dà yǒu suǒ yì", zh: "词组，大有益处、有很大的收获。", en: "have gained a lot from it." },
    { text: "。", punc: true },
    { text: "”", punc: true },
    { text: "蒙", py: "méng", zh: "吕蒙。", en: "Lyu Meng" },
    // 🎯【死绑定】：于是开始就学
    { text: "乃始就学", py: "nǎi shǐ jiù xué", zh: "短语，于是开始从事学习。乃：于是，就；就学：从事学习。", en: "therefore began his studies." },
    { text: "。", punc: true },
    // 🎯【死绑定】：等到鲁肃经过寻阳
    { text: "及鲁肃过寻阳", py: "jí lǔ sù guò xún yáng", zh: "等到鲁肃经过寻阳的时候。及：等到；过：经过。", en: "When Lu Su passed by Xunyang,", exam: true },
    { text: "，", punc: true },
    // 🎯【死绑定】：与吕蒙谈论议事
    { text: "与蒙论议", py: "yǔ méng lùn yì", zh: "动宾短语，跟吕蒙谈论政事、议论军事。", en: "he discussed affairs with Lyu Meng," },
    { text: "，", punc: true },
    { text: "大惊", py: "dà jīng", zh: "副词修饰动词，非常吃惊，大为惊奇。", en: "was very shocked and" },
    { text: "曰", py: "yuē", zh: "说。", en: "said," },
    { text: "：", punc: true },
    { text: "“", punc: true },
    { text: "卿", py: "qīng", zh: "你。", en: "Your" },
    // 🎯【死绑定】：现在的才干和谋略
    { text: "今者才略", py: "jīn zhě cái lüè", zh: "名词短语，现在的才干和政治军事谋略。今者：现在。", en: "current talent and wisdom", exam: true },
    { text: "空间", punc: true }, // 防止特定标点冲突的物理间隔
    { text: "，", punc: true },
    // 🎯【死绑定】：不再是当年的吴下阿蒙了
    { text: "非复吴下阿蒙", py: "fēi fù wú xià ā méng", zh: "固定成语短语，不再是当年吴下那个没有学识的阿蒙了。非复：不再是。", en: "are no longer the unlearned Ameng of old Wu!", exam: true },
    { text: "！", punc: true },
    { text: "”", punc: true },
    { text: "蒙", py: "méng", zh: "吕蒙。", en: "Lyu Meng" },
    { text: "曰", py: "yuē", zh: "说。", en: "said," },
    { text: "：", punc: true },
    { text: "“", punc: true },
    // 🎯【死绑定】：有志气的文人或战士离别三天
    { text: "士别三日", py: "shì bié sān rì", zh: "成语/词组，有抱负的男子汉或读书人离别三天。士：有抱负或有学识的人。", en: "When a man of purpose leaves for three days," },
    { text: "，", punc: true },
    // 🎯【死绑定】：就要重新擦亮眼睛来看待
    { text: "即更刮目相待", py: "jí gèng guǎ mù xiāng dài", zh: "固定成语短语，就要重新擦亮眼睛来看待。即：就；更：重新；刮目：擦亮眼睛。", en: "you should look at him with fresh eyes,", exam: true },
    { text: "，", punc: true },
    // 🎯【死绑定】：长兄怎么认清事物这么晚呢
    { text: "大兄何见事之晚乎", py: "dà xiōng hé jiàn shì zhī wǎn hū", zh: "倒装句式，长兄怎么认清事物这么晚呢！何：怎么，为何；见事：认清事物；乎：句末语气词，表感叹。", en: "my big brother, why did you realize this so late!", exam: true },
    { text: "！", punc: true },
    { text: "”", punc: true },
    // 🎯【死绑定】：鲁肃于是拜见吕蒙的母亲
    { text: "肃遂拜蒙母", py: "sù suì bài méng mǔ", zh: "鲁肃于是拜见吕蒙的母亲（表达极高的敬意）。遂：于是，就。", en: "Lu Su then paid respects to Lyu Meng's mother," },
    { text: "，", punc: true },
    // 🎯【死绑定】：结为好朋友后告别离开
    { text: "结友而别", py: "jié yǒu ér bié", zh: "连带词组，与吕蒙结为好友，然后告别离开。", en: "made friends with him, and left." },
    { text: "。", punc: true }
];
