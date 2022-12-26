const form = document.getElementById('loginForm');

form.addEventListener('submit', evt => {
    console.log(`---> login.js post form login`)
    evt.preventDefault();
    let data = new FormData(form);
    let obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('--> loginForm');
    console.log(JSON.stringify(obj));
    fetch('api/session/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        }).catch((error) => {
            console.log('Error:', error);
        });
})