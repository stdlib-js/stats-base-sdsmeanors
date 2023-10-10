// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+a(n):a(n)+r,i&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,a,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(a=r.arg,c=parseInt(a,10),!isFinite(c)){if(!t(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(a=(-c).toString(e),r.precision&&(a=i(a,r.precision,r.padRight)),a="-"+a):(a=c.toString(e),c||r.precision?r.precision&&(a=i(a,r.precision,r.padRight)):a="",r.sign&&(a=r.sign+a)),16===e&&(r.alternate&&(a="0x"+a),a=r.specifier===o.call(r.specifier)?o.call(a):n.call(a)),8===e&&r.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function l(r){return"string"==typeof r}var s=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,a,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+a);i=r.arg}switch(r.specifier){case"e":case"E":a=i.toExponential(r.precision);break;case"f":case"F":a=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),a=i.toExponential(e)):a=i.toPrecision(r.precision),r.alternate||(a=f.call(a,b,"$1e"),a=f.call(a,w,"e"),a=f.call(a,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=f.call(a,g,"e+0$1"),a=f.call(a,d,"e-0$1"),r.alternate&&(a=f.call(a,h,"$1."),a=f.call(a,y,"$1.e")),i>=0&&r.sign&&(a=r.sign+a),a=r.specifier===u.call(r.specifier)?u.call(a):p.call(a)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var a=e-r.length;return a<0?r:r=t?r+_(a):_(a)+r}var E=String.fromCharCode,k=isNaN,x=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,a,n,o,s,p,u,f;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",p=1,u=0;u<r.length;u++)if(l(a=r[u]))s+=a;else{if(e=void 0!==a.precision,!(a=F(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),t=a.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,k(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,k(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=e?a.precision:-1;break;case"c":if(!k(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=k(o)?String(a.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(a.precision=6),a.arg=m(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=i(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=S(a.arg,a.width,a.padRight)),s+=a.arg||"",p+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,a,i;for(t=[],i=0,a=j.exec(r);a;)(e=r.slice(i,j.lastIndex-a[0].length)).length&&t.push(e),t.push(I(a)),i=j.lastIndex,a=j.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function $(r){var e,t,a;if(!V(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,a=1;a<t.length;a++)t[a]=arguments[a];return A.apply(null,t)}var N,O=Object.prototype,C=O.toString,P=O.__defineGetter__,R=O.__defineSetter__,Z=O.__lookupGetter__,G=O.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var a,i,n,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||G.call(r,e)?(a=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=a):r[e]=t.value),n="get"in t,o="set"in t,i&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&P&&P.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};var W=N;var L="function"==typeof Math.fround?Math.fround:null;var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var z,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";z=M&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,i,n;if(null==r)return U.call(r);t=r[q],n=q,e=null!=(i=r)&&X.call(i,n);try{r[q]=void 0}catch(e){return U.call(r)}return a=U.call(r),e?r[q]=t:delete r[q],a}:function(r){return U.call(r)};var B=z,D="function"==typeof Float32Array;var H=Number.POSITIVE_INFINITY,J="function"==typeof Float32Array?Float32Array:null;var K,Q="function"==typeof Float32Array?Float32Array:void 0;K=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J([1,3.14,-3.14,5e40]),t=e,r=(D&&t instanceof Float32Array||"[object Float32Array]"===B(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===H}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=new K(1);var er="function"==typeof L?L:function(r){return rr[0]=r,rr[0]};function tr(r,e,t){var a,i,n;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(i=t<0?(1-r)*t:0,a=0,n=0;n<r;n++)a+=e[i],i+=t;return er(a/r)}function ar(r,e,t,a){var i,n,o;if(r<=0)return NaN;if(1===r||0===t)return e[a];for(n=a,i=0,o=0;o<r;o++)i+=e[n],n+=t;return er(i/r)}W(tr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:ar});export{tr as default,ar as ndarray};
//# sourceMappingURL=mod.js.map