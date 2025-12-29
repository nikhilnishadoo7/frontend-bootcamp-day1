const express = require('express');
const router = express.Router();
const {createPost} = require("../controller/createPost")
router.post('/create', createPost);

module.exports = router;
