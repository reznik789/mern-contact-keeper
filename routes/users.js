const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jenerateTokenByUser = require("../helpers/jwtHelper");

const User = require("../models/User");

//@route    POST /api/users
//@descr    Register a new user
//@access   Public
router.post(
  "/",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "Provide valid email").isEmail(),
    check(
      "password",
      "Please provide the password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        name,
        email
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const token = await jenerateTokenByUser(user);
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
