import { Server } from "socket.io";
import http from "http";
import { app } from "./app.js";
import { config } from "dotenv";
import { connect } from "./utils/db.js";
import { setIoInstance } from "./io.js"; // import the function

const PORT = 8000;


const server = http.createServer(app); 

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

config({
  path: "./config.env",
});

io.on("connection", (socket) => {
  console.log("USER CONNECTED:", socket.id);

  // Handle 'join' events
  socket.on('join', (auctionId) => {
    socket.join(auctionId);
  });
});

// Pass the io instance to your controller
setIoInstance(io);

server.listen(PORT, () => {
  console.log("Server is running on port "+ PORT);
  console.log(process.env.MONGO_URI)
});

connect();