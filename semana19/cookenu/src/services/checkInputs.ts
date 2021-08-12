export function userRegistration(name: string, email: string, password: string) {
   if (!email || !password || !name) {
    throw new Error("Preencha os campos 'nome', 'password' e 'email'")
   }
  if (!email) {
    throw new Error("É necessário preencher o espaço de email");
  }

  if (!name) {
    throw new Error("É preciso de um nome para criar um novo usuario");
  }

  if (!password) {
    throw new Error("É necessário preencher o espaço de email");
  }

  if (!email.includes("@") || email === "") {
    throw new Error("email inválido");
  }

  if (password.length < 6) {
    throw new Error("senha muito pequena, 6 digitos ou mais");
  }

  if(password.length >= 7 && name && email.includes("@")){
     return true
  }

}

export function userLogin(email: string, password: string) {
   if (!email || !password) {
    throw new Error("Preencha os campos 'password' e 'email'")
   }
  if (!email) {
    throw new Error("É necessário preencher o espaço de email");
  }

  if (!password) {
    throw new Error("É necessário preencher o espaço de email");
  }

  if (!email.includes("@") || email === "") {
    throw new Error("email inválido");
  }

  if (password.length < 6) {
    throw new Error("senha muito pequena, 6 digitos ou mais");
  }

  if(password.length >= 7 && email.includes("@")){
     return true
  }

}

export function recipeRegistration(title: string, description: string) {
   if (!title || !description) {
    throw new Error("Preencha os campos 'title' e 'description'")
   }
  if (!title) {
    throw new Error("É necessário preencher o espaço de title");
  }

  if (!description) {
    throw new Error("É necessário preencher o espaço de description");
  }

  if(description && title){
     return true
  }

}