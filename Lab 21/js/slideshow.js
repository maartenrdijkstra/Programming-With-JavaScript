/*eslint-env browser*/

let $ = function (id) {
    return document.getElementById(id);
}

let createSlideshow = function () {
    // PRIVATE MEMBERS
    let timer, play = true, nodes, img, stopSlideshow, displayNextImage, setPlayText;
    nodes = {image: null, caption: null};
    img = {cache: [], counter: 0};

    stopSlideshow = function () {
        clearInterval(timer);
    };

    displayNextImage = function () {
        if (img.counter === img.cache.length) {
            img.counter = 0;
        } else {
            img.counter += 1;
        }
        let image = img.cache[img.counter];
        if (image !== undefined) {
            nodes.image.src = image.src;
            nodes.caption.innerHTML = image.title;
        } else {
            nodes.image.src = "../Lab%2019/images/wakeboard.jpg";
            nodes.caption.innerHTML = "He likes to wakeboard";
        }
    };

    setPlayText = function (btn) {
        if (play) {
            btn.value = "Resume";
        } else {
            btn.value = "Pause";
        }
    };
    // PUBLIC MEMBERS
    return {
        loadImages: function (slides) {
            let image, i;
            for (i = 0; i < slides.length; i += 1) {
                image = new Image();
                image.src = slides[i].href;
                image.title = slides[i].title;
                img.cache.push(image);
            }
            return this;
        },

        startSlideShow: function () {
            if (arguments.length === 2) {
                nodes.image = arguments[0];
                nodes.caption = arguments[1];
            }
            timer = setInterval(displayNextImage, 2000);
            return this;
        },
        createToggleHandler: function () {
            let me = this;

            // CLOSURE TO BE USED AS THE CLICK EVENT
            return function () {
                if (play) {
                    stopSlideshow();
                } else {
                    me.startSlideShow();
                }
                setPlayText(this);
                play = !play;
            }
        }
    };
}

let slideshow = createSlideshow();

window.addEventListener("load", function () {
    let slides = [
        {href: "../Lab%2019/images/backpack.jpg", title: "Zak likes to backpack"},
        {href: "../Lab%2019/images/boat.jpg", title: "Zak likes his boat"},
        {href: "../Lab%2019/images/camaro.jpg", title: "Zak likes car more"},
        {href: "../Lab%2019/images/punk.jpg", title: "Zak loves music"},
        {href: "../Lab%2019/images/race.jpg", title: "He stays active"}
    ]

    // START SLIDESHOW
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

    // PAUSE SLIDESHOW
    $("play_pause").onclick = slideshow.createToggleHandler();
});
