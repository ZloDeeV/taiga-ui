(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{Q4Yb:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDataListModule",(function(){return Ne}));var o=n("An66"),i=n("3kIJ"),a=n("1VvW"),r=n("T8fS"),l=n("SVIu"),u=n("l4xa"),c=n("Qq0t"),p=n("dvRg"),d=n("kZht"),m=n("OZlg"),s=n("e0eB"),f=n("iyc4"),g=n("TjIJ"),x=n("jTus"),y=n("fP8s"),b=n("luNI"),h=n("SgIQ"),v=n("4b6/"),C=n("gEyt"),S=n("cVyY"),w=n("mCBh"),E=n("xcN3"),D=n("Kl/4"),O=n("2sqw"),T=n("aEsk"),M=n("DzXc");function L(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"button",6),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e.items),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.name," only ")}}function A(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-opt-group"),d["\u0275\u0275elementStart"](1,"button",6),d["\u0275\u0275text"](2," All "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,L,2,2,"button",7),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("value",e.all),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",e.items)}}function k(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"button",6),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-opt-group",11),d["\u0275\u0275template"](1,k,2,2,"button",7),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().tuiLet;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e)}}function $(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-opt-group",9),d["\u0275\u0275template"](1,I,2,1,"tui-opt-group",10),d["\u0275\u0275elementEnd"]()),2&e){const e=t.tuiLet,n=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275property"]("label",n.name),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.length)}}function V(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275template"](1,$,2,2,"tui-opt-group",8),d["\u0275\u0275pipe"](2,"tuiFilter"),d["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiLet",d["\u0275\u0275pipeBind3"](2,1,e.items,n.filter,n.value))}}let _=(()=>{class e{constructor(){this.items=[],this.value="",this.all=u.w,this.filter=u.J}onArrowDown(e,t){e.onFocus(t,!0)}onKeyDown(e,t){t&&Object(c.lc)(e)&&Object(u.ad)(t,!0,!0)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["custom-list"]],inputs:{items:"items"},decls:8,vars:4,consts:[["tuiTextfieldIconLeft","tuiIconSearchLarge",1,"tui-space_all-2",3,"tuiTextfieldLabelOutside","value","valueChange","keydown.arrowDown.prevent"],["input",""],["emptyContent","No results found",3,"keydown"],["list",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],[3,"label",4,"tuiLet"],[3,"label"],["tuiMultiSelectGroup","",4,"ngIf"],["tuiMultiSelectGroup",""]],template:function(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-primitive-textfield",0,1),d["\u0275\u0275listener"]("valueChange",(function(e){return t.value=e}))("keydown.arrowDown.prevent",(function(n){d["\u0275\u0275restoreView"](e);const o=d["\u0275\u0275reference"](5);return t.onArrowDown(o,n)})),d["\u0275\u0275text"](2," Search categories\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](3,"hr"),d["\u0275\u0275elementStart"](4,"tui-data-list",2,3),d["\u0275\u0275listener"]("keydown",(function(n){d["\u0275\u0275restoreView"](e);const o=d["\u0275\u0275reference"](1);return t.onKeyDown(n.key,o.nativeFocusableElement)})),d["\u0275\u0275template"](6,A,4,2,"tui-opt-group",4),d["\u0275\u0275template"](7,V,3,5,"ng-container",5),d["\u0275\u0275elementEnd"]()}2&e&&(d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("value",t.value),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngIf",!t.value),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.items))},directives:[b.a,h.a,v.b,C.b,S.a,o.t,o.s,w.a,E.a,D.a,O.a,T.a],pipes:[M.a],encapsulation:2,changeDetection:0}),e})();function F(e,t){if(1&e&&d["\u0275\u0275element"](0,"custom-list",2),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("items",e.items)}}const z={name:"Income",items:["Donations","Product placement","Sponsorship","Found on the street","Unexpected inheritance","Investments","Color copier"]},R={name:"Expenses",items:["Energy drinks","Coffee","Ramen","Bills","Back medicine","Warhammer 40000 figurines"]};let G=(()=>{class e{constructor(){this.value=[],this.items=[z,R],this.identityMatcher=(e,t)=>e.length===t.length&&e.every(e=>t.includes(e)),this.valueContent=({$implicit:e})=>{if(!e.length)return"All";const t=this.items.find(({items:t})=>this.identityMatcher(e,t));return t?t.name+" only":"Selected: "+e.length}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-4"]],decls:3,vars:3,consts:[[1,"control",3,"identityMatcher","valueContent","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-select",0),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),d["\u0275\u0275text"](1," Open-source budget "),d["\u0275\u0275template"](2,F,1,1,"custom-list",1),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("identityMatcher",t.identityMatcher)("valueContent",t.valueContent)("ngModel",t.value)},directives:[g.a,x.a,i.NgControlStatus,i.NgModel,y.a,_],styles:[".control[_ngcontent-%COMP%] { width: 320px }"],changeDetection:0}),e})();var P=n("aPft"),N=n("q7Lq"),H=n("zV1d"),B=n("ONKv");function j(e,t){1&e&&d["\u0275\u0275element"](0,"tui-svg",10)}function W(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"a",7,8),d["\u0275\u0275text"](2),d["\u0275\u0275template"](3,j,1,0,"tui-svg",9),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=d["\u0275\u0275reference"](1);d["\u0275\u0275property"]("routerLink",e.routerLink),d["\u0275\u0275attribute"]("aria-checked",n.isActive),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",e.label," "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",n.isActive)}}function U(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-opt-group",5),d["\u0275\u0275template"](1,W,4,4,"a",6),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("label",e.label),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.items)}}function Z(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-data-list",3),d["\u0275\u0275template"](1,U,2,2,"tui-opt-group",4),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.groups)}}let Y=(()=>{class e{constructor(){this.arrow=p.b,this.groups=[{label:$localize`Components`,items:[{label:"Input",routerLink:"/components/input"},{label:"Select",routerLink:"/components/select"},{label:"DataList",routerLink:"/components/data-list"}]},{label:$localize`Styles`,items:[{label:$localize`Icons`,routerLink:"/icons"},{label:$localize`Typography`,routerLink:"/typography"}]},{label:"",items:[{label:$localize`Changelog`,routerLink:"/changelog"}]}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-1"]],decls:5,vars:2,consts:[[3,"content"],["tuiButton","","type","button",3,"iconRight"],["content",""],["role","menu"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink",4,"ngFor","ngForOf"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink"],["rla","routerLinkActive"],["src","tuiIconCheckLarge",4,"ngIf"],["src","tuiIconCheckLarge"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),d["\u0275\u0275elementStart"](1,"button",1),d["\u0275\u0275text"](2," Menu "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,Z,2,1,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("content",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("iconRight",t.arrow)}},directives:[N.a,H.a,S.a,o.s,w.a,E.a,a.e,a.d,o.t,B.a],encapsulation:2,changeDetection:0}),e})();var q=n("1iwt"),J=n("4hRd"),K=n("SUM+"),X=n("W2aA");function Q(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",9),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.tuiLet;return d["\u0275\u0275nextContext"](2).selectOption(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.tuiLet,n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("size",n.size),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function ee(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",9),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.tuiLet;return d["\u0275\u0275nextContext"](2).selectOption(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.tuiLet,n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("size",n.size),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function te(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",9),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](3).selectOption(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("size",n.size),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function ne(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-data-list",4),d["\u0275\u0275template"](1,te,2,2,"button",10),d["\u0275\u0275elementStart"](2,"button",6),d["\u0275\u0275text"](3," Nested menu "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().$implicit,t=d["\u0275\u0275reference"](10),n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiActiveZoneParent",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",n.burgers),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("size",n.size)("tuiDropdown",!1)("tuiDropdownContent",t)("tuiDropdownSided",!0)}}function oe(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",9),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](3).selectOption(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("size",n.size),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function ie(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-data-list"),d["\u0275\u0275template"](1,oe,2,2,"button",10),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.drinks)}}function ae(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-data-list",4),d["\u0275\u0275template"](1,Q,2,2,"button",5),d["\u0275\u0275elementStart"](2,"button",6),d["\u0275\u0275text"](3," Burgers "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"button",6),d["\u0275\u0275text"](5," Drinks "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](6,ee,2,2,"button",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](7,ne,4,6,"ng-template",null,7,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](9,ie,2,1,"ng-template",null,8,d["\u0275\u0275templateRefExtractor"])),2&e){const e=t.$implicit,n=d["\u0275\u0275reference"](8),o=d["\u0275\u0275reference"](10),i=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiActiveZoneParent",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiLet","French Fries"),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("size",i.size)("tuiDropdown",!1)("tuiDropdownContent",n)("tuiDropdownSided",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("size",i.size)("tuiDropdown",!1)("tuiDropdownContent",o)("tuiDropdownSided",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tuiLet","Ice Cream")}}let re=(()=>{class e{constructor(e){this.dialogService=e,this.dropdownOpen=!1,this.size="s",this.burgers=["Classic","Cheeseburger","Royal Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"]}selectOption(e){this.dropdownOpen=!1,this.dialogService.open("You selected "+e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](c.ib))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-2"]],decls:5,vars:3,consts:[[3,"content","open","openChange"],["dropdown",""],["tuiIconButton","","appearance","flat","icon","tuiIconMoreVer","type","button",3,"pseudoHovered"],["content",""],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","",3,"size","click",4,"tuiLet"],["tuiOption","","tuiDropdownAlign","right",3,"size","tuiDropdown","tuiDropdownContent","tuiDropdownSided"],["burgersTmp",""],["drinksTmp",""],["tuiOption","",3,"size","click"],["tuiOption","",3,"size","click",4,"ngFor","ngForOf"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0,1),d["\u0275\u0275listener"]("openChange",(function(e){return t.dropdownOpen=e})),d["\u0275\u0275element"](2,"button",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,ae,11,11,"ng-template",null,3,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](1),n=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("content",n)("open",t.dropdownOpen),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("pseudoHovered",e.open||null)}},directives:[N.a,H.a,S.a,q.a,J.a,D.a,E.a,K.a,X.a,o.s],encapsulation:2,changeDetection:0}),e})();function le(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"button",8),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function ue(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"button",8),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function ce(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-data-list"),d["\u0275\u0275elementStart"](1,"tui-opt-group",4),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().value=t})),d["\u0275\u0275elementStart"](2,"tui-opt-group",5),d["\u0275\u0275template"](3,le,2,2,"button",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-opt-group",7),d["\u0275\u0275template"](5,ue,2,2,"button",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngModel",e.value),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",e.burgers),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",e.drinks)}}let pe=(()=>{class e{constructor(){this.value=[],this.burgers=["Hamburger","Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"],this.arrow=p.b}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-3"]],decls:7,vars:5,consts:[[3,"tuiDropdownMaxHeight","content"],["dropdown",""],["tuiIconButton","","appearance","flat","type","button",3,"icon","pseudoHovered"],["content",""],["tuiMultiSelectGroup","",3,"ngModel","ngModelChange"],["label","Food"],["tuiOption","","size","l",3,"value",4,"ngFor","ngForOf"],["label","Drinks"],["tuiOption","","size","l",3,"value"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0,1),d["\u0275\u0275element"](2,"button",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,ce,6,3,"ng-template",null,3,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementStart"](5,"p"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](1),n=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("tuiDropdownMaxHeight",500)("content",n),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("icon",t.arrow)("pseudoHovered",e.open||null),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate"](t.value)}},directives:[N.a,K.a,H.a,S.a,w.a,O.a,T.a,i.NgControlStatus,i.NgModel,o.s,E.a],encapsulation:2,changeDetection:0}),e})();var de=n("ltWY"),me=n("GdrL"),se=n("71sB"),fe=n("3a2d"),ge=n("Kw97"),xe=n("0/K7"),ye=n("Yj6KL"),be=n("y9tQ");function he(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"form",14),d["\u0275\u0275elementStart"](1,"tui-input",15),d["\u0275\u0275text"](2," RUB "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-data-list",4),d["\u0275\u0275elementStart"](4,"button",16),d["\u0275\u0275text"](5," Exchange Rates: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().$implicit,t=d["\u0275\u0275reference"](16),n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("formGroup",n.moneyForm),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("tuiActiveZoneParent",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiDropdown",!0)("tuiDropdownContent",t)("tuiDropdownSided",!0)}}function ve(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-calendar",17),d["\u0275\u0275listener"]("mousedown.silent.prevent",(function(){return 0}))("dayClick",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).onDayClick(t)})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("value",e.dateValue)}}function Ce(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"form",14),d["\u0275\u0275elementStart"](1,"tui-input",18),d["\u0275\u0275text"](2," Email "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("formGroup",e.testForm)}}function Se(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div",3),d["\u0275\u0275elementStart"](1,"div",19),d["\u0275\u0275elementStart"](2,"tui-input",20),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).dollar=t})),d["\u0275\u0275text"](3,"1 Rub = (X) Dollars"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-input",20),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).euro=t})),d["\u0275\u0275text"](5,"1 Rub = (Y) Euros"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"ul",21),d["\u0275\u0275elementStart"](7,"li",22),d["\u0275\u0275element"](8,"tui-money",23),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"li",22),d["\u0275\u0275element"](10,"tui-money",24),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",e.dollar),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",e.euro),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("value",e.moneyValue/e.dollar),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("value",e.moneyValue/e.euro)}}function we(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-input-date-range",25),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).rangeValue=t})),d["\u0275\u0275text"](1," Range "),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("ngModel",e.rangeValue)}}function Ee(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-data-list",4),d["\u0275\u0275elementStart"](1,"button",5),d["\u0275\u0275text"](2," \ud83d\udcb0 Money: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",6),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"button",7),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"button",8),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](9,he,6,5,"ng-template",null,9,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](11,ve,1,1,"ng-template",null,10,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](13,Ce,3,1,"ng-template",null,11,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](15,Se,11,4,"ng-template",null,12,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](17,we,2,1,"ng-template",null,13,d["\u0275\u0275templateRefExtractor"])),2&e){const e=t.$implicit,n=d["\u0275\u0275reference"](10),o=d["\u0275\u0275reference"](12),i=d["\u0275\u0275reference"](14),a=d["\u0275\u0275reference"](18),r=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiActiveZoneParent",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiDropdown",!0)("tuiDropdownContent",n)("tuiDropdownSided",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tuiDropdown",!1)("tuiDropdownContent",o)("tuiDropdownSided",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" \ud83d\udcc5 Calendar: ",r.dateValue," "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiDropdown",!1)("tuiDropdownContent",i)("tuiDropdownSided",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" \ud83d\udce7 Email: ",r.testValue," "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiDropdown",!1)("tuiDropdownContent",a)("tuiDropdownSided",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" \u231b Range: ",r.rangeValue," ")}}let De=(()=>{class e{constructor(){this.dropdownOpen=!1,this.dateValue=new de.l(2020,0,1),this.euro=87,this.dollar=75,this.testForm=new i.FormGroup({testValue:new i.FormControl("mail@mail.ru")}),this.moneyForm=new i.FormGroup({moneyValue:new i.FormControl(1e3)}),this.rangeValue=new de.m(de.l.currentLocal(),de.l.currentLocal().append({year:1}))}get testValue(){var e;return null===(e=this.testForm.get("testValue"))||void 0===e?void 0:e.value}get moneyValue(){var e;return Number(null===(e=this.moneyForm.get("moneyValue"))||void 0===e?void 0:e.value)||0}onDayClick(e){this.dateValue=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-5"]],decls:14,vars:7,consts:[["tuiDropdownLimitWidth","fixed",1,"example",3,"content","open","openChange"],["tuiButton","","appearance","outline","icon","tuiIconMoreVer","type","button","size","m",1,"example"],["content",""],[1,"example"],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","","tuiDropdownAlign","right","tuiDropdownDirection","top",3,"tuiDropdown","tuiDropdownContent","tuiDropdownSided"],["automation-id","tui-data-list-calendar-option","tuiOption","","tuiDropdownAlign","right",3,"tuiDropdown","tuiDropdownContent","tuiDropdownSided"],["automation-id","tui-data-list-email-option","tuiOption","","tuiDropdownAlign","right",3,"tuiDropdown","tuiDropdownContent","tuiDropdownSided"],["automation-id","tui-data-list-range-option","tuiOption","","tuiDropdownAlign","right","tuiDropdownDirection","top",3,"tuiDropdown","tuiDropdownContent","tuiDropdownSided"],["money",""],["calendar",""],["input",""],["currency",""],["range",""],[1,"form",3,"formGroup"],["automation-id","tui-data-money-input","formControlName","moneyValue"],["tuiOption","","tuiDropdownDirection","bottom","tuiDropdownAlign","right",3,"tuiDropdown","tuiDropdownContent","tuiDropdownSided"],[3,"value","mousedown.silent.prevent","dayClick"],["automation-id","tui-data-list-email-field","formControlName","testValue"],["tuiGroup","",1,"group"],[3,"ngModel","ngModelChange"],[1,"exchange","tui-list","tui-list_large"],[1,"tui-list__item"],["currency","USD",3,"value"],["currency","EUR",3,"value"],["automation-id","tui-data-list-range-field",1,"form",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),d["\u0275\u0275listener"]("openChange",(function(e){return t.dropdownOpen=e})),d["\u0275\u0275elementStart"](1,"button",1),d["\u0275\u0275text"](2," List of components "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,Ee,19,16,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementStart"](5,"div",3),d["\u0275\u0275elementStart"](6,"p"),d["\u0275\u0275text"](7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"p"),d["\u0275\u0275text"](9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"p"),d["\u0275\u0275text"](11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"p"),d["\u0275\u0275text"](13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("content",e)("open",t.dropdownOpen),d["\u0275\u0275advance"](7),d["\u0275\u0275textInterpolate1"]("Email: ",t.testValue,""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("Chosen date: ",t.dateValue,""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("Range date: ",t.rangeValue,""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate2"]("Dol - ",t.dollar,", Eur - ",t.euro,"")}},directives:[N.a,K.a,H.a,S.a,q.a,J.a,E.a,X.a,i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,me.a,se.a,i.NgControlStatus,i.FormControlName,fe.a,ge.a,i.NgModel,xe.a,ye.a,be.a],styles:[".example[_ngcontent-%COMP%]{margin-bottom:.5rem;min-width:20.25rem}.form[_ngcontent-%COMP%]{min-width:300px;overflow:hidden}.exchange[_ngcontent-%COMP%]{margin:25px}.group[_ngcontent-%COMP%]{max-width:30.25rem}"],changeDetection:0}),e})();function Oe(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",6),d["\u0275\u0275listener"]("click",(function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](3).open=!1})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function Te(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-opt-group",4),d["\u0275\u0275template"](1,Oe,2,1,"button",5),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("label",e.label),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.items)}}function Me(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-data-list"),d["\u0275\u0275template"](1,Te,2,2,"tui-opt-group",3),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.groups)}}let Le=(()=>{class e{constructor(e){this.isMobile=e,this.open=!1,this.arrow=p.b,this.groups=[{label:"Advantages of Taiga UI",items:["\ud83e\udde9 Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.","\ud83e\uddd9 Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.","\ud83e\udd8b Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.","\ud83d\udee0 Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.","\ud83d\udce6 It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.","\ud83c\udfd7 Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay."]},{label:"Well-engineered Taiga UI components",items:["Calendar","Dialog","ComboBox","Select"]}]}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](u.S))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-6"]],decls:5,vars:5,consts:[["tuiDropdownAlign","left",3,"tuiDropdownLimitWidth","tuiDropdownMaxHeight","content","open","openChange"],["tuiButton","","appearance","flat","type","button",3,"iconRight"],["content",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["tuiOption","","class","option",3,"click",4,"ngFor","ngForOf"],["tuiOption","",1,"option",3,"click"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),d["\u0275\u0275listener"]("openChange",(function(e){return t.open=e})),d["\u0275\u0275elementStart"](1,"button",1),d["\u0275\u0275text"](2," Select why you use Taiga UI "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,Me,2,1,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("tuiDropdownLimitWidth",t.isMobile?"fixed":"min")("tuiDropdownMaxHeight",700)("content",e)("open",t.open),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("iconRight",t.arrow)}},directives:[N.a,K.a,H.a,S.a,o.s,w.a,E.a],styles:[".option[_ngcontent-%COMP%] {white-space: normal}"],changeDetection:0}),e})();var Ae=n("yHor"),ke=n("zGJC"),Ie=n("u8jZ");function $e(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,2),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275element"](4,"tui-data-list-example-4"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](6,5),d["\u0275\u0275elementStart"](7,"tui-notification",6),d["\u0275\u0275i18nStart"](8,7),d["\u0275\u0275element"](9,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"tui-data-list-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"tui-doc-example",8),d["\u0275\u0275i18nAttributes"](12,9),d["\u0275\u0275element"](13,"tui-data-list-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"tui-doc-example",10),d["\u0275\u0275elementStart"](15,"tui-notification",6),d["\u0275\u0275i18nStart"](16,11),d["\u0275\u0275element"](17,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](18,"tui-data-list-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"tui-doc-example",12),d["\u0275\u0275i18nAttributes"](20,13),d["\u0275\u0275element"](21,"tui-data-list-example-5"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"tui-doc-example",14),d["\u0275\u0275i18nAttributes"](23,15),d["\u0275\u0275element"](24,"tui-data-list-example-6"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example4),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example3),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("content",e.example5),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example6)}}function Ve(e,t){1&e&&d["\u0275\u0275i18n"](0,20)}function _e(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,21),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275element"](2,"em"),d["\u0275\u0275element"](3,"code"),d["\u0275\u0275i18nEnd"]())}function Fe(e,t){1&e&&d["\u0275\u0275i18n"](0,22)}function ze(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,23),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"]())}function Re(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"h2"),d["\u0275\u0275text"](1,"DataList"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,Ve,1,0,"ng-template",16),d["\u0275\u0275template"](4,_e,4,0,"ng-template",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"h2"),d["\u0275\u0275text"](6,"OptGroup"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-doc-documentation"),d["\u0275\u0275template"](8,Fe,1,0,"ng-template",18),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"h2"),d["\u0275\u0275text"](10,"Option"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"tui-doc-documentation"),d["\u0275\u0275template"](12,ze,3,0,"ng-template",19),d["\u0275\u0275elementEnd"]())}function Ge(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",24),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,25),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",26),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,27),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",28),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}let Pe=(()=>{class e{constructor(){this.exampleModule=n.e(565).then(n.bind(null,"7EZ4")),this.exampleHtml=n.e(566).then(n.bind(null,"0uZ7")),this.example1={TypeScript:n.e(551).then(n.bind(null,"mT/k")),HTML:n.e(550).then(n.bind(null,"JISo"))},this.example2={TypeScript:n.e(553).then(n.bind(null,"kal1")),HTML:n.e(552).then(n.bind(null,"qmmB"))},this.example3={TypeScript:n.e(555).then(n.bind(null,"b1T+")),HTML:n.e(554).then(n.bind(null,"tAWm"))},this.example4={TypeScript:n.e(559).then(n.bind(null,"CqnN")),HTML:n.e(558).then(n.bind(null,"6C+V")),"custom-list.component.ts":n.e(556).then(n.bind(null,"CpUQ")),"custom-list.template.html":n.e(557).then(n.bind(null,"gzy9"))},this.example5={TypeScript:n.e(562).then(n.bind(null,"xm5v")),HTML:n.e(560).then(n.bind(null,"OWe+")),LESS:n.e(561).then(n.bind(null,"bOqr"))},this.example6={TypeScript:n.e(564).then(n.bind(null,"beTf")),HTML:n.e(563).then(n.bind(null,"Gd21"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-data-list"]],decls:4,vars:0,consts:function(){var e,t,n,o,i,a,r,l,u,c,p;return e=$localize`:␟f9d15c776cab9b795d1216098674f3a131512347␟7885675783778291482:${"\ufffd#2\ufffd"}:START_TAG_CODE:DataList${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to make lists or menus `,t=$localize`:␟dc60677d5a906e69f38a5cf9da7f2eb03931bea0␟7565716024468232322:Links`,n=$localize`:␟33c95483482ed8be69df5fcc5fa64b529f061437␟8571278609349877603: Import ${"\ufffd#9\ufffd"}:START_TAG_CODE:TuiArrowModule${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: if you need a rotated arrow `,o=$localize`:␟54b9e6243f5a4c0cd2ae56b50aafa4bc56a49365␟1033431736972256177:Submenu`,i=$localize`:␟992f9aba2dd9e12cab5fdf16b03c54dae8f9703d␟8033471336283613576: Import ${"\ufffd#17\ufffd"}:START_TAG_CODE:TuiMultiSelectModule${"\ufffd/#17\ufffd"}:CLOSE_TAG_CODE:`,a=$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`,r=$localize`:␟7d11463d87d1a3fe3dd9ad14fb82af39cc356bc4␟8684948632137613907:Options with long text`,l=$localize`:␟1396678e9343696e0ba4990b23fd3107ffaf1504␟314511360780648423: Content to display when there are no options inside `,u=$localize`:␟f57d8b200294d6e6e0b0f1fb7efe62ed640add20␟6904648380497078003: Native accessability role — ${"[\ufffd#1\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:listbox${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd#2\ufffd"}:START_EMPHASISED_TEXT:(default)${"\ufffd/#2\ufffd"}:CLOSE_EMPHASISED_TEXT: or ${"[\ufffd#1\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:menu${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: for common usage `,u=d["\u0275\u0275i18nPostprocess"](u),c=$localize`:␟8c918c45e9c54837c94f25f61a68988a3b272035␟2059095426405918218: Group label `,p=$localize`:␟1d0af9e8a86558c15856025e01265669cfcd5d2f␟1098780179882136171: Native accessability role. Set ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:aria-checked${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: for all roles except ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:menuitem${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: (see sample) `,[["header","DataList","package","CORE","type","components"],["pageTab",""],e,["id","custom","heading","Custom list",3,"content"],["id","links",3,"content",6,"heading"],["heading",t],[1,"tui-space_bottom-3"],n,["id","submenu",3,"content",6,"heading"],["heading",o],["id","control","heading","Form control",3,"content"],i,["id","complex",3,"content",6,"heading"],["heading",a],["id","long-text-options",3,"content",6,"heading"],["heading",r],["documentationPropertyName","emptyContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiDataListRole"],["documentationPropertyName","label","documentationPropertyMode","input","documentationPropertyType","string"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiOptionRole"],l,u,c,p=d["\u0275\u0275i18nPostprocess"](p),[1,"b-demo-steps"],$localize`:␟5328da1720bf2dec4cb435be14f74ff37d2609ef␟944971838556589360: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDataListModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,["filename","myComponent.module.ts",3,"code"],$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,$e,25,6,"ng-template",1),d["\u0275\u0275template"](2,Re,13,0,"ng-template",1),d["\u0275\u0275template"](3,Ge,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[m.a,s.a,f.a,G,P.a,Y,re,pe,De,Le,Ae.a,ke.a,Ie.a],encapsulation:2,changeDetection:0}),e})(),Ne=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,i.ReactiveFormsModule,u.Gb,p.pb,c.Ob,p.Db,c.Yb,p.y,c.Gb,c.fb,c.Vb,c.wb,c.ab,c.mb,u.bb,l.m,a.f.forChild(Object(l.t)(Pe)),u.sb,c.bb,p.bb,p.X,p.M,r.g,c.sb,c.lb]]}),e})()}}]);