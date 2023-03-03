import { Application } from "express";
import FolderRouter from "../main/router/v1/folder.router";

class Routes {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public route() {
    // folder management router
    this.app.use("/api/v1/folder", new FolderRouter().routers);
  }
}

export default Routes;
