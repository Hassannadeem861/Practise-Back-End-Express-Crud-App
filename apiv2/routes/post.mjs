

import express from "express";
const router = express.Router()

// GET  /api/v1/post/:userId/:postId
router.get('/post/:userId/:postId', (req, res, next) => {
   
    res.send("This is post v2" + new Date());
});
    
    
// GET /api/v1/posts/:userId
router.get('/posts/:userId', (req, res, next) => {
    
    res.send(`This is user posts v2 ${new Date()}`);
});

    
// POST /api/v1/post
router.post('/post', (req, res, next) => {
   
    res.send(`Post Created V2 ${new Date()}`);
});
    
   
    

// PUT /api/v1/post/:userId/:postId
router.put('/post/:userId/:postId', (req, res, next) => {
   
    res.send("post Udated v2" + new Date());
});
    
// DELETE  /api/v1/post/:userId/:postId
router.delete('/post/:userId/:postId', (req, res, next) => {
   
    res.send("Post Deleted V2" + new Date());
});

export default router;











// import express from "express";
// let router = express.Router()

// // GET  /api/v1/post/:userId/:postId
// router.get('/post/:userId/:postId', (req, res, next) => {
//     console.log("This is get post by user id and post id!", new Date());
//     res.send('post details will be sent');
// })

// // GET /api/v1/posts/:userId
// router.get('/posts/:userId', (req, res, next) => {
//     console.log("This is get all posts by user id!", new Date());
//     res.send('all posts of the user will be sent');
// })

// // POST /api/v1/post
// router.post('/post', (req, res, next) => {
//     console.log("This is create post!", new Date());
//     res.send('post created');
// })

// // PUT /api/v1/post/:userId/:postId
// router.put('/post/:userId/:postId', (req, res, next) => {
//     console.log("This is update post!", new Date());
//     res.send('post updated');
// })

// // DELETE  /api/v1/post/:userId/:postId
// router.delete('/post/:userId/:postId', (req, res, next) => {
//     console.log("This is delete post!", new Date());
//     res.send('post deleted');
// })

// export default router



//  // MINI ROUTER  
//  import express from "express";
// let router = express.Router()

// //GET  /api/v1/post/:userId/:postId
// router.get('/post/:userId/:postId', (req, res, next) => {
//     console.log("This is signup!', new Date()");
//     res.send('post created')

// })

// //GET /api/v1/posts/:userId
// router.get('/posts/:userId', (req, res, next) => {
//     console.log("This is signup!', new Date()");
//     res.send('post created')

// })

// //POST /api/v1/post
// router.post('/post', (req, res, next) => {
//     console.log("This is signup!', new Date()");
//     res.send('post created')

// })

// //PUT /api/v1/post/:userId/:postId
// router.put('/post/:userId/:postId', (req, res, next) => {
//     console.log("This is signup!', new Date()");
//     res.send('post created')

// })

// //DELETE  /api/v1/post/:userId/:postId
// router.delete('/post/:userId/:postId', (req, res, next) => {
//     console.log("This is signup!', new Date()");
//     res.send('post created')

// })

// export default router



// import express from 'express';
// let router = express.Router()




// // GET     /api/v1/post/:userId/:postId
// router.get('/post/:userId/:postId', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
// })
// // GET     /api/v1/posts/:userId
// router.get('/posts/:userId', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
// })
// // POST    /api/v1/post
// router.post('/post', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
// })
// // PUT     /api/v1/post/:userId/:postId
// router.put('/post/:userId/:postId', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
// })
// // DELETE  /api/v1/post/:userId/:postId
// router.delete('/post/:userId/:postId', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('post created');
// })

// export default router
