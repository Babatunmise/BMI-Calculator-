var today = new Date()
var curHr = today.getHours()
var time = null;
var curYear = today.getFullYear();
var curMth = today.getMonth();
var curDay = today.getDate();
if (curHr < 12) {
  var time = "Morning";
} else if (curHr < 18) {
  var time = "Afternoon";
} else {
  var time = "Evening";
}
window.onload = function greetingUser (){
    var greetingText = prompt('Enter your first name only')
if (greetingText == ""|| null){
    greetingText = " User";
    document.getElementById('time-date').innerHTML = curDay+ " : " +curMth+ " : " + curYear;
    document.getElementById('result-greeting').innerHTML = "Dear " + greetingText + ",";
    document.getElementById("time").innerHTML = "Good " + time + "," + greetingText + "!";
}
else {
  document.getElementById('time-date').innerHTML = curDay+ " " +curMth+ " " + curYear;
  document.getElementById('result-greeting').innerHTML = "Dear " + greetingText + ",";
  document.getElementById("time").innerHTML = "Good " + time + ", " + greetingText + "!";
}   }
// information display 
const displayContainer = document.querySelector('.display-container') 
const informationDisplay = document.querySelector('.information-display') 
const displayHeader = document.querySelector('.display-header') 
 
const archive = [ 
  { 
    name: 'Body Mass Index (BMI)',  text: 
    "Body Mass Index (BMI) is a person\’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual."
}, 
  { 
    name: 'How is BMI used?', 
    text: 
    "BMI can be a screening tool, but it does not diagnose the body fatness or health of an individual. To determine if BMI is a health risk, a healthcare provider performs further assessments. Such assessments include skinfold thickness measurements, evaluations of diet, physical activity, and family history."
}, 
  { 
    name:  'Accessing your weight', 
    text: 
    "A high amount of body fat can lead to weight-related diseases and other health issues. Being underweight is also a health risk. Body Mass Index (BMI) and waist circumference are screening tools to estimate weight status in relation to potential disease risk. "
   }, 
  { 
    name: 'Be cautious', 
    text: 
    "However, BMI and waist circumference are not diagnostic tools for disease risks. A trained healthcare provider should perform other health assessments to evaluate disease risk and diagnose disease status."
}, 
  
] 
 
let idx = 1 
 
function updateTestimonial() { 
  const { name, text } = archive[idx]
  informationDisplay.innerHTML = text 
  displayHeader.innerHTML = name 
  idx++ 
  if (idx > archive.length - 1) { 
    idx = 0 
  } 
} 
 
setInterval(updateTestimonial, 10000)

