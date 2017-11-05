//vamos a usar 2 módulos
var http= require("http"),
	fs = require("fs");//fs se encarga de comunicarse con el sistema de archivos del pc
var html=fs.readFileSync("./index.html");//retorna el contenido del archivo

http.createServer(function(req,res){
res.write(html);
res.end();
}).listen(8080);