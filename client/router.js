function requireLogin(context, redirect) {
  if (!Meteor.userId()) {
    redirect('/');
  }
}

FlowRouter.route('/', {
  name: 'home',
  subscriptions: function(params, queryParams) {
    this.register('allCharities', Meteor.subscribe('allCharities'));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "Home" });
  }
});

FlowRouter.route('/users/:_id', {
  name: 'user',
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "User" });
  },
  triggersEnter: [requireLogin]
});

FlowRouter.route('/wishes', {
  name: 'wishes',
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "Wishes" });
  }
});

FlowRouter.route('/charities', {
  name: 'charities',
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "Header", main: "Charities" });
  }
});
