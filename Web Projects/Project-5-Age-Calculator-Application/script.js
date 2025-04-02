const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
})

function calculateAge() {
    const today = new Date();
    const birthDateInput = document.getElementById("birthdate").value;
    const birthDateParts = birthDateInput.split("-");
    const birthDay = birthDateParts[0];
    const birthMonth = birthDateParts[1] - 1;
    const birthYear = birthDateParts[2];

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    if (isValidDate(birthDate)) {
        showAge(today, birthDate);
    } else {
        alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
    }
}

const isValidDate = (date) => {
    return (Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));
};

const showAge = (today, birthDate) => {
    const ageInMilliSeconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliSeconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const resultContainer = document.querySelector(".result-container");
    const result = document.querySelector(".result");

    result.innerHTML = `
    <div class="result-item">
        <h2>Age:</h2>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
    </div>
    <div class="result-item">
        <h2>Months Passed:</h2>
        <p>${ageInMonths}</p>
    </div>
    <div class="result-item">
        <h2>Weeks Passed:</h2>
        <p>${ageInWeeks}</p>
    </div>
    <div class="result-item">
        <h2>Days Passed:</h2>
        <p>${ageInDays}</p>
    </div>
    <div class="result-item">
        <h2>Hours Passed:</h2>
        <p>${ageInHours}</p>
    </div>
    <div class="result-item">
        <h2>Minutes Passed:</h2>
        <p>${ageInMinutes}</p>
    </div>
    <div class="result-item">
        <h2>Seconds Passed:</h2>
        <p>${ageInSeconds}</p>
    </div>
    <div class="result-item">
        <h2>MilliSeconds Passed:</h2>
        <p>${ageInMilliSeconds}</p>
    </div>
    `;
    resultContainer.style.display = "block";
}