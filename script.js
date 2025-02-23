

//this checks the value of the contactMethod field and enables the phone field if the value is phone
document.getElementById('contactMethod').addEventListener('change', function () {
    var phoneInput = document.getElementById('phone');
    if (this.value === 'phone') {
        phoneInput.disabled = false;
    } else {
        phoneInput.disabled = true;
    }
});

//this checks the value of the contactMethod field and enables the email field if the value is email    
document.getElementById('confirmEmail').addEventListener('input', function () {
    var email = document.getElementById('email');
    var confirmEmail = this;
    if (email.value !== confirmEmail.value) {
        confirmEmail.setCustomValidity("Emails do not match.");
    } else {
        confirmEmail.setCustomValidity('');
    }
});


//this checks the value of the date field and ensures that the date is in the future
document.getElementById('email').addEventListener('input', function () {
    if (this.validity.typeMismatch) {
        this.setCustomValidity("Enter a valid email.");
    } else {
        this.setCustomValidity('');
    }
});

//this checks the value of the date field and ensures that the date is in the future
document.getElementById('date').addEventListener('input', function () {
    var selectedDate = new Date(this.value);
    var today = new Date();
    if (selectedDate < today) {
        this.setCustomValidity("Date must be in the future.");
    } else {
        this.setCustomValidity('');
    }
});
