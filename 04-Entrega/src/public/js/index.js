// Index.js
// -----------------------------------------------------------

//Formulario
let productForm = document.getElementById('productForm');

const handleSubmit = (evt, form, route) =>{
    evt.preventDefault();
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => obj[key]=value);
    fetch(route,{//Es una promesa ---- //conecta el html con el backend.
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then( res => res.json()).then(json =>  console.log(json))
}
productForm.addEventListener('submit', (e) => handleSubmit(e, e.target, '/products'));