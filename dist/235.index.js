'use strict';
(self.webpackChunkrustapp = self.webpackChunkrustapp || []).push([
  [235],
  {
    235: (n, e, t) => {
      t.a(n, async (n, r) => {
        try {
          t.r(e),
            t.d(e, {
              __wbg_log_4b5638ad60bdc54a: () => o.Pc,
              __wbindgen_object_drop_ref: () => o.ug,
              __wbindgen_string_new: () => o.h4,
              __wbindgen_throw: () => o.Or,
              grayscale: () => o.se,
            });
          var o = t(838),
            c = n([o]);
          (o = (c.then ? (await c)() : c)[0]), r();
        } catch (n) {
          r(n);
        }
      });
    },
    838: (n, e, t) => {
      t.a(n, async (r, o) => {
        try {
          t.d(e, {
            Or: () => I,
            Pc: () => E,
            h4: () => A,
            se: () => m,
            ug: () => T,
          });
          var c = t(530);
          n = t.hmd(n);
          var a = r([c]);
          c = (a.then ? (await a)() : a)[0];
          let i = new (
            'undefined' == typeof TextDecoder
              ? (0, n.require)('util').TextDecoder
              : TextDecoder
          )('utf-8', { ignoreBOM: !0, fatal: !0 });
          i.decode();
          let _ = new Uint8Array();
          function u() {
            return (
              0 === _.byteLength && (_ = new Uint8Array(c.memory.buffer)), _
            );
          }
          function d(n, e) {
            return i.decode(u().subarray(n, n + e));
          }
          const f = new Array(32).fill(void 0);
          f.push(void 0, null, !0, !1);
          let l = f.length;
          function s(n) {
            l === f.length && f.push(f.length + 1);
            const e = l;
            return (l = f[e]), (f[e] = n), e;
          }
          function g(n) {
            return f[n];
          }
          function w(n) {
            n < 36 || ((f[n] = l), (l = n));
          }
          function h(n) {
            const e = g(n);
            return w(n), e;
          }
          let b = 0,
            y = new (
              'undefined' == typeof TextEncoder
                ? (0, n.require)('util').TextEncoder
                : TextEncoder
            )('utf-8');
          const p =
            'function' == typeof y.encodeInto
              ? function (n, e) {
                  return y.encodeInto(n, e);
                }
              : function (n, e) {
                  const t = y.encode(n);
                  return e.set(t), { read: n.length, written: t.length };
                };
          function v(n, e, t) {
            if (void 0 === t) {
              const t = y.encode(n),
                r = e(t.length);
              return (
                u()
                  .subarray(r, r + t.length)
                  .set(t),
                (b = t.length),
                r
              );
            }
            let r = n.length,
              o = e(r);
            const c = u();
            let a = 0;
            for (; a < r; a++) {
              const e = n.charCodeAt(a);
              if (e > 127) break;
              c[o + a] = e;
            }
            if (a !== r) {
              0 !== a && (n = n.slice(a)),
                (o = t(o, r, (r = a + 3 * n.length)));
              const e = u().subarray(o + a, o + r);
              a += p(n, e).written;
            }
            return (b = a), o;
          }
          let k = new Int32Array();
          function x() {
            return (
              0 === k.byteLength && (k = new Int32Array(c.memory.buffer)), k
            );
          }
          function m(n) {
            try {
              const r = c.__wbindgen_add_to_stack_pointer(-16),
                o = v(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
                a = b;
              c.grayscale(r, o, a);
              var e = x()[r / 4 + 0],
                t = x()[r / 4 + 1];
              return d(e, t);
            } finally {
              c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(e, t);
            }
          }
          function A(n, e) {
            return s(d(n, e));
          }
          function T(n) {
            h(n);
          }
          function E(n) {
            console.log(g(n));
          }
          function I(n, e) {
            throw new Error(d(n, e));
          }
          o();
        } catch (O) {
          o(O);
        }
      });
    },
    530: (n, e, t) => {
      t.a(
        n,
        async (r, o) => {
          try {
            var c,
              a = r([(c = t(838))]),
              [c] = a.then ? (await a)() : a;
            await t.v(e, n.id, '823af7d975af8ed46944', {
              './index_bg.js': {
                __wbindgen_string_new: c.h4,
                __wbindgen_object_drop_ref: c.ug,
                __wbg_log_4b5638ad60bdc54a: c.Pc,
                __wbindgen_throw: c.Or,
              },
            }),
              o();
          } catch (n) {
            o(n);
          }
        },
        1
      );
    },
  },
]);
