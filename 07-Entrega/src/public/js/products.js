//import
const productForm = document.getElementById('productForm');

//code
productForm.addEventListener('submit', e => {
	const formData = new FormData(productForm);
	fetch('api/products', {
        method: 'POST',
        body: formData //no se manda en header como json, ya que el formulario ya lo manda como tal 
	}).then(res => res.json()).then(res => console.log(res));
});