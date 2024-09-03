document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple email and password validation
    if (email === "" && password === "password") {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});


// const forgetPassword =document.querySelector('forget');

// if(forgetPassword === 'forget'){
//     prompt("Enter the email Id");
// }