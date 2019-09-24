$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
       document.getElementById('navbar').classList.add('shadow');
    }
    else {
        document.getElementById('navbar').classList.remove('shadow');
    }
});