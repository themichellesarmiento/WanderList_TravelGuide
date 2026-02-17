import express from 'express';
import path from 'path';
import { cultures } from '../data/data.js';

const router = express.Router();

const __dirname = path.resolve();

router.get('/', (req, res) => {
  const { budget } = req.query

  const filteredAdventures = cultures.filter(a => a.budget === budget);

  res.render(path.join(__dirname, 'views/pages/destination'), {
    title: 'Cultures',
    links: cultures,
    descriptions: ['Cultural travel focuses on history, traditions, art, and everyday life.',
      'In this section, you’ll find destinations rich in heritage, architecture, and local identity. These places offer opportunities to explore museums, historic streets, cultural landmarks, and authentic local experiences that connect you to Europe’s past and present.'
    ],
    pageType: 'Culture',
    filteredAdventures,
    budget
  })
})

router.get('/:id', (req, res) => {

  const selectedDestination = cultures.find(a => a.id === req.params.id);

  if (!selectedDestination) {
    return res.status(404).render(path.join(__dirname, 'views/pages/destination'), {
      error: true
    })
  }

  res.render(path.join(__dirname, 'views/pages/destination'), {
    links: cultures,
    destination: selectedDestination
  })
})

export default router;