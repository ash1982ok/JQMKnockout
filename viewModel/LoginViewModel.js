
define( ['knockout','notify'],function (ko,humane){

	return function LoginViewModel ()
	{
		this.validateUser = function validateUser(){
			if($("#txtUserName").val()=="root" && $("#txtPassword").val()=="root")
			{
				//change to second login page
				$.mobile.changePage("#loginView2", "slide", true, false);
				return;
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