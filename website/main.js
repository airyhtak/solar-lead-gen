/* ========================================
   NJ Solar Lead Gen — main.js
   Lead capture form + utility chart
   ======================================== */

(function () {
  'use strict';

  // ---------- Config ----------
  var WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzz5d5qbaC1SDza0JDCG2mGPqCfv6TciZEkUq3mOGIF56FqyS3sTrjuZ9bJswY1I4QExw/exec';

  // ---------- Utility Rate Data ----------
  var utilityRates = {
    pseg: [
      { year: '2015', rate: 0.165, label: '$0.165/kWh' },
      { year: '2017', rate: 0.162, label: '$0.162/kWh' },
      { year: '2019', rate: 0.167, label: '$0.167/kWh' },
      { year: '2021', rate: 0.174, label: '$0.174/kWh' },
      { year: '2023', rate: 0.188, label: '$0.188/kWh' },
      { year: '2025', rate: 0.241, label: '$0.241/kWh' }
    ],
    jcpl: [
      { year: '2015', rate: 0.133, label: '$0.133/kWh' },
      { year: '2017', rate: 0.135, label: '$0.135/kWh' },
      { year: '2019', rate: 0.131, label: '$0.131/kWh' },
      { year: '2021', rate: 0.132, label: '$0.132/kWh' },
      { year: '2023', rate: 0.140, label: '$0.140/kWh' },
      { year: '2025', rate: 0.179, label: '$0.179/kWh' }
    ]
  };

  // ---------- DOM Helpers ----------
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  // ---------- Sticky Header ----------
  function initStickyHeader() {
    var header = $('#header');
    if (!header) return;

    var scrollHandler = function () {
      if (window.scrollY > 20) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler();
  }

  // ---------- Smooth Scroll ----------
  function initSmoothScroll() {
    $$(('a[href^="#"], .btn[href^="#"]')).forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (!href || href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var headerHeight = 60;
          var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  // ---------- Utility Chart ----------
  function renderChart(utilityKey) {
    var data = utilityRates[utilityKey];
    var maxRate = 0.241; // PSE&G 2025 is the highest
    var chart = $('#rateChart');
    if (!chart) return;

    var html = '';
    data.forEach(function (item, i) {
      var widthPct = Math.round((item.rate / maxRate) * 100);
      var isLast = i === data.length - 1;
      var highlightClass = isLast ? ' rate-chart__bar--highlight' : '';
      html += '<div class="rate-chart__bar-group">' +
        '<div class="rate-chart__label">' + item.year + '</div>' +
        '<div class="rate-chart__track"><div class="rate-chart__bar' + highlightClass + '" style="--bar-width:' + widthPct + '%"><span>' + item.label + '</span></div></div>' +
        '</div>';
    });
    chart.innerHTML = html;

    // Trigger bar animation after a brief delay for DOM paint
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var bars = chart.querySelectorAll('.rate-chart__bar');
        bars.forEach(function (bar, i) {
          setTimeout(function () {
            bar.style.transform = 'scaleX(1)';
          }, i * 100);
        });
      });
    });
  }

  function initUtilityToggle() {
    $$('.utility-toggle__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var utilityKey = this.getAttribute('data-utility');
        // Update active state
        $$('.utility-toggle__btn').forEach(function (b) {
          b.classList.remove('utility-toggle__btn--active');
        });
        this.classList.add('utility-toggle__btn--active');
        renderChart(utilityKey);
      });
    });
  }

  // ---------- Intersection Observer for Chart Animation ----------
  function initChartObserver() {
    var chart = $('.rate-chart');
    if (!chart || !('IntersectionObserver' in window)) return;

    var hasAnimated = false;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          renderChart('pseg');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(chart);
  }

  // ---------- Lead Form Submission ----------
  function initLeadForm() {
    var form = $('#leadForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot check — bots fill hidden fields
      var honeypot = $('#formWebsite');
      if (honeypot && honeypot.value) return;

      // Duplicate submission guard
      if (sessionStorage.getItem('solar_submitted')) return;

      var name = $('#formName').value.trim();
      var phone = $('#formPhone').value.trim();
      var email = $('#formEmail').value.trim();
      var monthlyBill = $('#formBill').value;
      var tcpaConsent = $('#tcpaConsent');

      // Basic validation
      if (!name || !phone || !email || !monthlyBill || (tcpaConsent && !tcpaConsent.checked)) {
        // Highlight empty required fields
        form.querySelectorAll('.input').forEach(function (input) {
          if (!input.value || input.value === '') {
            input.style.borderColor = '#e53e3e';
            input.addEventListener('input', function handler() {
              this.style.borderColor = '';
              this.removeEventListener('input', handler);
            });
            input.addEventListener('change', function handler() {
              this.style.borderColor = '';
              this.removeEventListener('change', handler);
            });
          }
        });
        // Highlight unchecked consent
        if (tcpaConsent && !tcpaConsent.checked) {
          var consentLabel = tcpaConsent.closest('.consent-label');
          if (consentLabel) consentLabel.style.outline = '2px solid #e53e3e';
          tcpaConsent.addEventListener('change', function handler() {
            if (consentLabel) consentLabel.style.outline = '';
            tcpaConsent.removeEventListener('change', handler);
          });
        }
        return;
      }

      // Format validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        $('#formEmail').style.borderColor = '#e53e3e';
        return;
      }
      var phoneDigits = phone.replace(/\D/g, '');
      if (phoneDigits.length < 10 || phoneDigits.length > 11) {
        $('#formPhone').style.borderColor = '#e53e3e';
        return;
      }
      if (name.length > 100) return;

      // Disable submit button
      var submitBtn = $('#submitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      var langField = $('#formLanguage');
      var language = langField ? langField.value : 'en';

      // Capture UTM params + referrer for attribution
      var urlParams = new URLSearchParams(window.location.search);
      var payload = {
        type: 'lead',
        name: name,
        phone: phone,
        email: email,
        monthlyBill: monthlyBill,
        language: language,
        tcpaConsent: 'Yes',
        // Capture the exact consent text the user saw on the page (EN or ES) for the legal record.
        consentText: (function () {
          var consentEl = document.querySelector('.consent-text');
          return consentEl ? consentEl.innerText.trim() : '';
        })(),
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        fbclid: urlParams.get('fbclid') || '',
        gclid: urlParams.get('gclid') || '',
        referrer: document.referrer || '',
        website: honeypot ? honeypot.value : '',
        timestamp: new Date().toISOString()
      };

      // Send to webhook. Only show thank-you and lock the form if the submission
      // actually succeeds — otherwise the user can retry.
      sendToWebhook(payload, function (ok) {
        if (!ok) {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Show Me What I\'d Save';
          }
          alert('Something went wrong submitting your info. Please try again, or text Johan at (201) 275-3380.');
          return;
        }
        sessionStorage.setItem('solar_submitted', 'true');
        form.style.display = 'none';
        var ty = $('#thankYou');
        if (ty) {
          ty.style.display = 'block';
          var firstName = name.split(' ')[0];
          var nameEl = $('#thankYouName');
          if (nameEl) nameEl.textContent = firstName;
        }
      });
    });
  }

  function sendToWebhook(data, done) {
    var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var timeout = controller ? setTimeout(function () { controller.abort(); }, 10000) : null;
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data),
      signal: controller ? controller.signal : undefined
    })
    .then(function (response) {
      if (timeout) clearTimeout(timeout);
      if (!response.ok) { done(false); return; }
      done(true);
    })
    .catch(function () {
      if (timeout) clearTimeout(timeout);
      done(false);
    });
  }

  // ---------- Scroll Reveal Animations ----------
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: make everything visible immediately
      $$('.fade-in-up').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    $$('.fade-in-up').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---------- Mobile CTA Bar ----------
  function initMobileCtaBar() {
    var bar = $('#mobileCta');
    var hero = $('#hero');
    if (!bar || !hero) return;

    window.addEventListener('scroll', function () {
      var heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom < 0) {
        bar.style.transform = 'translateY(0)';
      } else {
        bar.style.transform = 'translateY(100%)';
      }
    }, { passive: true });

    bar.style.transform = 'translateY(100%)';
    bar.style.transition = 'transform .3s ease';
  }

  // ---------- Initialize Everything ----------
  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initSmoothScroll();
    initUtilityToggle();
    initChartObserver();
    initLeadForm();
    initScrollReveal();
    initMobileCtaBar();
  });

})();
