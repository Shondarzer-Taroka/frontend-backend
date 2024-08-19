
let express=require('express')
let cors=require('cors')
let port=process.env.PORT || 6699
require('dotenv').config()
let app=express()
app.use(express.json())
app.use(cors())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASSWORD}@cluster0.kvtwtlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri,  {
 
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    let cardCollection=client.db('cardsDB').collection('card')
    app.post('/cards',async(req,res)=>{
        let {description,title,id}=req.body
        let card={_id:id,title,description}
        let result=await cardCollection.insertOne(card)
        res.send(result)
        console.log(card);
    })

    app.get('/cards',async(req,res)=>{
        let result=await cardCollection.find().toArray()
        res.send(result)
    })

    app.get('/cards/:title',async(req,res)=>{
        let result =await cardCollection.findOne({title:req.params.title})
        res.send(result)
    })

    // app.get('/cardssearch',async(req,res)=>{
    //   let searchQuery=req.query.search
    //   console.log(searchQuery);
      
    //   let filter= searchQuery? {title:{$regex:searchQuery, $options:'i'}}:{}
    //   let result=await cardCollection.find(filter).toArray()
    //   res.send(result)
    // })
    // Send a ping to confirm a successful connection 
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

 

app.get('/',(req,res)=>{
    res.send('SERVER IS RUNNING')
    
})

app.listen(port,(req,res)=>{
    console.log(`server in PORT:${port}`);
})
















