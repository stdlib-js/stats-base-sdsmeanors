// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";function t(r,t,n){var a,i,s;if(r<=0)return NaN;if(1===r||0===n)return t[0];for(i=n<0?(1-r)*n:0,a=0,s=0;s<r;s++)a+=t[i],i+=n;return e(a/r)}function n(r,t,n,a){var i,s,o;if(r<=0)return NaN;if(1===r||0===n)return t[a];for(s=a,i=0,o=0;o<r;o++)i+=t[s],s+=n;return e(i/r)}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
