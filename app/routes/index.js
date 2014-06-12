import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return data.result;
    }
});

var data = {
  "status": "ok",
  "result": [
    {
      noteBody: "Twilight Sparkle",
      picture: "http://img4.wikia.nocookie.net/__cb20140420032412/mlp/images/thumb/e/e0/Twilight_Sparkle_after_drying_herself_S1E03.png/209px-Twilight_Sparkle_after_drying_herself_S1E03.png"
    },
    {
      noteBody: "Applejack",
      picture: "http://img3.wikia.nocookie.net/__cb20121029101939/mlp/images/thumb/e/ee/Applejack_proud_of_herself_S1E01.png/209px-Applejack_proud_of_herself_S1E01.png"
    },
    {
      noteBody: "Fluttershy",
      picture: "http://img4.wikia.nocookie.net/__cb20121029094615/mlp/images/thumb/5/55/Fluttershy_rolling_her_eyes_S2E07.png/209px-Fluttershy_rolling_her_eyes_S2E07.png"
    },
    {
      noteBody: "Rarity",
      picture: "http://img2.wikia.nocookie.net/__cb20120821161955/mlp/images/thumb/9/95/Rarity_S1E1_thumb.png/209px-Rarity_S1E1_thumb.png"
    },
    {
      noteBody: "Pinkie Pie",
      picture: "http://img2.wikia.nocookie.net/__cb20120821161941/mlp/images/thumb/f/fa/Pinkie_Pie_S2E18_thumb.png/209px-Pinkie_Pie_S2E18_thumb.png"
    },
    {
      noteBody: "Rainbow Dash",
      picture: "http://img1.wikia.nocookie.net/__cb20120821161947/mlp/images/thumb/c/c4/Rainbow_Dash_S2E7_thumb.png/209px-Rainbow_Dash_S2E7_thumb.png"
    }
  ]
};
