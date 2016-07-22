import Promise from 'bluebird'
import https from 'https'
import pem from 'pem'
Promise.promisifyAll(pem)
import util from 'util'

// self sign baby, wrap koa
export default Promise.coroutine(function *(app) {
  const pemOptions = { days: 90, selfSigned: true }
  console.log(
    'Generating fresh ssl pem (self-signed)...',
    util.inspect(pemOptions, null, null)
  )
  const keys = yield pem.createCertificateAsync(pemOptions)

  const httpsOptions = {key: keys.serviceKey, cert: keys.certificate}
  return https.createServer(httpsOptions, app.callback())
})
