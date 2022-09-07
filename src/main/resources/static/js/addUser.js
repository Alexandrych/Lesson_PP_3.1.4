const form = document.forms["addUser"];

form.addEventListener('submit', addNewUser)

async function addNewUser(e) {
    e.preventDefault();
    let newUserRoles = [];
    for (let i = 0; i < form.roles.options.length; i++) {
        if (form.roles.options[i].selected) newUserRoles.push({
            id : form.roles.options[i].id,
            role : form.roles.options[i].value
        })
    }
    let response = await fetch("http://localhost:8080/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: form.firstName.value,
            secondName: form.secondName.value,
            age: form.age.value,
            username: form.username.value,
            password: form.password.value,
            roles: newUserRoles
        })
    })
       if (response.ok) {
        form.reset();
        allUsers();
        $('#users-table').click();
    }
}