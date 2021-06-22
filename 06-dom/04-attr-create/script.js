/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //TODO Verify
    let oldImg = document.getElementById("source")
    let oldImgValue = oldImg.getAttribute("data-image");
    let newImg = document.createElement("newImg");
    newImg.src = oldImgValue;
    document.getElementById("target").appendChild(newImg);
    oldImg.remove()

})();
