const form = document.getElementById('productForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    let data = new FormData(form);
    console.log('registerForm');
    console.log(JSON.stringify(data));
    fetch('api/product', {
        method:'POST',
        body:data
    }).then(result => result.json())
        .then(json => {
        console.log(json);
    });
})