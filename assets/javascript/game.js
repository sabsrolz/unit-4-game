$(document).ready(function() {
  //declare variables
  let scoreGoal = 0; //randomly generated number of points that player is trying to reach
  let points = 0; //randomly generated number of points assigned to each crystal for every round
  let totalScore = 0; //score of player in current round
  let wins = 0;
  let losses = 0;
  let gameEnd = false;

  //object that stores number of points for each crystal
  let crystals = {
    crystal1: points_gen(1, 12),
    crystal2: points_gen(1, 12),
    crystal3: points_gen(1, 12),
    crystal4: points_gen(1, 12)
  };

  //function that generates goal for every round
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
    //assign attribute "point" to crystal buttons
    $("#crystal_1").attr("point", crystals.crystal1);
    $("#crystal_2").attr("point", crystals.crystal2);
    $("#crystal_3").attr("point", crystals.crystal3);
    $("#crystal_4").attr("point", crystals.crystal4);

    console.log(crystals);
  }

  //click function related to button that resets game
  $(".reset_button").on("click", function next_round() {
    $(".message_round").text(""); //empties current game message
    goal_gen(18, 120); //generates new goal
    totalScore = 0; //resets score
    $(".current_score").text("Current Score: " + totalScore);
    crystals_reset(); //resets game parameters
    gameEnd = false;
    $(".reset_button").hide(); //hides reset button
  });

  //function that determines status of game
  //winning condition
  function game_status(total, goal) {
    if (total === goal) {
      $(".current_score").text("Current Score: " + total);
      $(".message").text("You win :)"); //display winning message
      wins = wins + 1;
      $(".winsNum").text("Wins: " + wins);
      $(".message_round").text("You won! Press reset game to play again");
      $(".reset_button").show(); //option to reset game
      $("#crystal_1").attr("point", " ");
      $("#crystal_2").attr("point", " ");
      $("#crystal_3").attr("point", " ");
      $("#crystal_4").attr("point", " ");
      gameEnd = true;
    }
    if (total > goal) {
      //losing condition
      $(".current_score").text("Current Score: " + totalScore);
      $(".message").text("You lose :("); //display losing message
      losses = losses + 1;
      $(".lossesNum").text("Losses: " + losses);
      $(".message_round").text("You lost! Press reset game to try again");
      $(".reset_button").show(); //option to reset game
      $("#crystal_1").attr("point", " ");
      $("#crystal_2").attr("point", " ");
      $("#crystal_3").attr("point", " ");
      $("#crystal_4").attr("point", " ");
      gameEnd = true;
    }
  }
  //status: game starts
  //assign initial point value to each crystal at the start of the game
  $("#crystal_1").attr("point", crystals.crystal1);
  $("#crystal_2").attr("point", crystals.crystal2);
  $("#crystal_3").attr("point", crystals.crystal3);
  $("#crystal_4").attr("point", crystals.crystal4);

  //Initial conditions:
  $(".reset_button").hide(); //hide reset button
  $(".current_score").text("Current Score: " + totalScore);
  $(".winsNum").text("Wins: " + wins);
  $(".lossesNum").text("Losses: " + losses);
  $(".message").text("Wins/Losses");
  goal_gen(18, 120); //generate goal of game at the start of the game
  console.log(scoreGoal);

  //click function that starts when player presses crystal button
  $(".crystal_btn").on("click", function() {
    gameEnd ? $(".reset_button").show() : $(".reset_button").hide();
    $(".message_round").text("Game in progress");
    //points_gen(1, 12);
    var score_crystal = $(this).attr("point"); //stores amount of points for crystal clicked

    totalScore = totalScore + parseInt(score_crystal); //add number of points to current score

    $(".current_score").text("Current Score: " + totalScore);

    game_status(totalScore, scoreGoal); //check current status of game
  });
});
