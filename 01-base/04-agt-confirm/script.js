/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let age = prompt ("What is your age?");
    let gender = prompt("What is your gender?");
    let town = prompt ("What is your town of residence?");
    let confirmInfo = confirm (`Is this information correct? 
         Age:${age},
         Gender:${gender}, 
         Town of residence:${town}?
         `);

    if (confirmInfo === true) {
    }
    else {
        age = prompt ("What is your age?");
        gender = prompt("What is your gender?");
        town = prompt ("What is your town of residence?");
        confirmInfo = confirm (`Is this information correct? Age: ${age}, Gender: ${gender}, Town of residence: ${town}?`);
    }
})();