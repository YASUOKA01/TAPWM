const fs = require('fs'); // Carregando modulo filesystem
const data = fs.readFileSync('file.txt');
// A execucao é bloqueada aque ate o arquivo ser lido
console.log(data.toString());