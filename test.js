const test = require('ava')
const request = require('supertest')
const app = require('./server')

test.cb('twitter: 200', t => {
  request(app)
    .get('/twitter/mark')
    .expect(200, t.end)
})

test.cb('twitter: 404', t => {
  request(app)
    .get('/twitter/00000000000000000000000')
    .expect(404, t.end)
})

test.cb('tumblr: 200', t => {
  request(app)
    .get('/tumblr/taylorswift')
    .expect(200, t.end)
})

test.cb('tumblr: 404', t => {
  request(app)
    .get('/tumblr/qqqqqqqqqqqqqqqqq-')
    .expect(404, t.end)
})

test.cb('facebook: 200', t => {
  request(app)
    .get('/facebook/zuck')
    .expect(200, t.end)
})

test.cb('facebook: 404', t => {
  request(app)
    .get('/facebook/00000000000000000000000')
    .expect(404, t.end)
})

test.cb('youtube: 200', t => {
  request(app)
    .get('/youtube/taylorswift')
    .expect(200, t.end)
})

test.cb('youtube: 404', t => {
  request(app)
    .get('/youtube/00000000000000000000000')
    .expect(404, t.end)
})
