
(function getBirthday () {
    //get user birthdate
    document.getElementById("run").addEventListener("click", () =>{
        let birthDay = document.getElementById('dob-day').value;
        let birthMonth = document.getElementById('dob-month').value;
        let birthYear = document.getElementById('dob-year').value;
        let date = new Date();

        let day = date.getDate() - birthDay;
        let month = date.getMonth() - birthMonth;
        let age = date.getFullYear() - birthYear;



    })


    //get current date
    let date = new Date();
    let currentDate = date.getDate().getMonth().getFullYear();

    /

    //calculate age
    let yearsOld = Math.round((currentDate-birthDate)/ years);


    // display age
    document.getElementById("displayBirthday").innerHTML = ("You are " + yearsOld + " years old.");

})();









