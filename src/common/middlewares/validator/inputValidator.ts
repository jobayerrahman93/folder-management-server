import { body } from "express-validator";

class InputValidator {
  constructor() {}

  public folderCreateInputValidator() {
    return [body("folder_name", "Provide folder name").exists()];
  }
}

export default InputValidator;
