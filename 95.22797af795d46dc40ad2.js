(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{kJ53:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPrimitiveTextfieldModule",function(){return ve});var i=n("SVse"),o=n("s7LF"),a=n("iInd"),r=n("zIlJ"),l=n("ErM8"),u=n("QKt8"),c=n("E4J5"),d=n("8Y7J");let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[o.FormsModule,i.c,r.q,r.p,l.Db,u.w]]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({}),e})();var m=n("ZGKY"),f=n("gjpr"),h=n("IAR6"),x=n("0etI"),g=n("ryvL"),y=n("ReYJ"),b=n("WQeZ"),v=n("PYg8"),C=n("rgoq"),T=n("WDJX"),P=n("0Ksk"),V=n("mrFk"),S=n("Oore"),E=n("UBas"),w=n("nsWG"),I=n("A1rY"),M=n("pQ6J");function L(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-svg",4),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().togglePasswordVisibility()}),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](),t=d["\u0275\u0275reference"](6);d["\u0275\u0275property"]("tuiHint",t)("src",e.icon)}}function O(e,t){if(1&e&&d["\u0275\u0275text"](0),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275textInterpolate"](e.hint)}}const _=["*"];let A=(()=>{class e extends P.c{constructor(e,t){super(e,t),this.isPasswordHidden=!0}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return!!this.textfield&&this.textfield.focused}get icon(){return this.isPasswordHidden?"tuiIconHideLarge":"tuiIconShowLarge"}get hint(){return this.isPasswordHidden?"Show password":"Hide password"}get inputType(){return this.isPasswordHidden?"password":"text"}onValueChange(e){this.updateValue(e)}onFocused(e){this.updateFocused(e)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](o.NgControl,10),d["\u0275\u0275directiveInject"](d.ChangeDetectorRef))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-primitive-textfield-example-1"]],viewQuery:function(e,t){if(1&e&&d["\u0275\u0275viewQuery"](l.Nb,1),2&e){let e;d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.textfield=e.first)}},features:[d["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:_,decls:7,vars:7,consts:[[3,"tuiTextfieldIcon","invalid","focusable","disabled","readOnly","value","valueChange","focusedChange"],["tuiTextfield","",3,"type"],["iconContent",""],["hintContent",""],["tuiHintId","not_required",1,"icon",3,"tuiHint","src","click"]],template:function(e,t){if(1&e&&(d["\u0275\u0275projectionDef"](),d["\u0275\u0275elementStart"](0,"tui-primitive-textfield",0),d["\u0275\u0275listener"]("valueChange",function(e){return t.onValueChange(e)})("focusedChange",function(e){return t.onFocused(e)}),d["\u0275\u0275projection"](1),d["\u0275\u0275element"](2,"input",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,L,1,2,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](5,O,1,1,"ng-template",null,3,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("tuiTextfieldIcon",e)("invalid",t.computedInvalid)("focusable",t.focusable)("disabled",t.disabled)("readOnly",t.readOnly)("value",t.value),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("type",t.inputType)}},directives:[V.a,S.a,E.b,w.a,I.a,M.b],styles:["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}"],changeDetection:0}),e})();var $=n("93Am"),D=n("W527"),z=n("jo1D"),R=n("z37J");function F(e,t){1&e&&d["\u0275\u0275element"](0,"tui-svg",7)}let N=(()=>{class e extends P.c{constructor(e,t){super(e,t)}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return!!this.textfield&&this.textfield.focused}onValueChange(e){this.updateValue(e)}onFocused(e){this.updateFocused(e)}getFallbackValue(){return""}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](o.NgControl,10),d["\u0275\u0275directiveInject"](d.ChangeDetectorRef))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-primitive-textfield-example-2"]],viewQuery:function(e,t){if(1&e&&d["\u0275\u0275viewQuery"](l.Nb,1),2&e){let e;d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.textfield=e.first)}},features:[d["\u0275\u0275ProvidersFeature"]([Object(l.Cc)({iconCleaner:"tuiIconChevronUp"})]),d["\u0275\u0275InheritDefinitionFeature"]],decls:11,vars:5,consts:function(){let e,t;return e=$localize`:␟f37c19d3d4ffc35f74d9ae6f62d686cb69b3890c␟270336154752876683:Modified cleaner icon`,t=$localize`:␟cf50d9a6ca344e37ff60255e1c9bd1332e292b01␟7576419264776917124:Override modified cleaner icon`,[["tuiTextfieldSize","m",1,"b-form",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["tuiLabel","","label",e],[3,"value","valueChange","focusedChange"],["tuiTextfield","","type","email"],["tuiLabel","","label",t,1,"tui-space_top-4"],[3,"value","iconCleaner","valueChange","focusedChange"],["iconCleaner",""],["src","tuiIconDraft"]]},template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"label",1),d["\u0275\u0275elementStart"](2,"tui-primitive-textfield",2),d["\u0275\u0275listener"]("valueChange",function(e){return t.onValueChange(e)})("focusedChange",function(e){return t.onFocused(e)}),d["\u0275\u0275text"](3," Type an email "),d["\u0275\u0275element"](4,"input",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"label",4),d["\u0275\u0275elementStart"](6,"tui-primitive-textfield",5),d["\u0275\u0275listener"]("valueChange",function(e){return t.onValueChange(e)})("focusedChange",function(e){return t.onFocused(e)}),d["\u0275\u0275text"](7," Type an email "),d["\u0275\u0275element"](8,"input",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](9,F,1,0,"ng-template",null,6,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](10);d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("value",t.value),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("value",t.value)("iconCleaner",e)}},directives:[o["\u0275angular_packages_forms_forms_ba"],o.NgControlStatusGroup,o.NgForm,$.b,D.b,z.b,R.a,V.a,S.a,w.a,I.a],encapsulation:2,changeDetection:0}),e})();var H=n("mbit"),k=n("HawL"),G=n("bJ++"),j=n("QKYA"),K=n("WhGw"),Q=n("PRyZ"),J=n("Uem1"),B=n("ZMgf"),U=n("fIai"),Y=n("F2nr"),q=n("R5K/"),W=n("BnKs"),Z=n("GaFN"),X=n("EI/i"),ee=n("pW6V"),te=n("JKY/");const ne=["interactiveContent"];function ie(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,2),d["\u0275\u0275element"](2,"strong"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275elementStart"](4,"tui-notification",4),d["\u0275\u0275text"](5," Simplified version of "),d["\u0275\u0275elementStart"](6,"a",5),d["\u0275\u0275elementStart"](7,"code"),d["\u0275\u0275text"](8,"InputPassword"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"tui-primitive-textfield-example-1",6),d["\u0275\u0275listener"]("ngModelChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().password=t}),d["\u0275\u0275text"](10," Type a password "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"tui-doc-example",7),d["\u0275\u0275elementStart"](12,"tui-notification",4),d["\u0275\u0275text"](13," If you need to set some attributes or listen to events on native "),d["\u0275\u0275elementStart"](14,"code"),d["\u0275\u0275text"](15,"input"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](16," , you can put it inside with "),d["\u0275\u0275elementStart"](17,"code"),d["\u0275\u0275text"](18,"Textfield"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](19," directive as shown below "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"tui-primitive-textfield-example-2",8),d["\u0275\u0275listener"]("ngModelChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().example2Value=t}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",e.password),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("ngModel",e.example2Value)}}function oe(e,t){if(1&e&&(d["\u0275\u0275element"](0,"tui-avatar",21),d["\u0275\u0275text"](1)),2&e){const e=t.$implicit;d["\u0275\u0275property"]("text",e),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function ae(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-svg",22),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).onClick()}),d["\u0275\u0275elementEnd"]()}}function re(e,t){1&e&&d["\u0275\u0275i18n"](0,23)}function le(e,t){1&e&&d["\u0275\u0275i18n"](0,24)}function ue(e,t){1&e&&d["\u0275\u0275i18n"](0,25)}function ce(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,26),d["\u0275\u0275elementStart"](1,"a",27),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"p"),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"]())}function de(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,28),d["\u0275\u0275elementStart"](1,"a",29),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"]())}function se(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,30),d["\u0275\u0275elementStart"](1,"a",29),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"]())}function pe(e,t){1&e&&d["\u0275\u0275i18n"](0,31)}function me(e,t){1&e&&d["\u0275\u0275i18n"](0,32)}function fe(e,t){1&e&&d["\u0275\u0275i18n"](0,33)}function he(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"tui-primitive-textfield",9),d["\u0275\u0275listener"]("valueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().value=t}),d["\u0275\u0275text"](2," Component label "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,oe,2,2,"ng-template",null,10,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](5,ae,1,0,"ng-template",null,11,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementStart"](7,"tui-doc-documentation"),d["\u0275\u0275template"](8,re,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().disabled=t}),d["\u0275\u0275template"](9,le,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().editable=t}),d["\u0275\u0275template"](10,ue,1,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().filler=t}),d["\u0275\u0275template"](11,ce,5,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().selectedIcon=t}),d["\u0275\u0275template"](12,de,3,0,"ng-template",16),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().prefix=t}),d["\u0275\u0275template"](13,se,3,0,"ng-template",17),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().postfix=t}),d["\u0275\u0275template"](14,pe,1,0,"ng-template",18),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().readOnly=t}),d["\u0275\u0275template"](15,me,1,0,"ng-template",19),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().invalid=t}),d["\u0275\u0275template"](16,fe,1,0,"ng-template",20),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().value=t}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](17,"hint-controller-documentation"),d["\u0275\u0275element"](18,"textfield-controller-documentation"),d["\u0275\u0275element"](19,"inherited-documentation")}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("focusable",e.focusable)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldInputMode",e.inputMode)("tuiTextfieldMaxLength",e.maxLength)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiTextfieldType",e.type)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("disabled",e.disabled)("editable",e.editable)("filler",e.filler)("tuiTextfieldIcon",e.iconContent)("tuiTextfieldIconLeft",e.iconLeft)("readOnly",e.readOnly)("prefix",e.prefix)("postfix",e.postfix)("invalid",e.invalid)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("value",e.value),d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("documentationPropertyValue",e.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.editable),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.filler),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.selectedIcon),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.prefix),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.postfix),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.readOnly),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.invalid),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.value)}}function xe(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",34),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,35),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",36),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,37),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",38),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}const ge="Bell";let ye=(()=>{class e extends g.a{constructor(){super(...arguments),this.interactiveIcon="",this.example1={TypeScript:n.e(1081).then(n.bind(null,"pEDV")),HTML:n.e(1079).then(n.bind(null,"Ud2Z")),LESS:n.e(1080).then(n.bind(null,"nONQ"))},this.example2={TypeScript:n.e(1083).then(n.bind(null,"ZwH/")),HTML:n.e(1082).then(n.bind(null,"UFAc"))},this.exampleModule=n.e(1084).then(n.bind(null,"K/l8")),this.exampleHtml=n.e(1085).then(n.bind(null,"3YuB")),this.themes=["Taiga UI","Bootstrap","Material"],this.theme=this.themes[0],this.iconVariants=["","tuiIconSearchLarge","Interactive content"],this.selectedIcon=this.iconVariants[0],this.iconLeftVariants=["","tuiIconPiechartLarge","tuiIconCardsLarge"],this.iconLeft="",this.iconAlignVariants=["left","right"],this.iconAlign=this.iconAlignVariants[1],this.typeVariants=["text","email","password","tel","url"],this.type="text",this.cleaner=!1,this.editable=!0,this.filler="",this.prefix="",this.postfix="",this.maxLengthVariants=[10],this.maxLength=null,this.autocompleteVariants=["off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.autocomplete="",this.inputModeVariants=["text","numeric"],this.inputMode=this.inputModeVariants[0],this.customContentVariants=[ge,"<span>LongTextContent</span>"],this.customContentSelected=null,this.password="",this.example2Value="mail@example.com",this.value="",this.exampleText="",this.disabled=!1,this.readOnly=!1,this.labelOutside=!1,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[2],this.hintContentVariants=["Ivan Ivanov"],this.hintDirectionVariants=["left","right","bottom-left","bottom-right","bottom-middle","top-left","top-right","top-middle"],this.hintModeVariants=["error","onDark"],this.invalid=!1,this.hintContent=null,this.hintDirection=this.hintDirectionVariants[2],this.hintMode=null}get customContent(){return this.customContentSelected===ge?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get iconContent(){return""===this.selectedIcon?"":this.interactiveIcon&&"tuiIconSearchLarge"!==this.selectedIcon?this.interactiveIcon:"tuiIconSearchLarge"}get isBootstrap(){return this.theme===this.themes[1]}get isMaterial(){return this.theme===this.themes[2]}get placeholder(){return this.isBootstrap?"Type a value":"Theming sample"}get customizationSize(){return this.isBootstrap?"s":"l"}onClick(){console.info("Interactive icon clicked")}}return e.\u0275fac=function(t){return be(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-primitive-textfield"]],viewQuery:function(e,t){if(1&e&&d["\u0275\u0275viewQuery"](ne,1),2&e){let e;d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.interactiveIcon=e.first)}},features:[d["\u0275\u0275ProvidersFeature"]([{provide:x.a,useExisting:Object(d.forwardRef)(()=>e)}]),d["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:function(){let e,t,n,i,o,a,r,l,u,c,s,p,m,f;return e=$localize`:␟0a19998f90076b7d85207fea44209d8d3b9fcb5d␟5194718672583852151: PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Does not work with Angular forms${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,t=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,n=$localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`,i=$localize`:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `,o=$localize`:␟77c762ac18c6306d12dce74874a5fd96978eee9c␟8717823635323002701: Native input allows inputting `,a=$localize`:␟f29074f0478b44322b1dc718b7bb03de7fe2b4d8␟4151292360106248726: Gray background text as a hint (e.g. HH:MM:SS for time) `,r=$localize`:␟50404f2c99866f73bc25b4a3c5c51e10841a340b␟4610700863550936654: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ${"\ufffd#1\ufffd"}:START_LINK:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:SvgService${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:${"\ufffd#3\ufffd"}:START_PARAGRAPH: Requires you to import ${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiTextfieldControllerModule${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_PARAGRAPH:`,r=d["\u0275\u0275i18nPostprocess"](r),l=$localize`:␟33c14f705b72544c3881517af4881b87d397d8f6␟4259878861045276785: Uneditable text before value. For example, currency symbol in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputNumber${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK: . `,u=$localize`:␟d24fc719133afa770a5d50c273a967e6b447bda8␟1195719053204982784: Uneditable text after value. For example, currency symbol in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputNumber${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK: . `,c=$localize`:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `,s=$localize`:␟28900c6ae3d4c1ba49407b4808673d3273f10d95␟6963908824346094281: Invalid state `,p=$localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `,m=$localize`:␟d9976023c60bcfadd11e6b545cc66aeee8d631af␟6346211509068135211: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPrimitiveTextfieldModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,f=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","PrimitiveTextfield","package","CORE","type","components"],["pageTab",""],e,["id","example-size","heading",t,3,"content"],[1,"tui-space_bottom-4","b-form"],["tuiLink","","routerLink","/components/input-password"],[1,"b-form",3,"ngModel","ngModelChange"],["id","options","heading",n,3,"content"],[3,"ngModel","ngModelChange"],[3,"focusable","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldInputMode","tuiTextfieldMaxLength","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiTextfieldType","pseudoPressed","pseudoFocused","pseudoHovered","disabled","editable","filler","tuiTextfieldIcon","tuiTextfieldIconLeft","readOnly","prefix","postfix","invalid","tuiHintContent","tuiHintDirection","tuiHintMode","value","valueChange"],["template",""],["interactiveContent",""],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","filler","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldIcon","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","readOnly","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","invalid","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input-output","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["size","xs",1,"avatar",3,"text"],["src","tuiIconCalendarLarge",1,"icon-button",3,"click"],i,o,a,r,["tuiLink","","routerLink","/services/svg-service"],l,["tuiLink","","routerLink","/components/input-number"],u,c,s,p,[1,"b-demo-steps"],m,["filename","myComponent.module.ts",3,"code"],f,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,ie,21,4,"ng-template",1),d["\u0275\u0275template"](2,he,20,36,"ng-template",1),d["\u0275\u0275template"](3,xe,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[y.a,b.a,v.a,C.a,T.a,a.e,A,o.NgControlStatus,o.NgModel,N,H.a,V.a,S.a,k.b,z.b,G.b,j.b,K.b,Q.b,D.b,$.b,J.b,E.b,B.b,U.a,Y.a,q.a,W.a,Z.a,X.a,ee.a,I.a,te.a],styles:["[_nghost-%COMP%]{display:block}.icon-button[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{margin-right:.5rem}.label[_ngcontent-%COMP%]{width:22.5rem}.input[_ngcontent-%COMP%]{margin-top:.25rem}"],changeDetection:0}),e})();const be=d["\u0275\u0275getInheritedFactory"](ye);let ve=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[i.c,o.FormsModule,o.ReactiveFormsModule,f.a,m.a,h.a,l.Ob,l.Yb,l.Gb,l.tb,u.z,l.yb,l.Vb,l.ab,c.c,l.ub,u.zb,s,l.xb,p,r.m,a.f.forChild(Object(r.t)(ye))]]}),e})()}}]);