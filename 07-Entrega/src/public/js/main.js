let adminUser;
let hola = "holi";

const isAdmin = async() => { 
    await fetch('api/login', {
        method: 'GET',
    }).then(res => res.json()).then(res => { 
        let isAdmin = res[0].admin;
        console.log(isAdmin);
        return isAdmin;
        }
    );
}
/* adminUser = isAdmin();*/
 

isAdmin().then(res => console.log(res));
