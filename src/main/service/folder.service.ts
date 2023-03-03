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
}

export default FolderService;
