(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78,79],{"/suJ":function(e,t){},"1wBN":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("0Owb"),r=n("tJVT"),i=n("q1tI"),c=n.n(i),l=n("UBUc"),o=n("C5yf"),s=n("iuhU"),m=n("K3qG"),u=e=>{var t=e.content;return c.a.createElement("div",{onContextMenu:e=>e.preventDefault(),className:Object(s["a"])("m78-context-menu",e.classNamePassToCustomer,e.stylePassToCustomer),onClick:()=>e.setShow(!1)},Object(m["v"])(t)?t(e):t)},d=e=>{var t=e.content,n=e.customer,a=e.className,o=e.style,s=e.children,m=Object(i["useState"])(),d=Object(r["a"])(m,2),p=d[0],v=d[1],f=Object(i["useState"])(!1),C=Object(r["a"])(f,2),E=C[0],x=C[1];function h(e){return e.preventDefault(),v({left:e.clientX,top:e.clientY,right:e.clientX,bottom:e.clientY}),!E&&x(!0),!1}return c.a.createElement(c.a.Fragment,null,c.a.createElement(l["a"],{show:E,type:"popper",target:p,trigger:"subClick",direction:l["b"].rightStart,offset:0,content:t,customer:n||u,onChange:x,classNamePassToCustomer:a,stylePassToCustomer:o}),c.a.cloneElement(s,{onContextMenu:h}))},p=e=>c.a.createElement(o["Tile"],Object(a["a"])({},e,{className:Object(s["a"])("m78-context-menu_item",e.className,e.disabled&&"__disabled")}));d.Item=p,t["b"]=d},"6WJu":function(e,t,n){"use strict";n("iCBh"),n("QyJt")},"6pIP":function(e,t,n){},C5yf:function(e,t,n){"use strict";n("6WJu");var a=n("OnHz");n.d(t,"Grid",(function(){return a["a"]}));var r=n("cx4E");n.d(t,"AspectRatio",(function(){return r["a"]}));var i=n("tP0F");n.d(t,"Center",(function(){return i["a"]}));var c=n("LlIc");n.d(t,"Divider",(function(){return c["a"]}));var l=n("dEM7");n.d(t,"Spacer",(function(){return l["a"]}));var o=n("GmgH");n.d(t,"Tile",(function(){return o["a"]}));var s=n("Seep");n.d(t,"Column",(function(){return s["a"]})),n.d(t,"Flex",(function(){return s["b"]})),n.d(t,"Row",(function(){return s["c"]}));n("D7SN")},D7SN:function(e,t){},GmgH:function(e,t,n){"use strict";var a=n("0Owb"),r=n("PpiC"),i=n("q1tI"),c=n.n(i),l=n("C5yf"),o=n("iuhU"),s=e=>{var t=e.className,n=e.title,i=e.desc,s=e.leading,m=e.trailing,u=e.crossAlign,d=e.extra,p=Object(r["a"])(e,["className","title","desc","leading","trailing","crossAlign","extra"]);return c.a.createElement(l["Row"],Object(a["a"])({},p,{className:Object(o["a"])("m78-tile",t),crossAlign:u}),s&&c.a.createElement("div",{className:"m78-tile_leading"},s),c.a.createElement("div",{className:"m78-tile_main"},n&&c.a.createElement("div",{className:"m78-tile_title"},n),i&&c.a.createElement("div",{className:"m78-tile_desc"},i)),m&&c.a.createElement("div",{className:"m78-tile_trailing"},m),d)};t["a"]=s},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},LlIc:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("iuhU"),c=e=>{var t=e.vertical,n=e.width,a=e.height,c=e.color,l=e.margin,o=void 0===l?12:l,s=t?"0 ".concat(o,"px"):"".concat(o,"px 0");return r.a.createElement("div",{className:Object(i["a"])("m78-divider",t&&"__vertical"),style:{width:n,height:a,backgroundColor:c,margin:s}})};t["a"]=c},OnHz:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("iuhU"),c=n("K3qG"),l=n("C5yf"),o={count:3,children:[],aspectRatio:1,border:!0},s=e=>{var t=e.count,n=e.children,a=e.crossSpacing,o=e.mainSpacing,s=e.spacing,m=e.size,u=e.aspectRatio,d=e.complete,p=void 0===d||d,v=e.border,f=e.borderColor,C=e.className,E=e.style,x=e.contClassName,h=e.contStyle,b=Object(c["r"])(n)?[...n]:[n],g=[...b],M=a||s,I=o||s,N=g.length%t,O=100/t;if(p&&0!==N&&t-N>0)for(var y=0;y<t-N;y++)b.push(r.a.createElement("div",null));return r.a.createElement("div",{className:Object(i["a"])("m78-grid",C),style:E},b.map((e,n)=>{var a=n+1,c=a%t===0,o=(a-1)%t===0,s=n<t,d=g.length-a<(N||t),p=I&&!c,C=I?(t-1)*I/t:0;return r.a.createElement(m?"div":l["AspectRatio"],{ratio:u,key:n,style:{color:f,border:v?void 0:"none",width:I?"calc(".concat(O,"% - ").concat(C,"px)"):"".concat(O,"%"),height:m||void 0,marginBottom:!d&&M?M:void 0,marginRight:p?I:void 0},className:Object(i["a"])("m78-grid_item",{__topBorder:v&&(s||M),__leftBorder:v&&(o||I)})},r.a.createElement("div",{className:Object(i["a"])("m78-grid_cont",x),style:h},e))}))};s.defaultProps=o,t["a"]=s},QyJt:function(e,t,n){},Seep:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n("k1fw"),r=n("0Owb"),i=n("PpiC"),c=n("q1tI"),l=n.n(c),o=n("iuhU");function s(e,t){var n={};return e&&(n["m78-main-".concat(e)]=!0),t&&(n["m78-cross-".concat(t)]=!0),n}var m=e=>{var t=e.children,n=e.style,a=e.className,c=e.mainAlign,m=e.crossAlign,u=Object(i["a"])(e,["children","style","className","mainAlign","crossAlign"]);return l.a.createElement("div",Object(r["a"])({},u,{className:Object(o["a"])("m78-column",a,s(c,m)),style:n}),t)},u=e=>{var t=e.children,n=e.style,a=e.className,c=e.mainAlign,m=e.crossAlign,u=void 0===m?"start":m,d=Object(i["a"])(e,["children","style","className","mainAlign","crossAlign"]);return l.a.createElement("div",Object(r["a"])({},d,{className:Object(o["a"])("m78-row",a,s(c,u)),style:n}),t)},d=e=>{var t=e.flex,n=void 0===t?1:t,c=e.children,s=e.order,m=e.style,u=e.className,d=e.align,p=Object(i["a"])(e,["flex","children","order","style","className","align"]);return l.a.createElement("div",Object(r["a"])({},p,{className:Object(o["a"])(u,d&&"m78-self-".concat(d)),style:Object(a["a"])({flex:n,order:s},m)}),c)}},XRqB:function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),r=n("55Ip"),i=n("q1tI"),c=n.n(i),l=(n("B2uJ"),n("+su7"),n("qOys")),o=n.n(l),s=n("5Yjd"),m=n.n(s),u=c.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("uMxv")),r=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(r)}));t["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"contextmenu-\u4e0a\u4e0b\u6587\u83dc\u5355"},c.a.createElement("a",{"aria-hidden":"true",href:"#contextmenu-\u4e0a\u4e0b\u6587\u83dc\u5355"},c.a.createElement("span",{className:"icon icon-link"})),"ContextMenu \u4e0a\u4e0b\u6587\u83dc\u5355"),c.a.createElement("p",null,"\u7528\u4e8e\u5bf9\u7279\u5b9a\u7ec4\u4ef6\u5c55\u793a\u4e00\u7ec4\u4e0a\u4e0b\u6587\u64cd\u4f5c, \u8be5\u7ec4\u4ef6\u9002\u7528\u4e8e PC \u8bbe\u5907"),c.a.createElement("h2",{id:"\u793a\u4f8b"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},c.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),c.a.createElement(m.a,Object(a["a"])({source:{tsx:'import React from \'react\';\nimport { Divider } from \'m78/layout\';\nimport { Button } from \'m78/button\';\nimport { ContextMenu, ContextMenuItem } from \'m78/context-menu\';\nimport { SizeEnum } from \'m78/types\';\n\nconst TipsDemo = () => {\n  return (\n    <div>\n      <ContextMenu\n        content={\n          <div>\n            <ContextMenuItem title="\u67e5\u770b" />\n            <ContextMenuItem title="\u5237\u65b0" />\n            <ContextMenuItem title="\u6392\u5e8f\u65b9\u5f0f" />\n            <ContextMenuItem title="\u901a\u8fc7VS CODE\u6253\u5f00" disabled />\n            <ContextMenuItem title="\u5206\u7ec4\u4f9d\u636e" trailing="action" />\n            <Divider />\n            <ContextMenuItem title="\u2702 \u590d\u5236" />\n            <ContextMenuItem title="\ud83d\udcdc \u7c98\u8d34" />\n            <ContextMenuItem title="\u65b0\u5efaTXT" />\n            <ContextMenuItem title="\u65b0\u5efaDOC" desc="\u8be5\u529f\u80fd\u6682\u672a\u5f00\u653e\u5594" />\n            <ContextMenuItem title="\u65b0\u5efaEXCEL" />\n          </div>\n        }\n      >\n        <Button size={SizeEnum.large}>\u9f20\u6807\u53f3\u952e\u70b9\u6211 \ud83d\ude1b</Button>\n      </ContextMenu>\n    </div>\n  );\n};\n\nexport default TipsDemo;\n',jsx:'import React from \'react\';\nimport { Divider } from \'m78/layout\';\nimport { Button } from \'m78/button\';\nimport { ContextMenu, ContextMenuItem } from \'m78/context-menu\';\nimport { SizeEnum } from \'m78/types\';\n\nconst TipsDemo = () => (\n  <div>\n    <ContextMenu\n      content={\n        <div>\n          <ContextMenuItem title="\u67e5\u770b" />\n          <ContextMenuItem title="\u5237\u65b0" />\n          <ContextMenuItem title="\u6392\u5e8f\u65b9\u5f0f" />\n          <ContextMenuItem title="\u901a\u8fc7VS CODE\u6253\u5f00" disabled />\n          <ContextMenuItem title="\u5206\u7ec4\u4f9d\u636e" trailing="action" />\n          <Divider />\n          <ContextMenuItem title="\u2702 \u590d\u5236" />\n          <ContextMenuItem title="\ud83d\udcdc \u7c98\u8d34" />\n          <ContextMenuItem title="\u65b0\u5efaTXT" />\n          <ContextMenuItem title="\u65b0\u5efaDOC" desc="\u8be5\u529f\u80fd\u6682\u672a\u5f00\u653e\u5594" />\n          <ContextMenuItem title="\u65b0\u5efaEXCEL" />\n        </div>\n      }\n    >\n      <Button size={SizeEnum.large}>\u9f20\u6807\u53f3\u952e\u70b9\u6211 \ud83d\ude1b</Button>\n    </ContextMenu>\n  </div>\n);\n\nexport default TipsDemo;\n'}},{path:"/_demos/demo-3",dependencies:{},files:{}}),c.a.createElement(u,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h2",{id:"api"},c.a.createElement("a",{"aria-hidden":"true",href:"#api"},c.a.createElement("span",{className:"icon icon-link"})),"API"),c.a.createElement("p",null,"\ud83d\udca1 \u7ec4\u4ef6\u4f9d\u8d56",c.a.createElement(r["a"],{to:"/docs/feedback/popper"},c.a.createElement("code",null,"Popper")),"\u7ec4\u4ef6\uff0c\u90e8\u5206",c.a.createElement("code",null,"api"),"\u4f1a\u5305\u542b\u8be5\u7ec4\u4ef6\u7684\u7c7b\u578b\uff0c\u8bf7\u81ea\u884c\u67e5\u9605"),c.a.createElement(o.a,{code:"interface ContextMenuProps extends ComponentBaseProps {\n  /** \u4e00\u4e2a\u63a5\u6536onContextMenu\u4e8b\u4ef6\u7684\u5b50\u8282\u70b9 */\n  children: JSX.Element;\n  /** \u5185\u5bb9 */\n  content: React.ReactNode | ((props: PopperPropsCustom) => React.ReactNode);\n  /** \u5b8c\u5168\u5b9a\u5236\u6837\u5f0f */\n  customer?(props: PopperPropsCustom): JSX.Element;\n}\n\nexport interface ContextMenuItemProps extends TileProps {\n  /** \u6dfb\u52a0\u7981\u7528\u6837\u5f0f */\n  disabled?: boolean;\n}\n",lang:"tsx"})))}},cx4E:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("iuhU"),c=e=>{var t=e.ratio,n=void 0===t?1:t,a=e.children,c=e.className,l=e.style;return r.a.createElement("div",{className:Object(i["a"])("m78-aspect-ratio",c),style:l},r.a.createElement("div",{className:"m78-aspect-ratio_scaffold",style:{paddingTop:"".concat(100*n,"%")}}),a)};t["a"]=c},dEM7:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("iuhU"),c=n("K3qG"),l=e=>{var t,n,a=e.width,o=e.height,s=e.children;if(a&&!o&&(t=a),o&&!a&&(n=o),n||t||(n=16),s&&Object(c["r"])(s)){var m=s.reduce((e,t,n)=>(e.push(t),n!==s.length-1&&e.push(r.a.createElement(l,{key:n+Math.random(),width:a,height:o})),e),[]);return m}return r.a.createElement("div",{className:Object(i["a"])("m78-spacer",!!t&&"__inline"),style:{width:t,height:n}})};t["a"]=l},kb3x:function(e,t,n){"use strict";n("tlNG");var a=n("1wBN");n.d(t,"ContextMenuItem",(function(){return a["a"]})),n.d(t,"ContextMenu",(function(){return a["b"]}));n("/suJ")},tP0F:function(e,t,n){"use strict";var a=n("k1fw"),r=n("q1tI"),i=n.n(r),c=n("iuhU"),l=e=>{var t=e.children,n=e.attach,r=e.className,l=e.style;return i.a.createElement("div",{className:Object(c["a"])("m78-center",r,l),style:Object(a["a"])({position:n?"absolute":void 0},l)},t)};t["a"]=l},tlNG:function(e,t,n){"use strict";n("iCBh"),n("6pIP")},uMxv:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("C5yf"),c=n("uVtn"),l=n("kb3x"),o=n("Kq/o"),s=()=>r.a.createElement("div",null,r.a.createElement(l["ContextMenu"],{content:r.a.createElement("div",null,r.a.createElement(l["ContextMenuItem"],{title:"\u67e5\u770b"}),r.a.createElement(l["ContextMenuItem"],{title:"\u5237\u65b0"}),r.a.createElement(l["ContextMenuItem"],{title:"\u6392\u5e8f\u65b9\u5f0f"}),r.a.createElement(l["ContextMenuItem"],{title:"\u901a\u8fc7VS CODE\u6253\u5f00",disabled:!0}),r.a.createElement(l["ContextMenuItem"],{title:"\u5206\u7ec4\u4f9d\u636e",trailing:"action"}),r.a.createElement(i["Divider"],null),r.a.createElement(l["ContextMenuItem"],{title:"\u2702 \u590d\u5236"}),r.a.createElement(l["ContextMenuItem"],{title:"\ud83d\udcdc \u7c98\u8d34"}),r.a.createElement(l["ContextMenuItem"],{title:"\u65b0\u5efaTXT"}),r.a.createElement(l["ContextMenuItem"],{title:"\u65b0\u5efaDOC",desc:"\u8be5\u529f\u80fd\u6682\u672a\u5f00\u653e\u5594"}),r.a.createElement(l["ContextMenuItem"],{title:"\u65b0\u5efaEXCEL"}))},r.a.createElement(c["a"],{size:o["d"].large},"\u9f20\u6807\u53f3\u952e\u70b9\u6211 \ud83d\ude1b")));t["default"]=s}}]);