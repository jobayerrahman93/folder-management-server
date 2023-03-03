import abstractController from "../../abstracts/abstractController";
import FolderService from "../service/folder.service";

class FolderController extends abstractController {
  private folderService = new FolderService();

  constructor() {
    super();
  }
}

export default FolderController;
