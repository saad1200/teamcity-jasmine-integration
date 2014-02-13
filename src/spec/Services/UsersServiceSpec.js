
describe("UsersService", function() {

  it("should be able to get a user by id", function() {

    //arrange
    spyOn( $, 'ajax' ).and.callFake(function (options) {
     options.success({ "name" : "Micky1" });
    });

    var userId = 1;
    var usersData = new UsersData();
    var usersService = new UsersService(usersData);

    //action
    var user = usersService.getUser(userId);

    //assert
    expect(user.name).toEqual('Micky');
  });

});
