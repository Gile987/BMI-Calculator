class App {
  constructor() {
    this.calculateButton = document.querySelector('.calculate');
    this.resultContainer = document.querySelector('.results');
    this.result = document.querySelector('.results_text');
    this.result.classList.value = 'results_text';
    this.calculateButton.addEventListener('click', this.calculate.bind(this));
  }

  calculate() {
    let height = parseInt(document.querySelector('.height').value);
    let weight = parseInt(document.querySelector('.weight').value);
    if (height === "" || isNaN(height)) {
      this.resultContainer.classList.add('show');
      this.result.innerHTML = "Please enter a valid number";
    } else if (weight === "" || isNaN(weight)) {
      this.resultContainer.classList.add('show');
      this.result.innerHTML = "Please enter a valid number";
    } else {
      let bmi = (weight / ((height * height) / 10000)).toFixed(2);
      this.result.innerHTML = "Your BMI is " + bmi;
      this.resultContainer.classList.add('show');

      switch (true) {
        case bmi >= 6 && bmi < 16.0:
          this.result.classList.add('severe');
          this.result.innerHTML += " and you are severely underweight";
          break;
        case bmi >= 16.0 && bmi < 18.5:
          this.result.classList.add('underweight');
          this.result.innerHTML += " and you are underweight";
          break;
        case bmi >= 18.5 && bmi <= 24.9:
          this.result.classList.add('normal');
          this.result.innerHTML += " and your BMI is normal";
          break;
        case bmi >= 25 && bmi <= 29.9:
          this.result.classList.add('overweight');
          this.result.innerHTML += " and you are overweight";
          break;
        case bmi >= 30 && bmi <= 34.9:
          this.result.classList.add('obese');
          this.result.innerHTML += " and you are obese";
          break;
        case bmi >= 35 && bmi <= 39.9:
          this.result.classList.add('severely_obese');
          this.result.innerHTML += " and you are severely obese";
          break;
        case bmi >= 40 && bmi <= 252:
          this.result.classList.add('morbidly_obese');
          this.result.innerHTML += " and you are morbidly obese";
          break;
        default:
          this.result.classList.add('not_human');
          this.result.innerHTML += " and you are not a human";
      };
    };
  };
};

let app = new App();