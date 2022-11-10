const form = document.getElementById('registerForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    let data = new FormData(form);
    
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('-- registerForm');
    console.log(JSON.stringify(obj));
    
    fetch('api/sessions/register', {
        method:'POST',
        body:data
    }).then(result => result.json())
        .then(json => {
        console.log(json);
        });
    
    /* let obj = {};
    data.forEach((value, key) => obj[key] = value);
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
        }); */
})