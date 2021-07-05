/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        { type: "apple"},
        { type: "perry"},
        { type: "strawberry"},
        { type: "tomato"},
        { type: "kiwi"},
        { type: "banana"},
        { type: "orange"},
        { type: "mandarin"},
        { type: "durian"},
        { type: "peach"},
        { type: "grapes"},
        { type: "cherry"},
    ];

    // your code here
    console.log(
        fruits.every(fruit => fruit.type === 'apple') ? 'Yes' : 'No'
    )


})();
