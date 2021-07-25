/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // if the input is at least 8 characters long and contains at least two numbers.

    document.getElementById("pass-one").addEventListener("input", function (){
        let pswd = document.getElementById("pass-one").value
        let hasNum = /\d/;
        if ((pswd.length >= 8) && (hasNum.test(pswd))){
            document.getElementById("validity").innerText = "A-Okay"
        }
    });
})();
