$(document).ready(function() {
  //declare variables
  let scoreGoal = 0;
  let points = 0;
  let points1;
  let points2;
  let points3;
  let points4;
  let totalScore = 0;
  let wins = 0;
  let losses = 0;

  let crystals = {
    crystal1: points_gen(1, 12),
    crystal2: points_gen(1, 12),
    crystal3: points_gen(1, 12),
    crystal4: points_gen(1, 12)
  };

  //function that generates goal
  function goal_gen(lower, upper) {
    scoreGoal = Math.floor(Math.random() * (upper - lower)) + lower;
    $(".goal").text("Score Goal: " + scoreGoal);
  }

  //function that generates number of points for each crystal
  function points_gen(lower, upper) {
    points = Math.floor(Math.random() * (upper - lower)) + lower;
    return points;
  }

  //function that resets value for points attribute in crystals object
  function crystals_reset() {
    crystals = {
      crystal1: points_gen(1, 12),
      crystal2: points_gen(1, 12),
      crystal3: points_gen(1, 12),
      crystal4: points_gen(1, 12)
    };
    $("#crystal_1").attr("point", crystals.crystal1);
    $("#crystal_2").attr("point", crystals.crystal2);
    $("#crystal_3").attr("point", crystals.crystal3);
    $("#crystal_4").attr("point", crystals.crystal4);

    console.log(crystals);
  }

  $(".reset_button").on("click", function next_round() {
    $(".message_round").text("");
    //$(".reset_button").html("<button>Reset Game</button>");
    goal_gen(18, 120);
    totalScore = 0;
    $(".current_score").text("Current Score: " + totalScore);
    crystals_reset();
  });

  //function that determines status of game
  function game_status(total, goal) {
    if (total === goal) {
      $(".current_score").text("Current Score: " + total);
      $(".message").text("You win :)");
      wins = wins + 1;
      $(".winsNum").text("Wins: " + wins);
      // totalScore = 0;
      // $(".current_score").text("Current Score: " + totalScore);
      $(".message_round").text("You won! Press reset game to try again");
      //crystals_reset();
    }
    if (total > goal) {
      $(".current_score").text("Current Score: " + totalScore);
      $(".message").text("You lose :(");
      losses = losses + 1;
      $(".lossesNum").text("Losses: " + losses);
      // totalScore = 0;
      // $(".current_score").text("Current Score: " + totalScore);
      $(".message_round").text("You lost! Press reset game to try again");
      //crystals_reset();
    }
  }

  $("#crystal_1").attr("point", crystals.crystal1);
  $("#crystal_2").attr("point", crystals.crystal2);
  $("#crystal_3").attr("point", crystals.crystal3);
  $("#crystal_4").attr("point", crystals.crystal4);

  //status: game starts
  //Initial conditions:
  $(".current_score").text("Current Score: " + totalScore);
  $(".winsNum").text("Wins: " + wins);
  $(".lossesNum").text("Losses: " + losses);
  $(".message").text("Wins/Losses");
  goal_gen(18, 120);
  console.log(scoreGoal);
  //points_gen(1, 12);

  $(".crystal_btn").on("click", function() {
    points_gen(1, 12);
    var score_crystal = $(this).attr("point");

    totalScore = totalScore + parseInt(score_crystal);

    $(".current_score").text("Current Score: " + totalScore);

    game_status(totalScore, scoreGoal);
  });
});
