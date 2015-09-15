Meteor.publish("allCharities", function () {
  return Charities.find({}, {fields: {active: 0}});
});
