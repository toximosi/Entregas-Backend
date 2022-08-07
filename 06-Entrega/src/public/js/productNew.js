//import
const productForm = document.getElementById('productForm');
const socket = io();

//code
productForm.addEventListener('submit', (e) => {
    
    e.preventDefault();//limpia el evento por defecto del submit
    const formData = new FormData(productForm);
    fetch('/api/productos', {
        method: 'POST',
        body: formData //no se manda en header como json, ya que el formulario ya lo manda como tal 
    }).then(res => res.json()).then(json => console.log(json));
  
    socket.connect();
});
socket.on('newProd', data => { 
  
  let log = document.getElementById('new-prod');
  let prodOld = log.innerHTML
  let prodNew = '';
  data.forEach(prod => { 
    prodNew  = `<tr>
                  <th scope="row">{{prod.id}}</th>
                  <td>{{prod.title}}</td>
                  <td>{{prod.price}}€</td>
                  <td><div class="box-img"><img src="http://localhost:8080/img/{{this.image}}"  alt="{{prod.title}}"></div></td>
                </tr>`+ prodOld;
  })
    log.innerHTML = prodNew;
})