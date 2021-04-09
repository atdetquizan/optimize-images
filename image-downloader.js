var fs = require('fs'),
  request = require('request');

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log(
      '\x1b[32m',
      filename,
      'content-type:',
      res.headers['content-type'],
      'content-length:',
      res.headers['content-length']
    );
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = {
  download,
};
