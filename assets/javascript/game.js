//declare variables
let scoreGoal = 0;
let points1 = 0;
let points2 = 0;
let points3 = 0;
let points4 = 0;
let totalScore = 0;
let wins = 0;
let losses = 0;

//function that generates goal
function goal_gen(lower, upper) {
  scoreGoal = Math.floor(lower + Math.random() * upper) + 1;
  $(".goal").text("Score Goal: " + scoreGoal);
}

//function that generates points for each crystal
function points_gen(lower, upper) {
  points1 = Math.floor(lower + Math.random() * upper) + 1;
  points2 = Math.floor(lower + Math.random() * upper) + 1;
  points3 = Math.floor(lower + Math.random() * upper) + 1;
  points4 = Math.floor(lower + Math.random() * upper) + 1;
  console.log(points1);
  console.log(points2);
  console.log(points3);
  console.log(points4);
  return { points1, points2, points3, points4 };
}

$(document).ready(function() {
  //status: game starts
  //Initial conditions:
  $(".current_score").text("Current Score: " + totalScore);
  $(".winsNum").text("Wins: " + wins);
  $(".lossesNum").text("Losses: " + losses);
  $(".message").text("Wins/Losses");
  goal_gen(18, 120);
  points_gen(1, 12);

  $(".crystal_1").click(function crystal_click() {
    totalScore = totalScore + points1;
    $(".current_score").text("Current Score: " + totalScore);

    if (totalScore === scoreGoal) {
      $(".message").text("You win :)");
      wins = wins + 1;
      $(".winsNum").text("Wins: " + wins);
      //reset game conditions
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      points_gen(1, 12);
    }

    if (totalScore > scoreGoal) {
      $(".message").text("You lose :(");
      losses = losses + 1;
      $(".lossesNum").text("Losses: " + losses);
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      points_gen(1, 12);
    }
  });

  $(".crystal_2").click(function crystal_click() {
    totalScore = totalScore + points2;
    $(".current_score").text("Current Score: " + totalScore);

    if (totalScore === scoreGoal) {
      $(".message").text("You win :)");
      wins = wins + 1;
      $(".winsNum").text("Wins: " + wins);
      //reset game conditions
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      points_gen(1, 12);
    }

    if (totalScore > scoreGoal) {
      $(".message").text("You lose :(");
      losses = losses + 1;
      $(".lossesNum").text("Losses: " + losses);
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      points_gen(1, 12);
    }
  });

  $(".crystal_3").click(function crystal_click() {
    totalScore = totalScore + points3;
    $(".current_score").text("Current Score: " + totalScore);

    if (totalScore === scoreGoal) {
      $(".message").text("You win :)");
      wins = wins + 1;
      $(".winsNum").text("Wins: " + wins);
      //reset game conditions
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      points_gen(1, 12);
    }

    if (totalScore > scoreGoal) {
      $(".message").text("You lose :(");
      losses = losses + 1;
      $(".lossesNum").text("Losses: " + losses);
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      points_gen(1, 12);
    }
  });

  $(".crystal_4").click(function crystal_click() {
    totalScore = totalScore + points4;
    $(".current_score").text("Current Score: " + totalScore);

    if (totalScore === scoreGoal) {
      $(".message").text("You win :)");
      wins = wins + 1;
      $(".winsNum").text("Wins: " + wins);
      //reset game conditions
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      points_gen(1, 12);
    }

    if (totalScore > scoreGoal) {
      $(".message").text("You lose :(");
      losses = losses + 1;
      $(".lossesNum").text("Losses: " + losses);
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      points_gen(1, 12);
    }
  });
});
