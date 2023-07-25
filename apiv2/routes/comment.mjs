
       // MINI ROUTER  
 import express from "express";
 let router = express.Router()


//GET /api/v1/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
    
    res.send('This is v2 comment' + new Date())

})

//GET /api/v1/comments/:postId
router.get('/comments/:postId', (req, res, next) => {
    
    res.send('This is post comments v2' + new Date())

})

//PUT  /api/v1/comment/:postId/:commentId
router.put('/comment/:postId/:commentId', (req, res, next) => {
    
    res.send('Comment Updated v2' + new Date())

})

//DELETE /api/v1/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    
    res.send('Comment Deleted v2' + new Date())

})

export default router




// import express from 'express';
// let router = express.Router()

// // GET     /api/v1/comment/:postId/:commentId
// router.get('/comment/:postId/:commentId', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
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






