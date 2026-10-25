import type { Lesson } from '../../types/learning.ts';

export const C1_LESSONS: Lesson[] = [
  {
    id: 'lesson-c1-1-negative-inversion-emphasis',
    level: 'C1',
    order: 0,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: البلاغة النحوية والأسلوب الرفيع',
    chapterTitleEn: 'Unit 1: Syntactic Eloquence and Formal Inversion',
    titleAr: 'الدرس 1: القلب النحوي البلاغي (Negative Inversion for Dramatic Emphasis)',
    titleEn: 'Lesson 1: Rhetorical Inversion for Emphasis',
    category: 'قواعد متقدمة وأسلوب رفيع (C1)',
    iconName: 'Sparkles',
    estimatedMinutes: 16,
    objectivesAr: [
      'استخدام أسلوب القلب النحوي (تقديم الفعل المساعد على الفاعل) بعد العبارات السلبية أو المقيدة.',
      'إتقان الصياغات الشهيرة: Seldom have I seen..., Rarely does one encounter..., Under no circumstances should you...',
      'الارتقاء بالخطاب المكتوب والخطب العامة إلى مصاف البلاغة الإنجليزية الرفيعة.',
    ],
    explanationMarkdownAr: `### القلب النحوي (Inversion): موسيقى وبلاغة الخطاب الرفيع

في الإنجليزية الأكاديمية والخطابية، عندما تبدأ الجملة بظرف أو تعبير سلبي أو مقيد للحدوث، يحدث **انقلاب في ترتيب الجملة** بحيث يتقدم الفعل المساعد على الفاعل تماماً مثل صياغة السؤال:

#### التركيب البلاغي:
**Negative Adverbial + Auxiliary Verb + Subject + Main Verb**

#### 1. Seldom & Rarely (نادراً):
- الجملة العادية: *I have rarely seen such dedication.*
- بالقلب البلاغي: ***Rarely have I seen** such extraordinary dedication.*

#### 2. Under no circumstances (تحت أي ظرف كان):
- ***Under no circumstances should** sensitive keys be exposed to the client.*

#### 3. Not only ... but also (ليس فقط بل أيضاً):
- ***Not only did she master** the technical architecture, **but she also** inspired the entire organization.*

#### 4. No sooner ... than / Scarcely ... when (ما إن كاد حتى):
- ***No sooner had we deployed** the patch **than** system latency plummeted.*`,
    rulesAndStructuresAr: 'تقديم الفعل المساعد على الفاعل عند البدء بظرف سلبي (Seldom, Rarely, Never, Under no circumstances).',
    summaryAr: 'القلب النحوي يمنح جملتك ثقلاً أدبياً وتأثيراً إقناعياً درامياً فورياً.',
    arabicContrastPoint: {
      titleAr: 'نسيان قلب ترتيب الفاعل والفعل المساعد بعد الظرف السلبي',
      descriptionAr: 'يقع الكاتب في خطأ كتابة الجملة بترتيبها العادي بعد Seldom (Seldom I have seen)، بينما الصواب الحتمي تقديم الفعل المساعد: Seldom have I seen.',
      badArabicHabit: 'Rarely people understand this subtle point.',
      correctEnglishWay: 'Rarely do people understand this subtle point.',
    },
    examples: [
      { en: 'Seldom has a breakthrough generated such profound global resonance.', ar: 'نادراً ما أحدث اختراق علمي هذا الصدى العالمي العميق والمدوي.', phoneticAr: 'سِلْدَم هَاز أَه بْرَيْكثْرُو جِنِرَيْتِد' },
      { en: 'Under no circumstances should the integrity of the data pipeline be compromised.', ar: 'تحت أي ظرف من الظروف، لا ينبغي المساومة على سلامة مسار تدفق البيانات.', phoneticAr: 'أَنْدِر نُو سِيرْكَمْسْتَانْسِز شُود ذِي إِنْتِغْرِتِي' },
      { en: 'Not only did they meet the stringent deadlines, but they also exceeded benchmark projections.', ar: 'لم يكتفوا بالالتزام بالمواعيد الصارمة فحسب، بل تجاوزوا أيضاً كافة التقديرات القياسية.', phoneticAr: 'نُوت أُونْلِي دِد ذَاي مِيت ذَا سْتْرِينْجِنْت' },
    ],
    vocabulary: [
      { word: 'Profound', ipa: '/prəˈfaʊnd/', partOfSpeech: 'adjective', meaningAr: 'عميق وفلسفي وذو أثر جسيم', exampleEn: 'The book had a profound impact on my thinking.', exampleAr: 'كان للكتاب أثر عميق وبالغ في طريقة تفكيري.' },
      { word: 'Stringent', ipa: '/ˈstrɪn.dʒənt/', partOfSpeech: 'adjective', meaningAr: 'صارم ومحكم ولا يقبل التهاون', exampleEn: 'We adhere to stringent quality benchmarks.', exampleAr: 'نحن نلتزم بمعايير جودة صارمة للغاية.' },
      { word: 'Resonance', ipa: '/ˈrez.ən.əns/', partOfSpeech: 'noun', meaningAr: 'الصدى والوقع العميق في النفوس', exampleEn: 'Her poetic words carried deep resonance.', exampleAr: 'حملت كلماتها الشعرية صدى عميقاً ومؤثراً.' },
    ],
    commonMistakes: [
      { wrong: 'Seldom we have witnessed such unity.', correct: 'Seldom have we witnessed such unity.', reasonAr: 'القلب النحوي يتطلب تقديم have على we: Seldom have we witnessed.' },
      { wrong: 'Never I will forget this honor.', correct: 'Never will I forget this honor.', reasonAr: 'يتقدم will على الفاعل I بعد ظرف النفي Never.' },
    ],
    realWorldChallengeAr: 'أعد صياغة هذه الجملة بأسلوب القلب النحوي البلاغي: I have never felt so motivated.',
    exercises: [
      {
        id: 'c1-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الترتيب البلاغي السليم للجملة المبدوءة بظرف مقيد:',
        instructionEn: 'Choose the syntactically inverted sentence:',
        question: 'Scarcely ______ the auditorium when the keynote speaker began.',
        options: [
          'had we entered',
          'we had entered',
          'did we entered',
          'we were entering',
        ],
        correctAnswer: 0,
        explanationAr: 'بعد Scarcely نستخدم الماضي التام مع القلب النحوي: had we entered.',
      },
      {
        id: 'c1-1-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بالفعل المساعد المقلوب المناسب للماضي البسيط مع الفاعل she:',
        instructionEn: 'Fill in the inverted past auxiliary:',
        question: 'Not only ______ (فعلت) she surpass the target, but she also mentored junior colleagues.',
        correctAnswer: ['did', 'Did'],
        explanationAr: 'في القلب النحوي للماضي البسيط نستخدم did: Not only did she surpass.',
      },
      {
        id: 'c1-1-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة البلاغية بأسلوب Inversion:',
        instructionEn: 'Unscramble the inverted sentence:',
        question: 'seen / have / rarely / I / devotion / such',
        correctAnswer: 'Rarely have I seen such devotion',
        explanationAr: 'ترتيب الجملة البلاغية: Rarely have I seen such devotion.',
      },
    ],
  },
  {
    id: 'lesson-c1-2-cleft-sentences-focus',
    level: 'C1',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: البلاغة النحوية والأسلوب الرفيع',
    chapterTitleEn: 'Unit 1: Syntactic Eloquence and Formal Inversion',
    titleAr: 'الدرس 2: الجمل المجزأة للتسليط البؤري (Cleft Sentences)',
    titleEn: 'Lesson 2: Cleft Sentences for Focus and Emphasis',
    category: 'قواعد وبلاغة (C1)',
    iconName: 'Target',
    estimatedMinutes: 15,
    objectivesAr: [
      'تسليط الضوء على جزء محدد من الجملة دون سواه باستخدام تركيب It is / It was ... that.',
      'إتقان جمل الوصل الصدرية: What I truly admire is... و All we need is...',
      'توظيف الأسلوب في الحوارات الإقناعية والمناظرات لتفنيد وجهات النظر الأخرى بحسم.',
    ],
    explanationMarkdownAr: `### الجمل المجزأة (Cleft Sentences): توجيه كشاف الضوء البلاغي

الجملة المجزأة تقسم الفكرة إلى شقين لتسلط ضوءاً مبهراً على المعلومة الأهم:

#### 1. تركيب It-cleft (It was [X] that...):
- الجملة البسيطة: *My mentor inspired my passion for linguistics.*
- بتسليط الضوء على الفاعل: ***It was my mentor who/that** inspired my passion for linguistics.*
- بتسليط الضوء على الزمان: ***It was in 2019 that** the breakthrough occurred.*
- بتسليط الضوء على السبب: ***It is because of your unwavering perseverance that** we stand here today.*

#### 2. تركيب Wh-cleft (What ... is/was...):
- الجملة البسيطة: *I need honest feedback.*
- بالجملة المجزأة: ***What I urgently need is** honest and candid feedback.*
- ***All that remains is** the formal ratification of the treaty.*

#### الأثر النفسي والبلاغي:
الجملة المجزأة تمنح كلامك ثقة قاطعة ونبرة قيادية حاسمة تفصل بين الحقيقة والالتباس.`,
    rulesAndStructuresAr: 'It is/was + [العنصر المراد إبرازه] + that/who... ؛ أو What + clause + is/was + focus.',
    summaryAr: 'استخدم Cleft Sentences عندما تريد تأكيد حقيقة محددة ونفي أي سوء فهم لدى السامع.',
    arabicContrastPoint: {
      titleAr: 'استخدام أسلوب الحصر اللفظي العربي بالترجمة الحرفية',
      descriptionAr: 'في العربية نستخدم "إنما" أو "ما ... إلا"، بينما الأسلوب الإنجليزي الفصيح الموازي هو الجملة المجزأة (It is X that / What I need is X).',
      badArabicHabit: 'Only your support is what saved us.',
      correctEnglishWay: 'It was your support that saved us.',
    },
    examples: [
      { en: 'It is our shared values, not merely financial incentives, that unite this collective.', ar: 'إنها قيمنا المشتركة، لا مجرد الحوافز المالية، هي ما يوحّد هذا الجمع.', phoneticAr: 'إِت إِز آوِر شَيْرْد ڤَالْيُوز' },
      { en: 'What strikes me most about her scholarship is her unyielding intellectual honesty.', ar: 'أكثر ما يدهشني في مسيرتها العلمية هو نزاهتها الفكرية الصارمة التي لا تلين.', phoneticAr: 'وَات سْتْرَايْكس مِي مَوْسْت' },
      { en: 'It was precisely at that juncture that the course of modern history pivoted.', ar: 'كان في تلك اللحظة المفصلية تحديداً حين تحول مجرى التاريخ الحديث.', phoneticAr: 'إِت وَاز بْرِسَايْسْلِي آتْ ذَات جَانْكْتْشَر' },
    ],
    vocabulary: [
      { word: 'Juncture', ipa: '/ˈdʒʌŋk.tʃɚ/', partOfSpeech: 'noun', meaningAr: 'نقطة تحول مفصلية وتاريخية', exampleEn: 'At this critical juncture, prudence is essential.', exampleAr: 'في هذا المنعطف الحرج، يكون التريث والحكمة أمراً جوهرياً.' },
      { word: 'Unyielding', ipa: '/ʌnˈjiːl.dɪŋ/', partOfSpeech: 'adjective', meaningAr: 'ثابت لا يلين ولا ينكسر أمام التحديات', exampleEn: 'He fought with unyielding determination.', exampleAr: 'ناضل بعزيمة فولاذية صلبة لا تلين.' },
      { word: 'Scholarship', ipa: '/ˈskɑː.lɚ.ʃɪp/', partOfSpeech: 'noun', meaningAr: 'المنهجية العلمية والبحث الرصين', exampleEn: 'Her work is a triumph of rigorous scholarship.', exampleAr: 'عملها هو انتصار للمنهجية العلمية الرصينة.' },
    ],
    commonMistakes: [
      { wrong: 'It was my brother which called you.', correct: 'It was my brother who/that called you.', reasonAr: 'العاقل في تركيب It-cleft يأخذ who أو that وليس which.' },
      { wrong: 'What I want it is peace.', correct: 'What I want is peace.', reasonAr: 'لا تضع it بعد جملة what؛ التركيب هو What I want is peace مباشرة.' },
    ],
    realWorldChallengeAr: 'حوّل هذه الفكرة إلى Cleft Sentence مسلطاً الضوء على الالتزام: Consistency brought me here.',
    exercises: [
      {
        id: 'c1-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة المجزأة (Cleft Sentence) المصاغة بصورة صحيحة وبليغة:',
        instructionEn: 'Identify the correctly structured cleft sentence:',
        question: 'Which of the following creates the most elegant emphatic focus?',
        options: [
          'It is relentless daily dedication that unlocks true mastery.',
          'What relentless daily dedication it unlocks true mastery.',
          'It was relentless daily dedication which it unlocks true mastery.',
          'Relentless daily dedication is what that it unlocks mastery.',
        ],
        correctAnswer: 0,
        explanationAr: 'الصيغة القياسية البليغة: It is + [المؤكَّد] + that + [بقية الجملة].',
      },
      {
        id: 'c1-2-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل أداة الوصل المناسبة في جملة التركيز الصدرية (What I ...):',
        instructionEn: 'Fill in the introductory Wh- word for emphatic cleft:',
        question: '______ (ما) fascinates me most about this theory is its sheer parsimony.',
        correctAnswer: ['What', 'what'],
        explanationAr: 'نبدأ بـ What في تركيب جمل الوصل المجزأة.',
      },
      {
        id: 'c1-2-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المجزأة لتأكيد أن المنهجية هي ما أحدث الفارق:',
        instructionEn: 'Unscramble the cleft sentence:',
        question: 'made / difference / the / that / methodology / the / was / it',
        correctAnswer: 'It was the methodology that made the difference',
        explanationAr: 'ترتيب الجملة المجزأة: It was the methodology that made the difference.',
      },
    ],
  },
  {
    id: 'lesson-c1-3-participle-clauses-concision',
    level: 'C1',
    order: 2,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الإيجاز الأكاديمي والتحوط الدبلوماسي',
    chapterTitleEn: 'Unit 2: Academic Concision and Diplomatic Nuance',
    titleAr: 'الدرس 3: جمل أسماء الفاعلين والمفعولين للإيجاز البليغ (Participle Clauses)',
    titleEn: 'Lesson 3: Participle Clauses for Concise Sophistication',
    category: 'كتابة وأسلوب أكاديمي (C1)',
    iconName: 'BookOpen',
    estimatedMinutes: 16,
    objectivesAr: [
      'استبدال جمل الحال والزمان الطويلة بعبارات الفاعل المختصرة (Present & Past Participle Clauses).',
      'التعبير عن تتابع الأحداث واكتمالها باستخدام Having + Past Participle.',
      'تجنب خطأ "الفاعل المعلق" (Dangling Participle) القاتل في الكتابة الأكاديمية.',
    ],
    explanationMarkdownAr: `### جمل أسماء الفاعلين (Participle Clauses): إيجاز الفصحاء

بدلاً من الجمل الطويلة المرهقة والمكتظة بروابط التبعية (*Because he realized... / After they had analyzed...*):

تسمح لك الإنجليزية الأكاديمية باختصار الجملة ببراعة فائقة:

#### 1. اسم الفاعل الحاضر (Present Participle: Verb-ing):
يحل محل *Because / When / As*:
- بدلاً من: *Because she felt overwhelmed, she took a leave of absence.*
- بأسلوب C1: ***Feeling overwhelmed**, she took a leave of absence.*
- بدلاً من: *As he walked into the auditorium, he noticed the hush.*
- بأسلوب C1: ***Walking into the auditorium**, he noticed the hush.*

#### 2. صيغة التمام المكتمل (Having + Past Participle):
للدلالة الصريحة على أن الفعل الأول **انتهى واكتمل تماماً قبل بدء الفعل الثاني**:
- بدلاً من: *After we had reviewed the audit report, we convened the board.*
- بأسلوب C1: ***Having reviewed the audit report**, we convened the board.*

#### 3. اسم المفعول المبني للمجهول (Past Participle):
- بدلاً من: *Because the software was designed by seasoned cryptographers, it resisted all breaches.*
- بأسلوب C1: ***Designed by seasoned cryptographers**, the software resisted all breaches.*

#### ⚠️ خطأ الفاعل المعلق (Dangling Participle):
فاعل عبارة participle **يجب أن يكون هو نفسه** فاعل الجملة الرئيسية:
- ❌ *Walking down the boulevard, the monument caught my eye.* (كأن النصب التذكاري هو الذي كان يمشي!).
- ✅ *Walking down the boulevard, **I** caught sight of the monument.*`,
    rulesAndStructuresAr: 'Participle Clause تختصر جمل السبب والزمان؛ وتأكد دائماً أن فاعل العبارة المختصرة هو الفاعل المباشر للجملة الرئيسية.',
    summaryAr: 'عبارات Participle Clauses هي السمة الأساسية للمقالات العلمية وتقارير The Economist و Nature.',
    arabicContrastPoint: {
      titleAr: 'الإفراط في تكرار "بسبب أن" و "بعد أن"',
      descriptionAr: 'يميل الكاتب العربي لتكرار Because و After في كل فقرة، بينما الإنجليزية المتقدمة تختزل ذلك بـ Verb-ing أو Having + P.P.',
      badArabicHabit: 'Because he was knowing the truth, he stayed silent.',
      correctEnglishWay: 'Knowing the truth, he remained silent.',
    },
    examples: [
      { en: 'Having scrutinized the balance sheet, the auditor identified subtle inconsistencies.', ar: 'بعد أن فحص الميزانية العمومية بدقة متناهية، اكتشف المدقق تناقضات خفية ومواربة.', phoneticAr: 'هَاڤِينْج سْكْرُوتِنَايْزد ذَا بَالَانْس شِيت' },
      { en: 'Driven by an insatiable curiosity, she pursued quantum computing.', ar: 'مدفوعة بفضول معرفي لا يرتوي، مضت قدماً في دراسة الحوسبة الكمومية.', phoneticAr: 'دْرِيڤِن بَاي آن إِنْسَيْشَابِل كْيُورِيُوسِتِي' },
      { en: 'Realizing the sheer magnitude of the task, the engineers redoubled their efforts.', ar: 'إدراكاً منهم للجسامة الفائقة لتلك المهمة، ضاعف المهندسون جهودهم بحزم.', phoneticAr: 'رِيَالايْزِينْج ذَا شِير مَانِيتْيُود' },
    ],
    vocabulary: [
      { word: 'Scrutinize', ipa: '/ˈskruː.t̬ən.aɪz/', partOfSpeech: 'verb', meaningAr: 'يفحص ويمحص بدقة بالغة تحت المجهر', exampleEn: 'Every line of code was meticulously scrutinized.', exampleAr: 'تم تمحيص كل سطر برمجي بعناية فائقة.' },
      { word: 'Insatiable', ipa: '/ɪnˈseɪ.ʃə.bəl/', partOfSpeech: 'adjective', meaningAr: 'نهم لا يشبع ولا يرتوي', exampleEn: 'He possessed an insatiable appetite for reading.', exampleAr: 'امتلك شغفاً نهماً لا يرتوي للمطالعة.' },
      { word: 'Magnitude', ipa: '/ˈmæɡ.nə.tuːd/', partOfSpeech: 'noun', meaningAr: 'الحجم والجسَامة والأهمية الفائقة', exampleEn: 'The magnitude of the historic victory stunned all.', exampleAr: 'أذهلت جسامة النصر التاريخي الجميع.' },
    ],
    commonMistakes: [
      { wrong: 'After having finished, he left.', correct: 'Having finished, he left / After finishing, he left.', reasonAr: 'لا تجمع بين after و having finished؛ فصيغة having تفيد الانتهاء والمضي بذاتها.' },
      { wrong: 'Arriving at the office, the door was locked.', correct: 'Arriving at the office, I found the door locked.', reasonAr: 'الفاعل المعلق: الباب لم يصل إلى المكتب؛ بل أنا من وصل.' },
    ],
    realWorldChallengeAr: 'اختصر هذه الجملة باستخدام Having + P.P.: After she had finalized the contract, she emailed the client.',
    exercises: [
      {
        id: 'c1-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الأكثر إيجازاً وبلاغة للدلالة على اكتمال الفعل الأول:',
        instructionEn: 'Choose the most sophisticated participle construction:',
        question: '______ all relevant empirical literature, the doctoral candidate drafted the methodology chapter.',
        options: [
          'Having synthesized',
          'After he has synthesized',
          'Synthesizing having',
          'Because synthesized',
        ],
        correctAnswer: 0,
        explanationAr: 'الصيغة الأكاديمية البليغة لاكتمال الفعل الأول هي Having synthesized.',
      },
      {
        id: 'c1-3-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بصيغة اسم الفاعل (Verb-ing) لاختصار جملة السبب:',
        instructionEn: 'Fill in the present participle expressing cause:',
        question: '______ (إدراكاً منها لـ / Realizing) the urgency of the matter, she convened an extraordinary executive council.',
        correctAnswer: ['Realizing', 'realizing'],
        explanationAr: 'نبدأ باسم الفاعل Realizing للإيجاز وحذف Because she realized.',
      },
      {
        id: 'c1-3-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المحتوية على عبارة اسم المفعول المبني للمجهول:',
        instructionEn: 'Unscramble the past participle clause sentence:',
        question: 'survived / storm / built / stone / the / house / of',
        correctAnswer: 'Built of stone the house survived',
        explanationAr: 'ترتيب الجملة: Built of stone, the house survived.',
      },
    ],
  },
  {
    id: 'lesson-c1-4-nuanced-hedging-diplomacy',
    level: 'C1',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الإيجاز الأكاديمي والتحوط الدبلوماسي',
    chapterTitleEn: 'Unit 2: Academic Concision and Diplomatic Nuance',
    titleAr: 'الدرس 4: لغة التحوط والتلطيف الدبلوماسي (Hedging & Stance)',
    titleEn: 'Lesson 4: Nuanced Hedging and Diplomatic Register',
    category: 'تواصل ودبلوماسية (C1)',
    iconName: 'MessageSquare',
    estimatedMinutes: 15,
    objectivesAr: [
      'تجنب الأحكام القطعية الفجة واستبدالها بلغة التحوط العلمي الرصين (Hedging).',
      'إتقان الأفعال المواربة: appear to, seem to, tend to, suggest, indicate.',
      'صياغة اعتراضات نقدية في المؤتمرات الدولية بأسلوب مهذب ومحترم لا يستفز الخصم.',
    ],
    explanationMarkdownAr: `### لغة التحوط (Hedging): بصمة الباحث والمفاوض المحنك

في مستوى **C1**، الجزم المطلق والتعميم الفج يعتبر علامة سذاجة فكرية. الحقيقة العلمية والسياسية تتطلب **التحوط والدقة المتزنة**:

- ❌ الجزم الفج: *This policy is a complete failure and everyone hates it.*
- ✅ التحوط الرصين: *The data **would suggest that** the current policy has met with **considerable skepticism**, and its long-term viability remains **open to question**.*

#### أدوات التحوط المنهجي:
1. **أفعال التلطيف (Softening Verbs)**:
   - *tend to, seem to, appear to, suggest, imply.*
   - *Users **tend to prefer** minimal interfaces.* (أكثر علمية من *Users prefer*).
2. **الظروف الموزونة (Modal Adverbs)**:
   - *Arguably* (بما لا يدع مجالاً للشك تقريباً / يمكن القول بأنه...)
   - *Plausibly, predominantly, conceivably.*
   - *This is **arguably** the most groundbreaking discovery of the decade.*
3. **التراكيب الاحتمالية غير المباشرة**:
   - *It could be argued that...*
   - *Evidence leans toward the conclusion that...*
   - *It might be prudent to consider alternative viewpoints.*`,
    rulesAndStructuresAr: 'استخدم Modal Verbs + Softening Verbs لتجنب التعميم القاطع وإضفاء الرصانة الأكاديمية على أطروحاتك.',
    summaryAr: 'التحوط ليس ضعفاً؛ بل هو مظهر النضج العلمي والتفكير النقدي الرفيع.',
    arabicContrastPoint: {
      titleAr: 'الجزم المطلق في الطرح والنقاش',
      descriptionAr: 'يميل الخطاب العربي إلى التوكيد الحاسم والقاطع (مما لا شك فيه إطلاقاً، بالتأكيد 100%)، بينما الفكر الأنجلوساكسوني الأكاديمي يقدر لغة التقدير والتحوط المنهجي.',
      badArabicHabit: 'This proves 100% that our strategy is the only correct one.',
      correctEnglishWay: 'These findings strongly indicate that our strategy is well-founded.',
    },
    examples: [
      { en: 'The preliminary findings would appear to corroborate our foundational hypothesis.', ar: 'النتائج الأولية يبدو أنها تدعم وتعضد فرضيتنا الأساسية بدرجة معتبرة.', phoneticAr: 'ذَا بْرِلِمِنَارِي فَاينْدِينْغز وُود أَبِير' },
      { en: 'It is arguably premature to draw definitive conclusions from a single observational cohort.', ar: 'من المتعجل والمسرف في التفاؤل -على الأرجح- استخلاص نتائج قطعية ونهائية من فوج رصد تجريبي واحد.', phoneticAr: 'إِت إِز آرْغْيُوَابْلِي بْرِيمَاتْشُور' },
      { en: 'One might cautiously suggest that macroeconomic headwinds contributed to the downturn.', ar: 'قد يميل المرء بحذر لاقتراح أن الرياح الاقتصادية الكلية المعاكسة ساهمت في هذا التراجع.', phoneticAr: 'وَان مَايت كُوشَاسْلِي سَاجِسْت' },
    ],
    vocabulary: [
      { word: 'Arguably', ipa: '/ˈɑːrɡ.ju.ə.bli/', partOfSpeech: 'adverb', meaningAr: 'يمكن البرهنة عليه / على الأرجح بالدليل', exampleEn: 'He is arguably the finest orator of his era.', exampleAr: 'إنه على الأرجح أبلغ خطيب في عصره.' },
      { word: 'Prudent', ipa: '/ˈpruː.dənt/', partOfSpeech: 'adjective', meaningAr: 'حذر وفطن ومتحسب للعواقب', exampleEn: 'It is prudent to diversify strategic investments.', exampleAr: 'من الحكمة والكياسة تنويع الاستثمارات الاستراتيجية.' },
      { word: 'Corroborate', ipa: '/kəˈrɑː.bə.reɪt/', partOfSpeech: 'verb', meaningAr: 'يعضد ويثبت صحة دليل أو شهادة', exampleEn: 'Independent testing corroborated the claims.', exampleAr: 'أكدت الاختبارات المستقلة صحة المزاعم.' },
    ],
    commonMistakes: [
      { wrong: 'It is 100% proved without any doubt.', correct: 'The empirical evidence strongly suggests this conclusion.', reasonAr: 'في الأسلوب الأكاديمي نفضل عبارات الأدلة التجريبية والترجيح على الجزم بـ 100%.' },
      { wrong: 'Everyone thinks this is wrong.', correct: 'There appears to be widespread reservation regarding this premise.', reasonAr: 'استبدل التعبير العامي بأسلوب التحوط الرصين.' },
    ],
    realWorldChallengeAr: 'حوّل هذه الجملة الجازمة إلى جملة أكاديمية متحوطة: This app is the best app in history.',
    exercises: [
      {
        id: 'c1-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصياغة الأكثر تحوطاً ورصانة أكاديمية لعرض الاستنتاج:',
        instructionEn: 'Choose the most academically hedged and rigorous assertion:',
        question: 'Which statement adheres best to scholarly standards of hedging?',
        options: [
          'The data appears to support the hypothesis that early intervention mitigates cognitive decline.',
          'The data absolutely proves that cognitive decline is completely stopped forever.',
          'Everyone knows that early intervention is the only thing that works 100%.',
          'It is a total fact without any doubt whatsoever.',
        ],
        correctAnswer: 0,
        explanationAr: 'استخدام appears to support يمثل النموذج الأمثل للتحوط الأكاديمي الرصين.',
      },
      {
        id: 'c1-4-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بالظرف الأكاديمي الشهير الذي يعني "يمكن القول بحجة قوية / Arguably":',
        instructionEn: 'Fill in the diplomatic hedging adverb:',
        question: 'This paradigm shift is ______ (يمكن القول بحجة معتبرة) the most significant since the digital revolution.',
        correctAnswer: ['arguably', 'Arguably'],
        explanationAr: 'الظرف arguably يستخدم للدلالة على أرجحية الرأي بالحجة والبرهان.',
      },
      {
        id: 'c1-4-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الدبلوماسية المتحوطة:',
        instructionEn: 'Unscramble the hedged diplomatic assertion:',
        question: 'suggest / would / findings / these / that / caution / is / warranted',
        correctAnswer: 'These findings would suggest that caution is warranted',
        explanationAr: 'ترتيب الجملة المتحوطة: These findings would suggest that caution is warranted.',
      },
    ],
  },
  {
    id: 'lesson-c1-5-advanced-idioms-metaphors',
    level: 'C1',
    order: 4,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الإيجاز الأكاديمي والتحوط الدبلوماسي',
    chapterTitleEn: 'Unit 2: Academic Concision and Diplomatic Nuance',
    titleAr: 'الدرس 5: الاستعارات والتعبيرات البلاغية الراقية (High-Register Idioms)',
    titleEn: 'Lesson 5: Advanced Idiomatic Expressions and Metaphors',
    category: 'بلاغة ومفردات (C1)',
    iconName: 'Award',
    estimatedMinutes: 16,
    objectivesAr: [
      'توظيف التعبيرات الاصطلاحية الرفيعة التي يستخدمها كبار المحللين وقادة الفكر.',
      'فهم الاستعارات المعمارية والبحرية والفلسفية في اللغة الإنجليزية المتقدمة.',
      'الابتعاد عن التعبيرات المستهلكة (Clichés) وتوظيف المجاز الأصيل بطبيعية.',
    ],
    explanationMarkdownAr: `### الاستعارات البلاغية الرفيعة: حين تتحول اللغة إلى فن

في مستوى C1، لا نستخدم الأمثال الشعبية البسيطة (*it rains cats and dogs*)، بل نوظف **الاستعارات الاصطلاحية المؤسسية والفكرية** ذات الحضور القوي:

#### 1. استعارات اتخاذ القرار والمواقف الحرجة:
- **Bite the bullet**: يبتلع الألم ويتخذ قراراً صعباً لا مفر منه بشجاعة بعد طول تردد.
- **Burn the midnight oil**: يواصل العمل الدؤوب حتى ساعات الفجر الأولى.
- **Turn the tide**: يقلب موازين القوى ويحوّل مسار المعركة أو المنافسة لصالحه.
- **Tip of the iceberg**: غيض من فيض؛ جزء ضئيل ظاهر من حقيقة أضخم بكثير.

#### 2. استعارات التفاوض والسياسة المؤسسية:
- **Level the playing field**: يوفر تكافؤ الفرص ويزيل الامتيازات غير العادلة.
- **Move the goalposts**: يغير الشروط والقواعد بصورة مجحفة أثناء سير اللعبة.
- **Read between the lines**: يقرأ ما بين السطور ويدرك المقاصد المبطنة.
- **A double-edged sword**: سلاح ذو حدين يحمل نفعاً محتملاً وضراً جسيماً.

#### 3. استعارات البصيرة والتحول:
- **A watershed moment**: لحظة تاريخية فاصلة تقسم ما قبلها عما بعدها.
- **A paradigm shift**: تحول جذري في نموذج التفكير والإدراك الإنساني.`,
    rulesAndStructuresAr: 'وظف التعبيرات الاصطلاحية الرفيعة في سياقها الطبيعي؛ المجاز القوي يختزل فقرة كاملة في عبارة بليغة.',
    summaryAr: 'الاستعارات الفكرية المتقدمة تكشف عن عمق ثقافي وسعة اطلاع في لغة الضاد والإنجليزية على حد سواء.',
    arabicContrastPoint: {
      titleAr: 'استخدام الأمثال الإنجليزية المستهلكة الرديئة',
      descriptionAr: 'يستخدم البعض عبارات مدرسية قديمة مثل "piece of cake" أو "cats and dogs" في اجتماعات عمل رسمية، مما يقلل من رصانة المتحدث، بينما C1 يستدعي استعارات راقية مثل watershed moment أو double-edged sword.',
      badArabicHabit: 'This exam was a piece of cake.',
      correctEnglishWay: 'The assessment was straightforward and well within our competencies.',
    },
    examples: [
      { en: 'The ratification of the digital privacy act marked a watershed moment for consumer rights.', ar: 'شكل التصديق على قانون الخصوصية الرقمية لحظة تاريخية فارقة في حقوق المستهلكين.', phoneticAr: 'ذَا رَاتِيفِيكَيْشَن أُوف ذَا دِيجِيتَال بْرَايڤَاسِي' },
      { en: 'Artificial intelligence is undeniably a double-edged sword that demands ethical stewardship.', ar: 'الذكاء الاصطناعي سلاح ذو حدين لا ريب فيه، يتطلب وصاية وحوكمة أخلاقية رشيدة.', phoneticAr: 'آرْتِيفِيشَال إِنْتِلِيجِنس إِز آنْدِنَايَابْلِي' },
      { en: 'By subsidizing clean technology, the administration sought to level the playing field.', ar: 'من خلال دعم التكنولوجيا النظيفة، سعت الإدارة إلى إرساء تكافؤ حقيقي للفرص.', phoneticAr: 'بَاي سَابْسِدَايْزِينْج كْلِين تِكْنُولُوجِي' },
    ],
    vocabulary: [
      { word: 'Watershed', ipa: '/ˈwɑː.t̬ɚ.ʃed/', partOfSpeech: 'noun', meaningAr: 'حدث فاصل يمثل علامة فارقة في التاريخ', exampleEn: 'The invention of the transistor was a watershed.', exampleAr: 'كان اختراع الترانزستور علامة فارقة في تاريخ البشرية.' },
      { word: 'Stewardship', ipa: '/ˈstuː.ɚd.ʃɪp/', partOfSpeech: 'noun', meaningAr: 'الوصاية والحوكمة الرشيدة المسؤولة', exampleEn: 'Responsible environmental stewardship is our duty.', exampleAr: 'الحوكمة البيئية المسؤولة واجب علينا جميعاً.' },
      { word: 'Subsidize', ipa: '/ˈsʌb.sə.daɪz/', partOfSpeech: 'verb', meaningAr: 'يدعم مالياً لخفض التكلفة', exampleEn: 'The government subsidized green energy research.', exampleAr: 'دعمت الحكومة مالياً أبحاث الطاقة النظيفة.' },
    ],
    commonMistakes: [
      { wrong: 'It was a water shed time.', correct: 'It was a watershed moment.', reasonAr: 'المتلازمة الاصطلاحية الراسخة هي watershed moment.' },
      { wrong: 'They changed the football gates.', correct: 'They moved the goalposts.', reasonAr: 'التعبير المجازي لتغيير الشروط بصورة مجحفة هو to move the goalposts.' },
    ],
    realWorldChallengeAr: 'استخدم التعبير البلاغي a double-edged sword في جملة تصف بها إحدى التقنيات الحديثة.',
    exercises: [
      {
        id: 'c1-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر التعبير الاصطلاحي الرفيع الدال على "لحظة تاريخية فاصلة تقسم ما قبلها عما بعدها":',
        instructionEn: 'Choose the idiom meaning a turning point dividing epochs:',
        question: 'The signing of the peace accord was heralded as a ______ in regional geopolitical stability.',
        options: ['watershed moment', 'piece of cake', 'drop in the ocean', 'turn of events'],
        correctAnswer: 0,
        explanationAr: 'التعبير watershed moment يعني محطة تاريخية فارقة وحاسمة.',
      },
      {
        id: 'c1-5-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل التعبير الاصطلاحي الدال على تكافؤ الفرص (Level the ... field):',
        instructionEn: 'Complete the idiom for fair and equal competition:',
        question: 'New regulatory standards aim to level the ______ (تكافؤ الفرص) field for emerging startups.',
        correctAnswer: ['playing', 'Playing'],
        explanationAr: 'المصطلح هو level the playing field.',
      },
      {
        id: 'c1-5-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المحتوية على استعارة السلاح ذي الحدين:',
        instructionEn: 'Unscramble the double-edged sword metaphor:',
        question: 'sword / is / a / technology / double-edged / always',
        correctAnswer: 'Technology is always a double-edged sword',
        explanationAr: 'ترتيب الجملة البلاغية: Technology is always a double-edged sword.',
      },
    ],
  },
];
