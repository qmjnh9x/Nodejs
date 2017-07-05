app.factory('bodyFact',function($http){
	var fact = {};
	fact.getFact = function(){
		return $http.get('data.json');
	}
	return fact;
});
app.service('bodyService',function(bodyFact){
	this.data = bodyFact.getFact();
});
app.controller('bodyCtrl',function($scope,$http){
	$http.get('data.json').then(function(res){
		$scope.data = res.data;
		$scope.styles = "default";
	});
	//bodyService.data.success(function(res){
		//$scope.data = res;
	//});
});
app.directive('linaxData',function(){
	return function($scope,ele,attr){
		$scope.$watchCollection('data',function(value){
			ele.html('');
			var html = "";
			html += "<table width='100%'>";
			html += "<tr><td>DATE</td><td>PLAN</td><td>ACTUAL</td><td>SHIFT 1</td><td>SHIFT 2</td><td>SHIFT 3</td></tr>";
			angular.forEach($scope.data,function(item,index){
				html += "<tr>";
				//html += "<td>1</td>";
				html += "<td>"+item.NAME+"</td>";
				html += "<td><input type='type' value='"+item.PLAN+"'></td>";
				html += "<td>"+item.ACTUAL+"</td>";
				html += "<td>"+item.SHIFT_1+"</td>";
				html += "<td>"+item.SHIFT_2+"</td>";
				html += "<td>"+item.SHIFT_3+"</td>";
				html += "</tr>";
			});
			html += "</table>";
			ele.html(html);
		});
	}
});