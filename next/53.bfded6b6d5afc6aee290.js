(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{pzXc:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFieldErrorModule",(function(){return Ve}));var r=n("An66"),o=n("3kIJ"),a=n("1VvW"),l=n("SVIu"),i=n("Qq0t"),u=n("dvRg"),s=n("cWK9"),m=n("kZht"),d=n("OZlg"),c=n("e0eB"),p=n("yZWP"),f=n("iyc4"),h=n("1Nkj"),b=n("GdrL"),g=n("71sB"),V=n("2wTY"),C=n("gEyt"),x=n("kNZY");const y=["label",$localize`:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`],E=["label",$localize`:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`];var T;T=$localize`:␟740e12c058c1a630b11478b272764bf7d7d5f028␟124757051077109908: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `;const v=/^[a-zA-Z]+$/;function S(e){return e.value&&v.test(e.value)?null:{other:"Only latin letters are allowed"}}function F(e){return"42"===e.value?null:{other:"Wrong"}}let w=(()=>{class e{constructor(){this.testValue1=new o.FormControl("",[o.Validators.required,S]),this.testForm=new o.FormGroup({testValue1:this.testValue1,testValue2:new o.FormControl("",[o.Validators.required,F])}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-1"]],decls:13,vars:3,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",1,"tui-space_bottom-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2"],["tuiLabel","",6,"label"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"label",1),m["\u0275\u0275i18nAttributes"](2,y),m["\u0275\u0275elementStart"](3,"tui-input",2),m["\u0275\u0275text"](4," to the Question of Life, the Universe, and Everything "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-field-error",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"label",4),m["\u0275\u0275i18nAttributes"](7,E),m["\u0275\u0275elementStart"](8,"tui-input",5),m["\u0275\u0275text"](9," Latin letters only "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](10,"tui-field-error",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"p"),m["\u0275\u0275i18n"](12,T),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,b.a,g.a,o.NgControlStatus,o.FormControlName,V.b,C.b,x.a],encapsulation:2,changeDetection:0}),e})();var L=n("l4xa"),A=n("zV1d");const _=["errorContent"],N=["bigErrorContent"],O=["label",$localize`:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`];function I(e,t){1&e&&(m["\u0275\u0275text"](0," Secret number must contain "),m["\u0275\u0275elementStart"](1,"strong"),m["\u0275\u0275text"](2,"10 or 12 digits"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](3," . "))}function G(e,t){1&e&&(m["\u0275\u0275text"](0," This company is already registered "),m["\u0275\u0275elementStart"](1,"button",9),m["\u0275\u0275text"](2," It is mine "),m["\u0275\u0275elementEnd"]())}const D=function(){return["required","inn"]},z=/^\d{10}$/,M=/^\d{12}$/;let P=(()=>{class e{constructor(){this.errorContent="",this.bigErrorContent="",this.testValue2=new o.FormControl(""),this.testForm=new o.FormGroup({testValue1:new o.FormControl("",[o.Validators.required,this.getSecretValidator()]),testValue2:this.testValue2}),this.companyValidator=e=>e.value?{inn:new L.TuiValidationError(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([o.Validators.required,this.companyValidator])}getSecretValidator(){return e=>e.value&&(z.test(e.value)||M.test(e.value))?null:{secret:new L.TuiValidationError(this.errorContent)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-2"]],viewQuery:function(e,t){var n;1&e&&(m["\u0275\u0275viewQuery"](_,!0),m["\u0275\u0275viewQuery"](N,!0)),2&e&&(m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.errorContent=n.first),m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.bigErrorContent=n.first))},decls:12,vars:5,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"order"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2"],["tuiButton","","type","button",1,"tui-space_top-2"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"label",1),m["\u0275\u0275element"](2,"tui-input",2),m["\u0275\u0275template"](3,I,4,0,"ng-template",null,3,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275element"](5,"tui-field-error",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"label",5),m["\u0275\u0275i18nAttributes"](7,O),m["\u0275\u0275element"](8,"tui-input",6),m["\u0275\u0275template"](9,G,3,0,"ng-template",null,7,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275element"](11,"tui-field-error",8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("order",m["\u0275\u0275pureFunction0"](4,D)),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,b.a,g.a,o.NgControlStatus,o.FormControlName,V.b,C.b,x.a,A.a],encapsulation:2,changeDetection:0}),e})();var k=n("bYz0"),q=n("CDxv");const R=["phoneErrorContent"];function $(e,t){1&e&&m["\u0275\u0275text"](0," Invalid phone number length ")}function j(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"label",4),m["\u0275\u0275elementStart"](1,"span",5),m["\u0275\u0275element"](2,"tui-input-phone",6),m["\u0275\u0275elementStart"](3,"button",7),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const n=t.index;return m["\u0275\u0275nextContext"]().removePhone(n)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,$,1,0,"ng-template",null,8,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275element"](6,"tui-field-error",9),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.index;m["\u0275\u0275propertyInterpolate1"]("label","Phone number ",e+1,""),m["\u0275\u0275advance"](2),m["\u0275\u0275propertyInterpolate"]("formControlName",e),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),m["\u0275\u0275advance"](4),m["\u0275\u0275propertyInterpolate"]("formControlName",e)}}let B=(()=>{class e{constructor(){this.phoneErrorContent="",this.testForm=new o.FormGroup({phones:new o.FormArray([new o.FormControl("",[o.Validators.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new o.FormControl("",this.addValidators()))}removePhone(e){this.formData.removeAt(e);let t=0;for(;t<=1&&this.formData.controls[t];)this.formData.controls[t].setValidators([o.Validators.required,this.getPhoneLengthValidator()]),t++}addValidators(){return this.formData.controls.length<2?[o.Validators.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return e=>12!==e.value.length?{lenght:new L.TuiValidationError(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return e=>e.controls.length<2||e.controls.filter(e=>e.errors).length&&e.controls.length?{length:new L.TuiValidationError("You should add at least 2 phone number")}:null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-3"]],viewQuery:function(e,t){var n;1&e&&m["\u0275\u0275viewQuery"](R,!0),2&e&&m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.phoneErrorContent=n.first)},decls:5,vars:2,consts:[[3,"formGroup"],["tuiLabel","","formArrayName","phones","class","tui-space_bottom-4",3,"label",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error"],["tuiButton","","type","button","size","s",1,"tui-space_top-4",3,"click"],["tuiLabel","","formArrayName","phones",1,"tui-space_bottom-4",3,"label"],[1,"row"],["tuiTextfieldAutocomplete","off","tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["tuiIconButton","","type","button","size","m","title","Delete phone number","appearance","icon","icon","tuiIconTrash",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275template"](1,j,7,4,"label",1),m["\u0275\u0275element"](2,"tui-field-error",2),m["\u0275\u0275elementStart"](3,"button",3),m["\u0275\u0275listener"]("click",(function(){return t.addPhone()})),m["\u0275\u0275text"](4," Add a phone number "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.formData.controls))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,r.s,x.a,o.FormArrayName,A.a,h.a,k.a,q.b,V.b,o.NgControlStatus,o.FormControlName,C.b],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),e})();var U=n("ROBh"),Q=n("BwBJ");const W=/^[a-zA-Z]+$/;let Y=(()=>{class e{constructor(e,t){this.fb=e,this.form=this.fb.group({text:["\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",o.Validators.required]}),this.form.controls.text.setAsyncValidators(function(e){return t=>t.value&&W.test(t.value)?Object(U.a)(null):Object(U.a)({error:new L.TuiValidationError("Only latin letters allowed")}).pipe(e?Object(Q.a)(0):Object(Q.a)(5e3))}(t)),this.form.controls.text.markAsTouched()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](o.FormBuilder),m["\u0275\u0275directiveInject"](L.TUI_IS_CYPRESS))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-4"]],decls:5,vars:1,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"tui-input",2),m["\u0275\u0275text"](3," Enter some text "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"tui-field-error",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&m["\u0275\u0275property"]("formGroup",t.form)},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,b.a,g.a,o.NgControlStatus,o.FormControlName,x.a],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),e})();var Z,H=n("3p4X"),J=n("SrNW"),K=n("YtkY"),X=n("jIqt"),ee=n("okGw");function te(e){return"Maximum length \u2014 "+e.requiredLength}function ne(e){return"Minimum length \u2014 "+e.requiredLength}Z=$localize`:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `;let re=(()=>{class e{constructor(){this.testValue1=new o.FormControl("",[o.Validators.minLength(4),o.Validators.maxLength(4)]),this.testValue2=new o.FormControl("",[o.Validators.required,o.Validators.email]),this.testValue3=new o.FormControl(2,[o.Validators.min(3)]),this.testForm=new o.FormGroup({testValue1:this.testValue1,testValue2:this.testValue2,testValue3:this.testValue3}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-5"]],features:[m["\u0275\u0275ProvidersFeature"]([{provide:u.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:te,minlength:ne,min:Object(H.a)(2e3).pipe(Object(J.a)(e=>!e,!1),Object(K.a)(e=>e?"Fix please":"Min number 3"),Object(X.a)("Min number 3"))}}])],decls:13,vars:2,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2"],["tuiLabel","","label","Minimum and maximum length",1,"tui-space_bottom-4"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1"],["tuiLabel","","label","Minimum number"],["formControlName","testValue3","tuiTextfieldSize","m"],["formControlName","testValue3"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"label",1),m["\u0275\u0275elementStart"](2,"tui-input",2),m["\u0275\u0275i18n"](3,Z),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"tui-field-error",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"label",4),m["\u0275\u0275elementStart"](6,"tui-input",5),m["\u0275\u0275text"](7," 4 letters word... "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](8,"tui-field-error",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"label",7),m["\u0275\u0275elementStart"](10,"tui-input-count",8),m["\u0275\u0275text"](11," number "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](12,"tui-field-error",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,b.a,g.a,o.NgControlStatus,o.FormControlName,V.b,C.b,x.a,ee.a],encapsulation:2,changeDetection:0}),e})();var oe=n("u8jZ");const ae=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var le;le=$localize`:␟3f27c72dea09d55e44acaf9c2da962eca6048e41␟3207439097338829675:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:FieldError${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: shows a validation error of a field. If you do not use forms, see ${"\ufffd#3\ufffd"}:START_LINK:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiError${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK: . `,le=m["\u0275\u0275i18nPostprocess"](le);const ie=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],ue=["heading",$localize`:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`],se=["heading",$localize`:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`],me=["heading",$localize`:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`],de=["heading",$localize`:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`],ce=function(){return["/components/error"]};function pe(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,le),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275elementStart"](3,"a",3),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](6,ie),m["\u0275\u0275element"](7,"tui-field-error-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](9,ue),m["\u0275\u0275element"](10,"tui-field-error-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"tui-doc-example",6),m["\u0275\u0275i18nAttributes"](12,se),m["\u0275\u0275element"](13,"tui-field-error-example-3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"tui-doc-example",7),m["\u0275\u0275i18nAttributes"](15,me),m["\u0275\u0275element"](16,"tui-field-error-example-4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"tui-doc-example",8),m["\u0275\u0275i18nAttributes"](18,de),m["\u0275\u0275element"](19,"tui-field-error-example-5"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("routerLink",m["\u0275\u0275pureFunction0"](6,ce)),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example3),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example4),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example5)}}var fe,he;function be(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",9),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,fe),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,he),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",11),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}fe=$localize`:␟642fb8eaf79852b6d813ddb81c4dbf7f3529ebeb␟6845184443201904975: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFieldErrorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,he=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let ge=(()=>{class e{constructor(){this.exampleImportModule="import {ReactiveFormsModule} from '@angular/forms';\nimport {TuiFieldErrorModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        ReactiveFormsModule,\n        TuiFieldErrorModule\n    ],\n...\n",this.exampleInsertTemplate='<ng-container [formGroup]="testForm">\n    <tui-input formControlName="testValue1"></tui-input>\n    <tui-field-error formControlName="testValue1"></tui-field-error>\n</ng-container>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nexport function passwordValidator(field: AbstractControl): Validators | null {\n    return field.value && latinChars.test(field.value)\n        ? null\n        : {\n              other: 'Only latin letters are allowed',\n          };\n}\n\nexport function superComputerValidator(field: AbstractControl): Validators | null {\n    return field.value === '42'\n        ? null\n        : {\n              other: 'Wrong',\n          };\n}\n\n@Component({\n    selector: 'tui-field-error-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample1 {\n    readonly testValue1 = new FormControl('', [Validators.required, passwordValidator]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: new FormControl('', [Validators.required, superComputerValidator]),\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label\n        i18n-label\n        tuiLabel\n        label="Type the ultimate answer"\n        class="tui-space_bottom-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n\n    <label tuiLabel i18n-label label="Set a password">\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n\n    <p i18n>\n        If you need to show validation message as early as a user started to\n        type something, subscribe on form value changes and call markAsTouched\n        on control on first value change\n    </p>\n</form>\n'},this.example2={TypeScript:"import {Component, OnInit, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    FormControl,\n    FormGroup,\n    ValidationErrors,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\nconst secretRegexTen = /^\\d{10}$/;\nconst secretRegexTwelve = /^\\d{12}$/;\n\nexport function innValidator(field: AbstractControl): any {\n    return field.value &&\n        (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n        ? null\n        : {\n              inn: new TuiValidationError('Secret number contains 10 or 12 digits'),\n          };\n}\n\n@Component({\n    selector: 'tui-field-error-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample2 implements OnInit {\n    @ViewChild('errorContent')\n    errorContent: PolymorpheusContent = '';\n\n    @ViewChild('bigErrorContent')\n    bigErrorContent: PolymorpheusContent = '';\n\n    readonly testValue2 = new FormControl('');\n\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl('', [Validators.required, this.getSecretValidator()]),\n        testValue2: this.testValue2,\n    });\n\n    ngOnInit() {\n        this.testValue2.setValidators([Validators.required, this.companyValidator]);\n    }\n\n    private readonly companyValidator = (\n        field: AbstractControl,\n    ): ValidationErrors | null =>\n        field.value\n            ? {\n                  inn: new TuiValidationError(this.bigErrorContent),\n              }\n            : null;\n\n    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value &&\n            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n                ? null\n                : {\n                      secret: new TuiValidationError(this.errorContent),\n                  };\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel label="Secret number">\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input>\n\n        <ng-template #errorContent>\n            Secret number must contain\n            <strong>10 or 12 digits</strong>\n            .\n        </ng-template>\n\n        <tui-field-error\n            formControlName="testValue1"\n            [order]="[\'required\', \'inn\']"\n        ></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Enter company name"\n        class="tui-space_top-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input>\n\n        <ng-template #bigErrorContent>\n            This company is already registered\n            <button tuiButton type="button" class="tui-space_top-2">\n                It is mine\n            </button>\n        </ng-template>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n</form>\n'},this.example3={TypeScript:"import {Component, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    FormArray,\n    FormControl,\n    FormGroup,\n    ValidationErrors,\n    ValidatorFn,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-field-error-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample3 {\n    @ViewChild('phoneErrorContent')\n    phoneErrorContent: PolymorpheusContent = '';\n\n    testForm = new FormGroup({\n        phones: new FormArray(\n            [new FormControl('', [Validators.required, this.getPhoneLengthValidator()])],\n            [this.getPhoneArrayValidator()],\n        ),\n    });\n\n    get formData() {\n        return <FormArray>this.testForm.get('phones');\n    }\n\n    addPhone() {\n        this.formData.push(new FormControl('', this.addValidators()));\n    }\n\n    removePhone(index: number) {\n        this.formData.removeAt(index);\n\n        let n = 0;\n\n        while (n <= 1 && this.formData.controls[n]) {\n            this.formData.controls[n].setValidators([\n                Validators.required,\n                this.getPhoneLengthValidator(),\n            ]);\n            n++;\n        }\n    }\n\n    addValidators(): ValidationErrors | null {\n        return this.formData.controls.length < 2\n            ? [Validators.required, this.getPhoneLengthValidator()]\n            : null;\n    }\n\n    private getPhoneLengthValidator(): (\n        field: AbstractControl,\n    ) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value.length !== 12\n                ? {\n                      lenght: new TuiValidationError(this.phoneErrorContent),\n                  }\n                : null;\n    }\n\n    private getPhoneArrayValidator(): ValidatorFn {\n        return ((array: FormArray): ValidationErrors | null =>\n            array.controls.length < 2 ||\n            (!!array.controls.filter(item => item.errors).length && array.controls.length)\n                ? {\n                      length: new TuiValidationError(\n                          'You should add at least 2 phone number',\n                      ),\n                  }\n                : null) as ValidatorFn;\n    }\n}\n",HTML:'<form [formGroup]="testForm">\n    <label\n        *ngFor="let phone of formData.controls; let i = index"\n        tuiLabel\n        label="Phone number {{i + 1}}"\n        formArrayName="phones"\n        class="tui-space_bottom-4"\n    >\n        <span class="row">\n            <tui-input-phone\n                formControlName="{{i}}"\n                tuiTextfieldAutocomplete="off"\n                tuiTextfieldSize="m"\n                class="input"\n                [tuiTextfieldLabelOutside]="true"\n            ></tui-input-phone>\n            <button\n                tuiIconButton\n                type="button"\n                size="m"\n                title="Delete phone number"\n                appearance="icon"\n                icon="tuiIconTrash"\n                class="tui-space_left-2 icon"\n                (click)="removePhone(i)"\n            ></button>\n        </span>\n        <ng-template #phoneErrorContent>\n            Invalid phone number length\n        </ng-template>\n        <tui-field-error formControlName="{{i}}"></tui-field-error>\n    </label>\n\n    <tui-field-error\n        formArrayName="phones"\n        class="form-array-error"\n    ></tui-field-error>\n\n    <button\n        tuiButton\n        type="button"\n        size="s"\n        class="tui-space_top-4"\n        (click)="addPhone()"\n    >\n        Add a phone number\n    </button>\n</form>\n',LESS:".input {\n    width: 20rem;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n}\n\n.form-array-error {\n    font-size: 0.875rem;\n}\n"},this.example4={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {\n    AbstractControl,\n    AsyncValidatorFn,\n    FormBuilder,\n    FormGroup,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS, TuiValidationError} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nfunction asyncValidatorFn(isCypress: boolean): AsyncValidatorFn {\n    return (field: AbstractControl) => {\n        return field.value && latinChars.test(field.value)\n            ? of(null)\n            : of({\n                  error: new TuiValidationError('Only latin letters allowed'),\n              }).pipe(isCypress ? delay(0) : delay(5000));\n    };\n}\n\n@Component({\n    selector: 'tui-field-error-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample4 {\n    readonly form: FormGroup;\n\n    constructor(\n        @Inject(FormBuilder) private readonly fb: FormBuilder,\n        @Inject(TUI_IS_CYPRESS) isCypress: boolean,\n    ) {\n        this.form = this.fb.group({\n            text: ['\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442', Validators.required],\n        });\n\n        this.form.controls['text'].setAsyncValidators(asyncValidatorFn(isCypress));\n        this.form.controls['text'].markAsTouched();\n    }\n}\n",HTML:'<form [formGroup]="form">\n    <div class="tui-form__row">\n        <tui-input formControlName="text" class="input">\n            Enter some text\n        </tui-input>\n        <tui-field-error formControlName="text"></tui-field-error>\n    </div>\n</form>\n',LESS:".input {\n    width: 20rem;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n}\n\n.form-array-error {\n    font-size: 0.875rem;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\nimport {interval} from 'rxjs';\nimport {map, scan, startWith} from 'rxjs/operators';\n\nexport function maxLengthValidator(context: {requiredLength: string}): string {\n    return `Maximum length \u2014 ${context.requiredLength}`;\n}\n\nexport function minLengthValidator(context: {requiredLength: string}): string {\n    return `Minimum length \u2014 ${context.requiredLength}`;\n}\n\n@Component({\n    selector: 'tui-field-error-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: 'Enter this!',\n                email: 'Enter a valid email',\n                maxlength: maxLengthValidator,\n                minlength: minLengthValidator,\n                min: interval(2000).pipe(\n                    scan(acc => !acc, false),\n                    map(val => (val ? 'Fix please' : 'Min number 3')),\n                    startWith('Min number 3'),\n                ),\n            },\n        },\n    ],\n})\nexport class TuiFieldErrorExample5 {\n    readonly testValue1 = new FormControl('', [\n        Validators.minLength(4),\n        Validators.maxLength(4),\n    ]);\n\n    readonly testValue2 = new FormControl('', [Validators.required, Validators.email]);\n\n    readonly testValue3 = new FormControl(2, [Validators.min(3)]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: this.testValue2,\n        testValue3: this.testValue3,\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel label="Enter an email" class="tui-space_bottom-4">\n        <tui-input\n            i18n\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Required\n        </tui-input>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        label="Minimum and maximum length"\n        class="tui-space_bottom-4"\n    >\n        <tui-input formControlName="testValue1" tuiTextfieldSize="m">\n            4 letters word...\n        </tui-input>\n\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n\n    <label tuiLabel label="Minimum number">\n        <tui-input-count formControlName="testValue3" tuiTextfieldSize="m">\n            number\n        </tui-input-count>\n\n        <tui-field-error formControlName="testValue3"></tui-field-error>\n    </label>\n</form>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-field-error"]],decls:4,vars:0,consts:[["header","FieldError","package","KIT","type","components"],["pageTab",""],[6,"pageTab"],["tuiLink","",3,"routerLink"],["id","base",3,"content",6,"heading"],["id","patterns",3,"content",6,"heading"],["id","formArray",3,"content",6,"heading"],["id","async",3,"content",6,"heading"],["id","customMessages",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,pe,20,7,"ng-template",1),m["\u0275\u0275template"](2,be,10,2,"ng-template",2),m["\u0275\u0275i18nAttributes"](3,ae),m["\u0275\u0275elementEnd"]())},directives:[d.a,c.a,p.a,a.e,f.a,w,P,B,Y,re,oe.a],encapsulation:2,changeDetection:0}),e})(),Ve=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[u.TuiInputModule,o.ReactiveFormsModule,r.c,u.TuiFieldErrorModule,i.TuiLabelModule,u.TuiInputPhoneModule,u.TuiInputCountModule,i.TuiLinkModule,l.i,s.c,i.TuiButtonModule,i.TuiTextfieldControllerModule,a.f.forChild(Object(l.p)(ge))]]}),e})()}}]);