var restify = require('restify');
const plugins = restify.plugins;

require('./connection/mongoConnect.js');
    user=require('./controller/userController.js'),
    server = restify.createServer();

server.use(plugins.fullResponse());
server.use(plugins.bodyParser());
//routes
server.post("/user", user.createUser)
server.get("/user", user.getUser)

var port = process.env.PORT;

server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})
