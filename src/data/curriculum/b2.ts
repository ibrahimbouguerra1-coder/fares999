import type { Lesson } from '../../types/learning.ts';

export const B2_LESSONS: Lesson[] = [
  {
    id: 'lesson-b2-1-passive-voice-professional',
    level: 'B2',
    order: 0,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: الأسلوب المهني والتقارير الرسمية',
    chapterTitleEn: 'Unit 1: Professional Style and Formal Reporting',
    titleAr: 'الدرس 1: المبني للمجهول في السياق المهني والرسمي (Passive Voice)',
    titleEn: 'Lesson 1: Passive Voice in Professional Contexts',
    category: 'قواعد وأسلوب رسمي (B2)',
    iconName: 'ShieldCheck',
    estimatedMinutes: 16,
    objectivesAr: [
      'تحويل التركيز من الفاعل إلى الحدث أو النتيجة في التقارير الإدارية والأكاديمية.',
      'إتقان صياغة المبني للمجهول في مختلف الأزمنة: be + Past Participle.',
      'استخدام الأسلوب الحيادي الموضوعي (It is believed that... / The decision was made...).',
    ],
    explanationMarkdownAr: `### المبني للمجهول: صوت الحياد والموضوعية والاحتراف

في بيئة الأعمال والأبحاث العلمية، الفاعل غالباً ما يكون معلوماً ضمناً أو غير ذي أهمية؛ الأهم هو **النتيجة والحدث نفسه**:

#### القاعدة النحوية الأساسية:
**Object + (فعل الكينونة Be في نفس زمن الجملة) + التصريف الثالث (Past Participle)**

- *المبني للمعلوم*: *The committee approved the budget yesterday.*
- *المبني للمجهول*: *The budget **was approved** yesterday.*

#### المبني للمجهول عبر الأزمنة:
1. **Present Simple**: *Audits **are conducted** annually.*
2. **Present Continuous**: *The software **is being updated** as we speak.*
3. **Present Perfect**: *Over twenty new features **have been integrated**.*
4. **Modals**: *Safety protocols **must be maintained** rigorously.*

#### الصيغة التقريرية الراقية (Impersonal Passive):
- *It is widely recognized that customer retention drives long-term profitability.*
- *The new regulation is expected to come into effect next month.*`,
    rulesAndStructuresAr: 'Be + Past Participle. المبني للمجهول يركز على الفعل والمفعول، ويمنح كتابتك الرسمية وقاراً وموضوعية حيادية.',
    summaryAr: 'استخدم المبني للمجهول عندما ترغب في التركيز على النتيجة وتجنب إلقاء اللوم المباشر على الأفراد.',
    arabicContrastPoint: {
      titleAr: 'نسيان فعل الكينونة be في صياغة المبني للمجهول',
      descriptionAr: 'يقع المتعلم في خطأ قول "The report written yesterday" دون was، بينما الإنجليزية تتطلب فعل كينونة صريحاً: "The report was written yesterday".',
      badArabicHabit: 'The project completed last week.',
      correctEnglishWay: 'The project was completed last week.',
    },
    examples: [
      { en: 'All sensitive transactions are encrypted with enterprise-grade protocols.', ar: 'يتم تشفير كافة المعاملات الحساسة ببروتوكولات مؤسسية فائقة الأمان.', phoneticAr: 'أُول سِنْسِتِيڤ تْرَانْزَاكْشَنز آر إِنْكْرِبْتِد' },
      { en: 'The quarterly financial results will be published on Monday.', ar: 'سيتم نشر النتائج المالية الفصلية يوم الإثنين.', phoneticAr: 'ذَا كْوُورْتَرلِي فَايْنَانْشَال رِيزَالْتس وِل بِي بَابْلِشْد' },
      { en: 'Significant progress has been made toward our sustainability goals.', ar: 'تم إحراز تقدم ملموس وملحوظ نحو أهداف الاستدامة لدينا.', phoneticAr: 'سِغْنِيفِيكَانْت بْرُوغْرِس هَاز بِين مَيْد' },
    ],
    vocabulary: [
      { word: 'Encrypted', ipa: '/ɪnˈkrɪp.tɪd/', partOfSpeech: 'adjective', meaningAr: 'مشفر ومحمي برمجياً', exampleEn: 'User passwords are always encrypted.', exampleAr: 'كلمات مرور المستخدمين مشفرة دائماً.' },
      { word: 'Implement', ipa: '/ˈɪm.plə.ment/', partOfSpeech: 'verb', meaningAr: 'يطبق وينفذ استراتيجية أو حلاً', exampleEn: 'The new policy will be implemented soon.', exampleAr: 'سيتم تطبيق السياسة الجديدة قريباً.' },
      { word: 'Protocol', ipa: '/ˈproʊ.t̬ə.kɑːl/', partOfSpeech: 'noun', meaningAr: 'بروتوكول أو إجراء نظامي معتمد', exampleEn: 'Follow standard safety protocols.', exampleAr: 'اتبع بروتوكولات السلامة القياسية.' },
    ],
    commonMistakes: [
      { wrong: 'The email was send this morning.', correct: 'The email was sent this morning.', reasonAr: 'المبني للمجهول يتطلب دائماً التصريف الثالث (sent وليس send).' },
      { wrong: 'The system is update right now.', correct: 'The system is being updated right now.', reasonAr: 'المبني للمجهول في المضارع المستمر يحتاج is being updated.' },
    ],
    realWorldChallengeAr: 'أعد صياغة هذه الجملة إلى المبني للمجهول المهني: We signed the agreement yesterday.',
    exercises: [
      {
        id: 'b2-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصياغة الصحيحة للمبني للمجهول التام:',
        instructionEn: 'Choose the correct present perfect passive form:',
        question: 'All technical deliverables ______ successfully by the engineering team.',
        options: [
          'have been verified',
          'have verified',
          'were verifying',
          'are verify',
        ],
        correctAnswer: 0,
        explanationAr: 'صيغة المضارع التام في المبني للمجهول هي have been + Past Participle.',
      },
      {
        id: 'b2-1-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل فعل الكينونة المناسب للماضي المجهول مع الفاعل الجمع:',
        instructionEn: 'Fill in the past passive auxiliary for plural:',
        question: 'The final contract terms ______ (تمت) agreed upon by both delegations.',
        correctAnswer: ['were', 'Were'],
        explanationAr: 'مع الاسم الجمع (terms) نستخدم were agreed upon.',
      },
      {
        id: 'b2-1-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المبنية للمجهول الرسمية:',
        instructionEn: 'Unscramble the formal passive sentence:',
        question: 'was / the / approved / proposal / yesterday',
        correctAnswer: 'The proposal was approved yesterday',
        explanationAr: 'ترتيب الجملة: The proposal was approved yesterday.',
      },
    ],
  },
  {
    id: 'lesson-b2-2-third-and-mixed-conditionals',
    level: 'B2',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: الأسلوب المهني والتقارير الرسمية',
    chapterTitleEn: 'Unit 1: Professional Style and Formal Reporting',
    titleAr: 'الدرس 2: الشرطية الثالثة والندم على الماضي (Third & Mixed Conditionals)',
    titleEn: 'Lesson 2: Third and Mixed Conditionals',
    category: 'قواعد متقدمة (B2)',
    iconName: 'Compass',
    estimatedMinutes: 16,
    objectivesAr: [
      'التعبير عن الندم وتحليل الماضي الافتراضي المستحيل تغييره.',
      'إتقان بنية الحالة الثالثة: If + had + P.P., ... would have + P.P.',
      'فهم الشرط المختلط (Mixed Conditional): شرط في الماضي وأثره مستمر في الحاضر.',
    ],
    explanationMarkdownAr: `### الحالة الشرطية الثالثة: تحليل ما كان يمكن أن يكون

نستخدم الحالة الثالثة (Third Conditional) لمناقشة **أحداث في الماضي انتهت ولم تحدث**، وتخيل السيناريو البديل (غالباً للتعبير عن الندم، العتاب، أو تحليل الأخطاء):

#### التركيب النحوي:
**If + الماضي التام (had + P.P.), ... would have + التصريف الثالث (P.P.)**

- *If we **had left** earlier, we **would have caught** the express train.*
  (في الواقع: لم نغادر باكراً، وبالتالي فاتنا القطار).
- *If she **had prepared** thoroughly, she **would have aced** the interview.*
  (في الواقع: لم تجهز كما ينبغي، ولم تجتز المقابلة بتفوق).

#### الشرط المختلط (Mixed Conditional) للربط بالحاضر:
إذا كان الحدث المفترض في الماضي، ولكن نتيجته ما زالت تنعكس على **وضعنا الحاضر الآن**:
- **If + had + P.P. (ماضٍ), ... would + infinitive (الآن)**:
  - *If I **had taken** that coding course two years ago, I **would be** a senior developer today.*
  - (لو كنت درست تلك الدورة في الماضي، لكنت اليوم في الحاضر مطوراً متقدماً).`,
    rulesAndStructuresAr: 'الحالة الثالثة: If + had + P.P., ... would have + P.P. والشرط المختلط يربط سبباً في الماضي بنتيجة حاضرة الآن.',
    summaryAr: 'الحالة الثالثة هي آلة زمن لغوية لمراجعة الماضي واستخلاص الدروس من القرارات السابقة.',
    arabicContrastPoint: {
      titleAr: 'وضع would have في شق if الشرطي',
      descriptionAr: 'يقع المتعلم في خطأ وضع would have بعد if مباشرة (If I would have known)، والصواب الحتمي هو had + P.P. في شق الشرط.',
      badArabicHabit: 'If I would have known the truth, I would have told you.',
      correctEnglishWay: 'If I had known the truth, I would have told you.',
    },
    examples: [
      { en: 'If they had validated the market demand, they would not have suffered heavy losses.', ar: 'لو أنهم تحققوا من حجم طلب السوق مسبقاً، لما تكبدوا خسائر فادحة.', phoneticAr: 'إِف ذَاي هَاد ڤَالِيدَيْتِد ذَا مَارْكِت دِيمَانْد' },
      { en: 'Had we known about the storm, we would have postponed the flight.', ar: 'لو علمنا بأمر العاصفة، لكنا أجلنا الرحلة الجوية (أسلوب تقديم فصيح).', phoneticAr: 'هَاد وِي نُون أَبَاوت ذَا سْتُورْم' },
      { en: 'If I had learned to code in college, my current role would be much easier.', ar: 'لو أنني تعلمت البرمجة في الجامعة، لكانت وظيفتي الحالية أيسر بكثير.', phoneticAr: 'إِف آي هَاد لِيرْند تُو كُود إِن كُولِيج' },
    ],
    vocabulary: [
      { word: 'Validate', ipa: '/ˈvæl.ə.deɪt/', partOfSpeech: 'verb', meaningAr: 'يتحقق من صحة وجدوى الشيء مسبقاً', exampleEn: 'Always validate your hypotheses before execution.', exampleAr: 'تحقق دائماً من فرضياتك قبل الشروع في التنفيذ.' },
      { word: 'Regret', ipa: '/rɪˈɡret/', partOfSpeech: 'noun', meaningAr: 'الندم والأسف على ما فات', exampleEn: 'Live with purpose and minimal regret.', exampleAr: 'عش حياتك بغاية واضحة وبأقل قدر من الندم.' },
      { word: 'Foreseeable', ipa: '/fɔːrˈsiː.ə.bəl/', partOfSpeech: 'adjective', meaningAr: 'يمكن توقعه واستشرافه مسبقاً', exampleEn: 'This crisis was entirely foreseeable.', exampleAr: 'كانت هذه الأزمة متوقعة تماماً.' },
    ],
    commonMistakes: [
      { wrong: 'If I would have seen you, I would have stopped.', correct: 'If I had seen you, I would have stopped.', reasonAr: 'لا نضع would have بعد if أبداً؛ بل نستخدم الماضي التام had seen.' },
      { wrong: 'If he had studied, he passed the test.', correct: 'If he had studied, he would have passed the test.', reasonAr: 'طرف النتيجة في الحالة الثالثة يستلزم would have passed.' },
    ],
    realWorldChallengeAr: 'اكتب جملة شرطية ثالثة عن فرصة أو قرار ماضٍ تتأمل في نتيجته البديلة لو تصرفت بطريقة أخرى.',
    exercises: [
      {
        id: 'b2-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة لشق الشرط في الحالة الثالثة:',
        instructionEn: 'Choose the correct if-clause form for third conditional:',
        question: 'If our team ______ the warning signs early, we would have avoided the delay.',
        options: ['had spotted', 'would spot', 'spotted', 'has spotted'],
        correctAnswer: 0,
        explanationAr: 'شق if في الحالة الشرطية الثالثة يأخذ الماضي التام had + P.P.: had spotted.',
      },
      {
        id: 'b2-2-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل فعل النتيجة في الحالة الثالثة (would have ...):',
        instructionEn: 'Fill in the third conditional result verb:',
        question: 'If you had consulted me, I would have ______ (ساعدتك) you gladly.',
        correctAnswer: ['helped', 'Helped'],
        explanationAr: 'التركيب هو would have + التصريف الثالث: would have helped.',
      },
      {
        id: 'b2-2-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الشرطية الثالثة بدقة:',
        instructionEn: 'Unscramble the third conditional sentence:',
        question: 'would / succeeded / had / have / they / listened / they / if',
        correctAnswer: 'If they had listened they would have succeeded',
        explanationAr: 'ترتيب الجملة: If they had listened, they would have succeeded.',
      },
    ],
  },
  {
    id: 'lesson-b2-3-past-modals-of-deduction',
    level: 'B2',
    order: 2,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: التحليل المنطقي والشكوك',
    chapterTitleEn: 'Unit 2: Analytical Reasoning and Nuance',
    titleAr: 'الدرس 3: أفعال الاستنتاج واللوم في الماضي (Past Modals)',
    titleEn: 'Lesson 3: Past Modals: Must Have, Couldn\'t Have, Should Have',
    category: 'قواعد واستدلال (B2)',
    iconName: 'Award',
    estimatedMinutes: 16,
    objectivesAr: [
      'الاستنتاج المؤكد لما حدث في الماضي باستخدام must have + P.P.',
      'التعبير عن الاستحالة في الماضي باستخدام couldn\'t have / can\'t have + P.P.',
      'التعبير عن اللوم والنقد البناء لما كان ينبغي فعله باستخدام should have + P.P.',
    ],
    explanationMarkdownAr: `### الاستنتاج واللوم في الماضي: التفكير النقدي بالإنجليزية

عندما تنظر في أدلة حدث ماضٍ وتستنتج ما جرى:

#### 1. اليقين الإيجابي الماضي: **Must have + P.P.**
- *The streets are completely soaked. It **must have rained** during the night.*
  (الشوارع غارقة في المياه، لا شك أنها أمطرت ليلاً!).
- *He arrived smiling ear to ear; he **must have received** the promotion.*

#### 2. الاستحالة المطلقة في الماضي: **Couldn\'t have / Can\'t have + P.P.**
- *He **couldn\'t have stolen** the car; he was live on national television at that exact hour.*
  (مستحيل أن يكون قد سرق السيارة؛ فقد كان يظهر في بث تلفزيوني مباشر في تلك الساعة تحديداً!).

#### 3. اللوم والنصيحة المتأخرة: **Should have + P.P.**
- *You **should have backed up** your database before running the migration.*
  (كان ينبغي عليك أن تأخذ نسخة احتياطية قبل الترحيل البرمجي - لكنك للأسف لم تفعل!).
- *We **shouldn\'t have rushed** into signing without reading the fine print.*`,
    rulesAndStructuresAr: 'Modal + have + Past Participle: Must have للتأكيد الاستنتاجي، Couldn\'t have للاستحالة، و Should have للنقد واللوم المتأخر.',
    summaryAr: 'استخدم should have لتقييم الأداء والتعلم من الأخطاء دون تجريح.',
    arabicContrastPoint: {
      titleAr: 'استخدام must had أو should had للماضي',
      descriptionAr: 'يقع البعض في خطأ وضع had بعد الأفعال الناقصة (must had)، والصواب دائماً هو مصدر have الثابت: must have done و should have done.',
      badArabicHabit: 'You should had called me.',
      correctEnglishWay: 'You should have called me.',
    },
    examples: [
      { en: 'The auditors found no discrepancies; the accountants must have been meticulous.', ar: 'لم يجد المدققون أي تناقضات؛ لا بد أن المحاسبين كانوا في غاية الدقة والإتقان.', phoneticAr: 'ذِي أُودِيتُورز فَاونْد نُو دِسْكْرِيبَانْسِيز' },
      { en: 'She couldn\'t have known about the confidential decision beforehand.', ar: 'يستحيل أن تكون قد علمت بالقرار السري مسبقاً.', phoneticAr: 'شِي كُودَنْت هَاڤ نُون أَبَاوت ذَا دِسِيژَن' },
      { en: 'We should have thoroughly stress-tested the servers prior to the Black Friday rush.', ar: 'كان يتعين علينا إجراء اختبارات ضغط مكثفة للخوادم قبل ذروة الجمعة البيضاء.', phoneticAr: 'وِي شُود هَاڤ ثَرُولِي سْتْرِس تِسْتِد ذَا سِيرْڤِرز' },
    ],
    vocabulary: [
      { word: 'Meticulous', ipa: '/məˈtɪk.jə.ləs/', partOfSpeech: 'adjective', meaningAr: 'فائق الدقة والعناية بأدق التفاصيل', exampleEn: 'Her meticulous research impressed the board.', exampleAr: 'أبحاثها فائقة الدقة نالت إعجاب مجلس الإدارة.' },
      { word: 'Discrepancy', ipa: '/dɪˈskrep.ən.si/', partOfSpeech: 'noun', meaningAr: 'تناقض أو تضارب بين معلومتين', exampleEn: 'There is a slight discrepancy in the figures.', exampleAr: 'يوجد تناقض طفيف في الأرقام.' },
      { word: 'Confidential', ipa: '/ˌkɑːn.fəˈden.ʃəl/', partOfSpeech: 'adjective', meaningAr: 'سري وخاص للغاية', exampleEn: 'Treat all customer records as strictly confidential.', exampleAr: 'عامل جميع سجلات العملاء بسرية تامة.' },
    ],
    commonMistakes: [
      { wrong: 'You should have tell me.', correct: 'You should have told me.', reasonAr: 'بعد have يجب وضع التصريف الثالث told وليس المصدر tell.' },
      { wrong: 'He must have had left early.', correct: 'He must have left early.', reasonAr: 'لا تكرر had مع have؛ التركيب هو must have + P.P.' },
    ],
    realWorldChallengeAr: 'اكتب موقفاً كان يجب أن تتصرف فيه بشكل أفضل مستخدماً I should have + P.P.',
    exercises: [
      {
        id: 'b2-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة المعبرة عن النقد واللوم لما كان ينبغي فعله:',
        instructionEn: 'Choose the modal expressing past regret / criticism:',
        question: 'You ______ the emergency brakes the instant you saw the warning light.',
        options: ['should have pulled', 'must pulled', 'should pull', 'must have pulling'],
        correctAnswer: 0,
        explanationAr: 'اللوم لما كان ينبغي فعله في الماضي يعبر عنه بـ should have + P.P.',
      },
      {
        id: 'b2-3-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل فعل الاستنتاج الماضي الدال على الاستحالة التامة:',
        instructionEn: 'Fill in the past impossibility modal:',
        question: 'He ______ (يستحيل أن يكون قد) have committed the error; he was away on approved leave.',
        correctAnswer: ["couldn't", "can't", "could not"],
        explanationAr: 'الاستحالة في الماضي: couldn\'t have done.',
      },
      {
        id: 'b2-3-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الاستنتاجية المؤكدة:',
        instructionEn: 'Unscramble the past deduction sentence:',
        question: 'received / have / must / they / news / the',
        correctAnswer: 'They must have received the news',
        explanationAr: 'ترتيب الجملة: They must have received the news.',
      },
    ],
  },
  {
    id: 'lesson-b2-4-reported-speech-indirect-questions',
    level: 'B2',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: التحليل المنطقي والشكوك',
    chapterTitleEn: 'Unit 2: Analytical Reasoning and Nuance',
    titleAr: 'الدرس 4: الكلام المنقول والأسئلة غير المباشرة (Reported Speech)',
    titleEn: 'Lesson 4: Reported Speech and Diplomatic Indirect Questions',
    category: 'محادثة ودبلوماسية (B2)',
    iconName: 'MessageSquare',
    estimatedMinutes: 16,
    objectivesAr: [
      'نقل كلام وتصريحات الآخرين بمهنية ودقة مع إرجاع زمن الفعل خطوة للماضي (Backshift).',
      'استخدام أفعال النقل الراقية: admit, explain, emphasize, inquire, suggest.',
      'طرح أسئلة غير مباشرة وفائقة اللباقة والدبلوماسية في الاجتماعات والمفاوضات.',
    ],
    explanationMarkdownAr: `### الكلام المنقول والأسئلة غير المباشرة: أدب الحوار المهني

#### 1. الكلام المنقول (Reported Speech):
عندما تنقل ما قاله شخص في الماضي، يرجع زمن الفعل خطوة إلى الوراء (Backshift):
- المضارع البسيط -> ماضٍ بسيط:
  - *Direct*: "I **need** the revised figures."
  - *Reported*: *He said that he **needed** the revised figures.*
- المضارع التام -> ماضٍ تام:
  - *Direct*: "We **have finished** the prototype."
  - *Reported*: *They informed us that they **had finished** the prototype.*
- will -> would / can -> could:
  - *Direct*: "I **will call** you." -> *She promised she **would call** me.*

#### أفعال النقل البلاغية الراقية بدلاً من Said:
- **Clarified**: أوضح (*The manager clarified that the timeline was flexible.*)
- **Emphasized**: شدد وأكد (*She emphasized the importance of data privacy.*)
- **Suggested**: اقترح (*He suggested holding a retrospective meeting.*)

#### 2. الأسئلة غير المباشرة الدبلوماسية (Indirect Questions):
بدلاً من السؤال الفظ المباشر: *Where is the CEO?*
استخدم مقدمة مهذبة، **ويعود ترتيب السؤال إلى ترتيب جملة خبرية عادية** (الفاعل ثم الفعل):
- ✅ *Could you tell me **where the CEO is**?* (وليس *where is the CEO*)
- ✅ *Do you happen to know **what time the seminar starts**?*`,
    rulesAndStructuresAr: 'الكلام المنقول يرجع بالزمن خطوة للوراء؛ والسؤال غير المباشر يلغي تقديم الفعل المساعد ويعود لترتيب الجملة الخبرية: الفاعل ثم الفعل.',
    summaryAr: 'الأسئلة غير المباشرة هي العلامة المميزة للمتحدث الإنجليزي المحترف والدبلوماسي.',
    arabicContrastPoint: {
      titleAr: 'الاحتفاظ بترتيب السؤال المباشر داخل السؤال غير المباشر',
      descriptionAr: 'يقع الكثير في خطأ قول "Could you tell me where is the office?" بتقديم is، بينما الصواب تقديم الفاعل: "where the office is".',
      badArabicHabit: 'Can you tell me how much does this cost?',
      correctEnglishWay: 'Can you tell me how much this costs?',
    },
    examples: [
      { en: 'She inquired whether we were available for a strategy alignment call.', ar: 'استفسرت عما إذا كنا متاحين لمكالمة موائمة استراتيجية.', phoneticAr: 'شِي إِنْكْوَايَرْد وِذِر وِي وِير أَڤَيْلَابِل' },
      { en: 'I was wondering if you could elaborate on your pricing model.', ar: 'كنت أتساءل عما إذا كان بإمكانك التوسع والتفصيل في نموذج التسعير الخاص بكم.', phoneticAr: 'آي وَاز وَانْدَرِينْج إِف يُو كُود إِلَابُورَيْت' },
      { en: 'The auditor stated that all compliance benchmarks had been surpassed.', ar: 'صرّح المدقق بأن كافة معايير الامتثال التنظيمي قد تم تجاوزها بنجاح.', phoneticAr: 'ذِي أُودِيتُور سْتَيْتِد ذَات أُول كُومْبْلَايَانْس' },
    ],
    vocabulary: [
      { word: 'Inquire', ipa: '/ɪnˈkwaɪr/', partOfSpeech: 'verb', meaningAr: 'يستفسر رسمياً وبلباقة', exampleEn: 'May I inquire about the project timeline?', exampleAr: 'هل لي أن أستفسر عن الجدول الزمني للمشروع؟' },
      { word: 'Elaborate', ipa: '/iˈlæb.ə.reɪt/', partOfSpeech: 'verb', meaningAr: 'يفصل ويتوسع في الشرح', exampleEn: 'Could you elaborate on that particular point?', exampleAr: 'هل يمكنك الاستفاضة في تلك النقطة تحديداً؟' },
      { word: 'Compliance', ipa: '/kəmˈplaɪ.əns/', partOfSpeech: 'noun', meaningAr: 'الامتثال للأنظمة والمعايير', exampleEn: 'Ensuring regulatory compliance is non-negotiable.', exampleAr: 'ضمان الامتثال التنظيمي أمر غير قابل للتفاوض.' },
    ],
    commonMistakes: [
      { wrong: 'Could you tell me what is your name?', correct: 'Could you tell me what your name is?', reasonAr: 'في السؤال غير المباشر يأتي الفاعل (your name) قبل فعل الكينونة (is).' },
      { wrong: 'He said me that he was tired.', correct: 'He told me that he was tired / He said that he was tired.', reasonAr: 'الفعل said لا يأخذ مفعولاً مباشراً دون to؛ استخدم told me أو said that.' },
    ],
    realWorldChallengeAr: 'حوّل هذا السؤال المباشر إلى سؤال غير مباشر فائق اللباقة: When will the decision be made?',
    exercises: [
      {
        id: 'b2-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الترتيب الصحيح للسؤال غير المباشر الدبلوماسي:',
        instructionEn: 'Identify the grammatically correct indirect question:',
        question: 'Which question is properly formulated?',
        options: [
          'Could you tell me what time the flight departs?',
          'Could you tell me what time does the flight depart?',
          'Could you tell me what time departs the flight?',
          'Could you tell me what time is departing the flight?',
        ],
        correctAnswer: 0,
        explanationAr: 'في السؤال غير المباشر نلغي فعل المساعدة do/does ويعود الترتيب: الفاعل (the flight) ثم الفعل (departs).',
      },
      {
        id: 'b2-4-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل فعل النقل الماضي للضمير will (يتحول إلى ...):',
        instructionEn: 'Convert "will" to its reported past form:',
        question: 'She confirmed that she ______ (سوف) attend the symposium.',
        correctAnswer: ['would', 'Would'],
        explanationAr: 'في الكلام المنقول يتحول will إلى would.',
      },
      {
        id: 'b2-4-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب السؤال غير المباشر الدبلوماسي:',
        instructionEn: 'Unscramble the polite indirect question:',
        question: 'wondering / was / if / could / you / I / help',
        correctAnswer: 'I was wondering if you could help',
        explanationAr: 'ترتيب العبارة الدبلوماسية: I was wondering if you could help.',
      },
    ],
  },
  {
    id: 'lesson-b2-5-discourse-markers-cohesion',
    level: 'B2',
    order: 4,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التماسك النصي والمفردات المؤثرة',
    chapterTitleEn: 'Unit 3: Textual Cohesion and High-Impact Vocabulary',
    titleAr: 'الدرس 5: أدوات الربط والتماسك النصي (Discourse Markers)',
    titleEn: 'Lesson 5: Discourse Markers and Cohesive Devices',
    category: 'كتابة وأسلوب (B2)',
    iconName: 'Layers',
    estimatedMinutes: 15,
    objectivesAr: [
      'ربط الفقرات والأفكار بسلاسة بلاغية عالية في المقالات ورسائل البريد الرسمية.',
      'التعبير عن التناقض والاستدراك ببراعة: However, Nevertheless, On the contrary.',
      'التعبير عن النتيجة والتعليل المنطقي: Furthermore, Consequently, In light of this.',
    ],
    explanationMarkdownAr: `### أدوات الربط: المهندسون المعماريون للنص الاحترافي

الكاتب المبتدئ يكرر كلمات بدائية مثل: *and, but, so, because*.
أما في مستوى **B2**، فأنت توظف أدوات الربط الرسمية (Discourse Markers) لإرشاد القارئ عبر تسلسل منطقي محكم:

#### 1. إضافة معلومة داعمة (Addition):
- **Furthermore / Moreover**: علاوة على ذلك (*Furthermore, the initial results exceeded expectations.*)
- **In addition to this**: بالإضافة إلى هذا.

#### 2. التناقض والمقابلة الذكية (Contrast & Concession):
- **However**: ومع ذلك (تأتي في بداية الجملة متبوعة بفاصلة comma):
  - *The timeline is aggressive. **However**, our team is fully equipped to meet it.*
- **Nevertheless / Nonetheless**: على الرغم من ذلك:
  - *The market is volatile; **nevertheless**, our core fundamentals remain robust.*
- **Whereas / While**: بينما (للمقارنة المباشرة):
  - *Domestic sales surged, **whereas** exports experienced a mild decline.*

#### 3. النتيجة والأثر المترتب (Cause & Result):
- **Consequently / As a result**: ونتيجة لذلك:
  - *We automated the pipeline; **consequently**, errors dropped by 80%.*
- **Therefore**: لذلك وبناءً عليه.`,
    rulesAndStructuresAr: 'أدوات الربط (However, Furthermore, Consequently) تبدأ الجملة متبوعة بفاصلة comma وتربط الأفكار بموضوعية.',
    summaryAr: 'تنسيق الروابط هو الفارق الحاسم بين النص المتناثر والنص الاحترافي المتماسك.',
    arabicContrastPoint: {
      titleAr: 'وضع But في بداية كل جملة رسمية',
      descriptionAr: 'يفرط المتعلم في بدء جمله الرسمية بـ But أو And، بينما الأسلوب المهني الرفيع يفضل استخدام However أو Furthermore في بدايات الجمل.',
      badArabicHabit: 'But we need to consider the cost.',
      correctEnglishWay: 'However, we must consider the financial implications.',
    },
    examples: [
      { en: 'The initial investment is considerable; however, the long-term ROI is exceptionally promising.', ar: 'الاستثمار الأولي ضخم؛ ومع ذلك، فإن العائد على الاستثمار طويل الأجل واعد للغاية.', phoneticAr: 'ذِي إِنِيشَال إِنْڤِسْتْمِنت إِز كُونْسِيدِرَابِل' },
      { en: 'Furthermore, user feedback indicated a 95% satisfaction rate across all demographics.', ar: 'علاوة على ذلك، أشارت آراء المستخدمين إلى نسبة رضا بلغت 95% عبر كافة الشرائح.', phoneticAr: 'فِيرْذِرمُور، يُوزِر فِيدْبَاك إِنْدِيكَيْتِد' },
      { en: 'Consequently, the board unanimously voted to accelerate the international expansion.', ar: 'ونتيجة لذلك، صوّت مجلس الإدارة بالإجماع على تسريع وتيرة التوسع الدولي.', phoneticAr: 'كُونْسِيكْوِينْتْلِي، ذَا بُورْد يُونَانِمَسْلِي ڤُوتِد' },
    ],
    vocabulary: [
      { word: 'Furthermore', ipa: '/ˌfɝː.ðɚˈmɔːr/', partOfSpeech: 'adverb', meaningAr: 'علاوة على ذلك / فضلاً عن ذلك', exampleEn: 'Furthermore, the data corroborates our thesis.', exampleAr: 'علاوة على ذلك، تدعم البيانات أطروحتنا بقوة.' },
      { word: 'Consequently', ipa: '/ˈkɑːn.sə.kwənt.li/', partOfSpeech: 'adverb', meaningAr: 'وبناءً على ذلك / ونتيجة لذلك', exampleEn: 'He resigned; consequently, a search began.', exampleAr: 'استقال، ونتيجة لذلك بدأت رحلة البحث عن بديل.' },
      { word: 'Robust', ipa: '/roʊˈbʌst/', partOfSpeech: 'adjective', meaningAr: 'متين وراسخ وقوي البنية', exampleEn: 'We designed a robust security architecture.', exampleAr: 'صممنا معمارية أمنية متينة وراسخة.' },
    ],
    commonMistakes: [
      { wrong: 'Although it rained, but we went out.', correct: 'Although it rained, we went out.', reasonAr: 'لا تجمع بين although و but في جملة واحدة؛ إحداهما تغني عن الأخرى.' },
      { wrong: 'However it was hard, we succeeded.', correct: 'Although it was hard, we succeeded / It was hard; however, we succeeded.', reasonAr: 'كلمة However لا تربط جملتين كأداة وصل تابعة مباشرة بدون علامات ترقيم مناسبة.' },
    ],
    realWorldChallengeAr: 'اكتب جملتين مترابطتين تعرض فيهما تحدياً واجهك ثم الحل باستخدام however.',
    exercises: [
      {
        id: 'b2-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر أداة الربط الدالة على التناقض والاستدراك المناسبة لبداية الجملة:',
        instructionEn: 'Choose the appropriate contrast transition word:',
        question: 'The task appeared daunting at first. ______, consistent daily practice yielded remarkable progress.',
        options: ['However', 'Furthermore', 'Consequently', 'Because'],
        correctAnswer: 0,
        explanationAr: 'كلمة However تفيد الاستدراك والمقابلة بين صعوبة البداية والنجاح اللاحق.',
      },
      {
        id: 'b2-5-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بأداة الربط المعبرة عن إضافة فكرة داعمة جديدة (Furthermore / ...):',
        instructionEn: 'Fill in the transition for adding an idea:',
        question: 'The software is exceptionally fast. ______ (علاوة على ذلك), it offers unmatched security.',
        correctAnswer: ['Furthermore', 'Moreover', 'furthermore', 'moreover'],
        explanationAr: 'نستخدم Furthermore أو Moreover لإضافة حجة أو ميزة جديدة.',
      },
      {
        id: 'b2-5-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة التقريرية المتماسكة بأداة النتيجة:',
        instructionEn: 'Unscramble the cohesive sentence:',
        question: 'we / succeeded / consequently / goals / our / reached / and',
        correctAnswer: 'Consequently we reached our goals and succeeded',
        explanationAr: 'ترتيب الجملة: Consequently, we reached our goals and succeeded.',
      },
    ],
  },
  {
    id: 'lesson-b2-6-collocations-and-false-friends',
    level: 'B2',
    order: 5,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التماسك النصي والمفردات المؤثرة',
    chapterTitleEn: 'Unit 3: Textual Cohesion and High-Impact Vocabulary',
    titleAr: 'الدرس 6: المتلازمات اللفظية وتجنب الأصدقاء المزيفين (Collocations & False Friends)',
    titleEn: 'Lesson 6: Advanced Collocations and Eliminating False Friends',
    category: 'مفردات ودقة (B2)',
    iconName: 'Target',
    estimatedMinutes: 16,
    objectivesAr: [
      'التحدث بمتلازمات طبيعية (Natural Collocations) بدلاً من الترجمة الحرفية الضعيفة.',
      'التفريق بين Make و Do (make a decision vs do business).',
      'الحذر من "الأصدقاء المزيفين" (False Friends) والكلمات المضللة صوتياً أو دلالياً.',
    ],
    explanationMarkdownAr: `### المتلازمات اللفظية: الفرق بين الإنجليزية الركيكة والإنجليزية الأصيلة

المتلازمة اللفظية (Collocation) هي اقتران كلمتين معاً بشكل عفوي طبيعي في أذن المتحدث الأصلي:

#### المعركة الكبرى: Make مقابل Do:
1. **DO**: للأعمال والمهام غير الملموسة والواجبات:
   - *Do business, do your best, do research, do homework, do a favor.*
2. **MAKE**: للإنشاء والصناعة والقرارات والتأثير:
   - *Make a decision, make a mistake, make an effort, make a profit, make progress.*
   - ❌ لا تقل: *I will make business with them.*
   - ✅ بل قل: *I will **do business** with them.*

#### متلازمات صفات وأسماء فائقة الأناقة:
- *Heavy rain* (وليس *strong rain*)
- *Vivid imagination* (خيال خصب وجلي)
- *In-depth analysis* (تحليل متعمق ومستفيض)
- *Cast a shadow* (يلقي بظلاله)

#### ⚠️ الأصدقاء المزيفون (False Friends):
- **Actually**: لا تعني "حالياً"؛ بل تعني **"في الواقع / في الحقيقة"** (حالياً = *currently*).
- **Eventual**: لا تعني "محتمل"؛ بل تعني **"النهائي بعد مسار طويل"** (*the eventual winner*).
- **Sensible**: لا تعني "حساس مشاعرياً"؛ بل تعني **"حكيم وعقلاني"** (حساس = *sensitive*).`,
    rulesAndStructuresAr: 'تعلم الكلمات في أزواج متلازمة (Adjective + Noun / Verb + Noun). لا تترجم حرفياً من العربية.',
    summaryAr: 'المتلازمات اللفظية الصحيحة تمنحك إيقاعاً لغوياً نموذجياً يماثل المتحدث الأصلي.',
    arabicContrastPoint: {
      titleAr: 'الترجمة الحرفية للفعل "يعمل / يفعل"',
      descriptionAr: 'يستخدم المتعلم العربي كلمة do لكل شيء بالترجمة الحرفية لـ "يفعل"، فيقول "do a mistake" والصواب الحتمي "make a mistake".',
      badArabicHabit: 'I did a big mistake.',
      correctEnglishWay: 'I made a big mistake.',
    },
    examples: [
      { en: 'We conducted an in-depth analysis before making a strategic decision.', ar: 'أجرينا تحليلاً متعمقاً ومستفيضاً قبل اتخاذ قرار استراتيجي.', phoneticAr: 'وِي كُونْدَاكْتِد آن إِن دِبْث أَنَالِسِس' },
      { en: 'Her sensible approach to risk management averted a financial catastrophe.', ar: 'نهجها العقلاني الحكيم في إدارة المخاطر درأ كارثة مالية محققة.', phoneticAr: 'هِير سِنْسِبِل أَبْرُوتش تُو رِسْك مَانَاجْمِنت' },
      { en: 'Consistent effort makes a substantial difference in language retention.', ar: 'الجهد المنتظم المستمر يحدث فارقاً جوهرياً وملموساً في ترسيخ اللغة.', phoneticAr: 'كُونْسِيسْتِنت إِفُورْت مَيْكس أَه سَابْسْتَانْشَال دِفْرِنْس' },
    ],
    vocabulary: [
      { word: 'Substantial', ipa: '/səbˈstæn.ʃəl/', partOfSpeech: 'adjective', meaningAr: 'جوهري وملموس وذو حجم كبير', exampleEn: 'The team made substantial progress this quarter.', exampleAr: 'حقق الفريق تقدماً جوهرياً هذا الربع.' },
      { word: 'Sensible', ipa: '/ˈsen.sə.bəl/', partOfSpeech: 'adjective', meaningAr: 'حكيم وعقلاني ورشيد', exampleEn: 'Saving for contingencies is a sensible decision.', exampleAr: 'الادخار للطوارئ قرار عقلاني حكيم.' },
      { word: 'In-depth', ipa: '/ˌɪnˈdepθ/', partOfSpeech: 'adjective', meaningAr: 'متعمق وشامل ودقيق', exampleEn: 'Read our in-depth evaluation of the proposal.', exampleAr: 'اقرأ تقييمنا المتعمق والمستفيض للمقترح.' },
    ],
    commonMistakes: [
      { wrong: 'I made research about this topic.', correct: 'I did research / conducted research about this topic.', reasonAr: 'البحث العلمي يقترن بـ do research أو conduct research وليس make.' },
      { wrong: 'He is very sensible, he cries easily.', correct: 'He is very sensitive, he cries easily.', reasonAr: 'سريع البكاء والشعور هو sensitive؛ أما sensible فتعني رشيد وعاقل.' },
    ],
    realWorldChallengeAr: 'اكتب جملة تستخدم فيها متلازمة Make a decision ومتلازمة In-depth analysis.',
    exercises: [
      {
        id: 'b2-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الفعل المتلازم الصحيح مع a mistake:',
        instructionEn: 'Choose the correct verb collocated with "a mistake":',
        question: 'Everyone ______ mistakes; the key is learning from them immediately.',
        options: ['makes', 'does', 'creates', 'executes'],
        correctAnswer: 0,
        explanationAr: 'المتلازمة اللفظية الصحيحة هي make a mistake.',
      },
      {
        id: 'b2-6-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بالصفة الصحيحة التي تعني "عقلاني ورشيد" (Sensible وليس Sensitive):',
        instructionEn: 'Fill in the word meaning "rational and wise":',
        question: 'Investing in diverse assets is a highly ______ (عقلاني ورشيد) strategy.',
        correctAnswer: ['sensible', 'Sensible'],
        explanationAr: 'كلمة sensible تعني عقلاني وحكيم.',
      },
      {
        id: 'b2-6-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المحتوية على متلازمة do business:',
        instructionEn: 'Unscramble the collocation sentence:',
        question: 'proud / we / to / do / are / with / you / business',
        correctAnswer: 'We are proud to do business with you',
        explanationAr: 'ترتيب الجملة: We are proud to do business with you.',
      },
    ],
  },
];
