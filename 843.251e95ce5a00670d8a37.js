"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[843],{9928:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540);const l=function(e){let{controlTextValues:t,texts:a}=e,l=0;const s=[];return t&&t.forEach((e=>{0!==e&&s.push(n.createElement("div",{key:l,className:"controlTextValues"},a[l],": ",e)),l++})),s}},42426:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(96540);const l=function(e){let{location:t}=e;return n.createElement("div",{className:"mapouter"},n.createElement("div",{className:"gmap_canvas"},n.createElement("iframe",{id:"gmap_canvas",src:"https://maps.google.com/maps?q=".concat(t.latitude,",").concat(t.longitude,"&t=&z=13&ie=UTF8&iwloc=&output=embed"),frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}),n.createElement("style",null,".mapouter{position:relative;text-align:right;}"),n.createElement("style",null,".gmap_canvas {overflow:hidden;background:none!important;}")))};var s=a(55038),o=a(788),c=a(18492);const r=function(e){let{game:t}=e;const{t:a}=(0,c.B)(["main"]);return n.createElement("div",{className:"gameHeaderInfo rounded"},n.createElement("div",{className:"gameGameType"},a("gametype.modojuego"),": ",n.createElement("span",{className:"bold"},a(o.GameUtils.resolveGameTypeName(t.gameType)))),n.createElement("div",{className:"gamePointsType"},a("description.zonas"),": ",n.createElement("span",{className:"bold"},t.zones)),n.createElement("div",{className:"gameIsPublic"},n.createElement("span",{className:"bold"},t.isPublic?a("description.esPublica"):"")),t.location&&t.location.longitude&&t.location.longitude?n.createElement(n.Fragment,null,n.createElement("div",{className:"gameName"},a("description.localizacion")," :"),n.createElement(l,{location:t.location})):n.createElement(n.Fragment,null),n.createElement("div",{className:"gamePointsType"},t.maxPoints>0?"".concat(a("description.puntosmaximo"),": ").concat(t.maxPoints):""),n.createElement("div",{className:"gamePointsType"},t.maxTime>0?"".concat(a("description.tiempomaximo"),": ").concat(s.default.printTime(s.default.millisToTime(t.maxTime))):""))}},38435:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(96540),l=a(18492),s=a(55038),o=a(9928),c=a(46662),r=a(42578),i=a(842),m=a(3442),d=a(98784),u=a(90598),g=a(788),E=a(83767);const p=a.p+"0bc852df265dd5f2d503.png",f=a.p+"fd12d494b254065b7749.png";var T=a(93322);const P=function(e){let{game:t,isDraw:a}=e;const{t:P}=(0,l.B)(["main"]),x=[];let N=s.default.tokenToTexts(P,r.AecarGameScores.texts),b=0,v=0;switch(t.gameType){case g.GAME_TYPE_ISRCC:N=s.default.tokenToTexts(P,c.IsrccGameScores.texts);break;case g.GAME_TYPE_LEVANTE:N=s.default.tokenToTexts(P,m.Levante124GameScores.texts);break;case g.GAME_TYPE_COPAESPANA:N=s.default.tokenToTexts(P,i.RegionalZonaRcGameScores.texts);break;case g.GAME_TYPE_MINICRAWLERPASSION:N=s.default.tokenToTexts(P,d.MiniCrawlerPassionGameScores.texts);break;case g.GAME_TYPE_GENERIC:N=s.default.tokenToTexts(P,u.GenericGameScores.texts);break;default:N=s.default.tokenToTexts(P,r.AecarGameScores.texts)}function y(e){let t=e.target;t="IMG"===t.tagName?t.parentElement:t,t.parentElement.nextElementSibling.classList.toggle("closed")}return x.push(n.createElement("tr",{key:"game".concat((new Date).getMilliseconds())},n.createElement("td",null),n.createElement("td",{className:""}),n.createElement("td",null,P("description.puntos")),n.createElement("td",null,P("description.puertas")),n.createElement("td",null,P("description.bonificacion")),n.createElement("td",null,P("description.puntos")," ",P("description.portiempo")),n.createElement("td",null))),t.players.forEach((e=>{x.push(n.createElement("tr",{key:"header".concat(v+b)},a?n.createElement("td",null):n.createElement("td",{className:"bold gameListPosition"},0===b?n.createElement("img",{src:p,alt:"winner"}):b+1),1===t.gameType?n.createElement("td",{className:"bold gameListPlayerName gameListPoints bold textOverflow"},e.name):n.createElement("td",{className:"bold gameListPlayerName gameListPoints bold withTime textOverflow"},e.name),n.createElement("td",{className:"bold gameListPoints"},e.totalPoints),n.createElement("td",{className:"gameListPoints"},"."),n.createElement("td",{className:"gameListPoints"},"."),n.createElement("td",{className:"gameListPoints"},"."),1!==t.gameType?n.createElement("td",{className:"bold gameListPoints gameListTime"},e.totalTime?s.default.printTime(s.default.millisToTime(e.totalTime)):n.createElement(n.Fragment,null,"00:00:000")):n.createElement(n.Fragment,null))),e.zones.forEach((a=>{let l;l=a.fiascoControlTextValues?a.fiascoControlTextValues[4]?n.createElement("img",{src:f,alt:"battery"}):t.maxTime&&a.time===t.maxTime+t.courtesyTime||t.maxPoints&&a.totalPoints===t.maxPoints||a.fiascoControlTextValues.filter((e=>e>0)).length>0?n.createElement("img",{src:E,alt:"fiasco"}):n.createElement(n.Fragment,null):a.battery?n.createElement("img",{src:f,alt:"fiasco"}):t.maxTime&&a.time===t.maxTime+t.courtesyTime||t.maxPoints&&a.totalPoints===t.maxPoints?n.createElement("img",{src:E,alt:"battery"}):n.createElement(n.Fragment,null),x.push(n.createElement("tr",{key:"row0".concat(v+b+1)},n.createElement("td",null,l),n.createElement("td",{onClick:y},"".concat(P("description.zona")," ").concat(v%e.zones.length+1),n.createElement("img",{className:"iconArrowDown",src:T,alt:"click open"})),n.createElement("td",{className:"gameListPoints"},a.totalPoints),n.createElement("td",{className:"gameListPoints"},a.gateProgression),n.createElement("td",{className:"gameListPoints"},a.gatesWithBonification?-2*a.gatesWithBonification:"0"),n.createElement("td",{className:"gameListPoints"},a.simpathyPoints?a.simpathyPoints:"0"),1!==t.gameType?n.createElement("td",{className:"gameListTime"},s.default.printTime(s.default.millisToTime(a.time))):n.createElement(n.Fragment,null))),x.push(n.createElement("tr",{key:"row1".concat(v+b+2),className:"closed"},n.createElement("td",{colSpan:7},0!==a.handicap?n.createElement("div",{className:"controlTextValues"},P("description.bonificacionaccesorios"),": ",a.handicap):n.createElement(n.Fragment,null),n.createElement(o.A,{controlTextValues:g.GameUtils.sumControlTextValues(a.gateProgressionData),texts:N}),a.fiascoControlTextValues&&a.fiascoControlTextValues.filter((e=>e>0)).length?n.createElement(n.Fragment,null,n.createElement("div",{className:"left bold"},P("points.fiascos"),":"),n.createElement(o.A,{controlTextValues:a.fiascoControlTextValues,texts:s.default.tokenToTexts(P,c.IsrccGameScores.fiascoTexts)})):n.createElement(n.Fragment,null)))),v++})),b++})),n.createElement("div",{className:"gameParticipants"},n.createElement("table",null,n.createElement("tbody",null,x)))};var x=a(42426),N=a(53024),b=a(51805),v=a(15596),y=a.n(v);const h=function(e){let{game:t}=e;const{t:a}=(0,l.B)(["main"]);return t.players?n.createElement("div",{className:"gameContainer"},n.createElement("div",{className:"winnerBox importantNote rounded"},n.createElement(y(),{game:t})),n.createElement("div",{className:"gameList rounded rounded2"},n.createElement(x.A,{game:t}),n.createElement(P,{game:t,isDraw:(0,v.isDraw)(t)}),t.isPublic&&n.createElement(N.default,{url:"gameviewer?gid=".concat(t.gid),text:"".concat(a("description.resolverjuego")," ").concat(t.name),headerText:a("description.compartir")}))):n.createElement(b.default,{className:"centerText"})}},15596:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&!("get"in l?!t.__esModule:l.writable||l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,l)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.isDraw=void 0;var o=s(a(96540)),c=a(32418);function r(e){return e.players.length>1&&e.players[0].totalPoints===e.players[1].totalPoints&&e.players[0].totalTime===e.players[1].totalTime&&(!e.players[0].totalGateProgression||e.players[0].totalGateProgression===e.players[1].totalGateProgression)}t.isDraw=r,t.default=function(e){var t=e.game,a=(0,c.useTranslation)(["main"]).t;return r(t)?o.createElement("div",{className:""},a("description.empate")):o.createElement(o.Fragment,null,a("description.ganador"),": ",o.createElement("b",null,t.players[0].name))}},83767:(e,t,a)=>{e.exports=a.p+"99d032ea73dcde64f5dc.png"}}]);