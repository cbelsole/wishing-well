FlowRouter.route('/users/:_id', {
  name: 'user',
  subscriptions: function(params, queryParams) {
    this.register('currentUserWishes', Meteor.subscribe('currentUserWishes'));
    this.register('charityNames', Meteor.subscribe('charityNames'));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "usersController", targetTemplate: "User"});
  }
});
