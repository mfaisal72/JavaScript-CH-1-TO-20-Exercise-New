//CHAPTER 1 ALERT

Q No.1. Alert these following(individually):
        I.First Name
        II.Last Name
        III.Email
        IV.Phone Number
        V.Password

        Answer-1
        // Example data
        var firstName = "Mohammad";
        var lastName = "Faisal";
        var email = "faisalsurjani72@gmail.com";
        var phoneNumber = "0317-4732459";
        var password = "4756@secM";

        // Alert for First Name
        alert("First Name: " + firstName);

        // Alert for Last Name
        alert("Last Name: " + lastName);

        // Alert for Email
        alert("Email: " + email);

        // Alert for Phone Number
        alert("Phone Number: " + phoneNumber);

        // Alert for Password
        // Note: Avoid displaying passwords in alerts for security reasons
        alert("Password: " + password);

    Q No.2.Correct this statement: alert"You're learning JavaScript!";
    Answer
    alert ("You're learning JavaScript!");

    Q No.3.Code an alert statement displaying any message you like.
    Answer
    alert("Hello, I am learning Web Development!");
    
    //Chapter 2 (Variables for string)

Q. No.1. Declare any variable in the camelCase format.
  // Declare a variable in camelCase format
var myVariableName = "Hello, camelCase!";
console.log(myVariableName);


Q. No.2. Declare a variable of your choice without defining it. Then, in a
second statement, assign it a string of your choice
// Declare a variable without defining it
var myVariable;

// Assign a string to the variable in a second statement
myVariable = "This is a string assigned to myVariable";

// Display the value of the variable
console.log(myVariable);

Q NO.3. Declare the variable teamName and Alert your Team name.
Declare the variable

Answer.
var teamName;

// Assign a value to the variable
teamName = "Karachi Kings";

// Display the team name in an alert
alert("Our team name is: " + teamName);

Q No.4. This statement has already been coded. var bestMan = "Charlie";
Assign the variable a new string.

Answer.
// Existing variable and assignment
var bestMan = "Charlie";

// Assign a new string to the variable
bestMan = "Faisal";

// Display the updated value in the console 
console.log("The new best man is: " + bestMan);


// Chapter 3 (Variables for numbers)

// Q. No.1. Declare a variable “caseQty”
// Answer.
// var caseQty = 10;

// Q. No. 2. Assign to the variable caseQty, which has already been declared, the value 144.
// Assuming caseQty has already been declared
// Answer.
var caseQty;

// Assign the value 144 to the variable caseQty
caseQty = 144;

// Display the updated variable in the console (optional)
console.log("The updated case quantity is: " + caseQty);


// Q. No.3. Rewrite this statement so the variable can be used in a math
// operation. var num = "9";
// Declare a variable and assign a numeric value
var num = 9;

// Now you can use the variable in a math operation
var result = num * 2;

// Display the result in the console 
console.log("The result of the math operation is: " + result);

// Q. No.4. In one statement declare a variable. In a second statement assign
// it the sum of 2 numbers
// Answer.
// Declare a variable
var sumResult;

// Assign it the sum of two numbers
sumResult = 5 + 7;

// Display the result in the console (optional)
console.log("The sum is: " + sumResult);


// Q No. 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.

// Answer.
// Given values
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal);  //orderTotal is : 110


// Q. No.6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number
// Answer.
// Declare a variable and assign it a number
var myNumber = 5;
// Change the value of the variable by adding it to another number
myNumber = myNumber + 3;
console.log(myNumber); //update value is 8



// Chapter 4 (Variable names Legal and Illegal)
// Q No.1. Correct this statement.
// var product cost = 3.45;
var productCost = 3.45;


// Q. No.2. Rewrite this using camelCase.
// var Nameofband;
var nameOfBand;


// Q.No.3. In a single statement declare a legally-named variable and assign a
// number to it.

var myVariableNumber = 10;


// Q. No.4. Declare a variable that is a combination of your first and last
// names. Use camelCase.



// Q. No.5. List the legal and Illegal Variables.
// Answer.
// Legal Variables
var firstName;
var _userCount;
var $totalAmount;
var camelCaseVariable;

// Illega Variables
var 123variable; // Illegal: Cannot start with a number
var user@name;    // Illegal: "@" is not allowed
var total#Amount; // Illegal: "#" is not allowed
var if;      // Illegal: "if" is a reserved word
var function; // Illegal: "function" is a reserved word
var my-variable; // Illegal: Hyphens are not allowed in variable names



