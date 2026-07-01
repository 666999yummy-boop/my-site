/* ---------- i18n ---------- */
const I18N = {
  ru: {
    nav_infected: "Заражённые", nav_story: "История",
    hero_eyebrow: "КАРАНТИННАЯ ЗОНА // СЕКТОР 04", hero_cta: "Открыть архив ↓", hero_scroll: "СКРОЛЛ",
    boot_line1: "ЭКСТРЕННАЯ СЕТЬ ВЕЩАНИЯ FEDRA", boot_line2: "УСТАНОВКА СВЯЗИ",
    joel_case: "ДЕЛО // ВЫЖИВШИЙ-01",
    joel_desc: "Контрабандист из Техаса, потерявший дочь в первый день вспышки. Двадцать лет он выживал, не подпуская к себе никого — пока Марлин не предложила ему работу: провести подростка через всю страну. Он не подозревал, во что это выльется.",
    joel_role_label: "Роль", joel_role_value: "Проводник, контрабандист",
    joel_region_label: "Регион", joel_region_value: "Остин, Техас",
    joel_status_label: "Статус", joel_status_value: "Жив на 20\u00A0год ВС",
    ellie_case: "ДЕЛО // СУБЪЕКТ-E",
    ellie_desc: "Родилась уже после начала эпидемии и знает довоенный мир только по рассказам. Единственная из подтверждённых носителей, чей организм подавляет кордицепс без перехода в заражённого — возможно, ключ к вакцине. Резкая, упрямая и куда более опасная, чем кажется на первый взгляд.",
    ellie_age_label: "Возраст", ellie_age_value: "14 лет",
    ellie_immunity_label: "Иммунитет", ellie_immunity_value: "Подтверждён FEDRA",
    ellie_status_label: "Статус", ellie_status_value: "Под охраной Джоэла",
    infected_case: "ПОЛЕВОЙ СПРАВОЧНИК // КОРДИЦЕПСНАЯ ИНФЕКЦИЯ МОЗГА", infected_title: "Заражённые",
    infected_lede: "Четыре стадии одного и того же гриба, четыре разных способа умереть. Наведите на карточку, чтобы увидеть уровень угрозы.",
    threat_label: "Угроза",
    runner_desc: "Недавно заражённые. Ещё бегут, ещё кричат, ещё почти люди — и потому самые непредсказуемые.",
    stalker_desc: "Прячутся в темноте и нападают из засады группами. Слышат добычу раньше, чем видят её.",
    clicker_desc: "Грибница проросла сквозь череп и ослепила носителя. Ориентируются по звуку — щёлкающему эхолокацией, которое дало им имя.",
    bloater_desc: "Финальная стадия. Панцирь из окаменевшего гриба, чудовищная сила и споры, которые разлетаются при каждом ударе.",
    story_case: "ЖУРНАЛ ПЕРЕДАЧ", story_title: "История",
    story_lede: "Путь через выжженную страну — от одной карантинной зоны до другой, от недоверия до чего-то похожего на семью.",
    tl1_date: "ДЕНЬ 0", tl1_text: "Вспышка кордицепса. Джоэл теряет дочь Сару в первые часы хаоса.",
    tl2_date: "+20 ЛЕТ", tl2_text: "Бостонская QZ. Марлин просит Джоэла и Тесс вывезти Элли за периметр — в обмен на оружие.",
    tl3_date: "ПУТЬ", tl3_text: "Через руины городов, охотников и заражённых Джоэл и Элли пересекают страну в поисках Цикад.",
    tl4_date: "ФИНАЛ", tl4_text: "Возможность лекарства оборачивается ценой, на которую Джоэл не готов пойти. Он выбирает Элли.",
    footer_text: "Фан-проект по мотивам The\u00A0Last\u00A0of\u00A0Us. Все права на персонажей и вселенную принадлежат Naughty Dog / Sony. Не является официальным сайтом.",
    audio_default: "Эмбиент", audio_playing: "Звучит"
  },
  en: {
    nav_infected: "Infected", nav_story: "Story",
    hero_eyebrow: "QUARANTINE ZONE // SECTOR 04", hero_cta: "Open the Archive ↓", hero_scroll: "SCROLL",
    boot_line1: "FEDRA EMERGENCY BROADCAST NETWORK", boot_line2: "ESTABLISHING SIGNAL",
    joel_case: "CASE FILE // SURVIVOR-01",
    joel_desc: "A smuggler from Texas who lost his daughter on the first day of the outbreak. Twenty years of surviving alone, trusting no one — until Marlene offered him a job: escort a teenage girl across the country. He had no idea what it would cost him.",
    joel_role_label: "Role", joel_role_value: "Guide, smuggler",
    joel_region_label: "Region", joel_region_value: "Austin, Texas",
    joel_status_label: "Status", joel_status_value: "Alive, Year 20 PO",
    ellie_case: "CASE FILE // SUBJECT-E",
    ellie_desc: "Born after the outbreak began, she knows the old world only through stories. The only confirmed carrier whose body suppresses cordyceps without turning — possibly the key to a cure. Sharp, stubborn, and far more dangerous than she looks.",
    ellie_age_label: "Age", ellie_age_value: "14 years",
    ellie_immunity_label: "Immunity", ellie_immunity_value: "Confirmed by FEDRA",
    ellie_status_label: "Status", ellie_status_value: "Under Joel's protection",
    infected_case: "FIELD GUIDE // CORDYCEPS BRAIN INFECTION", infected_title: "Infected",
    infected_lede: "Four stages of the same fungus, four different ways to die. Hover a card to see its threat level.",
    threat_label: "Threat",
    runner_desc: "Freshly infected. Still running, still screaming, still almost human — which makes them the most unpredictable.",
    stalker_desc: "They hide in the dark and hunt in packs from ambush, hearing prey long before they see it.",
    clicker_desc: "The fungus has grown through the skull and blinded the host. They navigate by the clicking echolocation that gave them their name.",
    bloater_desc: "The final stage. A shell of hardened fungus, monstrous strength, and spores that burst free with every hit.",
    story_case: "TRANSMISSION LOG", story_title: "Story",
    story_lede: "A journey across a scorched country — from one quarantine zone to another, from distrust to something like family.",
    tl1_date: "DAY 0", tl1_text: "The cordyceps outbreak begins. Joel loses his daughter Sarah in the first hours of chaos.",
    tl2_date: "+20 YEARS", tl2_text: "Boston QZ. Marlene asks Joel and Tess to smuggle Ellie past the checkpoint — in exchange for guns.",
    tl3_date: "THE ROAD", tl3_text: "Through ruined cities, hunters, and the infected, Joel and Ellie cross the country in search of the Fireflies.",
    tl4_date: "THE END", tl4_text: "A chance at a cure comes at a price Joel isn't willing to pay. He chooses Ellie.",
    footer_text: "A fan project inspired by The\u00A0Last\u00A0of\u00A0Us. All rights to the characters and universe belong to Naughty Dog / Sony. This is not an official site.",
    audio_default: "Ambient", audio_playing: "Playing"
  },
  de: {
    nav_infected: "Infizierte", nav_story: "Geschichte",
    hero_eyebrow: "QUARANTÄNEZONE // SEKTOR 04", hero_cta: "Archiv öffnen ↓", hero_scroll: "SCROLLEN",
    boot_line1: "FEDRA-NOTFALLSENDENETZ", boot_line2: "VERBINDUNG WIRD HERGESTELLT",
    joel_case: "AKTE // ÜBERLEBENDER-01",
    joel_desc: "Ein Schmuggler aus Texas, der am ersten Tag des Ausbruchs seine Tochter verlor. Zwanzig Jahre lang überlebte er allein, ohne jemandem zu vertrauen — bis Marlene ihm einen Auftrag anbot: einen Teenager quer durchs Land zu bringen. Er ahnte nicht, was ihn das kosten würde.",
    joel_role_label: "Rolle", joel_role_value: "Führer, Schmuggler",
    joel_region_label: "Region", joel_region_value: "Austin, Texas",
    joel_status_label: "Status", joel_status_value: "Am Leben, Jahr 20 n. A.",
    ellie_case: "AKTE // SUBJEKT-E",
    ellie_desc: "Geboren nach Ausbruch der Seuche, kennt sie die alte Welt nur aus Erzählungen. Die einzige bestätigte Trägerin, deren Körper den Cordyceps-Pilz unterdrückt, ohne sich zu verwandeln — möglicherweise der Schlüssel zu einem Heilmittel. Scharfsinnig, stur und weit gefährlicher, als sie aussieht.",
    ellie_age_label: "Alter", ellie_age_value: "14 Jahre",
    ellie_immunity_label: "Immunität", ellie_immunity_value: "Von FEDRA bestätigt",
    ellie_status_label: "Status", ellie_status_value: "Unter Joels Schutz",
    infected_case: "FELDHANDBUCH // CORDYCEPS-HIRNINFEKTION", infected_title: "Infizierte",
    infected_lede: "Vier Stadien desselben Pilzes, vier verschiedene Arten zu sterben. Fahre über eine Karte, um die Gefahrenstufe zu sehen.",
    threat_label: "Gefahr",
    runner_desc: "Frisch infiziert. Sie rennen noch, schreien noch, sind noch fast menschlich — und deshalb am unberechenbarsten.",
    stalker_desc: "Sie verstecken sich im Dunkeln und jagen im Rudel aus dem Hinterhalt. Sie hören ihre Beute, bevor sie sie sehen.",
    clicker_desc: "Der Pilz ist durch den Schädel gewachsen und hat den Wirt erblinden lassen. Sie orientieren sich am klickenden Echo, das ihnen den Namen gab.",
    bloater_desc: "Das letzte Stadium. Ein Panzer aus verhärtetem Pilz, monströse Kraft und Sporen, die bei jedem Treffer aufplatzen.",
    story_case: "FUNKPROTOKOLL", story_title: "Geschichte",
    story_lede: "Eine Reise durch ein verbranntes Land — von einer Quarantänezone zur nächsten, vom Misstrauen zu etwas wie Familie.",
    tl1_date: "TAG 0", tl1_text: "Der Cordyceps-Ausbruch beginnt. Joel verliert seine Tochter Sarah in den ersten Stunden des Chaos.",
    tl2_date: "+20 JAHRE", tl2_text: "QZ Boston. Marlene bittet Joel und Tess, Ellie am Kontrollpunkt vorbeizuschmuggeln — im Tausch gegen Waffen.",
    tl3_date: "DER WEG", tl3_text: "Durch zerstörte Städte, Jäger und Infizierte durchqueren Joel und Ellie das Land auf der Suche nach den Fireflies.",
    tl4_date: "DAS ENDE", tl4_text: "Die Chance auf ein Heilmittel hat einen Preis, den Joel nicht zahlen will. Er entscheidet sich für Ellie.",
    footer_text: "Ein Fanprojekt inspiriert von The\u00A0Last\u00A0of\u00A0Us. Alle Rechte an Figuren und Universum liegen bei Naughty Dog / Sony. Dies ist keine offizielle Website.",
    audio_default: "Ambient", audio_playing: "Spielt"
  },
  tr: {
    nav_infected: "Enfekteler", nav_story: "Hikâye",
    hero_eyebrow: "KARANTİNA BÖLGESİ // SEKTÖR 04", hero_cta: "Arşivi Aç ↓", hero_scroll: "KAYDIR",
    boot_line1: "FEDRA ACİL YAYIN AĞI", boot_line2: "BAĞLANTI KURULUYOR",
    joel_case: "DOSYA // HAYATTA KALAN-01",
    joel_desc: "Salgının ilk gününde kızını kaybeden Teksaslı bir kaçakçı. Yirmi yıl boyunca kimseye güvenmeden tek başına hayatta kaldı — ta ki Marlene ona bir iş teklif edene kadar: bir genç kızı ülkenin öbür ucuna götürmek. Bunun ona neye mal olacağını bilmiyordu.",
    joel_role_label: "Görev", joel_role_value: "Rehber, kaçakçı",
    joel_region_label: "Bölge", joel_region_value: "Austin, Teksas",
    joel_status_label: "Durum", joel_status_value: "Hayatta, salgının 20. yılı",
    ellie_case: "DOSYA // DENEK-E",
    ellie_desc: "Salgından sonra doğdu, eski dünyayı yalnızca anlatılardan biliyor. Vücudu dönüşüm geçirmeden kordisepsi bastırabilen tek doğrulanmış taşıyıcı — belki de bir tedavinin anahtarı. Keskin zekâlı, inatçı ve göründüğünden çok daha tehlikeli.",
    ellie_age_label: "Yaş", ellie_age_value: "14 yaşında",
    ellie_immunity_label: "Bağışıklık", ellie_immunity_value: "FEDRA tarafından doğrulandı",
    ellie_status_label: "Durum", ellie_status_value: "Joel'in korumasında",
    infected_case: "SAHA REHBERİ // KORDİSEPS BEYİN ENFEKSİYONU", infected_title: "Enfekteler",
    infected_lede: "Aynı mantarın dört evresi, ölmenin dört farklı yolu. Tehdit seviyesini görmek için bir karta gelin.",
    threat_label: "Tehdit",
    runner_desc: "Yeni enfekte olmuşlar. Hâlâ koşuyor, hâlâ bağırıyor, hâlâ neredeyse insan — bu yüzden en öngörülemez olanları.",
    stalker_desc: "Karanlıkta saklanır, sürüler hâlinde pusudan saldırırlar. Avlarını görmeden önce duyarlar.",
    clicker_desc: "Mantar kafatasını delip taşıyıcıyı kör etmiş. Kendilerine adını veren tıklama sesleriyle yön bulurlar.",
    bloater_desc: "Son evre. Sertleşmiş mantardan bir zırh, canavarca bir güç ve her darbede etrafa saçılan sporlar.",
    story_case: "YAYIN KAYDI", story_title: "Hikâye",
    story_lede: "Yanmış bir ülkeyi baştan sona kat eden bir yolculuk — bir karantina bölgesinden diğerine, güvensizlikten aileye benzer bir şeye.",
    tl1_date: "0. GÜN", tl1_text: "Kordiseps salgını başlıyor. Joel, kaosun ilk saatlerinde kızı Sarah'yı kaybediyor.",
    tl2_date: "+20 YIL", tl2_text: "Boston Karantina Bölgesi. Marlene, Joel ve Tess'ten Ellie'yi kontrol noktasından kaçırmalarını ister — karşılığında silah.",
    tl3_date: "YOL", tl3_text: "Yıkık şehirler, avcılar ve enfekteler arasından Joel ve Ellie, Ateşböcekleri'ni bulmak için ülkeyi baştan sona geçer.",
    tl4_date: "SON", tl4_text: "Bir tedavi ihtimali, Joel'in ödemeye razı olmadığı bir bedel getirir. O, Ellie'yi seçer.",
    footer_text: "The Last of Us'tan ilham alan bir hayran projesi. Karakterler ve evren üzerindeki tüm haklar Naughty Dog / Sony'ye aittir. Bu resmi bir site değildir.",
    audio_default: "Ambiyans", audio_playing: "Çalıyor"
  },
  ar: {
    nav_infected: "المصابون", nav_story: "القصة",
    hero_eyebrow: "منطقة الحجر الصحي // القطاع 04", hero_cta: "افتح الأرشيف ↓", hero_scroll: "التمرير",
    boot_line1: "شبكة البث الطارئ لـ FEDRA", boot_line2: "جارٍ إنشاء الاتصال",
    joel_case: "ملف القضية // الناجي-01",
    joel_desc: "مهرّب من تكساس فقد ابنته في اليوم الأول لتفشي الوباء. نجا وحيدًا عشرين عامًا دون أن يثق بأحد، حتى عرضت عليه مارلين مهمة: مرافقة فتاة مراهقة عبر البلاد. لم يكن يعلم أي ثمن سيدفعه.",
    joel_role_label: "الدور", joel_role_value: "مرشد، مهرّب",
    joel_region_label: "المنطقة", joel_region_value: "أوستن، تكساس",
    joel_status_label: "الحالة", joel_status_value: "حيّ، العام العشرون بعد التفشي",
    ellie_case: "ملف القضية // الخاضع-E",
    ellie_desc: "وُلدت بعد بدء الوباء، ولا تعرف العالم القديم إلا من خلال الحكايات. الحاملة الوحيدة المؤكدة التي يقاوم جسدها فطر الكورديسيبس دون أن تتحول — وربما تكون مفتاح العلاج. حادة الذكاء وعنيدة وأخطر بكثير مما تبدو.",
    ellie_age_label: "العمر", ellie_age_value: "14 عامًا",
    ellie_immunity_label: "المناعة", ellie_immunity_value: "مؤكدة من FEDRA",
    ellie_status_label: "الحالة", ellie_status_value: "تحت حماية جويل",
    infected_case: "دليل ميداني // عدوى الكورديسيبس الدماغية", infected_title: "المصابون",
    infected_lede: "أربع مراحل لنفس الفطر، وأربع طرق مختلفة للموت. مرّر فوق البطاقة لرؤية مستوى الخطورة.",
    threat_label: "الخطورة",
    runner_desc: "مصابون حديثًا. ما زالوا يركضون، ما زالوا يصرخون، ما زالوا شبه بشر — لهذا هم الأكثر عدم قابلية للتنبؤ.",
    stalker_desc: "يختبئون في الظلام ويهاجمون في مجموعات من كمين. يسمعون فريستهم قبل أن يروها.",
    clicker_desc: "نما الفطر عبر الجمجمة وأعمى المضيف. يتحركون بالاعتماد على صوت النقر الذي منحهم اسمهم.",
    bloater_desc: "المرحلة الأخيرة. درع من الفطر المتصلب، وقوة وحشية، وأبواغ تتطاير مع كل ضربة.",
    story_case: "سجل البث", story_title: "القصة",
    story_lede: "رحلة عبر بلاد محروقة — من منطقة حجر صحي إلى أخرى، ومن انعدام الثقة إلى ما يشبه العائلة.",
    tl1_date: "اليوم 0", tl1_text: "بدء تفشي الكورديسيبس. يفقد جويل ابنته سارة في الساعات الأولى من الفوضى.",
    tl2_date: "+20 عامًا", tl2_text: "منطقة بوسطن الصحية. تطلب مارلين من جويل وتيس تهريب إيلي عبر نقطة التفتيش مقابل أسلحة.",
    tl3_date: "الطريق", tl3_text: "عبر مدن مدمّرة وصيادين ومصابين، يعبر جويل وإيلي البلاد بحثًا عن جماعة اليراعات.",
    tl4_date: "النهاية", tl4_text: "فرصة العلاج تأتي بثمن لا يرغب جويل في دفعه. يختار إيلي.",
    footer_text: "مشروع من عمل المعجبين مستوحى من The Last of Us. جميع الحقوق الخاصة بالشخصيات والعالم تعود لشركة Naughty Dog / Sony. هذا ليس موقعًا رسميًا.",
    audio_default: "أجواء", audio_playing: "يعمل"
  }
};

