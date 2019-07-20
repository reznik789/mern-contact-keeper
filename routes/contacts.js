const express = require('express');

const router = express.Router();

//@route    GET /api/contacts
//@descr    Get all user contacts
//@access   Private
router.get('/', (req, res) => {
  res.send('Get all user contacts... ');
})

//@route    POST /api/contacts
//@descr    Create new user contacts
//@access   Private
router.post('/', (req, res) => {
  res.send('Get all user contacts... ');
})

//@route    PUT /api/contacts
//@descr    Update contact by id
//@access   Private
router.put('/:id', (req, res) => {
  res.send('Update contact by id... ');
})

//@route    DELETE /api/contacts
//@descr    Delete contact by id
//@access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact by id... ');
})

module.exports = router;