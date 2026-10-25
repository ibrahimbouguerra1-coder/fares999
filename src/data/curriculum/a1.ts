import type { Lesson } from '../../types/learning.ts';

export const A1_LESSONS: Lesson[] = [
  {
    id: 'lesson-a1-1-verb-to-be-and-pronouns',
    level: 'A1',
    order: 0,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: اللبنات الأولى للجملة الإنجليزية',
    chapterTitleEn: 'Unit 1: Foundations of the English Sentence',
    titleAr: 'الدرس 1: فعل الكينونة To Be والضمائر الفاعلة',
    titleEn: 'Lesson 1: Subject Pronouns and the Verb To Be',
    category: 'قواعد وتراكيب (A1)',
    iconName: 'BookOpen',
    estimatedMinutes: 12,
    objectivesAr: [
      'الاستخدام الدقيق لضمائر الفاعل (I, You, He, She, It, We, They).',
      'تصريف فعل To Be في الإثبات والنفي والسؤال (am / is / are).',
      'تجنب إسقاط فعل الكينونة (الخطأ العربي الشائع: He teacher -> He is a teacher).',
    ],
    explanationMarkdownAr: `### فعل الكينونة To Be: عمود الجملة الإنجليزية

في اللغة العربية الجملة الاسمية لا تحتاج إلى رابط (هو معلم، أنا سعيد). أما في الإنجليزية، فكل جملة اسمية لا بد لها من فعل كينونة:

1. **I am** (أنا أكون) -> *I am ready.*
2. **He / She / It is** (هو / هي يكون) -> *She is an engineer.*
3. **We / You / They are** (نحن / أنتم / هم يكونون) -> *They are friendly.*

#### صيغة النفي:
فقط أضف **not** بعد فعل الكينونة:
- I am not tired.
- He is not at home.

#### صيغة السؤال (Yes/No Questions):
اقلب الترتيب بين الفاعل وفعل الكينونة:
- **Are you** ready?
- **Is he** a doctor?`,
    rulesAndStructuresAr: 'I + am, He/She/It + is, We/You/They + are. لا جملة إنجليزية بدون فعل صريح!',
    summaryAr: 'كل جملة إنجليزية تحتاج فعلاً صريحاً. فعل To Be يربط الفاعل بصفته أو مهنته.',
    arabicContrastPoint: {
      titleAr: 'إسقاط فعل الكينونة To Be',
      descriptionAr: 'يميل المتحدث العربي لترجمة "هو طبيب" حرفياً إلى "He doctor" دون فعل.',
      badArabicHabit: 'He doctor in London.',
      correctEnglishWay: 'He is a doctor in London.',
    },
    examples: [
      { en: 'I am a student.', ar: 'أنا طالب.', phoneticAr: 'آي آم أَه سْتْيُودِنْت' },
      { en: 'They are very helpful.', ar: 'هم متعاونون ولطفاء جداً.', phoneticAr: 'ذَاي آر ڤِيرِي هِلْبْفُل' },
      { en: 'She is not afraid.', ar: 'هي ليست خائفة.', phoneticAr: 'شِي إِز نُوت أَفْرَيْد' },
    ],
    vocabulary: [
      { word: 'Student', ipa: '/ˈstuː.dənt/', partOfSpeech: 'noun', meaningAr: 'طالب / متعلم', exampleEn: 'I am an English student.', exampleAr: 'أنا طالب لغة إنجليزية.' },
      { word: 'Teacher', ipa: '/ˈtiː.tʃɚ/', partOfSpeech: 'noun', meaningAr: 'معلم / أستاذ', exampleEn: 'Our teacher is very patient.', exampleAr: 'معلمنا صبور للغاية.' },
      { word: 'Ready', ipa: '/ˈred.i/', partOfSpeech: 'adjective', meaningAr: 'جاهز ومستعد', exampleEn: 'Are you ready to practice?', exampleAr: 'هل أنت جاهز للتدرب؟' },
    ],
    commonMistakes: [
      { wrong: 'I student.', correct: 'I am a student.', reasonAr: 'لا بد من فعل الكينونة am وأداة النكرة a.' },
      { wrong: 'They is friends.', correct: 'They are friends.', reasonAr: 'ضمير الجمع They يأخذ are وليس is.' },
    ],
    realWorldChallengeAr: 'عرّف عن مهنتك وثلاث صفات لشخصيتك بالإنجليزية باستخدام I am ...',
    exercises: [
      {
        id: 'a1-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر فعل الكينونة المناسب للضمير We:',
        instructionEn: 'Choose the correct form of "to be" for "We":',
        question: 'We ______ excited to start learning today.',
        options: ['are', 'is', 'am', 'be'],
        correctAnswer: 0,
        explanationAr: 'ضمير الجمع We يأخذ فعل الكينونة are.',
      },
      {
        id: 'a1-1-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل الجملة بفعل الكينونة الصحيح:',
        instructionEn: 'Complete the sentence with the correct verb:',
        question: 'She ______ (تكون) a talented doctor.',
        correctAnswer: ['is', 'Is'],
        explanationAr: 'ضمير المفرد المؤنث الغائب She يأخذ is.',
      },
      {
        id: 'a1-1-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الكلمات لتكوين جملة صحيحة:',
        instructionEn: 'Unscramble the sentence:',
        question: 'am / not / I / tired',
        correctAnswer: 'I am not tired',
        explanationAr: 'ترتيب الجملة المنفية: الفاعل I ثم am ثم not ثم الصفة tired.',
      },
    ],
  },
  {
    id: 'lesson-a1-2-present-simple-routines',
    level: 'A1',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: اللبنات الأولى للجملة الإنجليزية',
    chapterTitleEn: 'Unit 1: Foundations of the English Sentence',
    titleAr: 'الدرس 2: المضارع البسيط والروتين اليومي',
    titleEn: 'Lesson 2: Present Simple and Daily Routines',
    category: 'قواعد وتراكيب (A1)',
    iconName: 'Clock',
    estimatedMinutes: 14,
    objectivesAr: [
      'التعبير عن العادات اليومية والحقائق العامة بدقة.',
      'إتقان إضافة s/es للشخص الثالث المفرد (He/She/It).',
      'استخدام أفعال المساعدة do / does في النفي والاستفهام.',
    ],
    explanationMarkdownAr: `### المضارع البسيط: لغة الحقائق والعادات

نستخدم المضارع البسيط (Present Simple) للحديث عن الأمور الثابتة والروتين المتكرر:

- **I / You / We / They** + الفعل الأصلي:
  - *I drink coffee every morning.*
- **He / She / It** + الفعل مضافاً له **s** أو **es**:
  - *He speaks English fluently.*
  - *She watches educational videos.*

#### النفي باستخدام don't و doesn't:
- I **don't** like noise.
- He **doesn't** work on weekends. *(لاحظ: نلغي الـ s بعد doesn't!)*

#### السؤال باستخدام Do و Does:
- **Do you** live in Riyadh?
- **Does she** know the answer?`,
    rulesAndStructuresAr: 'He/She/It يأخذ s مع الفعل في الإثبات، وdoes/doesn\'t في السؤال والنفي مع عودة الفعل للمصدر.',
    summaryAr: 'المضارع البسيط يصف العادات الدائمة، وتذكر إضافة حرف s مع ضمائر المفرد الغائب.',
    arabicContrastPoint: {
      titleAr: 'نسيان s المفرد الغائب',
      descriptionAr: 'في اللغة العربية يتغير الفعل من بدايته (يكتب / تكتب)، فينسى المتعلم العربي إضافة s في نهاية الفعل الإنجليزي.',
      badArabicHabit: 'He work in an office.',
      correctEnglishWay: 'He works in an office.',
    },
    examples: [
      { en: 'I wake up at seven o\'clock.', ar: 'أستيقظ في تمام السابعة صباحاً.', phoneticAr: 'آي وَيْك أَبْ آتْ سِيڤِن أُوكْلُوك' },
      { en: 'He teaches mathematics.', ar: 'هو يدرّس مادة الرياضيات.', phoneticAr: 'هِي تِيتْشِز مَثِيمَاتِكْس' },
      { en: 'Do you study every day?', ar: 'هل تذاكر كل يوم؟', phoneticAr: 'دُو يُو سْتَادِي إِيڤْرِي دَاي' },
    ],
    vocabulary: [
      { word: 'Routine', ipa: '/ruːˈtiːn/', partOfSpeech: 'noun', meaningAr: 'الروتين والجدول اليومي', exampleEn: 'My morning routine is simple.', exampleAr: 'روتيني الصباحي بسيط.' },
      { word: 'Always', ipa: '/ˈɑːl.weɪz/', partOfSpeech: 'adverb', meaningAr: 'دائماً', exampleEn: 'I always arrive on time.', exampleAr: 'أنا أصل في الموعد دائماً.' },
      { word: 'Usually', ipa: '/ˈjuː.ʒu.ə.li/', partOfSpeech: 'adverb', meaningAr: 'عادةً', exampleEn: 'We usually drink tea after lunch.', exampleAr: 'نحن عادة نشرب الشاي بعد الغداء.' },
    ],
    commonMistakes: [
      { wrong: 'He doesn\'t works here.', correct: 'He doesn\'t work here.', reasonAr: 'بعد doesn\'t يعود الفعل إلى شكله المصدري المجرد دون s.' },
      { wrong: 'She like apples.', correct: 'She likes apples.', reasonAr: 'الفاعل مفرد غائب She فيلزم إضافة s إلى الفعل like.' },
    ],
    realWorldChallengeAr: 'اكتب 3 جمل عن روتينك الصباحي بالإنجليزية مستخدماً Always و Usually.',
    exercises: [
      {
        id: 'a1-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة للفعل مع الفاعل He:',
        instructionEn: 'Choose the correct verb form for "He":',
        question: 'My brother ______ in a tech company in Dubai.',
        options: ['works', 'work', 'working', 'is work'],
        correctAnswer: 0,
        explanationAr: 'الفاعل مفرد غائب (My brother = He) فيأخذ الفعل s: works.',
      },
      {
        id: 'a1-2-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل أداة النفي المناسبة للفاعل:',
        instructionEn: 'Fill in the correct negative auxiliary:',
        question: 'Sarah ______ (لا تشرب) coffee in the evening.',
        correctAnswer: ["doesn't", 'does not', "Doesn't"],
        explanationAr: 'مع المفرد الغائب Sarah نستخدم doesn\'t للنفي.',
      },
      {
        id: 'a1-2-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب السؤال بالشكل الصحيح:',
        instructionEn: 'Unscramble the question:',
        question: 'English / speak / you / do',
        correctAnswer: 'Do you speak English',
        explanationAr: 'تكوين السؤال: Do + الفاعل you + الفعل speak + المفعول English؟',
      },
    ],
  },
  {
    id: 'lesson-a1-3-asking-questions',
    level: 'A1',
    order: 2,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: التواصل والاستفسار',
    chapterTitleEn: 'Unit 2: Daily Communication and Inquiry',
    titleAr: 'الدرس 3: صياغة الأسئلة وأدوات الاستفهام (Wh- Questions)',
    titleEn: 'Lesson 3: Asking Questions with Wh- Words',
    category: 'محادثة وتراكيب (A1)',
    iconName: 'HelpCircle',
    estimatedMinutes: 15,
    objectivesAr: [
      'التمييز بين أدوات الاستفهام: What, Where, When, Who, Why, How.',
      'إتقان القاعدة الذهبية لترتيب السؤال (Q-A-S-V).',
      'طرح أسئلة يومية شائعة للتعارف والطلب.',
    ],
    explanationMarkdownAr: `### قاعدة السؤال الذهبية (Q - A - S - V)

في الإنجليزية، صياغة السؤال تتبع دائماً نسقاً صارماً:

| 1. أداة الاستفهام (Question Word) | 2. الفعل المساعد (Auxiliary) | 3. الفاعل (Subject) | 4. الفعل الأساسي (Verb) | التكملة |
| :---: | :---: | :---: | :---: | :---: |
| **Where** | **do** | **you** | **live** | ? |
| **What** | **does** | **she** | **study** | ? |
| **Why** | **are** | **they** | **late** | ? |
| **How** | **can** | **I** | **help** | you? |

#### أدوات الاستفهام الأساسية:
- **What**: ماذا / ما (للأشياء: *What is your name?*)
- **Where**: أين (للأماكن: *Where is the station?*)
- **When**: متى (للوقت: *When do we start?*)
- **Who**: مَن (للأشخاص: *Who is that man?*)
- **Why**: لماذا (للأسباب: *Why are you happy?*)
- **How**: كيف / كم (للحال والكمية: *How are you? / How much?*)`,
    rulesAndStructuresAr: 'ترتيب السؤال دائماً: أداة الاستفهام + الفعل المساعد + الفاعل + الفعل الرئيسي.',
    summaryAr: 'لا تطرح سؤالاً إنجليزياً بأسلوب الجملة الخبرية بنبرة صوتية؛ استخدم دائماً فعلاً مساعداً مقدماً.',
    arabicContrastPoint: {
      titleAr: 'صياغة السؤال بنبرة الصوت دون فعل مساعد',
      descriptionAr: 'في العربية نقول "أنت تعيش هنا؟" بنفس ترتيب الجملة، بينما الإنجليزية تشترط Do you live here? وليس You live here?.',
      badArabicHabit: 'Where you live?',
      correctEnglishWay: 'Where do you live?',
    },
    examples: [
      { en: 'What do you want to learn?', ar: 'ماذا تريد أن تتعلم؟', phoneticAr: 'وَات دُو يُو وَانْت تُو لِيرْن' },
      { en: 'Where does your father work?', ar: 'أين يعمل والدك؟', phoneticAr: 'وَيْر دَاز يُور فَاذِر وِيرْك' },
      { en: 'How do you say this in English?', ar: 'كيف تقول هذا بالإنجليزية؟', phoneticAr: 'هَاو دُو يُو سَاي ذِس إِنْ إِنْجْلِش' },
    ],
    vocabulary: [
      { word: 'Question', ipa: '/ˈkwes.tʃən/', partOfSpeech: 'noun', meaningAr: 'سؤال / استفسار', exampleEn: 'May I ask a question?', exampleAr: 'هل يمكنني طرح سؤال؟' },
      { word: 'Answer', ipa: '/ˈæn.sɚ/', partOfSpeech: 'noun', meaningAr: 'إجابة / رد', exampleEn: 'That is the correct answer.', exampleAr: 'تلك هي الإجابة الصحيحة.' },
      { word: 'Reason', ipa: '/ˈriː.zən/', partOfSpeech: 'noun', meaningAr: 'سبب / علة', exampleEn: 'What is the reason for this?', exampleAr: 'ما هو السبب وراء ذلك؟' },
    ],
    commonMistakes: [
      { wrong: 'What time you wake up?', correct: 'What time do you wake up?', reasonAr: 'السؤال في المضارع البسيط يحتاج فعلاً مساعداً do قبل الفاعل you.' },
      { wrong: 'Where he goes?', correct: 'Where does he go?', reasonAr: 'مع he نستخدم does ويعود الفعل go للمصدر.' },
    ],
    realWorldChallengeAr: 'اكتب 3 أسئلة تود أن تسألها لشخص تقابله لأول مرة في مؤتمر عمل.',
    exercises: [
      {
        id: 'a1-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الترتيب الصحيح للسؤال بالإنجليزية:',
        instructionEn: 'Choose the correct question order:',
        question: 'Which question is grammatically correct?',
        options: [
          'Where do you work?',
          'Where you work?',
          'Where work you?',
          'Where you do work?',
        ],
        correctAnswer: 0,
        explanationAr: 'الترتيب القياسي: Where + do + you + work?',
      },
      {
        id: 'a1-3-ex-2',
        type: 'fill_blank',
        instructionAr: 'اختر أداة الاستفهام المناسبة للسؤال عن المكان:',
        instructionEn: 'Fill in the question word for location:',
        question: '______ (أين) is the nearest library?',
        correctAnswer: ['Where', 'where'],
        explanationAr: 'أداة السؤال عن المكان هي Where.',
      },
      {
        id: 'a1-3-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب كلمات السؤال بشكل صحيح:',
        instructionEn: 'Unscramble the question:',
        question: 'do / what / you / do',
        correctAnswer: 'What do you do',
        explanationAr: 'السؤال الشهير عن المهنة: What do you do? (ماذا تعمل؟).',
      },
    ],
  },
  {
    id: 'lesson-a1-4-there-is-there-are-places',
    level: 'A1',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: التواصل والاستفسار',
    chapterTitleEn: 'Unit 2: Daily Communication and Inquiry',
    titleAr: 'الدرس 4: وصف الأماكن (There is / There are) وحروف الجر',
    titleEn: 'Lesson 4: Describing Places with There Is / There Are',
    category: 'مفردات ووصف (A1)',
    iconName: 'Compass',
    estimatedMinutes: 13,
    objectivesAr: [
      'التعبير عن وجود الأشياء باستخدام There is للمفرد و There are للجمع.',
      'استخدام حروف الجر المكانية: in, on, at, next to, between, opposite.',
      'وصف المنزل أو المكتب بدقة وثقة.',
    ],
    explanationMarkdownAr: `### الإشارة إلى الوجود: There is و There are

نستخدم هذه التركيبة لترجمة معنى "يوجد / هناك":

- **There is** + اسم مفرد أو غير معدود:
  - *There is a laptop on the desk.*
  - *There is some water in the bottle.*
- **There are** + اسم جمع:
  - *There are five chairs in the meeting room.*

#### النفي:
- *There **isn't** any milk left.*
- *There **aren't** many cars today.*

#### حروف الجر المكانية الأساسية:
- **in**: داخل (in the room)
- **on**: على السطح (on the table)
- **at**: في نقطة محددة (at the door, at the airport)
- **next to**: بجوار
- **between**: بين شيئين`,
    rulesAndStructuresAr: 'There is للمفرد وغير المعدود؛ There are للجمع. وفي السؤال: Is there...? / Are there...?',
    summaryAr: 'استخدم There is / are لتوجيه الآخرين ووصف ما يحيط بك من مبانٍ وأغراض بدقة.',
    arabicContrastPoint: {
      titleAr: 'استخدام Have بدلاً من There is',
      descriptionAr: 'في العربية نقول "في الغرفة طاولة"، فيترجمها البعض خطأ بـ "In room have table" أو "Has a table" بدلاً من There is a table.',
      badArabicHabit: 'Has a cafe in the hotel.',
      correctEnglishWay: 'There is a cafe in the hotel.',
    },
    examples: [
      { en: 'There is a quiet park near my house.', ar: 'توجد حديقة هادئة بالقرب من منزلي.', phoneticAr: 'ذَيْر إِز أَه كْوَايِت بَارْك نِير مَاي هَاوْس' },
      { en: 'There are many opportunities here.', ar: 'توجد فرص كثيرة هنا.', phoneticAr: 'ذَيْر آر مَانِي أُوبُورْتْيُونِتِيز هِير' },
      { en: 'Is there any problem?', ar: 'هل هناك أي مشكلة؟', phoneticAr: 'إِز ذَيْر أَنِي بْرُوبْلِم' },
    ],
    vocabulary: [
      { word: 'Nearby', ipa: '/ˌnɪrˈbaɪ/', partOfSpeech: 'adverb', meaningAr: 'قريب / في الجوار', exampleEn: 'Is there a pharmacy nearby?', exampleAr: 'هل هناك صيدلية في الجوار؟' },
      { word: 'Between', ipa: '/bɪˈtwiːn/', partOfSpeech: 'preposition', meaningAr: 'بين', exampleEn: 'The bank is between the post office and the cafe.', exampleAr: 'البنك يقع بين مكتب البريد والمقهى.' },
      { word: 'Opportunity', ipa: '/ˌɑː.pɚˈtuː.nə.t̬i/', partOfSpeech: 'noun', meaningAr: 'فرصة سانحة', exampleEn: 'There are great opportunities to grow.', exampleAr: 'توجد فرص رائعة للنمو.' },
    ],
    commonMistakes: [
      { wrong: 'There is three books on the table.', correct: 'There are three books on the table.', reasonAr: 'ثلاثة كتب جمع، لذا نستخدم There are وليس There is.' },
      { wrong: 'In the office has a coffee machine.', correct: 'There is a coffee machine in the office.', reasonAr: 'الإنجليزية لا تبدأ بـ In the office has بل بتركيب There is.' },
    ],
    realWorldChallengeAr: 'صف غرفتك أو مكتبك في 3 جمل مستخدماً There is و There are وحروف الجر.',
    exercises: [
      {
        id: 'a1-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة لوصف وجود جهاز حاسوب واحد:',
        instructionEn: 'Choose the correct form for singular presence:',
        question: '______ a computer in the study room.',
        options: ['There is', 'There are', 'Has', 'Have'],
        correctAnswer: 0,
        explanationAr: 'اسم مفرد (a computer) يأخذ There is.',
      },
      {
        id: 'a1-4-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بصيغة الجمع المناسبة للوجود:',
        instructionEn: 'Fill in the plural form:',
        question: '______ (يوجد) twenty students in the lecture hall.',
        correctAnswer: ['There are', 'there are'],
        explanationAr: 'عشرون طالباً اسم جمع فيأخذ There are.',
      },
      {
        id: 'a1-4-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب السؤال لمعرفة هل يوجد مقهى قريب:',
        instructionEn: 'Unscramble the question:',
        question: 'is / cafe / a / nearby / there',
        correctAnswer: 'Is there a cafe nearby',
        explanationAr: 'صيغة السؤال عن المفرد: Is there a cafe nearby?',
      },
    ],
  },
  {
    id: 'lesson-a1-5-present-continuous',
    level: 'A1',
    order: 4,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التوسع والأنشطة اللحظية',
    chapterTitleEn: 'Unit 3: Ongoing Actions and Daily Life',
    titleAr: 'الدرس 5: المضارع المستمر مقابل البسيط (Now vs Routine)',
    titleEn: 'Lesson 5: Present Continuous vs Present Simple',
    category: 'قواعد وأزمنة (A1)',
    iconName: 'Sparkles',
    estimatedMinutes: 14,
    objectivesAr: [
      'التعبير عما يحدث الآن في لحظة الكلام باستخدام am/is/are + verb-ing.',
      'التفريق الصارم بين الروتين الدائم (Simple) والحدث المؤقت الجاري (Continuous).',
      'معرفة الأفعال التقريرية (Stative Verbs) التي لا تقبل ing.',
    ],
    explanationMarkdownAr: `### المضارع المستمر: كاميرا تلتقط ما يحدث الآن

تكوين المضارع المستمر:
**Subject + (am / is / are) + Verb-ing**

- *I **am studying** English right now.*
- *Look! It **is raining** outside.*
- *They **are working** on a new project this week.*

#### المقارنة الحاسمة: Simple مقابل Continuous:
1. **Present Simple**: روتين، حقيقة عامة، شيء دائم:
   - *I live in Cairo.* (حياتي الدائمة)
   - *He drives a car every day.* (عادة)
2. **Present Continuous**: شيء يحدث الآن أو في هذه الأيام فقط (مؤقت):
   - *I am staying at a hotel this week.* (إقامة مؤقتة)
   - *He is driving right now; he cannot answer.* (في هذه اللحظة)

#### انتبه: الأفعال التقريرية (Stative Verbs):
أفعال المشاعر والإدراك لا تأخذ ing:
- أقول: *I understand you* (وليس *I am understanding you*).
- أقول: *She wants water* (وليس *She is wanting water*).`,
    rulesAndStructuresAr: 'am/is/are + verb-ing للأنشطة الجارية الآن؛ بينما الروتين الدائم يأخذ المضارع البسيط.',
    summaryAr: 'المضارع المستمر بمثابة فيديو مباشر؛ لا تنسَ فعل الكينونة قبل إضافة ing للفعل.',
    arabicContrastPoint: {
      titleAr: 'نسيان فعل الكينونة قبل الفعل المضاف له ing',
      descriptionAr: 'يقع المتعلم العربي في خطأ قول "I studying" دون فعل كينونة رابط، والصواب "I am studying".',
      badArabicHabit: 'I reading a book now.',
      correctEnglishWay: 'I am reading a book now.',
    },
    examples: [
      { en: 'What are you doing at the moment?', ar: 'ماذا تفعل في هذه اللحظة؟', phoneticAr: 'وَات آر يُو دُوِينْج آتْ ذَا مَوْمِنْت' },
      { en: 'We are preparing for the presentation.', ar: 'نحن نجهز للعرض التقديمي الآن.', phoneticAr: 'وِي آر بْرِيبَيْرِينْج فُور ذَا بْرِيزِنْتَيْشَن' },
      { en: 'Listen, someone is knocking on the door.', ar: 'استمع، هناك شخص يطرق الباب.', phoneticAr: 'لِسِن، سَامْوَان إِز نُوكِينْج أُون ذَا دُور' },
    ],
    vocabulary: [
      { word: 'Currently', ipa: '/ˈkɝː.ənt.li/', partOfSpeech: 'adverb', meaningAr: 'حالياً / في الوقت الراهن', exampleEn: 'I am currently reading a new book.', exampleAr: 'أنا أقرأ كتاباً جديداً حالياً.' },
      { word: 'Prepare', ipa: '/prɪˈper/', partOfSpeech: 'verb', meaningAr: 'يجهّز / يستعد', exampleEn: 'They are preparing the meal.', exampleAr: 'إنهم يعدون وجبة الطعام.' },
      { word: 'Improve', ipa: '/ɪmˈpruːv/', partOfSpeech: 'verb', meaningAr: 'يتحسّن / يطوّر', exampleEn: 'My English is improving every day.', exampleAr: 'لغتي الإنجليزية تتحسن كل يوم.' },
    ],
    commonMistakes: [
      { wrong: 'I am live in London.', correct: 'I live in London.', reasonAr: 'السكن الدائم حقيقة دائمة تأخذ المضارع البسيط دون am ودون ing.' },
      { wrong: 'He watching TV now.', correct: 'He is watching TV now.', reasonAr: 'لا يمكن صياغة المضارع المستمر دون فعل الكينونة is قبل الفعل.' },
    ],
    realWorldChallengeAr: 'انظر حولك واكتب جملتين تصف ما يفعله الأشخاص أو ما تفعله أنت الآن.',
    exercises: [
      {
        id: 'a1-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الصحيحة لوصف ما يحدث في هذه اللحظة:',
        instructionEn: 'Choose the sentence describing an action happening right now:',
        question: 'Right now, my colleague ______ an important email.',
        options: [
          'is writing',
          'writes',
          'write',
          'writing',
        ],
        correctAnswer: 0,
        explanationAr: 'كلمة Right now تدل على الاستمرار في لحظة الكلام: is writing.',
      },
      {
        id: 'a1-5-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بالفعل المساعد الناقص:',
        instructionEn: 'Complete with the missing auxiliary:',
        question: 'Why ______ (هل) you laughing?',
        correctAnswer: ['are', 'Are'],
        explanationAr: 'مع الضمير you والفعل laughing في صيغة السؤال المستمر: Why are you laughing?',
      },
      {
        id: 'a1-5-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المعبرة عن التحسن المستمر:',
        instructionEn: 'Unscramble the sentence:',
        question: 'English / is / my / improving / fast',
        correctAnswer: 'My English is improving fast',
        explanationAr: 'ترتيب الجملة: الفاعل My English ثم is ثم الفعل المستمر improving ثم الظرف fast.',
      },
    ],
  },
  {
    id: 'lesson-a1-6-can-modals-and-polite-requests',
    level: 'A1',
    order: 5,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التوسع والأنشطة اللحظية',
    chapterTitleEn: 'Unit 3: Ongoing Actions and Daily Life',
    titleAr: 'الدرس 6: التعبير عن القدرة والطلبات المهذبة (Can & Could)',
    titleEn: 'Lesson 6: Ability and Polite Requests with Can & Could',
    category: 'محادثة ولباقة (A1)',
    iconName: 'MessageSquare',
    estimatedMinutes: 13,
    objectivesAr: [
      'استخدام Can و Cannot للتعبير عما تستطيع أو تعجز عن فعله.',
      'صياغة طلبات فائقة اللباقة باستخدام Could you please... و Can I have...?',
      'معرفة أن الأفعال المساعدة الناقصة تتبع دائماً بفعل مجرد بدون to وبدون s.',
    ],
    explanationMarkdownAr: `### الأفعال الناقصة: Can و Could للقدرة واللباقة

الفعل المساعد **Can** هو رفيقك الأهم في المحادثات اليومية:

#### 1. القدرة والإمكانية (Ability):
- *I **can speak** two languages.*
- *He **cannot (can't) drive** a car yet.*

#### 2. الطلبات والخدمات بلباقة (Polite Requests):
لطلب شيء أو خدمة، ابدأ بـ:
- **Can I have** a cup of coffee, please? (هل يمكنني الحصول على...)
- **Could you** repeat that, please? (صيغة أكثر رسمية ولباقة: هل يمكنك تكرار ذلك؟)

#### القاعدة الحاسمة للأفعال المساعدة (Modal Rule):
الفعل الذي يأتي بعد Can أو Could يكون **مجرداً تماماً** (Bare Infinitive):
- ✅ *I can swim.*
- ❌ *I can to swim.*
- ❌ *He can swims.*`,
    rulesAndStructuresAr: 'Subject + Can/Could + الفعل المجرد بدون to وبدون s. وفي السؤال: Can you help me, please?',
    summaryAr: 'استخدم Could لطلبات أكثر رقياً في المطاعم والمطارات والمكاتب.',
    arabicContrastPoint: {
      titleAr: 'إضافة to أو s بعد Can',
      descriptionAr: 'يقع البعض في خطأ "He can speaks" أو "I can to go"، بينما Can يتبعها الفعل في أبسط صوره دون أي إضافات.',
      badArabicHabit: 'Can you to help me?',
      correctEnglishWay: 'Can you help me?',
    },
    examples: [
      { en: 'Could you please speak a bit slower?', ar: 'هل يمكنك التحدث ببطء أكثر من فضلك؟', phoneticAr: 'كُود يُو بْلِيز سْبِيك أَه بِت سْلُوإِر' },
      { en: 'Can I have the bill, please?', ar: 'هل يمكنني الحصول على الحساب من فضلك؟', phoneticAr: 'كَان آي هَاڤ ذَا بِل بْلِيز' },
      { en: 'I can understand, but I need practice.', ar: 'أستطيع أن أفهم، لكنني بحاجة للممارسة.', phoneticAr: 'آي كَان أَنْدِرْسْتَانْد بَات آي نِيد بْرَاكْتِس' },
    ],
    vocabulary: [
      { word: 'Polite', ipa: '/pəˈlaɪt/', partOfSpeech: 'adjective', meaningAr: 'مهذب / لبق', exampleEn: 'Always be polite when requesting help.', exampleAr: 'كن مهذباً دائماً عند طلب المساعدة.' },
      { word: 'Explain', ipa: '/ɪkˈspleɪn/', partOfSpeech: 'verb', meaningAr: 'يشرح / يوضح', exampleEn: 'Could you explain this rule again?', exampleAr: 'هل يمكنك شرح هذه القاعدة مجدداً؟' },
      { word: 'Assistance', ipa: '/əˈsɪs.təns/', partOfSpeech: 'noun', meaningAr: 'المساعدة والعون', exampleEn: 'Do you need any assistance?', exampleAr: 'هل تحتاج إلى أي مساعدة؟' },
    ],
    commonMistakes: [
      { wrong: 'I can to swim.', correct: 'I can swim.', reasonAr: 'لا نضع حرف الجر to بعد الفعل الناقص can.' },
      { wrong: 'She can plays piano.', correct: 'She can play piano.', reasonAr: 'لا نضيف s إلى الفعل بعد can حتى لو كان الفاعل she.' },
    ],
    realWorldChallengeAr: 'اطلب من نادل في مقهى كوب ماء وفاتورة الحساب بلباقة مستخدماً Could you...',
    exercises: [
      {
        id: 'a1-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة بعد الفعل الناقص can:',
        instructionEn: 'Choose the correct form after the modal verb "can":',
        question: 'He can ______ very clearly in meetings.',
        options: ['speak', 'to speak', 'speaks', 'speaking'],
        correctAnswer: 0,
        explanationAr: 'الفعل بعد can يأتي مجرداً تماماً بدون أي إضافات: speak.',
      },
      {
        id: 'a1-6-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل أداة الطلب المهذب الأكثر رقياً:',
        instructionEn: 'Fill in the polite request modal:',
        question: '______ (هل يمكنك) you please close the window?',
        correctAnswer: ['Could', 'could', 'Can', 'can'],
        explanationAr: 'نستخدم Could أو Can لطلب الخدمة بلباقة.',
      },
      {
        id: 'a1-6-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب طلب فاتورة الحساب في المطعم:',
        instructionEn: 'Unscramble the restaurant request:',
        question: 'the / have / can / please / bill / I',
        correctAnswer: 'Can I have the bill please',
        explanationAr: 'الصيغة الشهيرة: Can I have the bill, please?',
      },
    ],
  },
];
