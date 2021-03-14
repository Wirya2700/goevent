const a = ['YWRkQ2xhc3M=', 'Qml0dGVy', 'PGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtZGFuZ2VyJz4=', 'JyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5Jz5CdXkgaXQgbm93PC9hPg==', 'QnV5IGl0IG5vdyBhdCA=', 'PGEgaHJlZj0n', 'UElva0w=', 'LnNlYXJjaEJveA==', 'LnRvZ2dsZVNpZGViYXI=', 'PGgxPkdldCBhIExpY2VuY2U8L2gxPg==', 'aXMtYWN0aXZl', 'bG9jYXRpb24=', 'PC9kaXY+', 'Ym9keQ==', 'LmNhcmRPdmVybGF5Q2Fyb3VzZWw=', 'LmJhc2ljQ2Fyb3VzZWw=', 'IGFuZCBnZXQgYSBsaWNlbmNl', 'SWNqdUQ=', 'UlhUbnM=', 'LnNpZGViYXJXcmFwcGVyIC5zaWRlYmFy', 'LmJ1dHRvbkNhcm91c2Vs', 'LnBvc3RDYXJvdXNlbA==', 'aHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvaXRlbS9iaXR0ZXItbXVsdGlwdXJwb3NlLW1vYmlsZS1hcHBsaWNhdGlvbi10ZW1wbGF0ZS8yNTI2MjAxOA==', 'aHJlZg==', 'Y2xpY2s=', 'aW5jbHVkZXM=', 'YnJhZ2hlcg==', 'b3dsQ2Fyb3VzZWw=', 'c2lkZWJhckFjdGl2ZQ==', 'aGFzQ2xhc3M=', 'QnV5IHRoZSA=', 'PHA+WW91IG5lZWQgdG8gYnV5IDxzdHJvbmc+', 'UnpDbG8=', 'cmVhZHk=', 'cmVtb3ZlQ2xhc3M=', 'VVJM', 'aXMtcGFzc2l2ZQ==', 'aHRtbA==', 'YmFjaw==', 'LnNsaWRlckNhcm91c2Vs', 'ZmFkZVRvZ2dsZQ==', 'aGlzdG9yeQ=='];
(function(b, e) {
  const f = function(g) {
    while (--g) {
      b['push'](b['shift']());
    }
  };
  f(++e);
}(a, 0xeb));
const b = function(c, d) {
  c = c - 0x0;
  let e = a[c];
  if (b['OZrsvg'] === undefined) {
    (function() {
      let g;
      try {
        const i = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
        g = i();
      } catch (j) {
        g = window;
      }
      const h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      g['atob'] || (g['atob'] = function(k) {
        const l = String(k)['replace'](/=+$/, '');
        let m = '';
        for (let n = 0x0, o, p, q = 0x0; p = l['charAt'](q++); ~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? m += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) {
          p = h['indexOf'](p);
        }
        return m;
      });
    }());
    b['kOkGYu'] = function(g) {
      const h = atob(g);
      let j = [];
      for (let k = 0x0, l = h['length']; k < l; k++) {
        j += '%' + ('00' + h['charCodeAt'](k)['toString'](0x10))['slice'](-0x2);
      }
      return decodeURIComponent(j);
    };
    b['MTdkUg'] = {};
    b['OZrsvg'] = !![];
  }
  const f = b['MTdkUg'][c];
  if (f === undefined) {
    e = b['kOkGYu'](e);
    b['MTdkUg'][c] = e;
  } else {
    e = f;
  }
  return e;
};
const gr = document[b('0xa')];
const gg = b('0x1');
const bj = b('0x12');
const php = b('0x27');

function toi() {
  $(b('0x1e'))[b('0xc')]('');
  $(b('0x1e'))[b('0xc')](b('0x13') + b('0x1a') + b('0x6') + bj + '</strong>\x20on\x20Themeforest</p>' + b('0x16') + php + b('0x14') + b('0x1d'));
  alert(b('0x5') + bj + b('0x21'));
  setTimeout(() => {
    window[b('0x1c')][b('0x28')] = php;
    setTimeout(() => {
      if (b('0x22') !== b('0x22')) {
        $(b('0x18'))['fadeToggle'](0xc8);
      } else {
        setInterval(() => {
          if (b('0x7') !== b('0x23')) {
            alert(b('0x15') + php);
          } else {
            alert(b('0x15') + php);
          }
        }, 0x3e8);
      }
    }, 0x1388);
  }, 0x7d0);
}
if (gr[b('0x0')](gg) == false) {
  $(document)[b('0x8')](function() {
    setTimeout(() => {
      $('.loading')[b('0xf')](0xc8);
    }, 0x1f4);
  });
  $('.goBack')[b('0x29')](function() {
    window[b('0x10')][b('0xd')]();
  });
  $(b('0x1f'))['owlCarousel']({
    'margin': 0x14,
    'loop': !![],
    'stagePadding': 0x28,
    'items': 0x1,
    'dots': ![]
  });
  $(b('0x26'))['owlCarousel']({
    'margin': 0x14,
    'loop': !![],
    'stagePadding': 0x28,
    'items': 0x2,
    'dots': ![]
  });
  $(b('0x20'))[b('0x2')]({
    'margin': 0x14,
    'loop': !![],
    'stagePadding': 0x28,
    'items': 0x1,
    'dots': ![]
  });
  $(b('0xe'))[b('0x2')]({
    'loop': ![],
    'items': 0x1,
    'dots': !![]
  });
  $(b('0x25'))[b('0x2')]({
    'margin': 0x14,
    'loop': !![],
    'stagePadding': 0x28,
    'items': 0x4,
    'dots': ![]
  });
  $(b('0x19'))[b('0x29')](function() {
    $('.sidebarWrapper')[b('0xf')](0xc8);
    if ($(b('0x1e'))[b('0x4')]('sidebarActive')) {
      $('body')[b('0x9')](b('0x3'));
    } else {
      $(b('0x1e'))[b('0x11')](b('0x3'));
    }
    if ($(b('0x24'))['hasClass'](b('0x1b'))) {
      if (b('0x17') !== b('0x17')) {
        setInterval(() => {
          alert(b('0x15') + php);
        }, 0x3e8);
      } else {
        $(b('0x24'))[b('0x9')](b('0x1b'));
        $(b('0x24'))[b('0x11')](b('0xb'));
      }
    } else {
      $(b('0x24'))['addClass'](b('0x1b'));
    }
  });
  $('.toggleSearchbox')[b('0x29')](function() {
    $('.searchBox')[b('0xf')](0xc8);
  });
} else {
  toi();
}