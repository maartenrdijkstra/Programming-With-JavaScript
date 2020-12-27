/*eslint-env browser*/

let $ = function (id) {
    return document.getElementById(id);
}

let slideshow = {
    timer: null,
    nodes: {image: null, caption: null},
    img: {cache: [], counter: 0},
    speed: 4000,

    loadImages: function (slides) {
        let image, i;
        for (i = 0; i < slides.length; i += 1) {
            image = new Image();
            image.src = slides[i].href;
            image.title = slides[i].title;
            this.img.cache.push(image);
        }
        return this;
    },

    startSlideShow: function (image, caption) {
        this.nodes.image = image;
        this.nodes.caption = caption;
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
        return this;
    },

    displayNextImage: function () {
        if (this.img.counter === this.img.cache.length) {
            this.img.counter = 0;
        } else {
            this.img.counter += 1;
        }
        let image = this.img.cache[this.img.counter];
        if (image === undefined) {
            this.nodes.image.src = "images/wakeboard.jpg";
            this.nodes.caption.innerHTML = "He likes to wakeboard.";
        } else {
            this.nodes.image.src = image.src;
            this.nodes.caption.innerHTML = image.title;
        }
    }
};

window.addEventListener("load", function () {
    let slides = [
        {href: "images/backpack.jpg", title: "He backpacks in the Sierras often."},
        {href: "images/boat.jpg", title: "He loves his boat."},
        {href: "images/camaro.jpg", title: "He loves his Camaro more."},
        {href: "images/punk.jpg", title: "He used to be in a punk band and toured with many popular acts."},
        {href: "images/race.jpg", title: "He's active and loves obstacle course racing."}
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
});
