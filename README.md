# DragAndDropFiles

## Qué es este proyecto?
Drag & Drop Files es un proyecto que permite subir archivos a un servidor mediante drag & drop o selección de archivos.

## ¿Cómo funciona?
El proyecto está desarrollado en JavaScript (Node). El servidor recibe los archivos mediante una petición POST y los guarda en una carpeta temporal.

## ¿Cómo lo uso?
Para usarlo, simplemente hay que clonar el repositorio y ejecutar el comando `npm install` para instalar las dependencias en la carpeta 'server'. Una vez instaladas, ejecutar el comando `npm start` para iniciar el servidor. El servidor estará disponible en el puerto 3000.

Luego, seleccione el archivo `index.html` y arrástrelo a su navegador. El proyecto está listo para usarse.

Seleccione los archivos que desea subir y arrástrelos a la zona de drop o haga click en el botón `Select file(s)` para seleccionar los archivos.

## ¿Cómo lo personalizo?
El proyecto está preparado para que se pueda personalizar fácilmente. Para ello, hay que modificar el archivo `app.js` y modificar las variables con la ruta de la carpeta donde se guardarán los archivos. También se puede modificar el puerto en el que se ejecuta el servidor modificando el método `listen`.

## ¿Cómo lo despliego?
Para desplegarlo, hay que ejecutar el comando `npm run build` para generar el código JavaScript que se ejecutará en el servidor. Una vez generado, se puede ejecutar el comando `npm run start:prod` para iniciar el servidor.