const endpointURL = "http://localhost:3001"

const token = localStorage.getItem("token")

async function getUsers() {
    const allUsers = await fetch(endpointURL + "/user")

    const users = await allUsers.json()

    return users

}

async function renderUsers() {
    const allUsers = await getUsers()

    const listItemsArray = allUsers.map(
        (user) => `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.phoneNumber}</td>
            <td>
                <button type="button" class="btn crud btn-warning">Editar</button>
                <button type="button" class="btn crud btn-danger">Excluir</button>
            </td>
        </tr>
        `
    )

}

renderUsers()

