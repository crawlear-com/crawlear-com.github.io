"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[7883],{83620:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(31601),i=n.n(r),a=n(76314),u=n.n(a)()(i());u.push([e.id,".App-header{position:fixed;top:0px;left:0;width:100%;z-index:10000;height:56px;background-color:#241e1f;min-height:40px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;margin-bottom:10px;transform:translateY(0px);transition:transform .5s ease-in-out}.App-header .MenuLogo{position:fixed;top:0px;right:0px;width:60px;margin:5px 8px 10px 0}.menuHide{transform:translateY(-100px)}.menuContainer{position:fixed;top:0px;left:0px;margin:2px;padding:5px;z-index:10;border-radius:7px;overflow:hidden;transition:width .2s;min-height:420px}.open{width:90%;max-width:437px;padding-bottom:25px;background-color:#333;font-size:.8em}.menuContainer.closed{width:35px;min-height:40px}.box:hover{background-color:#fcc;width:200px;height:200px;transform:rotate(180deg)}",""]);const o=u},31681:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(31601),i=n.n(r),a=n(76314),u=n.n(a)()(i());u.push([e.id,".burguerMenuBar:first-of-type{margin-top:10px}.burguerMenuBar:last-of-type{margin-bottom:15px}.burguerMenuBar{width:25px;height:4px;background-color:#fff;margin:4px}.linksContainer .menuUserDisplayName{font-size:1.2em;margin-top:15px;font-weight:bold}.linksContainer ul{margin:35px 25px}.linksContainer ul li{overflow:hidden}.lightModeSwitch{position:absolute;bottom:15px;right:32px}.userProfilePhotoContainer .photo{border-radius:50px}",""]);const o=u},66145:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(85072),i=n.n(r),a=n(97825),u=n.n(a),o=n(77659),l=n.n(o),c=n(55056),d=n.n(c),s=n(10540),f=n.n(s),p=n(41113),m=n.n(p),b=n(83620),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=u(),h.insertStyleElement=f(),i()(b.A,h);const _=b.A&&b.A.locals?b.A.locals:void 0},30464:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(85072),i=n.n(r),a=n(97825),u=n.n(a),o=n(77659),l=n.n(o),c=n(55056),d=n.n(c),s=n(10540),f=n.n(s),p=n(41113),m=n.n(p),b=n(31681),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=u(),h.insertStyleElement=f(),i()(b.A,h);const _=b.A&&b.A.locals?b.A.locals:void 0},46661:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(96540);t.default=function(e,t){var n=(0,r.useRef)(0),i=(0,r.useState)(""),a=i[0],u=i[1],o=(0,r.useCallback)((function(){window.scrollY>t&&n.current<window.scrollY?u(e):t&&(n.current>window.scrollY||window.scrollY<=0)&&u(""),n.current=window.scrollY}),[e,t]);return(0,r.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[o]),[a]}},37883:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(96540)),l=u(n(70713)),c=u(n(54054)),d=u(n(46661)),s=u(n(7879));n(66145),t.default=function(e){var t=e.isOpen,n=(0,d.default)("menuHide",56)[0],r=o.useState(t||!1),i=r[0],a=r[1];function u(){a(!i)}return i?o.createElement("header",{className:"App-header"},o.createElement(l.default,{OnClickMenu:u}),o.createElement(s.default,null)):o.createElement("header",{className:"App-header ".concat(n)},o.createElement(c.default,{OnClickMenu:u}),o.createElement(s.default,null))}},14660:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(96540)),l=u(n(38791)),c=n(84976);t.default=function(e){var t=e.children,n=e.path,r=(0,c.useNavigate)();return o.createElement("li",{onClick:function(){!function(e){l.default.event("navigation","menu",e),r(e)}(n)}},t)}},54054:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(96540));t.default=function(e){var t=e.OnClickMenu;return u.createElement("div",{"data-testid":"menuContainer",className:"rounded menuContainer closed",onClick:t},u.createElement("div",{"data-testid":"burguerMenuBar",className:"burguerMenuBar"}),u.createElement("div",{"data-testid":"burguerMenuBar",className:"burguerMenuBar"}),u.createElement("div",{"data-testid":"burguerMenuBar",className:"burguerMenuBar"}))}},315:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(96540)),o=n(32418),l="lightMode";t.default=function(e){var t=e.onClick,n=(0,o.useTranslation)(["main"]).t,r=u.useState(!1),i=r[0],a=r[1];return u.createElement("div",{className:"lightModeSwitch",onClick:function(e){e.preventDefault(),e.stopPropagation(),i?(a(!1),document.body.classList.remove(l)):(a(!0),document.body.classList.add(l)),t()}},n("description.lightdarktheme"))}},8391:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(96540)),l=n(32418),c=u(n(14660));t.default=function(){var e=(0,l.useTranslation)(["main"]).t;return o.createElement("ul",null,o.createElement(c.default,{path:"/social"},e("description.perfilsocial")),o.createElement(c.default,{path:"/game"},e("description.herramientajuego")),o.createElement(c.default,{path:"/route"},e("description.herramientaruta")),o.createElement("li",null,"-"),o.createElement(c.default,{path:"/privacypolicy"},e("description.politicaprivacidad")),o.createElement(c.default,{path:"/aboutus"},e("description.aboutus")))}},7879:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(96540)),l=u(n(5507));t.default=function(){return o.createElement("a",{href:"/"},o.createElement("img",{className:"MenuLogo",src:l.default,alt:"web logo"}))}},70713:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(96540)),l=u(n(315)),c=u(n(16587)),d=u(n(8391));n(30464),t.default=function(e){var t=e.OnClickMenu;return o.createElement("div",{"data-testid":"menuContainer",className:"rounded menuContainer open",onClick:t},o.createElement("div",{"data-testid":"burguerMenuBar",className:"burguerMenuBar"}),o.createElement("div",{"data-testid":"burguerMenuBar",className:"burguerMenuBar"}),o.createElement("div",{"data-testid":"burguerMenuBar",className:"burguerMenuBar"}),o.createElement("div",{"data-testid":"linksContainer",className:"linksContainer"},o.createElement(c.default,null),o.createElement(d.default,null),o.createElement(l.default,{onClick:t})))}},16587:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(96540)),l=n(84976),c=u(n(96063));t.default=function(){var e=(0,l.useNavigate)(),t=window.crawlear.user;return o.createElement(o.Fragment,null,o.createElement(c.default,{photoUrl:t.photoURL,onLogout:function(){},inputUserIsTheLoggedOne:!0}),o.createElement("div",{className:"menuUserDisplayName",onClick:function(){e("/social")}},t.displayName))}}}]);