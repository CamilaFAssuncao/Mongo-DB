const { MongoClient } = require('mongodb');
const { UserModel, PostModel, CommentModel } = require('./models');

const uri = 'mongodb+srv://camilaassuncao:8YogUN06Mwk2zdVS@cluster023.ajjfxpl.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

async function insertSampleData() {
  const user = { name: 'John Doe', email: 'johndoe@example.com' };
  const userResult = await UserModel.create(user);

  const post = { user_id: userResult._id, content: 'Hello world!', created_at: new Date() };
  const postResult = await PostModel.create(post);

  const comment = { post_id: postResult._id, user_id: userResult._id, content: 'Nice post!', created_at: new Date() };
  await CommentModel.create(comment);

  console.log('Sample data inserted into collections.');
}

module.exports = {
  connectToDatabase,
  insertSampleData,
};
