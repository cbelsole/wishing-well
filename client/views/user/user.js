Template.User.helpers({
  wishes: function () {
    return Wishes.find({userId: Meteor.userId()});
  }
});

Template.userWish.helpers({
  charityName: function (id) {
    if (!Charities.findOne({_id: id})) {
      return;
    }

    return Charities.findOne({ _id: id }, { fields: { name: 1 } }).name;
  }
});
