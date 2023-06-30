import {createServer} from "http";
import https from 'https';

let myServer = createServer((req,res)=>{
    let data = "";
    let uri = "https://jsonplaceholder.typicode.com";
    let keys = ["/posts","/comments","/albums","/photos","/todos","/users"]
    if(req.url == keys[0]){
        let key = keys[0];
        https.get(`${uri}${key}`, (peticion)=>{
            peticion.on("data", (chunk)=>{
                data += chunk;
            })
            peticion.on("end", ()=>{
                let plantilla = `
                    <table border="solid">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                `
                let obj = JSON.parse(data);
                /* let info = [];
                let datos = {}; */
                ;
                obj.forEach((val,id) => {
                    plantilla += `
                    <tr>
                        <td>${val.userId}</td>
                        <td>${val.id}</td>
                        <td>${val.title}</td>
                        <td>${val.body}</td>
                    </tr>
                    `
                    /* datos = {
                        "ID": val.id,
                        "Title": val.title,
                        "Body": val.body}
                    info.push(datos) */
                });
                plantilla += `
                    </tbody>
                </table>`
                res.end(plantilla)
            });
            
        })
    }
    else if (req.url == keys[1]){
        let key = keys[1];
        https.get(`${uri}${key}`, (peticion)=>{
            peticion.on("data", (chunk)=>{
                data += chunk;
            })
            peticion.on("end", ()=>{
                let plantilla = `
                    <table border="solid">
                        <thead>
                            <tr>
                                <th>podtId</th>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                `
                let obj = JSON.parse(data);
                obj.forEach((val,id) => {
                    plantilla += `
                    <tr>
                        <td>${val.postId}</td>
                        <td>${val.id}</td>
                        <td>${val.name}</td>
                        <td>${val.email}</td>
                        <td>${val.body}</td>
                    </tr>
                    `
                });
                plantilla += `
                    </tbody>
                </table>`
                res.end(plantilla)
            });
            
        })
    }
    else if (req.url == keys[2]){
        let key = keys[2];
        https.get(`${uri}${key}`, (peticion)=>{
            peticion.on("data", (chunk)=>{
                data += chunk;
            })
            peticion.on("end", ()=>{
                let plantilla = `
                    <table border="solid">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                            </tr>
                        </thead>
                        <tbody>
                `
                let obj = JSON.parse(data);
                obj.forEach((val,id) => {
                    plantilla += `
                    <tr>
                        <td>${val.userId}</td>
                        <td>${val.id}</td>
                        <td>${val.title}</td>
                    </tr>
                    `
                });
                plantilla += `
                    </tbody>
                </table>`
                res.end(plantilla)
            });
            
        })
    }
    else if (req.url == keys[3]){
        let key = keys[3];
        https.get(`${uri}${key}`, (peticion)=>{
            peticion.on("data", (chunk)=>{
                data += chunk;
            })
            peticion.on("end", ()=>{
                let plantilla = `
                    <table border="solid">
                        <thead>
                            <tr>
                                <th>albumId</th>
                                <th>id</th>
                                <th>title</th>
                                <th>url</th>
                                <th>thumbnailUrl</th>
                            </tr>
                        </thead>
                        <tbody>
                `
                let obj = JSON.parse(data);
                obj.forEach((val,id) => {
                    plantilla += `
                    <tr>
                        <td>${val.albumId}</td>
                        <td>${val.id}</td>
                        <td>${val.title}</td>
                        <td><img src="${val.url}" alt="" witdh ="150px" height="150px"></td>
                        <td><img src="${val.thumbnailUrl}" alt=""></td>
                    </tr>
                    `
                });
                plantilla += `
                    </tbody>
                </table>`
                res.end(plantilla)
            });
            
        })
    }
    else if (req.url == keys[4]){
        let key = keys[4];
        https.get(`${uri}${key}`, (peticion)=>{
            peticion.on("data", (chunk)=>{
                data += chunk;
            })
            peticion.on("end", ()=>{
                let plantilla = `
                    <table border="solid">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                                <th>completed</th>
                            </tr>
                        </thead>
                        <tbody>
                `
                let obj = JSON.parse(data);
                obj.forEach((val,id) => {
                    plantilla += `
                    <tr>
                        <td>${val.userId}</td>
                        <td>${val.id}</td>
                        <td>${val.title}</td>
                        <td>${val.completed}</td>
                    </tr>
                    `
                });
                plantilla += `
                    </tbody>
                </table>`
                res.end(plantilla)
            });
            
        })
    }
    else if (req.url == keys[5]){
        let key = keys[5];
        https.get(`${uri}${key}`, (peticion)=>{
            peticion.on("data", (chunk)=>{
                data += chunk;
            })
            peticion.on("end", ()=>{
                let plantilla = `
                    <table border="solid">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>username</th>
                                <th>email</th>
                                <th>address</th>
                                <th>phone</th>
                                <th>website</th>
                                <th>company</th>

                            </tr>
                        </thead>
                        <tbody>
                `
                let obj = JSON.parse(data);
                obj.forEach((val,id) => {
                    plantilla += `
                    <tr>
                        <td>${val.id}</td>
                        <td>${val.name}</td>
                        <td>${val.username}</td>
                        <td>${val.email}</td>
                        <td>
                            <ul>
                                <li>${val.address.street}</li>
                                <li>${val.address.suite}</li>
                                <li>${val.address.city}</li>
                                <li>${val.address.zipcode}</li>
                                <li>
                                    Location
                                    <ul>
                                        <li>${val.address.geo.lat}</li>
                                        <li>${val.address.geo.lng}</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                        <td>${val.phone}</td>
                        <td>${val.website}</td>
                        <td>
                            <ul>
                                <li>${val.company.name}</li>
                                <li>${val.company.catchPhrase}</li>
                                <li>${val.company.bs}</li>
                            </ul>
                        </td>
                    </tr>
                    `
                });
                plantilla += `
                    </tbody>
                </table>`
                res.end(plantilla)
            });
            
        })
    }
    else{
        res.end(`Como asi que ${req.url} mande bien eso`)
    }
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