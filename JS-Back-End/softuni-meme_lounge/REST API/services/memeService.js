const Meme = require('../models/Meme');

async function getAll() {
  const memes = await Meme.find().lean();

  return memes;
}

async function getById(id) {
  const meme = await Meme.findOne({ _id: id });

  return meme;
}

async function getByOwnerId(ownerId) {
    const meme = await Meme.find({ createdBy: ownerId });
  
    return meme;
  }

async function create({ title, createdBy, description, imageUrl }) {
  const newMeme = new Meme({ title, createdBy, description, imageUrl });

  return newMeme.save();
}

async function edit(id, { title, description, imageUrl }) {
  return await Meme.updateOne(
    { _id: id },
    {
      title: title.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim()
    }
  );
}

async function del(id) {
    return await Meme.deleteOne({ _id: id });
}

module.exports = {
  getAll,
  getById,
  getByOwnerId,
  create,
  edit,
  del
};
