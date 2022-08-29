angular.module('wpAngular').directive("wpComments", function($log, $http, $sce, $compile, wpBloginfo){
	return {
		restrict : 'EA',
		transclude: true,
    	priority: 1000,
		link: function($scope, $element, $attr, ctrl, $transclude){

			$log.debug("init wpComments");

			$log.debug("Parent ID", $scope.ID);
			var parentID = $scope.ID;
			if(parentID){
				var url = wpBloginfo.baseUrl + "/wp-json/posts/" + parentID + "/comments/?filter%5Borderby%5D=date";
				$http.get(url).success(function(data){
					$scope.posts = data;	
					$log.debug("Load comments", data);	
				});
			}

			$scope.$watchCollection("posts", function(collection) {

				angular.forEach(collection, function(post){
					var childScope = $scope.$new();
					// Add post variables to the childSscope
					angular.forEach(post, function(value, key){
						childScope[key] = value;
					});
					childScope.content = $sce.trustAsHtml(childScope.content);
				
					$transclude(childScope, function(clone) {
		      			$element.append(clone);
		      		});
				});
			});
	    }	
	}
});

serializeQuery = function(obj) {
   var str = [];
   for(var p in obj){
       if (obj.hasOwnProperty(p)) {
           str.push(encodeURIComponent("filter[" + p + "]") + "=" + encodeURIComponent(obj[p]));
       }
   }
   return str.join("&");
}