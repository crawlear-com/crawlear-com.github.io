(this["webpackJsonpcrawlear.com"]=this["webpackJsonpcrawlear.com"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(15),i=n.n(r),s=(n(26),n(3)),c=(n(27),n(28),n(29),n(30),n.p+"static/media/logo.7c7a4747.png"),l=n(2),u=n(4),p=n(0);var d=function(e){var t=e.text,n=e.step,a=e.value,o=e.onValueChange,r=n<0,i=r?a<0:a>0;function s(e){(!r&&a+e>=0||r&&a+e<=0)&&o(e)}function c(e){return i?"bold ".concat(e):"".concat(e)}return Object(p.jsxs)("div",{className:"controlText",children:[Object(p.jsx)("button",{className:"buttonControlTextPlus",onClick:function(){s(n)},children:"+"}),Object(p.jsx)("button",{className:"buttonControlTextMinus",onClick:function(){s(-n)},children:"-"}),Object(p.jsxs)("div",{className:c("controlTextText"),children:[t,": "]}),Object(p.jsx)("div",{className:c("controlTextValue"),children:a})]})},j={secondsToTime:function(e){var t=Math.floor(e/6e4);return{h:Math.floor(t/60),m:t,s:(e%6e4/1e3).toFixed(0),mm:e%1e3}},printTime:function(e){return"".concat(String(e.h).padStart(2,"0"),":").concat(String(e.m).padStart(2,"0"),":").concat(String(e.s).padStart(2,"0"),":").concat(String(e.mm).padStart(3,"0"))},randomizeArray:function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e},getControlTextArray:function(e,t,n,a,o){var r=[];return 1===e?(r.push(Object(p.jsx)(d,{value:t[0],onValueChange:function(e){n(e,a,0)},initialValue:0,text:o("points.vuelco"),step:5})),r.push(Object(p.jsx)(d,{value:t[1],onValueChange:function(e){n(e,a,1)},initialValue:0,text:o("points.tocar"),step:3})),r.push(Object(p.jsx)(d,{value:t[2],onValueChange:function(e){n(e,a,2)},initialValue:0,text:o("points.puerta"),step:2})),r.push(Object(p.jsx)(d,{value:t[3],onValueChange:function(e){n(e,a,3)},initialValue:0,text:o("points.saltoobstaculo"),step:5})),r.push(Object(p.jsx)(d,{value:t[4],onValueChange:function(e){n(e,a,4)},initialValue:0,text:o("points.reparacion"),step:5})),r.push(Object(p.jsx)(d,{value:t[5],onValueChange:function(e){n(e,a,5)},initialValue:0,text:o("points.winch"),step:3})),r.push(Object(p.jsx)(d,{value:t[6],onValueChange:function(e){n(e,a,6)},initialValue:0,text:o("points.puertaprogresion"),step:-1})),r.push(Object(p.jsx)(d,{value:t[7],onValueChange:function(e){n(e,a,7)},initialValue:0,text:o("points.distancia"),step:1})),r.push(Object(p.jsx)(d,{value:t[8],onValueChange:function(e){n(e,a,8)},initialValue:0,text:o("points.anclajeindebido"),step:5})),r.push(Object(p.jsx)(d,{value:t[9],onValueChange:function(e){n(e,a,9)},initialValue:0,text:o("points.juez"),step:1}))):(r.push(Object(p.jsx)(d,{value:t[0],onValueChange:function(e){n(e,a,0)},initialValue:0,text:o("points.vuelco"),step:5})),r.push(Object(p.jsx)(d,{value:t[1],onValueChange:function(e){n(e,a,1)},initialValue:0,text:o("points.tocar"),step:3})),r.push(Object(p.jsx)(d,{value:t[2],onValueChange:function(e){n(e,a,2)},initialValue:0,text:o("points.puerta"),step:2})),r.push(Object(p.jsx)(d,{value:t[3],onValueChange:function(e){n(e,a,3)},initialValue:0,text:o("points.saltoobstaculo"),step:5})),r.push(Object(p.jsx)(d,{value:t[4],onValueChange:function(e){n(e,a,4)},initialValue:0,text:o("points.reparacion"),step:5})),r.push(Object(p.jsx)(d,{value:t[5],onValueChange:function(e){n(e,a,5)},initialValue:0,text:o("points.winch"),step:3})),r.push(Object(p.jsx)(d,{value:t[6],onValueChange:function(e){n(e,a,6)},initialValue:0,text:o("points.puertaprogresion"),step:-1}))),r}},m=n(45);var h=function(e){var t=e.onPlayerNumerChange,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.serialize,r=void 0===o?JSON.stringify:o,i=n.deserialize,c=void 0===i?JSON.parse:i,l=a.useState((function(){var n=window.localStorage.getItem(e);return n?c(n):"function"===typeof t?t():t})),u=Object(s.a)(l,2),p=u[0],d=u[1],j=a.useRef(e);return a.useEffect((function(){j!==e&&window.localStorage.removeItem(j),window.localStorage.setItem(e,r(p))}),[e,r,p]),[p,d]}("players"),o=Object(s.a)(n,2),r=o[0],i=o[1],c=a.useRef(null),l=Date.now(),d=Object(m.a)(),h=d.t;function b(e){var n=Object(u.a)(r);delete n[e.target.id],n=n.filter((function(e){return e})),i(n),t&&t(n)}d.i18n,a.useEffect((function(){t&&t(r)}),[r]);var g=r.length?h("description.jugadores"):h("description.nojugadores");return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"players rounded rounded1",children:[Object(p.jsx)("div",{className:"headerText bold",children:g}),Object(p.jsx)("ul",{className:"playersList",children:r.map((function(e,t){return Object(p.jsx)("li",{className:"importantNote rounded playerListItem",value:e.name,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e.avatar,alt:"avatar"}),e.name,Object(p.jsx)("button",{className:"buttonControlTextMinus",id:t,onClick:b,children:"-"})]})},t)}))}),r.length>1?Object(p.jsx)("button",{onClick:function(){var e=j.randomizeArray(r);i(e),t&&t(e)},children:h("description.ordenaleatorio")}):Object(p.jsx)(p.Fragment,{}),Object(p.jsx)("div",{className:"headerText",children:h("description.nuevojugador")}),Object(p.jsx)("input",{id:l,ref:c}),Object(p.jsx)("button",{className:"buttonControlTextPlus",onClick:function(){var e=c.current.value;if(e&&0!==e.trim().length){var n=Object(u.a)(r);n.push({id:r.length,name:c.current.value,avatar:"".concat("https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=").concat(c.current.value),time:0,points:0}),document.getElementById(l).value="",i(n),t&&t(n)}},children:"+"})]})})};var b=function(e){var t=e.onGameTypeChange,n=e.onPointsTypeChange,o=e.selectedGameType,r=void 0===o?0:o,i=e.selectedPointsType,c=void 0===i?0:i,l=Object(m.a)(),u=l.t,d=(l.i18n,[u("gametype.tiempo"),u("gametype.puntos"),u("gametype.rey")]),j=[Object(p.jsx)("div",{children:u("gametype.modojuegotiempo")}),Object(p.jsx)("div",{children:u("gametype.modojuegopuntos")}),Object(p.jsx)("div",{children:u("gametype.modojuegorey")})],h=[u("gametype.simple"),u("gametype.completa")],b=[Object(p.jsx)("div",{children:u("gametype.descripcionPuntosSimple")}),Object(p.jsx)("div",{children:u("gametype.descripcionPuntosCompleta")})],g=a.useState({gameType:r,pointsType:c}),x=Object(s.a)(g,2),f=x[0],y=x[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"gameType rounded1 rounded",children:[Object(p.jsxs)("div",{className:"headerText bold",children:[u("gametype.modojuego"),":"]}),Object(p.jsxs)("select",{defaultValue:f.gameType,onChange:function(e){var n=e.target.selectedIndex;t&&t(n),y({gameType:n,pointsType:f.pointsType})},children:[Object(p.jsx)("option",{value:"0",children:d[0]}),Object(p.jsx)("option",{value:"1",children:d[1]}),Object(p.jsx)("option",{value:"2",children:d[2]})]}),Object(p.jsx)("div",{className:"gameSelectText",children:j[f.gameType]})]}),Object(p.jsxs)("div",{className:"gameType rounded1 rounded",children:[Object(p.jsxs)("div",{className:"headerText bold",children:[u("gametype.tipopuntuacion"),":"]}),Object(p.jsxs)("select",{defaultValue:f.pointsType,onChange:function(e){var t=e.target.selectedIndex;n&&n(t),y({gameType:f.gameType,pointsType:t})},children:[Object(p.jsx)("option",{value:"0",children:h[0]}),Object(p.jsx)("option",{value:"1",children:h[1]})]}),Object(p.jsx)("div",{className:"gameSelectText",children:b[f.pointsType]})]})]})};var g=function(e){e.state;var t=e.time,n=e.onPlayPauseChange,a=j.secondsToTime(t),o=Object(m.a)(),r=o.t;return o.i18n,Object(p.jsxs)("div",{className:"timerContainer rounded rounded2",children:[" ",r("description.tiempo"),":",Object(p.jsx)("div",{className:"timer",children:"".concat(String(a.h).padStart(2,"0"),":").concat(String(a.m).padStart(2,"0"),":").concat(String(a.s).padStart(2,"0"),":").concat(String(a.mm).padStart(3,"0"))}),Object(p.jsx)("button",{className:"timerPlayButton importantNote",onClick:n,children:"play/pause"})]})};var x=function(e){var t=e.players,n=e.player,a=e.pointsMode,o=e.onValueChange,r=[],i=Object(m.a)(),s=i.t;return i.i18n,0===a?(r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[0],onValueChange:function(e){o(e,n,0)},initialValue:0,text:s("points.vuelco"),step:5})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[1],onValueChange:function(e){o(e,n,1)},initialValue:0,text:s("points.tocar"),step:3})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[2],onValueChange:function(e){o(e,n,2)},initialValue:0,text:s("points.puerta"),step:2})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[3],onValueChange:function(e){o(e,n,3)},initialValue:0,text:s("points.saltoobstaculo"),step:5})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[4],onValueChange:function(e){o(e,n,4)},initialValue:0,text:s("points.reparacion"),step:5})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[5],onValueChange:function(e){o(e,n,5)},initialValue:0,text:s("points.winch"),step:3})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[6],onValueChange:function(e){o(e,n,6)},initialValue:0,text:s("points.puertaprogresion"),step:-1})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[7],onValueChange:function(e){o(e,n,7)},initialValue:0,text:s("points.distancia"),step:1})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[8],onValueChange:function(e){o(e,n,8)},initialValue:0,text:s("points.anclajeindebido"),step:5})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[9],onValueChange:function(e){o(e,n,9)},initialValue:0,text:s("points.juez"),step:1}))):(r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[0],onValueChange:function(e){o(e,n,0)},initialValue:0,text:s("points.vuelco"),step:5})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[1],onValueChange:function(e){o(e,n,1)},initialValue:0,text:s("points.tocar"),step:3})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[2],onValueChange:function(e){o(e,n,2)},initialValue:0,text:s("points.puerta"),step:2})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[3],onValueChange:function(e){o(e,n,3)},initialValue:0,text:s("points.saltoobstaculo"),step:5})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[4],onValueChange:function(e){o(e,n,4)},initialValue:0,text:s("points.reparacion"),step:5})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[5],onValueChange:function(e){o(e,n,5)},initialValue:0,text:s("points.winch"),step:3})),r.push(Object(p.jsx)(d,{value:t[n].controlTextValues[6],onValueChange:function(e){o(e,n,6)},initialValue:0,text:s("points.puertaprogresion"),step:-1}))),r},f=n(5),y="play",O="pause",v=0,T=null;function V(e){for(var t=e.mode,n=e.players,a={millis:0,timeModifier:0,timeStart:0,players:Object(u.a)(n),currentPlayer:0,mode:t,state:O},o=0;o<a.players.length;o++){a.players[o].controlTextValues=new Array(1===t?10:7);for(var r=0;r<a.players[o].controlTextValues.length;r++)a.players[o].controlTextValues[r]=0}return a}var C=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,r=a.useState((function(){return V({mode:t,players:o})})),i=Object(s.a)(r,2),c=i[0],d=i[1],h=Object(m.a)(),b=h.t;if(h.i18n,a.useEffect((function(){f.a.pageview("/totaltimegame/")}),[]),a.useEffect((function(){var e=Object(l.a)(Object(l.a)({},c),{},{timeStart:Date.now()});if(c.state===y)T&&clearInterval(T),e.millis=v,T=setInterval((function(){v+=10,d((function(e){return Object(l.a)(Object(l.a)({},e),{},{millis:v})}))}),10),d((function(t){return Object(l.a)(Object(l.a)({},t),e)}));else{var t=v+(Date.now()-e.timeStart);e.millis=t,v=t,T&&clearInterval(T),T=null,d((function(t){return Object(l.a)(Object(l.a)({},t),e)}))}}),[c.state]),c.players.length>0){var C,w=j.secondsToTime(c.millis+c.timeModifier),S=c.players[c.currentPlayer];return C=x({players:c.players,player:c.currentPlayer,pointsMode:c.mode,onValueChange:function(e,t,n){!function(e,t,n){var a=1e3*e+c.timeModifier,o=Object(u.a)(c.players);o[t].controlTextValues=Object(u.a)(o[t].controlTextValues),o[t].controlTextValues[n]+=e,o[t].points+=e,d((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:o,timeModifier:a})}))}(e,t,n)}}),Object(p.jsxs)("div",{className:"gameContainer",children:[Object(p.jsx)("div",{className:"playersList",children:Object(p.jsxs)("div",{className:"playerListItem importantNote rounded",children:[Object(p.jsx)("img",{src:S.avatar,alt:"avatar"}),S.name]})}),Object(p.jsxs)("div",{className:"totalTimeContainer rounded",children:[b("description.total"),": ",Object(p.jsx)("div",{className:"totalValue",children:j.printTime(w)})]}),Object(p.jsx)(g,{state:c.state,time:c.millis,onPlayPauseChange:function(){c.state===O?c.state=y:c.state=O,d((function(e){return Object(l.a)(Object(l.a)({},e),{},{state:c.state})}))}}),Object(p.jsx)("div",{className:"controlTextContainer rounded rounded1",children:C}),Object(p.jsx)("button",{onClick:function(){var e=Object(l.a)({},c);window.scrollTo(0,0),v=0,(e=V(e)).players[c.currentPlayer].time=0,e.players[c.currentPlayer].points=0,e.currentPlayer=c.currentPlayer,e.state=O,d((function(t){return Object(l.a)(Object(l.a)({},t),e)}))},className:"resetButton",children:b("description.reset")}),Object(p.jsxs)("button",{className:"importantNote",onClick:function(){!function(){var e=V(c);window.scrollTo(0,0),e.state=O,e.players[c.currentPlayer].time=v+c.timeModifier,c.currentPlayer+1<c.players.length?(v=0,e.millis=0,e.timeModifier=0,e.currentPlayer=c.currentPlayer+1,d((function(t){return Object(l.a)(Object(l.a)({},t),e)}))):n&&n(function(e){for(var t=-1,n=108e4,a=0;a<e.players.length;a++)e.players[a].time<n&&(n=e.players[a].time,t=a);return t}(c))}()},children:[b("description.finjugador")," (",S.name,")"]}),Object(p.jsx)("p",{})]})}};var w=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,r=a.useState((function(){return function(e){for(var t=e.mode,n=e.players,a={players:Object(u.a)(n),mode:t,order:Object(u.a)(n)},o=0;o<a.players.length;o++){a.players[o].controlTextValues=new Array(1===t?10:7);for(var r=0;r<a.players[o].controlTextValues.length;r++)a.players[o].controlTextValues[r]=0}return a}({mode:t,players:o})})),i=Object(s.a)(r,2),c=i[0],d=i[1],j=Object(m.a)(),h=j.t;function b(e,t,n){var a=Object(u.a)(c.players),o=function(e,t){var n=Object(u.a)(t);return n.push(n.splice(e,1)[0]),n}(c.order.findIndex((function(e){return e.id===c.players[t].id})),c.order);a[t].points+=e,a[t].controlTextValues=Object(u.a)(a[t].controlTextValues),a[t].controlTextValues[n]+=e,d((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:a,order:o})}))}j.i18n,a.useEffect((function(){f.a.pageview("/kinggame/")}),[]);var g=[];g.push(Object(p.jsxs)("div",{children:[h("description.ordenruta"),":"]}));for(var y=0;y<c.players.length;y++)g.push(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"controlTextContainerQueue rounded bold",children:[c.order[y].name,": ",c.order[y].points," ptos"]})})}));g.push(Object(p.jsxs)("p",{children:[h("description.puntos").toUpperCase(),":"]}));for(var O=0;O<c.players.length;O++)g.push(Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"playerInfo",children:[Object(p.jsxs)("div",{className:"headerPlayer importantNote rounded2 rounded",children:[Object(p.jsx)("div",{className:"bold",children:c.players[O].name}),h("description.total"),": ",c.players[O].points]}),Object(p.jsx)("div",{className:"controlTextContainer rounded rounded1",children:x({players:c.players,player:O,pointsMode:c.mode,onValueChange:function(e,t,n){b(e,t,n)}})})]})}));return g.push(Object(p.jsx)("button",{className:"importantNote",onClick:function(){for(var e=0,t=0;t<c.players.length;t++)c.players[t].points<c.players[e].points&&(e=t);n(e)},children:h("description.fin")})),g},S=1e7;function N(e){for(var t=e.mode,n=e.players,a={currentPlayer:0,players:Object(u.a)(n),mode:t,points:0},o=0;o<a.players.length;o++){a.players[o].controlTextValues=new Array(1===t?10:7);for(var r=0;r<a.players[o].controlTextValues.length;r++)a.players[o].controlTextValues[r]=0}return a}var P=function(e){var t=e.mode,n=e.onGameEnd,o=e.players,r=a.useState((function(){return N({mode:t,players:o})})),i=Object(s.a)(r,2),c=i[0],d=i[1],j=Object(m.a)(),h=j.t;if(j.i18n,a.useEffect((function(){f.a.pageview("/pointsgame/")}),[]),c.players.length>0){var b,g=c.players[c.currentPlayer];return b=x({players:c.players,player:c.currentPlayer,pointsMode:c.state,onValueChange:function(e,t,n){!function(e,t,n){o[t].controlTextValues=Object(u.a)(o[t].controlTextValues),o[t].controlTextValues[n]+=e,o[t].points+=e,d((function(e){return Object(l.a)(Object(l.a)({},e),{},{players:o})}))}(e,t,n)}}),Object(p.jsxs)("div",{className:"gameContainer",children:[Object(p.jsx)("div",{className:"playerInfo",children:Object(p.jsxs)("div",{className:"headerPlayer importantNote rounded2 rounded",children:[Object(p.jsx)("div",{className:"bold",children:g.name}),"".concat(h("description.total")," ").concat(h("description.puntos")),": ",g.points]})}),Object(p.jsx)("div",{className:"controlTextContainer rounded rounded1",children:b}),Object(p.jsx)("button",{onClick:function(){window.scrollTo(0,0),c.players[c.currentPlayer].points=0,d((function(e,t){return Object(l.a)(Object(l.a)({},N(e)),{},{players:Object(u.a)(e.players),currentPlayer:e.currentPlayer})}))},className:"resetButton",children:h("description.reset")}),Object(p.jsxs)("button",{className:"importantNote",onClick:function(){window.scrollTo(0,0),c.currentPlayer+1<c.players.length?d((function(e,t){return Object(l.a)(Object(l.a)({},N(e)),{},{points:0,currentPlayer:e.currentPlayer+1})})):n&&n(function(e){for(var t=-1,n=S,a=0;a<e.players.length;a++)e.players[a].points<n&&(n=e.players[a].points,t=a);return t}(c))},children:[h("description.finjugador")," (",g.name,")"]}),Object(p.jsx)("p",{})]})}},k=n.p+"static/media/img00.612023be.png";var M=function(){var e=Object(m.a)(),t=e.t;return e.i18n,Object(p.jsxs)("div",{className:"aboutUsContent",children:[Object(p.jsx)("b",{children:"crawlear.com"})," ",t("content.welcomeMessage"),Object(p.jsx)("p",{children:Object(p.jsxs)("figure",{children:[Object(p.jsx)("img",{className:"contentImg",alt:"crawlers in action",src:k}),Object(p.jsx)("figcaption",{children:Object(p.jsx)("a",{href:"https://www.instagram.com/p/CT7FX_CMag7/",children:"img @takezorc"})})]})}),Object(p.jsx)("p",{children:t("content.instructions")})]})};function E(e,t,n){window.scrollTo(0,0),n({players:t.players,winner:e,gameStatus:2,gameSelected:t.gameSelected,pointsTypeSelected:t.pointsTypeSelected})}function I(e,t){window.scrollTo(0,0),t({players:e.players,winner:e.winner,gameStatus:0,gameSelected:e.gameSelected,pointsTypeSelected:e.pointsTypeSelected})}var z=function(e){var t=a.useRef(),n=[],o=Object(m.a)(),r=o.t,i=(o.i18n,a.useState({players:[],winner:0,gameStatus:0,gameSelected:0,pointsTypeSelected:0})),c=Object(s.a)(i,2),u=c[0],d=c[1];switch(a.useEffect((function(){0===u.gameStatus&&f.a.pageview("/menu/")}),[u.gameStatus]),n.push(Object(p.jsx)("div",{ref:t,className:"hideAlert alertBox"})),u.gameStatus){case 0:n.push(Object(p.jsx)(M,{})),n.push(Object(p.jsx)(h,{onPlayerNumerChange:function(e){!function(e,t,n,a){(function(e){e.current.classList.add("hideAlert"),e.current.innerHTML=""})(a),n({players:e,winner:t.winner,gameStatus:t.gameStatus,gameSelected:t.gameSelected,pointsTypeSelected:t.pointsTypeSelected})}(e,u,d,t)}})),n.push(Object(p.jsx)(b,{selectedGameType:u.gameSelected,selectedPointsType:u.pointsTypeSelected,onGameTypeChange:function(e){!function(e,t,n){t({players:n.players,winner:n.winner,gameStatus:n.gameStatus,gameSelected:e,pointsTypeSelected:n.pointsTypeSelected})}(e,d,u)},onPointsTypeChange:function(e){!function(e,t,n){t({players:n.players,winner:n.winner,gameStatus:n.gameStatus,gameSelected:n.gameSelected,pointsTypeSelected:e})}(e,d,u)}})),n.push(Object(p.jsx)("p",{children:Object(p.jsx)("button",{className:"importantNote",onClick:function(){!function(e,t,n,a){if(window.scrollTo(0,0),e.players.length>0){var o=Object(l.a)({},e);t({players:o.players,winner:o.winner,gameStatus:1,gameSelected:o.gameSelected,pointsTypeSelected:o.pointsTypeSelected})}else!function(e,t){t.current.classList.remove("hideAlert"),t.current.innerHTML=e}(a("error.nojugadores"),n)}(u,d,t,r)},children:r("description.empezar")})}));break;case 1:0===u.gameSelected?n.push(Object(p.jsx)(C,{mode:u.pointsTypeSelected,onGameEnd:function(e){E(e,u,d)},players:u.players})):2===u.gameSelected?n.push(Object(p.jsx)(w,{onGameEnd:function(e){E(e,u,d)},players:u.players,mode:u.pointsTypeSelected})):1===u.gameSelected&&n.push(Object(p.jsx)(P,{mode:u.pointsTypeSelected,onGameEnd:function(e){E(e,u,d)},players:u.players})),n.push(Object(p.jsx)("button",{onClick:function(){I(u,d)},children:r("description.atras")}));break;default:n.push(Object(p.jsxs)("div",{className:"winnerBox importantNote rounded",children:[r("description.ganador"),": ",u.players[u.winner].name," ",Object(p.jsx)("br",{}),r("description.tiempo"),": ",j.printTime(j.secondsToTime(u.players[u.winner].time))," ",Object(p.jsx)("br",{}),r("description.puntos"),": ",u.players[u.winner].points]})),n.push(Object(p.jsx)("div",{className:"pointsTable rounded rounded1",children:u.players.map((function(e,t){return Object(p.jsxs)("div",{className:"winnerBox rounded",value:e.name,children:[Object(p.jsx)("div",{className:"headerPlayer rounded2 bold",children:e.name}),r("description.tiempo"),": ",j.printTime(j.secondsToTime(e.time)),Object(p.jsx)("br",{}),r("description.puntos"),": ",e.points]},t)}))})),n.push(Object(p.jsx)("button",{onClick:function(){I(u,d)},children:r("description.atras")}))}return n};n(39);var A=function(e){var t=e.onLinkClicked,n=Object(m.a)(),o=n.t;return n.i18n,a.useEffect((function(){f.a.pageview("/aboutus/")}),[]),Object(p.jsxs)("div",{className:"aboutUsContent",children:[Object(p.jsx)("b",{children:"crawlear.com"})," ",o("content.aboutus"),Object(p.jsx)("p",{children:o("content.aboutus1")}),Object(p.jsx)("p",{children:o("content.aboutus2")}),Object(p.jsx)("p",{children:Object(p.jsxs)("a",{onClick:t,href:"#void",children:[">"," Volver"]})})]})};var B=function(){return Object(p.jsx)("div",{className:"Footer",children:"\xa9crawlear.com 2021"})};n(40),n(43);var F=function(e){var t=e.onLinkClicked,n=a.useState(!1),o=Object(s.a)(n,2),r=o[0],i=o[1];function c(){i(!r)}return a.useEffect((function(){f.a.pageview("/menu/")}),[]),r?Object(p.jsxs)("div",{className:"rounded menuContainer open",onClick:c,children:[Object(p.jsx)("div",{className:"burguerMenuBar"}),Object(p.jsx)("div",{className:"burguerMenuBar"}),Object(p.jsx)("div",{className:"burguerMenuBar"}),Object(p.jsx)("div",{className:"linksContainer",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#void","data-link":"aboutus",onClick:function(e){t(e.target.dataset.link)},children:"About us"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/privacy.html",children:"Privacy Policy"})})]})})]}):Object(p.jsxs)("div",{className:"rounded menuContainer closed",onClick:c,children:[Object(p.jsx)("div",{className:"burguerMenuBar"}),Object(p.jsx)("div",{className:"burguerMenuBar"}),Object(p.jsx)("div",{className:"burguerMenuBar"})]})};var L=function(){var e,t=o.a.useState(0),n=Object(s.a)(t,2),a=n[0],r=n[1];return o.a.useEffect((function(){f.a.initialize("UA-156750890-2"),f.a.pageview("/")}),[]),0===a?e=Object(p.jsx)(z,{}):1===a&&(e=Object(p.jsx)(A,{onLinkClicked:function(){r(0)}})),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)(F,{onLinkClicked:function(e){r(1)}}),Object(p.jsx)("img",{src:c,alt:"logo"})]}),Object(p.jsx)("div",{className:"AppMainContainer",children:e}),Object(p.jsx)("div",{className:"adsContainer"}),Object(p.jsx)(B,{})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))},G=n(16),D=n(11),J=n(22);G.a.use(J.a).use(D.e).init({debug:!0,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{content:{aboutus:'is a page to help on your crawler "pachangas" (spanish name for a "friends organized game") with friends. It arises from the hobby of a group of friends after discovering the world of the crawler, entering the 1/24 scale',aboutus1:"Instagram: @takezorc",aboutus2:"Barcelona (Spain) 2021",welcomeMessage:'is a score board for your crawler pachangas (spanish name for a "friends organized game").',instructions:"First add the players, select the game mode, the points type and push the Begin button."},error:{nojugadores:"First add the players and select the type of game and score"},description:{nojugadores:"No players",jugadores:"Players",nuevojugador:"New player",ordenaleatorio:"Random order",empezar:"Begin",atras:"Back",ganador:"WINNER",tiempo:"TIME",puntos:"POINTS",finjugador:"end player",total:"TOTAL",ordenruta:"Rute ORDER",fin:"End",reset:"Reset"},points:{vuelco:"overturn",tocar:"touch",puerta:"gate",saltoobstaculo:"obstacle jump",reparacion:"repair",winch:"winch",puertaprogresion:"progression gate",distancia:"distance",anclajeindebido:"improper anchor",juez:"judge"},gametype:{modojuego:"Game mode",tipopuntuacion:"Points type",modojuegotiempo:"A section is chosen and all participants will run it one by one and in the pre-established order. It runs on time and the points accumulate seconds to the total time. The winner will be the player with the shortest time.",modojuegopuntos:"A section is chosen and all participants will run it one by one and in the pre-established order. Points are run and the winner will be the player with the lowest score.",modojuegorey:"There is no pre-established route and the first participant, the King, chooses the path when playing. All participants run at the same time in line following the same route as the King. If a player scores he goes to the end of the queue. The winner will be the player with the lowest score.",simple:"Simple",completa:"Complete",descripcionPuntosSimple:"Winch, touch, obstacle jump, repair, door, overturn and progression door",descripcionPuntosCompleta:"Winch, touch, distance, obstacle jump, repair, door, overturn, progression door, improper anchor and judge",tiempo:"Time",puntos:"Points",rey:"The King"}}},es:{translation:{content:{aboutus:"es una p\xe1gina para ayudar a puntuar las pachangas de crawler con los amigos. Surge a partir de la afici\xf3n de un grupo de amigos despu\xe9s de descubrir el mundo del crawler, entrando por la escala 1/24",aboutus1:"Instagram @takezorc",aboutus2:"Barcelona 2021",welcomeMessage:"es un tablero de puntuaci\xf3n para tus pachangas de crawler con los amigos.",instructions:"Primero a\xf1ada los jugadores, seleccione el modo de juego, el tipo de puntuaci\xf3n y presione Empezar."},error:{nojugadores:"Primero a\xf1ade los jugadores y selecciona el tipo de juego y puntuaci\xf3n"},description:{nojugadores:"No hay jugadores",jugadores:"Jugadores",nuevojugador:"Nuevo jugador",ordenaleatorio:"Orden aleatorio",empezar:"Empezar",atras:"Atr\xe1s",ganador:"GANADOR",tiempo:"TIEMPO",puntos:"PUNTOS",finjugador:"fin jugador",total:"TOTAL",ordenruta:"ORDEN de Ruta",fin:"Fin",reset:"Reiniciar"},points:{vuelco:"vuelco",tocar:"tocar",puerta:"puerta",saltoobstaculo:"salto obstaculo",reparacion:"reparacion",winch:"winch",puertaprogresion:"puerta progresion",distancia:"distancia",anclajeindebido:"anclaje indebido",juez:"juez"},gametype:{modojuego:"Modo de juego",tipopuntuacion:"Tipo de puntuacion",modojuegotiempo:"Se escoge un tramo y todos los participantes lo correr\xe1n uno por uno y en el orden preestablecido. Se corre a tiempo y los puntos acumulan segundos al tiempo total. El ganador ser\xe1 el jugador con menor tiempo.",modojuegopuntos:"Se escoge un tramo y todos los participantes lo correr\xe1n uno por uno y en el orden preestablecido. Se corre a puntos y el ganador ser\xe1 el jugador con menor puntuaci\xf3n.",modojuegorey:"No hay ruta preestablecida y el primer participante, el Rey, escoge el camino al jugar. Todos los participantes corren a la vez en l\xednea siguiendo la misma ruta que el Rey. Si un jugador punt\xfaa pasa al final de la cola. El ganador ser\xe1 el jugador con menor puntuaci\xf3n.",simple:"Simple",completa:"Completa",descripcionPuntosSimple:"Winch, tocar, salto obstaculo, reparacion, puerta, vuelco y puerta progresion",descripcionPuntosCompleta:"Winch, tocar, distancia, salto obstaculo, reparacion, puerta, vuelco, puerta progresion, anclaje indebido y juez",tiempo:"Tiempo",puntos:"Puntos",rey:"El Rey"}}}}});G.a;i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),R()}},[[44,1,2]]]);
//# sourceMappingURL=main.79e29867.chunk.js.map