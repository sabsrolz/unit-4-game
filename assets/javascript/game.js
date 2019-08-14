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

//function that generates goal
function goal_gen(lower, upper) {
  scoreGoal = Math.floor(lower + Math.random() * upper);
  $(".goal").text("Score Goal: " + scoreGoal);
}

function points_gen(lower, upper) {
  points = Math.floor(lower + Math.random() * upper);
  return points;
}

// //function that generates points for each crystal
// function points_gen(lower, upper) {
//   let points1 = Math.floor(lower + Math.random() * upper) + 1;
//   let points2 = Math.floor(lower + Math.random() * upper) + 1;
//   let points3 = Math.floor(lower + Math.random() * upper) + 1;
//   let points4 = Math.floor(lower + Math.random() * upper) + 1;
//   console.log(points1);
//   console.log(points2);
//   console.log(points3);
//   console.log(points4);
//   return { points1, points2, points3, points4 };
// }

let crystals = {
  crystal1: points_gen(1, 12),
  crystal2: points_gen(1, 12),
  crystal3: points_gen(1, 12),
  crystal4: points_gen(1, 12)
};

console.log(crystals);
//$("#point1").data("point", crystals.points1);

$("#crystal_1").attr("point", crystals.crystal1);
$("#crystal_2").attr("point", crystals.crystal2);
$("#crystal_3").attr("point", crystals.crystal3);
$("#crystal_4").attr("point", crystals.crystal4);

$(document).ready(function() {
  //status: game starts
  //Initial conditions:
  $(".current_score").text("Current Score: " + totalScore);
  $(".winsNum").text("Wins: " + wins);
  $(".lossesNum").text("Losses: " + losses);
  $(".message").text("Wins/Losses");
  goal_gen(18, 120);
  //points_gen(1, 12);

  $(".crystal_btn").on("click", function() {
    points_gen(1, 12);
    var score_crystal = $(this).attr("point");

    totalScore = totalScore + parseInt(score_crystal);

    $(".current_score").text("Current Score: " + totalScore);

    if (totalScore === scoreGoal) {
      $(".current_score").text("Current Score: " + totalScore);
      $(".message").text("You win :)");
      wins = wins + 1;
      $(".winsNum").text("Wins: " + wins);
      //reset game conditions
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      //points_gen(1, 12);
    }

    if (totalScore > scoreGoal) {
      $(".current_score").text("Current Score: " + totalScore);
      $(".message").text("You lose :(");
      losses = losses + 1;
      $(".lossesNum").text("Losses: " + losses);
      totalScore = 0;
      $(".current_score").text("Current Score: " + totalScore);
      goal_gen(18, 120);
      //points_gen(1, 12);
    }
  });
});
