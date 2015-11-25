// get all slides
var slides = document.querySelectorAll(".widget");

// create scene for every slide
for (var i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
      triggerHook: 'onLeave',
      triggerElement: slides[i]
  })
  .setPin(slides[i])
  //.addIndicators({name: "widget-wipe"}) // add indicators (requires plugin)
  .addTo(controller)
  .offset(-50);
}
