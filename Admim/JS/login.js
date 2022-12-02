const endpointURL = "http://localhost:3001"

/*   --------------------------------------------------------------------------------------- */
async function login(username, password) {
    const result = await fetch(`${endpointURL}/user/login`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        username,
        password,
      }),
    })
  
    const resultJson = await result.json()
  
    if (!resultJson.token) {
      console.error(resultJson.error || resultJson.message)
      return
    }
    
    localStorage.setItem("token", resultJson.token)
    window.location = "crudprodutos.html" 
    
  }

  const logar = document.getElementById("logar")
  
    logar.addEventListener("click", async (event) => {
    event.preventDefault()
    const name = document.getElementById("nome").value
    const password = document.getElementById("senha").value

login(name, password)
})
  
