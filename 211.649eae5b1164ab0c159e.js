(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{ECCn:function(e,n){var t={exports:{}};function i(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];"object"!=typeof t||Object.isFrozen(t)||i(t)}),e}t.exports=i,t.exports.default=i;var o=t.exports;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...n){const t=Object.create(null);for(const i in e)t[i]=e[i];return n.forEach(function(e){for(const n in e)t[n]=e[n]}),t}const c=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!c(e))return;let n=e.kind;n=e.sublanguage?`language-${n}`:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((e,n)=>`${e}${"_".repeat(n+1)}`)].join(" ")}return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{u._collapse(e)}))}}class g extends u{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function d(e){return e?"string"==typeof e?e:e.source:null}function h(e){return b("(?=",e,")")}function f(e){return b("(?:",e,")*")}function p(e){return b("(?:",e,")?")}function b(...e){return e.map(e=>d(e)).join("")}function m(...e){return"("+(function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map(e=>d(e)).join("|")+")"}function w(e){return new RegExp(e.toString()+"|").exec("").length-1}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(e,{joinWith:n}){let t=0;return e.map(e=>{t+=1;const n=t;let i=d(e),o="";for(;i.length>0;){const e=E.exec(i);if(!e){o+=i;break}o+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+n):(o+=e[0],"("===e[0]&&t++)}return o}).map(e=>`(${e})`).join(n)}const y="[a-zA-Z]\\w*",_="[a-zA-Z_]\\w*",k="\\b\\d+(\\.\\d+)?",O="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",N={begin:"\\\\[\\s\\S]",relevance:0},M={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[N]},S={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[N]},R=function(e,n,t={}){const i=a({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=m("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:b(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},A=R("//","$"),j=R("/\\*","\\*/"),I=R("#","$");var T=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:y,UNDERSCORE_IDENT_RE:_,NUMBER_RE:k,C_NUMBER_RE:O,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=b(n,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:N,APOS_STRING_MODE:M,QUOTE_STRING_MODE:S,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:R,C_LINE_COMMENT_MODE:A,C_BLOCK_COMMENT_MODE:j,HASH_COMMENT_MODE:I,NUMBER_MODE:{scope:"number",begin:k,relevance:0},C_NUMBER_MODE:{scope:"number",begin:O,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:v,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[N,{begin:/\[/,end:/\]/,relevance:0,contains:[N]}]}]},TITLE_MODE:{scope:"title",begin:y,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:_,relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function L(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function B(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function H(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=L,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function C(e,n){Array.isArray(e.illegal)&&(e.illegal=m(...e.illegal))}function D(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function P(e,n){void 0===e.relevance&&(e.relevance=1)}const $=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(n=>{delete e[n]}),e.keywords=t.keywords,e.begin=b(t.beforeMatch,h(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},U=["of","and","for","in","not","or","if","then","parent","list","value"];function z(e,n,t="keyword"){const i=Object.create(null);return"string"==typeof e?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach(function(t){Object.assign(i,z(e[t],n,t))}),i;function o(e,t){n&&(t=t.map(e=>e.toLowerCase())),t.forEach(function(n){const t=n.split("|");i[t[0]]=[e,K(t[0],t[1])]})}}function K(e,n){return n?Number(n):function(e){return U.includes(e.toLowerCase())}(e)?0:1}const W={},X=e=>{console.error(e)},G=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Z=(e,n)=>{W[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),W[`${e}/${n}`]=!0)},F=new Error;function J(e,n,{key:t}){let i=0;const o=e[t],r={},s={};for(let a=1;a<=n.length;a++)s[a+i]=o[a],r[a+i]=!0,i+=w(n[a-1]);e[t]=s,e[t]._emit=r,e[t]._multi=!0}function V(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw X("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),F;if("object"!=typeof e.beginScope||null===e.beginScope)throw X("beginScope must be object"),F;J(e,e.begin,{key:"beginScope"}),e.begin=x(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw X("skip, excludeEnd, returnEnd not compatible with endScope: {}"),F;if("object"!=typeof e.endScope||null===e.endScope)throw X("endScope must be object"),F;J(e,e.end,{key:"endScope"}),e.end=x(e.end,{joinWith:""})}}(e)}function q(e){function n(n,t){return new RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=w(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(x(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),function t(o,r){const s=o;if(o.isCompiled)return s;[B,D,V,$].forEach(e=>e(o,r)),e.compilerExtensions.forEach(e=>e(o,r)),o.__beforeBegin=null,[H,C,P].forEach(e=>e(o,r)),o.isCompiled=!0;let c=null;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=z(o.keywords,e.case_insensitive)),s.keywordPatternRe=n(c,!0),r&&(o.begin||(o.begin=/\B|\b/),s.beginRe=n(s.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(s.endRe=n(s.end)),s.terminatorEnd=d(s.end)||"",o.endsWithParent&&r.terminatorEnd&&(s.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(s.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return a(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Y(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}("self"===e?o:e)})),o.contains.forEach(function(e){t(e,s)}),o.starts&&t(o.starts,r),s.matcher=function(e){const n=new i;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(s),s}(e)}function Y(e){return!!e&&(e.endsWithParent||Y(e.starts))}class Q extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const ee=s,ne=a,te=Symbol("nomatch");var ie=function(e){const n=Object.create(null),t=Object.create(null),i=[];let s=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function u(e){return l.noHighlightRe.test(e)}function d(e,n,t){let i="",o="";"object"==typeof n?(i=e,t=n.ignoreIllegals,o=n.language):(Z("10.7.0","highlight(lang, code, ...args) has been deprecated."),Z("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,i=n),void 0===t&&(t=!0);const r={code:i,language:o};N("before:highlight",r);const s=r.result?r.result:w(r.language,r.code,t);return s.code=r.code,N("after:highlight",s),s}function w(e,t,i,o){const c=Object.create(null);function u(){if(!v.keywords)return void M.addText(S);let e=0;v.keywordPatternRe.lastIndex=0;let n=v.keywordPatternRe.exec(S),t="";for(;n;){t+=S.substring(e,n.index);const i=y.case_insensitive?n[0].toLowerCase():n[0],o=v.keywords[i];if(o){const[e,r]=o;M.addText(t),t="",c[i]=(c[i]||0)+1,c[i]<=7&&(R+=r),e.startsWith("_")?t+=n[0]:M.addKeyword(n[0],y.classNameAliases[e]||e)}else t+=n[0];e=v.keywordPatternRe.lastIndex,n=v.keywordPatternRe.exec(S)}t+=S.substr(e),M.addText(t)}function g(){null!=v.subLanguage?function(){if(""===S)return;let e=null;if("string"==typeof v.subLanguage){if(!n[v.subLanguage])return void M.addText(S);e=w(v.subLanguage,S,!0,N[v.subLanguage]),N[v.subLanguage]=e._top}else e=E(S,v.subLanguage.length?v.subLanguage:null);v.relevance>0&&(R+=e.relevance),M.addSublanguage(e._emitter,e.language)}():u(),S=""}function d(e,n){let t=1;const i=n.length-1;for(;t<=i;){if(!e._emit[t]){t++;continue}const i=y.classNameAliases[e[t]]||e[t],o=n[t];i?M.addKeyword(o,i):(S=o,u(),S=""),t++}}function h(e,n){return e.scope&&"string"==typeof e.scope&&M.openNode(y.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(M.addKeyword(S,y.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),S=""):e.beginScope._multi&&(d(e.beginScope,n),S="")),v=Object.create(e,{parent:{value:v}}),v}function f(e,n,t){let i=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(i){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return f(e.parent,n,t)}function p(e){return 0===v.matcher.regexIndex?(S+=e[0],1):(I=!0,0)}function b(e){const n=e[0],i=t.substr(e.index),o=f(v,e,i);if(!o)return te;const r=v;v.endScope&&v.endScope._wrap?(g(),M.addKeyword(n,v.endScope._wrap)):v.endScope&&v.endScope._multi?(g(),d(v.endScope,e)):r.skip?S+=n:(r.returnEnd||r.excludeEnd||(S+=n),g(),r.excludeEnd&&(S=n));do{v.scope&&M.closeNode(),v.skip||v.subLanguage||(R+=v.relevance),v=v.parent}while(v!==o.parent);return o.starts&&h(o.starts,e),r.returnEnd?0:n.length}let m={};function x(n,o){const a=o&&o[0];if(S+=n,null==a)return g(),0;if("begin"===m.type&&"end"===o.type&&m.index===o.index&&""===a){if(S+=t.slice(o.index,o.index+1),!s){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=m.rule,n}return 1}if(m=o,"begin"===o.type)return function(e){const n=e[0],t=e.rule,i=new r(t),o=[t.__beforeBegin,t["on:begin"]];for(const r of o)if(r&&(r(e,i),i.isMatchIgnored))return p(n);return t.skip?S+=n:(t.excludeBegin&&(S+=n),g(),t.returnBegin||t.excludeBegin||(S=n)),h(t,e),t.returnBegin?0:n.length}(o);if("illegal"===o.type&&!i){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(v.scope||"<unnamed>")+'"');throw e.mode=v,e}if("end"===o.type){const e=b(o);if(e!==te)return e}if("illegal"===o.type&&""===a)return 1;if(j>1e5&&j>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return S+=a,a.length}const y=k(e);if(!y)throw X(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const _=q(y);let O="",v=o||_;const N={},M=new l.__emitter(l);!function(){const e=[];for(let n=v;n!==y;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach(e=>M.openNode(e))}();let S="",R=0,A=0,j=0,I=!1;try{for(v.matcher.considerAll();;){j++,I?I=!1:v.matcher.considerAll(),v.matcher.lastIndex=A;const e=v.matcher.exec(t);if(!e)break;const n=x(t.substring(A,e.index),e);A=e.index+n}return x(t.substr(A)),M.closeAllNodes(),M.finalize(),O=M.toHTML(),{language:e,value:O,relevance:R,illegal:!1,_emitter:M,_top:v}}catch(T){if(T.message&&T.message.includes("Illegal"))return{language:e,value:ee(t),illegal:!0,relevance:0,_illegalBy:{message:T.message,index:A,context:t.slice(A-100,A+100),mode:T.mode,resultSoFar:O},_emitter:M};if(s)return{language:e,value:ee(t),illegal:!1,relevance:0,errorRaised:T,_emitter:M,_top:v};throw T}}function E(e,t){t=t||l.languages||Object.keys(n);const i=function(e){const n={value:ee(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return n._emitter.addText(e),n}(e),o=t.filter(k).filter(v).map(n=>w(n,e,!1));o.unshift(i);const r=o.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(k(e.language).supersetOf===n.language)return 1;if(k(n.language).supersetOf===e.language)return-1}return 0}),[s,a]=r,u=s;return u.secondBest=a,u}function x(e){let n=null;const i=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=l.languageDetectRe.exec(n);if(t){const n=k(t[1]);return n||(G(a.replace("{}",t[1])),G("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>u(e)||k(e))}(e);if(u(i))return;if(N("before:highlightElement",{el:e,language:i}),e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),l.throwUnescapedHTML))throw new Q("One of your code blocks includes unescaped HTML.",e.innerHTML);n=e;const o=n.textContent,r=i?d(o,{language:i,ignoreIllegals:!0}):E(o);e.innerHTML=r.value,function(e,n,i){const o=n&&t[n]||i;e.classList.add("hljs"),e.classList.add(`language-${o}`)}(e,i,r.language),e.result={language:r.language,re:r.relevance,relevance:r.relevance},r.secondBest&&(e.secondBest={language:r.secondBest.language,relevance:r.secondBest.relevance}),N("after:highlightElement",{el:e,result:r,text:o})}let y=!1;function _(){"loading"!==document.readyState?document.querySelectorAll(l.cssSelector).forEach(x):y=!0}function k(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function O(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e.toLowerCase()]=n})}function v(e){const n=k(e);return n&&!n.disableAutodetect}function N(e,n){const t=e;i.forEach(function(e){e[t]&&e[t](n)})}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){y&&_()},!1),Object.assign(e,{highlight:d,highlightAuto:E,highlightAll:_,highlightElement:x,highlightBlock:function(e){return Z("10.7.0","highlightBlock will be removed entirely in v12.0"),Z("10.7.0","Please use highlightElement now."),x(e)},configure:function(e){l=ne(l,e)},initHighlighting:()=>{_(),Z("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){_(),Z("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,i){let o=null;try{o=i(e)}catch(r){if(X("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw r;X(r),o=c}o.name||(o.name=t),n[t]=o,o.rawDefinition=i.bind(null,e),o.aliases&&O(o.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:k,registerAliases:O,autoDetection:v,inherit:ne,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),i.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.5.1",e.regex={concat:b,lookahead:h,either:m,optional:p,anyNumberOfTimes:f};for(const r in T)"object"==typeof T[r]&&o(T[r]);return Object.assign(e,T),e}({});e.exports=ie,ie.HighlightJS=ie,ie.default=ie}}]);