
// MINI ROUTER  
import express from "express";
import { nanoid } from 'nanoid'
const router = express.Router()

// not recommended at all - server should be stateless
let posts = [

    {
        id: 98148,
        title: "Hassan_Nadeem",
        text: "I Have Done My Assignment"
    }
]

router.get("/post/:postId", (req, res, next) => {
    res.send("This is post" + new Date())
})

router.get("/posts", (req, res, next) => {
    res.send(`${JSON.stringify(posts)} `)
})

//POST     /api/v1/post
router.post('/post', (req, res, next) => {
    // console.log("This is create post!', new Date()");

    if (!req.body.tittle || !req.body.text) {

        res.statas(403).res.send(`required parameters missing`)

        return;
    }

    posts.push({

        id: nanoid(),
        title: req.body.title,
        text: req.body.text,

    })

    res.send(`post Created ${new Date()}`)

});



//PUT /api/v1/post/:userId/:postId
router.put('/post/:postId', (req, res, next) => {
    const id = req.params.postId
    if (req.body.title || !req.body.text) {
        res.status(403).send(`required parameter missing`);
        return;
         
         }
        let isFound = false;
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                posts[i].title = req.body.title
                posts[i].text = req.body.text
                isFound = true;
                break;
            }
        }
 
        if(isFound){
            res.send("Post IUpdated successfully");
        }else{
            res.status(404).send("Not Found")
        }
   
        console.log(id);
    });


router.delete('/post/:postId', (req, res, next) => {
   
   const id = req.params.postId

   console.log(id);

   let isFound = false;

   for(let i = 0; i < posts.length; i++){

    if(post[i].id === id){
        posts.splice(i,1);
        res.send("Post deleted Successfully")
        isFound = true
        break;
    }

   }

   if(isFound === false){

    res.status(404);
    res.send({
        message: "delete fail: post not found",
    });

   }

});

export default router;
   



// //GET ALL POSTS    /api/v1/posts
// router.get('/posts', (req, res, next) => {
//     console.log("This is get all posts!', new Date()");
//     res.send(posts);

// })


// //GET /api/v1/post/:userId
// router.get('/post/:postId', (req, res, next) => {
//     console.log("This is get post by id!', new Date()");

//     if (isNaN(req.params.postId)) {
//         res.status(403)
//             .send

//             (`post id must be a valid number, no alphabet is allowed in post id`)
//     }

//     for (let i = 0; i < posts.length; i++) {
//         if (posts[i].id == (req.params.postId)) {
//             res.send(posts[i]);
//             return;
//         }
//     }




//     res.send('post not found with id' + req.params.postId);

// })




// export default router







// Iss code mein kuch problems hain:

// "tittle" spelling mistake: Har jagah "tittle" ki jagah "title" hona chahiye.

// Unnecessary return: Create post karne wale function mein return; statement likha hua hai jo create post karne se pehle hi function ko return kar deta hai, jiski wajah se post add nahi ho pata.

// NaN ki spelling mistake: isNAN ki jagah isNaN hona chahiye.

// Post id match condition: Post id ko check karne ke liye for loop mein === ki jagah == hona chahiye kyunki posts[i].id string type hai aur req.params.postId number type hai.

// Unnecessary logs: Console logs mein "this is signup!" likha hua hai jo correct nahi lagta, ye logs ko sahi kar dena chahiye.


// //CHATGPT CODE
// import express from "express";
// import { nanoid } from 'nanoid'
// let router = express.Router()

// let posts = [
//     {
//         id: nanoid(),
//         title: "Hassan_Nadeem",
//         text: "I Have Done My Assignment"
//     }
// ]

// // POST     /api/v1/post
// router.post('/post', (req, res, next) => {
//     console.log("This is create post!", new Date());

//     if (!req.body.title || !req.body.text) {
//         res.status(403);
//         res.send(`required parameters missing,
//         example request body:
//         {
//             title: "abc post title",
//             text: "some post text"
//         }`);
//         return;
//     }

//     posts.push({
//         id: nanoid(),
//         title: req.body.title,
//         text: req.body.text,
//     })

//     res.send('post created');
// })

// // GET     /api/v1/posts
// router.get('/posts', (req, res, next) => {
//     console.log("This is get all posts!", new Date());
//     res.send(posts);
// })

// // GET     /api/v1/post/:userId
// router.get('/post/:postId', (req, res, next) => {
//     console.log("This is get post by id!", new Date());

//     if (isNaN(req.params.postId)) {
//         res.status(403).send(`post id must be a valid number, no alphabet is allowed in post id`)
//     }

//     for (let i = 0; i < posts.length; i++) {
//         if (posts[i].id == req.params.postId) {
//             res.send(posts[i]);
//             return;
//         }
//     }

//     res.send('post not found with id ' + req.params.postId);
// })

// // PUT     /api/v1/post/:userId/:postId
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

//Ab code mein spelling mistakes sahi hain aur unnecessary
//return statements bhi remove kar diye gaye hain.
// Logs ko bhi sahi kiya gaya hai.





















// import express from 'express';
// import { nanoid } from 'nanoid'
// let router = express.Router()

// // not recommended at all - server should be stateless
// let posts = [
//     {
//         id: nanoid(),
//         title: "abc post title",
//         text: "some post text"
//     }
// ]

// // POST    /api/v1/post
// router.post('/post', (req, res, next) => {
//     console.log('this is signup!', new Date());

//     if (
//         !req.body.title
//         || !req.body.text
//     ) {
//         res.status(403);
//         res.send(`required parameters missing,
//         example request body:
//         {
//             title: "abc post title",
//             text: "some post text"
//         } `);
//         return;
//     }

//     posts.push({
//         id: nanoid(),
//         title: req.body.title,
//         text: req.body.text,
//     })

//     res.send('post created');
// })
// // GET     /api/v1/posts
// router.get('/posts', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send(posts);
// })

// // GET     /api/v1/post/:userId
// router.get('/post/:postId', (req, res, next) => {
//     console.log('this is signup!', new Date());

//     if (isNaN(req.params.postId)) {
//         res.status(403).send(`post id must be a valid number, no alphabet is allowed in post id`)
//     }

//     for (let i = 0; i < posts.length; i++) {
//         if (posts[i].id === Number(req.params.postId)) {
//             res.send(posts[i]);
//             return;
//         }
//     }
//     res.send('post not found with id ' + req.params.postId);
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
