jQuery(document).ready(function ($) {

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    var btnContainer = document.getElementById("navmenu");

    var btns = btnContainer.getElementsByClassName("menu-link");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

});

function myFunction(x) {
    x.classList.toggle("change");
}