require('dotenv').config();

const uri = process.env.MONGODB_URI;

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Connected to the database!');

  const collection = client.db('test').collection('students');

  collection.insertOne({
    name: 'John Doe',
    age: 25,
    grade: 'A'
  }, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Inserted ${result.insertedCount} documents into the collection`);

    collection.find({}).toArray((err, docs) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Found ${docs.length} documents in the collection`);
      console.log(docs);

      // Close the connection to the database after the find operation is complete
      client.close();
    });
  });
});
