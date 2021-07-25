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
    // Get the value of the "data-image" attribute from the element with id "source".
    let dataImg = document.getElementById("source");
    let link1 = dataImg.getAttribute("data-image");
    console.log (link1);

    // Create a new image element inside the target element
    let figure = document.querySelector("figure");
    const image = document.createElement("img");
    figure.append(image);

    // that displays the image referred to by the attribute value.
    image.src = link1;

    // Then remove the original element.
    dataImg.remove();


})();
