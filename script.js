const scriptURL = 'https://script.google.com/macros/s/AKfycbyobvsFiedmDV092pjK-xuu0F29m5APXYKAf0wMaQZFnmEurI4Cz194x12Ji07L5dSu/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message))
})
var location = e.parameter.location;
