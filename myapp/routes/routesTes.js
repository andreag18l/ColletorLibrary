var routes = require("express").Router();

var routesTesCtrl = require('../controllers/routesTes')

routes.get('/test', routesTesCtrl.getTest)//http://localhost:3000/testRoutes/test
routes.get('/ping', routesTesCtrl.ping)//http://localhost:3000/testRoutes/ping
routes.get('/hello/:nombre', routesTesCtrl.hello)//http://localhost:3000/testRoutes/hello/Andrea
routes.get('/time', routesTesCtrl.getTime)//http://localhost:3000/testRoutes/time
routes.get('/status', routesTesCtrl.status)//http://localhost:3000/testRoutes/status
routes.get('/sum', routesTesCtrl.sum)//http://localhost:3000/testRoutes/sum?a=5&b=10


//routes.post("/test", routesTesCtrl.postTest)//http://localhost:3000/testRoutes/test con body { "name": "Andrea", "age": 30 }    
routes.get('/test/ping', routesTesCtrl.ping)
module.exports = routes;