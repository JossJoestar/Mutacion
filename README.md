Mutacion

Para ejecutar este proyecto es necesario instalar los paquetes mediante el comando npm i o npm install, abriendo una terminal de windows, windows powershell, linux o MacOS.

Una ves instalado se puede ejecutar el proyecto en modo produccion con el comando npm run start, para ejecutarlo en modo desarollo el comanod npm run dev nos ayudara. 
El comando npm run dev se ayuda de la libreria nodemon que sirve para el desarrollo de programas con nodejs.
En caso de usar VSCode se puede debuggear presionando el tecla F5 en el archivo index.js. 
Para hacer peticiones al servicio podemos usar una herramienta como postman o insonia, o bien el proyecto front end, dichas peticiones se realizan al "localhost:3000";

Base de datos: 
Las conexiones a base de datos para la consulta de datos se encuentran en el archivo de configuracion de BD es decir el database.js. 
Esta base de datos es PostgreSQL, puesto es la unica completamente gratuita dentro del servicio de despliegue de heroku. 
A esta base de datos se puede ingresar mediante un servicio como lo podria ser PGAdmin4.

Peticiones:
1- Para traer los stats, nuestra llamada va a ser de tipo GET a la siguiente ruta "localhost:3000/stats" y se nos mostrara un JSON con la información

2- Para verificar si es mutacion haremos una llamada de Tipo POST a la siguiente ruta "localhost:3000/mutation", el body tiene que ser de tipo JSON, este es un ejemplo del body ""dna":["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]", en caso de ser mutación, se regresara un status 200, en caso de no ser mutación, se regresara un status 403.

3- Para obtener la lista de los ultimos 10 ADN guardados hacemos una llamada de tipo GET a la siguiente ruta "localhost:3000/list" y se nos mostrara una lista con los 10 ultimos ADN guardados y verificados

La api se puede encontrar de manera productiva en la siguiente ruta:
'https://mutacionjs.herokuapp.com'

Para poder hacer peticiones unicamente se acompleta con el metodo al que se busca llamar por ejemplo: 
'https://mutacionjs.herokuapp.com/list' - Obtendremos la lista