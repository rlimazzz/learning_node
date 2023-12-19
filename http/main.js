const express = require("express")
const app = express();

/*get(path, callback) is the method we utilize to route the http gets requests */
// in this case we define / as our main application
app.get("/", function(req, res) {
	res.send("Olá mundo");
});

//in this case we define /sobre as a route of our application so when the user types localhost:8080/sobre he can find the text "Me chamo Ryan"

app.get("/sobre", function(req, res) {
	res.send("Me chamo Ryan");
});

//the same as above but with /blog as the another route

app.get("/blog", function(req, res) {
	res.send("Esse é o blog do Ryan");
});

/* THIS NEEDS TO BE MY LAST LINE IN THE APPLICATION */
app.listen(8080);

