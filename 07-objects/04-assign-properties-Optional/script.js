/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "Leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    /*

     */
    if (computers.hasOwnProperty('available') || computers.hasOwnProperty('os') || computers.hasOwnProperty('user') === true) {
            console.log (`${computers.available},${computers.os}, ${computers.user}`);
    }
    else{
        //TODO fix this

        defaultProps.setAttribute("available", "true");
        defaultProps.setAttribute("os", "linux");
        defaultProps.setAttribute("user", "null");
    }



})();