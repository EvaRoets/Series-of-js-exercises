/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let wantCake = prompt ("Would you like some cake?");
let yesCake = "Yes";

(function() {

  // your code here
    //TODO Ask the user if he wants some cake.
    // TODO If yes, congratulate him/her; for any other response, say:<em>More cake for me then :p !</em>

    if (wantCake === yesCake )
    alert ("Excellent choice!");
    else
        alert ("More cake for me then :p !");

})();