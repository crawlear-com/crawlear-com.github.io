(self.webpackChunkcrawlear_com=self.webpackChunkcrawlear_com||[]).push([[6454],{86454:(t,e,i)=>{"use strict";const n=i(43918),s=i(32923),r=i(8904);t.exports={XMLParser:s,XMLValidator:n,XMLBuilder:r}},33085:t=>{t.exports=function(t){return"function"==typeof t?t:Array.isArray(t)?e=>{for(const i of t){if("string"==typeof i&&e===i)return!0;if(i instanceof RegExp&&i.test(e))return!0}}:()=>!1}},35334:(t,e)=>{"use strict";const i=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",n="["+i+"]["+i+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",s=new RegExp("^"+n+"$");e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,i){if(e){const n=Object.keys(e),s=n.length;for(let r=0;r<s;r++)t[n[r]]="strict"===i?[e[n[r]]]:e[n[r]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.isName=function(t){return!(null==s.exec(t))},e.getAllMatches=function(t,e){const i=[];let n=e.exec(t);for(;n;){const s=[];s.startIndex=e.lastIndex-n[0].length;const r=n.length;for(let t=0;t<r;t++)s.push(n[t]);i.push(s),n=e.exec(t)}return i},e.nameRegexp=n},43918:(t,e,i)=>{"use strict";const n=i(35334),s={allowBooleanAttributes:!1,unpairedTags:[]};function r(t){return" "===t||"\t"===t||"\n"===t||"\r"===t}function o(t,e){const i=e;for(;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{const n=t.substr(i,e-i);if(e>5&&"xml"===n)return f("InvalidXml","XML declaration allowed only at the start of the document.",m(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function a(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){let i=1;for(e+=8;e<t.length;e++)if("<"===t[e])i++;else if(">"===t[e]&&(i--,0===i))break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}e.validate=function(t,e){e=Object.assign({},s,e);const i=[];let l=!1,u=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(let s=0;s<t.length;s++)if("<"===t[s]&&"?"===t[s+1]){if(s+=2,s=o(t,s),s.err)return s}else{if("<"!==t[s]){if(r(t[s]))continue;return f("InvalidChar","char '"+t[s]+"' is not expected.",m(t,s))}{let g=s;if(s++,"!"===t[s]){s=a(t,s);continue}{let x=!1;"/"===t[s]&&(x=!0,s++);let b="";for(;s<t.length&&">"!==t[s]&&" "!==t[s]&&"\t"!==t[s]&&"\n"!==t[s]&&"\r"!==t[s];s++)b+=t[s];if(b=b.trim(),"/"===b[b.length-1]&&(b=b.substring(0,b.length-1),s--),c=b,!n.isName(c)){let e;return e=0===b.trim().length?"Invalid space after '<'.":"Tag '"+b+"' is an invalid name.",f("InvalidTag",e,m(t,s))}const N=h(t,s);if(!1===N)return f("InvalidAttr","Attributes for '"+b+"' have open quote.",m(t,s));let E=N.value;if(s=N.index,"/"===E[E.length-1]){const i=s-E.length;E=E.substring(0,E.length-1);const n=p(E,e);if(!0!==n)return f(n.err.code,n.err.msg,m(t,i+n.err.line));l=!0}else if(x){if(!N.tagClosed)return f("InvalidTag","Closing tag '"+b+"' doesn't have proper closing.",m(t,s));if(E.trim().length>0)return f("InvalidTag","Closing tag '"+b+"' can't have attributes or invalid starting.",m(t,g));if(0===i.length)return f("InvalidTag","Closing tag '"+b+"' has not been opened.",m(t,g));{const e=i.pop();if(b!==e.tagName){let i=m(t,e.tagStartPos);return f("InvalidTag","Expected closing tag '"+e.tagName+"' (opened in line "+i.line+", col "+i.col+") instead of closing tag '"+b+"'.",m(t,g))}0==i.length&&(u=!0)}}else{const n=p(E,e);if(!0!==n)return f(n.err.code,n.err.msg,m(t,s-E.length+n.err.line));if(!0===u)return f("InvalidXml","Multiple possible root nodes found.",m(t,s));-1!==e.unpairedTags.indexOf(b)||i.push({tagName:b,tagStartPos:g}),l=!0}for(s++;s<t.length;s++)if("<"===t[s]){if("!"===t[s+1]){s++,s=a(t,s);continue}if("?"!==t[s+1])break;if(s=o(t,++s),s.err)return s}else if("&"===t[s]){const e=d(t,s);if(-1==e)return f("InvalidChar","char '&' is not expected.",m(t,s));s=e}else if(!0===u&&!r(t[s]))return f("InvalidXml","Extra text at the end",m(t,s));"<"===t[s]&&s--}}}var c;return l?1==i.length?f("InvalidTag","Unclosed tag '"+i[0].tagName+"'.",m(t,i[0].tagStartPos)):!(i.length>0)||f("InvalidXml","Invalid '"+JSON.stringify(i.map((t=>t.tagName)),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):f("InvalidXml","Start tag expected.",1)};const l='"',u="'";function h(t,e){let i="",n="",s=!1;for(;e<t.length;e++){if(t[e]===l||t[e]===u)""===n?n=t[e]:n!==t[e]||(n="");else if(">"===t[e]&&""===n){s=!0;break}i+=t[e]}return""===n&&{value:i,index:e,tagClosed:s}}const c=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function p(t,e){const i=n.getAllMatches(t,c),s={};for(let t=0;t<i.length;t++){if(0===i[t][1].length)return f("InvalidAttr","Attribute '"+i[t][2]+"' has no space in starting.",x(i[t]));if(void 0!==i[t][3]&&void 0===i[t][4])return f("InvalidAttr","Attribute '"+i[t][2]+"' is without value.",x(i[t]));if(void 0===i[t][3]&&!e.allowBooleanAttributes)return f("InvalidAttr","boolean attribute '"+i[t][2]+"' is not allowed.",x(i[t]));const n=i[t][2];if(!g(n))return f("InvalidAttr","Attribute '"+n+"' is an invalid name.",x(i[t]));if(s.hasOwnProperty(n))return f("InvalidAttr","Attribute '"+n+"' is repeated.",x(i[t]));s[n]=1}return!0}function d(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){let i=/\d/;for("x"===t[e]&&(e++,i=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(i))break}return-1}(t,++e);let i=0;for(;e<t.length;e++,i++)if(!(t[e].match(/\w/)&&i<20)){if(";"===t[e])break;return-1}return e}function f(t,e,i){return{err:{code:t,msg:e,line:i.line||i,col:i.col}}}function g(t){return n.isName(t)}function m(t,e){const i=t.substring(0,e).split(/\r?\n/);return{line:i.length,col:i[i.length-1].length+1}}function x(t){return t.startIndex+t[1].length}},8904:(t,e,i)=>{"use strict";const n=i(12788),s=i(33085),r={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function o(t){this.options=Object.assign({},r,t),!0===this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn=s(this.options.ignoreAttributes),this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=u),this.processTextOrObjNode=a,this.options.format?(this.indentate=l,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function a(t,e,i,n){const s=this.j2x(t,i+1,n.concat(e));return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,s.attrStr,i):this.buildObjectNode(s.val,e,s.attrStr,i)}function l(t){return this.options.indentBy.repeat(t)}function u(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}o.prototype.build=function(t){return this.options.preserveOrder?n(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0,[]).val)},o.prototype.j2x=function(t,e,i){let n="",s="";const r=i.join(".");for(let o in t)if(Object.prototype.hasOwnProperty.call(t,o))if(void 0===t[o])this.isAttribute(o)&&(s+="");else if(null===t[o])this.isAttribute(o)?s+="":"?"===o[0]?s+=this.indentate(e)+"<"+o+"?"+this.tagEndChar:s+=this.indentate(e)+"<"+o+"/"+this.tagEndChar;else if(t[o]instanceof Date)s+=this.buildTextValNode(t[o],o,"",e);else if("object"!=typeof t[o]){const i=this.isAttribute(o);if(i&&!this.ignoreAttributesFn(i,r))n+=this.buildAttrPairStr(i,""+t[o]);else if(!i)if(o===this.options.textNodeName){let e=this.options.tagValueProcessor(o,""+t[o]);s+=this.replaceEntitiesValue(e)}else s+=this.buildTextValNode(t[o],o,"",e)}else if(Array.isArray(t[o])){const n=t[o].length;let r="",a="";for(let l=0;l<n;l++){const n=t[o][l];if(void 0===n);else if(null===n)"?"===o[0]?s+=this.indentate(e)+"<"+o+"?"+this.tagEndChar:s+=this.indentate(e)+"<"+o+"/"+this.tagEndChar;else if("object"==typeof n)if(this.options.oneListGroup){const t=this.j2x(n,e+1,i.concat(o));r+=t.val,this.options.attributesGroupName&&n.hasOwnProperty(this.options.attributesGroupName)&&(a+=t.attrStr)}else r+=this.processTextOrObjNode(n,o,e,i);else if(this.options.oneListGroup){let t=this.options.tagValueProcessor(o,n);t=this.replaceEntitiesValue(t),r+=t}else r+=this.buildTextValNode(n,o,"",e)}this.options.oneListGroup&&(r=this.buildObjectNode(r,o,a,e)),s+=r}else if(this.options.attributesGroupName&&o===this.options.attributesGroupName){const e=Object.keys(t[o]),i=e.length;for(let s=0;s<i;s++)n+=this.buildAttrPairStr(e[s],""+t[o][e[s]])}else s+=this.processTextOrObjNode(t[o],o,e,i);return{attrStr:n,val:s}},o.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},o.prototype.buildObjectNode=function(t,e,i,n){if(""===t)return"?"===e[0]?this.indentate(n)+"<"+e+i+"?"+this.tagEndChar:this.indentate(n)+"<"+e+i+this.closeTag(e)+this.tagEndChar;{let s="</"+e+this.tagEndChar,r="";return"?"===e[0]&&(r="?",s=""),!i&&""!==i||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===r.length?this.indentate(n)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(n)+"<"+e+i+r+this.tagEndChar+t+this.indentate(n)+s:this.indentate(n)+"<"+e+i+r+">"+t+s}},o.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},o.prototype.buildTextValNode=function(t,e,i,n){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(n)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(n)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(n)+"<"+e+i+"?"+this.tagEndChar;{let s=this.options.tagValueProcessor(e,t);return s=this.replaceEntitiesValue(s),""===s?this.indentate(n)+"<"+e+i+this.closeTag(e)+this.tagEndChar:this.indentate(n)+"<"+e+i+">"+s+"</"+e+this.tagEndChar}},o.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const i=this.options.entities[e];t=t.replace(i.regex,i.val)}return t},t.exports=o},12788:t=>{function e(t,o,a,l){let u="",h=!1;for(let c=0;c<t.length;c++){const p=t[c],d=i(p);if(void 0===d)continue;let f="";if(f=0===a.length?d:`${a}.${d}`,d===o.textNodeName){let t=p[d];s(f,o)||(t=o.tagValueProcessor(d,t),t=r(t,o)),h&&(u+=l),u+=t,h=!1;continue}if(d===o.cdataPropName){h&&(u+=l),u+=`<![CDATA[${p[d][0][o.textNodeName]}]]>`,h=!1;continue}if(d===o.commentPropName){u+=l+`\x3c!--${p[d][0][o.textNodeName]}--\x3e`,h=!0;continue}if("?"===d[0]){const t=n(p[":@"],o),e="?xml"===d?"":l;let i=p[d][0][o.textNodeName];i=0!==i.length?" "+i:"",u+=e+`<${d}${i}${t}?>`,h=!0;continue}let g=l;""!==g&&(g+=o.indentBy);const m=l+`<${d}${n(p[":@"],o)}`,x=e(p[d],o,f,g);-1!==o.unpairedTags.indexOf(d)?o.suppressUnpairedNode?u+=m+">":u+=m+"/>":x&&0!==x.length||!o.suppressEmptyNode?x&&x.endsWith(">")?u+=m+`>${x}${l}</${d}>`:(u+=m+">",x&&""!==l&&(x.includes("/>")||x.includes("</"))?u+=l+o.indentBy+x+l:u+=x,u+=`</${d}>`):u+=m+"/>",h=!0}return u}function i(t){const e=Object.keys(t);for(let i=0;i<e.length;i++){const n=e[i];if(t.hasOwnProperty(n)&&":@"!==n)return n}}function n(t,e){let i="";if(t&&!e.ignoreAttributes)for(let n in t){if(!t.hasOwnProperty(n))continue;let s=e.attributeValueProcessor(n,t[n]);s=r(s,e),!0===s&&e.suppressBooleanAttributes?i+=` ${n.substr(e.attributeNamePrefix.length)}`:i+=` ${n.substr(e.attributeNamePrefix.length)}="${s}"`}return i}function s(t,e){let i=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let n in e.stopNodes)if(e.stopNodes[n]===t||e.stopNodes[n]==="*."+i)return!0;return!1}function r(t,e){if(t&&t.length>0&&e.processEntities)for(let i=0;i<e.entities.length;i++){const n=e.entities[i];t=t.replace(n.regex,n.val)}return t}t.exports=function(t,i){let n="";return i.format&&i.indentBy.length>0&&(n="\n"),e(t,i,"",n)}},9400:(t,e,i)=>{const n=i(35334);function s(t,e){let i="";for(;e<t.length&&"'"!==t[e]&&'"'!==t[e];e++)i+=t[e];if(i=i.trim(),-1!==i.indexOf(" "))throw new Error("External entites are not supported");const n=t[e++];let s="";for(;e<t.length&&t[e]!==n;e++)s+=t[e];return[i,s,e]}function r(t,e){return"!"===t[e+1]&&"-"===t[e+2]&&"-"===t[e+3]}function o(t,e){return"!"===t[e+1]&&"E"===t[e+2]&&"N"===t[e+3]&&"T"===t[e+4]&&"I"===t[e+5]&&"T"===t[e+6]&&"Y"===t[e+7]}function a(t,e){return"!"===t[e+1]&&"E"===t[e+2]&&"L"===t[e+3]&&"E"===t[e+4]&&"M"===t[e+5]&&"E"===t[e+6]&&"N"===t[e+7]&&"T"===t[e+8]}function l(t,e){return"!"===t[e+1]&&"A"===t[e+2]&&"T"===t[e+3]&&"T"===t[e+4]&&"L"===t[e+5]&&"I"===t[e+6]&&"S"===t[e+7]&&"T"===t[e+8]}function u(t,e){return"!"===t[e+1]&&"N"===t[e+2]&&"O"===t[e+3]&&"T"===t[e+4]&&"A"===t[e+5]&&"T"===t[e+6]&&"I"===t[e+7]&&"O"===t[e+8]&&"N"===t[e+9]}function h(t){if(n.isName(t))return t;throw new Error(`Invalid entity name ${t}`)}t.exports=function(t,e){const i={};if("O"!==t[e+3]||"C"!==t[e+4]||"T"!==t[e+5]||"Y"!==t[e+6]||"P"!==t[e+7]||"E"!==t[e+8])throw new Error("Invalid Tag instead of DOCTYPE");{e+=9;let n=1,c=!1,p=!1,d="";for(;e<t.length;e++)if("<"!==t[e]||p)if(">"===t[e]){if(p?"-"===t[e-1]&&"-"===t[e-2]&&(p=!1,n--):n--,0===n)break}else"["===t[e]?c=!0:d+=t[e];else{if(c&&o(t,e)){let n,r;e+=7,[n,r,e]=s(t,e+1),-1===r.indexOf("&")&&(i[h(n)]={regx:RegExp(`&${n};`,"g"),val:r})}else if(c&&a(t,e))e+=8;else if(c&&l(t,e))e+=8;else if(c&&u(t,e))e+=9;else{if(!r)throw new Error("Invalid DOCTYPE");p=!0}n++,d=""}if(0!==n)throw new Error("Unclosed DOCTYPE")}return{entities:i,i:e}}},50460:(t,e)=>{const i={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,i){return t}};e.buildOptions=function(t){return Object.assign({},i,t)},e.defaultOptions=i},17680:(t,e,i)=>{"use strict";const n=i(35334),s=i(23832),r=i(9400),o=i(17983),a=i(33085);function l(t){const e=Object.keys(t);for(let i=0;i<e.length;i++){const n=e[i];this.lastEntities[n]={regex:new RegExp("&"+n+";","g"),val:t[n]}}}function u(t,e,i,n,s,r,o){if(void 0!==t&&(this.options.trimValues&&!n&&(t=t.trim()),t.length>0)){o||(t=this.replaceEntitiesValue(t));const n=this.options.tagValueProcessor(e,t,i,s,r);return null==n?t:typeof n!=typeof t||n!==t?n:this.options.trimValues||t.trim()===t?v(t,this.options.parseTagValue,this.options.numberParseOptions):t}}function h(t){if(this.options.removeNSPrefix){const e=t.split(":"),i="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=i+e[1])}return t}const c=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");function p(t,e,i){if(!0!==this.options.ignoreAttributes&&"string"==typeof t){const i=n.getAllMatches(t,c),s=i.length,r={};for(let t=0;t<s;t++){const n=this.resolveNameSpace(i[t][1]);if(this.ignoreAttributesFn(n,e))continue;let s=i[t][4],o=this.options.attributeNamePrefix+n;if(n.length)if(this.options.transformAttributeName&&(o=this.options.transformAttributeName(o)),"__proto__"===o&&(o="#__proto__"),void 0!==s){this.options.trimValues&&(s=s.trim()),s=this.replaceEntitiesValue(s);const t=this.options.attributeValueProcessor(n,s,e);r[o]=null==t?s:typeof t!=typeof s||t!==s?t:v(s,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(r[o]=!0)}if(!Object.keys(r).length)return;if(this.options.attributesGroupName){const t={};return t[this.options.attributesGroupName]=r,t}return r}}const d=function(t){t=t.replace(/\r\n?/g,"\n");const e=new s("!xml");let i=e,n="",o="";for(let a=0;a<t.length;a++)if("<"===t[a])if("/"===t[a+1]){const e=b(t,">",a,"Closing Tag is not closed.");let s=t.substring(a+2,e).trim();if(this.options.removeNSPrefix){const t=s.indexOf(":");-1!==t&&(s=s.substr(t+1))}this.options.transformTagName&&(s=this.options.transformTagName(s)),i&&(n=this.saveTextToParentTag(n,i,o));const r=o.substring(o.lastIndexOf(".")+1);if(s&&-1!==this.options.unpairedTags.indexOf(s))throw new Error(`Unpaired tag can not be used as closing tag: </${s}>`);let l=0;r&&-1!==this.options.unpairedTags.indexOf(r)?(l=o.lastIndexOf(".",o.lastIndexOf(".")-1),this.tagsNodeStack.pop()):l=o.lastIndexOf("."),o=o.substring(0,l),i=this.tagsNodeStack.pop(),n="",a=e}else if("?"===t[a+1]){let e=N(t,a,!1,"?>");if(!e)throw new Error("Pi Tag is not closed.");if(n=this.saveTextToParentTag(n,i,o),this.options.ignoreDeclaration&&"?xml"===e.tagName||this.options.ignorePiTags);else{const t=new s(e.tagName);t.add(this.options.textNodeName,""),e.tagName!==e.tagExp&&e.attrExpPresent&&(t[":@"]=this.buildAttributesMap(e.tagExp,o,e.tagName)),this.addChild(i,t,o)}a=e.closeIndex+1}else if("!--"===t.substr(a+1,3)){const e=b(t,"--\x3e",a+4,"Comment is not closed.");if(this.options.commentPropName){const s=t.substring(a+4,e-2);n=this.saveTextToParentTag(n,i,o),i.add(this.options.commentPropName,[{[this.options.textNodeName]:s}])}a=e}else if("!D"===t.substr(a+1,2)){const e=r(t,a);this.docTypeEntities=e.entities,a=e.i}else if("!["===t.substr(a+1,2)){const e=b(t,"]]>",a,"CDATA is not closed.")-2,s=t.substring(a+9,e);n=this.saveTextToParentTag(n,i,o);let r=this.parseTextData(s,i.tagname,o,!0,!1,!0,!0);null==r&&(r=""),this.options.cdataPropName?i.add(this.options.cdataPropName,[{[this.options.textNodeName]:s}]):i.add(this.options.textNodeName,r),a=e+2}else{let r=N(t,a,this.options.removeNSPrefix),l=r.tagName;const u=r.rawTagName;let h=r.tagExp,c=r.attrExpPresent,p=r.closeIndex;this.options.transformTagName&&(l=this.options.transformTagName(l)),i&&n&&"!xml"!==i.tagname&&(n=this.saveTextToParentTag(n,i,o,!1));const d=i;if(d&&-1!==this.options.unpairedTags.indexOf(d.tagname)&&(i=this.tagsNodeStack.pop(),o=o.substring(0,o.lastIndexOf("."))),l!==e.tagname&&(o+=o?"."+l:l),this.isItStopNode(this.options.stopNodes,o,l)){let e="";if(h.length>0&&h.lastIndexOf("/")===h.length-1)"/"===l[l.length-1]?(l=l.substr(0,l.length-1),o=o.substr(0,o.length-1),h=l):h=h.substr(0,h.length-1),a=r.closeIndex;else if(-1!==this.options.unpairedTags.indexOf(l))a=r.closeIndex;else{const i=this.readStopNodeData(t,u,p+1);if(!i)throw new Error(`Unexpected end of ${u}`);a=i.i,e=i.tagContent}const n=new s(l);l!==h&&c&&(n[":@"]=this.buildAttributesMap(h,o,l)),e&&(e=this.parseTextData(e,l,o,!0,c,!0,!0)),o=o.substr(0,o.lastIndexOf(".")),n.add(this.options.textNodeName,e),this.addChild(i,n,o)}else{if(h.length>0&&h.lastIndexOf("/")===h.length-1){"/"===l[l.length-1]?(l=l.substr(0,l.length-1),o=o.substr(0,o.length-1),h=l):h=h.substr(0,h.length-1),this.options.transformTagName&&(l=this.options.transformTagName(l));const t=new s(l);l!==h&&c&&(t[":@"]=this.buildAttributesMap(h,o,l)),this.addChild(i,t,o),o=o.substr(0,o.lastIndexOf("."))}else{const t=new s(l);this.tagsNodeStack.push(i),l!==h&&c&&(t[":@"]=this.buildAttributesMap(h,o,l)),this.addChild(i,t,o),i=t}n="",a=p}}else n+=t[a];return e.child};function f(t,e,i){const n=this.options.updateTag(e.tagname,i,e[":@"]);!1===n||("string"==typeof n?(e.tagname=n,t.addChild(e)):t.addChild(e))}const g=function(t){if(this.options.processEntities){for(let e in this.docTypeEntities){const i=this.docTypeEntities[e];t=t.replace(i.regx,i.val)}for(let e in this.lastEntities){const i=this.lastEntities[e];t=t.replace(i.regex,i.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){const i=this.htmlEntities[e];t=t.replace(i.regex,i.val)}t=t.replace(this.ampEntity.regex,this.ampEntity.val)}return t};function m(t,e,i,n){return t&&(void 0===n&&(n=0===Object.keys(e.child).length),void 0!==(t=this.parseTextData(t,e.tagname,i,!1,!!e[":@"]&&0!==Object.keys(e[":@"]).length,n))&&""!==t&&e.add(this.options.textNodeName,t),t=""),t}function x(t,e,i){const n="*."+i;for(const i in t){const s=t[i];if(n===s||e===s)return!0}return!1}function b(t,e,i,n){const s=t.indexOf(e,i);if(-1===s)throw new Error(n);return s+e.length-1}function N(t,e,i,n=">"){const s=function(t,e,i=">"){let n,s="";for(let r=e;r<t.length;r++){let e=t[r];if(n)e===n&&(n="");else if('"'===e||"'"===e)n=e;else if(e===i[0]){if(!i[1])return{data:s,index:r};if(t[r+1]===i[1])return{data:s,index:r}}else"\t"===e&&(e=" ");s+=e}}(t,e+1,n);if(!s)return;let r=s.data;const o=s.index,a=r.search(/\s/);let l=r,u=!0;-1!==a&&(l=r.substring(0,a),r=r.substring(a+1).trimStart());const h=l;if(i){const t=l.indexOf(":");-1!==t&&(l=l.substr(t+1),u=l!==s.data.substr(t+1))}return{tagName:l,tagExp:r,closeIndex:o,attrExpPresent:u,rawTagName:h}}function E(t,e,i){const n=i;let s=1;for(;i<t.length;i++)if("<"===t[i])if("/"===t[i+1]){const r=b(t,">",i,`${e} is not closed`);if(t.substring(i+2,r).trim()===e&&(s--,0===s))return{tagContent:t.substring(n,i),i:r};i=r}else if("?"===t[i+1])i=b(t,"?>",i+1,"StopNode is not closed.");else if("!--"===t.substr(i+1,3))i=b(t,"--\x3e",i+3,"StopNode is not closed.");else if("!["===t.substr(i+1,2))i=b(t,"]]>",i,"StopNode is not closed.")-2;else{const n=N(t,i,">");n&&((n&&n.tagName)===e&&"/"!==n.tagExp[n.tagExp.length-1]&&s++,i=n.closeIndex)}}function v(t,e,i){if(e&&"string"==typeof t){const e=t.trim();return"true"===e||"false"!==e&&o(t,i)}return n.isExist(t)?t:""}t.exports=class{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"¢"},pound:{regex:/&(pound|#163);/g,val:"£"},yen:{regex:/&(yen|#165);/g,val:"¥"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"©"},reg:{regex:/&(reg|#174);/g,val:"®"},inr:{regex:/&(inr|#8377);/g,val:"₹"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(t,e)=>String.fromCharCode(Number.parseInt(e,10))},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(t,e)=>String.fromCharCode(Number.parseInt(e,16))}},this.addExternalEntities=l,this.parseXml=d,this.parseTextData=u,this.resolveNameSpace=h,this.buildAttributesMap=p,this.isItStopNode=x,this.replaceEntitiesValue=g,this.readStopNodeData=E,this.saveTextToParentTag=m,this.addChild=f,this.ignoreAttributesFn=a(this.options.ignoreAttributes)}}},32923:(t,e,i)=>{const{buildOptions:n}=i(50460),s=i(17680),{prettify:r}=i(75629),o=i(43918);t.exports=class{constructor(t){this.externalEntities={},this.options=n(t)}parse(t,e){if("string"==typeof t);else{if(!t.toString)throw new Error("XML data is accepted in String or Bytes[] form.");t=t.toString()}if(e){!0===e&&(e={});const i=o.validate(t,e);if(!0!==i)throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`)}const i=new s(this.options);i.addExternalEntities(this.externalEntities);const n=i.parseXml(t);return this.options.preserveOrder||void 0===n?n:r(n,this.options)}addEntity(t,e){if(-1!==e.indexOf("&"))throw new Error("Entity value can't have '&'");if(-1!==t.indexOf("&")||-1!==t.indexOf(";"))throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if("&"===e)throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}}},75629:(t,e)=>{"use strict";function i(t,e,o){let a;const l={};for(let u=0;u<t.length;u++){const h=t[u],c=n(h);let p="";if(p=void 0===o?c:o+"."+c,c===e.textNodeName)void 0===a?a=h[c]:a+=""+h[c];else{if(void 0===c)continue;if(h[c]){let t=i(h[c],e,p);const n=r(t,e);h[":@"]?s(t,h[":@"],p,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==l[c]&&l.hasOwnProperty(c)?(Array.isArray(l[c])||(l[c]=[l[c]]),l[c].push(t)):e.isArray(c,p,n)?l[c]=[t]:l[c]=t}}}return"string"==typeof a?a.length>0&&(l[e.textNodeName]=a):void 0!==a&&(l[e.textNodeName]=a),l}function n(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const i=e[t];if(":@"!==i)return i}}function s(t,e,i,n){if(e){const s=Object.keys(e),r=s.length;for(let o=0;o<r;o++){const r=s[o];n.isArray(r,i+"."+r,!0,!0)?t[r]=[e[r]]:t[r]=e[r]}}}function r(t,e){const{textNodeName:i}=e,n=Object.keys(t).length;return 0===n||!(1!==n||!t[i]&&"boolean"!=typeof t[i]&&0!==t[i])}e.prettify=function(t,e){return i(t,e)}},23832:t=>{"use strict";t.exports=class{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,e){"__proto__"===t&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t){"__proto__"===t.tagname&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child})}}}}]);