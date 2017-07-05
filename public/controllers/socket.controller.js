var socket = io.connect('http://192.168.1.123:8080');
//alert('s');
socket.on('server_message',function(msg){
	alert('message');
});
var j = 0;
setInterval(function(){
	//alert(1);
	//change(j); j++;
},1000);
function getScope(){
	var sel = 'div[ng-controller="bodyCtrl"]';
	return angular.element(sel).scope();
}
function change(index,column,value){
	
	var $scope = getScope();	
	$scope.styles = "changeData";
	$scope.data[index][column] = value;
	$scope.$apply();
	
}