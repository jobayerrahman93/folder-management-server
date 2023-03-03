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

  // get all folder service
  public getAllFolderService = async (req: Request) => {
    const data = await this.db("folders").select("folder_id", "folder_name");

    return {
      success: true,
      data,
    };
  };

  // get all sub folder service
  public getAllSubFolderService = async (req: Request) => {
    const { parentId } = req.params;
    const data = await this.db("sub_folders AS sf")
      .select(
        "sf.sub_folder_id",
        "sf.sub_folder_name",
        "sf.folder_id",
        "f.folder_name"
      )
      .join("folders AS f", "sf.folder_id", "f.folder_id")
      .where("f.folder_id", parentId);

    return {
      success: true,
      data,
    };
  };

  // get all child folder service
  public getAllChildFolderService = async (req: Request) => {
    const { subId } = req.params;
    const data = await this.db("child_folders AS cf")
      .select(
        "sf.sub_folder_id",
        "sf.sub_folder_name",
        "cf.child_folder_id",
        "cf.child_folder_name"
      )
      .join("sub_folders AS sf", "cf.sub_folder_id", "sf.sub_folder_id")
      .where("cf.sub_folder_id", subId);

    return {
      success: true,
      data,
    };
  };

  // delete a folder service
  public deleteFolderService = async (req: Request) => {
    const { folderId } = req.params;

    const checkChildFolder = await this.db("child_folders AS cf")
      .select("cf.sub_folder_id", "sf.folder_id")
      .join("sub_folders AS sf", "cf.sub_folder_id", "sf.sub_folder_id")
      .where("sf.folder_id", folderId);

    if (checkChildFolder.length) {
      const childFolderRes = await this.db("child_folders")
        .where("sub_folder_id", checkChildFolder[0].sub_folder_id)
        .del();
    }

    const subFolderRes = await this.db("sub_folders")
      .where("folder_id", folderId)
      .del();

    const res = await this.db("folders").where("folder_id", folderId).del();

    if (res) {
      return {
        success: true,
        message: "Successfully folder deleted",
      };
    }

    return {
      success: false,
      message: "Cannot folder delete at this moment",
    };
  };

  // delete sub folder service
  public deleteSubFolderService = async (req: Request) => {
    const { subFolderId } = req.params;

    const checkChildFolderWithSubId = await this.db("child_folders AS cf")
      .select("cf.sub_folder_id", "sf.folder_id")
      .join("sub_folders AS sf", "cf.sub_folder_id", "sf.sub_folder_id")
      .where("sf.sub_folder_id", subFolderId);

    if (checkChildFolderWithSubId.length) {
      const childFolderRes = await this.db("child_folders")
        .where("sub_folder_id", checkChildFolderWithSubId[0].sub_folder_id)
        .del();
    }

    const res = await this.db("sub_folders")
      .where("sub_folder_id", subFolderId)
      .del();

    console.log(res);

    if (res) {
      return {
        success: true,
        message: "Successfully sub folder deleted",
      };
    }

    return {
      success: false,
      message: "Cannot sub folder delete at this moment",
    };
  };
}

export default FolderService;
