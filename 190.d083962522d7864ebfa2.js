(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{"0s/6":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTableBarModule",function(){return L});var a=n("SVse"),o=n("s7LF"),l=n("iInd"),i=n("oCJ7"),r=n("zIlJ"),c=n("ErM8"),s=n("QKt8"),d=n("E4J5"),m=n("PVb5"),u=n("XNiG"),p=n("quSY"),b=n("1G5W"),f=n("8Y7J"),h=n("ReYJ"),y=n("WQeZ"),S=n("PYg8"),E=n("8zc/"),T=n("kB7g");const C=["tableBarTemplate"];function x(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"div",2),f["\u0275\u0275elementStart"](1,"button",3),f["\u0275\u0275text"](2," Save "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"button",4),f["\u0275\u0275listener"]("click",function(){return(0,t.$implicit)()}),f["\u0275\u0275text"](4," Cancel "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"button",5),f["\u0275\u0275text"](6," Delete "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]())}let v=(()=>{class e{constructor(e){this.tableBarsService=e,this.tableBarTemplate="",this.subscription=new p.a}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0,adaptive:!0}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(f["\u0275\u0275directiveInject"](m.b))},e.\u0275cmp=f["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-table-bar-example-1"]],viewQuery:function(e,t){if(1&e&&f["\u0275\u0275viewQuery"](C,1),2&e){let e;f["\u0275\u0275queryRefresh"](e=f["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=e.first)}},decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["tuiMode","onDark",1,"content"],["tuiButton","","type","button","size","m"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-space_left-3",3,"click"],["tuiButton","","type","button","appearance","outline","size","m","icon","tuiIconTrashLarge",1,"delete-button"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"button",0),f["\u0275\u0275listener"]("click",function(){return t.showTableBar()}),f["\u0275\u0275text"](1," Show TableBar\n"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275template"](2,x,7,0,"ng-template",null,1,f["\u0275\u0275templateRefExtractor"]))},directives:[E.a,T.a],styles:[".content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),e})();var g=n("F2nr"),B=n("R5K/"),w=n("JKY/");const P=["tableBarTemplate"];function V(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"p"),f["\u0275\u0275i18n"](1,2),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](2,"tui-doc-example",3),f["\u0275\u0275element"](3,"tui-table-bar-example-1"),f["\u0275\u0275elementEnd"]()),2&e){const e=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("content",e.example1)}}function $(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"p"),f["\u0275\u0275text"](1,"Some template"),f["\u0275\u0275elementEnd"]())}function _(e,t){1&e&&f["\u0275\u0275i18n"](0,10)}function O(e,t){1&e&&f["\u0275\u0275i18n"](0,11)}function A(e,t){1&e&&f["\u0275\u0275i18n"](0,12)}function z(e,t){if(1&e){const e=f["\u0275\u0275getCurrentView"]();f["\u0275\u0275elementStart"](0,"div"),f["\u0275\u0275elementStart"](1,"button",4),f["\u0275\u0275listener"]("click",function(){return f["\u0275\u0275restoreView"](e),f["\u0275\u0275nextContext"]().showTableBar()}),f["\u0275\u0275text"](2," Show tableBar "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"button",5),f["\u0275\u0275listener"]("click",function(){return f["\u0275\u0275restoreView"](e),f["\u0275\u0275nextContext"]().destroy()}),f["\u0275\u0275text"](4," Hide tableBar "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275template"](5,$,2,0,"ng-template",null,6,f["\u0275\u0275templateRefExtractor"]),f["\u0275\u0275element"](7,"br"),f["\u0275\u0275elementStart"](8,"tui-doc-documentation"),f["\u0275\u0275template"](9,_,1,0,"ng-template",7),f["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return f["\u0275\u0275restoreView"](e),f["\u0275\u0275nextContext"]().adaptive=t}),f["\u0275\u0275template"](10,O,1,0,"ng-template",8),f["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return f["\u0275\u0275restoreView"](e),f["\u0275\u0275nextContext"]().hasCloseButton=t}),f["\u0275\u0275template"](11,A,1,0,"ng-template",9),f["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return f["\u0275\u0275restoreView"](e),f["\u0275\u0275nextContext"]().mode=t}),f["\u0275\u0275elementEnd"]()}if(2&e){const e=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](9),f["\u0275\u0275property"]("documentationPropertyValue",e.adaptive),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("documentationPropertyValue",e.hasCloseButton),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode)}}function D(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"ol",13),f["\u0275\u0275elementStart"](1,"li"),f["\u0275\u0275elementStart"](2,"p"),f["\u0275\u0275i18nStart"](3,14),f["\u0275\u0275element"](4,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](5,"tui-doc-code",15),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"li"),f["\u0275\u0275elementStart"](7,"p"),f["\u0275\u0275i18nStart"](8,16),f["\u0275\u0275element"](9,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](10,"tui-doc-code",15),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](11,"li"),f["\u0275\u0275elementStart"](12,"p"),f["\u0275\u0275i18nStart"](13,17),f["\u0275\u0275element"](14,"code"),f["\u0275\u0275element"](15,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](16,"tui-doc-code",18),f["\u0275\u0275element"](17,"tui-doc-code",19),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](18,"li"),f["\u0275\u0275elementStart"](19,"p"),f["\u0275\u0275i18nStart"](20,20),f["\u0275\u0275element"](21,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](22,"tui-doc-code",21),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e){const e=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("code",e.exampleModule),f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("code",e.exampleHtml),f["\u0275\u0275advance"](6),f["\u0275\u0275property"]("code",e.exampleServiceUsageHtml),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("code",e.exampleServiceUsage),f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("code",e.exampleLazyModule)}}let k=(()=>{class e{constructor(e){this.tableBarsService=e,this.destroy$=new u.a,this.tableBarTemplate="",this.exampleServiceUsage=n.e(1751).then(n.bind(null,"FKyJ")),this.exampleServiceUsageHtml=n.e(1750).then(n.bind(null,"k96x")),this.exampleLazyModule=n.e(1748).then(n.bind(null,"+2ZW")),this.exampleModule=n.e(1749).then(n.bind(null,"1LAd")),this.exampleHtml=n.e(1752).then(n.bind(null,"PNa5")),this.example1={TypeScript:n.e(1747).then(n.bind(null,"lEih")),HTML:n.e(1745).then(n.bind(null,"RyNo")),LESS:n.e(1746).then(n.bind(null,"Qs03"))},this.modeVariants=["onLight","onDark"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new p.a}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe(Object(b.a)(this.destroy$)).subscribe()}destroy(){this.destroy$.next()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(f["\u0275\u0275directiveInject"](m.b))},e.\u0275cmp=f["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-table-bar"]],viewQuery:function(e,t){if(1&e&&f["\u0275\u0275viewQuery"](P,1),2&e){let e;f["\u0275\u0275queryRefresh"](e=f["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=e.first)}},decls:4,vars:0,consts:function(){let e,t,n,a,o,l,i,r,c;return e=$localize`:␟d4eaacf31ad166bfe74dbf267afaff7d767d4dad␟7392151570764225525: It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. `,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,n=$localize`:␟5e641f8103cca3a413f65da8c27fcc74a78fbef3␟5646260285050734970: Adaprive content `,a=$localize`:␟0508167899eda99f73e069ef49027af94e6b0328␟4329350149148955327: Enable close button `,o=$localize`:␟cdcabff292f0314e30e6f31102dd5ede8bb860a0␟1527305502164610498: Light / dark mode `,l=$localize`:␟33b59d28b627891220e6c360c8ffb07eef6c76cb␟5586136887716454770: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTableBarsHostModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,i=$localize`:␟066cf82b786e3393ee3efed2ca0016a89d7a4357␟5654054825567970286: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tui-table-bars-host${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: into your app.template `,r=$localize`:␟b7d425f4c801f0a1d193d06c1862a5bc0cc48c14␟2388724752770660394: Use ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to returened ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE:`,r=f["\u0275\u0275i18nPostprocess"](r),c=$localize`:␟ba1892794b314f679ac905e2ef9357d65d51e41e␟282224705145462981: If you use component in lazy loading modules, do not forget to pass into ${"\ufffd#21\ufffd"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\ufffd/#21\ufffd"}:CLOSE_TAG_CODE: of component where you open table bar `,[["header","TableBarsService","package","ADDON-TABLEBARS","path","addon-tablebars/services/table-bars.service.ts"],["pageTab",""],e,["id","base","heading",t,3,"content"],["tuiButton","","type","button","size","m",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],n,a,o,[1,"b-demo-steps"],l,["filename","app.module.ts",3,"code"],i,r,["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],c,["filename","customNotification.component.ts",3,"code"]]},template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-doc-page",0),f["\u0275\u0275template"](1,V,4,1,"ng-template",1),f["\u0275\u0275template"](2,z,12,4,"ng-template",1),f["\u0275\u0275template"](3,D,23,5,"ng-template",1),f["\u0275\u0275elementEnd"]())},directives:[h.a,y.a,S.a,v,E.a,g.a,B.a,w.a],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=f["\u0275\u0275defineInjector"]({imports:[[a.c,c.ab,i.g,d.c,s.zb,s.bb,c.yb,o.FormsModule,c.Db,r.m,l.f.forChild(Object(r.t)(k))]]}),e})()}}]);