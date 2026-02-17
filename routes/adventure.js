import express from 'express';
import path from 'path';
import { adventures } from '../data/data.js'

const router = express.Router();

const __dirname = path.resolve();

router.get('/', (req, res) => {
  const { budget } = req.query

  const filteredAdventures = adventures.filter(a => a.budget === req.query.budget);

  res.render(path.join(__dirname, 'views/pages/destination'), {
    title: 'Adventures',
    links: adventures,
    descriptions: ['Adventure travel is all about pushing boundaries, exploring nature, and embracing the unexpected.',
      'This section features destinations across Europe known for outdoor activities, dramatic landscapes, and unforgettable experiences.',
      'From mountain trekking and water sports to scenic road trips, these locations are ideal for travelers who enjoy movement, challenge, and exploration.'
    ],
    pageType: 'Adventure',
    filteredAdventures,
    budget
  })
})

router.get('/:id', (req, res) => {

  const selectedDestination = adventures.find(a => a.id === req.params.id);

  if (!selectedDestination) {
    return res.status(404).render(path.join(__dirname, 'views/pages/destination'), {
      error: true
    })
  }

  res.render(path.join(__dirname, 'views/pages/destination'), {
    links: adventures,
    destination: selectedDestination
  })
})

export default router;