console.log("Welcome To BMI Calculator using python Langauge \nDone By Shaima.R ")

// Function to calculate BMI
function calculateBMI(weight, height) {
    var bmi = weight / (height * height); // Calculate BMI using weight and height
    return bmi; // Return the calculated BMI
  }
  
  // Function to interpret BMI and return the appropriate description
  function interpretBMI(bmi) {
    if (bmi < 18.5) {
      return "Underweight"; // BMI less than 18.5: Underweight
    } else if (bmi < 25) {
      return "Normal weight"; // BMI between 18.5 and less than 25: Normal weight
    } else if (bmi < 30) {
      return "Overweight"; // BMI between 25 and less than 30: Overweight
    } else {
      return "Obese"; // BMI 30 or higher: Obese
    }
  }
  
  // Prompt the user to enter weight and height
  var weight = parseFloat(prompt("Please enter weight in kilograms: "));
  var height = parseFloat(prompt("Please enter height in meters: "));
  
  // Call calculateBMI function to calculate BMI and pass weight and height inputs from the user
  var bmi = calculateBMI(weight, height);
  
  // Use interpretBMI function to interpret the calculated BMI and determine the appropriate description
  var interpretation = interpretBMI(bmi);
  
  // Generate the result string with the calculated BMI and interpretation
  var result = "Your BMI is: " + bmi + "\nInterpretation: " + interpretation;
  
  // Print the result
  console.log(result);