FlowRouter.route('/', {
  name: 'home',
  subscriptions: function(params, queryParams) {
    this.register('allCharities', Meteor.subscribe('allCharities'));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "header", main: "Home" });
  }
});

FlowRouter.route('/users/:_id', {
  name: 'user',
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "header", main: "User" });
  }
});

FlowRouter.route('/wishes', {
  name: 'wishes',
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "header", main: "Wishes" });
  }
});

FlowRouter.route('/charities', {
  name: 'charities',
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "header", main: "Charities" });
  }
});
