
       // MINI ROUTER  
 import express from "express";
 let router = express.Router()


//GET /api/v1/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
    console.log("This is comment!', new Date()");
    res.send('This is comment' + new Date())
    // console.log(req.params)

})

//GET /api/v1/comments/:postId
router.get('/comments/:postId', (req, res, next) => {
    // console.log("This is signup!', new Date()");
    res.send('This is post comments' + new Date())

})

//PUT  /api/v1/comment/:postId/:commentId
router.put('/comment/:postId/:commentId', (req, res, next) => {
    // console.log("This is signup!', new Date()");
    res.send('Comment updated' + new Date())

})

//DELETE /api/v1/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    // console.log("This is signup!', new Date()");
    res.send('Comment Deleted' + new Date())

})

export default router


// import express from 'express';
// let router = express.Router()

// // GET     /api/v1/comment/:postId/:commentId
// router.get('/comment/:postId/:commentId', (req, res, next) => {

//     console.log(req.params)

//     console.log('this is signup!', new Date());
//     res.send('all comments is here');
// })
// // GET     /api/v1/comments/:postId
// router.get('/comments/:postId', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
// })
// // PUT     /api/v1/comment/:postId/:commentId
// router.put('/comment/:postId/:commentId', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
// })
// // DELETE  /api/v1/comment/:postId/:commentId
// router.delete('/comment/:postId/:commentId', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
// })

// export default router










