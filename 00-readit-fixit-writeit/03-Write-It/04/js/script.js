const oscarWinners = [
    {
        actor: "Forest Whitaker",
        film: "The Last King of Scotland",
        age: 45
    }, {
        actor: "Daniel Day-Lewis",
        film: "There Will Be Blood",
        age: 50
    }, {
        actor: "Sean Penn",
        film: "Milk",
        age: 48
    }, {
        actor: "Jeff Bridges",
        film: "Crazy Heart",
        age: 60
    }, {
        actor: "Colin Firth",
        film: "The King's Speech",
        age: 50
    }, {
        actor: "Jean Dujardin",
        film: "The Artist",
        age: 39
    }, {
        actor: "Daniel Day-Lewis",
        film: "Lincoln",
        age: 55
    }, {
        actor: "Matthew McConaughey",
        film: "Dallas Buyers Club",
        age: 44
    }, {
        actor: "Eddie Redmayne",
        film: "The Theory of Everything",
        age: 33
    }, {
        actor: "Leonardo DiCaprio",
        film: "The Revenant",
        age: 41
    }
];

// * Display the list of actors, only their last name, sorted alphabetically.
const wrapText = (content, tagName) => {
    return `<${tagName}>${content}</${tagName}>`;
};


// const lastName = (a,b) => { todo: find way to access only lastname

const createList = oscarWinners => { // todo access object instead of array
    return `oscarWinner
    <ul>${oscarWinners
        .sort()
        .map(oscarWinner => wrapText(oscarWinner.actor, 'li'))
        .join(``)}
    </ul>
    `
};
document.write(createList(oscarWinners));



