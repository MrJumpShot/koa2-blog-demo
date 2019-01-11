const Koa = require("koa")
const Router = require("koa-router")
const app = new Koa()
const router = new Router()
router.get("/", async(ctx, next)=>{
	ctx.body = "index page"
})


app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, function(){
	console.log("the server is running on port 3000....")
})
