// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

app.use(express.static(__dirname + "/build"))
// определяем обработчик для маршрута "/"
app.get("/", function (request, response) {

    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 5000 порту
let port = process.env.PORT || 5000
app.listen(port);