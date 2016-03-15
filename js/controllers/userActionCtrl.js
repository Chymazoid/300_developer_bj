


devBj.controller('devBjUserCtrl', ['$scope','$firebaseAuth', function($scope, $firebaseAuth) {

	$scope.user = {};

	$scope.authData = {}



    var ref = new Firebase(DB_CONNECT_URL);
    $scope.authObj = $firebaseAuth(ref);
  

	$scope.authData = $scope.authObj.$getAuth();

	if ($scope.authData) {
	  console.log("Logged in as!!:", $scope.authData.uid);
	} else {
	  console.log("Logged out");
	}

	$scope.SignIn = function(){ 
		var email = $scope.user.email,
			password = $scope.user.password;

		if(!email || !password) return false;	
		$scope.authObj.$authWithPassword({
		  email: email,
		  password: password

		}).then(function(authData) {
		  console.log("Logged in as:", authData.uid);

		  $('#loginModal').modal('hide')

		$scope.user.name = authData.password.email;

		$scope.authData = $scope.authObj.$getAuth();;

		 console.log(authData.password.email)

		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});

	}

	if( $scope.authData) {
		$scope.user.name = $scope.authData.password.email;
	}
	

	/*console.log($scope.authData.password.email);*/


	$scope.logOut = function(e) {



		console.log('LogOut')

		$scope.authObj.$unauth();

		$scope.authData = $scope.authObj.$getAuth();;

	}

	/*$scope.authObj.$unauth()*/

/*	if ($scope.authData) {
	  console.log("Logged in as!!:", $scope.authData.uid);
	} else {
	  console.log("Logged out");
	}
		*/
	/*Create user!*/
	/*$scope.authObj.$createUser({
	  email: "my@email.com",
	  password: "mypassword"
	}).then(function(userData) {
	  console.log("User " + userData.uid + " created successfully!");

	})).catch(function(error) {
  console.error("Error: ", error);
	});*/


}]);