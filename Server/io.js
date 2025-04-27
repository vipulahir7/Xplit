const {Server} = require('socket.io');
let exportIO;

let io;
function initializeIO (server){
    
    io=new Server(server,{
        cors:{
            origin:["https://xplit.vercel.app" ,"https://xplit-git-main-vipul-ahirs-projects.vercel.app"],
            credentials:true,
            methods:["GET", "POST"]
        }
    }
    );  

    io.on("connection",(socket)=>{
        console.log("user connected : ",socket.id);
        socket.on("disconnect",()=>{
            console.log("user disconnected : ",socket.id);
        })
    })
}

function getIO(){
    return io;
}

module.exports={initializeIO,getIO}