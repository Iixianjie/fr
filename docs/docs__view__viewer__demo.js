(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[226],{"5fsK":function(e,t,n){},Al6Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("kqV7");var a=n("k1fw"),c=n("tJVT"),r=n("q1tI"),i=n.n(r),o=n("wEEd"),l=n("y4v0"),s=n("9nhX"),u=n.n(s),d=n("zdPv"),f=n("TSYQ"),b=n.n(f);function v(e,t){var n=e.getBoundingClientRect(),a=t.getBoundingClientRect(),c=-(a.top-n.top),r=-(a.bottom-n.bottom),i=-(a.left-n.left),o=-(a.right-n.right);return{left:i,right:o,top:c,bottom:r}}var m=[.5,3],g={scale:1,rotateZ:0,x:0,y:0},h=i.a.forwardRef((e,t)=>{var n=e.children,s=e.disabled,f=void 0!==s&&s,h=e.bound,p=e.drag,j=void 0===p||p,O=e.pinch,x=void 0===O||O,w=e.wheel,E=void 0===w||w,y=e.className,S=e.style,Z=Object(r["useRef"])(null),R=Object(r["useRef"])(null),C=Object(o["useSpring"])(()=>g),k=Object(c["a"])(C,2),T=k[0],q=k[1],B=Object(d["useSelf"])(Object(a["a"])(Object(a["a"])({},g),{},{drag:!0,pinch:!0,wheel:!0,pinchTimer:null})),V=m[0],W=m[1],J=Object(d["useSetState"])({bound:void 0}),K=Object(c["a"])(J,2),N=K[0],P=K[1];Object(r["useImperativeHandle"])(t,()=>({setRotate:z,setScale:M,reset:F,instance:B}));var Q=Object(l["b"])({onDrag(e){var t=e.event,n=Object(c["a"])(e.movement,2),a=n[0],r=n[1],i=e.first;null===t||void 0===t||t.preventDefault(),B.drag&&(i&&G(),B.x=a,B.y=r,q({x:B.x,y:B.y,config:o["config"].default}))},onPinchStart:D,onPinchEnd(){clearTimeout(B.pinchTimer),B.pinchTimer=setTimeout(()=>{I()},100)},onPinch(e){var t=Object(c["a"])(e.direction,1),n=t[0],a=Object(c["a"])(e.delta,2),r=a[1];B.scale=A(n,.03),B.rotateZ+=r,q({rotateZ:B.rotateZ,scale:B.scale,config:{mass:1,tension:150,friction:17}})},onWheelStart:D,onWheelEnd:I,onWheel(e){var t=e.event,n=Object(c["a"])(e.direction,2),a=n[1];null===t||void 0===t||t.preventDefault(),B.scale=A(a,.16),q({scale:B.scale,config:o["config"].stiff})}},{domTarget:R,enabled:!f,drag:{enabled:j,bounds:N.bound,rubberband:!0,initial:()=>[B.x,B.y]},pinch:{enabled:x},wheel:{enabled:E},eventOptions:{passive:!1}});function A(e,t){var n=e>0?+t:-t,a=Math.round(100*(B.scale+n))/100;return a=u()(a,V,W),a}function D(){B.drag=!1}function I(){B.drag=!0}function M(e){f||(B.scale=u()(e,V,W),q({scale:B.scale}))}function z(e){f||q({rotateZ:B.rotateZ+=e,config:o["config"].slow})}function F(){f||q({scale:B.scale=g.scale,rotateZ:B.rotateZ=g.rotateZ,x:B.x=g.x,y:B.y=g.y})}function G(){var e;if(h&&Z.current&&(e="getBoundingClientRect"in h?h:h.current,e)){var t=v(e,Z.current);t!==N.bound&&P({bound:t})}}return Object(r["useEffect"])(Q,[Q]),i.a.createElement("div",{ref:Z,className:b()("m78-viewer",y),style:S},i.a.createElement(o["animated"].div,{ref:R,className:"m78-viewer_cont",style:{transform:Object(o["to"])([T.x,T.y,T.scale,T.rotateZ],(e,t,n,a)=>"translate3d(".concat(e,"px, ").concat(t,"px, 0px) scale(").concat(n,") rotateZ(").concat(a,"deg)"))}},n))}),p=h},"R+vx":function(e,t,n){"use strict";n.r(t);var a=n("tJVT"),c=n("q1tI"),r=n.n(c),i=n("Al6Z"),o=(n("kqV7"),n("ZMQu"),n("uVtn")),l=(n("QjBK"),n("K3qG")),s=n("SWf/"),u=n.n(s),d={width:"240px",height:"240px",fontSize:"32px",textAlign:"center"},f=()=>{var e=r.a.useState(!1),t=Object(a["a"])(e,2),n=t[0],c=t[1],s=r.a.useRef(null),f=r.a.useRef(null);return r.a.createElement("div",null,r.a.createElement("div",{ref:f,className:"tc p-32",style:{width:"100%",height:"100%",border:"1px solid #ccc",margin:"10vh auto"}},r.a.createElement(i["a"],{ref:s,bound:f,disabled:n},r.a.createElement("div",{style:d},r.a.createElement("img",{style:{width:"100%",height:"100%",objectFit:"cover"},draggable:!1,src:u.a,alt:""}))),r.a.createElement("div",null,r.a.createElement(o["a"],{onClick:()=>s.current.setScale(Object(l["m"])(0,3))},"setScale()"),r.a.createElement(o["a"],{onClick:()=>s.current.setRotate(Object(l["m"])(-360,360))},"setRotate()"),r.a.createElement(o["a"],{onClick:()=>s.current.reset()},"reset()"),r.a.createElement(o["a"],{onClick:()=>c(e=>!e)},"disabled ",n.toString()))))};t["default"]=f},"SWf/":function(e,t,n){e.exports=n.p+"static/333.ede8e69c.jpg"},ZMQu:function(e,t,n){"use strict";n("iCBh"),n("vbCR")},kqV7:function(e,t,n){"use strict";n("iCBh"),n("5fsK")},vbCR:function(e,t,n){}}]);