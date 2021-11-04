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

    // event handler for next button
    btnNext.on('click', function (e) {
        imgIndex = (imgIndex + 1) % imgArray.length;
        // console.log(imgIndex);
        img.fadeOut(300, function () {
            img.attr('src', 'img/' + imgArray[imgIndex]);
            img.fadeIn(300);
        });
    })

    // event handler for clicking on img element
    img.on('click', function (e) {
        imgIndex = (imgIndex + 1) % imgArray.length;
        // console.log(imgIndex);
        img.fadeOut(300, function () {
            img.attr('src', 'img/' + imgArray[imgIndex]);
            img.fadeIn(300);
        });
    })

    // event handler for prev button
    btnPrev.on('click', function (e) {
        imgIndex = (imgIndex - 1)
        if (imgIndex < 0) {
            imgIndex = imgArray.length - 1;
        }
        // console.log(imgIndex);
        img.fadeOut(300, function () {
            img.attr('src', 'img/' + imgArray[imgIndex]);
            img.fadeIn(300);
        });
    })
})
