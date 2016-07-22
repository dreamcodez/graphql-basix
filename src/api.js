import koa from 'koa'
import logger from 'koa-logger'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'

import schema from './schema'

const PORT = process.env.PORT
const ENABLE_LOG = process.env.ENABLE_LOG || false

if (!PORT) throw new Error('PORT must be assigned!')

const app = koa()

if (ENABLE_LOG) app.use(logger())

app.use(mount('/graphql', graphqlHTTP({ schema, graphiql: true })))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
