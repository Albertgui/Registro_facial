Este es el proyecto prueba del registro facial hecho en angular desde un principio, en si contiene un archivo txt llamado "proceso" que explica las instalaciones de paquetes necesarios para el funcionamiento del proyecto.

Se hicieron pruebas de forma local, por lo que hizo falta el programa xamp y phpmyadmin para configurar la base de datos de pruebas con una tabla de datos: id, imagen, nombre, cedula, la base de datos se conecto a traves de un modulo en la carpeta "server" de este proyecto, localizada en el "src".

Dicho modulo server se puso en la carpeta htdocs del programa xamp, y se inicio el localhost de xamp en conjunto con el proyecto server con nodejs, posteriormente a eso se inicio el proyecto angular con el form de la recoleccion de los datos a subir en la base de datos de prueba.

En la carpeta server tambien hay un archivo txt "pasos" que explica los paquetes necesarios a instalar para su funcionamiento.

Este proyecto de registro facial se va a transformar en un solo componente, al igual que el proyecto de reconocimiento facial en https://github.com/thomas-fibex/Reconocimiento_Facial, para que se unan ambos componentes en un solo proyecto de angular y funcionen en conjunto, cada uno con su ruta.

Para esto se esta desarrollando la version angular del proyecto de reconocimiento facial.