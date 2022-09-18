const form = document.getElementById('productForm');

form.addEventListener('submit', (e) => {
    /* e.preventDefault(); */
    let formData = new FormData(productForm);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    //{nombre, id, code}
    fetch('/api/products/create', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).then(json => console.log(json)).catch(err => console.log(err));
})