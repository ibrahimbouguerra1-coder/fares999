import type { Lesson } from '../../types/learning.ts';

export const C2_LESSONS: Lesson[] = [
  {
    id: 'lesson-c2-1-parallelism-litotes',
    level: 'C2',
    order: 0,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: ذروة البلاغة وأسلوب البيان الرفيع',
    chapterTitleEn: 'Unit 1: The Apex of Rhetoric and Stylistic Precision',
    titleAr: 'الدرس 1: التوازي البلاغي وأسلوب نفي النقيض (Litotes & Parallelism)',
    titleEn: 'Lesson 1: Syntactic Parallelism and Understatement (Litotes)',
    category: 'بلاغة وقمة الإتقان (C2)',
    iconName: 'Sparkles',
    estimatedMinutes: 18,
    objectivesAr: [
      'توظيف التوازي البلاغي (Parallelism) لتوليد إيقاع صوتي وبلاغي يأسر السامع والقارئ.',
      'إتقان أسلوب نفي النقيض (Litotes) للتأكيد الهادئ المتزن بدلاً من المبالغة الفجة.',
      'محاكاة أسلوب كبار خطباء وأدباء الفكر الإنساني في صياغة الأطروحات الفكرية الفاصلة.',
    ],
    explanationMarkdownAr: `### التوازي البلاغي ونفي النقيض: حين تتنفس اللغة شعراً ونثراً رصيناً

في ذروة الإتقان اللغوي (مستوى **C2**)، لا تقتصر مهمتك على إيصال الفكرة؛ بل على نحتها بأقصى درجات الرقي والاتزان الأسلوبي:

#### 1. أسلوب نفي النقيض (Litotes):
بدلاً من المبالغات الصوتية الفجة (*That was a mind-blowing, super incredible success!*):
يعتمد الخطاب الإنجليزي الرفيع على **تأكيد الفكرة عبر نفي نقيضها** بوقار محسوب:
- *That was **no small accomplishment**.* (تأكيد على عظم الإنجاز دون صراخ).
- *I am **not a little pleased** with the outcome.* (سعيد جداً).
- *His contributions were **by no means negligible**.* (كانت إسهاماته محورية وحاسمة).

#### 2. التوازي البلاغي النحوي (Syntactic Parallelism):
تناسق الأنماط النحوية في العطف والقوائم يمنح النص نغماً موسيقياً وقوة إقناع لا تقاوم:
- *We came **to reflect**, **to understand**, and **to reconcile**.* (توحيد صيغ المصدر).
- *Not by the fury of the storm, but by the quiet resolve of the human spirit.*

#### الأثر في الخطاب القيادي والدبلوماسي:
هذا التناغم البلاغي يعكس عقلاً مرتباً قادراً على هندسة الأفكار المعقدة بأناقة نادرة.`,
    rulesAndStructuresAr: 'تطابق الصيغ في السرد التناظري؛ وتوظيف No / Not مع النقيض للتأكيد المتزن.',
    summaryAr: 'الطلاقة الأسمى لا تصرخ؛ بل تعبر باقتدار ودقة وعمق نثري متوازن.',
    arabicContrastPoint: {
      titleAr: 'المبالغة السطحية مقابل الاتزان البلاغي',
      descriptionAr: 'في الإنجليزية المتقدمة، التعبير الهادئ بنفي النقيض أكثر بلاغة وتأثيراً من صيغ المبالغة الصاخبة.',
      badArabicHabit: 'This is the most super amazing wonderful thing!',
      correctEnglishWay: 'This is an achievement of no modest significance.',
    },
    examples: [
      { en: 'Securing the unanimous agreement was no mean feat.', ar: 'لم يكن تأمين الاتفاق بالإجماع إنجازاً هيناً أو يسيراً على الإطلاق (أسلوب Litotes).', phoneticAr: 'سِكْيُورِينْج ذِي يُونَانِيمَس أَغْرِيمَنْت وَاز نُو مِين فِيت' },
      { en: 'We must learn to live together as brothers, or perish together as fools.', ar: 'يتعين علينا إما أن نتعلم كيف نعيش معاً كإخوة، أو نهلك معاً كحمقى (توازي بلاغي شهير).', phoneticAr: 'وِي مَاسْت لِيرْن تُو لِيڤ تُوغيذر' },
      { en: 'Her argument was by no means lacking in empirical rigor.', ar: 'لم تكن حجتها بحال من الأحوال مفتقرة إلى الرصانة والصرامة المنهجية.', phoneticAr: 'هِير آرْغْيُمِنت وَاز بَاي نُو مِينز لَاكِينْج' },
    ],
    vocabulary: [
      { word: 'Quintessential', ipa: '/ˌkwɪn.təˈsen.ʃəl/', partOfSpeech: 'adjective', meaningAr: 'النموذج الأمثل والمجسد للجوهر', exampleEn: 'He is the quintessential scholar.', exampleAr: 'إنه النموذج الأمثل للمفكر والباحث الأصيل.' },
      { word: 'Understatement', ipa: '/ˈʌn.dɚˌsteɪt.mənt/', partOfSpeech: 'noun', meaningAr: 'التعبير الهادئ المتقصد المخفف لبيان عظم الأمر', exampleEn: 'To call it a masterpiece is an understatement.', exampleAr: 'وصفه بالتحفة الفنية يعتبر تقصيراً في حق عظمته.' },
      { word: 'Reconcile', ipa: '/ˈrek.ən.saɪl/', partOfSpeech: 'verb', meaningAr: 'يوفق بين أمرين متضاربين أو يصالح', exampleEn: 'We must reconcile innovation with ethical duty.', exampleAr: 'يجب أن نوفق بين الابتكار والواجب الأخلاقي.' },
    ],
    commonMistakes: [
      { wrong: 'He likes reading, to swim, and cycling.', correct: 'He likes reading, swimming, and cycling.', reasonAr: 'التوازي البلاغي يتطلب توحيد الصيغ النحوية عبر حروف العطف.' },
      { wrong: 'It was no small thing amazing.', correct: 'It was no small achievement.', reasonAr: 'أسلوب Litotes يكتمل بتركيب متزن مثل no small feat أو no minor task.' },
    ],
    realWorldChallengeAr: 'صغ عبارة تصف نجاح مشروعك بأسلوب Litotes الراقي (باستخدام no small ...)',
    exercises: [
      {
        id: 'c2-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة التي تحقق التوازي البلاغي النحوي (Parallelism) التام:',
        instructionEn: 'Identify the syntactically balanced parallel sentence:',
        question: 'The committee aimed ______.',
        options: [
          'to evaluate the risks, to clarify the terms, and to finalize the deal',
          'evaluating risks, to clarify the terms, and finalize the deal',
          'to evaluate risks, clarifying terms, and finalization',
          'for evaluating risks, to clarify, and deal finalizing',
        ],
        correctAnswer: 0,
        explanationAr: 'التوازي البلاغي التام يتطلب تكرار نفس الصيغة النحوية (to + verb) عبر جميع المعطوفات.',
      },
      {
        id: 'c2-1-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل التعبير البلاغي الشهير لنفي النقيض (No ... feat = إنجاز ليس بالهين):',
        instructionEn: 'Fill in the word completing the classic litotes idiom:',
        question: 'Publishing in Nature before age thirty is no ______ (هين / بسيط / mean) feat.',
        correctAnswer: ['mean', 'small', 'minor'],
        explanationAr: 'المصطلح البلاغي الشهير هو no mean feat أو no small feat.',
      },
      {
        id: 'c2-1-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المعبرة عن أسلوب نفي النقيض المتزن:',
        instructionEn: 'Unscramble the litotes sentence:',
        question: 'mean / victory / was / that / a / no / achievement',
        correctAnswer: 'That victory was no mean achievement',
        explanationAr: 'ترتيب الجملة: That victory was no mean achievement.',
      },
    ],
  },
  {
    id: 'lesson-c2-2-subjunctive-and-archaic-structures',
    level: 'C2',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: ذروة البلاغة وأسلوب البيان الرفيع',
    chapterTitleEn: 'Unit 1: The Apex of Rhetoric and Stylistic Precision',
    titleAr: 'الدرس 2: صيغ الإلزام الصرفي القديم (The Mandative Subjunctive)',
    titleEn: 'Lesson 2: The Mandative Subjunctive and Classical Formulations',
    category: 'قواعد تاريخية ورسمية (C2)',
    iconName: 'ShieldCheck',
    estimatedMinutes: 17,
    objectivesAr: [
      'استخدام صيغة Subjunctive الصريحة مع الأفعال الرسمية (demand, insist, recommend, propose that he do).',
      'إتقان الصياغات الشرطية المحذوفة الفصحى: Be it noted that..., Lest he forget..., Come what may.',
      'قراءة وفهم المعاهدات الدولية والدساتير والوثائق القانونية الرفيعة.',
    ],
    explanationMarkdownAr: `### صيغة Subjunctive: وقار النصوص القانونية والدستورية

في صيغة **Mandative Subjunctive**، عندما تسبق الجملة أفعال طلب أو إلزام رسمي (*demand, insist, require, recommend, decree that...*)، **يظل الفعل في صيغته المصدرية المجردة تماماً (Bare Infinitive)**، حتى مع ضمائر المفرد الغائب (He / She / It)، ودون أي إضافة s أو ed:

#### 1. الأمثلة القياسية للإلزام الصرفي:
- *The board recommended that he **resign** immediately.*
  (لاحظ: resign مجردة بدون s وبدون ed، رغم أن الفاعل he والزمن ماضٍ!).
- *It is imperative that every citizen **abide** by the constitutional decree.*
- *We demand that the prisoner **be** released without delay.* (استخدام be مجردة).

#### 2. التراكيب الكلاسيكية الخالدة:
- **Lest** (خشية أن / لئلا):
  - *Keep a faithful journal, **lest** these memories **fade**.*
- **Be that as it may** (مهما يكن من أمر):
  - *The criticism has merit. **Be that as it may**, we shall proceed.*
- **Come what may** (مهما حدث وليكن ما يكون):
  - *We shall defend this sanctuary, **come what may**.*`,
    rulesAndStructuresAr: 'أفعال الطلب الإلزامي + that + Subject + Verb المجرد دوماً بدون s وبدون to. وفي النفي: not + verb.',
    summaryAr: 'صيغة Subjunctive هي تاج الوقار في القرارات الدستورية والاتفاقيات الدولية.',
    arabicContrastPoint: {
      titleAr: 'إضافة s المفرد بعد أفعال الإلزام الصرفي',
      descriptionAr: 'يقع حتى كبار المتعلمين في خطأ كتابة "I insist that he attends" بوضع s، بينما الصيغة الدستورية الفصيحة تقتضي "that he attend" بالمصدر المجرد.',
      badArabicHabit: 'The judge ordered that he pays the fine.',
      correctEnglishWay: 'The judge ordered that he pay the fine.',
    },
    examples: [
      { en: 'The charter stipulates that every member state contribute equitably to the relief fund.', ar: 'ينص الميثاق على أن تساهم كل دولة عضو مساهمة عادلة في صندوق الإغاثة (لاحظ contribute بالمصدر).', phoneticAr: 'ذَا تْشَارْتَر سْتِيبْيُولَيْتس ذَات إِيڤْرِي مِمْبَر سْتَيْت كُونْتْرِيبْيُوت' },
      { en: 'Be that as it may, the strategic imperative remains wholly unaltered.', ar: 'مهما يكن من أمر، فإن الضرورة الاستراتيجية تظل ثابتة دون أي تبديل.', phoneticAr: 'بِي ذَات آز إِت مَاي' },
      { en: 'It is vital that she not be influenced by outside political leverage.', ar: 'من الأهمية البالغة بمكان ألا تتأثر بالضغوط والامتيازات السياسية الخارجية.', phoneticAr: 'إِت إِز ڤَايْتَال ذَات شِي نُوت بِي إِنْفْلُوإِنْست' },
    ],
    vocabulary: [
      { word: 'Stipulate', ipa: '/ˈstɪp.jə.leɪt/', partOfSpeech: 'verb', meaningAr: 'يشترط شرطاً صريحاً في وثيقة أو عقد', exampleEn: 'The contract stipulates strict penalties.', exampleAr: 'يشترط العقد عقوبات وغرامات صارمة.' },
      { word: 'Imperative', ipa: '/ɪmˈper.ə.t̬ɪv/', partOfSpeech: 'adjective', meaningAr: 'ضرورة ملحة لا تحتمل التأجيل', exampleEn: 'Immediate intervention is imperative.', exampleAr: 'التدخل الفوري ضرورة ملحة وحتمية.' },
      { word: 'Sanctuary', ipa: '/ˈsæŋk.tʃu.er.i/', partOfSpeech: 'noun', meaningAr: 'ملاذ آمن وحرم مقدس', exampleEn: 'The monastery was a sanctuary of peace.', exampleAr: 'كان الدير ملاذاً آمناً يعمه السلام.' },
    ],
    commonMistakes: [
      { wrong: 'I insist that he is present.', correct: 'I insist that he be present.', reasonAr: 'في صيغة Subjunctive نستخدم be المجردة وليس is.' },
      { wrong: 'He suggested that she takes a break.', correct: 'He suggested that she take a break.', reasonAr: 'الفعل بعد suggest that يأتي مجرداً take وليس takes.' },
    ],
    realWorldChallengeAr: 'صغ شرطاً إدارياً رسمياً بصيغة Subjunctive يبدأ بـ: The director proposed that the team...',
    exercises: [
      {
        id: 'c2-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصرفية الصحيحة (Mandative Subjunctive) بعد الفعل insist:',
        instructionEn: 'Choose the correct subjunctive verb form after "insist":',
        question: 'The supreme court insisted that the defendant ______ given immediate legal representation.',
        options: ['be', 'is', 'was', 'to be'],
        correctAnswer: 0,
        explanationAr: 'في صيغة Subjunctive نستخدم أصل فعل الكينونة be المجرد.',
      },
      {
        id: 'c2-2-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل التعبير الكلاسيكي الخالد "مهما يكن من أمر" (Be that as it ...):',
        instructionEn: 'Complete the archaic rhetorical idiom:',
        question: 'Be that as it ______ (قد يكون / may), we shall honor our solemn pact.',
        correctAnswer: ['may', 'May'],
        explanationAr: 'المصطلح الكلاسيكي هو Be that as it may.',
      },
      {
        id: 'c2-2-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة الإلزامية الصرفية:',
        instructionEn: 'Unscramble the mandative subjunctive sentence:',
        question: 'attend / we / that / demand / he / the / trial',
        correctAnswer: 'We demand that he attend the trial',
        explanationAr: 'ترتيب الجملة: We demand that he attend the trial.',
      },
    ],
  },
  {
    id: 'lesson-c2-3-register-modulation-irony',
    level: 'C2',
    order: 2,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الرشاقة اللغوية والدقة التعبيرية',
    chapterTitleEn: 'Unit 2: Register Modulation and Lexical Precision',
    titleAr: 'الدرس 3: التنقل بين الطبقات اللغوية والمفارقة الساخرة (Register & Irony)',
    titleEn: 'Lesson 3: Register Modulation, Nuance, and Subtle Irony',
    category: 'أسلوب وأدب (C2)',
    iconName: 'MessageSquare',
    estimatedMinutes: 17,
    objectivesAr: [
      'التحكم الدقيق في درجة رسمية الخطاب (Register) من العامي الحميم إلى الدبلوماسي الرفيع.',
      'فهم المفارقة الإنجليزية الكلاسيكية (Subtle British Irony) والتفريق بينها وبين التهكم الفج.',
      'تطويع نبرة الصوت والمفردات لتناسب الملوك والسفراء ورؤساء الشركات المتعددة الجنسيات.',
    ],
    explanationMarkdownAr: `### الطبقات اللغوية والمفارقة الساخرة: كيمياء التعبير الأرستقراطي

الكاتب العادي لديه أسلوب واحد يكرره في كل مكان. أما في مستوى **C2**، فأنت **حرباء لغوية** تملك القدرة على تبديل الطبقة اللغوية (Register) وفق السياق:

#### درجات الرسمية في طلب الاعتذار:
1. **Colloquial (عامي)**: *My bad! Won\'t happen again.*
2. **Standard (يومي)**: *I am really sorry about the confusion.*
3. **Formal (مهني)**: *Please accept my sincere apologies for this oversight.*
4. **Elevated / Diplomatic (C2)**: *I must express my profound regret for any inconvenience this regrettable lapse may have occasioned.*

#### المفارقة الإنجليزية الهادئة (Dry Irony):
المفارقة في الإنجليزية الراقية ليست سخرية هجومية، بل هي **ملاحظة ذكية غير مباشرة تتناقض فيها الكلمات مع المعنى العميق بهدوء**:
- عندما يرتكب شخص خطأ جسيماً:
  - *He has chosen an exceptionally novel path to failure.*
- في يوم شديد البرودة والعواصف الثلجية:
  - *The weather today could hardly be described as balmy.*`,
    rulesAndStructuresAr: 'تطويع المفردات والقوالب النحوية بمرونة لتناسب المقام؛ فلكل مقام مقال ولكل مجلس طبقة لغوية تخصه.',
    summaryAr: 'إدراك المفارقة الساخرة الهادئة وفهم ما لا يقال صراحة هو الملاذ الأخير للإتقان اللغوي الكامل.',
    arabicContrastPoint: {
      titleAr: 'الخلط بين الطبقات اللغوية في نفس النص',
      descriptionAr: 'يقع البعض في خطأ إدراج تعبير عامي سوقي وسط مقال أكاديمي رصين (مثل استخدام "kinda" أو "gonna" في تقرير مالي رسمي).',
      badArabicHabit: 'The macroeconomic parameters are gonna collapse.',
      correctEnglishWay: 'The macroeconomic indicators are poised for severe contraction.',
    },
    examples: [
      { en: 'To suggest that his thesis is controversial would be a rather generous euphemism.', ar: 'القول بأن أطروحته مثيرة للجدل يعتبر تلطيفاً كريماً للغاية لحقيقتها (أسلوب تهكم مهذب).', phoneticAr: 'تُو سَاجِسْت ذَات هِيز ثِيسِس إِز كُونْتْرُوڤِيرْشَال' },
      { en: 'With all due deference to your seniority, the empirical data tells an entirely antithetical story.', ar: 'مع كامل التقدير الواجب لأقدميتك ومقامك، فإن البيانات التجريبية تروي رواية مناقضة لذلك تماماً.', phoneticAr: 'وِذ أُول دْيُو دِفِرِنْس تُو يُور سِينْيُورِتِي' },
      { en: 'The ambassador handled the diplomatic provocation with consummate poise.', ar: 'تعامل السفير مع الاستفزاز الدبلوماسي برباطة جأش وحنكة بالغة الكمال.', phoneticAr: 'ذِي أَمْبَاسَادُور هَانْدِلد ذَا دِيبْلُومَاتِك بْرُوڤُوكَيْشَن' },
    ],
    vocabulary: [
      { word: 'Deference', ipa: '/ˈdef.ɚ.əns/', partOfSpeech: 'noun', meaningAr: 'التوقير والاحترام والتقدير المهذب لمقام الآخر', exampleEn: 'He bowed in solemn deference.', exampleAr: 'انحنى بتوقير وإجلال مهيب.' },
      { word: 'Antithetical', ipa: '/ˌæn.t̬iˈθet̬.ɪ.kəl/', partOfSpeech: 'adjective', meaningAr: 'مناقض ومضاد في الجوهر والماهية', exampleEn: 'Censorship is antithetical to genuine freedom.', exampleAr: 'فرض الرقابة مناقض في جوهره للحرية الحقيقية.' },
      { word: 'Consummate', ipa: '/ˈkɑːn.sə.mət/', partOfSpeech: 'adjective', meaningAr: 'فائق البراعة والكمال والاحترافية', exampleEn: 'She played the piano with consummate skill.', exampleAr: 'عزفت على البيانو بمهارة فائقة الكمال.' },
    ],
    commonMistakes: [
      { wrong: 'With all my respect to you, you are wrong.', correct: 'With all due respect, I must respectfully disagree.', reasonAr: 'الصيغة الدبلوماسية المعتمدة هي With all due respect.' },
      { wrong: 'He is kinda smart.', correct: 'He exhibits considerable intellectual acuity.', reasonAr: 'في السجل اللغوي الرفيع نتجنب kinda و sorta.' },
    ],
    realWorldChallengeAr: 'صغ اعتراضاً دبلوماسياً فائق التهذيب على رأي مديرك مستخدماً With all due respect, I would submit that...',
    exercises: [
      {
        id: 'c2-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر التعبير الدبلوماسي الرفيع للاعتراض بأدب جم في مؤتمر دولي:',
        instructionEn: 'Choose the most refined diplomatic disagreement phrase:',
        question: 'Which opening phrase achieves the highest level of diplomatic decorum?',
        options: [
          'With all due deference to the esteemed delegate, I must offer a counter-perspective.',
          'You are totally wrong and your facts are completely fake.',
          'I totally disagree with you, sorry bro.',
          'What you are saying does not make any sense at all.',
        ],
        correctAnswer: 0,
        explanationAr: 'عبارة With all due deference... تمثل قمة اللباقة والكياسة الدبلوماسية.',
      },
      {
        id: 'c2-3-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل الصفة التي تعني "مناقض تماماً في الجوهر والماهية" (Antithetical):',
        instructionEn: 'Fill in the word meaning diametrically opposed:',
        question: 'Arbitrary governance is fundamentally ______ (مناقض في جوهره / antithetical) to democratic jurisprudence.',
        correctAnswer: ['antithetical', 'Antithetical'],
        explanationAr: 'الصفة antithetical تعني متناقض في الماهية والجوهر.',
      },
      {
        id: 'c2-3-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المعبرة عن الاحترام والتوقير الواجب:',
        instructionEn: 'Unscramble the diplomatic phrase:',
        question: 'respect / with / due / all / disagree / I',
        correctAnswer: 'With all due respect I disagree',
        explanationAr: 'ترتيب العبارة الدبلوماسية: With all due respect, I disagree.',
      },
    ],
  },
  {
    id: 'lesson-c2-4-lexical-precision-near-synonyms',
    level: 'C2',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الرشاقة اللغوية والدقة التعبيرية',
    chapterTitleEn: 'Unit 2: Register Modulation and Lexical Precision',
    titleAr: 'الدرس 4: الدقة المعجمية والفروق بين المترادفات (Lexical Precision)',
    titleEn: 'Lesson 4: Lexical Precision and Nuanced Synonyms',
    category: 'معاجم وفلسفة لغة (C2)',
    iconName: 'Compass',
    estimatedMinutes: 17,
    objectivesAr: [
      'انتقاء الكلمة الوحيدة الأكثر دقة جراحية للمعنى المقصود (Le mot juste).',
      'التمييز بين المترادفات المتقاربة جداً: Ephemeral vs Transient, Ambiguous vs Equivocal.',
      'تجنب الحشو اللفظي واختيار المفردة التي تشحن الجملة بكثافة دلالية فريدة.',
    ],
    explanationMarkdownAr: `### الدقة المعجمية الجراحية: لا وجود لمترادفين متطابقين 100%

في مستوى **C2**، تدرك أن اللغة الإنجليزية لا تحتوي على ترادف حقيقي مطلق؛ فكل كلمة تحمل **ظلالاً دلالية ونفسية (Nuances)** تميزها عن شقيقتها:

#### 1. الفارق بين الزائل المؤقت:
- **Ephemeral**: زائل وقصير الأجل بطبيعته الفطرية كالزهور وأمواج البحر والشفق (*ephemeral beauty*).
- **Transient**: عابر ويمر سريعاً دون أن يستقر كالمسافرين والمشاعر المؤقتة (*transient guests, transient sadness*).

#### 2. الفارق بين الغموض والإبهام:
- **Ambiguous**: غامض بطبيعته ويحتمل أكثر من تأويل بريء دون نية خبيثة (*an ambiguous phrasing*).
- **Equivocal**: غامض ومراوغ **عن عمد وقصد مسبق** للتملص وتضليل الآخرين (*an equivocal answer from a politician*).

#### 3. الفارق بين الرصانة والشدة:
- **Rigorous**: صارم ومحكم بهدف الجودة والعدالة العلمية (*rigorous testing*).
- **Draconian**: استبدادي ومفرط في القسوة والظلم (*draconian penalties*).`,
    rulesAndStructuresAr: 'اختر اللفظ الذي يعبر عن الظل النفسي والدلالي الدقيق؛ الدقة اللغوية هي مرآة الدقة الفكرية.',
    summaryAr: 'كل كلمة في مستوى C2 تؤدي وظيفة دقيقة لا تستطيع أي كلمة أخرى في القاموس أداءها بدلاً منها.',
    arabicContrastPoint: {
      titleAr: 'استخدام المترادفات دون إدراك الظلال الدلالية',
      descriptionAr: 'يستخدم البعض ambiguous بمعنى مراوغ، بينما الكلمة الدقيقة للمراوغة المتعمدة هي equivocal، فاحرص على معرفة قصد المتكلم الخفي.',
      badArabicHabit: 'The politician was ambiguous (لقصد: كان يراوغ عمداً).',
      correctEnglishWay: 'The politician was deliberately equivocal.',
    },
    examples: [
      { en: 'Fame is often ephemeral, but enduring craftsmanship leaves an indelible mark.', ar: 'الشهرة غالباً ما تكون زائلة كالهباء، غير أن الإتقان الحرفي الأصيل يترك بصمة لا تمحى أبداً.', phoneticAr: 'فَيْم إِز أُوفِن إِفِمِرَال بَات إِنْدْيُورِينْج' },
      { en: 'The minister gave an equivocal response, carefully dodging the journalist\'s core inquiry.', ar: 'أعطى الوزير إجابة مواربة مراوغة، متهرباً بحذر من السؤال الجوهري للصحفي.', phoneticAr: 'ذَا مِينِسْتَر غَيْڤ آن إِكْوِيڤُوكَال رِسْبُونس' },
      { en: 'Imposing such draconian sanctions will inevitably devastate the civilian populace.', ar: 'إن فرض مثل هذه العقوبات الاستبدادية الجائرة سيلحق حتماً دماراً بالغاً بعامة السكان المدنيين.', phoneticAr: 'إِمْبُوزِينْج سَاتش دْرَاكُونِيَان سَانْكْشَنز' },
    ],
    vocabulary: [
      { word: 'Ephemeral', ipa: '/ɪˈfem.ər.əl/', partOfSpeech: 'adjective', meaningAr: 'زائل وقصير العمر بطبيعته كفقاعة ماء', exampleEn: 'Fashion trends are notoriously ephemeral.', exampleAr: 'صيحات الموضة زائلة ومتقلبة بطبيعتها على الدوام.' },
      { word: 'Equivocal', ipa: '/ɪˈkwɪv.ə.kəl/', partOfSpeech: 'adjective', meaningAr: 'مراوغ ومبهم متقصد لإخفاء الحقيقة', exampleEn: 'His equivocal statements raised widespread suspicion.', exampleAr: 'أثارت تصريحاته المراوغة شكوكاً واسعة النطاق.' },
      { word: 'Indelible', ipa: '/ɪnˈdel.ə.bəl/', partOfSpeech: 'adjective', meaningAr: 'خالد لا يمحى ولا يندثر مع الزمن', exampleEn: 'She left an indelible imprint on modern literature.', exampleAr: 'تركت أثراً خالداً لا يمحى في الأدب المعاصر.' },
    ],
    commonMistakes: [
      { wrong: 'The law was very strong and bad.', correct: 'The law was draconian and disproportionate.', reasonAr: 'في مستوى C2 نرتقي بالمفردات الوصفية إلى الدقة العالية.' },
      { wrong: 'He gave an ephemeral answer.', correct: 'He gave an equivocal answer.', reasonAr: 'الإجابة المراوغة هي equivocal وليست ephemeral (الزائلة).' },
    ],
    realWorldChallengeAr: 'اكتب جملة توضح فيها الفرق بين الجمال الزائل (ephemeral) والأثر الخالد الذي لا يمحى (indelible).',
    exercises: [
      {
        id: 'c2-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الكلمة التي تعني "مراوغ ومتعمد الغموض للهروب من الالتزام":',
        instructionEn: 'Choose the word meaning deliberately vague and evasive:',
        question: 'The CEO offered an ______ explanation that left investors deeply unsettled.',
        options: ['equivocal', 'ephemeral', 'indelible', 'stringent'],
        correctAnswer: 0,
        explanationAr: 'كلمة equivocal تعني غامض ومراوغ عن عمد.',
      },
      {
        id: 'c2-4-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل بالصفة التي تعني "زائل وقصير الأجل بطبيعته الفطرية" (Ephemeral):',
        instructionEn: 'Fill in the word meaning lasting for a very short time:',
        question: 'Youthful vanity is ______ (زائلة وسريعة الزوال); true wisdom endures.',
        correctAnswer: ['ephemeral', 'Ephemeral'],
        explanationAr: 'الصفة ephemeral تعني سريع الزوال وقصير الأمد.',
      },
      {
        id: 'c2-4-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب الجملة المعبرة عن البصمة الخالدة التي لا تمحى:',
        instructionEn: 'Unscramble the sentence with indelible:',
        question: 'mark / an / left / she / history / on / indelible',
        correctAnswer: 'She left an indelible mark on history',
        explanationAr: 'ترتيب الجملة: She left an indelible mark on history.',
      },
    ],
  },
  {
    id: 'lesson-c2-5-capstone-oratorical-synthesis',
    level: 'C2',
    order: 4,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التتويج والخطاب القيادي الشامل',
    chapterTitleEn: 'Unit 3: Capstone Synthesis and Oratorical Command',
    titleAr: 'الدرس 5: التتويج والخطاب القيادي الشامل (The Capstone Synthesis)',
    titleEn: 'Lesson 5: The Capstone Synthesis: Oratorical Command and Masterful Fluency',
    category: 'إتقان شامل وتتويج (C2)',
    iconName: 'Award',
    estimatedMinutes: 20,
    objectivesAr: [
      'دمج كافة أدوات البلاغة النحوية (Inversion, Clefting, Litotes, Parallelism) في خطاب قيادي متكامل.',
      'التعبير عن الأفكار الفلسفية المعقدة بأصالة وفصاحة لا يمكن تمييزها عن عمالقة اللغة.',
      'الوصول إلى قمة هرم الطلاقة الإنجليزية (Native-Level Articulation & Charisma).',
    ],
    explanationMarkdownAr: `### التتويج والخطاب القيادي الشامل: حيث يلتقي الفكر بالبيان

لقد قطعت الرحلة كاملة: من التعرف على أصوات الحروف في **A0**، إلى بناء الجمل في **A1-A2**، ثم إتقان التراكيب المعقدة في **B1-B2**، والتحليق في البلاغة الأكاديمية في **C1**.

في هذا الدرس التتويجي الأخير، أنت **تدمج كل هذه الأوركسترا اللغوية** في نسق بياني ساحر:

#### عناصر الخطاب الإنجليزي الخالد:
1. **استهلال وقور بأسلوب القلب أو نفي النقيض**:
   - *Seldom in the annals of human enterprise has a moment demanded such clarity.*
2. **تسليط بؤري بجملة مجزأة (Clefting)**:
   - *It is not the ease of the terrain, but the steadfastness of our convictions that shall prevail.*
3. **توازن إيقاعي متناظر (Syntactic Parallelism)**:
   - *We stand ready to question inherited dogma, to champion unvarnished truth, and to forge a luminous future.*
4. **خاتمة بلاغية رصينة بنبرة Litotes**:
   - *This journey has been no minor undertaking, and its fruits shall remain indelible.*

أنت الآن لا تتحدث لغة أجنبية؛ بل تملك أداة تفكير كوكبية تعبر بها عن روحك وعقلك بأبهى حلية ممكنة.`,
    rulesAndStructuresAr: 'تكامل البلاغة والبيان؛ صهر القواعد النحوية في خدمة المعنى السامي والأثر الإنساني الخالد.',
    summaryAr: 'مبارك وصولك إلى قمة الإتقان اللغوي C2؛ لقد أصبحت فارساً حقيقياً في ميدان البيان الإنجليزي.',
    arabicContrastPoint: {
      titleAr: 'الترجمة الذهنية مقابل التفكير المباشر باللغة',
      descriptionAr: 'في مستوى C2، تنتهي تماماً مرحلة الترجمة الذهنية؛ تصبح أفكارك تتدفق وتتشكل مباشرة في قوالب الإنجليزية الأصيلة بلا وسيط.',
      badArabicHabit: 'Thinking in Arabic first and trying to translate idioms.',
      correctEnglishWay: 'Direct conceptual articulation with natural English cadence and flow.',
    },
    examples: [
      { en: 'Seldom do words alone capture the magnitude of a profound human transformation.', ar: 'نادراً ما تفي الكلمات وحدها بحجم وجسامة التحول الإنساني العميق.', phoneticAr: 'سِلْدَم دُو وِيرْدز أَلُون كَابْتْشَر' },
      { en: 'It is through unremitting discipline that intellectual potential is transmuted into enduring legacy.', ar: 'من خلال الانضباط الدؤوب الذي لا يفتر، تتحول الطاقات الفكرية الكامنة إلى إرث خالد عبر العصور.', phoneticAr: 'إِت إِز ثْرُو آنْرِمِيتِينْج دِسِبْلِن' },
      { en: 'To conquer a new language is to acquire a second soul, and yours is now fully awakened.', ar: 'أن تقهر لغة جديدة وتتقنها يعني أن تكتسب روحاً ثانية، وروحك الآن في كامل يقظتها وإشراقها.', phoneticAr: 'تُو كُونْكِر أَه نْيُو لَانْغْوِيج' },
    ],
    vocabulary: [
      { word: 'Unremitting', ipa: '/ˌʌn.rɪˈmɪt̬.ɪŋ/', partOfSpeech: 'adjective', meaningAr: 'دؤوب ومستمر بلا كلل ولا انقطاع', exampleEn: 'Success is born of unremitting effort.', exampleAr: 'النجاح وليد الجهد الدؤوب المتواصل.' },
      { word: 'Transmute', ipa: '/trænzˈmjuːt/', partOfSpeech: 'verb', meaningAr: 'يحوّل الجوهر إلى شيء أسمى وأرقى', exampleEn: 'Hardship transmuted into profound wisdom.', exampleAr: 'تحولت المشاق والمحن إلى حكمة عميقة.' },
      { word: 'Legacy', ipa: '/ˈleɡ.ə.si/', partOfSpeech: 'noun', meaningAr: 'الإرث الحضاري والفكري الخالد', exampleEn: 'Build a legacy that outlasts your lifetime.', exampleAr: 'ابنِ إرثاً يعيش أطول من عمرك الفردي.' },
    ],
    commonMistakes: [
      { wrong: 'I have finished English completely.', correct: 'I have achieved native-level C2 mastery, and lifelong refinement continues.', reasonAr: 'إتقان اللغة رحلة مستمرة نحو الجمال والاتساع الفكري.' },
    ],
    realWorldChallengeAr: 'اكتب خطاب تخرج شخصي من 3 أسطر باللغة الإنجليزية يجمع بين التوازي البلاغي ونفي النقيض احتفاءً بوصولك لمستوى C2.',
    exercises: [
      {
        id: 'c2-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة البلاغية الشاملة الأكثر فصاحة ورصانة لقيادة ختامية:',
        instructionEn: 'Choose the most oratorically masterful synthesis statement:',
        question: 'Which sentence best exemplifies the pinnacle of C2 oratorical command?',
        options: [
          'It is not by fortune, but by relentless discipline, that enduring mastery is forged.',
          'Everyone knows that we are the best because we worked very hard.',
          'Language is good and we finished everything successfully today.',
          'It was lucky that we did not fail along the whole road.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى تجمع بين Clefting والتوازي البلاغي والدقة المعجمية الرصينة.',
      },
      {
        id: 'c2-5-ex-2',
        type: 'fill_blank',
        instructionAr: 'أكمل الكلمة التي تعني "يحول الجوهر إلى شيء أسمى وأرقى" (Transmuted):',
        instructionEn: 'Fill in the verb meaning transformed into a higher state:',
        question: 'Through rigorous discipline, humble curiosity is ______ (تتحول إلى جوهر أسمى / transmuted) into supreme mastery.',
        correctAnswer: ['transmuted', 'Transmuted'],
        explanationAr: 'الفعل transmuted يعني تحوّل إلى ما هو أنبل وأسمى.',
      },
      {
        id: 'c2-5-ex-3',
        type: 'sentence_scramble',
        instructionAr: 'رتّب درة التتويج اللغوي بأسلوب Inversion البلاغي الرفيع:',
        instructionEn: 'Unscramble the capstone oratorical sentence:',
        question: 'such / seldom / witnessed / dedication / we / have',
        correctAnswer: 'Seldom have we witnessed such dedication',
        explanationAr: 'ترتيب الجملة البلاغية: Seldom have we witnessed such dedication.',
      },
    ],
  },
];
