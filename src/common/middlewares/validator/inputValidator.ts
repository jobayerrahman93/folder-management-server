import { body } from "express-validator";

class InputValidator {
  constructor() {}

  public folderCreateInputValidator() {
    return [body("folder_name", "Provide folder name").exists()];
  }
  public subFolderCreateInputValidator() {
    return [
      body("folder_id", "Provide parent folder id").exists(),
      body("sub_folder_name", "Provide sub folder name").exists(),
    ];
  }
}

export default InputValidator;
