# Social Avatar Proxy

[![Build Status](https://img.shields.io/travis/fabsrc/social-avatar-proxy.svg?style=flat-square)](https://travis-ci.org/fabsrc/social-avatar-proxy)
[![Dependencies](https://img.shields.io/david/fabsrc/social-avatar-proxy.svg?style=flat-square)](https://david-dm.org/fabsrc/social-avatar-proxy)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Returns proxied avatars from **Twitter**, **Facebook**, **Tumblr**, **YouTube** and **Instagram**. Useful to display profile pictures in browsers with activated *Do Not Track* option. No API keys required!

## Install

```bash
npm install
```

## Start

```bash
npm start
```

Server starts on port `3333` by default. Use the `PORT` environment variable to specify a custom port.

## Usage

To get a profile picture use the following url structure:

```
http://localhost:3333/{platform}/{user}
```

Available platforms: **Twitter**, **Facebook**, **Tumblr**, **YouTube** and **Instagram**.

### Examples

**Facebook**

```
http://localhost:3333/facebook/zuck
```

**Twitter**

```
http://localhost:3333/twitter/jack
```


## License

Licensed under the [MIT License](http://opensource.org/licenses/mit-license.php).
