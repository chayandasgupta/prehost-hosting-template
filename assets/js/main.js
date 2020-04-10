var hami_window = $(window);

// ****************************
// :: 1.0 Preloader Active Code
// ****************************

hami_window.on('load', function () {
    $('#preloader').fadeOut('1000', function () {
        $(this).remove();
    });
});

// *********************************
// :: 2.0 Hero Slides Active Code
// *********************************

$('.hero-slider').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

// *********************************
// :: 3.0 Testimonial Slides Active Code
// *********************************

$('.testimonial-slide-inner').owlCarousel({
    center: true,
    loop: true,
    items: 1,
    margin: 30,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

// *********************************
// :: 4.0 Blog Social Icon Show Active Code
// *********************************

$('.blog-share > a').on('click', function (e) {
    e.preventDefault() // prevent default action - hash doesn't appear in url
    $(this).parent().find('div').toggleClass('blog-social-active');
});

// *********************************
// :: 4.0 Client Slides Active Code
// *********************************
$('.partner-logo-slide-inner ').owlCarousel({
    center: true,
    loop: true,
    items: 1,
    margin: 30,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [4000])
})
$('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

    // ScroolToTop
    ! function (l, o, e) {
        "use strict";
        l.fn.scrollUp = function (o) {
            l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
        }, l.fn.scrollUp.init = function (r) {
            var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
                f = !1;
            switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
                id: p.scrollName,
                href: "#top"
            }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
                display: "none",
                position: "fixed",
                zIndex: p.zIndex
            }), p.activeOverlay && l("<div/>", {
                id: p.scrollName + "-active"
            }).css({
                position: "absolute",
                top: p.scrollDistance + "px",
                width: "100%",
                borderTop: "1px dotted" + p.activeOverlay,
                zIndex: p.zIndex
            }).appendTo("body"), p.animation) {
                case "fade":
                    s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                    break;
                case "slide":
                    s = "slideDown", t = "slideUp", c = p.animationSpeed;
                    break;
                default:
                    s = "show", t = "hide", c = 0
            }
            i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
                l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
            }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
                o.preventDefault(), l("html, body").animate({
                    scrollTop: a
                }, p.scrollSpeed, p.easingType)
            })
        }, l.fn.scrollUp.defaults = {
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollTarget: !1,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647
        }, l.fn.scrollUp.destroy = function (r) {
            l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
        }, l.scrollUp = l.fn.scrollUp
    }(jQuery, window, document);
hami_window.scrollUp({
    scrollSpeed: 1500,
    scrollText: '<i class="fas fa-arrow-up"></i>'
});

// *********************************
// :: 12.0 Prevent Default 'a' Click
// *********************************
$('a[href="#"]').on('click', function ($) {
    $.preventDefault();
});