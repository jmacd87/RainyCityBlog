import express, { Request, Response, Router } from 'express';
import Post from '../models/Post';

const postsRouter: Router = express.Router();

// Create a post
postsRouter.post(
  '/create',
  async (req: Request, res: Response): Promise<void> => {
    const { id, title, date, author, storyText, imageUrl } = req.body;

    try {
      const newPost = await Post.create({
        id,
        title,
        date,
        author,
        storyText,
        imageUrl,
      });
      res.status(201).json(newPost);
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : 'Unknown error';
      res.status(500).json({ error: 'Error creating post', details: error });
    }
  }
);

// Get all posts
postsRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: 'Error fetching posts', details: error });
  }
});

// Get a single post by ID
postsRouter.get(
  '/:id',
  async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const { id } = req.params;
    console.log('Received ID:', id);

    try {
      const post = await Post.findOne({ id: parseInt(id, 10) }); // Check this type
      console.log('Query result:', post);

      if (!post) {
        res.status(404).json({ error: 'Post not found' });
        return;
      }

      res.status(200).json(post);
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : 'Unknown error';
      console.error('Error fetching post:', error);
      res.status(500).json({ error: 'Error fetching post', details: error });
    }
  }
);

export default postsRouter;
