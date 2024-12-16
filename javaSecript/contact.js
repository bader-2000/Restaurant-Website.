



document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
   { 
        const inputs = contactForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('change', function () {
                this.value = this.value.toUpperCase();
                this.style.color = 'red';
            });
        });

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                formStatus.textContent = "All fields are required!";
                formStatus.style.color = "red";
                return;
            }

            formStatus.textContent = "Your form has been submitted successfully!";
            formStatus.style.color = "green";

        });
    } 
})
