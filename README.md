## FACILE-CHALLENGE-API

<p align="center">🏆
  <a href="#-sobre"> Sobre </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|
    <a href="#-docker-instalação">Rodar com Docker (OPCIONAL) </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#️-funcionalidades">Funcionalidades</a>
</p>

# 📖 Sobre

Esse projeto tem como objetivo encriptar e decriptar uma string.

## 🏃 Instalação

```bash

    // Clonar repositório
    $ git clone https://github.com/BlvkRoot/facile-challenge

    // Acessar diretório
    $ cd facile-challenge

    // Instalar dependências
    $ yarn

    // Criar o banco de dados POSTGRES 
    1 - nome: facile_challenge_bd
    2 - copiar o ficheiro .env.example e renomear para .env
    3 - configurar as váriaveis de ambiente do banco de dados dentro do ficheiro .env:
        DATABASE_URL=postgres://username:password@hostname:port/database

    // Compilar o projecto
    $ yarn build # para compilar os ficheiros typescript para javascript
    
    // Iniciar o projecto
    $ yarn start # Este comando também já vai rodar a migration para criar a nossa tabela no banco de dados

    // Testando com Insomnia
    1 - Importar o ficheiro JSON dentro do diretório **src/insomnia/facile-challenge-api-routes** para o INSOMNIA na sua máquina
    2 - Testar as ENDPOINTS de cadastro e listagem da string
```

## 🐋 Docker Instalação

```bash
    Seguir os passos no link abaixo para instalar o Docker caso não tenha na sua máquina
```
- [Docker](https://docs.docker.com/engine/install)

```bash

    // Clonar repositório
    $ seguir o primeiro passo da instalação caso não tenha feito o clone

    // Acessar diretório
    $ seguir o segundo passo da instalação

    // Instalar dependências
    $ seguir o terceiro passo da instalação

    // Confirmar se o Docker já esta instalado (Windows | Linux)
    $ docker --version | sudo docker --version

    // Rodar o build da aplicação e subir os containers (Windows | Linux)
    $ docker-compose up -d | sudo docker-compose up -d # Para rodar os serviços em modo detach e não travar o terminal

    // Confirmar se os containers estão rodando (Windows | Linux)
    $ docker ps | sudo docker ps # Lista apenas containers/serviços que estão a Rodar

    // Confirmar se existem containers que falharam subir (Windows | Linux)
    $ docker ps -a | sudo docker ps -a # A Flag -a nos possibilita ver também containers parados

    NB: Quando estiver a testar com o Docker o hostname na DATABASE_URL deve ser o nome do serviço do banco de dados definido no ficheiro docker-compose.yml
```

## 📑 Funcionalidades

[✅] Cadastrar a string encriptada e retornar junto o Id <br/>
[🚫] Não Permitir o Cadastro de uma string já encriptada <br/>
[🚫] Não Permitir o Cadastro de uma string vazia <br/>
[✅] Listar a string desencriptada pelo Id <br/>
[🚫] Não listar a string caso o Id não exista no banco de dados<br/>

---

## BASEURLS

- *local:* http://localhost:3333/api/v1
- *remote:* https://facile-challengeapp.herokuapp.com/api/v1/

# Endpoints: 

```bash
[
      {
        GET: "/encripts/1",
        POST: {
          uri: "/encripts",
          body: {
            name: "Olá meu nome é string",
          },
        },
      },
]
```


<h3 align="center">Desenvolvido por 💻 Henriques Salucamba </h3>
