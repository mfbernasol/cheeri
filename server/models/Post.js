const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  name: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', PostSchema);
