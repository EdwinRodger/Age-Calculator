// calculate age
function calculateAge() {
    // get user input
    var dob = document.getElementById("dob").value;

    // calculate age
    var year = new Date().getFullYear() - new Date(dob).getFullYear();
    var month = new Date().getMonth() - new Date(dob).getMonth();
    var day = new Date().getDate() - new Date(dob).getDate();

    // display output
    document.getElementById("age").innerHTML = `Your age is ${year} years, ${month} months, ${day} days.`;
}