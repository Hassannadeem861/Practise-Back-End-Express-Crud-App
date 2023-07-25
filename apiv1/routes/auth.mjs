

            // MINI ROUTER  
import express from "express";
let router = express.Router()
// export const  a  = express.Router()
// export const  b  = express.Router()

router.post('/login', (req, res, next) => {
    console.log('This is login!', new Date());
    res.send('This is login v1' + new Date())
}) 

router.post('/signup', (req, res, next) => {
    console.log('This is signup!', new Date());
    res.send('This is signup v1!' + new Date())
})

export default router





// import express from 'express';
// let router = express.Router()



// router.post('/login', (req, res, next) => {
//     console.log('this is login!', new Date());
//     res.send('this is login v1' + new Date());
// })
// router.post('/signup', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('this is signup v1' + new Date());
// })


// export default router








//sir 

// import express from 'express';
// // let router = express.Router()



// router.post('/login', (req, res, next) => {
//     console.log('this is login!', new Date());
//     res.send('this is login v1' + new Date());
// })
// router.post('/signup', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('this is signup v1' + new Date());
// })


// // export default router



