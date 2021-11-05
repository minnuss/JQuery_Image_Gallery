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

    function changeImg() {
        img.fadeOut(300, function () {
            img.attr('src', 'img/' + imgArray[imgIndex]);
            img.fadeIn(300);
        });
    }

    // event handler for next button
    btnNext.on('click', function () {
        imgIndex = (imgIndex + 1) % imgArray.length;
        // console.log(imgIndex);
        changeImg()
    })

    // event handler for clicking on img element
    img.on('click', function () {
        imgIndex = (imgIndex + 1) % imgArray.length;
        // console.log(imgIndex);
        changeImg()
    })

    // event handler for prev button
    btnPrev.on('click', function () {
        imgIndex = (imgIndex - 1)
        if (imgIndex < 0) {
            imgIndex = imgArray.length - 1;
        }
        // console.log(imgIndex);
        changeImg()
    })
})
