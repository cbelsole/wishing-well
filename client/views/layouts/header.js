Template.Header.events({
  'click .header__logout-button': function () {
    Meteor.logout();
  },
  'click .header__login-signup-button': function () {
    $('#LoginSignupModal').modal();
  }
});
