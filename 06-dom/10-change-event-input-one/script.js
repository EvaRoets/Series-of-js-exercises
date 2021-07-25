/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    // Listen for changes in the input field
    document.getElementById("pass-one").addEventListener("input", function (){
        let length = document.getElementById("pass-one").value.length
        let pswd = document.getElementById("pass-one")
        let maxChar = 10
        document.getElementById("counter").innerText = `${length}/10`
        if (length >= maxChar) {
            pswd.value = pswd.value.substr(0, maxChar+1)
        }
    })

})();
