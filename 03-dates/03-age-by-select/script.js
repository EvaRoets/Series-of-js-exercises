/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
//TODO register dobDay, doyMonth, dobYear
    let userInput = document.getElementsByClass("field dob").value; //gets userInput
    /* // TODO convert userInput to date format
    let doBirth = new Date(userInput);
     */
    if(userinput==null || userinput=='') {

        document.getElementById("message").innerHTML = "Choose a date please!";
        return false;
    }

//TODO Compare dob to current date
    else {
        let currentDate = date.getDate().getMonth().getFullYear() // converts currentDate to date format
       /* //TODO parse + cald days, months, years
        let dayDif = getDate() - doBirth(); //calculate day difference from currentDate
        let monthDif = getMonth() - doBirth(); //calculate month difference from currentDate
        let yearDif = getFullYear() - doBirth();//calculate year difference from currentDate


                //convert the calculated difference in date format
        var age_dt = new Date(month_diff);

        */

        let doBirth = new Date (dayDif monDif yearDif);
        let yearsOld = Math.round((currentDate-doBirth)/years);

    }
/*

        //calculate month difference from current date in time
        var month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format
        var age_dt = new Date(month_diff);

        //extract year from date
        var year = age_dt.getUTCFullYear();

        //now calculate the age of the user
        var age = Math.abs(year - 1970);

}
 */





    //TODO Display age
    document.getElementById("run").innerHTML = ("You are " + yearsOld + " years old.");



/*

function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";
      return false;
    } else {

    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    //display the calculated age
    return document.getElementById("result").innerHTML =
             "Age is: " + age + " years. ";
    }
}

 */






})();