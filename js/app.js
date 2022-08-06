window.onload = () => {
  let calculateButton = document.querySelector('.calculate');
  calculateButton.addEventListener('click', calculate);
};

const calculate = () => {
  let height = parseInt(document.querySelector('.height').value);
  let weight = parseInt(document.querySelector('.weight').value);
  let result = document.querySelector('.results_text');

  if (height === "" || isNaN(height)) {
    result.innerHTML = "Please enter a valid number";
  } else if (weight === "" || isNaN(weight)) {
    result.innerHTML = "Please enter a valid number";
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = "Your BMI is " + bmi;
    switch (true) {
      case bmi >= 6 && bmi < 16.0:
        result.innerHTML += " and you are severely underweight";
        break;
      case bmi >= 16.0 && bmi < 18.5:
        result.innerHTML += " and you are underweight";
        break;
      case bmi >= 18.5 && bmi <= 24.9:
        result.innerHTML += " and your BMI is normal";
        break;
      case bmi >= 25 && bmi <= 29.9:
        result.innerHTML += " and you are overweight";
        break;
      case bmi >= 30 && bmi <= 34.9:
        result.innerHTML += " and you are obese";
        break;
      case bmi >= 35 && bmi <= 39.9:
        result.innerHTML += " and you are severely obese";
        break;
      case bmi >= 40 && bmi <= 252:
        result.innerHTML += " and you are morbidly obese";
        break;
      default:
        result.innerHTML += " and you are not a human";
    };
  };
};
