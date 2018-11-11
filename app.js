const Koa = require('koa');
const app = new Koa();

const server = require('koa-static');
// 使用./public下的静态文件
app.use(server(__dirname + '/static'));

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('Koa is listening in 3000');
});
