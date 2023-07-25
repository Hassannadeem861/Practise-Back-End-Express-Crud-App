
//import Statements: Ye code ES Modules syntax ka use kar raha hai jisme humne import statement se express package ko import kiya hai aur authRouter, commentRouter, feedRouter, aur postRouter ko dusre files se import kiya hai. Ye syntax Node.js version 14 se shuru hokar available hai, isliye is code ko version 14 ya usse upar ke Node.js version mein run karna chahiye.

//express.Router(): express.Router() ek function hai jo Express.js mein ek naya router instance create karta hai. Router instances endpoints ke liye middleware aur request handlers ko group karne mein madad karte hain. Yahaan pe router ek aisa instance hai jisse hum endpoints ko group kar rahe hain.

//router.use(): router.use() function endpoints ke liye middleware ko add karne ke liye use hota hai. Is code mein router.use() statements ka use kiya gaya hai authRouter, commentRouter, feedRouter, aur postRouter ko endpoints ke liye set karne ke liye.

//authRouter, commentRouter, feedRouter, aur postRouter: Ye sabhi router instances hai jo alag-alag files (auth.mjs, comment.mjs, feed.mjs, post.mjs) mein define kiye gaye hain. Har ek router alag type ke endpoints ke liye responsible hoga.

//Jaise ki code ka maqsad hai alag-alag modules ko ek main router mein include kar ke final API ko manage karna. Is tareeke se code maintainable aur organized rahta hai.

//Overall, ye code sahi tarah se Express.js mein routes ko organize karne ke liye ek achha approach hai. Isko aap apne Node.js project mein use kar sakte hain.


// MINI ROUTER  
import express from "express";
let router = express.Router()

import authRouter from './auth.mjs';
import commentRouter from './comment.mjs';
import feedRouter from './feed.mjs';
import postRouter from './post.mjs';

// /api/v1/
router.use(authRouter)


router.use(commentRouter)
router.use(postRouter)
router.use(feedRouter)

export default router;








// import express from 'express';
// let router = express.Router()
// import authRouter from './routes/auth.mjs'
// import commentRouter from './routes/comment.mjs'
// import feedRouter from './routes/feed.mjs'
// import postRouter from './routes/post.mjs'


// // /api/v1/
// router.use(authRouter)


// router.use((req, res, next) => {
//     const token = "valid"
//     if (token === "valid") {
//         next();
//     } else {
//         res.status(401).send({ message: "invalid token" })
//     }
// })

// router.use(commentRouter)
// router.use(postRouter)
// router.use(feedRouter)


// router.post("/weather", (req, res, next) => {

//     console.log("req.body: ", req.body);


//     // res.send("weather is normal"); // not recommended

//     res.send({
//         message: "weather is normal",
//         apiVersion: "v1",
//         temp: 32,
//         min: 20,
//     });
// })

// export default router




// {/* <video loop="" autoplay="" src="/weatherBootstrap/static/media/cloudy.195d4a0f.mp4"></video> */}