import {createServer} from "http";
import https from 'https';

let myServer = createServer((req,res)=>{
    let data = "";
    let uri = "https://jsonplaceholder.typicode.com";
    let key = "/posts";
    https.get(`${uri}${key}`, (peticion)=>{
        peticion.on("data", (chunk)=>{
            data += chunk;
        })
        peticion.on("end", ()=>{
            let obj = JSON.parse(data);
            let ids = []
            let title = []
            obj.forEach((val,id) => {
                ids[id] = val.id
                title[id] = val.title
            });
            
            res.end(JSON.stringify(title));
        });
    })
})

/* let myServer = createServer((req,res)=>{
    let datos = ""
    req.on("data",(chuck)=>{
        datos += chuck;
    })
    req.on("end", ()=>{
        res.end(datos);
    })
}) */

const config = {
    hostname: "127.9.012",
    port: 5016
}

//LEVANTAR SERVIDOR local = "http://localhost:8080/"
myServer.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}/`);
})