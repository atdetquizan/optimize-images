### Documentación guiadas
- https://medium.com/devilxstudios/optimizar-im%C3%A1genes-para-sitios-web-con-gulp-85e399a861d1
- https://mugan86.medium.com/descargar-im%C3%A1genes-desde-una-url-79ee94f7e25d
### PAQUETES
- gulp-imagemin: https://www.npmjs.com/package/gulp-imagemin

```yaml
# Instalamos gulp-cli de manera global.
npm install gulp-cli -g
# Instalamos gulp v4 en nuestro package.json.
npm install gulp@next --save-dev
# Instalación gulp-imagemin:
npm install --save-dev gulp-imagemin
# Intalación request
npm install request
```

Comandos para ejecutar
```yaml
# optimizar tamaño de imagenes
npm run start
# descargar imagenes
npm run download
```

Configurar archivo `download.js` para descargar imagenes.
```js

const baseUrl = 'URL BASE DEFAULT';

const images = [
    { path: 'RUTA DE DOCUMENTO', filename: 'NOMBRE DE ARCHIVO AH GUARDAR' }
];

...
```