const express = require("express");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contact");

const router = express.Router();

//@route    GET /api/contacts
//@descr    Get all user contacts
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({
      user: req.user.id
    }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    POST /api/contacts
//@descr    Create new user contacts
//@access   Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, type, phone } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route    PUT /api/contacts
//@descr    Update contact by id
//@access   Private
router.put("/:id", (req, res) => {
  res.send("Update contact by id... ");
});

//@route    DELETE /api/contacts
//@descr    Delete contact by id
//@access   Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact by id... ");
});

module.exports = router;
