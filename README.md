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
