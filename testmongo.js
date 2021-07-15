const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ayonrakib:password1234@cluster0.54ijf.mongodb.net/CRM?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
      var collection = client.db('CRM').collection('employee');
      console.log(collection);
      var cursor = await collection.find({});
      await cursor.forEach(console.dir);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
run().catch(console.dir);

// 1. forEach((item) => {console.log(item)})
// 2. loop1:
//      1. (item) => {console.log(item)}
//      2. 

// 1. forEach(console.log)
// 2. loop1:
//      1. console.log

// abcd((item) => {console.log(item)})
// input: (item) => {console.log(item)}
//      1. ...

// function add(1,b){
    // return a+b;
// }
// a = 5, b= 5
// add(a+b,20)
// 1. input = a + b
// 