// Chapter 5 (Math Expression I)
//Q No. 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
// Answer
// Example of the Modulus operator
var dividend = 10;
var divisor = 3;

var remainder = dividend % divisor;

console.log("The remainder is: " + remainder);


// Q No. 2. What is the value of num?
// var num = 20 % 6;

var num = 20 % 6;
console.log(num); //the num value is 2


// Q. No.3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
//Answer.
var largeNum = 1000 * 2000;
console.log(largeNum); //the result is 2000000


// Q. No. 4. Assign to a variable the value represented by one variable // subtracted from the value represented by another variable
//Answer.
// Declare and assign values to two variables
var firstNum = 10;
var secondNum = 5;

// Assign the result of subtracting secondNum from firstNum to a third variable
var result = firstNum - secondNum;
console.log(result); //the result is 5


// Q. No. 5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.
//Answer.
// Declare a variable on the fly and assign the remainder
var remainderResult = 15 % 4;
console.log(remainderResult); // the remainderResult is 3


// Q. No. 6. Code an alert that displays the result of a multiplication on 2 numbers.
//Answer.
// Declare and assign values to two numbers
var number1 = 5;
var number2 = 8;

// Calculate the result of the multiplication
var multiplicationResult = number1 * number2;
alert("The result of the multiplication is: " + multiplicationResult); // the result is 40



// Chapter 6 (Math Expression II)
//Q. No. 1. Code a short form of x = x + 1; Use either of the two legal expressions.
//Answer.
// Using the increment operator
x++;

// Another equivalent expression
x += 1;


// Q. No.2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
//Answer.
// Assuming x has a value of 100
x--; // Now, x will have a value of 99


// Q No.3. var x = 50;
// var y = x++;
// What is the value of y?
//Answer.
var x = 50;
var y = x++; //the value will be x is 51

// The value of y is initially 50 (the original value of x).
// The value of x will be 51 after the increment operation.
// Therefore, y will be 50.


// Q No.4. var y = 50;
// var z = --y;
// What is the value of z?
//Answer.
var y = 50;
var z = --y; //the value of z will be 49

// y is decremented by 1, resulting in 49.
// The value of z is then assigned the decremented value of y, which is 49.
// Therefore, the value of z is 49.


// Q No. 5. In a single statement, decrement num and assign its original value to newNum.
//Answer.

var num = 10;

console.log("Original num:", num, "New num:", --num);


// Q No.6. In a single statement add 1 to a variable and assign its original value to another variable.
//Answer
var originalNum = 5;
var newNum = originalNum++; // After this code is executed, originalNum will be 6, and newNum will be 5.


// Q No.7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert

//Answer.
// Assign a number value to a variable
var myNumber = 10;

// Increment the variable
myNumber++;

alert(myNumber); // the new value will be 11



// Chapter 7 (Math Expression III)
//Q No.1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?

//Answer.
calculatedNum = 2 + (2 * 6); //calculatedNum is 14

//Q. No. 2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?

//Answer.
var calculatedNum = (2 + 2) * 6;  //calculatedNum is 24


//Q. No. 3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?

//Answer.
var calculatedNum = (2 + 2) * (4 + 2);   //calculatedNum is 24


//Q. No. 4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?

//Answer.
var calculatedNum = ((2 + 2) * 4) + 2;  //calculatedNum is 18


//Q. No. 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.

//Answer.
var cost = (2 + 2) * 4 + 10;  //the cost will 56


//Q. NO. 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,clarified with parentheses, producing 20.

//Answer.
var units = 2 + (2 * 4) + 10;  //the units will be 20


//Q. No. 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.

//Answer.
var pressure = (4 / 2) * 4;  // the pressure will be 5



// Chapter 8 (Concatenating Text Strings)

//Q No.1. var num = "2" + "2";
        //What is the value of num? Include quotation marks.
//Answer.
var num = "2" + "2";
console.log(num); //The output will be the concatenation of the two strings "2" and "2", resulting in: 22


//Q No.2. message = ("Hello," + "Dolly");
        // What is the value of message? (Include the quotation marks.)
        // Alert the statement
//Answer.
var message = "Hello," + " Dolly";
console.log(message); // the result is Hello, Dolly


//Q No.3. alert("33" + 3);
          //What message displays in the alert box?
//Answer.
alert("33" + 3); // the result is 333


//Q No.4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
//Answer.
alert("Pakistan" + " Zindabad"); //the result will be Pakistan Zindabad


