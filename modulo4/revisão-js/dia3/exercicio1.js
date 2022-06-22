const contas = [
  {
    email: "astrodev@labenu.com",
    password: "abc123",
  },
  {
    email: "bananinha@gmail.com",
    password: "bananinha",
  },
];

const login = (email, password) => {
  if (email.includes("@")) {
    if (password.length >= 6) {
      let checkEmail = contas.findIndex((value) => value.email === email);
      let checkPassword = contas.findIndex( (value) => value.password === password);
      if (checkEmail === checkPassword) {
        return console.log(`Login realizado, ${email}!`);
      } else {
        return console.log("Senha incorreta");
      }
    } else {
      return console.log("Senha deve possuir no mínimo 6 caracteres");
    }
  } else {
    return console.log("Email incorreto");
  }
};

login("astrodev@labenu.com", "abc123")
login("astrodev.labenu.com", "abc123")
login("astrodev@labenu.com", "abc12")
login("astrodev@labenu.com", "abc1234")

login("bananinha@gmail.com", "bananinha")
login("bananinha.gmail.com", "bananinha")
login("bananinha@gmail.com", "banan")
login("bananinha@gmail.com", "banana")





