(function () {
  'use strict';
  var CONFIG = {
    brand: 'سعودي إنجاز',
    phone: '+962789881009',
    whatsapp: '962789881009',
    email: 'info@saudiinjaz.com',
    address: 'الدوار الأول — جبل عمّان، عمّان، الأردن',
    hours: 'الأحد – الخميس · 9:00 ص – 4:00 م'
  };
  window.INJAZ = CONFIG;

  function contextMessage() {
    var f = (location.pathname || '').toLowerCase().split('/').pop() || '';
    var B = CONFIG.brand;
    if (f.indexOf('work-visa') > -1)     return 'مرحباً ' + B + '، أود الاستفسار عن إجراءات تأشيرة العمل السعودية.';
    if (f.indexOf('attestation') > -1)   return 'مرحباً ' + B + '، أود الاستفسار عن تصديق الشهادات من السفارة السعودية.';
    if (f.indexOf('professional') > -1)  return 'مرحباً ' + B + '، أود الاستفسار عن الاعتماد المهني QVP.';
    if (f.indexOf('companies') > -1)     return 'مرحباً ' + B + '، أمثّل شركة وأود الاستفسار عن خدمات الاستقدام للمؤسسات.';
    if (f.indexOf('required-docs') > -1) return 'مرحباً ' + B + '، أود معرفة الأوراق المطلوبة لحالتي.';
    if (f.indexOf('office-amman') > -1)  return 'مرحباً ' + B + '، أود زيارة المكتب والاستفسار عن الخدمات.';
    return 'مرحباً ' + B + '، لدي استفسار حول خدمات المركز المعتمد.';
  }
  function waLink() { return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(contextMessage()); }

  function bindConfig() {
    document.querySelectorAll('[data-wa]').forEach(function (a) { a.setAttribute('href', waLink()); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); });
    document.querySelectorAll('[data-tel]').forEach(function (a) { a.setAttribute('href', 'tel:' + CONFIG.phone); });
    document.querySelectorAll('[data-mail]').forEach(function (a) { a.setAttribute('href', 'mailto:' + CONFIG.email); });
    document.querySelectorAll('[data-txt="phone"]').forEach(function (el) { el.textContent = CONFIG.phone; });
    document.querySelectorAll('[data-txt="email"]').forEach(function (el) { el.textContent = CONFIG.email; });
    document.querySelectorAll('[data-txt="address"]').forEach(function (el) { el.textContent = CONFIG.address; });
    document.querySelectorAll('[data-txt="hours"]').forEach(function (el) { el.textContent = CONFIG.hours; });
  }

  function initNav() {
    var burger = document.querySelector('.burger'), menu = document.getElementById('mobileNav');
    if (!burger || !menu) return;
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); });
    });
  }

  function initTop() {
    var btn = document.querySelector('.totop'); if (!btn) return;
    var tick = false;
    window.addEventListener('scroll', function () {
      if (tick) return; tick = true;
      requestAnimationFrame(function () { btn.classList.toggle('show', window.scrollY > 420); tick = false; });
    }, { passive: true });
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  function initFloats() {
    if (document.querySelector('.floats')) return;
    var box = document.createElement('div');
    box.className = 'floats';
    box.innerHTML =
      '<a class="float float--wa" data-wa aria-label="تواصل عبر واتساب"><svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5s-.7-1.5-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.7.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg></a>' +
      '<a class="float float--call" data-tel aria-label="اتصال هاتفي"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z"/></svg></a>';
    document.body.appendChild(box);
  }

  var INDEX = [
    { t: 'تأشيرة العمل السعودية', d: 'الشروط والأوراق والرسوم', u: '/work-visa.html', k: 'تأشيرة عمل عقد كفالة وظيفة' },
    { t: 'تصديق الشهادات', d: 'من الجامعة حتى السفارة السعودية', u: '/attestation.html', k: 'تصديق مصادقة شهادة جامعية وثائق خارجية' },
    { t: 'الاعتماد المهني QVP', d: 'التحقق المهني والفحص المهني', u: '/professional.html', k: 'اعتماد مهني qvp فحص تحقق مهندس طبيب' },
    { t: 'الأوراق المطلوبة', d: 'قائمة شاملة حسب الحالة', u: '/required-docs.html', k: 'اوراق وثائق مستندات مطلوبة' },
    { t: 'خدمات الشركات', d: 'باقات الاستقدام للمؤسسات', u: '/companies.html', k: 'شركات مؤسسات استقدام جماعي باقات موظفين' },
    { t: 'مكتبنا في عمّان', d: 'الدوار الأول — جبل عمّان', u: '/office-amman.html', k: 'مكتب عنوان موقع الدوار الاول جبل عمان زيارة' },
    { t: 'كيف نعمل', d: 'آلية العمل خطوة بخطوة', u: '/how-we-work.html', k: 'آلية خطوات مراحل عمل' },
    { t: 'من نحن', d: 'الاعتماد والترخيص والخبرة', u: '/about.html', k: 'من نحن عن المركز اعتماد ترخيص' },
    { t: 'الأسئلة الشائعة', d: 'إجابات على أكثر الاستفسارات', u: '/faq.html', k: 'اسئلة استفسارات شائعة' },
    { t: 'تواصل معنا', d: 'الهاتف والواتساب والعنوان', u: '/contact.html', k: 'تواصل اتصال هاتف واتساب' }
  ];
  function normalize(s) { return (s || '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/[ًٌٍَُِّْ]/g, '').trim().toLowerCase(); }

  function initSearch() {
    var input = document.getElementById('siteSearch'), box = document.getElementById('searchResults');
    if (!input || !box) return;
    function render(q) {
      var nq = normalize(q);
      if (!nq) { box.classList.remove('show'); return; }
      var hits = INDEX.filter(function (i) { return normalize(i.t + ' ' + i.d + ' ' + i.k).indexOf(nq) > -1; }).slice(0, 6);
      if (!hits.length) box.innerHTML = '<div class="search__empty">لا نتائج مطابقة. جرّب كلمة أخرى أو تواصل معنا مباشرة.</div>';
      else box.innerHTML = hits.map(function (h) { return '<a class="search__hit" href="' + h.u + '">' + h.t + '<small>' + h.d + '</small></a>'; }).join('');
      box.classList.add('show');
    }
    var timer;
    input.addEventListener('input', function (e) { clearTimeout(timer); var v = e.target.value; timer = setTimeout(function () { render(v); }, 160); });
    input.addEventListener('focus', function (e) { if (e.target.value) render(e.target.value); });
    document.addEventListener('click', function (e) { if (!input.contains(e.target) && !box.contains(e.target)) box.classList.remove('show'); });
    input.addEventListener('keydown', function (e) { if (e.key === 'Escape') { box.classList.remove('show'); input.blur(); } });
  }

  window.printPage = function () { window.print(); };

  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var els = document.querySelectorAll('.card, .step, .trust__item');
    els.forEach(function (el) { el.style.opacity = '0'; el.style.transform = 'translateY(14px)'; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        var el = en.target;
        setTimeout(function () { el.style.transition = 'opacity .5s ease, transform .5s cubic-bezier(.22,.61,.36,1)'; el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, (i % 4) * 70);
        io.unobserve(el);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    els.forEach(function (el) { io.observe(el); });
  }

  function init() { bindConfig(); initNav(); initTop(); initFloats(); initSearch(); initReveal(); bindConfig(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
