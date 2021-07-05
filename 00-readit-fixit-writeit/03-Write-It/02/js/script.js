const summerMovies = [
    `The Conjuring: The Devil Made Me Do It`,
    `Nomadland`,
    `Cruella`,
    `Voyagers`,
    `Freaky`,
    `Sons of Philadelphia`,
    `The Honest Thief`,
    `Wolfwalkers`,
]
const wrapText = (content, tagName) => {
    return `<${tagName}>${content}</${tagName}>`;
}
const createList = summerMovies => {
    return `
    <ul>${summerMovies
        .reverse()
        .map(summerMovie => summerMovie.toLowerCase())
        .map(summerMovie => wrapText(summerMovie, 'li'))
        .join(``)}
    </ul>`
};
document.write(createList(summerMovies));




