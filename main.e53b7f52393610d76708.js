(()=>{var e,t,n,a,r,o={38791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(29970);function r(){return document.location.href.indexOf("localhost")>=0}const o=class{static init(e){r()||a.Ay.initialize(e)}static pageview(e){r()||a.Ay.send({hitType:"pageview",page:e})}static event(e,t,n){r()||a.Ay.event({category:e,action:t,label:n})}}},41707:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(5168),r=(n(50090),n(62613),n(70223)),o=n(69141),i=n(22405),l=n(14959);const c={apiKey:"AIzaSyATlKKGw99gurKNwHL7BU1-_Llj0hwJy60",authDomain:"crawlear-com.firebaseapp.com",databaseURL:"https://crawlear-com-default-rtdb.europe-west1.firebasedatabase.app",projectId:"crawlear-com",storageBucket:"crawlear-com.appspot.com",messagingSenderId:"879856500816",appId:"1:879856500816:web:4287599cc229d5f4c3d155",measurementId:"G-YD7VLXPTM2"},s=class{constructor(){this.app=(0,r.Wp)(c),this.provider=new l.HF,this.auth=(0,l.xI)(),this.db=(0,i.aU)(),this.rdb=(0,o.C3)(),this.initAppCheck()}getFullFirebase(e){Promise.all([n.e(9653),n.e(8340),n.e(788),n.e(4988)]).then(n.bind(n,93094)).then((t=>{const n=new(0,t.default)(this);window.crawlear=window.crawlear||{},window.crawlear.fb=n,e&&e()}))}initAppCheck(){(0,a.Ay)(this.app,{provider:new a._u("6LfMPSIiAAAAABUfGLi_j7mnUr1snw9RriT8eBqP"),isTokenAutoRefreshEnabled:!0})}checkIfLogged(e,t){this.checkIfRedirect(e),this.auth.onAuthStateChanged((n=>{n?this.getUser(n.uid,(t=>{this.setUserInContext(t,n.uid),e()}),(()=>{this.setUser(n,(t=>{this.setUserInContext(t,n.uid),e()}),(()=>{}))})):t&&t()}))}checkIfRedirect(e){(0,l.Q4)(this.auth).then((t=>{this.getUser(t.user.uid,(n=>{this.setUserInContext(n,t.user.uid),e&&e(n)}),(()=>{this.setUser(t.user,e,(e=>{this.setUserInContext(e,t.user.uid)}))}))})).catch((e=>{}))}signInWithGoogle(e){(0,l.oM)(this.auth,l.F0).then((()=>{(0,l.df)(this.auth,this.provider).then((t=>{this.getUser(t.user.uid,(n=>{this.setUserInContext(n,t.user.uid),e&&e(n)}),(()=>{this.setUser(t.user,e,(e=>{this.setUserInContext(e,t.user.uid)}))}))})).catch((e=>{}))})).catch((e=>{}))}async getUser(e,t,n){const a=(0,i.H9)(this.db,"users",e),r=await(0,i.x7)(a);if(r.exists()){const e=r.data();e.uid=a.id,t&&t(e)}else n&&n()}async getUserExtraData(e,t,n){try{const n={};let a=(0,i.P)((0,i.rJ)(this.db,"games"),(0,i._M)("uids","array-contains",e)),r=await(0,i.GG)(a);n.pilotGames=r.docs.length,a=(0,i.P)((0,i.rJ)(this.db,"games"),(0,i._M)("jids","array-contains",e)),r=await(0,i.GG)(a),n.judgeGames=r.docs.length,a=(0,i.P)((0,i.rJ)(this.db,"routes"),(0,i._M)("uids","array-contains",e)),r=await(0,i.GG)(a),n.routes=r.docs.length,t&&t(n)}catch(e){n&&n()}}isUserLogged(){return null!=this.auth.currentUser}async setUser(e,t,n){let{uid:a,displayName:r,photoURL:o,description:l,instagram:c}=e;const s={displayName:r,photoURL:o,registrationDate:(new Date).toString(),description:l||"",instagram:c||""};try{await(0,i.BN)((0,i.H9)(this.db,"users",a),s),t&&t(s)}catch(e){n&&n()}}setUserInContext(e,t){e.instagram=e.instagram||"",window.crawlear={...window.crawlear,user:e},window.crawlear.user.uid=t}async routeSearchByLatLon(e,t,n,a){try{const a=(0,i.rJ)(this.db,"routes"),r=(0,i.P)(a,(0,i._M)("point.lat",">",e.lat-t.lat),(0,i._M)("point.lat","<",e.lat+t.lat)),o=await(0,i.GG)(r),l=[];o.forEach((n=>{const a=n.data();a.point.lon>e.lng-t.lon&&a.point.lon<e.lng+t.lon&&(a.rid=n.id,l.push(a))})),n&&n(l)}catch(e){a&&a(e)}}async getGpx(e,t,n){const a=(0,i.H9)(this.db,"gpx",e),r=await(0,i.x7)(a);if(r.exists()){const e=r.data();e.gid=a.id,t(e)}else n()}async getRoute(e,t,n,a){const r=(0,i.H9)(this.db,"routes",e),o=await(0,i.x7)(r);if(o.exists()){const e=o.data();e.rid=r.id,t&&e.gpx?this.getGpx(e.gpx,(t=>{e.gpx=t,e.gpx.gid=t.gid,n(e)}),a):n(e)}else a()}async getGame(e,t,n){const a=(0,i.H9)(this.db,"games",e),r=await(0,i.x7)(a);if(r.exists()){const e=r.data();e.gid=a.id,t&&t(e)}else n&&n()}}},55711:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UserStatusContext:()=>a});const a=n(96540).createContext({isUserLoged:!1})},35620:(e,t,n)=>{"use strict";var a=n(96540),r=n(85902),o=n(5338),i=n(47767),l=n(38791),c=n(55711),s=n(82577),d=n.n(s),u=n(7340),g=n(18492);const p=n.p+"c02f061a017d59f5bb86.svg",f=n.p+"b0c484b364dc559b8644.svg",m=n.p+"5aa9dd97f0c1a5039ca6.svg",b=function(){const{t:e}=(0,g.B)(["landing"]),t=window.crawlear.fbBase;return a.createElement("div",{className:"Footer","data-testid":"Footer"},"[©",a.createElement("a",{href:"https://crawlear.com"},"crawlear.com")," 2024",t.isUserLogged()?a.createElement(a.Fragment,null,"]"):a.createElement(a.Fragment,null,"- ",a.createElement("a",{href:"https://crawlear.com/aboutus"},e("description.aboutus"))," - ",a.createElement("a",{href:"https://crawlear.com/privacypolicy"},e("description.politicaprivacidad")),"]"),a.createElement("p",null,a.createElement("a",{rel:"noreferrer",href:"https://www.youtube.com/channel/UCNwhl3Mflf-hpTSI1Xo8dSg",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"youtubeLogo",src:p,alt:"youtube logo"})),a.createElement("a",{rel:"noreferrer",href:"https://www.instagram.com/crawlearcom/",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"instagramLogo",src:f,alt:"instagram logo"})),a.createElement("a",{rel:"noreferrer",href:"https://www.facebook.com/Crawlearcom-106005795418134",target:"_blank"},a.createElement("img",{width:35,height:35,loading:"lazy",className:"facebookLogo",src:m,alt:"facebook logo"}))))},h=n.p+"e2f9c811d7053cfa21ff.webp",w=n.p+"93b1aa5e1599079e9c6e.webp",y=n.p+"402fa67d279e2e39bb6f.webp",x=n.p+"81f23fde7b73ade303e9.webp",v=n.p+"fde7ea2cdb21ba90dc1b.webp";var E=n(85072),k=n.n(E),C=n(97825),_=n.n(C),A=n(77659),P=n.n(A),j=n(55056),O=n.n(j),L=n(10540),M=n.n(L),S=n(41113),z=n.n(S),I=n(4245),T={};T.styleTagTransform=z(),T.setAttributes=O(),T.insert=P().bind(null,"head"),T.domAPI=_(),T.insertStyleElement=M(),k()(I.A,T),I.A&&I.A.locals&&I.A.locals;var U=n(77588),B=n.n(U);const F=(0,a.lazy)((()=>Promise.all([n.e(788),n.e(6932)]).then(n.bind(n,6932)))),N=(0,a.lazy)((()=>Promise.all([n.e(6454),n.e(6973),n.e(3481),n.e(2004),n.e(2638),n.e(954)]).then(n.t.bind(n,80954,23)))),R=function(e){let{onLogin:t}=e;const{t:n}=(0,g.B)(["landing"]),[r,o,i]=B()(t);return navigator.onLine?a.createElement("div",{className:"landing"},a.createElement(u.default,null),i?a.createElement(d(),{lazyComponent:a.createElement(N,null)}):a.createElement(a.Fragment,null,a.createElement("img",{width:375,height:267,className:"routeSerarchImage",src:v,onClick:o,loading:"lazy",alt:"route search to click"}),a.createElement("div",{className:"routeSerarchImageText"},n("content.clickImagen"))),a.createElement("div",{className:"loginAndContent aboutUsContent"},a.createElement("p",null,a.createElement("b",null,n("content.landingMainText")),":"),a.createElement("img",{width:191,height:46,className:"crawlerImageSignIn",loading:"lazy",src:h,alt:"t2 crawler",onClick:r}),a.createElement("p",null,n("content.licenseText")),a.createElement("p",null,n("content.colaboraciones"),a.createElement("br",null),a.createElement("img",{className:"collaborateLogo",width:100,height:100,loading:"lazy",src:w,alt:"Levante 1/24 Logo"}),a.createElement("a",{href:"https://www.clubzonarc.es/",alt:"Club ZonaRc website",rel:"noreferrer",target:"_blank"},a.createElement("img",{width:100,height:100,loading:"lazy",className:"collaborateLogo",src:y,alt:"ZonaRc Logo"})),a.createElement("img",{className:"collaborateLogo",width:100,height:106,loading:"lazy",src:x,alt:"Mini Crawler Passion Logo"}))),a.createElement(b,null)):a.createElement(d(),{lazyComponent:a.createElement(F,null)})};var G=n(69998),D=n.n(G);window.onerror=(e,t,n,a,r)=>{console.error(e),l.default.event("error","js",`${e} ${r.stack} ${t}`)};var q=n(24797),H={};H.styleTagTransform=z(),H.setAttributes=O(),H.insert=P().bind(null,"head"),H.domAPI=_(),H.insertStyleElement=M(),k()(q.A,H),q.A&&q.A.locals&&q.A.locals;var $=n(56283),J={};J.styleTagTransform=z(),J.setAttributes=O(),J.insert=P().bind(null,"head"),J.domAPI=_(),J.insertStyleElement=M(),k()($.A,J),$.A&&$.A.locals&&$.A.locals;var W=n(97687),K={};K.styleTagTransform=z(),K.setAttributes=O(),K.insert=P().bind(null,"head"),K.domAPI=_(),K.insertStyleElement=M(),k()(W.A,K),W.A&&W.A.locals&&W.A.locals;const V=(0,a.lazy)((()=>n.e(9059).then(n.bind(n,89059)))),Y=(0,a.lazy)((()=>Promise.all([n.e(5507),n.e(5071)]).then(n.bind(n,45071)))),Z=(0,a.lazy)((()=>Promise.all([n.e(2689),n.e(4038),n.e(2004),n.e(8298),n.e(788),n.e(5038),n.e(6932),n.e(4816),n.e(6108),n.e(6819),n.e(213),n.e(3311),n.e(5973),n.e(2713)]).then(n.t.bind(n,82713,23)))),X=(0,a.lazy)((()=>Promise.all([n.e(2004),n.e(8298),n.e(788),n.e(6932),n.e(6108),n.e(5507),n.e(9462),n.e(6608)]).then(n.t.bind(n,66608,23)))),Q=(0,a.lazy)((()=>n.e(6595).then(n.bind(n,91072)))),ee=(0,a.lazy)((()=>n.e(7433).then(n.bind(n,87433)))),te=(0,a.lazy)((()=>Promise.all([n.e(8298),n.e(788),n.e(5038),n.e(6932),n.e(4816),n.e(6108),n.e(6819),n.e(4105)]).then(n.t.bind(n,54105,23)))),ne=(0,a.lazy)((()=>Promise.all([n.e(6454),n.e(6973),n.e(3481),n.e(2004),n.e(788),n.e(5038),n.e(6932),n.e(4816),n.e(6108),n.e(2638),n.e(5973),n.e(954),n.e(7539),n.e(1257)]).then(n.t.bind(n,41257,23)))),ae=(0,a.lazy)((()=>Promise.all([n.e(2004),n.e(8298),n.e(788),n.e(5038),n.e(213),n.e(1695),n.e(3037)]).then(n.t.bind(n,63037,23)))),re=(0,a.lazy)((()=>Promise.all([n.e(6454),n.e(6973),n.e(3481),n.e(2004),n.e(8298),n.e(2638),n.e(1695),n.e(7539),n.e(3884)]).then(n.t.bind(n,13884,23)))),oe=(0,a.lazy)((()=>Promise.all([n.e(2004),n.e(8298),n.e(5507),n.e(9462)]).then(n.bind(n,29462)))),ie=function(){const e=(0,i.zy)(),t=(0,i.Zp)(),n=new URLSearchParams(e.search),[o,s,u]=D()((()=>{1===e.pathname.length&&t("/game")}));return a.useEffect((()=>{l.default.init("G-J1NH6FT6E3"),l.default.event("App","init",`${navigator.userAgent}`)}),[]),a.createElement(c.UserStatusContext.Provider,{value:{isUserLoged:o}},a.createElement(r.Helmet,null,a.createElement("meta",{property:"og:title",content:"Crawlear.com Your profesional Crawler Scoreboard and Route manager"}),a.createElement("meta",{property:"og:description",content:"Crawlear.com Your profesional Crawler Scoreboard and Route manager"}),a.createElement("meta",{property:"description",content:"Crawlear.com Your profesional Crawler Scoreboard and Route manager"}),a.createElement("meta",{property:"og:image",content:"https://crawlear.com/static/logo512.png"})),a.createElement("div",{className:"App"},o?a.createElement(d(),{lazyComponent:a.createElement(Y,null)}):a.createElement(a.Fragment,null),a.createElement("div",{className:"AppMainContainer"},a.createElement(i.BV,null,a.createElement(i.qh,{path:"/",element:a.createElement(R,{onLogin:s})}),a.createElement(i.qh,{path:"/game",element:a.createElement(d(),{lazyComponent:a.createElement(Z,{from:"/game",to:"/"})})}),a.createElement(i.qh,{path:"/gameconfigurator",element:a.createElement(d(),{lazyComponent:a.createElement(te,{from:"/gameconfigurator",to:"/"})})}),a.createElement(i.qh,{path:"/route",element:a.createElement(d(),{lazyComponent:a.createElement(ne,{from:"/route",to:"/"})})}),a.createElement(i.qh,{path:"/gameviewer",element:a.createElement(d(),{lazyComponent:a.createElement(ae,{gid:n.get&&n.get("gid")})})}),a.createElement(i.qh,{path:"/social",element:a.createElement(d(),{lazyComponent:a.createElement(X,{from:"/social",to:"/",onLogout:u})})}),a.createElement(i.qh,{path:"/routeviewer",element:a.createElement(d(),{lazyComponent:a.createElement(re,{rid:n.get&&n.get("rid")})})}),a.createElement(i.qh,{path:"/profile",element:a.createElement(d(),{lazyComponent:a.createElement(oe,{onLogout:u,uid:n.get&&n.get("uid")})})}),a.createElement(i.qh,{path:"/aboutus",element:a.createElement(d(),{lazyComponent:a.createElement(Q,null)})}),a.createElement(i.qh,{path:"/privacypolicy",element:a.createElement(d(),{lazyComponent:a.createElement(ee,null)})}),a.createElement(i.qh,{path:"/sitemap.xml",element:a.createElement(d(),{lazyComponent:a.createElement(V,{filePath:"/sitemap.xml"})})})))))};var le=n(84976);var ce;n(72729),(0,o.H)(document.getElementById("root")).render(a.createElement(r.HelmetProvider,null,a.createElement(le.BrowserRouter,null,a.createElement(ie,null)))),ce&&ce instanceof Function&&n.e(364).then(n.bind(n,364)).then((e=>{let{getCLS:t,getFID:n,getFCP:a,getLCP:r,getTTFB:o}=e;t(ce),n(ce),a(ce),r(ce),o(ce)})),"serviceWorker"in navigator?window.addEventListener("load",(function(){const e=document.location.href.indexOf("localhost")>=0?"service-worker-dev.js":"sw.js";navigator.serviceWorker.register(e).then((function(e){l.default.event("App","pwa","registered")}),(function(e){l.default.event("App","pwa","registration error"),console.log("ServiceWorker registration failed: ",e)})).catch((function(e){console.log(e)}))})):(l.default.event("App","pwa","service worker not supported"),console.log("service worker is not supported"))},7340:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var a=n(96540),r=n(18492),o=n(44838),i=n(85072),l=n.n(i),c=n(97825),s=n.n(c),d=n(77659),u=n.n(d),g=n(55056),p=n.n(g),f=n(10540),m=n.n(f),b=n(41113),h=n.n(b),w=n(47460),y={};y.styleTagTransform=h(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=m(),l()(w.A,y),w.A&&w.A.locals&&w.A.locals;const x=function(){const{t:e}=(0,r.B)(["landing"]);return a.createElement("div",{className:"aboutUsContent"},a.createElement("figure",{className:"logoImg"},a.createElement("img",{width:234,height:168,alt:"crawlear logo",src:o})),a.createElement("p",null,a.createElement("b",null,"crawlear.com")," ",e("content.welcomeMessage")," ",a.createElement("br",null),a.createElement("br",null),e("content.welcomeMessage2")))}},4245:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,"@media only screen and (min-width: 600px){.landing .aboutUsContent{text-align:justify}.landing .routesSearchContainer{max-width:415px;width:85%;margin:0 auto}}.landing .aboutUsContent{width:85%;margin:0 auto}.landing .loginAndContent{padding-bottom:140px}.landing .routesSearchContainer{background-color:unset}.landing .routesSearchContainer .routesManagement{height:100%}.landing .routesSearchContainer .headerText,.landing .routesSearchContainer .searchText{display:none}.landing .routeSerarchImage{max-width:356px}.landing .routeSerarchImageText{font-size:.7em}.landing .loginAndContent .googleSignInButton{margin:auto;padding:15px;width:50%}.landing .loginAndContent .googleSignInButton button{width:100%}.landing img.collaborateLogo{width:100px}.landing img.crawlerImageSignIn{margin:0px auto 15px auto;display:block;cursor:pointer;padding:15px}.landing img.youtubeLogo,.landing img.instagramLogo,.landing img.facebookLogo{width:35px;margin-right:15px;border-radius:15px}.landing img.facebookLogo{background-color:#fff}",""]);const l=i},47460:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".contentImg{margin:0;padding:0;width:100%}.logoImg{margin:auto;text-align:center}.video-responsive{overflow:hidden;padding-bottom:56.25%;position:relative;height:0}.video-responsive iframe{left:0;top:0;height:100%;width:100%;position:absolute}",""]);const l=i},56283:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,'#root{width:100%;height:100%}.App{text-align:center;width:100%;height:100%}.AppMainContainer{width:95%;margin:0px auto;height:100%;max-width:430px;min-width:277px;padding-top:65px}@media only screen and (min-width: 600px){.AppMainContainer{max-width:630px}}.smallText{line-height:1.5;font-size:16px;text-align:justify}.formError{color:red;font-size:.8em}.centerText{text-align:center}.headerText{padding:6px;height:40px;line-height:40px;text-align:center}.sectionTitle{text-shadow:5px 5px 5px #222}.App-link{color:#61dafb}.rounded{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);border-radius:8px;padding:10px}.rounded button{background-color:rgba(0,0,0,0)}body.lightMode input.hidenInput,body.lightMode textarea.hidenInput,body.lightMode .bold,body.lightMode select{color:#000}body.lightMode .controlTextValues:nth-of-type(odd){background-color:#a0bcc2}body.lightMode .resultsContainer{background-image:linear-gradient(#b6ac91, #8c8a7f)}body.lightMode .rounded.colorGrey{color:#fff}body.lightMode .gameList .gameListPoints,body.lightMode .gameList .gameListPosition{background-color:#a0bcc2}body.lightMode .rounded{color:#000}body.lightMode .rounded.controlTextTitle{background-image:linear-gradient(#FEFBE7, #405662)}body.lightMode .rounded1{background-image:linear-gradient(#F9EBC8, #FEFBE7)}body.lightMode .rounded2{background-image:linear-gradient(#FEFBE7, #FEFBE7)}body.lightMode .rounded3{background-image:linear-gradient(#FEFBE7, #A0BCC2)}body.lightMode .rounded button{background-color:#405662}body.lightMode .linksContainer{color:#fefbe7}.rounded1{background-image:linear-gradient(#112031, #152D35)}.rounded2{background-image:linear-gradient(#345B63, #112031)}.rounded3{background-color:#345b63}.headerPlayer{padding:10px}.importantNote{background-image:linear-gradient(#ffa602, #ea7402)}.importantNote img{width:32px;vertical-align:middle;border-radius:8px;padding:5px 0px;float:left}.controlTextContainer{margin:10px auto;padding:10px}.controlTextText{margin:0 5px}.formRequiredValue:after{content:"*";color:red}.winnerBox{padding:15px;margin-bottom:8px}.winnerBox .headerPlayer{margin-bottom:15px}.notLoggedLogo{width:125px;margin-bottom:40px}.closed{height:26px;box-shadow:none}.horizontalScrollContainer{overflow-x:scroll;overflow-y:hidden;display:flex}::-webkit-scrollbar-track{background:rgba(0,0,0,0)}::-webkit-scrollbar-thumb{background:#888;border-radius:14px;border:solid 1px #444}::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,0)}::-webkit-scrollbar{background:rgba(0,0,0,0)}',""]);const l=i},24797:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o),l=n(4417),c=n.n(l),s=new URL(n(39847),n.b),d=new URL(n(4049),n.b),u=new URL(n(78933),n.b),g=new URL(n(1144),n.b),p=i()(r()),f=c()(s),m=c()(d),b=c()(u),h=c()(g);p.push([e.id,`html{height:100%;width:100%}body{background-color:#333;color:#fcf7ff;font-family:Montserrat,sans-serif;font-size:21px;margin:0px;height:100%;-webkit-font-smoothing:antialiased;background-image:url(${f});background-attachment:fixed;background-position:center;background-position-y:top;background-position-x:right;background-repeat:no-repeat;background-size:cover}body.game{background-image:url(${m})}body.game.playing{background-image:none;background-color:#aaa}body.social{background-image:url(${b})}body.route{background-image:url(${h})}.blink{animation:blinker 1s linear infinite}@keyframes blinker{50%{opacity:0}}.bold{font-weight:bold}.left{text-align:left}.inline{display:inline}button,select,input,textarea{margin:5px;border-radius:15px;font-size:21px;background-color:rgba(0,0,0,0);border:1px solid #fff;color:#fff}input,textarea{color:#000}select{padding:10px;width:85%}button{padding:10px;margin:5px;align-items:center;background-color:initial;background-image:linear-gradient(#464d55, #25292e);border-radius:8px;border-width:0;box-shadow:0 10px 20px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.05);box-sizing:border-box;color:#fff;cursor:pointer;font-size:18px;justify-content:center;line-height:.5;outline:none;text-align:center;text-decoration:none;transform:translate3d(0, 0, 0);transition:all 150ms;transition-duration:.4s;-webkit-transition-duration:.4s;vertical-align:baseline;white-space:nowrap;user-select:none}button *:hover{transition-duration:.1s;background-color:#3a3a3a}button *:after{content:"";display:block;position:absolute;border-radius:8px;left:0;top:0;width:100%;height:100%;opacity:0;transition:all .2s;box-shadow:0 0 10px 15px #fff}button *:active:after{box-shadow:0 0 0 0 #fff;position:absolute;border-radius:8px;left:0;top:0;opacity:1;transition:0s}button:disabled{background-image:linear-gradient(#345B63, #112031);text-decoration:line-through}input,textarea{background-color:#fff;max-width:195px;font-size:17px;padding:5px}a{color:#fff;text-decoration:none}li{list-style-type:none;text-align:right}figure{margin:0;padding:0;width:100%}figcaption{text-align:center;font-size:16px}.colorGreen{background-color:green}.colorGrey{background-color:#333}.colorClearGrey{background-color:#666}.colorRed{background-color:red}.colorOrange{background-color:orange}.foreColorRed{color:red}`,""]);const w=p},97687:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".Footer{font-size:14px;margin-top:100px}",""]);const l=i},82577:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(96540)),l=n(96540);t.default=function(e){var t=e.lazyComponent;return i.createElement(l.Suspense,{fallback:i.createElement("div",null,"Loading...")},t)}},69998:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(41707));window.crawlear=window.crawlear||{},window.crawlear.fbBase=window.crawlear.fbBase||new c.default,t.default=function(e){var t=window.crawlear.fbBase,n=l.useState(!1),a=n[0],r=n[1],o=l.useCallback((function(){r(!1)}),[]),i=l.useCallback((function(){t.getFullFirebase((function(){r(!0),e()}))}),[t,e]);return l.useEffect((function(){t.checkIfLogged((function(){i()}),(function(){o()}))}),[t,i,o]),[a,i,o]}},77588:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(38791));t.default=function(e){var t=l.useState(!1),n=t[0],a=t[1],r=window.crawlear.fbBase;function o(){e&&e(!0)}return l.useEffect((function(){c.default.pageview("/landing/")}),[]),[function(){r.signInWithGoogle(o)},function(){a(!0)},n]}},75826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={type:"backend",init:function(e,t,n){},read:function(e,t,a){n(40041)("./".concat(e.substring(0,2),"/").concat(t,".json")).then((function(e){a(null,e)}))},save:function(e,t,n){},create:function(e,t,n,a){}};t.default=a},72729:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(35543)),o=n(32418),i=a(n(74543)),l=a(n(75826));r.default.use(i.default).use(l.default).use(o.initReactI18next).init({detection:{order:["navigator"]},supportedLngs:["es","en"],nonExplicitSupportedLngs:!0,fallbackLng:{ca:["es"],default:["en"]},interpolation:{escapeValue:!1},ns:["main"],saveMissing:!0,missingKeyHandler:function(e,t,n,a){console.log(n)}}),t.default=r.default},40041:(e,t,n)=>{var a={"./en/landing.json":[40389,9768],"./en/main.json":[40519,5626],"./es/landing.json":[96006,4371],"./es/main.json":[3174,6983]};function r(e){if(!n.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((()=>n.t(r,19)))}r.keys=()=>Object.keys(a),r.id=40041,e.exports=r},4049:(e,t,n)=>{"use strict";e.exports=n.p+"b9961bfccef086a06e2d.webp"},1144:(e,t,n)=>{"use strict";e.exports=n.p+"bde861a89223779647da.webp"},78933:(e,t,n)=>{"use strict";e.exports=n.p+"0f11837c93bf57ad115f.webp"},39847:(e,t,n)=>{"use strict";e.exports=n.p+"0a7a20e733c25ae868eb.webp"},44838:(e,t,n)=>{"use strict";e.exports=n.p+"c9239cc2056e36ffb204.webp"}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,exports:{}};return o[e].call(n.exports,n,n.exports,l),n.exports}l.m=o,e=[],l.O=(t,n,a,r)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],r=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,r<o&&(o=r));if(i){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var o={};t=t||[null,n({}),n([]),n(n)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,l.d(r,o),r},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>(({4371:"i18n/es-landing-json",4988:"FirebaseController",5626:"i18n/en-main-json",6983:"i18n/es-main-json",9768:"i18n/en-landing-json"}[e]||e)+"."+{213:"a8e00fdcd03270aa2113",364:"dca42caabe4fa0c9e3f7",788:"d9e3e9ffd7714337e55b",954:"6e5492f35fbb390cf336",1257:"e11781cb838504c14c4f",1695:"83325dc5fae9cf430688",2004:"9be3537290a5df7b90db",2638:"f86997892e96e54a5692",2689:"5609bae1e6c1e94ee681",2713:"33695a5223ef851b6e95",3037:"832eed8e91adc7368d44",3311:"fe790d93291e44be112f",3481:"e383a358eb3c6961fdd5",3884:"101c46094606b82a2e56",4038:"b0d1b264725e3b68b089",4105:"53ec1cd79349a2bc2dfe",4371:"6efa1f9e2880756b4616",4816:"c8b10450975290d78161",4988:"8b20f136fc9453e6d2a1",5038:"db1cbf8a5d3cbd05b50c",5071:"f88a144791c17bf42965",5507:"4e7c5a3c7618e52e30bc",5626:"23e5b31e3c63db8c3f03",5973:"ed7687d4b715c5f7f696",6108:"a07b8a07c2549a5fd49f",6454:"a17df5e7d59ee93681a2",6595:"9af44b23abdbfe461d86",6608:"977673b42de91f922a58",6819:"0b043af9126a17374b7b",6932:"c3a70bc73cbb0b644ebf",6973:"dc2ef5d0e8f931ac6ab0",6983:"3777e3180af1b7dccb71",7433:"f572f4bbf8dad0a734b3",7539:"a947514993501e445f84",8298:"88399bd840bb9e8f8d1c",8340:"0290bf0a07f41708d43a",9059:"d6bb5921b5d24b8e40dd",9462:"40c67fcea894d9743cb6",9653:"8d0186ed4d4ee0c35b19",9768:"0631ac8f97a1ab1426fb"}[e]+".js"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},r="crawlear.com:",l.l=(e,t,n,o)=>{if(a[e])a[e].push(t);else{var i,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",r+n),i.src=e),a[e]=[t];var g=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var r=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(n))),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{l.b=document.baseURI||self.location.href;var e={8792:0};l.f.j=(t,n)=>{var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(((n,r)=>a=e[t]=[n,r]));n.push(a[2]=r);var o=l.p+l.u(t),i=new Error;l.l(o,(n=>{if(l.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,o=n[0],i=n[1],c=n[2],s=0;if(o.some((t=>0!==e[t]))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(c)var d=c(l)}for(t&&t(n);s<o.length;s++)r=o[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(d)},n=self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),l.nc=void 0;var c=l.O(void 0,[7427,306,3119,8509,388,5790,6659,3804,5313,6148,344,8887,6540,5324],(()=>l(35620)));c=l.O(c)})();