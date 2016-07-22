
This is meant to be a basic example of graphql/koa (minimal) .. modify this base to grow your own schema/api.

## Installation
```
npm install
```

## Running
```
foreman start

# browse to graphql/graphiql in web browser:
# http://localhost:5000/graphql
```

#### An example query (try in GraphIQL)

```
{getCoders {
  name
  highlights
  baconNumber
}}
```

#### An example mutation (try in GraphIQL)

```
mutation {
  logToServer(message: "hello, world!")
}
```

