const form = document.getElementById('productForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    let data = new FormData(form);

    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('--> productForm');

    console.log(JSON.stringify(obj));

    fetch('api/product', {
        method:'POST',
        body:data
    }).then(result => result.json())
        .then(json => {
        console.log(json);
    });
})