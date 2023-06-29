# to-do-list

Regras de Negócio

[] Usuário pode adicionar uma task;
[] Usuário pode remover uma task;
[] Usuário deve estar autenticado;
[] Usuário pode alterar uma task;
[] Verificar se a task já existe;

# Planejamento de API

GET - para ler um recurso dentro do banco de dados (mostrar a task ao usuário);
    - para verificar se uma task já existe.

POST - para criar uma nova task com base no request do usuário.

PUT - para alterar uma task já criada com base no request de alteração do usuário.

DELETE - para remover uma task com base no request de deleção do usuário.

# Banco de Dados

table das tasks contendo os seguintes atributos:
    nome da task
    checkbox (task realizada ou não realizada)
    data de criação

table de usuários contendo os seguintes atributos:
    login
    nome
    senha

table de relação entre a table de usuários e das tasks
    contendo as tasks de cada usuário separadamente