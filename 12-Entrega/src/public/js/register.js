const form = document.getElementById('registerForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();//limpia el evento por defecto del submit
    let formData = new FormData(registerForm);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    //{ nombre, email }
    fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).catch(err => console.log(err));
});