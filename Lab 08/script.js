//GLOBAL VARIABLES

let monthlyRate;
let months;
let futureValue;
let monthlyInterest;
let rate;
let investment;
let years;
let i;
let output;
let calculate;

//GET DOM ELEMENTS
investment = window.document.getElementById("investment");
rate = window.document.getElementById("interest");
years = window.document.getElementById("years");
output = window.document.getElementById("futureValue");
calculate = window.document.getElementById("calculator");

// CALCULATE THE FUTURE VALUE
function calculateInvestment(investment, rate, years) {
    monthlyRate = rate / 12 / 100;
    months = years * 12;
    futureValue = 0.0;

    for (i = 0; i <= months; i += 1) {
        futureValue += investment;
        monthlyInterest = investment * monthlyRate;
        futureValue += monthlyInterest;
    }
    return futureValue;
}

// GET THE VAULES FROM THE DOM ELEMENTS, CALCULATE, DISPLAY RESULT
calculate.addEventListener("click", function () {
    investment = parseFloat(investment.value);
    rate = parseFloat(rate.value);
    years = parseInt(years.value);

    futureValue = calculateInvestment(investment, rate, years);

    output.innerHTML = "Future value: $" + Math.round(futureValue) + ".00";
});
