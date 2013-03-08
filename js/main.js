require.config({
	baseURL:"../.",
	paths:{
		jquery:"http://code.jquery.com/jquery-1.9.1",
		knockout:"../lib/knockout-2.2.0rc.debug",
		jqm:"http://code.jquery.com/mobile/latest/jquery.mobile",
		notify:"../lib/humane.min"
	}
});

require(['jquery',
			'jqm',
			'knockout',
			"../viewModel/loginViewModel"],
			function($,mobile,ko,LoginVM){
				var myApp = myApp || {};
				myApp.models = {};
				myApp.models.LoginVM = new LoginVM(),
				mobile.defaultPageTransition = "slide";

				ko.applyBindings(myApp.models.LoginVM, $("loginView").node);

});	