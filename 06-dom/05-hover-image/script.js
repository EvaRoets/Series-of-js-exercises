/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let img = document.querySelector("img")
    let firstImg = img.getAttribute("src");
    let newImg = img.getAttribute("data-hover");

    img.addEventListener("mouseover", function() {
        img.setAttribute("src", newImg);
    });

    img.addEventListener("mouseout", function() {
        img.setAttribute("src", firstImg);
    });


})();