(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{Cfkv:function(e,t,r){"use strict";r.r(t),r.d(t,"ExampleFormatModule",function(){return O});var n=r("SVse"),a=r("s7LF"),o=r("iInd"),m=r("zIlJ"),l=r("ErM8"),i=r("QKt8"),c=r("8Y7J"),p=r("ReYJ"),u=r("WQeZ"),s=r("PYg8"),d=r("0Ksk"),f=r("I6X8"),b=r("Fxf+");let h=(()=>{class e{constructor(){this.parametersForm=new a.FormGroup({value:new a.FormControl(11)})}get px(){const{value:e}=this.parametersForm.value;return Object(d.od)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(c["\u0275\u0275text"](0),c["\u0275\u0275elementStart"](1,"form",0),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"tui-input-number",2),c["\u0275\u0275text"](4," value "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275textInterpolate1"]("'",t.px,"' = px(value); "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[a["\u0275angular_packages_forms_forms_ba"],a.NgControlStatusGroup,a.FormGroupDirective,f.a,b.a,a.NgControlStatus,a.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var S=r("oCJ7"),C=r("9AoC"),v=r("cizK"),x=r("+PAw"),g=r("mIiq");function y(e,t){if(1&e&&c["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("items",e.items)}}let F=(()=>{class e{constructor(){this.items=["USD","RUB","643","KZT","051","KRW","CHF","EUR","GBP"],this.parametersForm=new a.FormGroup({currency:new a.FormControl(null)})}get currency(){const{currency:e}=this.parametersForm.value;return Object(S.h)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-3"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(c["\u0275\u0275text"](0),c["\u0275\u0275elementStart"](1,"form",0),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"tui-select",2),c["\u0275\u0275text"](4," currency "),c["\u0275\u0275template"](5,y,1,1,"tui-data-list-wrapper",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275textInterpolate1"]("",t.currency," = getCurrencySymbol(currency); "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[a["\u0275angular_packages_forms_forms_ba"],a.NgControlStatusGroup,a.FormGroupDirective,C.a,v.a,a.NgControlStatus,a.FormControlName,x.a,g.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var E=r("R9XL"),w=r("8+bm");let _=(()=>{class e{constructor(){this.parametersForm=new a.FormGroup({value:new a.FormControl("roman sEdOv")})}get capitalized(){const{value:e}=this.parametersForm.value;return Object(l.ec)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-4"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(c["\u0275\u0275text"](0),c["\u0275\u0275elementStart"](1,"form",0),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"tui-input",2),c["\u0275\u0275text"](4," value "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275textInterpolate1"]("'",t.capitalized,"' = capitalize(value); "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[a["\u0275angular_packages_forms_forms_ba"],a.NgControlStatusGroup,a.FormGroupDirective,E.a,w.a,a.NgControlStatus,a.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),N=(()=>{class e{constructor(){this.parametersForm=new a.FormGroup({value:new a.FormControl("+79991234567"),countryCode:new a.FormControl("+7"),phoneMask:new a.FormControl("### ###-##-##")})}get formattedPhone(){const{value:e,countryCode:t,phoneMask:r}=this.parametersForm.value;return Object(l.ic)(e,t,r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(e,t){1&e&&(c["\u0275\u0275text"](0),c["\u0275\u0275elementStart"](1,"form",0),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"tui-input",2),c["\u0275\u0275text"](4," value "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-input",3),c["\u0275\u0275text"](6," countryCode "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"tui-input",4),c["\u0275\u0275text"](8," phoneMask "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275textInterpolate1"]("'",t.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[a["\u0275angular_packages_forms_forms_ba"],a.NgControlStatusGroup,a.FormGroupDirective,E.a,w.a,a.NgControlStatus,a.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),G=(()=>{class e{constructor(){this.parametersForm=new a.FormGroup({value:new a.FormControl(123456.789),decimalLimit:new a.FormControl(2),decimalSeparator:new a.FormControl("."),thousandSeparator:new a.FormControl(" ")})}get formattedNumber(){const{value:e,decimalLimit:t,decimalSeparator:r,thousandSeparator:n}=this.parametersForm.value;return Object(l.hc)(e,t,r,n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-6"]],decls:11,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","decimalLimit",1,"tui-space_top-2"],["formControlName","decimalSeparator",1,"tui-space_top-2"],["formControlName","thousandSeparator",1,"tui-space_top-2"]],template:function(e,t){1&e&&(c["\u0275\u0275text"](0),c["\u0275\u0275elementStart"](1,"form",0),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"tui-input",2),c["\u0275\u0275text"](4," value "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-input",3),c["\u0275\u0275text"](6," decimalLimit "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"tui-input",4),c["\u0275\u0275text"](8," decimalSeparator "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"tui-input",5),c["\u0275\u0275text"](10," thousandSeparator "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275textInterpolate1"]("'",t.formattedNumber,"' = formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator); "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[a["\u0275angular_packages_forms_forms_ba"],a.NgControlStatusGroup,a.FormGroupDirective,E.a,w.a,a.NgControlStatus,a.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var M=r("JKY/");function L(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18n"](1,3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-example",4),c["\u0275\u0275element"](3,"tui-format-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"tui-doc-example",5),c["\u0275\u0275element"](5,"tui-format-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"tui-doc-example",6),c["\u0275\u0275element"](7,"tui-format-example-4"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"tui-doc-example",7),c["\u0275\u0275element"](9,"tui-format-example-5"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"tui-doc-example",8),c["\u0275\u0275element"](11,"tui-format-example-6"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example3),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example4),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example5),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example6)}}function z(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",9),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18n"](3,10),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](4,"tui-doc-code",11),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.importComponentExample)}}let D=(()=>{class e{constructor(){this.importComponentExample=r.e(1803).then(r.bind(null,"XlBE")),this.example1={TypeScript:r.e(1790).then(r.bind(null,"ZxL8")),HTML:r.e(1788).then(r.bind(null,"5B0U")),LESS:r.e(1789).then(r.bind(null,"7COB"))},this.example3={TypeScript:r.e(1793).then(r.bind(null,"NZLQ")),HTML:r.e(1791).then(r.bind(null,"OIWn")),LESS:r.e(1792).then(r.bind(null,"DKrO"))},this.example4={TypeScript:r.e(1796).then(r.bind(null,"9jYo")),HTML:r.e(1794).then(r.bind(null,"9tNB")),LESS:r.e(1795).then(r.bind(null,"XrDE"))},this.example5={TypeScript:r.e(1799).then(r.bind(null,"BKCT")),HTML:r.e(1797).then(r.bind(null,"lJab")),LESS:r.e(1798).then(r.bind(null,"1pKM"))},this.example6={TypeScript:r.e(1802).then(r.bind(null,"Hztx")),HTML:r.e(1800).then(r.bind(null,"+uR3")),LESS:r.e(1801).then(r.bind(null,"G5tZ"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-format"]],decls:3,vars:0,consts:function(){let e,t,r,n,a,o,m,l,i;return e=$localize`:␟8b68cb0e9623325effd2712982bfc6c2ddc96d58␟5358165867706649494:Format utils`,t=$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`,r=$localize`:␟1da832a39ea4c0c3bd7976d78c971ebce6435c13␟1341457636714080363:A set of format utils`,n=$localize`:␟8603e981f7ca02a7bf59688e4767351180b4250d␟5245623836371299072:Adds 'px' to a number`,a=$localize`:␟f58552f0761b83792b2492e1439aa12357c39d15␟7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217`,o=$localize`:␟ff19b55733851de9847ac9886b9640b108dadb82␟6708488179256599720:Capitalizes every word in a string`,m=$localize`:␟b945a41118e9fa647ee7e77517ecf6f5b69643d2␟1504114262974304913:Formats a phone number with separators`,l=$localize`:␟1980b95105c67951c5039793433db28092117edb␟7477502181232818354:Formats a number with separators`,i=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`,[["header",e,"package","CDK / CORE","path","cdk/utils/format"],["pageTab",""],["pageTab",t],r,["id","px","heading","px","description",n,3,"content"],["id","getCurrencySymbol","heading","getCurrencySymbol","description",a,3,"content"],["id","capitalize","heading","capitalize","description",o,3,"content"],["id","formatPhone","heading","formatPhone","description",m,3,"content"],["id","formatNumber","heading","formatNumber","description",l,3,"content"],[1,"b-demo-steps"],i,["filename","myComponent.component.ts",3,"code"]]},template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,L,12,5,"ng-template",1),c["\u0275\u0275template"](2,z,5,1,"ng-template",2),c["\u0275\u0275elementEnd"]())},directives:[p.a,u.a,s.a,h,F,_,N,G,M.a],encapsulation:2,changeDetection:0}),e})(),O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[n.c,i.eb,a.FormsModule,a.ReactiveFormsModule,i.bb,i.Db,l.fb,i.K,m.m,o.f.forChild(Object(m.t)(D))]]}),e})()}}]);