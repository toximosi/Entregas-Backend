const productForm = document.getElementById('productForm');

productForm.addEventListener('submit', (e) =>{

    e.preventDefault();//limpia el evento por defecto del submit
    const formData = new FormData(productForm);
    fetch('/api/products');


});