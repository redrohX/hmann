$(document).ready(function($) {
    var prevent = $(".button-prim");
    prevent.click(function(e) {
        e.preventDefault();
    });

    var show = $(".show-more");
    show.click(function()  {
        $(".container-1").toggleClass('collapse');
        $(".cont").toggleClass('test');

        functionOne();
    });

    var functionOne = function() {

        TweenMax.set($("div.back"), {rotationY:-180});

        $.each($("div.cont.test"), function(i,element)
        {
            var frontCard = $(this).children(".front"),
                backCard = $(this).children(".back"),
                tl = new TimelineMax({paused:true});

            tl
                .to(frontCard, 1, {rotationY:180})
                .to(backCard, 1, {rotationY:0},0)
                .to(element, .5, {z:50},0)
                .to(element, .5, {z:0},.5);

            element.animation = tl;
        });

        $("div.cont.test").hover(elOver, elOut);

        function elOver()
        {
            this.animation.play();
        }

        function elOut()
        {
            this.animation.reverse();
        }
    };

    functionOne();
});