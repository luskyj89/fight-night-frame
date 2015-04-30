function badgeRestart() {
    $(".logo").delay(4000)
        .animate(
        {
            transform: 360,
            right: "-500px",
            opacity: 0
        },
        {
            duration: 2000,
            step: function(now, fx) {
                if (fx.prop == "transform") {
                    $(this).css({
                        '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
                        '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
                        '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
                        '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
                        'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
                    })
                }
            },
            complete: function() {
                followAnimation();
            }
        });
}

function badgeInEnd() {
$(".logo")
    .animate(
    {
        transform: 1080,
        right: "1px",
        opacity: 1
    },
    {
        duration: 2000,
        step: function(now, fx) {
            if (fx.prop == "transform") {
                if (now > 360) {  // rotate and fade in when image already rotated 360deg
                    $(this).css({
                        '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
                        '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
                        '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
                        '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
                        'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
                    })
                }
            }
        },
        complete: function() {
            // How long the animation takes to restart
            setTimeout(badgeRestart, 600000);
        }
    });

}

function followLeave() {
    $(".follow").delay(10000)
        .animate(
        {
            transform: 360,
            right: "-500px",
            opacity: 0
        },
        {
            duration: 2000,
            step: function(now, fx) {
                if (fx.prop == "transform") {
                    $(this).css({
                        '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
                        '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
                        '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
                        '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
                        'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
                    })
                }
            },
            complete: function() {
                badgeInEnd();
            }
        });
};

function badgeLeave() {
    $(".logo").delay(4000)
        .animate(
        {
            transform: 360,
            right: "-500px",
            opacity: 0
        },
        {
            duration: 2000,
            step: function(now, fx) {
                if (fx.prop == "transform") {
                    $(this).css({
                        '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
                        '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
                        '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
                        '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
                        'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
                    })
                }
            },
            complete: function() {
                followAnimation();
            }
        });
};

function followAnimation() {
    $(".follow")
        .animate(
        {
            transform: 1080,
            right: "1px",
            opacity: 1
        },
        {
            duration: 2000,
            step: function(now, fx) {
                if (fx.prop == "transform") {
                    if (now > 360) {  // rotate and fade in when image already rotated 360deg
                        $(this).css({
                            '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
                            '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
                            '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
                            '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
                            'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
                        })
                    }
                }
            },
            complete: function() {
                followLeave();
            }
        });
}

function badgeIn() {
$(".logo")
    .animate(
    {
        transform: 1080,
        right: "1px",
        opacity: 1
    },
    {
        duration: 2000,
        step: function(now, fx) {
            if (fx.prop == "transform") {
                if (now > 360) {  // rotate and fade in when image already rotated 360deg
                    $(this).css({
                        '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
                        '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
                        '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
                        '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
                        'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
                    })
                }
            }
        },
        complete: function() {
            badgeLeave();
        }
    });

}

function init() {

    // $( ".logo" ).animate({
    //     opacity: 1,
    //     right: "1px"
    // }, 2000, function() {
    //     // Animation complete.
    //
    // });

    badgeIn();

}

$(document).ready(function(){
    init();
});
