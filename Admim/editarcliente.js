const endpointURL = "http://localhost:3001"

//----------------------------------------------------------------------------------//
//EDITAR CLIENTES//

async function editUser(userId) {
    const userIdInput = document.getElementById("user-id")
    userIdInput.setAttribute("value", userId)

    const user = await fetch(`${endpointURL}/user/:${userId}`)
    const userJson = await user.json()

    const nameInput = document.getElementById("name")
    const usernameInput = document.getElementById("username")
    const cpfInput = document.getElementById("cpf")
    const phoneInput = document.getElementById("phoneNumber")

    nameInput.value = userJson.name
    usernameInput.value = userJson.username
    cpfInput.value = userJson.cpf
    phoneInput.value = userJson.phoneNumber
}

async function updateUser(user) {
    const { id, ...userBody } = user
  
    const result = await fetch(`${endpointURL}/${user.id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(userBody),
    })

    const resultJson = await result.json()

    return resultJson
  }
