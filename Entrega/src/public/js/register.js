const form = document.getElementById('registerForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    
    let data = new FormData(form);

    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('--> registerForm');
    console.log(JSON.stringify(obj));
    
    fetch('api/session/register', {
        method:'POST',
        body: data,
        /* body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        } */
    }).then(result => result.json())
        .then(json => {console.log(json)});
})