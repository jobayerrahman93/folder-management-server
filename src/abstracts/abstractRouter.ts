import { Router } from "express";
import InputValidator from "../common/middlewares/validator/inputValidator";

abstract class AbstractRouter {
  readonly routers = Router();
  public InputValidator = new InputValidator();
}

export default AbstractRouter;
