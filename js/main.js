require.config({
	baseURL:".",
	paths:{
		jquery:"http://code.jquery.com/jquery-1.9.1",
		knockout:"../lib/knockout-2.2.0rc.debug",
		jqm:"http://code.jquery.com/mobile/latest/jquery.mobile",
		notify:"../lib/humane.min",
        fbmenu:"./fbmenu"
	}
});

require(['jquery',
			'jqm',
            'text!../resources/tmpl/login.html',
			'../viewModel/LoginViewModel',
            '../viewModel/LoginPassViewModel',
            'knockout',
            'fbmenu'],
			function($,mobile,loginTmpl,LoginVM,LoginPassVM,ko,fbmenu){
				window.myApp = window.myApp || {};
				myApp.models = {};
				myApp.models.LoginVM = new LoginVM();
                myApp.models.LoginPassVM = new LoginPassVM();
                
				mobile.defaultPageTransition = "slide";
                
                //$('#popupLogin').html(loginTmpl);
                
				ko.applyBindings(myApp.models.LoginVM, document.getElementById("popupLogin"));
                 //ko.applyBindings(myApp.models.LoginPassVM, $("#passwordDialog").node);
         
});	