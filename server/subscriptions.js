Meteor.publish("charityDropdown", function () {
  return Charities.find({}, {fields: {active: 0}});
});

Meteor.publish("allCharities", function () {
  return Charities.find({}, {fields: {active: 0}});
});

Meteor.publish("charityNames", function () {
  return Charities.find({}, {fields: {name: 1}});
});

Meteor.publish("allWishes", function () {
  return Wishes.find({});
});

Meteor.publish("usernamesWithWishes", function () {
  var userIds = _.chain(Wishes.find({}, { fields: { userId: 1 } }).fetch())
                 .pluck('userId')
                 .without(this.userId)
                 .value();

  return Wishes.find({ _id: { $in: userIds } });
});
