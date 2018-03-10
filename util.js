const request = require('request')
const USER_AGET = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0'

function getYouTubePictureUrl (username, cb) {
  const options = {
    url: 'https://www.youtube.com/' + username,
    headers: {
      'User-Agent': USER_AGET
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
      'User-Agent': USER_AGET
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
    url: 'https://instagram.com/' + username,
    headers: {
      'User-Agent': USER_AGET
    }
  }

  request(options, (err, res, body) => {
    if (err) console.error(err)

    const match = body && body.match(/profile_pic_url": "([.\-:/\d\w]+)"/)
    return match ? cb(match[1]) : cb(null)
  })
}

module.exports = {
  getYouTubePictureUrl,
  getFacebookId,
  getInstagramPictureUrl
}
