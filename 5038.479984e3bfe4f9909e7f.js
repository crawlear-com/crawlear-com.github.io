"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[5038],{55038:(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});class r{static isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIphone(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)}static isFirefox(){return/Firefox/i.test(navigator.userAgent)}static sanitizeUrl(t){const e=t.indexOf("?");return e>=0&&(t=t.slice(0,e)),"/"!==t[t.length-1]&&(t+="/"),t}static isYoutubeUrl(t){var e=t.match(/^.*(youtube.com|youtu.be)\/(watch\?v=|embed\/|v\/|shorts\/|)(.*?((?=[&#?])|$))/);return e&&11===e[3].length}static isGoogleMapsUrl(t){var e=t.match(/^https?:\/\/maps\.app\.goo\.gl\/(.*)/);return e&&e[1]}static isInstagramUrl(t){var e=this.sanitizeUrl(t).match(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)(?:\/(?:.?)*)*\/(?:reel|p|tv)\/(.*)*(?:\/)*/);return e&&e[1]}static getTiktokVideoId(t){var e=this.sanitizeUrl(t).match(/(?:(?:http|https):\/\/)?(?:www.)?tiktok.com\/@(.*)\/video\/(.*)*/);return e&&e[1]&&e[2]?e[2]:null}static isTiktokUrl(t){var e=this.sanitizeUrl(t).match(/(?:(?:http|https):\/\/)?(?:www.)?tiktok.com\/@(.*)\/video\/(.*)*/);return e&&e[1]&&e[2]}static isFacebookUrl(t){var e=this.sanitizeUrl(t).match(/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-.]*\/)*([\w\-.]*)/);return e&&e[1]&&e[2]}static tokenToTexts(t,e){return e.map((e=>t(e)))}static getUidsFromUsers(t){const e=[];return t.forEach((t=>{t.uid&&e.push(t.uid)})),e}static millisToTime(t){let e=Math.floor(t/1e3),s=Math.floor(e/60),r=Math.floor(s/60);return e%=60,s%=60,r%=24,{h:r,m:s,s:e,mm:t%1e3}}static timeToMillis(t,e,s){const r=new Date,i=new Date;return i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0),r.setMinutes(t),r.setSeconds(e),r.setMilliseconds(s),r.getTime()-i.getTime()}static printTime(t){return"".concat(String(t.m).padStart(2,"0"),":").concat(String(t.s).padStart(2,"0"),":").concat(String(t.mm).padStart(3,"0"))}static randomizeArray(t){let e,s=t.length;for(;0!==s;)e=Math.floor(Math.random()*s),s--,[t[s],t[e]]=[t[e],t[s]];return t}static getWinnerByPoints(t){const e=[...t];return e.sort((function(t,e){const s=t.points-e.points;return 0===s?t.id-e.id:s})),e}static getWinnerByPointsAndTime(t){const e=[...t];return e.sort((function(t,e){const s=t.points-e.points;return 0===s?t.time-e.time:s})),e}static getOrderedGameResult(t){return(t=this.calulateFinalGameResult(t)).players=t.players.sort(((t,e)=>{const s=t.totalPoints-e.totalPoints;if(0===s){const s=t.totalTime-e.totalTime;return 0===s?e.totalGateProgression-t.totalGateProgression:s}return s})),t}static calulateFinalGameResult(t){const e={...t};return e.players.forEach((t=>{let e=0,s=0,r=0;t.zones.forEach((t=>{e+=t.totalPoints,s+=t.time,r+=t.gateProgression})),t.totalPoints=e,t.totalTime=s,t.totalGateProgression=r})),e}static getMapsURL(t,e){return"https://www.google.com/maps/search/?api=1&query=".concat(t,"%2C").concat(e)}static findElementInArray(t,e,s){let r=0;return[t.find(((t,i)=>(s(t,e)&&(r=i),s(t,e)))),r]}}r.PLAYER_STATE_STOP="stop",r.PLAYER_STATE_START="start",r.PLAYER_STATE_PAUSE="pause";const i=r}}]);