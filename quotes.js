$(function() {

  var q1 = "Do one thing every day that scares you";
  var q2 = "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.";
  var q3 = "I dream my painting and I paint my dream.";
  var q4 = "You have power over your mind - not outside events. Realize this, and you will find strength.";

  var qArray = [q1,q2,q3,q4];

  var rand = qArray[Math.floor(Math.random() * qArray.length)];

  $('.daily_quote').html(rand);

});
