# Social Avatar Proxy

Returns proxied avatars from **Twitter**, **Facebook**, **Tumblr** and **YouTube**. Useful to display profile pictures in browsers with activated **Do Not Track** option. No API keys required!

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
http://localhost:3333/:platform/:user
```

Available plattforms are: **Twitter**, **Facebook**, **Tumblr** and **YouTube**.

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