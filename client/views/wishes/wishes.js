Template.Wishes.helpers({
  wishes: function () {
    return Wishes.find({});
  },
  charityName: function (id) {
    if (!Charities.findOne({_id: id})) {
      return;
    }

    return Charities.findOne({ _id: id }, { fields: { name: 1 } }).name;
  },
  userName: function (id) {
    if (!Meteor.users.findOne({_id: id})) {
      return;
    }

    return Meteor.users.findOne({ _id: id }, { fields: { username: 1 } }).username;
  }
});
