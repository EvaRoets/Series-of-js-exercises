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

const wrapText = (content, tagName) => {
    return `<${tagName}>${content}</${tagName}>`;
};

const descendingAge = (a, b) => {
    return b.age - a.age;
};

const createList = oscarWinners => {
    return `
    <ul>${oscarWinners
        .sort(descendingAge)
        .map(oscarWinner => {
            return wrapText(oscarWinner.age, 'li')
        })
        .join(` `)}
    </ul>
    `
};

document.write(createList(oscarWinners));
let sumAges = oscarWinners.age.reduce(function (a, b) { // todo access object instead of array
    return a + b;
}, 0);
console.log(sumAges)
