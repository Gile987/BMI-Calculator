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

document.querySelector('.calculate').addEventListener('click', function() {
  userHeight = document.querySelector('.height').value;
  userWeight = document.querySelector('.weight').value;
  let measurements = new Measurements();
  let bmi = new BMI(measurements);
  let displayResults = new DisplayResults(bmi);
  displayResults.displayResults();
});
