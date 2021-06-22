/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //TODO create HTML table with 10 columns and 10 rows,
    // containing the tables of multiplication from 1 to 10
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    for (i=0; i<10; i++){
        let row = document.createElement("tr");
        for (j=0; j<10; j++){
            let cell = document.createElement("td");
            cell.innerHTML = (j+1) * (i+1);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.getElementById("target").appendChild(table)

})();