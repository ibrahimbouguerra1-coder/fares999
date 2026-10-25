import type { Lesson } from '../../types/learning.ts';

export const B1_LESSONS: Lesson[] = [
  {
    id: 'lesson-b1-1-present-perfect-life-experiences',
    level: 'B1',
    order: 0,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: تجارب الحياة والمواقف غير المنتهية',
    chapterTitleEn: 'Unit 1: Life Experiences and Unfinished Time',
    titleAr: 'الدرس 1: المضارع التام (Present Perfect) والخبرات الحياتية',
    titleEn: 'Lesson 1: Present Perfect and Life Experiences',
    category: 'قواعد وأزمنة (B1)',
    iconName: 'Sparkles',
    estimatedMinutes: 16,
    objectivesAr: [
      'التعبير عن التجارب الحياتية العامة بدون تحديد تاريخ معين (have/has + Past Participle).',
      'التفريق الحاسم بين المضارع التام (وقت غير منتهٍ/أثر قائم) والماضي البسيط (وقت محدد منتهٍ).',
      'استخدام الكلمات المفتاحية الشهيرة: ever, never, already, yet, since, for.',
    ],
    explanationMarkdownAr: `### المضارع التام: الجسر الواصل بين الماضي والحاضر

تكوين المضارع التام:
**Subject + (have / has) + التصريف الثالث (Past Participle)**

- *I **have visited** London twice.* (في حياتي حتى الآن، دون تحديد سنة معينة).
- *She **has worked** here for five years.* (بدأت قبل 5 سنوات وما زالت تعمل حتى الآن).

#### الفارق الجوهري بين Present Perfect و Past Simple:
| المضارع التام (Present Perfect) | الماضي البسيط (Past Simple) |
| :--- | :--- |
| تجربة دون تحديد وقت: *I **have seen** that movie.* | وقت محدد بالماضي: *I **saw** that movie yesterday.* |
| فترة زمنية لم تنتهِ بعد: *I **have had** two coffees today.* | فترة انتهت تماماً: *I **had** two coffees yesterday.* |
| أثر النتيجة حاضر الآن: *I **have lost** my key (I cannot enter now).* | حدث منفصل تاريخياً: *I **lost** my key last year, but found it.* |

#### الكلمات المفتاحية الدقيقة:
- **Ever**: في السؤال عن تجارب الحياة (*Have you ever eaten sushi?*)
- **Never**: للنفي القاطع للتجربة (*I have never flown in a helicopter.*)
- **Yet**: في نهاية السؤال والجملة المنفية (*I haven\'t finished yet.*)
- **Since**: بداية النقطة الزمنية (*since 2018 / since Monday*)
- **For**: للمدة الإجمالية (*for three weeks / for ten years*)`,
    rulesAndStructuresAr: 'Have/Has + Past Participle للخبرات الحياتية والآثار الممتدة للحاضر. إذا حُدد وقت الماضي (yesterday, in 2021) انتقل فوراً للماضي البسيط.',
    summaryAr: 'المضارع التام يربط الماضي بالحاضر؛ لا تذكر وقتاً ماضياً محدداً معه.',
    arabicContrastPoint: {
      titleAr: 'ذكر وقت محدد مع المضارع التام',
      descriptionAr: 'يقع المتعلم العربي في خطأ قول "I have graduated in 2020"، والصواب "I graduated in 2020" لأن التاريخ محدد ومكتمل.',
      badArabicHabit: 'I have seen him yesterday.',
      correctEnglishWay: 'I saw him yesterday / I have seen him recently.',
    },
    examples: [
      { en: 'Have you ever traveled to Japan?', ar: 'هل سبق لك وسافرت إلى اليابان في حياتك؟', phoneticAr: 'هَاڤ يُو إِيڤِر تْرَاڤِلد تُو جَابَان' },
      { en: 'We have lived in this neighborhood since 2015.', ar: 'نحن نعيش في هذا الحي منذ عام 2015 وحتى اليوم.', phoneticAr: 'وِي هَاڤ لِيڤد إِنْ ذِس نَيْبُورهُود سِنس تُو ثَاوْزَند آند فِفْتِين' },
      { en: 'He hasn\'t completed the assignment yet.', ar: 'هو لم يكمل الواجب المطلوب حتى الآن.', phoneticAr: 'هِي هَازَنْت كُومْبْلِيتِد ذِي أَسَايْنْمَنت يَت' },
    ],
    vocabulary: [
      { word: 'Accomplishment', ipa: '/əˈkɑːm.plɪʃ.mənt/', partOfSpeech: 'noun', meaningAr: 'إنجاز ملموس', exampleEn: 'Graduating top of class was her greatest accomplishment.', exampleAr: 'كان تخرجها الأولى على الدفعة أعظم إنجازاتها.' },
      { word: 'Recently', ipa: '/ˈriː.sənt.li/', partOfSpeech: 'adverb', meaningAr: 'مؤخراً / في الآونة الأخيرة', exampleEn: 'Have you heard any news recently?', exampleAr: 'هل سمعت أي أخبار مؤخراً؟' },
      { word: 'Milestone', ipa: '/ˈmaɪl.stoʊn/', partOfSpeech: 'noun', meaningAr: 'محطة فارقة / إنجاز مرحلي بارز', exampleEn: 'Reaching B1 is an inspiring milestone.', exampleAr: 'الوصول إلى مستوى B1 محطة فارقة ملهمة.' },
    ],
    commonMistakes: [
      { wrong: 'I have seen him last night.', correct: 'I saw him last night.', reasonAr: 'وجود last night يحدد نقطة زمنية منتهية فيلزم استخدام الماضي البسيط saw.' },
      { wrong: 'She has worked here since three years.', correct: 'She has worked here for three years.', reasonAr: 'المدة الإجمالية (three years) تأخذ for وليس since.' },
    ],
    realWorldChallengeAr: 'اكتب تجربة واحدة قمت بها في حياتك (I have...), وتجربة واحدة لم تقم بها قط (I have never...).',
    exercises: [
      {
        id: 'b1-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الزمن الصحيح مع وجود تاريخ محدد بالماضي:',
        instructionEn: 'Choose the correct tense with a specific past time:',
        question: 'She ______ her degree in engineering back in 2021.',
        options: ['obtained', 'has obtained', 'is obtaining', 'obtains'],
        correctAnswer: 0,
        explanationAr: 'وجود تاريخ ماضٍ محدد (back in 2021) يتطلب الماضي البسيط obtained.',
      },
      {
        id: 'b1-1-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بكلمة الربط المناسبة مع نقطة البداية الزمنية:',
        instructionEn: 'Fill in the word for a starting point in time:',
        question: 'We have collaborated on projects ______ (منذ) last summer.',
        correctAnswer: ['since', 'Since'],
        explanationAr: 'نستخدم since مع نقطة البداية الزمنية (last summer).',
      },
      {
        id: 'b1-1-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب السؤال الشهير عن الخبرات السابقة:',
        instructionEn: 'Unscramble the life experience question:',
        question: 'ever / have / you / visited / Canada',
        correctAnswer: 'Have you ever visited Canada',
        explanationAr: 'ترتيب السؤال: Have you ever visited Canada?',
      },
    ],
  },
  {
    id: 'lesson-b1-2-second-conditional-hypotheticals',
    level: 'B1',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: تجارب الحياة والمواقف غير المنتهية',
    chapterTitleEn: 'Unit 1: Life Experiences and Unfinished Time',
    titleAr: 'الدرس 2: الحالة الشرطية الثانية والمواقف الافتراضية (Second Conditional)',
    titleEn: 'Lesson 2: Second Conditional for Hypothetical Scenarios',
    category: 'قواعد وخيال (B1)',
    iconName: 'Compass',
    estimatedMinutes: 15,
    objectivesAr: [
      'التعبير عن مواقف خيالية وافتراضية غير واقعية في الحاضر أو المستقبل.',
      'إتقان تركيب الحالة الثانية: If + Past Simple, ... would + infinitive.',
      'استخدام عبارة النصيحة الراقية: If I were you, I would...',
    ],
    explanationMarkdownAr: `### الحالة الشرطية الثانية: تخيل عوالم موازية

نستخدم الحالة الشرطية الثانية (Second Conditional) عندما نتحدث عن شيء **غير حقيقي أو مستبعد الحدوث في الحاضر**:

#### التركيب النحوي:
**If + الماضي البسيط (Past Simple), ... would + الفعل المجرد**

- *If I **had** a million dollars, I **would travel** the globe.*
  (في الواقع الآن: أنا لا أملك مليون دولار، إنه مجرد افتراض وخيال).
- *If she **knew** his phone number, she **would call** him right away.*
  (في الحقيقة: هي لا تعرف رقمه).

#### القاعدة الراقية لـ Were:
في الإنجليزية الرسمية والفصيحة، نفضل استخدام **were** مع كل الضمائر (بما فيها I و he/she) في شق if:
- ***If I were you**, I would accept that job offer.* (لو كنت مكانك لقبلت العرض).
- *If he **were** here, he would resolve this dilemma.*`,
    rulesAndStructuresAr: 'If + Past Simple, ... would + bare infinitive. نستخدم صيغة الماضي لبيان البعد الخيالي عن الواقع وليس للدلالة على زمن الماضي.',
    summaryAr: 'الماضي في الحالة الشرطية الثانية ليس ماضياً زمنياً، بل هو ماضي الافتراض والتخيل الحاضر.',
    arabicContrastPoint: {
      titleAr: 'استخدام will بدلاً من would في المواقف الخيالية',
      descriptionAr: 'يخلط المتعلم أحياناً بين الحالة الأولى الواقعية (will) والحالة الثانية الخيالية، فيقول "If I won the lottery I will buy"، والصواب would.',
      badArabicHabit: 'If I was rich, I will buy a yacht.',
      correctEnglishWay: 'If I were rich, I would buy a yacht.',
    },
    examples: [
      { en: 'If I were you, I would invest time in learning deep skills.', ar: 'لو كنت مكانك، لاستثمرت وقتي في تعلم مهارات عميقة.', phoneticAr: 'إِف آي وِير يُو، آي وُود إِنْڤِسْت تَايْم' },
      { en: 'What would you do if you had unlimited free time?', ar: 'ماذا كنت ستفعل لو كان لديك وقت فراغ غير محدود؟', phoneticAr: 'وَات وُود يُو دُو إِف يُو هَاد أَنْلِمِتِد فْرِي تَايْم' },
      { en: 'If we lived near the ocean, we would swim every morning.', ar: 'لو كنا نعيش قرب المحيط، لكنا نسبح كل صباح.', phoneticAr: 'إِف وِي لِيڤد نِير ذِي أُوشَن، وِي وُود سْوِم' },
    ],
    vocabulary: [
      { word: 'Hypothetical', ipa: '/ˌhaɪ.pəˈθet̬.ɪ.kəl/', partOfSpeech: 'adjective', meaningAr: 'افتراضي وتخيلي', exampleEn: 'Let us consider a hypothetical situation.', exampleAr: 'دعنا ننظر في موقف افتراضي.' },
      { word: 'Dilemma', ipa: '/daɪˈlem.ə/', partOfSpeech: 'noun', meaningAr: 'معضلة أو مأزق محير', exampleEn: 'She faced a difficult moral dilemma.', exampleAr: 'لقد واجهت معضلة أخلاقية صعبة.' },
      { word: 'Recommend', ipa: '/ˌrek.əˈmend/', partOfSpeech: 'verb', meaningAr: 'يوصي ويقترح', exampleEn: 'I would highly recommend this course.', exampleAr: 'أوصي بشدة بهذا المساق التعليمي.' },
    ],
    commonMistakes: [
      { wrong: 'If I would have money, I would buy it.', correct: 'If I had money, I would buy it.', reasonAr: 'لا نضع would في شق if إطلاقاً؛ شق if يأخذ الماضي البسيط had.' },
      { wrong: 'If I am you, I would resign.', correct: 'If I were you, I would resign.', reasonAr: 'لتقديم النصيحة الافتراضية نستخدم If I were you.' },
    ],
    realWorldChallengeAr: 'اكتب نصيحة راقية لزميلك تبدأ بـ If I were you, I would...',
    exercises: [
      {
        id: 'b1-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة لجواب الشرط الافتراضي:',
        instructionEn: 'Choose the correct hypothetical result form:',
        question: 'If she had more free time, she ______ a new language.',
        options: ['would learn', 'will learn', 'learns', 'learned'],
        correctAnswer: 0,
        explanationAr: 'في الحالة الشرطية الثانية، جواب الشرط يأخذ would + infinitive: would learn.',
      },
      {
        id: 'b1-2-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل صيغة النصيحة الافتراضية الفصيحة:',
        instructionEn: 'Fill in the formal subjunctive verb:',
        question: 'If I ______ (كنت) you, I would accept the partnership.',
        correctAnswer: ['were', 'Were'],
        explanationAr: 'في أسلوب النصيحة الافتراضية نستخدم were مع الضمير I.',
      },
      {
        id: 'b1-2-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الافتراضية التخيلية:',
        instructionEn: 'Unscramble the second conditional sentence:',
        question: 'would / help / I / had / time / you / if / I',
        correctAnswer: 'If I had time I would help you',
        explanationAr: 'ترتيب الجملة: If I had time, I would help you.',
      },
    ],
  },
  {
    id: 'lesson-b1-3-gerunds-vs-infinitives',
    level: 'B1',
    order: 2,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: تراكيب الجملة المتقدمة',
    chapterTitleEn: 'Unit 2: Complex Structures and Descriptions',
    titleAr: 'الدرس 3: المصدر الصريح مقابل صيغة ing (Gerunds vs Infinitives)',
    titleEn: 'Lesson 3: Gerunds and Infinitives in Action',
    category: 'قواعد ودقة (B1)',
    iconName: 'BookOpen',
    estimatedMinutes: 15,
    objectivesAr: [
      'معرفة الأفعال التي تتبع دائماً بـ Gerund (verb-ing) مثل enjoy, avoid, suggest.',
      'معرفة الأفعال التي تتبع دائماً بـ to + infinitive مثل decide, plan, hope, refuse.',
      'فهم الأفعال التي يتغير معناها بتغير الصيغة مثل remember و stop.',
    ],
    explanationMarkdownAr: `### Gerund أم Infinitive: السر في الفعل الأول

عندما يجتمع فعلان متتاليان في الإنجليزية، يحدد الفعل الأول شكل الفعل الثاني:

#### 1. أفعال تتبع دائماً بـ Gerund (الفعل + ing):
- **Enjoy**: *I enjoy reading historical fiction.*
- **Avoid**: *He avoids driving during rush hour.*
- **Consider**: *We are considering relocating to another city.*
- **Suggest**: *She suggested taking a short break.*
- **حروف الجر دائماً**: أي فعل بعد حرف جر يأخذ ing (*interested in **learning**, good at **speaking***).

#### 2. أفعال تتبع دائماً بـ Infinitive (to + الفعل المجرد):
- **Decide**: *They decided **to invest** in clean energy.*
- **Plan**: *I plan **to take** the IELTS test this autumn.*
- **Hope**: *We hope **to see** you soon.*
- **Promise**: *He promised **to deliver** the project on time.*

#### 3. أفعال يتغير معناها تماماً!
- **Stop to do**: توقف عن عمل ما لكي يفعل شيئاً آخر (*He stopped to drink water* -> توقف عن المشي ليشرب).
- **Stop doing**: أقلع وامتنع تماماً عن الفعل (*He stopped drinking soda* -> امتنع عن شرب الصودا نهائياً).`,
    rulesAndStructuresAr: 'أفعال الرغبة والنية المستقبلية تميل لأخذ to + verb؛ بينما أفعال الاستمتاع والتجنب وحروف الجر تأخذ verb-ing.',
    summaryAr: 'كل حرف جر يتبعه اسم أو فعل مضاف له ing دائماً؛ واحفظ عائلات الأفعال بالسياق.',
    arabicContrastPoint: {
      titleAr: 'استخدام المصدر الصريح بعد حروف الجر',
      descriptionAr: 'في العربية نقول "مهتم بـ أن يتعلم"، فيترجمها المتعلم خطأ إلى "interested in to learn" أو "interested in learn"، بينما حروف الجر تستلزم ing: interested in learning.',
      badArabicHabit: 'Thank you for help me.',
      correctEnglishWay: 'Thank you for helping me.',
    },
    examples: [
      { en: 'I am really looking forward to meeting you in person.', ar: 'إنني أتطلع بشغف كبير لمقابلتك شخصياً (لاحظ: to هنا حرف جر فيتبعه ing).', phoneticAr: 'آي آم رِيلِي لُوكِينْج فُورْوَرْد تُو مِيتِينْج يُو' },
      { en: 'She decided to pursue a master\'s degree abroad.', ar: 'هي قررت مواصلة دراسة الماجستير في الخارج.', phoneticAr: 'شِي دِسَايْدِد تُو بُورْسْيُو أَه مَاسْتِرز دِغْرِي' },
      { en: 'Have you considered applying for this leadership position?', ar: 'هل فكرت في التقديم على هذا المنصب القيادي؟', phoneticAr: 'هَاڤ يُو كُونْسِيدِرْد أَبْلَايِينْج فُور ذِس لِيدَرشِب' },
    ],
    vocabulary: [
      { word: 'Pursue', ipa: '/pɚˈsuː/', partOfSpeech: 'verb', meaningAr: 'يسعى وراء / يواصل شغفاً أو دراسة', exampleEn: 'He wants to pursue his passion for coding.', exampleAr: 'يريد مواصلة شغفه بالبرمجة.' },
      { word: 'Consider', ipa: '/kənˈsɪd.ɚ/', partOfSpeech: 'verb', meaningAr: 'يفكر ملياً ويأخذ بالحسبان', exampleEn: 'Consider taking calculated risks.', exampleAr: 'فكر في خوض مخاطرات مدروسة.' },
      { word: 'Hesitate', ipa: '/ˈhez.ə.teɪt/', partOfSpeech: 'verb', meaningAr: 'يتردد في الفعل', exampleEn: 'Do not hesitate to ask any questions.', exampleAr: 'لا تتردد في طرح أي أسئلة.' },
    ],
    commonMistakes: [
      { wrong: 'I enjoy to swim in the morning.', correct: 'I enjoy swimming in the morning.', reasonAr: 'الفعل enjoy يأخذ بعده دائماً صيغة Gerund: swimming.' },
      { wrong: 'He promised helping me.', correct: 'He promised to help me.', reasonAr: 'الفعل promise يتبعه دائماً to + infinitive: to help.' },
    ],
    realWorldChallengeAr: 'اكتب جملة عما تستمتع بفعله (I enjoy...) وجملة عما تخطط لفعله قريباً (I plan to...).',
    exercises: [
      {
        id: 'b1-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة بعد الفعل enjoy:',
        instructionEn: 'Choose the correct form after "enjoy":',
        question: 'We thoroughly enjoyed ______ with the international team.',
        options: ['collaborating', 'to collaborate', 'collaborate', 'collaborated'],
        correctAnswer: 0,
        explanationAr: 'الفعل enjoy يتبعه دائماً Gerund: collaborating.',
      },
      {
        id: 'b1-3-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بصيغة الفعل المناسبة بعد حرف الجر for:',
        instructionEn: 'Fill in the correct form after preposition "for":',
        question: 'Thank you for ______ (مساعدتك) us finalize the report.',
        correctAnswer: ['helping', 'Helping'],
        explanationAr: 'حروف الجر (for) يتبعها دائماً verb-ing: helping.',
      },
      {
        id: 'b1-3-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المعبرة عن اتخاذ قرار التعلم:',
        instructionEn: 'Unscramble the sentence with decided to:',
        question: 'to / decided / English / master / he',
        correctAnswer: 'He decided to master English',
        explanationAr: 'ترتيب الجملة: He decided to master English.',
      },
    ],
  },
  {
    id: 'lesson-b1-4-defining-relative-clauses',
    level: 'B1',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: تراكيب الجملة المتقدمة',
    chapterTitleEn: 'Unit 2: Complex Structures and Descriptions',
    titleAr: 'الدرس 4: جمل الوصل المحددة (Who, Which, That, Where)',
    titleEn: 'Lesson 4: Defining Relative Clauses',
    category: 'قواعد وربط (B1)',
    iconName: 'Layers',
    estimatedMinutes: 14,
    objectivesAr: [
      'دمج جملتين منفصلتين في جملة واحدة غنية وبليغة باستخدام ضمائر الوصل.',
      'الاستخدام الدقيق لـ Who للبشر، و Which للأشياء، و Where للأماكن، و That لكليهما.',
      'تجنب التكرار الزائد لضمير المفعول في نهاية جملة الوصل.',
    ],
    explanationMarkdownAr: `### جمل الوصل: كيف تجعل حديثك متصلاً وأكثر نضجاً

بدلاً من التحدث بجمل قصيرة متقطعة كالأطفال:
- *I met a man. The man speaks four languages.*

يمكنك دمج الفكرتين ببراعة في جملة واحدة:
- *I met a man **who speaks four languages**.*

#### ضمائر الوصل الأساسية (Relative Pronouns):
- **Who**: للأشخاص والناس:
  - *The doctor **who** treated me was exceptionally kind.*
- **Which**: للأشياء والجماد والحيوانات:
  - *I bought a laptop **which** has incredible battery life.*
- **That**: صيغة شائعة جداً يمكن أن تحل محل who و which في المحادثة غير الرسمية:
  - *The book **that** you recommended was fascinating.*
- **Where**: للأماكن:
  - *This is the cafe **where** we held our first brainstorming session.*
- **Whose**: للملكية:
  - *I met a designer **whose** portfolio was breathtaking.*`,
    rulesAndStructuresAr: 'Who للبشر، Which للأشياء، Where للمكان، و Whose للملكية. ضمير الوصل يحل محل الاسم فلا تكرره لاحقاً.',
    summaryAr: 'جمل الوصل تصنع سلاسة لغوية مذهلة وتمنع التكرار الرتيب في الحديث.',
    arabicContrastPoint: {
      titleAr: 'تكرار ضمير المفعول العائد (Resumptive Pronoun)',
      descriptionAr: 'في اللغة العربية نقول "الكتاب الذي قرأته" (مع الهاء العائدة)، بينما في الإنجليزية يُمنع تكرار الهاء: نقول "The book that I read" وليس "that I read it".',
      badArabicHabit: 'The project that we completed it last week.',
      correctEnglishWay: 'The project that we completed last week.',
    },
    examples: [
      { en: 'The mentor who guided me transformed my career trajectory.', ar: 'المرشد الذي وجّهني غيّر مسار مسيرتي المهنية بالكامل.', phoneticAr: 'ذَا مِينْتُور هُو غَايْدِد مِي تْرَانْسفُورْمد مَاي كَرِير' },
      { en: 'Is there a quiet spot where we can discuss this privately?', ar: 'هل يوجد مكان هادئ حيث يمكننا مناقشة هذا الأمر بخصوصية؟', phoneticAr: 'إِز ذَيْر أَه كْوَايِت سْبُوت وِيَرْ وِي كَان دِسْكَس' },
      { en: 'She founded a company which specializes in AI solutions.', ar: 'هي أسست شركة متخصصة في حلول الذكاء الاصطناعي.', phoneticAr: 'شِي فَاونْدِد أَه كُومْبَانِي وِتْش سْبِيشَالَايْزِز' },
    ],
    vocabulary: [
      { word: 'Trajectory', ipa: '/trəˈdʒek.tɚ.i/', partOfSpeech: 'noun', meaningAr: 'المسار والتدرج الصاعد', exampleEn: 'Her career trajectory is truly inspiring.', exampleAr: 'مسار مسيرتها المهنية ملهم بحق.' },
      { word: 'Specialize', ipa: '/ˈspeʃ.ə.laɪz/', partOfSpeech: 'verb', meaningAr: 'يتخصص في مجال معين', exampleEn: 'We specialize in modern web architecture.', exampleAr: 'نحن متخصصون في المعمارية الحديثة للويب.' },
      { word: 'Mentor', ipa: '/ˈmen.tɔːr/', partOfSpeech: 'noun', meaningAr: 'مرشد / ناصح خبير', exampleEn: 'A great mentor accelerates your learning.', exampleAr: 'المرشد العظيم يسرّع وتيرة تعلمك.' },
    ],
    commonMistakes: [
      { wrong: 'The car which I bought it is very fast.', correct: 'The car which I bought is very fast.', reasonAr: 'احذف ضمير it العائد؛ فكلمة which تكفي تماماً وتمنع التكرار.' },
      { wrong: 'The man which called you is my uncle.', correct: 'The man who called you is my uncle.', reasonAr: 'الإنسان العاقل يأخذ who وليس which.' },
    ],
    realWorldChallengeAr: 'صف شخصاً أثّر في حياتك بجملة واحدة مستخدماً ضمير الوصل who.',
    exercises: [
      {
        id: 'b1-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر ضمير الوصل المناسب للإشارة إلى شخص عاقل:',
        instructionEn: 'Choose the correct relative pronoun for a person:',
        question: 'I want to thank the engineer ______ resolved the complex bug.',
        options: ['who', 'which', 'where', 'whose'],
        correctAnswer: 0,
        explanationAr: 'الإشارة إلى الإنسان (the engineer) تستلزم استخدام who.',
      },
      {
        id: 'b1-4-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بضمير الوصل الدال على المكان:',
        instructionEn: 'Fill in the relative pronoun for place:',
        question: 'This is the conference hall ______ (حيث) the keynote was delivered.',
        correctAnswer: ['where', 'Where'],
        explanationAr: 'الإشارة للمكان (the conference hall) تأخذ where.',
      },
      {
        id: 'b1-4-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الموصولة مع حذف أي ضمائر مكررة:',
        instructionEn: 'Unscramble the relative clause sentence:',
        question: 'helped / the / person / me / is / who / he',
        correctAnswer: 'He is the person who helped me',
        explanationAr: 'ترتيب الجملة: He is the person who helped me.',
      },
    ],
  },
  {
    id: 'lesson-b1-5-phrasal-verbs-daily-conversations',
    level: 'B1',
    order: 4,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: الطلاقة العملية والتعبير الطبيعي',
    chapterTitleEn: 'Unit 3: Practical Fluency and Natural Idioms',
    titleAr: 'الدرس 5: الأفعال المركبة الأكثر استخداماً (Essential Phrasal Verbs)',
    titleEn: 'Lesson 5: Essential Everyday Phrasal Verbs',
    category: 'مفردات ومحادثة (B1)',
    iconName: 'MessageSquare',
    estimatedMinutes: 16,
    objectivesAr: [
      'فهم كيف يغير حرف الجر معنى الفعل الأساسي تغييراً جذرياً.',
      'إتقان أهم 15 فعلاً مركباً في العمل والحياة اليومية (look forward to, give up, figure out...).',
      'التمييز بين الأفعال المركبة القابلة للفصل (Separable) وغير القابلة للفصل.',
    ],
    explanationMarkdownAr: `### الأفعال المركبة: سر التحدث مثل المتحدث الأصلي

الفعل المركب (Phrasal Verb) هو فعل عادي مضافاً إليه حرف جر (Particle)، فيتولد معنى جديد تماماً لا يمكن تخمينه بالترجمة الحرفية:

- **Look**: ينظر.
- **Look for**: يبحث عن (*I am looking for my keys*).
- **Look forward to**: يتطلع بشوق لـ (*I look forward to our meeting*).
- **Look after**: يعتني بـ / يرعى (*She looks after her younger brother*).

#### أهم الأفعال المركبة في بيئة العمل والحياة اليومية:
1. **Figure out**: يحل لغزاً / يفهم حلاً (*I finally figured out the code!*).
2. **Give up**: يستسلم أو يقلع عن عادة (*Never give up on your dreams*).
3. **Carry out**: ينفذ مهمة أو خطة (*We carried out a detailed study*).
4. **Turn into**: يتحول إلى (*Small habits turn into massive success*).
5. **Put off**: يؤجل موعداً (*Don\'t put off until tomorrow what you can do today*).
6. **Call off**: يلغي تماماً (*They had to call off the match due to storms*).`,
    rulesAndStructuresAr: 'الفعل المركب يكتسب معنى اصطلاحياً جديداً بحرف الجر الملحق به؛ احفظه كوحدة معنوية واحدة مع مثاله.',
    summaryAr: 'المتحدثون الأصليون يفضلون الأفعال المركبة على الكلمات اللاتينية الرسمية في الحديث اليومي.',
    arabicContrastPoint: {
      titleAr: 'الترجمة الحرفية لمكونات الفعل المركب',
      descriptionAr: 'ترجمة "Give up" حرفياً تعطي "يعطي لأعلى"، بينما معناها الحقيقي "يستسلم"، لذا لا تترجم حرف الجر بمعزل عن الفعل.',
      badArabicHabit: 'I will search on the solution.',
      correctEnglishWay: 'I will look for the solution / figure out the solution.',
    },
    examples: [
      { en: 'We need to figure out a viable workaround before tomorrow.', ar: 'يتعين علينا إيجاد حل بديل عملي قبل الغد.', phoneticAr: 'وِي نِيد تُو فِيجْيَر آوت أَه ڤَايَابِل وِيرْك أَرَاوند' },
      { en: 'Never give up, even when challenges seem daunting.', ar: 'إياك أن تستسلم، حتى عندما تبدو التحديات شاقة ومهيبة.', phoneticAr: 'نِيڤِر غِيڤ أَب، إِيڤِن وِن تْشَالِنجِز سِيم دُونْتِينْج' },
      { en: 'They decided to put off the launch until next quarter.', ar: 'قرروا تأجيل موعد الإطلاق حتى الربع القادم.', phoneticAr: 'ذَاي دِسَايْدِد تُو بُوت أُوف ذَا لُونْش' },
    ],
    vocabulary: [
      { word: 'Viable', ipa: '/ˈvaɪ.ə.bəl/', partOfSpeech: 'adjective', meaningAr: 'قابل للتطبيق ومجدٍ عملياً', exampleEn: 'We need a viable strategy.', exampleAr: 'نحتاج إلى استراتيجية مجدية عملياً.' },
      { word: 'Workaround', ipa: '/ˈwɝːk.ə.raʊnd/', partOfSpeech: 'noun', meaningAr: 'حل بديل مؤقت للتغلب على عقبة', exampleEn: 'This workaround keeps the system running.', exampleAr: 'هذا الحل البديل يبقي النظام قيد العمل.' },
      { word: 'Daunting', ipa: '/ˈdɑːn.t̬ɪŋ/', partOfSpeech: 'adjective', meaningAr: 'مهيب / باعث على التردد لصعوبته', exampleEn: 'Learning a language is not a daunting task with consistency.', exampleAr: 'تعلم لغة ليس مهمة شاقة مع المثابرة.' },
    ],
    commonMistakes: [
      { wrong: 'I look forward to see you.', correct: 'I look forward to seeing you.', reasonAr: 'العبارة look forward to يتبعها دائماً اسم أو verb-ing: seeing.' },
      { wrong: 'He gave out smoking.', correct: 'He gave up smoking.', reasonAr: 'الإقلاع عن عادة هو give up وليس give out.' },
    ],
    realWorldChallengeAr: 'اكتب جملة تستخدم فيها الفعل المركب figure out للتعبير عن حل مشكلة تقنية أو فكرية واجهتك.',
    exercises: [
      {
        id: 'b1-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الفعل المركب المناسب بمعنى "يحل اللغز / يفهم الحل":',
        instructionEn: 'Choose the phrasal verb meaning "to understand / solve":',
        question: 'It took our developers two hours to ______ the root cause.',
        options: ['figure out', 'give up', 'look after', 'call off'],
        correctAnswer: 0,
        explanationAr: 'الفعل figure out يعني يفهم ويفك لغز المشكلة.',
      },
      {
        id: 'b1-5-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل حرف الجر المكمل للتعبير عن الاستسلام (Give ...):',
        instructionEn: 'Fill in the particle for "give up":',
        question: 'No matter what happens, do not give ______ on your goals.',
        correctAnswer: ['up', 'Up'],
        explanationAr: 'التركيب هو give up بمعنى يستسلم.',
      },
      {
        id: 'b1-5-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب جملة التأجيل الدارجة:',
        instructionEn: 'Unscramble the sentence with put off:',
        question: 'off / meeting / put / the / we / must',
        correctAnswer: 'We must put off the meeting',
        explanationAr: 'ترتيب الجملة: We must put off the meeting (يجب أن نؤجل الاجتماع).',
      },
    ],
  },
  {
    id: 'lesson-b1-6-modals-of-deduction',
    level: 'B1',
    order: 5,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: الطلاقة العملية والتعبير الطبيعي',
    chapterTitleEn: 'Unit 3: Practical Fluency and Natural Idioms',
    titleAr: 'الدرس 6: أفعال الاستنتاج والترجيح (Must be, Can\'t be, Might be)',
    titleEn: 'Lesson 6: Modals of Deduction in the Present',
    category: 'قواعد واستنتاج (B1)',
    iconName: 'ShieldCheck',
    estimatedMinutes: 15,
    objectivesAr: [
      'التعبير عن اليقين الإيجابي بناءً على أدلة واضحة باستخدام must be.',
      'التعبير عن الاستحالة واليقين السلبي باستخدام can\'t be.',
      'التعبير عن الاحتمال والشك بنسبة 50% باستخدام might be أو could be.',
    ],
    explanationMarkdownAr: `### أفعال الاستنتاج: كيف تحلل كالمحقق بذكاء لغوي

عندما لا تملك معلومة قطعية ولكن لديك أدلة تقودك للاستنتاج، استخدم أفعال التخمين والاستنتاج:

#### 1. اليقين الإيجابي التام (مؤكد بنسبة 95%+): **Must be**
- *The lights are on and his car is outside. He **must be** at home.*
  (الأنوار مضاءة وسيارتها بالخارج، لا شك أنه في البيت!).
- *You have worked 14 hours today; you **must be** exhausted.*

#### 2. الاستحالة واليقين بالنفي (مستحيل بنسبة 95%+): **Can\'t be**
- *That **can\'t be** Ahmed. Ahmed is traveling in Tokyo right now!*
  (مستحيل أن يكون ذلك أحمد؛ فأحمد مسافر الآن في طوكيو!).
- *He just ate a huge lunch; he **can\'t be** hungry already.*

#### 3. الشك والاحتمال المتساوي (ممكن 50/50): **Might / May / Could**
- *Where is Sarah? - She **might be** in the meeting room.* (ربما هناك، لست متأكداً).
- *Take an umbrella; it **could rain** later.*`,
    rulesAndStructuresAr: 'Must be للتأكيد الإيجابي المبني على دليل؛ Can\'t be للاستحالة المطلقة؛ Might/Could be للاحتمال المتوازن.',
    summaryAr: 'عكس must be في الاستنتاج هو can\'t be وليس mustn\'t be.',
    arabicContrastPoint: {
      titleAr: 'استخدام mustn\'t للتعبير عن الاستحالة',
      descriptionAr: 'يقع البعض في خطأ "He mustn\'t be hungry" لقول "مستحيل أن يكون جائعاً"، والصواب "He can\'t be hungry" لأن mustn\'t تعني التحريم والنهي.',
      badArabicHabit: 'It mustn\'t be true (لقصد: مستحيل أن يكون صحيحاً).',
      correctEnglishWay: 'It can\'t be true.',
    },
    examples: [
      { en: 'Look at the queue outside; that restaurant must be exceptional.', ar: 'انظر إلى الطابور بالخارج؛ لا بد أن ذلك المطعم استثنائي حقاً.', phoneticAr: 'لُوك آتْ ذَا كْيُو آوتْسَايْد؛ ذَات رِسْتُورَانْت مَاسْت بِي' },
      { en: 'This estimate can\'t be accurate; it is far too cheap.', ar: 'هذا التقدير يستحيل أن يكون دقيقاً؛ إنه رخيص للغاية بشكل مريب.', phoneticAr: 'ذِس إِسْتِمَت كَانْت بِي أَكْيُرِت' },
      { en: 'They might be waiting for us in the lobby.', ar: 'ربما هم في انتظارنا في بهو الاستقبال الآن.', phoneticAr: 'ذَاي مَايت بِي وَيْتِينْج فُور أَس' },
    ],
    vocabulary: [
      { word: 'Deduction', ipa: '/dɪˈdʌk.ʃən/', partOfSpeech: 'noun', meaningAr: 'الاستنتاج والاستدلال المنطقي', exampleEn: 'Sherlock Holmes was a master of deduction.', exampleAr: 'كان شيرلوك هولمز أستاذاً في الاستنتاج المنطقي.' },
      { word: 'Evidence', ipa: '/ˈev.ə.dəns/', partOfSpeech: 'noun', meaningAr: 'دليل وبرهان ملموس', exampleEn: 'The evidence strongly supports our theory.', exampleAr: 'الأدلة تدعم نظريتنا بقوة.' },
      { word: 'Plausible', ipa: '/ˈplɑː.zə.bəl/', partOfSpeech: 'adjective', meaningAr: 'منطقي ومقبول عقلياً', exampleEn: 'That is a plausible explanation.', exampleAr: 'هذا تفسير منطقي ومقبول.' },
    ],
    commonMistakes: [
      { wrong: 'It mustn\'t be him; he is in Paris.', correct: 'It can\'t be him; he is in Paris.', reasonAr: 'في الاستنتاج، الاستحالة يُعبر عنها بـ can\'t be وليس mustn\'t.' },
      { wrong: 'He musts be tired.', correct: 'He must be tired.', reasonAr: 'الفعل المساعد must لا يأخذ حرف s أبداً.' },
    ],
    realWorldChallengeAr: 'اكتب استنتاجاً مؤكداً لموقف تراه أمامك مستخدماً must be (مثلاً: He must be happy because...).',
    exercises: [
      {
        id: 'b1-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة المعبرة عن الاستحالة التامة لنفي صحة الخبر:',
        instructionEn: 'Choose the modal expressing absolute logical impossibility:',
        question: 'This news ______ true; the official spokesperson just denied it.',
        options: ["can't be", "mustn't be", "shouldn't be", "won't be"],
        correctAnswer: 0,
        explanationAr: 'الاستحالة المنطقية القطعية تأخذ can\'t be.',
      },
      {
        id: 'b1-6-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بفعل الاستنتاج الدال على اليقين الإيجابي التام:',
        instructionEn: 'Fill in the modal for positive logical certainty:',
        question: 'She worked on this complex project all night; she ______ (لا بد أنها) be exhausted.',
        correctAnswer: ['must', 'Must'],
        explanationAr: 'اليقين الإيجابي المبني على الدليل يأخذ must be.',
      },
      {
        id: 'b1-6-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الاستنتاجية للاحتمال:',
        instructionEn: 'Unscramble the deduction sentence:',
        question: 'right / might / be / explanation / that',
        correctAnswer: 'That explanation might be right',
        explanationAr: 'ترتيب الجملة: That explanation might be right.',
      },
    ],
  },
];
