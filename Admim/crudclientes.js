const endpointURL = "http://localhost:3001"


//----------------------------------------------------------------------------------//
//DELETAR CLIENTES//

async function deleteUser(userId) {
    const token = localStorage.getItem("token")

    const deleteResult = await fetch(`${endpointURL}/user/${userId}`, {
        method: "DELETE",
        headers: new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`,
        })
    })

    if (deleteResult.status !== 200) {
        console.error("Erro ao deletar usuário")
        return
    }

    const userToBeDeleted = document.getElementById(`user-id-${userId}`)
    userToBeDeleted.remove()
}

//----------------------------------------------------------------------------------//
//LISTAR CLIENTES//
async function getUsers() {
    const token = localStorage.getItem("token")

    const allUsers = await fetch(endpointURL + "/user", {
        headers: new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        })
    })

    const users = await allUsers.json()

    return users.data
}

async function renderUsers() {
    const allUsers = await getUsers()

    const listItemsArray = allUsers.map(
        (user) => `
        <tr id="user-id-${user.id}">
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.cpf}</td>
            <td>${user.phoneNumber}</td>    
            <td>
                <button type="button" class="btn crud btn-warning" onclick="editUser(${user.id})"><a href="editarcliente.html">Editar</a></button>
                <button type="button" class="btn crud btn-danger" onclick="deleteUser(${user.id})">Excluir</button>
            </td>
        </tr>
        `
    )

    const listItemsUnique = listItemsArray.reduce(
        (accumulatedValue, currentValue) => accumulatedValue + currentValue,
        ""
    )

    const listWrapperElement = document.createElement("tbody")
    listWrapperElement.innerHTML = listItemsUnique

    const tableElement = document.querySelector(".table")
    tableElement.append(listWrapperElement)
}

renderUsers()

