$(function () {
    $win = $("html, body");

    // promo gallery
    $("div.description-box").each(function () {
        const $nav = $("div.slide-box ul.list a", this);
        const $slick = $("div.main-slides", this)
            .slick({
                infinite: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
                nextArrow: $(".arrow.next", this),
                prevArrow: $(".arrow.prev", this),
            })
            .on("afterChange", function (e, slick, index) {
                $nav.parent().removeClass("active");
                $nav.eq(index).parent().addClass("active");
            });

        $nav.click(function (e) {
            e.preventDefault();
            $slick.slick("slickGoTo", $nav.index(this));
        });
    });

    // open/close
    const openClass = "line-content-open";
    $("div.line-content-box").each(function () {
        const $content = $(".title-content", this);
        const $parent = $(this);
        if (!$parent.hasClass(openClass)) {
            $content.hide();
        }
        $("a.title", this).click(function (e) {
            e.preventDefault();
            if (!$parent.hasClass(openClass)) {
                $content.slideDown();
            } else {
                $content.slideUp();
            }
            $parent.toggleClass(openClass);
        });
    });

    // navigation scroll
    $("nav.menu a").each(function () {
        const target = $(this).attr("href");
        const $target = /#\w+/.test(target) && $(target);
        if ($target && $target.length) {
            $(this).click(function (e) {
                e.preventDefault();
                $win.animate({ scrollTop: $target.offset().top }, "slow");
            });
        }
    });

    // Instantiate new modal
    var modal = new Custombox.modal({
        content: {
            effect: "fadein",
            target: "#offer-form",
        },
    });

    // Open
    $("#get-offer").click(function (e) {
        e.preventDefault();
        modal.open();
    });
    $("#offer-form button.close").click(function (e) {
        e.preventDefault();
        Custombox.modal.close();
    });

    // click
    const $header = $("#header");
    $(".js-menu-opener").on("click", function () {
        $header.toggleClass("active");
    });
    $("nav.menu a").on("click", function () {
        $header.removeClass("active");
    });
});
