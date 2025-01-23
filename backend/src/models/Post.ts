import mongoose from 'mongoose';

const storyTextItemSchema = new mongoose.Schema({
  content: { type: String, required: true },
  title: { type: String },
  quote: { type: String },
});

const postSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  storyText: { type: [storyTextItemSchema], required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.model('Post', postSchema, 'posts');
