!function(n,t){"use strict";var a,i,r;n["angular-flatpickr"]=(a=n.angular,i=n.flatpickr,(r=a.module("angular-flatpickr",[])).directive("ngFlatpickr",[function(){return{require:"ngModel",restrict:"A",scope:{fpOpts:"&",fpOnSetup:"&"},link:function(n,t,a,r){var e;FlatpickrInstance||i?(e=FlatpickrInstance?new FlatpickrInstance(t[0],n.fpOpts()):new i(t[0],n.fpOpts()),n.fpOnSetup&&n.fpOnSetup({fpItem:e}),t.on("$destroy",function(){e.destroy()})):console.warn("Unable to find any flatpickr installation")}}}]),r)}(this);