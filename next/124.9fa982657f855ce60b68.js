(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{"9kyK":function(e,t,n){"use strict";n.r(t),n.d(t,"VariablesModule",(function(){return w}));var i=n("wdR4"),a=n("An66"),r=n("3kIJ"),o=n("1VvW"),l=n("SVIu"),s=n("Qq0t"),u=n("dvRg"),d=n("kZht"),c=n("OZlg"),m=n("yZWP"),p=n("iyc4"),f=n("HvLL"),h=n("GdrL"),b=n("71sB"),v=n("D+uv");let g=(()=>{class e{constructor(){this.value="",this.checkbox=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-variables-example-1"]],decls:6,vars:3,consts:[[3,"hoverable"],[3,"ngModel","ngModelChange"],[1,"tui-space_top-4"],["size","l",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-island",0),d["\u0275\u0275elementStart"](1,"tui-input",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),d["\u0275\u0275text"](2,"Input example"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"div",2),d["\u0275\u0275elementStart"](4,"tui-checkbox-labeled",3),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.checkbox=e})),d["\u0275\u0275text"](5," Checkbox example "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("hoverable",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngModel",t.value),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngModel",t.checkbox))},directives:[f.a,h.a,b.a,r.NgControlStatus,r.NgModel,v.a],styles:['[_nghost-%COMP%]{--tui-font-text:"Comic Sans MS",cursive;--tui-font-text-m:bold 1rem/1.5rem var(--tui-font-text);--tui-font-text-s:normal 0.5rem/1.25rem var(--tui-font-text);--tui-primary:#c86dd7;--tui-primary-hover:#a456b1;--tui-primary-active:#7f3b8a;--tui-primary-text:#fff;--tui-radius-s:0;--tui-radius-m:0.25rem;--tui-height-l:4.375rem}'],changeDetection:0}),e})();var x=n("ER+R");const S=["header",$localize`:␟f014ca169762f17944612b404ca3277a0ff46b04␟4467462789627316821:Variables`];var y,E,C;y=$localize`:␟ebbcbf944f51b49c693d4057b9ee5c6250d18e79␟4930006487156055676: Taiga UI uses CSS custom properties for many of its visual aspects. You can see ${"\ufffd#4\ufffd"}:START_LINK: colors ${"\ufffd/#4\ufffd"}:CLOSE_LINK: for the full list of color variables. `,E=$localize`:␟8c92a8f23603f75edb962d5815d758f6ce1e30bf␟5810347892511711897: Besides colors there are also following variables that can be adjusted at any level of DOM structure: `,C=$localize`:␟bf9c19cc699aeb68adfd762067f0bc91ef2d1c14␟2655444008267344766: An easy way to dynamically override variables is to use a ${"\ufffd#12\ufffd"}:START_LINK:${"[\ufffd#13\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:ThemeSwitcher${"[\ufffd/#13\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_LINK: . This is how ${"\ufffd#14\ufffd"}:START_LINK_1:${"[\ufffd#13\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:ThemeNight${"[\ufffd/#13\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_LINK: does it. `,C=d["\u0275\u0275i18nPostprocess"](C);const k=["heading",$localize`:␟d557ac3c1cb761db5ba264036accec4aca3c6d98␟1809364622633527376:Override example`];function L(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"li"),d["\u0275\u0275elementStart"](1,"tui-doc-copy",6),d["\u0275\u0275elementStart"](2,"code"),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("cdkCopyToClipboard",e.key),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](e.key),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" \u2014 ",e.value," ")}}let T=(()=>{class e{constructor(){this.example1={HTML:'<tui-island [hoverable]="true">\n    <tui-input [(ngModel)]="value">Input example</tui-input>\n    <div class="tui-space_top-4">\n        <tui-checkbox-labeled\n            size="l"\n            [(ngModel)]="checkbox"\n        >\n            Checkbox example\n        </tui-checkbox-labeled>\n    </div>\n</tui-island>\n',LESS:":host {\n    --tui-font-text: 'Comic Sans MS', cursive;\n    --tui-font-text-m: bold 1rem/1.5rem var(--tui-font-text);\n    --tui-font-text-s: normal 0.5rem/1.25rem var(--tui-font-text);\n    --tui-primary: #c86dd7;\n    --tui-primary-hover: #a456b1;\n    --tui-primary-active: #7f3b8a;\n    --tui-primary-text: #fff;\n    --tui-radius-s: 0;\n    --tui-radius-m: 0.25rem;\n    --tui-height-l: 4.375rem;\n}\n"},this.vars={"--tui-font-heading":"font for headings","--tui-font-text":"font for text","--tui-radius-xs":"border radius for smallest items (i.e. small checkbox)","--tui-radius-s":"border radius for small elements (i.e. tags)","--tui-radius-m":"default border radius","--tui-radius-l":"border radius for containers (i.e. hint, accordion)","--tui-height-xs":"smallest elements height (i.e. small button, badges)","--tui-height-s":"small elements height (i.e. small inputs)","--tui-height-m":"default elements height (i.e. inputs, buttons)","--tui-height-l":"large elements height (i.e. inputs, buttons)","--tui-padding-s":'padding for inputs with size "s"',"--tui-padding-m":'padding for inputs with size "m"',"--tui-padding-l":'padding for inputs with size "l"',"--tui-disabled-opacity":"amount of transparency for disabled elements","--tui-autofill":"color for native browser autofill"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["variables"]],decls:19,vars:4,consts:[[6,"header"],["tuiLink","","routerLink","/colors"],[4,"ngFor","ngForOf"],["tuiLink","","routerLink","/components/theme-switcher"],["tuiLink","","routerLink","/components/theme-night"],["id","override",3,"content",6,"heading"],[1,"var",3,"cdkCopyToClipboard"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,S),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,y),d["\u0275\u0275element"](4,"a",1),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"p"),d["\u0275\u0275i18n"](6,E),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"ul"),d["\u0275\u0275template"](8,L,5,3,"li",2),d["\u0275\u0275pipe"](9,"keyvalue"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"p"),d["\u0275\u0275i18nStart"](11,C),d["\u0275\u0275elementStart"](12,"a",3),d["\u0275\u0275element"](13,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"a",4),d["\u0275\u0275element"](15,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"tui-doc-example",5),d["\u0275\u0275i18nAttributes"](17,k),d["\u0275\u0275element"](18,"tui-variables-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("ngForOf",d["\u0275\u0275pipeBind1"](9,2,t.vars)),d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("content",t.example1))},directives:[c.a,m.a,o.e,a.s,p.a,g,x.a,i.a],pipes:[a.l],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.c,u.mb,s.yb,l.l,u.bb,u.H,l.j,o.f.forChild(Object(l.q)(T)),r.FormsModule]]}),e})()}}]);