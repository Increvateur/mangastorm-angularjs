myApp.factory("MangaModule", ["$http", function($http) {

  var getSeriesNames = function() {
    console.log("Retrieving Series Names from the Database");
    return $http.get("/seriesnames").then(function(response) {
      console.log("Info retrieved from the Database", response);
      return response.data;
    });
  };

  var getChapterInfo = function(data) {
    console.log("Retrieving Chapter Names from the Database");
    return $http.get("/chapters/" + data.seriesId).then(function(response) {
      console.log("Info retrieved from the Database", response);
      return response.data;
    });
  };

  var getChapters = function(data) {
    console.log("Retrieving Chapter from the Database", data.series);
    return $http.get("/chapterdata/" + data.series + "/" + data.chapter).then(function(response) {
      console.log("Info retrieved from the Database", response);
      return response.data;
    });
  };

  return {

    getSeriesNames : getSeriesNames,
    getChapterInfo : getChapterInfo,
    getChapters : getChapters

  };

}]);
