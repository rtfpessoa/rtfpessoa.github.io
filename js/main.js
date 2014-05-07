(function($) {
    $(document).ready(function() {
        if (window.location.hash) {
            var hash = window.location.hash;
            activateElem(hash);
        }

        $('nav ul li a').click(function(e) {
            e.preventDefault();

            var elem = $(this).attr('href');
            activateElem(elem);
        });

        function activateElem(elem) {
            if (elem === $('nav ul li.active a').attr('href')) return;

            $('nav ul li').removeClass('active');
            $('nav ul li').find('a[href="' + elem + '"]').addClass('active');

            $('.content').removeClass('active');
            $(elem).addClass('active');
        }
    });
})(jQuery);
