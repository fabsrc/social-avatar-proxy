const request = require('request')

function getYouTubePicture (username, cb) {
  let options = {
    url: 'https://www.youtube.com/' + username,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0'
    }
  }

  request(options, (err, res, body) => {
    if (err) console.error(err)

    let match = body.match(/<img class="channel-header-profile-image" src="([\/\w\.:\-_]*)/)
    return match ? cb(match[1]) : cb(null)
  })
}

function getFacebookId (username, cb) {
  let options = {
    url: 'https://facebook.com/' + username,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0'
    }
  }

  request(options, (err, res, body) => {
    if (err) console.error(err)

    let match = body.match(/entity_id":"(\d*)"/)
    return match ? cb(match[1]) : cb(null)
  })
}

module.exports = {
  getYouTubePicture,
  getFacebookId
}
