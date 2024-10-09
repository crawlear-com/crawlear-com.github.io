"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[8706],{58089:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var n=a(96540),r=a(788),i=a(18492),o=a(85072),l=a.n(o),s=a(97825),c=a.n(s),u=a(77659),m=a.n(u),d=a(55056),p=a.n(d),g=a(10540),f=a.n(g),h=a(41113),y=a.n(h),v=a(17729),E={};E.styleTagTransform=y(),E.setAttributes=p(),E.insert=m().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=f(),l()(v.A,E),v.A&&v.A.locals&&v.A.locals;const x=function(e){let{onGameTypeChange:t,selectedGameType:a=0,selectedPointsType:r=0}=e;const{t:o}=(0,i.B)(["main"]),l=[o("gametype.aecar"),o("gametype.rey"),o("gametype.isrcc"),o("gametype.levante124"),o("gametype.copaespana"),o("gametype.minicrawlerpassion"),o("gametype.generic")],s=[n.createElement("div",null,o("gametype.modojuegoarcar")),n.createElement("div",null,o("gametype.modojuegorey")),n.createElement("div",null,o("gametype.modojuegoisrcc")),n.createElement("div",null,o("gametype.modojuegolevante124")),n.createElement("div",null,o("gametype.modojuegocopaespana")),n.createElement("div",null,o("gametype.modojuegominicrawlerpassion")),n.createElement("div",null,o("gametype.modojuegogeneric"))],[c,u]=n.useState({gameType:a}),m=[];return l.forEach(((e,t)=>{m.push(n.createElement("option",{key:t,value:t},l[t]))})),n.createElement(n.Fragment,null,n.createElement("div",{className:"gameType rounded1 rounded"},n.createElement("label",{htmlFor:"gameTypeSelect",className:"headerText bold"},o("gametype.modojuego"),n.createElement("select",{id:"gameTypeSelect",defaultValue:a,onChange:function(e){const a=e.target.selectedIndex;t&&t(a),u({gameType:a})}},m)),n.createElement("div",{className:"gameSelectText smallText"},s[c.gameType])))};var T=a(13717),b={};b.styleTagTransform=y(),b.setAttributes=p(),b.insert=m().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=f(),l()(T.A,b),T.A&&T.A.locals&&T.A.locals;const w=function(e){let{player:t,i:a,onRemovePlayer:r,onClickPlayer:o,onGroupChange:l,maxGroups:s,editMode:c,isForJudge:u,onGameDirectorChange:m}=e;const{t:d}=(0,i.B)(["main"]),p=[];if(c){const e=[];for(let t=0;t<s;t++)e.push(n.createElement("option",{value:t},d("description.grupo")," ",t+1));p.push(n.createElement("button",{className:"buttonControlTextMinus",id:a,onClick:function(e){e.stopPropagation(),r&&r(e)}},"-")),p.push(n.createElement("div",null,n.createElement("select",{value:t.group,onChange:function(e){const a=e.target.selectedIndex;l&&l(t.id,a)}},e))),u&&p.push(n.createElement(n.Fragment,null,n.createElement("input",{type:"checkbox",onChange:function(e){m&&m(t.id,e.target.checked)}}),n.createElement("span",{className:"PlayerItemGameDirector"},d("description.directordepartida"))))}return n.createElement("li",{key:a,onClick:function(){o&&o(t.id)},className:"closed importantNote rounded playerListItem",value:t.name},n.createElement("div",{className:"playerBox"},n.createElement("img",{referrerPolicy:"no-referrer",src:t.avatar,alt:"avatar"}),n.createElement("div",{className:"textOverflow"},t.name),p))};var C=a(6932),P=a(56760),A={};A.styleTagTransform=y(),A.setAttributes=p(),A.insert=m().bind(null,"head"),A.domAPI=c(),A.insertStyleElement=f(),l()(P.A,A),P.A&&P.A.locals&&P.A.locals;const G=a.p+"78b7bb4a554381a9ba80.png",N=function(e){let{onUserSeachPlayerAdd:t,onUserClick:a,onPlusAddUserClick:r,mainText:o,secondaryText:l,iconSend:s,children:c}=e;const u=window.crawlear.fb,m=window.crawlear.fbBase,{t:d}=(0,i.B)(["main"]),[p,g]=n.useState(""),[f,h]=n.useState([]),y=n.useRef(),v=n.useRef();function E(e){const a=e.target,n=a.getAttribute("data-uid"),r=a.getAttribute("data-displayname"),i=a.getAttribute("data-photourl");h([]),g(""),t&&t({uid:n,displayName:r,photoURL:i})}function x(e){const t=e.target.nextElementSibling.getAttribute("data-uid");a&&a(t)}const T=[];let b,w=0;return f.length>0&&(T.push(n.createElement("div",{key:w,className:"userSearchResultsText smallText"},l)),w++),f.forEach((e=>{let a=s;t&&e.uid===window.crawlear.user.uid&&(a=G),T.push(n.createElement("div",{className:"bold userSearchItem",key:w},n.createElement("span",{onClick:x,className:"userSearchResult textOverflow"},e.displayName),n.createElement("img",{src:a,alt:"send icon","data-uid":e.uid,"data-displayname":e.displayName,"data-photourl":e.photoURL,onClick:E}))),w++})),r&&(b=n.createElement("button",{className:"buttonControlTextPlus",onClick:()=>{const e=v.current.value;h([]),g(""),r({uid:"",displayName:e})}},"+")),n.createElement("div",{className:"userSearchContainer rounded rounded3"},!C.isOffline||r?n.createElement(n.Fragment,null,n.createElement("div",{className:"userSearchText smallText"},o),n.createElement("input",{id:Date.now(),ref:v,className:"userSearchName",onChange:function(e){const t=e.target.value;g(t),!C.isOffline&&m.isUserLogged()&&(t.length>0?u.userSearch(t,(e=>{h(e)}),(()=>{})):h([]))},value:p})):n.createElement(n.Fragment,null),b,c,n.createElement("div",{ref:y,className:"resultsContainer"},T))},S=a.p+"9f5743cc8ab0daaa6f24.png",k=function(e){let{onUserSeachPlayerAdd:t,gameName:a,isForJudge:r}=e;const o=window.crawlear.fb,l=window.crawlear.fbBase,{t:s}=(0,i.B)(["main"]),c=n.useRef(0),[u,m]=n.useState(0),d=[];return c.current>0&&d.push(n.createElement("div",{key:0},c.current," ",s("description.peticionespendientes"))),n.createElement(N,{onUserSeachPlayerAdd:function(e){let{uid:n,displayName:r,photoURL:i}=e;if(n&&(n===window.crawlear.user.uid||window.confirm(s("content.peticionjuegoconfirmacion"))))if(n===window.crawlear.user.uid){const e=window.crawlear.user;t({uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,group:0})}else o.setUserGameRequest(window.crawlear.user.uid,window.crawlear.user.displayName,n,a,((e,a)=>{"pending"===a?(c.current+=1,m(u+1)):"accepted"===a?(t({uid:n,displayName:r,photoURL:i,group:0}),c.current-=1,m(u-1)):(c.current-=1,m(u-1))}))},onPlusAddUserClick:r?void 0:t,mainText:l.isUserLogged()?s("content.usuariodesistema"):s("content.usuarionosistema"),secondaryText:"".concat(s("content.enviorequest"),". ").concat(s("content.enviorequest2")),iconSend:S},d)};var _=a(38791),j=a(42298),M={};M.styleTagTransform=y(),M.setAttributes=p(),M.insert=m().bind(null,"head"),M.domAPI=c(),M.insertStyleElement=f(),l()(j.A,M),j.A&&j.A.locals&&j.A.locals;const O=function(e){let{inPlayers:t,onPlayerNumerChange:a,onGameDirectorChange:r,gameName:o,isForJudge:l,maxGroups:s}=e;const[c,u]=n.useState(t||[]),{t:m}=(0,i.B)(["main"]);function d(e){_.default.event("menu","removePlayer",c[e.target.id].name),delete c[e.target.id];const t=c.filter((e=>e));u(t),a&&a(t)}function p(e,t){const a=[...c];a[e].group=t,u(a)}function g(e,t){r&&r(e,t)}n.useEffect((()=>{a&&a(c)}),[c]);let f=c.length?m("description.jugadores"):m("description.nojugadores");return l&&(f=c.length?m("description.jueces"):m("description.nojueces")),n.createElement(n.Fragment,null,n.createElement("div",{className:"players rounded rounded1"},n.createElement("div",{className:"headerText bold"},m(l?"description.jueces":"description.jugadores")),n.createElement(k,{isForJudge:l,onUserSeachPlayerAdd:function(e){const t=e.displayName;!t||0===t.trim().length||c.find((t=>t.uid===e.uid&&e.uid.length>0))||l&&!e.uid||(c.push({id:c.length,uid:e.uid||"",name:t,avatar:e.photoURL||"".concat("https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=").concat(t),group:0,time:0,points:0,battery:!1}),_.default.event("menu","addPlayer",t),a&&a(c))},gameName:o}),n.createElement("div",{className:"headerText"},m(l?"description.juecesenpartida":"description.usuariosenpartida")),n.createElement("ul",{className:"playersList"},0===c.length?f:c.map(((e,t)=>n.createElement(w,{key:t,player:e,i:t,onGameDirectorChange:g,maxGroups:s,onGroupChange:p,editMode:!0,isForJudge:l,onRemovePlayer:d}))))))};var I=a(8906),R=a(96976),F={};F.styleTagTransform=y(),F.setAttributes=p(),F.insert=m().bind(null,"head"),F.domAPI=c(),F.insertStyleElement=f(),l()(R.A,F),R.A&&R.A.locals&&R.A.locals;const U=function(e){let{onMaxTimeChange:t,minutes:a,seconds:r}=e;const i=[a,r];function o(e,a){const n=[...i];n[a]=e,e=function(e){const t=Number(e[0])||0;return 1e3*(Number(e[1])||0)+60*t*1e3}(n),t&&t(e)}return n.createElement("div",{className:"pickerContainer rounded rounded2"},n.createElement(I.A,{value:i[0],initialValue:0,minValue:0,maxValue:60,callback:e=>{o(e,0)}}),n.createElement("div",{className:"maxTimePickerContainer--separator"},"m"),n.createElement(I.A,{value:i[1],initialValue:0,minValue:0,maxValue:60,callback:e=>{o(e,1)}}),n.createElement("div",{className:"maxTimePickerContainer--separator"},"s"))};var V=a(55038);const L=function(e){let{onMaxTimeChange:t,onMaxPointsChange:a,showTimePicker:r,time:o,points:l}=e;const{t:s}=(0,i.B)(["main"]),c=V.default.millisToTime(o);let u=n.createElement(n.Fragment,null);return r&&(u=n.createElement(n.Fragment,null,n.createElement("p",null,s("content.maxTimeText1")),n.createElement(U,{onMaxTimeChange:t,onMaxPointsChange:a,minutes:c.m,seconds:c.s,millis:c.mm}))),n.createElement("div",null,u,n.createElement("p",null,s("content.maxTimeText2")),n.createElement("div",{className:"pickerContainer rounded rounded2"},n.createElement(I.A,{value:l,minValue:0,initialValue:0,callback:e=>{a(e)}})))},B=function(e){let{onZonesChange:t,value:a=1}=e;const{t:r}=(0,i.B)(["main"]);return n.createElement("div",null,n.createElement("p",null,r("content.seleccionZonas"),":"),n.createElement("div",{className:"pickerContainer rounded rounded2"},n.createElement(I.A,{value:a,minValue:1,maxValue:40,callback:e=>{t(e)},initialValue:1})))},D=function(e){let{onGroupsChange:t,value:a,minValue:r,maxValue:o}=e;const{t:l}=(0,i.B)(["main"]);return C.isOffline?n.createElement(n.Fragment,null):n.createElement("div",null,n.createElement("p",null,l("content.selecciongrupos"),":"),n.createElement("div",{className:"pickerContainer horizontalScrollContainer rounded rounded2"},n.createElement(I.A,{minValue:r||1,maxValue:o||10,value:a,callback:e=>{t(e)},initialValue:1})))},z=function(e){let{onGatesChange:t,zones:a,value:r,minValue:o,maxValue:l}=e;const{t:s}=(0,i.B)(["main"]),c=[];for(let e=0;e<a;e++)c.push(n.createElement("div",{key:"pickerContainer".concat(e)},n.createElement("div",{key:e,className:"zoneName"},s("description.zona")," ",e+1,":"),n.createElement("br",{key:"br".concat(e)}),n.createElement(I.A,{key:"picker".concat(e),minValue:o||1,maxValue:l||40,value:r,callback:a=>{t(a,e)},initialValue:1})));return n.createElement("div",null,n.createElement("p",null,s("content.seleccionPuertas"),":"),n.createElement("div",{className:"gatesPickerContainer pickerContainer horizontalScrollContainer rounded rounded2"},c))};var Y=a(34816),J=a(12996),K=a.n(J),Z=a(93899),q=a.n(Z),W=a(304),H={};H.styleTagTransform=y(),H.setAttributes=p(),H.insert=m().bind(null,"head"),H.domAPI=c(),H.insertStyleElement=f(),l()(W.A,H),W.A&&W.A.locals&&W.A.locals;const Q=function(e){let{preconfiguredGame:t,onGameCreated:a}=e;const{t:o}=(0,i.B)(["main"]),l=[];n.useEffect((()=>{_.default.pageview("/gameconfigurator")}),[]);const[s,c,u,m,d,p,g,f,h,y,v,E,T,b,w,P,A]=q()({preconfiguredGame:t,onGameCreated:a});return l.push(n.createElement(L,{key:0,mode:s.pointsType,onMaxPointsChange:f,onMaxTimeChange:h,time:s.maxTime,points:s.maxPoints,showTimePicker:!0})),s.gameType!==r.GAME_TYPE_KING&&(l.push(n.createElement(B,{key:1,game:s,value:s.zones,onZonesChange:y,onGatesChange:v,onMaxPointsChange:f,onMaxTimeChange:h})),l.push(n.createElement(z,{key:2,zones:s.zones,value:10,onGatesChange:v})),l.push(n.createElement(D,{key:3,onGroupsChange:T,value:1,minValue:1,maxValue:10})),C.isOffline||l.push(n.createElement(O,{key:4,isForJudge:!0,maxGroups:u,inPlayers:s.judges,gameName:s.name,onGameDirectorChange:w,onPlayerNumerChange:p}))),n.createElement(n.Fragment,null,n.createElement(Y.default,{message:c}),n.createElement("div",{className:"newGameContainer rounded rounded1"},n.createElement("div",{className:"newGame"},n.createElement("div",{className:"headerText bold"},o("description.nuevaPartida")),n.createElement("div",{className:"newGameRow"},n.createElement("span",{className:""},o("description.nombre")),": ",n.createElement("input",{value:s.name,className:"newGameNameInput",type:"text",onChange:E})),n.createElement("div",{className:"newGameRow"},n.createElement("span",{className:""},o("description.fecha")),": ",s.date.toLocaleString()),n.createElement("div",{className:"newGameRow"},n.createElement("span",{className:""},o("description.esPublica")),": ",n.createElement("input",{type:"checkbox",checked:s.isPublic,onChange:b})),n.createElement("div",{className:"newGameRow"},n.createElement("span",{className:""},o("description.localizacion")),":",n.createElement(K(),{onLocationResolved:d})))),n.createElement(x,{selectedGameType:s.gameType,selectedPointsType:s.pointsType,onGameTypeChange:e=>{m(e)}}),l,n.createElement(O,{gameName:s.name,isForJudge:!1,inPlayers:s.players,maxGroups:u,onPlayerNumerChange:e=>{g&&g(e)}}),n.createElement("input",{type:"checkbox",onChange:P}),o("description.ordenRamdomJugadores"),n.createElement("p",null,n.createElement("button",{className:"importantNote",onClick:()=>{A(u,s)}},o("description.crearjuego")),n.createElement("button",{onClick:()=>{window.location.reload()}},o("description.atras"))))}},304:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".gatesPickerContainer .picker,.gatesPickerContainer .zoneName{margin:0 15px}",""]);const l=o},17729:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".gameType{margin:25px 0}.gameSelectText{line-height:1.5;font-size:16px;padding:25px;text-align:left;margin-bottom:15px;text-align:justify}",""]);const l=o},96976:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".pickerContainer{display:flex;font-size:18px;padding:15px;margin:15px}.maxTimePickerContainer--separator{max-width:40px;height:112px;line-height:112px}",""]);const l=o},42298:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".players{margin-bottom:25px;padding-bottom:15px}.playersList{margin:10px;padding:0}.playerListItem{margin-bottom:10px;line-height:42px;text-align:right;padding-right:10px}",""]);const l=o},13717:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".playerListItem.closed{width:auto;height:155px;overflow:hidden}.pickerContainer.handicapBox{margin:5px;padding:25px}.playerBox .textOverflow{max-width:190px;display:inline-block}.playerBox button{float:right}.handicapBox .handicapLabel{width:50%;text-align:center;line-height:6}.textOverflow{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}",""]);const l=o},56760:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".userSearchContainer img{margin:5px 0 5px 5px}.userSearchContainer .userSearchResultsText{margin-bottom:15px}.userSearchContainer .userSearchText{padding:25px}.userSearchContainer .resultsContainer{border:1px solid;width:85%;border-radius:14px;padding:15px;margin-top:15px}.userSearchContainer .resultsContainer .userSearchItem{text-align:right}.userSearchContainer .resultsContainer .userSearchItem .userSearchResult{max-width:230px;display:block;float:left}.userSearchContainer .resultsContainer .userSearchItem button{float:left;margin:0 0 0 5px}.userSearchContainer .resultsContainer:empty{border:0px solid}",""]);const l=o},36236:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=a(42578),r=a(46662),i=a(3442),o=a(77267),l=a(43841),s=a(98784),c=a(90598),u=a(788),m={getMaxTimeAndPointsFromGameType:function(e){var t=0,a=0;switch(e){case u.GAME_TYPE_AECAR:t=n.AecarGameScores.maxPoints,a=n.AecarGameScores.maxTime;break;case u.GAME_TYPE_KING:t=l.KingGameScores.maxPoints,a=l.KingGameScores.maxTime;break;case u.GAME_TYPE_ISRCC:t=r.IsrccGameScores.maxPoints,a=r.IsrccGameScores.maxTime;break;case u.GAME_TYPE_LEVANTE:t=i.Levante124GameScores.maxPoints,a=i.Levante124GameScores.maxTime;break;case u.GAME_TYPE_COPAESPANA:t=o.RegionalZonaRcGameScores.maxPoints,a=o.RegionalZonaRcGameScores.maxTime;break;case u.GAME_TYPE_MINICRAWLERPASSION:t=s.MiniCrawlerPassionGameScores.maxPoints,a=s.MiniCrawlerPassionGameScores.maxTime;break;case u.GAME_TYPE_GENERIC:t=c.GenericGameScores.maxPoints,a=c.GenericGameScores.maxTime;break;default:t=0,a=0}return[a,t]}};t.default=m},12996:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(96540)),s=o(a(48298)),c=o(a(55038)),u=a(32418);t.default=function(e){var t,a=e.onLocationResolved,n=l.useState(0),r=n[0],i=n[1],o=l.useState({latitude:0,longitude:0}),m=o[0],d=o[1],p=(0,u.useTranslation)(["main"]).t;return navigator.geolocation?0===r?t=l.createElement("a",{className:"bold",href:"https://crawlear.com",onClick:function(e){e.preventDefault(),navigator.geolocation?(i(2),navigator.geolocation.getCurrentPosition((function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};a(t),i(1),d(t)}),(function(){a({}),i(0)}))):i(0)}},p("description.obtener")):2===r?t=l.createElement(s.default,null):1===r&&(t=l.createElement(l.Fragment,null,l.createElement("span",null,"(","".concat(m.latitude,",").concat(m.longitude),")"),l.createElement("a",{href:c.default.getMapsURL(m.latitude,m.longitude),rel:"noreferrer",target:"_blank"},p("description.vergooglemaps")))):t=l.createElement("div",{className:""},p("content.nogeolocation")),t}},93899:function(e,t,a){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return i(t,e),t},l=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var n,r=0,i=t.length;r<i;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(a(96540)),u=a(788),m=a(788),d=s(a(36236)),p=a(6932),g=a(84976),f=a(32418),h=s(a(38791)),y=s(a(55038));t.default=function(e){var t=e.preconfiguredGame,a=e.onGameCreated,r=c.useState((function(){var e=t||new u.Game("",(new Date).toLocaleDateString(),{latitude:0,longitude:0},!0,m.GAME_TYPE_LEVANTE,[],[],6e5,40,new Array(1).fill(10),1,0,[],[],[]);return e.date=(new Date).toLocaleDateString(),e})),i=r[0],o=r[1],s=(0,g.useNavigate)(),v=c.useState(""),E=v[0],x=v[1],T=c.useState(!1),b=T[0],w=T[1],C=c.useState(1),P=C[0],A=C[1],G=(0,f.useTranslation)(["main"]).t,N=window.crawlear.fb;function S(e){var t=n({},i),a="addJudge";i.judges.length>e.length&&(a="removeJudge"),h.default.event("menu",a,e.length),t.judges=l([],e,!0),p.isOffline&&!t.owner.length&&t.owner.push(m.OFFLINE_USER_UID),o(t),x("")}return c.useEffect((function(){window.scrollTo(0,0),p.isOffline&&S([u.OfflinePlayer])}),[]),[i,E,P,function(e){var t,a=n({},i);h.default.event("menu","playModeChange",e),a.gameType=e,t=d.default.getMaxTimeAndPointsFromGameType(a.gameType),a.maxTime=t[0],a.maxPoints=t[1],o(a)},function(e){if(e.latitude&&e.longitude){var t=n({},i);t.location=e,o(t)}else x(G("error.nogeolocation"))},S,function(e){var t=n({},i),a="addPlayer";i.players.length>e.length&&(a="removePlayer"),h.default.event("menu",a,e.length),t.players=l([],e,!0),o(t),x("")},function(e){var t=n({},i);h.default.event("menu","maxPointsSet",e),t.maxPoints=e,o(t)},function(e){var t=n({},i);t.maxTime=e,h.default.event("menu","maxTimeSet",e),o(t)},function(e){var t=n({},i);i.zones<e?t.gates.push(10):t.gates.pop(),t.zones=e,h.default.event("menu","zonesSet",e),o(t)},function(e,t){var a=n({},i);a.gates[t]=e,h.default.event("menu","gateSet",e),o(a)},function(e){var t=n({},i),a=e.target.value;a&&(t.name=a,o(t),x(""))},function(e){A(e)},function(e){var t=n({},i);t.isPublic=e.target.value,o(t)},function(e,t){var a=i.judges[e].uid,r=n({},i);if(t&&!r.owner.find((function(e){return e===a})))r.owner.push(a),o(r);else if(!t&&r.owner.find((function(e){return e===a}))){var l=r.owner.indexOf(a);r.owner.splice(l,1),o(r)}},function(e){var t=e.target.checked;w(t)},function(e,t){var r=function(e,t){for(var a=new Array(e).fill(0),n=0;n<t.players.length;n++)a[t.players[n].group]++;return void 0===a.find((function(e){return 0===e}))}(e,t);if(window.scrollTo(0,0),t.name&&t.name.length)if(r)if(t.judges.length||t.gameType===m.GAME_TYPE_KING)if(t.players.length)if(t.gameType===m.GAME_TYPE_KING||t.owner.length){if(t.gameType!==m.GAME_TYPE_KING&&r||t.gameType===m.GAME_TYPE_KING){var i=n({},t);t.gameType===m.GAME_TYPE_KING&&(i.judges.push(n({},window.crawlear.user)),i.zones=1,i.gates=new Array(1).fill(1)),i.uids=y.default.getUidsFromUsers(i.players),i.jids=y.default.getUidsFromUsers(i.judges),b&&function(e){if(e.players.length){var t=l([],e.players,!0);t=t.sort((function(e,t){return Math.random()-.5})),e.players=t,u.GameUtils.redoPlayersIds(e)}}(i),u.GameUtils.init(i,u.GameUtils.getGameTypeControlTextValuesInit(i.gameType),u.GameUtils.getGameTypeFiascoControlTextValuesInit(i.gameType),!0),p.isOffline&&a?a(i):N.setGame(i,(function(e){i.gid=e.gid,N.createGameProgression(i),o(i),s("/game")}),(function(){}))}}else x(G("error.nodirectordepartida"));else x(G("error.nojugadores"));else x(G("error.nojueces"));else x(G("error.rellenargrupos"));else x(G("error.nonombre"))}]}}}]);