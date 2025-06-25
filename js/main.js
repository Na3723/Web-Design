// this is your custom Javascript file
$(document).ready(function () {
  // Content change on button click
  $("#factBtn").click(function () {
    $("#factText").text("Time travel may be possible in theory through Einstein’s relativity!");
  });

  // Image swap on hover
  $("#swapImage").hover(
    function () {
      $(this).attr("src", "images/space2.jpg");
    },
    function () {
      $(this).attr("src", "images/space1.jpg");
    }
  );

  // Animation on button click using Velocity
$("#moveBtn").click(function () {
  const scrollBoxTop = $("#scrollBox").position().top;

  $("#animateBox")
    .velocity({ top: scrollBoxTop - 10 }, { duration: 500 })
    .velocity("callout.shake");
});




  // ScrollMagic scene
  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#scrollBox",
    triggerHook: 0.9
  })
  .setClassToggle("#scrollBox", "highlight")
  .addTo(controller);
});
