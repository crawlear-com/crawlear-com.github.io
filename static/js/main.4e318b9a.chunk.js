(this["webpackJsonpcrawlear.com"]=this["webpackJsonpcrawlear.com"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(16),i=n.n(r),s=(n(28),n(3)),c=(n(29),n(30),n(31),n(32),n.p+"static/media/logo.7c7a4747.png"),l=n(2),u=n(46),d=n(4),p={millisToTime:function(e){var t=Math.floor(e/6e4);return{h:Math.floor(t/60),m:t,s:(e%6e4/1e3).toFixed(0),mm:e%1e3}},timeToMillis:function(e,t,n){var a=new Date,o=new Date;return o.setHours(0),o.setMinutes(0),o.setSeconds(0),a.setHours(e),a.setMinutes(t),a.setSeconds(n),a.getTime()-o.getTime()},printTime:function(e){return"".concat(String(e.h).padStart(2,"0"),":").concat(String(e.m).padStart(2,"0"),":").concat(String(e.s).padStart(2,"0"),":").concat(String(e.mm).padStart(3,"0"))},randomizeArray:function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e}},m=n(0);var j=function(e){var t=e.onPlayerNumerChange,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.serialize,r=void 0===o?JSON.stringify:o,i=n.deserialize,c=void 0===i?JSON.parse:i,l=a.useState((function(){var n=window.localStorage.getItem(e);return n?c(n):"function"===typeof t?t():t})),u=Object(s.a)(l,2),d=u[0],p=u[1],m=a.useRef(e);return a.useEffect((function(){m!==e&&window.localStorage.removeItem(m),window.localStorage.setItem(e,r(d))}),[e,r,d]),[d,p]}("players"),o=Object(s.a)(n,2),r=o[0],i=o[1],c=a.useRef(null),l=Date.now(),j=Object(u.a)().t;function b(e){var n=Object(d.a)(r);delete n[e.target.id],n=n.filter((function(e){return e})),i(n),t&&t(n)}a.useEffect((function(){t&&t(r)}),[r]);var x=r.length?j("description.jugadores"):j("description.nojugadores");return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"players rounded rounded1",children:[Object(m.jsx)("div",{className:"headerText bold",children:x}),Object(m.jsx)("ul",{className:"playersList",children:r.map((function(e,t){return Object(m.jsx)("li",{className:"importantNote rounded playerListItem",value:e.name,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:e.avatar,alt:"avatar"}),e.name,Object(m.jsx)("button",{className:"buttonControlTextMinus",id:t,onClick:b,children:"-"})]})},t)}))}),r.length>1?Object(m.jsx)("button",{onClick:function(){var e=p.randomizeArray(r);i(e),t&&t(e)},children:j("description.ordenaleatorio")}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)("div",{className:"headerText",children:j("description.nuevojugador")}),Object(m.jsx)("input",{id:l,ref:c}),Object(m.jsx)("button",{className:"buttonControlTextPlus",onClick:function(){var e=c.current.value;if(e&&0!==e.trim().length){var n=Object(d.a)(r);n.push({id:r.length,name:c.current.value,avatar:"".concat("https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=").concat(c.current.value),time:0,points:0}),document.getElementById(l).value="",i(n),t&&t(n)}},children:"+"})]})})};var b=function(e){var t=e.onGameTypeChange,n=e.onPointsTypeChange,o=e.selectedGameType,r=void 0===o?0:o,i=e.selectedPointsType,c=void 0===i?0:i,l=Object(u.a)().t,d=[l("gametype.tiempo"),l("gametype.puntos"),l("gametype.rey")],p=[Object(m.jsx)("div",{children:l("gametype.modojuegotiempo")}),Object(m.jsx)("div",{children:l("gametype.modojuegopuntos")}),Object(m.jsx)("div",{children:l("gametype.modojuegorey")})],j=[l("gametype.simple"),l("gametype.completa")],b=[Object(m.jsx)("div",{children:l("gametype.descripcionPuntosSimple")}),Object(m.jsx)("div",{children:l("gametype.descripcionPuntosCompleta")})],x=a.useState({gameType:r,pointsType:c}),h=Object(s.a)(x,2),g=h[0],O=h[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"gameType rounded1 rounded",children:[Object(m.jsxs)("div",{className:"headerText bold",children:[l("gametype.modojuego"),":"]}),Object(m.jsxs)("select",{defaultValue:g.gameType,onChange:function(e){var n=e.target.selectedIndex;t&&t(n),O({gameType:n,pointsType:g.pointsType})},children:[Object(m.jsx)("option",{value:"0",children:d[0]}),Object(m.jsx)("option",{value:"1",children:d[1]}),Object(m.jsx)("option",{value:"2",children:d[2]})]}),Object(m.jsx)("div",{className:"gameSelectText",children:p[g.gameType]})]}),Object(m.jsxs)("div",{className:"gameType rounded1 rounded",children:[Object(m.jsxs)("div",{className:"headerText bold",children:[l("gametype.tipopuntuacion"),":"]}),Object(m.jsxs)("select",{defaultValue:g.pointsType,onChange:function(e){var t=e.target.selectedIndex;n&&n(t),O({gameType:g.gameType,pointsType:t})},children:[Object(m.jsx)("option",{value:"0",children:j[0]}),Object(m.jsx)("option",{value:"1",children:j[1]})]}),Object(m.jsx)("div",{className:"gameSelectText",children:b[g.pointsType]})]})]})},x=n.p+"static/media/img00.612023be.png";var h=function(){var e=Object(u.a)().t;return Object(m.jsxs)("div",{className:"aboutUsContent",children:[Object(m.jsx)("b",{children:"crawlear.com"})," ",e("content.welcomeMessage"),Object(m.jsxs)("figure",{children:[Object(m.jsx)("img",{className:"contentImg",alt:"crawlers in action",src:x}),Object(m.jsx)("figcaption",{children:Object(m.jsx)("a",{href:"https://www.instagram.com/p/CT7FX_CMag7/",children:"img @takezorc"})})]}),Object(m.jsx)("p",{children:e("content.instructions")})]})};var g=function(e){var t=e.onPlayerNumerChange,n=e.onGameTypeChange,a=e.onPointsTypeChange,o=e.beginGame,r=e.alertBoxRef,i=e.gameSelected,s=e.pointsTypeSelected,c=Object(u.a)().t;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{}),Object(m.jsx)(j,{onPlayerNumerChange:function(e){t(e,r)}}),Object(m.jsx)(b,{selectedGameType:i,selectedPointsType:s,onGameTypeChange:function(e){n(e)},onPointsTypeChange:function(e){a(e)}}),Object(m.jsx)("p",{children:Object(m.jsx)("button",{className:"importantNote",onClick:function(){o(r,c)},children:c("description.empezar")})})]})};var O=function(e){var t=e.goToMenu,n=e.players,a=e.winner,o=Object(u.a)().t;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"winnerBox importantNote rounded",children:[o("description.ganador"),": ",n[a].name," ",Object(m.jsx)("br",{}),o("description.tiempo"),": ",p.printTime(p.millisToTime(n[a].time))," ",Object(m.jsx)("br",{}),o("description.puntos"),": ",n[a].points]}),Object(m.jsx)("div",{className:"pointsTable rounded rounded1",children:n.map((function(e,t){return Object(m.jsxs)("div",{className:"winnerBox",value:e.name,children:[Object(m.jsx)("div",{className:"headerPlayer rounded2 rounded bold",children:e.name}),o("description.tiempo"),": ",p.printTime(p.millisToTime(e.time)),Object(m.jsx)("br",{}),o("description.puntos"),": ",e.points]},t)}))}),Object(m.jsx)("button",{onClick:function(){t()},children:o("description.atras")})]})};var f=function(e){var t=e.time,n=e.onPlayPauseChange,a=p.millisToTime(t),o=Object(u.a)().t;return Object(m.jsxs)("div",{className:"timerContainer rounded rounded2",children:[" ",o("description.tiempo"),":",Object(m.jsx)("div",{className:"timer",children:"".concat(String(a.h).padStart(2,"0"),":").concat(String(a.m).padStart(2,"0"),":").concat(String(a.s).padStart(2,"0"),":").concat(String(a.mm).padStart(3,"0"))}),Object(m.jsx)("button",{className:"timerPlayButton importantNote",onClick:n,children:"play/pause"})]})};var y=function(e){var t=e.text,n=e.step,a=e.value,o=e.onValueChange,r=n<0,i=r?a<0:a>0;function s(e){(!r&&a+e>=0||r&&a+e<=0)&&o(e)}function c(e){return i?"bold ".concat(e):"".concat(e)}return Object(m.jsxs)("div",{className:"controlText",children:[Object(m.jsx)("button",{className:"buttonControlTextPlus",onClick:function(){s(n)},children:"+"}),Object(m.jsx)("button",{className:"buttonControlTextMinus",onClick:function(){s(-n)},children:"-"}),Object(m.jsxs)("div",{className:c("controlTextText"),children:[t,": "]}),Object(m.jsx)("div",{className:c("controlTextValue"),children:a})]})};var v=function(e){var t=e.players,n=e.player,a=e.pointsMode,o=e.onValueChange,r=[],i=Object(u.a)().t;return 1===a?(r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[0],onValueChange:function(e){o(e,n,0)},initialValue:0,text:i("points.vuelco"),step:5})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[1],onValueChange:function(e){o(e,n,1)},initialValue:0,text:i("points.tocar"),step:3})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[2],onValueChange:function(e){o(e,n,2)},initialValue:0,text:i("points.puerta"),step:2})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[3],onValueChange:function(e){o(e,n,3)},initialValue:0,text:i("points.saltoobstaculo"),step:5})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[4],onValueChange:function(e){o(e,n,4)},initialValue:0,text:i("points.reparacion"),step:5})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[5],onValueChange:function(e){o(e,n,5)},initialValue:0,text:i("points.winch"),step:3})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[6],onValueChange:function(e){o(e,n,6)},initialValue:0,text:i("points.puertaprogresion"),step:-1})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[7],onValueChange:function(e){o(e,n,7)},initialValue:0,text:i("points.distancia"),step:1})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[8],onValueChange:function(e){o(e,n,8)},initialValue:0,text:i("points.anclajeindebido"),step:5})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[9],onValueChange:function(e){o(e,n,9)},initialValue:0,text:i("points.juez"),step:1}))):(r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[0],onValueChange:function(e){o(e,n,0)},initialValue:0,text:i("points.vuelco"),step:5})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[1],onValueChange:function(e){o(e,n,1)},initialValue:0,text:i("points.tocar"),step:3})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[2],onValueChange:function(e){o(e,n,2)},initialValue:0,text:i("points.puerta"),step:2})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[3],onValueChange:function(e){o(e,n,3)},initialValue:0,text:i("points.saltoobstaculo"),step:5})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[4],onValueChange:function(e){o(e,n,4)},initialValue:0,text:i("points.reparacion"),step:5})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[5],onValueChange:function(e){o(e,n,5)},initialValue:0,text:i("points.winch"),step:3})),r.push(Object(m.jsx)(y,{value:t[n].controlTextValues[6],onValueChange:function(e){o(e,n,6)},initialValue:0,text:i("points.puertaprogresion"),step:-1}))),r};n(39);var T=function(e){var t=e.callback,n=e.minValue,o=e.maxValue,r=e.initialValue,i=a.useRef(),c=a.useState(r),l=Object(s.a)(c,2),u=l[0],d=l[1];function p(e,a){var r=Number(e.current.innerText)+a;r>=n&&r<=o&&(e.current.innerText=r,d(r),t&&t(r))}return Object(m.jsxs)("div",{className:"picker",children:[Object(m.jsx)("div",{className:"picker--arrowUp",onClick:function(e){p(i,1)}}),Object(m.jsx)("div",{className:"picker--value",ref:i,children:u}),Object(m.jsx)("div",{className:"picker--arrowDown",onClick:function(e){p(i,-1)}})]})};n(40);var w=function(e){var t=e.onMaxTimeChange,n=(e.hours,e.minutes,e.seconds,a.useState(0)),o=Object(s.a)(n,2),r=(o[0],o[1]),i=a.useState([]),c=Object(s.a)(i,2),l=c[0],u=c[1];function j(e,n){var a=Object(d.a)(l);a[n]=e,e=function(e){var t=Number(e[0])||0,n=Number(e[1])||0,a=Number(e[2])||0;return p.timeToMillis(t,n,a)}(a),r(e),u(a),t&&t(e)}return Object(m.jsxs)("div",{className:"pickerContainer timerContainer rounded rounded2",children:[Object(m.jsx)(T,{initialValue:0,minValue:0,maxValue:24,callback:function(e){j(e,0)}}),Object(m.jsx)("div",{className:"maxTimePickerContainer--separator",children:"h"}),Object(m.jsx)(T,{initialValue:0,minValue:0,maxValue:60,callback:function(e){j(e,1)}}),Object(m.jsx)("div",{className:"maxTimePickerContainer--separator",children:"m"}),Object(m.jsx)(T,{initialValue:0,minValue:0,maxValue:60,callback:function(e){j(e,2)}}),Object(m.jsx)("div",{className:"maxTimePickerContainer--separator",children:"s"})]})},N=n(20),S=n(21),C=n(10);function V(){return document.location.href.indexOf("localhost")>=0}var P=function(){function e(){Object(N.a)(this,e)}return Object(S.a)(e,null,[{key:"init",value:function(e){V()||C.a.initialize(e)}},{key:"pageview",value:function(e){V()||C.a.pageview(e)}}]),e}(),k="play",M="pause",E=0,A=null;function R(e){for(var t=e.maxPoints,n=e.maxTime,a=e.mode,o=e.players,r=e.step,i={millis:0,timeStart:0,players:Object(d.a)(o),currentPlayer:0,mode:a,maxTime:n,maxPoints:t,state:M,step:r},s=0;s<i.players.length;s++){i.players[s].controlTextValues=new Array(1===a?10:7);for(var c=0;c<i.players[s].controlTextValues.length;c++)i.players[s].controlTextValues[c]=0}return i}var I=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,r=a.useState((function(){return E=0,R({maxPoints:0,maxTime:0,mode:t,players:o,step:0})})),i=Object(s.a)(r,2),c=i[0],j=i[1],b=Object(u.a)().t;function x(){var e=R(c);window.scrollTo(0,0),e.state=M,c.maxPoints<=c.players[c.currentPlayer].points&&c.maxPoints>0||c.maxTime<=E&&c.maxTime>0?(e.players[c.currentPlayer].time=c.maxTime>0?c.maxTime:E,e.players[c.currentPlayer].points=c.maxPoints>0?c.maxPoints:e.players[c.currentPlayer].points):e.players[c.currentPlayer].time=E,c.currentPlayer+1<c.players.length?(E=0,e.millis=0,e.currentPlayer=c.currentPlayer+1,j((function(t){return Object(l.a)(Object(l.a)({},t),e)}))):n&&n(function(e){var t=Object(d.a)(e.players);return t.sort((function(e,t){var n=e.points-t.points;return 0===n?e.time-t.time:n})),t[0].id}(c))}if(a.useEffect((function(){P.pageview("/totaltimegame/")}),[]),a.useEffect((function(){var e=Object(l.a)(Object(l.a)({},c),{},{timeStart:Date.now()});if(c.state===k)A&&clearInterval(A),e.millis=E,A=setInterval((function(){!function(e){e.maxPoints<=e.players[e.currentPlayer].points&&e.maxPoints>0||e.maxTime<=E&&e.maxTime>0||(E+=10,j((function(e){return Object(l.a)(Object(l.a)({},e),{},{millis:E})})))}(e)}),10),j((function(t){return Object(l.a)(Object(l.a)({},t),e)}));else{var t=E+(Date.now()-e.timeStart);e.millis=t,E=t,A&&clearInterval(A),A=null,j((function(t){return Object(l.a)(Object(l.a)({},t),e)}))}}),[c.state]),c.players.length>0){var h,g,O,y=c.players[c.currentPlayer],N=1===c.mode?Object(m.jsx)(w,{onMaxTimeChange:function(e){j((function(t){return Object(l.a)(Object(l.a)({},t),{},{maxTime:e})}))},hours:0,minutes:0,seconds:0}):Object(m.jsx)(m.Fragment,{});return h=v({players:c.players,player:c.currentPlayer,pointsMode:c.mode,onValueChange:function(e,t,n){!function(e,t,n){var a=Object(d.a)(c.players);c.maxPoints<=c.players[c.currentPlayer].points&&c.maxPoints>0||c.maxTime<=E&&c.maxTime>0||(a[t].controlTextValues=Object(d.a)(a[t].controlTextValues),a[t].controlTextValues[n]+=e,a[t].points+=e,j((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:a})})))}(e,t,n)}}),1===c.mode&&0===c.step?Object(m.jsxs)("div",{className:"maxTimeSelectorForGame",children:[Object(m.jsx)("p",{children:b("content.maxTimeText1")}),N,Object(m.jsx)("p",{children:b("content.maxTimeText2")}),Object(m.jsx)("div",{className:"pickerContainer timerContainer rounded rounded2",children:Object(m.jsx)(T,{minValue:0,maxValue:40,callback:function(e){var t;t=e,j((function(e){return Object(l.a)(Object(l.a)({},e),{},{maxPoints:t})}))},initialValue:0})}),Object(m.jsx)("button",{onClick:function(){j((function(e){return Object(l.a)(Object(l.a)({},e),{},{step:1})}))},className:"rounded rounded2 importantNote",children:b("description.continuar")})]}):(1===c.mode&&((c.maxPoints<=c.players[c.currentPlayer].points&&c.maxPoints>0||c.maxTime<=E&&c.maxTime>0)&&(O=Object(m.jsx)("div",{className:"rounded importantNote",children:"FiASCO!"})),g=Object(m.jsxs)("div",{className:"fiascoBox rounded rounded2 bold",children:[O,b("description.tiempomaximo"),": ",p.printTime(p.millisToTime(c.maxTime))," ",Object(m.jsx)("br",{}),b("description.puntosmaximo"),": ",c.maxPoints]})),Object(m.jsxs)("div",{className:"gameContainer",children:[Object(m.jsx)("div",{className:"playersList",children:Object(m.jsxs)("div",{className:"playerListItem importantNote rounded",children:[Object(m.jsx)("img",{src:y.avatar,alt:"avatar"}),y.name]})}),g,Object(m.jsxs)("div",{className:"totalTimeContainer rounded",children:[b("description.puntos"),": ",y.points]}),Object(m.jsx)(f,{state:c.state,time:c.millis,onPlayPauseChange:function(){c.state===M?c.state=k:c.state=M,j((function(e){return Object(l.a)(Object(l.a)({},e),{},{state:c.state})}))}}),Object(m.jsx)("div",{className:"controlTextContainer rounded rounded1",children:h}),Object(m.jsx)("button",{onClick:function(){var e=Object(l.a)({},c);window.scrollTo(0,0),E=0,(e=R(e)).players[c.currentPlayer].time=0,e.players[c.currentPlayer].points=0,e.currentPlayer=c.currentPlayer,e.state=M,j((function(t){return Object(l.a)(Object(l.a)({},t),e)}))},className:"resetButton",children:b("description.reset")}),Object(m.jsxs)("button",{className:"importantNote",onClick:function(){x()},children:[b("description.finjugador")," (",y.name,")"]}),Object(m.jsx)("p",{})]}))}};var F=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,r=a.useState((function(){return function(e){for(var t=e.mode,n=e.players,a={players:Object(d.a)(n),mode:t,order:Object(d.a)(n)},o=0;o<a.players.length;o++){a.players[o].controlTextValues=new Array(1===t?10:7);for(var r=0;r<a.players[o].controlTextValues.length;r++)a.players[o].controlTextValues[r]=0}return a}({mode:t,players:o})})),i=Object(s.a)(r,2),c=i[0],p=i[1],j=Object(u.a)().t;function b(e,t,n){var a=Object(d.a)(c.players),o=function(e,t){var n=Object(d.a)(t);return n.push(n.splice(e,1)[0]),n}(c.order.findIndex((function(e){return e.id===c.players[t].id})),c.order);a[t].points+=e,a[t].controlTextValues=Object(d.a)(a[t].controlTextValues),a[t].controlTextValues[n]+=e,p((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:a,order:o})}))}a.useEffect((function(){C.a.pageview("/kinggame/")}),[]);var x=[];x.push(Object(m.jsxs)("div",{children:[j("description.ordenruta"),":"]}));for(var h=0;h<c.players.length;h++)x.push(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"controlTextContainerQueue rounded bold",children:[c.order[h].name,": ",c.order[h].points," ptos"]})})}));x.push(Object(m.jsxs)("p",{children:[j("description.puntos").toUpperCase(),":"]}));for(var g=0;g<c.players.length;g++)x.push(Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"playerInfo",children:[Object(m.jsxs)("div",{className:"headerPlayer importantNote rounded2 rounded",children:[Object(m.jsx)("div",{className:"bold",children:c.players[g].name}),j("description.total"),": ",c.players[g].points]}),Object(m.jsx)("div",{className:"controlTextContainer rounded rounded1",children:v({players:c.players,player:g,pointsMode:c.mode,onValueChange:function(e,t,n){b(e,t,n)}})})]})}));return x.push(Object(m.jsx)("button",{className:"importantNote",onClick:function(){for(var e=0,t=0;t<c.players.length;t++)c.players[t].points<c.players[e].points&&(e=t);n(e)},children:j("description.fin")})),x},B=1e7;function z(e){for(var t=e.mode,n=e.players,a={currentPlayer:0,players:Object(d.a)(n),mode:t,points:0},o=0;o<a.players.length;o++){a.players[o].controlTextValues=new Array(1===t?10:7);for(var r=0;r<a.players[o].controlTextValues.length;r++)a.players[o].controlTextValues[r]=0}return a}var G=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,r=a.useState((function(){return z({mode:t,players:o})})),i=Object(s.a)(r,2),c=i[0],p=i[1],j=Object(u.a)().t;if(a.useEffect((function(){P.pageview("/pointsgame/")}),[]),c.players.length>0){var b,x=c.players[c.currentPlayer];return b=v({players:c.players,player:c.currentPlayer,pointsMode:c.state,onValueChange:function(e,t,n){!function(e,t,n){o[t].controlTextValues=Object(d.a)(o[t].controlTextValues),o[t].controlTextValues[n]+=e,o[t].points+=e,p((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:o})}))}(e,t,n)}}),Object(m.jsxs)("div",{className:"gameContainer",children:[Object(m.jsx)("div",{className:"playerInfo",children:Object(m.jsxs)("div",{className:"headerPlayer importantNote rounded2 rounded",children:[Object(m.jsx)("div",{className:"bold",children:x.name}),"".concat(j("description.total")," ").concat(j("description.puntos")),": ",x.points]})}),Object(m.jsx)("div",{className:"controlTextContainer rounded rounded1",children:b}),Object(m.jsx)("button",{onClick:function(){window.scrollTo(0,0),c.players[c.currentPlayer].points=0,p((function(e,t){return Object(l.a)(Object(l.a)({},z(e)),{},{players:Object(d.a)(e.players),currentPlayer:e.currentPlayer})}))},className:"resetButton",children:j("description.reset")}),Object(m.jsxs)("button",{className:"importantNote",onClick:function(){window.scrollTo(0,0),c.currentPlayer+1<c.players.length?p((function(e,t){return Object(l.a)(Object(l.a)({},z(e)),{},{points:0,currentPlayer:e.currentPlayer+1})})):n&&n(function(e){for(var t=-1,n=B,a=0;a<e.players.length;a++)e.players[a].points<n&&(n=e.players[a].points,t=a);return t}(c))},children:[j("description.finjugador")," (",x.name,")"]}),Object(m.jsx)("p",{})]})}};var L=function(e){var t=e.onGameEnd,n=e.goToMenu,a=e.gameSelected,o=e.players,r=e.pointsTypeSelected,i=Object(u.a)().t,s=[];return 0===a?s.push(Object(m.jsx)(I,{mode:r,onGameEnd:function(e){t(e)},players:o})):2===a?s.push(Object(m.jsx)(F,{onGameEnd:function(e){t(e)},players:o,mode:r})):1===a&&s.push(Object(m.jsx)(G,{mode:r,onGameEnd:function(e){t(e)},players:o})),s.push(Object(m.jsx)("button",{onClick:function(){n()},children:i("description.atras")})),s};var D=function(e){var t=a.useRef(),n=[],o=a.useState({players:[],winner:0,gameStatus:0,gameSelected:0,pointsTypeSelected:0}),r=Object(s.a)(o,2),i=r[0],c=r[1];function u(){window.scrollTo(0,0),c({players:i.players,winner:i.winner,gameStatus:0,gameSelected:i.gameSelected,pointsTypeSelected:i.pointsTypeSelected})}switch(a.useEffect((function(){0===i.gameStatus&&P.pageview("/menu/")}),[i.gameStatus]),n.push(Object(m.jsx)("div",{ref:t,className:"hideAlert alertBox"})),i.gameStatus){case 0:n.push(Object(m.jsx)(g,{onPlayerNumerChange:function(e,t){!function(e){e.current.classList.add("hideAlert"),e.current.innerHTML=""}(t),c({players:e,winner:i.winner,gameStatus:i.gameStatus,gameSelected:i.gameSelected,pointsTypeSelected:i.pointsTypeSelected})},onGameTypeChange:function(e){c({players:i.players,winner:i.winner,gameStatus:i.gameStatus,gameSelected:e,pointsTypeSelected:i.pointsTypeSelected})},onPointsTypeChange:function(e){c({players:i.players,winner:i.winner,gameStatus:i.gameStatus,gameSelected:i.gameSelected,pointsTypeSelected:e})},beginGame:function(e,t){if(window.scrollTo(0,0),i.players.length>0){var n=Object(l.a)({},i);c({players:n.players,winner:n.winner,gameStatus:1,gameSelected:n.gameSelected,pointsTypeSelected:n.pointsTypeSelected})}else!function(e,t){t.current.classList.remove("hideAlert"),t.current.innerHTML=e}(t("error.nojugadores"),e)},alertBoxRef:t,gameSelected:i.gameSelected,pointsTypeSelected:i.pointsTypeSelected}));break;case 1:n.push(Object(m.jsx)(L,{goToMenu:u,onGameEnd:function(e){window.scrollTo(0,0),c({players:i.players,winner:e,gameStatus:2,gameSelected:i.gameSelected,pointsTypeSelected:i.pointsTypeSelected})},gameSelected:i.gameSelected,players:i.players,pointsTypeSelected:i.pointsTypeSelected}));break;default:n.push(Object(m.jsx)(O,{players:i.players,winner:i.winner,goToMenu:u}))}return n},q=n.p+"static/media/img01.de805005.png",U=n.p+"static/media/img02.1d4f3699.png",W=n.p+"static/media/img03.f66fba6c.png";n(43);var J=function(e){var t=e.onLinkClicked,n=Object(u.a)().t;return a.useEffect((function(){P.pageview("/aboutus/")}),[]),Object(m.jsxs)("div",{className:"aboutUsContent",children:[Object(m.jsx)("b",{children:"crawlear.com"})," ",n("content.aboutus"),Object(m.jsx)("img",{src:q,alt:"crawler en accion"}),Object(m.jsx)("p",{children:n("content.aboutus1")}),Object(m.jsx)("img",{src:U,alt:"crawler en accion2"}),Object(m.jsx)("p",{children:n("content.aboutus2")}),Object(m.jsx)("img",{src:W,alt:"crawler en accion3"}),Object(m.jsx)("p",{children:Object(m.jsxs)("a",{onClick:t,href:"#void",children:[">"," Volver"]})})]})};var X=function(){return Object(m.jsx)("div",{className:"Footer",children:"\xa9crawlear.com 2021"})},H=(n(44),n.p+"static/media/1 24 REGLAMENTO CRAWLER DEPORTIVO Y TECNICO 2021 V1 BORRADOR 19-1-2021.70aee093.pdf");var K=function(e){var t=e.onLinkClicked,n=a.useState(!1),o=Object(s.a)(n,2),r=o[0],i=o[1];function c(){i(!r)}function l(e){t(e.target.dataset.link)}return r?Object(m.jsxs)("div",{className:"rounded menuContainer open",onClick:c,children:[Object(m.jsx)("div",{className:"burguerMenuBar"}),Object(m.jsx)("div",{className:"burguerMenuBar"}),Object(m.jsx)("div",{className:"burguerMenuBar"}),Object(m.jsx)("div",{className:"linksContainer",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#void","data-link":"aboutus",onClick:l,children:"About us"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/privacy.html",children:"Privacy Policy"})}),Object(m.jsx)("li",{children:"-"}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.aecar.org/modalidades.php?tipo=crawler",children:"AECAR Crawler"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:H,"data-link":"aboutus",onClick:l,children:"1/24 Reglamento Deportivo oficial 2021"})})]})})]}):Object(m.jsxs)("div",{className:"rounded menuContainer closed",onClick:c,children:[Object(m.jsx)("div",{className:"burguerMenuBar"}),Object(m.jsx)("div",{className:"burguerMenuBar"}),Object(m.jsx)("div",{className:"burguerMenuBar"})]})};var Y=function(){var e,t=o.a.useState(0),n=Object(s.a)(t,2),a=n[0],r=n[1];return o.a.useEffect((function(){P.init("UA-156750890-2")}),[]),0===a?e=Object(m.jsx)(D,{}):1===a&&(e=Object(m.jsx)(J,{onLinkClicked:function(){r(0)}})),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)(K,{onLinkClicked:function(e){r(1)}}),Object(m.jsx)("img",{src:c,alt:"logo"})]}),Object(m.jsx)("div",{className:"AppMainContainer",children:e}),Object(m.jsx)("div",{className:"adsContainer"}),Object(m.jsx)(X,{})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))},Q=n(15),_=n(11),$=n(23);Q.a.use($.a).use(_.e).init({debug:!0,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{content:{aboutus:"arises from the hobby of a group of friends after discovering the world of the rc crawler, entering the 1/24 scale.",aboutus1:"After going out on the field a couple of times, we realized that it would be a good idea to have a scoreboard for the matches, where we can manage the points in the different game modes that we practice.",aboutus2:"If you have any questions, comments or suggestions, do not hesitate to contact us at crawlear.com@gmail.com",aboutus3:"Barcelona (Spain) 2021",welcomeMessage:'is a score board for your crawler pachangas (spanish name for a "friends organized game").',instructions:"First add the players, select the game mode, the points type and push the Begin button.",maxTimeText1:"Select the maximum time (0 if you do not want to apply maximum time):",maxTimeText2:"Select the maximum points (0 if you do not want to apply a maximum score):"},error:{nojugadores:"First add the players and select the type of game and score"},description:{nojugadores:"No players",jugadores:"Players",nuevojugador:"New player",ordenaleatorio:"Random order",empezar:"Begin",atras:"Back",ganador:"WINNER",tiempo:"TIME",puntos:"POINTS",finjugador:"end player",total:"TOTAL",ordenruta:"Rute ORDER",fin:"End",reset:"Reset",continuar:"Continue",tiempomaximo:"MAX TIME",zonas:"Zones",puntosmaximo:"MAX POINTS"},points:{vuelco:"overturn",tocar:"touch",puerta:"gate",saltoobstaculo:"obstacle jump",reparacion:"repair",winch:"winch",puertaprogresion:"progression gate",distancia:"distance",anclajeindebido:"improper anchor",juez:"judge"},gametype:{modojuego:"Game mode",tipopuntuacion:"Points type",modojuegotiempo:"A section is chosen and all participants will run it one by one and in the pre-established order. You run to points with time and maximum score and the possibility of making a fiasco. The winner will be the player with less points with a time tiebreaker.",modojuegopuntos:"A section is chosen and all participants will run it one by one and in the pre-established order. Points are run and the winner will be the player with the lowest score.",modojuegorey:"There is no pre-established route and the first participant, the King, chooses the path when playing. All participants run at the same time in line following the same route as the King. If a player scores he goes to the end of the queue. The winner will be the player with the lowest score.",simple:"Simple",completa:"Complete",descripcionPuntosSimple:"Score: Winch, touch, obstacle jump, repair, door, overturn and progression door. There is no time or maximum points.",descripcionPuntosCompleta:"Score: Winch, touch, distance, obstacle jump, repair, door, overturn, progression door, improper anchor and judge. Optional time and maximum points.",tiempo:"Time",puntos:"Points",rey:"The King"}}},es:{translation:{content:{aboutus:"surge a partir de la afici\xf3n de un grupo de amigos despu\xe9s de descubrir el mundo del crawler rc, entrando por la escala 1/24.",aboutus1:"Despu\xe9s de salir al terreno de juego un par de veces nos dimos cuenta que ser\xeda una buena idea tener un marcador para las partidas, donde poder gestionar los puntos en los diferentes modos de juegos que practicamos.",aboutus2:"Si tienes alguna duda, comentario o sugerencia no dudes en contactar con nosotros en crawlear.com@gmail.com",aboutus3:"takezoRc, Barcelona 2021",welcomeMessage:"es un tablero de puntuaci\xf3n para tus pachangas de crawler con los amigos.",instructions:"Primero a\xf1ade los jugadores, selecciona el modo de juego, el tipo de puntuaci\xf3n y pulsa Empezar.",maxTimeText1:"Selecciona el tiempo m\xe1ximo (0 si no quieres aplicar tiempo m\xe1ximo):",maxTimeText2:"Selecciona el m\xe1ximo de puntos (0 si no quieres aplicar puntuaci\xf3n m\xe1xima):"},error:{nojugadores:"Primero a\xf1ade los jugadores y selecciona el tipo de juego y puntuaci\xf3n"},description:{nojugadores:"No hay jugadores",jugadores:"Jugadores",nuevojugador:"Nuevo jugador",ordenaleatorio:"Orden aleatorio",empezar:"Empezar",atras:"Atr\xe1s",ganador:"GANADOR",tiempo:"TIEMPO",puntos:"PUNTOS",finjugador:"fin jugador",total:"TOTAL",ordenruta:"ORDEN de Ruta",fin:"Fin",reset:"Reiniciar",continuar:"Continuar",tiempomaximo:"TIEMPO MAX",zonas:"Zonas",puntosmaximo:"MAX PUNTOS"},points:{vuelco:"vuelco",tocar:"tocar",puerta:"puerta",saltoobstaculo:"salto obstaculo",reparacion:"reparacion",winch:"winch",puertaprogresion:"puerta progresion",distancia:"distancia",anclajeindebido:"anclaje indebido",juez:"juez"},gametype:{modojuego:"Modo de juego",tipopuntuacion:"Tipo de puntuacion",modojuegotiempo:"Se escoge un tramo y todos los participantes lo correr\xe1n uno por uno y en el orden preestablecido. Se corre a puntos con tiempo y puntuaci\xf3n m\xe1xima y la posibilidad de hacer fiasco. El ganador ser\xe1 el jugador con menor puntos con desempate de tiempo.",modojuegopuntos:"Se escoge un tramo y todos los participantes lo correr\xe1n uno por uno y en el orden preestablecido. Se corre a puntos y el ganador ser\xe1 el jugador con menor puntuaci\xf3n.",modojuegorey:"No hay ruta preestablecida y el primer participante, el Rey, escoge el camino al jugar. Todos los participantes corren a la vez en l\xednea siguiendo la misma ruta que el Rey. Si un jugador punt\xfaa pasa al final de la cola. El ganador ser\xe1 el jugador con menor puntuaci\xf3n.",simple:"Simple",completa:"Completa",descripcionPuntosSimple:"Puntuaci\xf3n: Winch, tocar, salto obstaculo, reparacion, puerta, vuelco y puerta progresion. No hay tiempo ni puntos m\xe1ximos.",descripcionPuntosCompleta:"Puntuaci\xf3n: Winch, tocar, distancia, salto obstaculo, reparacion, puerta, vuelco, puerta progresion, anclaje indebido y juez. Tiempo y puntos m\xe1ximos opcionales.",tiempo:"Tiempo",puntos:"Puntos",rey:"El Rey"}}}}});Q.a;i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[45,1,2]]]);
//# sourceMappingURL=main.4e318b9a.chunk.js.map