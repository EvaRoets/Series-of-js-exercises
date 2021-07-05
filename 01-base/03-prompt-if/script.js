/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

    // your code here
    let cakeRequest = prompt("Would you like some cake? (Y/N)")
    let Yes = "Y";
    let No = "N";

    if (cakeRequest !== Yes && cakeRequest !== No) {
        alert("Please answer with Y or N.");
        prompt("Would you like some cake? (Y/N)");
            if (cakeRequest === Yes) {
                alert("Excellent choice!");
            }
            else if (cakeRequest === No) {
                alert("Too bad! No cake for you, more cake for me!")
            }
    } else if (cakeRequest === Yes) {
        alert("Excellent choice!");
    }
    else if (cakeRequest === No) {
        alert("Too bad! No cake for you, more cake for me!")
    }

})();

