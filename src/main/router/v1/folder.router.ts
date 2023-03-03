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

    // create sub folder
    this.routers
      .route("/create/sub-folder")
      .post(
        this.InputValidator.subFolderCreateInputValidator(),
        this.FolderController.createSubFolderController
      );

    // create child folder
    this.routers
      .route("/create/child-folder")
      .post(
        this.InputValidator.childFolderCreateInputValidator(),
        this.FolderController.createChildFolderController
      );
  }
}

export default FolderRouter;
