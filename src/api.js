import graphqlHTTP from 'koa-graphql'
import koa from 'koa'
import koaLogger from 'koa-logger'
import koaMount from 'koa-mount'

import wrapHttps from './wrap-https'
import schema from './schema'

async function init() {
  const ENABLE_LOG = process.env.ENABLE_LOG || false
  const JWT_SECRET = process.env.JWT_SECRET
  const PORT = process.env.PORT

  if (!JWT_SECRET) throw new Error('JWT_SECRET must be defined!')
  if (!PORT) throw new Error('PORT must be defined!')

  const app = koa()

  if (ENABLE_LOG) app.use(koaLogger())

  app.use(validateJwt)
  app.use(koaMount('/graphql', graphqlHTTP({ schema, graphiql: true })))

  const wrappedApp = await wrapHttps(app)
  wrappedApp.listen(PORT, () => console.log(`Listening on ${PORT}`))
}

function *validateJwt(next) {
  console.log(this.header.authorization)
  //jwt.verify(token, JWT_SECRET)
  yield next
}

// go time!
init().then()
