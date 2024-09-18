
$(document).ready(function () {
    $('nav a').click(function (e) {
        e.preventDefault();
        var targetSection = $(this).attr('href');
        $('.section').hide();
        $(targetSection).slideDown();
    });
});