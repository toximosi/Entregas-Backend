const form = document.getElementById('productForm');

if (form) { 
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
            /* body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json"
            } */
        }).then(result => result.json())
            .then(json => {console.log(json)})
                /* .catch(err => console.log(err)); */
    })
}

