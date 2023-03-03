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

  // get all folder
  public getAllFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.getAllFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );

  // get all sub folder
  public getAllSubFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.getAllSubFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );

  // get all child folder
  public getAllChildFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.getAllChildFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );
  // delete folder
  public deleteFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.deleteFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );

  // delete sub folder
  public deleteSubFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.deleteSubFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );

  // delete child folder
  public deleteChildFolderController = this.assyncWrapper.wrap(
    async (req: Request, res: Response) => {
      const data = await this.folderService.deleteChildFolderService(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    }
  );
}

export default FolderController;
