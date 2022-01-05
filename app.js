const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname,"/public");
app.use( express.static(publicPath));

app.set('port',process.env.PORT||5000);

app.listen(app.get('port'),()=> {console.log("Servidor funcionando")});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});
