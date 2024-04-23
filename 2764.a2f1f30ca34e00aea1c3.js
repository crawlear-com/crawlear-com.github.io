/*! For license information please see 2764.a2f1f30ca34e00aea1c3.js.LICENSE.txt */
"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[2764],{84976:(e,t,r)=>{var n,o;r.r(t),r.d(t,{AbortedDeferredError:()=>l.tH,Await:()=>u.jD,BrowserRouter:()=>F,Form:()=>M,HashRouter:()=>A,Link:()=>I,MemoryRouter:()=>u.fS,NavLink:()=>$,Navigate:()=>u.C5,NavigationType:()=>l.rc,Outlet:()=>u.sv,Route:()=>u.qh,Router:()=>u.Ix,RouterProvider:()=>U,Routes:()=>u.BV,ScrollRestoration:()=>V,UNSAFE_DataRouterContext:()=>u.sp,UNSAFE_DataRouterStateContext:()=>u.Rq,UNSAFE_ErrorResponseImpl:()=>l.VV,UNSAFE_FetchersContext:()=>x,UNSAFE_LocationContext:()=>u.yN,UNSAFE_NavigationContext:()=>u.jb,UNSAFE_RouteContext:()=>u.UX,UNSAFE_ViewTransitionContext:()=>C,UNSAFE_useRouteId:()=>u.$3,UNSAFE_useScrollRestoration:()=>ne,createBrowserRouter:()=>E,createHashRouter:()=>S,createMemoryRouter:()=>u.bg,createPath:()=>l.AO,createRoutesFromChildren:()=>u.AV,createRoutesFromElements:()=>u.Eu,createSearchParams:()=>h,defer:()=>l.v6,generatePath:()=>l.tW,isRouteErrorResponse:()=>l.pX,json:()=>l.Pq,matchPath:()=>l.B6,matchRoutes:()=>l.ue,parsePath:()=>l.Rr,redirect:()=>l.V2,redirectDocument:()=>l.Sk,renderMatches:()=>u.KT,resolvePath:()=>l.o1,unstable_HistoryRouter:()=>j,unstable_usePrompt:()=>ae,unstable_useViewTransitionState:()=>ie,useActionData:()=>u.mP,useAsyncError:()=>u.oI,useAsyncValue:()=>u.J8,useBeforeUnload:()=>oe,useBlocker:()=>u.KP,useFetcher:()=>Z,useFetchers:()=>ee,useFormAction:()=>Q,useHref:()=>u.$P,useInRouterContext:()=>u.Ri,useLinkClickHandler:()=>J,useLoaderData:()=>u.LG,useLocation:()=>u.zy,useMatch:()=>u.RQ,useMatches:()=>u.FE,useNavigate:()=>u.Zp,useNavigation:()=>u.cq,useNavigationType:()=>u.wQ,useOutlet:()=>u.P1,useOutletContext:()=>u.KC,useParams:()=>u.g,useResolvedPath:()=>u.x$,useRevalidator:()=>u.vL,useRouteError:()=>u.r5,useRouteLoaderData:()=>u.Ew,useRoutes:()=>u.Ye,useSearchParams:()=>W,useSubmit:()=>X});var a=r(96540),i=r(40961),u=r(47767),l=r(45588);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}const f="get",d="application/x-www-form-urlencoded";function p(e){return null!=e&&"string"==typeof e.tagName}function h(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map((e=>[r,e])):[[r,n]])}),[]))}let m=null;const v=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function y(e){return null==e||v.has(e)?e:null}const b=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],g=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],w=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}function E(e,t){return(0,l.aE)({basename:null==t?void 0:t.basename,future:s({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,l.zR)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||R(),routes:e,mapRouteProperties:u.wE,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,window:null==t?void 0:t.window}).initialize()}function S(e,t){return(0,l.aE)({basename:null==t?void 0:t.basename,future:s({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,l.TM)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||R(),routes:e,mapRouteProperties:u.wE,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,window:null==t?void 0:t.window}).initialize()}function R(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=s({},t,{errors:_(t.errors)})),t}function _(e){if(!e)return null;let t=Object.entries(e),r={};for(let[e,n]of t)if(n&&"RouteErrorResponse"===n.__type)r[e]=new l.VV(n.status,n.statusText,n.data,!0===n.internal);else if(n&&"Error"===n.__type){if(n.__subType){let t=window[n.__subType];if("function"==typeof t)try{let o=new t(n.message);o.stack="",r[e]=o}catch(e){}}if(null==r[e]){let t=new Error(n.message);t.stack="",r[e]=t}}else r[e]=n;return r}const C=a.createContext({isTransitioning:!1}),x=a.createContext(new Map),k=(n||(n=r.t(a,2))).startTransition,L=(o||(o=r.t(i,2))).flushSync,P=(n||(n=r.t(a,2))).useId;function T(e){L?L(e):e()}class O{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function U(e){let{fallbackElement:t,router:r,future:n}=e,[o,i]=a.useState(r.state),[l,s]=a.useState(),[c,f]=a.useState({isTransitioning:!1}),[d,p]=a.useState(),[h,m]=a.useState(),[v,y]=a.useState(),b=a.useRef(new Map),{v7_startTransition:g}=n||{},w=a.useCallback((e=>{g?function(e){k?k(e):e()}(e):e()}),[g]),E=a.useCallback(((e,t)=>{let{deletedFetchers:n,unstable_flushSync:o,unstable_viewTransitionOpts:a}=t;n.forEach((e=>b.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&b.current.set(t,e.data)}));let u=null==r.window||"function"!=typeof r.window.document.startViewTransition;if(a&&!u){if(o){T((()=>{h&&(d&&d.resolve(),h.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:a.currentLocation,nextLocation:a.nextLocation})}));let t=r.window.document.startViewTransition((()=>{T((()=>i(e)))}));return t.finished.finally((()=>{T((()=>{p(void 0),m(void 0),s(void 0),f({isTransitioning:!1})}))})),void T((()=>m(t)))}h?(d&&d.resolve(),h.skipTransition(),y({state:e,currentLocation:a.currentLocation,nextLocation:a.nextLocation})):(s(e),f({isTransitioning:!0,flushSync:!1,currentLocation:a.currentLocation,nextLocation:a.nextLocation}))}else o?T((()=>i(e))):w((()=>i(e)))}),[r.window,h,d,b,w]);a.useLayoutEffect((()=>r.subscribe(E)),[r,E]),a.useEffect((()=>{c.isTransitioning&&!c.flushSync&&p(new O)}),[c]),a.useEffect((()=>{if(d&&l&&r.window){let e=l,t=d.promise,n=r.window.document.startViewTransition((async()=>{w((()=>i(e))),await t}));n.finished.finally((()=>{p(void 0),m(void 0),s(void 0),f({isTransitioning:!1})})),m(n)}}),[w,l,d,r.window]),a.useEffect((()=>{d&&l&&o.location.key===l.location.key&&d.resolve()}),[d,h,o.location,l]),a.useEffect((()=>{!c.isTransitioning&&v&&(s(v.state),f({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),y(void 0))}),[c.isTransitioning,v]),a.useEffect((()=>{}),[]);let S=a.useMemo((()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})})),[r]),R=r.basename||"/",_=a.useMemo((()=>({router:r,navigator:S,static:!1,basename:R})),[r,S,R]);return a.createElement(a.Fragment,null,a.createElement(u.sp.Provider,{value:_},a.createElement(u.Rq.Provider,{value:o},a.createElement(x.Provider,{value:b.current},a.createElement(C.Provider,{value:c},a.createElement(u.Ix,{basename:R,location:o.location,navigationType:o.historyAction,navigator:S,future:{v7_relativeSplatPath:r.future.v7_relativeSplatPath}},o.initialized||r.future.v7_partialHydration?a.createElement(D,{routes:r.routes,future:r.future,state:o}):t))))),null)}function D(e){let{routes:t,future:r,state:n}=e;return(0,u.ph)(t,void 0,n,r)}function F(e){let{basename:t,children:r,future:n,window:o}=e,i=a.useRef();null==i.current&&(i.current=(0,l.zR)({window:o,v5Compat:!0}));let s=i.current,[c,f]=a.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},p=a.useCallback((e=>{d&&k?k((()=>f(e))):f(e)}),[f,d]);return a.useLayoutEffect((()=>s.listen(p)),[s,p]),a.createElement(u.Ix,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:n})}function A(e){let{basename:t,children:r,future:n,window:o}=e,i=a.useRef();null==i.current&&(i.current=(0,l.TM)({window:o,v5Compat:!0}));let s=i.current,[c,f]=a.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},p=a.useCallback((e=>{d&&k?k((()=>f(e))):f(e)}),[f,d]);return a.useLayoutEffect((()=>s.listen(p)),[s,p]),a.createElement(u.Ix,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:n})}function j(e){let{basename:t,children:r,future:n,history:o}=e,[i,l]=a.useState({action:o.action,location:o.location}),{v7_startTransition:s}=n||{},c=a.useCallback((e=>{s&&k?k((()=>l(e))):l(e)}),[l,s]);return a.useLayoutEffect((()=>o.listen(c)),[o,c]),a.createElement(u.Ix,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:o,future:n})}const N="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,B=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I=a.forwardRef((function(e,t){let r,{onClick:n,relative:o,reloadDocument:i,replace:f,state:d,target:p,to:h,preventScrollReset:m,unstable_viewTransition:v}=e,y=c(e,b),{basename:g}=a.useContext(u.jb),w=!1;if("string"==typeof h&&B.test(h)&&(r=h,N))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),r=(0,l.pb)(t.pathname,g);t.origin===e.origin&&null!=r?h=r+t.search+t.hash:w=!0}catch(e){}let E=(0,u.$P)(h,{relative:o}),S=J(h,{replace:f,state:d,target:p,preventScrollReset:m,relative:o,unstable_viewTransition:v});return a.createElement("a",s({},y,{href:r||E,onClick:w||i?n:function(e){n&&n(e),e.defaultPrevented||S(e)},ref:t,target:p}))})),$=a.forwardRef((function(e,t){let{"aria-current":r="page",caseSensitive:n=!1,className:o="",end:i=!1,style:f,to:d,unstable_viewTransition:p,children:h}=e,m=c(e,g),v=(0,u.x$)(d,{relative:m.relative}),y=(0,u.zy)(),b=a.useContext(u.Rq),{navigator:w,basename:E}=a.useContext(u.jb),S=null!=b&&ie(v)&&!0===p,R=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,_=y.pathname,C=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(_=_.toLowerCase(),C=C?C.toLowerCase():null,R=R.toLowerCase()),C&&E&&(C=(0,l.pb)(C,E)||C);const x="/"!==R&&R.endsWith("/")?R.length-1:R.length;let k,L=_===R||!i&&_.startsWith(R)&&"/"===_.charAt(x),P=null!=C&&(C===R||!i&&C.startsWith(R)&&"/"===C.charAt(R.length)),T={isActive:L,isPending:P,isTransitioning:S},O=L?r:void 0;k="function"==typeof o?o(T):[o,L?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let U="function"==typeof f?f(T):f;return a.createElement(I,s({},m,{"aria-current":O,className:k,ref:t,style:U,to:d,unstable_viewTransition:p}),"function"==typeof h?h(T):h)})),M=a.forwardRef(((e,t)=>{let{fetcherKey:r,navigate:n,reloadDocument:o,replace:i,state:u,method:l=f,action:d,onSubmit:p,relative:h,preventScrollReset:m,unstable_viewTransition:v}=e,y=c(e,w),b=X(),g=Q(d,{relative:h}),E="get"===l.toLowerCase()?"get":"post";return a.createElement("form",s({ref:t,method:E,action:g,onSubmit:o?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,o=(null==t?void 0:t.getAttribute("formmethod"))||l;b(t||e.currentTarget,{fetcherKey:r,method:o,navigate:n,replace:i,state:u,relative:h,preventScrollReset:m,unstable_viewTransition:v})}},y))}));function V(e){let{getKey:t,storageKey:r}=e;return ne({getKey:t,storageKey:r}),null}var H,K;function z(e){let t=a.useContext(u.sp);return t||(0,l.Oi)(!1),t}function q(e){let t=a.useContext(u.Rq);return t||(0,l.Oi)(!1),t}function J(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:c}=void 0===t?{}:t,f=(0,u.Zp)(),d=(0,u.zy)(),p=(0,u.x$)(e,{relative:s});return a.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let r=void 0!==n?n:(0,l.AO)(d)===(0,l.AO)(p);f(e,{replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:c})}}),[d,f,p,n,o,r,e,i,s,c])}function W(e){let t=a.useRef(h(e)),r=a.useRef(!1),n=(0,u.zy)(),o=a.useMemo((()=>function(e,t){let r=h(e);return t&&t.forEach(((e,n)=>{r.has(n)||t.getAll(n).forEach((e=>{r.append(n,e)}))})),r}(n.search,r.current?null:t.current)),[n.search]),i=(0,u.Zp)(),l=a.useCallback(((e,t)=>{const n=h("function"==typeof e?e(o):e);r.current=!0,i("?"+n,t)}),[i,o]);return[o,l]}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(H||(H={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(K||(K={}));let Y=0,G=()=>"__"+String(++Y)+"__";function X(){let{router:e}=z(H.UseSubmit),{basename:t}=a.useContext(u.jb),r=(0,u.$3)();return a.useCallback((function(n,o){void 0===o&&(o={}),function(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}();let{action:a,method:i,encType:u,formData:s,body:c}=function(e,t){let r,n,o,a,i;if(p(u=e)&&"form"===u.tagName.toLowerCase()){let i=e.getAttribute("action");n=i?(0,l.pb)(i,t):null,r=e.getAttribute("method")||f,o=y(e.getAttribute("enctype"))||d,a=new FormData(e)}else if(function(e){return p(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return p(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||i.getAttribute("action");if(n=u?(0,l.pb)(u,t):null,r=e.getAttribute("formmethod")||i.getAttribute("method")||f,o=y(e.getAttribute("formenctype"))||y(i.getAttribute("enctype"))||d,a=new FormData(i,e),!function(){if(null===m)try{new FormData(document.createElement("form"),0),m=!1}catch(e){m=!0}return m}()){let{name:t,type:r,value:n}=e;if("image"===r){let e=t?t+".":"";a.append(e+"x","0"),a.append(e+"y","0")}else t&&a.append(t,n)}}else{if(p(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=f,n=null,o=d,i=e}var u;return a&&"text/plain"===o&&(i=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:i}}(n,t);if(!1===o.navigate){let t=o.fetcherKey||G();e.fetch(t,r,o.action||a,{preventScrollReset:o.preventScrollReset,formData:s,body:c,formMethod:o.method||i,formEncType:o.encType||u,unstable_flushSync:o.unstable_flushSync})}else e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:s,body:c,formMethod:o.method||i,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:r,unstable_flushSync:o.unstable_flushSync,unstable_viewTransition:o.unstable_viewTransition})}),[e,t,r])}function Q(e,t){let{relative:r}=void 0===t?{}:t,{basename:n}=a.useContext(u.jb),o=a.useContext(u.UX);o||(0,l.Oi)(!1);let[i]=o.matches.slice(-1),c=s({},(0,u.x$)(e||".",{relative:r})),f=(0,u.zy)();if(null==e){c.search=f.search;let e=new URLSearchParams(c.search);e.has("index")&&""===e.get("index")&&(e.delete("index"),c.search=e.toString()?"?"+e.toString():"")}return e&&"."!==e||!i.route.index||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),"/"!==n&&(c.pathname="/"===c.pathname?n:(0,l.HS)([n,c.pathname])),(0,l.AO)(c)}function Z(e){var t;let{key:r}=void 0===e?{}:e,{router:n}=z(H.UseFetcher),o=q(K.UseFetcher),i=a.useContext(x),c=a.useContext(u.UX),f=null==(t=c.matches[c.matches.length-1])?void 0:t.route.id;i||(0,l.Oi)(!1),c||(0,l.Oi)(!1),null==f&&(0,l.Oi)(!1);let d=P?P():"",[p,h]=a.useState(r||d);r&&r!==p?h(r):p||h(G()),a.useEffect((()=>(n.getFetcher(p),()=>{n.deleteFetcher(p)})),[n,p]);let m=a.useCallback(((e,t)=>{f||(0,l.Oi)(!1),n.fetch(p,f,e,t)}),[p,f,n]),v=X(),y=a.useCallback(((e,t)=>{v(e,s({},t,{navigate:!1,fetcherKey:p}))}),[p,v]),b=a.useMemo((()=>a.forwardRef(((e,t)=>a.createElement(M,s({},e,{navigate:!1,fetcherKey:p,ref:t}))))),[p]),g=o.fetchers.get(p)||l.HW,w=i.get(p);return a.useMemo((()=>s({Form:b,submit:y,load:m},g,{data:w})),[b,y,m,g,w])}function ee(){let e=q(K.UseFetchers);return Array.from(e.fetchers.entries()).map((e=>{let[t,r]=e;return s({},r,{key:t})}))}const te="react-router-scroll-positions";let re={};function ne(e){let{getKey:t,storageKey:r}=void 0===e?{}:e,{router:n}=z(H.UseScrollRestoration),{restoreScrollPosition:o,preventScrollReset:i}=q(K.UseScrollRestoration),{basename:c}=a.useContext(u.jb),f=(0,u.zy)(),d=(0,u.FE)(),p=(0,u.cq)();a.useEffect((()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"})),[]),function(e,t){let{capture:r}={};a.useEffect((()=>{let t=null!=r?{capture:r}:void 0;return window.addEventListener("pagehide",e,t),()=>{window.removeEventListener("pagehide",e,t)}}),[e,r])}(a.useCallback((()=>{if("idle"===p.state){let e=(t?t(f,d):null)||f.key;re[e]=window.scrollY}try{sessionStorage.setItem(r||te,JSON.stringify(re))}catch(e){}window.history.scrollRestoration="auto"}),[r,t,p.state,f,d])),"undefined"!=typeof document&&(a.useLayoutEffect((()=>{try{let e=sessionStorage.getItem(r||te);e&&(re=JSON.parse(e))}catch(e){}}),[r]),a.useLayoutEffect((()=>{let e=t&&"/"!==c?(e,r)=>t(s({},e,{pathname:(0,l.pb)(e.pathname,c)||e.pathname}),r):t,r=null==n?void 0:n.enableScrollRestoration(re,(()=>window.scrollY),e);return()=>r&&r()}),[n,c,t]),a.useLayoutEffect((()=>{if(!1!==o)if("number"!=typeof o){if(f.hash){let e=document.getElementById(decodeURIComponent(f.hash.slice(1)));if(e)return void e.scrollIntoView()}!0!==i&&window.scrollTo(0,0)}else window.scrollTo(0,o)}),[f,o,i]))}function oe(e,t){let{capture:r}=t||{};a.useEffect((()=>{let t=null!=r?{capture:r}:void 0;return window.addEventListener("beforeunload",e,t),()=>{window.removeEventListener("beforeunload",e,t)}}),[e,r])}function ae(e){let{when:t,message:r}=e,n=(0,u.KP)(t);a.useEffect((()=>{"blocked"===n.state&&(window.confirm(r)?setTimeout(n.proceed,0):n.reset())}),[n,r]),a.useEffect((()=>{"blocked"!==n.state||t||n.reset()}),[n,t])}function ie(e,t){void 0===t&&(t={});let r=a.useContext(C);null==r&&(0,l.Oi)(!1);let{basename:n}=z(H.useViewTransitionState),o=(0,u.x$)(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=(0,l.pb)(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=(0,l.pb)(r.nextLocation.pathname,n)||r.nextLocation.pathname;return null!=(0,l.B6)(o.pathname,s)||null!=(0,l.B6)(o.pathname,i)}},47767:(e,t,r)=>{var n;r.d(t,{$3:()=>B,$P:()=>h,AV:()=>se,BV:()=>ne,C5:()=>Z,Eu:()=>se,Ew:()=>H,FE:()=>M,Ix:()=>re,J8:()=>q,KC:()=>S,KP:()=>Y,KT:()=>ce,LG:()=>V,P1:()=>R,RQ:()=>b,Ri:()=>m,Rq:()=>l,UX:()=>d,Ye:()=>x,Zp:()=>w,bg:()=>de,cq:()=>I,fS:()=>Q,g:()=>_,jD:()=>oe,jb:()=>c,mP:()=>K,oI:()=>J,ph:()=>k,qh:()=>te,r5:()=>z,sp:()=>u,sv:()=>ee,vL:()=>$,wE:()=>fe,wQ:()=>y,x$:()=>C,yN:()=>f,zy:()=>v});var o=r(96540),a=r(45588);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const u=o.createContext(null),l=o.createContext(null),s=o.createContext(null),c=o.createContext(null),f=o.createContext(null),d=o.createContext({outlet:null,matches:[],isDataRoute:!1}),p=o.createContext(null);function h(e,t){let{relative:r}=void 0===t?{}:t;m()||(0,a.Oi)(!1);let{basename:n,navigator:i}=o.useContext(c),{hash:u,pathname:l,search:s}=C(e,{relative:r}),f=l;return"/"!==n&&(f="/"===l?n:(0,a.HS)([n,l])),i.createHref({pathname:f,search:s,hash:u})}function m(){return null!=o.useContext(f)}function v(){return m()||(0,a.Oi)(!1),o.useContext(f).location}function y(){return o.useContext(f).navigationType}function b(e){m()||(0,a.Oi)(!1);let{pathname:t}=v();return o.useMemo((()=>(0,a.B6)(e,t)),[t,e])}function g(e){o.useContext(c).static||o.useLayoutEffect(e)}function w(){let{isDataRoute:e}=o.useContext(d);return e?function(){let{router:e}=A(D.UseNavigateStable),t=N(F.UseNavigateStable),r=o.useRef(!1);return g((()=>{r.current=!0})),o.useCallback((function(n,o){void 0===o&&(o={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,i({fromRouteId:t},o)))}),[e,t])}():function(){m()||(0,a.Oi)(!1);let e=o.useContext(u),{basename:t,future:r,navigator:n}=o.useContext(c),{matches:i}=o.useContext(d),{pathname:l}=v(),s=JSON.stringify((0,a.yD)(i,r.v7_relativeSplatPath)),f=o.useRef(!1);return g((()=>{f.current=!0})),o.useCallback((function(r,o){if(void 0===o&&(o={}),!f.current)return;if("number"==typeof r)return void n.go(r);let i=(0,a.Gh)(r,JSON.parse(s),l,"path"===o.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,a.HS)([t,i.pathname])),(o.replace?n.replace:n.push)(i,o.state,o)}),[t,n,s,l,e])}()}const E=o.createContext(null);function S(){return o.useContext(E)}function R(e){let t=o.useContext(d).outlet;return t?o.createElement(E.Provider,{value:e},t):t}function _(){let{matches:e}=o.useContext(d),t=e[e.length-1];return t?t.params:{}}function C(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=o.useContext(c),{matches:i}=o.useContext(d),{pathname:u}=v(),l=JSON.stringify((0,a.yD)(i,n.v7_relativeSplatPath));return o.useMemo((()=>(0,a.Gh)(e,JSON.parse(l),u,"path"===r)),[e,l,u,r])}function x(e,t){return k(e,t)}function k(e,t,r,n){m()||(0,a.Oi)(!1);let{navigator:u}=o.useContext(c),{matches:l}=o.useContext(d),s=l[l.length-1],p=s?s.params:{},h=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let y,b=v();if(t){var g;let e="string"==typeof t?(0,a.Rr)(t):t;"/"===h||(null==(g=e.pathname)?void 0:g.startsWith(h))||(0,a.Oi)(!1),y=e}else y=b;let w=y.pathname||"/",E=w;if("/"!==h){let e=h.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(e.length).join("/")}let S=(0,a.ue)(e,{pathname:E}),R=U(S&&S.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:(0,a.HS)([h,u.encodeLocation?u.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:(0,a.HS)([h,u.encodeLocation?u.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r,n);return t&&R?o.createElement(f.Provider,{value:{location:i({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:a.rc.Pop}},R):R}function L(){let e=z(),t=(0,a.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:n},r):null,null)}const P=o.createElement(L,null);class T extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?o.createElement(d.Provider,{value:this.props.routeContext},o.createElement(p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O(e){let{routeContext:t,match:r,children:n}=e,a=o.useContext(u);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(d.Provider,{value:t},n)}function U(e,t,r,n){var i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){var u;if(null==(u=r)||!u.errors)return null;e=r.matches}let l=e,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||(0,a.Oi)(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,f=-1;if(r&&n&&n.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(f=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){c=!0,l=f>=0?l.slice(0,f+1):[l[0]];break}}}return l.reduceRight(((e,n,a)=>{let i,u=!1,d=null,p=null;var h;r&&(i=s&&n.route.id?s[n.route.id]:void 0,d=n.route.errorElement||P,c&&(f<0&&0===a?(G[h="route-fallback"]||(G[h]=!0),u=!0,p=null):f===a&&(u=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,a+1)),v=()=>{let t;return t=i?d:u?p:n.route.Component?o.createElement(n.route.Component,null):n.route.element?n.route.element:e,o.createElement(O,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===a)?o.createElement(T,{location:r.location,revalidation:r.revalidation,component:d,error:i,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()}),null)}var D=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(D||{}),F=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(F||{});function A(e){let t=o.useContext(u);return t||(0,a.Oi)(!1),t}function j(e){let t=o.useContext(l);return t||(0,a.Oi)(!1),t}function N(e){let t=function(e){let t=o.useContext(d);return t||(0,a.Oi)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,a.Oi)(!1),r.route.id}function B(){return N(F.UseRouteId)}function I(){return j(F.UseNavigation).navigation}function $(){let e=A(D.UseRevalidator),t=j(F.UseRevalidator);return o.useMemo((()=>({revalidate:e.router.revalidate,state:t.revalidation})),[e.router.revalidate,t.revalidation])}function M(){let{matches:e,loaderData:t}=j(F.UseMatches);return o.useMemo((()=>e.map((e=>(0,a.ro)(e,t)))),[e,t])}function V(){let e=j(F.UseLoaderData),t=N(F.UseLoaderData);if(!e.errors||null==e.errors[t])return e.loaderData[t];console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")")}function H(e){return j(F.UseRouteLoaderData).loaderData[e]}function K(){let e=j(F.UseActionData),t=N(F.UseLoaderData);return e.actionData?e.actionData[t]:void 0}function z(){var e;let t=o.useContext(p),r=j(F.UseRouteError),n=N(F.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[n]}function q(){let e=o.useContext(s);return null==e?void 0:e._data}function J(){let e=o.useContext(s);return null==e?void 0:e._error}let W=0;function Y(e){let{router:t,basename:r}=A(D.UseBlocker),n=j(F.UseBlocker),[u,l]=o.useState(""),s=o.useCallback((t=>{if("function"!=typeof e)return!!e;if("/"===r)return e(t);let{currentLocation:n,nextLocation:o,historyAction:u}=t;return e({currentLocation:i({},n,{pathname:(0,a.pb)(n.pathname,r)||n.pathname}),nextLocation:i({},o,{pathname:(0,a.pb)(o.pathname,r)||o.pathname}),historyAction:u})}),[r,e]);return o.useEffect((()=>{let e=String(++W);return l(e),()=>t.deleteBlocker(e)}),[t]),o.useEffect((()=>{""!==u&&t.getBlocker(u,s)}),[t,u,s]),u&&n.blockers.has(u)?n.blockers.get(u):a.G3}const G={},X=(n||(n=r.t(o,2))).startTransition;function Q(e){let{basename:t,children:r,initialEntries:n,initialIndex:i,future:u}=e,l=o.useRef();null==l.current&&(l.current=(0,a.sC)({initialEntries:n,initialIndex:i,v5Compat:!0}));let s=l.current,[c,f]=o.useState({action:s.action,location:s.location}),{v7_startTransition:d}=u||{},p=o.useCallback((e=>{d&&X?X((()=>f(e))):f(e)}),[f,d]);return o.useLayoutEffect((()=>s.listen(p)),[s,p]),o.createElement(re,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:u})}function Z(e){let{to:t,replace:r,state:n,relative:i}=e;m()||(0,a.Oi)(!1);let{future:u,static:l}=o.useContext(c),{matches:s}=o.useContext(d),{pathname:f}=v(),p=w(),h=(0,a.Gh)(t,(0,a.yD)(s,u.v7_relativeSplatPath),f,"path"===i),y=JSON.stringify(h);return o.useEffect((()=>p(JSON.parse(y),{replace:r,state:n,relative:i})),[p,y,i,r,n]),null}function ee(e){return R(e.context)}function te(e){(0,a.Oi)(!1)}function re(e){let{basename:t="/",children:r=null,location:n,navigationType:u=a.rc.Pop,navigator:l,static:s=!1,future:d}=e;m()&&(0,a.Oi)(!1);let p=t.replace(/^\/*/,"/"),h=o.useMemo((()=>({basename:p,navigator:l,static:s,future:i({v7_relativeSplatPath:!1},d)})),[p,d,l,s]);"string"==typeof n&&(n=(0,a.Rr)(n));let{pathname:v="/",search:y="",hash:b="",state:g=null,key:w="default"}=n,E=o.useMemo((()=>{let e=(0,a.pb)(v,p);return null==e?null:{location:{pathname:e,search:y,hash:b,state:g,key:w},navigationType:u}}),[p,v,y,b,g,w,u]);return null==E?null:o.createElement(c.Provider,{value:h},o.createElement(f.Provider,{children:r,value:E}))}function ne(e){let{children:t,location:r}=e;return x(se(t),r)}function oe(e){let{children:t,errorElement:r,resolve:n}=e;return o.createElement(ue,{resolve:n,errorElement:r},o.createElement(le,null,t))}var ae=function(e){return e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error",e}(ae||{});const ie=new Promise((()=>{}));class ue extends o.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,i=ae.pending;if(r instanceof Promise)if(this.state.error){i=ae.error;let e=this.state.error;n=Promise.reject().catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?(n=r,i=void 0!==n._error?ae.error:void 0!==n._data?ae.success:ae.pending):(i=ae.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),n=r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else i=ae.success,n=Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(i===ae.error&&n._error instanceof a.tH)throw ie;if(i===ae.error&&!t)throw n._error;if(i===ae.error)return o.createElement(s.Provider,{value:n,children:t});if(i===ae.success)return o.createElement(s.Provider,{value:n,children:e});throw n}}function le(e){let{children:t}=e,r=q(),n="function"==typeof t?t(r):t;return o.createElement(o.Fragment,null,n)}function se(e,t){void 0===t&&(t=[]);let r=[];return o.Children.forEach(e,((e,n)=>{if(!o.isValidElement(e))return;let i=[...t,n];if(e.type===o.Fragment)return void r.push.apply(r,se(e.props.children,i));e.type!==te&&(0,a.Oi)(!1),e.props.index&&e.props.children&&(0,a.Oi)(!1);let u={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(u.children=se(e.props.children,i)),r.push(u)})),r}function ce(e){return U(e)}function fe(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:o.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:o.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:o.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function de(e,t){return(0,a.aE)({basename:null==t?void 0:t.basename,future:i({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,a.sC)({initialEntries:null==t?void 0:t.initialEntries,initialIndex:null==t?void 0:t.initialIndex}),hydrationData:null==t?void 0:t.hydrationData,routes:e,mapRouteProperties:fe,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy}).initialize()}},15287:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function y(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var w=g.prototype=new b;w.constructor=g,m(w,y.prototype),w.isPureReactComponent=!0;var E=Array.isArray,S=Object.prototype.hasOwnProperty,R={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,a={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:u,props:a,_owner:R.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===a?"."+L(l,0):a,E(i)?(o="",null!=e&&(o=e.replace(k,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",E(e))for(var s=0;s<e.length;s++){var c=a+L(u=e[s],s);l+=P(u,t,o,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(u=e.next()).done;)l+=P(u=u.value,t,o,c=a+L(u,s++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function T(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},D={transition:null},F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:D,ReactCurrentOwner:R};t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=R.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)S.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return U.current.useCallback(e,t)},t.useContext=function(e){return U.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return U.current.useDeferredValue(e)},t.useEffect=function(e,t){return U.current.useEffect(e,t)},t.useId=function(){return U.current.useId()},t.useImperativeHandle=function(e,t,r){return U.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return U.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return U.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return U.current.useMemo(e,t)},t.useReducer=function(e,t,r){return U.current.useReducer(e,t,r)},t.useRef=function(e){return U.current.useRef(e)},t.useState=function(e){return U.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return U.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return U.current.useTransition()},t.version="18.2.0"}}]);