//Q No. 5. Write a statement that assigns to a variable the concatenation of a string with a number
//Answer.
var myString = "Faisal, ";
var myNumber = 42;

var concatenatedValue = myString + myNumber;
console.log(concatenatedValue); // the result will be in Faisal, 42


//Q No.6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
//Answer.
var firstString = "Mohammad ";
var secondString = "Faisal";

var concatenatedResult = firstString + secondString;
console.log(concatenatedResult); // the result will be in Mohammad Faisal



// Chapter 9 (Prompts)

//Q. No. 1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
//Answer.
var firstName = prompt("Enter first name");


//Q. No.2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
//Answer.
var country = prompt("Country?", "China");


//Q. No.3. Correct this statement
        //var yourName = prompt(Enter Your Name");
//Answer.
var yourName = prompt("Enter Your Name");


//Q. No. 4. Code a prompt that specifies a string as the message Include a default input.
//Answer.
var age = prompt("How old are you?", "25");


//Q. No. 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.
//Answer.
var promptMessage = "Independance Day of Pakistan is:";
var defaultResponse = "14th August 1947";

var userResponse = prompt(promptMessage, defaultResponse);


//Q. No. 6. Display a prompt, including both a message and a default response. Display the user's response in an alert.
//Answer.
var promptMessage = "My father name is:";
var defaultResponse = "Mohammad Ismail";

var userResponse = prompt(promptMessage, defaultResponse);

alert(userResponse);



// Chapter 10 (if statments)

// Q. No. 1. var city = "Karachi"
        // if (city = "Karachi") {
        // console.log("The City OF Lights")
        // Correct the above statement:
        // Also try this statement by yourself
//Answer.
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City OF Lights");
}

//Example-2
var anotherCity = "Lahore";
if (anotherCity === "Karachi") {
  console.log("The City OF Lights");
} else {
  console.log("This city is not Karachi.");
}


// Q. No.2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

//Answer.
// if (x === y) {
//   var z = prompt("Enter the value of z:");
// }


//Q. No. 3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")

//Answer.
var ZipCode = "10010";

if (ZipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write correct city");
}



//Q. No. 4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;
//Answer.
var x = 5; // The current value of the variable x

// Test whether x has a particular numerical value (e.g., 5)
if (x === 5) {
  // If true, assign a new value to x (e.g., 1)
  x = 1;
  console.log("The value of x has been updated to: " + x);
} else {
  console.log("The value of x is not the expected value.");
  // You can add additional code here for handling the case where the condition is not true
}


// Chapter 11 (Comparison Operators)
//Q. NO. 1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)

//Answer.
// if (variable1 !== variable2) {
//   }


//Q. No2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.

//Answer.
// if (variable1 >= variable2) {
//   console.log("The value of variable1 is greater than or equal to variable2");
// }


//Q. No. 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.

//Answer.
var myVariable = 5; // Replace this with your variable

var particularNumber = 10; // Replace this with the particular number

if (myVariable !== particularNumber) {
  myVariable = 20; // Replace this with the number you want to assign if the condition is true
}

console.log(myVariable);


//Q. No.4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.

//Answer.
var numberToTest = 7; // Replace this with your number
var differentNumber = 10; // Replace this with the different number

if (numberToTest !== differentNumber) {
  alert("Congratulations! The number is unequal to the different number.");
}



//Q. No. 5. Code a prompt asking for your first name. Code an if statement that tests whether the name you entered is unequal to another name. If the condition is true (it will be), display an alert that says "No match"

//Answer.
// Prompt the user for their first name
var enteredName = prompt("Enter your first name:");

// Replace "anotherName" with the name you want to compare against
var anotherName = "Mohammad";

// Check if the entered name is unequal to anotherName
if (enteredName !== anotherName) {
  alert("No match");
}



