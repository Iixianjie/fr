(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{C5yf:function(e,t,a){"use strict";a.d(t,"c",(function(){return w})),a.d(t,"g",(function(){return j})),a.d(t,"e",(function(){return S})),a.d(t,"f",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p})),a.d(t,"d",(function(){return f})),a.d(t,"h",(function(){return N})),a.d(t,"i",(function(){return A}));a("iCBh"),a("QyJt");var n=a("q1tI"),r=a.n(n),c=a("TSYQ"),l=a.n(c),o=a("K3qG"),i={count:3,children:[],aspectRatio:1,border:!0},s=e=>{var t=e.count,a=e.children,n=e.crossSpacing,c=e.mainSpacing,i=e.spacing,s=e.size,d=e.aspectRatio,m=e.complete,g=void 0===m||m,v=e.border,p=e.borderColor,h=e.className,f=e.style,E=e.contClassName,N=e.contStyle,b=Object(o["s"])(a)?[...a]:[a],_=[...b],y=n||i,A=c||i,O=_.length%t,w=100/t;if(g&&0!==O&&t-O>0)for(var j=0;j<t-O;j++)b.push(r.a.createElement("div",null));return r.a.createElement("div",{className:l()("m78-grid",h),style:f},b.map((e,a)=>{var n=a+1,c=n%t===0,o=(n-1)%t===0,i=a<t,m=_.length-n<(O||t),g=A&&!c,h=A?(t-1)*A/t:0;return r.a.createElement(s?"div":u,{ratio:d,key:a,style:{color:p,border:v?void 0:"none",width:A?"calc(".concat(w,"% - ").concat(h,"px)"):"".concat(w,"%"),height:s||void 0,marginBottom:!m&&y?y:void 0,marginRight:g?A:void 0},className:l()("m78-grid_item",{__topBorder:v&&(i||y),__leftBorder:v&&(o||A)})},r.a.createElement("div",{className:l()("m78-grid_cont",E),style:N},e))}))};s.defaultProps=i;var d=s,m=e=>{var t=e.ratio,a=void 0===t?1:t,n=e.children,c=e.className,o=e.style;return r.a.createElement("div",{className:l()("m78-aspect-ratio",c),style:o},r.a.createElement("div",{className:"m78-aspect-ratio_scaffold",style:{paddingTop:"".concat(100*a,"%")}}),n)},u=m,g=a("k1fw"),v=e=>{var t=e.children,a=e.attach,n=e.className,c=e.style;return r.a.createElement("div",{className:l()("m78-center",n,c),style:Object(g["a"])({position:a?"absolute":void 0},c)},t)},p=v,h=e=>{var t=e.vertical,a=e.width,n=e.height,c=e.color,o=e.margin,i=void 0===o?12:o,s=t?"0 ".concat(i,"px"):"".concat(i,"px 0");return r.a.createElement("div",{className:l()("m78-divider",t&&"__vertical"),style:{width:a,height:n,backgroundColor:c,margin:s}})},f=h,E=e=>{var t,a,n=e.width,c=e.height,i=e.children;if(n&&!c&&(t=n),c&&!n&&(a=c),a||t||(a=16),i&&Object(o["s"])(i)){var s=i.reduce((e,t,a)=>(e.push(t),a!==i.length-1&&e.push(r.a.createElement(E,{key:a+Math.random(),width:n,height:c})),e),[]);return s}return r.a.createElement("div",{className:l()("m78-spacer",!!t&&"__inline"),style:{width:t,height:a}})},N=E,b=a("0Owb"),_=a("PpiC"),y=e=>{var t=e.className,a=e.title,n=e.desc,c=e.leading,o=e.trailing,i=e.crossAlign,s=Object(_["a"])(e,["className","title","desc","leading","trailing","crossAlign"]);return r.a.createElement(j,Object(b["a"])({},s,{className:l()("m78-tile",t),crossAlign:i}),c&&r.a.createElement("div",{className:"m78-tile_leading"},c),r.a.createElement("div",{className:"m78-tile_main"},a&&r.a.createElement("div",null,a),n&&r.a.createElement("div",null,n)),o&&r.a.createElement("div",{className:"m78-tile_trailing"},o))},A=y;function O(e,t){var a={};return e&&(a["m78-main-".concat(e)]=!0),t&&(a["m78-cross-".concat(t)]=!0),a}var w=e=>{var t=e.children,a=e.style,n=e.className,c=e.mainAlign,o=e.crossAlign,i=Object(_["a"])(e,["children","style","className","mainAlign","crossAlign"]);return r.a.createElement("div",Object(b["a"])({},i,{className:l()("m78-column",n,O(c,o)),style:a}),t)},j=e=>{var t=e.children,a=e.style,n=e.className,c=e.mainAlign,o=e.crossAlign,i=void 0===o?"start":o,s=Object(_["a"])(e,["children","style","className","mainAlign","crossAlign"]);return r.a.createElement("div",Object(b["a"])({},s,{className:l()("m78-row",n,O(c,i)),style:a}),t)},S=e=>{var t=e.flex,a=void 0===t?1:t,n=e.children,c=e.order,o=e.style,i=e.className,s=e.align,d=Object(_["a"])(e,["flex","children","order","style","className","align"]);return r.a.createElement("div",Object(b["a"])({},d,{className:l()(i,s&&"m78-self-".concat(s)),style:Object(g["a"])({flex:a,order:c},o)}),n)}},PToo:function(e,t,a){e.exports={dndBox:"dndBox___1es8h",dndBox2:"dndBox2___1921i"}},QyJt:function(e,t,a){},RT4a:function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),r=a("q1tI"),c=a.n(r),l=a("gsDz"),o=a("TSYQ"),i=a.n(o),s=a("C5yf"),d=a("PToo"),m=a.n(d),u=()=>{var e=Object(r["useState"])("\u5c1d\u8bd5\u62d6\u52a8\u76d2\u5b50\u5230\u76f8\u90bb\u76d2\u5b50\u7684\u4e0d\u540c\u4f4d\u7f6e\ud83e\udd0f"),t=Object(n["a"])(e,2),a=t[0],o=t[1];function d(e){var t=e.innerRef,a=e.status;return c.a.createElement("div",{ref:t,className:i()(m.a.dndBox,{__active:a.dragOver,__left:a.dragLeft,__top:a.dragTop,__right:a.dragRight,__bottom:a.dragBottom}),style:{margin:12}},a.dragging&&c.a.createElement("span",null,"\ud83d\ude2b"),a.dragCenter&&c.a.createElement("span",null,"\ud83d\ude0d"),a.dragLeft&&c.a.createElement("span",null,"\ud83d\udc48"),a.dragRight&&c.a.createElement("span",null,"\ud83d\udc49"),a.dragTop&&c.a.createElement("span",null,"\ud83d\udc46"),a.dragBottom&&c.a.createElement("span",null,"\ud83d\udc47"),a.regular&&c.a.createElement("span",null,"\ud83e\udd70"))}function u(e){console.log(e.source),console.log(e.target);var t="";e.status.dragLeft&&(t="\u5de6"),e.status.dragRight&&(t="\u53f3"),e.status.dragTop&&(t="\u4e0a"),e.status.dragBottom&&(t="\u4e0b"),e.status.dragCenter&&(t="\u4e2d\u95f4"),o("\u4ece".concat(e.source.data,"\u62d6\u52a8\u5230").concat(e.target.data,", \u4f4d\u7f6e\u662f: ").concat(t))}function g(e){o("\u5f00\u59cb\u62d6\u52a8: ".concat(e.source.data))}function v(e){e.target||o("\u53d6\u6d88\u4e86\u62d6\u52a8")}function p(e){o("\u8fdb\u5165".concat(e.target.data))}function h(){o("\u79bb\u5f00")}return c.a.createElement("div",null,c.a.createElement("div",{className:"fs-24 mb-16"},a),c.a.createElement(l["DNDContext"],{onAccept:e=>{console.log("onAccept",e)},onStart:e=>{console.log("onStart",e)}},c.a.createElement(s["g"],{mainAlign:"evenly"},c.a.createElement(l["default"],{data:"DND1",enableDrop:{left:!0,right:!0,bottom:!0,top:!0,center:!0},onDrag:g,onDrop:v,onSourceEnter:p,onSourceLeave:h,onSourceAccept:u},d),c.a.createElement(l["default"],{data:"DND2",enableDrop:{left:!0,right:!0,bottom:!0,top:!0,center:!0},onDrag:g,onDrop:v,onSourceEnter:p,onSourceLeave:h,onSourceAccept:u},d))))};t["default"]=u}}]);