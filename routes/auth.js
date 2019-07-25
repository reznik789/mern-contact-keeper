const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jenerateTokenByUser = require("../helpers/jwtHelper");
const auth = require('../middleware/auth');
const User = require("../models/User");

//@route    GET /api/auth
//@descr    Get logged user
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

//@route    POST /api/auth
//@descr    Auth user & get token
//@access   Public
router.post(
  "/",
  [
    check("email", "Please provide valiid email").isEmail(),
    check("password", "Password i required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const token = await jenerateTokenByUser(user);
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server error");
    }
  }
);

module.exports = router;
