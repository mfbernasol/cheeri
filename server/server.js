const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send("It's working!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
