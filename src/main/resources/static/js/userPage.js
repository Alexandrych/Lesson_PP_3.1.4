$(async function() {
    await authUser();
});

async function authUser() {
    fetch("http://localhost:8080/api/getAuthUser")
        .then(res => res.json())
        .then(data => {
            // Добавляем информацию в шапку
            // $('#headerUsername').append(data.username);
            let roles = data.roles.map(role => " " + role.role.substring(5));
            // $('#headerRoles').append(roles);

            //Добавляем информацию в таблицу
            let userBody = `$(
            <tr>
                <td>${data.id}</td>
                <td>${data.firstName}</td>
                <td>${data.secondName}</td>
                <td>${data.age}</td>
                <td>${data.username}</td>
                <td>${roles}</td>
            </tr>
                )`;
            $('#authUserBody').append(userBody);
        })
}

async function getUser(id) {
    let url = "http://localhost:8080/api/users/" + id;
    let response = await fetch(url);
    return await response.json();
}