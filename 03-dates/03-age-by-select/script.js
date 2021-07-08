
(function getBirthday () {
    //get user birthdate
    let birthDay =
    let birthMonth =
    let birthYear =



        birthDate = (document.getElementsByClassName("field dob").value);
    console.log(birthDate);

    //get current date
    let date = new Date();
    let currentDate = date.getDate().getMonth().getFullYear();

    // compare dates/ set time variables
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let years = days * 365;

    //calculate age
    let yearsOld = Math.round((currentDate-birthDate)/ years);
    Try this function...

    // function calculate_age(birth_month,birth_day,birth_year)
    // {
    //     today_date = new Date();
    //     today_year = today_date.getFullYear();
    //     today_month = today_date.getMonth();
    //     today_day = today_date.getDate();
    //     age = today_year - birth_year;
    //
    //     if ( today_month < (birth_month - 1))
    //     {
    //         age--;
    //     }
    //     if (((birth_month - 1) == today_month) && (today_day < birth_day))
    //     {
    //         age--;
    //     }
    //     return age;
    // }
    // OR
    //
    // function getAge(dateString)
    // {
    //     var today = new Date();
    //     var birthDate = new Date(dateString);
    //     var age = today.getFullYear() - birthDate.getFullYear();
    //     var m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    //     {
    //         age--;
    //     }
    //     return age;



    // display age
    document.getElementById("displayBirthday").innerHTML = ("You are " + yearsOld + " years old.");

})();









