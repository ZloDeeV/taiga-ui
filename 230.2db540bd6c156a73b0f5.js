(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{rQtu:function(n,e,i){"use strict";i.r(e),e.default="@sizes: 16;\n\n.generate-space(@direction, @i: 0) when (@i =< @sizes) {\n    .generate-space(@direction, @i + 1);\n\n    &_@{direction}-@{i} {\n        & when (@direction = all) {\n            margin: @space * @i;\n        }\n\n        & when (@direction = top) {\n            margin-top: @space * @i;\n        }\n\n        & when (@direction = bottom) {\n            margin-bottom: @space * @i;\n        }\n\n        & when (@direction = vertical) {\n            margin-top: @space * @i;\n            margin-bottom: @space * @i;\n        }\n\n        & when (@direction = left) {\n            margin-left: @space * @i;\n        }\n\n        & when (@direction = right) {\n            margin-right: @space * @i;\n        }\n\n        & when (@direction = horizontal) {\n            margin-right: @space * @i;\n            margin-left: @space * @i;\n        }\n    }\n}\n\n.tui-space {\n    .generate-space(all);\n    .generate-space(top);\n    .generate-space(bottom);\n    .generate-space(vertical);\n    .generate-space(left);\n    .generate-space(right);\n    .generate-space(horizontal);\n\n    &_auto {\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n"}}]);