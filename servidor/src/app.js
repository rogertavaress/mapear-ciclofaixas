import express from "express";
import routes from "./routes";
import "./database";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.static("public"));
    this.server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:8081");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
      next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
