(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{eg8U:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleFormatModule",(function(){return B}));var r=n("An66"),o=n("3kIJ"),a=n("1VvW"),m=n("SVIu"),i=n("Qq0t"),p=n("dvRg"),l=n("kZht"),u=n("OZlg"),c=n("e0eB"),s=n("iyc4"),d=n("l4xa"),f=n("YjIA"),g=n("xCPM");let S=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(11)})}get px(){const{value:e}=this.parametersForm.value;return Object(d.Uc)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input-number",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("'",t.px,"' = px(value); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,f.a,g.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var C=n("GdrL"),h=n("71sB");let v=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({sourceString:new o.FormControl("Friend!"),minResultLength:new o.FormControl(21),padString:new o.FormControl("Hey, ")})}get paddedStart(){const{sourceString:e,minResultLength:t,padString:n}=this.parametersForm.value;return Object(d.Rc)(e||"",t||0,n||" ")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","sourceString",1,"tui-space_top-2"],["formControlName","minResultLength",1,"tui-space_top-2"],["formControlName","padString",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input",2),l["\u0275\u0275text"](4," sourceString "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input-number",3),l["\u0275\u0275text"](6," minResultLength "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-input",4),l["\u0275\u0275text"](8," padString "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",t.paddedStart," = padStart(sourceString, minResultLength, padString); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,C.a,h.a,o.NgControlStatus,o.FormControlName,f.a,g.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var F=n("T8fS"),x=n("TjIJ"),y=n("jTus"),b=n("fP8s"),w=n("OWJi");function E(e,t){if(1&e&&l["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("items",e.items)}}let _=(()=>{class e{constructor(){this.items=["USD","RUB","643","KZT","051","KRW","CHF","EUR","GBP"],this.parametersForm=new o.FormGroup({currency:new o.FormControl(null)})}get currency(){const{currency:e}=this.parametersForm.value;return Object(F.h)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-3"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-select",2),l["\u0275\u0275text"](4," currency "),l["\u0275\u0275template"](5,E,1,1,"tui-data-list-wrapper",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",t.currency," = getCurrencySymbol(currency); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,x.a,y.a,o.NgControlStatus,o.FormControlName,b.a,w.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),N=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl("roman sEdOv")})}get capitalized(){const{value:e}=this.parametersForm.value;return Object(i.ec)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-4"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("'",t.capitalized,"' = capitalize(value); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,C.a,h.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),G=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl("+79991234567"),countryCode:new o.FormControl("+7"),phoneMask:new o.FormControl("### ###-##-##")})}get formattedPhone(){const{value:e,countryCode:t,phoneMask:n}=this.parametersForm.value;return Object(i.ic)(e,t,n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input",3),l["\u0275\u0275text"](6," countryCode "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-input",4),l["\u0275\u0275text"](8," phoneMask "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("'",t.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,C.a,h.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),L=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(123456.789),decimalLimit:new o.FormControl(2),decimalSeparator:new o.FormControl("."),thousandSeparator:new o.FormControl(" ")})}get formattedNumber(){const{value:e,decimalLimit:t,decimalSeparator:n,thousandSeparator:r}=this.parametersForm.value;return Object(i.hc)(e,t,n,r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-6"]],decls:11,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","decimalLimit",1,"tui-space_top-2"],["formControlName","decimalSeparator",1,"tui-space_top-2"],["formControlName","thousandSeparator",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input",3),l["\u0275\u0275text"](6," decimalLimit "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-input",4),l["\u0275\u0275text"](8," decimalSeparator "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"tui-input",5),l["\u0275\u0275text"](10," thousandSeparator "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("'",t.formattedNumber,"' = formatNumber(value, decimalLimit, decimalSeparator,\nthousandSeparator); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,C.a,h.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var D=n("u8jZ");const M=["header",$localize`:␟8b68cb0e9623325effd2712982bfc6c2ddc96d58␟5358165867706649494:Format utils`],k=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var T;T=$localize`:␟1da832a39ea4c0c3bd7976d78c971ebce6435c13␟1341457636714080363:A set of format utils`;const R=["description",$localize`:␟8603e981f7ca02a7bf59688e4767351180b4250d␟5245623836371299072:Adds 'px' to a number`],z=["description",$localize`:␟7d1831d06991cb25671ca5b74e6c0327bbf87280␟1473019084371139706:Adds a fillter to a string`],P=["description",$localize`:␟f58552f0761b83792b2492e1439aa12357c39d15␟7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217`],U=["description",$localize`:␟ff19b55733851de9847ac9886b9640b108dadb82␟6708488179256599720:Capitalizes every word in a string`],O=["description",$localize`:␟b945a41118e9fa647ee7e77517ecf6f5b69643d2␟1504114262974304913:Formats a phone number with separators`],j=["description",$localize`:␟1980b95105c67951c5039793433db28092117edb␟7477502181232818354:Formats a number with separators`];function A(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,T),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-example",3),l["\u0275\u0275i18nAttributes"](3,R),l["\u0275\u0275element"](4,"tui-format-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-doc-example",4),l["\u0275\u0275i18nAttributes"](6,z),l["\u0275\u0275element"](7,"tui-format-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"tui-doc-example",5),l["\u0275\u0275i18nAttributes"](9,P),l["\u0275\u0275element"](10,"tui-format-example-3"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"tui-doc-example",6),l["\u0275\u0275i18nAttributes"](12,U),l["\u0275\u0275element"](13,"tui-format-example-4"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"tui-doc-example",7),l["\u0275\u0275i18nAttributes"](15,O),l["\u0275\u0275element"](16,"tui-format-example-5"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"tui-doc-example",8),l["\u0275\u0275i18nAttributes"](18,j),l["\u0275\u0275element"](19,"tui-format-example-6"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example1),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example2),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example3),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example4),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example5),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example6)}}var I;function H(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",9),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18n"](3,I),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](4,"tui-doc-code",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("code",e.importComponentExample)}}I=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;let $=(()=>{class e{constructor(){this.importComponentExample="import {getCurrencySymbol} from '@taiga-ui/kit';\n\n...\n    currency = getCurrencySymbol(currency);\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {px} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-format-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(11),\n    });\n\n    get px(): string {\n        const {value} = this.parametersForm.value;\n\n        return px(value);\n    }\n}\n",HTML:'\'{{ px }}\' = px(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number\n            formControlName="value"\n            class="tui-space_top-2"\n        >\n            value\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {padStart} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-format-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample2 {\n    parametersForm = new FormGroup({\n        sourceString: new FormControl('Friend!'),\n        minResultLength: new FormControl(21),\n        padString: new FormControl('Hey, '),\n    });\n\n    get paddedStart(): string {\n        const {sourceString, minResultLength, padString} = this.parametersForm.value;\n\n        return padStart(sourceString || '', minResultLength || 0, padString || ' ');\n    }\n}\n",HTML:'{{ paddedStart }} = padStart(sourceString, minResultLength, padString);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input\n            formControlName="sourceString"\n            class="tui-space_top-2"\n        >\n            sourceString\n        </tui-input>\n        <tui-input-number\n            formControlName="minResultLength"\n            class="tui-space_top-2"\n        >\n            minResultLength\n        </tui-input-number>\n        <tui-input\n            formControlName="padString"\n            class="tui-space_top-2"\n        >\n            padString\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {getCurrencySymbol} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: 'tui-format-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample3 {\n    readonly items = ['USD', 'RUB', '643', 'KZT', '051', 'KRW', 'CHF', 'EUR', 'GBP'];\n\n    parametersForm = new FormGroup({\n        currency: new FormControl(null),\n    });\n\n    get currency(): string | null {\n        const {currency} = this.parametersForm.value;\n\n        return getCurrencySymbol(currency);\n    }\n}\n",HTML:'{{ currency }} = getCurrencySymbol(currency);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select\n            formControlName="currency"\n            class="tui-space_top-2"\n        >\n            currency\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {capitalize} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-format-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl('roman sEdOv'),\n    });\n\n    get capitalized(): string {\n        const {value} = this.parametersForm.value;\n\n        return capitalize(value);\n    }\n}\n",HTML:'\'{{ capitalized }}\' = capitalize(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input\n            formControlName="value"\n            class="tui-space_top-2"\n        >\n            value\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {formatPhone} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-format-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl('+79991234567'),\n        countryCode: new FormControl('+7'),\n        phoneMask: new FormControl('### ###-##-##'),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return formatPhone(value, countryCode, phoneMask);\n    }\n}\n",HTML:'\'{{ formattedPhone }}\' = formatPhone(value, countryCode, phoneMask);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input\n            formControlName="value"\n            class="tui-space_top-2"\n        >\n            value\n        </tui-input>\n        <tui-input\n            formControlName="countryCode"\n            class="tui-space_top-2"\n        >\n            countryCode\n        </tui-input>\n        <tui-input\n            formControlName="phoneMask"\n            class="tui-space_top-2"\n        >\n            phoneMask\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example6={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {formatNumber} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-format-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample6 {\n    parametersForm = new FormGroup({\n        value: new FormControl(123456.789),\n        decimalLimit: new FormControl(2),\n        decimalSeparator: new FormControl('.'),\n        thousandSeparator: new FormControl(' '),\n    });\n\n    get formattedNumber(): string {\n        const {value, decimalLimit, decimalSeparator, thousandSeparator} =\n            this.parametersForm.value;\n\n        return formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator);\n    }\n}\n",HTML:'\'{{ formattedNumber }}\' = formatNumber(value, decimalLimit, decimalSeparator,\nthousandSeparator);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input\n            formControlName="value"\n            class="tui-space_top-2"\n        >\n            value\n        </tui-input>\n        <tui-input\n            formControlName="decimalLimit"\n            class="tui-space_top-2"\n        >\n            decimalLimit\n        </tui-input>\n        <tui-input\n            formControlName="decimalSeparator"\n            class="tui-space_top-2"\n        >\n            decimalSeparator\n        </tui-input>\n        <tui-input\n            formControlName="thousandSeparator"\n            class="tui-space_top-2"\n        >\n            thousandSeparator\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-format"]],decls:5,vars:0,consts:[["package","CDK / CORE","path","cdk/utils/format",6,"header"],["pageTab",""],[6,"pageTab"],["id","px","heading","px",3,"content",6,"description"],["id","padStart","heading","padStart",3,"content",6,"description"],["id","getCurrencySymbol","heading","getCurrencySymbol",3,"content",6,"description"],["id","capitalize","heading","capitalize",3,"content",6,"description"],["id","formatPhone","heading","formatPhone",3,"content",6,"description"],["id","formatNumber","heading","formatNumber",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,M),l["\u0275\u0275template"](2,A,20,6,"ng-template",1),l["\u0275\u0275template"](3,H,5,1,"ng-template",2),l["\u0275\u0275i18nAttributes"](4,k),l["\u0275\u0275elementEnd"]())},directives:[u.a,c.a,s.a,S,v,_,N,G,L,D.a],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,p.eb,o.FormsModule,o.ReactiveFormsModule,p.bb,p.Db,i.fb,p.K,m.j,a.f.forChild(Object(m.q)($))]]}),e})()}}]);