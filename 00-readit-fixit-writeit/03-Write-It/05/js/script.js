const fees = [
    {price: 10.75, title: "Normaal tarief"},
    {price: 9.75, title: "Kortingstarief"},
    {price: 8.05, title: "Kinepolis Student Card"}
];

const extras = [
    {price: 2.00, title: "Supplement 3D"},
    {price: 2.00, title: "Supplement Escape"},
    {price: 3.00, title: "Supplement HFR 3D"},
    {price: 0.75, title: "Supplement Film Lange Speelduur (>/=2u15)"},
    {price: 2.50, title: "Supplement Cosy Zone"},
    {price: 1.00, title: "Supplement Atmos"}
];

// * Toon alle mogelijke tarieven. Telkens het basistarief en dan telkens in combinatie met één supplement.
// * Geef de correct prijs weer.

const wrapText = (content, tagName) => {
    return `<${tagName}>${content}</${tagName}>`;
};

const createFeeList = fees => {
    return `
    <ul>${fees
        .map(fee => wrapText(fee.price, 'li'))
        .join(` `)}
    </ul>
    `
};
document.write(createFeeList(fees));

const createExtrasList = extras => {
    return `
    <ul>${extras
        .map(extra => wrapText(extra.price, 'li'))
        .join(` `)}
    </ul>
    `
};
document.write(createExtrasList(extras));