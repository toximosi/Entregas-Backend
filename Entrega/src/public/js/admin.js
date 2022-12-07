

const seeElement = (id) => {
 console.log(`---> admin.js seeElement user ${id}`)
    alert(id)

};
const updateElement = (id) => { 
    console.log(`---> admin.js updateElement user ${id}`)
    const form = document.getElementById(id);
    let data = new FormData(form);

    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('--> registerForm');
    console.log(JSON.stringify(obj));
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
    if (id) {
        fetch(`api/user/update/byId/${id}`, {
            method: 'PUT',
            /*  headers: {
            "Content-Type": "application/json",
        }, */
        body: data
    }).then(res => res.json())
            .then(res => {
                console.log(res);
                location.reload();
                alert(`👩‍🚀 User by id ${id} update`);
            })
            .catch(err => console.log(err));
    } else {
        console.log('error in read id of user');
    }
}

const deleteElement = (id) => {
    console.log(`---> admin.js deleteElement user ${id}`)
    if (id) {
        fetch(`api/user/delete/byId/${id}`, {
            method: 'DELETE',
        }).then(e => {
            alert(`👩‍🚀 User by id ${id} 💀 delete`);
            location.reload();
        })
            .catch(err => console.log(err))

    } else {
        console.log('error in read id of user');
    }

};