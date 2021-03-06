# Gerenciamento de Ciclofaixas

![](Mapearciclofaixas.gif)

## Objetivo

Criar um sistema que ajuda a prefeitura do Recife a mapear as avenidas que possuem ciclofaixa.

## Sobre o Projeto

Projeto desenvolvido para seleção de Estágio em 12/09/2019 10:00hrs

### Tecnologias usadas

- Node.JS
- Sequelize(ORM)
- Postgres
- HTML
- CSS
- Bootstrap
- JS

### Checklist

#### Banco de Dados

- [x] Inserir
- [x] Buscar
- [x] Alterar
- [x] Remover
- [x] Tabela Avenida

#### Web

- [x] Listar os itens em cards
- [x] Excluir avenida
- [x] Cadastrar avenidas
- [x] Atualizar lista ao cadastrar
- [x] Atualizar lista ao remover
- [x] Busca por nome

#### Outros

- [x] Publicar no GitHub
- [x] Usar o conceito de Code First

## Instalação

Nessa parte, vou mostrar o que é preciso para executar o projeto em uma maquina local.

### Yarn

No site oficial, tem a documentação: [Site Oficial](https://yarnpkg.com/en/docs/install)

### Docker

No site oficial, tem a documentação: [Site Oficial](https://docs.docker.com/install/)

## Configuração

Essa é a parte mais desafiadora de explicar, mas vamos conseguir.

### Yarn

Para baixar todas as dependencias do projeto, você precisa entrar na pasta cliente/servidor executando os seguintes comandos:

```sh
cd [Local da pasta principal]/cliente
yarn
cd ../servidor
yarn
```

### Docker

- Em sistemas da Apple e em Linux, você precisa executar a seguinte linha de comando para criar um servidor Postgres no Docker:
  ```sh
  docker run --name mapearciclofaixasDB -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
  ```
- Para verificar se o servidor estar funcionando:
  ```sh
  docker ps
  ```
- Para iniciar o servidor:
  ```sh
  docker start mapearciclofaixasDB
  ```
- Para parar o servidor:
  ```sh
  docker stop mapearciclofaixasDB
  ```
- Você precisa criar um database no servidor: Para isso eu usei a interface grafica do [postbird](https://github.com/Paxa/postbird).
  > Lembre-se de criar um database com o seguinte nome: mapearciclofaixasDB
- Para gerar as tabelas do projeto, usei o sequelize CLI com as migrations. Dessa forma, evitamos o erro ao criar novas tabelas no ambiente de desenvolvimento.
  ```sh
  cd [Local da pasta principal]/servidor
  yarn sequelize db:migrate
  ```

## Iniciar o Projeto

### Servidor

#### Banco de dados

Para iniciar o Banco de dados postgres que foi virtualizado no Docker

```sh
docker start mapearciclofaixasDB
```

#### NodeJS

Para Iniciar o lado servidor

```sh
cd [Local da pasta principal]/servidor
yarn dev
```

### Cliente

Para Iniciar o lado cliente.

```sh
cd [Local da pasta principal]/cliente
yarn dev
```

Para abrir no navegador, precisamos olhar no terminal a porta que foi usada.
Normalmente, é utilizada a porta 8080 se não estiver sendo utilizada.

> http://localhost:8080/

## Contatos

- [Linkedin](https://www.linkedin.com/in/rogertavaress/)
