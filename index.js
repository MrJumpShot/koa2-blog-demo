const Koa = require("koa")

const app = new Koa()


app.listen(3000, function(){
	console.log("the server is running on port 3000....")
})
