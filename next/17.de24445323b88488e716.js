(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{COh3:function(t,e,n){"use strict";n.r(e),n.d(e,"ExampleTuiHostedDropdownModule",(function(){return Pt}));var o=n("An66"),i=n("3kIJ"),a=n("1VvW"),r=n("SVIu"),c=n("l4xa"),d=n("Qq0t"),l=n("dvRg"),p=n("cWK9"),u=n("KDbD"),s=n("kZht"),m=n("K/iL"),f=n("OZlg"),g=n("e0eB"),h=n("iyc4"),w=n("q7Lq"),y=n("SUM+"),C=n("zV1d"),b=n("ONKv"),x=n("cVyY"),v=n("xcN3");function D(t,e){if(1&t&&s["\u0275\u0275element"](0,"tui-svg",4),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275classProp"]("icon_rotated",t.open)}}function E(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",6),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"](2).onClick()})),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",t," ")}}function P(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"tui-data-list"),s["\u0275\u0275template"](1,E,2,1,"button",5),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.items)}}let T=(()=>{class t{constructor(){this.items=["Edit","Download","Rename","Delete"],this.open=!1}onClick(){this.open=!1,this.component&&this.component.nativeFocusableElement&&this.component.nativeFocusableElement.focus()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-hosted-dropdown-example-1"]],viewQuery:function(t,e){var n;1&t&&s["\u0275\u0275viewQuery"](d.TuiHostedDropdownComponent,!0),2&t&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(e.component=n.first)},decls:7,vars:3,consts:[["tuiDropdownAlign","left",3,"content","open","openChange"],["tuiButton","","type","button","appearance","flat",3,"iconRight"],["icon",""],["dropdown",""],["src","tuiIconChevronDown",1,"icon"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"]],template:function(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),s["\u0275\u0275listener"]("openChange",(function(t){return e.open=t})),s["\u0275\u0275elementStart"](1,"button",1),s["\u0275\u0275text"](2," Button "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,D,1,2,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](5,P,2,1,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"])),2&t){const t=s["\u0275\u0275reference"](4),n=s["\u0275\u0275reference"](6);s["\u0275\u0275property"]("content",n)("open",e.open),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("iconRight",t)}},directives:[w.a,y.a,C.a,b.a,x.a,o.s,v.a],styles:[".icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),t})();var S=n("Kw97"),V=n("5hw2"),O=n("TjIJ"),M=n("jTus"),_=n("4hRd"),k=n("fP8s"),I=n("OWJi");function H(t,e){if(1&t&&s["\u0275\u0275element"](0,"tui-svg",6),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275classProp"]("icon_rotated",t.open)}}function A(t,e){if(1&t&&s["\u0275\u0275element"](0,"tui-data-list-wrapper",11),2&t){const t=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("items",t.selectItems)}}function L(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",12),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"](2).onClick()})),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",t," ")}}function $(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"p",7),s["\u0275\u0275text"](1," There is "),s["\u0275\u0275elementStart"](2,"code"),s["\u0275\u0275text"](3,"let-activeZone"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](4," in dropdown template context to work with nested dropdowns "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-select",8),s["\u0275\u0275listener"]("ngModelChange",(function(e){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().selected=e})),s["\u0275\u0275text"](6," Nested Select "),s["\u0275\u0275template"](7,A,1,1,"tui-data-list-wrapper",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-data-list"),s["\u0275\u0275template"](9,L,2,1,"button",10),s["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("tuiActiveZoneParent",t)("ngModel",n.selected),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngForOf",n.items)}}let R=(()=>{class t{constructor(){this.items=["Edit","Download","Rename","Delete"],this.selectItems=["Item 1","Item 2"],this.open=!1,this.selected=null}onClick(){this.open=!1,this.component&&this.component.nativeFocusableElement&&this.component.nativeFocusableElement.focus()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-hosted-dropdown-example-2"]],viewQuery:function(t,e){var n;1&t&&s["\u0275\u0275viewQuery"](d.TuiHostedDropdownComponent,!0),2&t&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(e.component=n.first)},decls:9,vars:3,consts:[[3,"content","open","openChange"],["tuiGroup",""],["tuiButton","","type","button","size","l",1,"tui-group__auto-width-item"],["tuiIconButton","","type","button","tuiHostedDropdownHost","","title","Menu","size","l",1,"tui-group__auto-width-item",3,"iconRight"],["icon",""],["dropdown",""],["src","tuiIconChevronDown",1,"icon"],[1,"margin"],[1,"margin",3,"tuiActiveZoneParent","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],[3,"items"],["tuiOption","",3,"click"]],template:function(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),s["\u0275\u0275listener"]("openChange",(function(t){return e.open=t})),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"button",2),s["\u0275\u0275text"](3," Button "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](4,"button",3),s["\u0275\u0275template"](5,H,1,2,"ng-template",null,4,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](7,$,10,3,"ng-template",null,5,s["\u0275\u0275templateRefExtractor"])),2&t){const t=s["\u0275\u0275reference"](6),n=s["\u0275\u0275reference"](8);s["\u0275\u0275property"]("content",n)("open",e.open),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("iconRight",t)}},directives:[w.a,S.a,C.a,V.a,b.a,O.a,M.a,_.a,i.NgControlStatus,i.NgModel,k.a,x.a,o.s,I.a,v.a],styles:[".margin[_ngcontent-%COMP%]{margin:1rem}.icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),t})();var z=n("yZWP"),F=n("mCBh");function B(t,e){1&t&&s["\u0275\u0275element"](0,"tui-svg",10)}function N(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",8),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](t);const n=e.$implicit;return s["\u0275\u0275nextContext"](3).onClick(n)})),s["\u0275\u0275text"](1),s["\u0275\u0275template"](2,B,1,0,"tui-svg",9),s["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=s["\u0275\u0275nextContext"](3);s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",t," "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n.itemIsActive(t))}}function W(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"tui-opt-group"),s["\u0275\u0275template"](1,N,3,2,"button",7),s["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t)}}function G(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"tui-data-list"),s["\u0275\u0275template"](1,W,2,1,"tui-opt-group",6),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.items)}}let Z=(()=>{class t{constructor(){this.open=!1,this.items=[["By interest","By genre","By release year","By subject"],["Ascending","Descending"]],this.primary="By genre",this.ascending=!1}onClick(t){-1===this.items[0].indexOf(t)?this.ascending=t===this.items[1][0]:this.primary=t}itemIsActive(t){return t===this.primary||this.ascending&&t===this.items[1][0]||!this.ascending&&t===this.items[1][1]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-hosted-dropdown-example-3"]],decls:8,vars:7,consts:[[1,"wrapper"],[3,"content","open","openChange"],["tuiLink","","tabindex","0",1,"link"],["src","tuiIconSortDown",1,"sort"],["src","tuiIconChevronDown",1,"arrow"],["dropdown",""],[4,"ngFor","ngForOf"],["tuiOption","","class","item",3,"click",4,"ngFor","ngForOf"],["tuiOption","",1,"item",3,"click"],["src","tuiIconCheck",4,"ngIf"],["src","tuiIconCheck"]],template:function(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"tui-hosted-dropdown",1),s["\u0275\u0275listener"]("openChange",(function(t){return e.open=t})),s["\u0275\u0275elementStart"](2,"a",2),s["\u0275\u0275element"](3,"tui-svg",3),s["\u0275\u0275text"](4),s["\u0275\u0275element"](5,"tui-svg",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](6,G,2,1,"ng-template",null,5,s["\u0275\u0275templateRefExtractor"])),2&t){const t=s["\u0275\u0275reference"](7);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("content",t)("open",e.open),s["\u0275\u0275advance"](2),s["\u0275\u0275classProp"]("sort_ascending",e.ascending),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.primary," "),s["\u0275\u0275advance"](1),s["\u0275\u0275classProp"]("arrow_open",e.open)}},directives:[w.a,z.a,b.a,x.a,o.s,F.a,v.a,o.t],styles:[".wrapper[_ngcontent-%COMP%]{width:12.5rem;text-align:right}.link[_ngcontent-%COMP%]{font-size:1.0625rem}.sort[_ngcontent-%COMP%]{vertical-align:-.125rem}.sort_ascending[_ngcontent-%COMP%]{transform:scaleY(-1)}.item[_ngcontent-%COMP%]{min-width:12.5rem}.arrow[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out}.arrow_open[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),t})();var j=n("aPft"),U=n("QK/x"),J=n("D1a4"),K=n("XwTL");function Q(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-data-list",5),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().onClick()})),s["\u0275\u0275elementStart"](1,"button",6),s["\u0275\u0275text"](2,"Option 1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"button",6),s["\u0275\u0275text"](4,"Option 2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"button",6),s["\u0275\u0275text"](6,"Option 3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}}let q=(()=>{class t{constructor(){this.open=!1,this.index=0}onClick(){this.open=!1,this.index=1}noop(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-hosted-dropdown-example-4"]],decls:10,vars:3,consts:[["tuiTabs","",3,"activeItemIndex","activeItemIndexChange"],["tuiTab",""],["tuiDropdownHover","",1,"tui-space_right-6",3,"content","open","openChange"],["tuiTab","",3,"tui-tab-activate.stop"],["content",""],[3,"click"],["tuiOption",""]],template:function(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"nav",0),s["\u0275\u0275listener"]("activeItemIndexChange",(function(t){return e.index=t})),s["\u0275\u0275elementStart"](1,"button",1),s["\u0275\u0275text"](2,"Just a tab"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-hosted-dropdown",2),s["\u0275\u0275listener"]("openChange",(function(t){return e.open=t})),s["\u0275\u0275elementStart"](4,"button",3),s["\u0275\u0275listener"]("tui-tab-activate.stop",(function(){return e.noop()})),s["\u0275\u0275text"](5," Hoverable/Clickable "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](6,Q,7,0,"ng-template",null,4,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"button",1),s["\u0275\u0275text"](9,"Another tab"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275reference"](7);s["\u0275\u0275property"]("activeItemIndex",e.index),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",t)("open",e.open)}},directives:[U.a,J.a,w.a,K.a,x.a,v.a],encapsulation:2,changeDetection:0}),t})();var Y,X,tt=n("EPR0"),et=n("GdrL"),nt=n("71sB"),ot=n("yHor"),it=n("zGJC"),at=n("JPGa"),rt=n("u8jZ");Y=$localize`:␟a08f003389f6ccb0bce96c8b645480ef7281ab41␟837846934727852827:${"\ufffd#2\ufffd"}:START_TAG_CODE:tui-hosted-dropdown${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a wrapper for focusable elements to attach to them a dropdown. Working with keyboard is also included. `,X=$localize`:␟01ce75ce37e8be034de0cd5efc456c91c3b41a4a␟4558579794801553551: If it is not, mouseclick opens and closes a dropdown. A component uses the first focusable item inside component as a host for opening a dropdown. If you want another element to be host, use ${"\ufffd#7\ufffd"}:START_TAG_CODE:tuiHostedDropdownHost${"\ufffd/#7\ufffd"}:CLOSE_TAG_CODE: directive. `;const ct=["heading",$localize`:␟be00b142ca0e6e14140ce7c0edff70479c6f5246␟5686994794020204214:With custom host`],dt=["heading",$localize`:␟09abd055702f5b0ff600b7976e401647508e9dbf␟1177785284888813619:With link`],lt=["heading",$localize`:␟a6e67dfe580a45be70313500f543bbc15ec9760f␟2387705160888032979:On hover`];function pt(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,Y),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p"),s["\u0275\u0275text"](4," If a wrapped element is input, arrow down press opens a dropdown. The next press focuses the first item from the list. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"p"),s["\u0275\u0275i18nStart"](6,X),s["\u0275\u0275element"](7,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-doc-example",2),s["\u0275\u0275element"](9,"tui-hosted-dropdown-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](11,ct),s["\u0275\u0275element"](12,"tui-hosted-dropdown-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](14,dt),s["\u0275\u0275element"](15,"tui-hosted-dropdown-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](17,lt),s["\u0275\u0275elementStart"](18,"tui-notification"),s["\u0275\u0275text"](19," Add "),s["\u0275\u0275elementStart"](20,"code"),s["\u0275\u0275text"](21,"TuiDropdownHoverModule"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](22," to use it "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](23,"tui-hosted-dropdown-example-4"),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("content",t.example1),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",t.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",t.example3),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",t.example4)}}var ut,st,mt,ft,gt,ht,wt;function yt(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",12),s["\u0275\u0275elementStart"](1,"div"),s["\u0275\u0275i18n"](2,ut),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p",13),s["\u0275\u0275elementStart"](4,"button",14),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"](2).onClick()})),s["\u0275\u0275i18n"](5,st),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"button",15),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"](2).onClick()})),s["\u0275\u0275i18n"](7,mt),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}}function Ct(t,e){1&t&&s["\u0275\u0275i18n"](0,ft)}function bt(t,e){1&t&&s["\u0275\u0275i18n"](0,gt)}function xt(t,e){1&t&&s["\u0275\u0275text"](0," Content inside a dropdown ")}function vt(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-hosted-dropdown",6),s["\u0275\u0275listener"]("openChange",(function(e){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().open=e})),s["\u0275\u0275elementStart"](2,"tui-input",7),s["\u0275\u0275listener"]("ngModelChange",(function(e){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().onInput(e)})),s["\u0275\u0275text"](3," Start typing "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,yt,8,0,"ng-template",null,8,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](6,"tui-doc-documentation"),s["\u0275\u0275template"](7,Ct,1,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().open=e})),s["\u0275\u0275template"](8,bt,1,0,"ng-template",10),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().canOpenSelected=e})),s["\u0275\u0275template"](9,xt,1,0,"ng-template",11),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().content=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](10,"dropdown-controller-documentation")}if(2&t){const t=s["\u0275\u0275reference"](5),e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("content",e.template?t:e.content)("tuiDropdownAlign",e.align)("canOpen",e.canOpen)("tuiDropdownDirection",e.direction)("tuiDropdownLimitWidth",e.limitWidth)("tuiDropdownMinHeight",e.minHeight)("tuiDropdownMaxHeight",e.maxHeight)("open",e.open),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngModel",e.input),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("documentationPropertyValue",e.open),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.canOpenVariants)("documentationPropertyValue",e.canOpenSelected),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.contentVariants)("documentationPropertyValue",e.content)}}function Dt(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"ol",16),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,ht),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",17),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,wt),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",18),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",t.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",t.exampleInsertTemplate)}}ut=$localize`:␟7df916223beceabaff5ce2c5d10d8c6b6223994f␟3492793234322048620:Do you like using Taiga UI?`,st=$localize`:␟bfd030e3f9532861549e18ac90519715fe79495d␟1986526768401672090: Yes `,mt=$localize`:␟bfd030e3f9532861549e18ac90519715fe79495d␟1986526768401672090: Yes `,ft=$localize`:␟a102f9b79d10ce912dd520a7723676aaa1e1db15␟6128312972490006384: Open/close state `,gt=$localize`:␟863c6aa88fe2ac1d5c7c7787679d04aeaf6fa6ce␟5861935679849365104: A handler to enable/disable opening `,ht=$localize`:␟3fd326cbbddd540407cbe67384529cf3299d2dce␟1923024221701838874: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiHostedDropdownModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,wt=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Et=(()=>{class t{constructor(){this.exampleImportModule="import {TuiHostedDropdownModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiHostedDropdownModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-hosted-dropdown\n    [content]="dropdown"\n    [(open)]="open"\n>\n    <button tuiButton type="button">\n        Open menu\n    </button>\n</tui-hosted-dropdown>\n<ng-template #dropdown>\n    <tui-data-list>\n        <button *ngFor="let item of items" tuiOption (click)="onClick()">\n            {{item}}\n        </button>\n    </tui-data-list>\n</ng-template>\n',this.example1={TypeScript:"import {Component, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHostedDropdownComponent} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-hosted-dropdown-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample1 {\n    @ViewChild(TuiHostedDropdownComponent)\n    component?: TuiHostedDropdownComponent;\n\n    readonly items = ['Edit', 'Download', 'Rename', 'Delete'];\n\n    open = false;\n\n    onClick() {\n        this.open = false;\n\n        if (this.component && this.component.nativeFocusableElement) {\n            this.component.nativeFocusableElement.focus();\n        }\n    }\n}\n",HTML:'<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="dropdown"\n    [(open)]="open"\n>\n    <button tuiButton type="button" appearance="flat" [iconRight]="icon">\n        Button\n    </button>\n</tui-hosted-dropdown>\n<ng-template #icon>\n    <tui-svg\n        src="tuiIconChevronDown"\n        class="icon"\n        [class.icon_rotated]="open"\n    ></tui-svg>\n</ng-template>\n<ng-template #dropdown>\n    <tui-data-list>\n        <button *ngFor="let item of items" tuiOption (click)="onClick()">\n            {{item}}\n        </button>\n    </tui-data-list>\n</ng-template>\n',LESS:"@import 'taiga-ui-local';\n\n.icon {\n    .transition(transform);\n\n    &_rotated {\n        transform: rotate(180deg);\n    }\n}\n"},this.example2={TypeScript:"import {Component, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHostedDropdownComponent} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-hosted-dropdown-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample2 {\n    @ViewChild(TuiHostedDropdownComponent)\n    component?: TuiHostedDropdownComponent;\n\n    readonly items = ['Edit', 'Download', 'Rename', 'Delete'];\n\n    readonly selectItems = ['Item 1', 'Item 2'];\n\n    open = false;\n\n    selected = null;\n\n    onClick() {\n        this.open = false;\n\n        if (this.component && this.component.nativeFocusableElement) {\n            this.component.nativeFocusableElement.focus();\n        }\n    }\n}\n",HTML:'<tui-hosted-dropdown [content]="dropdown" [(open)]="open">\n    <div tuiGroup>\n        <button\n            tuiButton\n            type="button"\n            size="l"\n            class="tui-group__auto-width-item"\n        >\n            Button\n        </button>\n        <button\n            tuiIconButton\n            type="button"\n            tuiHostedDropdownHost\n            title="Menu"\n            size="l"\n            class="tui-group__auto-width-item"\n            [iconRight]="icon"\n        ></button>\n        <ng-template #icon>\n            <tui-svg\n                src="tuiIconChevronDown"\n                class="icon"\n                [class.icon_rotated]="open"\n            ></tui-svg>\n        </ng-template>\n    </div>\n</tui-hosted-dropdown>\n<ng-template #dropdown let-activeZone>\n    <p class="margin">\n        There is\n        <code>let-activeZone</code>\n        in dropdown template context to work with nested dropdowns\n    </p>\n    <tui-select\n        class="margin"\n        [tuiActiveZoneParent]="activeZone"\n        [(ngModel)]="selected"\n    >\n        Nested Select\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="selectItems"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-data-list>\n        <button *ngFor="let item of items" tuiOption (click)="onClick()">\n            {{item}}\n        </button>\n    </tui-data-list>\n</ng-template>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-hosted-dropdown-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample3 {\n    open = false;\n\n    readonly items = [\n        ['By interest', 'By genre', 'By release year', 'By subject'],\n        ['Ascending', 'Descending'],\n    ];\n\n    primary = 'By genre';\n\n    ascending = false;\n\n    onClick(item: string) {\n        if (this.items[0].indexOf(item) !== -1) {\n            this.primary = item;\n\n            return;\n        }\n\n        this.ascending = item === this.items[1][0];\n    }\n\n    itemIsActive(item: string): boolean {\n        return (\n            item === this.primary ||\n            (this.ascending && item === this.items[1][0]) ||\n            (!this.ascending && item === this.items[1][1])\n        );\n    }\n}\n",HTML:'<div class="wrapper">\n    <tui-hosted-dropdown [content]="dropdown" [(open)]="open">\n        <a tuiLink tabindex="0" class="link">\n            <tui-svg\n                src="tuiIconSortDown"\n                class="sort"\n                [class.sort_ascending]="ascending"\n            ></tui-svg>\n            {{primary}}\n            <tui-svg\n                src="tuiIconChevronDown"\n                class="arrow"\n                [class.arrow_open]="open"\n            ></tui-svg>\n        </a>\n    </tui-hosted-dropdown>\n</div>\n\n<ng-template #dropdown>\n    <tui-data-list>\n        <tui-opt-group *ngFor="let group of items">\n            <button\n                *ngFor="let item of group"\n                tuiOption\n                class="item"\n                (click)="onClick(item)"\n            >\n                {{item}}\n                <tui-svg\n                    *ngIf="itemIsActive(item)"\n                    src="tuiIconCheck"\n                ></tui-svg>\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n',LESS:"@import 'taiga-ui-local';\n\n.wrapper {\n    width: 12.5rem;\n    text-align: right;\n}\n\n.link {\n    font-size: 1.0625rem;\n}\n\n.sort {\n    vertical-align: -0.125rem;\n\n    &_ascending {\n        transform: scale(1, -1);\n    }\n}\n\n.item {\n    min-width: 12.5rem;\n}\n\n.arrow {\n    .transition(transform);\n\n    &_open {\n        transform: rotate(180deg);\n    }\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-hosted-dropdown-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample4 {\n    open = false;\n\n    index = 0;\n\n    onClick() {\n        this.open = false;\n        this.index = 1;\n    }\n\n    noop() {}\n}\n",HTML:'<nav tuiTabs [(activeItemIndex)]="index">\n    <button tuiTab>Just a tab</button>\n    <tui-hosted-dropdown\n        tuiDropdownHover\n        class="tui-space_right-6"\n        [content]="content"\n        [(open)]="open"\n    >\n        <button tuiTab (tui-tab-activate.stop)="noop()">\n            Hoverable/Clickable\n        </button>\n        <ng-template #content>\n            <tui-data-list (click)="onClick()">\n                <button tuiOption>Option 1</button>\n                <button tuiOption>Option 2</button>\n                <button tuiOption>Option 3</button>\n            </tui-data-list>\n        </ng-template>\n    </tui-hosted-dropdown>\n    <button tuiTab>Another tab</button>\n</nav>\n'},this.minHeight=d.DEFAULT_MIN_HEIGHT,this.maxHeight=d.DEFAULT_MAX_HEIGHT,this.alignVariants=["right","left"],this.align=this.alignVariants[0],this.directionVariants=[null,"top","bottom"],this.direction=this.directionVariants[0],this.limitWidthVariants=["auto","fixed","min"],this.limitWidth=this.limitWidthVariants[0],this.open=!1,this.input="",this.canOpenVariants=[!0,"getter this.input.length > 2"],this.canOpenSelected=this.canOpenVariants[0],this.contentVariants=["Template","Custom string"],this.content=this.contentVariants[0]}get template(){return"Template"===this.content}get canOpen(){return!0===this.canOpenSelected||this.input.length>2}onInput(t){this.input=t,this.open=this.canOpen}onClick(){this.open=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["example-tui-hosted-dropdown"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(s.forwardRef)(()=>t)}])],decls:4,vars:0,consts:[["header","HostedDropdown","package","CORE","type","components"],["pageTab",""],["id","menu","heading","Menu",3,"content"],["id","tuiDropdownHost",3,"content",6,"heading"],["id","native",3,"content",6,"heading"],["id","hover",3,"content",6,"heading"],[3,"content","tuiDropdownAlign","canOpen","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","open","openChange"],[1,"input",3,"ngModel","ngModelChange"],["dropdown",""],["documentationPropertyName","open","documentationPropertyMode","input-output","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","canOpen","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],[1,"buttons"],["tuiButton","","type","button","size","m",1,"button",3,"click"],["tuiButton","","type","button","appearance","secondary","size","m",1,"button",3,"click"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,e){1&t&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,pt,24,4,"ng-template",1),s["\u0275\u0275template"](2,vt,11,14,"ng-template",1),s["\u0275\u0275template"](3,Dt,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[f.a,g.a,h.a,T,R,Z,j.a,q,tt.a,w.a,y.a,et.a,nt.a,i.NgControlStatus,i.NgModel,ot.a,it.a,at.a,C.a,rt.a],styles:[".input[_ngcontent-%COMP%]{width:15.625rem}.dropdown[_ngcontent-%COMP%]{padding:1.25rem}.buttons[_ngcontent-%COMP%]{display:flex;margin-bottom:0}.button[_ngcontent-%COMP%]{flex:1}.button[_ngcontent-%COMP%]:first-child{margin-right:.75rem}"],changeDetection:0}),t})(),Pt=(()=>{class t{}return t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.c,i.ReactiveFormsModule,p.c,i.FormsModule,d.TuiHostedDropdownModule,l.TuiDropdownHoverModule,d.TuiNotificationModule,l.TuiTabsModule,l.TuiInputModule,d.TuiButtonModule,d.TuiGroupModule,d.TuiSvgModule,d.TuiLinkModule,l.TuiSelectModule,c.TuiActiveZoneModule,d.TuiDropdownControllerModule,d.TuiDataListModule,l.TuiDataListWrapperModule,u.a,r.i,a.f.forChild(Object(r.p)(Et))]]}),t})()},JPGa:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var o,i,a,r,c,d,l,p=n("K/iL"),u=n("kZht"),s=n("yZWP"),m=n("1VvW"),f=n("yHor"),g=n("zGJC");function h(t,e){1&t&&(u["\u0275\u0275i18nStart"](0,i),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function w(t,e){1&t&&u["\u0275\u0275i18n"](0,a)}function y(t,e){1&t&&(u["\u0275\u0275i18nStart"](0,r),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function C(t,e){1&t&&u["\u0275\u0275i18n"](0,c)}function b(t,e){1&t&&(u["\u0275\u0275i18nStart"](0,d),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function x(t,e){1&t&&u["\u0275\u0275i18n"](0,l)}o=$localize`:␟f10667f722f7715235528f21ab06bf1972765a90␟8873256266701530790: Can be expanded with ${"\ufffd#2\ufffd"}:START_LINK: TuiDropdownController ${"\ufffd/#2\ufffd"}:CLOSE_LINK:`,i=$localize`:␟29ee50e0356e64d0ffccdddf141779d9cd095b01␟6653398799439643090: Align of dropdown (does not work together with ${"\ufffd#1\ufffd"}:START_TAG_CODE:limitWidth === 'fixed'${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,a=$localize`:␟e22e15f84dea771ad0d475438facbb62916362a6␟8159982415408745443: Set a vertical direction of dropdown `,r=$localize`:␟9d04bf6b5b07b256fb525b7d199cf6aaf3e0242f␟4854354731206615624: Put dropdown to the side, instead of top or bottom. Use in combination with ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownAlign${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,c=$localize`:␟6318612e87a79a0fddc36fb9036f4c24ab5b898e␟6158927642754956379: Limit width of dropdown `,d=$localize`:␟4055bf3cc12efa85e894fbf1941120ec2cde619c␟4679692758727259251: Minimum height to calculate that dropdown fits to setted ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownDirection${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,l=$localize`:␟48d54f1b6fe93aa4dd68b859fd2eeb1c169f8cea␟5657510849972139844: Maximum height of dropdown `;let v=(()=>{class t{constructor(t){this.documentedComponent=t}}return t.\u0275fac=function(e){return new(e||t)(u["\u0275\u0275directiveInject"](p.a))},t.\u0275cmp=u["\u0275\u0275defineComponent"]({type:t,selectors:[["dropdown-controller-documentation"]],decls:14,vars:9,consts:[[1,"tui-text_h6"],["tuiLink","","target","_blank","routerLink","/directives/dropdown-controller"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidthT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"h6",0),u["\u0275\u0275i18nStart"](1,o),u["\u0275\u0275element"](2,"a",1),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"p"),u["\u0275\u0275text"](4," Requires you to import "),u["\u0275\u0275elementStart"](5,"code"),u["\u0275\u0275text"](6,"TuiDropdownControllerModule"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-doc-documentation"),u["\u0275\u0275template"](8,h,2,0,"ng-template",2),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownAlign=t})),u["\u0275\u0275template"](9,w,1,0,"ng-template",3),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownDirection=t})),u["\u0275\u0275template"](10,y,2,0,"ng-template",4),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownDirection=t})),u["\u0275\u0275template"](11,C,1,0,"ng-template",5),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownLimitWidth=t})),u["\u0275\u0275template"](12,b,2,0,"ng-template",6),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMinHeight=t})),u["\u0275\u0275template"](13,x,1,0,"ng-template",7),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMaxHeight=t})),u["\u0275\u0275elementEnd"]()),2&t&&(u["\u0275\u0275advance"](8),u["\u0275\u0275property"]("documentationPropertyValues",e.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",e.documentedComponent.dropdownAlign),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",e.documentedComponent.dropdownDirection),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.documentedComponent.dropdownDirection),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",e.documentedComponent.dropdownLimitWidth),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.documentedComponent.dropdownMinHeight),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.documentedComponent.dropdownMaxHeight))},directives:[s.a,m.e,f.a,g.a],encapsulation:2,changeDetection:0}),t})()},"K/iL":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=new(n("kZht").InjectionToken)("Component extends AbstractExample class")},KDbD:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n("An66"),i=n("1VvW"),a=n("SVIu"),r=n("Qq0t"),c=n("kZht");let d=(()=>{class t{}return t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.c,i.f,a.m,r.TuiLinkModule]]}),t})()}}]);