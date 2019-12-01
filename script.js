$(document).ready(function(){

  var messageList = ["Dearest darling Nicola, Welcome to your personalised advent calendar! To start off the festive countdown, we would like to cordially invite you to a carol service this evening at Our Lady of Lourdes Primary School in Rottingdean at 5pm. Enjoy!", "For Day 2, some Christmas craft porn to watch on the bus...", "This time 2 years ago exactly! How tiny!", "Remember this? A little Christmas throwback to get you in the mood for decoration making...", "Let's dive in to advent with this fun Isla and Shorba video", "Christmas Isla", "Christmas Shorba", "We have spent so many Christmases together! Remember this one where we were barely talking but still managed to cook dinner for everyone?", "Look at these two cuties getting their Christmas on...", "Today we want to make you feel extra-special. If you look in the kitchen you will find a Christmas treat just for you <3", "11", "Merry Christmas from the world's cutest couple!", "13", "Did you remember that we all had Christmas dinner together in 2013???", "I'm dreaming of a white Christmas...with every snowball that I eat...", "Happy Christmas Countdown! Except, today is not about you. So don't forget to wish this one a happy birthday today (and then we can all get back to looking forward to Christmas again)", "Christmas Adrian", "18", "19", "A screenshot of our Whatsapp conversation on this day in 2015. Lucky we did eventually find more time to share!", "You're going home today! Thank goodness, now Christmas can properly begin (think Isla and Shorba)", "22", "Two days till Christmassssss!", "One day til Christmasssss!", "HAPPY CHRISTMASSSSSSSS! You made it! Wishing you a very merry Christmas and lots of love from us both"]

  function checkPermission(doornum) {
    date = new Date().getDate();
    if (date < doornum) {
      alert ("No peeking!");
    } else {
      alert (messageList[doornum-1]);
      popUp();
      $(this).fadeTo(2000, 0);
    }
   }

  function popUp() {
   $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
  }

  $("#d1").click(function() {
    checkPermission(1);
  });

  $("#d2").click(function() {
    checkPermission(2);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d3").click(function() {
    checkPermission(3);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d4").click(function() {
    checkPermission(4);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d5").click(function() {
    checkPermission(5);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d6").click(function() {
    checkPermission(6);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d7").click(function() {
    checkPermission(7);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d8").click(function() {
    checkPermission(8);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d9").click(function() {
    checkPermission(9);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d10").click(function() {
    checkPermission(10);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d11").click(function() {
    checkPermission(11);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d12").click(function() {
    checkPermission(12);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d13").click(function() {
    checkPermission(13);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d14").click(function() {
    checkPermission(14);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d15").click(function() {
    checkPermission(15);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d16").click(function() {
    checkPermission(16);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d17").click(function() {
    checkPermission(17);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d18").click(function() {
    checkPermission(18);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d19").click(function() {
    checkPermission(19);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d20").click(function() {
    checkPermission(20);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d21").click(function() {
    checkPermission(21);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d22").click(function() {
    checkPermission(22);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d23").click(function() {
    checkPermission(23);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d24").click(function() {
    checkPermission(24);
      popUp();
    $(this).fadeTo(2000, 0);
  });

  $("#d25").click(function() {
    checkPermission(25);
      popUp();
    $(this).fadeTo(2000, 0);
  });
});
