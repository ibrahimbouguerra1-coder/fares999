import type { Lesson } from '../../types/learning.ts';

export const A2_LESSONS: Lesson[] = [
  {
    id: 'lesson-a2-1-past-simple-irregular-verbs',
    level: 'A2',
    order: 0,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: حكايات الماضي والتجارب',
    chapterTitleEn: 'Unit 1: Past Narratives and Experiences',
    titleAr: 'الدرس 1: الماضي البسيط والأفعال الشاذة الشائعة',
    titleEn: 'Lesson 1: Past Simple and Irregular Verbs',
    category: 'قواعد وأزمنة (A2)',
    iconName: 'Clock',
    estimatedMinutes: 15,
    objectivesAr: [
      'التعبير عن أحداث مكتملة تماماً في الماضي مع تحديد وقت الحدوث (yesterday, last year, in 2020).',
      'إتقان أشهر 25 فعلاً شاذاً (went, saw, took, made, had, bought...).',
      'صياغة النفي والسؤال باستخدام did / didn\'t مع إعادة الفعل للمصدر.',
    ],
    explanationMarkdownAr: `### الماضي البسيط: سرد ما حدث وانتهى

نستخدم الماضي البسيط (Past Simple) لحدث بدأ وانتهى في وقت محدد بالماضي:

#### 1. الأفعال المنتظمة (Regular Verbs):
نضيف فقط **ed**:
- *work -> worked*
- *call -> called*
- *arrive -> arrived*

#### 2. الأفعال الشاذة (Irregular Verbs):
تتغير الكلمة تماماً ويجب حفظها بالممارسة:
- *go -> **went*** (*I went to the market yesterday.*)
- *see -> **saw*** (*We saw a brilliant presentation.*)
- *buy -> **bought*** (*He bought a new laptop.*)
- *have -> **had*** (*They had a pleasant dinner.*)

#### النفي والسؤال بـ DID:
بمجرد دخول **did** أو **didn't**، يعود الفعل لحالته الأولى (المصدر):
- ✅ *I **didn't go** to the party.* (وليس *didn't went*)
- ✅ ***Did you see** the manager?* (وليس *Did you saw*)`,
    rulesAndStructuresAr: 'الماضي البسيط: التصريف الثاني للفعل في الإثبات؛ بينما didn\'t و did في النفي والسؤال تعيدان الفعل إلى مصدره المجرد.',
    summaryAr: 'كل حدث مكتمل في زمن مضى يعبر عنه بالماضي البسيط، وانتبه لعودة الفعل لمصدره بعد didn\'t.',
    arabicContrastPoint: {
      titleAr: 'تكرار صيغة الماضي بعد didn\'t',
      descriptionAr: 'يقع المتعلم في خطأ "I didn\'t went" أو "Did you saw"، حيث يجمع بين علامتي ماضي في نفس الجملة.',
      badArabicHabit: 'I didn\'t went to the meeting.',
      correctEnglishWay: 'I didn\'t go to the meeting.',
    },
    examples: [
      { en: 'We visited our grandparents last Friday.', ar: 'زرنا أجدادنا يوم الجمعة الماضي.', phoneticAr: 'وِي ڤِيزِتِد آوِر جْرَانْدبَيْرَنْتس لَاسْت فْرَايْدَاي' },
      { en: 'She wrote a comprehensive report yesterday.', ar: 'هي كتبت تقريراً شاملاً بالأمس.', phoneticAr: 'شِي رُوت أَه كُومْبْرِيهِنْسِيڤ رِيبُورْت يَسْتِرْدَاي' },
      { en: 'Did you finish your project on time?', ar: 'هل أنهيت مشروعك في الوقت المحدد؟', phoneticAr: 'دِد يُو فِنِش يُور بْرُوجِكْت أُون تَايْم' },
    ],
    vocabulary: [
      { word: 'Yesterday', ipa: '/ˈjes.tɚ.deɪ/', partOfSpeech: 'adverb', meaningAr: 'بالأمس / البارحة', exampleEn: 'I arrived yesterday evening.', exampleAr: 'وصلت مساء البارحة.' },
      { word: 'Decide', ipa: '/dɪˈsaɪd/', partOfSpeech: 'verb', meaningAr: 'يقرر (ماضيه decided)', exampleEn: 'We decided to expand our team.', exampleAr: 'قررنا توسيع فريق عملنا.' },
      { word: 'Experience', ipa: '/ɪkˈspɪr.i.əns/', partOfSpeech: 'noun', meaningAr: 'تجربة / خبرة', exampleEn: 'It was a valuable experience.', exampleAr: 'لقد كانت تجربة قيّمة للغاية.' },
    ],
    commonMistakes: [
      { wrong: 'I didn\'t knew the answer.', correct: 'I didn\'t know the answer.', reasonAr: 'بعد didn\'t يجب أن يعود الفعل لأصله know وليس knew.' },
      { wrong: 'He comed late.', correct: 'He came late.', reasonAr: 'الفعل come فعل شاذ ماضيه came وليس comed.' },
    ],
    realWorldChallengeAr: 'اكتب 3 أشياء أنجزتها الأسبوع الماضي مستخدماً أفعالاً شاذة بصيغة الماضي.',
    exercises: [
      {
        id: 'a2-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة لنفي الفعل في الماضي:',
        instructionEn: 'Choose the correct negative past form:',
        question: 'They ______ to the conference last week.',
        options: ["didn't go", "didn't went", "not went", "didn't gone"],
        correctAnswer: 0,
        explanationAr: 'النفي في الماضي بـ didn\'t يتبعه الفعل في المصدر go.',
      },
      {
        id: 'a2-1-ex-2',
        type: 'fill_blank',
        instructionAr: 'اكتب التصريف الثاني (الماضي) للفعل buy:',
        instructionEn: 'Write the past tense of "buy":',
        question: 'Last month, she ______ (اشترت) a comfortable car.',
        correctAnswer: ['bought', 'Bought'],
        explanationAr: 'الماضي من buy هو bought.',
      },
      {
        id: 'a2-1-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب السؤال لمعرفة هل استلم الرسالة بالأمس:',
        instructionEn: 'Unscramble the question:',
        question: 'receive / the / did / email / you',
        correctAnswer: 'Did you receive the email',
        explanationAr: 'ترتيب السؤال: Did + you + receive + the email?',
      },
    ],
  },
  {
    id: 'lesson-a2-2-past-continuous-when-while',
    level: 'A2',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: حكايات الماضي والتجارب',
    chapterTitleEn: 'Unit 1: Past Narratives and Experiences',
    titleAr: 'الدرس 2: الماضي المستمر ورواية القصص بـ When و While',
    titleEn: 'Lesson 2: Past Continuous with When and While',
    category: 'قواعد ورواية قصص (A2)',
    iconName: 'Sparkles',
    estimatedMinutes: 16,
    objectivesAr: [
      'التعبير عن حدث كان مستمراً في نقطة محددة في الماضي (was/were + verb-ing).',
      'الربط بين حدث طويل مستمر قاطعه حدث مفاجئ قصير باستخدام when و while.',
      'سرد الأحداث اليومية والمواقف السابقة بسلاسة وتشويق.',
    ],
    explanationMarkdownAr: `### الماضي المستمر: خلفية القصة والأحداث المتقاطعة

تكوين الماضي المستمر:
**Subject + (was / were) + Verb-ing**
- *I / He / She / It* -> **was** working
- *We / You / They* -> **were** waiting

#### القاعدة الذهبية للربط بـ While و When:
تخيل أنك ترسم لوحة: هناك حدث خلفي مستمر طويل (Continuous)، فجأة قطعه حدث سريع قصير (Simple):

1. **While** (بينما) يأتي بعدها الحدث المستمر الطويل:
   - *While I **was driving** home, my phone **rang**.*
   - (بينما كنت أقود السيارة، رن هاتفي فجأة).

2. **When** (عندما) يأتي بعدها الحدث القصير القاطع:
   - *I **was studying** in the library **when** the lights went out.*
   - (كنت أذاكر في المكتبة عندما انقطعت الأنوار فجأة).`,
    rulesAndStructuresAr: 'was/were + verb-ing للحدث المستمر الطويل؛ بينما الماضي البسيط يمثل الحدث القاطع المفاجئ.',
    summaryAr: 'استخدم الماضي المستمر لرسم المشهد والخلفية، واستخدم الماضي البسيط للفعل المفاجئ الذي قاطعه.',
    arabicContrastPoint: {
      titleAr: 'الخلط بين was و were مع الجمع',
      descriptionAr: 'يقع البعض في خطأ استخدام was مع ضمائر الجمع We أو They، والصواب "They were" و "We were".',
      badArabicHabit: 'They was walking in the street.',
      correctEnglishWay: 'They were walking in the street.',
    },
    examples: [
      { en: 'What were you doing at 8 PM yesterday?', ar: 'ماذا كنت تفعل في الثامنة مساء البارحة؟', phoneticAr: 'وَات وِير يُو دُوِينْج آتْ أَيْت بِي إِم يَسْتِرْدَاي' },
      { en: 'While she was preparing dinner, the guests arrived.', ar: 'بينما كانت تعد العشاء، وصل الضيوف.', phoneticAr: 'وَايْل شِي وَاز بْرِيبَيْرِينْج دِنِر، ذَا جِسْتس أَرَاڤْد' },
      { en: 'It was raining heavily when we left.', ar: 'كانت تمطر بغزارة عندما غادرنا.', phoneticAr: 'إِت وَاز رَيْنِينْج هِيڤِلِي وِن وِي لِفْت' },
    ],
    vocabulary: [
      { word: 'Suddenly', ipa: '/ˈsʌd.ən.li/', partOfSpeech: 'adverb', meaningAr: 'فجأة وعلى حين غرة', exampleEn: 'Suddenly, the music stopped.', exampleAr: 'فجأة، توقفت الموسيقى.' },
      { word: 'Notice', ipa: '/ˈnoʊ.t̬ɪs/', partOfSpeech: 'verb', meaningAr: 'يلاحظ / ينتبه', exampleEn: 'Did you notice anything unusual?', exampleAr: 'هل لاحظت أي شيء غير مألوف؟' },
      { word: 'Interrupt', ipa: '/ˌɪn.t̬əˈrʌpt/', partOfSpeech: 'verb', meaningAr: 'يقاطع حدثاً أو حديثاً', exampleEn: 'Sorry to interrupt your conversation.', exampleAr: 'أعتذر عن مقاطعة حديثكم.' },
    ],
    commonMistakes: [
      { wrong: 'While I cooked, the phone rang.', correct: 'While I was cooking, the phone rang.', reasonAr: 'الحدث المستمر الطويل بعد While يحتاج الماضي المستمر was cooking.' },
      { wrong: 'We was watching the match.', correct: 'We were watching the match.', reasonAr: 'ضمير الجمع We يأخذ were وليس was.' },
    ],
    realWorldChallengeAr: 'صف موقفاً طريفاً أو مفاجئاً حدث معك مستخدماً While I was ... when ...',
    exercises: [
      {
        id: 'a2-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر التركيب الصحيح للحدث المقاطع:',
        instructionEn: 'Choose the correct form for the interrupted action:',
        question: 'I was sleeping when the alarm ______ loudly.',
        options: ['rang', 'was ringing', 'ring', 'is ringing'],
        correctAnswer: 0,
        explanationAr: 'الحدث المفاجئ بعد when يأتي في الماضي البسيط: rang.',
      },
      {
        id: 'a2-2-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بالفعل المساعد المناسب للفاعل الجمع We:',
        instructionEn: 'Fill in the correct past auxiliary for "We":',
        question: 'We ______ (كنا) discussing the budget yesterday afternoon.',
        correctAnswer: ['were', 'Were'],
        explanationAr: 'مع الضمير We نستخدم were في الماضي المستمر.',
      },
      {
        id: 'a2-2-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المركبة بشكل سليم:',
        instructionEn: 'Unscramble the compound sentence:',
        question: 'reading / while / was / I / power / the / failed',
        correctAnswer: 'While I was reading the power failed',
        explanationAr: 'ترتيب الجملة: While I was reading, the power failed.',
      },
    ],
  },
  {
    id: 'lesson-a2-3-comparatives-and-superlatives',
    level: 'A2',
    order: 2,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: المقارنات والقرارات اليومية',
    chapterTitleEn: 'Unit 2: Comparisons and Practical Choices',
    titleAr: 'الدرس 3: المقارنة والتفضيل (Comparatives & Superlatives)',
    titleEn: 'Lesson 3: Comparatives and Superlatives',
    category: 'قواعد ووصف (A2)',
    iconName: 'Award',
    estimatedMinutes: 14,
    objectivesAr: [
      'المقارنة بين شيئين أو شخصين باستخدام -er than للصفات القصيرة و more ... than للصفات الطويلة.',
      'صياغة التفضيل المطلق باستخدام the -est و the most.',
      'إتقان الصفات الشاذة في المقارنة (good -> better -> best / bad -> worse -> worst).',
    ],
    explanationMarkdownAr: `### المقارنة والتفضيل: فن وزن الخيارات

#### 1. المقارنة بين طرفين (Comparative):
- **صفة قصيرة (مقطع واحد)**: نضيف **er** متبوعة بـ **than**:
  - *Fast -> Faster than* (*A plane is faster than a train.*)
  - *Cheap -> Cheaper than* (*This shop is cheaper than the mall.*)
- **صفة طويلة (مقطعان فأكثر)**: نضع **more** قبل الصفة متبوعة بـ **than**:
  - *Expensive -> **More expensive than***
  - *Comfortable -> **More comfortable than***

#### 2. التفضيل المطلق للأفضل بين الكل (Superlative):
- **صفة قصيرة**: نضع **the** قبلها ونضيف **est**:
  - *The fastest runner in the team.*
  - *The oldest building in the city.*
- **صفة طويلة**: نضع **the most** قبلها:
  - *The most interesting book I have ever read.*

#### الصفات الشاذة شديدة الأهمية:
- **Good** -> **Better than** -> **The Best** (جيد -> أفضل من -> الأفضل)
- **Bad** -> **Worse than** -> **The Worst** (سيئ -> أسوأ من -> الأسوأ)
- **Far** -> **Farther/Further than** -> **The Farthest/Furthest**`,
    rulesAndStructuresAr: 'صفة قصيرة: er than / the -est. صفة طويلة: more than / the most. ولا تنسَ: good تصبح better و the best.',
    summaryAr: 'المقارنة تحدد الفروق بدقة؛ لا تجمع بين more و er أبداً (تجنب more faster).',
    arabicContrastPoint: {
      titleAr: 'الجمع الخاطئ بين more و er',
      descriptionAr: 'يقع المتعلم أحياناً في خطأ دمج الصوتين "more better" أو "more faster"، والصواب أحدهما فقط: better و faster.',
      badArabicHabit: 'This phone is more cheaper than that one.',
      correctEnglishWay: 'This phone is cheaper than that one.',
    },
    examples: [
      { en: 'Prevention is better than cure.', ar: 'الوقاية خير من العلاج.', phoneticAr: 'بْرِيڤِنْشَن إِز بَتِر ذَان كْيُور' },
      { en: 'Tokyo is one of the most vibrant cities in the world.', ar: 'طوكيو إحدى أكثر المدن حيوية في العالم.', phoneticAr: 'تُوكْيُو إِز وَان أُوف ذَا مَوْسْت ڤَايْبْرَانْت سِيتِيز' },
      { en: 'Is this car more reliable than the old one?', ar: 'هل هذه السيارة أكثر اعتمادية من القديمة؟', phoneticAr: 'إِز ذِس كَار مُور رِلَايَابِل ذَان ذِي أُولْد وَان' },
    ],
    vocabulary: [
      { word: 'Comfortable', ipa: '/ˈkʌm.fɚ.t̬ə.bəl/', partOfSpeech: 'adjective', meaningAr: 'مريح ويبعث على الاسترخاء', exampleEn: 'These shoes are very comfortable.', exampleAr: 'هذا الحذاء مريح للغاية.' },
      { word: 'Reliable', ipa: '/rɪˈlaɪ.ə.bəl/', partOfSpeech: 'adjective', meaningAr: 'موثوق ويعتمد عليه', exampleEn: 'He is a reliable partner.', exampleAr: 'إنه شريك موثوق.' },
      { word: 'Efficient', ipa: '/ɪˈfɪʃ.ənt/', partOfSpeech: 'adjective', meaningAr: 'كفء وفعال', exampleEn: 'This software is more efficient.', exampleAr: 'هذا البرنامج أكثر كفاءة.' },
    ],
    commonMistakes: [
      { wrong: 'He is more taller than his brother.', correct: 'He is taller than his brother.', reasonAr: 'الصفة tall قصيرة فلا تأخذ more بل taller than فقط.' },
      { wrong: 'This is the most good meal.', correct: 'This is the best meal.', reasonAr: 'الصفة good شاذة وتفضيلها the best وليس the most good.' },
    ],
    realWorldChallengeAr: 'قارن بين مدينتين زرتهما أو بين جهازين تستخدمهما مستخدماً 3 صفات مقارنة.',
    exercises: [
      {
        id: 'a2-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة التفضيل الصحيحة للصفة good:',
        instructionEn: 'Choose the correct superlative of "good":',
        question: 'This is ______ decision we have ever made.',
        options: ['the best', 'the goodest', 'the most good', 'more better'],
        correctAnswer: 0,
        explanationAr: 'التفضيل المطلق لصفة good هو the best.',
      },
      {
        id: 'a2-3-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل صيغة المقارنة للصفة الطويلة expensive:',
        instructionEn: 'Fill in the comparative word for a long adjective:',
        question: 'Flying by plane is ______ (أكثر) expensive than taking the bus.',
        correctAnswer: ['more', 'More'],
        explanationAr: 'الصفات الطويلة تأخذ more قبلها في المقارنة.',
      },
      {
        id: 'a2-3-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة لبيان أن قطار اليوم أسرع من الأمس:',
        instructionEn: 'Unscramble the comparative statement:',
        question: 'faster / train / this / is / that / than / one',
        correctAnswer: 'This train is faster than that one',
        explanationAr: 'ترتيب المقارنة: This train is faster than that one.',
      },
    ],
  },
  {
    id: 'lesson-a2-4-future-plans-going-to-vs-will',
    level: 'A2',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: المقارنات والقرارات اليومية',
    chapterTitleEn: 'Unit 2: Comparisons and Practical Choices',
    titleAr: 'الدرس 4: التحدث عن المستقبل (Going To مقابل Will)',
    titleEn: 'Lesson 4: Future Forms: Going To vs Will',
    category: 'قواعد وأزمنة (A2)',
    iconName: 'Target',
    estimatedMinutes: 15,
    objectivesAr: [
      'التعبير عن النوايا والخطط المسبقة باستخدام be going to.',
      'استخدام will للقرارات اللحظية والوعود والتوقعات العامة.',
      'التفريق الصوتي والعملي بين I will call you (قرار فوري) و I am going to study (خطة مقررة).',
    ],
    explanationMarkdownAr: `### المستقبل في الإنجليزية: خطة مدروسة أم قرار لحظي؟

في الإنجليزية نميز بدقة بين شكلين رئيسيين للمستقبل:

#### 1. الصيغة المخططة (Be Going To):
نستخدمها عندما تكون الخطة **مجهزة ومقررة مسبقاً قبل لحظة الكلام**، أو لوجود **دليل حاضر**:
- *I **am going to buy** a new car next month.* (خططت لذلك ووفرت المال).
- *Look at those black clouds! It **is going to rain**.* (يوجد دليل مرئي واضح الآن).

#### 2. الصيغة الفورية والتنبؤية (Will):
نستخدمها في:
- **القرارات اللحظية الفورية (Spontaneous Decisions)**:
  - *The phone is ringing. I **will answer** it.*
  - *I'm thirsty. I **will get** a glass of water.*
- **الوعود والعروض والطلبات (Promises & Offers)**:
  - *I **will help** you with your bags.*
  - *I promise I **will call** you tonight.*
- **التوقعات بدون دليل قاطع**:
  - *I think our team **will win**.*`,
    rulesAndStructuresAr: 'Be going to للخطط المسبقة والأدلة الملموسة؛ بينما will للقرارات السريعة والوعود والتوقعات العامة.',
    summaryAr: 'إذا خططت للأمر مسبقاً فقل going to؛ وإذا قررت في نفس الثانية فقل will.',
    arabicContrastPoint: {
      titleAr: 'استخدام will لكل أشكال المستقبل دون تمييز',
      descriptionAr: 'يميل المتحدث العربي لاستخدام will (كالسين وسوف بالعربية) لجميع الحالات دون التفريق بين الخطة المسبقة والقرار الفوري.',
      badArabicHabit: 'I will travel tomorrow (رغم حجز التذكرة مسبقاً).',
      correctEnglishWay: 'I am going to travel tomorrow / I am traveling tomorrow.',
    },
    examples: [
      { en: 'We are going to launch our new product in June.', ar: 'نحن نعتزم إطلاق منتجنا الجديد في شهر يونيو.', phoneticAr: 'وِي آر غُوِينْج تُو لُونْش آوِر نْيُو بْرُودَاكْت إِنْ جُون' },
      { en: 'Don\'t worry, I will support you completely.', ar: 'لا تقلق، سأدعمك بكل تأكيد.', phoneticAr: 'دُونْت وُرِي، آي وِل سَابُورْت يُو كُومْبْلِيتْلِي' },
      { en: 'Are you going to attend tomorrow\'s workshop?', ar: 'هل تنوي حضور ورشة عمل الغد؟', phoneticAr: 'آر يُو غُوِينْج تُو أَتِنْد تُمُورُوز وِيرْك شُوب' },
    ],
    vocabulary: [
      { word: 'Intention', ipa: '/ɪnˈten.ʃən/', partOfSpeech: 'noun', meaningAr: 'النية والقصد المسبق', exampleEn: 'My intention is to master fluency.', exampleAr: 'نيتي وهدفي هو إتقان الطلاقة.' },
      { word: 'Promise', ipa: '/ˈprɑː.mɪs/', partOfSpeech: 'verb', meaningAr: 'يعد (وعداً)', exampleEn: 'I promise I will not be late.', exampleAr: 'أعدك بأنني لن أتأخر.' },
      { word: 'Predict', ipa: '/prɪˈdɪkt/', partOfSpeech: 'verb', meaningAr: 'يتنبأ / يتوقع', exampleEn: 'It is hard to predict the exact outcome.', exampleAr: 'من الصعب التنبؤ بالنتيجة بدقة.' },
    ],
    commonMistakes: [
      { wrong: 'I am going buy a laptop.', correct: 'I am going to buy a laptop.', reasonAr: 'لا تنسَ حرف الجر to بعد going: be going to + verb.' },
      { wrong: 'I will going to travel.', correct: 'I am going to travel.', reasonAr: 'لا تجمع بين will و going to في نفس الجملة.' },
    ],
    realWorldChallengeAr: 'اكتب خطة واحدة مؤكدة تنوي إنجازها هذا العام (going to)، ووعداً واحداً تقدمه لنفسك (will).',
    exercises: [
      {
        id: 'a2-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة المناسبة لقرار فوري تم اتخاذه في نفس اللحظة:',
        instructionEn: 'Choose the spontaneous decision form:',
        question: 'Wait for me! I ______ with you right now.',
        options: ['will come', 'am going to come', 'came', 'coming'],
        correctAnswer: 0,
        explanationAr: 'القرار الفوري اللحظي يأخذ will: I will come.',
      },
      {
        id: 'a2-4-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل فعل الكينونة الناقص لتركيب النية المسبقة:',
        instructionEn: 'Fill in the auxiliary verb for planned future:',
        question: 'They ______ (ينوون) going to launch a startup next month.',
        correctAnswer: ['are', 'Are'],
        explanationAr: 'مع الفاعل They نستخدم are going to.',
      },
      {
        id: 'a2-4-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الدالة على نية دراسة الطب:',
        instructionEn: 'Unscramble the planned intention statement:',
        question: 'medicine / to / is / she / going / study',
        correctAnswer: 'She is going to study medicine',
        explanationAr: 'ترتيب الخطة المستقبلية: She is going to study medicine.',
      },
    ],
  },
  {
    id: 'lesson-a2-5-modals-obligation-advice',
    level: 'A2',
    order: 4,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التوجيه والمسؤوليات',
    chapterTitleEn: 'Unit 3: Guidance and Responsibilities',
    titleAr: 'الدرس 5: الإلزام والنصيحة (Must, Have To, Should)',
    titleEn: 'Lesson 5: Modals of Obligation and Advice',
    category: 'قواعد ومحادثة (A2)',
    iconName: 'ShieldCheck',
    estimatedMinutes: 15,
    objectivesAr: [
      'التعبير عن النصيحة والتوصية الإيجابية باستخدام should / shouldn\'t.',
      'التعبير عن الإلزام والقواعد القانونية والوظيفية باستخدام have to و must.',
      'فهم الفارق الجوهري بين don\'t have to (لست مضطراً) و mustn\'t (ممنوع تماماً).',
    ],
    explanationMarkdownAr: `### الإلزام والنصيحة: كيف توجه وتتحكم في المواقف

#### 1. تقديم النصيحة الودية (Advice): **Should / Shouldn't**
- *You look exhausted. You **should get** some rest.* (نصيحة لصالحك).
- *You **shouldn't skip** breakfast.* (من الأفضل ألا تتخطى الإفطار).

#### 2. الإلزام والضرورة (Obligation): **Have to / Must**
- **Have to**: التزام نابع من قوانين أو ظروف خارجية (لوائح عمل، وثائق سفر):
  - *You **have to show** your passport at the border.*
  - *He **has to wear** a helmet on the construction site.*
- **Must**: إلزام قوي شخصي أو قانون صارم:
  - *You **must submit** the application today.*

#### ⚠️ الفارق الأكبر الذي يربك الجميع في النفي:
1. **Don't have to**: تعني **عدم الإلزام** (الأمر اختياري، لست مجبراً لكنك تستطيع):
   - *Tomorrow is Sunday; you **don't have to wake up** early.* (لست مضطراً).
2. **Mustn't**: تعني **التحريم والمنع التام** (مخالفة أو خطر):
   - *You **mustn't park** your car here.* (ممنوع نظامياً!).`,
    rulesAndStructuresAr: 'Should للنصيحة، Have to للإلزام الخارجي، Don\'t have to لغياب الإلزام، و Mustn\'t للمنع والتحريم.',
    summaryAr: 'ميز جيداً بين "لست مضطراً" (don\'t have to) و "ممنوع قطعاً" (mustn\'t).',
    arabicContrastPoint: {
      titleAr: 'الخلط بين التحريم وغياب الإلزام',
      descriptionAr: 'يستخدم البعض mustn\'t بمعنى "ليس ضرورياً"، والصواب don\'t have to، لأن mustn\'t تعني المنع القاطع تحت طائلة العقوبة.',
      badArabicHabit: 'You mustn\'t come if you are busy (كأنه يمنعه).',
      correctEnglishWay: 'You don\'t have to come if you are busy.',
    },
    examples: [
      { en: 'You should read this article; it is truly insightful.', ar: 'ينبغي عليك قراءة هذا المقال؛ إنه ثري بالمعلومات حقاً.', phoneticAr: 'يُو شُود رِيد ذِس آرْتِكِل؛ إِت إِز تْرُولِي إِنْسَايتْفُل' },
      { en: 'Do we have to bring our laptops to the session?', ar: 'هل يتعين علينا إحضار حواسيبنا المحمولة للجلسة؟', phoneticAr: 'دُو وِي هَاڤ تُو بْرِينْج آوِر لَابْتُوبْس' },
      { en: 'You mustn\'t use your mobile phone while driving.', ar: 'يُحظر عليك استخدام الهاتف أثناء القيادة.', phoneticAr: 'يُو مَاسَنْت يُوز يُور مَوْبَايِل فُون وَايْل دْرَايڤِينْج' },
    ],
    vocabulary: [
      { word: 'Requirement', ipa: '/rɪˈkwaɪr.mənt/', partOfSpeech: 'noun', meaningAr: 'متطلب إلزامي أو شرط', exampleEn: 'Fluency is a key requirement for the role.', exampleAr: 'الطلاقة متطلب رئيسي لهذه الوظيفة.' },
      { word: 'Advice', ipa: '/ədˈvaɪs/', partOfSpeech: 'noun', meaningAr: 'نصيحة وتوجيه (اسم لا يُعد)', exampleEn: 'Thank you for your valuable advice.', exampleAr: 'شكراً على نصيحتك الثمينة.' },
      { word: 'Permitted', ipa: '/pɚˈmɪt.ɪd/', partOfSpeech: 'adjective', meaningAr: 'مسموح به ومرخص', exampleEn: 'Smoking is not permitted in this area.', exampleAr: 'التدخين غير مسموح به في هذه المنطقة.' },
    ],
    commonMistakes: [
      { wrong: 'You should to drink more water.', correct: 'You should drink more water.', reasonAr: 'لا نضع to بعد الفعل المساعد should.' },
      { wrong: 'He have to leave early.', correct: 'He has to leave early.', reasonAr: 'مع المفرد He نستخدم has to وليس have to.' },
    ],
    realWorldChallengeAr: 'اكتب نصيحة واحدة لصديق يتعلم الإنجليزية (You should...)، وقاعدة واحدة في عملك (I have to...).',
    exercises: [
      {
        id: 'a2-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر التعبير المناسب لتقديم نصيحة ودية:',
        instructionEn: 'Choose the appropriate modal for friendly advice:',
        question: 'You ______ sleep early if you want to wake up refreshed.',
        options: ['should', 'mustn\'t', 'has to', 'should to'],
        correctAnswer: 0,
        explanationAr: 'نستخدم should لتقديم نصيحة إيجابية.',
      },
      {
        id: 'a2-5-ex-2',
        type: 'fill_blank',
        instructionAr: 'اختر الصيغة المعبرة عن أن الأمر اختياري وغير إجباري:',
        instructionEn: 'Fill in the form expressing lack of obligation:',
        question: 'Admission is free, so you ______ (لست مضطراً لـ) pay anything.',
        correctAnswer: ["don't have to", "do not have to"],
        explanationAr: 'عدم الإلزام مع الفاعل you يعبر عنه بـ don\'t have to.',
      },
      {
        id: 'a2-5-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب التحذير من التدخين داخل المستشفى:',
        instructionEn: 'Unscramble the prohibition sentence:',
        question: 'smoke / here / you / mustn\'t',
        correctAnswer: 'You mustn\'t smoke here',
        explanationAr: 'صيغة التحريم والمنع: You mustn\'t smoke here.',
      },
    ],
  },
  {
    id: 'lesson-a2-6-first-conditional',
    level: 'A2',
    order: 5,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التوجيه والمسؤوليات',
    chapterTitleEn: 'Unit 3: Guidance and Responsibilities',
    titleAr: 'الدرس 6: الجملة الشرطية الأولى (First Conditional: If + Present, Will)',
    titleEn: 'Lesson 6: First Conditional for Real Possibilities',
    category: 'قواعد وربط (A2)',
    iconName: 'Compass',
    estimatedMinutes: 16,
    objectivesAr: [
      'التعبير عن نتائج واقعية محتملة الحدوث في المستقبل وفق شرط محدد.',
      'إتقان بنية الجملة الشرطية الأولى: If + Present Simple, ... will + infinitive.',
      'تجنب الخطأ الشائع بوضع will في جملة الشرط (if clause).',
    ],
    explanationMarkdownAr: `### الحالة الشرطية الأولى: شروط واقعية ونتائج مستقبلية

نستخدم الحالة الشرطية الأولى (First Conditional) لموقف واقعي ممكن الحدوث جداً في المستقبل إذا تحقق شرطه:

#### التركيب النحوي:
**If + المضارع البسيط (Present Simple), ... will + الفعل المجرد**

- *If you **study** consistently, you **will pass** the exam easily.*
  (إذا ذاكرت بانتظام، ستجتاز الاختبار بسهولة).
- *If it **rains** tomorrow, we **will reschedule** the outdoor match.*
  (إذا أمطرت غداً، سنؤجل المباراة).

#### عكس الترتيب (بدون فاصلة comma):
يمكن أن نبدأ بجملة النتيجة أولاً، وفي هذه الحالة نحذف الفاصلة:
- *You **will succeed** **if** you **work** hard.*

#### ⚠️ الخطأ العربي الأكثر تكراراً:
في العربية نقول "إذا سوف تدرس ستنجح"، فيضع المتعلم will في طرفي الجملة:
- ❌ *If you will help me, I will be happy.*
- ✅ *If you **help** me, I will be happy.* (فعل جملة if مضارع بسيط دائماً!).`,
    rulesAndStructuresAr: 'If + Present Simple في طرف الشرط؛ بينما طرف النتيجة يأخذ will + المصدر المجرد.',
    summaryAr: 'لا تضع will في شطر If أبداً؛ جملة الشرط تستخدم المضارع البسيط.',
    arabicContrastPoint: {
      titleAr: 'وضع will في شطر الشرط بعد if',
      descriptionAr: 'يقع المتعلم في خطأ قول "If you will come" قياساً على المعنى المستقبلي، والصواب "If you come".',
      badArabicHabit: 'If it will rain tomorrow, I will stay home.',
      correctEnglishWay: 'If it rains tomorrow, I will stay home.',
    },
    examples: [
      { en: 'If you practice speaking daily, you will gain confidence rapidly.', ar: 'إذا مارست التحدث يومياً، ستكتسب الثقة بسرعة فائقة.', phoneticAr: 'إِف يُو بْرَاكْتِس سْبِيكِينْج دَيْلِي، يُو وِل غَيْن كُونْفِيدِنس' },
      { en: 'What will you do if they offer you the job?', ar: 'ماذا ستفعل إذا عرضوا عليك الوظيفة؟', phoneticAr: 'وَات وِل يُو دُو إِف ذَاي أُوفِر يُو ذَا جُوب' },
      { en: 'If we hurry, we will catch the early train.', ar: 'إذا استعجلنا، سنلحق بالقطار الباكر.', phoneticAr: 'إِف وِي هَارِي، وِي وِل كَاتْش ذَا إِيرْلِي تْرَيْن' },
    ],
    vocabulary: [
      { word: 'Outcome', ipa: '/ˈaʊt.kʌm/', partOfSpeech: 'noun', meaningAr: 'النتيجة أو المحصلة النهائية', exampleEn: 'A positive attitude leads to a great outcome.', exampleAr: 'الموقف الإيجابي يقود لنتيجة رائعة.' },
      { word: 'Consistent', ipa: '/kənˈsɪs.tənt/', partOfSpeech: 'adjective', meaningAr: 'مستمر وثابت بانتظام', exampleEn: 'Consistent effort produces real mastery.', exampleAr: 'الجهد المنتظم يولد إتقاناً حقيقياً.' },
      { word: 'Opportunity', ipa: '/ˌɑː.pɚˈtuː.nə.t̬i/', partOfSpeech: 'noun', meaningAr: 'فرصة ثمينة', exampleEn: 'If an opportunity arises, seize it.', exampleAr: 'إذا سنحت فرصة، فاغتنمها.' },
    ],
    commonMistakes: [
      { wrong: 'If she will call, tell her I am busy.', correct: 'If she calls, tell her I am busy.', reasonAr: 'جملة if تأخذ المضارع البسيط calls وليس will call.' },
      { wrong: 'If you work hard, you succeed.', correct: 'If you work hard, you will succeed.', reasonAr: 'طرف النتيجة للحدث المستقبلي يحتاج will succeed.' },
    ],
    realWorldChallengeAr: 'اكتب جملة شرطية واحدة تحدد فيها ما ستفعله إذا أتقنت الإنجليزية هذا العام (If I master English, I will...).',
    exercises: [
      {
        id: 'a2-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر تصريف الفعل الصحيح في شق جملة if الشرطية الأولى:',
        instructionEn: 'Choose the correct verb in the if-clause:',
        question: 'If he ______ hard this month, he will secure the promotion.',
        options: ['works', 'will work', 'worked', 'is working'],
        correctAnswer: 0,
        explanationAr: 'جملة الشرط تأخذ المضارع البسيط (works مع الفاعل he).',
      },
      {
        id: 'a2-6-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل فعل النتيجة المستقبلي المناسب:',
        instructionEn: 'Fill in the future result auxiliary:',
        question: 'If you invest in your skills, you ______ (سوف) reap great rewards.',
        correctAnswer: ['will', 'Will'],
        explanationAr: 'طرف النتيجة في الحالة الأولى يأخذ will.',
      },
      {
        id: 'a2-6-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الشرطية الأولى بشكل سليم:',
        instructionEn: 'Unscramble the first conditional sentence:',
        question: 'will / succeed / if / practice / you / you',
        correctAnswer: 'If you practice you will succeed',
        explanationAr: 'ترتيب الجملة الشرطية: If you practice, you will succeed.',
      },
    ],
  },
];
