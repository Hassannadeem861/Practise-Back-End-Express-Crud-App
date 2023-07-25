
//CHAT GPT CODE 

// express package ko import karen
const express = require('express');

// ek router instance create karen
const router = express.Router();

// 'login' endpoint ke liye GET request handler
router.get('/login', (req, res, next) => {
    console.log('Ye login endpoint hai!', new Date());
    res.send('Ye login endpoint hai! ' + new Date());
});

// 'signup' endpoint ke liye POST request handler
router.post('/signup', (req, res, next) => {
    console.log('Ye signup endpoint hai!', new Date());
    res.send('Ye signup endpoint hai! ' + new Date());
});

// router ko export karen
module.exports = router;













            // MINI ROUTER  
// import express from "express";
// let router = express.Router()
// // export const  a  = express.Router()
// // export const  b  = express.Router()

// router.get('/login', (req, res, next) => {
//     console.log('This is login!', new Date());
//     res.send('This is login v2!' + new Date())
// }) 

// router.post('/signup', (req, res, next) => {
//     console.log('This is signup!', new Date());
//     res.send('This is signup! v2' + new Date())
// })

// export default router



// import express from 'express';
// let router = express.Router()



// router.post('/login', (req, res, next) => {
//     console.log('this is login!', new Date());
//     res.send('this is login v2' + new Date());
// })
// router.post('/signup', (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('this is signup v2' + new Date());
// })


// export default router




