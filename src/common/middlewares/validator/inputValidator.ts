import { body, param } from "express-validator";

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

  public childFolderCreateInputValidator() {
    return [
      body("sub_folder_id", "Provide sub folder id").exists(),
      body("child_folder_name", "Provide child folder name").exists(),
    ];
  }
  public singleParamInputValidator(id: string, message: string) {
    return [param(id, message).exists()];
  }
}

export default InputValidator;
