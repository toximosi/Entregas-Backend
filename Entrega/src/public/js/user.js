const buyCart = (data) => {
    console.log(`---> user.js post button buyCart`)

    /*  evt.preventDefault(); */
    const obj = {
        id: data.id,
        cart: data.cart
    };
    fetch('/api/user/userBuy', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }).then(result => result.json())
        .then(json => { console.log(json) })
        .catch(err => console.log(err));
};