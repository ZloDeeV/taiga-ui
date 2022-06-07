(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{fMQI:function(n,t,e){"use strict";e.r(t),t.default="@line-height-l: 1.25rem;\n\n.textfield-host() {\n    .text-basic();\n    position: relative;\n    display: block;\n    border-radius: var(--tui-radius-m);\n    text-align: left;\n\n    &[data-size='s'] {\n        height: var(--tui-height-s);\n        min-height: var(--tui-height-s);\n        max-height: var(--tui-height-s);\n    }\n\n    &[data-size='m'] {\n        height: var(--tui-height-m);\n        min-height: var(--tui-height-m);\n        max-height: var(--tui-height-m);\n    }\n\n    &[data-size='l'] {\n        height: var(--tui-height-l);\n        min-height: var(--tui-height-l);\n        max-height: var(--tui-height-l);\n        font: var(--tui-font-text-m);\n        line-height: @line-height-l;\n    }\n}\n\n.textfield-content() {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    padding: 0 var(--tui-padding-m);\n    box-sizing: border-box;\n    align-items: center;\n    overflow: hidden;\n\n    :host[data-size='s'] & {\n        padding: 0 var(--tui-padding-s);\n    }\n\n    :host[data-size='l'] & {\n        padding: 0 var(--tui-padding-l);\n    }\n\n    &:after {\n        content: '';\n        margin-right: -0.25rem;\n    }\n\n    :host[data-size='m'] &:after {\n        display: none;\n    }\n}\n\n.textfield-input() {\n    .text-basic();\n    .clearinput();\n    .fullsize();\n    padding: 0 var(--tui-padding-m);\n    border: solid transparent;\n    border-width: 0 var(--border-end, 0) 0 var(--border-start, 0);\n    border-inline-start-width: var(--border-start, 0);\n    border-inline-end-width: var(--border-end, 0);\n    text-indent: var(--text-indent);\n    text-align: inherit;\n    box-sizing: border-box;\n    white-space: nowrap;\n    overflow: hidden;\n    text-transform: inherit;\n    resize: none;\n\n    :host[data-mode='onDark'] &,\n    :host-context(tui-primitive-textfield[data-mode='onDark']),\n    :host-context(tui-text-area[data-mode='onDark']) {\n        .autofill(dark);\n    }\n\n    :host[data-size='s'] &,\n    :host-context(tui-primitive-textfield[data-size='s']):not(tui-primitive-textfield),\n    :host-context(tui-text-area[data-size='s']):not(tui-text-area) {\n        padding: 0 var(--tui-padding-s);\n    }\n\n    :host[data-size='l'] &,\n    :host-context(tui-primitive-textfield[data-size='l']):not(tui-primitive-textfield),\n    :host-context(tui-text-area[data-size='l']):not(tui-text-area) {\n        padding: 0 var(--tui-padding-l);\n    }\n\n    :host._disabled &,\n    :host-context(tui-primitive-textfield._disabled),\n    :host-context(tui-text-area._disabled) {\n        // @bad TODO: research why you can reach disabled textfield with mask inside a label without that\n        pointer-events: none;\n    }\n\n    :host[data-size='l']:not(._label-outside) &,\n    :host-context(tui-primitive-textfield[data-size='l']:not(._label-outside)):not(tui-primitive-textfield) {\n        padding-top: @line-height-l;\n\n        // Workaround for raising placeholder in temporary autofill\n        &:-webkit-autofill + .content .placeholder {\n            font-size: 0.8156rem;\n            transform: translateY(-0.625rem);\n        }\n    }\n\n    :host[data-size='m']:not(._label-outside) &,\n    :host-context(tui-primitive-textfield[data-size='m']:not(._label-outside)):not(tui-primitive-textfield) {\n        padding-top: 1.125rem;\n\n        // Workaround for raising placeholder in temporary autofill\n        &:-webkit-autofill + .content .placeholder {\n            font-size: 0.69rem;\n            transform: translateY(-0.5rem);\n        }\n    }\n\n    :host._hidden input&,\n    :host-context(tui-primitive-textfield._hidden) {\n        opacity: 0;\n        text-indent: -10em; // Hide blinking caret even in IE\n        -webkit-user-select: none; // Hide blinking caret in mobile safari\n    }\n}\n\n.textfield-wrapper() {\n    flex: 1;\n    min-width: 0;\n    padding-right: 0.25rem;\n    padding-inline-end: 0.25rem;\n    padding-inline-start: 0;\n}\n\n.textfield-placeholder() {\n    .transition(~'transform, font-size, color, letter-spacing');\n    .text-basic();\n    .text-overflow();\n    display: block;\n    width: 100%;\n    user-select: none;\n    color: var(--tui-text-02);\n    pointer-events: none;\n    will-change: transform;\n    transform: translateY(0);\n\n    &_raised {\n        transform: translateY(-0.625rem);\n\n        :host[data-size='m'] & {\n            font: var(--tui-font-text-xs);\n            transform: translateY(-0.5rem);\n            letter-spacing: 0.025rem;\n        }\n\n        :host._invalid:not(._focused) &,\n        :host._invalid:not(._focused):hover & {\n            color: var(--tui-error-fill);\n        }\n\n        :host[data-mode='onDark']._invalid:not(._focused) &,\n        :host[data-mode='onDark']._invalid:not(._focused):hover & {\n            color: var(--tui-error-fill-night);\n        }\n    }\n\n    :host._focused &,\n    :host[data-size='m']._focused._label-outside &,\n    :host[data-size='l']._focused._label-outside & {\n        color: var(--tui-text-03);\n    }\n\n    :host[data-size='l'] & {\n        font-size: 0.9375rem;\n\n        &_raised {\n            font-size: 0.8156rem;\n        }\n    }\n\n    :host[data-size='m']._focused:not(._label-outside) &,\n    :host[data-size='l']._focused:not(._label-outside) & {\n        color: var(--tui-text-01);\n    }\n\n    /* stylelint-disable selector-max-specificity */\n    // textfield-light\n    :host[data-mode='onDark'] & {\n        color: var(--tui-text-02-night);\n    }\n\n    :host[data-size='m'][data-mode='onDark']._focused:not(._label-outside) &,\n    :host[data-size='l'][data-mode='onDark']._focused:not(._label-outside) & {\n        color: var(--tui-text-01-night);\n    }\n\n    :host[data-mode='onDark']._focused &,\n    :host[data-size='m'][data-mode='onDark']._focused._label-outside &,\n    :host[data-size='l'][data-mode='onDark']._focused._label-outside & {\n        color: var(--tui-text-02-night);\n    }\n    /* stylelint-enable selector-max-specificity */\n\n    @supports (-webkit-hyphens: none) {\n        & {\n            will-change: unset;\n            transition-property: transform, color, letter-spacing;\n        }\n    }\n}\n\n.input-icon() {\n    display: flex;\n    width: 1.5rem;\n    height: 1.5rem;\n    align-items: center;\n    justify-content: center;\n    color: var(--tui-text-03);\n\n    :host[data-mode='onDark'] & {\n        color: var(--tui-text-03-night);\n    }\n}\n\n.icon-button() {\n    .transition(all);\n    .input-icon();\n    position: relative;\n    box-sizing: border-box;\n    cursor: pointer;\n    transition-property: color, transform;\n\n    &:hover {\n        color: var(--tui-text-02);\n    }\n\n    :host._readonly &,\n    :host._disabled & {\n        pointer-events: none;\n    }\n\n    :host[data-mode='onDark'] & {\n        color: var(--tui-text-03-night);\n\n        &:hover {\n            color: var(--tui-text-01-night);\n        }\n    }\n}\n\n.textfield() {\n    :host {\n        .textfield-host();\n    }\n\n    .t-input {\n        .textfield-input();\n    }\n\n    .t-content {\n        .textfield-content();\n    }\n\n    .t-wrapper {\n        .textfield-wrapper();\n    }\n\n    .t-placeholder {\n        .textfield-placeholder();\n    }\n\n    .t-cleaner {\n        .icon-button();\n    }\n\n    // @bad TODO: Refactor this and interactive icons together\n    .t-icon {\n        .input-icon();\n\n        &_left {\n            margin: 0 2 * @space 0 -@space;\n            margin-inline-start: -@space;\n            margin-inline-end: 2 * @space;\n\n            :host[data-size='s'] & {\n                margin-right: @space;\n                margin-inline-end: @space;\n            }\n        }\n    }\n}\n"}}]);