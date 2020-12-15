(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[192,190,191],{"/590":function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),r=n("q1tI"),o=n.n(r),c=(n("B2uJ"),n("+su7"),n("qOys")),m=n.n(c),l=n("5Yjd"),s=n.n(l),i=o.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("RTWq")),r=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(r)})),u=o.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("r7At")),r=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(r)}));t["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"countdown-\u5012\u8ba1\u65f6"},o.a.createElement("a",{"aria-hidden":"true",href:"#countdown-\u5012\u8ba1\u65f6"},o.a.createElement("span",{className:"icon icon-link"})),"CountDown \u5012\u8ba1\u65f6"),o.a.createElement("p",null,"\u5bf9\u67d0\u4e2a\u65f6\u95f4\u8ddd\u79bb\u5f53\u524d\u65f6\u95f4\u7684\u8be6\u7ec6\u65f6\u95f4\u8fdb\u884c\u5c55\u793a"),o.a.createElement("h2",{id:"\u793a\u4f8b"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},o.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),o.a.createElement(s.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport CountDown from 'm78/count-down';\nimport 'm78/count-down/style';\n\nconst d = new Date();\n\nconst Demo = () => (\n  <div>\n    <h3>\u5927\u4e8e30\u5929: </h3>\n    <CountDown date={new Date(d.getFullYear(), d.getMonth() + 2, 1)} />\n\n    <h3 className=\"mt-24\">10\u5929\u540e: </h3>\n    <CountDown date={new Date(d.getFullYear(), d.getMonth(), d.getDate() + 10)} />\n\n    <h3 className=\"mt-24\">\u8d85\u65f6: </h3>\n    <CountDown date=\"2008-08-08\" />\n  </div>\n);\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport CountDown from 'm78/count-down';\nimport 'm78/count-down/style';\n\nconst d = new Date();\n\nconst Demo = () => (\n  <div>\n    <h3>\u5927\u4e8e30\u5929: </h3>\n    <CountDown date={new Date(d.getFullYear(), d.getMonth() + 2, 1)} />\n\n    <h3 className=\"mt-24\">10\u5929\u540e: </h3>\n    <CountDown date={new Date(d.getFullYear(), d.getMonth(), d.getDate() + 10)} />\n\n    <h3 className=\"mt-24\">\u8d85\u65f6: </h3>\n    <CountDown date=\"2008-08-08\" />\n  </div>\n);\n\nexport default Demo;\n"}},{path:"/_demos/count-down-demo",dependencies:{},files:{}}),o.a.createElement(i,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u683c\u5f0f"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u81ea\u5b9a\u4e49\u683c\u5f0f"},o.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u683c\u5f0f")),o.a.createElement(s.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport CountDown from 'm78/count-down';\nimport 'm78/count-down/style';\n\nconst d = new Date();\n\nconst Demo = () => (\n  <div>\n    <CountDown\n      date={new Date(d.getFullYear(), d.getMonth() + 2, 1)}\n      format={meta => `\u8ddd\u79bb\u6d3b\u52a8\u7ed3\u675f\u5269\u4f59${meta.d}\u5929${meta.d}\u65e5${meta.h}\u65f6${meta.m}\u5206${meta.s}\u79d2`}\n    />\n  </div>\n);\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport CountDown from 'm78/count-down';\nimport 'm78/count-down/style';\n\nconst d = new Date();\n\nconst Demo = () => (\n  <div>\n    <CountDown\n      date={new Date(d.getFullYear(), d.getMonth() + 2, 1)}\n      format={meta => `\u8ddd\u79bb\u6d3b\u52a8\u7ed3\u675f\u5269\u4f59${meta.d}\u5929${meta.d}\u65e5${meta.h}\u65f6${meta.m}\u5206${meta.s}\u79d2`}\n    />\n  </div>\n);\n\nexport default Demo;\n"}},{path:"/_demos/count-down-format",dependencies:{},files:{}}),o.a.createElement(u,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"props"},o.a.createElement("a",{"aria-hidden":"true",href:"#props"},o.a.createElement("span",{className:"icon icon-link"})),"props"),o.a.createElement(m.a,{code:"interface CountDownProps extends ExtCls, ComponentBaseProps {\n  /** \u76ee\u6807\u65f6\u95f4 */\n  date?: string | Date;\n  /** \u66ff\u6362\u9ed8\u8ba4\u7684\u5e8f\u5217\u5316\u65b9\u6cd5\uff0c\u8fd4\u56de\u5b57\u7b26\u4e32\u4f1a\u66ff\u6362\u9ed8\u8ba4\u7684\u65f6\u95f4\u5b57\u7b26\uff0c\u8c03\u7528triggerFinish()\u53ef\u4ee5\u6e05\u9664\u5012\u8ba1\u65f6\u8ba1\u65f6\u5668 */\n  format?(meta: TimeMeta, triggerFinish: () => void): string;\n  /** \u6bcf\u6b21\u65f6\u95f4\u5b57\u7b26\u6539\u53d8\u65f6\u89e6\u53d1 */\n  onChange?(meta: TimeMeta): void;\n  /** \u66f4\u65b0\u9891\u7387\uff0c\u9ed8\u8ba41000ms */\n  frequency?: number;\n}\n",lang:"tsx"}),o.a.createElement("p",null,o.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),o.a.createElement(m.a,{code:'interface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}\n\ninterface ExtCls {\n  /** \u5b57\u7b26"xx\u5929xx\u65f6xx\u5206"\u4e2d\u7684xx\u6240\u5728\u5305\u88f9\u5143\u7d20\u7684\u989d\u5916\u7c7b\u540d */\n  textClassName?: string;\n  /** \u5b57\u7b26"xx\u5929xx\u65f6xx\u5206"\u4e2d\u7684\u5929\u3001\u65f6\u3001\u5206\u7b49\u63cf\u8ff0\u6587\u5b57\u7684\u989d\u5916\u7c7b\u540d */\n  timeClassName?: string;\n}\n',lang:"tsx"})))}},"0Owb":function(e,t,n){"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,"a",(function(){return a}))},A4jb:function(e,t,n){},B9oH:function(e,t,n){},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},PAy8:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("oMDT");var a=n("k1fw"),r=n("q1tI"),o=n.n(r),c=n("K3qG"),m=n("zdPv"),l=n("TSYQ"),s=n.n(l),i=(e,t)=>{var n=e.textClassName,a=e.timeClassName;return+e.d>30?(t&&t(),"".concat(u(e.d,a)).concat(d("\u5929\u540e",n))):(e.timeOut&&t&&t(),(+e.d?u(e.d,a)+d("\u5929",n):"")+u(e.h,a)+d("\u65f6",n)+u(e.m,a)+d("\u5206",n)+u(e.s,a)+d("\u79d2",n))};function u(e,t){return'<span class="'.concat(s()("m78-count-down_time",t),'">').concat(e,"</span>")}function d(e,t){return'<span class="'.concat(s()("m78-count-down_text",t),'">').concat(e,"</span>")}var f=e=>{var t=e.date,n=e.textClassName,l=e.timeClassName,u=e.format,d=void 0===u?i:u,f=e.onChange,p=void 0===f?c["g"]:f,w=e.frequency,h=void 0===w?1e3:w,D=e.className,v=e.style,g=Object(r["useRef"])(null),E=Object(m["useSelf"])({timer:0});function x(){var e=Object(a["a"])(Object(a["a"])({},Object(c["j"])(t)),{},{textClassName:n,timeClassName:l});p(e),g.current.innerHTML="".concat(d(e,()=>{E.timer&&window.clearInterval(E.timer)}))}return Object(r["useEffect"])(()=>(t&&(x(),E.timer=window.setInterval(()=>{x()},h)),()=>{E.timer&&window.clearInterval(E.timer)}),[t]),o.a.createElement("span",{className:s()("m78-count-down",D),style:v,ref:g})},p=f},RTWq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("PAy8"),c=(n("oMDT"),new Date),m=()=>r.a.createElement("div",null,r.a.createElement("h3",null,"\u5927\u4e8e30\u5929: "),r.a.createElement(o["a"],{date:new Date(c.getFullYear(),c.getMonth()+2,1)}),r.a.createElement("h3",{className:"mt-24"},"10\u5929\u540e: "),r.a.createElement(o["a"],{date:new Date(c.getFullYear(),c.getMonth(),c.getDate()+10)}),r.a.createElement("h3",{className:"mt-24"},"\u8d85\u65f6: "),r.a.createElement(o["a"],{date:"2008-08-08"}));t["default"]=m},TSYQ:function(e,t,n){var a,r;(function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var c=o.apply(null,a);c&&e.push(c)}else if("object"===r)for(var m in a)n.call(a,m)&&a[m]&&e.push(m)}}return e.join(" ")}e.exports?(o["default"]=o,e.exports=o):(a=[],r=function(){return o}.apply(t,a),void 0===r||(e.exports=r))})()},iCBh:function(e,t,n){"use strict";n("6Hk/"),n("B9oH");var a=n("MPsd");new a["a"]({effect:"m78-effect"})},oMDT:function(e,t,n){"use strict";n("iCBh"),n("A4jb")},r7At:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("PAy8"),c=(n("oMDT"),new Date),m=()=>r.a.createElement("div",null,r.a.createElement(o["a"],{date:new Date(c.getFullYear(),c.getMonth()+2,1),format:e=>"\u8ddd\u79bb\u6d3b\u52a8\u7ed3\u675f\u5269\u4f59".concat(e.d,"\u5929").concat(e.d,"\u65e5").concat(e.h,"\u65f6").concat(e.m,"\u5206").concat(e.s,"\u79d2")}));t["default"]=m}}]);