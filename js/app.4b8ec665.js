(function(e){function t(t){for(var o,r,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"980c060c"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"8882c4e0"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("md-tabs",{attrs:{"md-sync-route":""}},[n("md-tab",{attrs:{id:"tab-home","md-label":"",to:"/","md-icon":"home",exact:""}}),n("md-tab",{attrs:{id:"tab-dashboard","md-label":"",to:"/dashboard","md-icon":"dashboard",exact:""}}),n("md-tab",{attrs:{id:"tab-data-sets","md-label":"",to:"/datasets","md-icon":"view_list",exact:""}})],1)],1),n("div",[n("router-view",{attrs:{id:"main"}})],1)])},a=[],i={},s=i,u=(n("034f"),n("2877")),c=Object(u["a"])(s,r,a,!1,null,null,null),l=c.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Hello World")]),n("p",[e._v("This is a DDoS-Attack visualization web application. The button below will take you to its GitHub page")]),n("md-button",{staticClass:"md-raised md-primary",attrs:{onclick:"location.href='https://github.com/ddosgrid/ddos-visualization'"}},[e._v(" GitHub ")]),n("md-button",{staticClass:"md-fab md-primary md-fab-bottom-right"},[n("md-icon",[e._v("add")])],1)],1)},m=[],b={name:"LandingPage"},h=b,v=Object(u["a"])(h,p,m,!1,null,null,null),g=v.exports;o["default"].use(f["a"]);var y=[{path:"/",name:"LandingPage",component:g},{path:"/dashboard",name:"dashboard",component:function(){return n.e("about").then(n.bind(null,"7e48"))}},{path:"/datasets",name:"datasets",component:function(){return n.e("about").then(n.bind(null,"5a23"))}}],w=new f["a"]({mode:"history",base:"/",routes:y}),_=w,k=(n("4de4"),n("2f62"));o["default"].use(k["a"]);var j=new k["a"].Store({state:{datasets:[],visualizations:[]},mutations:{addDataSet:function(e,t){e.datasets.push(t)},removeDataSet:function(e,t){e.datasets=e.datasets.filter((function(e){return e._id!==t._id}))},addVisualization:function(e,t){e.visualizations.push(t)},removeVisualization:function(e,t){e.visualizations=e.visualizations.filter((function(e){return e.file!==t.file}))}},actions:{},modules:{}}),O=n("43f9"),S=n.n(O);n("51de"),n("e094");o["default"].use(S.a),o["default"].config.productionTip=!1,new o["default"]({router:_,store:j,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.4b8ec665.js.map