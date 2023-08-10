const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  user_id: mongoose.Types.ObjectId,
  content: String,
  created_at: Date,
});

const commentSchema = new mongoose.Schema({
  post_id: mongoose.Types.ObjectId,
  user_id: mongoose.Types.ObjectId,
  content: String,
  created_at: Date,
});

const UserModel = mongoose.model('User', userSchema);
const PostModel = mongoose.model('Post', postSchema);
const CommentModel = mongoose.model('Comment', commentSchema);

module.exports = {
  UserModel,
  PostModel,
  CommentModel,
};
