Template.usersController.helpers({
  target: function () {
    var loggedInUserId = Meteor.userId();

    if (loggedInUserId) {
      return this.targetTemplate;
    } else {
      FlowRouter.go('home')
    }
  }
})
