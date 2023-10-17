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
