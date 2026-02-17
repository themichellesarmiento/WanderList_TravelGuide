import express from 'express';
import path from 'path';

const router = express.Router();

const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views/pages/destination'), {
    title: 'Welcome to WanderList',
    descriptions:['Your personal guide to meaningful travel experiences across Europe.',
      'WanderList helps you explore destinations based on how you want to travel. Whether you’re seeking thrilling adventures, deep cultural experiences, or peaceful escapes to unwind.',
      'Browse by category, explore individual destinations, and start building your next journey — one experience at a time.'
    ],
    pageType: 'Home'
  })
})

export default router;