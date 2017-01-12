# NodeCMS 
============================

## About
This project is a study of NodeJS implementing a CMS.

## Installing
Obs.: It's necessary to install this project:
* NodeJS v6.5.0 (https://nodejs.org/en/) 
  * Express (npm install -g express)
  * ejs (npm install -g ejs)
* MongoDB (http://www.mongodb.org/downloads)
* Redis (http://redis.io/download)

To install follow the steps:

``` bash
  git clone git@github.com:ThiagoHara/nodecms.git
  cd nodecms
  npm install
  npm start
```

#### Atention 
Is necessary set system enviroment variable: `NODE_ENV=development` to run as development mode.
In case to run run as development mode without a variable run the command on a cmd or bash `NODE_ENV=development npm start`.
After open your browser at address: http://localhost:3000

## Docker
To use docker with this project, follow the steps below on bash terminal: 
1. On root folder of repository: `docker build -f docker/Dockerfile -t nodecms:develop`
2. Run the docker image: `docker run -d -p 3000:3000 nodecms:develop`
3. Test: On your browser open the url `http:\\127.0.0.1:3000`

## Autor
Thiago Massami Hara
Email: <thiagomassamihara@gmail.com>


============================

#pt-br

##Sobre
Este é um projeto de estudo do nodejs implementado um cms 


## Instalando
Obs.: É necessário antes de instalar este projeto, ter instalado e rodando os bancos de dados:
* NodeJS v6.5.0 (https://nodejs.org/en/) 
  * Express (npm install -g express)
  * ejs (npm install -g ejs)
* MongoDB (http://www.mongodb.org/downloads)

Para instalá-lo em sua máquina faça os comandos a seguir:

``` bash
  git clone git@github.com:ThiagoHara/nodecms.git
  cd nodecms
  npm install
  npm start
```
#### Atenção

É necessário ter a variável de ambiente: `NODE_ENV=development` configurada em seu sistema operacional para rodar em máquina local.

Se não quiser criar esta variável você rode o comando `NODE_ENV=development npm start`.

E depois acesse no seu navegador o endereço: http://localhost:3000

## Docker
Para usar o docker com este projeto, siga os passos abaixo no seu terminal: 
1. Na pasta raiz deste repositório crie uma imagem docker: `docker build -f docker/Dockerfile -t nodecms:develop`
2. Inicialize a imagem criada: `docker run -d -p 3000:3000 nodecms:develop`
3. Teste sua aplicação `http:\\127.0.0.1:3000`

## Autor
Thiago Massami Hara
Email: <thiagomassamihara@gmail.com>