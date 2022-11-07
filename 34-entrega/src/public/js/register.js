const form = document.getElementById('registerForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    let data = new FormData(form);
    let obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('obj')
    console.log(obj)
    fetch('api/sessions/register', {
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