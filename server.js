const MongoClient = require("mongodb").MongoClient;

const uri = 'mongodb+srv://camilaassuncao:8YogUN06Mwk2zdVS@cluster023.ajjfxpl.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });

const DbConnect = async () => {
  await client.connect();
  console.log("connected to DB");
};

DbConnect();

const collection = client.db('test').collection('students');

const studentData = {
  name: 'John Doe',
  age: 25,
  grade: 'A'
};

console.log('Inserting data into the collection...');

collection.insertOne(studentData, (err, result) => {
  if (err) {
    console.error('Error inserting data:', err);
    return;
  }

  console.log(`Inserted ${result.insertedCount} documents into the collection`);

  // Query data
  console.log('Querying data from the collection...');

  collection.find({}).toArray((err, docs) => {
    if (err) {
      console.error('Error querying data:', err);
      return;
    }

    console.log(`Found ${docs.length} documents in the collection`);
    console.log(docs);

    // Close the connection to the database
    client.close();
    console.log('Connection closed.');
  });
});

