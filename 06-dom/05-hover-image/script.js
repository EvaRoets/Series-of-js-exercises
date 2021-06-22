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

    document.querySelector(img).src;

    let orgImg = document.getElementsByClassName("material");
    let orgImgValue = orgImg.getAttribute ("src");
    let hoverImg = document.getElementsByClassName("material");
    let hoverImgValue = hoverImg.getAttribute ("src");
    img.onmouseover = function() {
        img.src = document.querySelector('img').data-hover;
    }
    img.onmouseout = function() {
        img.src = document.querySelector('img').src;
    }
})();
