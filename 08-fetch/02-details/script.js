/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // display it in the tag whose id is "target".
    // Use the tag <strong>template</strong> to reproduce a suitable html structure
    document.getElementById("run").addEventListener("click", function (){
        document.getElementById("hero-id")})
    fetch("http://localhost:63342/js-exercises/_shared/api.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
        .catch(function (err) {
            console.log("The json file is not loading correctly. Adjust your code ;)");
        });

    function displayData (data) {
        let listContainer = document.getElementById("target");
        for (let i = 0; i < data.length; i++) {
            let listHeroesHere = document.createElement("div");
            listHeroesHere.innerHTML = "Heroes" + data[i].name + " " + data[i].alterEgo + " " + data[i].abilities;
            listContainer.appendChild(listHeroesHere);
//TODO adopt template styling
        }
    }












    })();
