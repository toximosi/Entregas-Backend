const addCart = (id) => { 
    console.log(`---> cart.js post button addCart`)

    /*  evt.preventDefault(); */
    const obj = {
        _id: id,
    };
    fetch('api/cart/update', {
            method:'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json"
            }
        }).then(result => result.json())
            .then(json => {console.log(json)})
                /* .catch(err => console.log(err)); */
};