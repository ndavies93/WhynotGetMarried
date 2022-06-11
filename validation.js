// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            console.log(form.valueOf())
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            console.log('Form was submitted');
            console.log(event);

            form.classList.add('was-validated')
        }, false)
    })
})()
