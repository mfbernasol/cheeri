const express = require('express');
const mongoose = require('mongoose')

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mfbern:2160p@cluster0.hcemo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {})
  }catch(err) {
    console.log(err.message)
    process.exit(1)
  }
}

app.get('/api', (req, res) => {
  res.send("It's working!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
