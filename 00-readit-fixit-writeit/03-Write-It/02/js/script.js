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
const wrapText = (content, tag) =>{return `<${tag}>${content}</${tag}>`;}

const createSummerMovieList = (summerMovies) =>{
    return `
    <ul>${summerMovies
            .reverse()
            .map(summerMovie => summerMovie.toLowerCase())
            .map(summerMovie => wrapText(summerMovie, 'li')).join(``)}
    </ul>
    `
};

document.write(createSummerMovieList(summerMovies));




