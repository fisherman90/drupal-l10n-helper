(function($) {

    "use strict";

    $.fn.l10n = function() {
        this
            .wrap('<div id="l10n-sidebar"><div id="l10n-content"></div></div>');
        $('#l10n-sidebar')
            .prepend('<div id="l10n-sidebar-container"><div id="slide" class="sticky"><h2>Translation Tools</h2></div></div>');
        $('#slide')
            .append('<div id="block"><h3>Suggestion</h3>block block block block block block block block block block block block block block </div>');
        $('#slide')
            .append('<div id="block"><h3>Glossary</h3>block block block block block block block block block block block block block block </div>');

        var stickyOffset = $('.sticky').offset().top;
        $(window).scroll(function() {
            var sticky = $('.sticky'),
                scroll = $(window).scrollTop();

            if (scroll >= stickyOffset) {
                sticky.addClass('l10n-fixed');
            }
            else {
                sticky.removeClass('l10n-fixed');
            }
        });

        return this;

    };

}(jQuery));
