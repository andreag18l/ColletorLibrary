//const { get } = require('../routes')

let getTest = async(request, response)=>{
    response.json({
        message: "este es un test de endpoint",
        hora:" 18:15 del 18 de febrero"
    })
}
const postTest = async(request, response)=>{
    response.json({
        message: "Datos recibidos correctamente",
        hora: new Date().toISOString(),
        body: request.body
    })

}
const ping = async(request, response)=>{
    response.json({
        ok: true,
        message: "pong",
        timestamp: new Date().toISOString()
    })
}
const hello = async (request, response) => {
  const { nombre } = request.params;

  response.json({
    ok: true,
    message: `Hola, ${nombre}!`,
  });
};
const getTime = async (request, response) => {
  response.json({
    ok: true,
    hora: new Date().toLocaleTimeString(),
  });
}
const status = async(request, response)=>{
    response.json({
        ok: true,      
        status: "Servidor funcionando correctamente",
    });
}
const sum = async(request, response)=>{
    const { a, b } = request.query;
    const result = Number(a) + Number(b);   
    response.json({
        ok: true,
        a,  
        b,
        result
    });
}

module.exports ={
    getTest,
    postTest,
    ping,
    hello,
    getTime,
    status,
    sum 
}