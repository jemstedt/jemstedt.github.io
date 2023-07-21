$(function() {
    // default page to load
    $('#content').load('home.html');

    $('nav a').click(function(e) {
        e.preventDefault();
        let page = $(this).attr('href');
        $('#content').load(page);
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });
});
