/*
* Make an array with all movies currently playing at your local cinema
* Display the movies in an ul list.
 */
const summerMovies = [
    `The Conjuring: The Devil Made Me Do It`,
    `Nomadland`,
    `Cruella`,
    `Voyagers`,
    `Freaky`,
    `Sons of Philadelphia`,
    `The Honest Thief`,
    `Wolfwalkers`,
];

for (let i = 0; i < summerMovies.length; i++) {
    document.write(`<ul>`);
    document.write(`<li>${summerMovies[i]}</li>`);
    document.write(`</ul>`);
}

