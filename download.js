const imageDownloader = require('./image-downloader').download;

// URL BASE DEFAULT
const baseUrl = 'https://sitelabs.es'

const images = [
    { path: '/wp-content/uploads/2016/06/regex-regular-expression.jpg', filename: 'regular-expresion1.jpg' },
    { path: '/wp-content/uploads/2016/06/regex-regular-expression.jpg', filename: 'regular-expresion2.jpg' },
    { path: '/wp-content/uploads/2016/06/regex-regular-expression.jpg', filename: 'regular-expresion3.jpg' }
];

for (let item of images) {
    // Función para descargar las imágenes
    imageDownloader(`${baseUrl}${item.path}`, `./images/${item.filename}`, function(){
        console.info('\x1b[34m', `${item.filename} image download!!`);
    });
}