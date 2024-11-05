"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[9465],{31413:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(18492),a=n(96540),o=n(65656),i=n(28641),u=n(83767),s=n(788);const c=function(e){let{game:t,gameProgression:n}=e;const{t:c}=(0,r.B)(["main"]),l=[];let d=0;return t&&(l.push(a.createElement(o.A,{key:"header",game:t})),t.players.forEach((e=>{let r,o=[],m=0;e.zones.forEach(((l,d)=>{const f=e.group;if(n&&n[f]&&n[f][e.id]&&n[f][e.id][m]&&n[f][e.id][m].data){let l=[];const p=n[f][e.id][m];"done"===p.status?l.push(a.createElement(i.A,{gameType:t.gameType,key:"progressRow".concat(m),gameProgression:p})):"repair"===p.status&&l.push(c("points.reparacion").toUpperCase()),s.GameUtils.isFiasco(t,e.id,d)&&(r=a.createElement("img",{src:u,alt:"fiasco"})),o.push(a.createElement("div",{key:m,className:"gameProgressionInfoItem"},a.createElement("div",{className:"bold"},c("description.zona")," ",m+1," ",r),l))}m++})),o.length>0&&l.push(a.createElement("div",{key:d+m,className:"gameProgressionItem rounded rounded1"},a.createElement("img",{src:e.avatar,alt:"player avatar"}),a.createElement("div",null,o))),d++}))),a.createElement(a.Fragment,null,l)}},12124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var r=n(96540),a=n(38791),o=n(73311),i=n(47767),u=n(18492),s=n(14139),c=n(75973),l=n.n(c),d=n(85072),m=n.n(d),f=n(97825),p=n.n(f),g=n(77659),w=n.n(g),h=n(55056),b=n.n(h),v=n(10540),_=n.n(v),y=n(41113),E=n.n(y),O=n(68689),G={};G.styleTagTransform=E(),G.setAttributes=b(),G.insert=w().bind(null,"head"),G.domAPI=p(),G.insertStyleElement=_(),m()(O.A,G),O.A&&O.A.locals&&O.A.locals;const j=n.p+"151dfdbca9628136ddd6.png",x=n.p+"d334398033a12c43b910.png",P=function(e){let{user:t}=e;const{t:n}=(0,u.B)(["main"]),[a,o]=r.useState({}),i=window.crawlear.fb,s=r.useRef({});let c=[];function l(e){o(e)}function d(e){s.current={...s.current,...e},o({...s.current})}function m(e){delete s.current[e],o({...s.current})}return r.useEffect((()=>{i.getUserGameRequests(t.uid,l,(()=>{}),d,m)}),[]),a&&Object.keys(a).forEach((e=>{c.push(r.createElement("div",{className:"gameRequestsItem smallText"},r.createElement("span",{className:"gameRequestsFrom"},n("description.peticionde"),": ",r.createElement("span",{className:"bold"},a[e].fromName)),r.createElement("div",{className:"gameRequestGameName"},n("description.parajuego"),": ",r.createElement("span",{className:"bold"},a[e].gameName)),r.createElement("span",{className:"acceptButton",onClick:()=>{i.acceptGameRequest(t.uid,e)}},r.createElement("img",{src:j,alt:"like icon"})),r.createElement("span",{className:"rejectButton",onClick:()=>{i.rejectGameRequest(t.uid,e)}},r.createElement("img",{src:x,alt:"dislike icon"}))))})),c.length>0?r.createElement("div",{className:"gameRequestsContainer rounded rounded1"},r.createElement("div",{className:"headerText bold"},n("description.peticionesdejuego")),c):r.createElement(r.Fragment,null)};var C=n(47732),T=n.n(C),A=n(83060),k=n.n(A),R=n(14876),S={};S.styleTagTransform=E(),S.setAttributes=b(),S.insert=w().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=_(),m()(R.A,S),R.A&&R.A.locals&&R.A.locals;const M=function(e){let{onConfigureGames:t,onGamePlay:n}=e;const{t:a}=(0,u.B)(["main"]),o=(0,i.Zp)(),[c,d,m,f,p,g,w]=T()();return r.createElement(r.Fragment,null,r.createElement("div",{className:"headerText bold sectionTitle"},a("description.secciondejuego")),r.createElement(P,{user:window.crawlear.user}),r.createElement(l(),{data:c,readOnly:!0,transformer:s.itemTransform,onRemoveItem:e=>{d(e)},onConfigureItem:e=>{t(c,e)},title:a("description.partidascomopiloto")}),r.createElement(l(),{data:m,title:a("description.partidasdejuez"),readOnly:!1,transformer:s.itemTransform,onItemAction:e=>{n(m,e)},onConfigureItem:e=>{t(m,e)},onRemoveItem:e=>{f(e)}}),r.createElement("button",{className:"newGameButton importantNote",onClick:function(){o("/gameconfigurator")}},a("description.crearjuego")),r.createElement(k(),{storedGames:p,onRemoveStoredGames:g,onConfigureGames:t,onLoadPreviousGames:w}))};var N=n(6108),I=n.n(N),B=n(58089);const q=function(){const[e,t]=r.useState(0),[n,i]=r.useState({}),u=I()(B.default,"/gameconfigurator","/");return r.useEffect((()=>(a.default.pageview("/completegame/"),window.document.body.classList.add("game"),()=>{window.document.body.classList.remove("game")})),[]),r.createElement(r.Fragment,null,0===e?r.createElement(M,{onConfigureGames:function(e,n){window.scrollTo(0,0),t(2),i(e[n])},onGamePlay:function(e,n){window.scrollTo(0,0),t(1),i(e[n])}}):1===e?r.createElement(o.default,{inGame:n,onBackButtonClick:function(){window.scrollTo(0,0),t(0),i({})}}):2===e?r.createElement(u,{preconfiguredGame:n}):r.createElement(r.Fragment,null))}},14876:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(31601),a=n.n(r),o=n(76314),i=n.n(o)()(a());i.push([e.id,".newGameContainer{margin-top:25px;width:95%}.newGameContainer .newGame{margin-bottom:25px;text-align:left;padding:15px 26px}.newGameContainer .newGame a{font-size:16px;margin-left:10px}.newGameContainer .newGameRow{padding:5px;font-size:.9em}.newGameContainer .newGameNameInput{max-width:164px}.newGameButton{margin:0 0 45px 0}.viewProfileLink{font-size:.8em;margin:0 auto 25px auto;border-radius:15px;padding:5px;width:70%}.profileHelper{margin-top:0;padding:15px;border:1px dotted #fff;font-size:.8em}",""]);const u=i},68689:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(31601),a=n.n(r),o=n(76314),i=n.n(o)()(a());i.push([e.id,".gameRequestsContainer{margin-bottom:25px;width:95%;display:inline-block}.gameRequestsContainer .gameRequestGameName{margin-bottom:15px}.gameRequestsContainer .gameRequestsItem{text-align:center;margin-bottom:15px}.gameRequestsContainer .acceptButton{margin:10px}.gameRequestsContainer .acceptButton img{width:25px}.gameRequestsContainer .rejectButton{margin:10px}.gameRequestsContainer .rejectButton img{width:25px}",""]);const u=i},71879:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(96540)),c=u(n(31413)),l=u(n(48298));t.default=function(e){var t=e.game,n=e.inGameProgression,a=s.useState(n),o=a[0],i=a[1],u=window.crawlear.fb;return s.useEffect((function(){o||u.getGameProgressionOnce(t.gid,(function(e,t){i(r({},t))}),(function(){}))}),[]),o?s.createElement(c.default,{game:t,gameProgression:o}):s.createElement(l.default,null)}},83060:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(96540)),s=n(32418),c=n(14139),l=i(n(75973)),d=i(n(48298));t.default=function(e){var t=e.storedGames,n=e.onRemoveStoredGames,r=e.onConfigureGames,a=e.onLoadPreviousGames,o=[],i=(0,s.useTranslation)(["main"]).t,m=u.useState(!1),f=m[0],p=m[1],g=f?u.createElement(d.default,null):u.createElement("button",{title:"loadButton",onClick:function(){p(!0),a(window.crawlear.user.uid)}},i("description.cargar"));return t.length>0?(f&&p(!1),o.push(u.createElement(l.default,{key:"previousGames",title:i("description.partidasprevias"),data:t,transformer:c.itemTransform,readOnly:!0,onRemoveItem:function(e){n(e)},onConfigureItem:function(e){r(t,e)}}))):o.push(u.createElement("div",{key:"noPreviousGames",className:"gameList rounded rounded3 centerText"},u.createElement("div",{className:"headerText bold"},i("description.partidasprevias")),g)),u.createElement(u.Fragment,null," ",o," ")}},47732:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){i.label=u[1];break}if(6===u[0]&&i.label<a[1]){i.label=a[1],a=u;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(u);break}a[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}},s=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var c=o(n(96540));function l(e,t,n){return i(this,void 0,void 0,(function(){var r,a,o,i;return u(this,(function(u){switch(u.label){case 0:return r=window.crawlear.fb,a=e[t],o=s([],e,!0),i=window.crawlear.user.uid,a.uids.indexOf(i)>=0?[4,r.removeIdFromGame(a,i,"uids")]:[3,2];case 1:a=u.sent(),u.label=2;case 2:return a.jids.indexOf(i)>=0?[4,r.removeIdFromGame(a,i,"jids")]:[3,4];case 3:a=u.sent(),u.label=4;case 4:return a.owner.indexOf(i)>=0?[4,r.removeIdFromGame(a,i,"owner")]:[3,6];case 5:a=u.sent(),u.label=6;case 6:return 0!==a.uids.length||0!==a.jids.length?[3,8]:[4,r.removeGame(a.gid)];case 7:u.sent(),u.label=8;case 8:return o.splice(t,1),n(o),[2]}}))}))}t.default=function(){var e=c.useState([]),t=e[0],n=e[1],r=c.useState([]),a=r[0],o=r[1],i=c.useState([]),u=i[0],d=i[1],m=c.useState([]),f=m[0],p=m[1],g=window.crawlear.fb,w=window.crawlear.fbBase;return c.useEffect((function(){w.isUserLogged()&&(g.getGamesFromUser(window.crawlear.user.uid,!1,(function(e){p((function(t){return s(s([],t,!0),e,!0)}))})),g.getGamesFromJudge(window.crawlear.user.uid,!1,(function(e){p((function(t){return s(s([],t,!0),e,!0)}))})))}),[]),c.useEffect((function(){!function(e){var t=[],r=[];e.forEach((function(e){e.jids.indexOf(window.crawlear.user.uid)>=0||e.owner.indexOf(window.crawlear.user.uid)>=0?t.push(e):e.uids.indexOf(window.crawlear.user.uid)>=0&&r.push(e)})),n(r),o(t)}(f)}),[f]),[t,function(e){l(t,e,n)},a,function(e){l(a,e,o)},u,function(e){l(u,e,d)},function(){g.getFinishedGamesFromUid(window.crawlear.user.uid,(function(e){d((function(t){return s(s([],t,!0),e,!0)}))}))}]}},82713:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(6108)),o=r(n(12124)),i=(0,a.default)(o.default);t.default=i},14139:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.itemTransform=t.gameListTransformer=void 0;var u=o(n(96540)),s=n(82155),c=i(n(41504)),l=i(n(71879)),d=n(788);function m(e){var t=u.createElement(u.Fragment,null),n="";return t=e.gameStatus===s.GAME_STATUS_CREATED||e.gameStatus===s.GAME_STATUS_PLAYING?u.createElement(l.default,{game:e}):u.createElement(c.default,{game:e}),d.GameUtils.isCurrentUserIsOwner(e.owner)&&(n="(D) "),{title:"".concat(n).concat(e.name," - ").concat(e.date),content:t}}t.gameListTransformer=function(e){var t=[];e.forEach((function(e){t.push(m(e))}))},t.itemTransform=m}}]);