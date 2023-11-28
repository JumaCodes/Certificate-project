const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const AuthRoute = require('./routes/auth');
const PostRoute = require('./routes/post');
const { authenticateToken } = require('./middleware/AppMiddleWare');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
const PORT = 8000;
 

// CONNECT DATABASE
const mongodbURL = "mongodb+srv://ramondevbusiness:haSErDnES03TnaWN@cluster0.9i7blui.mongodb.net/chatter_app?retryWrites=true&w=majority";
mongoose.connect(mongodbURL)
    .then(() => {
        console.log("MongoDB connection successful");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));

//END CONNECT DATABASE

app.use(AuthRoute);
app.use(PostRoute);
//END  ROUTE



app.get("/test", authenticateToken, function (req, res) {
    console.log(req.user.sub)
    res.send("Good workin");
});
