const table = document.querySelector('#usersTable tbody');
allUsers();

function allUsers() {
fetch("http://localhost:8080/api/users")
    .then(res => res.json())
    .then(data => {
        let temp = ""
        data.forEach(user => {
            temp += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.firstName}</td>
                    <td>${user.secondName}</td> 
                    <td>${user.age}</td>                                                 
                    <td>${user.username}</td>
                    <td>${user.roles.map(roles => " " + roles.role.substring(5))}</td>
                    <td>
                        <button type="button" class="btn btn-info" data-toggle="modal" id="buttonEdit"
                        data-action="edit" data-id="${user.id}" data-target="#edit">Edit</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" data-toggle="modal" id="buttonDelete"
                        data-action="delete" data-id="${user.id}" data-target="#delete">Delete</button>
                    </td>
                </tr>`;
        })
        table.innerHTML = temp;
    })
}