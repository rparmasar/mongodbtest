const express = require('express')
const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port = 3000

const uri = "mongodb+srv://test-admin:dlU8oNg0ZkIt5COZ@cluster0.cnswm.mongodb.net/prakash?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function run() {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ramsingh', (req, res) =>{
    res.send('Welcome to Ramsingh!')
    console.log('We got a visit to Ramsingh')



})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})