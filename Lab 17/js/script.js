/*eslint-env browser*/

let Jukebox = function () {
    let self, albums = [];
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            let max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

let Album = function (artist, title) {
    let self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times."
        }
    };
    return self;
};

let jbox = new Jukebox();
let album1 = new Album("Operation Ivy", "Energy");
let album2 = new Album("New Found Glory", "Sticks and Stones");
let album3 = new Album("Blink 182", "Cheshire Cat");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

album1.play();
album2.play();
album2.play();
album3.play();
album3.play();
album3.play();
album3.play();

console.log("Your favorite album is: " + jbox.favoriteAlbum());
