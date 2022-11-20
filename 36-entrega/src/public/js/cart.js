const addCart = (id) => { 
    /*  evt.preventDefault(); */
    const obj = {
        id: id,
    };
    fetch('api/cart/cartUpdate', {
            method:'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json"
            }
        }).then(result => result.json())
            .then(json => {console.log(json)})
                /* .catch(err => console.log(err)); */
}