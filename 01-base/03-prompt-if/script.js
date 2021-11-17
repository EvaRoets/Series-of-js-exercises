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
    let cakeRequest;
    let yes = "Y";
    let no = "N";

    // if (cakeRequest !== yes && cakeRequest !== no) {
    //     alert("Please answer with (Y/N).");
    //     prompt("Would you like some cake? (Y/N)");
    //         if (cakeRequest === yes) {
    //             alert("Excellent choice!");
    //         }
    //         else if (cakeRequest === no) {
    //             alert("Too bad! No cake for you, more cake for me!")
    //         }
    // } else if (cakeRequest === yes) {
    //     alert("Excellent choice!");
    // }
    // else if (cakeRequest === no) {
    //     alert("Too bad! No cake for you, more cake for me!")
    // }

    const askQuestion = () => {
        cakeRequest = prompt("Would you like some cake? (Y/N)");
        if (!validAnswer(cakeRequest)) {
            return askQuestion();
        }
        if (cakeRequest === yes) {
            alert("Excellent choice!");
        } else {
            alert("Too bad! No cake for you, more cake for me!")
        }
    }

    const validAnswer = (answer) => {
        return !(answer !== yes && answer !== no);
    }

})();

