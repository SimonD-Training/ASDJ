const express = require('express');
const morgan = require('morgan');
const { createImportSpecifier } = require('typescript');
const studentRouter = require('./routes/studentRoute');
// const userRouter = require('./routes/user-route');
const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());


exports.checkMiddleWareData =  ((req, res, next)=>{
  if (req.body.email == null  || req.body.name == null) {
    console.log('error')
   res.status(400).status ({
    status: 'fail',
    message: 'invalid Field'
   })
   next();


  } else {
     console.log("YOU PASS!")
     next();
  }

  });
// app.use((req, res, next) =>{
//   console.log('[ANGULAR-APP3.1] - User Created Middleware!!');
//   next();
// })


// app.post( '/', checkMiddleWareData);


app.use((req, res, next) =>{
  switch (req.method){
    case 'DELETE':
        console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[31m${req.method}\x1b[0m - ${req.path}`);
      break;
    case 'PUT':
        console.log(`\x1b[44m\x1b[4m[ANGULAR-APP3.1]\x1b[0m - \x1b[32m${req.method}\x1b[0m - ${req.path}`);
      break;
    case 'PATCH':
      console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[34m${req.method}\x1b[0m - ${req.path}`);
      break;
    case 'POST':
      console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[33m${req.method}\x1b[0m - ${req.path}`);
      break;
    case 'GET':
      console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[35m${req.method}\x1b[0m - ${req.path}`);
      break;
    default:
      console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[35m${req.method}\x1b[0m - ${req.path}`);
  }
  next();
})





// 2) ROUTES
    app.use('/api/v1/students',studentRouter);
    // app.use('/api/v1/users',userRouter);

module.exports = app;
