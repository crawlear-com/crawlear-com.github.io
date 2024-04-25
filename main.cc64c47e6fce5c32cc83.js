(()=>{var e,t,n,a,r,o={38791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(29970);function r(){return document.location.href.indexOf("localhost")>=0}const o=class{static init(e){r()||a.Ay.initialize(e)}static pageview(e){r()||a.Ay.send({hitType:"pageview",page:e})}static event(e,t,n){r()||a.Ay.event({category:e,action:t,label:n})}}},55038:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});class a{static isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIphone(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)}static isFirefox(){return/Firefox/i.test(navigator.userAgent)}static sanitizeUrl(e){const t=e.indexOf("?");return t>=0&&(e=e.slice(0,t)),"/"!==e[e.length-1]&&(e+="/"),e}static isYoutubeUrl(e){var t=e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return t&&11==t[2].length}static isInstagramUrl(e){var t=this.sanitizeUrl(e).match(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)(?:\/(?:.?)*)*\/(?:reel|p|tv)\/(.*)*(?:\/)*/);return t&&t[1]}static getTiktokVideoId(e){var t=this.sanitizeUrl(e).match(/(?:(?:http|https):\/\/)?(?:www.)?tiktok.com\/@(.*)\/video\/(.*)*/);return t&&t[1]&&t[2]?t[2]:null}static isTiktokUrl(e){var t=this.sanitizeUrl(e).match(/(?:(?:http|https):\/\/)?(?:www.)?tiktok.com\/@(.*)\/video\/(.*)*/);return t&&t[1]&&t[2]}static isFacebookUrl(e){var t=this.sanitizeUrl(e).match(/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/);return t&&t[1]&&t[2]}static tokenToTexts(e,t){return t.map((t=>e(t)))}static getUidsFromUsers(e){const t=[];return e.forEach((e=>{e.uid&&t.push(e.uid)})),t}static millisToTime(e){let t=Math.floor(e/1e3),n=Math.floor(t/60),a=Math.floor(n/60);return t%=60,n%=60,a%=24,{h:a,m:n,s:t,mm:e%1e3}}static timeToMillis(e,t,n){const a=new Date,r=new Date;return r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0),a.setMinutes(e),a.setSeconds(t),a.setMilliseconds(n),a.getTime()-r.getTime()}static printTime(e){return"".concat(String(e.m).padStart(2,"0"),":").concat(String(e.s).padStart(2,"0"),":").concat(String(e.mm).padStart(3,"0"))}static randomizeArray(e){let t,n=e.length;for(;0!==n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}static getWinnerByPoints(e){const t=[...e];return t.sort((function(e,t){const n=e.points-t.points;return 0===n?e.id-t.id:n})),t}static getWinnerByPointsAndTime(e){const t=[...e];return t.sort((function(e,t){const n=e.points-t.points;return 0===n?e.time-t.time:n})),t}static getOrderedGameResult(e){return(e=this.calulateFinalGameResult(e)).players=e.players.sort(((e,t)=>{const n=e.totalPoints-t.totalPoints;if(0===n){const n=e.totalTime-t.totalTime;return 0===n?t.totalGateProgression-e.totalGateProgression:n}return n})),e}static calulateFinalGameResult(e){const t={...e};return t.players.forEach((e=>{let t=0,n=0,a=0;e.zones.forEach((e=>{t+=e.totalPoints,n+=e.time,a+=e.gateProgression})),e.totalPoints=t,e.totalTime=n,e.totalGateProgression=a})),t}static getMapsURL(e,t){return"https://www.google.com/maps/search/?api=1&query=".concat(e,"%2C").concat(t)}}a.PLAYER_STATE_STOP="stop",a.PLAYER_STATE_START="start",a.PLAYER_STATE_PAUSE="pause";const r=a},55711:(e,t,n)=>{"use strict";n.d(t,{F:()=>a});const a=n(96540).createContext()},16202:(e,t,n)=>{"use strict";var a=n(96540),r=n(5338),o=n(47767),i=n(5168),l=(n(50090),n(62613),n(55038)),c=n(70223),s=n(69141),d=n(22405),u=n(14959);const g={apiKey:"AIzaSyATlKKGw99gurKNwHL7BU1-_Llj0hwJy60",authDomain:"crawlear-com.firebaseapp.com",databaseURL:"https://crawlear-com-default-rtdb.europe-west1.firebasedatabase.app",projectId:"crawlear-com",storageBucket:"crawlear-com.appspot.com",messagingSenderId:"879856500816",appId:"1:879856500816:web:4287599cc229d5f4c3d155",measurementId:"G-YD7VLXPTM2"},p=class{constructor(){this.app=(0,c.Wp)(g),this.provider=new u.HF,this.auth=(0,u.xI)(),this.db=(0,d.aU)(),this.rdb=(0,s.C3)(),this.initAppCheck()}getFullFirebase(e){Promise.all([n.e(9653),n.e(8340),n.e(788),n.e(4988)]).then(n.bind(n,93094)).then((t=>{const n=new(0,t.default)(this);window.crawlear=window.crawlear||{},window.crawlear.fb=n,e&&e()}))}initAppCheck(){(0,i.Ay)(this.app,{provider:new i._u("6LfMPSIiAAAAABUfGLi_j7mnUr1snw9RriT8eBqP"),isTokenAutoRefreshEnabled:!0})}checkIfLogged(e,t){this.checkIfRedirect(e),this.auth.onAuthStateChanged((n=>{n?this.getUser(n.uid,(t=>{this.setUserInContext(t,n.uid),e()}),(()=>{this.setUser(n,(t=>{this.setUserInContext(t,n.uid),e()}),(()=>{}))})):t&&t()}))}checkIfRedirect(e){(0,u.Q4)(this.auth).then((t=>{this.getUser(t.user.uid,(n=>{this.setUserInContext(n,t.user.uid),e&&e(n)}),(()=>{this.setUser(t.user,e,(e=>{this.setUserInContext(e,t.user.uid)}))}))})).catch((e=>{}))}signInWithGoogle(e){(0,u.oM)(this.auth,u.F0).then((()=>{!l.default.isMobile()||l.default.isIphone()||l.default.isFirefox()?(0,u.df)(this.auth,this.provider).then((t=>{this.getUser(t.user.uid,(n=>{this.setUserInContext(n,t.user.uid),e&&e(n)}),(()=>{this.setUser(t.user,e,(e=>{this.setUserInContext(e,t.user.uid)}))}))})).catch((e=>{})):(0,u.$2)(this.auth,this.provider)})).catch((e=>{}))}async getUser(e,t,n){const a=(0,d.H9)(this.db,"users",e),r=await(0,d.x7)(a);if(r.exists()){const e=r.data();e.uid=a.id,t&&t(e)}else n&&n()}isUserLogged(){return null!=this.auth.currentUser}async setUser(e,t,n){let{uid:a,displayName:r,photoURL:o,description:i,instagram:l}=e;const c={displayName:r,photoURL:o,registrationDate:(new Date).toString(),description:i||"",instagram:l||""};try{await(0,d.BN)((0,d.H9)(this.db,"users",a),c),t&&t(c)}catch(e){n&&n()}}setUserInContext(e,t){e.instagram=e.instagram||"",window.crawlear={...window.crawlear,user:e},window.crawlear.user.uid=t}async routeSearchByLatLon(e,t,n,a){try{const a=(0,d.rJ)(this.db,"routes"),r=(0,d.P)(a,(0,d._M)("point.lat",">",e.lat-t.lat),(0,d._M)("point.lat","<",e.lat+t.lat)),o=await(0,d.GG)(r),i=[];o.forEach((n=>{const a=n.data();a.point.lon>e.lng-t.lon&&a.point.lon<e.lng+t.lon&&(a.rid=n.id,i.push(a))})),n&&n(i)}catch(e){a&&a(e)}}async getGpx(e,t,n){const a=(0,d.H9)(this.db,"gpx",e),r=await(0,d.x7)(a);if(r.exists()){const e=r.data();e.gid=a.id,t(e)}else n()}async getRoute(e,t,n,a){const r=(0,d.H9)(this.db,"routes",e),o=await(0,d.x7)(r);if(o.exists()){const e=o.data();e.rid=r.id,t&&e.gpx?this.getGpx(e.gpx,(t=>{e.gpx=t,e.gpx.gid=t.gid,n(e)}),a):n(e)}else a()}};var m=n(38791),f=n(55711),h=n(82577),b=n.n(h),w=n(7340),y=n(18492);const v=n.p+"c02f061a017d59f5bb86.svg",x=n.p+"b0c484b364dc559b8644.svg",E=n.p+"5aa9dd97f0c1a5039ca6.svg",k=function(){const{t:e}=(0,y.B)(["main"]),t=window.crawlear.fbBase;return a.createElement("div",{className:"Footer"},"[©",a.createElement("a",{href:"https://crawlear.com"},"crawlear.com")," 2024",t.isUserLogged()?a.createElement(a.Fragment,null,"]"):a.createElement(a.Fragment,null,"- ",a.createElement("a",{href:"https://crawlear.com/aboutus"},e("description.aboutus"))," - ",a.createElement("a",{href:"https://crawlear.com/privacypolicy"},e("description.politicaprivacidad")),"]"),a.createElement("p",null,a.createElement("a",{href:"https://www.youtube.com/channel/UCNwhl3Mflf-hpTSI1Xo8dSg",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"youtubeLogo",src:v,alt:"youtube logo"})),a.createElement("a",{href:"https://www.instagram.com/crawlearcom/",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"instagramLogo",src:x,alt:"instagram logo"})),a.createElement("a",{href:"https://www.facebook.com/Crawlearcom-106005795418134",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"facebookLogo",src:E,alt:"facebook logo"}))))},A=n.p+"e2f9c811d7053cfa21ff.webp",P=n.p+"93b1aa5e1599079e9c6e.webp",T=n.p+"402fa67d279e2e39bb6f.webp",_=n.p+"81f23fde7b73ade303e9.webp",C=n.p+"fde7ea2cdb21ba90dc1b.webp";var M=n(85072),L=n.n(M),z=n(97825),S=n.n(z),O=n(77659),j=n.n(O),I=n(55056),U=n.n(I),F=n(10540),B=n.n(F),N=n(41113),R=n.n(N),G=n(4245),D={};D.styleTagTransform=R(),D.setAttributes=U(),D.insert=j().bind(null,"head"),D.domAPI=S(),D.insertStyleElement=B(),L()(G.A,D),G.A&&G.A.locals&&G.A.locals;var q=n(77588),H=n.n(q);const W=(0,a.lazy)((()=>Promise.all([n.e(788),n.e(6932)]).then(n.bind(n,6932)))),$=(0,a.lazy)((()=>Promise.all([n.e(9435),n.e(3481),n.e(5915),n.e(2638),n.e(954)]).then(n.t.bind(n,80954,23)))),K=function(e){let{onLogin:t}=e;const{t:n}=(0,y.B)(["landing"]),[r,o,i]=H()(t);return navigator.onLine?a.createElement("div",{className:"landing"},a.createElement(w.default,null),i?a.createElement(b(),{lazyComponent:a.createElement($,null)}):a.createElement(a.Fragment,null,a.createElement("img",{width:375,height:267,className:"routeSerarchImage",src:C,onClick:o,loading:"lazy",alt:"route search to click"}),a.createElement("div",{className:"routeSerarchImageText"},n("content.clickImagen"))),a.createElement("div",{className:"loginAndContent aboutUsContent"},a.createElement("p",null,a.createElement("b",null,n("content.landingMainText")),":"),a.createElement("img",{width:191,height:46,className:"crawlerImageSignIn",loading:"lazy",src:A,alt:"t2 crawler",onClick:r}),a.createElement("p",null,n("content.licenseText")),a.createElement("p",null,n("content.colaboraciones"),a.createElement("br",null),a.createElement("img",{className:"collaborateLogo",width:100,height:100,loading:"lazy",src:P,alt:"Levante 1/24 Logo"}),a.createElement("a",{href:"https://www.clubzonarc.es/",alt:"Club ZonaRc website",rel:"noreferrer",target:"_blank"},a.createElement("img",{width:100,height:100,loading:"lazy",className:"collaborateLogo",src:T,alt:"ZonaRc Logo"})),a.createElement("img",{className:"collaborateLogo",width:100,height:106,loading:"lazy",src:_,alt:"Mini Crawler Passion Logo"}))),a.createElement(k,null)):a.createElement(b(),{lazyComponent:a.createElement(W,null)})};window.onerror=(e,t,n,a,r)=>{console.error(e),m.default.event("error","js","".concat(e," ").concat(r.stack," ").concat(t))};var V=n(24797),Y={};Y.styleTagTransform=R(),Y.setAttributes=U(),Y.insert=j().bind(null,"head"),Y.domAPI=S(),Y.insertStyleElement=B(),L()(V.A,Y),V.A&&V.A.locals&&V.A.locals;var J=n(56283),Z={};Z.styleTagTransform=R(),Z.setAttributes=U(),Z.insert=j().bind(null,"head"),Z.domAPI=S(),Z.insertStyleElement=B(),L()(J.A,Z),J.A&&J.A.locals&&J.A.locals;var X=n(97687),Q={};Q.styleTagTransform=R(),Q.setAttributes=U(),Q.insert=j().bind(null,"head"),Q.domAPI=S(),Q.insertStyleElement=B(),L()(X.A,Q),X.A&&X.A.locals&&X.A.locals;const ee=(0,a.lazy)((()=>n.e(9059).then(n.bind(n,89059)))),te=(0,a.lazy)((()=>Promise.all([n.e(5507),n.e(5071)]).then(n.bind(n,45071)))),ne=(0,a.lazy)((()=>Promise.all([n.e(2689),n.e(4038),n.e(5915),n.e(8298),n.e(788),n.e(4816),n.e(8706),n.e(8162),n.e(6932),n.e(3311),n.e(5973),n.e(3446)]).then(n.bind(n,12124)))),ae=(0,a.lazy)((()=>Promise.all([n.e(5915),n.e(8298),n.e(5507),n.e(7241),n.e(3680)]).then(n.bind(n,93680)))),re=(0,a.lazy)((()=>n.e(6595).then(n.bind(n,91072)))),oe=(0,a.lazy)((()=>n.e(7433).then(n.bind(n,87433)))),ie=(0,a.lazy)((()=>Promise.all([n.e(8298),n.e(788),n.e(4816),n.e(8706),n.e(6932)]).then(n.bind(n,58089)))),le=(0,a.lazy)((()=>Promise.all([n.e(9435),n.e(3481),n.e(5915),n.e(4816),n.e(2638),n.e(5973),n.e(954),n.e(7539),n.e(5572)]).then(n.t.bind(n,55572,23)))),ce=(0,a.lazy)((()=>Promise.all([n.e(5915),n.e(8298),n.e(788),n.e(8162),n.e(1695),n.e(3037)]).then(n.t.bind(n,63037,23)))),se=(0,a.lazy)((()=>Promise.all([n.e(9435),n.e(3481),n.e(5915),n.e(8298),n.e(2638),n.e(1695),n.e(7539),n.e(3884)]).then(n.t.bind(n,13884,23)))),de=(0,a.lazy)((()=>Promise.all([n.e(5915),n.e(8298),n.e(5507),n.e(7241)]).then(n.bind(n,67241)))),ue=function(){const e=new p,[t,n]=a.useState(0),r=(0,o.Zp)(),i=(0,o.zy)(),l=new URLSearchParams(i.search),c=i.pathname;function s(){n(0)}function d(){e.getFullFirebase((()=>{n(1),1===c.length&&r("/game")}))}return window.crawlear=window.crawlear||{},window.crawlear.fbBase=window.crawlear.fbBase||e,a.useEffect((()=>{e.checkIfLogged((()=>{d()}),(()=>{s()})),m.default.init("G-J1NH6FT6E3"),m.default.event("App","init","".concat(navigator.userAgent))}),[]),a.createElement(f.F.Provider,{value:{isUserLoged:t}},a.createElement("div",{className:"App"},1===t?a.createElement(b(),{lazyComponent:a.createElement(te,null)}):a.createElement(a.Fragment,null),a.createElement("div",{className:"AppMainContainer"},a.createElement(o.BV,null,a.createElement(o.qh,{path:"/",element:a.createElement(K,{onLogin:d})}),a.createElement(o.qh,{path:"/game",element:a.createElement(b(),{lazyComponent:a.createElement(ne,null)})}),a.createElement(o.qh,{path:"/gameconfigurator",element:a.createElement(b(),{lazyComponent:a.createElement(ie,null)})}),a.createElement(o.qh,{path:"/route",element:a.createElement(b(),{lazyComponent:a.createElement(le,null)})}),a.createElement(o.qh,{path:"/gameviewer",element:a.createElement(b(),{lazyComponent:a.createElement(ce,{gid:l.get&&l.get("gid")})})}),a.createElement(o.qh,{path:"/social",element:a.createElement(b(),{lazyComponent:a.createElement(ae,{onLogout:s})})}),a.createElement(o.qh,{path:"/routeviewer",element:a.createElement(b(),{lazyComponent:a.createElement(se,{rid:l.get&&l.get("rid")})})}),a.createElement(o.qh,{path:"/profile",element:a.createElement(b(),{lazyComponent:a.createElement(de,{onLogout:s,uid:l.get&&l.get("uid")})})}),a.createElement(o.qh,{path:"/aboutus",element:a.createElement(b(),{lazyComponent:a.createElement(re,null)})}),a.createElement(o.qh,{path:"/privacypolicy",element:a.createElement(b(),{lazyComponent:a.createElement(oe,null)})}),a.createElement(o.qh,{path:"/sitemap.xml",element:a.createElement(b(),{lazyComponent:a.createElement(ee,{filePath:"/sitemap.xml"})})})))))};var ge=n(84976);var pe;n(72729),(0,r.H)(document.getElementById("root")).render(a.createElement(ge.BrowserRouter,null,a.createElement(ue,null))),pe&&pe instanceof Function&&n.e(364).then(n.bind(n,364)).then((e=>{let{getCLS:t,getFID:n,getFCP:a,getLCP:r,getTTFB:o}=e;t(pe),n(pe),a(pe),r(pe),o(pe)})),"serviceWorker"in navigator?window.addEventListener("load",(function(){const e=document.location.href.indexOf("localhost")>=0?"service-worker-dev.js":"sw.js";navigator.serviceWorker.register(e).then((function(e){m.default.event("App","pwa","registered")}),(function(e){m.default.event("App","pwa","registration error"),console.log("ServiceWorker registration failed: ",e)})).catch((function(e){console.log(e)}))})):(m.default.event("App","pwa","service worker not supported"),console.log("service worker is not supported"))},7340:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var a=n(96540),r=n(18492),o=n(44838),i=n(85072),l=n.n(i),c=n(97825),s=n.n(c),d=n(77659),u=n.n(d),g=n(55056),p=n.n(g),m=n(10540),f=n.n(m),h=n(41113),b=n.n(h),w=n(47460),y={};y.styleTagTransform=b(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=f(),l()(w.A,y),w.A&&w.A.locals&&w.A.locals;const v=function(){const{t:e}=(0,r.B)(["main"]);return a.createElement("div",{className:"aboutUsContent"},a.createElement("figure",{className:"logoImg"},a.createElement("img",{width:234,height:168,alt:"crawlear logo",src:o})),a.createElement("p",null,a.createElement("b",null,"crawlear.com")," ",e("content.welcomeMessage")," ",a.createElement("br",null),a.createElement("br",null),e("content.welcomeMessage2")))}},4245:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".landing .aboutUsContent{width:85%;margin:0 auto}.landing .loginAndContent{padding-bottom:140px}.landing .routesSearchContainer .headerText,.landing .routesSearchContainer .searchText{display:none}.landing .routeSerarchImage{max-width:356px}.landing .routeSerarchImageText{font-size:.7em}.landing .loginAndContent .googleSignInButton{margin:auto;padding:15px;width:50%}.landing .loginAndContent .googleSignInButton button{width:100%}.landing img.collaborateLogo{width:100px}.landing img.crawlerImageSignIn{margin:0px auto 15px auto;display:block;cursor:pointer;padding:15px}.landing img.youtubeLogo,.landing img.instagramLogo,.landing img.facebookLogo{width:35px;margin-right:15px;border-radius:15px}.landing img.facebookLogo{background-color:#fff}",""]);const l=i},47460:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".contentImg{margin:0;padding:0;width:100%}.logoImg{margin:auto;padding:15px}.video-responsive{overflow:hidden;padding-bottom:56.25%;position:relative;height:0}.video-responsive iframe{left:0;top:0;height:100%;width:100%;position:absolute}",""]);const l=i},56283:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,"#root{width:100%;height:100%}.App{text-align:center;width:100%;height:100%}.AppMainContainer{width:95%;margin:0px auto;height:100%;max-width:430px;min-width:277px;padding-top:65px}.smallText{line-height:1.5;font-size:16px;text-align:justify}.centerText{text-align:center}.headerText{padding:6px;height:40px;line-height:40px;text-align:center}.sectionTitle{text-shadow:5px 5px 5px #222}.App-link{color:#61dafb}.rounded{border-radius:8px;padding:10px}.rounded button{background-color:rgba(0,0,0,0)}body.lightMode input.hidenInput,body.lightMode textarea.hidenInput,body.lightMode .bold,body.lightMode select{color:#000}body.lightMode .controlTextValues:nth-of-type(odd){background-color:#a0bcc2}body.lightMode .resultsContainer{background-image:linear-gradient(#b6ac91, #8c8a7f)}body.lightMode .rounded.colorGrey{color:#fff}body.lightMode .gameList .gameListPoints,body.lightMode .gameList .gameListPosition{background-color:#a0bcc2}body.lightMode .rounded{color:#000}body.lightMode .rounded.controlTextTitle{background-image:linear-gradient(#FEFBE7, #405662)}body.lightMode .rounded1{background-image:linear-gradient(#F9EBC8, #FEFBE7)}body.lightMode .rounded2{background-image:linear-gradient(#FEFBE7, #FEFBE7)}body.lightMode .rounded3{background-image:linear-gradient(#FEFBE7, #A0BCC2)}body.lightMode .rounded button{background-color:#405662}body.lightMode .linksContainer{color:#fefbe7}.rounded1{background-image:linear-gradient(#112031, #152D35)}.rounded2{background-image:linear-gradient(#345B63, #112031)}.rounded3{background-color:#345b63}.headerPlayer{padding:10px}.importantNote{background-image:linear-gradient(#ffa602, #ea7402)}.importantNote img{width:32px;vertical-align:middle;border-radius:8px;padding:5px 0px;float:left}.controlTextContainer{margin:10px auto;padding:10px}.controlTextText{margin:0 5px}.winnerBox{padding:15px;margin-bottom:8px}.winnerBox .headerPlayer{margin-bottom:15px}.notLoggedLogo{width:125px;margin-bottom:40px}.closed{height:26px;box-shadow:none}.horizontalScrollContainer{overflow-x:scroll;overflow-y:hidden;display:flex}::-webkit-scrollbar-track{background:rgba(0,0,0,0)}::-webkit-scrollbar-thumb{background:#888;border-radius:14px;border:solid 1px #444}::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,0)}::-webkit-scrollbar{background:rgba(0,0,0,0)}",""]);const l=i},24797:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o),l=n(4417),c=n.n(l),s=new URL(n(39847),n.b),d=new URL(n(4049),n.b),u=new URL(n(78933),n.b),g=new URL(n(1144),n.b),p=i()(r()),m=c()(s),f=c()(d),h=c()(u),b=c()(g);p.push([e.id,`html{height:100%;width:100%}body{background-color:#333;color:#fcf7ff;font-family:Montserrat,sans-serif;font-size:21px;margin:0px;height:100%;-webkit-font-smoothing:antialiased;background-image:url(${m});background-attachment:fixed;background-position:center;background-position-y:top;background-position-x:right;background-repeat:no-repeat;background-size:cover}body.game{background-image:url(${f})}body.social{background-image:url(${h})}body.route{background-image:url(${b})}.blink{animation:blinker 1s linear infinite}@keyframes blinker{50%{opacity:0}}.bold{font-weight:bold}.left{text-align:left}.inline{display:inline}button,select,input,textarea{margin:5px;border-radius:15px;font-size:21px;background-color:rgba(0,0,0,0);border:1px solid #fff;color:#fff}input,textarea{color:#000}select{padding:10px;width:85%}button{padding:10px;margin:5px;align-items:center;background-color:initial;background-image:linear-gradient(#464d55, #25292e);border-radius:8px;border-width:0;box-shadow:0 10px 20px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.05);box-sizing:border-box;color:#fff;cursor:pointer;font-size:18px;justify-content:center;line-height:.5;outline:none;text-align:center;text-decoration:none;transform:translate3d(0, 0, 0);transition:all 150ms;transition-duration:.4s;-webkit-transition-duration:.4s;vertical-align:baseline;white-space:nowrap;user-select:none}button *:hover{transition-duration:.1s;background-color:#3a3a3a}button *:after{content:"";display:block;position:absolute;border-radius:8px;left:0;top:0;width:100%;height:100%;opacity:0;transition:all .2s;box-shadow:0 0 10px 15px #fff}button *:active:after{box-shadow:0 0 0 0 #fff;position:absolute;border-radius:8px;left:0;top:0;opacity:1;transition:0s}input,textarea{background-color:#fff;max-width:195px;font-size:17px;padding:5px}a{color:#fff;text-decoration:none}li{list-style-type:none;text-align:right}figure{margin:0;padding:0;width:100%}figcaption{text-align:center;font-size:16px}.colorGreen{background-color:green}.colorGrey{background-color:#333}.colorClearGrey{background-color:#666}.colorRed{background-color:red}.colorOrange{background-color:orange}.foreColorRed{color:red}`,""]);const w=p},97687:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".Footer{font-size:14px;margin-top:100px}",""]);const l=i},82577:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(96540)),l=n(96540);t.default=function(e){var t=e.lazyComponent;return i.createElement(l.Suspense,{fallback:i.createElement("div",null,"Loading...")},t)}},77588:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(38791));t.default=function(e){var t=l.useState(!1),n=t[0],a=t[1],r=window.crawlear.fbBase;function o(){e&&e(!0)}return l.useEffect((function(){c.default.pageview("/landing/")}),[]),[function(){r.signInWithGoogle(o)},function(){a(!0)},n]}},75826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={type:"backend",init:function(e,t,n){},read:function(e,t,a){n(40041)("./".concat(e.substring(0,2),"/").concat(t,".json")).then((function(e){a(null,e)}))},save:function(e,t,n){},create:function(e,t,n,a){}};t.default=a},72729:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(35543)),o=n(32418),i=a(n(74543)),l=a(n(75826));r.default.use(i.default).use(l.default).use(o.initReactI18next).init({fallbackLng:"en",interpolation:{escapeValue:!1},ns:["main"],saveMissing:!0,missingKeyHandler:function(e,t,n,a){console.log(n)}}),t.default=r.default},40041:(e,t,n)=>{var a={"./en/landing.json":[40389,9768],"./en/main.json":[40519,5626],"./es/landing.json":[96006,4371],"./es/main.json":[3174,6983]};function r(e){if(!n.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((()=>n.t(r,19)))}r.keys=()=>Object.keys(a),r.id=40041,e.exports=r},4049:(e,t,n)=>{"use strict";e.exports=n.p+"b9961bfccef086a06e2d.webp"},1144:(e,t,n)=>{"use strict";e.exports=n.p+"bde861a89223779647da.webp"},78933:(e,t,n)=>{"use strict";e.exports=n.p+"0f11837c93bf57ad115f.webp"},39847:(e,t,n)=>{"use strict";e.exports=n.p+"0a7a20e733c25ae868eb.webp"},44838:(e,t,n)=>{"use strict";e.exports=n.p+"a87235d499e5a4429625.webp"}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,exports:{}};return o[e].call(n.exports,n,n.exports,l),n.exports}l.m=o,e=[],l.O=(t,n,a,r)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],r=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,r<o&&(o=r));if(i){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var o={};t=t||[null,n({}),n([]),n(n)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,l.d(r,o),r},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>(({4371:"i18n/es-landing-json",4988:"FirebaseController",5626:"i18n/en-main-json",6983:"i18n/es-main-json",9768:"i18n/en-landing-json"}[e]||e)+"."+{364:"dca42caabe4fa0c9e3f7",788:"46a30659ec63d35d50b5",954:"8187cbbdc6173ddc9520",1695:"ea041ef38fa64cbb08b6",2638:"776d2f7e549cc2e9d5c5",2689:"290851a3b7a17dcaeb2c",3037:"7afbeb64c27d4b3c7c92",3311:"5a0588d088c76e7a82ec",3446:"0e1ec5e16d0a25598ce9",3481:"e383a358eb3c6961fdd5",3680:"f3b3b51f2f93a61dd885",3884:"dc4b4f0dd9a3a5c59057",4038:"8bb418d208248833decf",4371:"62286b274d1f6494d337",4816:"c8b10450975290d78161",4988:"3766a35b15a36961b732",5071:"b91c901575e7faa90f69",5507:"4e7c5a3c7618e52e30bc",5572:"fb60d8e4dcf6c0624662",5626:"f55e3a207835b2be75af",5915:"8fae35e5485f253b4a06",5973:"516f9dbc5acbde33cecb",6595:"9af44b23abdbfe461d86",6932:"a1b6f2ec65577bbdcace",6983:"f14165c80146f8e0371d",7241:"17f97d9db9016995e247",7433:"f572f4bbf8dad0a734b3",7539:"bb9e97061e33efaea0d1",8162:"8e237904828b55e09643",8298:"88399bd840bb9e8f8d1c",8340:"5835bb83532465bcab00",8706:"ac2e57e8ff4c2c7a4c0d",9059:"d6bb5921b5d24b8e40dd",9435:"a2ddbeda376898a9d4c1",9653:"8d0186ed4d4ee0c35b19",9768:"32bf04e3fd110f4aa465"}[e]+".js"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},r="crawlear.com:",l.l=(e,t,n,o)=>{if(a[e])a[e].push(t);else{var i,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",r+n),i.src=e),a[e]=[t];var g=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var r=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(n))),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{l.b=document.baseURI||self.location.href;var e={8792:0};l.f.j=(t,n)=>{var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(((n,r)=>a=e[t]=[n,r]));n.push(a[2]=r);var o=l.p+l.u(t),i=new Error;l.l(o,(n=>{if(l.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,o=n[0],i=n[1],c=n[2],s=0;if(o.some((t=>0!==e[t]))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(c)var d=c(l)}for(t&&t(n);s<o.length;s++)r=o[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(d)},n=self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),l.nc=void 0;var c=l.O(void 0,[7427,306,3119,8509,388,5790,6659,3804,5313,6148,2628,2764,6540,528],(()=>l(16202)));c=l.O(c)})();