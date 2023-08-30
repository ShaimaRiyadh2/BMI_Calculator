
print("Welcome To BMI Calculator using python Langauge \nDone By Shaima.R ")

#Function to calculate BMI
def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)
    return bmi

#Function to interpret BMI and return the appropriate description
def interpret_bmi(bmi):
    if bmi < 18.5:      
        return "Underweight"   # BMI less than 18.5: Underweight
    elif bmi < 25:       
        return "Normal weight"    #BMI between 18.5 and less than 25: Normal weigt
    elif bmi < 30:            
        return "Overweight"   #BMI between 25 and less than 30: Overweight
    else:
        return "Obese"   # BMI 30 or higher: Obese


# Prompt the user to enter weight and height
weight = float(input("Please enter your weight in kilograms: "))
height = float(input("Please enter your height in meters: "))

# Call calculateBMI function to calculate BMI and pass weight and height inputs from the user
bmi = calculate_bmi(weight, height)

#   Use interpretBMI function to interpret the calculated BMI and determine the appropriate description
interpretation = interpret_bmi(bmi)

#  Generate the result string with the calculated BMI and interpretation
result = f"Your BMI value is: {bmi}\nInterpretation: {interpretation}"

# Print the result
print(result)