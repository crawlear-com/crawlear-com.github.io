"use strict";(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[5973],{15876:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var i=n(96540),o=n(85072),r=n.n(o),a=n(97825),l=n.n(a),s=n(77659),c=n.n(s),u=n(55056),d=n.n(u),m=n(10540),p=n.n(m),f=n(41113),g=n.n(f),b=n(85216),v={};v.styleTagTransform=g(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p(),r()(b.A,v),b.A&&b.A.locals&&b.A.locals;const h=function(e){let{itemPosition:t,onClickFunction:n,text:o}=e;return i.createElement("div",{"data-itemposition":t,onClick:e=>{e.stopPropagation(),n(e)},className:"itemListMenuItem"},o)};var x=n(18492);const y=function(e){let{itemPosition:t,onRemoveClick:n,onConfigureClick:o}=e;const{t:r}=(0,x.B)(["main"]),a=i.useRef(null);function l(){a.current.classList.toggle("closed")}return i.createElement("span",{ref:a,className:"listItemMenu rounded closed"},i.createElement("div",{onClick:l},i.createElement("div",{className:"burguerMenuBar"}),i.createElement("div",{className:"burguerMenuBar"}),i.createElement("div",{className:"burguerMenuBar"})),i.createElement(h,{text:r("description.eliminar"),itemPosition:t,onClickFunction:e=>{l(),n(e)}}),i.createElement(h,{text:r("description.editar"),itemPosition:t,onClickFunction:o}))}},80876:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(31601),o=n.n(i),r=n(76314),a=n.n(r),l=n(4417),s=n.n(l),c=new URL(n(90796),n.b),u=a()(o()),d=s()(c);u.push([e.id,`.list{margin-bottom:15px;width:95%;text-align:right;display:inline-block;position:relative}.list .listItemContainer{font-size:.9em;margin-bottom:15px;text-align:right;padding-top:0px;overflow:hidden}.list .listItemContainer .spinner{float:right;top:3px}.list .listItemContainer .playButton{background-image:url(${d});background-repeat:no-repeat;background-size:contain;background-position-y:1px;margin:9px 0 0px 5px;display:inline-block}.list .listItemContainer button{height:45px}.list .listItemName{display:inline-block;width:70%;padding:10px 0;vertical-align:top;font-size:.8em}`,""]);const m=u},47919:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(31601),o=n.n(i),r=n(76314),a=n.n(r)()(o());a.push([e.id,".list .listItemMenu{background-color:#222;position:absolute;padding-top:3px;left:14px;width:170px;height:81px;text-align:right;margin:5px 0 0 0;overflow:hidden;z-index:10}.list .listItemMenu .burguerMenuBar{width:15px;height:2px;margin:4px 0}.listItemMenu.closed{width:15px;height:15px;background-color:#333;z-index:1}.listContainer .listItemMenu{padding:5px}",""]);const l=a},85216:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(31601),o=n.n(i),r=n(76314),a=n.n(r)()(o());a.push([e.id,".listMenuItem{font-size:.8em;padding:5px}",""]);const l=a},78425:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(85072),o=n.n(i),r=n(97825),a=n.n(r),l=n(77659),s=n.n(l),c=n(55056),u=n.n(c),d=n(10540),m=n.n(d),p=n(41113),f=n.n(p),g=n(80876),b={};b.styleTagTransform=f(),b.setAttributes=u(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=m(),o()(g.A,b);const v=g.A&&g.A.locals?g.A.locals:void 0},84950:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(85072),o=n.n(i),r=n(97825),a=n.n(r),l=n(77659),s=n.n(l),c=n(55056),u=n.n(c),d=n(10540),m=n.n(d),p=n(41113),f=n.n(p),g=n(47919),b={};b.styleTagTransform=f(),b.setAttributes=u(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=m(),o()(g.A,b);const v=g.A&&g.A.locals?g.A.locals:void 0},75973:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(96540)),s=n(32418),c=a(n(15876)),u=a(n(61375));n(78425),t.default=function(e){var t=e.data,n=(e.readOnly,e.onRemoveItem),i=e.onConfigureItem,o=e.title,r=e.onItemAction,a=e.transformer,d=(0,s.useTranslation)(["main"]).t,m=0,p=[];function f(e){var t=Number(e.target.getAttribute("data-itemposition"));window.confirm(d("content.seguroborrarpost"))&&n&&n(t)}function g(e){var t=Number(e.target.getAttribute("data-itemposition"));i&&i(t)}function b(){}return t&&t.forEach((function(e){p.push(l.createElement("div",{key:m},i&&n&&l.createElement(c.default,{key:"menu".concat(m),itemPosition:m,onConfigureClick:g,onRemoveClick:f}),l.createElement(u.default,{key:"item".concat(m),item:a(e),onItemAction:r,itemPosition:m,onOpenClose:b}))),m++})),t&&0!==t.length||p.push(l.createElement("div",{key:m,className:"centerText smallText"},d("description.noentradas"))),l.createElement("div",{className:"list rounded rounded3"},l.createElement("div",{className:"headerText bold"},o),p)}},61375:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(96540));n(84950),t.default=function(e){var t=e.item,n=e.itemPosition,i=e.onOpenClose,o=e.onItemAction;return a.createElement("div",{key:n,className:"listItemContainer rounded rounded1 closed"},a.createElement("span",{onClick:function(e){var t=e.target.parentElement;t&&(t.classList.toggle("closed"),t.classList.contains("closed")||i(n))},className:"textOverflow listItemName bold"},t.title),o?a.createElement("span",{className:"editButton",onClick:function(e){o&&o(n)}},a.createElement("button",{className:"importantNote playButton"})):a.createElement(a.Fragment,null),t.content)}},90796:(e,t,n)=>{e.exports=n.p+"4e8d84bf42ab7e35ed38.png"}}]);