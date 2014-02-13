function UsersService(UsersData){

	this.getUser = function(id){
		return UsersData.getUser(id);
	};

};