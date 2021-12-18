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
    2 - importar o ficheiro dump para criação da tabela dentro de 
        **src/database/dump/encripts.sql**
    2 - copiar o ficheiro .env.example e renomear para .env
    3 - configurar as váriaveis de ambiente do banco de dados dentro do ficheiro .env:
        POSTGRESQL_HOST, POSTGRESQL_USER, POSTGRESQL_PASSWORD, 
        POSTGRESQL_DATABASE, POSTGRESQL_PORT

    // Iniciar projeto
    $ yarn dev
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
```

## 📑 Funcionalidades

[ ] Cadastrar a string encriptada e retornar junto o Id <br/>
[ ] Não Permitir o Cadastro de uma string já encriptada <br/>
[ ] Listar a string desencriptada pelo Id <br/>
[ ] Não listar a string caso o Id não exista no banco de dados<br/>

---

<h3 align="center">Desenvolvido por 💻 Henriques Salucamba </h3>