// for the calculation 
function myFunction() {
  var weightValue = document.getElementById('weight').value;
  var heightValue = document.getElementById('height').value;
  var solution = weightValue / ((heightValue**2)/100) *100;
  if (solution <= 16.00){
    document.getElementById('demo').innerHTML =  solution.toFixed(2);
    document.getElementById('bmi-information').innerHTML = "Underweight";
    document.getElementById('demo').style.color = "#0986e6";
    document.getElementById('bmi-class').innerHTML = "Severe Thinness";
    document.getElementById('health-tip').innerHTML = "Your BMI indicates that you are underweight, so you may need to put on some weight. <br> You are recommended to ask your doctor or a dietician for advice. <br> <b>Your healthy weight range: 60-81kg</b>" 
  } else if (solution >= 16.00 && solution <= 16.99) {
    document.getElementById('demo').innerHTML =  solution.toFixed(2);
    document.getElementById('bmi-information').innerHTML = "Underweight";
    document.getElementById('demo').style.color = "#0c9ff1";
    document.getElementById('health-tip').innerHTML = "Your BMI indicates that you are underweight, so you may need to put on some weight. <br> You are recommended to ask your doctor or a dietician for advice. <br> <b>Your healthy weight range: 57-77kg</b>"
    document.getElementById('bmi-class').innerHTML = "Moderate Thinness" 
  } else if (solution >= 17.00 && solution <= 18.49){
    document.getElementById('demo').innerHTML =  solution.toFixed(2);
    document.getElementById('bmi-information').innerHTML = "Underweight";
    document.getElementById('demo').style.color = "#07bcf6";
    document.getElementById('health-tip').innerHTML = "Your BMI indicates that you are underweight, so you may need to put on some weight. <br> You are recommended to ask your doctor or a dietician for advice. <br> <b>Your healthy weight range: 53-72kg</b>"
    document.getElementById('bmi-class').innerHTML = "Mild Thinness" ;
  } else if (solution >= 18.50 && solution <= 24.99) {
    document.getElementById('demo').innerHTML =  solution.toFixed(2);
    document.getElementById('bmi-information').innerHTML = "Normal Range";
    document.getElementById('demo').style.color = "#0b950c";
    document.getElementById('health-tip').innerHTML = "Congratulations! Your BMI indicates that you are at a healthy weight for your height. <br> By maintaining a healthy weight, you lower your risk of developing serious health problems. <br> <b>Your healthy weight range: 47-64kg<b>"
    document.getElementById('bmi-class').innerHTML = "Healthy Weight" 
  } else if (solution >= 25.00 && solution <= 29.99) {
    document.getElementById('demo').innerHTML =  solution.toFixed(2);
    document.getElementById('bmi-information').innerHTML = "Overweight";
    document.getElementById('demo').style.color = "#8A990b";
    document.getElementById('health-tip').innerHTML = "Your BMI indicates that you are slightly overweight. <br>You are recommended to talk to your doctor or a dietician for advice.<br> <b>Your healthy weight range: 36-49kg</b>" 
    document.getElementById('bmi-class').innerHTML = "Pre-obese" 
  } else if (solution >= 30.00 && solution<= 34.99){
    document.getElementById('demo').innerHTML =  solution.toFixed(2);
    document.getElementById('bmi-information').innerHTML = "Obese";
    document.getElementById('demo').style.color = "#f8920a";
    document.getElementById('health-tip').innerHTML = "Your BMi indicates that you are heavily overweight. <br>Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietician for advice.<br><b>Your healthy weight range: 29-39kg"
    document.getElementById('bmi-class').innerHTML = "Obese Class I" 
  } else if (solution >= 35.00 && solution <= 39.99) {
    document.getElementById('demo').innerHTML =  solution.toFixed(2);
    document.getElementById('bmi-information').innerHTML = "Obese";
    document.getElementById('demo').style.color = "#f65209";
    document.getElementById('health-tip').innerHTML = "Your BMi indicates that you are heavily overweight. <br>Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietician for advice.<br><b>Your healthy weight range: 24-33kg"
    document.getElementById('bmi-class').innerHTML = "Obese Class II" 
  } else if (solution >= 40.00){
    document.getElementById('demo').innerHTML =  solution.toFixed(2);
    document.getElementById('bmi-information').innerHTML = "Obese";
    document.getElementById('demo').style.color = "#eb1817";
    document.getElementById('health-tip').innerHTML = "Your BMi indicates that you are heavily overweight. <br>Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietician for advice.<br><b>Your healthy weight range: 20-27kg"
    document.getElementById('bmi-class').innerHTML = "Obese Class III"; 
  }
 
}

//for the dark mode 
function changeMode() {
  var element = document.body
  element.classList.toggle("dark-mode");
}

// for the modal box 
var modal = document.getElementById("modal-box");

function show() {
  modal.style.display = "block";
}

function cancel() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function mDown (obj) {
  obj.style.background  = '#D5F2E3';
  obj.style.transform = 'scale(0.8)';
  obj.style.color = '#01110A';
 }
 function mUp (obj) {
     obj.style.background = '#011627'
     obj.style.transform = 'scale(1)';
     obj.style.color ="#ffffff"
 }
document.getElementById("calculate").addEventListener("click", myFunction);
document.getElementById("calculate").addEventListener("click", show);
document.getElementById("exit").addEventListener("click", cancel);

