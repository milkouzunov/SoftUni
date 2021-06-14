const { Router } = require("express");

const authService = require("../services/authService");

const router = Router();

router.post("/register", async (req, res) => {
  const { username, password, gender } = req.body;

  if (username == "" || password == "" || gender == "") {
    res.json({ error: { message: "All fields is required!" } });
    return;
  }

  try {
    await authService.register({ username, password, gender });
    res.status(201).json({ message: "Success" });
    
  } catch (err) {
    if (err.code == '11000') {
        err = 'The username has already been registered, please change the username'; 
    }
    res.status(403).json({ error: { message: err } });
  }
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ ok: true });
});

module.exports = router;
