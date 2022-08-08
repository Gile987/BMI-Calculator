const userHeight = document.querySelector('.height').value;
const userWeight = document.querySelector('.weight').value;

class bmiCalculator {
  constructor(height = userHeight, weight = userWeight) {
    this.height = height;
    this.weight = weight;
    this.resultContainer = document.querySelector('.results');
    this.result = document.querySelector('.results_text');
    this.calculateBmiButton = document.querySelector('.calculate');
    this.calculateBmiButton.addEventListener('click', this.calculateBmi.bind(this));
  };
  
  calculateBmi() {
    const heightValue = this.height;
    const weightValue = this.weight;
    const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(2);
    
    this.result.innerHTML = `Your BMI is ${bmi}`;
    this.resultContainer.classList.add('show');
    
  };
};

const calculator = new bmiCalculator(userHeight, userWeight);
