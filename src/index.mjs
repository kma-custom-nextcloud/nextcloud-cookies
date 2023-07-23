import CryptoJs from 'crypto-js'
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

const { AES } = CryptoJs

const secret = process.env.SECRET

fastify.get('/cred', async (request) => {
  const { cookie } = request.headers
  var cookieCipher = AES.encrypt(cookie, secret)

  return {
    cookie: cookieCipher.toString()
  }
})

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
