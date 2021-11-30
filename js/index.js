var leftButtonPhotos = document.getElementById("left-images");
var rightButtonPhotos = document.getElementById("right-images");
var images = ["images/szpagety.jpg",  "images/ninja.jpeg", "images/pizza.jpg"]

images.forEach((image) => {console.log(image);});

leftButtonPhotos.addEventListener('click', () => {
    let temp = images[0];
    let i = 0;
    images[0] = images[1];
    images[1] = images[2];
    images[2] = temp;

    const photos = document.querySelectorAll(".photos-selection");
    photos.forEach((photo) => {
        photo.src = images[i];
        i++;
    });

});

rightButtonPhotos.addEventListener('click', () => {
    let temp = images[2];
    let i = 0;
    images[2] = images[1];
    images[1] = images[0];
    images[0] = temp;

    const photos = document.querySelectorAll(".photos-selection");
    photos.forEach((photo) => {
        photo.src = images[i];
        i++;
    });

});