const RTL_LANGS = ['ar'];
let currentLang = 'ru';

function applyLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  const dict = I18N[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  const isRtl = RTL_LANGS.includes(lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-ar', lang === 'ar');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Keep the audio button label in sync with playback state + language
  const txt = document.querySelector('#audioToggle .txt');
  if (txt) txt.textContent = isPlaying ? dict.audio_playing : dict.audio_default;
}

function detectInitialLang() {
  const supported = Object.keys(I18N);
  const nav = (navigator.language || 'ru').slice(0, 2).toLowerCase();
  return supported.includes(nav) ? nav : 'ru';
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

/* isPlaying is declared later with the audio logic; applyLanguage is only
   called after the whole script has loaded, so referencing it here is safe. */

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

menuBtn.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  menuBtn.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', isOpen);
});

navList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navList.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

revealEls.forEach(el => revealObserver.observe(el));

/* ---------- Parallax hero layers ---------- */
const sky = document.querySelector('.layer-sky');
const skyline = document.querySelector('.layer-skyline');
const hero = document.querySelector('.hero');
let ticking = false;

function parallax() {
  const y = window.scrollY;
  if (y < window.innerHeight * 1.2) {
    if (sky) sky.style.transform = `translateY(${y * 0.15}px)`;
    if (skyline) skyline.style.transform = `translateY(${y * 0.32}px)`;
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(parallax);
    ticking = true;
  }
}, { passive: true });

