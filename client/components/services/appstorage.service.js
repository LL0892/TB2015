'use strict';

angular.module('tbApp')
.factory('AppStorage', function(){
	var pageId = '';

	return{
		// App FB
		getPageId : function(){
			return pageId;
		},
		setPageId : function(id){
			pageId = id;
		},
		deletePageId : function(){
			pageId = undefined;
		}
	};
});
