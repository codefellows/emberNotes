import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return data.result;
    }
});

var data = {
  "status": "ok",
  "result": [
    { noteBody: "Twilight Sparkle"},
    { noteBody: "Applejack"},
    { noteBody: "Fluttershy"},
    { noteBody: "Rarity"},
    { noteBody: "Pinkie Pie"},
    { noteBody: "Rainbow Dash"}
  ]
};
