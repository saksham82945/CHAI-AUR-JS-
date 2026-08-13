
 const form = document.querySelector('form')
// this usecase will give you empty 
// parseInt( document.querySelector('#height').value)

 form.addEventListener('submit', function(e)
{
     e.preventDefault()
     
const height =   parseInt( document.querySelector('#height').value)
  const weight= parseInt( document.querySelector('#weight').value)
 const results=  document.querySelector('#results')
if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height`;
        return;
    } 
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight`;
        return;
    } 

    // calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // conditions
    if (bmi < 18.6) {
        results.innerHTML = `⚠️ Please be careful, your BMI (${bmi}) is less than normal (Underweight).`;
    } 
    else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `✅ Good job! Your BMI (${bmi}) is in the normal range.`;
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        results.innerHTML = `⚠️ Your BMI (${bmi}) is above normal (Overweight). Try to stay active.`;
    } 
    else {
        results.innerHTML = `⚠️ Your BMI (${bmi}) is in the obese range. Please take care of your health.`;
    }
});