Template.Home.created = function () {
  this.data.mode = new ReactiveVar('');
};

Template.Home.events({
  'click .wish__individual': function (event, instance) {
    instance.data.mode.set('group');
  },
  'click .wish__group': function (event, instance) {
    instance.data.mode.set('individual');
  }
});

Template.Home.helpers({
  inputWish: function () {
    return this.mode.get() === 'group' || this.mode.get() === 'individual';
  }
});
