import express from 'express';
import path from 'path';
import { relaxations } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  const { budget } = req.query

  const filteredAdventures = relaxations.filter(a => a.budget === budget);

  res.render(path.join(__dirname, 'views/pages/destination'), {
    title: 'Relaxation',
    links: relaxations,
    descriptions: ['Sometimes the best travel experience is slowing down. The relaxation section highlights destinations designed for rest, comfort, and calm.',
      'From peaceful lakes and coastal towns to spa retreats and quiet countryside escapes, these locations are perfect for travelers looking to recharge, unwind, and enjoy a slower pace of life.'
    ],
    pageType: 'Relaxation',
    filteredAdventures,
    budget

  })
})

router.get('/:id', (req, res) => {
  const selectedDestination = relaxations.find(a => a.id === req.params.id);

  if (!selectedDestination) {
    return res.status(404).render(path.join(__dirname, 'views/pages/destination'), {
      error: true
    })
  }

  res.render(path.join(__dirname, 'views/pages/destination'), {
    links: relaxations,
    destination: selectedDestination

  })
})

export default router;