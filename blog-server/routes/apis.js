const express = require('express');
const router = express.Router();

let  blogController = require('../controllers/postsController');
//let  saveController = require('../controllers/saveController');

//serve blog-posts
/* router.get('/posts', (req, res, next)=>{
    res.send('posts not yet defined!')
}); */

router.get('/posts', blogController.getPosts);


//save blog-posts
/* router.post('/save', (req, res, next)=>{
    res.send('yet implement save')
});
 */


 router.post('/save', blogController.savePost);

module.exports = router;
