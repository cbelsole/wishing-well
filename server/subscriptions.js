Meteor.publish("charityDropdown", function () {
  return Charities.find({}, {fields: {active: 0}});
});

Meteor.publish("allCharities", function () {
  return Charities.find({}, {fields: {active: 0}});
});
