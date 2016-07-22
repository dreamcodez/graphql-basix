import Promise from 'bluebird'
import graphqlHTTP from 'koa-graphql'
import koa from 'koa'
import koaLogger from 'koa-logger'
import koaMount from 'koa-mount'

import wrapHttps from './wrap-https'
import schema from './schema'

const init = Promise.coroutine(function *() {
  const PORT = process.env.PORT
  const ENABLE_LOG = process.env.ENABLE_LOG || false

  if (!PORT) throw new Error('PORT must be assigned!')

  const app = koa()

  if (ENABLE_LOG) app.use(koaLogger())

  app.use(koaMount('/graphql', graphqlHTTP({ schema, graphiql: true })))

  const wrappedApp = yield wrapHttps(app)
  wrappedApp.listen(PORT, () => console.log(`Listening on ${PORT}`))
})

// go time!
init().then()
