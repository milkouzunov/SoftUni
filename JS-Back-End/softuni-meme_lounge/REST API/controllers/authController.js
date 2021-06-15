const { Router } = require('express');

const authService = require('../services/authService');

const router = Router();

router.post('/register', async (req, res) => {
  const { username, email, password, gender } = req.body;

  if (username == '' || password == '' || gender == '') {
    throw { error: { message: 'All fields is required!' } };
  }

  try {
    await authService.register({ username, email, password, gender });
    res.status(201).json({ msg: { message: 'Created' } });

  } catch (err) {
    if (err.code == '11000') {
      err = 'The username has already been registered, please change the username';
    }
    res.status(403).json({ error: { message: err } });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userData = await authService.login({ username, password });

    res.status(200).json({
      token: userData.token,
      userId: userData.userId,
      username: userData.username,
      email: userData.email,
      message: 'User successfuly logged in!',
    });

  } catch (err) {
    res.status(403).json({ error: { message: err } });
  }
});

module.exports = router;
