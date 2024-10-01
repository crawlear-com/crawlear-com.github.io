"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[4988],{93094:(t,s,e)=>{e.r(s),e.d(s,{default:()=>r}),e(39653);var a=e(788),i=(e(50090),e(62613),e(69141)),o=e(22405),c=e(14959);const r=class{constructor(t){this.app=t.app,this.provider=t.provider,this.auth=t.auth,this.db=t.db,this.rdb=t.rdb,this.fbBase=t}async userSearch(t,s,e){try{const e=(0,o.rJ)(this.db,"users"),a=(0,o.P)(e,(0,o.My)("displayName"),(0,o.EO)(t),(0,o.AB)(10)),i=await(0,o.GG)(a),c=[];i.forEach((t=>{const s=t.data();c.push({uid:t.id,displayName:s.displayName,photoURL:s.photoURL})})),s&&s(c)}catch(t){e&&e(t)}}async getUser(t,s,e){const a=(0,o.H9)(this.db,"users",t),i=await(0,o.x7)(a);if(i.exists()){const t=i.data();t.uid=a.id,s&&s(t)}else e&&e()}async getUserExtraData(t,s,e){try{const e={};let a=(0,o.P)((0,o.rJ)(this.db,"games"),(0,o._M)("uids","array-contains",t)),i=await(0,o.GG)(a);e.pilotGames=i.docs.length,a=(0,o.P)((0,o.rJ)(this.db,"games"),(0,o._M)("jids","array-contains",t)),i=await(0,o.GG)(a),e.judgeGames=i.docs.length,a=(0,o.P)((0,o.rJ)(this.db,"routes"),(0,o._M)("uids","array-contains",t)),i=await(0,o.GG)(a),e.routes=i.docs.length,s&&s(e)}catch(t){e&&e()}}transformGamesIntoData(t){return{name:t.name,uids:t.uids,jids:t.jids,date:t.date,location:t.location,gameType:t.gameType,players:t.players,judges:t.judges||[],isPublic:t.isPublic,maxTime:t.maxTime,maxPoints:t.maxPoints,zones:t.zones,gates:t.gates,gameStatus:t.gameStatus,owner:t.owner,courtesyTime:t.courtesyTime}}transformGamesIntoModel(t){let s=[];return t.forEach((t=>{let e;const i=t.data();i.zones||(i.players.forEach((t=>{t.zones=[{fiascoControlTextValues:[],controlTextValues:[],gateProgression:1,gateProgressionData:[],gatesWithBonification:0,gatesWithFail:0,judgedBy:[],points:t.points,totalPoints:t.points,simpathyPoints:0,time:t.time,handicap:0}],t.totalTime=t.time,t.totalPoints=t.points,t.totalGateProgression=1})),i.gates=[1],i.zones=1),e=new a.Game(i.name,i.date,i.location,i.isPublic,i.gameType,i.players,i.judges||[],i.maxTime,i.maxPoints,i.gates,i.zones,i.gameStatus,i.uids,i.jids,i.owner),e.setGameId(t.id),s.push(e)})),s}async getGame(t,s,e){const a=(0,o.H9)(this.db,"games",t),i=await(0,o.x7)(a);if(i.exists()){const t=i.data();t.gid=a.id,s&&s(t)}else e&&e()}async getGamesFromUser(t,s,e,a){try{const a=[],i=(0,o.P)((0,o.rJ)(this.db,"games"),(0,o._M)("uids","array-contains",t),(0,o._M)("gameStatus","<",2));(await(0,o.GG)(i)).docs.forEach((e=>{const i=e.data();(!i.jids||i.jids.indexOf(t)<0)&&(s&&i.isPublic||!s)&&a.push(e)})),e&&e(this.transformGamesIntoModel(a))}catch(t){a&&a()}}async getGamesFromJudge(t,s,e,a){try{const a=[],i=(0,o.P)((0,o.rJ)(this.db,"games"),(0,o._M)("jids","array-contains",t),(0,o._M)("gameStatus","<",2));(await(0,o.GG)(i)).docs.forEach((t=>{const e=t.data();(s&&e.isPublic||!s)&&a.push(t)})),e&&e(this.transformGamesIntoModel(a))}catch(t){a&&a()}}async getFinishedGamesFromUid(t,s,e){try{const e=(0,o.P)((0,o.rJ)(this.db,"games"),(0,o.Uo)((0,o._M)("gameStatus","==",2),(0,o.or)((0,o._M)("uids","array-contains",t),(0,o._M)("jids","array-contains",t)))),a=await(0,o.GG)(e);s&&s(this.transformGamesIntoModel(a.docs))}catch(t){e&&e()}}async setGame(t,s,e){try{const e=await(0,o.gS)((0,o.rJ)(this.db,"games"),this.transformGamesIntoData(t));t.gid=e.id,s&&s(t)}catch(t){e&&e()}}updateGame(t){(0,o.mZ)((0,o.H9)(this.db,"games",t.gid),this.transformGamesIntoData(t))}async removeGame(t){await(0,o.kd)((0,o.H9)(this.db,"games",t)),(0,i.TF)((0,i.KR)(this.rdb,"gameProgression/".concat(t,"/"))),(0,i.TF)((0,i.KR)(this.rdb,"presenceRequests/".concat(t,"/")))}async removeIdFromGame(t,s,e){const a=(0,o.H9)(this.db,"games",t.gid),i=await(0,o.x7)(a);if(i.exists()){const a=i.data(),c=a[e].indexOf(s);a.gid=i.id,a[e].splice(c,1);const r=this.transformGamesIntoData(a),n={};return n[e]=r[e],r[e]=n[e],(0,o.mZ)((0,o.H9)(this.db,"games",t.gid),n),a}return t}async setGpx(t,s,e){try{if(t.gid)await(0,o.BN)((0,o.H9)(this.db,"gpx",t.gid),{data:t.data}),s&&s(t);else{const e=await(0,o.gS)((0,o.rJ)(this.db,"gpx"),{data:t.data});t.gid=e.id,s&&s(t)}}catch(t){e&&e()}}async getLovedRoutes(t,s,e){try{const e=(0,o.P)((0,o.rJ)(this.db,"routeLove"),(0,o._M)("uid","==",t));(await(0,o.GG)(e)).docs.forEach((async t=>{const e=t.data();await this.fbBase.getRoute(e.rid,!1,(t=>{t.rid=e.rid,s(t)}),(()=>{}))}))}catch(t){e&&e()}}async getRouteLove(t,s,e,a){try{const a=(0,o.P)((0,o.rJ)(this.db,"routeLove"),(0,o._M)("uid","==",t),(0,o._M)("rid","==",s)),i=await(0,o.GG)(a);e&&e(i.docs.length>0,i.docs[0].id)}catch(t){a&&a()}}async loveRoute(t,s,e,a){try{const a=await(0,o.gS)((0,o.rJ)(this.db,"routeLove"),{uid:t,rid:s});e&&e(a.id)}catch(t){a&&a()}}async unloveRoute(t,s,e){try{await(0,o.kd)((0,o.H9)(this.db,"routeLove",t)),s&&s()}catch(t){e&&e()}}async setRoute(t,s,e){this.setGpx(t.gpx,(async a=>{try{const i=t.transformIntoData(a.gid);if(t.rid&&a.gid)await(0,o.BN)((0,o.H9)(this.db,"routes",t.rid),i);else if(a.gid){t.gpx=a.gid;const s=await(0,o.gS)((0,o.rJ)(this.db,"routes"),i);t.rid=s.id}else e&&e();t.gpx=a,s&&s(t)}catch(t){e&&e()}}),(()=>{e&&e()}))}async getRoutesFromUser(t,s,e){try{const a=[],i=(0,o.P)((0,o.rJ)(this.db,"routes"),(0,o._M)("uids","array-contains",t));(await(0,o.GG)(i)).docs.forEach((t=>{const i=t.data();i.gpx?this.fbBase.getGpx(i.gpx,(e=>{i.gpx=e,i.gpx.gid=e.gid,a.push({...i,rid:t.id}),s&&s(a)}),e):(a.push({...t.data(),rid:t.id}),s&&s(a))}))}catch(t){e&&e()}}async removeRoute(t,s,e,a){s&&await(0,o.kd)((0,o.H9)(this.db,"gpx",s)),await(0,o.kd)((0,o.H9)(this.db,"routes",t)),e&&e()}setUserInContext(t,s){t.instagram=t.instagram||"",window.crawlear={...window.crawlear,user:t},window.crawlear.user.uid=s}logout(){(0,c.xI)().signOut(),window.crawlear.user={}}getUserGameRequests(t,s,e,a,o){const c=(0,i.KR)(this.rdb,"gameRequests/".concat(t));(0,i._O)(c,(t=>{const s={};s[t.key]=t.val(),a(s)})),(0,i.U0)(c,(t=>{o(t.key)}))}getGameProgressionOnce(t,s,e){(0,i.Jt)((0,i.KR)(this.rdb,"gameProgression/".concat(t))).then((t=>{s&&s(t.key,t.val())}),e)}getGameProgression(t,s,e,a,o){const c=(0,i.KR)(this.rdb,"gameProgression/".concat(t));(0,i._O)(c,(t=>{a(t.key,t.val())})),(0,i.M4)(c,(t=>{o(t.key,t.val())}))}setGameProgression(t,s,e,a,o){(0,i.hZ)((0,i.KR)(this.rdb,"gameProgression/".concat(t,"/").concat(e,"/").concat(s,"/").concat(a)),o)}removeGameProgression(t){(0,i.TF)((0,i.KR)(this.rdb,"gameProgression/".concat(t)))}getGameResult(t,s,e){(0,i.Jt)((0,i.KR)(this.rdb,"gameProgression/".concat(t.gid))).then((e=>{const a=e.val();Object.entries(a).forEach(((s,e)=>{Object.entries(s[1]).forEach(((s,a)=>{s[1].data&&(t.players[e].zones[a]=s[1].data)}))})),s&&s(t)}),e)}createGameProgression(t){for(let s=0;s<t.players.length;s++)for(let e=0;e<t.zones;e++)this.setGameProgression(t.gid,t.players[s].id,t.players[s].group,e,{status:"waiting",data:{}})}acceptGameRequest(t,s){(0,i.hZ)((0,i.KR)(this.rdb,"gameRequests/".concat(t,"/").concat(s,"/status/")),"accepted"),(0,i.TF)((0,i.KR)(this.rdb,"gameRequests/".concat(t,"/").concat(s,"/")))}rejectGameRequest(t,s){(0,i.hZ)((0,i.KR)(this.rdb,"gameRequests/".concat(t,"/").concat(s,"/status/")),"rejected"),(0,i.TF)((0,i.KR)(this.rdb,"gameRequests/".concat(t,"/").concat(s,"/")))}setUserGameRequest(t,s,e,a,o){const c=(0,i.VC)((0,i.KR)(this.rdb,"gameRequests/".concat(e,"/")),{fromUid:t,fromName:s,toUid:e,gameName:a,date:(new Date).toLocaleDateString(),status:"pending"});(0,i.Zy)(c,(t=>{const s=t.val();s&&o(s,s.status)}))}setDirectorPresenceRequest(t,s,e,a,o){const c=(0,i.VC)((0,i.KR)(this.rdb,"presenceRequests/".concat(t,"/")),{zone:s,playerName:e,fromName:a,date:(new Date).toLocaleDateString(),status:"pending"});(0,i.Zy)(c,(t=>{const s=t.val();s&&o(s,t.key)}))}getDirectorPresenceRequest(t,s,e){const a=(0,i.KR)(this.rdb,"presenceRequests/".concat(t));(0,i._O)(a,(t=>{s(t.key,t.val())})),(0,i.M4)(a,(t=>{e(t.key,t.val())}))}acceptDirectorPresenceRequest(t,s){(0,i.hZ)((0,i.KR)(this.rdb,"presenceRequests/".concat(t,"/").concat(s,"/status/")),"accepted")}removeDirectorPresenceRequest(t){(0,i.TF)((0,i.KR)(this.rdb,"presenceRequests/".concat(t)))}async setPost(t,s,e,a,i,c,r){const n={uid:t,gid:i,date:e,url:s,text:a};if(a.length>=0&&s.length>=0)try{const t=await(0,o.gS)((0,o.rJ)(this.db,"socialPosts"),n);n.pid=t.id,c&&c(n)}catch(t){r&&r()}else r&&r()}async setFollow(t,s,e,a){try{const a=await(0,o.gS)((0,o.rJ)(this.db,"follows"),{fromUid:t,toUid:s});e&&e(a.id)}catch(t){a&&a()}}async removeFollow(t,s,e){await(0,o.kd)((0,o.H9)(this.db,"follows",t)),s&&s()}async getPost(t,s,e){const a=(0,o.H9)(this.db,"socialPosts",t),i=await(0,o.x7)(a);if(i.exists()){const t=i.data();t.pid=a.id,s(t)}else e()}async getPosts(t,s,e){try{const e=(0,o.P)((0,o.rJ)(this.db,"socialPosts"),(0,o._M)("uid","==",t),(0,o.My)("date","desc"),(0,o.AB)(10)),a=await(0,o.GG)(e),i=[];a.docs.forEach((t=>{i.push({...t.data(),pid:t.id})})),s&&s(i)}catch(t){e&&e()}}async getPostsFromFollowFeed(t,s,e){try{const e=[],a=(0,o.P)((0,o.rJ)(this.db,"follows"),(0,o._M)("fromUid","==",t)),i=(await(0,o.GG)(a)).docs;for(;i.length>0;){const t=[];i.splice(0,10).forEach((s=>{const e=s.data();t.push(e.toUid)}));const s=(0,o.P)((0,o.rJ)(this.db,"socialPosts"),(0,o._M)("uid","in",t),(0,o.My)("date","desc"),(0,o.AB)(10));(await(0,o.GG)(s)).docs.forEach((t=>{const s=t.data();s.pid=t.id,e.push(s)}))}s&&s(e)}catch(t){e&&e()}}async removePost(t,s,e){await(0,o.kd)((0,o.H9)(this.db,"socialPosts",t)),this.removeLikes(t,10),s&&s()}async getPostLikesCount(t,s,e){try{const e=(0,o.P)((0,o.rJ)(this.db,"likes"),(0,o._M)("pid","==",t),(0,o.AB)(15)),a=(await(0,o.GG)(e)).docs.length;s&&s(a)}catch(t){e&&e()}}async getIfPostIsLiked(t,s,e,a){try{const a=(0,o.P)((0,o.rJ)(this.db,"likes"),(0,o._M)("uid","==",s),(0,o._M)("pid","==",t),(0,o.AB)(1)),i=await(0,o.GG)(a),c=1===i.docs.length;e&&e(c,c?i.docs[0].id:"")}catch(t){a&&a()}}async getFidFromFollow(t,s,e,a){try{const a=(0,o.P)((0,o.rJ)(this.db,"follows"),(0,o._M)("fromUid","==",t),(0,o._M)("toUid","==",s),(0,o.AB)(1)),i=await(0,o.GG)(a),c=1===i.docs.length?i.docs[0].id:-1;e&&e(c)}catch(t){a&&a()}}async setLike(t,s,e,a){const i={pid:t,uid:s};try{const t=await(0,o.gS)((0,o.rJ)(this.db,"likes"),i);e&&e(t.id)}catch(t){a&&a()}}async removeLike(t,s,e){await(0,o.kd)((0,o.H9)(this.db,"likes",t)),s&&s()}async removeLikes(t,s){const e=(0,o.P)((0,o.rJ)(this.db,"likes"),(0,o._M)("pid","==",t),(0,o.My)("__name__"),(0,o.AB)(s));return new Promise(((t,s)=>{this.deleteQueryBatch(e,t).catch(s)}))}async deleteQueryBatch(t,s){const e=await(0,o.GG)(t);0!==e.size?(e.docs.forEach((async t=>{const s=(0,o.wP)(this.db);s.delete(t.ref),s.commit()})),setTimeout((()=>{this.deleteQueryBatch(t,s)}),100)):s()}}}}]);