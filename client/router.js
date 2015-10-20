function requireLogin(context, redirect) {
  if (!Meteor.userId()) {
    redirect('/');
  }
}

FlowRouter.route('/', {
  name: 'home',
  subscriptions: function(params, queryParams) {
    this.register('charityDropdown', Meteor.subscribe('charityDropdown'));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "Home" });
  }
});

FlowRouter.route('/users/:_id', {
  name: 'user',
  subscriptions: function(params, queryParams) {
    this.register('currentUserWishes', Meteor.subscribe('currentUserWishes'));
    this.register('charityNames', Meteor.subscribe('charityNames'));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "User" });
  },
  triggersEnter: [requireLogin]
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
