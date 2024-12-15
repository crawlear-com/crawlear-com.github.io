"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[213],{65656:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(96540);const r=function(e){let{location:t}=e;return n.createElement("div",{className:"mapouter"},n.createElement("div",{className:"gmap_canvas"},n.createElement("iframe",{title:"google maps location",id:"gmap_canvas",src:`https://maps.google.com/maps?q=${t.latitude},${t.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`,frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}),n.createElement("style",null,".mapouter{position:relative;text-align:right;}"),n.createElement("style",null,".gmap_canvas {overflow:hidden;background:none!important;}")))};var i=a(55038),o=a(788),l=a(18492),s=a(85072),c=a.n(s),m=a(97825),u=a.n(m),d=a(77659),f=a.n(d),g=a(55056),p=a.n(g),E=a(10540),_=a.n(E),T=a(41113),P=a.n(T),b=a(36759),v={};v.styleTagTransform=P(),v.setAttributes=p(),v.insert=f().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=_(),c()(b.A,v),b.A&&b.A.locals&&b.A.locals;const h=function(e){let{game:t}=e;const{t:a}=(0,l.B)(["main"]);return n.createElement("div",{className:"gameHeaderInfo rounded"},n.createElement("div",{className:"gameGameType"},a("gametype.modojuego"),": ",n.createElement("span",{className:"bold"},a(o.GameUtils.resolveGameTypeName(t.gameType)))),n.createElement("div",{className:"gamePointsType"},a("description.zonas"),": ",n.createElement("span",{className:"bold"},t.zones)),n.createElement("div",{className:"gameIsPublic"},n.createElement("span",{className:"bold"},t.isPublic?a("description.esPublica"):"")),t.location&&t.location.longitude&&t.location.longitude?n.createElement(n.Fragment,null,n.createElement("div",{className:"gameName"},a("description.localizacion")," :"),n.createElement(r,{location:t.location})):n.createElement(n.Fragment,null),n.createElement("div",{className:"gamePointsType"},t.maxPoints>0?`${a("description.puntosmaximo")}: ${t.maxPoints}`:""),n.createElement("div",{className:"gamePointsType"},t.maxTime>0?`${a("description.tiempomaximo")}: ${i.default.printTime(i.default.millisToTime(t.maxTime))}`:""))}},213:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var n=a(96540),r=a(18492),i=a(88510),o=a.n(i),l=a(65656),s=a(55512),c=a(48298),m=a(15596),u=a.n(m),d=a(85072),f=a.n(d),g=a(97825),p=a.n(g),E=a(77659),_=a.n(E),T=a(55056),P=a.n(T),b=a(10540),v=a.n(b),h=a(41113),x=a.n(h),y=a(44665),A={};A.styleTagTransform=x(),A.setAttributes=P(),A.insert=_().bind(null,"head"),A.domAPI=p(),A.insertStyleElement=v(),f()(y.A,A),y.A&&y.A.locals&&y.A.locals;const G=function(e){let{game:t}=e;const{t:a}=(0,r.B)(["main"]);return t.players?n.createElement("div",{className:"gameContainer"},n.createElement("div",{className:"winnerBox importantNote rounded"},n.createElement(u(),{game:t})),n.createElement("div",{className:"gameList rounded rounded2"},n.createElement(l.A,{game:t}),n.createElement(o(),{game:t,isDraw:(0,m.isDraw)(t)}),t.isPublic&&n.createElement(s.default,{url:`gameviewer?gid=${t.gid}`,text:`${a("description.resolverjuego")} ${t.name}`,headerText:a("description.compartir")}))):n.createElement(c.default,{className:"centerText"})}},53861:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".controlTextValues{text-align:left;font-size:.9em}.controlTextValues:first-of-type{margin-top:15px}.controlTextValues:nth-of-type(odd){background-color:#345c62}",""]);const l=o},36759:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".gameHeaderInfo{margin-bottom:15px}",""]);const l=o},44665:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(31601),r=a.n(n),i=a(76314),o=a.n(i)()(r());o.push([e.id,".winnerBox .fiasco{margin-bottom:4px}.winnerBox .fiasco img{width:auto;padding:0 5px}.winnerBox .pointsTable{margin-bottom:25px;text-align:right}.gameList{margin-bottom:15px;width:95%;text-align:right;display:inline-block;position:relative}.gameList .gameContainer{font-size:.9em;margin-bottom:15px;text-align:right;padding-top:0px;overflow:hidden}.gameList .gameName{display:inline-block;width:70%;padding:10px 0;vertical-align:top;font-size:.8em}.gameList .gameDate{padding-top:15px;padding-bottom:20px}.gameList .removeButton{width:25px;height:25px}.gameList .gameParticipants{font-size:.8em;max-width:305px;margin:0 auto}.gameList .gameParticipants .closed{display:none}.gameList .gameParticipants .iconArrowDown{height:10px;margin-left:3px}.gameList .gameParticipants img{max-height:15px}.gameList .gameParticipants table{margin:auto}.gameList .gameParticipants table td:nth-of-type(2),.gameList .gameParticipants table td:nth-of-type(7){writing-mode:unset !important}.gameList .gameParticipants table tr:first-of-type td{writing-mode:vertical-lr;word-break:break-all;font-size:.8em}.gameList .gameParticipants .controlTextValues{background-color:rgba(0,0,0,0)}.gameList .gameParticipants .controlTextValues:first-of-type{margin-top:0}.gameList .gameListPosition{overflow:hidden;background-color:#345c62}.gameList .gameListPlayerName{display:block;width:120px;padding:0 5px}.gameList .gameListPoints{overflow:hidden;min-width:25px;background-color:#345c62;max-width:80px}.gameList .gameListTime{overflow:hidden;min-width:45px;padding:0 5px}.gameList .gameListTextArray{margin-top:15px}.gameList .winnerBox .headerPlayer img{position:relative;top:5px;margin-right:5px}.gameList .gameProgressionInfoItem{margin:10px;text-align:left}.gameList .gameProgressionInfoItem .fiascosText{margin-top:10px}.gameList .gameProgressionItem img{margin-right:10px;border-radius:15px;display:inline-block}.gameList .gameProgressionItem ul{padding-left:0px}.gameList .gameProgressionItem li{list-style-type:circle;text-align:left}",""]);const l=o},41398:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(85072),r=a.n(n),i=a(97825),o=a.n(i),l=a(77659),s=a.n(l),c=a(55056),m=a.n(c),u=a(10540),d=a.n(u),f=a(41113),g=a.n(f),p=a(53861),E={};E.styleTagTransform=g(),E.setAttributes=m(),E.insert=s().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=d(),r()(p.A,E);const _=p.A&&p.A.locals?p.A.locals:void 0},2665:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var o=i(a(96540));a(41398),t.default=function(e){var t=e.controlTextValues,a=e.texts,n=0,r=[];return t&&t.forEach((function(e){0!==e&&r.push(o.createElement("div",{key:n,className:"controlTextValues"},a[n],": ",e)),n++})),o.createElement(o.Fragment,null,r)}},88510:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(96540)),s=o(a(16369)),c=o(a(29190)),m=o(a(65335)),u=o(a(95733)),d=a(58e3);t.default=function(e){var t=e.game,a=e.isDraw,n=[],r=0,i=0;return n.push(l.createElement(s.default,{key:t.name})),t.players.forEach((function(e){n.push(l.createElement(c.default,{key:e.name,playerName:e.name,gameType:t.gameType,isDraw:a,playerTotalPoint:e.totalPoints||0,playerTotalTime:e.totalTime||0,position:r})),e.zones.forEach((function(a,r){var o=(0,d.getGamePlayerResultIcon)(t,a);n.push(l.createElement(m.default,{key:"".concat(e.name).concat(r,"P"),icon:o,zone:a,numZone:i%e.zones.length+1,gameType:t.gameType,zonesLength:e.zones.length})),n.push(l.createElement(u.default,{key:"".concat(e.name).concat(r,"Z"),zone:a,gameType:t.gameType})),i++})),r++})),l.createElement("div",{className:"gameParticipants"},l.createElement("table",null,l.createElement("tbody",null,n)))}},16369:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var o=i(a(96540)),l=a(32418);t.default=function(){var e=(0,l.useTranslation)(["main"]).t;return o.createElement("tr",null,o.createElement("td",null),o.createElement("td",{className:""}),o.createElement("td",null,e("description.puntos")),o.createElement("td",null,e("description.puertas")),o.createElement("td",null,e("description.bonificacion")),o.createElement("td",null,e("description.puntos")," ",e("description.portiempo")),o.createElement("td",null))}},29190:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(96540)),s=o(a(55038)),c=o(a(23003));t.default=function(e){var t=e.playerName,a=e.gameType,n=e.isDraw,r=e.playerTotalPoint,i=e.playerTotalTime,o=e.position;return l.createElement("tr",null,n?l.createElement("td",null):l.createElement("td",{className:"bold gameListPosition"},0===o?l.createElement("img",{src:c.default,alt:"winner"}):o+1),1===a?l.createElement("td",{className:"bold gameListPlayerName gameListPoints bold textOverflow"},t):l.createElement("td",{className:"bold gameListPlayerName gameListPoints bold withTime textOverflow"},t),l.createElement("td",{className:"bold gameListPoints"},r),l.createElement("td",{className:"gameListPoints"},"."),l.createElement("td",{className:"gameListPoints"},"."),l.createElement("td",{className:"gameListPoints"},"."),1!==a?l.createElement("td",{className:"bold gameListPoints gameListTime"},i?s.default.printTime(s.default.millisToTime(i)):l.createElement(l.Fragment,null,"00:00:000")):l.createElement(l.Fragment,null))}},65335:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(96540)),s=o(a(55038)),c=a(32418),m=o(a(93322));function u(e){var t,a=e.target,n=null===(t=null==(a="IMG"===a.tagName?a.parentElement:a)?void 0:a.parentElement)||void 0===t?void 0:t.nextElementSibling;null==n||n.classList.toggle("closed")}t.default=function(e){var t=e.icon,a=e.numZone,n=e.zone,r=e.gameType,i=(0,c.useTranslation)(["main"]).t;return l.createElement("tr",null,l.createElement("td",null,t),l.createElement("td",{onClick:u},"".concat(i("description.zona")," ").concat(a),l.createElement("img",{className:"iconArrowDown",src:m.default,alt:"click open"})),l.createElement("td",{className:"gameListPoints"},n.totalPoints),l.createElement("td",{className:"gameListPoints"},n.gateProgression),l.createElement("td",{className:"gameListPoints"},n.gatesWithBonification?-2*n.gatesWithBonification:"0"),l.createElement("td",{className:"gameListPoints"},n.simpathyPoints?n.simpathyPoints:"0"),1!==r?l.createElement("td",{className:"gameListTime"},s.default.printTime(s.default.millisToTime(n.time))):l.createElement(l.Fragment,null))}},95733:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(96540)),s=o(a(2665)),c=a(788),m=a(58e3),u=a(32418);t.default=function(e){var t=e.zone,a=e.gameType,n=(0,u.useTranslation)(["main"]).t;return l.createElement("tr",{className:"closed"},l.createElement("td",{colSpan:7},0!==t.handicap?l.createElement("div",{className:"controlTextValues"},n("description.bonificacionaccesorios"),": ",t.handicap):l.createElement(l.Fragment,null),l.createElement(s.default,{controlTextValues:c.GameUtils.sumControlTextValues(t.gateProgressionData),texts:(0,m.getGameTexts)(a,n)}),t.fiascoControlTextValues&&t.fiascoControlTextValues.filter((function(e){return e>0})).length?l.createElement(l.Fragment,null,l.createElement("div",{className:"left bold"},n("points.fiascos"),":"),l.createElement(s.default,{controlTextValues:t.fiascoControlTextValues,texts:(0,m.getFiascoGameTexts)(a,n)})):l.createElement(l.Fragment,null)))}},15596:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.isDraw=void 0;var o=i(a(96540)),l=a(32418);function s(e){return e.players.length>1&&e.players[0].totalPoints===e.players[1].totalPoints&&e.players[0].totalTime===e.players[1].totalTime&&(!e.players[0].totalGateProgression||e.players[0].totalGateProgression===e.players[1].totalGateProgression)}t.isDraw=s,t.default=function(e){var t=e.game,a=(0,l.useTranslation)(["main"]).t;return s(t)?o.createElement("div",{className:""},a("description.empate")):o.createElement(o.Fragment,null,a("description.ganador"),": ",o.createElement("b",null,t.players[0].name))}},58e3:function(e,t,a){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.STATUS_DONE=t.STATUS_REPAIR=t.STATUS_PLAYING=t.STATUS_WAITING=t.getGamePlayerResultIcon=t.getFiascoGameTexts=t.getGameTexts=t.getAllGameTexts=t.getGameContent=t.getGameExtras=t.getGroupFromJid=t.updateGameFromProgression=t.onRepairEnd=t.isGroupGameFinished=t.isIndividualGame=void 0;var s=a(788),c=a(42578),m=a(46662),u=a(3442),d=a(77267),f=a(98784),g=a(90598),p=a(43841),E=l(a(55038)),_=o(a(96540)),T=l(a(83767)),P=l(a(21415));t.isIndividualGame=function(e){return e.gameType===s.GAME_TYPE_KING},t.isGroupGameFinished=function(e,a,n){var r=!0;return!!(0,t.isIndividualGame)(e)||(Object.entries(a).forEach((function(e){Number(e[0])===n&&Object.entries(e[1]).forEach((function(e){Object.entries(e[1]).forEach((function(e){e[1].status!==t.STATUS_WAITING&&e[1].status!==t.STATUS_REPAIR&&e[1].status!==t.STATUS_PLAYING||(r=!1)}))}))})),r)},t.onRepairEnd=function(e,a,n,r,i){var o,l=null===(o=window.crawlear)||void 0===o?void 0:o.fb;i.status=t.STATUS_WAITING,delete i.repairData,l.setGameProgression(e,a,n,r,i)},t.updateGameFromProgression=function(e,t){var a=n({},t);return Object.entries(e).forEach((function(e){Object.entries(e[1]).forEach((function(t){t[1].data&&(a.players[e[0]].zones[t[0]]=t[1].data)}))})),a},t.getGroupFromJid=function(e,t){var a=e.judges.find((function(e){return e.uid===t}));return a?a.group:0},t.getGameExtras=function(e){var t;return e===s.GAME_TYPE_AECAR?t=c.gameExtras:e===s.GAME_TYPE_ISRCC?t=m.gameExtras:e===s.GAME_TYPE_LEVANTE?t=u.gameExtras:e===s.GAME_TYPE_COPAESPANA?t=d.gameExtras:e===s.GAME_TYPE_KING?t=p.gameExtras:e===s.GAME_TYPE_MINICRAWLERPASSION?t=f.gameExtras:e===s.GAME_TYPE_GENERIC&&(t=g.gameExtras),t},t.getGameContent=function(e,t,a){var n,r;return e===s.GAME_TYPE_AECAR?n=c.getGameContent:e===s.GAME_TYPE_ISRCC?n=m.getGameContent:e===s.GAME_TYPE_LEVANTE?n=u.getGameContent:e===s.GAME_TYPE_COPAESPANA?n=d.getGameContent:e===s.GAME_TYPE_KING||(e===s.GAME_TYPE_MINICRAWLERPASSION?n=f.getGameContent:e===s.GAME_TYPE_GENERIC&&(n=g.getGameContent)),n&&(r=n(t,a)),r},t.getAllGameTexts=function(e,a){return[(0,t.getGameTexts)(e,a),(0,t.getFiascoGameTexts)(e,a)]},t.getGameTexts=function(e,t){var a=E.default.tokenToTexts(t,c.AecarGameScores.texts);return e===s.GAME_TYPE_ISRCC&&(a=E.default.tokenToTexts(t,m.IsrccGameScores.texts)),e===s.GAME_TYPE_LEVANTE&&(a=E.default.tokenToTexts(t,u.Levante124GameScores.texts)),e===s.GAME_TYPE_COPAESPANA&&(a=E.default.tokenToTexts(t,d.RegionalZonaRcGameScores.texts)),e===s.GAME_TYPE_MINICRAWLERPASSION&&(a=E.default.tokenToTexts(t,f.MiniCrawlerPassionGameScores.texts)),e===s.GAME_TYPE_GENERIC&&(a=E.default.tokenToTexts(t,g.GenericGameScores.texts)),a},t.getFiascoGameTexts=function(e,t){var a=E.default.tokenToTexts(t,c.AecarGameScores.fiascoTexts);return e===s.GAME_TYPE_ISRCC&&(a=E.default.tokenToTexts(t,m.IsrccGameScores.fiascoTexts)),e===s.GAME_TYPE_LEVANTE&&(a=E.default.tokenToTexts(t,u.Levante124GameScores.fiascoTexts)),e===s.GAME_TYPE_COPAESPANA&&(a=E.default.tokenToTexts(t,d.RegionalZonaRcGameScores.fiascoTexts)),e===s.GAME_TYPE_MINICRAWLERPASSION&&(a=E.default.tokenToTexts(t,f.MiniCrawlerPassionGameScores.fiascoTexts)),e===s.GAME_TYPE_GENERIC&&(a=E.default.tokenToTexts(t,g.GenericGameScores.fiascoTexts)),a},t.getGamePlayerResultIcon=function(e,t){return _.createElement(_.Fragment,null),t.fiascoControlTextValues?t.fiascoControlTextValues[4]?_.createElement("img",{src:P.default,alt:"battery"}):e.maxTime&&t.time===e.maxTime+e.courtesyTime||e.maxPoints&&t.totalPoints===e.maxPoints||t.fiascoControlTextValues.filter((function(e){return e>0})).length>0?_.createElement("img",{src:T.default,alt:"fiasco"}):_.createElement(_.Fragment,null):t.battery?_.createElement("img",{src:P.default,alt:"fiasco"}):e.maxTime&&t.time===e.maxTime+e.courtesyTime||e.maxPoints&&t.totalPoints===e.maxPoints?_.createElement("img",{src:T.default,alt:"battery"}):_.createElement(_.Fragment,null)},t.STATUS_WAITING="waiting",t.STATUS_PLAYING="playing",t.STATUS_REPAIR="repair",t.STATUS_DONE="done"},21415:(e,t,a)=>{e.exports=a.p+"fd12d494b254065b7749.png"},83767:(e,t,a)=>{e.exports=a.p+"99d032ea73dcde64f5dc.png"},23003:(e,t,a)=>{e.exports=a.p+"0bc852df265dd5f2d503.png"}}]);