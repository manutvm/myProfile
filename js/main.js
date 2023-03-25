if ($(".text-slider").length == 1) {
    var typed_strings=$(".text-slider-items").text()

    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(", "),
        typeSpeed: 100,
        loop: true,
        backDelay: 2000,
        backSpeed: 50,
    });
}

window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
});