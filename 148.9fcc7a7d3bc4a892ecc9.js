(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{gLjn:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleTuiPanModule",(function(){return T}));var o=t("An66"),r=t("1VvW"),a=t("SVIu"),i=t("NE9W"),c=t("kZht"),l=t("OZlg"),s=t("e0eB"),d=t("iyc4"),m=t("ENSU"),u=t("C05f"),p=t("YtkY"),f=t("MdvI");let h=(()=>{class e{constructor(e){this.sanitizer=e,this.coordinates$=new u.a([0,0]),this.transform$=this.coordinates$.pipe(Object(p.a)(e=>this.sanitizer.bypassSecurityTrustStyle(`translate(${e[0]}px, ${e[1]}px)`)))}onPan(e){this.coordinates$.next([this.currentCoords[0]+e[0],this.currentCoords[1]+e[1]])}get currentCoords(){return this.coordinates$.value}}return e.\u0275fac=function(n){return new(n||e)(c["\u0275\u0275directiveInject"](m.DomSanitizer))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pan-example-1"]],decls:3,vars:4,consts:[[1,"container","tui-text_body-l"],[1,"circle",3,"tuiPan"]],template:function(e,n){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275listener"]("tuiPan",(function(e){return n.onPan(e)})),c["\u0275\u0275pipe"](2,"async"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275styleProp"]("transform",c["\u0275\u0275pipeBind1"](2,2,n.transform$)))},directives:[f.a],pipes:[o.b],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:12rem;height:12rem;background-color:var(--tui-secondary);overflow:hidden}.circle[_ngcontent-%COMP%]{width:6rem;height:6rem;border-radius:100%;touch-action:none;background-color:var(--tui-support-01);box-shadow:.25rem .25rem .5rem 0 rgba(34,60,80,.2);cursor:move;will-change:transform}"],changeDetection:0}),e})();var b=t("u8jZ");const v=["header",$localize`:␟7cd14ceae63b4aba71ab7935638f5d3b799f4f4b␟9128067536654850026:Pan`],g=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var y;y=$localize`:␟9e449278077294701e8c9fe0d73e07632671088c␟9027170302992646472:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiPan${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: The directive emits delta between mousemove / touchmove events. You can use it to change the coordinates of an element as in example below `;const x=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function S(e,n){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18nStart"](1,y),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](4,x),c["\u0275\u0275element"](5,"tui-pan-example-1"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example1)}}var $,w;function C(e,n){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",4),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,$),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,w),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml)}}$=$localize`:␟6a3b47f295a88bb1c26bc0ed826becb749fcea6c␟6584529262933175347: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPanModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,w=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let E=(()=>{class e{constructor(){this.exampleModule="import {TuiPanModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiPanModule,\n    ],\n...\n",this.exampleHtml='<div (tuiPan)="..."></div>\n\n',this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {BehaviorSubject} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-pan-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPanExample1 {\n    readonly coordinates$ = new BehaviorSubject([0, 0]);\n\n    readonly transform$ = this.coordinates$.pipe(\n        map(coords =>\n            this.sanitizer.bypassSecurityTrustStyle(\n                `translate(${coords[0]}px, ${coords[1]}px)`,\n            ),\n        ),\n    );\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    onPan(delta: readonly [number, number]): void {\n        this.coordinates$.next([\n            this.currentCoords[0] + delta[0],\n            this.currentCoords[1] + delta[1],\n        ]);\n    }\n\n    get currentCoords(): number[] {\n        return this.coordinates$.value;\n    }\n}\n",HTML:'<div class="container tui-text_body-l">\n    <div\n        class="circle"\n        [style.transform]="transform$ | async"\n        (tuiPan)="onPan($event)"\n    ></div>\n</div>\n',LESS:".container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 12rem;\n    height: 12rem;\n    background-color: var(--tui-secondary);\n    overflow: hidden;\n}\n\n.circle {\n    width: 6rem;\n    height: 6rem;\n    border-radius: 100%;\n    touch-action: none;\n    background-color: var(--tui-support-01);\n    box-shadow: 0.25rem 0.25rem 0.5rem 0px rgba(34, 60, 80, 0.2);\n    cursor: move;\n    will-change: transform;\n}\n"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-pan"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,n){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,v),c["\u0275\u0275template"](2,S,6,1,"ng-template",1),c["\u0275\u0275template"](3,C,10,2,"ng-template",2),c["\u0275\u0275i18nAttributes"](4,g),c["\u0275\u0275elementEnd"]())},directives:[l.a,s.a,d.a,h,b.a],encapsulation:2,changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[o.c,i.a,a.j,r.f.forChild(Object(a.q)(E))]]}),e})()}}]);