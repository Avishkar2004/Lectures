Check Mongo db is running :-

"mongosh" is cmd

i need package to connect mongodb which is "mongoose"

we have Schema :- define the str
 using schema we make model
 using model we do CRUD operation

const mongoosh = require("mongoose");
//connection with mongodb
mongoosh.connect('mongodb://127.0.0.1:27017/avishkar').then(() => {
  console.log("Mongo Db Connected")
}).catch((err) => console.log("Mongo Error", err))

//Schema
const userSchema = new mongoosh.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  job_title:{
    type : String,
  },
  gender: {
    type : String
  }
});

//this is a model
const User = mongoosh.model('user', userSchema)



then you will see in database 

avishkar :-database has been created
users : table has been created


app.post("/api/users", async (req, res) => {
  //jo bhi hum front end se send karte hai na vo is body main available hota hai
  const body = req.body;
  //if user dont send email or something then we have to return bad req
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All Field Are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    Email: body.email,
    Gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ msg: "Succes" });
});

go to the postman send req :-



find in cmd :-
 db.users.find({})

 {
  firstName: 'Avishkar',
  lastName: 'kakde',
  Email: 'avishkar@gmail.com',
  jobTitle: 'Software Developer',
  Gender: 'male',
  _id: new ObjectId('65c44fa5dd07cdbe9778370b'),
  __v: 0
}



if you are getting this errro :-

 throw new error_1.MongoServerError(res.writeErrors[0]);
                  ^

MongoServerError: E11000 duplicate key error collection: avishkar.users index: email_1 dup key: { email: null }
    at InsertOneOperation.execute (C:\Users\avish\VS Code\Lectures\Node Js Lectures\9. Connecting NodeJS with MongoDB\node_modules\mongodb\lib\operations\insert.js:48:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async executeOperationAsync (C:\Users\avish\VS Code\Lectures\Node Js Lectures\9. Connecting NodeJS with MongoDB\node_modules\mongodb\lib\operations\execute_operation.js:106:16) {   
  index: 0,
  code: 11000,
  keyPattern: { email: 1 },
  keyValue: { email: null },
  [Symbol(errorLabels)]: Set(0) {}
}

you have to use smallcases in Schema