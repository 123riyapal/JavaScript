const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const result = document.querySelector(".result");
    if ((height === '' || height <=0 || isNaN(height)) || (weight === '' || weight <= 0 || isNaN(weight))) {
        result.innerHTML = "Please enter valid height and weight values.";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi > 30) {
            result.style.backgroundColor = "red";
        } else if (bmi < 18.5) {
            result.style.backgroundColor = "orange";
        } else if (bmi >= 18.5 && bmi <= 25) {
            result.style.backgroundColor = "green";
        } else if (bmi > 25 && bmi <= 30) {
            result.style.backgroundColor = "orangered";
        }
        result.innerHTML = `<span>${bmi}</span>`;
    }
});
