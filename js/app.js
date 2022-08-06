window.onload = () => {
  let calculateButton = document.querySelector('.calculate');
  calculateButton.addEventListener('click', calculate);
};

const calculate = () => {
  let height = parseInt(document.querySelector('.height').value);
  let weight = parseInt(document.querySelector('.weight').value);
  let result = document.querySelector('.results_text');

  if (height === "" || isNaN(height)) {
    console.log("height is empty");
    result.innerHTML = "Please enter a valid height";
  } else if (weight === "" || isNaN(weight)) {
    result.innerHTML = "Please enter a valid weight";
  } else {
    let bmi = weight / (height * height);
    result.innerHTML = "Your BMI is " + bmi;
  };
};