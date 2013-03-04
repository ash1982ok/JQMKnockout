function LoginViewModel (){
		
		this.passChar1="9";
		this.passChar2="9";

		this.loginText = ko.observable("Hello Knockout World");

		this.validateUser = function validateUser(){
			if($("txtUserName").val ==="root" && $("txtPassword").val==="root")
			{
				//change to second login page

				return;
			}
			//Show Error
			var bigbox = humane.create({baseCls: 'humane-boldlight', timeout: 1000})
				bigbox.error = bigbox.spawn({addnCls: 'humane-boldlight-error'})
				bigbox.error('Oh No!!! Wrong password')
		};
};