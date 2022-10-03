const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();//limpia el evento por defecto del submit
    let formData = new FormData(loginForm);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    //{ nombre, email }
/*     fetch('/api/sessions/loginjwt', { */
    fetch('/api/sessions/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(result => result.json())
        .then(json => {
            console.log(json);
        /* if(json.status=="success"){//Debería venir un token
            localStorage.setItem('CoderTokeFeliz',json.token); 
        }*/
        })
        .catch(err => console.log(err));
});