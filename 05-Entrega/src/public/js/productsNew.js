const productForm = document.getElementById('productForm');

productForm.addEventListener('submit', (e) =>{

    e.preventDefault();
    const formData = new FormData(productForm);
    fetch('/api/products');


});