Meteor.startup(function () {
  if (Charities.find({}).count() === 0) {
    _.each(
      [
        'Red Cross',
        'Catholic Charities',
        'African Wildlife Foundation',
        'Cancer Research Institute'
      ],
      function (charity) {
        Charities.insert({ name: charity });
      });
  }
});
