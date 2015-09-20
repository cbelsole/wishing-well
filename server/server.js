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
        Charities.insert({
          name: charity,
          pendingDonations: 0,
          donations: 0
        });
      });
  }

  Meteor.setInterval(function () {
    var pendingDonations = Wishes.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: "$charityId", pendingDonations: {$sum: '$amount' } } }
    ]);

    var actualDonations = Wishes.aggregate([
      { $match: { status: 'resolved' } },
      { $group: { _id: "$charityId", donations: {$sum: '$amount' } } }
    ]);

    var updateFields = {}
    _.chain(pendingDonations.concat(actualDonations))
     .groupBy(function(result) { return result._id })
     .map(function (charityFields, id) {
       return _.reduce(charityFields, function (memo, field) {
         return _.extend(memo, field);
       }, { _id: id });
     })
     .each(function (charityFields) {
       var id = charityFields._id;
       delete charityFields['_id']

       Charities.update({ _id: id }, { $set: charityFields });
    });
  }, 30000);
});
