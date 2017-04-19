const Koa=require('koa');

const bodyParser=require('koa-bodyparser');

const app=new Koa();

const rest=require('./rest');

const controller=require('./controller');

app.use(async(ctx,next)=>{
    await next();
    console.log(ctx.request.url);
    ctx.request.query
});

app.use(bodyParser());

app.use(rest.restify());

app.use(controller());

app.listen(3000);

console.log("app started at port 3000");