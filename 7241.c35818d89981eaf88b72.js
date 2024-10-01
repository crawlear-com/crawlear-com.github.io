"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[7241],{67241:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var n=r(96540),a=r(18492),i=r(47767),o=r(55512),l=r(55711),s=r(85072),c=r.n(s),u=r(97825),d=r.n(u),m=r(77659),f=r.n(m),p=r(55056),g=r.n(p),E=r(10540),w=r.n(E),h=r(41113),b=r.n(h),v=r(3893),P={};function _(e){return window.crawlear.fbBase.isUserLogged()&&window.crawlear&&window.crawlear.user&&window.crawlear.user.uid===e}P.styleTagTransform=b(),P.setAttributes=g(),P.insert=f().bind(null,"head"),P.domAPI=d(),P.insertStyleElement=w(),c()(v.A,P),v.A&&v.A.locals&&v.A.locals;const x=function(e){let{user:t,onLogout:r}=e;const{t:s}=(0,a.B)(["main"]),c=window.crawlear.fb,u=window.crawlear.fbBase,d=(0,i.Zp)(),[m,f]=n.useState(t.displayName),[p,g]=n.useState(t.description),[E,w]=n.useState(t.instagram),{isUserLoged:h}=n.useContext(l.F),[b,v]=n.useState(-1),P=[];return n.useEffect((()=>{h&&!_(t.uid)&&c.getFidFromFollow(window.crawlear.user.uid,t.uid,(e=>{v(e)}),(()=>{}))}),[h]),h&&!_(t.uid)&&(-1!==b?P.push(n.createElement("div",{key:"followAction",className:"follow",onClick:function(){c.removeFollow(b,(()=>{v(-1)}),(()=>{}))}},s("description.unfollow"))):P.push(n.createElement("div",{key:"followAction",className:"follow",onClick:function(){c.setFollow(window.crawlear.user.uid,t.uid,(e=>{e&&v(e)}),(()=>{}))}},s("description.follow")))),n.createElement("div",{className:"userProfileContainer rounded rounded2"},n.createElement("div",{className:"userProfilePhotoContainer"},h&&_(t.uid)?n.createElement("img",{referrerPolicy:"no-referrer",className:"photo",src:t.photoURL,alt:"user avatar"}):n.createElement("a",{href:"https://crawlear.com/profile?uid=".concat(t.uid)},n.createElement("img",{referrerPolicy:"no-referrer",className:"photo",src:t.photoURL,alt:"user avatar"})),n.createElement("div",{className:"sharerContainer"},_(t.uid)?n.createElement("div",{className:"logout",onClick:()=>{window.crawlear.fb.logout(),r&&r(),d("/")}},"Logout"):n.createElement(n.Fragment,null),P)),n.createElement("div",{className:"userProfileInlineContainer"},n.createElement("div",{className:"name"},n.createElement("input",{type:"text",className:"bold textOverflow hidenInput",readOnly:!h||!_(t.uid),value:m,onChange:function(e){const r=e.target.value;_(t.uid)&&r!==m&&r.length>0&&f(r)},onBlur:function(e){const r=e.target.value;_(t.uid)&&t.displayName!==r&&r.length>0&&(t.displayName=r,f(r),u.setUser(t,(()=>{}),(()=>{})))}})),_(t.uid)?n.createElement("div",{className:"registrationDate"},n.createElement("span",{className:"bold"},s("description.registro")),": ",new Date(t.registrationDate).toLocaleDateString()):n.createElement(n.Fragment,null),n.createElement("div",{className:"description"},_(t.uid)?n.createElement("span",{className:"bold"},s("description.descripcion"),":"):n.createElement(n.Fragment,null),n.createElement("textarea",{type:"text",readOnly:!h||!_(t.uid),className:"hidenInput textOverflow",value:p,onChange:function(e){const r=e.target.value;_(t.uid)&&r!==p&&g(r)},onBlur:function(e){const r=e.target.value;_(t.uid)&&t.description!==r&&(t.description=r,g(r),u.setUser(t,(()=>{}),(()=>{})))}})),(!h||!_(t.uid))&&E||_(t.uid)?n.createElement("div",{className:"instagram"},n.createElement("div",{className:"bold"},"Instagram: "),_(t.uid)?n.createElement("input",{type:"text",className:"textOverflow hidenInput",readOnly:!h||!_(t.uid),value:E,onChange:function(e){const r=e.target.value;_(t.uid)&&r!==E&&w(r)},onBlur:function(e){const r=e.target.value;_(t.uid)&&t.instagram!==r&&(t.instagram=r,w(r),u.setUser(t,(()=>{}),(()=>{})))}}):E?n.createElement("a",{href:"https://www.instagram.com/".concat(E,"/"),target:"_blank"},"@",E):n.createElement(n.Fragment,null)):n.createElement(n.Fragment,null),n.createElement(o.default,{url:"profile?uid=".concat(t.uid),headerText:s("content.comparteenredespiloto"),text:s("content.shareProfileText")}),_(t.uid)?n.createElement("div",{className:"userProfileHelper"},n.createElement("p",null,n.createElement("span",{className:"bold"},s("description.ayuda"),":")," ",s("content.editprofile"))):n.createElement(n.Fragment,null)))};var T=r(48298);var U=r(5507),N=r(44730),C={};C.styleTagTransform=b(),C.setAttributes=g(),C.insert=f().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=w(),c()(N.A,C),N.A&&N.A.locals&&N.A.locals;const y=function(e){let{onVisible:t}=e;const r=n.useRef(null),[a,i]=n.useState(!1),[o,l]=n.useState(!1);return n.useEffect((()=>{i(!0)}),[]),((e,t)=>{(0,n.useEffect)((()=>{if(e){const r=new IntersectionObserver((e=>{t(e[0].isIntersecting)}),{});return r.observe(e),()=>{e&&r.unobserve(e)}}}),[e])})(r.current,(e=>{!o&&e&&(l(!0),t(!0))})),n.createElement("div",{className:"loadingLogo"},n.createElement("a",{href:"https://crawlear.com",target:"_blank",rel:"noreferrer"},n.createElement("img",{ref:r,src:U,className:"notLoggedLogo",alt:"web logo"})),n.createElement("br",null),n.createElement(T.default,null))};var S=r(22585),O=r.n(S),R=r(74090),A={};A.styleTagTransform=b(),A.setAttributes=g(),A.insert=f().bind(null,"head"),A.domAPI=d(),A.insertStyleElement=w(),c()(R.A,A),R.A&&R.A.locals&&R.A.locals;const L=function(e){let{uid:t,onLogout:r}=e;const{t:i}=(0,a.B)(["main"]),o=window.crawlear.fbBase,[l,s,c,u,d]=O()(t);if(l.registrationDate&&c){let e=d(s);return n.createElement("div",{className:"userViewer"},o.isUserLogged()?n.createElement(n.Fragment,null,n.createElement("div",{className:"headerText bold sectionTitle"},i("description.perfilsocial"))):n.createElement("a",{href:"https://crawlear.com",target:"_blank"},n.createElement("img",{src:U,className:"notLoggedLogo",alt:"web logo"})),n.createElement(n.Fragment,null,n.createElement(x,{onLogout:r,user:l}),n.createElement("div",{className:"statistics rounded rounded3"},n.createElement("div",{className:"headerText bold"},i("description.estadisticas")),n.createElement("div",null,i("description.partidasdejuez"),": ",s.judgeGames||0),n.createElement("div",null,i("description.partidascomopiloto"),": ",s.pilotGames||0),n.createElement("div",null,i("description.rutas"),": ",s.routes||0),n.createElement("p",{className:"bold"},e===S.USER_TYPE_JUDGE?i("description.tendenciajuez"):e===S.USER_TYPE_PILOT?i("description.tendenciapiloto"):e===S.USER_TYPE_ROUTE?i("description.tendenciaruta"):i("description.tendencianeutral")),n.createElement("p",null))))}return n.createElement(y,{onVisible:u})}},44730:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(31601),a=r.n(n),i=r(76314),o=r.n(i)()(a());o.push([e.id,".loadingLogo{margin-top:25px}",""]);const l=o},3893:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(31601),a=r.n(n),i=r(76314),o=r.n(i)()(a());o.push([e.id,".userViewer .post input{color:#000}.userProfileContainer{text-align:right;display:inline-block;margin-bottom:15px;width:95%;font-size:.8em}.userProfileContainer .headerText{text-align:center}.userProfileContainer .userProfilePhotoContainer{float:left;width:25%}.userProfileContainer .userProfilePhotoContainer img{margin:0 auto;width:100%;border-radius:15px}.userProfileContainer .userProfileInlineContainer{float:right;width:73%}.userProfileContainer .userProfileInlineContainer .name{margin:5px 0}.userProfileContainer .userProfileInlineContainer textarea{font-size:.8em}.userProfileContainer .userProfileInlineContainer input,.userProfileContainer .userProfileInlineContainer textarea{border-radius:0;text-align:right;width:100%;margin:0;padding:0;resize:none}.userProfileContainer .description{margin-top:5px}.userProfileContainer .hidenInput{font-family:Montserrat,sans-serif;color:#fcf7ff;background-color:rgba(0,0,0,0);border:none}.userProfileContainer .userProfileHelper{font-size:.7em}",""]);const l=o},74090:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(31601),a=r.n(n),i=r(76314),o=r.n(i),l=r(4417),s=r.n(l),c=new URL(r(62956),r.b),u=o()(a()),d=s()(c);u.push([e.id,`.userViewer{max-width:470px;margin:0 auto 25px auto}.userViewer .statistics,.userViewer .posts{margin-bottom:25px;margin:0 auto 25px auto}.userViewer .statistics{width:96%;background-image:url(${d}),linear-gradient(#345B63, #112031);background-position-x:center;background-repeat:no-repeat;padding-bottom:25px;font-size:.8em}.userViewer .removePostButton{float:right}.userViewer .post{font-size:.8em;margin-bottom:25px;width:95%;overflow:hidden;background-color:#eee;color:#000;text-align:left}.userViewer .submit{border:0px;color:#fff;padding:10px}.sharerContainer{margin-bottom:14px}.sharerContainer .shareProfileText{margin:15px 0 15px 0;font-size:.8em}`,""]);const m=u},22585:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.USER_TYPE_ROUTE=t.USER_TYPE_NEUTRAL=t.USER_TYPE_JUDGE=t.USER_TYPE_PILOT=void 0;var s=o(r(96540)),c=l(r(38791));t.USER_TYPE_PILOT=0,t.USER_TYPE_JUDGE=1,t.USER_TYPE_NEUTRAL=2,t.USER_TYPE_ROUTE=3,t.default=function(e){var r=window.crawlear.fb,a=s.useState({uid:"",displayName:"",description:"",instagram:"",photoURL:"",registrationDate:""}),i=a[0],o=a[1],l=s.useState({judgeGames:0,pilotGames:0,routes:0}),u=l[0],d=l[1],m=s.useState(!1),f=m[0],p=m[1];return s.useEffect((function(){e&&f&&(r.getUser(e,(function(t){o(n({},t)),r.getUserExtraData(e,(function(e){d(e)}))})),f&&c.default.pageview("".concat(document.location.pathname).concat(document.location.search)))}),[f,e]),[i,u,f,function(e){e&&p(e)},function(e){return e.routes>e.judgeGames+e.pilotGames?t.USER_TYPE_ROUTE:e.judgeGames-e.pilotGames>0?t.USER_TYPE_JUDGE:e.judgeGames-e.pilotGames==0?t.USER_TYPE_NEUTRAL:t.USER_TYPE_PILOT}]}},62956:(e,t,r)=>{e.exports=r.p+"2f52623ecac9ca1603ff.png"}}]);