require('./lib/connectdb')
const express = require('express')
const app = express()
const bodyParser = require('body-parser').json();
app.use(bodyParser)
const cors = require('cors');
const authenticate = require('./lib/authenticate');
const userRouter = require('./controllers/user.route');
const postRouter = require('./controllers/post.route');

// app.use((req,res,next)=>{
//     setTimeout(next,1000);
// })

app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Expose-Headers','token');
    next();
})
app.use('/user',userRouter);
app.use('/post',postRouter);
app.listen(3000,()=>{
    console.log('Server started!')
})
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers