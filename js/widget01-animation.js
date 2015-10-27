var showImage = function (el) {
  var el = el.find('> div'),
      image = el.data('src');
  setTimeout(function () {
    el.css({
      'background-image' : 'url(' + image + ')',
      'height' : '350px'
    });
    el.addClass('is-visible');
  }, 750);
}

// Tween Animation Setup
// .to('@target', @length, {@object})
var tween = TweenMax.to(['#animate1', '#animate2', '#animate4'], 0.5, {
  alpha: 1,
  y: -100,
  // ease: Linear.easeNone
});

// Tween Animation Setup
// .to('@target', @length, {@object})
var grow = TweenMax.to(['#animate3'], 0.5, {
  y: 300,
  alpha: 1,
  //ease: Linear.easeNone
});

// init controller
var controller = new ScrollMagic.Controller();

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
.setTween(grow) // trigger a TweenMax.to tween
.triggerHook(1)
//.addIndicators({name: "2 - move photo"}) // add indicators (requires plugin)
.on('start', function (event) {
  showImage($('.widget01--container--more-info--image'));
})
.addTo(controller);
