/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // find the id
        const id = Number(document.getElementById('hero-id').value)
        // get the list of heroes
        fetch("http://localhost:63342/js-exercises/_shared/api.json")
            .then(response => {response.json();
            .then(data => {
                // lookup the hero in the list
                const hero = data.heroes.find(hero => hero.id === id)
                // display result in target
                document.getElementById('target').innerHTML = `Hero name = ${hero.name}`
                // adopt template
            })
            })
    })
}