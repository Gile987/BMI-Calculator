class Measurements {
  constructor(height = userHeight, weight = userWeight) {
    this.height = height;
    this.weight = weight;
  };
  returnMeasurements() {
    let measurements = {
      height: this.height,
      weight: this.weight
    };
    return measurements;
  };
};

class BMI {
  constructor(measurements) {
    this.measurements = measurements;
  };
  calculateBMI() {
    let height = this.measurements.height;
    let weight = this.measurements.weight;
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    return bmi;
  };
};

class DisplayResults {
  constructor(bmi) {
    this.bmi = bmi;
  };
  displayResults() {
    let bmi = this.bmi.calculateBMI();
    let result = document.querySelector('.results_text');
    let resultContainer = document.querySelector('.results');
    result.innerHTML = "Your BMI is " + bmi;
    resultContainer.classList.add('show');
  };
};

class BmiRange {
  constructor(from, to, message, cssClass) {
    this.from = from;
    this.to = to;
    this.message = message;
    this.cssClass = cssClass;
  };
  checkRange(value) {
    console.log(value)
    if (value >= this.from && value <= this.to) {
      return {message: this.message, cssClass: this.cssClass};
    };
  };
};

const bmiRanges = [
  new BmiRange(0, 6, " and you are not a human", "not_human"),
  new BmiRange(6, 16, " and you severely underweight", "severe"),
  new BmiRange(16, 18.5, " and you underweight", "underweight"),
  new BmiRange(18.5, 24.9, " and your BMI is normal", "normal"),
  new BmiRange(25, 29.9, " and you are overweight", "overweight"),
  new BmiRange(30, 34.9, " and you are obese", "obese"),
  new BmiRange(35, 39.9, " and you are severely obese", "severely_obese"),
  new BmiRange(40, 252, " and you are morbidly obese", "morbidly_obese"),
  new BmiRange(253, 999, " and you are not a human", "not_human")
];

document.querySelector('.calculate').addEventListener('click', function() {
  userHeight = document.querySelector('.height').value;
  userWeight = document.querySelector('.weight').value;
  result = document.querySelector('.results_text');
  const measurements = new Measurements();
  const bmi = new BMI(measurements);
  const displayResults = new DisplayResults(bmi);
  const bmiRange = bmiRanges.find(bmiNum => bmiNum.checkRange(bmi.calculateBMI()));
  displayResults.displayResults();
  result.classList.add(bmiRange.cssClass);
  result.innerHTML += bmiRange.message;
});
