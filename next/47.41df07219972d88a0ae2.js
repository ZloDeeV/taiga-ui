(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"5OWl":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiComboBoxModule",(function(){return ut}));var a=n("VbQ3"),i=n("An66"),o=n("3kIJ"),r=n("1VvW"),l=n("SVIu"),u=n("l4xa"),s=n("Qq0t"),c=n("dvRg"),d=n("cWK9"),m=n("Piem"),p=n("D57K"),h=n("kZht"),f=n("LusI"),y=n("K/iL"),b=n("OZlg"),g=n("e0eB"),C=n("iyc4"),x=n("aPft"),S=n("ZTXN"),T=n("ROBh"),v=n("xVbo"),M=n("TLy2"),w=n("jIqt"),E=n("BwBJ"),P=n("+SFL"),V=n("Kl/4"),O=n("eB8V"),A=n("BBBb"),L=n("As/O"),_=n("2wTY"),I=n("vwaW"),D=n("fP8s"),$=n("OWJi"),G=n("cweO");function R(e,t){if(1&e&&h["\u0275\u0275element"](0,"tui-data-list-wrapper",8),2&e){const e=h["\u0275\u0275nextContext"]().tuiLet;h["\u0275\u0275nextContext"]();const t=h["\u0275\u0275reference"](3);h["\u0275\u0275property"]("items",e)("itemContent",t)}}function N(e,t){if(1&e&&h["\u0275\u0275element"](0,"tui-data-list-wrapper",8),2&e){const e=h["\u0275\u0275nextContext"]().tuiLet;h["\u0275\u0275nextContext"]();const t=h["\u0275\u0275reference"](3);h["\u0275\u0275property"]("items",e)("itemContent",t)}}function F(e,t){if(1&e&&h["\u0275\u0275element"](0,"tui-data-list-wrapper",8),2&e){const e=h["\u0275\u0275nextContext"]().tuiLet;h["\u0275\u0275nextContext"]();const t=h["\u0275\u0275reference"](3);h["\u0275\u0275property"]("items",e)("itemContent",t)}}function B(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"form",2),h["\u0275\u0275elementStart"](1,"tui-combo-box",3),h["\u0275\u0275listener"]("searchChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().onSearchChange(t)})),h["\u0275\u0275text"](2," Find the best employees "),h["\u0275\u0275elementStart"](3,"input",4),h["\u0275\u0275listener"]("input",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().onSearchChange(t.target.value)})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](4,R,1,2,"tui-data-list-wrapper",5),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"tui-combo-box",6),h["\u0275\u0275text"](6," Find the best employees "),h["\u0275\u0275elementStart"](7,"input",4),h["\u0275\u0275listener"]("input",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().onSearchChange(t.target.value)})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](8,N,1,2,"tui-data-list-wrapper",5),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](9,"tui-combo-box",7),h["\u0275\u0275text"](10," Choose a developer "),h["\u0275\u0275elementStart"](11,"input",4),h["\u0275\u0275listener"]("input",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().onSearchChange(t.target.value)})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](12,F,1,2,"tui-data-list-wrapper",5),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"](),t=h["\u0275\u0275reference"](3);h["\u0275\u0275property"]("tuiTextfieldCleaner",!0),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("formControl",e.testValue)("valueContent",t),h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("formControl",e.testValue)("valueContent",t),h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("formControl",e.testValue)("valueContent",t)}}function k(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div",9),h["\u0275\u0275element"](1,"tui-avatar",10),h["\u0275\u0275elementStart"](2,"div",11),h["\u0275\u0275text"](3),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("avatarUrl",e.avatarUrl||null)("text",e.toString()),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"](e)}}class z{constructor(e,t,n=null){this.firstName=e,this.lastName=t,this.avatarUrl=n}toString(){return`${this.firstName} ${this.lastName}`}}const H=[new z("Roman","Sedov","http://marsibarsi.me/images/1x1small.jpg"),new z("Alex","Inkin",P.a)];let j=(()=>{class e{constructor(){this.search$=new S.a,this.items$=this.search$.pipe(Object(v.a)(e=>null!==e),Object(M.a)(e=>this.serverRequest(e).pipe(Object(w.a)(null))),Object(w.a)(H)),this.testValue=new o.FormControl(H[1])}onSearchChange(e){this.search$.next(e)}serverRequest(e){const t=H.filter(t=>-1!==t.toString().toLowerCase().indexOf(e.toLowerCase()));return Object(T.a)(t).pipe(Object(E.a)(1e3*Math.random()+500))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-combo-box-example-1"]],decls:4,vars:3,consts:[["class","b-form",3,"tuiTextfieldCleaner",4,"tuiLet"],["content",""],[1,"b-form",3,"tuiTextfieldCleaner"],["tuiTextfieldSize","s",3,"formControl","valueContent","searchChange"],["tuiTextfield","","placeholder","Type a name",3,"input"],[3,"items","itemContent",4,"tuiDataList"],["tuiTextfieldSize","m",1,"tui-space_vertical-5",3,"formControl","valueContent"],[3,"formControl","valueContent"],[3,"items","itemContent"],[1,"template"],["size","xs",1,"avatar",3,"avatarUrl","text"],[1,"name"]],template:function(e,t){1&e&&(h["\u0275\u0275template"](0,B,13,7,"form",0),h["\u0275\u0275pipe"](1,"async"),h["\u0275\u0275template"](2,k,4,3,"ng-template",null,1,h["\u0275\u0275templateRefExtractor"])),2&e&&h["\u0275\u0275property"]("tuiLet",h["\u0275\u0275pipeBind1"](1,1,t.items$))},directives:[V.a,o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.NgForm,O.b,A.a,L.a,_.b,o.NgControlStatus,o.FormControlDirective,I.a,D.a,$.a,G.a],pipes:[i.b],styles:[".template[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}"],changeDetection:0}),e})();class U{constructor(e,t,n=null,a=!1){this.firstName=e,this.lastName=t,this.avatarUrl=n,this.disabled=a}toString(){return`${this.firstName} ${this.lastName}`}}const J=[new U("Roman","Sedov","http://marsibarsi.me/images/1x1small.jpg"),new U("Alex","Inkin",P.a)];var q=n("Ohay"),W=n("kuMc"),K=n("wqq/");let Q=(()=>{class e{constructor(e){this.destroy$=e,this.request$=new S.a,this.response$=this.request$.pipe(Object(q.a)(),Object(M.a)(e=>Object(T.a)(J.filter(t=>Object(u.TUI_DEFAULT_MATCHER)(t,e))).pipe(Object(E.a)(1e3*Math.random()+500),Object(w.a)(null))),Object(W.a)(this.destroy$),Object(K.a)(1))}request(e){return this.request$.next(e||""),this.response$}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275inject"](u.TuiDestroyService))},e.\u0275prov=h["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();var Z=n("cVyY"),Y=n("xcN3"),X=n("HUEM");function ee(e,t){if(1&e&&(h["\u0275\u0275element"](0,"tui-avatar",5),h["\u0275\u0275elementStart"](1,"span",6),h["\u0275\u0275text"](2),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275property"]("avatarUrl",e.avatarUrl||null)("text",e.toString()),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"](e)}}function te(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"button",10),h["\u0275\u0275element"](1,"tui-avatar",5),h["\u0275\u0275elementStart"](2,"span",6),h["\u0275\u0275text"](3),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275property"]("value",e)("disabled",e.disabled),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("avatarUrl",e.avatarUrl||null)("text",e.toString()),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"](e)}}function ne(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"tui-data-list"),h["\u0275\u0275template"](1,te,4,5,"button",9),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"](2).tuiLet;h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",e)}}function ae(e,t){1&e&&h["\u0275\u0275element"](0,"tui-loader",11)}function ie(e,t){if(1&e&&(h["\u0275\u0275template"](0,ne,2,1,"tui-data-list",7),h["\u0275\u0275template"](1,ae,1,0,"ng-template",null,8,h["\u0275\u0275templateRefExtractor"])),2&e){const e=h["\u0275\u0275reference"](2),t=h["\u0275\u0275nextContext"]().tuiLet;h["\u0275\u0275property"]("ngIf",t)("ngIfElse",e)}}function oe(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"tui-combo-box",1),h["\u0275\u0275listener"]("searchChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().search=t})),h["\u0275\u0275text"](1," Find the best employees "),h["\u0275\u0275element"](2,"input",2),h["\u0275\u0275template"](3,ee,3,3,"ng-template",null,3,h["\u0275\u0275templateRefExtractor"]),h["\u0275\u0275template"](5,ie,3,2,"ng-template",4),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275reference"](4),t=h["\u0275\u0275nextContext"]();h["\u0275\u0275property"]("formControl",t.control)("valueContent",e)("search",t.search)}}let re=(()=>{class e{constructor(e){this.service=e,this.search="",this.control=new o.FormControl(J[0])}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](Q))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-combo-box-example-2"]],features:[h["\u0275\u0275ProvidersFeature"]([Q,u.TuiDestroyService])],decls:2,vars:3,consts:[["class","b-form",3,"formControl","valueContent","search","searchChange",4,"tuiLet"],[1,"b-form",3,"formControl","valueContent","search","searchChange"],["tuiTextfield","","placeholder","Type a name"],["value",""],["tuiDataList",""],["size","xs",1,"avatar",3,"avatarUrl","text"],[1,"name"],[4,"ngIf","ngIfElse"],["loading",""],["tuiOption","",3,"value","disabled",4,"ngFor","ngForOf"],["tuiOption","",3,"value","disabled"],[1,"tui-space_vertical-4"]],template:function(e,t){1&e&&(h["\u0275\u0275template"](0,oe,6,3,"tui-combo-box",0),h["\u0275\u0275pipe"](1,"async")),2&e&&h["\u0275\u0275property"]("tuiLet",h["\u0275\u0275pipeBind1"](1,1,t.service.request(t.search)))},directives:[V.a,A.a,L.a,o.NgControlStatus,o.FormControlDirective,I.a,D.a,G.a,i.t,Z.a,i.s,Y.a,X.a],pipes:[i.b],styles:[".avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}"],changeDetection:0}),e})();var le=n("FlJ/");function ue(e,t){if(1&e&&(h["\u0275\u0275element"](0,"tui-data-list-wrapper",3),h["\u0275\u0275pipe"](1,"tuiFilterByInput")),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275property"]("items",h["\u0275\u0275pipeBind1"](1,1,e.items))}}let se=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.value=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-combo-box-example-3"]],decls:4,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"],["tuiTextfield","","placeholder","Type a name"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"tui-combo-box",0),h["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),h["\u0275\u0275text"](1," Find the best employees "),h["\u0275\u0275element"](2,"input",1),h["\u0275\u0275template"](3,ue,2,3,"tui-data-list-wrapper",2),h["\u0275\u0275elementEnd"]()),2&e&&h["\u0275\u0275property"]("ngModel",t.value)},directives:[A.a,L.a,o.NgControlStatus,o.NgModel,I.a,D.a,$.a],pipes:[le.a],encapsulation:2,changeDetection:0}),e})();var ce=n("9B3E"),de=n("gdGJ");function me(e,t){if(1&e&&(h["\u0275\u0275element"](0,"tui-data-list-wrapper",3),h["\u0275\u0275pipe"](1,"tuiFilterByInputWith"),h["\u0275\u0275pipe"](2,"tuiStringifyContent")),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275property"]("items",h["\u0275\u0275pipeBind2"](1,2,e.items,e.stringify))("itemContent",h["\u0275\u0275pipeBind1"](2,5,e.stringify))}}let pe=(()=>{class e{constructor(){this.value=null,this.items=[{name:"John",surname:"Cleese"},{name:"Eric",surname:"Idle"},{name:"Graham",surname:"Chapman"},{name:"Michael",surname:"Palin"},{name:"Terry",surname:"Gilliam"},{name:"Terry",surname:"Jones"}],this.stringify=e=>`${e.name} ${e.surname}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-combo-box-example-4"]],decls:4,vars:2,consts:[[1,"b-form",3,"stringify","ngModel","ngModelChange"],["tuiTextfield","","placeholder","Type a name"],[3,"items","itemContent",4,"tuiDataList"],[3,"items","itemContent"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"tui-combo-box",0),h["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),h["\u0275\u0275text"](1," Find the best employees "),h["\u0275\u0275element"](2,"input",1),h["\u0275\u0275template"](3,me,3,7,"tui-data-list-wrapper",2),h["\u0275\u0275elementEnd"]()),2&e&&h["\u0275\u0275property"]("stringify",t.stringify)("ngModel",t.value)},directives:[A.a,L.a,o.NgControlStatus,o.NgModel,I.a,D.a,$.a],pipes:[ce.a,de.a],encapsulation:2,changeDetection:0}),e})();var he=n("vl9V");function fe(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"button",5),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275property"]("value",e),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate1"](" ",e," ")}}function ye(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"cdk-virtual-scroll-viewport",3),h["\u0275\u0275elementStart"](1,"tui-data-list"),h["\u0275\u0275template"](2,fe,2,2,"button",4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.tuiLet;h["\u0275\u0275styleProp"]("height",44*e.length,"px"),h["\u0275\u0275property"]("itemSize",44),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("cdkVirtualForOf",e)}}function be(e,t){if(1&e&&(h["\u0275\u0275elementContainerStart"](0),h["\u0275\u0275template"](1,ye,3,4,"cdk-virtual-scroll-viewport",2),h["\u0275\u0275pipe"](2,"tuiFilterByInput"),h["\u0275\u0275elementContainerEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("tuiLet",h["\u0275\u0275pipeBind1"](2,1,e.countries))}}let ge=(()=>{class e{constructor(){this.value=null,this.countries=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cura\xe7ao","Cyprus","Czechia","C\xf4te d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation","Rwanda","R\xe9union","Saint Barth\xe9lemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","\xc5land Islands"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-combo-box-example-5"]],decls:3,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"],[4,"tuiDataList"],["tuiScrollable","","class","scroll",3,"height","itemSize",4,"tuiLet"],["tuiScrollable","",1,"scroll",3,"itemSize"],["tuiOption","",3,"value",4,"cdkVirtualFor","cdkVirtualForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"tui-combo-box",0),h["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),h["\u0275\u0275text"](1," Country "),h["\u0275\u0275template"](2,be,3,3,"ng-container",1),h["\u0275\u0275elementEnd"]()),2&e&&h["\u0275\u0275property"]("ngModel",t.value)},directives:[A.a,L.a,o.NgControlStatus,o.NgModel,D.a,V.a,a.d,a.a,he.a,Z.a,a.c,Y.a],pipes:[le.a],styles:[".scroll[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;min-height:64px;max-height:200px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}"],changeDetection:0}),e})();var Ce=n("EPR0"),xe=n("zV1d"),Se=n("yHor"),Te=n("zGJC"),ve=n("FSyC"),Me=n("SUM+"),we=n("RlDx"),Ee=n("KzL3"),Pe=n("pQcr"),Ve=n("gEyt"),Oe=n("ONKv"),Ae=n("u8jZ");const Le=["valueTemplateContent"];var _e;_e=$localize`:␟598b9aeb90be2b8579dd79952da34361fbd08d9e␟5594614771591679029:${"\ufffd#2\ufffd"}:START_TAG_CODE:ComboBox${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a textfield with a dropdown with items. You can choose one of available options or input a value manually. `;const Ie=["heading",$localize`:␟69c22e16da706bb601a0de9b79bf4032e21f238f␟4520248067908818846:Async data loading`];function De(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div",2),h["\u0275\u0275i18nStart"](1,_e),h["\u0275\u0275element"](2,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](3,"tui-doc-example",3),h["\u0275\u0275i18nAttributes"](4,Ie),h["\u0275\u0275elementStart"](5,"tui-notification",4),h["\u0275\u0275text"](6," If you need to set some attributes or listen to events on native "),h["\u0275\u0275elementStart"](7,"code"),h["\u0275\u0275text"](8,"input"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](9," , you can put it inside with "),h["\u0275\u0275elementStart"](10,"code"),h["\u0275\u0275text"](11,"Textfield"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](12," directive as shown below "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](13,"tui-combo-box-example-1"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](14,"tui-doc-example",5),h["\u0275\u0275element"](15,"tui-combo-box-example-2"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](16,"tui-doc-example",6),h["\u0275\u0275element"](17,"tui-combo-box-example-3"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](18,"tui-doc-example",7),h["\u0275\u0275element"](19,"tui-combo-box-example-4"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](20,"tui-doc-example",8),h["\u0275\u0275element"](21,"tui-combo-box-example-5"),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](3),h["\u0275\u0275property"]("content",e.example1),h["\u0275\u0275advance"](11),h["\u0275\u0275property"]("content",e.example2),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("content",e.example3),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("content",e.example4),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("content",e.example5)}}var $e,Ge,Re,Ne,Fe,Be,ke,ze,He,je,Ue,Je;function qe(e,t){if(1&e&&h["\u0275\u0275element"](0,"tui-data-list-wrapper",22),2&e){const e=h["\u0275\u0275nextContext"](3);h["\u0275\u0275property"]("items",e.filter(e.search))}}function We(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"tui-combo-box",20),h["\u0275\u0275listener"]("searchChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"](2).search=t})),h["\u0275\u0275text"](1," Choose an account "),h["\u0275\u0275template"](2,qe,1,1,"tui-data-list-wrapper",21),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"](2);h["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("valueContent",e.valueContent)("identityMatcher",e.identityMatcher)("readOnly",e.readOnly)("strict",e.strict)("stringify",e.stringify)("strictMatcher",e.strictMatcher)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldMaxLength",e.maxLength)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("search",e.search)}}function Ke(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div",23),h["\u0275\u0275element"](1,"tui-svg",24),h["\u0275\u0275elementStart"](2,"span"),h["\u0275\u0275text"](3),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate"](e)}}function Qe(e,t){1&e&&(h["\u0275\u0275i18nStart"](0,Ge),h["\u0275\u0275element"](1,"code"),h["\u0275\u0275i18nEnd"]())}function Ze(e,t){1&e&&(h["\u0275\u0275i18nStart"](0,Re),h["\u0275\u0275element"](1,"code"),h["\u0275\u0275i18nEnd"]())}function Ye(e,t){1&e&&(h["\u0275\u0275i18nStart"](0,Ne),h["\u0275\u0275element"](1,"strong"),h["\u0275\u0275i18nEnd"]())}function Xe(e,t){1&e&&h["\u0275\u0275i18n"](0,Fe)}function et(e,t){1&e&&(h["\u0275\u0275i18nStart"](0,Be),h["\u0275\u0275element"](1,"strong"),h["\u0275\u0275i18nEnd"]())}function tt(e,t){1&e&&(h["\u0275\u0275i18nStart"](0,ke),h["\u0275\u0275element"](1,"code"),h["\u0275\u0275element"](2,"strong"),h["\u0275\u0275i18nEnd"]())}function nt(e,t){1&e&&h["\u0275\u0275i18n"](0,ze)}function at(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"tui-doc-demo",9),h["\u0275\u0275template"](1,We,3,26,"ng-template"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](2,Ke,4,1,"ng-template",null,10,h["\u0275\u0275templateRefExtractor"]),h["\u0275\u0275elementStart"](4,"div"),h["\u0275\u0275i18nStart"](5,$e),h["\u0275\u0275elementStart"](6,"p"),h["\u0275\u0275element"](7,"code"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](8,"button",11),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().setValue()})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](9,"tui-doc-documentation"),h["\u0275\u0275template"](10,Qe,2,0,"ng-template",12),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().disabled=t})),h["\u0275\u0275template"](11,Ze,2,0,"ng-template",13),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().search=t})),h["\u0275\u0275template"](12,Ye,2,0,"ng-template",14),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().identityMatcher=t})),h["\u0275\u0275template"](13,Xe,1,0,"ng-template",15),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().strict=t})),h["\u0275\u0275template"](14,et,2,0,"ng-template",16),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().strictMatcher=t})),h["\u0275\u0275template"](15,tt,3,0,"ng-template",17),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().stringify=t})),h["\u0275\u0275template"](16,nt,1,0,"ng-template",18),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().selectedValueTemplate=t})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](17,"inherited-documentation",19)}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275property"]("control",e.control),h["\u0275\u0275advance"](10),h["\u0275\u0275property"]("documentationPropertyValue",e.disabled),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValue",e.search),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValues",e.identityMatcherVariants)("documentationPropertyValue",e.identityMatcher),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValue",e.strict),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValues",e.strictMatcherVariants)("documentationPropertyValue",e.strictMatcher),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValues",e.stringifyVariants)("documentationPropertyValue",e.stringify),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValues",e.valueTemplateVariants)("documentationPropertyValue",e.selectedValueTemplate),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("dropdown",!0)}}function it(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ol",25),h["\u0275\u0275elementStart"](1,"li"),h["\u0275\u0275elementStart"](2,"p"),h["\u0275\u0275i18nStart"](3,He),h["\u0275\u0275element"](4,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](5,"tui-doc-code",26),h["\u0275\u0275elementStart"](6,"p"),h["\u0275\u0275i18nStart"](7,je),h["\u0275\u0275element"](8,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](9,"li"),h["\u0275\u0275elementStart"](10,"p"),h["\u0275\u0275i18nStart"](11,Ue),h["\u0275\u0275element"](12,"code"),h["\u0275\u0275element"](13,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](14,"tui-doc-code",27),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](15,"li"),h["\u0275\u0275elementStart"](16,"p"),h["\u0275\u0275i18n"](17,Je),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](18,"tui-doc-code",28),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("code",e.exampleImportModule),h["\u0275\u0275advance"](9),h["\u0275\u0275property"]("code",e.exampleDeclareForm),h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}$e=$localize`:␟895ced0c4c71fbd17c0ae69a1bd58424a04d949e␟6504226182753238526:${"\ufffd#6\ufffd"}:START_PARAGRAPH: Set a value with copied object from items to check ${"\ufffd#7\ufffd"}:START_TAG_CODE:identityMatcher${"\ufffd/#7\ufffd"}:CLOSE_TAG_CODE: : ${"\ufffd/#6\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd#8\ufffd"}:START_TAG_BUTTON: Set ${"\ufffd/#8\ufffd"}:CLOSE_TAG_BUTTON:`,Ge=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,Re=$localize`:␟302c49c0c091a231d37b02ebcadf02b4fd7009eb␟8556696629758299576: Textfield value to subscribe on input or setting it from the outside (emits ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: when item from list selected) `,Ne=$localize`:␟46a6a9dd4dfb87c0a67a5750f97761f787fe470b␟2331731453094406593: A function that compares search and value to define a match between them. ${"\ufffd#1\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,Fe=$localize`:␟2c1a5ef85cfe45786377741c0183990b41f7dfe3␟421661528828485902: Value must be only item of items `,Be=$localize`:␟3e8341854fcc6ce68697a434bf2362d0927c5f93␟3498814777172888150: A function that compares search text and item to define a match between them. Lowercase string comparasion function by default. ${"\ufffd#1\ufffd"}:START_TAG_STRONG:Should be a pure function${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,ke=$localize`:␟8b0f2fdf3aa3aaa19b87f4d255d00253c742cf23␟4616897131727147893: A function that transforms object into a string. ${"\ufffd#1\ufffd"}:START_TAG_CODE:String(value)${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Should be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,ze=$localize`:␟bd1797fbae774d643fe66cd7ddbd2dc9b405a294␟5590474436936398231: A template for custom view of selected value `,He=$localize`:␟56c3d22f1452d68987c942338d4525f7075fcb42␟4145645488382398957: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiComboBoxModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,je=$localize`:␟dd8213acbcab882d451555cd44ef970b468c7572␟8602164619926939169: See samples to learn more about working with ${"\ufffd#8\ufffd"}:START_TAG_CODE:tui-data-list-wrapper${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: or without them `,Ue=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,Ue=h["\u0275\u0275i18nPostprocess"](Ue),Je=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;class ot{constructor(e,t){this.name=e,this.balance=t}toString(){return`${this.name} (${this.balance})`}}let rt=(()=>{class e extends f.a{constructor(){super(...arguments),this.valueTemplateRef="",this.exampleDeclareForm=n.e(258).then(n.bind(null,"0aJa")),this.exampleImportModule=n.e(259).then(n.bind(null,"IC6e")),this.exampleInsertTemplate=n.e(260).then(n.bind(null,"5TE2")),this.example1={TypeScript:n.e(244).then(n.bind(null,"mVMy")),HTML:n.e(242).then(n.bind(null,"p9Bu")),LESS:n.e(243).then(n.bind(null,"5CWz"))},this.example2={TypeScript:n.e(248).then(n.bind(null,"dvzT")),HTML:n.e(246).then(n.bind(null,"ngWQ")),LESS:n.e(247).then(n.bind(null,"R042")),"user.ts":n.e(250).then(n.bind(null,"DLOe")),"request.service.ts":n.e(249).then(n.bind(null,"uwNx")),"database-mock-data.ts":n.e(245).then(n.bind(null,"9Joy"))},this.example3={TypeScript:n.e(252).then(n.bind(null,"i4av")),HTML:n.e(251).then(n.bind(null,"DPjr"))},this.example4={TypeScript:n.e(254).then(n.bind(null,"W3Cf")),HTML:n.e(253).then(n.bind(null,"rx5F"))},this.example5={TypeScript:n.e(257).then(n.bind(null,"LykJ")),HTML:n.e(255).then(n.bind(null,"MEVc")),LESS:n.e(256).then(n.bind(null,"wKkM"))},this.items=[new ot("Rubles",500),new ot("Dollars",237),new ot("Netherlands Antillean Guilder and Falkland Islands Pound",700)],this.strict=!0,this.search="",this.valueTemplateVariants=["","Template"],this.selectedValueTemplate="",this.stringifyVariants=[u.TUI_DEFAULT_STRINGIFY,e=>String(String(e).match(/\d+/))],this.stringify=this.stringifyVariants[0],this.strictMatcherVariants=[u.TUI_STRICT_MATCHER,(e,t,n)=>Number.parseInt(n(e).match(/\d+/g)[0],10)===Number.parseInt(t,10),null],this.strictMatcher=this.strictMatcherVariants[0],this.identityMatcherVariants=[(e,t)=>e===t,(e,t)=>e.balance===t.balance],this.identityMatcher=this.identityMatcherVariants[0],this.control=new o.FormControl(null,o.Validators.required)}get valueContent(){return this.valueTemplateRef&&this.selectedValueTemplate?this.valueTemplateRef:""}filter(e){return this.items.filter(t=>Object(u.TUI_DEFAULT_MATCHER)(t,e||""))}setValue(){this.control.setValue(new ot("Dollars",237))}}return e.\u0275fac=function(t){return lt(t||e)},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-combo-box"]],viewQuery:function(e,t){var n;1&e&&h["\u0275\u0275viewQuery"](Le,!0),2&e&&h["\u0275\u0275queryRefresh"](n=h["\u0275\u0275loadQuery"]())&&(t.valueTemplateRef=n.first)},features:[h["\u0275\u0275ProvidersFeature"]([{provide:y.a,useExisting:Object(h.forwardRef)(()=>e)}]),h["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","ComboBox","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","async",3,"content",6,"heading"],[1,"tui-space_bottom-4","b-form"],["id","datalist","heading","DataList",3,"content"],["id","wrapper","heading","DataListWrapper","description","With filtering through tuiFilterByInput pipe",3,"content"],["id","stringify","heading","Stringify","description","With filtering through tuiFilterByInputWith pipe using custom stringify handler",3,"content"],["id","virtual","heading","Virtual scroll",3,"content"],[3,"control"],["valueTemplateContent",""],["tuiButton","","type","button","size","m",3,"click"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strict","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strictMatcher","documentationPropertyMode","input","documentationPropertyType","TuiStringMatcher | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","valueContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","focusable","valueContent","identityMatcher","readOnly","strict","stringify","strictMatcher","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintMode","tuiTextfieldCleaner","tuiTextfieldMaxLength","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","search","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"],[1,"item-template"],["src","tuiIconCheck",1,"item-template-icon"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"tui-doc-page",0),h["\u0275\u0275template"](1,De,22,5,"ng-template",1),h["\u0275\u0275template"](2,at,18,13,"ng-template",1),h["\u0275\u0275template"](3,it,19,3,"ng-template",1),h["\u0275\u0275elementEnd"]())},directives:[b.a,g.a,C.a,x.a,j,re,se,pe,ge,Ce.a,xe.a,Se.a,Te.a,ve.a,A.a,L.a,o.NgControlStatus,o.FormControlDirective,Me.a,we.a,O.b,Ee.b,Pe.b,Ve.b,_.b,D.a,$.a,Oe.a,Ae.a],styles:[".item-template[_ngcontent-%COMP%]{display:flex;align-items:center}.item-template-icon[_ngcontent-%COMP%]{margin-right:.375rem}"],changeDetection:0}),Object(p.b)([u.tuiPure],e.prototype,"filter",null),e})();const lt=h["\u0275\u0275getInheritedFactory"](rt);let ut=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.FormsModule,o.ReactiveFormsModule,a.f,s.TuiScrollbarModule,c.TuiComboBoxModule,s.TuiButtonModule,s.TuiLinkModule,c.TuiAvatarModule,s.TuiSvgModule,s.TuiDataListModule,s.TuiLoaderModule,u.TuiLetModule,s.TuiNotificationModule,s.TuiTextfieldControllerModule,s.TuiHintControllerModule,s.TuiDropdownControllerModule,c.TuiDataListWrapperModule,c.TuiFilterByInputPipeModule,c.TuiStringifyContentPipeModule,d.c,l.i,m.a,r.f.forChild(Object(l.p)(rt))]]}),e})()}}]);