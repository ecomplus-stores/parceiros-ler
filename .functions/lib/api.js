const functions = require('firebase-functions')

const api = functions.https.onRequest((req, res) => {
  res.send('oi')
})

module.exports = api