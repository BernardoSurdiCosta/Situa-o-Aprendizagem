const endpointURL = "http://localhost:3001"

/*   --------------------------------------------------------------------------------------- */
async function createUser(newUser) {
    const token = localStorage.getItem("token")
  
    const result = await fetch(`${endpointURL}/user`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
      body: JSON.stringify(newUser),
    })
  
    const resultJson = await result.json()
  
    console.log("user created: ", resultJson)
  }

/*   --------------------------------------------------------------------------------------- */
  const saveUserButton = document.getElementById("cadastrar")
  
  saveUserButton.addEventListener("click", async (event) => {
    event.preventDefault()
  
    const name = document.getElementById("nome").value
    const username = document.getElementById("username").value
    const password = document.getElementById("senha").value
    const birthDate = document.getElementById("datanas").value
    const cpf = document.getElementById("cpf").value
    const phoneNumber = document.getElementById("telefone").value
  
    await createUser({
      name,
      username,
      password,
      birthDate,
      cpf,
      phoneNumber
    })
  })
