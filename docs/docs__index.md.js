(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[125],{tKMX:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("p",{align:"center"},l.a.createElement("img",{src:"https://gitee.com/llixianjie/m78/raw/master/public/logo.png",width:"160",align:"center"})),l.a.createElement("h1",{align:"center"},"M78"),l.a.createElement("p",{align:"center"},"components, hooks, utils, part of the react toolchain"),l.a.createElement("br",null),l.a.createElement("h2",{id:"introduction"},l.a.createElement("a",{"aria-hidden":"true",href:"#introduction"},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf89Introduction"),l.a.createElement("p",null,"\u4e00\u5957 react \u57fa\u7840\u5e93\uff0c\u5305\u542b\u5e38\u7528\u7ec4\u4ef6\u3001hooks\u3001\u4ee5\u53ca\u5176\u4ed6\u5de5\u5177\u3002",l.a.createElement("a",{href:"http://llixianjie.gitee.io/m78/docs",target:"_blank",rel:"noopener noreferrer"},"\u67e5\u770b\u6587\u6863",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("br",null),l.a.createElement("h2",{id:"features"},l.a.createElement("a",{"aria-hidden":"true",href:"#features"},l.a.createElement("span",{className:"icon icon-link"})),"\u2728Features"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5b8c\u5168\u4f7f\u7528",l.a.createElement("code",null,"hooks"),"\u7f16\u5199\u3002"),l.a.createElement("li",null,"\u8bbe\u8ba1\u98ce\u683c\u4e0a\u91c7\u7528",l.a.createElement("code",null,"antd"),"\u4e0e",l.a.createElement("code",null,"material"),"\u6df7\u642d, \u57fa\u7840\u6837\u5f0f\u517c\u5bb9",l.a.createElement("code",null,"antd"),", \u53ef\u4f5c\u4e3a\u5176\u7684\u8865\u5145\u7ec4\u4ef6\u5e93\u4f7f\u7528\u3002"),l.a.createElement("li",null,"\u5927\u90e8\u5206\u7ec4\u4ef6\u90fd\u8fdb\u884c\u4e86\u5927\u5c0f\u5c4f\u5904\u7406\uff0c\u79fb\u52a8\u7aef/PC \u7aef\u5747\u53ef\u7528"),l.a.createElement("li",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"TypeScript")," \u5f00\u53d1\uff0c\u5305\u542b\u5b8c\u6574\u7684\u7c7b\u578b\u58f0\u660e\u3002"),l.a.createElement("li",null,"\u6807\u51c6\u5316\u63a5\u53e3\uff0csize/value/defaultValue/onChange/color \u7b49\u5f88\u591a\u914d\u7f6e\u4e0e\u793e\u533a\u5927\u90e8\u5206\u7ec4\u4ef6\u4fdd\u6301\u4e00\u81f4\uff0c\u5b66\u4e60\u6210\u672c\u66f4\u4f4e\u3002"),l.a.createElement("li",null,"\u8d34\u8fd1\u524d\u53f0\u4e1a\u52a1\uff0c\u76f8\u6bd4\u5176\u4ed6\u4e3a\u4e2d\u540e\u53f0\u8bbe\u8ba1\u7684\u7ec4\u4ef6\u5e93\u53ef\u80fd\u4f1a\u66f4\u9002\u7528\u4e8e\u524d\u53f0\u3002")),l.a.createElement("br",null),l.a.createElement("h2",{id:"install"},l.a.createElement("a",{"aria-hidden":"true",href:"#install"},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udce6Install"),l.a.createElement(c.a,{code:"yarn add m78\n# or\nnpm install m78\n",lang:"shell"}),l.a.createElement("br",null),l.a.createElement("h2",{id:"usage"},l.a.createElement("a",{"aria-hidden":"true",href:"#usage"},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udcd8Usage"),l.a.createElement("h3",{id:"\u5bfc\u5165\u7ec4\u4ef6"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5bfc\u5165\u7ec4\u4ef6"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("code",null,"\u5bfc\u5165\u7ec4\u4ef6")),l.a.createElement("p",null,l.a.createElement("code",null,"M78")," \u4f7f\u7528 ",l.a.createElement("code",null,"es modules")," \u6a21\u5757\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",l.a.createElement("code",null,"m78/*")," \u6765\u5bfc\u5165\u4e3b\u5305\u4e0b\u7684\u5404\u4e2a\u6a21\u5757"),l.a.createElement(c.a,{code:"import Button, { ButtonProps } from 'm78/button';\n\nfunction App() {\n  return (\n    <div>\n      <Button>click</Button>\n    </div>\n  );\n}\n",lang:"js"}),l.a.createElement("p",null,"\ud83d\udca1 \u9ed8\u8ba4\u662f\u6ca1\u6709\u4e3b\u5165\u53e3\u7684\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u72ec\u7acb\u7684\u6a21\u5757\u4e2d\u7ef4\u62a4, \u8fd9\u6837\u53ef\u4ee5\u505a\u5230\u5929\u7136\u7684\u6309\u9700\u52a0\u8f7d\uff0c",l.a.createElement("code",null,"tree shake")," \u4e5f\u66f4\u53cb\u597d\u3002"),l.a.createElement("p",null,"\u6253\u5305\u7ec4\u4ef6\u76ee\u5f55\u652f\u6301\u4f7f\u7528",l.a.createElement("a",{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"},"babel-plugin-import",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),", \u4e0d\u8fc7\u4e0d\u63a8\u8350, \u4e00\u662f\u5bf9\u8fd9\u6837\u5bf9 idea \u548c ts \u6765\u8bf4\u5f88\u602a\u5f02\uff0c\u652f\u6301\u4e0d\u597d\uff1b\u4e8c\u662f\uff0c\u7ec4\u4ef6\u901a\u5e38\u4f1a\u5305\u542b\u591a\u4e2a\u547d\u540d\u5bfc\u51fa\uff0c\u5982 ",l.a.createElement("code",null,"import Form, ","{"," TreeItem, Title, Footer, FormProps ","}"," from 'M78/form'"),"\uff0c \u76f4\u63a5\u5bfc\u5165\u4f1a\u66f4\u590d\u5408\u76f4\u89c9\u3002"),l.a.createElement("br",null),l.a.createElement("h3",{id:"\u6837\u5f0f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6837\u5f0f"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("code",null,"\u6837\u5f0f")),l.a.createElement("p",null,"\u6837\u5f0f\u91c7\u7528\u540e\u7f16\u8bd1(\u5f00\u53d1\u65f6\u7f16\u8bd1), \u4f60\u9700\u8981\u4e3a\u4f60\u7684",l.a.createElement("code",null,"webpack"),"\u6216\u5176\u4ed6\u6253\u5305\u5668\u6dfb\u52a0",l.a.createElement("code",null,"scss"),"\u6587\u4ef6\u652f\u6301\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\u3002"),l.a.createElement("p",null,"\u5982\u679c\u8981\u81ea\u5b9a\u4e49\u4e3b\u9898\u8272\u548c\u5176\u4ed6\u6837\u5f0f\u53d8\u91cf\uff0c\u53ef\u4ee5\u901a\u8fc7",l.a.createElement("code",null,"webpack"),"\u914d\u7f6e",l.a.createElement("code",null,"sass-loader"),"\u7684",l.a.createElement("code",null,"prependData"),"\u9009\u9879\uff0c\u5e76\u5bfc\u5165\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\u6587\u4ef6, \u6b65\u9aa4\u5982\u4e0b:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u81ea\u5b9a\u4e49 sass \u53d8\u91cf")),l.a.createElement(c.a,{code:"// custom.scss\n@import '~@lxjx/sass-base/var/index.scss';\n\n// \u4e3b\u9898\u8272\u66f4\u6539\u4e3a\u7ea2\u8272\n$color: red;\n\n// \u81ea\u5b9a\u4e49\u4fe1\u606f\u8272\n$color-info: blue;\n$color-success: green;\n$color-error: red;\n$color-warn: yellow;\n",lang:"scss"}),l.a.createElement("p",null,"\u66f4\u591a\u53d8\u91cf\u8bf7\u67e5\u770b",l.a.createElement("a",{href:"https://github.com/Iixianjie/sass-stater/blob/master/var/var.scss",target:"_blank",rel:"noopener noreferrer"},"var.scss",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("ol",{start:"2"},l.a.createElement("li",null,"\u4fee\u6539",l.a.createElement("code",null,"webpack")," -> ",l.a.createElement("code",null,"sass-loader"),"\u914d\u7f6e(\u4e5f\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\uff0c\u5728\u6bcf\u4e2a sass \u6587\u4ef6\u9876\u90e8\u81ea\u884c\u5f15\u5165)")),l.a.createElement(c.a,{code:"// \u4f60\u7684webpack\u914d\u7f6e\u6587\u4ef6.js (\u6bcf\u4e2a\u811a\u624b\u67b6\u914d\u7f6e\u65b9\u5f0f\u53ef\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u8bf7\u81ea\u884c\u67e5\u9605)\n{\n  prependData: '@import \"@/[\u6587\u4ef6\u8def\u5f84]/custom.scss;',\n}\n",lang:"unknown"}),l.a.createElement("br",null),l.a.createElement("h2",{id:"-\u5176\u4ed6"},l.a.createElement("a",{"aria-hidden":"true",href:"#-\u5176\u4ed6"},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf84 \u5176\u4ed6"),l.a.createElement("p",null,"\u8fd8\u6ca1\u60f3\u5230.jpg")))}}}]);
