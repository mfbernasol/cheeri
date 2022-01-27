const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://mfbern:2160p@cluster0.hcemo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {})
    
//   }catch(err) {
//     console.log(err.message)
//     process.exit(1)
//   }
// }

mongoose
	.connect("mongodb+srv://mbern:2160p@cluster0.hcemo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {

		app.use(express.json()) // new
		app.use("/api", routes)

	})

app.get('/api', (req, res) => {
  res.send("It's working!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
