const jsonServer = require("json-server"); // Importing json-server library
const cors = require("cors"); // Importing cors library

const server = jsonServer.create();
const router = jsonServer.router("blog-data.json"); // Replace with your JSON file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000; // Choose port from here like 8080, 3001

server.use(cors()); // Enable CORS for all routes
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
