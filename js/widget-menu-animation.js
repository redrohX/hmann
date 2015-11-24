// Tween Animation Setup
// .to('@target', @length, {@object})
var tween = TweenMax.to(['#animate1', '#animate2', '#animate4'], 0.5, {
  alpha: 1,
  y: -100,
  // ease: Linear.easeNone
});

// // Tween Animation Setup
// // .to('@target', @length, {@object})
// var grow = TweenMax.to(['#animate3'], 0.5, {
//   y: 300,
//   alpha: 1,
//   //ease: Linear.easeNone
// });

// build scene
var tween_scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1"
})
.setTween(tween) // trigger a TweenMax.to tween
.triggerHook(1)
//.addIndicators({name: "1 - move text"}) // add indicators (requires plugin)
.addTo(controller);

// build scene
var grow_scene = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  reverse: false
})
.triggerHook(1)
//.addIndicators({name: "2 - move photo"}) // add indicators (requires plugin)
.addTo(controller);
