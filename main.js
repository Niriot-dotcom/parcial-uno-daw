function login() {
    let user = document.getElementById('user').value
    let pass = document.getElementById('pass').value
    let login = false;

    fetch('../json/users.json')
        .then(res => res.json())
        .then(data => {
            for (var i in data) {
                if (data[i].username === user && data[i].password === pass) {
                    login = true;
                    alert('usuario loggeado.')
                }
            }
            if (!login) {
                alert('error, revisa los datos ingresados.')
            }
        })
}

function register() {
    let user = document.getElementById('userR').value;
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;
    let register = false;

    fetch('../json/users.json')
        .then(res => res.json())
        .then(data => {
            for (var i in data) {
                if (data[i].username === user) {
                    register = true
                    alert('este usuario ya existe, intenta con otro.')
                }
            }
        })
    
    let usersJson;
    if (!register) {
        if (pass1 === pass2 && pass1.length >= 8) {
            console.log('here here here')
            var referLink = document.createElement("a");
            referLink.href = '/menu.html';
            document.body.appendChild(referLink);
            referLink.click();
            // document.location.href = '/pages/menu.html';
            // data.push({
            //     username: user,
            //     password: pass1
            // });
        } else {
            if (pass1.length >= 8) {
                alert('las contrasenias no coinciden, intenta de nuevo.');
            } else {
                alert('la contrasenia es muy corta.');
            }
        }
        usersJson = JSON.stringify(data);
    }
}