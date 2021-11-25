function compute() {
    // Variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // Validates if 'Amount' input is a positive number
    if (principal < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    document.getElementById("result").innerHTML =
        "If you deposit " +
        "<mark>" +
        principal +
        "</mark>" +
        ",<br>at an interest rate of " +
        "<mark>" +
        rate +
        "</mark>" +
        "%<br>You will receive an amount of " +
        "<mark>" +
        interest +
        "</mark>" +
        ",<br>in the year " +
        "<mark>" +
        year +
        "</mark>" +
        "<br>";
    console.log(`this is the principal: ${principal}`);
}

// Updates the interest rate when the value from the range slider input changes
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
