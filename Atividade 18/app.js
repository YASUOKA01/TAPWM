let express = require('express');

let app = express();
app.listen(3000, function () {
    console.log("Olá o servidor express foi carregado com sucesso");
});

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/historia', function (req, res) {
    res.send("<html><body>História da Fatec Sorocaba</body></html>");
});
res.render("secao/historia");

app.get('/cursos', function (req, res) {
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>");
});
res.render("secao/cursos");

app.get('/professores', function (req, res) {
    res.send("<html><body>Professores da Fatec Sorocaba</body></html>");
});
res.render("secao/professores");


app.listen(3000, function () {
    console.log("servidor com express foi carregado");
});