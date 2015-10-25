FlowRouter.route('/', {
  name: 'home',
  subscriptions: function(params, queryParams) {
    this.register('charityDropdown', Meteor.subscribe('charityDropdown'));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "Home" });
  }
});

FlowRouter.route('/wishes', {
  name: 'wishes',
  subscriptions: function(params, queryParams) {
    this.register('allWishes', Meteor.subscribe('allWishes'));
    this.register('charityNames', Meteor.subscribe('charityNames'));
    this.register('usernamesWithWishes', Meteor.subscribe('usernamesWithWishes'));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "Wishes" });
  }
});

FlowRouter.route('/charities', {
  name: 'charities',
  subscriptions: function(params, queryParams) {
    this.register('allCharities', Meteor.subscribe('allCharities'));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "Charities" });
  }
});
