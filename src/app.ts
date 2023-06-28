import {Collection, ServerApiVersion, MongoClient, Document, ObjectId} from "mongodb";
import {ReminderRepository, TaskEntity} from "./mongodb/reminder";

// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://myUserAdmin:hola@localhost:27017/";
// const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri,  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  }
);




async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const taskCollection  = client.db("todo").collection<TaskEntity>("tasks")

    const aTask:TaskEntity = {
      name: 'comprar pollo',
      //description: 'test44',
      remindAt: new Date(),
      startAt: new Date(),
      remindMe: true,
      color: {
        name: 'back',
        hex: '#000'
      },
      // _id: ObjectId.createFromHexString('6493cc6d3b1f9c572960ab8b')
    }

    const repo = new ReminderRepository(taskCollection)
    // const id = await repo.save(aTask)
    // console.log('id', id)
    const len = await taskCollection.countDocuments()
    console.log('len', len)
    await repo.findBy('asd')
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);