(function(e){function t(t){for(var n,i,r=t[0],u=t[1],d=t[2],c=0,l=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);m&&m(t);while(l.length)l.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var r=a[i];0!==o[r]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=a[0]))}return e}var n={},i={app:0},o={app:0},s=[];function r(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"499579a2"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a={about:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"479030ff"}[e]+".css",o=u.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var d=s[r],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===n||c===o))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){d=l[r],c=d.getAttribute("data-href");if(c===n||c===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[e],m.parentNode.removeChild(m),a(s)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=r(e);var l=new Error;d=function(t){c.onerror=c.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}o[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(a,n,function(t){return e[t]}.bind(null,n));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var m=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"2aa1":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("md-tabs",{staticClass:"nav no-print",attrs:{"md-sync-route":"","md-elevation":"2"}},[a("md-tab",{attrs:{id:"tab-home","md-label":"",to:"/","md-icon":"home",exact:""}}),a("md-tab",{attrs:{id:"tab-dashboard","md-label":"",to:"/dashboard","md-icon":"dashboard",exact:""}}),a("md-tab",{attrs:{id:"tab-data-sets","md-label":"",to:"/datasets","md-icon":"view_list",exact:""}})],1),a("router-view",{attrs:{id:"main"}})],1)},o=[],s={},r=s,u=(a("034f"),a("2877")),d=Object(u["a"])(r,i,o,!1,null,null,null),c=d.exports,l=a("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var m=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"howto"},[a("section",{staticClass:"general about-item"},[a("md-card",[a("md-card-header",{staticStyle:{"text-align":"center"}},[a("h1",[e._v("Welcome to the DDoSGrid project")])]),a("md-card-content",[a("div",{staticClass:"main-icon-wrapper"},[a("img",{staticClass:"main-icon",attrs:{src:"/img/multiline_chart-24px.svg"}})]),a("span",{staticClass:"section-text"},[e._v(" Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc hendrerit tempor metus. In hac habitasse platea dictumst. Morbi nulla nunc, tincidunt eu euismod maximus, placerat ut justo. Phasellus commodo ante dignissim felis commodo molestie. Nunc sit amet laoreet massa, at vehicula augue. Proin vehicula nibh sed diam sodales, non molestie elit dignissim. ")])])],1)],1),a("section",{staticClass:"uploading about-item"},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Upload and analyse PCAP files")])]),a("md-card-content",[a("img",{attrs:{id:"analysis-icon",src:"/img/search-24px.svg"}}),a("span",{staticClass:"section-text"},[e._v(" Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc hendrerit tempor metus. In hac habitasse platea dictumst. Morbi nulla nunc, tincidunt eu euismod maximus, placerat ut justo. Phasellus commodo ante dignissim felis commodo molestie. Nunc sit amet laoreet massa, at vehicula augue. Proin vehicula nibh sed diam sodales, non molestie elit dignissim. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ")]),a("div",{staticStyle:{clear:"both"}})])],1)],1),a("div",{staticClass:"dashboards about-item"},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Creating your dashboard")])]),a("md-card-content",[a("img",{attrs:{id:"chart-icon",src:"/img/show_chart-24px.svg"}}),a("p",{staticClass:"section-text"},[e._v(" Duis luctus egestas eros, in ornare lacus tincidunt quis. In justo purus, semper a sodales vel, auctor id est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc et viverra sapien, in interdum risus. Nam imperdiet varius risus, eget mattis justo posuere eu. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ")]),a("div",{staticStyle:{clear:"both"}})])],1)],1),a("section",{staticClass:"dev about-item"},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Implement your own analysis")])]),a("md-card-content",[a("img",{staticClass:"left",attrs:{id:"github-icon",src:"/img/github.svg"}}),a("p",{staticClass:"section-text",attrs:{id:"github-text"}},[e._v(" Writing your own feature miner is easy and can be done in A MATTER OF MINUTES. DDoSGrid decodes all packets in your PCAP files and allows you to observe specific packets. Ready to write and integrate your own feature miner? Head over to our GitHub repository! ")]),a("div",{staticStyle:{clear:"both"}}),a("div",{staticClass:"github-link-wrapper"},[a("md-button",{staticClass:"md-raised md-accent",attrs:{href:"https://github.com/ddosgrid/ddos-visualization"}},[e._v(" GitHub ")])],1)])],1)],1)])])},f=[],v={name:"LandingPage"},h=v,g=(a("724c"),Object(u["a"])(h,p,f,!1,null,"2340de9c",null)),b=g.exports;n["default"].use(m["a"]);var y=[{path:"/",name:"LandingPage",component:b},{path:"/dashboard",name:"dashboard",component:function(){return a.e("about").then(a.bind(null,"7e48"))}},{path:"/datasets",name:"datasets",component:function(){return a.e("about").then(a.bind(null,"5a23"))}}],w=new m["a"]({mode:"history",base:"/",routes:y}),C=w,S=(a("4de4"),a("7db0"),a("ace4"),a("25f0"),a("5319"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a9"),a("72f7"),a("bf19"),a("2f62")),_=a("a768"),x=a.n(_);n["default"].use(S["a"]);var j=new S["a"].Store({state:{datasets:[],visualizations:[],setups:[]},mutations:{storeSetup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"setup-".concat((new Date).toJSON());e.setups.push({id:O(),name:t,visualizationsOpened:e.visualizations,datasetsOpened:e.datasets})},loadSetup:function(e,t){try{var a=e.setups.find((function(e){return e.id===t}));e.datasets=a.datasetsOpened,e.visualizations=a.visualizationsOpened}catch(n){console.error("Unable to load setup ".concat(t))}},addDataSet:function(e,t){e.datasets.push(t)},removeDataSet:function(e,t){e.datasets=e.datasets.filter((function(e){return e._id!==t._id}))},addVisualization:function(e,t){e.visualizations.push(t)},removeVisualization:function(e,t){e.visualizations=e.visualizations.filter((function(e){return e.file!==t.file}))}},actions:{},modules:{},plugins:[x()({namespace:"ddosgrid-state-storage",initialState:{},expires:36288e5})]});function O(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var k=a("43f9"),P=a.n(k);a("51de"),a("e094");n["default"].use(P.a),n["default"].config.productionTip=!1,new n["default"]({router:C,store:j,render:function(e){return e(c)}}).$mount("#app")},"724c":function(e,t,a){"use strict";var n=a("2aa1"),i=a.n(n);i.a},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.59c5c14c.js.map