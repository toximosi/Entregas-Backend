const productForm = document.getElementById('productForm');
productForm.addEventListener('submit', (e) =>{
    

    e.preventDefault();//limpia el evento por defecto del submit
    const formData = new FormData(productForm);
    console.log(formData);
    console.log('hola');
    fetch('/api/productos',{
        method: 'POST',
        body: formData //no se manda en header como json, ya que el formulario ya lo manda como tal 
    }).then(res => res.json()).then(json => console.log(json))

});