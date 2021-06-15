const { Router } = require('express');
const memeService = require('../services/memeService');
const { isAuth } = require('../middlewares/auth');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const cubes = await memeService.getAll();
    res.status(200).json(cubes);
  } catch (err) {
    res.status(403).json({ error: { message: err } });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const cube = await memeService.getById(id);
    res.status(200).json(cube);
  } catch (err) {
    res.status(403).json({ error: { message: err } });
  }
});

router.get('/owner/:ownerId', async (req, res) => {
  const ownerId = req.params.ownerId;

  try {
    const cubes = await memeService.getByOwnerId(ownerId);
    res.status(200).json(cubes);
  } catch (err) {
    res.status(403).json({ error: { message: err } });
  }
});

router.post('/', isAuth, async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    if (
        title.trim() == '' ||
        description.trim() == '' ||
        imageUrl.trim() == ''
      ) {
        throw { error: { message: 'All fields is required' } };
      }

    const meme = await memeService.create({
      title,
      description,
      imageUrl,
      createdBy: req.user._id,
    });

    res.status(201).json({ _id: meme._id });
  } catch (err) {
    res.status(404).json({ error: { message: err } });
  }
});

router.put('/:id', isAuth, async (req, res) => {
  const { title, description, imageUrl } = req.body;
  const id = req.params.id;

  try {
    if (
      title.trim() == '' ||
      description.trim() == '' ||
      imageUrl.trim() == ''
    ) {
      throw { error: { message: 'All fields is required' } };
    }

    const meme = await memeService.edit(id, {
      title,
      description,
      imageUrl,
    });
    res.status(200).json({
      ok: meme.ok,
      message: 'resource updated successfully',
    });
  } catch (err) {
    res.status(403).json({ error: { message: err } });
  }
});

router.delete('/:id', isAuth, async (req, res) => {
  const id = req.params.id;

  try {
    const meme = await memeService.del(id);
    res.status(200).json({
      deleted: meme.deletedCount,
      message: 'resource deleted successfully',
    });
  } catch (err) {
    res.status(403).json({ error: { message: err } });
  }
});

module.exports = router;
