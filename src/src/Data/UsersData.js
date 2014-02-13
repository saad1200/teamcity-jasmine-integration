function UsersData() {
  
  this.getUser = function(id) {

    var data = '';
    $.ajax(
    	{
    		url:"http://localhost/jasmine/users.html",
    		dataType: 'json',
    		async: false,
    		success:function(result){
     		 data = result;
    }});

  	return data;

  };
};