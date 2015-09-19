Template.LoginSignupModal.created = function () {
  this.data.loginSignupModalMode = new ReactiveVar('login');
};

Template.LoginSignupModal.rendered = function () {
  $('#LoginSignupModal').on('hide.bs.modal', function (e) {
    $('#username').val('');
    $('#password').val('');
    $('#confirmPassword').val('');
  })
};

Template.LoginSignupModal.events({
  'click .login-form__sign-up': function (event, instance) {
    instance.data.loginSignupModalMode.set('signup');
  },
  'click .login-signup-form__login': function (event, instance) {
    instance.data.loginSignupModalMode.set('login');
  },
  'click .login-signup-form__submit': function (event, instance) {
    event.preventDefault();

    var username = instance.$('#username').val(),
        password = instance.$('#password').val();

    check(username, Matchers.nonEmptyString);
    check(password, Matchers.nonEmptyString);

    if (instance.data.loginSignupModalMode.get() === 'login') {
      Meteor.loginWithPassword(username, password, function (error) {
        if (error) {
          console.log(error);
        } else {
          $('#LoginSignupModal').modal('hide');
        }
      });
    } else {
      var confirmPassword = instance.$('#confirmPassword').val();
      check(confirmPassword, password);

      Accounts.createUser({username: username, password: password}, function (error) {
        if(error) {
          console.log(error);
        } else {
          $('#LoginSignupModal').modal('hide');
        }
      });
    }
  }
});

Template.LoginSignupModal.helpers({
  loginMode: function () {
    return this.loginSignupModalMode.get() === 'login';
  },
  signupMode: function () {
    return this.loginSignupModalMode.get() === 'signup';
  }
});