// Chapter 12 (if…else and else if statements)
        //Q. No. 1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.

        //Answer.

        // Assume you have two variables: variable1 and variable2
        var variable1 = 10;
        var variable2 = 5;

        // Check if variable1 is greater than or equal to variable2
        if (variable1 >= variable2) {
            // Display an alert if the condition is true
            alert("variable1 is greater than or equal to variable2");
        } else {
            // Display a different alert if the condition is false
            alert("variable1 is less than variable2");
        }


        //Q. No. 2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and give you grade A/C to Your percentage. (MARKSHEET)

        //Answer.
        // Get marks from the user
        var marks = prompt("Enter your marks:");

        // Convert marks to a numeric value
        marks = parseFloat(marks);

        // Check if the entered value is a valid number
        if (isNaN(marks)) {
            alert("Please enter a valid number for marks.");
        } else {
            // Calculate percentage
            var percentage = (marks / 100) * 100;

            // Determine the grade based on percentage
            if (percentage >= 90) {
                alert("Your percentage is " + percentage.toFixed(0) + "%. Grade: A");
            } else if (percentage >= 80) {
                alert("Your percentage is " + percentage.toFixed(0) + "%. Grade: B");
            } else if (percentage >= 70) {
                alert("Your percentage is " + percentage.toFixed(0) + "%. Grade: C");
            }
        }


        /*Q. No. 3. This is the if statement that begins the code.
                    if (a === 10) {
                    alert("a is 10");
                    }
                    If a isn't 10, display an alert that says The correct value of a is______
          
                    Note: Try this by yourself */

        //Answer.
        // Assume a is a variable with some value
        var a = 5;

        // Check if a is equal to 10
        if (a === 10) {
            alert("a is 10");
        } else {
            alert("The correct value of a is " + a);
        }


        // Q. No. 4. Prompt the user to enter a city.    
        //             If the city is Karachi, display an alert acknowledging it is Karachi.
        //             If not, check to see if it's Lahore.
        //             If it is, display an alert acknowledging it's Lahore.
        //             Otherwise, display a different alert.

        //Answer.
        // Prompt the user to enter a city
        var userCity = prompt("Enter a city:");

        // Convert the input to lowercase to make the comparison case-insensitive
        userCity = userCity.toLowerCase();

        // Check if the entered city is Karachi
        if (userCity === "karachi") {
            alert("You entered Karachi. Acknowledging it is Karachi.");
        } else if (userCity === "lahore") {
            // Check if the entered city is Lahore
            alert("You entered Lahore. Acknowledging it's Lahore.");
        } else {
            // Display a different alert for cities other than Karachi and Lahore
            alert("You entered " + userCity + ". This city is not acknowledged in this program.");
        }
        


        // Chapter 13 (Testing sets of conditions)

        //Q. No. 1. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.

        //Answer.
        // if (a === b && c === d) {
        // both conditions are true 
        // }



        //Q. No. 2. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.

        //Ansewr.
        // if (a === b || c !== d) {
        // if either a is equal to b or c is not equal to d.
        // }


        // Q. NO. 3. Code the first line of an if statement that tests whether
        //             I. name is either "Hamza" or "Arsalan".
        //             II. age is Less than 60.

        //Ansewr.
        // if ((name === "Hamza" || name === "Arsalan") && age < 60) {
        //     // if the name is either "Hamza" or "Arsalan" and age is less than 60
        // }


        //Q. No. 4. Declare two variables and assign them number values. If the first variable is less than the second variable or greater than the second variable, display an alert.

        //Answer.
        // Declare and assign values to two variables
        var firstNumber = 5;
        var secondNumber = 10;

        // Check if the first variable is less than or greater than the second variable
        if (firstNumber < secondNumber || firstNumber > secondNumber) {
            alert("The first number is either less than or greater than the second number.");
        } else {
            alert("The first number is equal to the second number.");
        }


        //Q. No. 5. Declare 2 variables. Assign one of them your first name and the other one your last name. Code 2 prompts, asking for your first and your last name. If your answers match the two variables, display an alert.

        //Answer.
        // Declare variables and assign your first and last names
        var firstName = "Mohammad";
        var lastName = "Faisal";

        // Prompt the user for their first name
        var userFirstName = prompt("Enter your first name:");

        // Prompt the user for their last name
        var userLastName = prompt("Enter your last name:");

        // Check if the entered names match the variables
        if (userFirstName === firstName && userLastName === lastName) {
            alert("Names match! Welcome, " + userFirstName + " " + userLastName + "!");
        } else {
            alert("Names do not match. Access denied.");
        }
        



        // Chapter 14 (If statements nested)

        //Q. No. 1. Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5 , then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK". 

        //Answer.
        Assume 'password' is the variable holding the password value

        if (password !== '') {
            if (password.length > 5) {
                alert("OK");
            } else {
                alert("Password must be greater than 5");
            }
        } else {
            alert("Password cannot be empty");
        }


        //         Q. No. 2. Try this statement by yourself 
        //                     if (a === 1) {
        //                     if (c === "Max") {
        //  alert("OK");
        //  }
        //                 }

        //Answer.
        // Assume 'a' and 'c' are variables

        if (a === 1) {
            if (c === "Max") {
                alert("OK");
            }
        }



        // Q.No. 3. Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
        //         if (a === 1) {
        //         if (c === "Max") {
        //         alert("OK");
        //         }
        // }

        //Answer.
        // Assume 'a' and 'c' are variables

        if (a === 1 && c === "Max") {
            alert("OK");
        }


        // Q. No. 4. Declare two variables and assign them the same number value. Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.

        //Answer.
        
        // Declare two variables and assign them the same number value
        var num1 = 42;
        var num2 = 42;

        // Test conditions using nested if statements
        if (num1 === num2) {
            if (num1 <= num2) {
                alert("Both conditions are true. Displaying alert!");
            }
        }
        



        // Chapter 15 (Array I)

        //Q. No. 1. Declare an empty array

        //Answer.
        var emptyArray = [];


        //Q.No. 2. Code an array with 1 string element

        //Answer.
        var stringArray = ["Hello, World!"];

        //Q. No. 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index

        //Answer.
        var alphabet = ["h", "i", "j", "k"];

        // Print the letter "j" using array index
        alert(alphabet[2]); // Array indices start from 0, so "j" is at index 2


        //Q.No. 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.

        //Answer.
        var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];

        // Find the total length of the array
        var arrayLength = alphabet.length;

        // Display the length in an alert
        alert(arrayLength);


        //Q.No. 5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.

        //Answer.
        // Declare an array with one element
        var myArray = ["First Element"];

        // Add a second element at index 1
        myArray[1] = "Second Element";

        // Display an alert with the new element
        alert("New element: " + myArray[1]);
        


        // Chapter 16 (Array III)

        //Q. No. 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Remove the first element of an array.

        //Answer.
        var sizes = ["S", "M", "XL", "XXL", "XXXL"];

        // Remove the first element from the array
        sizes.shift();

        // Display the modified array in an alert
        alert("Modified array: " + sizes);


        //Q. No. 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Add three number elements to the beginning of an array.

        //Answer.
        var sizes = ["S", "M", "XL", "XXL", "XXXL"];

        // Add three number elements to the beginning of the array
        sizes.unshift(1, 2, 3);

        // Display the modified array in an alert
        alert("Modified array: " + sizes);



        //Q. No. 3. Declare an array with one element. Add a second element to the beginning of the array. Create an alert whose message is the new first element

        //Answer.

        // Declare an array with one element
        var myArray = ["First Element"];

        // Add a second element to the beginning of the array
        myArray.unshift("New First Element");

        // Create an alert with the new first element
        alert("New first element: " + myArray[0]);


        //Q. No. 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Insert "L" into the array between "M" and "XL".

        //Answer.
        var sizes = ["S", "M", "XL", "XXL", "XXXL"];

        // Insert "L" between "M" and "XL"
        sizes.splice(2, 0, "L");

        // Display the modified array in an alert
        alert("Modified array: " + sizes);


        //Q. No. 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Copy the first 3 sizes of the array and put them into a new array, regSizes.

        //Answer.
        var sizes = ["S", "M", "XL", "XXL", "XXXL"];

        // Copy the first 3 sizes into a new array
        var regSizes = sizes.slice(0, 3);

        // Display the new array in an alert
        alert("Regular Sizes: " + regSizes);



        //Q. No.6. var pets = ["dog", "cat", "ox", "duck", "frog"]. Add 2 elements after "dog" and remove "cat", "ox", and "duck".

        //Answer.
        var pets = ["dog", "cat", "ox", "duck", "frog"];

        // Find the index of "dog" in the array
        var indexOfDog = pets.indexOf("dog");

        // Add two elements after "dog"
        pets.splice(indexOfDog + 1, 0, "parrot", "hamster");

        // Remove "cat," "ox," and "duck"
        pets.splice(indexOfDog + 2, 3);

        // Display the modified array in an alert
        alert("Modified array: " + pets);


        //Q. No. 7. var pets = ["dog", "cat", "ox", "duck", "frog"]; Remove "cat" and "ox".

        //Answer.
        var pets = ["dog", "cat", "ox", "duck", "frog"];

        // Find the indices of "cat" and "ox" in the array
        var indexOfCat = pets.indexOf("cat");
        var indexOfOx = pets.indexOf("ox");

        // Remove "cat" and "ox" using splice
        pets.splice(indexOfCat, 1);
        pets.splice(indexOfOx, 1);

        // Display the modified array in an alert
        alert("Modified array: " + pets);


        //Q. No. 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; Reduce it to "duck" and "frog" using slice.

        //Answer.
        var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

        // Use slice to get "duck" and "frog"
        var reducedPets = pets.slice(3, 5);

        // Display the reduced array in an alert
        alert("Reduced array: " + reducedPets);
        


        // Chapter 17 - 20 (for Loops)

        //Q. No. 1. Write a statement in which loop is to run 10 times

        //Answer.
        //Example-1
        for (var i = 0; i < 10; i++) {
            // Your code to be executed in each iteration
            console.log("Iteration:", i + 1);
        }
        //Example-2
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }


        //Q. No. 2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.

        //Answer.
        for (var i = 0; i <= 11; i++) {

            console.log(i + 1);
        }


        // Q. No. 3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.
        // for var i = 0 i <= 4 i++
        // Note: Compvare this statement by yourself

        //Answer.
        // for (var i = 0; i <= 4; i++) {


        //Q. NO. 4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

        //Answer.
        for (var count = 0; count < 100; count++) {

            console.log(count + 1);
        }

        //Q. No. 5. Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.

        //Answer.
        for (var i = 3; i > 0; i--) {

            console.log("Iteration:", 4 - i);
        }


        //Q. No. 6. The statement assigns the number of elements in the array to the variable.

        //Answer.
        var array = [1, 2, 3, 4, 5];
        var numberOfElements = array.length;

        console.log(numberOfElements); // This will output the number of elements in the array


        //Q. NO. 7. Set a variable named “flag” with an initial Boolean value of your choice.

        //Answer.
        var flag = true;


        //Q. No. 8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.

        //Answer.
        var pets = ['lion', 'deer', 'cow', 'bird'];
        for (var i = 0; i < pets.length; i++) {

            console.log(i, pets[i]);
        }


        // Q.No. 9. Coding Exercise:
        //     Set a for loop to run 10 iterations.
        //     On the second iteration, display the counter in an alert. (It should be 1.) Break out of the loop.

        //Answer.
        for (var i = 0; i < 10; i++) {
            if (i === 1) {
                alert("Counter value on the second iteration: " + i);
                break; // Exit the loop
            }
        }

        //Q. No. 10. Create an array which contains user names Code a prompt with the message "Enter first name". The user's response is assigned to firstName.Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names. Code an if statement that tests the presense of (user name) in an array.If user name match Alert that "Enter". if not then alert ("Please write correct user name")

        //Answer.
        // Create an array of user names
        var userNames = ["Faisal", "Sami", "Ali", "Mahad"];

        // Prompt the user to enter their first name
        var firstName = prompt("Enter first name");

        // Use a for loop to check the presence of the entered name in the array
        for (var i = 0; i < userNames.length; i++) {
            if (firstName === userNames[i]) {
                alert("Welcome, " + firstName + "!");
                break; // Exit the loop if a match is found
            } else {
                alert("Please write the correct user name.");
                break;
            }
        }


        // Q. No. 11. Complete this code to display an alert if a match isn't found.
        //         var matchFound = false;
        //         for (var i = 0; i < list.length; i++) {
        //         if (userInput === list[i]) {
        //         alert("Match found");
        //         matchFound = true;
        //         break;
        //         }
        //     };

        //Answer.
        var matchFound = false;
        var list = ["Honda", "Toyota", "Suzuki"];

        var userInput = prompt("Enter input"); // Assuming userInput is already defined

        for (var i = 0; i < list.length; i++) {
            if (userInput === list[i]) {
                alert("Match found");
                matchFound = true;
                break;
            }
        }

        if (!matchFound) {
            alert("Match not found. Please enter a valid input.");
        }


        // Q. No.12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
        //     var secondArr = [1, 2, 3, 4, 5, 6];
        //     Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr. In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array
        //     secondArr. After that concatenate the both loops.
        //     Expected Output:
        //     a1
        //     a2
        //     a3
        //     a4
        //     …
        //     f6

        //Answer.
        var firstArr = ["a", "b", "c", "d", "e", "f"];
        var secondArr = [1, 2, 3, 4, 5, 6];

        // Main loop
        for (var i = 0; i < firstArr.length; i++) {
            // Nested loop
            for (var j = 0; j < secondArr.length; j++) {
                // Concatenate and display the combination of elements from both arrays
                console.log(firstArr[i] + secondArr[j]);
            }
        }


    

    