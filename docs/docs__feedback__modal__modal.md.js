(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51,11,48,49,50],{"1Fe8":function(n,e,t){"use strict";t.r(e);var a=t("ODXe"),o=t("q1tI"),l=t.n(o),s=t("6RdY"),i=t("uVtn"),r=t("R+1g"),c=t.n(r),m=(t("69qM"),()=>{var n=l.a.useState(!1),e=Object(a["a"])(n,2),t=e[0],o=e[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(i["default"],{onClick:()=>o(n=>!n)},"show ")),l.a.createElement(s["a"],{show:t,onClose:()=>o(!1),content:l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-img"},l.a.createElement("img",{src:c.a,alt:""})),l.a.createElement("div",{className:"modal-title"},"\u4e54\u78a7\u841d\u9996\u6b21\u9732\u8138"),l.a.createElement("div",{className:"modal-cont"},"\u5979\u7ad9\u5728\u4e4c\u9c81\u6728\u9f50\u4e00\u5bb6\u5546\u573a\u95e8\u53e3\uff0c\u6325\u624b\uff0c\u5fae\u7b11\u3002\u7ea6\u89c1\u5730\u70b9\u662f\u5979\u9009\u5b9a\u7684\uff0c\u5979\u62d2\u7edd\u4efb\u4f55\u8bd5\u56fe\u8fdb\u5165\u5979\u751f\u6d3b\u573a\u666f\u7684\u8981\u6c42\u3002"),l.a.createElement("div",{className:"modal-btn"},l.a.createElement(i["default"],{link:!0,color:"blue",onClick:()=>o(!1)},"\u6211\u77e5\u9053\u4e86")))}))});e["default"]=m},"1p7j":function(n,e,t){"use strict";t("GTID"),t("TcRa");var a=t("ZSGz");t.d(e,"default",(function(){return a["a"]}))},"69qM":function(n,e,t){},"6RdY":function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));t("iCBh"),t("CiMt");var a=t("VTBJ"),o=t("wx14"),l=t("Ff2n"),s=t("ODXe"),i=t("q1tI"),r=t.n(i),c=t("kDG4"),m=t("uVtn"),d=t("9RZ+"),u=t("wEEd"),f=t("Rz6r"),p=t("1p7j"),h=t("/FQm"),v=t("lgaZ"),w=t("M5fq"),g=t("TSYQ"),b=t.n(g),x=1800,E=n=>{var e=n.show,t=n.onRemove,w=void 0===t?h["b"]:t,g=n.onClose,E=void 0===g?h["b"]:g,C=n.flexBtn,k=n.maxWidth,j=void 0===k?360:k,O=n.footer,S=n.header,B=n.title,R=void 0===B?"\u63d0\u793a":B,N=n.mask,_=void 0===N||N,M=n.maskClosable,y=void 0===M||M,T=n.onConfirm,D=void 0===T?h["b"]:T,I=n.close,q=void 0!==I&&I,z=n.confirm,P=void 0===z?"\u786e\u8ba4":z,F=n.closeIcon,L=void 0===F||F,Z=n.loading,A=void 0!==Z&&Z,Q=n.btns,V=void 0===Q?[]:Q,Y=n.children,G=n.status,J=n.contentClassName,K=n.footerClassName,X=n.headerClassName,W=n.className,$=n.style,U=n.content,H=n.namespace,nn=Object(v["f"])("fr_modal_metas",!!e,{mask:_}),en=Object(s["a"])(nn,2),tn=en[0],an=en[1],on=-1===tn?x:tn+x,ln=an.slice(0,tn),sn=ln.some(n=>n.meta.mask),rn=Object(i["useMemo"])(()=>window.devicePixelRatio||1,[]);function cn(){return r.a.createElement(r.a.Fragment,null,q&&r.a.createElement(m["default"],{onClick:()=>E()},"string"===typeof q?q:"\u53d6\u6d88"),P&&r.a.createElement(m["default"],{color:"primary",onClick:()=>D()},"string"===typeof P?P:"\u786e\u8ba4"))}function mn(){return 0===V.length?null:V.map((n,e)=>{var t=n.text,a=Object(l["a"])(n,["text"]);return r.a.createElement(m["default"],Object(o["a"])({key:e},a),t)})}function dn(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:b()("fr-modal_title",X)},S||r.a.createElement("span",null,R)),r.a.createElement("div",{className:b()("fr-modal_cont",J)},Y),r.a.createElement("div",{className:b()("fr-modal_footer",K,{__full:C})},O||mn()||cn()))}var un=f["statusIcons"][G];return r.a.createElement(c["a"],{namespace:H,mask:_,visible:!sn,maskClosable:!A&&y,style:{zIndex:on,top:20*tn/rn,left:20*tn/rn},contClassName:b()("fr-modal",W),className:"fr-modal_wrap",contStyle:Object(a["a"])(Object(a["a"])({},$),{},{maxWidth:j,padding:U?0:""}),show:e,onRemove:w,onClose:E},G&&r.a.createElement("div",{className:"fr-modal_status-warp"},r.a.createElement(d["a"],{className:"fr-modal_status",alpha:!1,toggle:e,type:"slideLeft",config:u["b"].slow},r.a.createElement(un,null))),L&&r.a.createElement(m["default"],{icon:!0,className:"fr-modal_close-icon",onClick:()=>E(),size:"small"},r.a.createElement(f["CloseOutlined"],null)),r.a.createElement(p["default"],{full:!0,show:A,text:"\u8bf7\u7a0d\u540e"}),U||dn())},C=Object(w["a"])(E,{namespace:"MODAL"}),k=Object.assign(E,{api:C}),j=k},B68Z:function(n,e,t){"use strict";var a=t("wx14"),o=t("Ff2n"),l=t("VTBJ"),s=t("q1tI"),i=t.n(s),r=t("1p7j"),c=(t("iCBh"),t("K3qG")),m=t("TSYQ"),d=t.n(m),u={large:18,small:14,mini:12},f=/.?(Outlined|Filled|TwoTone|Icon)$/;function p(n){return Object(c["g"])(n)?n.map((e,t)=>{var a,o,s,r=null===(a=e)||void 0===a?void 0:a.type,c="";r&&(c=(null===(o=r.render)||void 0===o?void 0:o.displayName)||(null===(s=r.render)||void 0===s?void 0:s.name)||r.name);if(c&&i.a.isValidElement(e)&&f.test(c)){var m={marginLeft:8,marginRight:8};0===t&&(m={marginRight:8}),t===n.length-1&&(m={marginLeft:8});var d=Object(l["a"])(Object(l["a"])({},e.props.style),m);return i.a.cloneElement(e,{style:d,key:t})}return e}):n}var h=n=>{var e=n.size,t=n.color,l=n.circle,c=n.outline,m=n.block,f=n.link,h=n.icon,v=n.disabled,w=n.loading,g=n.md,b=n.win,x=n.children,E=n.className,C=n.href,k=Object(o["a"])(n,["size","color","circle","outline","block","link","icon","disabled","loading","md","win","children","className","href"]),j=d()(E,"fr-btn","fr-effect",{["__".concat(t)]:t,["__".concat(e)]:e,__circle:l,__outline:c,__block:m,__link:f,__icon:h,__md:g,__win:b,__light:!!t&&!f&&!h,__disabled:v||w}),O=Object(s["useMemo"])(()=>p(x),[x]);return i.a.createElement("button",Object(a["a"])({type:"button"},k,{className:j,disabled:!!v||!!w}),f&&i.a.createElement("a",{className:"fr-btn__link",href:C}),i.a.createElement(r["default"],{style:{fontSize:e?u[e]:14,color:"#333"},show:!!w,full:!0,text:""}),i.a.createElement("span",null,O))};e["a"]=h},BO4J:function(n,e){},CiMt:function(n,e,t){},GTID:function(n,e,t){"use strict";t("iCBh"),t("pF+1")},M5fq:function(n,e,t){"use strict";var a=t("Ff2n"),o=t("rePB"),l=t("KQm4"),s=t("ODXe"),i=t("q1tI"),r=t.n(i),c=t("i8i4"),m=t.n(c),d=t("K3qG");function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(t,!0).forEach((function(e){Object(o["a"])(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.wrap,o=e.maxInstance,c=void 0===o?1/0:o,u=e.namespace,p=r.a.createRef(),h=Object(i["forwardRef"])((function(e,t){var o=Object(i["useState"])([]),m=Object(s["a"])(o,2),d=m[0],p=m[1];function h(n){setTimeout((function(){p((function(e){return e.filter((function(e){var t=e.id!==n;return!t&&e.onRemove&&e.onRemove(),t}))}))}))}function v(){setTimeout((function(){return p((function(n){return n.forEach((function(n){n.onRemove&&n.onRemove()})),[]}))}))}function w(n){setTimeout((function(){return x(n)}))}function g(){setTimeout((function(){return x()}))}function b(n,e){p((function(t){return t.map((function(t){return t.id===n&&(t=f({},t,{},e)),t}))}))}function x(n){p((function(e){return e.map((function(e){var t=f({},e);return n?e.id===n&&t.show&&(t.show=!1,t.onClose&&t.onClose()):t.show&&(t.show=!1,t.onClose&&t.onClose()),t}))}))}return Object(i["useImperativeHandle"])(t,(function(){return{close:w,closeAll:g,remove:h,removeAll:v,update:b}})),Object(i["useEffect"])((function(){e.isInit||p((function(n){if(n.length>=c&&n.length>0){var t=n.findIndex((function(n){return n.show}));n[t].show=!1}return[].concat(Object(l["a"])(n),[f({},e,{show:!("show"in e)||e.show})])}))}),[e]),d.map((function(e){var t=e.id,o=(e.isInit,Object(a["a"])(e,["id","isInit"]));return r.a.createElement(n,Object.assign({},o,{key:t,namespace:u,onClose:w.bind(null,t),onRemove:h.bind(null,t)}))}))}));function v(n){var e=n.singleton,o=Object(a["a"])(n,["singleton"]),l=Object(d["b"])(2),s=f({},o,{id:l}),i=p.current&&p.current.closeAll;e&&i&&i();var c=r.a.createElement(h,Object.assign({ref:p},s));return m.a.render(t?r.a.createElement(t,null,c):c,Object(d["e"])(u)),[p.current,l]}return v({show:!1,isInit:!0}),v}e["a"]=p},QLlT:function(n,e,t){"use strict";t.r(e);var a=t("wx14"),o=t("55Ip"),l=t("q1tI"),s=t.n(l),i=(t("B2uJ"),t("+su7"),t("qOys")),r=t.n(i),c=t("5Yjd"),m=t.n(c),d=s.a.memo((function(){var n=t("TqRt"),e=n(t("q1tI")),a=n(t("Z4KE")),o=function(){return e["default"].createElement(a["default"],null)};return e["default"].createElement(o)})),u=s.a.memo((function(){var n=t("TqRt"),e=n(t("q1tI")),a=n(t("ebvu")),o=function(){return e["default"].createElement(a["default"],null)};return e["default"].createElement(o)})),f=s.a.memo((function(){var n=t("TqRt"),e=n(t("q1tI")),a=n(t("1Fe8")),o=function(){return e["default"].createElement(a["default"],null)};return e["default"].createElement(o)}));e["default"]=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"markdown"},s.a.createElement("h1",{id:"modal-\u5bf9\u8bdd\u6846"},s.a.createElement("a",{"aria-hidden":"true",href:"#modal-\u5bf9\u8bdd\u6846"},s.a.createElement("span",{className:"icon icon-link"})),"Modal \u5bf9\u8bdd\u6846"),s.a.createElement("p",null,"\u7528\u4e8e\u63d0\u793a\u7528\u6237\u8fdb\u884c\u4e00\u7ec4\u64cd\u4f5c\u800c\u4e0d\u5fc5\u8df3\u8f6c\u9875\u9762\uff0c\u6216\u662f\u7ed9\u4e88\u7528\u6237\u4e00\u4e9b\u5feb\u6377\u63d0\u793a"),s.a.createElement("h2",{id:"\u57fa\u7840\u793a\u4f8b"},s.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u793a\u4f8b"},s.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u793a\u4f8b"),s.a.createElement("p",null,"Modal \u7ec4\u4ef6\u7684\u914d\u7f6e\u975e\u5e38\u591a\u6837\u5316\uff0c\u901a\u8fc7\u5408\u7406\u7684\u914d\u7f6e\u53ef\u4ee5\u5b9e\u73b0\u7edd\u5927\u591a\u6570\u7684 Modal \u529f\u80fd")),s.a.createElement(m.a,Object(a["a"])({source:{tsx:"import React from 'react';\n\nimport Modal from '@lxjx/fr/lib/modal';\nimport Button from '@lxjx/fr/lib/button';\n\nimport './style.css';\n\nconst Demo = () => {\n  const [show, setShow] = React.useState(false);\n  const [show2, setShow2] = React.useState(false);\n  const [show3, setShow3] = React.useState(false);\n  const [show4, setShow4] = React.useState(false);\n  const [loading, setLoading] = React.useState(false);\n\n  return (\n    <div>\n      <div>\n        <Button onClick={() => setShow(p => !p)}>show </Button>\n        <Button onClick={() => setShow3(p => !p)}>\u65e0\u906e\u7f69\u5c42</Button>\n        <Button onClick={() => setShow4(p => !p)}>\u81ea\u5b9a\u4e49\u6309\u94ae</Button>\n        <Button onClick={() => setShow2(p => !p)}>flex\u6309\u94ae</Button>\n      </div>\n\n      <Modal\n        title=\"\u57fa\u672c\u793a\u4f8b\"\n        show={show}\n        status=\"success\"\n        loading={loading}\n        onClose={() => {\n          setShow(false);\n        }}\n        onConfirm={() => {\n          setLoading(true);\n          setTimeout(() => {\n            setLoading(false);\n            setShow(false);\n          }, 1000);\n        }}\n      >\n        \u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\n      </Modal>\n\n      <Modal\n        title=\"flex\u6309\u94ae\"\n        show={show2}\n        flexBtn\n        close\n        onClose={() => {\n          setShow2(false);\n        }}\n        onConfirm={() => {\n          setShow2(false);\n        }}\n      >\n        \u6211\u662f\u5185\u5bb9\n      </Modal>\n\n      <Modal\n        title=\"\u65e0\u906e\u7f69\u5c42\"\n        status=\"error\"\n        show={show3}\n        mask={false}\n        onClose={() => {\n          setShow3(false);\n        }}\n        onConfirm={() => {\n          setShow3(false);\n        }}\n      >\n        \u6211\u662f\u5185\u5bb9\n      </Modal>\n\n      <Modal\n        title=\"\u81ea\u5b9a\u4e49\u6309\u94ae\"\n        status=\"warning\"\n        show={show4}\n        mask={false}\n        btns={[\n          {\n            text: '\u5220\u9664',\n            color: 'red',\n            onClick() {\n              setShow4(false);\n            },\n          },\n          {\n            text: '\u786e\u8ba4',\n            color: 'blue',\n            onClick() {\n              setShow4(false);\n            },\n          },\n        ]}\n      >\n        \u6211\u662f\u5185\u5bb9\n      </Modal>\n    </div>\n  );\n};\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport Modal from '@lxjx/fr/lib/modal';\nimport Button from '@lxjx/fr/lib/button';\nimport './style.css';\n\nconst Demo = () => {\n  const [show, setShow] = React.useState(false);\n  const [show2, setShow2] = React.useState(false);\n  const [show3, setShow3] = React.useState(false);\n  const [show4, setShow4] = React.useState(false);\n  const [loading, setLoading] = React.useState(false);\n  return (\n    <div>\n      <div>\n        <Button onClick={() => setShow(p => !p)}>show </Button>\n        <Button onClick={() => setShow3(p => !p)}>\u65e0\u906e\u7f69\u5c42</Button>\n        <Button onClick={() => setShow4(p => !p)}>\u81ea\u5b9a\u4e49\u6309\u94ae</Button>\n        <Button onClick={() => setShow2(p => !p)}>flex\u6309\u94ae</Button>\n      </div>\n\n      <Modal\n        title=\"\u57fa\u672c\u793a\u4f8b\"\n        show={show}\n        status=\"success\"\n        loading={loading}\n        onClose={() => {\n          setShow(false);\n        }}\n        onConfirm={() => {\n          setLoading(true);\n          setTimeout(() => {\n            setLoading(false);\n            setShow(false);\n          }, 1000);\n        }}\n      >\n        \u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\n      </Modal>\n\n      <Modal\n        title=\"flex\u6309\u94ae\"\n        show={show2}\n        flexBtn\n        close\n        onClose={() => {\n          setShow2(false);\n        }}\n        onConfirm={() => {\n          setShow2(false);\n        }}\n      >\n        \u6211\u662f\u5185\u5bb9\n      </Modal>\n\n      <Modal\n        title=\"\u65e0\u906e\u7f69\u5c42\"\n        status=\"error\"\n        show={show3}\n        mask={false}\n        onClose={() => {\n          setShow3(false);\n        }}\n        onConfirm={() => {\n          setShow3(false);\n        }}\n      >\n        \u6211\u662f\u5185\u5bb9\n      </Modal>\n\n      <Modal\n        title=\"\u81ea\u5b9a\u4e49\u6309\u94ae\"\n        status=\"warning\"\n        show={show4}\n        mask={false}\n        btns={[\n          {\n            text: '\u5220\u9664',\n            color: 'red',\n\n            onClick() {\n              setShow4(false);\n            },\n          },\n          {\n            text: '\u786e\u8ba4',\n            color: 'blue',\n\n            onClick() {\n              setShow4(false);\n            },\n          },\n        ]}\n      >\n        \u6211\u662f\u5185\u5bb9\n      </Modal>\n    </div>\n  );\n};\n\nexport default Demo;\n"}},{path:"/_demos/demo-5",dependencies:{},files:{"style.css":{path:"./style.css",content:".modal {\n  text-align: center;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.modal-img img {\n  width: 100%;\n}\n.modal-title {\n  margin: 24px 0 12px;\n  font-size: 18px;\n}\n.modal-cont {\n  padding: 0 24px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.modal-btn {\n  margin: 12px 12px 24px;\n  font-size: 18px;\n}\n"}}}),s.a.createElement(d,null)),s.a.createElement("div",{className:"markdown"},s.a.createElement("h2",{id:"\u901a\u8fc7-api-\u4f7f\u7528"},s.a.createElement("a",{"aria-hidden":"true",href:"#\u901a\u8fc7-api-\u4f7f\u7528"},s.a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7 api \u4f7f\u7528"),s.a.createElement("p",null,"\u901a\u8fc7",s.a.createElement(o["a"],{to:"/#/utils/render-api"},"render-api"),"\u6765\u8fdb\u884c\u7ec4\u4ef6\u5916\u6e32\u67d3")),s.a.createElement(m.a,Object(a["a"])({source:{tsx:"import React from 'react';\n\nimport Modal from '@lxjx/fr/lib/modal';\nimport Button from '@lxjx/fr/lib/button';\n\nfunction mult(mask = true) {\n  for (let i = 0; i < 6; i++) {\n    setTimeout(() => {\n      const [refs, id] = Modal.api({\n        title: `${i}\u901a\u8fc7api\u6765\u8c03\u7528modal`,\n        mask,\n        onConfirm() {\n          refs.close(id);\n        },\n        onClose() {\n          console.log(id);\n        },\n      });\n    });\n  }\n}\n\nconst Demo = () => (\n  <div>\n    <Button\n      onClick={() => {\n        const [refs, id] = Modal.api({\n          title: '\u901a\u8fc7api\u6765\u8c03\u7528modal',\n          status: 'success',\n          children: '\u914d\u7f6e\u4e0e\u5e38\u89c4\u4f7f\u7528\u65f6\u7684prop\u4e00\u6837',\n          loading: true,\n          onConfirm() {\n            refs.close(id);\n          },\n        });\n\n        setTimeout(() => {\n          refs.update(id, {\n            loading: false,\n          });\n        }, 1000);\n      }}\n    >\n      \u7f16\u7a0b\u5f0f\u8c03\u7528\n    </Button>\n    <Button onClick={() => mult()}>\u6253\u5f00\u4e00\u7ec4\u7a97\u53e3</Button>\n    <Button onClick={() => mult(false)}>\u6253\u5f00\u4e00\u7ec4\u7a97\u53e3(\u65e0\u906e\u7f69)</Button>\n  </div>\n);\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport Modal from '@lxjx/fr/lib/modal';\nimport Button from '@lxjx/fr/lib/button';\n\nfunction mult(mask = true) {\n  for (let i = 0; i < 6; i++) {\n    setTimeout(() => {\n      const [refs, id] = Modal.api({\n        title: `${i}\u901a\u8fc7api\u6765\u8c03\u7528modal`,\n        mask,\n\n        onConfirm() {\n          refs.close(id);\n        },\n\n        onClose() {\n          console.log(id);\n        },\n      });\n    });\n  }\n}\n\nconst Demo = () => (\n  <div>\n    <Button\n      onClick={() => {\n        const [refs, id] = Modal.api({\n          title: '\u901a\u8fc7api\u6765\u8c03\u7528modal',\n          status: 'success',\n          children: '\u914d\u7f6e\u4e0e\u5e38\u89c4\u4f7f\u7528\u65f6\u7684prop\u4e00\u6837',\n          loading: true,\n\n          onConfirm() {\n            refs.close(id);\n          },\n        });\n        setTimeout(() => {\n          refs.update(id, {\n            loading: false,\n          });\n        }, 1000);\n      }}\n    >\n      \u7f16\u7a0b\u5f0f\u8c03\u7528\n    </Button>\n    <Button onClick={() => mult()}>\u6253\u5f00\u4e00\u7ec4\u7a97\u53e3</Button>\n    <Button onClick={() => mult(false)}>\u6253\u5f00\u4e00\u7ec4\u7a97\u53e3(\u65e0\u906e\u7f69)</Button>\n  </div>\n);\n\nexport default Demo;\n"}},{path:"/_demos/demo-api-1",dependencies:{},files:{}}),s.a.createElement(u,null)),s.a.createElement("div",{className:"markdown"},s.a.createElement("h2",{id:"\u5b8c\u5168\u5b9a\u5236"},s.a.createElement("a",{"aria-hidden":"true",href:"#\u5b8c\u5168\u5b9a\u5236"},s.a.createElement("span",{className:"icon icon-link"})),"\u5b8c\u5168\u5b9a\u5236"),s.a.createElement("p",null,"\u4f7f\u7528",s.a.createElement("code",null,"content"),"\u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u6700\u5927\u5316\u7684\u5bf9 Modal \u8fdb\u884c\u5b9a\u5236\uff0c\u5b83\u5c06\u4f1a\u8986\u76d6\u6240\u6709\u7684\u9ed8\u8ba4\u8282\u70b9\u9009\u9879")),s.a.createElement(m.a,Object(a["a"])({source:{tsx:'import React from \'react\';\n\nimport Modal from \'@lxjx/fr/lib/modal\';\nimport Button from \'@lxjx/fr/lib/button\';\n\nimport img1 from \'@/mock/img/1.jpg\';\n\nimport \'./style.css\';\n\nconst Demo = () => {\n  const [show, setShow] = React.useState(false);\n\n  return (\n    <div>\n      <div>\n        <Button onClick={() => setShow(p => !p)}>show </Button>\n      </div>\n\n      <Modal\n        show={show}\n        onClose={() => setShow(false)}\n        content={\n          <div className="modal">\n            <div className="modal-img">\n              <img src={img1} alt="" />\n            </div>\n            <div className="modal-title">\u4e54\u78a7\u841d\u9996\u6b21\u9732\u8138</div>\n            <div className="modal-cont">\n              \u5979\u7ad9\u5728\u4e4c\u9c81\u6728\u9f50\u4e00\u5bb6\u5546\u573a\u95e8\u53e3\uff0c\u6325\u624b\uff0c\u5fae\u7b11\u3002\u7ea6\u89c1\u5730\u70b9\u662f\u5979\u9009\u5b9a\u7684\uff0c\u5979\u62d2\u7edd\u4efb\u4f55\u8bd5\u56fe\u8fdb\u5165\u5979\u751f\u6d3b\u573a\u666f\u7684\u8981\u6c42\u3002\n            </div>\n            <div className="modal-btn">\n              <Button link color="blue" onClick={() => setShow(false)}>\n                \u6211\u77e5\u9053\u4e86\n              </Button>\n            </div>\n          </div>\n        }\n      />\n    </div>\n  );\n};\n\nexport default Demo;\n',jsx:'import React from \'react\';\nimport Modal from \'@lxjx/fr/lib/modal\';\nimport Button from \'@lxjx/fr/lib/button\';\nimport img1 from \'@/mock/img/1.jpg\';\nimport \'./style.css\';\n\nconst Demo = () => {\n  const [show, setShow] = React.useState(false);\n  return (\n    <div>\n      <div>\n        <Button onClick={() => setShow(p => !p)}>show </Button>\n      </div>\n\n      <Modal\n        show={show}\n        onClose={() => setShow(false)}\n        content={\n          <div className="modal">\n            <div className="modal-img">\n              <img src={img1} alt="" />\n            </div>\n            <div className="modal-title">\u4e54\u78a7\u841d\u9996\u6b21\u9732\u8138</div>\n            <div className="modal-cont">\n              \u5979\u7ad9\u5728\u4e4c\u9c81\u6728\u9f50\u4e00\u5bb6\u5546\u573a\u95e8\u53e3\uff0c\u6325\u624b\uff0c\u5fae\u7b11\u3002\u7ea6\u89c1\u5730\u70b9\u662f\u5979\u9009\u5b9a\u7684\uff0c\u5979\u62d2\u7edd\u4efb\u4f55\u8bd5\u56fe\u8fdb\u5165\u5979\u751f\u6d3b\u573a\u666f\u7684\u8981\u6c42\u3002\n            </div>\n            <div className="modal-btn">\n              <Button link color="blue" onClick={() => setShow(false)}>\n                \u6211\u77e5\u9053\u4e86\n              </Button>\n            </div>\n          </div>\n        }\n      />\n    </div>\n  );\n};\n\nexport default Demo;\n'}},{path:"/_demos/demo-custom",dependencies:{},files:{"style.css":{path:"./style.css",content:".modal {\n  text-align: center;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.modal-img img {\n  width: 100%;\n}\n.modal-title {\n  margin: 24px 0 12px;\n  font-size: 18px;\n}\n.modal-cont {\n  padding: 0 24px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.modal-btn {\n  margin: 12px 12px 24px;\n  font-size: 18px;\n}\n"}}}),s.a.createElement(f,null)),s.a.createElement("div",{className:"markdown"},s.a.createElement("p",null,s.a.createElement("code",null,"css")),s.a.createElement(r.a,{code:".modal {\n  text-align: center;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.modal-img img {\n  width: 100%;\n}\n.modal-title {\n  margin: 24px 0 12px;\n  font-size: 18px;\n}\n.modal-cont {\n  padding: 0 24px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.modal-btn {\n  margin: 12px 12px 24px;\n  font-size: 18px;\n}\n",lang:"css"}),s.a.createElement("h2",{id:"api"},s.a.createElement("a",{"aria-hidden":"true",href:"#api"},s.a.createElement("span",{className:"icon icon-link"})),"API"),s.a.createElement(r.a,{code:"interface ModalProps extends ReactRenderApiProps, ComponentBaseProps {\n  /** \u542f\u7528\u54cd\u5e94\u5f0f\u6309\u94ae\uff0c\u6309\u94ae\u4f1a\u6839\u636e\u5e95\u90e8\u7684\u5bbd\u5ea6\u5e73\u5206\u5269\u4f59\u5bbd\u5ea6 */\n  flexBtn?: boolean;\n  /** \u5185\u5bb9\u533a\u57df\u7684\u6700\u5927\u5bbd\u5ea6, \u9ed8\u8ba4\u4e3a360 */\n  maxWidth?: number | string;\n  /** \u81ea\u5b9a\u4e49\u9876\u90e8\u5185\u5bb9\uff0c\u4f1a\u8986\u76d6title\u7684\u914d\u7f6e */\n  header?: React.ReactNode;\n  /** '\u63d0\u793a' | \u6807\u9898\u6587\u672c */\n  title?: string;\n  /** \u5185\u5bb9\u533a\u57df */\n  children?: React.ReactNode;\n  /** \u901a\u8fc7\u914d\u7f6e\u8bbe\u7f6e\u6309\u94ae\u7ec4 */\n  btns?: (Pick<ButtonProps, 'color' | 'children' | 'onClick' | 'disabled' | 'icon' | 'link'> & {\n    text: string;\n  })[];\n  /** \u81ea\u5b9a\u4e49\u5e95\u90e8\u5185\u5bb9\uff0c\u4e0e\u5176\u4ed6\u5e95\u90e8\u76f8\u5173\u914d\u7f6e\u7684\u4f18\u5148\u7ea7\u4e3a footer > btns > confirm\u3001close */\n  footer?: React.ReactNode;\n  /** \u9ed8\u8ba4\u7684\u786e\u8ba4\u6309\u94ae\u88ab\u70b9\u51fb\u65f6 */\n  onConfirm?(): void;\n  /** false | '\u53d6\u6d88' | \u662f\u5426\u663e\u793a\u53d6\u6d88\u6309\u94ae\uff0c\u4f20\u5165string\u65f6\uff0c\u4e3a\u6309\u94ae\u6587\u672c */\n  close?: boolean | string;\n  /** '\u786e\u8ba4' | \u662f\u5426\u663e\u793a\u786e\u8ba4\u6309\u94ae\uff0c\u4f20\u5165string\u65f6\uff0c\u4e3a\u6309\u94ae\u6587\u672c */\n  confirm?: boolean | string;\n  /** true | \u662f\u5426\u663e\u793a\u906e\u7f69 */\n  mask?: boolean;\n  /** true | \u662f\u5426\u5141\u8bb8\u70b9\u51fbmask\u8fdb\u884c\u5173\u95ed */\n  maskClosable?: boolean;\n  /** true | \u662f\u5426\u663e\u793a\u5173\u95ed\u56fe\u6807 */\n  closeIcon?: boolean;\n  /** \u8bbe\u7f6e\u5f39\u5c42\u4e3aloading\u72b6\u6001\uff0c\u963b\u6b62\u64cd\u4f5c(\u5728loading\u7ed3\u675f\u524d\u4f1a\u963b\u6b62mask\u70b9\u51fb\u5173\u95ed\u4ee5\u53ca\u9632\u6b62\u5f39\u5c42\u70b9\u51fb) */\n  loading?: boolean;\n  /** \u4f7f\u7528\u81ea\u5b9a\u4e49\u5185\u5bb9\u5b8c\u5168\u66ff\u6362\u9ed8\u8ba4\u6e32\u67d3\u5185\u5bb9\uff0c\u4f1a\u8986\u76d6\u6389footer\u3001header\u3001title\u533a\u57df\u5e76\u4f7f\u76f8\u5173\u7684\u914d\u7f6e\u5931\u6548 */\n  content?: React.ReactNode;\n  /** \u8bbe\u7f6emodal\u7684\u72b6\u6001 */\n  status?: 'success' | 'error' | 'warning';\n  /** \u5185\u5bb9\u533a\u57dfclass */\n  contentClassName?: string;\n  /** \u5934\u90e8\u533a\u57dfclass */\n  headerClassName?: string;\n  /** \u811a\u90e8\u533a\u57dfclass */\n  footerClassName?: string;\n}\n",lang:"tsx"}),s.a.createElement("p",null,s.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),s.a.createElement(r.a,{code:"interface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}\n\ninterface ReactRenderApiProps {\n  /** \u5b9e\u4f8b\u7ec4\u4ef6\u662f\u5426\u663e\u793a */\n  show?: boolean;\n  /** \u4ece\u5b9e\u4f8b\u5217\u8868\u79fb\u9664\u6307\u5b9a\u5b9e\u4f8b, \u5982\u679c\u7ec4\u4ef6\u5e26\u5173\u95ed\u52a8\u753b\uff0c\u8bf7\u5148\u4f7f\u7528onClose\uff0c\u7136\u540e\u5728show = false\u65f6\u6267\u884c\u5173\u95ed\u52a8\u753b\u5e76\u5728\u5408\u9002\u7684\u65f6\u673a\u6267\u884c\u6b64\u65b9\u6cd5\u6765\u79fb\u9664\u5b9e\u4f8b */\n  onRemove?: () => void;\n  /** \u5c06\u8be5\u9879\u7684show\u8bbe\u7f6e\u4e3afalse */\n  onClose?: () => void;\n  /** \u6b64\u53c2\u6570\u900f\u4f20\u81f3createRenderApi(options)\u4e2d\u7684option.namespace\uff0c\u7528\u4e8e\u5e2e\u52a9\u7ec4\u4ef6\u6e32\u67d3\u5230\u81ea\u5b9a\u4e49\u547d\u540d\u7684\u8282\u70b9\u4e0b\n   *  \u7528\u4e8e\u67d0\u4e9b\u53ef\u80fd\u4f1a\u5b58\u5728\u7ec4\u4ef6\u5f62\u5f0f\u4e0eapi\u5f62\u5f0f\u4e00\u8d77\u4f7f\u7528\u7684\u7ec4\u4ef6(\u5982modal)\uff0c\u540c\u8282\u70b9\u4e0b\u6e32\u67d3\u4e24\u79cd\u7ec4\u4ef6\u4f1a\u9020\u6210react\u6e32\u67d3\u51b2\u7a81\u3002\n   * */\n  namespace?: string;\n}\n",lang:"tsx"})))}},QjBK:function(n,e,t){"use strict";t("iCBh"),t("tU1D")},"R+1g":function(n,e,t){n.exports=t.p+"static/1.51042953.jpg"},TcRa:function(n,e){},TqRt:function(n,e){function t(n){return n&&n.__esModule?n:{default:n}}n.exports=t},Z4KE:function(n,e,t){"use strict";t.r(e);var a=t("ODXe"),o=t("q1tI"),l=t.n(o),s=t("6RdY"),i=t("uVtn"),r=(t("69qM"),()=>{var n=l.a.useState(!1),e=Object(a["a"])(n,2),t=e[0],o=e[1],r=l.a.useState(!1),c=Object(a["a"])(r,2),m=c[0],d=c[1],u=l.a.useState(!1),f=Object(a["a"])(u,2),p=f[0],h=f[1],v=l.a.useState(!1),w=Object(a["a"])(v,2),g=w[0],b=w[1],x=l.a.useState(!1),E=Object(a["a"])(x,2),C=E[0],k=E[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(i["default"],{onClick:()=>o(n=>!n)},"show "),l.a.createElement(i["default"],{onClick:()=>h(n=>!n)},"\u65e0\u906e\u7f69\u5c42"),l.a.createElement(i["default"],{onClick:()=>b(n=>!n)},"\u81ea\u5b9a\u4e49\u6309\u94ae"),l.a.createElement(i["default"],{onClick:()=>d(n=>!n)},"flex\u6309\u94ae")),l.a.createElement(s["a"],{title:"\u57fa\u672c\u793a\u4f8b",show:t,status:"success",loading:C,onClose:()=>{o(!1)},onConfirm:()=>{k(!0),setTimeout(()=>{k(!1),o(!1)},1e3)}},"\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9\u6211\u662f\u5185\u5bb9"),l.a.createElement(s["a"],{title:"flex\u6309\u94ae",show:m,flexBtn:!0,close:!0,onClose:()=>{d(!1)},onConfirm:()=>{d(!1)}},"\u6211\u662f\u5185\u5bb9"),l.a.createElement(s["a"],{title:"\u65e0\u906e\u7f69\u5c42",status:"error",show:p,mask:!1,onClose:()=>{h(!1)},onConfirm:()=>{h(!1)}},"\u6211\u662f\u5185\u5bb9"),l.a.createElement(s["a"],{title:"\u81ea\u5b9a\u4e49\u6309\u94ae",status:"warning",show:g,mask:!1,btns:[{text:"\u5220\u9664",color:"red",onClick(){b(!1)}},{text:"\u786e\u8ba4",color:"blue",onClick(){b(!1)}}]},"\u6211\u662f\u5185\u5bb9"))});e["default"]=r},ZSGz:function(n,e,t){"use strict";var a=t("wx14"),o=t("Ff2n"),l=t("q1tI"),s=t.n(l),i=t("Rz6r"),r=t("ODXe"),c=t("lgaZ");function m(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=arguments.length>2?arguments[2]:void 0,a=t||{},o=a.disabled,s=a.deps,i=void 0===s?[]:s,m=a.extraDelay,d=void 0===m?0:m,u=Object(l["useState"])(!!o&&n),f=Object(r["a"])(u,2),p=f[0],h=f[1],v=Object(c["h"])({toggleTimer:null});return Object(l["useEffect"])(()=>{if(e&&!o){if(n!==p)return v.toggleTimer=setTimeout(()=>{h(n)},e+d),()=>{v.toggleTimer&&clearTimeout(v.toggleTimer)}}else h(n)},[n,...i]),p}var d=t("9RZ+"),u=t("TSYQ"),f=t.n(u),p=n=>{var e=n.size,t=n.inline,l=n.text,r=void 0===l?"\u52a0\u8f7d\u4e2d":l,c=n.full,u=n.dark,p=n.show,h=void 0===p||p,v=n.className,w=n.loadingDelay,g=void 0===w?0:w,b=Object(o["a"])(n,["size","inline","text","full","dark","show","className","loadingDelay"]),x=m(h,g);return s.a.createElement(d["a"],Object(a["a"])({toggle:x,type:"fade",mountOnEnter:!0,unmountOnExit:!0},b,{config:d["c"].stiff,className:f()(v,"fr-spin",{["__".concat(e)]:!!e,__inline:t,__full:c,__dark:u})}),s.a.createElement(i["WindmillIcon"],{className:"fr-spin_unit"}),r&&s.a.createElement("span",{className:"fr-spin_text"},r,s.a.createElement("span",{className:"fr-spin_ellipsis"})))};e["a"]=p},ebvu:function(n,e,t){"use strict";t.r(e);var a=t("ODXe"),o=t("q1tI"),l=t.n(o),s=t("6RdY"),i=t("uVtn");function r(){for(var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=function(e){setTimeout(()=>{var t=s["a"].api({title:"".concat(e,"\u901a\u8fc7api\u6765\u8c03\u7528modal"),mask:n,onConfirm(){l.close(i)},onClose(){console.log(i)}}),o=Object(a["a"])(t,2),l=o[0],i=o[1]})},t=0;t<6;t++)e(t)}var c=()=>l.a.createElement("div",null,l.a.createElement(i["default"],{onClick:()=>{var n=s["a"].api({title:"\u901a\u8fc7api\u6765\u8c03\u7528modal",status:"success",children:"\u914d\u7f6e\u4e0e\u5e38\u89c4\u4f7f\u7528\u65f6\u7684prop\u4e00\u6837",loading:!0,onConfirm(){t.close(o)}}),e=Object(a["a"])(n,2),t=e[0],o=e[1];setTimeout(()=>{t.update(o,{loading:!1})},1e3)}},"\u7f16\u7a0b\u5f0f\u8c03\u7528"),l.a.createElement(i["default"],{onClick:()=>r()},"\u6253\u5f00\u4e00\u7ec4\u7a97\u53e3"),l.a.createElement(i["default"],{onClick:()=>r(!1)},"\u6253\u5f00\u4e00\u7ec4\u7a97\u53e3(\u65e0\u906e\u7f69)"));e["default"]=c},"pF+1":function(n,e,t){},tU1D:function(n,e,t){},uVtn:function(n,e,t){"use strict";t("QjBK"),t("BO4J");var a=t("B68Z");t.d(e,"default",(function(){return a["a"]}))}}]);