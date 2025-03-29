"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(k,q){
var l=require('@stdlib/number-float64-base-to-float32/dist');function x(r,e,a,v){var s,i,t;if(r<=0)return NaN;if(r===1||a===0)return e[v];for(i=v,s=0,t=0;t<r;t++)s+=e[i],i+=a;return l(s/r)}q.exports=x
});var m=u(function(w,d){
var j=require('@stdlib/strided-base-stride2offset/dist'),R=n();function _(r,e,a){return R(r,e,a,j(r,a))}d.exports=_
});var p=u(function(z,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=m(),F=n();E(f,"ndarray",F);c.exports=f
});var O=require("path").join,T=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=p(),o,y=T(O(__dirname,"./native.js"));b(y)?o=g:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
