# Evaluación final - Mayte Vargas

## Buscador de series de anime

[Pincha aquí para acceder al buscador de seriesde anime](http://beta.adalab.es/modulo-2-evaluacion-final-MayVargasF/)

### Cómo arrancar el proyecto

1. Abrir en el editor de código.
2. Abrir una terminal.
3. Ejecutar en ella el comando: `npm install`
4. Una vez termina de instalarse, ejecutar el comando: `npm start`
5. El proyecto se abrirá en el navegador y todos los cambios realizados en el código se reflejarán automáticamente en el navegador.

### Funcionalidades de la aplicación web

1. Al cargar la página aparecen en la sección de **Resultados** todas las series de anime de la API por defecto, se muestra el título y la portada de las mismas. Al final de la lista hay un botón para ir a la siguiente página de resultados y otro para retroceder a la anterior.

2. En la parte de arriba de la página hay un campo en el que la usuaria escribe el nombre de la serie anime y al clicar en el botón de `buscar`aparecen los resultados en la sección de **Resultados** anteriormente mencionada, también puede clicar en el botón de `reset` y se borrará lo que ha escrito y se volverán a mostrar en los resultados todas las series de la API por defecto.

3. La usuaria puede clicar encima de sus series favoritas y estas se guardarán en la sección de **Series favoritas** y se resaltarán en la sección de **Resultados** mostrando que esa serie ya está guardada en favoritos. La usuaria puede eliminar estas series favoritas tanto pinchando en el icono de la X al lado del título en la sección de **Series favoritas** como volviendo a hacer click encima de la serie en la sección de **Resultados**. Al final de la mencionada sección de **Series favoritas" hay un botón de `borrar todas`que borrará todas las series favoritas a la vez.

4. Las series favoritas se quedarán almacenadas en el la memoria del navegador de la usuaria de manera que aunque recargue la página o vuelva a entrar en ella más tarde, seguirá teniendo sus series favoritas guardadas en su correspondiente sección.

5. Las series que son muy antiguas no tienen imagen de portada por lo que se le ha colocado un placeholder que aparecerá en su lugar de modo que la imagen no quede vacía.


### API externa utilizada para obtener la información de las series de anime

[Jikan API](https://docs.api.jikan.moe/)


