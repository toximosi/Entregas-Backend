const form = document.getElementById('productForm');

    form.addEventListener('submit',evt =>{
        console.log(`---> product.js post form product`)
        evt.preventDefault();
        let data = new FormData(form);
        const obj = {};
        data.forEach((value, key) => obj[key] = value);
        console.log('--> productForm');
        console.log(JSON.stringify(obj));
        fetch('api/product/save', {
            method: 'POST',
            body: data,
            /* body: JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            } */
        }).then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        }).catch((error) => {
            console.log('Error:', error);
        });
    });
