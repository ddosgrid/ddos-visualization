(function(e){function t(t){for(var r,n,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89cc59d5"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"c39653a6"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],f.parentNode.removeChild(f),a(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"26c5":function(e,t,a){"use strict";var r=a("b7272"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("md-tabs",{staticClass:"nav no-print",attrs:{"md-sync-route":"","md-elevation":"2"}},[a("md-tab",{attrs:{id:"tab-home","md-label":"",to:"/","md-icon":"home",exact:""}}),a("md-tab",{attrs:{id:"tab-dashboard","md-label":"",to:"/dashboard","md-icon":"dashboard",exact:""}}),a("md-tab",{attrs:{id:"tab-data-sets","md-label":"",to:"/datasets","md-icon":"view_list",exact:""}})],1),a("router-view",{attrs:{id:"main"}})],1)},o=[],i={},s=i,c=(a("034f"),a("2877")),l=Object(c["a"])(s,n,o,!1,null,null,null),d=l.exports,u=a("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var f=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"howto"},[a("section",{staticClass:"general about-item"},[a("md-card",[a("md-card-header",{staticStyle:{"text-align":"center"}},[a("h1",[e._v("Welcome to the DDoSGrid project")])]),a("md-card-content",[a("div",{staticClass:"main-icon-wrapper"},[a("img",{staticClass:"main-icon",attrs:{src:"/img/multiline_chart-24px.svg"}})]),a("span",{staticClass:"section-text"},[e._v(" DDoSGrid is an open platform aiming at making feature extraction and visualization from PCAP files easier. This platform was developed in the scope of a master project at the Communication Systems Group at the University of Zurich. ")]),a("div",{staticClass:"logo-wrapper"},[a("a",{attrs:{href:"https://csg.uzh.ch",target:"_blank"}},[a("img",{staticClass:"logo",attrs:{src:"/img/logos/csg.png"}})]),a("a",{attrs:{href:"https://uzh.ch",target:"_blank"}},[a("img",{staticClass:"logo",attrs:{src:"/img/logos/uzh.png"}})])])])],1)],1),a("section",{staticClass:"uploading about-item slidefromleft"},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Upload and analyse PCAP files")])]),a("md-card-content",[a("img",{attrs:{id:"analysis-icon",src:"/img/search-24px.svg"}}),a("span",{staticClass:"section-text"},[a("p",[e._v("DDoSGrid uses PCAP files as input because they are not oriented towards a specific protocol or model (compared to for example flow-based capture files). DDoSGrid provides the following features for feature extraction using PCAP files:")]),a("ul",{staticClass:"no-list-style"},[a("li",[e._v("Efficiently Decoding and parsing packets from pcap files")]),a("li",[e._v("Receive packets from different layers using an Observer-style API using the "),a("a",{attrs:{href:"https://nodejs.org/api/events.html"}},[e._v("EventEmitter")]),e._v(" class in NodeJS. This allows for a performant, stream-processing based implementation that feels natural to work with.")]),a("li",[e._v('Abstract views based on (OSI) layers and concrete views on specific protocols. For example, simply register an observer for all abstract "transport-level packets" or observe a concrete protocol, for example UDP.')]),a("li",[e._v("Supports easy extension by running multiple feature miners independently of each other using the same decoding stream.")]),a("li",[e._v("Orchestrates asynchronous operations in different parts of the lifecycle of your feature miners. For example, you can load an in-memory database in one miner and connect to a database through a socket in another miner.")])]),a("p",[e._v("Using PCAP files as input allows you to analyse from the following sources: "),a("ul",[a("li",[e._v("Packet capture software like Wireshark and tcpdump")]),a("li",[e._v("Projects collecting DDoS attacks such as "),a("a",{attrs:{href:"https://ddosdb.org"}},[e._v("DDoSDB")])]),a("li",[e._v("Attack simulators such as DDoS_log_sim")])])]),a("p"),a("p")]),a("div",{staticStyle:{clear:"both"}})])],1)],1),a("div",{staticClass:"dashboards about-item slidefromright"},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Creating your dashboard")])]),a("md-card-content",[a("img",{attrs:{id:"chart-icon",src:"/img/show_chart-24px.svg"}}),a("p",{staticClass:"section-text"},[e._v(" You can leverage all existing visualizations by simply doing the visual transformation required for a specific diagram and labeling your output. Your result will then automatically be served, grouped based on attack type and rendered using the appropriate diagram. For example, to render your results on a Scatterplot you would define two resulting Arrays for the x and y axis and describe the type of attack. Of course you can also write custom visualizations by writing it from scratch or by wrapping an existing chart.js visualization. Once your diagrams are registered you can create a dashboard by opening a dataset and the diagrams you are interested in. The final dashboard can be exported to PNG, PDF and it can be saved for later editing. ")]),a("div",{staticStyle:{clear:"both"}})])],1)],1),a("section",{staticClass:"dev about-item slidefromleft"},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Implement your own analysis")])]),a("md-card-content",[a("img",{staticClass:"left",attrs:{id:"github-icon",src:"/img/github.svg"}}),a("p",{staticClass:"section-text",attrs:{id:"github-text"}},[e._v(" Writing your own feature miner is easy and can be done in a matter of minutes. Ready to write and integrate your own feature miner? Head over to our GitHub repository. ")]),a("div",{staticStyle:{clear:"both"}}),a("div",{staticClass:"github-link-wrapper"},[a("md-button",{staticClass:"md-raised md-accent",attrs:{href:"https://github.com/ddosgrid/ddos-visualization"}},[e._v(" GitHub ")])],1)])],1)],1)])])},m=[],h={name:"LandingPage"},g=h,v=(a("26c5"),Object(c["a"])(g,p,m,!1,null,"1e219f28",null)),b=v.exports;r["default"].use(f["a"]);var y=[{path:"/",name:"LandingPage",component:b},{path:"/dashboard",name:"dashboard",component:function(){return a.e("about").then(a.bind(null,"7e48"))}},{path:"/datasets",name:"datasets",component:function(){return a.e("about").then(a.bind(null,"5a23"))}}],w=new f["a"]({mode:"history",base:"/",routes:y}),_=w,C=(a("4de4"),a("7db0"),a("ace4"),a("25f0"),a("5319"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a9"),a("72f7"),a("bf19"),a("2f62")),x=a("a768"),S=a.n(x);r["default"].use(C["a"]);var k=new C["a"].Store({state:{datasets:[],visualizations:[],setups:[]},mutations:{storeSetup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"setup-".concat((new Date).toJSON());e.setups.push({id:P(),name:t,visualizationsOpened:e.visualizations,datasetsOpened:e.datasets})},loadSetup:function(e,t){try{var a=e.setups.find((function(e){return e.id===t}));e.datasets=a.datasetsOpened,e.visualizations=a.visualizationsOpened}catch(r){console.error("Unable to load setup ".concat(t))}},addDataSet:function(e,t){var a=e.datasets.find((function(e){return e.md5===t.md5}));a||e.datasets.push(t)},removeDataSet:function(e,t){e.datasets=e.datasets.filter((function(e){return e._id!==t._id}))},addVisualization:function(e,t){var a=e.visualizations.find((function(e){return t.file===e.file}));a||e.visualizations.push(t)},removeVisualization:function(e,t){e.visualizations=e.visualizations.filter((function(e){return e.file!==t.file}))}},actions:{},modules:{},plugins:[S()({namespace:"ddosgrid-state-storage",initialState:{},expires:36288e5})]});function P(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var O=a("43f9"),D=a.n(O);a("51de"),a("e094");r["default"].use(D.a),r["default"].config.productionTip=!1,new r["default"]({router:_,store:k,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,a){},b7272:function(e,t,a){}});
//# sourceMappingURL=app.e1a0e0d0.js.map