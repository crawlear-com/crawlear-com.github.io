(this["webpackJsonpcrawlear.com"]=this["webpackJsonpcrawlear.com"]||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},156:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},469:function(e,t,n){},470:function(e,t,n){},471:function(e,t,n){},472:function(e,t,n){},473:function(e,t,n){},474:function(e,t,n){},475:function(e,t,n){},476:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(138),r=n.n(i),c=(n(149),n(6)),s=(n(150),n(151),n(152),n(153),n.p+"static/media/logo.7c7a4747.png"),l=n(3),u=n(477),d=n(4),p=n(61),m=n(62),j=function(){function e(){Object(p.a)(this,e)}return Object(m.a)(e,null,[{key:"millisToTime",value:function(e){var t=Math.floor(e/6e4);return{h:Math.floor(t/60),m:t,s:(e%6e4/1e3).toFixed(0),mm:e%1e3}}},{key:"timeToMillis",value:function(e,t,n){var a=new Date,o=new Date;return o.setHours(0),o.setMinutes(0),o.setSeconds(0),a.setHours(e),a.setMinutes(t),a.setSeconds(n),a.getTime()-o.getTime()}},{key:"printTime",value:function(e){return"".concat(String(e.h).padStart(2,"0"),":").concat(String(e.m).padStart(2,"0"),":").concat(String(e.s).padStart(2,"0"),":").concat(String(e.mm).padStart(3,"0"))}},{key:"randomizeArray",value:function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e}}]),e}(),b=(n(154),n(0));var h=function(e){var t=e.callback,n=e.minValue,o=e.maxValue,i=e.initialValue,r=e.value,c=a.useRef();function s(e,a){var i=Number(e.current.innerText)+a;i>=n&&i<=o&&(e.current.innerText=i,t&&t(i))}return!r&&(r=i),Object(b.jsxs)("div",{className:"picker",children:[Object(b.jsx)("button",{className:"picker--arrowUp",onClick:function(e){s(c,1)}}),Object(b.jsx)("div",{className:"picker--value",ref:c,children:r}),Object(b.jsx)("button",{className:"picker--arrowDown",onClick:function(e){s(c,-1)}})]})};n(156);var x=function(e){var t=e.player,n=e.i,o=e.onRemovePlayer,i=e.onHandicapChange,r=Object(u.a)().t,c=a.useRef();return Object(b.jsxs)("li",{ref:c,className:"closed importantNote rounded playerListItem",value:t.name,children:[Object(b.jsxs)("div",{className:"playerBox",onClick:function(e){c.current.classList.toggle("closed")},children:[Object(b.jsx)("img",{src:t.avatar,alt:"avatar"}),t.name," (",t.handicap,")",Object(b.jsx)("button",{className:"buttonControlTextMinus",id:n,onClick:function(e){e.stopPropagation(),o&&o(e)},children:"-"})]}),Object(b.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:"pickerContainer timerContainer rounded rounded2 handicapBox",children:[Object(b.jsx)("div",{className:"handicapLabel",children:r("description.handicap")}),Object(b.jsx)(h,{value:t.handicap,initialValue:t.handicap,callback:function(e){i&&i(e,n)},minValue:-40,maxValue:40})]})]},n)},g=n(37);function y(){return document.location.href.indexOf("localhost")>=0}var f=function(){function e(){Object(p.a)(this,e)}return Object(m.a)(e,null,[{key:"init",value:function(e){y()||g.a.initialize(e)}},{key:"pageview",value:function(e){y()||g.a.pageview(e)}},{key:"event",value:function(e,t,n){y()||g.a.event({category:e,action:t,value:n})}}]),e}();n(164);function O(e){if(e.length&&"undefined"===typeof e[0].handicap)for(var t=0;t<e.length;t++)e[t].handicap=0;return e}var v=function(e){var t=e.onPlayerNumerChange,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.serialize,i=void 0===o?JSON.stringify:o,r=n.deserialize,s=void 0===r?JSON.parse:r,l=a.useState((function(){var n=window.localStorage.getItem(e);return n?O(s(n)):"function"===typeof t?t():t})),u=Object(c.a)(l,2),d=u[0],p=u[1],m=a.useRef(e);return a.useEffect((function(){m!==e&&window.localStorage.removeItem(m),window.localStorage.setItem(e,i(d))}),[e,i,d]),[d,p]}("players"),o=Object(c.a)(n,2),i=o[0],r=o[1],s=a.useRef(null),l=Date.now(),p=Object(u.a)().t;function m(e){var n=Object(d.a)(i);f.event("menu","removePlayer",n[e.target.id].name),delete n[e.target.id],n=n.filter((function(e){return e})),r(n),t&&t(n)}function h(e,n){var a=Object(d.a)(i);a[n].handicap=e,r(a),t&&t(a)}a.useEffect((function(){t&&t(i)}),[i]);var g=i.length?p("description.jugadores"):p("description.nojugadores");return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"players rounded rounded1",children:[Object(b.jsx)("div",{className:"headerText bold",children:g}),Object(b.jsx)("ul",{className:"playersList",children:i.map((function(e,t){return Object(b.jsx)(x,{player:e,i:t,onHandicapChange:h,onRemovePlayer:m})}))}),i.length>1?Object(b.jsx)("button",{onClick:function(){var e=j.randomizeArray(i);f.event("menu","randomPlayerOrder",e.length),r(e),t&&t(e)},children:p("description.ordenaleatorio")}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)("div",{className:"headerText",children:p("description.nuevojugador")}),Object(b.jsx)("input",{id:l,ref:s}),Object(b.jsx)("button",{className:"buttonControlTextPlus",onClick:function(){var e=s.current.value;if(e&&0!==e.trim().length){var n=Object(d.a)(i);n.push({id:i.length,name:s.current.value,avatar:"".concat("https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=").concat(s.current.value),handicap:0,time:0,points:0}),f.event("menu","addPlayer",s.current.value),s.current.value="",r(n),t&&t(n)}},children:"+"})]})})};n(165);var T=function(e){var t=e.onGameTypeChange,n=e.onPointsTypeChange,o=e.selectedGameType,i=void 0===o?0:o,r=e.selectedPointsType,s=void 0===r?0:r,l=Object(u.a)().t,d=[l("gametype.tiempo"),l("gametype.puntos"),l("gametype.rey")],p=[Object(b.jsx)("div",{children:l("gametype.modojuegotiempo")}),Object(b.jsx)("div",{children:l("gametype.modojuegopuntos")}),Object(b.jsx)("div",{children:l("gametype.modojuegorey")})],m=[l("gametype.simple"),l("gametype.completa")],j=[Object(b.jsx)("div",{children:l("gametype.descripcionPuntosSimple")}),Object(b.jsx)("div",{children:l("gametype.descripcionPuntosCompleta")})],h=a.useState({gameType:i,pointsType:s}),x=Object(c.a)(h,2),g=x[0],y=x[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"gameType rounded1 rounded",children:[Object(b.jsxs)("div",{className:"headerText bold",children:[l("gametype.modojuego"),":"]}),Object(b.jsxs)("select",{defaultValue:g.gameType,onChange:function(e){var n=e.target.selectedIndex;t&&t(n),y({gameType:n,pointsType:g.pointsType})},children:[Object(b.jsx)("option",{value:"0",children:d[0]}),Object(b.jsx)("option",{value:"1",children:d[1]}),Object(b.jsx)("option",{value:"2",children:d[2]})]}),Object(b.jsx)("div",{className:"gameSelectText",children:p[g.gameType]})]}),Object(b.jsxs)("div",{className:"gameType rounded1 rounded",children:[Object(b.jsxs)("div",{className:"headerText bold",children:[l("gametype.tipopuntuacion"),":"]}),Object(b.jsxs)("select",{defaultValue:g.pointsType,onChange:function(e){var t=e.target.selectedIndex;n&&n(t),y({gameType:g.gameType,pointsType:t})},children:[Object(b.jsx)("option",{value:"0",children:m[0]}),Object(b.jsx)("option",{value:"1",children:m[1]})]}),Object(b.jsx)("div",{className:"gameSelectText",children:j[g.pointsType]})]})]})},w=n.p+"static/media/img00.612023be.png",C=function(e){var t=e.embedId;return Object(b.jsx)("div",{className:"video-responsive",children:Object(b.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})};n(166);var N=function(){var e=Object(u.a)().t;return Object(b.jsxs)("div",{className:"aboutUsContent",children:[Object(b.jsx)("b",{children:"crawlear.com"})," ",e("content.welcomeMessage"),Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{className:"contentImg",alt:"crawlers in action",src:w}),Object(b.jsx)("figcaption",{children:Object(b.jsx)("a",{href:"https://www.instagram.com/p/CT7FX_CMag7/",children:"img @takezorc"})})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("div",{className:"inline bold",children:e("description.instrucciones")}),": ",e("content.instrucciones")]}),Object(b.jsx)("p",{children:e("content.instrucciones1")}),Object(b.jsx)(C,{embedId:"1MxKhbPxreI"})]})};var P=function(e){var t=e.onPlayerNumerChange,n=e.onGameTypeChange,a=e.onPointsTypeChange,o=e.beginGame,i=e.alertBoxRef,r=e.gameSelected,c=e.pointsTypeSelected,s=Object(u.a)().t;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(v,{onPlayerNumerChange:function(e){t(e,i)}}),Object(b.jsx)(T,{selectedGameType:r,selectedPointsType:c,onGameTypeChange:function(e){n(e)},onPointsTypeChange:function(e){a(e)}}),Object(b.jsx)("p",{children:Object(b.jsx)("button",{className:"importantNote",onClick:function(){o(i,s)},children:s("description.empezar")})})]})};n(167);var S=function(e){e.mode;var t=e.goToMenu,n=e.players,a=e.winnerId,o=Object(u.a)().t,i=function(){var e=!1,t=0;for(;!e;)n[t].id===a?e=!0:t++;return t}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"winnerBox importantNote rounded",children:[o("description.ganador"),": ",Object(b.jsxs)("b",{children:[n[i].name,Object(b.jsx)("b",{})]})," ",Object(b.jsx)("br",{}),o("description.tiempo"),": ",j.printTime(j.millisToTime(n[i].time))," ",Object(b.jsx)("br",{}),o("description.puntos"),": ",n[i].points,"  ",Object(b.jsx)("br",{}),o("description.handicap"),": ",n[i].handicap,"  ",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"".concat(o("description.total"),": ").concat(n[i].points+n[i].handicap)})]}),Object(b.jsx)("div",{className:"pointsTable rounded rounded1",children:n.map((function(e,t){return Object(b.jsxs)("div",{className:"winnerBox",value:e.name,children:[Object(b.jsx)("div",{className:"headerPlayer rounded2 rounded bold",children:e.name}),o("description.tiempo"),": ",j.printTime(j.millisToTime(e.time)),Object(b.jsx)("br",{}),o("description.puntos"),": ",e.points," ",Object(b.jsx)("br",{}),o("description.handicap"),": ",e.handicap,"  ",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"".concat(o("description.total"),": ").concat(e.points+e.handicap)})]},t)}))}),Object(b.jsx)("button",{onClick:function(){t()},children:o("description.atras")})]})};var V=function(e){var t=e.time,n=e.onPlayPauseChange,a=j.millisToTime(t),o=Object(u.a)().t;return Object(b.jsxs)("div",{className:"timerContainer rounded rounded2",children:[" ",o("description.tiempo"),":",Object(b.jsx)("div",{className:"timer",children:"".concat(String(a.h).padStart(2,"0"),":").concat(String(a.m).padStart(2,"0"),":").concat(String(a.s).padStart(2,"0"),":").concat(String(a.mm).padStart(3,"0"))}),Object(b.jsx)("button",{className:"timerPlayButton importantNote",onClick:n,children:"play/pause"})]})};n(469);var k=function(e){var t=e.text,n=e.step,o=e.value,i=e.onValueChange,r=n<0,c=r?o<0:o>0,s=a.useRef();function l(e){(!r&&o+e>=0||r&&o+e<=0)&&(f.event("menu","pointValueChanged","".concat(t," : ").concat(e)),i(e))}function u(e){return c?"bold ".concat(e):"".concat(e)}return Object(b.jsxs)("div",{className:"controlText",children:[Object(b.jsx)("button",{className:"buttonControlTextPlus",onClick:function(){s.current.focus(),l(n)},children:"+"}),Object(b.jsx)("button",{className:"buttonControlTextMinus",onClick:function(){s.current.focus(),l(-n)},children:"-"}),Object(b.jsxs)("div",{className:u("controlTextText"),children:[t,": "]}),Object(b.jsx)("div",{ref:s,className:u("controlTextValue"),children:o})]})};var M=function(e){var t=e.players,n=e.player,a=e.pointsMode,o=e.onValueChange,i=[],r=Object(u.a)().t;return 1===a?(i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[0],onValueChange:function(e){o(e,n,0)},initialValue:0,text:r("points.vuelco"),step:5})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[1],onValueChange:function(e){o(e,n,1)},initialValue:0,text:r("points.tocar"),step:3})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[2],onValueChange:function(e){o(e,n,2)},initialValue:0,text:r("points.puerta"),step:2})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[3],onValueChange:function(e){o(e,n,3)},initialValue:0,text:r("points.saltoobstaculo"),step:5})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[4],onValueChange:function(e){o(e,n,4)},initialValue:0,text:r("points.reparacion"),step:5})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[5],onValueChange:function(e){o(e,n,5)},initialValue:0,text:r("points.winch"),step:3})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[6],onValueChange:function(e){o(e,n,6)},initialValue:0,text:r("points.puertaprogresion"),step:-1})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[7],onValueChange:function(e){o(e,n,7)},initialValue:0,text:r("points.distancia"),step:1})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[8],onValueChange:function(e){o(e,n,8)},initialValue:0,text:r("points.anclajeindebido"),step:5})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[9],onValueChange:function(e){o(e,n,9)},initialValue:0,text:r("points.juez"),step:1}))):(i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[0],onValueChange:function(e){o(e,n,0)},initialValue:0,text:r("points.vuelco"),step:5})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[1],onValueChange:function(e){o(e,n,1)},initialValue:0,text:r("points.tocar"),step:3})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[2],onValueChange:function(e){o(e,n,2)},initialValue:0,text:r("points.puerta"),step:2})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[3],onValueChange:function(e){o(e,n,3)},initialValue:0,text:r("points.saltoobstaculo"),step:5})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[4],onValueChange:function(e){o(e,n,4)},initialValue:0,text:r("points.reparacion"),step:5})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[5],onValueChange:function(e){o(e,n,5)},initialValue:0,text:r("points.winch"),step:3})),i.push(Object(b.jsx)(k,{value:t[n].controlTextValues[6],onValueChange:function(e){o(e,n,6)},initialValue:0,text:r("points.puertaprogresion"),step:-1}))),i};n(470);var E=function(e){var t=e.onMaxTimeChange,n=(e.hours,e.minutes,e.seconds,a.useState(0)),o=Object(c.a)(n,2),i=(o[0],o[1]),r=a.useState([]),s=Object(c.a)(r,2),l=s[0],u=s[1];function p(e,n){var a=Object(d.a)(l);a[n]=e,e=function(e){var t=Number(e[0])||0,n=Number(e[1])||0,a=Number(e[2])||0;return j.timeToMillis(t,n,a)}(a),i(e),u(a),t&&t(e)}return Object(b.jsxs)("div",{className:"pickerContainer timerContainer rounded rounded2",children:[Object(b.jsx)(h,{initialValue:0,minValue:0,maxValue:24,callback:function(e){p(e,0)}}),Object(b.jsx)("div",{className:"maxTimePickerContainer--separator",children:"h"}),Object(b.jsx)(h,{initialValue:0,minValue:0,maxValue:60,callback:function(e){p(e,1)}}),Object(b.jsx)("div",{className:"maxTimePickerContainer--separator",children:"m"}),Object(b.jsx)(h,{initialValue:0,minValue:0,maxValue:60,callback:function(e){p(e,2)}}),Object(b.jsx)("div",{className:"maxTimePickerContainer--separator",children:"s"})]})},I=(n(471),"play"),A="pause",R=0,B=null;function F(e){for(var t=e.maxPoints,n=e.maxTime,a=e.mode,o=e.players,i=e.step,r={millis:0,timeStart:0,players:Object(d.a)(o),currentPlayer:0,mode:a,maxTime:n,maxPoints:t,state:A,step:i},c=0;c<r.players.length;c++){r.players[c].controlTextValues=new Array(1===a?10:7);for(var s=0;s<r.players[c].controlTextValues.length;s++)r.players[c].controlTextValues[s]=0}return r}var z=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,i=a.useState((function(){return R=0,F({maxPoints:0,maxTime:0,mode:t,players:o,step:0})})),r=Object(c.a)(i,2),s=r[0],p=r[1],m=Object(u.a)().t;function x(){var e=F(s);window.scrollTo(0,0),e.state=A,s.maxPoints<=s.players[s.currentPlayer].points&&s.maxPoints>0||s.maxTime<=R&&s.maxTime>0?(e.players[s.currentPlayer].time=s.maxTime>0?s.maxTime:R,e.players[s.currentPlayer].points=s.maxPoints>0?s.maxPoints:e.players[s.currentPlayer].points):e.players[s.currentPlayer].time=R,f.event("play","endPlayer",e.players[e.currentPlayer].name),s.currentPlayer+1<s.players.length?(R=0,e.millis=0,e.currentPlayer=s.currentPlayer+1,p((function(t){return Object(l.a)(Object(l.a)({},t),e)}))):n&&n(function(e){var t=Object(d.a)(e.players);return t.sort((function(e,t){var n=e.points+e.handicap-(t.points+t.handicap);return 0===n?e.time-t.time:n})),t[0].id}(s))}if(a.useEffect((function(){f.pageview("/totaltimegame/")}),[]),a.useEffect((function(){var e=Object(l.a)(Object(l.a)({},s),{},{timeStart:Date.now()});if(s.state===I)B&&clearInterval(B),e.millis=R,B=setInterval((function(){!function(e){e.maxPoints<=e.players[e.currentPlayer].points&&e.maxPoints>0||e.maxTime<=R&&e.maxTime>0||(R+=10,p((function(e){return Object(l.a)(Object(l.a)({},e),{},{millis:R})})))}(e)}),10),p((function(t){return Object(l.a)(Object(l.a)({},t),e)}));else{var t=R+(Date.now()-e.timeStart);e.millis=t,R=t,B&&clearInterval(B),B=null,p((function(t){return Object(l.a)(Object(l.a)({},t),e)}))}}),[s.state]),s.players.length>0){var g,y,O,v=s.players[s.currentPlayer],T=1===s.mode?Object(b.jsx)(E,{onMaxTimeChange:function(e){f.event("menu","maxTimeSet",e),p((function(t){return Object(l.a)(Object(l.a)({},t),{},{maxTime:e})}))},hours:0,minutes:0,seconds:0}):Object(b.jsx)(b.Fragment,{});return g=M({players:s.players,player:s.currentPlayer,pointsMode:s.mode,onValueChange:function(e,t,n){!function(e,t,n){var a=Object(d.a)(s.players);s.maxPoints<=s.players[s.currentPlayer].points+s.players[s.currentPlayer].handicap&&s.maxPoints>0||s.maxTime<=R&&s.maxTime>0?(s.maxPoints&&(a[t].points=Math.max(s.maxPoints,a[t].points)),s.maxTime&&(a[t].time=Math.max(s.maxPoints,a[t].time)),(s.maxTime||s.maxPoints)&&p((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:a})}))):(a[t].controlTextValues=Object(d.a)(a[t].controlTextValues),a[t].controlTextValues[n]+=e,a[t].points+=e,p((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:a})})))}(e,t,n)}}),1===s.mode&&0===s.step?Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:m("content.maxTimeText1")}),T,Object(b.jsx)("p",{children:m("content.maxTimeText2")}),Object(b.jsx)("div",{className:"pickerContainer timerContainer rounded rounded2",children:Object(b.jsx)(h,{minValue:0,maxValue:40,callback:function(e){var t;t=e,f.event("menu","maxPointsSet",t),p((function(e){return Object(l.a)(Object(l.a)({},e),{},{maxPoints:t})}))},initialValue:0})}),Object(b.jsx)("button",{onClick:function(){p((function(e){return Object(l.a)(Object(l.a)({},e),{},{step:1})}))},className:"rounded rounded2 importantNote",children:m("description.continuar")})]}):(1===s.mode&&((s.maxPoints<=s.players[s.currentPlayer].points+s.players[s.currentPlayer].handicap&&s.maxPoints>0||s.maxTime<=R&&s.maxTime>0)&&(f.event("play","fiasco",s.players[s.currentPlayer].name),O=Object(b.jsx)("div",{className:"rounded importantNote",children:"FiASCO!"})),y=Object(b.jsxs)("div",{className:"fiascoBox rounded rounded2 bold",children:[O,m("description.tiempomaximo"),": ",j.printTime(j.millisToTime(s.maxTime))," ",Object(b.jsx)("br",{}),m("description.puntosmaximo"),": ",s.maxPoints]})),Object(b.jsxs)("div",{className:"gameContainer",children:[Object(b.jsx)("div",{className:"playersList",children:Object(b.jsxs)("div",{className:"playerListItem importantNote rounded",children:[Object(b.jsx)("img",{src:v.avatar,alt:"avatar"}),v.name]})}),y,Object(b.jsxs)("div",{className:"totalTimeContainer rounded",children:["".concat(m("description.handicap")," : ").concat(v.handicap),Object(b.jsx)("br",{}),m("description.puntos"),": ",v.points,Object(b.jsx)("br",{}),"---",Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"inline bold",children:[m("description.total")," :"]})," ",v.points+v.handicap]}),Object(b.jsx)(V,{state:s.state,time:s.millis,onPlayPauseChange:function(){s.state===A?(s.state=I,f.event("play","timePlay","")):(s.state=A,f.event("play","timePause","")),p((function(e){return Object(l.a)(Object(l.a)({},e),{},{state:s.state})}))}}),Object(b.jsx)("div",{className:"controlTextContainer rounded rounded1",children:g}),Object(b.jsx)("button",{onClick:function(){var e=Object(l.a)({},s);window.scrollTo(0,0),f.event("play","reset",e.players[s.currentPlayer].name),R=0,(e=F(e)).players[s.currentPlayer].time=0,e.players[s.currentPlayer].points=0,e.currentPlayer=s.currentPlayer,e.state=A,p((function(t){return Object(l.a)(Object(l.a)({},t),e)}))},className:"resetButton",children:m("description.reset")}),Object(b.jsxs)("button",{className:"importantNote",onClick:function(){x()},children:[m("description.finjugador")," (",v.name,")"]}),Object(b.jsx)("p",{})]}))}};n(472);var G=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,i=a.useState((function(){return function(e){for(var t=e.mode,n=e.players,a={players:Object(d.a)(n),mode:t,order:Object(d.a)(n)},o=0;o<a.players.length;o++){a.players[o].controlTextValues=new Array(1===t?10:7);for(var i=0;i<a.players[o].controlTextValues.length;i++)a.players[o].controlTextValues[i]=0}return a}({mode:t,players:o})})),r=Object(c.a)(i,2),s=r[0],p=r[1],m=Object(u.a)().t;function j(e,t,n){var a=Object(d.a)(s.players),o=function(e,t){var n=Object(d.a)(t);return n.push(n.splice(e,1)[0]),n}(s.order.findIndex((function(e){return e.id===s.players[t].id})),s.order);a[t].points+=e,a[t].controlTextValues=Object(d.a)(a[t].controlTextValues),a[t].controlTextValues[n]+=e,p((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:a,order:o})}))}a.useEffect((function(){g.a.pageview("/kinggame/")}),[]);var h=[];h.push(Object(b.jsxs)("div",{children:[m("description.ordenruta"),":"]}));for(var x=0;x<s.players.length;x++)h.push(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"controlTextContainerQueue rounded bold",children:[s.order[x].name,": ",s.order[x].points+s.order[x].handicap," ptos"]})})}));h.push(Object(b.jsxs)("p",{children:[m("description.puntos").toUpperCase(),":"]}));for(var y=0;y<s.players.length;y++)h.push(Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"playerInfo",children:[Object(b.jsxs)("div",{className:"headerPlayer importantNote rounded2 rounded",children:[Object(b.jsx)("div",{className:"bold",children:s.players[y].name}),"".concat(m("description.handicap")," : ").concat(s.players[y].handicap),Object(b.jsx)("br",{}),m("description.total"),": ",s.players[y].points+s.players[y].handicap]}),Object(b.jsx)("div",{className:"controlTextContainer rounded rounded1",children:M({players:s.players,player:y,pointsMode:s.mode,onValueChange:function(e,t,n){j(e,t,n)}})})]})}));return h.push(Object(b.jsx)("button",{className:"importantNote",onClick:function(){for(var e=0,t=0;t<s.players.length;t++)s.players[t].points+s.players[t].handicap<s.players[e].points+s.players[e].handicap&&(e=t);n&&n(s.players[e].id)},children:m("description.fin")})),h};function L(e){for(var t=e.mode,n=e.players,a={currentPlayer:0,players:Object(d.a)(n),mode:t,points:0},o=0;o<a.players.length;o++){a.players[o].controlTextValues=new Array(1===t?10:7);for(var i=0;i<a.players[o].controlTextValues.length;i++)a.players[o].controlTextValues[i]=0}return a}var D=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,i=a.useState((function(){return L({mode:t,players:o})})),r=Object(c.a)(i,2),s=r[0],p=r[1],m=Object(u.a)().t;if(a.useEffect((function(){f.pageview("/pointsgame/")}),[]),s.players.length>0){var j,h=s.players[s.currentPlayer];return j=M({players:s.players,player:s.currentPlayer,pointsMode:s.mode,onValueChange:function(e,t,n){!function(e,t,n){o[t].controlTextValues=Object(d.a)(o[t].controlTextValues),o[t].controlTextValues[n]+=e,o[t].points+=e,p((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:o})}))}(e,t,n)}}),Object(b.jsxs)("div",{className:"gameContainer",children:[Object(b.jsx)("div",{className:"playerInfo",children:Object(b.jsxs)("div",{className:"headerPlayer importantNote rounded2 rounded",children:[Object(b.jsx)("div",{className:"bold",children:h.name}),"".concat(m("description.handicap")," : ").concat(h.handicap),Object(b.jsx)("br",{}),"".concat(m("description.total")," ").concat(m("description.puntos")),": ",h.points+h.handicap]})}),Object(b.jsx)("div",{className:"controlTextContainer rounded rounded1",children:j}),Object(b.jsx)("button",{onClick:function(){window.scrollTo(0,0),s.players[s.currentPlayer].points=0,f.event("play","reset",s.players[s.currentPlayer].name),p((function(e,t){return Object(l.a)(Object(l.a)({},L(e)),{},{players:Object(d.a)(e.players),currentPlayer:e.currentPlayer})}))},children:m("description.reset")}),Object(b.jsxs)("button",{className:"importantNote",onClick:function(){f.event("play","endPlayer",s.players[s.currentPlayer].name),s.currentPlayer+1<s.players.length?p((function(e,t){return Object(l.a)(Object(l.a)({},L(e)),{},{points:0,currentPlayer:e.currentPlayer+1})})):n&&n(function(e){var t=Object(d.a)(e.players);return t.sort((function(e,t){var n=e.points+e.handicap-(t.points+t.handicap);return 0===n?e.id-t.id:n})),t[0].id}(s))},children:[m("description.finjugador")," (",h.name,")"]}),Object(b.jsx)("p",{})]})}};var q=function(e){var t=e.onGameEnd,n=e.goToMenu,a=e.gameSelected,o=e.players,i=e.pointsTypeSelected,r=Object(u.a)().t,c=[];return 0===a?c.push(Object(b.jsx)(z,{mode:i,onGameEnd:function(e){t(e)},players:o})):2===a?c.push(Object(b.jsx)(G,{onGameEnd:function(e){t(e)},players:o,mode:i})):1===a&&c.push(Object(b.jsx)(D,{mode:i,onGameEnd:function(e){t(e)},players:o})),c.push(Object(b.jsx)("button",{onClick:function(){n()},children:r("description.atras")})),c};n(473);var U=function(e){var t=a.useRef(),n=[],o=a.useState({players:[],winner:0,gameStatus:0,gameSelected:0,pointsTypeSelected:0}),i=Object(c.a)(o,2),r=i[0],s=i[1];function u(){window.scrollTo(0,0),s({players:r.players,winner:r.winner,gameStatus:0,gameSelected:r.gameSelected,pointsTypeSelected:r.pointsTypeSelected})}switch(a.useEffect((function(){0===r.gameStatus&&f.pageview("/menu/")}),[r.gameStatus]),n.push(Object(b.jsx)("div",{ref:t,className:"hideAlert alertBox"})),r.gameStatus){case 0:n.push(Object(b.jsx)(P,{onPlayerNumerChange:function(e,t){var n="addPlayer";!function(e){e.current.classList.add("hideAlert"),e.current.innerHTML=""}(t),r.players.length>e.length&&(n="removePlayer"),f.event("menu",n,e.length),s({players:e,winner:r.winner,gameStatus:r.gameStatus,gameSelected:r.gameSelected,pointsTypeSelected:r.pointsTypeSelected})},onGameTypeChange:function(e){f.event("menu","playModeChange",e),s({players:r.players,winner:r.winner,gameStatus:r.gameStatus,gameSelected:e,pointsTypeSelected:r.pointsTypeSelected})},onPointsTypeChange:function(e){f.event("menu","pointsModeChange",e),s({players:r.players,winner:r.winner,gameStatus:r.gameStatus,gameSelected:r.gameSelected,pointsTypeSelected:e})},beginGame:function(e,t){if(window.scrollTo(0,0),r.players.length>0){var n=Object(l.a)({},r);f.event("menu","beginGame",r.players.length),s({players:n.players,winner:n.winner,gameStatus:1,gameSelected:n.gameSelected,pointsTypeSelected:n.pointsTypeSelected})}else f.event("menu","beginGame",0),function(e,t){t.current.classList.remove("hideAlert"),t.current.innerHTML=e}(t("error.nojugadores"),e)},alertBoxRef:t,gameSelected:r.gameSelected,pointsTypeSelected:r.pointsTypeSelected}));break;case 1:n.push(Object(b.jsx)(q,{goToMenu:u,onGameEnd:function(e){window.scrollTo(0,0),f.event("menu","winner",e),s({players:r.players,winner:e,gameStatus:2,gameSelected:r.gameSelected,pointsTypeSelected:r.pointsTypeSelected})},gameSelected:r.gameSelected,players:r.players,pointsTypeSelected:r.pointsTypeSelected}));break;default:n.push(Object(b.jsx)(S,{mode:r.pointsTypeSelected,players:r.players,winnerId:r.winner,goToMenu:u}))}return n},H=n.p+"static/media/img01.de805005.png",W=n.p+"static/media/img02.1d4f3699.png",J=n.p+"static/media/img03.f66fba6c.png";n(474);var X=function(e){var t=e.onLinkClicked,n=Object(u.a)().t;return a.useEffect((function(){f.pageview("/aboutus/")}),[]),Object(b.jsxs)("div",{className:"aboutUsContent",children:[Object(b.jsx)("b",{children:"crawlear.com"})," ",n("content.aboutus"),Object(b.jsx)("img",{src:H,alt:"crawler en accion"}),Object(b.jsx)("p",{children:n("content.aboutus1")}),Object(b.jsx)("img",{src:W,alt:"crawler en accion2"}),Object(b.jsx)("p",{children:n("content.aboutus2")}),Object(b.jsx)("img",{src:J,alt:"crawler en accion3"}),Object(b.jsx)("p",{children:Object(b.jsxs)("a",{onClick:t,href:"#void",children:[">"," Volver"]})})]})};var K=function(){return Object(b.jsx)("div",{className:"Footer",children:"\xa9crawlear.com 2021"})},Y=(n(475),n.p+"static/media/1 24 REGLAMENTO CRAWLER DEPORTIVO Y TECNICO 2021 V1 BORRADOR 19-1-2021.70aee093.pdf");var Z=function(e){var t=e.onLinkClicked,n=a.useState(!1),o=Object(c.a)(n,2),i=o[0],r=o[1];function s(){r(!i)}function l(e){t(e.target.dataset.link)}return i?Object(b.jsxs)("div",{className:"rounded menuContainer open",onClick:s,children:[Object(b.jsx)("div",{className:"burguerMenuBar"}),Object(b.jsx)("div",{className:"burguerMenuBar"}),Object(b.jsx)("div",{className:"burguerMenuBar"}),Object(b.jsx)("div",{className:"linksContainer",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#void","data-link":"aboutus",onClick:l,children:"About us"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/privacy.html",children:"Privacy Policy"})}),Object(b.jsx)("li",{children:"-"}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.aecar.org/modalidades.php?tipo=crawler",children:"AECAR Crawler"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:Y,"data-link":"aboutus",onClick:l,children:"1/24 Reglamento Deportivo oficial 2021"})})]})})]}):Object(b.jsxs)("div",{className:"rounded menuContainer closed",onClick:s,children:[Object(b.jsx)("div",{className:"burguerMenuBar"}),Object(b.jsx)("div",{className:"burguerMenuBar"}),Object(b.jsx)("div",{className:"burguerMenuBar"})]})};var Q=function(){var e,t=o.a.useState(0),n=Object(c.a)(t,2),a=n[0],i=n[1];return o.a.useEffect((function(){f.init("UA-156750890-2")}),[]),0===a?e=Object(b.jsx)(U,{}):1===a&&(e=Object(b.jsx)(X,{onLinkClicked:function(){i(0)}})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)(Z,{onLinkClicked:function(e){i(1)}}),Object(b.jsx)("img",{src:s,alt:"logo"})]}),Object(b.jsx)("div",{className:"AppMainContainer",children:e}),Object(b.jsx)("div",{className:"adsContainer"}),Object(b.jsx)(K,{})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,478)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),i(e),r(e)}))},$=n(93),ee=n(49),te=n(144);$.a.use(te.a).use(ee.e).init({debug:!0,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{content:{aboutus:"arises from the hobby of a group of friends after discovering the world of the rc crawler, entering the 1/24 scale.",aboutus1:"After going out on the field a couple of times, we realized that it would be a good idea to have a scoreboard for the matches, where we can manage the points in the different game modes that we practice.",aboutus2:"If you have any questions, comments or suggestions, do not hesitate to contact us at crawlear.com@gmail.com",aboutus3:"Barcelona (Spain) 2021",welcomeMessage:'is a score board for your crawler pachangas (spanish name for a "friends organized game").',instrucciones:"First add the players, select the game mode, the points type and push the Begin button.",instrucciones1:"By clicking on the player you can define a positive (initial advantage) or negative (initial disadvantage) handicap. At the end of the game, the handicap will be added to the player's points to calculate the total points.",maxTimeText1:"Select the maximum time (0 if you do not want to apply maximum time):",maxTimeText2:"Select the maximum points (0 if you do not want to apply a maximum score):"},error:{nojugadores:"First add the players and select the type of game and score"},description:{nojugadores:"No players",jugadores:"Players",nuevojugador:"New player",ordenaleatorio:"Random order",empezar:"Begin",atras:"Back",ganador:"WINNER",tiempo:"TIME",puntos:"POINTS",finjugador:"end player",total:"TOTAL",ordenruta:"Rute ORDER",fin:"End",reset:"Reset",continuar:"Continue",tiempomaximo:"MAX TIME",zonas:"Zones",puntosmaximo:"MAX POINTS",handicap:"handicap",instrucciones:"Instructions"},points:{vuelco:"overturn",tocar:"touch",puerta:"gate",saltoobstaculo:"obstacle jump",reparacion:"repair",winch:"winch",puertaprogresion:"progression gate",distancia:"distance",anclajeindebido:"improper anchor",juez:"judge"},gametype:{modojuego:"Game mode",tipopuntuacion:"Points type",modojuegotiempo:"A section is chosen and all participants will run it one by one and in the pre-established order. You run to points with time and maximum score and the possibility of making a fiasco. The winner will be the player with less points with a time tiebreaker.",modojuegopuntos:"A section is chosen and all participants will run it one by one and in the pre-established order. Points are run and the winner will be the player with the lowest score.",modojuegorey:"There is no pre-established route and the first participant, the King, chooses the path when playing. All participants run at the same time in line following the same route as the King. If a player scores he goes to the end of the queue. The winner will be the player with the lowest score.",simple:"Simple",completa:"Complete",descripcionPuntosSimple:"Score: Winch, touch, obstacle jump, repair, door, overturn and progression door. There is no time or maximum points. There is no max time or max points",descripcionPuntosCompleta:"Score: Winch, touch, distance, obstacle jump, repair, door, overturn, progression door, improper anchor and judge. Optional time and maximum points. In this mode it is possible to apply maximum time and / or maximum score and make a fiasco in case of exceeding it. In the event of a fiasco, the player will score the maximum between the defined times / points and the current score.",tiempo:"Time",puntos:"Points",rey:"The King"}}},es:{translation:{content:{aboutus:"surge a partir de la afici\xf3n de un grupo de amigos despu\xe9s de descubrir el mundo del crawler rc, entrando por la escala 1/24.",aboutus1:"Despu\xe9s de salir al terreno de juego un par de veces nos dimos cuenta que ser\xeda una buena idea tener un marcador para las partidas, donde poder gestionar los puntos en los diferentes modos de juegos que practicamos.",aboutus2:"Si tienes alguna duda, comentario o sugerencia no dudes en contactar con nosotros en crawlear.com@gmail.com",aboutus3:"takezoRc, Barcelona 2021",welcomeMessage:"es un tablero de puntuaci\xf3n para tus pachangas de crawler con los amigos.",instrucciones:"Primero a\xf1ade los jugadores, selecciona el modo de juego, el tipo de puntuaci\xf3n y pulsa Empezar.",instrucciones1:"Pulsando en el jugador podr\xe1s definir un handicap positivo (ventaja inicial) o negativo (desventaja inicial). A final de partida el handicap se sumar\xe1 a los puntos del jugador para calcular el total de puntos.",maxTimeText1:"Selecciona el tiempo m\xe1ximo (0 si no quieres aplicar tiempo m\xe1ximo):",maxTimeText2:"Selecciona el m\xe1ximo de puntos (0 si no quieres aplicar puntuaci\xf3n m\xe1xima):"},error:{nojugadores:"Primero a\xf1ade los jugadores y selecciona el tipo de juego y puntuaci\xf3n"},description:{nojugadores:"No hay jugadores",jugadores:"Jugadores",nuevojugador:"Nuevo jugador",ordenaleatorio:"Orden aleatorio",empezar:"Empezar",atras:"Atr\xe1s",ganador:"GANADOR",tiempo:"TIEMPO",puntos:"PUNTOS",finjugador:"fin jugador",total:"TOTAL",ordenruta:"ORDEN de Ruta",fin:"Fin",reset:"Reiniciar",continuar:"Continuar",tiempomaximo:"TIEMPO MAX",zonas:"Zonas",puntosmaximo:"MAX PUNTOS",handicap:"handicap",instrucciones:"Instrucciones"},points:{vuelco:"vuelco",tocar:"tocar",puerta:"puerta",saltoobstaculo:"salto obstaculo",reparacion:"reparacion",winch:"winch",puertaprogresion:"puerta progresion",distancia:"distancia",anclajeindebido:"anclaje indebido",juez:"juez"},gametype:{modojuego:"Modo de juego",tipopuntuacion:"Tipo de puntuacion",modojuegotiempo:"Se escoge un tramo y todos los participantes lo correr\xe1n uno por uno y en el orden preestablecido. Se corre a puntos con tiempo y puntuaci\xf3n m\xe1xima y la posibilidad de hacer fiasco. El ganador ser\xe1 el jugador con menor puntos con desempate de tiempo.",modojuegopuntos:"Se escoge un tramo y todos los participantes lo correr\xe1n uno por uno y en el orden preestablecido. Se corre a puntos y el ganador ser\xe1 el jugador con menor puntuaci\xf3n.",modojuegorey:"No hay ruta preestablecida y el primer participante, el Rey, escoge el camino al jugar. Todos los participantes corren a la vez en l\xednea siguiendo la misma ruta que el Rey. Si un jugador punt\xfaa pasa al final de la cola. El ganador ser\xe1 el jugador con menor puntuaci\xf3n.",simple:"Simple",completa:"Completa",descripcionPuntosSimple:"Puntuaci\xf3n: Winch, tocar, salto obstaculo, reparacion, puerta, vuelco y puerta progresion. No hay tiempo ni puntos m\xe1ximos. No se aplica tiempo ni puntuaci\xf3n m\xe1xima.",descripcionPuntosCompleta:"Puntuaci\xf3n: Winch, tocar, distancia, salto obstaculo, reparacion, puerta, vuelco, puerta progresion, anclaje indebido y juez. Tiempo y puntos m\xe1ximos opcionales. En \xe9ste modo es posible aplicar tiempo m\xe1ximo y/o puntuaci\xf3n m\xe1xima y realizar un fiasco en caso de superarla. En caso de fiasco el jugador puntuar\xe1 el m\xe1ximo entre los tiempos / puntos definidos y la puntuaci\xf3n actual.",tiempo:"Tiempo",puntos:"Puntos",rey:"El Rey"}}}}});$.a;r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root")),_()}},[[476,1,2]]]);
//# sourceMappingURL=main.abc477b6.chunk.js.map