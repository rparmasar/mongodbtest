const express = require('express')
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const uri = "mongodb+srv://test-admin:dlU8oNg0ZkIt5COZ@cluster0.cnswm.mongodb.net/prakash?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());

// Db name
const dbname = 'Preysal'

async function run() {
    try {
      // Connect the client to the server
      await client.connect();
      console.log("Connected successfully to server");
      const db = client.db(dbname);

      // Use "Cricketers" collection
      const collection = db.collection("Cricketers");

      app.post('/newcricketer', (req, res) =>{
        console.log(req.body);
        console.log("Reached Endpoint");
        res.status(200);
        res.send("Congrats");
      })

      // Insert document and wait for promise so we can view data
      const p = await collection.insertOne(persondoc);
      const myDoc = await collection.findOne();
      console.log(myDoc);


    } catch(err){
      console.log(err.stack);
    } 
    
    finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello World!');
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})