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
})