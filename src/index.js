let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongodb = require('mongodb');
let db;

const config = require("./config.json");

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/public/about.html");
});

app.get("/:id.json", (req, res) => {
	db.collection("posts").findOne(mongodb.ObjectId(req.params.id), (err, result) => {
		if (err) return res.send({
			status: "error",
			error: err
		});
		console.log(result);
		res.send(result);
	})
});

app.get("/:id", (req, res) => {
	res.sendFile(__dirname + "/public/post.html");
});

app.post("/", (req, res) => {
	db.collection("posts").save({
		text: req.body.text
	}, (err, result) => {
		if (err) return res.send({
			status: "error",
			error: err
		});
		res.send({
			status: "success",
			id: result.ops[0]["_id"]
		});
	})
});

mongodb.MongoClient.connect(config.mongodb_uri, (err, database) => {
	if (err) return console.error(err)
	db = database;
	let port = process.env.PORT || config.port;
	app.listen(port);
	console.log("listening on port " + port);
})