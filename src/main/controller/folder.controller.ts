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

  // create sub folder controller
  public createSubFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.createSubFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );

  // create child folder controller
  public createChildFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.createChildFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );
}

export default FolderController;
