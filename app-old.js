const http = require('http');
const port = 8080;

http.createServer( (req, res) => {

    res.write('Hola mundo!!!');
    res.end();

})
.listen( port );

console.log(`Servidor activo - localhost:${port}`);
