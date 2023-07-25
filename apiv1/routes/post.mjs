//CHAT GPT CODE 

// MINI ROUTER  
import express from "express";
import { nanoid } from 'nanoid'
const router = express.Router()
const dateVar = JSON.stringify(new Date())
const result = dateVar.slice(0, 11)

// not recommended at all - server should be stateless
let posts = [
    {
        id: 98148,
        title: "Hassan_Nadeem",
        text: "I Have Done My Assignment"
    }
]

// Get request ke liye '/post/:postId' endpoint define kiya gaya hai
router.get("/post/:postId", (req, res, next) => {
    res.send("This is post" + new Date())
})

// Get request ke liye '/posts' endpoint define kiya gaya hai
router.get("/posts", (req, res, next) => {
    // Server se sabhi posts ko JSON format mein retrieve karke client ko send kiya jata hai
    res.send(`${JSON.stringify(posts)} `)
})

// Post request ke liye '/api/v1/post' endpoint define kiya gaya hai
router.post('/post', (req, res, next) => {
    // Yeh function new post create karne ke liye hai

    // Yadi request mein title ya text missing hai toh error message bheja jata hai
    if (!req.body.tittle || !req.body.text) {
        res.statas(403).res.send(`required parameters missing`)
        return;
    }

    // Post ko posts array ke shuru mein insert kiya jata hai
    posts.unshift({
        id: nanoid(),
        title: req.body.title,
        text: req.body.text,
    })

    res.send(`post Created at ${result}`)
});

// Put request ke liye '/api/v1/post/:userId/:postId' endpoint define kiya gaya hai
router.put('/post/:postId', (req, res, next) => {
    const id = req.params.postId

    // Yadi request mein title missing hai ya text present hai toh error message bheja jata hai
    if (req.body.title || !req.body.text) {
        res.status(403).send(`required parameter missing`);
        return;
    }

    // Post ko update karne ke liye postId ke saath match karke title aur text ko update kiya jata hai
    let isFound = false;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === id) {
            posts[i].title = req.body.title
            posts[i].text = req.body.text
            isFound = true;
            break;
        }
    }

    // Agar postId match nahi hota toh "Not Found" status code bheja jata hai
    if (isFound) {
        res.send("Post Updated successfully");
    } else {
        res.status(404).send("Not Found")
    }

    console.log(id);
});

// Delete request ke liye '/api/v1/post/:postId' endpoint define kiya gaya hai
router.delete('/post/:postId', (req, res, next) => {
    const id = req.params.postId

    console.log(id);

    let isFound = false;

    // Post ko delete karne ke liye postId ke saath match karke post ko remove kiya jata hai
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === id) {
            posts.splice(i, 1);
            res.send("Post deleted Successfully")
            isFound = true
            break;
        }
    }

    // Agar postId match nahi hota toh "Not Found" status code bheja jata hai
    if (isFound === false) {
        res.status(404);
        res.send({
            message: "delete fail: post not found",
        });
    }
});

export default router;

































































// // MINI ROUTER  
// import express from "express";
// import { nanoid } from 'nanoid'
// const router = express.Router()
// const dateVar = JSON.stringify(new Date())
// const result = dateVar.slice(0, 11)

// // not recommended at all - server should be stateless
// let posts = [

//     {
//         id: 98148,
//         title: "Hassan_Nadeem",
//         text: "I Have Done My Assignment"
//     }
// ]

// router.get("/post/:postId", (req, res, next) => {
//     res.send("This is post" + new Date())
// })

// router.get("/posts", (req, res, next) => {
//     res.send(`${JSON.stringify(posts)} `)
// })

// //POST     /api/v1/post
// router.post('/post', (req, res, next) => {
//     // console.log("This is create post!', new Date()");

//     if (!req.body.tittle || !req.body.text) {

//         res.status(403).res.send(`required parameters missing`)

//         return;
//     }

//     posts.unshift({

//         id: nanoid(),
//         title: req.body.title,
//         text: req.body.text,

//     })

//     res.send(`post Created at ${result}`)

// });



// //PUT /api/v1/post/:userId/:postId
// router.put('/post/:postId', (req, res, next) => {
//     const id = req.params.postId
//     if (req.body.title || !req.body.text) {
//         res.status(403).send(`required parameter missing`);
//         return;

//          }
//         let isFound = false;
//         for (let i = 0; i < posts.length; i++) {
//             if (posts[i].id === id) {
//                 posts[i].title = req.body.title
//                 posts[i].text = req.body.text
//                 isFound = true;
//                 break;
//             }
//         }

//         if(isFound){
//             res.send("Post Updated successfully");
//         }else{
//             res.status(404).send("Not Found")
//         }

//         console.log(id);
//     });


// router.delete('/post/:postId', (req, res, next) => {

//    const id = req.params.postId

//    console.log(id);

//    let isFound = false;

//    for(let i = 0; i < posts.length; i++){

//     if(posts[i].id === id){
//         posts.splice(i,1);
//         res.send("Post deleted Successfully")
//         isFound = true
//         break;
//     }

//    }

//    if(isFound === false){

//     res.status(404);
//     res.send({
//         message: "delete fail: post not found",
//     });

//    }

// });

// export default router;



