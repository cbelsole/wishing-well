FlowRouter.route('/', {
  name: 'home',
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

FlowRouter.route('/bids', {
  name: 'bids',
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "header", main: "Bids" });
  }
});

FlowRouter.route('/charities', {
  name: 'charities',
  action: function(params, queryParams) {
    BlazeLayout.render('ApplicationLayout', { header: "header", main: "Charities" });
  }
});
