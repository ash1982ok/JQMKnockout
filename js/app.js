/*globals $, ko, document, SearchResultsViewModel, TweetViewModel, TwitterSearchViewModel */
var myApp = myApp || {};

myApp.models = {};

// create the various view models
myApp.models.loginViewModel = new LoginViewModel(),

$.mobile.defaultPageTransition = "slide";

$(document).ready(function () {
  // bind each view model to a jQueryMobile page
  ko.applyBindings(myApp.models.loginViewModel, $("loginView").node);
  
});

















