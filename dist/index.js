"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=n(function(h,v){
var x=require('@stdlib/number-float64-base-to-float32/dist');function y(r,e,i){var u,a,s;if(r<=0)return NaN;if(r===1||i===0)return e[0];for(i<0?a=(1-r)*i:a=0,u=0,s=0;s<r;s++)u+=e[a],a+=i;return x(u/r)}v.exports=y
});var m=n(function(k,q){
var j=require('@stdlib/number-float64-base-to-float32/dist');function F(r,e,i,u){var a,s,t;if(r<=0)return NaN;if(r===1||i===0)return e[u];for(s=u,a=0,t=0;t<r;t++)a+=e[s],s+=i;return j(a/r)}q.exports=F
});var p=n(function(w,c){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),T=m();R(l,"ndarray",T);c.exports=l
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=p(),o,d=E(_(__dirname,"./native.js"));O(d)?o=b:o=d;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
