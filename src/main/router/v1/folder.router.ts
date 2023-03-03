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

    // get all folders
    this.routers
      .route("/get/all/folder")
      .get(this.FolderController.getAllFolderController);

    // get all sub folders
    this.routers
      .route("/get/all/sub-folder/by/:parentId")
      .get(
        this.InputValidator.singleParamInputValidator(
          "parentId",
          "Provide parent id"
        ),
        this.FolderController.getAllSubFolderController
      );

    // get all child folders
    this.routers
      .route("/get/all/child-folder/by/:subId")
      .get(
        this.InputValidator.singleParamInputValidator(
          "subId",
          "Provide sub folder id"
        ),
        this.FolderController.getAllChildFolderController
      );

    // delete a folder
    this.routers
      .route("/delete/folder-by/:folderId")
      .delete(
        this.InputValidator.singleParamInputValidator(
          "folderId",
          "Provide folder id"
        ),
        this.FolderController.deleteFolderController
      );
  }
}

export default FolderRouter;
