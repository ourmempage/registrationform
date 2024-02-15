document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (!validateForm()) {
        showErrorAlert();
        return;
    }
    showSuccessAlert();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbyobvsFiedmDV092pjK-xuu0F29m5APXYKAf0wMaQZFnmEurI4Cz194x12Ji07L5dSu/exec", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Remove the event listener after showing the success alert
            document.getElementById("myForm").removeEventListener("submit", handleSubmit);
        }
    };
    xhr.send(formData);
});

function validateForm() {
    var name = document.getElementById('your-name').value;
    var number = document.getElementById('your-number').value;
    var email = document.getElementById('your-email').value;

    if (name === "" || number === "" || email === "") {
        return false;
    }
    return true;
}

function showErrorAlert() {
    var alertText = document.getElementById('alertText');
    alertText.innerText = 'Please fill out all fields.';
    var customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'block';
}

function showSuccessAlert() {
    var alertText = document.getElementById('alertText');
    alertText.innerHTML = 'Thanks for the details. <strong>Our team will reach out soon.</strong>';
    var customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'block';
}
