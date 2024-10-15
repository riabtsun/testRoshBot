const Router = require("express");
const controller = require("./authController.js");
const { check } = require("express-validator");
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

module.exports = router;
