import { Request } from "express";
import AbstractServices from "../../abstracts/abstractServices";

class FolderService extends AbstractServices {
  constructor() {
    super();
  }

  // create folder service
  public createFolderService = async (req: Request) => {
    const res = await this.db("folders").insert(req.body);

    if (res.length) {
      return {
        success: true,
        message: "Successfully folder created",
      };
    }

    return {
      success: false,
      message: "Cannot create folder at this moment",
    };
  };

  // create sub folder service
  public createSubFolderService = async (req: Request) => {
    return await this.db.transaction(async (trx) => {
      const { folder_id, sub_folder_name } = req.body;

      const res = await trx("sub_folders").insert({
        sub_folder_name,
        folder_id,
      });

      if (res.length) {
        return {
          success: true,
          message: "Successfully sub folder created",
        };
      }

      return {
        success: false,
        message: "Cannot create sub folder at this moment",
      };
    });
  };

  // create child folder service
  public createChildFolderService = async (req: Request) => {
    return await this.db.transaction(async (trx) => {
      const { sub_folder_id, child_folder_name } = req.body;

      const subFolderRes = await trx("sub_folders").insert({
        sub_folder_name: child_folder_name,
      });

      const childFolderRes = await trx("child_folders").insert({
        child_folder_name,
        sub_folder_id,
      });

      if (childFolderRes.length) {
        return {
          success: true,
          message: "Successfully folder created",
        };
      }

      return {
        success: false,
        message: "Cannot create folder at this moment",
      };
    });
  };
}

export default FolderService;
