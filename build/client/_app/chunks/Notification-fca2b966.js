import{S as p,i as d,s as g,aa as b,w as i,x as f,y as u,q as l,o as m,B as _,a2 as S,R as h,t as k,h as M,g as I,j as w,d as y}from"./vendor-c8dd5f6b.js";function D(a){return a*1e3}function N(a){let e;return{c(){e=k(a[0])},l(n){e=M(n,a[0])},m(n,t){I(n,e,t)},p(n,t){t&1&&w(e,n[0])},d(n){n&&y(e)}}}function j(a){let e,n;return e=new S({props:{$$slots:{default:[N]},$$scope:{ctx:a}}}),{c(){i(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,s){u(e,t,s),n=!0},p(t,s){const r={};s&33&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function q(a){let e,n,t={timeoutMs:a[2],$$slots:{default:[j]},$$scope:{ctx:a}};return e=new b({props:t}),a[4](e),{c(){i(e.$$.fragment)},l(s){f(e.$$.fragment,s)},m(s,r){u(e,s,r),n=!0},p(s,[r]){const o={};r&33&&(o.$$scope={dirty:r,ctx:s}),e.$set(o)},i(s){n||(l(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){a[4](null),_(e,s)}}}const C=8;function x(a,e,n){let{message:t=""}=e,s="";const r=D(C);let o;function $(c){h[c?"unshift":"push"](()=>{o=c,n(1,o)})}return a.$$set=c=>{"message"in c&&n(3,t=c.message)},a.$$.update=()=>{a.$$.dirty&11&&t!=s&&o!=null&&(n(0,s=t),o.open())},[s,o,r,t,$]}class E extends p{constructor(e){super();d(this,e,x,q,g,{message:3})}}export{E as N};