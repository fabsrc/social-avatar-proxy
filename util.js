const request = require('request')
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0'

function getYouTubePictureUrl (username, cb) {
  const options = {
    url: 'https://www.youtube.com/' + username,
    headers: {
      'User-Agent': USER_AGENT
    }
  }

  request(options, (err, res, body) => {
    if (err) console.error(err)

    const match = body && body.match(/<meta property="og:image" content="([/\w.:\-_]*)">/)
    return match ? cb(match[1]) : cb(null)
  })
}

function getFacebookId (username, cb) {
  const options = {
    url: 'https://facebook.com/' + username,
    headers: {
      'User-Agent': USER_AGENT
    }
  }

  request(options, (err, res, body) => {
    if (err) console.error(err)

    const match = body && body.match(/entity_id":"(\d*)"/)
    return match ? cb(match[1]) : cb(null)
  })
}

function getInstagramPictureUrl (username, cb) {
  const options = {
    url: 'https://instagram.com/' + username + '/?__a=1',
    json: true,
    headers: {
      'User-Agent': USER_AGENT
    }
  }

  request(options, (err, res, body) => {
    if (err) console.error(err)

    const picture = body && body.user && (body.user.profile_pic_url_hd || body.user.profile_pic_url)
    return picture ? cb(picture) : cb(null)
  })
}

module.exports = {
  getYouTubePictureUrl,
  getFacebookId,
  getInstagramPictureUrl
}
