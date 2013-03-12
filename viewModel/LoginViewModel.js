
define( ['knockout','notify','jquery',
        "./LoginPassViewModel.js"],function (ko,humane,$,loginPassVM){

	return function LoginViewModel ()
	{
		this.validateUser = function (){
			if($("#userName").val()=="root" && $("#password").val()=="root")
			{
                
                
				//change to second login page
				$.mobile.changePage("#passwordDialog", "slide", true, false);
                ko.applyBindings(myApp.models.LoginPassVM, document.getElementById("passwordDialog"));

				return true;
			}
			else
			{
			//Show Error
			var bigbox = humane.create({baseCls: 'humane-boldlight', timeout: 1000})
				bigbox.error = bigbox.spawn({addnCls: 'humane-boldlight-error'})
				bigbox.error('Oh No!!! Wrong password')
			}
		};
        
	};
});