Meteor.methods({
  makeAWish: function (text, amount, charityId) {
    check(this.userId, Matchers.nonEmptyString);
    check(text, Matchers.nonEmptyString);
    check(amount, Number);

    Wishes.insert({
      amount: amount,
      charityId: charityId,
      status: 'active',
      userId: this.userId,
      text: text
    }, function (error, id) {
      if (error) {
        console.log(error)
      }
    });
  }
});
