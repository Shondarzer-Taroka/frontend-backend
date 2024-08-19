const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 6699;
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASSWORD}@cluster0.kvtwtlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    let cardCollection = client.db('cardsDB').collection('card');

    // Create a card
    app.post('/cards', async (req, res, next) => {
      try {
        let { description, title, id } = req.body;
        if (!title || !description) {
          return res.status(400).send({ error: 'Title and description are required' });
        }
        let card = { _id: id, title, description };
        let result = await cardCollection.insertOne(card);
        res.status(201).send(result);
      } catch (error) {
        next(error);
      }
    });

    // Get all cards
    app.get('/cards', async (req, res, next) => {
      try {
        let result = await cardCollection.find().toArray();
        res.send(result);
      } catch (error) {
        next(error);
      }
    });

    // Get a specific card by title
    app.get('/cards/:title', async (req, res, next) => {
      try {
        let result = await cardCollection.findOne({ title: req.params.title });
        if (!result) {
          return res.status(404).send({ error: 'Card not found' });
        }
        res.send(result);
      } catch (error) {
        next(error);
      }
    });

    // Search cards by title
    app.get('/cardssearch', async (req, res, next) => {
      try {
        let searchQuery = req.query.search;
        let filter = searchQuery ? { title: { $regex: searchQuery, $options: 'i' } } : {};
        let result = await cardCollection.find(filter).toArray();
        res.send(result);
      } catch (error) {
        next(error);
      }
    });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}
run().catch(console.dir);

// Basic routes
app.get('/', (req, res) => {
  res.send('SERVER IS RUNNING');
});

app.get('/ping', (req, res) => {
  res.send('Server is running');
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});











