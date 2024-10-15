import User from "./models/User.js";
import Role from "./models/Role.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import secret from "./config.js";

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Помилка при реєстрації", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        res.status(400).json({ message: "Користувач з таким ім'ям вже існує" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({ message: "Користувач успішно зареєстрований" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user)
        return res
          .status(400)
          .json({ message: `Користувача ${username} не знайдено` });
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword)
        return res
          .status(400)
          .json({ message: `Користувача ${username} не знайдено` });
      const token = generateAccessToken(user._id, user.roles);
      return res.json({ token });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Login error" });
    }
  }
  async getUsers(req, res) {
    const users = await User.find();
    res.json(users);
    try {
      res.json("server works");
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthController();
