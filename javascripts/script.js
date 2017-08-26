angular.module("myPortfolio", ["ngMaterial"])
.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('red', {
      'default': '900', 
      'hue-1': '100', 
      'hue-2': '600',
      'hue-3': '50'
    })
    .accentPalette('indigo')
    // .primaryPalette('grey', {
    //     default: '900'
    // });
    // .backgroundPalette('red', {
    //     'default': '50'
    // });
})
.factory("metaDataProvider", ["$http", function($http){
    var metaData= {};
    metaData.getMetaData= function(){
        return $http.get("data/meta-data.json");
    };
    return metaData;
}])
.controller("portfolioController", ["$scope", "metaDataProvider", function($scope, metaDataProvider){
    metaDataProvider.getMetaData().then(function(data){
        $scope.metaData= data.data;
    });
}]);