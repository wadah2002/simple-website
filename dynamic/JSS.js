$(document).ready(function () {
    // Hide all sections initially
    $('.section').hide();
    
    // Show the HOME section by default
    $('#home').show();
    $('nav a[href="#home"]').addClass('active'); // Set active class to home link

    $('nav a').click(function (e) {
        e.preventDefault();
        var targetSection = $(this).attr('href');

        // Hide all sections
        $('.section').each(function() {
            $(this).css({ 'display': 'none', 'left': '-100%' }); // Position off-screen
        });

        // Show the target section
        $(targetSection).css({ 'display': 'block', 'left': '100%' }) // Start off-screen to the right
            .animate({ right: '0%' }, 'fast'); // Slide in from the right

        // Remove active class from all links and add it to the clicked link
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });
});