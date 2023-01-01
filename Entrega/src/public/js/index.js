const logout = document.getElementById('logout');

logout.addEventListener('click', (e) => {
    /* e.preventDefault(); */
    fetch('/api/session/logout', {
        method: 'GET',
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
});