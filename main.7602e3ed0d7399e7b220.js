(()=>{var e,t,n,a,r,o={38791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(29970);function r(){return document.location.href.indexOf("localhost")>=0}const o=class{static init(e){r()||a.Ay.initialize(e)}static pageview(e){r()||a.Ay.send({hitType:"pageview",page:e})}static event(e,t,n){r()||a.Ay.event({category:e,action:t,label:n})}}},41707:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var a=n(5168),r=(n(50090),n(62613),n(70223)),o=n(69141),i=n(22405),l=n(14959);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u={apiKey:"AIzaSyATlKKGw99gurKNwHL7BU1-_Llj0hwJy60",authDomain:"crawlear-com.firebaseapp.com",databaseURL:"https://crawlear-com-default-rtdb.europe-west1.firebasedatabase.app",projectId:"crawlear-com",storageBucket:"crawlear-com.appspot.com",messagingSenderId:"879856500816",appId:"1:879856500816:web:4287599cc229d5f4c3d155",measurementId:"G-YD7VLXPTM2"},g=class{constructor(){this.app=(0,r.Wp)(u),this.provider=new l.HF,this.auth=(0,l.xI)(),this.db=(0,i.aU)(),this.rdb=(0,o.C3)(),this.initAppCheck()}getFullFirebase(e){Promise.all([n.e(9653),n.e(8340),n.e(8533),n.e(4988)]).then(n.bind(n,93094)).then((t=>{const n=new(0,t.default)(this);window.crawlear=window.crawlear||{},window.crawlear.fb=n,e&&e()}))}initAppCheck(){(0,a.Ay)(this.app,{provider:new a._u("6LfMPSIiAAAAABUfGLi_j7mnUr1snw9RriT8eBqP"),isTokenAutoRefreshEnabled:!0})}checkIfLogged(e,t){this.checkIfRedirect(e),this.auth.onAuthStateChanged((n=>{n?this.getUser(n.uid,(t=>{this.setUserInContext(t,n.uid),e()}),(()=>{this.setUser(n,(t=>{this.setUserInContext(t,n.uid),e()}),(()=>{}))})):t&&t()}))}checkIfRedirect(e){(0,l.Q4)(this.auth).then((t=>{this.getUser(t.user.uid,(n=>{this.setUserInContext(n,t.user.uid),e&&e(n)}),(()=>{this.setUser(t.user,e,(e=>{this.setUserInContext(e,t.user.uid)}))}))})).catch((e=>{}))}signInWithGoogle(e){(0,l.oM)(this.auth,l.F0).then((()=>{(0,l.df)(this.auth,this.provider).then((t=>{this.getUser(t.user.uid,(n=>{this.setUserInContext(n,t.user.uid),e&&e(n)}),(()=>{this.setUser(t.user,e,(e=>{this.setUserInContext(e,t.user.uid)}))}))})).catch((e=>{}))})).catch((e=>{}))}async getUser(e,t,n){const a=(0,i.H9)(this.db,"users",e),r=await(0,i.x7)(a);if(r.exists()){const e=r.data();e.uid=a.id,t&&t(e)}else n&&n()}async getUserExtraData(e,t,n){try{const n={};let a=(0,i.P)((0,i.rJ)(this.db,"games"),(0,i._M)("uids","array-contains",e)),r=await(0,i.GG)(a);n.pilotGames=r.docs.length,a=(0,i.P)((0,i.rJ)(this.db,"games"),(0,i._M)("jids","array-contains",e)),r=await(0,i.GG)(a),n.judgeGames=r.docs.length,a=(0,i.P)((0,i.rJ)(this.db,"routes"),(0,i._M)("uids","array-contains",e)),r=await(0,i.GG)(a),n.routes=r.docs.length,t&&t(n)}catch(e){n&&n()}}isUserLogged(){return null!=this.auth.currentUser}async setUser(e,t,n){let{uid:a,displayName:r,photoURL:o,description:l,instagram:c}=e;const s={displayName:r,photoURL:o,registrationDate:(new Date).toString(),description:l||"",instagram:c||""};try{await(0,i.BN)((0,i.H9)(this.db,"users",a),s),t&&t(s)}catch(e){n&&n()}}setUserInContext(e,t){e.instagram=e.instagram||"",window.crawlear=s(s({},window.crawlear),{},{user:e}),window.crawlear.user.uid=t}async routeSearchByLatLon(e,t,n,a){try{const a=(0,i.rJ)(this.db,"routes"),r=(0,i.P)(a,(0,i._M)("point.lat",">",e.lat-t.lat),(0,i._M)("point.lat","<",e.lat+t.lat)),o=await(0,i.GG)(r),l=[];o.forEach((n=>{const a=n.data();a.point.lon>e.lng-t.lon&&a.point.lon<e.lng+t.lon&&(a.rid=n.id,l.push(a))})),n&&n(l)}catch(e){a&&a(e)}}async getGpx(e,t,n){const a=(0,i.H9)(this.db,"gpx",e),r=await(0,i.x7)(a);if(r.exists()){const e=r.data();e.gid=a.id,t(e)}else n()}async getRoute(e,t,n,a){const r=(0,i.H9)(this.db,"routes",e),o=await(0,i.x7)(r);if(o.exists()){const e=o.data();e.rid=r.id,t&&e.gpx?this.getGpx(e.gpx,(t=>{e.gpx=t,e.gpx.gid=t.gid,n(e)}),a):n(e)}else a()}async getGame(e,t,n){const a=(0,i.H9)(this.db,"games",e),r=await(0,i.x7)(a);if(r.exists()){const e=r.data();e.gid=a.id,t&&t(e)}else n&&n()}}},55711:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UserStatusContext:()=>a});const a=n(96540).createContext({isUserLoged:!1})},91958:(e,t,n)=>{"use strict";var a=n(96540),r=n(85902),o=n(5338),i=n(47767),l=n(38791),c=n(55711),s=n(82577),d=n.n(s),u=n(69998),g=n.n(u),f=n(7340),p=n(18492);const b=n.p+"c02f061a017d59f5bb86.svg",m=n.p+"b0c484b364dc559b8644.svg",h=n.p+"5aa9dd97f0c1a5039ca6.svg",w=function(){const{t:e}=(0,p.B)(["landing"]),t=window.crawlear.fbBase;return a.createElement("div",{className:"Footer","data-testid":"Footer"},"[©",a.createElement("a",{href:"https://crawlear.com"},"crawlear.com")," 2025",t.isUserLogged()?a.createElement(a.Fragment,null,"]"):a.createElement(a.Fragment,null,"- ",a.createElement("a",{href:"https://crawlear.com/aboutus"},e("description.aboutus"))," - ",a.createElement("a",{href:"https://crawlear.com/privacypolicy"},e("description.politicaprivacidad")),"]"),a.createElement("p",null,a.createElement("a",{rel:"noreferrer",href:"https://www.youtube.com/channel/UCNwhl3Mflf-hpTSI1Xo8dSg",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"youtubeLogo",src:b,alt:"youtube logo"})),a.createElement("a",{rel:"noreferrer",href:"https://www.instagram.com/crawlearcom/",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"instagramLogo",src:m,alt:"instagram logo"})),a.createElement("a",{rel:"noreferrer",href:"https://www.facebook.com/Crawlearcom-106005795418134",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"facebookLogo",src:h,alt:"facebook logo"}))))},y=n.p+"e2f9c811d7053cfa21ff.webp",v=n.p+"93b1aa5e1599079e9c6e.webp",x=n.p+"402fa67d279e2e39bb6f.webp",E=n.p+"81f23fde7b73ade303e9.webp",k=n.p+"fde7ea2cdb21ba90dc1b.webp";var j=n(85072),C=n.n(j),_=n(97825),O=n.n(_),P=n(77659),A=n.n(P),L=n(55056),M=n.n(L),S=n(10540),z=n.n(S),I=n(41113),T=n.n(I),U=n(4245),B={};B.styleTagTransform=T(),B.setAttributes=M(),B.insert=A().bind(null,"head"),B.domAPI=O(),B.insertStyleElement=z(),C()(U.A,B),U.A&&U.A.locals&&U.A.locals;var F=n(77588),N=n.n(F);const R=(0,a.lazy)((()=>Promise.all([n.e(8533),n.e(6932)]).then(n.bind(n,6932)))),G=(0,a.lazy)((()=>Promise.all([n.e(6454),n.e(6973),n.e(3481),n.e(4354),n.e(2638),n.e(954)]).then(n.t.bind(n,80954,23)))),D=function(e){let{onLogin:t}=e;const{t:n}=(0,p.B)(["landing"]),[r,o,i]=N()(t);return navigator.onLine?a.createElement("div",{className:"landing"},a.createElement(f.default,null),i?a.createElement(d(),{lazyComponent:a.createElement(G,null)}):a.createElement(a.Fragment,null,a.createElement("img",{width:375,height:267,className:"routeSerarchImage",src:k,onClick:o,loading:"lazy",alt:"route search to click"}),a.createElement("div",{className:"routeSerarchImageText"},n("content.clickImagen"))),a.createElement("div",{className:"loginAndContent aboutUsContent"},a.createElement("p",null,a.createElement("b",null,n("content.landingMainText")),":"),a.createElement("img",{width:191,height:46,className:"crawlerImageSignIn",loading:"lazy",src:y,alt:"t2 crawler",onClick:r}),a.createElement("p",null,n("content.licenseText")),a.createElement("p",null,n("content.colaboraciones"),a.createElement("br",null),a.createElement("img",{className:"collaborateLogo",width:100,height:100,loading:"lazy",src:v,alt:"Levante 1/24 Logo"}),a.createElement("a",{href:"https://www.clubzonarc.es/",alt:"Club ZonaRc website",rel:"noreferrer",target:"_blank"},a.createElement("img",{width:100,height:100,loading:"lazy",className:"collaborateLogo",src:x,alt:"ZonaRc Logo"})),a.createElement("img",{className:"collaborateLogo",width:100,height:106,loading:"lazy",src:E,alt:"Mini Crawler Passion Logo"}))),a.createElement(w,null)):a.createElement(d(),{lazyComponent:a.createElement(R,null)})},q=(0,a.lazy)((()=>n.e(682).then(n.t.bind(n,682,23)))),H=(0,a.lazy)((()=>Promise.all([n.e(2689),n.e(4038),n.e(4354),n.e(8298),n.e(8533),n.e(5038),n.e(6932),n.e(4816),n.e(6108),n.e(9562),n.e(213),n.e(1842),n.e(5973),n.e(2713)]).then(n.t.bind(n,82713,23)))),$=(0,a.lazy)((()=>Promise.all([n.e(4354),n.e(8298),n.e(8533),n.e(6932),n.e(6108),n.e(705),n.e(9462),n.e(6608)]).then(n.t.bind(n,66608,23)))),J=(0,a.lazy)((()=>n.e(9379).then(n.t.bind(n,11760,23)))),W=(0,a.lazy)((()=>Promise.all([n.e(8298),n.e(8533),n.e(5038),n.e(6932),n.e(4816),n.e(6108),n.e(9562),n.e(4105)]).then(n.t.bind(n,54105,23)))),K=(0,a.lazy)((()=>Promise.all([n.e(6454),n.e(6973),n.e(3481),n.e(4354),n.e(8533),n.e(5038),n.e(6932),n.e(4816),n.e(6108),n.e(2638),n.e(5973),n.e(954),n.e(7539),n.e(1257)]).then(n.t.bind(n,41257,23)))),V=(0,a.lazy)((()=>Promise.all([n.e(4354),n.e(8298),n.e(8533),n.e(5038),n.e(213),n.e(1695),n.e(3037)]).then(n.t.bind(n,63037,23)))),Y=(0,a.lazy)((()=>Promise.all([n.e(6454),n.e(6973),n.e(3481),n.e(4354),n.e(8298),n.e(2638),n.e(1695),n.e(7539),n.e(3884)]).then(n.t.bind(n,13884,23)))),Z=(0,a.lazy)((()=>Promise.all([n.e(4354),n.e(8298),n.e(705),n.e(9462)]).then(n.bind(n,29462)))),X=function(e){let{onLogin:t,onLogout:n}=e;const r=(0,i.zy)(),o=new URLSearchParams(r.search);return a.createElement(i.BV,null,a.createElement(i.qh,{path:"/",element:a.createElement(D,{onLogin:t})}),a.createElement(i.qh,{path:"/game",element:a.createElement(d(),{lazyComponent:a.createElement(H,{from:"/game",to:"/"})})}),a.createElement(i.qh,{path:"/gameconfigurator",element:a.createElement(d(),{lazyComponent:a.createElement(W,{from:"/gameconfigurator",to:"/"})})}),a.createElement(i.qh,{path:"/route",element:a.createElement(d(),{lazyComponent:a.createElement(K,{from:"/route",to:"/"})})}),a.createElement(i.qh,{path:"/gameviewer",element:a.createElement(d(),{lazyComponent:a.createElement(V,{gid:o.get&&o.get("gid")})})}),a.createElement(i.qh,{path:"/social",element:a.createElement(d(),{lazyComponent:a.createElement($,{from:"/social",to:"/",onLogout:n})})}),a.createElement(i.qh,{path:"/routeviewer",element:a.createElement(d(),{lazyComponent:a.createElement(Y,{rid:o.get&&o.get("rid")})})}),a.createElement(i.qh,{path:"/profile",element:a.createElement(d(),{lazyComponent:a.createElement(Z,{onLogout:n,uid:o.get&&o.get("uid")})})}),a.createElement(i.qh,{path:"/aboutus",element:a.createElement(d(),{lazyComponent:a.createElement(q,null)})}),a.createElement(i.qh,{path:"/privacypolicy",element:a.createElement(d(),{lazyComponent:a.createElement(J,null)})}))};window.onerror=(e,t,n,a,r)=>{console.error(e),l.default.event("error","js","".concat(e," ").concat(r.stack," ").concat(t))};var Q=n(24797),ee={};ee.styleTagTransform=T(),ee.setAttributes=M(),ee.insert=A().bind(null,"head"),ee.domAPI=O(),ee.insertStyleElement=z(),C()(Q.A,ee),Q.A&&Q.A.locals&&Q.A.locals;var te=n(56283),ne={};ne.styleTagTransform=T(),ne.setAttributes=M(),ne.insert=A().bind(null,"head"),ne.domAPI=O(),ne.insertStyleElement=z(),C()(te.A,ne),te.A&&te.A.locals&&te.A.locals;var ae=n(97687),re={};re.styleTagTransform=T(),re.setAttributes=M(),re.insert=A().bind(null,"head"),re.domAPI=O(),re.insertStyleElement=z(),C()(ae.A,re),ae.A&&ae.A.locals&&ae.A.locals;const oe=(0,a.lazy)((()=>Promise.all([n.e(705),n.e(7883)]).then(n.t.bind(n,37883,23)))),ie=function(){const e=(0,i.zy)(),t=(0,i.Zp)(),[n,o,s]=g()((()=>{1===e.pathname.length&&t("/game")}));return a.useEffect((()=>{l.default.init("G-J1NH6FT6E3"),l.default.event("App","init","".concat(navigator.userAgent))}),[]),a.createElement(c.UserStatusContext.Provider,{value:{isUserLoged:n}},a.createElement(r.Helmet,null,a.createElement("meta",{property:"og:title",content:"Crawlear.com Your profesional Crawler Scoreboard and Route manager"}),a.createElement("meta",{property:"og:description",content:"Crawlear.com Your profesional Crawler Scoreboard and Route manager"}),a.createElement("meta",{property:"description",content:"Crawlear.com Your profesional Crawler Scoreboard and Route manager"}),a.createElement("meta",{property:"og:image",content:"https://crawlear.com/static/logo512.png"})),a.createElement("div",{className:"App"},n?a.createElement(d(),{lazyComponent:a.createElement(oe,null)}):a.createElement(a.Fragment,null),a.createElement("div",{className:"AppMainContainer"},a.createElement(X,{onLogin:o,onLogout:s}))))};var le=n(84976);var ce;n(72729),(0,o.H)(document.getElementById("root")).render(a.createElement(r.HelmetProvider,null,a.createElement(le.BrowserRouter,null,a.createElement(ie,null)))),ce&&ce instanceof Function&&n.e(364).then(n.bind(n,364)).then((e=>{let{getCLS:t,getFID:n,getFCP:a,getLCP:r,getTTFB:o}=e;t(ce),n(ce),a(ce),r(ce),o(ce)})),"serviceWorker"in navigator?window.addEventListener("load",(function(){const e=document.location.href.indexOf("localhost")>=0?"service-worker-dev.js":"sw.js";navigator.serviceWorker.register(e).then((function(e){l.default.event("App","pwa","registered")}),(function(e){l.default.event("App","pwa","registration error"),console.log("ServiceWorker registration failed: ",e)})).catch((function(e){console.log(e)}))})):(l.default.event("App","pwa","service worker not supported"),console.log("service worker is not supported"))},7340:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var a=n(96540),r=n(18492),o=n(44838),i=n(85072),l=n.n(i),c=n(97825),s=n.n(c),d=n(77659),u=n.n(d),g=n(55056),f=n.n(g),p=n(10540),b=n.n(p),m=n(41113),h=n.n(m),w=n(47460),y={};y.styleTagTransform=h(),y.setAttributes=f(),y.insert=u().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=b(),l()(w.A,y),w.A&&w.A.locals&&w.A.locals;const v=function(){const{t:e}=(0,r.B)(["landing"]);return a.createElement("div",{className:"aboutUsContent"},a.createElement("figure",{className:"logoImg"},a.createElement("img",{width:234,height:168,alt:"crawlear logo",src:o})),a.createElement("p",null,a.createElement("b",null,"crawlear.com")," ",e("content.welcomeMessage")," ",a.createElement("br",null),a.createElement("br",null),e("content.welcomeMessage2")))}},4245:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,"@media only screen and (min-width: 600px){.landing .aboutUsContent{text-align:justify}.landing .routesSearchContainer{max-width:415px;width:85%;margin:0 auto}}.landing .aboutUsContent{width:85%;margin:0 auto}.landing .loginAndContent{padding-bottom:140px}.landing .routesSearchContainer{background-color:unset}.landing .routesSearchContainer .routesManagement{height:100%}.landing .routesSearchContainer .headerText,.landing .routesSearchContainer .searchText{display:none}.landing .routeSerarchImage{max-width:356px}.landing .routeSerarchImageText{font-size:.7em}.landing .loginAndContent .googleSignInButton{margin:auto;padding:15px;width:50%}.landing .loginAndContent .googleSignInButton button{width:100%}.landing img.collaborateLogo{width:100px}.landing img.crawlerImageSignIn{margin:0px auto 15px auto;display:block;cursor:pointer;padding:15px}.landing img.youtubeLogo,.landing img.instagramLogo,.landing img.facebookLogo{width:35px;margin-right:15px;border-radius:15px}.landing img.facebookLogo{background-color:#fff}",""]);const l=i},47460:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".contentImg{margin:0;padding:0;width:100%}.logoImg{margin:auto;text-align:center}.video-responsive{overflow:hidden;padding-bottom:56.25%;position:relative;height:0}.video-responsive iframe{left:0;top:0;height:100%;width:100%;position:absolute}",""]);const l=i},56283:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,'#root{width:100%;height:100%}.App{text-align:center;width:100%;height:100%}.AppMainContainer{width:95%;margin:0px auto;height:100%;max-width:430px;min-width:277px;padding-top:65px}@media only screen and (min-width: 600px){.AppMainContainer{max-width:630px}}.smallText{line-height:1.5;font-size:16px;text-align:justify}.formError{color:red;font-size:.8em}.centerText{text-align:center}.headerText{padding:6px;height:40px;line-height:40px;text-align:center}.sectionTitle{text-shadow:5px 5px 5px #222}.App-link{color:#61dafb}.rounded{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);border-radius:8px;padding:10px}.rounded button{background-color:rgba(0,0,0,0)}body.lightMode input.hidenInput,body.lightMode textarea.hidenInput,body.lightMode .bold,body.lightMode select{color:#000}body.lightMode .controlTextValues:nth-of-type(odd){background-color:#a0bcc2}body.lightMode .resultsContainer{background-image:linear-gradient(#b6ac91, #8c8a7f)}body.lightMode .rounded.colorGrey{color:#fff}body.lightMode .gameList .gameListPoints,body.lightMode .gameList .gameListPosition,body.lightMode .rounded button{background-color:#a0bcc2}body.lightMode .rounded{color:#000}body.lightMode .rounded.controlTextTitle{background-image:linear-gradient(#FEFBE7, #405662)}body.lightMode .rounded1{background-image:linear-gradient(#F9EBC8, #FEFBE7)}body.lightMode .rounded2{background-image:linear-gradient(#FEFBE7, #FEFBE7)}body.lightMode .rounded3{background-image:linear-gradient(#FEFBE7, #A0BCC2)}body.lightMode .linksContainer,body.lightMode .sectionTitle{color:#fefbe7}.rounded1{background-image:linear-gradient(#112031, #152D35)}.rounded2{background-image:linear-gradient(#345B63, #112031)}.rounded3{background-color:#345b63}.headerPlayer{padding:10px}.importantNote{background-image:linear-gradient(#ffa602, #ea7402)}.importantNote img{width:32px;vertical-align:middle;border-radius:8px;padding:5px 0px;float:left}.controlTextContainer{margin:10px auto;padding:10px}.controlTextText{margin:0 5px}.formRequiredValue:after{content:"*";color:red}.winnerBox{padding:15px;margin-bottom:8px}.winnerBox .headerPlayer{margin-bottom:15px}.notLoggedLogo{width:125px;margin-bottom:40px}.closed{height:26px;box-shadow:none}.horizontalScrollContainer{overflow-x:scroll;overflow-y:hidden;display:flex}::-webkit-scrollbar-track{background:rgba(0,0,0,0)}::-webkit-scrollbar-thumb{background:#888;border-radius:14px;border:solid 1px #444}::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,0)}::-webkit-scrollbar{background:rgba(0,0,0,0)}',""]);const l=i},24797:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o),l=n(4417),c=n.n(l),s=new URL(n(39847),n.b),d=new URL(n(4049),n.b),u=new URL(n(78933),n.b),g=new URL(n(1144),n.b),f=i()(r()),p=c()(s),b=c()(d),m=c()(u),h=c()(g);f.push([e.id,`html{height:100%;width:100%}body{background-color:#333;color:#fcf7ff;font-family:Montserrat,sans-serif;font-size:21px;margin:0px;height:100%;-webkit-font-smoothing:antialiased;background-image:url(${p});background-attachment:fixed;background-position:center;background-position-y:top;background-position-x:right;background-repeat:no-repeat;background-size:cover}body.game{background-image:url(${b})}body.game.playing{background-image:none;background-color:#aaa}body.social{background-image:url(${m})}body.route{background-image:url(${h})}.blink{animation:blinker 1s linear infinite}@keyframes blinker{50%{opacity:0}}.bold{font-weight:bold}.left{text-align:left}.inline{display:inline}button,select,input,textarea{margin:5px;border-radius:15px;font-size:21px;background-color:rgba(0,0,0,0);border:1px solid #fff;color:#fff}input,textarea{color:#000}select{padding:10px;width:85%}button{padding:10px;margin:5px;align-items:center;background-color:initial;background-image:linear-gradient(#464d55, #25292e);border-radius:8px;border-width:0;box-shadow:0 10px 20px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.05);box-sizing:border-box;color:#fff;cursor:pointer;font-size:18px;justify-content:center;line-height:.5;outline:none;text-align:center;text-decoration:none;transform:translate3d(0, 0, 0);transition:all 150ms;transition-duration:.4s;-webkit-transition-duration:.4s;vertical-align:baseline;white-space:nowrap;user-select:none}button *:hover{transition-duration:.1s;background-color:#3a3a3a}button *:after{content:"";display:block;position:absolute;border-radius:8px;left:0;top:0;width:100%;height:100%;opacity:0;transition:all .2s;box-shadow:0 0 10px 15px #fff}button *:active:after{box-shadow:0 0 0 0 #fff;position:absolute;border-radius:8px;left:0;top:0;opacity:1;transition:0s}button:disabled{background-image:linear-gradient(#345B63, #112031);text-decoration:line-through}input,textarea{background-color:#fff;max-width:195px;font-size:17px;padding:5px}a{color:#fff;text-decoration:none}li{list-style-type:none;text-align:right}figure{margin:0;padding:0;width:100%}figcaption{text-align:center;font-size:16px}.colorGreen{background-color:green}.colorGrey{background-color:#333}.colorClearGrey{background-color:#666}.colorRed{background-color:red}.colorOrange{background-color:orange}.foreColorRed{color:red}`,""]);const w=f},97687:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".Footer{font-size:14px;margin-top:100px}",""]);const l=i},82577:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(96540)),l=n(96540);t.default=function(e){var t=e.lazyComponent;return i.createElement(l.Suspense,{fallback:i.createElement("div",null,"Loading...")},t)}},69998:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(41707));window.crawlear=window.crawlear||{},window.crawlear.fbBase=window.crawlear.fbBase||new c.default,t.default=function(e){var t=window.crawlear.fbBase,n=l.useState(!1),a=n[0],r=n[1],o=l.useCallback((function(){r(!1)}),[]),i=l.useCallback((function(){t.getFullFirebase((function(){r(!0),e()}))}),[t,e]);return l.useEffect((function(){t.checkIfLogged((function(){i()}),(function(){o()}))}),[t,i,o]),[a,i,o]}},77588:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(38791));t.default=function(e){var t=l.useState(!1),n=t[0],a=t[1],r=window.crawlear.fbBase;function o(){e&&e(!0)}return l.useEffect((function(){c.default.pageview("/landing/")}),[]),[function(){r.signInWithGoogle(o)},function(){a(!0)},n]}},75826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={type:"backend",init:function(e,t,n){},read:function(e,t,a){n(40041)("./".concat(e.substring(0,2),"/").concat(t,".json")).then((function(e){a(null,e)}))},save:function(e,t,n){},create:function(e,t,n,a){}};t.default=a},72729:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(35543)),o=n(32418),i=a(n(74543)),l=a(n(75826));r.default.use(i.default).use(l.default).use(o.initReactI18next).init({detection:{order:["navigator"]},supportedLngs:["es","en","ca"],nonExplicitSupportedLngs:!0,fallbackLng:{default:["en"]},interpolation:{escapeValue:!1},ns:["main"],saveMissing:!0,missingKeyHandler:function(e,t,n,a){console.log(n)}}),t.default=r.default},40041:(e,t,n)=>{var a={"./ca/landing.json":[35106,7007],"./ca/main.json":[19074,8851],"./en/landing.json":[40389,9768],"./en/main.json":[40519,5626],"./es/landing.json":[96006,4371],"./es/main.json":[3174,6983]};function r(e){if(!n.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((()=>n.t(r,19)))}r.keys=()=>Object.keys(a),r.id=40041,e.exports=r},4049:(e,t,n)=>{"use strict";e.exports=n.p+"b9961bfccef086a06e2d.webp"},1144:(e,t,n)=>{"use strict";e.exports=n.p+"bde861a89223779647da.webp"},78933:(e,t,n)=>{"use strict";e.exports=n.p+"0f11837c93bf57ad115f.webp"},39847:(e,t,n)=>{"use strict";e.exports=n.p+"0a7a20e733c25ae868eb.webp"},44838:(e,t,n)=>{"use strict";e.exports=n.p+"c9239cc2056e36ffb204.webp"}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,exports:{}};return o[e].call(n.exports,n,n.exports,l),n.exports}l.m=o,e=[],l.O=(t,n,a,r)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],r=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,r<o&&(o=r));if(i){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var o={};t=t||[null,n({}),n([]),n(n)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,l.d(r,o),r},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>(({4371:"i18n/es-landing-json",4988:"FirebaseController",5626:"i18n/en-main-json",6983:"i18n/es-main-json",7007:"i18n/ca-landing-json",8851:"i18n/ca-main-json",9768:"i18n/en-landing-json"}[e]||e)+"."+{213:"8d7ad2439f709b564cbd",364:"dca42caabe4fa0c9e3f7",682:"75ef95e559c410fb3b95",705:"c4e816faa8ebbb28bf08",954:"6e5492f35fbb390cf336",1257:"ea454b3bb885035fb913",1695:"83325dc5fae9cf430688",1842:"96eb7a72431712faa016",2638:"28428e8e157b5f6d94d9",2689:"26bb1edd2488c0e0f4da",2713:"8c092290dbf28d556e98",3037:"832eed8e91adc7368d44",3481:"117caf5818dcdd43b6bc",3884:"101c46094606b82a2e56",4038:"dd3aa0dc49d380232747",4105:"d9da225c826f30f541f4",4354:"5df73a2aa06fbab8985b",4371:"6efa1f9e2880756b4616",4816:"c8b10450975290d78161",4988:"98ad4ce20dfa3baf29a2",5038:"050e18d6e7fcaaa649ed",5626:"23e5b31e3c63db8c3f03",5973:"8ca522e311648748e4bb",6108:"a07b8a07c2549a5fd49f",6454:"bd14bc458f547215bbea",6608:"977673b42de91f922a58",6932:"855b65fc2452c7f8ab54",6973:"1d6ab4b823218f91ecba",6983:"3777e3180af1b7dccb71",7007:"4ee6500c01c9e0e32d57",7539:"a947514993501e445f84",7883:"9f3b9271bc3c3727294c",8298:"88399bd840bb9e8f8d1c",8340:"5835bb83532465bcab00",8533:"608ace77bec85f9a45e4",8851:"be72527a487c526e7d90",9379:"ca236a3fea9ba28c3bab",9462:"82dd14441827ae03a162",9562:"d740f00e08383ed78a09",9653:"8d0186ed4d4ee0c35b19",9768:"0631ac8f97a1ab1426fb"}[e]+".js"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},r="crawlear.com:",l.l=(e,t,n,o)=>{if(a[e])a[e].push(t);else{var i,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",r+n),i.src=e),a[e]=[t];var g=(t,n)=>{i.onerror=i.onload=null,clearTimeout(f);var r=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(n))),t)return t(n)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{l.b=document.baseURI||self.location.href;var e={8792:0};l.f.j=(t,n)=>{var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(((n,r)=>a=e[t]=[n,r]));n.push(a[2]=r);var o=l.p+l.u(t),i=new Error;l.l(o,(n=>{if(l.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,o=n[0],i=n[1],c=n[2],s=0;if(o.some((t=>0!==e[t]))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(c)var d=c(l)}for(t&&t(n);s<o.length;s++)r=o[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(d)},n=self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),l.nc=void 0;var c=l.O(void 0,[7427,306,3119,8509,388,5790,6659,3804,5313,6148,344,8887,6540,5324],(()=>l(91958)));c=l.O(c)})();