const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Als je hostingplatform een poort toewijst via environment variable PORT, gebruik die.
// Anders gebruik je 3000 lokaal.
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Voorbeeld: user in memory
let user = {
  email: 'test@test.com',
  password: '1234'
};

// /login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === user.email && password === user.password) {
    return res.status(200).json({
      success: true,
      message: 'Inloggen geslaagd!'
    });
  } else {
    return res.status(200).json({
      success: false,
      message: 'Onjuiste e-mail of wachtwoord.'
    });
  }
});

// /change-password endpoint
app.post('/change-password', (req, res) => {
  const { newPassword } = req.body;
  user.password = newPassword;
  return res.status(200).json({
    success: true,
    message: 'Wachtwoord is aangepast!',
  });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`);
});
