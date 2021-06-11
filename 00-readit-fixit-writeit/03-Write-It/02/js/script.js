/*
* Transform the text to lowercase
* Display the list in reversed order
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
summerMovies.toLowerCase().reverse();
for (let i = 0; i < summerMovies.length -1; i++) {
    document.write(`<ul>`);
    document.write(`<li>${summerMovies[i]}</li>`);
    document.write(`</ul>`);
}


}






