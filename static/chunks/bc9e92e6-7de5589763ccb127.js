"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4358],{35002:function(e,t,n){n.d(t,{$q:function(){return lU},AK:function(){return l7},Ab:function(){return un},B$:function(){return ow},Bt:function(){return ue},Cf:function(){return ou},EK:function(){return O},ET:function(){return lZ},Eo:function(){return oI},F8:function(){return oG},Fc:function(){return oF},GL:function(){return l2},IO:function(){return ld},IX:function(){return ox},Ix:function(){return oM},JU:function(){return ov},Jj:function(){return oU},K9:function(){return E},Ky:function(){return G},L$:function(){return oP},Lx:function(){return lD},Lz:function(){return oB},Me:function(){return eZ},Mx:function(){return oV},PL:function(){return lQ},PU:function(){return l3},Pb:function(){return oO},QT:function(){return lG},ST:function(){return oA},TF:function(){return oL},TQ:function(){return lx},UQ:function(){return lW},Ub:function(){return p},W:function(){return lB},WA:function(){return S},Wi:function(){return os},Wu:function(){return lN},Xb:function(){return z},Xk:function(){return lj},Xo:function(){return lv},ad:function(){return oD},ar:function(){return lm},at:function(){return of},b9:function(){return lb},cf:function(){return l0},e0:function(){return lS},fH:function(){return ok},hJ:function(){return oy},i3:function(){return l6},iE:function(){return ob},kl:function(){return l$},l7:function(){return e7},my:function(){return om},nP:function(){return ur},oe:function(){return lJ},or:function(){return lp},pl:function(){return lY},qK:function(){return lz},qY:function(){return oN},qs:function(){return ui},r7:function(){return lX},sc:function(){return l1},u7:function(){return lM},vh:function(){return lE},vr:function(){return ut},xD:function(){return ly},xU:function(){return lq},yq:function(){return v},zN:function(){return lH}});var r,i,s=n(99279),a=n(42680),o=n(19053),l=n(71028),u=n(54565),c=n(25566);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="9.23.0",m=new o.Yd("@firebase/firestore");function g(){return m.logLevel}function p(e){m.setLogLevel(e)}function y(e,...t){if(m.logLevel<=o.in.DEBUG){let n=t.map(I);m.debug(`Firestore (${f}): ${e}`,...n)}}function w(e,...t){if(m.logLevel<=o.in.ERROR){let n=t.map(I);m.error(`Firestore (${f}): ${e}`,...n)}}function v(e,...t){if(m.logLevel<=o.in.WARN){let n=t.map(I);m.warn(`Firestore (${f}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e="Unexpected state"){let t=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: `+e;throw w(t),Error(t)}function E(e,t){e||b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new x;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new x,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new x)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||b(),new _(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||b(),new d(e)}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class k{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let n=e=>{null!=e.error&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.T;return this.T=e.token,y("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?r(e):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||b(),this.T=e.token,new R(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function M(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new S(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return O.fromMillis(Date.now())}static fromDate(e){return O.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new O(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new O(0,0))}static max(){return new P(new O(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(),void 0===n?n=e.length-t:n>e.length-t&&b(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends q{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new S(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new U(t)}static emptyPath(){return new U([])}}let B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends q{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new S(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new S(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new S(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(U.fromString(e))}static fromName(e){return new G(U.fromString(e).popFirst(5))}static empty(){return new G(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new U(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function $(e){return e.fields.find(e=>2===e.kind)}function j(e){return e.fields.filter(e=>2!==e.kind)}K.UNKNOWN_ID=-1;class Q{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,X.min())}}function H(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new X(P.fromTimestamp(1e9===r?new O(n+1,0):new O(n,r)),G.empty(),t)}function Y(e){return new X(e.readTime,e.key,-1)}class X{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new X(P.min(),G.empty(),-1)}static max(){return new X(P.max(),G.empty(),-1)}}function J(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=G.comparator(e.documentKey,t.documentKey))?n:M(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ee{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==Z)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new en((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof en?t:en.resolve(t)}catch(e){return en.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):en.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):en.reject(t)}static resolve(e){return new en((t,n)=>{t(e)})}static reject(e){return new en((t,n)=>{n(e)})}static waitFor(e){return new en((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=en.resolve(!1);for(let n of e)t=t.next(e=>e?en.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new en((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new en((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new x,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new ea(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{let n=eh(t.target.error);this.v.reject(new ea(e,n))}}static open(e,t,n,r){try{return new er(t,e.transaction(r,n))}catch(e){throw new ea(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new el(this.transaction.objectStore(e))}}class ei{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===ei.S((0,l.z$)())&&w("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),eu(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,l.hl)())return!1;if(ei.C())return!0;let e=(0,l.z$)(),t=ei.S(e),n=ei.N(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==c&&"YES"===(null===(e=c.env)||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static N(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async $(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new S(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new S(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ea(e,r))},r.onupgradeneeded=e=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.V.O(t,r.transaction,e.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.$(e);let t=er.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.P(),e)).catch(e=>(t.abort(e),en.reject(e))).toPromise();return s.catch(()=>{}),await t.R,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(y("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class es{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return eu(this.L.delete())}}class ea extends S{constructor(e,t){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function eo(e){return"IndexedDbTransactionError"===e.name}class el{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(y("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),eu(n)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),eu(this.store.add(e))}get(e){return eu(this.store.get(e)).next(t=>(void 0===t&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),eu(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),eu(this.store.count())}j(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let e=this.cursor(n),t=[];return this.W(e,(e,n)=>{t.push(n)}).next(()=>t)}{let e=this.store.getAll(n.range);return new en((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new en((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){y("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.Y=!1;let r=this.cursor(n);return this.W(r,(e,t,n)=>n.delete())}X(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.W(r,t)}Z(e){let t=this.cursor({});return new en((n,r)=>{t.onerror=e=>{r(eh(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}W(e,t){let n=[];return new en((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new es(i),a=t(i.primaryKey,i.value,s);if(a instanceof en){let e=a.catch(e=>(s.done(),en.reject(e)));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}}).next(()=>en.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eu(e){return new en((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(eh(e.target.error))}})}let ec=!1;function eh(e){let t=ei.S((0,l.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ec||(ec=!0,setTimeout(()=>{throw e},0)),e}}return e}class ed{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){eo(e)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await et(e)}await this.et(6e4)})}}class ef{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){let n=new Set,r=t,i=!0;return en.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return y("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.rt(r,n)).next(n=>(y("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}rt(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=Y(t);J(r,n)>0&&(n=r)}),new X(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function eg(e){return null==e}function ep(e){return 0===e&&1/e==-1/0}function ey(e){return"number"==typeof e&&Number.isInteger(e)&&!ep(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"}function ev(e){let t=e.length;if(t>=2||b(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||b(),U.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&b(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\0";break;case"\x11":i+=e.substring(s,t+1);break;default:b()}s=t+2}return new U(r)}em.ct=-1;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eI=["userId","batchId"],eb={},eE=["prefixPath","collectionGroup","readTime","documentId"],eT=["prefixPath","collectionGroup","documentId"],eS=["collectionGroup","readTime","prefixPath","documentId"],ex=["canonicalId","targetId"],e_=["targetId","path"],eD=["path","targetId"],eN=["collectionId","parent"],eC=["indexId","uid"],eA=["uid","sequenceNumber"],ek=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eR=["indexId","uid","orderedDocumentKey"],eF=["userId","collectionPath","documentId"],eV=["userId","collectionPath","largestBatchId"],eM=["userId","collectionGroup","largestBatchId"],eL=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eO=[...eL,"documentOverlays"],eP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],eq=[...eP,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends ee{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function eB(e,t){return ei.M(e.ht,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ez(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eG(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eK(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e,t){this.comparator=e,this.root=t||eQ.EMPTY}insert(e,t){return new e$(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eQ.BLACK,null,null))}remove(e){return new e$(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eQ.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ej(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ej(this.root,e,this.comparator,!1)}getReverseIterator(){return new ej(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ej(this.root,e,this.comparator,!0)}}class ej{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eQ{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eQ.RED,this.left=null!=r?r:eQ.EMPTY,this.right=null!=i?i:eQ.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new eQ(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eQ.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eQ.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eQ.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eQ.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();let e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}eQ.EMPTY=null,eQ.RED=!0,eQ.BLACK=!1,eQ.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eQ(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e){this.comparator=e,this.data=new e$(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eH(this.data.getIterator())}getIteratorFrom(e){return new eH(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eW)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eW(this.comparator);return t.data=e,t}}class eH{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function eY(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new eX([])}unionWith(e){let t=new eW(z.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eX(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eZ(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.binaryString=e}static fromBase64String(e){return new e0(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eJ("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new e0(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}e0.EMPTY_BYTE_STRING=new e0("");let e1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e2(e){if(e||b(),"string"==typeof e){let t=0,n=e1.exec(e);if(n||b(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:e5(e.seconds),nanos:e5(e.nanos)}}function e5(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function e4(e){return"string"==typeof e?e0.fromBase64String(e):e0.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e3(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function e8(e){let t=e.mapValue.fields.__previous_value__;return e3(t)?e8(t):t}function e9(e){let t=e2(e.mapValue.fields.__local_write_time__.timestampValue);return new O(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class e7{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new e7("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof e7&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tt={nullValue:"NULL_VALUE"};function tn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?e3(e)?4:tg(e)?9007199254740991:10:b()}function tr(e,t){if(e===t)return!0;let n=tn(e);if(n!==tn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return e9(e).isEqual(e9(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e2(e.timestampValue),r=e2(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return e4(e.bytesValue).isEqual(e4(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e5(e.geoPointValue.latitude)===e5(t.geoPointValue.latitude)&&e5(e.geoPointValue.longitude)===e5(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e5(e.integerValue)===e5(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=e5(e.doubleValue),r=e5(t.doubleValue);return n===r?ep(n)===ep(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],tr);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ez(n)!==ez(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!tr(n[e],r[e])))return!1;return!0}(e,t);default:return b()}}function ti(e,t){return void 0!==(e.values||[]).find(e=>tr(e,t))}function ts(e,t){if(e===t)return 0;let n=tn(e),r=tn(t);if(n!==r)return M(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=e5(e.integerValue||e.doubleValue),r=e5(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ta(e.timestampValue,t.timestampValue);case 4:return ta(e9(e),e9(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(e,t){let n=e4(e),r=e4(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=M(n[e],r[e]);if(0!==t)return t}return M(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=M(e5(e.latitude),e5(t.latitude));return 0!==n?n:M(e5(e.longitude),e5(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ts(n[e],r[e]);if(t)return t}return M(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===te.mapValue&&t===te.mapValue)return 0;if(e===te.mapValue)return 1;if(t===te.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=M(r[e],s[e]);if(0!==t)return t;let a=ts(n[r[e]],i[s[e]]);if(0!==a)return a}return M(r.length,s.length)}(e.mapValue,t.mapValue);default:throw b()}}function ta(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return M(e,t);let n=e2(e),r=e2(t),i=M(n.seconds,r.seconds);return 0!==i?i:M(n.nanos,r.nanos)}function to(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e2(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?e4(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,G.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=to(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${to(e.fields[i])}`;return n+"}"}(e.mapValue):b()}function tl(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function tu(e){return!!e&&"integerValue"in e}function tc(e){return!!e&&"arrayValue"in e}function th(e){return!!e&&"nullValue"in e}function td(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tf(e){return!!e&&"mapValue"in e}function tm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return eG(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tm(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tm(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tg(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function tp(e,t){let n=ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ty(e,t){let n=ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.value=e}static empty(){return new tw({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!tf(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tm(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tm(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());tf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];tf(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eG(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new tw(tm(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tv(e,0,P.min(),P.min(),P.min(),tw.empty(),0)}static newFoundDocument(e,t,n,r){return new tv(e,1,t,P.min(),n,r,0)}static newNoDocument(e,t){return new tv(e,2,t,P.min(),P.min(),tw.empty(),0)}static newUnknownDocument(e,t){return new tv(e,3,t,P.min(),P.min(),tw.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(P.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tw.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tw.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tv&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tv(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t){this.position=e,this.inclusive=t}}function tb(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?G.comparator(G.fromName(a.referenceValue),n.key):ts(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function tE(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tr(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{}class tx extends tS{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tR(e,t,n):"array-contains"===t?new tL(e,n):"in"===t?new tO(e,n):"not-in"===t?new tP(e,n):"array-contains-any"===t?new tq(e,n):new tx(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tF(e,n):new tV(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ts(t,this.value)):null!==t&&tn(this.value)===tn(t)&&this.matchesComparison(ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class t_ extends tS{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new t_(e,t)}matches(e){return tD(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.ft(e=>e.isInequality());return null!==e?e.field:null}ft(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function tD(e){return"and"===e.op}function tN(e){return"or"===e.op}function tC(e){return tA(e)&&tD(e)}function tA(e){for(let t of e.filters)if(t instanceof t_)return!1;return!0}function tk(e,t){let n=e.filters.concat(t);return t_.create(n,e.op)}class tR extends tx{constructor(e,t,n){super(e,t,n),this.key=G.fromName(n.referenceValue)}matches(e){let t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class tF extends tx{constructor(e,t){super(e,"in",t),this.keys=tM("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tV extends tx{constructor(e,t){super(e,"not-in",t),this.keys=tM("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tM(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>G.fromName(e.referenceValue))}class tL extends tx{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return tc(t)&&ti(t.arrayValue,this.value)}}class tO extends tx{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ti(this.value.arrayValue,t)}}class tP extends tx{constructor(e,t){super(e,"not-in",t)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ti(this.value.arrayValue,t)}}class tq extends tx{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!tc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ti(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.dt=null}}function tB(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tU(e,t,n,r,i,s,a)}function tz(e){if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof tx)return t.field.canonicalString()+t.op.toString()+to(t.value);if(tC(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eg(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>to(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>to(e)).join(",")),e.dt=t}return e.dt}function tG(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tx?n instanceof tx&&t.op===n.op&&t.field.isEqual(n.field)&&tr(t.value,n.value):t instanceof t_?n instanceof t_&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void b()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tE(e.startAt,t.startAt)&&tE(e.endAt,t.endAt)}function tK(e){return G.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function t$(e,t){return e.filters.filter(e=>e instanceof tx&&e.field.isEqual(t))}function tj(e,t,n){let r=tt,i=!0;for(let n of t$(e,t)){let e=tt,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?tt:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?tl(e7.empty(),G.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:b();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=tt}0>tp({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>tp({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tQ(e,t,n){let r=te,i=!0;for(let n of t$(e,t)){let e=te,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?tl(e7.empty(),G.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?te:b(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=te}ty({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];ty({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.wt=null,this._t=null,this.startAt,this.endAt}}function tH(e){return new tW(e)}function tY(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tX(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tJ(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function tZ(e){return null!==e.collectionGroup}function t0(e){if(null===e.wt){e.wt=[];let t=tJ(e),n=tX(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new tT(t)),e.wt.push(new tT(z.keyField(),"asc"));else{let t=!1;for(let n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new tT(z.keyField(),t))}}}return e.wt}function t1(e){if(!e._t){if("F"===e.limitType)e._t=tB(e.path,e.collectionGroup,t0(e),e.filters,e.limit,e.startAt,e.endAt);else{let t=[];for(let n of t0(e)){let e="desc"===n.dir?"asc":"desc";t.push(new tT(n.field,e))}let n=e.endAt?new tI(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tI(e.startAt.position,e.startAt.inclusive):null;e._t=tB(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}return e._t}function t2(e,t){t.getFirstInequalityField(),tJ(e);let n=e.filters.concat([t]);return new tW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function t5(e,t,n){return new tW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function t4(e,t){return tG(t1(e),t1(t))&&e.limitType===t.limitType}function t3(e){return`${tz(t1(e))}|lt:${e.limitType}`}function t8(e){var t;let n;return`Query(target=${n=(t=t1(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tx?`${t.field.canonicalString()} ${t.op} ${to(t.value)}`:t instanceof t_?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eg(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>to(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>to(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function t9(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):G.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of t0(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=tb(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,t0(e),t))&&(!e.endAt||!!function(e,t,n){let r=tb(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,t0(e),t))}function t6(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function t7(e){return(t,n)=>{let r=!1;for(let i of t0(e)){let e=function(e,t,n){let r=e.field.isKeyField()?G.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ts(r,i):b()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return b()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eG(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return eK(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt=new e$(G.comparator),nn=new e$(G.comparator);function nr(...e){let t=nn;for(let n of e)t=t.insert(n.key,n);return t}function ni(e){let t=nn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ns(){return new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}let na=new e$(G.comparator),no=new eW(G.comparator);function nl(...e){let t=no;for(let n of e)t=t.add(n);return t}let nu=new eW(M);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ep(t)?"-0":t}}function nh(e){return{integerValue:""+e}}function nd(e,t){return ey(t)?nh(t):nc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this._=void 0}}function nm(e,t){return e instanceof nI?tu(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ng extends nf{}class np extends nf{constructor(e){super(),this.elements=e}}function ny(e,t){let n=nE(t);for(let t of e.elements)n.some(e=>tr(e,t))||n.push(t);return{arrayValue:{values:n}}}class nw extends nf{constructor(e){super(),this.elements=e}}function nv(e,t){let n=nE(t);for(let t of e.elements)n=n.filter(e=>!tr(e,t));return{arrayValue:{values:n}}}class nI extends nf{constructor(e,t){super(),this.serializer=e,this.gt=t}}function nb(e){return e5(e.integerValue||e.doubleValue)}function nE(e){return tc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t){this.field=e,this.transform=t}}class nS{constructor(e,t){this.version=e,this.transformResults=t}}class nx{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nx}static exists(e){return new nx(void 0,e)}static updateTime(e){return new nx(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function n_(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nD{}function nN(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nL(e.key,nx.none()):new nk(e.key,e.data,nx.none());{let n=e.data,r=tw.empty(),i=new eW(z.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nR(e.key,r,new eX(i.toArray()),nx.none())}}function nC(e,t,n,r){return e instanceof nk?function(e,t,n,r){if(!n_(e.precondition,t))return n;let i=e.value.clone(),s=nM(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nR?function(e,t,n,r){if(!n_(e.precondition,t))return n;let i=nM(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nF(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):n_(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nA(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof np&&r instanceof np||n instanceof nw&&r instanceof nw?L(n.elements,r.elements,tr):n instanceof nI&&r instanceof nI?tr(n.gt,r.gt):n instanceof ng&&r instanceof ng)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nk extends nD{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nR extends nD{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nF(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nV(e,t,n){var r;let i=new Map;e.length===n.length||b();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof np?ny(o,l):o instanceof nw?nv(o,l):r))}return i}function nM(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof ng?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&e3(t)&&(t=e8(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof np?ny(e,s):e instanceof nw?nv(e,s):function(e,t){let n=nm(e,t),r=nb(n)+nb(e.gt);return tu(n)&&tu(e.gt)?nh(r):nc(e.serializer,r)}(e,s))}return r}class nL extends nD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nO extends nD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nk?function(e,t,n){let r=e.value.clone(),i=nV(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nR?function(e,t,n){if(!n_(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nV(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nF(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=nC(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=nC(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ns();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=nN(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(P.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nl())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>nA(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>nA(e,t))}}class nq{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||b();let r=na,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nq(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t){this.count=e,this.unchangedNames=t}}function nz(e){switch(e){default:return b();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function nG(e){if(void 0===e)return w("GRPC error has no .code"),T.UNKNOWN;switch(e){case r.OK:return T.OK;case r.CANCELLED:return T.CANCELLED;case r.UNKNOWN:return T.UNKNOWN;case r.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case r.INTERNAL:return T.INTERNAL;case r.UNAVAILABLE:return T.UNAVAILABLE;case r.UNAUTHENTICATED:return T.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case r.NOT_FOUND:return T.NOT_FOUND;case r.ALREADY_EXISTS:return T.ALREADY_EXISTS;case r.PERMISSION_DENIED:return T.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case r.ABORTED:return T.ABORTED;case r.OUT_OF_RANGE:return T.OUT_OF_RANGE;case r.UNIMPLEMENTED:return T.UNIMPLEMENTED;case r.DATA_LOSS:return T.DATA_LOSS;default:return b()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return n$}static getOrCreateInstance(){return null===n$&&(n$=new nK),n$}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let n$=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nj(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nQ=new u.z8([4294967295,4294967295],0);function nW(e){let t=nj().encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function nH(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class nY{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nX(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nX(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nX(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=u.z8.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(nQ)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;let[t,n]=nH(nW(e));for(let e=0;e<this.hashCount;e++){let r=this.Et(t,n,e);if(!this.At(r))return!1}return!0}static create(e,t,n){let r=new nY(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.It)return;let[t,n]=nH(nW(e));for(let e=0;e<this.hashCount;e++){let r=this.Et(t,n,e);this.Rt(r)}}Rt(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nX extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nZ.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nJ(P.min(),r,new e$(M),nt,nl())}}class nZ{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nZ(n,t,nl(),nl(),nl())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class n1{constructor(e,t){this.targetId=e,this.Vt=t}}class n2{constructor(e,t,n=e0.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class n5{constructor(){this.St=0,this.Dt=n8(),this.Ct=e0.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=nl(),t=nl(),n=nl();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:b()}}),new nZ(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=n8()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class n4{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=nt,this.zt=n3(),this.Wt=new e$(M)}Ht(e){for(let t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(let t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{let n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((e,n)=>{this.te(n)&&t(n)})}ne(e){var t;let n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){let s=i.target;if(tK(s)){if(0===r){let e=new G(s.path);this.Yt(n,e,tv.newNoDocument(e,P.min()))}else 1===r||b()}else{let i=this.ie(n);if(i!==r){let r=this.re(e,i);0!==r&&(this.ee(n),this.Wt=this.Wt.insert(n,2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null===(t=nK.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,a,o,l;let u={localCacheCount:t,existenceFilterCount:n.count},c=n.unchangedNames;return c&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==c?void 0:c.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(a=null===(s=null===(i=null==c?void 0:c.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==a?a:0,padding:null!==(l=null===(o=null==c?void 0:c.bits)||void 0===o?void 0:o.padding)&&void 0!==l?l:0}),u}(r,i,e.Vt))}}}}re(e,t){let n,r;let{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;let{bits:{bitmap:a="",padding:o=0},hashCount:l=0}=i;try{n=e4(a).toUint8Array()}catch(e){if(e instanceof eJ)return v("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{r=new nY(n,o,l)}catch(e){return v(e instanceof nX?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===r.It?1:s!==t-this.oe(e.targetId,r)?2:0}oe(e,t){let n=this.Gt.getRemoteKeysForTarget(e),r=0;return n.forEach(n=>{let i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)}),r}ce(e){let t=new Map;this.Qt.forEach((n,r)=>{let i=this.se(r);if(i){if(n.current&&tK(i.target)){let t=new G(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,tv.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}});let n=nl();this.zt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.jt.forEach((t,n)=>n.setReadTime(e));let r=new nJ(e,t,this.Wt,this.jt,n);return this.jt=nt,this.zt=n3(),this.Wt=new e$(M),r}Jt(e,t){if(!this.te(e))return;let n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;let r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){let t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new n5,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new eW(M),this.zt=this.zt.insert(e,t)),t}te(e){let t=null!==this.se(e);return t||y("WatchChangeAggregator","Detected inactive target",e),t}se(e){let t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new n5),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function n3(){return new e$(G.comparator)}function n8(){return new e$(G.comparator)}let n9={asc:"ASCENDING",desc:"DESCENDING"},n6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n7={and:"AND",or:"OR"};class re{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rt(e,t){return e.useProto3Json||eg(t)?t:{value:t}}function rn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ri(e){return e||b(),P.fromTimestamp(function(e){let t=e2(e);return new O(t.seconds,t.nanos)}(e))}function rs(e,t){return new U(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function ra(e){let t=U.fromString(e);return rE(t)||b(),t}function ro(e,t){return rs(e.databaseId,t.path)}function rl(e,t){let n=ra(t);if(n.get(1)!==e.databaseId.projectId)throw new S(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(rd(n))}function ru(e,t){return rs(e.databaseId,t)}function rc(e){let t=ra(e);return 4===t.length?U.emptyPath():rd(t)}function rh(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rd(e){return e.length>4&&"documents"===e.get(4)||b(),e.popFirst(5)}function rf(e,t,n){return{name:ro(e,t),fields:n.value.mapValue.fields}}function rm(e,t,n){let r=rl(e,t.name),i=ri(t.updateTime),s=t.createTime?ri(t.createTime):P.min(),a=new tw({mapValue:{fields:t.fields}}),o=tv.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rg(e,t){var n;let r;if(t instanceof nk)r={update:rf(e,t.key,t.value)};else if(t instanceof nL)r={delete:ro(e,t.key)};else if(t instanceof nR)r={update:rf(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nO))return b();r={verify:ro(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ng)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof np)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof nw)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nI)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw b()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:rn(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:b()),r}function rp(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?nx.updateTime(ri(n.updateTime)):void 0!==n.exists?nx.exists(n.exists):nx.none():nx.none(),i=t.updateTransforms?t.updateTransforms.map(t=>{let n;return n=null,"setToServerValue"in t?("REQUEST_TIME"===t.setToServerValue||b(),n=new ng):"appendMissingElements"in t?n=new np(t.appendMissingElements.values||[]):"removeAllFromArray"in t?n=new nw(t.removeAllFromArray.values||[]):"increment"in t?n=new nI(e,t.increment):b(),new nT(z.fromServerFormat(t.fieldPath),n)}):[];if(t.update){t.update.name;let n=rl(e,t.update.name),s=new tw({mapValue:{fields:t.update.fields}});return t.updateMask?new nR(n,s,new eX((t.updateMask.fieldPaths||[]).map(e=>z.fromServerFormat(e))),r,i):new nk(n,s,r,i)}return t.delete?new nL(rl(e,t.delete),r):t.verify?new nO(rl(e,t.verify),r):b()}function ry(e,t){return{documents:[ru(e,t.path)]}}function rw(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=ru(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=ru(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof tx?function(e){if("=="===e.op){if(td(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NAN"}};if(th(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(td(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NOT_NAN"}};if(th(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rI(e.field),op:n6[e.op],value:e.value}}}(t):t instanceof t_?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:n7[t.op],filters:n}}}(t):b()}(t_.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:rI(e.field),direction:n9[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=rt(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}function rv(e){var t;let n,r=rc(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||b();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rb(e.unaryFilter.field);return tx.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=rb(e.unaryFilter.field);return tx.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=rb(e.unaryFilter.field);return tx.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rb(e.unaryFilter.field);return tx.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):void 0!==t.fieldFilter?tx.create(rb(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?t_.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return b()}}(t.compositeFilter.op)):b()}(e);return t instanceof t_&&tC(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new tT(rb(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=eg(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new tI(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new tI(e.values||[],t)}(i.endAt)),new tW(r,a,l,o,u,"F",c,h)}function rI(e){return{fieldPath:e.canonicalString()}}function rb(e){return z.fromServerFormat(e.fieldPath)}function rE(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,n,r,i=P.min(),s=P.min(),a=e0.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rT(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rT(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.fe=e}}function rx(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:r_(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:ro(i=e.fe,t.key),fields:t.data.value.mapValue.fields,updateTime:rn(i,t.version.toTimestamp()),createTime:rn(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rD(t.version)};else{if(!t.isUnknownDocument())return b();r.unknownDocument={path:n.path.toArray(),version:rD(t.version)}}return r}function r_(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rD(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rN(e){let t=new O(e.seconds,e.nanoseconds);return P.fromTimestamp(t)}function rC(e,t){let n=(t.baseMutations||[]).map(t=>rp(e.fe,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rp(e.fe,t)),i=O.fromMillis(t.localWriteTimeMs);return new nP(t.batchId,i,n,r)}function rA(e){var t;let n;let r=rN(e.readTime),i=void 0!==e.lastLimboFreeSnapshotVersion?rN(e.lastLimboFreeSnapshotVersion):P.min();return void 0!==e.query.documents?(1===(t=e.query).documents.length||b(),n=t1(tH(rc(t.documents[0])))):n=t1(rv(e.query)),new rT(n,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,r,i,e0.fromBase64String(e.resumeToken))}function rk(e,t){let n;let r=rD(t.snapshotVersion),i=rD(t.lastLimboFreeSnapshotVersion);n=tK(t.target)?ry(e.fe,t.target):rw(e.fe,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tz(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rR(e){let t=rv({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?t5(t,t.limit,"L"):t}function rF(e,t){return new nU(t.largestBatchId,rp(e.fe,t.overlayMutation))}function rV(e,t){let n=t.path.lastSegment();return[e,ew(t.path.popLast()),n]}function rM(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rD(r.readTime),documentKey:ew(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{getBundleMetadata(e,t){return rO(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rN(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rO(e).put({bundleId:t.id,createTime:rD(ri(t.createTime)),version:t.version})}getNamedQuery(e,t){return rP(e).get(t).next(e=>{if(e)return{name:e.name,query:rR(e.bundledQuery),readTime:rN(e.readTime)}})}saveNamedQuery(e,t){return rP(e).put({name:t.name,readTime:rD(ri(t.readTime)),bundledQuery:t.bundledQuery})}}function rO(e){return eB(e,"bundles")}function rP(e){return eB(e,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){return new rq(e,t.uid||"")}getOverlay(e,t){return rU(e).get(rV(this.userId,t)).next(e=>e?rF(this.serializer,e):null)}getOverlays(e,t){let n=ns();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new nU(t,i);r.push(this.we(e,s))}),en.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(ew(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(rU(e).J("collectionPathOverlayIndex",r))}),en.waitFor(i)}getOverlaysForCollection(e,t,n){let r=ns(),i=ew(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rU(e).j("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=rF(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=ns(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rU(e).X({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rF(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}we(e,t){return rU(e).put(function(e,t,n){let[r,i,s]=rV(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:rg(e.fe,n.mutation)}}(this.serializer,this.userId,t))}}function rU(e){return eB(e,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(e5(e.integerValue));else if("doubleValue"in e){let n=e5(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),ep(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(e4(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?tg(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):b()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){let n=e.fields||{};for(let e of(this.ye(t,55),Object.keys(n)))this.Te(e,t),this.me(n[e],t)}Pe(e,t){let n=e.values||[];for(let e of(this.ye(t,50),n))this.me(e,t)}ve(e,t){this.ye(t,37),G.fromName(e).path.forEach(e=>{this.ye(t,60),this.be(e,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}function rz(e){return Math.ceil((64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e))/8)}rB.Ve=new rB;class rG{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.De(n.value),n=t.next();this.Ce()}xe(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ne(n.value),n=t.next();this.ke()}Me(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{let e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{let e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){let t=this.Fe(e),n=rz(t);this.Be(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Le(e){let t=this.Fe(e),n=rz(t);this.Be(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}De(e){let t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){let t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rK{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class r${constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class rj{constructor(){this.je=new rG,this.ze=new rK(this.je),this.We=new r$(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rQ{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Je(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new rQ(this.indexId,this.documentKey,this.arrayValue,n)}}function rW(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rH(e.arrayValue,t.arrayValue))?n:0!==(n=rH(e.directionalValue,t.directionalValue))?n:G.comparator(e.documentKey,t.documentKey)}function rH(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[],e.filters))t.isInequality()?this.Ze=t:this.Xe.push(t)}tn(e){e.collectionGroup===this.collectionId||b();let t=$(e);if(void 0!==t&&!this.en(t))return!1;let n=j(e),r=new Set,i=0,s=0;for(;i<n.length&&this.en(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.Ze){if(!r.has(this.Ze.field.canonicalString())){let e=n[i];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[s++],e))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],e))return!1}return!0}en(e){for(let t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function rX(e){return e instanceof tx}function rJ(e){return e instanceof t_&&tC(e)}function rZ(e){return rX(e)||rJ(e)||function(e){if(e instanceof t_&&tN(e)){for(let t of e.getFilters())if(!rX(t)&&!rJ(t))return!1;return!0}return!1}(e)}function r0(e,t){return e instanceof tx||e instanceof t_||b(),t instanceof tx||t instanceof t_||b(),r2(e instanceof tx?t instanceof tx?t_.create([e,t],"and"):r1(e,t):t instanceof tx?r1(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||b(),tD(e)&&tD(t))return tk(e,t.getFilters());let n=tN(e)?e:t,r=tN(e)?t:e,i=n.filters.map(e=>r0(e,r));return t_.create(i,"or")}(e,t))}function r1(e,t){if(tD(t))return tk(t,e.getFilters());{let n=t.filters.map(t=>r0(e,t));return t_.create(n,"or")}}function r2(e){if(e instanceof tx||e instanceof t_||b(),e instanceof tx)return e;let t=e.getFilters();if(1===t.length)return r2(t[0]);if(tA(e))return e;let n=t.map(e=>r2(e)),r=[];return n.forEach(t=>{t instanceof tx?r.push(t):t instanceof t_&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:t_.create(r,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(){this.rn=new r4}addToCollectionParentIndex(e,t){return this.rn.add(t),en.resolve()}getCollectionParents(e,t){return en.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return en.resolve()}deleteFieldIndex(e,t){return en.resolve()}getDocumentsMatchingTarget(e,t){return en.resolve(null)}getIndexType(e,t){return en.resolve(0)}getFieldIndexes(e,t){return en.resolve([])}getNextCollectionGroupToUpdate(e){return en.resolve(null)}getMinOffset(e,t){return en.resolve(X.min())}getMinOffsetFromCollectionGroup(e,t){return en.resolve(X.min())}updateCollectionGroup(e,t,n){return en.resolve()}updateIndexEntries(e,t){return en.resolve()}}class r4{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eW(U.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eW(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r3=new Uint8Array(0);class r8{constructor(e,t){this.user=e,this.databaseId=t,this.on=new r4,this.un=new ne(e=>tz(e),(e,t)=>tG(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});let i={collectionId:n,parent:ew(r)};return r9(e).put(i)}return en.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\0",""],!1,!0);return r9(e).j(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(ev(r.parent))}return n})}addFieldIndex(e,t){let n=r7(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=ie(e);return i.next(e=>{n.put(rM(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=r7(e),r=ie(e),i=r6(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let n=r6(e),r=!0,i=new Map;return en.forEach(this.cn(t),t=>this.an(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=nl(),r=[];return en.forEach(i,(i,s)=>{y("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${tz(t)}`);let a=function(e,t){let n=$(t);if(void 0===n)return null;for(let t of t$(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of j(t))for(let t of t$(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of j(t)){let t=0===i.kind?tj(e,i.fieldPath,e.startAt):tQ(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new tI(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of j(t)){let t=0===i.kind?tQ(e,i.fieldPath,e.endAt):tj(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new tI(n,r)}(s,i),c=this.hn(i,s,l),h=this.hn(i,s,u),d=this.ln(i,s,o),f=this.fn(i.indexId,a,c,l.inclusive,h,u.inclusive,d);return en.forEach(f,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{let n=G.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return en.resolve(null)})}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof tx||t instanceof t_||b(),t instanceof tx)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=t_.create(n,t.op);return rZ(r=r2(r))?r:(r instanceof t_||b(),tD(r)||b(),r.filters.length>1||b(),r.filters.reduce((e,t)=>r0(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(t){var n,r;if(t instanceof tx||t instanceof t_||b(),t instanceof tx){if(t instanceof tO){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>tx.create(t.field,"==",e)))||[];return t_.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return t_.create(i,t.op)}(e));return rZ(t)||b(),rX(t)||rJ(t)?[t]:t.getFilters()})(t_.create(e.filters,"and")).map(t=>tB(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t)),t}fn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let c=0;c<o;++c){let o=t?this.dn(t[c/l]):r3,h=this.wn(e,o,n[c%l],r),d=this._n(e,o,i[c%l],s),f=a.map(t=>this.wn(e,o,t,!0));u.push(...this.createRange(h,d,f))}return u}wn(e,t,n,r){let i=new rQ(e,G.empty(),t,n);return r?i:i.Je()}_n(e,t,n,r){let i=new rQ(e,G.empty(),t,n);return r?i.Je():i}an(e,t){let n=new rY(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.cn(t);return en.forEach(r,t=>this.an(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new eW(z.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}mn(e,t){let n=new rj;for(let r of j(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.He(r.kind);rB.Ve._e(e,i)}return n.Qe()}dn(e){let t=new rj;return rB.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){let n=new rj;return rB.Ve._e(tl(this.databaseId,t),n.He(function(e){let t=j(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Qe()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new rj);let i=0;for(let s of j(e)){let e=n[i++];for(let n of r)if(this.yn(t,s.fieldPath)&&tc(e))r=this.pn(r,s,e);else{let t=n.He(s.kind);rB.Ve._e(e,t)}}return this.In(r)}hn(e,t,n){return this.ln(e,t,n.position)}In(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Qe();return t}pn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rj;r.seed(n.Qe()),rB.Ve._e(e,r.He(t.kind)),i.push(r)}return i}yn(e,t){return!!e.filters.find(e=>e instanceof tx&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=r7(e),r=ie(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next(e=>{let t=[];return en.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new W(t.sequenceNumber,new X(rN(t.readTime),new G(ev(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new Q(z.fromServerFormat(e),t));return new K(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:M(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=r7(e),i=ie(e);return this.Tn(e).next(e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>en.forEach(t,t=>i.put(rM(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return en.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?en.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),en.forEach(i,n=>this.En(e,t,n).next(t=>{let i=this.An(r,n);return t.isEqual(i)?en.resolve():this.vn(e,r,n,t,i)}))))})}Rn(e,t,n,r){return r6(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,n,r){return r6(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}En(e,t,n){let r=r6(e),i=new eW(rW);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},(e,r)=>{i=i.add(new rQ(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}An(e,t){let n=new eW(rW),r=this.mn(t,e);if(null==r)return n;let i=$(t);if(null!=i){let s=e.data.field(i.fieldPath);if(tc(s))for(let i of s.arrayValue.values||[])n=n.add(new rQ(t.indexId,e.key,this.dn(i),r))}else n=n.add(new rQ(t.indexId,e.key,r3,r));return n}vn(e,t,n,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=eY(s),l=eY(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=eY(a)):t?(i(o),o=eY(s)):(o=eY(s),l=eY(a))}}(r,i,rW,r=>{s.push(this.Rn(e,t,n,r))},r=>{s.push(this.Pn(e,t,n,r))}),en.waitFor(s)}Tn(e){let t=1;return ie(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rW(e,t)).filter((e,t,n)=>!t||0!==rW(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rW(i,e),s=rW(i,t);if(0===n)r[0]=e.Je();else if(n>0&&s<0)r.push(i),r.push(i.Je());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.bn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,r3,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,r3,[]];i.push(IDBKeyRange.bound(t,n))}return i}bn(e,t){return rW(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(it)}getMinOffset(e,t){return en.mapArray(this.cn(t),t=>this.an(e,t).next(e=>e||b())).next(it)}}function r9(e){return eB(e,"collectionParents")}function r6(e){return eB(e,"indexEntries")}function r7(e){return eB(e,"indexConfiguration")}function ie(e){return eB(e,"indexState")}function it(e){0!==e.length||b();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>J(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new X(t.readTime,t.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ii{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ii(e,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.X({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{1===o||b()}));let u=[];for(let e of n.mutations){var c,h;let r=(c=e.key.path,h=n.batchId,[t,ew(c),h]);s.push(i.delete(r)),u.push(e.key)}return en.waitFor(s).next(()=>u)}function ia(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b();t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.DEFAULT_COLLECTION_PERCENTILE=10,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ii.DEFAULT=new ii(41943040,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ii.DISABLED=new ii(-1,0,0);class io{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Vn={}}static de(e,t,n,r){return""!==e.uid||b(),new io(e.isAuthenticated()?e.uid:"",t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return iu(e).X({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=ic(e),s=iu(e);return s.add({}).next(a=>{"number"==typeof a||b();let o=new nP(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>rg(e.fe,t)),i=n.mutations.map(t=>rg(e.fe,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],c=new eW((e,t)=>M(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,ew(e.key.path),a];c=c.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,eb))}return c.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Vn[a]=o.keys()}),en.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return iu(e).get(t).next(e=>e?(e.userId===this.userId||b(),rC(this.serializer,e)):null)}Sn(e,t){return this.Vn[t]?en.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.Vn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return iu(e).X({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||b(),i=rC(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return iu(e).X({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return iu(e).j("userMutationsIndex",t).next(e=>e.map(e=>rC(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,ew(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return ic(e).X({range:r},(n,r,s)=>{let[a,o,l]=n,u=ev(o);if(a===this.userId&&t.path.isEqual(u))return iu(e).get(l).next(e=>{if(!e)throw b();e.userId===this.userId||b(),i.push(rC(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(M),r=[];return t.forEach(t=>{let i=[this.userId,ew(t.path)],s=IDBKeyRange.lowerBound(i),a=ic(e).X({range:s},(e,r,i)=>{let[s,a,o]=e,l=ev(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),en.waitFor(r).next(()=>this.Dn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,ew(n)],s=IDBKeyRange.lowerBound(i),a=new eW(M);return ic(e).X({range:s},(e,t,i)=>{let[s,o,l]=e,u=ev(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.Dn(e,a))}Dn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(iu(e).get(t).next(e=>{if(null===e)throw b();e.userId===this.userId||b(),n.push(rC(this.serializer,e))}))}),en.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return is(e.ht,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),en.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return en.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return ic(e).X({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=ev(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||b()})})}containsKey(e,t){return il(e,this.userId,t)}xn(e){return ih(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function il(e,t,n){let r=[t,ew(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return ic(e).X({range:s,Y:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function iu(e){return eB(e,"mutations")}function ic(e){return eB(e,"documentMutations")}function ih(e){return eB(e,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new id(0)}static Mn(){return new id(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{let n=new id(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(e=>P.fromTimestamp(new O(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.$n(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(n=>(n.targetCount+=1,this.Bn(t,n),this.On(e,n))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ig(e).delete(t.targetId)).next(()=>this.$n(e)).next(t=>(t.targetCount>0||b(),t.targetCount-=1,this.On(e,t)))}removeTargets(e,t,n){let r=0,i=[];return ig(e).X((s,a)=>{let o=rA(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>en.waitFor(i)).next(()=>r)}forEachTarget(e,t){return ig(e).X((e,n)=>{t(rA(n))})}$n(e){return ip(e).get("targetGlobalKey").next(e=>(null!==e||b(),e))}On(e,t){return ip(e).put("targetGlobalKey",t)}Fn(e,t){return ig(e).put(rk(this.serializer,t))}Bn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.$n(e).next(e=>e.targetCount)}getTargetData(e,t){let n=tz(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return ig(e).X({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rA(n);tG(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=iy(e);return t.forEach(t=>{let s=ew(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),en.waitFor(r)}removeMatchingKeys(e,t,n){let r=iy(e);return en.forEach(t,t=>{let i=ew(t.path);return en.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=iy(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=iy(e),i=nl();return r.X({range:n,Y:!0},(e,t,n)=>{let r=new G(ev(e[1]));i=i.add(r)}).next(()=>i)}containsKey(e,t){let n=ew(t.path),r=IDBKeyRange.bound([n],[n+"\0"],!1,!0),i=0;return iy(e).X({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}le(e,t){return ig(e).get(t).next(e=>e?rA(e):null)}}function ig(e){return eB(e,"targets")}function ip(e){return eB(e,"targetGlobal")}function iy(e){return eB(e,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw([e,t],[n,r]){let i=M(e,n);return 0===i?M(t,r):i}class iv{constructor(e){this.Ln=e,this.buffer=new eW(iw),this.qn=0}Un(){return++this.qn}Kn(e){let t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>iw(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eo(e)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await et(e)}await this.Qn(3e5)})}}class ib{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return en.resolve(em.ct);let n=new iv(t);return this.jn.forEachTarget(e,e=>n.Kn(e.sequenceNumber)).next(()=>this.jn.Wn(e,e=>n.Kn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; disabled"),en.resolve(ir)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ir):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let n,r,i,s,a,l,u;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),g()<=o.in.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-c}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(l-a)+"ms\n"+`	Removed ${e} documents in `+(u-l)+"ms\n"+`Total Duration: ${u-c}ms`),en.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.db=e,this.garbageCollector=new ib(this,t)}zn(e){let t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Jn(e){let t=0;return this.Wn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(e,n)=>t(n))}addReference(e,t,n){return iT(e,n)}removeReference(e,t,n){return iT(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return iT(e,t)}Xn(e,t){let n;return n=!1,ih(e).Z(r=>il(e,r,t).next(e=>(e&&(n=!0),en.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Yn(e,(s,a)=>{if(a<=t){let t=this.Xn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,P.min()),iy(e).delete([0,ew(s.path)])))});r.push(t)}}).next(()=>en.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return iT(e,t)}Yn(e,t){let n=iy(e),r,i=em.ct;return n.X({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==em.ct&&t(new G(ev(r)),i),i=a,r=s):i=em.ct}).next(()=>{i!==em.ct&&t(new G(ev(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function iT(e,t){var n;return iy(e).put((n=e.currentSequenceNumber,{targetId:0,path:ew(t.path),sequenceNumber:n}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.changes=new ne(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tv.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?en.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return iN(e).put(n)}removeEntry(e,t,n){return iN(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],r_(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Zn(e,n)))}getEntry(e,t){let n=tv.newInvalidDocument(t);return iN(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(iC(t))},(e,r)=>{n=this.ts(t,r)}).next(()=>n)}es(e,t){let n={size:0,document:tv.newInvalidDocument(t)};return iN(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(iC(t))},(e,r)=>{n={document:this.ts(t,r),size:ia(r)}}).next(()=>n)}getEntries(e,t){let n=nt;return this.ns(e,t,(e,t)=>{let r=this.ts(e,t);n=n.insert(e,r)}).next(()=>n)}ss(e,t){let n=nt,r=new e$(G.comparator);return this.ns(e,t,(e,t)=>{let i=this.ts(e,t);n=n.insert(e,i),r=r.insert(e,ia(t))}).next(()=>({documents:n,rs:r}))}ns(e,t,n){if(t.isEmpty())return en.resolve();let r=new eW(ik);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(iC(r.first()),iC(r.last())),s=r.getIterator(),a=s.getNext();return iN(e).X({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=G.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>ik(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.G(iC(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){let i=t.path,s=[i.popLast().toArray(),i.lastSegment(),r_(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return iN(e).j(IDBKeyRange.bound(s,a,!0)).next(e=>{let n=nt;for(let i of e){let e=this.ts(G.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(t9(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=nt,s=iA(t,n),a=iA(t,X.max());return iN(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.ts(G.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new i_(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return iD(e).get("remoteDocumentGlobalKey").next(e=>(e||b(),e))}Zn(e,t){return iD(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){let e=function(e,t){let n;if(t.document)n=rm(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=G.fromSegments(t.noDocument.path),r=rN(t.noDocument.readTime);n=tv.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b();{let e=G.fromSegments(t.unknownDocument.path),r=rN(t.unknownDocument.version);n=tv.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new O(e[0],e[1]);return P.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(P.min())))return e}return tv.newInvalidDocument(e)}}class i_ extends iS{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new eW((e,t)=>M(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.us.get(i);if(t.push(this.os.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rx(this.os.serializer,s);r=r.add(i.path.popLast());let l=ia(o);n+=l-a.size,t.push(this.os.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rx(this.os.serializer,s.convertToNoDocument(P.min()));t.push(this.os.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.os.updateMetadata(e,n)),en.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:e,rs:t})=>(t.forEach((t,n)=>{this.us.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function iD(e){return eB(e,"remoteDocumentGlobal")}function iN(e){return eB(e,"remoteDocumentsV14")}function iC(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function iA(e,t){let n=t.documentKey.path.toArray();return[e,r_(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ik(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=M(n[e],r[e]))return i;return(i=M(n.length,r.length))||(i=M(n[n.length-2],r[r.length-2]))||M(n[n.length-1],r[r.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&nC(n.mutation,e,eX.empty(),O.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nl()).next(()=>t))}getLocalViewOfDocuments(e,t,n=nl()){let r=ns();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=nr();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=ns();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,nl()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=nt,s=ns(),a=ns();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nR)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nC(a.mutation,t,a.mutation.getFieldMask(),O.now())):s.set(t.key,eX.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new iR(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ns(),r=new e$((e,t)=>e-t),i=nl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||eX.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||nl()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=ns();l.forEach(e=>{if(!i.has(e)){let r=nN(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return en.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return G.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tZ(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):en.resolve(ns()),a=-1,o=i;return s.next(t=>en.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?en.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,nl())).next(e=>({batchId:a,changes:ni(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(e=>{let t=nr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=nr();return this.indexManager.getCollectionParents(e,r).next(s=>en.forEach(s,s=>{let a=new tW(s.child(r),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tv.newInvalidDocument(r)))});let n=nr();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&nC(s.mutation,i,eX.empty(),O.now()),t9(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return en.resolve(this.cs.get(t))}saveBundleMetadata(e,t){return this.cs.set(t.id,{id:t.id,version:t.version,createTime:ri(t.createTime)}),en.resolve()}getNamedQuery(e,t){return en.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:t.name,query:rR(t.bundledQuery),readTime:ri(t.readTime)}),en.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.overlays=new e$(G.comparator),this.ls=new Map}getOverlay(e,t){return en.resolve(this.overlays.get(t))}getOverlays(e,t){let n=ns();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.we(e,t,r)}),en.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.ls.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ls.delete(n)),en.resolve()}getOverlaysForCollection(e,t,n){let r=ns(),i=t.length+1,s=new G(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return en.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new e$((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ns(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ns(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return en.resolve(a)}we(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nU(t,n));let i=this.ls.get(t);void 0===i&&(i=nl(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(){this.fs=new eW(iO.ds),this.ws=new eW(iO._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){let n=new iO(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ys(new iO(e,t))}ps(e,t){e.forEach(e=>this.removeReference(e,t))}Is(e){let t=new G(new U([])),n=new iO(t,e),r=new iO(t,e+1),i=[];return this.ws.forEachInRange([n,r],e=>{this.ys(e),i.push(e.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){let t=new G(new U([])),n=new iO(t,e),r=new iO(t,e+1),i=nl();return this.ws.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iO(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class iO{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return G.comparator(e.key,t.key)||M(e.As,t.As)}static _s(e,t){return M(e.As,t.As)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new eW(iO.ds)}checkEmpty(e){return en.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nP(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Rs=this.Rs.add(new iO(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return en.resolve(s)}lookupMutationBatch(e,t){return en.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.bs(t+1),r=n<0?0:n;return en.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return en.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return en.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new iO(t,0),r=new iO(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],e=>{let t=this.Ps(e.As);i.push(t)}),en.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(M);return t.forEach(e=>{let t=new iO(e,0),r=new iO(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],e=>{n=n.add(e.As)})}),en.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;G.isDocumentKey(i)||(i=i.child(""));let s=new iO(new G(i),0),a=new eW(M);return this.Rs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.As)),!0)},s),en.resolve(this.Vs(a))}Vs(e){let t=[];return e.forEach(e=>{let n=this.Ps(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ss(t.batchId,"removed")||b(),this.mutationQueue.shift();let n=this.Rs;return en.forEach(t.mutations,r=>{let i=new iO(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=n})}Cn(e){}containsKey(e,t){let n=new iO(t,0),r=this.Rs.firstAfterOrEqual(n);return en.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,en.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){let t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(e){this.Ds=e,this.docs=new e$(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return en.resolve(n?n.document.mutableCopy():tv.newInvalidDocument(t))}getEntries(e,t){let n=nt;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tv.newInvalidDocument(e))}),en.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=nt,s=t.path,a=new G(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=J(Y(a),n)||(r.has(a.key)||t9(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return en.resolve(i)}getAllFromCollectionGroup(e,t,n,r){b()}Cs(e,t){return en.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new iU(this)}getSize(e){return en.resolve(this.size)}}class iU extends iS{constructor(e){super(),this.os=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)}),en.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e){this.persistence=e,this.xs=new ne(e=>tz(e),tG),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Ns=0,this.ks=new iL,this.targetCount=0,this.Ms=id.kn()}forEachTarget(e,t){return this.xs.forEach((e,n)=>t(n)),en.resolve()}getLastRemoteSnapshotVersion(e){return en.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return en.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),en.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),en.resolve()}Fn(e){this.xs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ms=new id(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,en.resolve()}updateTargetData(e,t){return this.Fn(t),en.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,en.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.xs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),en.waitFor(i).next(()=>r)}getTargetCount(e){return en.resolve(this.targetCount)}getTargetData(e,t){let n=this.xs.get(t)||null;return en.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),en.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),en.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),en.resolve()}getMatchingKeysForTargetId(e,t){let n=this.ks.Es(t);return en.resolve(n)}containsKey(e,t){return en.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(e,t){this.$s={},this.overlays={},this.Os=new em(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new iB(this),this.indexManager=new r5,this.remoteDocumentCache=new iq(e=>this.referenceDelegate.Ls(e)),this.serializer=new rS(t),this.qs=new iV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new iP(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);let r=new iG(this.Os.next());return this.referenceDelegate.Us(),n(r).next(e=>this.referenceDelegate.Ks(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gs(e,t){return en.or(Object.values(this.$s).map(n=>()=>n.containsKey(e,t)))}}class iG extends ee{constructor(e){super(),this.currentSequenceNumber=e}}class iK{constructor(e){this.persistence=e,this.Qs=new iL,this.js=null}static zs(e){return new iK(e)}get Ws(){if(this.js)return this.js;throw b()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),en.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),en.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),en.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(e=>this.Ws.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ws.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return en.forEach(this.Ws,n=>{let r=G.fromPath(n);return this.Hs(e,r).next(e=>{e||t.removeEntry(r,P.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return en.or([()=>en.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e){this.serializer=e}O(e,t,n,r){let i=new er("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0}),e.createObjectStore("documentMutations"),ij(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=en.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),ij(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").j().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return en.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Ys(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Xs(i)))),n<7&&r>=7&&(s=s.next(()=>this.Zs(i))),n<8&&r>=8&&(s=s.next(()=>this.ti(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.ei(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eF});t.createIndex("collectionPathOverlayIndex",eV,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",eM,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:eE});t.createIndex("documentKeyIndex",eT),t.createIndex("collectionGroupIndex",eS)})(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.si(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:eC}).createIndex("sequenceNumberIndex",eA,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ek}).createIndex("documentKeyIndex",eR,{unique:!1})})),s}Xs(e){let t=0;return e.store("remoteDocuments").X((e,n)=>{t+=ia(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Ys(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next(t=>en.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next(n=>en.forEach(n,n=>{n.userId===t.userId||b();let r=rC(this.serializer,n);return is(e,t.userId,r).next(()=>{})}))}))}Zs(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.X((n,i)=>{let s=new U(n),a=[0,ew(s)];r.push(t.get(a).next(n=>n?en.resolve():t.put({targetId:0,path:ew(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>en.waitFor(r))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:eN});let n=t.store("collectionParents"),r=new r4,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ew(r)})}};return t.store("remoteDocuments").X({Y:!0},(e,t)=>i(new U(e).popLast())).next(()=>t.store("documentMutations").X({Y:!0},([e,t,n],r)=>i(ev(t).popLast())))}ei(e){let t=e.store("targets");return t.X((e,n)=>{let r=rA(n),i=rk(this.serializer,r);return t.put(i)})}ni(e,t){let n=t.store("remoteDocuments"),r=[];return n.X((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new G(U.fromString(n.document.name).popFirst(5)):n.noDocument?G.fromSegments(n.noDocument.path):n.unknownDocument?G.fromSegments(n.unknownDocument.path):b()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>en.waitFor(r))}si(e,t){let n=t.store("mutations"),r=new ix(this.serializer),i=new iz(iK.zs,this.serializer.fe);return n.j().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:nl();rC(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),en.forEach(n,(e,n)=>{let s=new d(n),a=rq.de(this.serializer,s),o=i.getIndexManager(s);return new iF(r,io.de(s,this.serializer,o,i.referenceDelegate),a,o).recalculateAndSaveOverlaysForDocumentKeys(new eU(t,em.ct),e).next()})})}}function ij(e){e.createObjectStore("targetDocuments",{keyPath:e_}).createIndex("documentTargetsIndex",eD,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ex,{unique:!0}),e.createObjectStore("targetGlobal")}let iQ="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class iW{constructor(e,t,n,r,i,s,a,o,l,u,c=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=a,this.ri=l,this.oi=u,this.ui=c,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!iW.D())throw new S(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iE(this,r),this.di=t+"main",this.serializer=new rS(o),this.wi=new ei(this.di,this.ui,new i$(this.serializer)),this.Bs=new im(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new ix(this.serializer),this.qs=new rL,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&w("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(T.FAILED_PRECONDITION,iQ);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new em(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iY(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(eo(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return iH(e).get("owner").next(e=>en.resolve(this.Ri(e)))}Pi(e){return iY(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=eB(e,"clientMetadata");return t.j().next(e=>{let n=this.Si(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return en.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this._i)for(let t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?en.resolve(!0):iH(e).get("owner").next(t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new S(T.FAILED_PRECONDITION,iQ);return!1}}return!(!this.networkEnabled||!this.inForeground)||iY(e).j().next(e=>void 0===this.Si(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&y("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new eU(e,em.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>iY(e).j().next(e=>this.Si(e,18e5).map(e=>e.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return io.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new r8(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return rq.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,n){var r;let i;y("IndexedDbPersistence","Starting transaction:",e);let s=15===(r=this.ui)?eq:14===r?eP:13===r?eP:12===r?eO:11===r?eL:void b();return this.wi.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new eU(r,this.Os?this.Os.next():em.ct),"readwrite-primary"===t?this.Ti(i).next(e=>!!e||this.Ei(i)).next(t=>{if(!t)throw w(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new S(T.FAILED_PRECONDITION,Z);return n(i)}).next(e=>this.vi(i).next(()=>e)):this.Oi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Oi(e){return iH(e).get("owner").next(e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new S(T.FAILED_PRECONDITION,iQ)})}vi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iH(e).put("owner",t)}static D(){return ei.D()}Ai(e){let t=iH(e);return t.get("owner").next(e=>this.Ri(e)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):en.resolve())}Vi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(w(`Detected an update time that is in the future: ${e} > ${n}`),!1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();let e=/(?:Version|Mobile)\/1[456]/;(0,l.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{let n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return y("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return w("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){w("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iH(e){return eB(e,"owner")}function iY(e){return eB(e,"clientMetadata")}function iX(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=nl(),r=nl();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new iJ(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next(i=>i||this.Gi(e,t,r,n)).next(n=>n||this.Qi(e,t))}Ki(e,t){if(tY(t))return en.resolve(null);let n=t1(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=t1(t=t5(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=nl(...r);return this.Ui.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,t5(t,null,"F")):this.Wi(e,s,t,n)}))})))}Gi(e,t,n,r){return tY(t)||r.isEqual(P.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next(i=>{let s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(g()<=o.in.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),t8(t)),this.Wi(e,s,t,H(r,-1)))})}ji(e,t){let n=new eW(t7(e));return t.forEach((t,r)=>{t9(e,r)&&(n=n.add(r))}),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return g()<=o.in.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",t8(t)),this.Ui.getDocumentsMatchingQuery(e,t,X.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new e$(M),this.Yi=new ne(e=>tz(e),tG),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iF(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}async function i1(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.tr(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=nl();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({er:e,removedBatchIds:i,addedBatchIds:s}))})})}function i2(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function i5(e,t,n){let r=nl(),i=nl();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=nt;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(P.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):y("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{nr:r,sr:i}})}function i4(e,t){return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Bs.getTargetData(n,t).next(i=>i?(r=i,en.resolve(r)):e.Bs.allocateTargetId(n).next(i=>(r=new rT(t,i,"TargetPurposeListen",n.currentSequenceNumber),e.Bs.addTargetData(n,r).next(()=>r))))}).then(n=>{let r=e.Ji.get(n.targetId);return(null===r||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(n.targetId,n),e.Yi.set(t,n.targetId)),n})}async function i3(e,t,n){let r=e.Ji.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!eo(e))throw e;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ji=e.Ji.remove(t),e.Yi.delete(r.target)}function i8(e,t,n){let r=P.min(),i=nl();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Yi.get(n);return void 0!==r?en.resolve(e.Ji.get(r)):e.Bs.getTargetData(t,n)})(e,s,t1(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Bs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Hi.getDocumentsMatchingQuery(s,t,n?r:P.min(),n?i:nl())).next(n=>(i7(e,t6(t),n),{documents:n,ir:i})))}function i9(e,t){let n=e.Bs,r=e.Ji.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n.le(e,t).next(e=>e?e.target:null))}function i6(e,t){let n=e.Xi.get(t)||P.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.Zi.getAllFromCollectionGroup(r,t,H(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(i7(e,t,n),n))}function i7(e,t,n){let r=e.Xi.get(t)||P.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Xi.set(t,r)}async function se(e,t,n,r){let i=nl(),s=nt;for(let e of n){let n=t.rr(e.metadata.name);e.document&&(i=i.add(n));let r=t.ur(e);r.setReadTime(t.cr(e.metadata.readTime)),s=s.insert(n,r)}let a=e.Zi.newChangeBuffer({trackRemovals:!0}),o=await i4(e,t1(tH(U.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>i5(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.Bs.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.Bs.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.nr,n.sr)).next(()=>n.nr)))}async function st(e,t,n=nl()){let r=await i4(e,t1(rR(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=ri(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return e.qs.saveNamedQuery(i,t);let a=r.withResumeToken(e0.EMPTY_BYTE_STRING,s);return e.Ji=e.Ji.insert(a.targetId,a),e.Bs.updateTargetData(i,a).next(()=>e.Bs.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>e.Bs.addMatchingKeys(i,n,r.targetId)).next(()=>e.qs.saveNamedQuery(i,t))})}function sn(e,t){return`firestore_clients_${e}_${t}`}function sr(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function si(e,t){return`firestore_targets_${e}_${t}`}class ss{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static ar(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new S(r.error.code,r.error.message)),s?new ss(e,t,r.state,i):(w("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}hr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sa{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ar(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new S(n.error.code,n.error.message)),i?new sa(e,n.state,r):(w("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class so{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=nu;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=ey(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new so(e,i):(w("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class sl{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new sl(t.clientId,t.onlineState):(w("SharedClientState",`Failed to parse online state: ${e}`),null)}}class su{constructor(){this.activeTargetIds=nu}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sc{constructor(e,t,n,r,i){var s,a,o;this.window=e,this.ii=t,this.persistenceKey=n,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new e$(M),this.started=!1,this.yr=[];let l=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=sn(this.persistenceKey,this.wr),this.Ir=(s=this.persistenceKey,`firestore_sequence_number_${s}`),this.gr=this.gr.insert(this.wr,new su),this.Tr=RegExp(`^firestore_clients_${l}_([^_]*)$`),this.Er=RegExp(`^firestore_mutations_${l}_(\\d+)(?:_(.*))?$`),this.Ar=RegExp(`^firestore_targets_${l}_(\\d+)$`),this.vr=(a=this.persistenceKey,`firestore_online_state_${a}`),this.Rr=(o=this.persistenceKey,`firestore_bundle_loaded_v2_${o}`),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){for(let e of(await this.syncEngine.$i())){if(e===this.wr)continue;let t=this.getItem(sn(this.persistenceKey,e));if(t){let n=so.ar(e,t);n&&(this.gr=this.gr.insert(n.clientId,n))}}this.Pr();let e=this.storage.getItem(this.vr);if(e){let t=this.br(e);t&&this.Vr(t)}for(let e of this.yr)this.mr(e);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,n){this.Dr(e,t,n),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(si(this.persistenceKey,e));if(n){let r=sa.ar(e,n);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(si(this.persistenceKey,e))}updateQueryState(e,t,n){this.kr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Cr(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){if(e.storageArea===this.storage){if(y("SharedClientState","EVENT",e.key,e.newValue),e.key===this.pr)return void w("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.Tr.test(e.key)){if(null==e.newValue){let t=this.Or(e.key);return this.Fr(t,null)}{let t=this.Br(e.key,e.newValue);if(t)return this.Fr(t.clientId,t)}}else if(this.Er.test(e.key)){if(null!==e.newValue){let t=this.Lr(e.key,e.newValue);if(t)return this.qr(t)}}else if(this.Ar.test(e.key)){if(null!==e.newValue){let t=this.Ur(e.key,e.newValue);if(t)return this.Kr(t)}}else if(e.key===this.vr){if(null!==e.newValue){let t=this.br(e.newValue);if(t)return this.Vr(t)}}else if(e.key===this.Ir){let t=function(e){let t=em.ct;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||b(),t=n}catch(e){w("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==em.ct&&this.sequenceNumberHandler(t)}else if(e.key===this.Rr){let t=this.Gr(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Qr(e)))}}}else this.yr.push(e)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,n){let r=new ss(this.currentUser,e,t,n),i=sr(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){let t=sr(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){let t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,n){let r=si(this.persistenceKey,e),i=new sa(e,t,n);this.setItem(r,i.hr())}$r(e){let t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){let t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){let n=this.Or(e);return so.ar(n,t)}Lr(e,t){let n=this.Er.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ss.ar(new d(i),r,t)}Ur(e,t){let n=Number(this.Ar.exec(e)[1]);return sa.ar(n,t)}br(e){return sl.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){let n=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.Wr(s,a).then(()=>{this.gr=n})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=nu;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class sh{constructor(){this.Hr=new su,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new su,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))e(0)}no(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sm=null;function sg(){return null===sm?sm=268435456+Math.round(2147483648*Math.random()):sm++,"0x"+sm.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sw="WebChannelConnection";class sv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){let s=sg(),a=this.To(e,t);y("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={};return this.Eo(o,r,i),this.Ao(e,a,o,n).then(t=>(y("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw v("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+f,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}To(e,t){let n=sp[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){let i=sg();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();y(sw,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:y(sw,`RPC '${e}' ${i} timed out`),a(new S(T.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(y(sw,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(t)>=0?t:T.UNKNOWN}(t.status);a(new S(e,t.message))}else a(new S(T.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new S(T.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{y(sw,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);y(sw,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Ro(e,t,n){let i=sg(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new u.zI({})),this.Eo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");y(sw,`Creating RPC '${e}' stream ${i}: ${h}`,l);let d=a.createWebChannel(h,l),f=!1,m=!1,g=new sy({ro:t=>{m?y(sw,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(y(sw,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),y(sw,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},oo:()=>d.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(d,u.ii.EventType.OPEN,()=>{m||y(sw,`RPC '${e}' stream ${i} transport opened.`)}),p(d,u.ii.EventType.CLOSE,()=>{m||(m=!0,y(sw,`RPC '${e}' stream ${i} transport closed`),g.wo())}),p(d,u.ii.EventType.ERROR,t=>{m||(m=!0,v(sw,`RPC '${e}' stream ${i} transport errored:`,t),g.wo(new S(T.UNAVAILABLE,"The operation could not be completed")))}),p(d,u.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||b();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){y(sw,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nG(t)}(t),s=a.message;void 0===n&&(n=T.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.wo(new S(n,s)),d.close()}else y(sw,`RPC '${e}' stream ${i} received:`,s),g._o(s)}}),p(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?y(sw,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.kN.NOPROXY&&y(sw,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){return"undefined"!=typeof window?window:null}function sb(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e){return new re(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();let t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,n,r,i,s,a,o){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new sT(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===T.RESOURCE_EXHAUSTED?(w(t.toString()),w("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===T.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;let e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Fo===t&&this.Zo(e,n)},t=>{e(()=>{let e=new S(T.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)})})}Zo(e,t){let n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(e=>{n(()=>this.tu(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sx extends sS{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:b(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||b(),e0.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||b(),e0.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new n2(s,a,o,l&&new S(void 0===l.code?T.UNKNOWN:nG(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=rl(e,r.document.name),s=ri(r.document.updateTime),a=r.document.createTime?ri(r.document.createTime):P.min(),o=new tw({mapValue:{fields:r.document.fields}}),l=tv.newFoundDocument(i,s,a,o);n=new n0(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=rl(e,r.document),s=r.readTime?ri(r.readTime):P.min(),a=tv.newNoDocument(i,s);n=new n0([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=rl(e,r.document);n=new n0([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return b();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nB(r,i);n=new n1(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return P.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?P.min():t.readTime?ri(t.readTime):P.min()}(e);return this.listener.nu(t,n)}su(e){let t={};t.database=rh(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tK(r)?{documents:ry(e,r)}:{query:rw(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=rr(e,t.resumeToken);let r=rt(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(P.min())>0){n.readTime=rn(e,t.snapshotVersion.toTimestamp());let r=rt(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){let t={};t.database=rh(this.serializer),t.removeTarget=e,this.Wo(t)}}class s_ extends sS{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||b(),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||b(),t.map(e=>{let t;return(t=e.updateTime?ri(e.updateTime):ri(n)).isEqual(P.min())&&(t=ri(n)),new nS(t,e.transformResults||[])})):[]),i=ri(e.commitTime);return this.listener.cu(i,r)}return e.writeResults&&0!==e.writeResults.length&&b(),this.ru=!0,this.listener.au()}hu(){let e={};e.database=rh(this.serializer),this.Wo(e)}uu(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rg(this.serializer,e))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new S(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(T.UNKNOWN,e.toString())})}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.vo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(T.UNKNOWN,e.toString())})}terminate(){this.lu=!0}}class sN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(w(t),this.mu=!1):y("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(e=>{n.enqueueAndForget(async()=>{sP(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.vu.add(4),await sk(e),e.bu.set("Unknown"),e.vu.delete(4),await sA(e)}(this))})}),this.bu=new sN(n,r)}}async function sA(e){if(sP(e))for(let t of e.Ru)await t(!0)}async function sk(e){for(let t of e.Ru)await t(!1)}function sR(e,t){e.Au.has(t.targetId)||(e.Au.set(t.targetId,t),sO(e)?sL(e):sZ(e).Ko()&&sV(e,t))}function sF(e,t){let n=sZ(e);e.Au.delete(t),n.Ko()&&sM(e,t),0===e.Au.size&&(n.Ko()?n.jo():sP(e)&&e.bu.set("Unknown"))}function sV(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}sZ(e).su(t)}function sM(e,t){e.Vu.qt(t),sZ(e).iu(t)}function sL(e){e.Vu=new n4({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),sZ(e).start(),e.bu.gu()}function sO(e){return sP(e)&&!sZ(e).Uo()&&e.Au.size>0}function sP(e){return 0===e.vu.size}async function sq(e){e.Au.forEach((t,n)=>{sV(e,t)})}async function sU(e,t){e.Vu=void 0,sO(e)?(e.bu.Iu(t),sL(e)):e.bu.set("Unknown")}async function sB(e,t,n){if(e.bu.set("Online"),t instanceof n2&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sz(e,n)}else if(t instanceof n0?e.Vu.Ht(t):t instanceof n1?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(P.min()))try{let t=await i2(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.Vu.ce(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(e0.EMPTY_BYTE_STRING,r.snapshotVersion)),sM(e,t);let i=new rT(r.target,t,n,r.sequenceNumber);sV(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){y("RemoteStore","Failed to raise snapshot:",t),await sz(e,t)}}async function sz(e,t,n){if(!eo(t))throw t;e.vu.add(1),await sk(e),e.bu.set("Offline"),n||(n=()=>i2(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await sA(e)})}function sG(e,t){return t().catch(n=>sz(e,n,t))}async function sK(e){let t=s0(e),n=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;sP(e)&&e.Eu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Eu.length&&t.jo();break}n=r.batchId,function(e,t){e.Eu.push(t);let n=s0(e);n.Ko()&&n.ou&&n.uu(t.mutations)}(e,r)}catch(t){await sz(e,t)}s$(e)&&sj(e)}function s$(e){return sP(e)&&!s0(e).Uo()&&e.Eu.length>0}function sj(e){s0(e).start()}async function sQ(e){s0(e).hu()}async function sW(e){let t=s0(e);for(let n of e.Eu)t.uu(n.mutations)}async function sH(e,t,n){let r=e.Eu.shift(),i=nq.from(r,t,n);await sG(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sK(e)}async function sY(e,t){t&&s0(e).ou&&await async function(e,t){var n;if(nz(n=t.code)&&n!==T.ABORTED){let n=e.Eu.shift();s0(e).Qo(),await sG(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sK(e)}}(e,t),s$(e)&&sj(e)}async function sX(e,t){e.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");let n=sP(e);e.vu.add(3),await sk(e),n&&e.bu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.vu.delete(3),await sA(e)}async function sJ(e,t){t?(e.vu.delete(2),await sA(e)):t||(e.vu.add(2),await sk(e),e.bu.set("Unknown"))}function sZ(e){var t,n,r;return e.Su||(e.Su=(t=e.datastore,n=e.asyncQueue,r={uo:sq.bind(null,e),ao:sU.bind(null,e),nu:sB.bind(null,e)},t.fu(),new sx(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ru.push(async t=>{t?(e.Su.Qo(),sO(e)?sL(e):e.bu.set("Unknown")):(await e.Su.stop(),e.Vu=void 0)})),e.Su}function s0(e){var t,n,r;return e.Du||(e.Du=(t=e.datastore,n=e.asyncQueue,r={uo:sQ.bind(null,e),ao:sY.bind(null,e),au:sW.bind(null,e),cu:sH.bind(null,e)},t.fu(),new s_(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ru.push(async t=>{t?(e.Du.Qo(),await sK(e)):(await e.Du.stop(),e.Eu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=new s1(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s2(e,t){if(w("AsyncQueue",`${t}: ${e}`),eo(e))return new S(T.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e){this.comparator=e?(t,n)=>e(t,n)||G.comparator(t.key,n.key):(e,t)=>G.comparator(e.key,t.key),this.keyedMap=nr(),this.sortedSet=new e$(this.comparator)}static emptySet(e){return new s5(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof s5)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new s5;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(){this.Cu=new e$(G.comparator)}track(e){let t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):b():this.Cu=this.Cu.insert(t,e)}xu(){let e=[];return this.Cu.inorderTraversal((t,n)=>{e.push(n)}),e}}class s3{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new s3(e,t,s5.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&t4(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(){this.Nu=void 0,this.listeners=[]}}class s9{constructor(){this.queries=new ne(e=>t3(e),t4),this.onlineState="Unknown",this.ku=new Set}}async function s6(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new s8),r)try{i.Nu=await e.onListen(n)}catch(n){let e=s2(n,`Initialization of query '${t8(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.Mu(e.onlineState),i.Nu&&t.$u(i.Nu)&&an(e)}async function s7(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function ae(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.$u(r)&&(n=!0);i.Nu=r}}n&&an(e)}function at(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function an(e){e.ku.forEach(e=>{e.next()})}class ar{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new s3(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){return!e.fromCache||(!this.options.Ku||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;let t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=s3.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.serializer=e}rr(e){return rl(this.serializer,e)}ur(e){return e.metadata.exists?rm(this.serializer,e.document,!1):tv.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return ri(e)}}class aa{constructor(e,t,n){this.ju=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ao(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;let n=U.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){let t=new Map,n=new as(this.serializer);for(let r of e)if(r.metadata.queries){let e=n.rr(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||nl()).add(e);t.set(n,r)}}return t}async complete(){let e=await se(this.localStore,new as(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(let e of this.queries)await st(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function ao(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.key=e}}class au{constructor(e){this.key=e}}class ac{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=nl(),this.mutatedKeys=nl(),this.tc=t7(e),this.ec=new s5(this.tc)}get nc(){return this.Yu}sc(e,t){let n=t?t.ic:new s4,r=t?t.ec:this.ec,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=t9(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.rc(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.tc(c,o)>0||l&&0>this.tc(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:a,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;let i=e.ic.xu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(e)-n(t)})(e.type,t.type)||this.tc(e.doc,t.doc)),this.oc(n);let s=t?this.uc():[],a=0===this.Zu.size&&this.current?1:0,o=a!==this.Xu;return(this.Xu=a,0!==i.length||o)?{snapshot:new s3(this.query,e.ec,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new s4,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(e=>this.Yu=this.Yu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Yu=this.Yu.delete(e)),this.current=e.current)}uc(){if(!this.current)return[];let e=this.Zu;this.Zu=nl(),this.ec.forEach(e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))});let t=[];return e.forEach(e=>{this.Zu.has(e)||t.push(new au(e))}),this.Zu.forEach(n=>{e.has(n)||t.push(new al(n))}),t}hc(e){this.Yu=e.ir,this.Zu=nl();let t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return s3.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class ah{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ad{constructor(e){this.key=e,this.fc=!1}}class af{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new ne(e=>t3(e),t4),this._c=new Map,this.mc=new Set,this.gc=new e$(G.comparator),this.yc=new Map,this.Ic=new iL,this.Tc={},this.Ec=new Map,this.Ac=id.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function am(e,t){let n,r;let i=az(e),s=i.wc.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.lc();else{let e=await i4(i.localStore,t1(t)),s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await ag(i,t,n,"current"===s,e.resumeToken),i.isPrimaryClient&&sR(i.remoteStore,e)}return r}async function ag(e,t,n,r,i){e.Rc=(t,n,r)=>(async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await i8(e.localStore,t.query,!1).then(({documents:e})=>t.view.sc(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return aN(e,t.targetId,a.cc),a.snapshot})(e,t,n,r);let s=await i8(e.localStore,t,!0),a=new ac(t,s.ir),o=a.sc(s.documents),l=nZ.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);aN(e,n,u.cc);let c=new ah(t,n,a);return e.wc.set(t,c),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function ap(e,t){let n=e.wc.get(t),r=e._c.get(n.targetId);if(r.length>1)return e._c.set(n.targetId,r.filter(e=>!t4(e,t))),void e.wc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await i3(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),sF(e.remoteStore,n.targetId),a_(e,n.targetId)}).catch(et)):(a_(e,n.targetId),await i3(e.localStore,n.targetId,!0))}async function ay(e,t,n){let r=aG(e);try{var i;let e;let s=await function(e,t){let n,r;let i=O.now(),s=t.reduce((e,t)=>e.add(t.key),nl());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=nt,l=nl();return e.Zi.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=nm(r.transform,e||null);null!=i&&(null===n&&(n=tw.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nR(e.key,t,function e(t){let n=[];return eG(t.fields,(t,r)=>{let i=new z([t]);if(tf(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eX(n)}(t.value.mapValue),nx.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:ni(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.Tc[r.currentUser.toKey()])||(e=new e$(M)),e=e.insert(i,n),r.Tc[r.currentUser.toKey()]=e,await aA(r,s.changes),await sK(r.remoteStore)}catch(t){let e=s2(t,"Failed to persist write");n.reject(e)}}async function aw(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.Zi.newChangeBuffer({trackRemovals:!0});r=e.Ji;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=r.get(o);if(!u)return;a.push(e.Bs.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Bs.addMatchingKeys(i,s.addedDocuments,o)));let c=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(e0.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(e.Bs.updateTargetData(i,c))});let o=nt,l=nl();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),a.push(i5(i,s,t.documentUpdates).next(e=>{o=e.nr,l=e.sr})),!n.isEqual(P.min())){let t=e.Bs.getLastRemoteSnapshotVersion(i).next(t=>e.Bs.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(t)}return en.waitFor(a).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,o,l)).next(()=>o)}).then(t=>(e.Ji=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.yc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||b(),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?r.fc||b():t.removedDocuments.size>0&&(r.fc||b(),r.fc=!1))}),await aA(e,n,t)}catch(e){await et(e)}}function av(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.wc.forEach((e,n)=>{let r=n.view.Mu(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.Mu(t)&&(n=!0)}),n&&an(r),i.length&&e.dc.nu(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function aI(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.yc.get(t),i=r&&r.key;if(i){let n=new e$(G.comparator);n=n.insert(i,tv.newNoDocument(i,P.min()));let r=nl().add(i),s=new nJ(P.min(),new Map,new e$(M),n,r);await aw(e,s),e.gc=e.gc.remove(i),e.yc.delete(t),aC(e)}else await i3(e.localStore,t,!1).then(()=>a_(e,t,n)).catch(et)}async function ab(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=en.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||b(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});ax(e,r,null),aS(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aA(e,i)}catch(e){await et(e)}}async function aE(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||b(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});ax(e,t,n),aS(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aA(e,i)}catch(e){await et(e)}}async function aT(e,t){var n;sP(e.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.Ec.get(r)||[];i.push(t),e.Ec.set(r,i)}catch(n){let e=s2(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function aS(e,t){(e.Ec.get(t)||[]).forEach(e=>{e.resolve()}),e.Ec.delete(t)}function ax(e,t,n){let r=e.Tc[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Tc[e.currentUser.toKey()]=r}}function a_(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e._c.get(t)))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(t=>{e.Ic.containsKey(t)||aD(e,t)})}function aD(e,t){e.mc.delete(t.path.canonicalString());let n=e.gc.get(t);null!==n&&(sF(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),aC(e))}function aN(e,t,n){for(let r of n)r instanceof al?(e.Ic.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(y("SyncEngine","New document in limbo: "+n),e.mc.add(r),aC(e))}(e,r)):r instanceof au?(y("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||aD(e,r.key)):b()}function aC(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){let t=e.mc.values().next().value;e.mc.delete(t);let n=new G(U.fromString(t)),r=e.Ac.next();e.yc.set(r,new ad(n)),e.gc=e.gc.insert(n,r),sR(e.remoteStore,new rT(t1(tH(n.path)),r,"TargetPurposeLimboResolution",em.ct))}}async function aA(e,t,n){let r=[],i=[],s=[];e.wc.isEmpty()||(e.wc.forEach((a,o)=>{s.push(e.Rc(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=iJ.Li(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.dc.nu(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>en.forEach(t,t=>en.forEach(t.Fi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>en.forEach(t.Bi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!eo(e))throw e;y("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Ji.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Ji=e.Ji.insert(t,i)}}}(e.localStore,i))}async function ak(e,t){var n;if(!e.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());let r=await i1(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ec.forEach(e=>{e.forEach(e=>{e.reject(new S(T.CANCELLED,n))})}),e.Ec.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await aA(e,r.er)}}function aR(e,t){let n=e.yc.get(t);if(n&&n.fc)return nl().add(n.key);{let n=nl(),r=e._c.get(t);if(!r)return n;for(let t of r){let r=e.wc.get(t);n=n.unionWith(r.view.nc)}return n}}async function aF(e,t){let n=await i8(e.localStore,t.query,!0),r=t.view.hc(n);return e.isPrimaryClient&&aN(e,t.targetId,r.cc),r}async function aV(e,t){return i6(e.localStore,t).then(t=>aA(e,t))}async function aM(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.Sn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):en.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await sK(e.remoteStore):"acknowledged"===n||"rejected"===n?(ax(e,t,r||null),aS(e,t),function(e,t){e.mutationQueue.Cn(t)}(e.localStore,t)):b(),await aA(e,i)):y("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aL(e,t){if(az(e),aG(e),!0===t&&!0!==e.vc){let t=e.sharedClientState.getAllActiveQueryTargets(),n=await aO(e,t.toArray());for(let t of(e.vc=!0,await sJ(e.remoteStore,!0),n))sR(e.remoteStore,t)}else if(!1===t&&!1!==e.vc){let t=[],n=Promise.resolve();e._c.forEach((r,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):n=n.then(()=>(a_(e,i),i3(e.localStore,i,!0))),sF(e.remoteStore,i)}),await n,await aO(e,t),e.yc.forEach((t,n)=>{sF(e.remoteStore,n)}),e.Ic.Ts(),e.yc=new Map,e.gc=new e$(G.comparator),e.vc=!1,await sJ(e.remoteStore,!1)}}async function aO(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e._c.get(n);if(s&&0!==s.length)for(let n of(t=await i4(e.localStore,t1(s[0])),s)){let t=e.wc.get(n),r=await aF(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await i9(e.localStore,n);t=await i4(e.localStore,r),await ag(e,aP(r),n,!1,t.resumeToken)}r.push(t)}return e.dc.nu(i),r}function aP(e){var t,n,r,i;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,new tW(t,n,r,i,e.limit,"F",e.startAt,e.endAt)}function aq(e){return e.localStore.persistence.$i()}async function aU(e,t,n,r){if(e.vc)return void y("SyncEngine","Ignoring unexpected query state notification.");let i=e._c.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await i6(e.localStore,t6(i[0])),s=nJ.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,e0.EMPTY_BYTE_STRING);await aA(e,r,s);break}case"rejected":await i3(e.localStore,t,!0),a_(e,t,r);break;default:b()}}async function aB(e,t,n){let r=az(e);if(r.vc){for(let e of t){if(r._c.has(e)){y("SyncEngine","Adding an already active target "+e);continue}let t=await i9(r.localStore,e),n=await i4(r.localStore,t);await ag(r,aP(t),n.targetId,!1,n.resumeToken),sR(r.remoteStore,n)}for(let e of n)r._c.has(e)&&await i3(r.localStore,e,!1).then(()=>{sF(r.remoteStore,e),a_(r,e)}).catch(et)}}function az(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=aw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aI.bind(null,e),e.dc.nu=ae.bind(null,e.eventManager),e.dc.Pc=at.bind(null,e.eventManager),e}function aG(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aE.bind(null,e),e}class aK{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sE(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new i0(t,new iZ,e.initialUser,this.serializer)}createPersistence(e){return new iz(iK.zs,this.serializer)}createSharedClientState(e){return new sh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class a$ extends aK{constructor(e,t,n){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await aG(this.Vc.syncEngine),await sK(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t;return t=this.persistence,new i0(t,new iZ,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){return new iI(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new ef(t,this.persistence);return new ed(e.asyncQueue,n)}createPersistence(e){let t=iX(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ii.withCacheSize(this.cacheSizeBytes):ii.DEFAULT;return new iW(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,sI(),sb(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new sh}}class aj extends a${constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Vc.syncEngine;this.sharedClientState instanceof sc&&(this.sharedClientState.syncEngine={jr:aM.bind(null,t),zr:aU.bind(null,t),Wr:aB.bind(null,t),$i:aq.bind(null,t),Qr:aV.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async e=>{await aL(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=sI();if(!sc.D(t))throw new S(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=iX(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class aQ{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>av(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ak.bind(null,this.syncEngine),await sJ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s9}createDatastore(e){let t=sE(e.databaseInfo.databaseId),n=new sv(e.databaseInfo);return new sD(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new sC(t,this.datastore,e.asyncQueue,e=>av(this.syncEngine,e,0),sf.D()?new sf:new sd)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new af(e,t,n,r,i,s);return a&&(o.vc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){y("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await sk(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aW(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):w("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aY{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new x,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.Gu)}`))},e=>this.metadata.reject(e))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){let e=await this.kc();if(null===e)return null;let t=this.xc.decode(e),n=Number(t);return isNaN(n)&&this.Mc(`length string (${t}) is not valid number`),new ai(JSON.parse(await this.$c(n)),e.length+n)}Oc(){return this.buffer.findIndex(e=>123===e)}async kc(){for(;0>this.Oc()&&!await this.Fc(););if(0===this.buffer.length)return null;let e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");let t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),Error(`Invalid bundle format: ${e}`)}async Fc(){let e=await this.Cc.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aX{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let n=rh(e.serializer)+"/documents",r={documents:t.map(t=>ro(e.serializer,t))},i=await e.vo("BatchGetDocuments",n,r,t.length),s=new Map;i.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||b(),t.found.name,t.found.updateTime;let n=rl(e,t.found.name),r=ri(t.found.updateTime),i=t.found.createTime?ri(t.found.createTime):P.min(),s=new tw({mapValue:{fields:t.found.fields}});return tv.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||b(),t.readTime||b();let n=rl(e,t.missing),r=ri(t.readTime);return tv.newNoDocument(n,r)}(n,t):b());s.set(r.key.toString(),r)});let a=[];return t.forEach(e=>{let t=s.get(e.toString());t||b(),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nL(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=G.fromPath(t);this.mutations.push(new nO(n,this.precondition(n)))}),await async function(e,t){let n=rh(e.serializer)+"/documents",r={writes:t.map(t=>rg(e.serializer,t))};await e.Io("Commit",n,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=P.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new S(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?nx.exists(!1):nx.updateTime(t):nx.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new S(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nx.updateTime(t)}return nx.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aJ{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new sT(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{let e=new aX(this.datastore),t=this.qc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Uc(e)}))}).catch(e=>{this.Uc(e)})})}qc(e){try{let t=this.updateFunction(e);return!eg(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nz(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aZ{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=V.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{y("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(y("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s2(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function a0(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await i1(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function a1(e,t){e.asyncQueue.verifyOperationInProgress();let n=await a5(e);y("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>sX(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sX(t.remoteStore,n)),e._onlineComponents=t}function a2(e){return"FirebaseError"===e.name?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function a5(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await a0(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!a2(t))throw t;v("Error using user provided cache. Falling back to memory cache: "+t),await a0(e,new aK)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await a0(e,new aK)}return e._offlineComponents}async function a4(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await a1(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await a1(e,new aQ))),e._onlineComponents}function a3(e){return a5(e).then(e=>e.persistence)}function a8(e){return a5(e).then(e=>e.localStore)}function a9(e){return a4(e).then(e=>e.remoteStore)}function a6(e){return a4(e).then(e=>e.syncEngine)}async function a7(e){let t=await a4(e),n=t.eventManager;return n.onListen=am.bind(null,t.syncEngine),n.onUnlisten=ap.bind(null,t.syncEngine),n}function oe(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aH({next:s=>{t.enqueueAndForget(()=>s7(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new S(T.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new S(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new ar(tH(n.path),s,{includeMetadataChanges:!0,Ku:!0});return s6(e,a)})(await a7(e),e.asyncQueue,t,n,r)),r.promise}function ot(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new ar(n,new aH({next:n=>{t.enqueueAndForget(()=>s7(e,s)),n.fromCache&&"server"===r.source?i.reject(new S(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,Ku:!0});return s6(e,s)})(await a7(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,t,n){if(!n)throw new S(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function os(e,t,n,r){if(!0===t&&!0===r)throw new S(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function oa(e){if(!G.isDocumentKey(e))throw new S(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oo(e){if(G.isDocumentKey(e))throw new S(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ol(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":b()}function ou(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ol(e);throw new S(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function oc(e,t){if(t<=0)throw new S(T.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new S(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}os("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=on(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new S(T.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new S(T.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new S(T.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class od{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new D;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=or.get(e);t&&(y("ComponentProvider","Removing Datastore"),or.delete(e),t.terminate())}(this),Promise.resolve()}}function of(e,t,n,r={}){var i;let s=(e=ou(e,od))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&v("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new S(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new N(new _(t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new op(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new om(this.firestore,e,this._key)}}class og{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new og(this.firestore,e,this._query)}}class op extends og{constructor(e,t,n){super(e,t,tH(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new om(this.firestore,null,new G(e))}withConverter(e){return new op(this.firestore,e,this._path)}}function oy(e,t,...n){if(e=(0,l.m9)(e),oi("collection","path",t),e instanceof od){let r=U.fromString(t,...n);return oo(r),new op(e,null,r)}{if(!(e instanceof om||e instanceof op))throw new S(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return oo(r),new op(e.firestore,null,r)}}function ow(e,t){if(e=ou(e,od),oi("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new S(T.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new og(e,null,new tW(U.emptyPath(),t))}function ov(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=V.A()),oi("doc","path",t),e instanceof od){let r=U.fromString(t,...n);return oa(r),new om(e,null,new G(r))}{if(!(e instanceof om||e instanceof op))throw new S(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return oa(r),new om(e.firestore,e instanceof op?e.converter:null,new G(r))}}function oI(e,t){return e=(0,l.m9)(e),t=(0,l.m9)(t),(e instanceof om||e instanceof op)&&(t instanceof om||t instanceof op)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function ob(e,t){return e=(0,l.m9)(e),t=(0,l.m9)(t),e instanceof og&&t instanceof og&&e.firestore===t.firestore&&t4(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new sT(this,"async_queue_retry"),this.Xc=()=>{let e=sb();e&&y("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};let e=sb();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;let t=sb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});let t=new x;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!eo(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){let t=this.Gc.then(()=>(this.Hc=!0,e().catch(e=>{let t;throw this.Wc=e,this.Hc=!1,w("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Hc=!1,e))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);let r=s1.createAndSchedule(this,e,t,n,e=>this.na(e));return this.zc.push(r),r}Zc(){this.Wc&&b()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(let t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{for(let t of(this.zc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.zc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){let t=this.zc.indexOf(e);this.zc.splice(t,1)}}function oT(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class oS{constructor(){this._progressObserver={},this._taskCompletionResolver=new x,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ox=-1;class o_ extends od{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oE,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oC(this),this._firestoreClient.terminate()}}function oD(e,t){let n="object"==typeof e?e:(0,s.getApp)(),r=(0,s._getProvider)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,l.P0)("firestore");e&&of(r,...e)}return r}function oN(e){return e._firestoreClient||oC(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oC(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new e6(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,on(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new aZ(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function oA(e,t){oq(e=ou(e,o_));let n=oN(e);if(n._uninitializedComponentsProvider)throw new S(T.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings(),i=new aQ;return oR(n,i,new a$(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function ok(e){oq(e=ou(e,o_));let t=oN(e);if(t._uninitializedComponentsProvider)throw new S(T.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings(),r=new aQ;return oR(t,r,new aj(r,n.cacheSizeBytes))}function oR(e,t,n){let r=new x;return e.asyncQueue.enqueue(async()=>{try{await a0(e,n),await a1(e,t),r.resolve()}catch(e){if(!a2(e))throw e;v("Error enabling indexeddb cache. Falling back to memory cache: "+e),r.reject(e)}}).then(()=>r.promise)}function oF(e){if(e._initialized&&!e._terminated)throw new S(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new x;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ei.D())return Promise.resolve();await ei.delete(e+"main")}(iX(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function oV(e){return function(e){let t=new x;return e.asyncQueue.enqueueAndForget(async()=>aT(await a6(e),t)),t.promise}(oN(e=ou(e,o_)))}function oM(e){var t;return(t=oN(e=ou(e,o_))).asyncQueue.enqueue(async()=>{let e=await a3(t),n=await a9(t);return e.setNetworkEnabled(!0),n.vu.delete(0),sA(n)})}function oL(e){var t;return(t=oN(e=ou(e,o_))).asyncQueue.enqueue(async()=>{let e=await a3(t),n=await a9(t);return e.setNetworkEnabled(!1),async function(e){e.vu.add(0),await sk(e),e.bu.set("Offline")}(n)})}function oO(e,t){let n=oN(e=ou(e,o_)),r=new oS;return function(e,t,n,r){var i;let s=(i=sE(t),new aY(function(e,t){if(e instanceof Uint8Array)return aW(e,void 0);if(e instanceof ArrayBuffer)return aW(new Uint8Array(e),void 0);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?nj().encode(n):n),i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=ri(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.qs.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(ao(i));let s=new aa(i,e.localStore,t.serializer),a=await t.bc();for(;a;){let e=await s.zu(a);e&&n._updateProgress(e),a=await t.bc()}let o=await s.complete();return await aA(e,o.Ju,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.qs.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o.Hu)}catch(e){return v("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await a6(e),s,r)})}(n,e._databaseId,t,r),r}function oP(e,t){var n;return(n=oN(e=ou(e,o_))).asyncQueue.enqueue(async()=>{var e;return(e=await a8(n)).persistence.runTransaction("Get named query","readonly",n=>e.qs.getNamedQuery(n,t))}).then(t=>t?new og(e,null,t.query):null)}function oq(e){if(e._initialized||e._terminated)throw new S(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oU(e0.fromBase64String(e))}catch(e){throw new S(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oU(e0.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oz{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oK=/^__.*__$/;class o${constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nR(e,this.data,this.fieldMask,t,this.fieldTransforms):new nk(e,this.data,t,this.fieldTransforms)}}class oj{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nR(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oQ(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class oW{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new oW(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return li(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(oQ(this.ca)&&oK.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class oH{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sE(e)}ya(e,t,n,r=!1){return new oW({ca:e,methodName:t,ga:n,path:z.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oY(e){let t=e._freezeSettings(),n=sE(e._databaseId);return new oH(e._databaseId,!!t.ignoreUndefinedProperties,n)}function oX(e,t,n,r,i,s={}){let a,o;let l=e.ya(s.merge||s.mergeFields?2:0,t,n,i);le("Data must be an object, but it was:",l,r);let u=o6(r,l);if(s.merge)a=new eX(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=lt(t,r,n);if(!l.contains(i))throw new S(T.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ls(e,i)||e.push(i)}a=new eX(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new o$(new tw(u),a,o)}class oJ extends oz{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oJ}}function oZ(e,t,n){return new oW({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class o0 extends oz{_toFieldTransform(e){return new nT(e.path,new ng)}isEqual(e){return e instanceof o0}}class o1 extends oz{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){let t=oZ(this,e,!0),n=new np(this.pa.map(e=>o9(e,t)));return new nT(e.path,n)}isEqual(e){return this===e}}class o2 extends oz{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){let t=oZ(this,e,!0),n=new nw(this.pa.map(e=>o9(e,t)));return new nT(e.path,n)}isEqual(e){return this===e}}class o5 extends oz{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){let t=new nI(e.serializer,nd(e.serializer,this.Ia));return new nT(e.path,t)}isEqual(e){return this===e}}function o4(e,t,n,r){let i=e.ya(1,t,n);le("Data must be an object, but it was:",i,r);let s=[],a=tw.empty();return eG(r,(e,r)=>{let o=lr(t,e,n);r=(0,l.m9)(r);let u=i.da(o);if(r instanceof oJ)s.push(o);else{let e=o9(r,u);null!=e&&(s.push(o),a.set(o,e))}}),new oj(a,new eX(s),i.fieldTransforms)}function o3(e,t,n,r,i,s){let a=e.ya(1,t,n),o=[lt(t,r,n)],u=[i];if(s.length%2!=0)throw new S(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(lt(t,s[e])),u.push(s[e+1]);let c=[],h=tw.empty();for(let e=o.length-1;e>=0;--e)if(!ls(c,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.da(t);if(n instanceof oJ)c.push(t);else{let e=o9(n,r);null!=e&&(c.push(t),h.set(t,e))}}return new oj(h,new eX(c),a.fieldTransforms)}function o8(e,t,n,r=!1){return o9(n,e.ya(r?4:3,t))}function o9(e,t){if(o7(e=(0,l.m9)(e)))return le("Unsupported field value:",t,e),o6(e,t);if(e instanceof oz)return function(e,t){if(!oQ(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=o9(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nd(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=O.fromDate(e);return{timestampValue:rn(t.serializer,n)}}if(e instanceof O){let n=new O(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rn(t.serializer,n)}}if(e instanceof oG)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oU)return{bytesValue:rr(t.serializer,e._byteString)};if(e instanceof om){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rs(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${ol(e)}`)}(e,t)}function o6(e,t){let n={};return eK(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eG(e,(e,r)=>{let i=o9(r,t.ha(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function o7(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof O||e instanceof oG||e instanceof oU||e instanceof om||e instanceof oz)}function le(e,t,n){if(!o7(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ol(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function lt(e,t,n){if((t=(0,l.m9)(t))instanceof oB)return t._internalPath;if("string"==typeof t)return lr(e,t);throw li("Field path arguments must be of type string or ",e,!1,void 0,n)}let ln=RegExp("[~\\*/\\[\\]]");function lr(e,t,n){if(t.search(ln)>=0)throw li(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oB(...t.split("."))._internalPath}catch(r){throw li(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function li(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new S(T.INVALID_ARGUMENT,o+e+l)}function ls(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new om(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ll("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lo extends la{data(){return super.data()}}function ll(e,t){return"string"==typeof t?lr(e,t):t instanceof oB?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lc{}class lh extends lc{}function ld(e,t,...n){let r=[];for(let i of(t instanceof lc&&r.push(t),function(e){let t=e.filter(e=>e instanceof lg).length,n=e.filter(e=>e instanceof lf).length;if(t>1||t>0&&n>0)throw new S(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class lf extends lh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lf(e,t,n)}_apply(e){let t=this._parse(e);return lR(e._query,t),new og(e.firestore,e.converter,t2(e._query,t))}_parse(e){let t=oY(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new S(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lk(a,s);let t=[];for(let n of a)t.push(lA(r,e,n));o={arrayValue:{values:t}}}else o=lA(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lk(a,s),o=o8(n,t,a,"in"===s||"not-in"===s);return tx.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lm(e,t,n){let r=ll("where",e);return lf._create(r,t,n)}class lg extends lc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lg(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:t_.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())lR(n,e),n=t2(n,e)}(e._query,t),new og(e.firestore,e.converter,t2(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function lp(...e){return e.forEach(e=>lV("or",e)),lg._create("or",e)}function ly(...e){return e.forEach(e=>lV("and",e)),lg._create("and",e)}class lw extends lh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lw(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new S(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new S(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new tT(t,n);return function(e,t){if(null===tX(e)){let n=tJ(e);null!==n&&lF(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new og(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tW(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function lv(e,t="asc"){let n=ll("orderBy",e);return lw._create(n,t)}class lI extends lh{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new lI(e,t,n)}_apply(e){return new og(e.firestore,e.converter,t5(e._query,this._limit,this._limitType))}}function lb(e){return oc("limit",e),lI._create("limit",e,"F")}function lE(e){return oc("limitToLast",e),lI._create("limitToLast",e,"L")}class lT extends lh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lT(e,t,n)}_apply(e){var t;let n=lC(e,this.type,this._docOrFields,this._inclusive);return new og(e.firestore,e.converter,new tW((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt))}}function lS(...e){return lT._create("startAt",e,!0)}function lx(...e){return lT._create("startAfter",e,!1)}class l_ extends lh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new l_(e,t,n)}_apply(e){var t;let n=lC(e,this.type,this._docOrFields,this._inclusive);return new og(e.firestore,e.converter,new tW((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n))}}function lD(...e){return l_._create("endBefore",e,!1)}function lN(...e){return l_._create("endAt",e,!0)}function lC(e,t,n,r){if(n[0]=(0,l.m9)(n[0]),n[0]instanceof la)return function(e,t,n,r,i){if(!r)throw new S(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of t0(e))if(n.field.isKeyField())s.push(tl(t,r.key));else{let e=r.data.field(n.field);if(e3(e))throw new S(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new S(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new tI(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=oY(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new S(T.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new S(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!tZ(e)&&-1!==l.indexOf("/"))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(U.fromString(l));if(!G.isDocumentKey(n))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new G(n);o.push(tl(t,i))}else{let e=o8(n,r,l);o.push(e)}}return new tI(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function lA(e,t,n){if("string"==typeof(n=(0,l.m9)(n))){if(""===n)throw new S(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tZ(t)&&-1!==n.indexOf("/"))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(U.fromString(n));if(!G.isDocumentKey(r))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tl(e,new G(r))}if(n instanceof om)return tl(e,n._key);throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ol(n)}.`)}function lk(e,t){if(!Array.isArray(e)||0===e.length)throw new S(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lR(e,t){if(t.isInequality()){let n=tJ(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new S(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=tX(e);null!==i&&lF(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new S(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function lF(e,t,n){if(!n.isEqual(t))throw new S(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}function lV(e,t){if(!(t instanceof lf||t instanceof lg))throw new S(T.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class lM{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e5(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(e4(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eG(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oG(e5(e.latitude),e5(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=e8(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(e9(e));default:return null}}convertTimestamp(e){let t=e2(e);return new O(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=U.fromString(e);rE(n)||b();let r=new e7(n.get(1),n.get(3)),i=new G(n.popFirst(5));return r.isEqual(t)||w(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class lO extends lM{constructor(e){super(),this.firestore=e}convertBytes(e){return new oU(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new om(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lq extends la{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lU(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(ll("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lU extends lq{data(e={}){return super.data(e)}}class lB{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lP(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lU(this._firestore,this._userDataWriter,n.key,n,new lP(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lU(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lP(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lU(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lP(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lz(e,t){return e instanceof lq&&t instanceof lq?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lB&&t instanceof lB&&e._firestore===t._firestore&&ob(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lG(e){e=ou(e,om);let t=ou(e.firestore,o_);return oe(oN(t),e._key).then(n=>l5(t,e,n))}class lK extends lM{constructor(e){super(),this.firestore=e}convertBytes(e){return new oU(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new om(this.firestore,null,t)}}function l$(e){e=ou(e,om);let t=ou(e.firestore,o_),n=oN(t),r=new lK(t);return(function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new S(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=s2(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await a8(e),t,n)),n.promise})(n,e._key).then(n=>new lq(t,r,e._key,n,new lP(null!==n&&n.hasLocalMutations,!0),e.converter))}function lj(e){e=ou(e,om);let t=ou(e.firestore,o_);return oe(oN(t),e._key,{source:"server"}).then(n=>l5(t,e,n))}function lQ(e){e=ou(e,og);let t=ou(e.firestore,o_),n=oN(t),r=new lK(t);return lu(e._query),ot(n,e._query).then(n=>new lB(t,r,e,n))}function lW(e){e=ou(e,og);let t=ou(e.firestore,o_),n=oN(t),r=new lK(t);return(function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await i8(e,t,!0),i=new ac(t,r.ir),s=i.sc(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=s2(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await a8(e),t,n)),n.promise})(n,e._query).then(n=>new lB(t,r,e,n))}function lH(e){e=ou(e,og);let t=ou(e.firestore,o_),n=oN(t),r=new lK(t);return ot(n,e._query,{source:"server"}).then(n=>new lB(t,r,e,n))}function lY(e,t,n){e=ou(e,om);let r=ou(e.firestore,o_),i=lL(e.converter,t,n);return l2(r,[oX(oY(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nx.none())])}function lX(e,t,n,...r){e=ou(e,om);let i=ou(e.firestore,o_),s=oY(i);return l2(i,[("string"==typeof(t=(0,l.m9)(t))||t instanceof oB?o3(s,"updateDoc",e._key,t,n,r):o4(s,"updateDoc",e._key,t)).toMutation(e._key,nx.exists(!0))])}function lJ(e){return l2(ou(e.firestore,o_),[new nL(e._key,nx.none())])}function lZ(e,t){let n=ou(e.firestore,o_),r=ov(e),i=lL(e.converter,t);return l2(n,[oX(oY(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nx.exists(!1))]).then(()=>r)}function l0(e,...t){var n,r,i;let s,a,o;e=(0,l.m9)(e);let u={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||oT(t[c])||(u=t[c],c++);let h={includeMetadataChanges:u.includeMetadataChanges};if(oT(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof om)a=ou(e.firestore,o_),o=tH(e._key.path),s={next:n=>{t[c]&&t[c](l5(a,e,n))},error:t[c+1],complete:t[c+2]};else{let n=ou(e,og);a=ou(n.firestore,o_),o=n._query;let r=new lK(a);s={next:e=>{t[c]&&t[c](new lB(a,r,n,e))},error:t[c+1],complete:t[c+2]},lu(e._query)}return function(e,t,n,r){let i=new aH(r),s=new ar(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>s6(await a7(e),s)),()=>{i.Dc(),e.asyncQueue.enqueueAndForget(async()=>s7(await a7(e),s))}}(oN(a),o,h,s)}function l1(e,t){return function(e,t){let n=new aH(t);return e.asyncQueue.enqueueAndForget(async()=>{(await a7(e)).ku.add(n),n.next()}),()=>{n.Dc(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.ku.delete(t)})(await a7(e),n))}}(oN(e=ou(e,o_)),oT(t)?t:{next:t})}function l2(e,t){return function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>ay(await a6(e),t,n)),n.promise}(oN(e),t)}function l5(e,t,n){let r=n.docs.get(t._key),i=new lK(e);return new lq(e,i,t._key,r,new lP(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l4={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oY(e)}set(e,t,n){this._verifyNotCommitted();let r=l8(e,this._firestore),i=lL(r.converter,t,n),s=oX(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nx.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=l8(e,this._firestore);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oB?o3(this._dataReader,"WriteBatch.update",s._key,t,n,r):o4(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nx.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=l8(e,this._firestore);return this._mutations=this._mutations.concat(new nL(t._key,nx.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function l8(e,t){if((e=(0,l.m9)(e)).firestore!==t)throw new S(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l9 extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oY(e)}get(e){let t=l8(e,this._firestore),n=new lO(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return b();let r=e[0];if(r.isFoundDocument())return new la(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new la(this._firestore,n,t._key,null,t.converter);throw b()})}set(e,t,n){let r=l8(e,this._firestore),i=lL(r.converter,t,n),s=oX(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=l8(e,this._firestore);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oB?o3(this._dataReader,"Transaction.update",s._key,t,n,r):o4(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=l8(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=l8(e,this._firestore),n=new lK(this._firestore);return super.get(e).then(e=>new lq(this._firestore,n,t._key,e._document,new lP(!1,!1),t.converter))}}function l6(e,t,n){e=ou(e,o_);let r=Object.assign(Object.assign({},l4),n);return!function(e){if(e.maxAttempts<1)throw new S(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>{let i=await a4(e).then(e=>e.datastore);new aJ(e.asyncQueue,i,n,t,r).run()}),r.promise}(oN(e),n=>t(new l9(e,n)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l7(){return new oJ("deleteField")}function ue(){return new o0("serverTimestamp")}function ut(...e){return new o1("arrayUnion",e)}function un(...e){return new o2("arrayRemove",e)}function ur(e){return new o5("increment",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){return oN(e=ou(e,o_)),new l3(e,t=>l2(e,t))}!function(e,t=!0){f=s.SDK_VERSION,(0,s._registerComponent)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new o_(new C(e.getProvider("auth-internal")),new F(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new e7(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(h,"3.13.0",void 0),(0,s.registerVersion)(h,"3.13.0","esm2017")}()}}]);