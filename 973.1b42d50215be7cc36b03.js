(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[973],{5213:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(96540);const r=function(e){let{itemPosition:t,onClickFunction:n,text:r}=e;return i.createElement("div",{"data-itemposition":t,onClick:e=>{e.stopPropagation(),n(e)},className:"itemListMenuItem"},r)};var o=n(18492);const a=function(e){let{itemPosition:t,onRemoveClick:n,onConfigureClick:a}=e;const{t:c}=(0,o.B)(["main"]),l=i.useRef(null);function u(){l.current.classList.toggle("closed")}return i.createElement("span",{ref:l,className:"listItemMenu rounded closed"},i.createElement("div",{onClick:u},i.createElement("div",{className:"burguerMenuBar"}),i.createElement("div",{className:"burguerMenuBar"}),i.createElement("div",{className:"burguerMenuBar"})),i.createElement(r,{text:c("description.eliminar"),itemPosition:t,onClickFunction:e=>{u(),n(e)}}),i.createElement(r,{text:c("description.editar"),itemPosition:t,onClickFunction:a}))}},6859:()=>{},3472:()=>{},75973:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(n(96540)),l=n(32418),u=a(n(5213)),s=a(n(61375));n(6859),t.default=function(e){var t=e.data,n=(e.readOnly,e.onRemoveItem),i=e.onConfigureItem,r=e.title,o=e.onItemAction,a=e.transformer,m=(0,l.useTranslation)(["main"]).t,d=0,f=[];function p(e){var t=Number(e.target.getAttribute("data-itemposition"));window.confirm(m("content.seguroborrarpost"))&&n&&n(t)}function v(e){var t=Number(e.target.getAttribute("data-itemposition"));i&&i(t)}function b(){}return t&&t.forEach((function(e){f.push(c.createElement("div",{key:d},i&&n&&c.createElement(u.default,{key:"menu".concat(d),itemPosition:d,onConfigureClick:v,onRemoveClick:p}),c.createElement(s.default,{key:"item".concat(d),item:a(e),onItemAction:o,itemPosition:d,onOpenClose:b}))),d++})),t&&0!==t.length||f.push(c.createElement("div",{key:d,className:"centerText smallText"},m("description.noentradas"))),c.createElement("div",{className:"list rounded rounded3"},c.createElement("div",{className:"headerText bold"},r),f)}},61375:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(96540));n(3472),t.default=function(e){var t=e.item,n=e.itemPosition,i=e.onOpenClose,r=e.onItemAction;return a.createElement("div",{key:n,className:"listItemContainer rounded rounded1 closed"},a.createElement("span",{onClick:function(e){var t=e.target.parentElement;t&&(t.classList.toggle("closed"),t.classList.contains("closed")||i(n))},className:"textOverflow listItemName bold"},t.title),r?a.createElement("span",{className:"editButton",onClick:function(e){r&&r(n)}},a.createElement("button",{className:"importantNote playButton"})):a.createElement(a.Fragment,null),t.content)}}}]);