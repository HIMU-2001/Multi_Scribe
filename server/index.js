import { Server } from "socket.io";
import  express  from "express";
import cors from "cors";
import { createServer } from "http";
import Connection from "./database/db.js";
import { getDocument,updateDocument } from "./controller/document-controller.js";

const PORT = process.env.PORT||9000;

Connection();
const app = express();
app.use(cors());
const httpServer = createServer(app);
httpServer.listen(PORT,()=>{
    console.log("SERVER RUNNING");
})
// const io = new Server(PORT,{
//     cors:{
//         origin:'http://localhost:3000',
//         methods:['GET','POST']
//     }
// });
const io = new Server(httpServer);

io.on('connection',socket=>{
    console.log("Connected");
    socket.on('get-document',async documentId=>{
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document',document.data);
        socket.on('send-changes',delta=>{
            socket.broadcast.to(documentId).emit('receive-changes',delta);
        })
        socket.on('save-document',async data=>{
            await updateDocument(documentId,data);
        })
    })
})