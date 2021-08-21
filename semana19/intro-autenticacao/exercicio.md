### Exercício 1

A)
Boa, sim, pois utilizando strings é possivel descontruir o id de forma mais simples e evita possiveis bugs.

B)

```tsx
import { v4 } from "uuid";

export class IdGenerator {
  generateId(): string {
    return v4();
  }
}
```

### Exercício 2

A)
1 - cria uma const do nome da tabela
2 - cria a conecção com o banco de dados
3 - createUser ira receber três valores e que serão inseridos em uma tabela do banco de dados

B)

```sql
CREATE TABLE users_e55 (
    id VARCHAR(255) PRIMARY KEY ,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(64) NOT NULL
);

```

C)

```tsx
/endpoints/Uaceeerrst.ts;
```

### Exercício 3

A)
Ao utilizar o jwt são necessários 3 valores (payload, secret e opções)
Na seleção de segredos devemos sempre enviar um dado como string portanto ao utilizar o dotenv para proteger nosso banco de dados devemos garantir que a função está rececbendo uma string

### Exercício 4

A)

B)

```tsx
if (!email.includes("@") || email === "") {
  throw new Error("email inválido");
}
```

C)

```tsx
if (password.length < 6) {
  throw new Error("senha muito pequena, 6 digitos ou mais");
}
```
### Exercício 7

A)
Faz o valor chegar de qualquer tipo para evitar possiveis erros com a jwt