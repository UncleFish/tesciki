import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.startup(

  function() {
  return Meteor.methods({
    removeAllPosts: function() {
      Klienci.remove({});
      Rozrachunki.remove({});
      return 1;
    }
  });
});

});
