
function leapYear() {
    var year = prompt("what i syour character");

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 4000 === 0) {
                alert("leap year");

            } else {
                alert("not leap year");

            }

        } else {
            alert("leap year");

        }

    } else {
        alert("not a leeap year");
    }

}
leapYear()