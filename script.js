$(document).ready(function(){

  var messageList = ["Dearest darling Nicola, Welcome to your personalised advent calendar! To start off the festive countdown, we would like to cordially invite you to a carol service this evening at Our Lady of Lourdes Primary School in Rottingdean at 5pm. Enjoy!", "For Day 2, some Christmas craft porn to watch on the bus...", "This time 2 years ago exactly! How tiny!", "Remember this? A little Christmas throwback to get you in the mood for decoration making...", "Let's dive in to advent with this fun Isla and Shorba video", "Christmas Isla", "Christmas Shorba", "We have spent so many Christmases together! Remember this one where we were barely talking but still managed to cook dinner for everyone?", "Look at these two cuties getting their Christmas on...", "Today we want to make you feel extra-special. If you look in the kitchen you will find a Christmas treat just for you <3", "11", "Merry Christmas from the world's cutest couple!", "Christmas Julian", "Did you remember that we all had Christmas dinner together in 2013???", "I'm dreaming of a white Christmas...with every snowball that I eat...", "Happy Christmas Countdown! Except, today is not about you. So don't forget to wish this one a happy birthday today (and then we can all get back to looking forward to Christmas again)", "Christmas Adrian", "18", "19", "A screenshot of our Whatsapp conversation on this day in 2015. Lucky we did eventually find more time to share!", "You're going home today! Thank goodness, now Christmas can properly begin (think Isla and Shorba)", "22", "Two days till Christmassssss!", "One day til Christmasssss!", "HAPPY CHRISTMASSSSSSSS! You made it! Wishing you a very merry Christmas and lots of love from us both"]

  var treatList = ["advent calendar/images/1st.JPG", "https://www.youtube.com/embed/aGoZ9GkH_AE", "advent calendar/images/3rd.jpg", "advent calendar/images/4th.docx", "advent calendar/images/5th.mp4", "advent calendar/images/6th.jpg", "advent calendar/images/7th.jpg", "advent calendar/images/8th.jpg", "advent calendar/images/9th.jpg", "advent calendar/images/10th.JPG", "advent calendar/images/11th.JPG","advent calendar/images/12th.jpg", "advent calendar/images/13th.jpg", "advent calendar/images/14th.jpg", "advent calendar/images/15th.mp4", "advent calendar/images/16th.jpg", "./advent calendar/images/17th.jpg", "advent calendar/images/18th.jpg", "advent calendar/images/19th.JPG", "advent calendar/images/20th.jpg", "advent calendar/images/21st.jpg", "advent calendar/images/22nd.JPG", "advent calendar/images/23rd.JPG", "advent calendar/images/24th.JPG", "advent calendar/images/25th.JPG"]

  var idList = ["#a1", "#a2", "#a3", "#a4", "#a5", "#a6", "#a7", "#a8", "#a9", "#a10", "#a11", "#a12", "#a13", "#a14", "#a15", "#a16", "#a17", "#a18", "#a19", "#a20", "#a21", "#a22", "#a23", "#a24", "#a25"]

   var doorList = ["#d1", "#d2", "#d3", "#d4", "#d5", "#d6", "#d7", "#d8", "#d9", "#d10", "#d11", "#d12", "#d13", "#d14", "#d15", "#d16", "#d17", "#d18", "#d19", "#d20", "#d21", "#d22", "#d23", "#d24", "#d25"]

   function checkPermission(doornum) {
     date = new Date().getDate();
    /* if (date < doornum) {
       alert ("No peeking!");
     } else { */
         var index = doornum -1
       alert (messageList[index]);
         popUp(index);
         $(doorList[index]).fadeTo(2000, 0);
     /*}*/
    }

   function popUp(doornum) {
       $(idList[doornum]).attr("href", treatList[doornum]);
       $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
   }

   $("#d1").click(function() {
     checkPermission(1);
   });

   $("#d2").click(function() {
     checkPermission(2);
       popUp();
   });

   $("#d3").click(function() {
     checkPermission(3);
       popUp();
   });

   $("#d4").click(function() {
     checkPermission(4);
       popUp();
   });

   $("#d5").click(function() {
     checkPermission(5);
       popUp();
   });

   $("#d6").click(function() {
     checkPermission(6);
       popUp();
   });

   $("#d7").click(function() {
     checkPermission(7);
       popUp();
   });

   $("#d8").click(function() {
     checkPermission(8);
       popUp();
   });

   $("#d9").click(function() {
     checkPermission(9);
       popUp();
   });

   $("#d10").click(function() {
     checkPermission(10);
       popUp();
   });

   $("#d11").click(function() {
     checkPermission(11);
       popUp();
   });

   $("#d12").click(function() {
     checkPermission(12);
       popUp();
   });

   $("#d13").click(function() {
     checkPermission(13);
       popUp();
   });

   $("#d14").click(function() {
     checkPermission(14);
       popUp();
   });

   $("#d15").click(function() {
     checkPermission(15);
       popUp();
   });

   $("#d16").click(function() {
     checkPermission(16);
       popUp();
   });

   $("#d17").click(function() {
     checkPermission(17);
       popUp();
   });

   $("#d18").click(function() {
     checkPermission(18);
       popUp();
   });

   $("#d19").click(function() {
     checkPermission(19);
       popUp();
   });

   $("#d20").click(function() {
     checkPermission(20);
       popUp();
   });

   $("#d21").click(function() {
     checkPermission(21);
       popUp();
   });

   $("#d22").click(function() {
     checkPermission(22);
       popUp();
   });

   $("#d23").click(function() {
     checkPermission(23);
       popUp();
   });

   $("#d24").click(function() {
     checkPermission(24);
       popUp();
   });

   $("#d25").click(function() {
     checkPermission(25);
       popUp();
   });
 });
