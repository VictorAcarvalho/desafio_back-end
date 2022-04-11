# Desafio Tech Back-end


- Desafio que consiste em criar uma API que receba um ou mais endereços, faça geolocalização desses endereços e através do cálculo de distância Euclidiana retorne os endereços mais próximos.

## Como utilizar

- Primeiramente, certifique-se de ter o `Node` ,`yarn` ou o `npm` em seu ambiente de desenvolvimento.
- Depois clone o projeto em seu ambiente local, e após acessa-lo certifique-se de baixar todas as dependências digitando `npm i` ou `yarn init`.
- Após a instalação de todas as dependências, configure as variáveis de ambiente no arquivo `.env.example`.
- Depois de configuradas, digite `yarn dev` em seu terminal e espere a menssagem confirmando que a API está rodando: 
 ```
    Api is runnig on the port (porta setada na variável de ambiente) ou 3005
 ```

## Como fazer chamadas 

- Com a API rodando, utilize um software que simule uma chamada(Insomnia, Postman, entre outros).
- Faça uma chamada get com a seguinte rota
```
    http://localhost:(porta configurada)/geopoint?address=(endereço(s) que deseja consultar);
```

### Exemplo
  ```
  http://localhost:3001/geopoint?address=Av. Rio Branco, 1, Centro, Rio de Janeiro, RJ, 20090003&address=Praça Mal. Âncora, 122,Centro, Rio de Janeiro, RJ, 20021200&address=Av. Pres. Castelo Branco 35 Maracanã, Rio de Janeiro RJ, 20271-130&address=Av. República do Paraguai 395 Centro, Rio de Janeiro RJ, 20031-180&address=Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280-030

  ```

 ### Resposta 

 - Retornando os endereços em ordem de menor distância

 ```
    [
  {
    "origin": "Av. Pres. Castelo Branco, 35 - Maracanã, Rio de Janeiro - RJ, 20271-130, Brazil",
    "destination": "Av. República do Paraguai, 395 - Centro, Rio de Janeiro - RJ, 20031-180, Brazil",
    "distance": "0.0047"
  },
  {
    "origin": "Av. Pres. Castelo Branco, 35 - Maracanã, Rio de Janeiro - RJ, 20271-130, Brazil",
    "destination": "Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil",
    "distance": "0.0048"
  },
  {
    "origin": "Av. Pres. Castelo Branco, 35 - Maracanã, Rio de Janeiro - RJ, 20271-130, Brazil",
    "destination": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil",
    "distance": "0.0114"
  },
  {
    "origin": "Av. Pres. Castelo Branco, 35 - Maracanã, Rio de Janeiro - RJ, 20271-130, Brazil",
    "destination": "R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil",
    "distance": "0.0420"
  }
]

 ```

