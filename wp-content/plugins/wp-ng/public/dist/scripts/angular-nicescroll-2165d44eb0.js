!function(){"use strict";function n(n,t){return{link:function(c,n,e,l){var o=c.$eval(e.niceOption),i=$(n).niceScroll(o),r=$(n).getNiceScroll();e.niceScrollObject&&t(e.niceScrollObject).assign(c,r);i.onscrollend=function(n){this.newscrolly>=this.page.maxh&&e.niceScrollEnd&&c.$evalAsync(e.niceScrollEnd),n.end.y<=0&&e.niceScrollTopEnd&&c.$evalAsync(e.niceScrollTopEnd)},c.$on("$destroy",function(){angular.isDefined(i.version)&&i.remove()})}}}angular.module("angular-nicescroll",[]).directive("ngNicescroll",n),n.$inject=["$rootScope","$parse"]}();