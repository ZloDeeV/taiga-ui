(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{z4ca:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiEditorModule",function(){return k});var o=n("SVse"),a=n("s7LF"),i=n("iInd"),r=n("zIlJ"),l=n("tSAz"),d=n("ErM8"),c=n("gjpr"),u=n("8Y7J"),m=n("hCbB"),s=n("0etI"),p=n("ReYJ"),f=n("WQeZ"),b=n("WDJX"),y=n("rgoq"),g=n("PYg8"),h=n("8zc/"),x=n("mfYq"),E=n("KJ6d");let C=(()=>{class e{constructor(){this.model='WYSIWYG (What you see is what you get) \u2014 Rich Text Editor for using with Angular forms.<p><font size="6">Heading</font></p><font size="4">Lorem ipsum dolor sit amet <font color="#ff78a7">consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span style="background-color: rgb(163, 129, 255);">Ut enim </span></font><blockquote>ad minim veniam, <u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote><p style="text-align: right;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'}onClick(){this.model="<b>HTML FTW!</b>"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-editor-example-1"]],decls:12,vars:3,consts:function(){let e;return e=$localize`:␟89fd372770204e6ff2d0de55746e615910809a98␟1989142630043887249: Describe a problem
`,[["tuiButton","","type","button",3,"click"],["exampleText","Describe a problem with templates",1,"editor",3,"ngModel","ngModelChange"],e,[3,"content"]]},template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275elementStart"](1,"button",0),u["\u0275\u0275listener"]("click",function(){return t.onClick()}),u["\u0275\u0275text"](2," Set value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-editor",1),u["\u0275\u0275listener"]("ngModelChange",function(e){return t.model=e}),u["\u0275\u0275i18n"](4,2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"h4"),u["\u0275\u0275text"](6,"HTML:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](7,"tui-editor-socket",3),u["\u0275\u0275elementStart"](8,"h4"),u["\u0275\u0275text"](9,"Text:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"p"),u["\u0275\u0275text"](11),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngModel",t.model),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("content",t.model),u["\u0275\u0275advance"](4),u["\u0275\u0275textInterpolate"](t.model))},directives:[h.a,x.a,a.NgControlStatus,a.NgModel,E.a],styles:[".editor[_ngcontent-%COMP%]{max-height:18.75rem}"],changeDetection:0}),e})();var S=n("mbit"),T=n("F2nr"),v=n("R5K/"),w=n("EI/i"),P=n("JKY/");function V(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,2),u["\u0275\u0275element"](2,"a",3),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-notification",4),u["\u0275\u0275i18n"](4,5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",6),u["\u0275\u0275element"](6,"tui-editor-example-1"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("content",e.example1)}}function M(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,11),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function I(e,t){1&e&&u["\u0275\u0275i18n"](0,12)}function z(e,t){1&e&&u["\u0275\u0275i18n"](0,13)}function D(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275elementStart"](1,"tui-editor",7),u["\u0275\u0275text"](2," Start typing "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-doc-documentation"),u["\u0275\u0275template"](4,M,2,0,"ng-template",8),u["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().disabled=t}),u["\u0275\u0275template"](5,I,1,0,"ng-template",9),u["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().exampleText=t}),u["\u0275\u0275template"](6,z,1,0,"ng-template",10),u["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tools=t}),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](7,"inherited-documentation")}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("exampleText",e.exampleText)("readOnly",e.readOnly)("tools",e.tools)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("documentationPropertyValue",e.disabled),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.exampleText),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.toolsVariants)("documentationPropertyValue",e.tools)}}function A(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",14),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,15),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",16),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,17),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",18),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml)}}let O=(()=>{class e extends m.a{constructor(){super(...arguments),this.exampleModule=n.e(627).then(n.bind(null,"ly5y")),this.exampleHtml=n.e(628).then(n.bind(null,"jg7D")),this.example1={TypeScript:n.e(626).then(n.bind(null,"Tbb6")),HTML:n.e(624).then(n.bind(null,"vr3U")),LESS:n.e(625).then(n.bind(null,"Iy4d"))},this.control=new a.FormControl,this.toolsVariants=[l.o,[l.i.Bold,l.i.Italic,l.i.Strikethrough,l.i.HR]],this.tools=this.toolsVariants[0]}}return e.\u0275fac=function(t){return $(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-editor"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:s.a,useExisting:Object(u.forwardRef)(()=>e)}]),u["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:function(){let e,t,n,o,a,i,r,l;return e=$localize`:␟3f66bec530b67bd9ec24c9458b653602473dee5c␟6793261396403784865: Rich Text Editor for using with Angular forms. For safety reasons use a ${"\ufffd#2\ufffd"}:START_LINK: sanitizer ${"\ufffd/#2\ufffd"}:CLOSE_LINK: with this component. `,t=$localize`:␟e6b4e9f9fd1f4d932da45ab3092e930ff3fadf35␟2608797396215002752: This component is experimental. Use it with caution. `,n=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,o=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,a=$localize`:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `,i=$localize`:␟0cea9742234b055b1bce51470d8f030dd089acde␟2877889858952730048: Allowed edit tools `,r=$localize`:␟03a323cd3ce898d115bcdb8364920447fb35afb8␟1340683940823692236: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiEditorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,l=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Editor","package","ADDON-EDITOR","type","components"],["pageTab",""],e,["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["status","warning",1,"tui-space_top-4"],t,["id","basic","heading",n,3,"content"],[3,"formControl","focusable","exampleText","readOnly","tools","pseudoInvalid","pseudoFocused","pseudoHovered"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tools","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiEditorTool>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],o,a,i,[1,"b-demo-steps"],r,["filename","myComponent.module.ts",3,"code"],l,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,V,7,1,"ng-template",1),u["\u0275\u0275template"](2,D,8,12,"ng-template",1),u["\u0275\u0275template"](3,A,10,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[p.a,f.a,b.a,i.e,y.a,g.a,C,S.a,x.a,a.NgControlStatus,a.FormControlDirective,T.a,v.a,w.a,P.a],encapsulation:2,changeDetection:0}),e})();const $=u["\u0275\u0275getInheritedFactory"](O);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[o.c,a.FormsModule,a.ReactiveFormsModule,l.g,l.h,d.Gb,d.ab,c.a,r.m,d.yb,i.f.forChild(Object(r.t)(O))]]}),e})()}}]);