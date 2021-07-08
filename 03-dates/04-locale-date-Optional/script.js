(function() {

// get value of today's date
    // get day of the week
    let today = new Date();
    let weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    let currentWeekday = weekday[today.getDay()];

    //get day month year
    let month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let currentDate = today.getDate();
    let currentMonthName = month[today.getMonth()];
    let currentYear = today.getFullYear();

    //get hour (24h)
    let currentHours = today.getHours()
    let currentMinutes = today.getMinutes();

//change content
    document.getElementById("target").innerHTML = currentWeekday+" "+currentDate+" "+currentMonthName+" "+currentYear+", "+currentHours+"h"+currentMinutes


})();
