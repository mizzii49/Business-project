// Defining variables 
const loginLink = document.querySelector('a[href="login.html"]');
const signUpLink = document.querySelector('a[href="signUp.html"]');
const registerBusinessLink = document.querySelector('a[href="registerABusiness.html"]');
const phoneNumber = "203-564-7728";
const email = "misbahsifat42@gmail.com";
const x = 10;
const y = 5;

// Add event listeners for interactive elements
loginLink.addEventListener('click', () => {
    alert("Redirecting to Login page...");
});

signUpLink.addEventListener('click', () => {
    alert("Redirecting to Sign Up page...");
});

registerBusinessLink.addEventListener('click', () => {
    alert("Redirecting to Register a Business page...");
});

// Implement Mathematical Operations
const sum = x + y;

// Create decision making with decision structures
if (sum > 15) {
    console.log("Sum is greater than 15");
} else {
    console.log("Sum is not greater than 15");
}

// Utilize Logical Operators for Complex Condition Evaluation
const hasPhoneNumberAndEmail = phoneNumber && email;
if (hasPhoneNumberAndEmail) {
    console.log("Both phone number and email are available.");
} else {
    console.log("Either phone number or email is missing.");
}

// Showcase JavaScript Output Techniques
console.log("Sum:", sum);

// Output to DOM
const outputDiv = document.createElement('div');
outputDiv.textContent = "Sum: " + sum;
document.body.appendChild(outputDiv);