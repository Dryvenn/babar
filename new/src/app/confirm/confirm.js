angular.module('babar.confirm', [
    'babar.server',
    'cfp.hotkeys'
])
    .controller('ConfirmCtrl', ['$scope', 'Server', 'React', 'hotkeys', function($scope, Server, React, Hotkeys){
	this.customer = $scope.ngDialogData[0];
	this.drink = $scope.ngDialogData[1];
	var actualMoney = $scope.ngDialogData[2];
	
	$scope.buy = function(){
	    //don't have to check if actualMoney>0 for server will handle it for us
	    if(actualMoney>0){
		$scope.confirm.disableHotkeys();
		var func = 'perform';
		var args = {
		    action: 'buy',
		    data: {customer: $scope.confirm.customer, drink: $scope.confirm.drink}
		};
		var promise = Server.perform(args);
		React.toPromise(promise, func, args, function() {
		    $scope.closeThisDialog('bought');
		});
        }else{
		$scope.closeThisDialog('forbidden');
            }
        };
	$scope.cancel = function(){
            $scope.closeThisDialog('cancelled');
        };


	//Let's set up some hotkeys !
        Hotkeys.add({
                combo: 'enter',
                description: 'Confirm the sale',
                callback: $scope.buy
        });
	Hotkeys.add({
                combo: 'escape',
                description: 'Cancel the sale',
                callback: $scope.cancel
	});
        this.disableHotkeys = function(){
            Hotkeys.del('enter');
            Hotkeys.del('escape');
        };
    }]);