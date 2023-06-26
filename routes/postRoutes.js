const express = require("express");
const isLoggedin = require("../middleware/isLoggedin");
const { createPost, updatePost, deletePost } = require("../controllers/postController");
const router = express.Router()



router.route('/post/create').post(isLoggedin ,createPost)
router.route('/post/update/:id').post(isLoggedin ,updatePost)
router.route('/post/delete/:id').post(isLoggedin ,deletePost)






module.exports = router