"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[1569],{11569:function(e,n,t){t.r(n),t.d(n,{default:function(){return O},isOffline:function(){return I}});var r=t(67294),a=t(26793),o=t(29525),l=t(6685),i=t.n(l),u=t(93379),c=t.n(u),f=t(7795),s=t.n(f),m=t(90569),d=t.n(m),y=t(3565),b=t.n(y),p=t(19216),w=t.n(p),h=t(44589),v=t.n(h),E=t(59484),C={};function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,l,i=[],u=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(i.push(r.value),i.length!==n);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}C.styleTagTransform=v(),C.setAttributes=b(),C.insert=d().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=w(),c()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals;var A=window.document.body,k=(0,r.lazy)((function(){return Promise.all([t.e(3172),t.e(8695),t.e(5835)]).then(t.bind(t,12381))})),x=(0,r.lazy)((function(){return Promise.all([t.e(5967),t.e(8674),t.e(4186),t.e(3172),t.e(8695),t.e(1893),t.e(6689)]).then(t.bind(t,56689))})),z=(0,r.lazy)((function(){return Promise.all([t.e(3385),t.e(4491)]).then(t.bind(t,64491))})),I=!navigator.onLine,O=function(){var e=(0,a.$)(["main"]).t,n=g(r.useState(3),2),t=n[0],l=n[1],u=g(r.useState(null),2),c=u[0],f=u[1];return r.useEffect((function(){A.classList.add("offline"),window.crawlear=window.crawlear||{},window.crawlear.user={uid:o.OFFLINE_USER_UID}}),[]),0===t?r.createElement(i(),{lazyComponent:r.createElement(k,{onGameCreated:function(e){f(e),l(1)}})}):1===t?r.createElement(i(),{lazyComponent:r.createElement(x,{inGame:c,onBackButtonClick:function(){l(3)}})}):r.createElement(i(),{lazyComponent:r.createElement(r.Fragment,null,r.createElement(z,null),r.createElement("div",{className:"errorBoxContainer offlineContainer"},e("content.offlineMainText")),r.createElement("button",{onClick:function(){l(0)},className:"importantNote"},e("description.crearoffline")))})}},59484:function(e,n,t){var r=t(8081),a=t.n(r),o=t(23645),l=t.n(o)()(a());l.push([e.id,"body.offline .offlineContainer{width:95%;margin:10px auto;padding:15px;text-decoration:underline}",""]),n.Z=l}}]);