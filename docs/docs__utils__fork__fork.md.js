(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[177,172,173,174,175,176],{"+PjD":function(e,n,t){"use strict";t.r(n);var r=t("0Owb"),a=t("q1tI"),l=t.n(a),o=t("kr9X"),c=t("zdPv"),i=t("Ink9"),m=()=>{var e,n=Object(c["useFetch"])(i["b"],{timeout:Math.random()>.7?500:8e3});return l.a.createElement("div",null,l.a.createElement("div",{className:"mb-12"},l.a.createElement("button",{type:"button",disabled:n.loading,onClick:n.send},n.loading?"\u52a0\u8f7d\u4e2d":"\u53d1\u8d77\u8bf7\u6c42")),l.a.createElement(o["default"],Object(r["a"])({hasData:null===(e=n.data)||void 0===e?void 0:e.length},n),()=>l.a.createElement("ul",null,n.data.map(e=>l.a.createElement("li",{key:e,style:i["a"]},"rand num: ",e)))))};n["default"]=m},AIJx:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("q1tI");function a(){var e=Object(r["useRef"])(!0);return e.current?(e.current=!1,!0):e.current}},EALy:function(e,n,t){"use strict";t.r(n);var r=t("0Owb"),a=t("q1tI"),l=t.n(a),o=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(o),i=t("5Yjd"),m=t.n(i),s=l.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),r=e(t("+PjD")),a=function(){return n["default"].createElement(r["default"],null)};return n["default"].createElement(a)})),d=l.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),r=e(t("jgEu")),a=function(){return n["default"].createElement(r["default"],null)};return n["default"].createElement(a)})),u=l.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),r=e(t("cmEn")),a=function(){return n["default"].createElement(r["default"],null)};return n["default"].createElement(a)})),f=l.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),r=e(t("IDZi")),a=function(){return n["default"].createElement(r["default"],null)};return n["default"].createElement(a)})),v=l.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),r=e(t("H2oi")),a=function(){return n["default"].createElement(r["default"],null)};return n["default"].createElement(a)}));n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"fork-\u6761\u4ef6\u6e32\u67d3"},l.a.createElement("a",{"aria-hidden":"true",href:"#fork-\u6761\u4ef6\u6e32\u67d3"},l.a.createElement("span",{className:"icon icon-link"})),"Fork \u6761\u4ef6\u6e32\u67d3"),l.a.createElement("p",null,"\u7528\u4e8e\u89c4\u8303\u548c\u7b80\u5316\u67d0\u4e9b\u9700\u8981\u8fdb\u884c\u6761\u4ef6\u6e32\u67d3\u7684\u573a\u666f"),l.a.createElement("h2",{id:"fork"},l.a.createElement("a",{"aria-hidden":"true",href:"#fork"},l.a.createElement("span",{className:"icon icon-link"})),"Fork"),l.a.createElement("p",null,"\u4e00\u4e2a\u5904\u7406\u5f02\u6b65 UI \u7684\u7ec4\u4ef6"),l.a.createElement("p",null,"\u7ec4\u4ef6\u5047\u8bbe\u4e00\u4e2a\u5f02\u6b65 UI \u5305\u542b\u56db\u79cd\u72b6\u6001: ",l.a.createElement("code",null,"normal"),"(\u5e38\u6001 UI) | ",l.a.createElement("code",null,"loading")," | ",l.a.createElement("code",null,"timeout")," | ",l.a.createElement("code",null,"error")),l.a.createElement("p",null,"\u56db\u79cd\u72b6\u6001\u5e94\u8be5\u662f\u4e92\u65a5\u7684\uff0c\u53ea\u4f1a\u540c\u65f6\u5b58\u5728\u4e00\u79cd(\u67d0\u4e9b\u573a\u666f\u4f1a\u9700\u8981",l.a.createElement("code",null,"normal"),"\u548c\u5176\u4ed6\u4e09\u79cd\u72b6\u6001\u4e00\u8d77\u663e\u793a\uff0c\u53ef\u4ee5\u901a\u8fc7",l.a.createElement("code",null,"forceRender"),"\u5f00\u542f)"),l.a.createElement("p",null,"\u72b6\u6001\u4f18\u5148\u7ea7\u5206\u522b\u662f: ",l.a.createElement("code",null,"loading")," > ",l.a.createElement("code",null,"timeout | error")," > ",l.a.createElement("code",null,"normal")),l.a.createElement("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7ed3\u5408",l.a.createElement("code",null,"useFetch"),"\u8fdb\u884c\u8bf7\u6c42\u7684\u793a\u4f8b:")),l.a.createElement(m.a,Object(r["a"])({source:{tsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\nimport { useFetch } from '@lxjx/hooks';\r\n\r\nimport { mockData, listItemStyle } from './utils';\r\n\r\nconst ForkDemo = () => {\r\n  const meta = useFetch<number[]>(mockData, {\r\n    timeout: Math.random() > 0.7 ? 500 : 8000, // \u6a21\u62df\u8d85\u65f6\u72b6\u6001\r\n  });\r\n\r\n  return (\r\n    <div>\r\n      <div className=\"mb-12\">\r\n        <button type=\"button\" disabled={meta.loading} onClick={meta.send}>\r\n          {meta.loading ? '\u52a0\u8f7d\u4e2d' : '\u53d1\u8d77\u8bf7\u6c42'}\r\n        </button>\r\n      </div>\r\n      <Fork hasData={meta.data?.length} {...meta}>\r\n        {() => (\r\n          <ul>\r\n            {meta.data!.map(item => (\r\n              <li key={item} style={listItemStyle}>\r\n                rand num: {item}\r\n              </li>\r\n            ))}\r\n          </ul>\r\n        )}\r\n      </Fork>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default ForkDemo;\r\n",jsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\nimport { useFetch } from '@lxjx/hooks';\r\nimport { mockData, listItemStyle } from './utils';\r\n\r\nconst ForkDemo = () => {\r\n  const meta = useFetch(mockData, {\r\n    timeout: Math.random() > 0.7 ? 500 : 8000, // \u6a21\u62df\u8d85\u65f6\u72b6\u6001\r\n  });\r\n  return (\r\n    <div>\r\n      <div className=\"mb-12\">\r\n        <button type=\"button\" disabled={meta.loading} onClick={meta.send}>\r\n          {meta.loading ? '\u52a0\u8f7d\u4e2d' : '\u53d1\u8d77\u8bf7\u6c42'}\r\n        </button>\r\n      </div>\r\n      <Fork hasData={meta.data?.length} {...meta}>\r\n        {() => (\r\n          <ul>\r\n            {meta.data.map(item => (\r\n              <li key={item} style={listItemStyle}>\r\n                rand num: {item}\r\n              </li>\r\n            ))}\r\n          </ul>\r\n        )}\r\n      </Fork>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default ForkDemo;\r\n"}},{path:"/_demos/fork-demo",dependencies:{"@lxjx/hooks":"1.16.4"},files:{"utils.ts":{path:"./utils",content:"export const listItemStyle = {\r\n  padding: '4px 12px',\r\n  border: '1px solid #eee',\r\n};\r\n\r\n// \u6a21\u62df\u4e00\u4e2a\u6709\u4e00\u5b9a\u51e0\u7387\u6210\u529f\u3001\u5931\u8d25\u3001\u8d85\u65f6\u3001\u65e0\u6570\u636e\u7684\u8bf7\u6c42\u63a5\u53e3\r\nexport const mockData = () =>\r\n  new Promise((res, rej) => {\r\n    setTimeout(() => {\r\n      const rand = Math.random();\r\n      if (rand < 0.3) {\r\n        rej(new Error('\u52a0\u8f7d\u5f02\u5e38'));\r\n        return;\r\n      }\r\n      // \u6a21\u62df\u6709\u65e0\u6570\u636e\r\n      const data = Array.from({ length: Math.random() > 0.5 ? 0 : 8 }).map(() => Math.random());\r\n      res(data);\r\n    }, 1000);\r\n  });\r\n"}}}),l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"fork-custom"},l.a.createElement("a",{"aria-hidden":"true",href:"#fork-custom"},l.a.createElement("span",{className:"icon icon-link"})),"Fork Custom"),l.a.createElement("p",null,"\u6bcf\u4e2a\u72b6\u6001\u7684\u53cd\u9988\u8282\u70b9\u90fd\u662f\u53ef\u5b9a\u5236\u7684\uff0c\u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7",l.a.createElement("code",null,"className"),"\u3001",l.a.createElement("code",null,"style"),"\u548c\u4e00\u4e9b\u5176\u4ed6\u6587\u672c\u5b9a\u5236\u9879\u6765\u8fdb\u884c\u8f7b\u5ea6\u5b9a\u5236, \u5177\u4f53\u8bf7\u89c1\u9875\u5c3e\u7684 api \u8bf4\u660e")),l.a.createElement(m.a,Object(r["a"])({source:{tsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\nimport { useFetch } from '@lxjx/hooks';\r\n\r\nimport Button from 'm78/button';\r\nimport { mockData, listItemStyle } from './utils';\r\n\r\nconst ForkCustomDemo = () => {\r\n  const meta = useFetch<number[]>(mockData, {\r\n    timeout: Math.random() > 0.7 ? 500 : 8000, // \u6a21\u62df\u8d85\u65f6\u72b6\u6001\r\n  });\r\n\r\n  return (\r\n    <div>\r\n      <div className=\"mb-12\">\r\n        <button type=\"button\" disabled={meta.loading} onClick={meta.send}>\r\n          {meta.loading ? '\u52a0\u8f7d\u4e2d' : '\u53d1\u8d77\u8bf7\u6c42'}\r\n        </button>\r\n      </div>\r\n      <Fork\r\n        hasData={meta.data?.length}\r\n        {...meta}\r\n        customLoading={<span>\u23f3 \u52a0\u8f7d\u4e2d...</span>}\r\n        customNotice={(title, message) => (\r\n          <div>\r\n            <h3 className=\"color-error\">\r\n              {title}\r\n              <span className=\"mlr-12 color-second fs-14\">{message}</span>\r\n              <Button className=\"fs-14\" onClick={meta.send} size=\"small\" color=\"primary\" text>\r\n                \u91cd\u8bd5\r\n              </Button>\r\n            </h3>\r\n          </div>\r\n        )}\r\n        customEmpty={<span>\ud83d\ude10 \u6ca1\u6709\u6570\u636e\u5594~</span>}\r\n      >\r\n        {() => (\r\n          <ul>\r\n            {meta.data!.map(item => (\r\n              <li key={item} style={listItemStyle}>\r\n                rand num: {item}\r\n              </li>\r\n            ))}\r\n          </ul>\r\n        )}\r\n      </Fork>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default ForkCustomDemo;\r\n",jsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\nimport { useFetch } from '@lxjx/hooks';\r\nimport Button from 'm78/button';\r\nimport { mockData, listItemStyle } from './utils';\r\n\r\nconst ForkCustomDemo = () => {\r\n  const meta = useFetch(mockData, {\r\n    timeout: Math.random() > 0.7 ? 500 : 8000, // \u6a21\u62df\u8d85\u65f6\u72b6\u6001\r\n  });\r\n  return (\r\n    <div>\r\n      <div className=\"mb-12\">\r\n        <button type=\"button\" disabled={meta.loading} onClick={meta.send}>\r\n          {meta.loading ? '\u52a0\u8f7d\u4e2d' : '\u53d1\u8d77\u8bf7\u6c42'}\r\n        </button>\r\n      </div>\r\n      <Fork\r\n        hasData={meta.data?.length}\r\n        {...meta}\r\n        customLoading={<span>\u23f3 \u52a0\u8f7d\u4e2d...</span>}\r\n        customNotice={(title, message) => (\r\n          <div>\r\n            <h3 className=\"color-error\">\r\n              {title}\r\n              <span className=\"mlr-12 color-second fs-14\">{message}</span>\r\n              <Button className=\"fs-14\" onClick={meta.send} size=\"small\" color=\"primary\" text>\r\n                \u91cd\u8bd5\r\n              </Button>\r\n            </h3>\r\n          </div>\r\n        )}\r\n        customEmpty={<span>\ud83d\ude10 \u6ca1\u6709\u6570\u636e\u5594~</span>}\r\n      >\r\n        {() => (\r\n          <ul>\r\n            {meta.data.map(item => (\r\n              <li key={item} style={listItemStyle}>\r\n                rand num: {item}\r\n              </li>\r\n            ))}\r\n          </ul>\r\n        )}\r\n      </Fork>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default ForkCustomDemo;\r\n"}},{path:"/_demos/fork-custom-demo",dependencies:{"@lxjx/hooks":"1.16.4"},files:{"utils.ts":{path:"./utils",content:"export const listItemStyle = {\r\n  padding: '4px 12px',\r\n  border: '1px solid #eee',\r\n};\r\n\r\n// \u6a21\u62df\u4e00\u4e2a\u6709\u4e00\u5b9a\u51e0\u7387\u6210\u529f\u3001\u5931\u8d25\u3001\u8d85\u65f6\u3001\u65e0\u6570\u636e\u7684\u8bf7\u6c42\u63a5\u53e3\r\nexport const mockData = () =>\r\n  new Promise((res, rej) => {\r\n    setTimeout(() => {\r\n      const rand = Math.random();\r\n      if (rand < 0.3) {\r\n        rej(new Error('\u52a0\u8f7d\u5f02\u5e38'));\r\n        return;\r\n      }\r\n      // \u6a21\u62df\u6709\u65e0\u6570\u636e\r\n      const data = Array.from({ length: Math.random() > 0.5 ? 0 : 8 }).map(() => Math.random());\r\n      res(data);\r\n    }, 1000);\r\n  });\r\n"}}}),l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"if"},l.a.createElement("a",{"aria-hidden":"true",href:"#if"},l.a.createElement("span",{className:"icon icon-link"})),"If"),l.a.createElement("p",null,"\u6839\u636e\u6761\u4ef6\u6e32\u67d3\u6216\u5378\u8f7d\u5185\u90e8\u7684\u7ec4\u4ef6")),l.a.createElement(m.a,Object(r["a"])({source:{tsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\n\r\nconst Demo = () => (\r\n  <div>\r\n    {/* eslint-disable-next-line */}\r\n    <Fork.If when={true}>\r\n      <div>\u4f60\u770b\u5230\u6211\u4e86 1</div>\r\n    </Fork.If>\r\n    <Fork.If when={false}>\r\n      <div>\u4f60\u770b\u4e0d\u5230\u6211 2</div>\r\n    </Fork.If>\r\n    <Fork.If when={0}>\r\n      <div>\u4f60\u770b\u4e0d\u5230\u6211 3</div>\r\n    </Fork.If>\r\n    <Fork.If when={123}>\r\n      <div>\u4f60\u770b\u5230\u6211\u4e86 4</div>\r\n    </Fork.If>\r\n    <Fork.If when>{() => <div>\u5ef6\u8fdf\u6e32\u67d3 5</div>}</Fork.If>\r\n  </div>\r\n);\r\n\r\nexport default Demo;\r\n",jsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\n\r\nconst Demo = () => (\r\n  <div>\r\n    {/* eslint-disable-next-line */}\r\n    <Fork.If when>\r\n      <div>\u4f60\u770b\u5230\u6211\u4e86 1</div>\r\n    </Fork.If>\r\n    <Fork.If when={false}>\r\n      <div>\u4f60\u770b\u4e0d\u5230\u6211 2</div>\r\n    </Fork.If>\r\n    <Fork.If when={0}>\r\n      <div>\u4f60\u770b\u4e0d\u5230\u6211 3</div>\r\n    </Fork.If>\r\n    <Fork.If when={123}>\r\n      <div>\u4f60\u770b\u5230\u6211\u4e86 4</div>\r\n    </Fork.If>\r\n    <Fork.If when>{() => <div>\u5ef6\u8fdf\u6e32\u67d3 5</div>}</Fork.If>\r\n  </div>\r\n);\r\n\r\nexport default Demo;\r\n"}},{path:"/_demos/fork-demo-if",dependencies:{},files:{}}),l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"toggle"},l.a.createElement("a",{"aria-hidden":"true",href:"#toggle"},l.a.createElement("span",{className:"icon icon-link"})),"Toggle"),l.a.createElement("p",null,"\u663e\u793a\u6216\u9690\u85cf\u5185\u5bb9"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u26a0 \u5fc5\u987b\u786e\u4fdd\u5b50\u53ea\u6709\u4e00\u4e2a\u5b50\u5143\u7d20\u5e76\u4e14\u5305\u542b\u5305\u88f9\u5143\u7d20\uff08\u5373\u4e0d\u80fd\u4e3a\u7eaf\u6587\u672c\uff09\uff0c\u7528\u4e8e\u6302\u8f7d display: 'none'"))),l.a.createElement(m.a,Object(r["a"])({source:{tsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\n\r\nconst Demo = () => (\r\n  <div>\r\n    <Fork.Toggle when>\r\n      <div>\u4f60\u770b\u5230\u6211\u4e861</div>\r\n    </Fork.Toggle>\r\n    <Fork.Toggle when={false}>\r\n      <div>\u4f60\u770b\u4e0d\u5230\u62112</div>\r\n    </Fork.Toggle>\r\n    <Fork.Toggle when={0}>\r\n      <div>\u4f60\u770b\u4e0d\u5230\u62113</div>\r\n    </Fork.Toggle>\r\n    <Fork.Toggle when={123}>\r\n      <div>\u4f60\u770b\u5230\u6211\u4e864</div>\r\n    </Fork.Toggle>\r\n  </div>\r\n);\r\n\r\nexport default Demo;\r\n",jsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\n\r\nconst Demo = () => (\r\n  <div>\r\n    <Fork.Toggle when>\r\n      <div>\u4f60\u770b\u5230\u6211\u4e861</div>\r\n    </Fork.Toggle>\r\n    <Fork.Toggle when={false}>\r\n      <div>\u4f60\u770b\u4e0d\u5230\u62112</div>\r\n    </Fork.Toggle>\r\n    <Fork.Toggle when={0}>\r\n      <div>\u4f60\u770b\u4e0d\u5230\u62113</div>\r\n    </Fork.Toggle>\r\n    <Fork.Toggle when={123}>\r\n      <div>\u4f60\u770b\u5230\u6211\u4e864</div>\r\n    </Fork.Toggle>\r\n  </div>\r\n);\r\n\r\nexport default Demo;\r\n"}},{path:"/_demos/fork-demo-toggle",dependencies:{},files:{}}),l.a.createElement(f,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"switch"},l.a.createElement("a",{"aria-hidden":"true",href:"#switch"},l.a.createElement("span",{className:"icon icon-link"})),"Switch"),l.a.createElement("p",null,"\u642d\u914d If \u6216 Toggle \u4f7f\u7528\uff0c\u7c7b\u4f3c react-router \u7684 Switch\uff0c\u53ea\u6e32\u67d3\u5185\u90e8\u7684\u7b2c\u4e00\u4e2a prop.when \u4e3a true \u7684 If\uff0c\u5f53\u6ca1\u6709\u4efb\u4f55\u4e00\u4e2a If \u7684 when \u4e3a true \u65f6\uff0c\u5339\u914d\u7b2c\u4e00\u4e2a\u4e0d\u5305\u542b when \u7684 If")),l.a.createElement(m.a,Object(r["a"])({source:{tsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\n\r\nconst Demo = () => (\r\n  <div>\r\n    <div className=\"color-second\">\u914d\u5408If</div>\r\n    <Fork.Switch>\r\n      <Fork.If when={false}>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62111</div>\r\n      </Fork.If>\r\n      <Fork.If when={false}>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62112</div>\r\n      </Fork.If>\r\n      <Fork.If>\r\n        <div>\u4f60\u770b\u5230\u6211\u4e863</div>\r\n      </Fork.If>\r\n    </Fork.Switch>\r\n\r\n    <div className=\"mt-32 color-second\">\u914d\u5408toggle</div>\r\n    <Fork.Switch>\r\n      <Fork.Toggle when={false}>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62111</div>\r\n      </Fork.Toggle>\r\n      <Fork.Toggle when={false}>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62112</div>\r\n      </Fork.Toggle>\r\n      <Fork.Toggle when={123123}>\r\n        <div>\u4f60\u770b\u5230\u6211\u4e863</div>\r\n      </Fork.Toggle>\r\n      <Fork.Toggle>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62114</div>\r\n      </Fork.Toggle>\r\n    </Fork.Switch>\r\n  </div>\r\n);\r\n\r\nexport default Demo;\r\n",jsx:"import React from 'react';\r\nimport Fork from 'm78/fork';\r\n\r\nconst Demo = () => (\r\n  <div>\r\n    <div className=\"color-second\">\u914d\u5408If</div>\r\n    <Fork.Switch>\r\n      <Fork.If when={false}>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62111</div>\r\n      </Fork.If>\r\n      <Fork.If when={false}>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62112</div>\r\n      </Fork.If>\r\n      <Fork.If>\r\n        <div>\u4f60\u770b\u5230\u6211\u4e863</div>\r\n      </Fork.If>\r\n    </Fork.Switch>\r\n\r\n    <div className=\"mt-32 color-second\">\u914d\u5408toggle</div>\r\n    <Fork.Switch>\r\n      <Fork.Toggle when={false}>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62111</div>\r\n      </Fork.Toggle>\r\n      <Fork.Toggle when={false}>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62112</div>\r\n      </Fork.Toggle>\r\n      <Fork.Toggle when={123123}>\r\n        <div>\u4f60\u770b\u5230\u6211\u4e863</div>\r\n      </Fork.Toggle>\r\n      <Fork.Toggle>\r\n        <div>\u4f60\u770b\u4e0d\u5230\u62114</div>\r\n      </Fork.Toggle>\r\n    </Fork.Switch>\r\n  </div>\r\n);\r\n\r\nexport default Demo;\r\n"}},{path:"/_demos/fork-demo-switch",dependencies:{},files:{}}),l.a.createElement(v,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"props"},l.a.createElement("a",{"aria-hidden":"true",href:"#props"},l.a.createElement("span",{className:"icon icon-link"})),"props"),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"Fork"))),l.a.createElement(c.a,{code:"interface ForkProps extends ComponentBaseProps {\n  /** \u662f\u5426\u6709\u6570\u636e\u7528\u4e8e\u663e\u793a, \u5f53\u4e3atruthy\u503c\u4e14\u65e0\u5176\u4ed6\u975e\u5e38\u89c4\u72b6\u6001\u65f6\u65f6\uff0c\u663e\u793a\u5b50\u5143\u7d20 */\n  hasData: any;\n  /** \u5f53\u6ca1\u6709\u4efb\u4f55\u975e\u5e38\u89c4\u72b6\u6001\u65f6\uff0c\u663e\u793a\u7684\u5185\u5bb9\uff0c\u5982\u679c\u9700\u8981\u60f0\u6027\u52a0\u8f7d\u8282\u70b9\uff0c\u53ef\u4ee5\u4f20\u5165\u51fd\u6570, \u5f00\u542fforceRender\u65f6\uff0c\u65e0\u8bba\u51fa\u4e8e\u4efb\u4f55\u72b6\u6001\uff0cchildren\u90fd\u4f1a\u6e32\u67d3 */\n  children: React.ReactNode | (() => React.ReactNode);\n  /** \u662f\u5426\u5305\u542b\u9519\u8bef, \u5982\u679c\u662f\u4e00\u4e2a\u5bf9\u8c61\u4e14\u5305\u542bmessage\u5c5e\u6027\uff0c\u5219\u4f1a\u7528\u5176\u4f5c\u4e3a\u53cd\u9988\u663e\u793a */\n  error?: any;\n  /** \u662f\u5426\u8d85\u65f6 */\n  timeout?: boolean;\n  /** \u662f\u5426\u6b63\u5728\u8bf7\u6c42 */\n  loading?: boolean;\n\n  /** \u5f53\u5305\u542b\u5f02\u5e38\u65f6(error | timeout), \u901a\u8fc7\u6b64\u65b9\u6cd5\u8ba9\u7528\u6237\u8fdb\u884c\u66f4\u65b0\u8bf7\u6c42, \u4f20\u5165\u540e\u4f1a\u5728\u9519\u8bef\u548c\u65e0\u6570\u636e\u65f6\u663e\u793a\u91cd\u65b0\u52a0\u8f7d\u6309\u94ae */\n  send?: AnyFunction;\n  /**\n   * \u5f3a\u5236\u6e32\u67d3\u5185\u5bb9\n   * - \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5904\u5728\u4efb\u610f\u53cd\u9988\u72b6\u6001\u65f6\uff0c\u5b9e\u9645\u5185\u5bb9\u90fd\u4e0d\u4f1a\u6e32\u67d3\uff0c\u542f\u7528\u6b64\u9879\u540e\uff0c\u53cd\u9988\u8282\u70b9\u4f1a\u548c\u5185\u5bb9\u4e00\u8d77\u6e32\u67d3\n   * - \u901a\u5e38\u7528\u4e8e\u5c06\u53cd\u9988\u8282\u70b9\u56fa\u5b9a\u663e\u793a\u5230\u67d0\u4e00\u4f4d\u7f6e\u800c\u4e0d\u5f71\u54cd\u5b9e\u9645\u5185\u5bb9\n   * */\n  forceRender?: boolean;\n\n  /** \u9ed8\u8ba4loading\u4ee5\u5360\u4f4d\u8282\u70b9\u5f62\u5f0f\u663e\u793a\uff0c\u4f20\u5165\u6b64\u9879\u4f1a\u4f7f\u5176\u8131\u79bb\u6587\u6863\u6d41\u5e76\u586b\u6ee1\u7236\u5143\u7d20, \u9700\u8981\u7236\u5143\u7d20\u975e\u5e38\u89c4\u5b9a\u4f4d\u5143\u7d20(position\u975estatic) */\n  loadingFull?: boolean;\n  /** '\u52a0\u8f7d\u4e2d' | \u52a0\u8f7d\u63d0\u793a\u6587\u672c */\n  loadingText?: React.ReactNode;\n  /** '\u6682\u65e0\u6570\u636e' | \u7a7a\u63d0\u793a\u6587\u672c */\n  emptyText?: React.ReactNode;\n  /** \u8bf7\u6c42\u5f02\u5e38 | \u8bf7\u6c42\u9519\u8bef\u63d0\u793a\u6587\u672c */\n  errorText?: React.ReactNode;\n  /** \u8bf7\u6c42\u8d85\u65f6 | \u8bf7\u6c42\u8d85\u65f6\u63d0\u793a\u6587\u672c   */\n  timeoutText?: React.ReactNode;\n  /** extend | \u53cd\u9988\u8282\u70b9\u5305\u88f9\u5bb9\u5668\u7684\u7c7b\u540d */\n  // className?: string;\n  /** extend | \u53cd\u9988\u8282\u70b9\u5305\u88f9\u5bb9\u5668\u7684\u7c7b\u540d */\n  // style?: React.CSSProperties;\n\n  /** \u81ea\u5b9a\u4e49\u52a0\u8f7d\u63d0\u793a\u8282\u70b9 */\n  customLoading?: React.ReactNode;\n  /** \u81ea\u5b9a\u4e49\u4fe1\u606f\u63d0\u793a\u6761, title\u4e3a\u8868\u793a\u9519\u8bef\u7c7b\u578b\u7684\u6807\u9898\uff0cmessage\u4e3a\u9519\u8bef\u6d88\u606f(\u6839\u636eerror\u83b7\u53d6, \u53ef\u80fd\u4e0d\u5b58\u5728) */\n  customNotice?: (title: React.ReactNode, message?: React.ReactNode) => React.ReactNode;\n  /** \u81ea\u5b9a\u4e49\u7a7a\u6570\u636e\u8282\u70b9 */\n  customEmpty?: React.ReactNode;\n}\n",lang:"tsx"}),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"If"))),l.a.createElement(c.a,{code:"interface IfProps {\n  /** \u4efb\u4f55falsy\\truthy\u503c */\n  when?: any;\n  /** \u5f85\u5207\u6362\u7684\u5b50\u5143\u7d20 */\n  children?: React.ReactNode;\n}\n",lang:"tsx"}),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"Toggle"))),l.a.createElement(c.a,{code:"interface ToggleProps {\n  /** \u4efb\u4f55falsy\\truthy\u503c */\n  when?: any;\n  /** \u5f85\u5207\u6362\u7684\u5b50\u5143\u7d20 */\n  children: React.ReactElement;\n}\n",lang:"tsx"}),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"Switch"))),l.a.createElement(c.a,{code:"interface SwitchProps {\n  children: React.ReactElement[];\n}\n",lang:"tsx"})))}},H2oi:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),l=t("kr9X"),o=()=>a.a.createElement("div",null,a.a.createElement("div",{className:"color-second"},"\u914d\u5408If"),a.a.createElement(l["default"].Switch,null,a.a.createElement(l["default"].If,{when:!1},a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u62111")),a.a.createElement(l["default"].If,{when:!1},a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u62112")),a.a.createElement(l["default"].If,null,a.a.createElement("div",null,"\u4f60\u770b\u5230\u6211\u4e863"))),a.a.createElement("div",{className:"mt-32 color-second"},"\u914d\u5408toggle"),a.a.createElement(l["default"].Switch,null,a.a.createElement(l["default"].Toggle,{when:!1},a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u62111")),a.a.createElement(l["default"].Toggle,{when:!1},a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u62112")),a.a.createElement(l["default"].Toggle,{when:123123},a.a.createElement("div",null,"\u4f60\u770b\u5230\u6211\u4e863")),a.a.createElement(l["default"].Toggle,null,a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u62114"))));n["default"]=o},IDZi:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),l=t("kr9X"),o=()=>a.a.createElement("div",null,a.a.createElement(l["default"].Toggle,{when:!0},a.a.createElement("div",null,"\u4f60\u770b\u5230\u6211\u4e861")),a.a.createElement(l["default"].Toggle,{when:!1},a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u62112")),a.a.createElement(l["default"].Toggle,{when:0},a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u62113")),a.a.createElement(l["default"].Toggle,{when:123},a.a.createElement("div",null,"\u4f60\u770b\u5230\u6211\u4e864")));n["default"]=o},Ink9:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r={padding:"4px 12px",border:"1px solid #eee"},a=()=>new Promise((e,n)=>{setTimeout(()=>{var t=Math.random();if(t<.3)n(new Error("\u52a0\u8f7d\u5f02\u5e38"));else{var r=Array.from({length:Math.random()>.5?0:8}).map(()=>Math.random());e(r)}},1e3)})},Jiyh:function(e,n){},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},O60i:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),l=a.a.createContext({});function o(){return Object(r["useContext"])(l)}n["a"]={context:l,Provider:l.Provider,Consumer:l.Consumer,useConfig:o}},WwnQ:function(e,n,t){},Y3Mt:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return h})),t.d(n,"c",(function(){return v}));var r=t("q1tI"),a=t.n(r),l=t("1p7j"),o=t("K3qG"),c=t("uVtn"),i=t("t1JD"),m=t("efh2"),s=t("TSYQ"),d=t.n(s),u=e=>{var n=e.children,t=e.send,r=e.loading,s=e.error,u=e.timeout,f=e.hasData,v=e.forceRender,h=e.loadingFull,E=e.className,g=e.style,p=e.loadingText,k=e.emptyText,F=void 0===k?"\u6682\u65e0\u6570\u636e":k,w=e.errorText,b=void 0===w?"\u8bf7\u6c42\u5f02\u5e38":w,I=e.timeoutText,y=void 0===I?"\u8bf7\u6c42\u8d85\u65f6":I,N=e.customLoading,x=e.customNotice,T=e.customEmpty,j=()=>Object(o["w"])(n)?n():n,R=t?a.a.createElement(c["a"],{onClick:t,color:"primary",text:!0,size:"small",style:{top:-1}},"\u91cd\u65b0\u52a0\u8f7d"):null,D=O();function O(){if(r)return N||a.a.createElement(l["default"],{text:p,className:"ptb-12",full:h});if(s||u){var e=u?y:b,n=(null===s||void 0===s?void 0:s.message)||("string"===typeof s?s:"");return x?x(e,n):a.a.createElement(i["a"],{className:"m78-fork_notice",status:"error",message:e,desc:a.a.createElement("div",null,n&&a.a.createElement("div",{className:"color-error mb-8"},n),a.a.createElement("span",null,"\u8bf7\u7a0d\u540e\u91cd\u8bd5",t?"\u6216":null," "),R)})}return f||r?void 0:T||a.a.createElement(m["default"],{desc:F,style:{padding:0}},R)}function S(){return a.a.createElement("div",{className:d()("m78-fork",E),style:g},D)}return a.a.createElement(a.a.Fragment,null,(!D||v)&&j(),D&&S())},f=e=>{var n=e.when,t=e.children;n=!!n;var r=Object(o["w"])(t);return n&&(r?t():t)},v=e=>{var n=e.when,t=e.children;function r(){return a.a.cloneElement(t,{style:{display:"none"}})}return n?t:r()},h=e=>{var n=e.children,t=a.a.Children.toArray(n),r=t.reduce((e,n)=>{if(n.type!==f&&n.type!==v)return e;var t="when"in n.props,r=!!n.props.when;return t||e.notWhen||(e.notWhen=a.a.cloneElement(n,{when:!0})),r&&!e.showEl&&(e.showEl=n),e},{showEl:null,notWhen:null});return r.showEl||r.notWhen||null};n["d"]=u},bf2K:function(e,n){},bgvL:function(e,n,t){},cDKg:function(e,n,t){"use strict";t("iCBh"),t("bgvL")},cmEn:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),l=t("kr9X"),o=()=>a.a.createElement("div",null,a.a.createElement(l["default"].If,{when:!0},a.a.createElement("div",null,"\u4f60\u770b\u5230\u6211\u4e86 1")),a.a.createElement(l["default"].If,{when:!1},a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u6211 2")),a.a.createElement(l["default"].If,{when:0},a.a.createElement("div",null,"\u4f60\u770b\u4e0d\u5230\u6211 3")),a.a.createElement(l["default"].If,{when:123},a.a.createElement("div",null,"\u4f60\u770b\u5230\u6211\u4e86 4")),a.a.createElement(l["default"].If,{when:!0},()=>a.a.createElement("div",null,"\u5ef6\u8fdf\u6e32\u67d3 5")));n["default"]=o},eTaW:function(e,n,t){"use strict";var r=t("0Owb"),a=t("PpiC"),l=t("q1tI"),o=t.n(l),c=t("Rz6r"),i=t("O60i"),m=t("TSYQ"),s=t.n(m);function d(e){return e?o.a.cloneElement(e,{className:s()("m78-empty_icon",e.props.className)}):null}var u=e=>{var n=e.desc,t=e.children,l=e.size,m=e.emptyNode,u=Object(a["a"])(e,["desc","children","size","emptyNode"]),f=i["a"].useConfig(),v=f.emptyNode;return o.a.createElement("div",Object(r["a"])({className:s()("m78-empty",l&&"__".concat(l),u.className)},u),d(m)||d(v)||o.a.createElement(c["EmptyIcon"],{className:"m78-empty_icon"}),o.a.createElement("div",{className:"m78-empty_desc"},n),o.a.createElement("div",{className:"m78-empty_actions"},t))};n["a"]=u},efh2:function(e,n,t){"use strict";t("lCdt");var r=t("eTaW");t("bf2K");n["default"]=r["a"]},hEdC:function(e,n,t){"use strict";var r=t("q1tI"),a=t("AIJx"),l=function(e,n){var t=Object(a["a"])();Object(r["useEffect"])((function(){if(!t)return e()}),n)};n["a"]=l},jNhd:function(e,n,t){"use strict";var r=t("q1tI"),a=t("bdgK"),l=function(){var e=Object(r["useState"])({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),n=e[0],t=e[1],l=Object(r["useState"])((function(){return new a["a"]((function(e){var n=e[0];n&&t(n.contentRect)}))}))[0],o=Object(r["useCallback"])((function(e){l.disconnect(),e&&l.observe(e)}),[l]);return[o,n]};n["a"]=l},jgEu:function(e,n,t){"use strict";t.r(n);var r=t("0Owb"),a=t("q1tI"),l=t.n(a),o=t("kr9X"),c=t("zdPv"),i=t("uVtn"),m=t("Ink9"),s=()=>{var e,n=Object(c["useFetch"])(m["b"],{timeout:Math.random()>.7?500:8e3});return l.a.createElement("div",null,l.a.createElement("div",{className:"mb-12"},l.a.createElement("button",{type:"button",disabled:n.loading,onClick:n.send},n.loading?"\u52a0\u8f7d\u4e2d":"\u53d1\u8d77\u8bf7\u6c42")),l.a.createElement(o["default"],Object(r["a"])({hasData:null===(e=n.data)||void 0===e?void 0:e.length},n,{customLoading:l.a.createElement("span",null,"\u23f3 \u52a0\u8f7d\u4e2d..."),customNotice:(e,t)=>l.a.createElement("div",null,l.a.createElement("h3",{className:"color-error"},e,l.a.createElement("span",{className:"mlr-12 color-second fs-14"},t),l.a.createElement(i["a"],{className:"fs-14",onClick:n.send,size:"small",color:"primary",text:!0},"\u91cd\u8bd5"))),customEmpty:l.a.createElement("span",null,"\ud83d\ude10 \u6ca1\u6709\u6570\u636e\u5594~")}),()=>l.a.createElement("ul",null,n.data.map(e=>l.a.createElement("li",{key:e,style:m["a"]},"rand num: ",e)))))};n["default"]=s},kr9X:function(e,n,t){"use strict";t("cDKg");var r=t("Y3Mt"),a=t("Jiyh");t.o(a,"If")&&t.d(n,"If",(function(){return a["If"]})),t.o(a,"Switch")&&t.d(n,"Switch",(function(){return a["Switch"]})),t.o(a,"Toggle")&&t.d(n,"Toggle",(function(){return a["Toggle"]})),t.d(n,"If",(function(){return r["a"]})),t.d(n,"Switch",(function(){return r["b"]})),t.d(n,"Toggle",(function(){return r["c"]}));var l=r["d"];l.If=r["a"],l.Toggle=r["c"],l.Switch=r["b"],n["default"]=l},lCdt:function(e,n,t){"use strict";t("iCBh"),t("WwnQ")},rbUi:function(e,n,t){},t1JD:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));t("iCBh"),t("rbUi");var r=t("k1fw"),a=t("tJVT"),l=t("PpiC"),o=t("q1tI"),c=t.n(o),i=t("jNhd"),m=t("hEdC"),s=t("wEEd"),d=t("zdPv"),u=t("Rz6r"),f=t("kr9X"),v=t("uVtn"),h=t("TSYQ"),E=t.n(h),g=e=>{var n=e.closable,t=void 0===n||n,o=e.desc,h=e.message,g=e.status,p=e.fixedTop,k=e.right,F=e.className,w=e.style,b=Object(l["a"])(e,["closable","desc","message","status","fixedTop","right","className","style"]),I=Object(i["a"])(),y=Object(a["a"])(I,2),N=y[0],x=y[1].height,T=Object(d["useFormState"])(b,!0,{valueKey:"show",triggerKey:"onClose"}),j=Object(a["a"])(T,2),R=j[0],D=j[1],O=Object(s["useSpring"])(()=>({height:"auto",config:Object(r["a"])(Object(r["a"])({},s["config"].stiff),{},{clamp:!0})})),S=Object(a["a"])(O,2),C=S[0],_=S[1];Object(m["a"])(()=>{_({height:R?x+36:0})},[R,x]);var q=u["lineStatusIcons"][g];return c.a.createElement(s["animated"].div,{style:Object(r["a"])(Object(r["a"])({},C),w),className:E()("m78-notice-bar",g&&"__".concat(g),{__fixed:p},F)},c.a.createElement("div",{ref:N,className:"m78-notice-bar_wrap"},c.a.createElement(f["If"],{when:g},()=>c.a.createElement("div",{className:"m78-notice-bar_left"},c.a.createElement(q,null))),c.a.createElement("div",{className:"m78-notice-bar_cont"},c.a.createElement("div",{className:"m78-notice-bar_title ellipsis"},h),c.a.createElement(f["If"],{when:o},c.a.createElement("div",{className:"m78-notice-bar_desc"},o))),c.a.createElement("div",{className:"m78-notice-bar_right"},k,c.a.createElement(f["If"],{when:t&&!k},c.a.createElement(v["a"],{className:"m78-notice-bar_close",icon:!0,size:"mini",onClick:()=>{D(!1)}},c.a.createElement(u["CloseOutlined"],{className:"m78-close-icon"}))))))},p=g}}]);