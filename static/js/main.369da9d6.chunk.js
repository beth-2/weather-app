(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{51:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n(18),o=n.n(r),u=n(3),s=n(1),i="http://api.openweathermap.org/data/2.5/",b="33951dec42b4a4f440403c96a0228ab2",j=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(u.a)(r,2),j=o[0],d=o[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(i,"weather?q=").concat(n,"&units=metric&APPID=").concat(b)).then((function(e){return e.json()})).then((function(e){c(""),d(e),console.log("result",e)}))}}),Object(s.jsx)("p",{children:j.name})]})},d=n(6),l=n.n(d),h=n(19),p=n(20),O=n.n(p),f=n(21),v=Object(a.createContext)(),x=function(e){var t=Object(f.usePosition)(),n=t.latitude,c=t.longitude;return Object(s.jsx)(v.Provider,{value:{latitude:n,longitude:c},children:e.children})},g=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=(t[0],t[1]),c=Object(a.useContext)(v),r=c.latitude,o=c.longitude,i=function(){var e=Object(h.a)(l.a.mark((function e(t,c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"33951dec42b4a4f440403c96a0228ab2",e.prev=1,e.next=4,O.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(c,"&APPID=").concat("33951dec42b4a4f440403c96a0228ab2"));case 4:a=e.sent,console.log("response",a.data),n(a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r&&o&&i(o,o)}),[r,o]),Object(s.jsx)("div",{})},y=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:function(e){var t=["Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"][e.getDay()],n=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getFullYear();return"".concat(t," ").concat(n," ").concat(c," ").concat(a)}(new Date)})})},w=n(22),m=n(23),P=Object(m.a)(c||(c=Object(w.a)(["\n  body {\n    background-color: #797979;\n  }\n  "]))),k=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{children:Object(s.jsx)(g,{})}),Object(s.jsx)(y,{}),Object(s.jsx)(j,{}),Object(s.jsx)(P,{})]})};o.a.render(Object(s.jsx)(k,{}),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.369da9d6.chunk.js.map