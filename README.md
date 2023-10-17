# Depósito

Essa rota recebe um depósito do cliente e atualiza o saldo do cliente no banco de dados.

## Endpoint
/deposito

## Método
POST

## Parâmetros
* `deposito`: O valor do depósito.

## Resposta
* `202`: Depósito realizado com sucesso.
* `400`: Depósito inválido.
* `500`: Erro interno do servidor.

## Exemplo
POST /deposito

body:
```json
{
  "deposito": 100
}
````

resposta:
````
{
  "mensagem": "Depósito realizado com sucesso."
}
````

---

# Cadastro de Banco
Essa rota cadastra um novo banco no banco de dados.

## Endpoint
/bancos


## Método
POST


## Parâmetros
* `nome`: O nome do banco.
* `cnpj`: O CNPJ do banco.
* `data_fundacao`: A data de fundação do banco.

## Resposta
* `201`: Banco cadastrado com sucesso.
* `400`: Banco já existe.
* `500`: Erro interno do servidor.

## Exemplo
POST /bancos

body:
```json
{
  "nome": "Banco do Brasil",
  "cnpj": "12345678901234",
  "data_fundacao": "1935-02-01"
}
````


resposta:
````JSON
{
  "mensagem": "Banco cadastrado com sucesso."
}
````

# Cadastro de Cliente
Essa rota cadastra um novo cliente no banco de dados.

## Endpoint
Use o código com cuidado. Saiba mais
/clientes

## Método
POST


## Parâmetros
* `id_banco`: O ID do banco do cliente.
* `nome`: O nome do cliente.
* `email`: O e-mail do cliente.
* `senha`: A senha do cliente.
* `data_nascimento`: A data de nascimento do cliente.
* `cep`: O CEP do cliente.

## Resposta
* `201`: Cliente cadastrado com sucesso.
* `400`: Cliente já existe com esse e-mail e ID do banco.
* `500`: Erro interno do servidor.

## Exemplo
POST /clientes

body:
```json
{
  "id_banco": 1,
  "nome": "Fulano de Tal",
  "email": "fulano@email.com",
  "senha": "123456",
  "data_nascimento": "1990-01-01",
  "cep": "12345-678"
}
````
resposta:

````JSON
{
  "mensagem": "Cliente cadastrado!"
````

---
# Login de Cliente
Essa rota realiza o login de um cliente.

## Endpoint
Use o código com cuidado. Saiba mais
/login

## Método
POST

## Parâmetros
* `email`: O e-mail do cliente.
* `senha`: A senha do cliente.

## Resposta
* `200`: Login realizado com sucesso.
* `404`: E-mail não encontrado.
* `400`: Senha incorreta.
* `500`: Erro interno do servidor.

## Exemplo
POST /login

body:
```json
{
  "email": "fulano@email.com",
  "senha": "123456"
}
````
resposta:

````JSON
{
  "usuario": {
    "id": 1,
    "nome": "Fulano de Tal",
    "email": "fulano@email.com",
    "data_nascimento": "1990-01-01",
    "cep": "12345-678"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJleHAiOjE2MDgwMTYxMTd9.4329405d97588e40378a31705d66b22315838d25"
}

````

---

# Transferência
Essa rota realiza uma transferência de dinheiro entre dois clientes.

## Endpoint
Use o código com cuidado. Saiba mais
/transferencia

## Método
POST


## Parâmetros
* `valor`: O valor da transferência.
* `destino`: O ID do cliente de destino.

## Resposta
* `200`: Transferência realizada com sucesso.
* `400`: Erro na transferência.
* `500`: Erro interno do servidor.

## Exemplo
POST /transferencia

body:
```json
{
  "valor": 100,
  "destino": 2
}
````
resposta:

````JSON
{
  "mensagem": "Transferência realizada com sucesso"
}
````
---

# Validação de login
Esse middleware valida o login do usuário.

## Endpoint
Todas as rotas protegidas

## Método
Todos os métodos

## Parâmetros
* `authorization`: O token de autorização do usuário.

## Resposta
* `200`: Login válido.
* `401`: Não autorizado.
* `404`: Cliente não encontrado.
* `400`: Erro na validação do token.

## Exemplo
Use o código com cuidado. Saiba mais
GET /rota-protegida

headers:
````js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJleHAiOjE2MDgwMTYxMTd9.4329405d97588e40378a31705d66b22315838d25
````
resposta:
```json
{
  // ...
}
```

---

# Validação de esquema
Este middleware valida o corpo da solicitação contra um esquema Joi.

## Endpoint
Todas as rotas que usam o middleware

## Método
Todos os métodos

## Parâmetros
* `joiSchema`: O esquema Joi que será usado para validar o corpo da solicitação.

## Resposta
* `200`: Corpo da solicitação válido.
* `400`: Corpo da solicitação inválido.

## Exemplo
Use o código com cuidado. Saiba mais
POST /rota-protegida

body:


```json
{
  "nome": 123,
  "email": "fulano@email.com"
}

````
resposta:

````JSON
{
  mensagem: "O campo nome não pode ser apenas números."
}

````
