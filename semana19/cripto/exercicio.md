### Exercício 1

A)
Salt é o tempero da senha, ou seja, a adição de uma string aleatória que mistura na valor recebido,o valor é opcional e em sua documentação possui um valor padrão de 10 porém seguindo como base na aula estamos utilizando 12. Para tornar os nossos dados mais seguros.

B)
```tsx
      const novacripto = new hashManager().generateHash("123456")
      const teste = await novacripto
      console.log(teste)

      $2a$12$T72yTuIS6Okia7hgCrKteOnK6NU7zGsijDXh.lJwXqdAFUC4gYTv2
```

### Exercício 2

A)
Cadastro, pois é preciso criar o novo formato de senha para que na sequencia seja comparado