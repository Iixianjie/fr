(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{z6Ut:function(e,a,n){"use strict";n.r(a);var r=n("q1tI"),t=n.n(r),o=n("dEAq"),l=n("Zxc8"),c=n("H1Ra"),d=n("Rsk4"),m=t.a.memo(d["default"]["error-boundary-demo"].component),i=t.a.memo(d["default"]["error-boundary-custom"].component);a["default"]=e=>(t.a.useEffect(()=>{var a;(null===e||void 0===e||null===(a=e.location)||void 0===a?void 0:a.hash)&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"errorboundary-\u9519\u8bef\u8fb9\u754c"},t.a.createElement(o["AnchorLink"],{to:"#errorboundary-\u9519\u8bef\u8fb9\u754c","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"ErrorBoundary \u9519\u8bef\u8fb9\u754c"),t.a.createElement("p",null,t.a.createElement("code",null,"Error Boundaries")," API \u7684\u7b80\u5355\u5c01\u88c5"),t.a.createElement("h2",{id:"\u793a\u4f8b"},t.a.createElement(o["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),t.a.createElement(l["default"],d["default"]["error-boundary-demo"].previewerProps,t.a.createElement(m,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u5b9a\u5236"},t.a.createElement(o["AnchorLink"],{to:"#\u5b9a\u5236","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5b9a\u5236")),t.a.createElement(l["default"],d["default"]["error-boundary-custom"].previewerProps,t.a.createElement(i,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"api"},t.a.createElement(o["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"API"),t.a.createElement("p",null,t.a.createElement("strong",null,t.a.createElement("code",null,"props"))),t.a.createElement(c["a"],{code:"interface ErrorBoundaryProps extends ComponentBaseProps {\n  /** \u663e\u793a\u7c7b\u578b, \u7b80\u6d01\u6a21\u5f0f\u548c\u5b8c\u6574\u6a21\u5f0f */\n  type?: 'simple' | 'full' | ErrorBoundaryType;\n  /** \u81ea\u5b9a\u4e49\u9519\u8bef\u53cd\u9988\u5185\u5bb9 */\n  customer?: (infos: ErrorBoundaryCustomInfos) => React.ReactNode;\n  /** \u81ea\u5b9a\u4e49\u91cd\u8f7d\u65f6\u663e\u793a\u7684\u52a0\u8f7d\u6307\u793a\u5668 */\n  customLoadingNode?: React.ReactNode;\n  /** \u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1\uff0c\u53ef\u7528\u4e8e\u5411\u670d\u52a1\u5668\u4e0a\u62a5\u9519\u8bef\u4fe1\u606f */\n  onError?: (error: Error, errorInfo: any) => void;\n}",lang:"tsx"})))))}}]);