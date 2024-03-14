"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[1893],{13093:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(67294),i=a(93379),o=a.n(i),r=a(7795),l=a.n(r),s=a(90569),m=a.n(s),c=a(3565),d=a.n(c),g=a(19216),u=a.n(g),p=a(44589),f=a.n(p),x=a(53803),E={};E.styleTagTransform=f(),E.setAttributes=d(),E.insert=m().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=u(),o()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals;var T=function(e){var t=e.controlTextValues,a=e.texts,i=0,o=[];return t&&t.forEach((function(e){0!==e&&o.push(n.createElement("div",{key:i,className:"controlTextValues"},a[i],": ",e)),i++})),o}},81458:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),i=function(e){var t=e.location;return n.createElement("div",{className:"mapouter"},n.createElement("div",{className:"gmap_canvas"},n.createElement("iframe",{id:"gmap_canvas",src:"https://maps.google.com/maps?q=".concat(t.latitude,",").concat(t.longitude,"&t=&z=13&ie=UTF8&iwloc=&output=embed"),frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}),n.createElement("style",null,".mapouter{position:relative;text-align:right;}"),n.createElement("style",null,".gmap_canvas {overflow:hidden;background:none!important;}")))},o=a(5103),r=a(29525),l=a(26793),s=a(93379),m=a.n(s),c=a(7795),d=a.n(c),g=a(90569),u=a.n(g),p=a(3565),f=a.n(p),x=a(19216),E=a.n(x),T=a(44589),P=a.n(T),b=a(5523),h={};h.styleTagTransform=P(),h.setAttributes=f(),h.insert=u().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=E(),m()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var y=function(e){var t=e.game,a=(0,l.$)(["main"]).t;return n.createElement("div",{className:"gameHeaderInfo rounded"},n.createElement("div",{className:"gameGameType"},a("gametype.modojuego"),": ",n.createElement("span",{className:"bold"},a(r.GameUtils.resolveGameTypeName(t.gameType)))),n.createElement("div",{className:"gamePointsType"},a("description.zonas"),": ",n.createElement("span",{className:"bold"},t.zones)),n.createElement("div",{className:"gameIsPublic"},n.createElement("span",{className:"bold"},t.isPublic?a("description.esPublica"):"")),t.location&&t.location.longitude&&t.location.longitude?n.createElement(n.Fragment,null,n.createElement("div",{className:"gameName"},a("description.localizacion")," :"),n.createElement(i,{location:t.location})):n.createElement(n.Fragment,null),n.createElement("div",{className:"gamePointsType"},t.maxPoints>0?"".concat(a("description.puntosmaximo"),": ").concat(t.maxPoints):""),n.createElement("div",{className:"gamePointsType"},t.maxTime>0?"".concat(a("description.tiempomaximo"),": ").concat(o.default.printTime(o.default.millisToTime(t.maxTime))):""))}},8697:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var n=a(67294),i=a(26793),o=a(5103),r=a(13093),l=a(56573),s=a(32181),m=a(38690),c=a(75793),d=a(42274),g=a(53177),u=a(29525),p=a(37789),f=a.p+"0bc852df265dd5f2d503.png",x=a.p+"fd12d494b254065b7749.png",E=a(13750),T=function(e){var t=e.game,a=e.isDraw,T=(0,i.$)(["main"]).t,P=[],b=o.default.tokenToTexts(s.AecarGameScores.texts),h=0,y=0;switch(t.gameType){case u.GAME_TYPE_ISRCC:b=o.default.tokenToTexts(l.IsrccGameScores.texts);break;case u.GAME_TYPE_LEVANTE:b=o.default.tokenToTexts(c.Levante124GameScores.texts);break;case u.GAME_TYPE_COPAESPANA:b=o.default.tokenToTexts(m.RegionalZonaRcGameScores.texts);break;case u.GAME_TYPE_MINICRAWLERPASSION:b=o.default.tokenToTexts(d.MiniCrawlerPassionGameScores.texts);break;case u.GAME_TYPE_GENERIC:b=o.default.tokenToTexts(g.GenericGameScores.texts);break;default:b=o.default.tokenToTexts(s.AecarGameScores.texts)}function v(e){var t=e.target;(t="IMG"===t.tagName?t.parentElement:t).parentElement.nextElementSibling.classList.toggle("closed")}return P.push(n.createElement("tr",{key:"game".concat((new Date).getMilliseconds())},n.createElement("td",null),n.createElement("td",{className:""}),n.createElement("td",null,T("description.puntos")),n.createElement("td",null,T("description.puertas")),n.createElement("td",null,T("description.bonificacion")),n.createElement("td",null,T("description.puntos")," ",T("description.portiempo")),n.createElement("td",null))),t.players.forEach((function(e){P.push(n.createElement("tr",{key:"header".concat(y+h)},a?n.createElement("td",null):n.createElement("td",{className:"bold gameListPosition"},0===h?n.createElement("img",{src:f,alt:"winner"}):h+1),1===t.gameType?n.createElement("td",{className:"bold gameListPlayerName gameListPoints bold textOverflow"},e.name):n.createElement("td",{className:"bold gameListPlayerName gameListPoints bold withTime textOverflow"},e.name),n.createElement("td",{className:"bold gameListPoints"},e.totalPoints),n.createElement("td",{className:"gameListPoints"},"."),n.createElement("td",{className:"gameListPoints"},"."),n.createElement("td",{className:"gameListPoints"},"."),1!==t.gameType?n.createElement("td",{className:"bold gameListPoints gameListTime"},e.totalTime?o.default.printTime(o.default.millisToTime(e.totalTime)):n.createElement(n.Fragment,null,"00:00:000")):n.createElement(n.Fragment,null))),e.zones.forEach((function(a){var i;i=a.fiascoControlTextValues?a.fiascoControlTextValues[4]?n.createElement("img",{src:x,alt:"battery"}):t.maxTime&&a.time===t.maxTime+t.courtesyTime||t.maxPoints&&a.totalPoints===t.maxPoints||a.fiascoControlTextValues.filter((function(e){return e>0})).length>0?n.createElement("img",{src:p,alt:"fiasco"}):n.createElement(n.Fragment,null):a.battery?n.createElement("img",{src:x,alt:"fiasco"}):t.maxTime&&a.time===t.maxTime+t.courtesyTime||t.maxPoints&&a.totalPoints===t.maxPoints?n.createElement("img",{src:p,alt:"battery"}):n.createElement(n.Fragment,null),P.push(n.createElement("tr",{key:"row0".concat(y+h+1)},n.createElement("td",null,i),n.createElement("td",{onClick:v},"".concat(T("description.zona")," ").concat(y%e.zones.length+1),n.createElement("img",{className:"iconArrowDown",src:E,alt:"click open"})),n.createElement("td",{className:"gameListPoints"},a.totalPoints),n.createElement("td",{className:"gameListPoints"},a.gateProgression),n.createElement("td",{className:"gameListPoints"},a.gatesWithBonification?-2*a.gatesWithBonification:"0"),n.createElement("td",{className:"gameListPoints"},a.simpathyPoints?a.simpathyPoints:"0"),1!==t.gameType?n.createElement("td",{className:"gameListTime"},o.default.printTime(o.default.millisToTime(a.time))):n.createElement(n.Fragment,null))),P.push(n.createElement("tr",{key:"row1".concat(y+h+2),className:"closed"},n.createElement("td",{colSpan:7},0!==a.handicap?n.createElement("div",{className:"controlTextValues"},T("description.bonificacionaccesorios"),": ",a.handicap):n.createElement(n.Fragment,null),n.createElement(r.Z,{controlTextValues:u.GameUtils.sumControlTextValues(a.gateProgressionData),texts:b}),a.fiascoControlTextValues&&a.fiascoControlTextValues.filter((function(e){return e>0})).length?n.createElement(n.Fragment,null,n.createElement("div",{className:"left bold"},T("points.fiascos"),":"),n.createElement(r.Z,{controlTextValues:a.fiascoControlTextValues,texts:o.default.tokenToTexts(l.IsrccGameScores.fiascoTexts)})):n.createElement(n.Fragment,null)))),y++})),h++})),n.createElement("div",{className:"gameParticipants"},n.createElement("table",null,n.createElement("tbody",null,P)))},P=a(81458),b=a(651),h=a(83172),y=a(54350),v=a.n(y),L=a(93379),N=a.n(L),w=a(7795),k=a.n(w),_=a(90569),G=a.n(_),A=a(3565),I=a.n(A),Z=a(19216),C=a.n(Z),S=a(44589),V=a.n(S),M=a(38992),O={};O.styleTagTransform=V(),O.setAttributes=I(),O.insert=G().bind(null,"head"),O.domAPI=k(),O.insertStyleElement=C(),N()(M.Z,O),M.Z&&M.Z.locals&&M.Z.locals;var z=function(e){var t=e.game,a=(0,i.$)(["main"]).t;return t.players?n.createElement("div",{className:"gameContainer"},n.createElement("div",{className:"winnerBox importantNote rounded"},n.createElement(v(),{game:t})),n.createElement("div",{className:"gameList rounded rounded2"},n.createElement(P.Z,{game:t}),n.createElement(T,{game:t,isDraw:(0,y.isDraw)(t)}),t.isPublic&&n.createElement(b.default,{url:"gameviewer?gid=".concat(t.gid),text:"".concat(a("description.resolverjuego")," ").concat(t.name),headerText:a("description.compartir")}))):n.createElement(h.default,{className:"centerText"})}},53803:function(e,t,a){var n=a(8081),i=a.n(n),o=a(23645),r=a.n(o)()(i());r.push([e.id,".controlTextValues{text-align:left;font-size:.9em}.controlTextValues:first-of-type{margin-top:15px}.controlTextValues:nth-of-type(odd){background-color:#345c62}",""]),t.Z=r},5523:function(e,t,a){var n=a(8081),i=a.n(n),o=a(23645),r=a.n(o)()(i());r.push([e.id,".gameHeaderInfo{margin-bottom:15px}",""]),t.Z=r},38992:function(e,t,a){var n=a(8081),i=a.n(n),o=a(23645),r=a.n(o)()(i());r.push([e.id,".winnerBox .fiasco{margin-bottom:4px}.winnerBox .fiasco img{width:auto;padding:0 5px}.winnerBox .pointsTable{margin-bottom:25px;text-align:right}.gameList{margin-bottom:15px;width:95%;text-align:right;display:inline-block;position:relative}.gameList .gameContainer{font-size:.9em;margin-bottom:15px;text-align:right;padding-top:0px;overflow:hidden}.gameList .gameName{display:inline-block;width:70%;padding:10px 0;vertical-align:top;font-size:.8em}.gameList .gameDate{padding-top:15px;padding-bottom:20px}.gameList .removeButton{width:25px;height:25px}.gameList .gameParticipants{font-size:.8em;max-width:305px;margin:0 auto}.gameList .gameParticipants .closed{display:none}.gameList .gameParticipants .iconArrowDown{height:10px;margin-left:3px}.gameList .gameParticipants img{max-height:15px}.gameList .gameParticipants table{margin:auto}.gameList .gameParticipants table td:nth-of-type(2),.gameList .gameParticipants table td:nth-of-type(7){writing-mode:unset !important}.gameList .gameParticipants table tr:first-of-type td{writing-mode:vertical-lr;word-break:break-all;font-size:.8em}.gameList .gameParticipants .controlTextValues{background-color:rgba(0,0,0,0)}.gameList .gameParticipants .controlTextValues:first-of-type{margin-top:0}.gameList .gameListPosition{overflow:hidden;background-color:#345c62}.gameList .gameListPlayerName{display:block;width:120px;padding:0 5px}.gameList .gameListPoints{overflow:hidden;min-width:25px;background-color:#345c62;max-width:80px}.gameList .gameListTime{overflow:hidden;min-width:45px;padding:0 5px}.gameList .gameListTextArray{margin-top:15px}.gameList .winnerBox .headerPlayer img{position:relative;top:5px;margin-right:5px}.gameList .gameProgressionInfoItem{margin:10px;text-align:left}.gameList .gameProgressionInfoItem .fiascosText{margin-top:10px}.gameList .gameProgressionItem img{margin-right:10px;border-radius:15px;display:inline-block}.gameList .gameProgressionItem ul{padding-left:0px}.gameList .gameProgressionItem li{list-style-type:circle;text-align:left}",""]),t.Z=r},54350:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.isDraw=void 0;var r=o(a(67294)),l=a(62936);function s(e){return e.players.length>1&&e.players[0].totalPoints===e.players[1].totalPoints&&e.players[0].totalTime===e.players[1].totalTime&&(!e.players[0].totalGateProgression||e.players[0].totalGateProgression===e.players[1].totalGateProgression)}t.isDraw=s,t.default=function(e){var t=e.game,a=(0,l.useTranslation)(["main"]).t;return s(t)?r.createElement("div",{className:""},a("description.empate")):r.createElement(r.Fragment,null,a("description.ganador"),": ",r.createElement("b",null,t.players[0].name))}},37789:function(e,t,a){e.exports=a.p+"99d032ea73dcde64f5dc.png"}}]);