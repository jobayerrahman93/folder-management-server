import { Request, Response } from "express";
import abstractController from "../../abstracts/abstractController";
import FolderService from "../service/folder.service";

class FolderController extends abstractController {
  private folderService = new FolderService();

  constructor() {
    super();
  }

  // create folder controller
  public createFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.createFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );
}

export default FolderController;
