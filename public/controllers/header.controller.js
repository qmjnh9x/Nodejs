var title = "CASTING MACHINE PRODUCTIVITY";
/*
app.controller('headerCtrl',function($scope,headerFact){
	$scope.title = headerFact.title;
	$scope.img = [
		{name : 'linax', src : 'images/linax.jpg'},
		{name : 'lixil', src : 'images/lixil.jpg'}
	];
});
*/
function headerCtrl($scope,headerFact){
	$scope.title = headerFact.title;
	$scope.img = [
		{name : 'linax', src : 'images/linax.jpg'},
		{name : 'lixil', src : 'images/lixil.jpg'}
	];
}
app.factory('headerFact',function(){
	var fact = {};
	fact.title = title;
	return fact;
});