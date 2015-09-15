Template.Home.created = function () {
  this.data.wishMode = new ReactiveVar('');
};

Template.Home.events({
  'click .wish__individual': function (event, instance) {
    instance.data.wishMode.set('individual');
  },
  'click .wish__group': function (event, instance) {
    instance.data.wishMode.set('group');
  },
  'click .wish-form__submit': function (event, instance) {
    event.preventDefault();
    if (Meteor.userId()) {
      var wishText   = instance.$('#wishText').val(),
          wishAmount = parseInt(instance.$('#wishAmount').val(), 10),
          charityId  = instance.$('#wishCharity').val();

      Meteor.call('makeAWish', wishText, wishAmount, charityId, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          FlowRouter.go('wishes');
        }
      });
    } else {
      $('.modal-backdrop').remove();
      $('#LoginSignupModal').modal();
    }
  }
});

Template.Home.helpers({
  inputWish: function () {
    return this.wishMode.get() === 'group' || this.wishMode.get() === 'individual';
  },
  charities: function () {
    return Charities.find({}).fetch();
  }
});
