import Router from "express";
import controller from "./authController.js";
import { check } from "express-validator";
const router = new Router();

router.post(
  "/registration",
  [
    check("username", "Ім'я користувача не може бути пустим").notEmpty(),
    check("password", "Пароль має бути більше 4 і менше 18 символів").isLength({
      min: 4,
      max: 18,
    }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);

export default router;
