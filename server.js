const morgan = require('morgan')
const request = require('request')
const cache = require('apicache').middleware
const app = module.exports = require('express')()
const util = require('./util')

app.use(morgan('tiny'))

app.get('/:platform/:user', cache(process.env.CACHE_DURATION || '6 hours'), (req, res) => {
  switch (req.params.platform) {
    case 'twitter':
      return request
        .get('https://twitter.com/' + req.params.user + '/profile_image?size=bigger')
        .on('response', response => (response.statusCode !== 200 || !['image/jpeg', 'image/png'].includes(response.headers['content-type']))
          ? res.status(404).type('txt').send('Username not found.')
          : response.pipe(res)
        )

    case 'tumblr':
      return request
        .get('https://api.tumblr.com/v2/blog/' + req.params.user + '/avatar/128')
        .pipe(res)

    case 'facebook':
      util.getFacebookId(req.params.user, id => {
        if (!id) return res.status(404).type('txt').send('Username not found.')

        return request
          .get('https://graph.facebook.com/' + id + '/picture?width=128')
          .pipe(res)
      })
      break

    case 'youtube':
      util.getYouTubePictureUrl(req.params.user, uri => {
        if (!uri) return res.status(404).type('txt').send('Username not found.')

        return request
          .get(uri)
          .pipe(res)
      })
      break

    case 'instagram':
      util.getInstagramPictureUrl(req.params.user, url => {
        if (!url) return res.status(404).type('txt').send('Username not found.')

        return request
          .get(url)
          .pipe(res)
      })
      break

    default:
      return res.status(404).type('txt').send('No valid platform!')
  }
})

app.get('*', (req, res) => res.type('txt').send(`
    Usage: ${req.protocol}://${req.headers.host}/{channel}/{username}
    e.g. ${req.protocol}://${req.headers.host}/facebook/zuck
    `)
)

const server = !module.parent && app.listen(process.env.PORT || 3333, () =>
  console.log(`App listening on port ${server.address().port}!`)
)
