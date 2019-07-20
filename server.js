const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to ContactKeeper API..."
  });
})

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(process.env.PORT || 8000, () => {});