/* ---------- Spore particle field ---------- */
const canvas = document.getElementById('spores');
const ctx = canvas.getContext('2d');
let particles = [];
let dpr = Math.min(window.devicePixelRatio || 1, 2);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resizeCanvas() {
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function makeParticle() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.8 + 0.4,
    speedY: Math.random() * 0.25 + 0.06,
    speedX: (Math.random() - 0.5) * 0.3,
    drift: Math.random() * Math.PI * 2,
    driftSpeed: Math.random() * 0.01 + 0.003,
    alpha: Math.random() * 0.5 + 0.15
  };
}

function initParticles() {
  const count = window.innerWidth < 640 ? 34 : 70;
  particles = Array.from({ length: count }, makeParticle);
}

function drawParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach(p => {
    p.drift += p.driftSpeed;
    p.x += p.speedX + Math.sin(p.drift) * 0.15;
    p.y -= p.speedY;
    if (p.y < -10) { p.y = window.innerHeight + 10; p.x = Math.random() * window.innerWidth; }
    if (p.x < -10) p.x = window.innerWidth + 10;
    if (p.x > window.innerWidth + 10) p.x = -10;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(147,171,99,${p.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}

resizeCanvas();
initParticles();
if (!reducedMotion) requestAnimationFrame(drawParticles);
else drawParticles();

window.addEventListener('resize', () => {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  resizeCanvas();
  initParticles();
});

/* ---------- Synthesized ambient sound (no external audio files) ---------- */
let audioCtx = null;
let ambientNodes = null;
let isPlaying = false;
const audioBtn = document.getElementById('audioToggle');

function buildAmbient(ctx) {
  // Filtered noise bed = wind
  const bufferSize = 2 * ctx.sampleRate;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;

  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'lowpass';
  noiseFilter.frequency.value = 420;

  const noiseGain = ctx.createGain();
  noiseGain.gain.value = 0.05;

  // Slow LFO breathing on the wind
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.06;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 140;
  lfo.connect(lfoGain);
  lfoGain.connect(noiseFilter.frequency);

  // Low drone
  const drone = ctx.createOscillator();
  drone.type = 'sine';
  drone.frequency.value = 55;
  const droneGain = ctx.createGain();
  droneGain.gain.value = 0.035;

  const drone2 = ctx.createOscillator();
  drone2.type = 'sine';
  drone2.frequency.value = 82.5;
  const drone2Gain = ctx.createGain();
  drone2Gain.gain.value = 0.02;

  const masterGain = ctx.createGain();
  masterGain.gain.value = 0;

  noise.connect(noiseFilter).connect(noiseGain).connect(masterGain);
  drone.connect(droneGain).connect(masterGain);
  drone2.connect(drone2Gain).connect(masterGain);
  masterGain.connect(ctx.destination);

  noise.start();
  lfo.start();
  drone.start();
  drone2.start();

  return { noise, lfo, drone, drone2, masterGain };
}

audioBtn.addEventListener('click', async () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    ambientNodes = buildAmbient(audioCtx);
  }
  if (audioCtx.state === 'suspended') await audioCtx.resume();

  isPlaying = !isPlaying;
  const now = audioCtx.currentTime;
  ambientNodes.masterGain.gain.cancelScheduledValues(now);
  ambientNodes.masterGain.gain.setValueAtTime(ambientNodes.masterGain.gain.value, now);
  ambientNodes.masterGain.gain.linearRampToValueAtTime(isPlaying ? 1 : 0, now + 1.2);

  audioBtn.setAttribute('aria-pressed', String(isPlaying));
  const dict = I18N[currentLang];
  audioBtn.querySelector('.txt').textContent = isPlaying ? dict.audio_playing : dict.audio_default;
});

/* ---------- Init language (after all state above is declared) ---------- */
applyLanguage(detectInitialLang());
