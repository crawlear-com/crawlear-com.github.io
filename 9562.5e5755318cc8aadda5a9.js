"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[9562],{80473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(96540),r=n(18492),o=n(27532),i=n.n(o),l=n(85072),c=n.n(l),u=n(97825),s=n.n(u),d=n(77659),m=n.n(d),f=n(55056),p=n.n(f),g=n(10540),h=n.n(g),v=n(41113),y=n.n(v),b=n(17729),E={};E.styleTagTransform=y(),E.setAttributes=p(),E.insert=m().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=h(),c()(b.A,E),b.A&&b.A.locals&&b.A.locals;const _=function(e){let{onGameTypeChange:t,selectedGameType:n=0}=e;const{t:o}=(0,r.B)(["main"]),[l,c,u]=i()(n,t),s=[a.createElement("div",null,o("gametype.modojuegoarcar")),a.createElement("div",null,o("gametype.modojuegorey")),a.createElement("div",null,o("gametype.modojuegoisrcc")),a.createElement("div",null,o("gametype.modojuegolevante124")),a.createElement("div",null,o("gametype.modojuegocopaespana")),a.createElement("div",null,o("gametype.modojuegominicrawlerpassion")),a.createElement("div",null,o("gametype.modojuegogeneric"))];return a.createElement(a.Fragment,null,a.createElement("div",{className:"gameType rounded1 rounded"},a.createElement("label",{htmlFor:"gameTypeSelect",className:"headerText bold"},o("gametype.modojuego"),a.createElement("select",{id:"gameTypeSelect",defaultValue:n,onChange:u},c)),a.createElement("div",{className:"gameSelectText smallText"},s[l])))}},51986:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(96540),r=n(18492),o=n(8906);const i=function(e){let{onGatesChange:t,zones:n,value:i,minValue:l=1,maxValue:c=40}=e;const{t:u}=(0,r.B)(["main"]),s=[];for(let e=0;e<n;e++)s.push(a.createElement("div",{key:"pickerContainer".concat(e)},a.createElement("div",{key:e,className:"zoneName"},u("description.zona")," ",e+1,":"),a.createElement("br",{key:"br".concat(e)}),a.createElement(o.A,{key:"picker".concat(e),minValue:l,maxValue:c,value:i,callback:n=>{t(n,e)},initialValue:1})));return a.createElement("div",null,a.createElement("p",null,u("content.seleccionPuertas"),":"),a.createElement("div",{className:"gatesPickerContainer pickerContainer horizontalScrollContainer rounded rounded2"},s))}},18626:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(96540),r=n(18492),o=n(8906),i=n(6932);const l=function(e){let{onGroupsChange:t,value:n,minValue:l,maxValue:c}=e;const{t:u}=(0,r.B)(["main"]);return i.isOffline?a.createElement(a.Fragment,null):a.createElement("div",null,a.createElement("p",null,u("content.selecciongrupos"),":"),a.createElement("div",{className:"pickerContainer horizontalScrollContainer rounded rounded2"},a.createElement(o.A,{minValue:l||1,maxValue:c||10,value:n,callback:e=>{t(e)},initialValue:1})))}},44831:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(96540),r=n(18492),o=n(8906),i=n(85072),l=n.n(i),c=n(97825),u=n.n(c),s=n(77659),d=n.n(s),m=n(55056),f=n.n(m),p=n(10540),g=n.n(p),h=n(41113),v=n.n(h),y=n(96976),b={};b.styleTagTransform=v(),b.setAttributes=f(),b.insert=d().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=g(),l()(y.A,b),y.A&&y.A.locals&&y.A.locals;const E=function(e){let{onMaxTimeChange:t,minutes:n,seconds:r}=e;const i=[n,r];function l(e,n){const a=[...i];a[n]=e,e=function(e){const t=Number(e[0])||0;return 1e3*(Number(e[1])||0)+60*t*1e3}(a),t&&t(e)}return a.createElement("div",{className:"pickerContainer rounded rounded2"},a.createElement(o.A,{value:i[0],initialValue:0,minValue:0,maxValue:60,callback:e=>{l(e,0)}}),a.createElement("div",{className:"maxTimePickerContainer--separator"},"m"),a.createElement(o.A,{value:i[1],initialValue:0,minValue:0,maxValue:60,callback:e=>{l(e,1)}}),a.createElement("div",{className:"maxTimePickerContainer--separator"},"s"))};var _=n(55038);const x=function(e){let{onMaxTimeChange:t,onMaxPointsChange:n,showTimePicker:i,time:l,points:c}=e;const{t:u}=(0,r.B)(["main"]),s=_.default.millisToTime(l);let d=a.createElement(a.Fragment,null);return i&&(d=a.createElement(a.Fragment,null,a.createElement("p",null,u("content.maxTimeText1")),a.createElement(E,{onMaxTimeChange:t,onMaxPointsChange:n,minutes:s.m,seconds:s.s,millis:s.mm}))),a.createElement("div",null,d,a.createElement("p",null,u("content.maxTimeText2")),a.createElement("div",{className:"pickerContainer rounded rounded2"},a.createElement(o.A,{value:c,minValue:0,initialValue:0,callback:e=>{n(e)}})))}},95781:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(96540),r=n(18492),o=n(85072),i=n.n(o),l=n(97825),c=n.n(l),u=n(77659),s=n.n(u),d=n(55056),m=n.n(d),f=n(10540),p=n.n(f),g=n(41113),h=n.n(g),v=n(13717),y={};y.styleTagTransform=h(),y.setAttributes=m(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),i()(v.A,y),v.A&&v.A.locals&&v.A.locals;const b=function(e){let{player:t,i:n,onRemovePlayer:o,onClickPlayer:i,onGroupChange:l,maxGroups:c,editMode:u,isForJudge:s,onGameDirectorChange:d}=e;const{t:m}=(0,r.B)(["main"]),f=[];if(u){const e=[];for(let n=0;n<c;n++)e.push(a.createElement("option",{key:"group".concat(t.name).concat(n),value:n},m("description.grupo")," ",n+1));f.push(a.createElement("button",{key:"remove".concat(t.name).concat(n),className:"buttonControlTextMinus",id:n,onClick:function(e){e.stopPropagation(),o&&o(e)}},"-")),f.push(a.createElement("div",{key:"groupSelection".concat(t.name).concat(n)},a.createElement("select",{value:t.group,onChange:function(e){const n=e.target.selectedIndex;l&&l(t.id,n)}},e))),s&&f.push(a.createElement("div",{key:"gameDirectorCheck{player.name}".concat(n)},a.createElement("input",{type:"checkbox",onChange:function(e){d&&d(t.id,e.target.checked)}}),a.createElement("span",{className:"PlayerItemGameDirector"},m("description.directordepartida"))))}return a.createElement("li",{key:t.name,onClick:function(){i&&i(t.id)},className:"closed importantNote rounded playerListItem",value:t.name},a.createElement("div",{className:"playerBox"},a.createElement("img",{referrerPolicy:"no-referrer",src:t.avatar,alt:"avatar"}),a.createElement("div",{className:"textOverflow"},t.name),f))};var E=n(5110),_=n.n(E);n(74469);const x=n.p+"9f5743cc8ab0daaa6f24.png",P=function(e){let{onUserSeachPlayerAdd:t,gameName:n,isForJudge:o}=e;const i=window.crawlear.fb,l=window.crawlear.fbBase,{t:c}=(0,r.B)(["main"]),u=a.useRef(0),[s,d]=a.useState(0),m=[];return u.current>0&&m.push(a.createElement("div",{key:0},u.current," ",c("description.peticionespendientes"))),a.createElement(_(),{onUserSeachPlayerAdd:function(e){let{uid:a,displayName:r,photoURL:o}=e;if(a&&(a===window.crawlear.user.uid||window.confirm(c("content.peticionjuegoconfirmacion"))))if(a===window.crawlear.user.uid){const e=window.crawlear.user;t({uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,group:0})}else i.setUserGameRequest(window.crawlear.user.uid,window.crawlear.user.displayName,a,n,((e,n)=>{"pending"===n?(u.current+=1,d(s+1)):"accepted"===n?(t({uid:a,displayName:r,photoURL:o,group:0}),u.current-=1,d(s-1)):(u.current-=1,d(s-1))}))},onPlusAddUserClick:o?void 0:t,mainText:l.isUserLogged()?c("content.usuariodesistema"):c("content.usuarionosistema"),secondaryText:"".concat(c("content.enviorequest"),". ").concat(c("content.enviorequest2")),iconSend:x},m)};var w=n(38791),C=n(42298),T={};T.styleTagTransform=h(),T.setAttributes=m(),T.insert=s().bind(null,"head"),T.domAPI=c(),T.insertStyleElement=p(),i()(C.A,T),C.A&&C.A.locals&&C.A.locals;const N=function(e){let{inPlayers:t,onPlayerNumerChange:n,onGameDirectorChange:o,gameName:i,isForJudge:l,maxGroups:c}=e;const[u,s]=a.useState(t||[]),{t:d}=(0,r.B)(["main"]);function m(e){w.default.event("menu","removePlayer",u[e.target.id].name),delete u[e.target.id];const t=u.filter((e=>e));s(t),n&&n(t)}function f(e,t){const n=[...u];n[e].group=t,s(n)}function p(e,t){o&&o(e,t)}let g=u.length?d("description.jugadores"):a.createElement("div",{className:"formError"},d("error.nojugadores")," ");return l&&(g=u.length?d("description.jueces"):a.createElement("div",{className:"formError"},d("description.nojueces")," ")),a.createElement(a.Fragment,null,a.createElement("div",{className:"players rounded rounded1"},a.createElement("div",{className:"headerText bold"},d(l?"description.jueces":"description.jugadores")),a.createElement(P,{isForJudge:l,onUserSeachPlayerAdd:function(e){const t=e.displayName;!t||0===t.trim().length||u.find((t=>t.uid===e.uid&&e.uid.length>0))||l&&!e.uid||(u.push({id:u.length,uid:e.uid||"",name:t,avatar:e.photoURL||"".concat("https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=").concat(t),group:0,time:0,points:0,battery:!1}),w.default.event("menu","addPlayer",t),n&&n(u))},gameName:i}),a.createElement("div",{className:"headerText"},d(l?"description.juecesenpartida":"description.usuariosenpartida")),a.createElement("ul",{className:"playersList"},0===u.length?g:u.map(((e,t)=>a.createElement(b,{key:e.name,player:e,i:t,onGameDirectorChange:p,maxGroups:c,onGroupChange:f,editMode:!0,isForJudge:l,onRemovePlayer:m}))))))}},86915:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(96540),r=n(18492),o=n(8906);const i=function(e){let{onZonesChange:t,value:n=1}=e;const{t:i}=(0,r.B)(["main"]);return a.createElement("div",null,a.createElement("p",null,i("content.seleccionZonas"),":"),a.createElement("div",{className:"pickerContainer rounded rounded2"},a.createElement(o.A,{value:n,minValue:1,maxValue:40,callback:e=>{t(e)},initialValue:1})))}},58294:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var a=n(96540),r=n(80473),o=n(95781),i=n(34816),l=n(18492),c=n(93899),u=n.n(c),s=n(99431),d=n.n(s),m=n(24276),f=n.n(m),p=n(38791),g=n(85072),h=n.n(g),v=n(97825),y=n.n(v),b=n(77659),E=n.n(b),_=n(55056),x=n.n(_),P=n(10540),w=n.n(P),C=n(41113),T=n.n(C),N=n(304),A={};A.styleTagTransform=T(),A.setAttributes=x(),A.insert=E().bind(null,"head"),A.domAPI=y(),A.insertStyleElement=w(),h()(N.A,A),N.A&&N.A.locals&&N.A.locals;const G=function(e){let{preconfiguredGame:t,onGameCreated:n}=e;const{t:c}=(0,l.B)(["main"]);a.useEffect((()=>{p.default.pageview("/gameconfigurator")}),[]);const[s,m,g,h,v,y,b,E,_,x,P,w,C,T,N,A,G]=u()({preconfiguredGame:t,onGameCreated:n});return a.createElement(a.Fragment,null,a.createElement(i.default,{message:m}),a.createElement(f(),{game:s,onIsPublicChange:T,onLocationResolved:v,onNameChange:w}),a.createElement(r.default,{selectedGameType:s.gameType,selectedPointsType:s.pointsType,onGameTypeChange:e=>{h(e)}}),a.createElement(d(),{onGameDirectorChange:N,onGameTypeChange:h,onGatesChange:P,onGroupsChange:C,onJudgeNumerChange:y,onMaxPointsChange:E,onMaxTimeChange:_,onZonesChange:x,groups:g,game:s}),a.createElement(o.default,{gameName:s.name,isForJudge:!1,inPlayers:s.players,maxGroups:g,onPlayerNumerChange:e=>{b&&b(e)}}),a.createElement("input",{type:"checkbox",onChange:A}),c("description.ordenRamdomJugadores"),a.createElement("p",null,a.createElement("button",{className:"importantNote",disabled:!(s.name&&s.name.length&&s.players.length&&s.judges.length),onClick:()=>{G(g,s)}},c("description.crearjuego")),a.createElement("button",{onClick:()=>{window.location.reload()}},c("description.atras"))))}},304:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".gatesPickerContainer .picker,.gatesPickerContainer .zoneName{margin:0 15px}",""]);const l=i},17729:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".gameType{margin:25px 0}.gameSelectText{line-height:1.5;font-size:16px;padding:25px;text-align:left;margin-bottom:15px;text-align:justify}",""]);const l=i},96976:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".pickerContainer{display:flex;font-size:18px;padding:15px;margin:15px}.maxTimePickerContainer--separator{max-width:40px;height:112px;line-height:112px}",""]);const l=i},42298:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".players{margin-bottom:25px;padding-bottom:15px}.playersList{margin:10px;padding:0}.playerListItem{margin-bottom:10px;line-height:42px;text-align:right;padding-right:10px}",""]);const l=i},13717:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".playerListItem.closed{width:auto;height:155px;overflow:hidden}.pickerContainer.handicapBox{margin:5px;padding:25px}.playerBox .textOverflow{max-width:190px;display:inline-block}.playerBox button{float:right}.handicapBox .handicapLabel{width:50%;text-align:center;line-height:6}.textOverflow{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}",""]);const l=i},56760:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(31601),r=n.n(a),o=n(76314),i=n.n(o)()(r());i.push([e.id,".userSearchContainer img{margin:5px 0 5px 5px}.userSearchContainer .userSearchResultsText{margin-bottom:15px}.userSearchContainer .userSearchText{padding:25px}.userSearchContainer .resultsContainer{border:1px solid;width:85%;border-radius:14px;padding:15px;margin-top:15px}.userSearchContainer .resultsContainer .userSearchItem{text-align:right}.userSearchContainer .resultsContainer .userSearchItem .userSearchResult{max-width:230px;display:block;float:left}.userSearchContainer .resultsContainer .userSearchItem button{float:left;margin:0 0 0 5px}.userSearchContainer .resultsContainer:empty{border:0px solid}",""]);const l=i},74469:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(85072),r=n.n(a),o=n(97825),i=n.n(o),l=n(77659),c=n.n(l),u=n(55056),s=n.n(u),d=n(10540),m=n.n(d),f=n(41113),p=n.n(f),g=n(56760),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=m(),r()(g.A,h);const v=g.A&&g.A.locals?g.A.locals:void 0},36236:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=n(42578),r=n(46662),o=n(3442),i=n(77267),l=n(43841),c=n(98784),u=n(90598),s=n(788),d={getMaxTimeAndPointsFromGameType:function(e){var t=0,n=0;switch(e){case s.GAME_TYPE_AECAR:t=a.AecarGameScores.maxPoints,n=a.AecarGameScores.maxTime;break;case s.GAME_TYPE_KING:t=l.KingGameScores.maxPoints,n=l.KingGameScores.maxTime;break;case s.GAME_TYPE_ISRCC:t=r.IsrccGameScores.maxPoints,n=r.IsrccGameScores.maxTime;break;case s.GAME_TYPE_LEVANTE:t=o.Levante124GameScores.maxPoints,n=o.Levante124GameScores.maxTime;break;case s.GAME_TYPE_COPAESPANA:t=i.RegionalZonaRcGameScores.maxPoints,n=i.RegionalZonaRcGameScores.maxTime;break;case s.GAME_TYPE_MINICRAWLERPASSION:t=c.MiniCrawlerPassionGameScores.maxPoints,n=c.MiniCrawlerPassionGameScores.maxTime;break;case s.GAME_TYPE_GENERIC:t=u.GenericGameScores.maxPoints,n=u.GenericGameScores.maxTime;break;default:t=0,n=0}return[n,t]}};t.default=d},24276:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=n(32418),u=i(n(12996));t.default=function(e){var t=e.game,n=e.onNameChange,a=e.onIsPublicChange,r=e.onLocationResolved,o=(0,c.useTranslation)(["main"]).t;return l.createElement("div",{className:"newGameContainer rounded rounded1"},l.createElement("div",{className:"newGame"},l.createElement("div",{className:"headerText bold"},o("description.nuevaPartida")),l.createElement("div",{className:"newGameRow"},l.createElement("label",{htmlFor:"gameName",className:"formRequiredValue"},o("description.nombre")),!t.name&&l.createElement("div",{className:"formError"},o("error.nonombre")," "),l.createElement("input",{id:"gameName",value:t.name,className:"newGameNameInput",type:"text",onChange:n})),l.createElement("div",{className:"newGameRow"},l.createElement("span",{className:""},o("description.fecha")),": ",t.date.toLocaleString()),l.createElement("div",{className:"newGameRow"},l.createElement("span",{className:""},o("description.esPublica")),": ",l.createElement("input",{type:"checkbox",checked:t.isPublic,onChange:a})),l.createElement("div",{className:"newGameRow"},l.createElement("span",{className:""},o("description.localizacion")),":",l.createElement(u.default,{onLocationResolved:r}))))}},99431:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(80473)),u=i(n(44831)),s=i(n(86915)),d=n(788),m=i(n(51986)),f=i(n(18626)),p=i(n(95781)),g=n(6932);t.default=function(e){var t=e.game,n=e.onGameTypeChange,a=e.onZonesChange,r=e.onJudgeNumerChange,o=e.groups,i=e.onGatesChange,h=e.onMaxPointsChange,v=e.onMaxTimeChange,y=e.onGroupsChange,b=e.onGameDirectorChange,E=[];return t.gameType!==d.GAME_TYPE_KING&&(E.push(l.createElement(s.default,{key:1,value:t.zones,onZonesChange:a})),E.push(l.createElement(m.default,{key:2,zones:t.zones,value:10,onGatesChange:i})),E.push(l.createElement(f.default,{key:3,onGroupsChange:y,value:1,minValue:1,maxValue:10})),g.isOffline||E.push(l.createElement(p.default,{key:4,isForJudge:!0,maxGroups:o,inPlayers:t.judges,gameName:t.name,onGameDirectorChange:b,onPlayerNumerChange:r}))),l.createElement(l.Fragment,null,l.createElement(c.default,{selectedGameType:t.gameType,onGameTypeChange:function(e){n(e)}}),l.createElement(u.default,{key:0,onMaxPointsChange:h,onMaxTimeChange:v,time:t.maxTime,points:t.maxPoints,showTimePicker:!0}),E)}},12996:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(48298)),u=i(n(55038)),s=n(32418);t.default=function(e){var t,n=e.onLocationResolved,a=l.useState(0),r=a[0],o=a[1],i=l.useState({latitude:0,longitude:0}),d=i[0],m=i[1],f=(0,s.useTranslation)(["main"]).t;return navigator.geolocation?0===r?t=l.createElement("a",{className:"bold",href:"https://crawlear.com",onClick:function(e){e.preventDefault(),navigator.geolocation?(o(2),navigator.geolocation.getCurrentPosition((function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};n(t),o(1),m(t)}),(function(){n({}),o(0)}))):o(0)}},f("description.obtener")):2===r?t=l.createElement(c.default,null):1===r&&(t=l.createElement(l.Fragment,null,l.createElement("span",null,"(","".concat(d.latitude,",").concat(d.longitude),")"),l.createElement("a",{href:u.default.getMapsURL(d.latitude,d.longitude),rel:"noreferrer",target:"_blank"},f("description.vergooglemaps")))):t=l.createElement("div",{className:""},f("content.nogeolocation")),l.createElement(l.Fragment,null,t)}},5110:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(60737)),u=n(6932),s=i(n(71329));n(74469),t.default=function(e){var t=e.onUserSeachPlayerAdd,n=e.onUserClick,a=e.onPlusAddUserClick,r=e.mainText,o=e.secondaryText,i=e.iconSend,d=e.children,m=l.useRef(null),f=l.useRef(null),p=(0,c.default)(t,n,a,f),g=p[0],h=p[1],v=p[2],y=p[3],b=p[4],E=p[5];return l.createElement("div",{className:"userSearchContainer rounded rounded3"},!u.isOffline||a?l.createElement(l.Fragment,null,l.createElement("div",{className:"userSearchText smallText"},r),l.createElement("input",{ref:f,className:"userSearchName",onChange:y,value:h})):l.createElement(l.Fragment,null),v,d,l.createElement("div",{ref:m,className:"resultsContainer"},l.createElement(s.default,{users:g,onUserSeachPlayerAdd:t,userClick:b,iconSend:i,secondaryText:o,addUserFromSearch:E})))}},71329:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(96540)),c=i(n(49286));t.default=function(e){var t=e.users,n=e.onUserSeachPlayerAdd,a=e.userClick,r=e.iconSend,o=e.secondaryText,i=e.addUserFromSearch,u=[l.createElement("div",{key:"secondaryText",className:"userSearchResultsText smallText"},o)].concat(t.map((function(e){var t=r;return n&&e.uid===window.crawlear.user.uid&&(t=c.default),l.createElement("div",{className:"bold userSearchItem",key:e.displayName},l.createElement("span",{onClick:a,className:"userSearchResult textOverflow"},e.displayName),l.createElement("img",{src:t,alt:"send icon","data-uid":e.uid,"data-displayname":e.displayName,"data-photourl":e.photoURL,onClick:i}))})));return l.createElement(l.Fragment,null,u)}},93899:function(e,t,n){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},l=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(96540)),s=n(788),d=n(788),m=c(n(36236)),f=n(6932),p=n(84976),g=n(32418),h=c(n(38791)),v=c(n(55038));t.default=function(e){var t=e.preconfiguredGame,n=e.onGameCreated,r=u.useState((function(){var e=t||new s.Game("",(new Date).toLocaleDateString(),{latitude:0,longitude:0},!0,d.GAME_TYPE_LEVANTE,[],[],6e5,40,new Array(1).fill(10),1,0,[],[],[]);return e.date=(new Date).toLocaleDateString(),f.isOffline&&(e.judges=[a({},s.OfflinePlayer)]),e})),o=r[0],i=r[1],c=(0,p.useNavigate)(),y=u.useState(""),b=y[0],E=y[1],_=u.useState(!1),x=_[0],P=_[1],w=u.useState(1),C=w[0],T=w[1],N=(0,g.useTranslation)(["main"]).t,A=window.crawlear.fb;return u.useEffect((function(){window.scrollTo(0,0)}),[]),[o,b,C,function(e){var t,n=a({},o);h.default.event("menu","playModeChange",e),n.gameType=e,t=m.default.getMaxTimeAndPointsFromGameType(n.gameType),n.maxTime=t[0],n.maxPoints=t[1],i(n)},function(e){if(e.latitude&&e.longitude){var t=a({},o);t.location=e,i(t)}else E(N("error.nogeolocation"))},function(e){var t=a({},o),n="addJudge";o.judges.length>e.length&&(n="removeJudge"),h.default.event("menu",n,e.length),t.judges=l([],e,!0),f.isOffline&&!t.owner.length&&t.owner.push(d.OFFLINE_USER_UID),i(t),E("")},function(e){var t=a({},o),n="addPlayer";o.players.length>e.length&&(n="removePlayer"),h.default.event("menu",n,e.length),t.players=l([],e,!0),i(t),E("")},function(e){var t=a({},o);h.default.event("menu","maxPointsSet",e),t.maxPoints=e,i(t)},function(e){var t=a({},o);t.maxTime=e,h.default.event("menu","maxTimeSet",e),i(t)},function(e){var t=a({},o);o.zones<e?t.gates.push(10):t.gates.pop(),t.zones=e,h.default.event("menu","zonesSet",e),i(t)},function(e,t){var n=a({},o);n.gates[t]=e,h.default.event("menu","gateSet",e),i(n)},function(e){var t=a({},o),n=e.target.value;n&&(t.name=n,i(t),E(""))},function(e){T(e)},function(e){var t=a({},o);t.isPublic=e.target.checked,i(t)},function(e,t){var n=o.judges[e].uid,r=a({},o);if(t&&!r.owner.find((function(e){return e===n})))r.owner.push(n),i(r);else if(!t&&r.owner.find((function(e){return e===n}))){var l=r.owner.indexOf(n);r.owner.splice(l,1),i(r)}},function(e){var t=e.target.checked;P(t)},function(e,t){var r=function(e,t){for(var n=new Array(e).fill(0),a=0;a<t.players.length;a++)n[t.players[a].group]++;return void 0===n.find((function(e){return 0===e}))}(e,t);if(window.scrollTo(0,0),t.name&&t.name.length)if(r)if(t.judges.length||t.gameType===d.GAME_TYPE_KING)if(t.players.length)if(t.gameType===d.GAME_TYPE_KING||t.owner.length){if(t.gameType!==d.GAME_TYPE_KING&&r||t.gameType===d.GAME_TYPE_KING){var o=a({},t);t.gameType===d.GAME_TYPE_KING&&(o.judges.push(a({},window.crawlear.user)),o.zones=1,o.gates=new Array(1).fill(1)),o.uids=v.default.getUidsFromUsers(o.players),o.jids=v.default.getUidsFromUsers(o.judges),x&&function(e){if(e.players.length){var t=l([],e.players,!0);t=t.sort((function(e,t){return Math.random()-.5})),e.players=t,s.GameUtils.redoPlayersIds(e)}}(o),s.GameUtils.init(o,s.GameUtils.getGameTypeControlTextValuesInit(o.gameType),s.GameUtils.getGameTypeFiascoControlTextValuesInit(o.gameType),!0),f.isOffline&&n?n(o):A.setGame(o,(function(e){o.gid=e.gid,A.createGameProgression(o),i(o),c("/game")}),(function(){}))}}else E(N("error.nodirectordepartida"));else E(N("error.nojugadores"));else E(N("error.nojueces"));else E(N("error.rellenargrupos"));else E(N("error.nonombre"))}]}},27532:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(96540)),l=n(32418);t.default=function(e,t){var n=(0,l.useTranslation)(["main"]).t,a=[],r=[n("gametype.aecar"),n("gametype.rey"),n("gametype.isrcc"),n("gametype.levante124"),n("gametype.copaespana"),n("gametype.minicrawlerpassion"),n("gametype.generic")],o=i.useState(e),c=o[0],u=o[1];return r.forEach((function(e,t){a.push(i.createElement("option",{key:t,value:t},r[t]))})),[c,a,function(e){var n=e.target.selectedIndex;t&&t(n),u(n)}]}},60737:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(96540)),l=n(6932);t.default=function(e,t,n,a){var r=window.crawlear.fb,o=window.crawlear.fbBase,c=i.useState(""),u=c[0],s=c[1],d=i.useState([]),m=d[0],f=d[1],p=n?i.createElement("button",{className:"buttonControlTextPlus",onClick:function(){var e,t=null===(e=null==a?void 0:a.current)||void 0===e?void 0:e.value;f([]),s(""),n({uid:"",displayName:t})}},"+"):i.createElement(i.Fragment,null);return[m,u,p,function(e){var t=e.target.value;s(t),!l.isOffline&&o.isUserLogged()&&(t.length>0?r.userSearch(t,(function(e){f(e)}),(function(){})):f([]))},function(e){var n,a=null===(n=e.target.nextElementSibling)||void 0===n?void 0:n.getAttribute("data-uid");t&&t(a)},function(t){var n=t.target,a=n.getAttribute("data-uid"),r=n.getAttribute("data-displayname"),o=n.getAttribute("data-photourl");f([]),s(""),e&&e({uid:a,displayName:r,photoURL:o})}]}},49286:(e,t,n)=>{e.exports=n.p+"78b7bb4a554381a9ba80.png"}}]);