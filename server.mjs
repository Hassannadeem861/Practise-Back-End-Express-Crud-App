
console.log("Hello World Server Silde Javascript");


import express from 'express';
import path from "path"
import apiv1Router from "./apiv1/index.mjs"
import apiv2Router from "./apiv2/index.mjs"


const app = express()
const __dirname = path.resolve();
app.use(express.json()); //body parse


// app.use(authRouter)
app.use("/api/v1/", apiv1Router)
app.use("/api/v2/", apiv2Router)


//    /static/vscode_windows,exe
// app.use("/static", express.static(path.join(__dirname, "static")))

app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})






// //Sir Inzamam Code
// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// const __dirname = path.resolve();

// import apiv1Router from './apiv1/index.mjs'
// import apiv2Router from './apiv2/index.mjs'


// const app = express();
// app.use(express.json()); // body parser
// // app.use(cors())



// app.use("/api/v1", apiv1Router)
// app.use("/api/v2", apiv2Router)



// //     /static/vscode_windows.exe
// app.use("/static", express.static(path.join(__dirname, 'static')))

// app.use(express.static(path.join(__dirname, 'public')))

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Example server listening on port ${PORT}`)
// })

