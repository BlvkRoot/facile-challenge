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

    // Iniciar projeto
    $ yarn dev
```

## 🐋 Docker Instalação

```bash

    // Clonar repositório
    $ seguir o primeiro passo da instalação caso não tenha feito o clone

    // Acessar diretório
    $ seguir o segundo passo da instalação

    // Instalar dependências
    $ seguir o terceiro passo da instalação

    // Seguir os passos no link abaixo para instalar o Docker caso não tenha na sua máquina
    [Docker](https://docs.docker.com/engine/install)

    // Confirmar se o Docker já esta instalado
    $ docker --version

    // Rodar o build da aplicação e subir os containers
    $ docker-compose up -d # Para rodar os serviços em modo detach e não travar o terminal

    // Confirmar se os containers estão rodando
    $ docker ps # Lista apenas containers/serviços que estão a Rodar

    // Confirmar se existem containers que falharam subir
    $ docker ps -a # A Flag -a nos possibilita ver também containers parados
```
