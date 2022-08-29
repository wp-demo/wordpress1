!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():e()}(0,function(){function t(e){"use strict";var n=e.storageKey(),a=e.storage(),t=function(){var t=e.preferredLanguage();angular.isString(t)?e.use(t):a.put(n,e.use())};t.displayName="fallbackFromIncorrectStorageValue",a?a.get(n)?e.use(a.get(n)).catch(t):t():angular.isString(e.preferredLanguage())&&e.use(e.preferredLanguage())}function e(t,r,e,i){"use strict";var z,c,T,x,F,I,_,n,V,R,D,K,U,M,H,G,q={},Y=[],B=t,J=[],Q="translate-cloak",W=!1,X=!1,Z=".",tt=!1,et=!1,nt=0,at=!0,a="default",s={default:function(t){return(t||"").split("-").join("_")},java:function(t){var e=(t||"").split("-").join("_"),n=e.split("_");return 1<n.length?n[0].toLowerCase()+"_"+n[1].toUpperCase():e},bcp47:function(t){var e=(t||"").split("_").join("-"),n=e.split("-");switch(n.length){case 1:n[0]=n[0].toLowerCase();break;case 2:n[0]=n[0].toLowerCase(),4===n[1].length?n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase():n[1]=n[1].toUpperCase();break;case 3:n[0]=n[0].toLowerCase(),n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase(),n[2]=n[2].toUpperCase();break;default:return e}return n.join("-")},"iso639-1":function(t){return(t||"").split("_").join("-").split("-")[0].toLowerCase()}},o=function(){if(angular.isFunction(i.getLocale))return i.getLocale();var t,e,n=r.$get().navigator,a=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(n.languages))for(t=0;t<n.languages.length;t++)if((e=n.languages[t])&&e.length)return e;for(t=0;t<a.length;t++)if((e=n[a[t]])&&e.length)return e;return null};o.displayName="angular-translate/service: getFirstBrowserLanguage";var rt=function(){var t=o()||"";return s[a]&&(t=s[a](t)),t};rt.displayName="angular-translate/service: getLocale";var it=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1},st=function(){return this.toString().replace(/^\s+|\s+$/g,"")},f=function(t){return angular.isString(t)?t.toLowerCase():t},ot=function(t){if(t){for(var e,n=[],a=f(t),r=0,i=Y.length;r<i;r++)n.push(f(Y[r]));if(-1<(r=it(n,a)))return Y[r];if(c)for(var s in c)if(c.hasOwnProperty(s)){var o=!1,l=Object.prototype.hasOwnProperty.call(c,s)&&f(s)===f(t);if("*"===s.slice(-1)&&(o=f(s.slice(0,-1))===f(t.slice(0,s.length-1))),(l||o)&&(e=c[s],-1<it(n,f(e))))return e}var u=t.split("_");return 1<u.length&&-1<it(n,f(u[0]))?u[0]:void 0}},lt=function(t,e){if(!t&&!e)return q;if(t&&!e){if(angular.isString(t))return q[t]}else angular.isObject(q[t])||(q[t]={}),angular.extend(q[t],ut(e));return this};this.translations=lt,this.cloakClassName=function(t){return t?(Q=t,this):Q},this.nestedObjectDelimeter=function(t){return t?(Z=t,this):Z};var ut=function(t,e,n,a){var r,i,s;for(r in e||(e=[]),n||(n={}),t)Object.prototype.hasOwnProperty.call(t,r)&&(s=t[r],angular.isObject(s)?ut(s,e.concat(r),n,r):(i=e.length?""+e.join(Z)+Z+r:r,e.length&&r===a&&(n[""+e.join(Z)]="@:"+i),n[i]=s));return n};ut.displayName="flatObject",this.addInterpolation=function(t){return J.push(t),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(t){return R=t,this},this.useSanitizeValueStrategy=function(t){return e.useStrategy(t),this},this.preferredLanguage=function(t){return t?(ct(t),this):z};var ct=function(t){return t&&(z=t),z};this.translationNotFoundIndicator=function(t){return this.translationNotFoundIndicatorLeft(t),this.translationNotFoundIndicatorRight(t),this},this.translationNotFoundIndicatorLeft=function(t){return t?(U=t,this):U},this.translationNotFoundIndicatorRight=function(t){return t?(M=t,this):M},this.fallbackLanguage=function(t){return ft(t),this};var ft=function(t){return t?(angular.isString(t)?(x=!0,T=[t]):angular.isArray(t)&&(x=!1,T=t),angular.isString(z)&&it(T,z)<0&&T.push(z),this):x?T[0]:T};this.use=function(t){if(t){if(!q[t]&&!D)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+t+"'");return F=t,this}return F},this.resolveClientLocale=function(){return rt()};var gt=function(t){return t?(B=t,this):n?n+B:B};this.storageKey=gt,this.useUrlLoader=function(t,e){return this.useLoader("$translateUrlLoader",angular.extend({url:t},e))},this.useStaticFilesLoader=function(t){return this.useLoader("$translateStaticFilesLoader",t)},this.useLoader=function(t,e){return D=t,K=e||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(t){return _=t,this},this.storagePrefix=function(t){return t?(n=t,this):t},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(t){return V=t,this},this.usePostCompiling=function(t){return W=!!t,this},this.forceAsyncReload=function(t){return X=!!t,this},this.uniformLanguageTag=function(t){return t?angular.isString(t)&&(t={standard:t}):t={},a=t.standard,this},this.determinePreferredLanguage=function(t){var e=t&&angular.isFunction(t)?t():rt();return z=Y.length&&ot(e)||e,this},this.registerAvailableLanguageKeys=function(t,e){return t?(Y=t,e&&(c=e),this):Y},this.useLoaderCache=function(t){return!1===t?H=void 0:!0===t?H=!0:void 0===t?H="$translationCache":t&&(H=t),this},this.directivePriority=function(t){return void 0===t?nt:(nt=t,this)},this.statefulFilter=function(t){return void 0===t?at:(at=t,this)},this.postProcess=function(t){return G=t||void 0,this},this.keepContent=function(t){return et=!!t,this},this.$get=["$log","$injector","$rootScope","$q",function(t,o,s,m){var i,$,y,b=o.get(R||"$translateDefaultInterpolation"),S=!1,L={},f={},j=function(t,s,o,l,u,c){!F&&z&&(F=z);var a=u&&u!==F?ot(u)||u:F;if(u&&v(u),angular.isArray(t)){return function(t){for(var a={},e=[],n=function(e){var n=m.defer(),t=function(t){a[e]=t,n.resolve([e,t])};return j(e,s,o,l,u,c).then(t,t),n.promise},r=0,i=t.length;r<i;r++)e.push(n(t[r]));return m.all(e).then(function(){return a})}(t)}var e=m.defer();t&&(t=st.apply(t));var n=function(){var t=f[a]||f[z];if($=0,_&&!t){var e=i.get(B);if(t=f[e],T&&T.length){var n=it(T,e);$=0===n?1:0,it(T,z)<0&&T.push(z)}}return t}();if(n){var r=function(){u||(a=F),h(t,s,o,l,a,c).then(e.resolve,e.reject)};r.displayName="promiseResolved",n.finally(r).catch(angular.noop)}else h(t,s,o,l,a,c).then(e.resolve,e.reject);return e.promise},w=function(t){return U&&(t=[U,t].join(" ")),M&&(t=[t,M].join(" ")),t},l=function(t){F=t,_&&i.put(j.storageKey(),F),s.$emit("$translateChangeSuccess",{language:t}),b.setLocale(F);var e=function(t,e){L[e].setLocale(F)};e.displayName="eachInterpolatorLocaleSetter",angular.forEach(L,e),s.$emit("$translateChangeEnd",{language:t})},u=function(n){if(!n)throw"No language key specified for loading.";var a=m.defer();s.$emit("$translateLoadingStart",{language:n}),S=!0;var t=H;"string"==typeof t&&(t=o.get(t));var e=angular.extend({},K,{key:n,$http:angular.extend({},{cache:t},K.$http)}),r=function(t){var e={};s.$emit("$translateLoadingSuccess",{language:n}),angular.isArray(t)?angular.forEach(t,function(t){angular.extend(e,ut(t))}):angular.extend(e,ut(t)),S=!1,a.resolve({key:n,table:e}),s.$emit("$translateLoadingEnd",{language:n})};r.displayName="onLoaderSuccess";var i=function(t){s.$emit("$translateLoadingError",{language:t}),a.reject(t),s.$emit("$translateLoadingEnd",{language:t})};return i.displayName="onLoaderError",o.get(D)(e).then(r,i),a.promise};if(_&&(!(i=o.get(_)).get||!i.put))throw new Error("Couldn't use storage '"+_+"', missing get() or put() method!");if(J.length){var e=function(t){var e=o.get(t);e.setLocale(z||F),L[e.getInterpolationIdentifier()]=e};e.displayName="interpolationFactoryAdder",angular.forEach(J,e)}var c=function(a,r,i,s,o){var l=m.defer(),t=function(t){if(Object.prototype.hasOwnProperty.call(t,r)&&null!==t[r]){s.setLocale(a);var e=t[r];if("@:"===e.substr(0,2))c(a,e.substr(2),i,s,o).then(l.resolve,l.reject);else{var n=s.interpolate(t[r],i,"service",o,r);n=O(r,t[r],n,i,a),l.resolve(n)}s.setLocale(F)}else l.reject()};return t.displayName="fallbackTranslationResolver",function(t){var e=m.defer();if(Object.prototype.hasOwnProperty.call(q,t))e.resolve(q[t]);else if(f[t]){var n=function(t){lt(t.key,t.table),e.resolve(t.table)};n.displayName="translationTableResolver",f[t].then(n,e.reject)}else e.reject();return e.promise}(a).then(t,l.reject),l.promise},g=function(t,e,n,a,r){var i,s=q[t];if(s&&Object.prototype.hasOwnProperty.call(s,e)&&null!==s[e]){if(a.setLocale(t),i=a.interpolate(s[e],n,"filter",r,e),i=O(e,s[e],i,n,t,r),!angular.isString(i)&&angular.isFunction(i.$$unwrapTrustedValue)){var o=i.$$unwrapTrustedValue();if("@:"===o.substr(0,2))return g(t,o.substr(2),n,a,r)}else if("@:"===i.substr(0,2))return g(t,i.substr(2),n,a,r);a.setLocale(F)}return i},C=function(t,e,n,a){return V?o.get(V)(t,F,e,n,a):t},N=function(t,e,n,a,r,i){var s=m.defer();if(t<T.length){var o=T[t];c(o,e,n,a,i).then(function(t){s.resolve(t)},function(){return N(t+1,e,n,a,r,i).then(s.resolve,s.reject)})}else if(r)s.resolve(r);else{var l=C(e,n,r);V&&l?s.resolve(l):s.reject(w(e))}return s.promise},p=function(t,e,n,a,r){var i;if(t<T.length){var s=T[t];(i=g(s,e,n,a,r))||""===i||(i=p(t+1,e,n,a))}return i},h=function(t,e,n,a,r,i){var s,o,l,u,c,f=m.defer(),g=r?q[r]:q,p=n?L[n]:b;if(g&&Object.prototype.hasOwnProperty.call(g,t)&&null!==g[t]){var h=g[t];if("@:"===h.substr(0,2))j(h.substr(2),e,n,a,r,i).then(f.resolve,f.reject);else{var d=p.interpolate(h,e,"service",i,t);d=O(t,h,d,e,r),f.resolve(d)}}else{var v;V&&!S&&(v=C(t,e,a)),r&&T&&T.length?(s=t,o=e,l=p,u=a,c=i,N(0<y?y:$,s,o,l,u,c)).then(function(t){f.resolve(t)},function(t){f.reject(w(t))}):V&&!S&&v?a?f.resolve(a):f.resolve(v):a?f.resolve(a):f.reject(w(t))}return f.promise},d=function(t,e,n,a,r){var i,s=a?q[a]:q,o=b;if(L&&Object.prototype.hasOwnProperty.call(L,n)&&(o=L[n]),s&&Object.prototype.hasOwnProperty.call(s,t)&&null!==s[t]){var l=s[t];i="@:"===l.substr(0,2)?d(l.substr(2),e,n,a,r):(i=o.interpolate(l,e,"filter",r,t),O(t,l,i,e,a,r))}else{var u;V&&!S&&(u=C(t,e,r)),i=a&&T&&T.length?p(($=0)<y?y:$,t,e,o,r):V&&!S&&u?u:w(t)}return i},O=function(t,e,n,a,r,i){var s=G;return s&&("string"==typeof s&&(s=o.get(s)),s)?s(t,e,n,a,r,i):n},v=function(t){q[t]||!D||f[t]||(f[t]=u(t).then(function(t){return lt(t.key,t.table),t}))};j.preferredLanguage=function(t){return t&&ct(t),z},j.cloakClassName=function(){return Q},j.nestedObjectDelimeter=function(){return Z},j.fallbackLanguage=function(t){if(null!=t){if(ft(t),D&&T&&T.length)for(var e=0,n=T.length;e<n;e++)f[T[e]]||(f[T[e]]=u(T[e]));j.use(j.use())}return x?T[0]:T},j.useFallbackLanguage=function(t){if(null!=t)if(t){var e=it(T,t);-1<e&&(y=e)}else y=0},j.proposedLanguage=function(){return I},j.storage=function(){return i},j.negotiateLocale=ot,j.use=function(e){if(!e)return F;var n=m.defer();n.promise.then(null,angular.noop),s.$emit("$translateChangeStart",{language:e});var t=ot(e);return 0<Y.length&&!t?m.reject(e):(t&&(e=t),I=e,!X&&q[e]||!D||f[e]?f[e]?f[e].then(function(t){return I===t.key&&l(t.key),n.resolve(t.key),t},function(t){return!F&&T&&0<T.length&&T[0]!==t?j.use(T[0]).then(n.resolve,n.reject):n.reject(t)}):(n.resolve(e),l(e)):(f[e]=u(e).then(function(t){return lt(t.key,t.table),n.resolve(t.key),I===e&&l(t.key),t},function(t){return s.$emit("$translateChangeError",{language:t}),n.reject(t),s.$emit("$translateChangeEnd",{language:t}),m.reject(t)}),f[e].finally(function(){var t;I===(t=e)&&(I=void 0),f[t]=void 0}).catch(angular.noop)),n.promise)},j.resolveClientLocale=function(){return rt()},j.storageKey=function(){return gt()},j.isPostCompilingEnabled=function(){return W},j.isForceAsyncReloadEnabled=function(){return X},j.isKeepContent=function(){return et},j.refresh=function(t){if(!D)throw new Error("Couldn't refresh translation table, no loader registered!");s.$emit("$translateRefreshStart",{language:t});var e=m.defer(),n={};function a(e){var t=u(e);return(f[e]=t).then(function(t){q[e]={},lt(e,t.table),n[e]=!0},angular.noop),t}if(e.promise.then(function(){for(var t in q)q.hasOwnProperty(t)&&(t in n||delete q[t]);F&&l(F)},angular.noop).finally(function(){s.$emit("$translateRefreshEnd",{language:t})}),t)q[t]?a(t).then(e.resolve,e.reject):e.reject();else{var r=T&&T.slice()||[];F&&-1===r.indexOf(F)&&r.push(F),m.all(r.map(a)).then(e.resolve,e.reject)}return e.promise},j.instant=function(t,e,n,a,r){var i=a&&a!==F?ot(a)||a:F;if(null===t||angular.isUndefined(t))return t;if(a&&v(a),angular.isArray(t)){for(var s={},o=0,l=t.length;o<l;o++)s[t[o]]=j.instant(t[o],e,n,a,r);return s}if(angular.isString(t)&&t.length<1)return t;t&&(t=st.apply(t));var u,c,f=[];z&&f.push(z),i&&f.push(i),T&&T.length&&(f=f.concat(T));for(var g=0,p=f.length;g<p;g++){var h=f[g];if(q[h]&&void 0!==q[h][t]&&(u=d(t,e,n,i,r)),void 0!==u)break}u||""===u||(U||M?u=w(t):(u=b.interpolate(t,e,"filter",r),V&&!S&&(c=C(t,e,r)),V&&!S&&c&&(u=c)));return u},j.versionInfo=function(){return"2.17.0"},j.loaderCache=function(){return H},j.directivePriority=function(){return nt},j.statefulFilter=function(){return at},j.isReady=function(){return tt};var n=m.defer();n.promise.then(function(){tt=!0}),j.onReady=function(t){var e=m.defer();return angular.isFunction(t)&&e.promise.then(t),tt?e.resolve():n.promise.then(e.resolve),e.promise},j.getAvailableLanguageKeys=function(){return 0<Y.length?Y:null},j.getTranslationTable=function(t){return(t=t||j.use())&&q[t]?angular.copy(q[t]):null};var a=s.$on("$translateReady",function(){n.resolve(),a(),a=null}),r=s.$on("$translateChangeEnd",function(){n.resolve(),r(),r=null});if(D){if(angular.equals(q,{})&&j.use()&&j.use(j.use()),T&&T.length)for(var E=function(t){return lt(t.key,t.table),s.$emit("$translateChangeEnd",{language:t.key}),t},k=0,P=T.length;k<P;k++){var A=T[k];!X&&q[A]||(f[A]=u(A).then(E))}}else s.$emit("$translateReady",{language:j.use()});return j}]}function n(s,o){"use strict";var t={};return t.setLocale=function(t){t},t.getInterpolationIdentifier=function(){return"default"},t.useSanitizeValueStrategy=function(t){return o.useStrategy(t),this},t.interpolate=function(t,e,n,a,r){var i;return e=e||{},e=o.sanitize(e,"params",a,n),i=angular.isNumber(t)?""+t:angular.isString(t)?(i=s(t)(e),o.sanitize(i,"text",a,n)):""},t}function a(S,L,j,w,C){"use strict";var N=function(t){return angular.isString(t)?t.toLowerCase():t};return{restrict:"AE",scope:!0,priority:S.directivePriority(),compile:function(t,h){var d=h.translateValues?h.translateValues:void 0,v=h.translateInterpolation?h.translateInterpolation:void 0,m=h.translateSanitizeStrategy?h.translateSanitizeStrategy:void 0,$=t[0].outerHTML.match(/translate-value-+/i),y="^(.*)("+L.startSymbol()+".*"+L.endSymbol()+")(.*)",b="^(.*)"+L.startSymbol()+"(.*)"+L.endSymbol()+"(.*)";return function(r,l,u){r.interpolateParams={},r.preText="",r.postText="",r.translateNamespace=O(r);var i={},s=function(t){if(angular.isFunction(s._unwatchOld)&&(s._unwatchOld(),s._unwatchOld=void 0),angular.equals(t,"")||!angular.isDefined(t)){var e=function(){return this.toString().replace(/^\s+|\s+$/g,"")}.apply(l.text()),n=e.match(y);if(angular.isArray(n)){r.preText=n[1],r.postText=n[3],i.translate=L(n[2])(r.$parent);var a=e.match(b);angular.isArray(a)&&a[2]&&a[2].length&&(s._unwatchOld=r.$watch(a[2],function(t){i.translate=t,c()}))}else i.translate=e||void 0}else i.translate=t;c()},t=function(e){u.$observe(e,function(t){i[e]=t,c()})};!function(t,e,n){if(e.translateValues&&angular.extend(t,w(e.translateValues)(r.$parent)),$)for(var a in n)Object.prototype.hasOwnProperty.call(e,a)&&"translateValue"===a.substr(0,14)&&"translateValues"!==a&&(t[N(a.substr(14,1))+a.substr(15)]=n[a])}(r.interpolateParams,u,h);var e=!0;for(var n in u.$observe("translate",function(t){void 0===t?s(""):""===t&&e||(i.translate=t,c()),e=!1}),u)u.hasOwnProperty(n)&&"translateAttr"===n.substr(0,13)&&13<n.length&&t(n);if(u.$observe("translateDefault",function(t){r.defaultText=t,c()}),m&&u.$observe("translateSanitizeStrategy",function(t){r.sanitizeStrategy=w(t)(r.$parent),c()}),d&&u.$observe("translateValues",function(t){t&&r.$parent.$watch(function(){angular.extend(r.interpolateParams,w(t)(r.$parent))})}),$){var a=function(n){u.$observe(n,function(t){var e=N(n.substr(14,1))+n.substr(15);r.interpolateParams[e]=t})};for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&"translateValue"===o.substr(0,14)&&"translateValues"!==o&&a(o)}var c=function(){for(var t in i)i.hasOwnProperty(t)&&void 0!==i[t]&&f(t,i[t],r,r.interpolateParams,r.defaultText,r.translateNamespace)},f=function(e,t,n,a,r,i){t?(i&&"."===t.charAt(0)&&(t=i+t),S(t,a,v,r,n.translateLanguage,n.sanitizeStrategy).then(function(t){g(t,n,!0,e)},function(t){g(t,n,!1,e)})):g(t,n,!1,e)},g=function(t,e,n,a){if(n||void 0!==e.defaultText&&(t=e.defaultText),"translate"===a){(n||!n&&!S.isKeepContent()&&void 0===u.translateKeepContent)&&l.empty().append(e.preText+t+e.postText);var r=S.isPostCompilingEnabled(),i=void 0!==h.translateCompile,s=i&&"false"!==h.translateCompile;(r&&!i||s)&&j(l.contents())(e)}else{var o=u.$attr[a];"data-"===o.substr(0,5)&&(o=o.substr(5)),o=o.substr(15),l.attr(o,t)}};(d||$||u.translateDefault)&&r.$watch("interpolateParams",c,!0),r.$on("translateLanguageChanged",c);var p=C.$on("$translateChangeSuccess",c);l.text().length?u.translate?s(u.translate):s(""):u.translate&&s(u.translate),c(),r.$on("$destroy",p)}}}}function O(t){"use strict";return t.translateNamespace?t.translateNamespace:t.$parent?O(t.$parent):void 0}function r(u,c){"use strict";return{restrict:"A",priority:u.directivePriority(),link:function(n,a,r){var i,s,o,l={},t=function(){angular.forEach(i,function(t,e){t&&(l[e]=!0,n.translateNamespace&&"."===t.charAt(0)&&(t=n.translateNamespace+t),u(t,s,r.translateInterpolation,void 0,n.translateLanguage,o).then(function(t){a.attr(e,t)},function(t){a.attr(e,t)}))}),angular.forEach(l,function(t,e){i[e]||(a.removeAttr(e),delete l[e])})};f(n,r.translateAttr,function(t){i=t},t),f(n,r.translateValues,function(t){s=t},t),f(n,r.translateSanitizeStrategy,function(t){o=t},t),r.translateValues&&n.$watch(r.translateValues,t,!0),n.$on("translateLanguageChanged",t);var e=c.$on("$translateChangeSuccess",t);t(),n.$on("$destroy",e)}}}function f(t,e,n,a){"use strict";e&&("::"===e.substr(0,2)?e=e.substr(2):t.$watch(e,function(t){n(t),a()},!0),n(t.$eval(e)))}function i(s,o){"use strict";return{compile:function(t){var i=function(t){t.addClass(s.cloakClassName())};return i(t),function(t,e,n){var a=function(t){t.removeClass(s.cloakClassName())}.bind(this,e),r=i.bind(this,e);n.translateCloak&&n.translateCloak.length?(n.$observe("translateCloak",function(t){s(t).then(a,r)}),o.$on("$translateChangeSuccess",function(){s(n.translateCloak).then(a,r)})):s.onReady(a)}}}}function s(){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t,e,n){t.translateNamespace=O(t),t.translateNamespace&&"."===n.translateNamespace.charAt(0)?t.translateNamespace+=n.translateNamespace:t.translateNamespace=n.translateNamespace}}}}}function O(t){"use strict";return t.translateNamespace?t.translateNamespace:t.$parent?O(t.$parent):void 0}function o(){"use strict";return{restrict:"A",scope:!0,compile:function(){return function(e,t,n){n.$observe("translateLanguage",function(t){e.translateLanguage=t}),e.$watch("translateLanguage",function(){e.$broadcast("translateLanguageChanged")})}}}}function l(i,s){"use strict";var t=function(t,e,n,a){if(!angular.isObject(e)){var r=this||{__SCOPE_IS_NOT_AVAILABLE:"More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f"};e=i(e)(r)}return s.instant(t,e,n,a)};return s.statefulFilter()&&(t.$stateful=!0),t}function u(t){"use strict";return t("translations")}return t.$inject=["$translate"],e.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],n.$inject=["$interpolate","$translateSanitization"],a.$inject=["$translate","$interpolate","$compile","$parse","$rootScope"],r.$inject=["$translate","$rootScope"],i.$inject=["$translate","$rootScope"],l.$inject=["$parse","$translate"],u.$inject=["$cacheFactory"],angular.module("pascalprecht.translate",["ng"]).run(t),t.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",function(){"use strict";var n,a,g,p=null,h=!1,d=!1;(g={sanitize:function(t,e){return"text"===e&&(t=i(t)),t},escape:function(t,e){return"text"===e&&(t=r(t)),t},sanitizeParameters:function(t,e){return"params"===e&&(t=o(t,i)),t},escapeParameters:function(t,e){return"params"===e&&(t=o(t,r)),t},sce:function(t,e,n){return"text"===e?t=s(t):"params"===e&&"filter"!==n&&(t=o(t,r)),t},sceParameters:function(t,e){return"params"===e&&(t=o(t,s)),t}}).escaped=g.escapeParameters,this.addStrategy=function(t,e){return g[t]=e,this},this.removeStrategy=function(t){return delete g[t],this},this.useStrategy=function(t){return h=!0,p=t,this},this.$get=["$injector","$log",function(u,c){var e,f={};return u.has("$sanitize")&&(n=u.get("$sanitize")),u.has("$sce")&&(a=u.get("$sce")),{useStrategy:(e=this,function(t){e.useStrategy(t)}),sanitize:function(t,e,n,a){if(p||h||d||(c.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),d=!0),n||null===n||(n=p),!n)return t;a||(a="service");var r,i,s,o,l=angular.isArray(n)?n:[n];return r=t,i=e,s=a,o=l,angular.forEach(o,function(e){if(angular.isFunction(e))r=e(r,i,s);else if(angular.isFunction(g[e]))r=g[e](r,i,s);else{if(!angular.isString(g[e]))throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+e+"'");if(!f[g[e]])try{f[g[e]]=u.get(g[e])}catch(t){throw f[g[e]]=function(){},new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+e+"'")}r=f[g[e]](r,i,s)}}),r}}}];var r=function(t){var e=angular.element("<div></div>");return e.text(t),e.html()},i=function(t){if(!n)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");return n(t)},s=function(t){if(!a)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sce service.");return a.trustAsHtml(t)},o=function(t,n,a){if(angular.isDate(t))return t;if(angular.isObject(t)){var r=angular.isArray(t)?[]:{};if(a){if(-1<a.indexOf(t))throw new Error("pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object")}else a=[];return a.push(t),angular.forEach(t,function(t,e){angular.isFunction(t)||(r[e]=o(t,n,a))}),a.splice(-1,1),r}return angular.isNumber(t)?t:!0===t||!1===t?t:angular.isUndefined(t)||null===t?t:n(t)}}),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",e),e.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",n),n.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",a),a.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateAttr",r),r.displayName="translateAttrDirective",angular.module("pascalprecht.translate").directive("translateCloak",i),i.displayName="translateCloakDirective",angular.module("pascalprecht.translate").directive("translateNamespace",s),s.displayName="translateNamespaceDirective",angular.module("pascalprecht.translate").directive("translateLanguage",o),o.displayName="translateLanguageDirective",angular.module("pascalprecht.translate").filter("translate",l),l.displayName="translateFilterFactory",angular.module("pascalprecht.translate").factory("$translationCache",u),u.displayName="$translationCache","pascalprecht.translate"});