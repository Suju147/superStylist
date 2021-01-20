const http=require('http');
const app=require('./app');
const connectDb=require('./connector');
 connectDb();
//const port=9999 || process.env.PORT ;

const server=http.createServer(app);

server.listen(process.env.PORT);
