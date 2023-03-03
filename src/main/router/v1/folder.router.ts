import AbstractRouter from "../../../abstracts/abstractRouter";
import FolderController from "../../controller/folder.controller";

class FolderRouter extends AbstractRouter {
  private FolderController = new FolderController();
  constructor() {
    super();

    this.callRouter();
  }

  private callRouter() {
    // create folder
    this.routers
      .route("/create")
      .post(
        this.InputValidator.folderCreateInputValidator(),
        this.FolderController.createFolderController
      );
  }
}

export default FolderRouter;
