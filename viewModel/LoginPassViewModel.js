
define( ['knockout','notify','jquery'],function (ko,humane,$){

	return function LoginPassViewModel ()
	{
        this.validatePassword = function () {
            if($("#pass1").val()=="9" && $("#pass2").val()=="9")
			{
				//change to second login page
				$.mobile.changePage("#home", "slide", true, false);
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