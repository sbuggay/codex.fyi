let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectId;
let db;

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/public/about.html");
});

app.get("/:id.json", (req, res) => {
	db.collection('posts').findOne(ObjectId(req.params.id) , (err, result) => {
		if (err) return res.send({ status: "error", error: err });
		res.send(result);
	})
});

app.get("/:id", (req, res) => {
	res.sendFile(__dirname + "/public/post.html");
});

app.post("/", (req, res) => {
	console.log(req.body);
	db.collection('posts').save(req.body, (err, result) => {
		if (err) return res.send({ status: "error", error: err });
		res.send({ status: "success", id: result.ops[0]["_id"] });
	})
});

mongodb.MongoClient.connect("<mongodb_uri>", (err, database) => {
	if (err) return console.error(err)
	db = database;
	let port = process.env.PORT || 8080;
	app.listen(port);
	console.log("listening on port " + port);
})
