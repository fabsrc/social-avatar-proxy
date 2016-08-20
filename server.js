const express = require('express')
const request = require('request')
const util = require('./util')

let app = express()

app.get('/:platform/:user', (req, res) => {
  switch (req.params.platform) {
    case 'twitter':
      return request
        .get('https://twitter.com/' + req.params.user + '/profile_image?size=bigger')
        .pipe(res)

    case 'tumblr':
      return request
        .get('https://api.tumblr.com/v2/blog/' + req.params.user + '/avatar/128')
        .pipe(res)

    case 'facebook':
      util.getFacebookId(req.params.user, id => {
        if (!id) return res.send('No valid id.')

        return request
          .get('https://graph.facebook.com/' + id + '/picture?width=128')
          .pipe(res)
      })
      break

    case 'youtube':
      util.getYouTubePicture(req.params.user, uri => {
        if (!uri) return res.send('No valid username.')

        return request
          .get(uri)
          .pipe(res)
      })
      break

    default:
      return res.send('No valid platform!')
  }
})

let server = app.listen(process.env.PORT || 3333, () => {
  console.log(`App listening on port ${server.address().port}!`)
})
