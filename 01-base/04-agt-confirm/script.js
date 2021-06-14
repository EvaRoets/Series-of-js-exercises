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

    // your code here
    //TODO ask Ask three questions to the user: his/her Age, Gender, and the Town where he/she lives.
    let age = prompt ("How old are you?");
    let gender = prompt ("What is your gender?");
    let homeTown = prompt ("Which town do you live in?");

    //TODO ask confirmation
    let infoCorrect = confirm (`Is your information correct?
                age: ${age} 
                gender: ${gender} 
                town: ${homeTown}
                 `)

    //TODO  Ask to confirm, If not confirmed, re-run
    if (infoCorrect === true) {
    }
    else {
         age = prompt ("How old are you?");
         gender = prompt ("?");
         homeTown = prompt ("Which town do you live in?");
         infoCorrect = confirm ("Is your information correct?");
    }


})();
