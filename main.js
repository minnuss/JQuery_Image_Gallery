$(document).ready(function () {

    let imgArray = [
        '1.jpeg',
        '2.jpeg',
        '3.jpeg',
        '4.jpeg'
    ]

    let imgIndex = 0;
    let img = $('.gallery img');
    let btnPrev = $('.prev');
    let btnNext = $('.next');

    // Next image
    function nextImg() {
        imgIndex = (imgIndex + 1) % imgArray.length;
    }

    // Previous image
    function prevImg() {
        imgIndex = (imgIndex - 1)
        if (imgIndex < 0) {
            imgIndex = imgArray.length - 1;
        }
    }

    // Change image with animation effect
    function changeImg() {
        img.fadeOut(300, function () {
            img.attr('src', 'img/' + imgArray[imgIndex]);
            img.fadeIn(300);
        });
    }

    // Event handler for next button
    btnNext.on('click', function () {
        nextImg()
        changeImg()
    });

    // Event handler for clicking on img element
    img.on('click', function () {
        nextImg()
        changeImg()
    })

    // Event handler for prev button
    btnPrev.on('click', function () {
        prevImg()
        changeImg()
    })
})
