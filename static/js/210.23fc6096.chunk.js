"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[210],{386:function(e,n,t){t.d(n,{Hx:function(){return m},ft:function(){return f},mv:function(){return l},uV:function(){return x},wr:function(){return u}});var r=t(861),c=t(757),a=t.n(c),i=t(243),o="https://api.themoviedb.org/3",s="ac42f564de8ddb77fcda2c2a24267b01";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/movie/").concat(n,"?api_key=").concat(s,"&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},210:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}t.r(n),t.d(n,{default:function(){return U}});var a,i,o,s,u,p,l,d,f,h=t(439),x=t(791),v=t(689),m=t(386),b=t(168),g=t(444),j=t(87),y=(0,g.ZP)(j.rU)(a||(a=(0,b.Z)(["\ntext-decoration:none;\npadding: 5px 7px;\nborder-radius: 4px;\ndisplay:flex;\n"]))),w=g.ZP.section(i||(i=(0,b.Z)(["\nmargin: 10px 20px\n"]))),Z=g.ZP.div(o||(o=(0,b.Z)(["\ndisplay: flex;\ngap: 20px;\nmargin-bottom: 15px"]))),O=g.ZP.h1(s||(s=(0,b.Z)(["\nmargin-bottom: 10px"]))),k=g.ZP.h2(u||(u=(0,b.Z)(["\nmargin-bottom: 10px"]))),P=g.ZP.p(p||(p=(0,b.Z)(["\nmargin-bottom: 15px"]))),_=g.ZP.ul(l||(l=(0,b.Z)(["\nlist-style: none;\ndisplay: flex;\ngap: 10px\n"]))),D=g.ZP.div(d||(d=(0,b.Z)(["\ndisplay: flex;\ngap: 10px;\nmargin-bottom: 15px"]))),S=(0,g.ZP)(j.OL)(f||(f=(0,b.Z)(["\ncolor: black;\n\n&.active {\n    color: orange;\n}\n"])));var C=t.p+"static/media/arrow.c47b0ae498b874d74f52ee52fe9e52d6.svg",E=t(184);function U(){var e,n,t,a=(0,x.useState)({}),i=(0,h.Z)(a,2),o=i[0],s=i[1],u=(0,v.UO)().moviesId,p=(0,v.TH)(),l=(0,x.useRef)(null!==(e=null===(n=p.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return console.log(o),(0,x.useEffect)((function(){(0,m.ft)(u).then((function(e){return s(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.data))})).catch((function(e){return console.log(e.message)}))}),[u]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(y,{to:l.current,children:[(0,E.jsx)("img",{src:C,alt:"arrow",width:20}),"Go back"]}),(0,E.jsxs)(w,{children:[(0,E.jsxs)(Z,{children:[(0,E.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(o.poster_path),alt:o.title}),(0,E.jsxs)("div",{children:[(0,E.jsx)(O,{children:o.title}),(0,E.jsxs)(P,{children:["User score: ",o.vote_average]}),(0,E.jsx)(k,{children:"Overview"}),(0,E.jsx)(P,{children:o.overview}),(0,E.jsx)(k,{children:"Genres"}),(0,E.jsx)(_,{children:null===(t=o.genres)||void 0===t?void 0:t.map((function(e){var n=e.id,t=e.name;return(0,E.jsx)("li",{children:t},n)}))})]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(k,{children:"Additional information"}),(0,E.jsxs)(D,{children:[(0,E.jsx)(S,{to:"cast",children:"Cast"}),(0,E.jsx)(S,{to:"reviews",children:"Reviews"})]})]}),(0,E.jsxs)(x.Suspense,{fallback:(0,E.jsx)("div",{children:"Loading..."}),children:[" ",(0,E.jsx)(v.j3,{})]})]})]})}}}]);
//# sourceMappingURL=210.23fc6096.chunk.js.map