(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{"0Owb":function(e,t,r){"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a.apply(this,arguments)}r.d(t,"a",(function(){return a}))},C5yf:function(e,t,r){"use strict";r.d(t,"f",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f})),r.d(t,"g",(function(){return N})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return E})),r.d(t,"h",(function(){return x}));r("iCBh"),r("QyJt");var a=r("q1tI"),n=r.n(a),c=r("TSYQ"),i=r.n(c),l=r("K3qG"),s={count:3,children:[],aspectRatio:1,border:!0,borderColor:"rgba(0, 0, 0, 0.15)"},o=e=>{var t=e.count,r=e.children,a=e.crossSpacing,c=e.mainSpacing,s=e.spacing,o=e.size,d=e.aspectRatio,u=e.complete,h=void 0===u||u,v=e.border,f=e.borderColor,p=e.className,g=e.style,y=e.contClassName,b=e.contStyle,N=Object(l["r"])(r)?[...r]:[r],E=[...N],w=a||s,O=c||s,j=E.length%t,x=100/t;if(h&&0!==j&&t-j>0)for(var A=0;A<t-j;A++)N.push(n.a.createElement("div",null));return n.a.createElement("div",{className:i()("m78-grid",p),style:g},N.map((e,r)=>{var a=r+1,c=a%t===0,l=(a-1)%t===0,s=r<t,u=E.length-a<(j||t),h=O&&!c,p=O?(t-1)*O/t:0;return n.a.createElement(o?"div":m,{ratio:d,key:r,style:{color:f,border:v?void 0:"none",width:O?"calc(".concat(x,"% - ").concat(p,"px)"):"".concat(x,"%"),height:o||void 0,marginBottom:!u&&w?w:void 0,marginRight:h?O:void 0},className:i()("m78-grid_item",{__topBorder:v&&(s||w),__leftBorder:v&&(l||O)})},n.a.createElement("div",{className:i()("m78-grid_cont",y),style:b},e))}))};o.defaultProps=s;var d=o,u=e=>{var t=e.ratio,r=void 0===t?1:t,a=e.children,c=e.className,l=e.style;return n.a.createElement("div",{className:i()("m78-aspect-ratio",c),style:l},n.a.createElement("div",{className:"m78-aspect-ratio_scaffold",style:{paddingTop:"".concat(100*r,"%")}}),a)},m=u,h=r("k1fw"),v=e=>{var t=e.children,r=e.attach,a=e.className,c=e.style;return n.a.createElement("div",{className:i()("m78-center",a,c),style:Object(h["a"])({position:r?"absolute":void 0},c)},t)},f=v,p=r("0Owb"),g=r("PpiC");function y(e,t){var r={};return e&&(r["m78-main-".concat(e)]=!0),t&&(r["m78-cross-".concat(t)]=!0),r}var b=e=>{var t=e.children,r=e.style,a=e.className,c=e.mainAlign,l=e.crossAlign,s=Object(g["a"])(e,["children","style","className","mainAlign","crossAlign"]);return n.a.createElement("div",Object(p["a"])({},s,{className:i()("m78-column",a,y(c,l)),style:r}),t)},N=e=>{var t=e.children,r=e.style,a=e.className,c=e.mainAlign,l=e.crossAlign,s=Object(g["a"])(e,["children","style","className","mainAlign","crossAlign"]);return n.a.createElement("div",Object(p["a"])({},s,{className:i()("m78-row",a,y(c,l)),style:r}),t)},E=e=>{var t=e.flex,r=void 0===t?1:t,a=e.children,c=e.order,l=e.style,s=e.className,o=e.align,d=Object(g["a"])(e,["flex","children","order","style","className","align"]);return n.a.createElement("div",Object(p["a"])({},d,{className:i()(s,o&&"m78-self-".concat(o)),style:Object(h["a"])({flex:r,order:c},l)}),a)},w=e=>{var t=e.vertical,r=e.width,a=e.height,c=e.color,l=e.margin,s=void 0===l?12:l,o=t?"0 ".concat(s,"px"):"".concat(s,"px 0");return n.a.createElement("div",{className:i()("m78-divider",t&&"__vertical"),style:{width:r,height:a,backgroundColor:c,margin:o}})},O=w,j=e=>{var t,r,a=e.width,c=e.height,s=e.children;if(a&&!c&&(t=a),c&&!a&&(r=c),r||t||(r=16),s&&Object(l["r"])(s)){var o=s.reduce((e,t,r)=>(e.push(t),r!==s.length-1&&e.push(n.a.createElement(j,{key:r+Math.random(),width:a,height:c})),e),[]);return o}return n.a.createElement("div",{className:i()("m78-spacer",!!t&&"__inline"),style:{width:t,height:r}})},x=j},QyJt:function(e,t,r){},TSYQ:function(e,t,r){var a,n;(function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var i=c.apply(null,a);i&&e.push(i)}else if("object"===n)for(var l in a)r.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(c["default"]=c,e.exports=c):(a=[],n=function(){return c}.apply(t,a),void 0===n||(e.exports=n))})()},yrAL:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),c=r("gsDz"),i=r("C5yf"),l=()=>n.a.createElement("div",null,n.a.createElement(c["DNDContext"],null,n.a.createElement(i["g"],null,n.a.createElement(c["default"],{data:"DND1",dragFeedbackStyle:{borderRadius:"50%"}},e=>{var t=e.innerRef;return n.a.createElement("div",{ref:t,style:{width:150,height:150,border:"1px solid red",padding:12,borderRadius:2}},n.a.createElement("span",null,"\u6dfb\u52a0\u989d\u5916\u6837\u5f0f"))}),n.a.createElement(c["default"],{data:"DND2",dragFeedback:n.a.createElement("span",{className:"fs-38"},"\ud83d\ude1b")},e=>{var t=e.innerRef;return n.a.createElement("div",{ref:t,style:{width:150,height:150,border:"1px solid red",padding:12,borderRadius:2,marginLeft:12}},n.a.createElement("span",null,"\u66ff\u6362\u62d6\u52a8\u8282\u70b9"))}))));t["default"]=l}}]);