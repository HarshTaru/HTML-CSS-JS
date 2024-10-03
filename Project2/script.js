// Get the necessary elements from the DOM
const submitBtn = document.querySelector('#submitbtn');
const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#Weight');
const resultDiv = document.createElement('div');
resultDiv.id = 'bmi-result';

// Add a click event listener to the submit button
submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Get the height and weight values
    const height = parseFloat(heightInput.value) / 100;
    const weight = parseFloat(weightInput.value);

    // Calculate the BMI
    let bmi = 0;
    if (height > 0 && weight > 0) {
        bmi = weight / (height * height);
    }

    // Display the BMI result
    resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

    // Add the styles to the resultDiv
    resultDiv.style.color = "white";
    resultDiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    resultDiv.style.fontSize = "2rem";
    resultDiv.style.textAlign = "center";
    resultDiv.style.alignContent='center'

    // Insert the resultDiv after the submit button
    submitBtn.parentNode.parentNode.insertBefore(resultDiv, form.nextSibling);
});