(function(e){function t(t){for(var a,o,s=t[0],u=t[1],c=t[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8f63f30d"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"14c323f0"}[e]+".css",r=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===r))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],d=c.getAttribute("data-href");if(d===a||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("md-tabs",{staticClass:"nav",attrs:{"md-sync-route":""}},[n("md-tab",{attrs:{id:"tab-home","md-label":"",to:"/","md-icon":"home",exact:""}}),n("md-tab",{attrs:{id:"tab-dashboard","md-label":"",to:"/dashboard","md-icon":"dashboard",exact:""}}),n("md-tab",{attrs:{id:"tab-data-sets","md-label":"",to:"/datasets","md-icon":"view_list",exact:""}})],1),n("router-view",{attrs:{id:"main"}})],1)},r=[],i={},s=i,u=(n("034f"),n("2877")),c=Object(u["a"])(s,o,r,!1,null,null,null),d=c.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("DDoSGrid")]),n("p",[e._v("This is a DDoS-Attack visualization web application. The button below will take you to its GitHub page")]),n("md-button",{staticClass:"md-raised md-primary",attrs:{onclick:"location.href='https://github.com/ddosgrid/ddos-visualization'"}},[e._v(" GitHub ")]),n("md-button",{staticClass:"md-fab md-primary md-fab-bottom-right"},[n("md-icon",[e._v("add")])],1)],1)},m=[],b={name:"LandingPage"},h=b,v=Object(u["a"])(h,p,m,!1,null,null,null),g=v.exports;a["default"].use(f["a"]);var y=[{path:"/",name:"LandingPage",component:g},{path:"/dashboard",name:"dashboard",component:function(){return n.e("about").then(n.bind(null,"7e48"))}},{path:"/datasets",name:"datasets",component:function(){return n.e("about").then(n.bind(null,"5a23"))}}],w=new f["a"]({mode:"history",base:"/",routes:y}),O=w,S=(n("4de4"),n("7db0"),n("ace4"),n("25f0"),n("5319"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a9"),n("72f7"),n("bf19"),n("2f62")),_=n("a768"),k=n.n(_);a["default"].use(S["a"]);var j=new S["a"].Store({state:{datasets:[],visualizations:[],setups:[]},mutations:{storeSetup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"setup-".concat((new Date).toJSON());e.setups.push({id:x(),name:t,visualizationsOpened:e.visualizations,datasetsOpened:e.datasets})},loadSetup:function(e,t){try{var n=e.setups.find((function(e){return e.id===t}));e.datasets=n.datasetsOpened,e.visualizations=n.visualizationsOpened}catch(a){console.error("Unable to load setup ".concat(t))}},addDataSet:function(e,t){e.datasets.push(t)},removeDataSet:function(e,t){e.datasets=e.datasets.filter((function(e){return e._id!==t._id}))},addVisualization:function(e,t){e.visualizations.push(t)},removeVisualization:function(e,t){e.visualizations=e.visualizations.filter((function(e){return e.file!==t.file}))}},actions:{},modules:{},plugins:[k()({namespace:"ddosgrid-state-storage",initialState:{},expires:36288e5})]});function x(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var z=n("43f9"),E=n.n(z);n("51de"),n("e094");a["default"].use(E.a),a["default"].config.productionTip=!1,new a["default"]({router:O,store:j,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.91a80a5d.js.map