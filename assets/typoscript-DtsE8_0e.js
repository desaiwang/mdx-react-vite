import{g as p}from"./index-D2yzyxN4.js";function T(r,o){for(var e=0;e<o.length;e++){const t=o[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const E=Object.getOwnPropertyDescriptor(t,n);E&&Object.defineProperty(r,n,E.get?E:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,s;function u(){if(s)return i;s=1,i=r,r.displayName="typoscript",r.aliases=["tsconfig"];function r(o){(function(e){var t=/\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;e.languages.typoscript={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^"'])#.*/,lookbehind:!0,greedy:!0}],function:[{pattern:/<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,inside:{string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,inside:{keyword:t}},keyword:{pattern:/INCLUDE_TYPOSCRIPT/}}},{pattern:/@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,inside:{string:/"[^"\r\n]*"|'[^'\r\n]*'/}}],string:{pattern:/^([^=]*=[< ]?)(?:(?!\]\n).)*/,lookbehind:!0,inside:{function:/\{\$.*\}/,keyword:t,number:/^\d+$/,punctuation:/[,|:]/}},keyword:t,number:{pattern:/\b\d+\s*[.{=]/,inside:{operator:/[.{=]/}},tag:{pattern:/\.?[-\w\\]+\.?/,inside:{punctuation:/\./}},punctuation:/[{}[\];(),.:|]/,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/},e.languages.tsconfig=e.languages.typoscript})(o)}return i}var a=u();const c=p(a),R=T({__proto__:null,default:c},[a]);export{R as t};
