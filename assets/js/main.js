(function () {
  'use strict';
  var CONFIG = {
    brand: 'إنجاز السعودية',
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
    { t: 'جهّز ملفك — أداة تفاعلية', d: 'اعرف أوراقك حسب مهنتك واطبعها', u: '/checklist.html', k: 'جهز ملفك اداة قائمة تحقق اوراقي مهنتي checklist' },
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

  /* ————— الطباعة: تبني مستنداً نظيفاً مضموناً على أي جهاز ————— */
  window.printPage = function () {
    var main = document.getElementById('main');
    if (!main) { window.print(); return; }

    // عنوان الصفحة (من H1)
    var h1 = main.querySelector('h1');
    var pageTitle = h1 ? h1.textContent.trim() : document.title;

    // اجمع الأقسام: كل عنوان H2/H3 مع قائمة الوثائق التي تليه
    var html = '';
    // إن كانت صفحة الأداة وفيها نتيجة، اطبع القائمة الشخصية فقط
    var res = document.getElementById('result');
    var scope = (res && res.classList.contains('show')) ? res : main;
    if (scope === res) {
      var rt = document.getElementById('resTitle');
      if (rt) pageTitle = rt.textContent.trim();
    }

    var blocks = scope.querySelectorAll('h2, h3, .doc, .check, .res__group, .callout p, .lede');
    blocks.forEach(function (el) {
      var t = el.textContent.trim();
      if (!t) return;
      if (el.tagName === 'H2' && el.id !== 'resTitle') html += '<h2>' + t + '</h2>';
      else if (el.tagName === 'H3') html += '<h3>' + t + '</h3>';
      else if (el.classList.contains('res__group')) html += '<h2>' + t + '</h2>';
      else if (el.classList.contains('lede')) html += '<p class="lede">' + t + '</p>';
      else if (el.classList.contains('doc') || el.classList.contains('check')) {
        var mark = el.classList.contains('done') ? '&#10003;' : '&#9744;';
        html += '<div class="item"><span>' + mark + '</span><p>' + t + '</p></div>';
      }
      else html += '<p class="note">' + t + '</p>';
    });

    var C = window.INJAZ || {};
    var doc = '<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>' + pageTitle + '</title>' +
      '<style>' +
      '@page{size:A4;margin:18mm 16mm}' +
      '*{margin:0;padding:0;box-sizing:border-box;font-family:"Almarai",Arial,sans-serif}' +
      'body{color:#111;line-height:1.7;font-size:12pt}' +
      '.head{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2pt solid #111;padding-bottom:10pt;margin-bottom:16pt}' +
      '.head .b{font-size:16pt;font-weight:800}.head .t{font-size:9pt;color:#444;margin-top:3pt}' +
      '.head .c{font-size:9pt;text-align:left;line-height:1.7;color:#333}' +
      'h1{font-size:18pt;margin-bottom:10pt}' +
      'h2{font-size:14pt;margin:14pt 0 6pt;padding-bottom:3pt;border-bottom:1pt solid #ccc}' +
      'h3{font-size:12.5pt;margin:10pt 0 4pt;color:#3D4A22}' +
      '.lede{font-size:11.5pt;color:#333;margin-bottom:8pt}' +
      '.note{font-size:10.5pt;color:#555;background:#f5f5ef;padding:6pt 9pt;border-right:3pt solid #C4A24C;margin:6pt 0}' +
      '.item{display:flex;gap:7pt;align-items:flex-start;border:0.75pt solid #ccc;border-radius:4pt;padding:6pt 9pt;margin-bottom:5pt;page-break-inside:avoid}' +
      '.item span{color:#4A6B1E;font-weight:800;flex-shrink:0}.item p{font-size:11pt}' +
      '.foot{margin-top:18pt;padding-top:8pt;border-top:1pt solid #999;font-size:8.5pt;color:#666;text-align:center}' +
      '</style></head><body>' +
      '<div class="head"><div><div class="b">إنجاز السعودية</div><div class="t">مركز معتمد لإنجاز معاملات السفارة السعودية</div></div>' +
      '<div class="c">الدوار الأول — جبل عمّان، عمّان<br>هاتف: ' + (C.phone || '') + '<br>saudiinjaz.com</div></div>' +
      '<h1>' + pageTitle + '</h1>' + html +
      '<div class="foot">هذه القائمة إرشادية عامة وقد تتغيّر المتطلبات حسب مسمّى التأشيرة. للتأكد من تفاصيل حالتك تواصل مع إنجاز السعودية · saudiinjaz.com</div>' +
      '</body></html>';

    var w = window.open('', '_blank');
    if (!w) { window.print(); return; }
    w.document.open(); w.document.write(doc); w.document.close();
    w.onload = function () { setTimeout(function () { w.focus(); w.print(); }, 350); };
  };

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

  /* ————— أداة «جهّز ملفك» ————— */
  function initChecklist() {
    var raw = document.getElementById('ckData');
    var box = document.getElementById('result');
    if (!raw || !box) return;

    var D;
    try { D = JSON.parse(raw.textContent); } catch (e) { return; }

    var picks = document.querySelectorAll('.pick');
    var optF = document.getElementById('optFemale');
    var list = document.getElementById('resList');
    var title = document.getElementById('resTitle');
    var count = document.getElementById('resCount');
    var bar = document.getElementById('resBar');
    var current = null, female = false;

    var TICK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

    function row(txt) {
      return '<div class="check" role="checkbox" tabindex="0" aria-checked="false">' +
             '<span class="check__b">' + TICK + '</span>' +
             '<span class="check__t">' + txt + '</span></div>';
    }

    function tally() {
      var all = list.querySelectorAll('.check');
      var done = list.querySelectorAll('.check.done');
      var pct = all.length ? Math.round(done.length / all.length * 100) : 0;
      count.textContent = 'جهّزت ' + done.length + ' من ' + all.length;
      bar.style.width = pct + '%';
    }

    function bindRows() {
      list.querySelectorAll('.check').forEach(function (el) {
        function toggle() {
          var on = el.classList.toggle('done');
          el.setAttribute('aria-checked', on ? 'true' : 'false');
          tally();
        }
        el.addEventListener('click', toggle);
        el.addEventListener('keydown', function (e) {
          if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); }
        });
      });
      tally();
    }

    function render() {
      if (!current) return;
      var cat = null;
      D.cats.forEach(function (c) { if (c.id === current) cat = c; });
      if (!cat) return;

      title.textContent = 'قائمة أوراقك — ' + cat.name;

      var h = '<div class="res__group">وثائق أساسية لكل معاملة</div>';
      D.common.forEach(function (t) { h += row(t); });

      h += '<div class="res__group">مطلوب إضافةً لفئتك: ' + cat.name + '</div>';
      cat.extra.forEach(function (t) { h += row(t); });

      if (female) {
        h += '<div class="res__group">متطلبات إضافية للإناث</div>' + row(D.female);
      }
      if (cat.note) {
        h += '<div class="callout callout--warn" style="margin-top:1.2rem"><p>' + cat.note + '</p></div>';
      }

      list.innerHTML = h;
      bindRows();
      box.classList.add('show');
      bindConfig();
    }

    picks.forEach(function (b) {
      b.addEventListener('click', function () {
        picks.forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        current = b.getAttribute('data-cat');
        render();
        setTimeout(function () {
          box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      });
    });

    if (optF) {
      optF.addEventListener('click', function () {
        female = !female;
        optF.classList.toggle('on', female);
        if (current) render();
      });
    }
  }

  function initPrint() {
    document.querySelectorAll('[data-print]').forEach(function (btn) {
      btn.addEventListener('click', function () { window.printPage(); });
    });
  }

  function init() { bindConfig(); initNav(); initTop(); initFloats(); initSearch(); initReveal(); initPrint(); initChecklist(); bindConfig(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
