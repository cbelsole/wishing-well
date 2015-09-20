Template.Charities.helpers({
  charities: function () {
    return Charities.find().fetch();
  }
});
