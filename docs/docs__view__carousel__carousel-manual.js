(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[195],{"94Yn":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("JE2c"),i=(n("gtaE"),n("uVtn")),o=(n("QjBK"),n("fFw4")),l=n.n(o),u=n("BWDD"),s=n.n(u),f=n("SWf/"),d=n.n(f),m=()=>{var e=a.a.useRef(null);return a.a.createElement("div",null,a.a.createElement(c["a"],{ref:e,width:320},a.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),a.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),a.a.createElement("img",{src:d.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),a.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),a.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),a.a.createElement("img",{src:d.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),a.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),a.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),a.a.createElement("img",{src:d.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})),a.a.createElement("div",{className:"mt-32"},a.a.createElement(i["a"],{onClick:()=>e.current.prev()},"\u4e0a\u4e00\u9875"),a.a.createElement(i["a"],{onClick:()=>e.current.next()},"\u4e0b\u4e00\u9875"),a.a.createElement(i["a"],{onClick:()=>e.current.goTo(0)},"\u7b2c1\u9875"),a.a.createElement(i["a"],{onClick:()=>e.current.goTo(1)},"\u7b2c2\u9875"),a.a.createElement(i["a"],{onClick:()=>e.current.goTo(4)},"\u7b2c5\u9875"),a.a.createElement(i["a"],{onClick:()=>e.current.goTo(8)},"\u7b2c9\u9875"),a.a.createElement(i["a"],{onClick:()=>e.current.goTo(4,!0)},"\u7b2c5\u9875(\u65e0\u52a8\u753b)")))};t["default"]=m},BTKg:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return++e%1e6},c=function(){var e=Object(r["useState"])(0),t=e[1];return Object(r["useCallback"])((function(){return t(a)}),[])};t["a"]=c},BWDD:function(e,t,n){e.exports=n.p+"static/222.7822fa93.jpg"},JE2c:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));n("gtaE");var r=n("k1fw"),a=n("tJVT"),c=n("q1tI"),i=n.n(c),o=n("jNhd"),l=n("BTKg"),u=function(e,t){var n=Object(c["useRef"])((function(){}));Object(c["useEffect"])((function(){n.current=e})),Object(c["useEffect"])((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t||0);return function(){return clearInterval(e)}}}),[t])},s=u,f=n("wEEd"),d=n("y4v0"),m=n("9nhX"),h=n.n(m),v=n("TSYQ"),g=n.n(v),b=n("K3qG"),j=n("zdPv");function p(e,t){if(e.length<2||!t)return[e,!1];var n=i.a.Children.toArray(e);return n.push(i.a.cloneElement(e[0])),n.unshift(i.a.cloneElement(e[e.length-1])),[n,!0]}var E=i.a.forwardRef((e,t)=>{var n=e.children,u=e.vertical,m=void 0!==u&&u,v=e.height,E=e.width,O=e.loop,w=void 0===O||O,y=e.control,x=void 0===y||y,S=e.forceNumberControl,C=void 0!==S&&S,k=e.initPage,N=void 0===k?0:k,T=e.onChange,D=e.autoplay,_=void 0===D?0:D,F=e.style,R=e.className,I=e.wheel,W=void 0===I||I,q=e.drag,B=void 0===q||q,J=e.onWillChange,K=void 0===J?b["g"]:J,A=e.noScale,H=void 0!==A&&A,M=e.invisibleUnmount,V=void 0!==M&&M,z=e.invisibleHidden,P=void 0!==z&&z,Q=e.noShadow,Y=p(n,w),G=Object(a["a"])(Y,2),U=G[0],X=G[1],L=Object(o["a"])(),Z=Object(a["a"])(L,2),$=Z[0],ee=Z[1],te=ee.width,ne=ee.height,re=Object(c["useRef"])(null),ae=Object(c["useRef"])(null),ce=m?ne:te,ie=Object(c["useRef"])(X?N+1:N),oe=Object(j["useSelf"])({disabledDrag:!1}),le=Object(f["useSpring"])(()=>({offset:ie.current*ce,scale:1,config:{clamp:!0},reset:!1})),ue=Object(a["a"])(le,2),se=ue[0],fe=ue[1],de=Object(l["a"])(),me=Object(c["useState"])(_),he=Object(a["a"])(me,2),ve=he[0],ge=he[1],be=Object(c["useRef"])();v=v||0,Object(c["useEffect"])((function(){Oe(ie.current,!0)}),[ce]),Object(c["useEffect"])((function(){ie.current=X?N+1:N,Oe(ie.current,!0),ke()}),[U.length]),Object(c["useEffect"])((function(){xe(ie.current,!0)}),[]),Object(c["useImperativeHandle"])(t,()=>({prev:pe,next:Ee,goTo(e,t){Oe(X?e+1:e,t)}})),s((function(){Ee()}),ve>0?ve:null);var je=Object(d["b"])({onDragStart(){K()},onWheelStart(){K()},onDrag(e){var t=e.down,n=Object(a["a"])(e.movement,2),r=n[0],c=n[1],i=Object(a["a"])(e.direction,2),o=i[0],l=i[1],u=e.cancel,s=e.first,f=m?l:o,d=m?c:r,h=Math.abs(d),v=Math.abs(r),g=Math.abs(c);if((g>5||v>5)&&(!m&&g>v||m&&v>g)&&(u(),h=0,d=0),t&&h>ce/2)return u(),Se(),void(f<0?Ee():pe());var b=X&&s&&0===ie.current,j=X&&s&&ie.current===U.length-1;function p(e){oe.disabledDrag=!0;var t=ie.current*ce+se.offset.get();E(-(e*ce-t)),ie.current=e}function E(e){fe({offset:e||-(ie.current*ce+(t?-d:0)),immediate:!!e||!1,scale:t?1-h/ce/2:1,default:!0,onRest(){e&&(oe.disabledDrag=!1)}})}b?p(U.length-2):j?p(1):oe.disabledDrag||E()},onWheel(e){var t=e.event,n=e.memo,r=Object(a["a"])(e.direction,2),c=r[1],i=e.timeStamp;if(null===t||void 0===t||t.preventDefault(),!n)return c<0?pe():Ee(),Se(),i},onHover(e){var t=e.hovering;t&&Se()}},{domTarget:re,wheel:{enabled:W},drag:{enabled:B},eventOptions:{passive:!1}});function pe(){X&&0===ie.current?Oe(U.length-2,!0,()=>{Oe(we(ie.current-1))}):Oe(we(ie.current-1))}function Ee(){X&&ie.current===U.length-1?Oe(1,!0,()=>{Oe(we(ie.current+1))}):Oe(we(ie.current+1))}function Oe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;e=we(e),t||e===ie.current||xe(e),ie.current=e,fe({offset:-e*ce,scale:1,immediate:t,default:!0,onRest(){n&&n()}}),de()}function we(e){return h()(e,0,U.length-1)}function ye(e){return X?0===e?U.length-3:e===U.length-1?0:e-1:e}function xe(e,t){V&&ke(),T&&T(ye(e),!!t)}function Se(){_<=0||ve<=0||be.current||(ge(0),be.current=window.setTimeout(()=>{ge(_),be.current=void 0,clearTimeout(be.current)},4e3))}function Ce(e,t){var n=!0,a=e;if(V||P){var c=ye(ie.current),o=X&&(t<=1||t>=U.length-2),l=t<c-(X?0:1)||t>c+(X?2:1),u=!l||o;V&&(n=u),P&&!u&&i.a.isValidElement(e)&&(a=i.a.cloneElement(e,{style:Object(r["a"])(Object(r["a"])({},e.props.style),{},{display:"none"})}))}return i.a.createElement(f["animated"].div,{key:t,className:"m78-carousel_item",style:{height:m?v:void 0,zIndex:ie.current===t?1:0,transform:H?void 0:se.scale.to(e=>{var n=t<ie.current-1||t>ie.current+1;return"scale(".concat(n?1:e,")")})}},n&&a)}function ke(){re.current&&Array.from(re.current.querySelectorAll("img")).forEach(e=>{e.ondragstart=e=>e.preventDefault()})}return Object(c["useEffect"])(je,[je]),i.a.createElement("div",{className:g()("m78-carousel",R,{__vertical:m,__noShadow:Q}),ref:$,style:Object(r["a"])({height:m?v:"auto",width:E||"auto"},F)},i.a.createElement("div",{ref:ae,className:"m78-carousel_calc-node"}),i.a.createElement(f["animated"].div,{className:"m78-carousel_wrap",ref:re,style:{transform:se.offset.to(e=>"translate3d(".concat(m?"0,".concat(e,"px"):"".concat(e,"px,0"),",0)"))}},U.map(Ce)),x&&i.a.createElement("div",{className:"m78-carousel_ctrl m78-stress"},(n.length<7||m)&&!C?U.map((e,t)=>{var n=!X||t<U.length-2;return n&&i.a.createElement("div",{key:t,onClick:()=>{Oe(X?t+1:t),Se()},className:g()("m78-carousel_ctrl-item",{__active:t===ye(ie.current)})})}):i.a.createElement("span",{className:"m78-carousel_ctrl-text"},ye(ie.current)+1," /"," ",X?U.length-2:U.length)))});E.displayName="Carousel";var O=E},"SWf/":function(e,t,n){e.exports=n.p+"static/333.ede8e69c.jpg"},SoiO:function(e,t,n){},fFw4:function(e,t,n){e.exports=n.p+"static/111.da857e49.jpg"},gtaE:function(e,t,n){"use strict";n("iCBh"),n("SoiO")},jNhd:function(e,t,n){"use strict";var r=n("q1tI"),a=n("bdgK"),c=function(){var e=Object(r["useState"])({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),t=e[0],n=e[1],c=Object(r["useState"])((function(){return new a["a"]((function(e){var t=e[0];t&&n(t.contentRect)}))}))[0],i=Object(r["useCallback"])((function(e){c.disconnect(),e&&c.observe(e)}),[c]);return[i,t]};t["a"]=c}}]);