# trim-lines-loader

Remove spaces and tabs around lines.

## Config

```js
module.exports = {
  module: {
    loaders: [
      { test: /\.hbs$/, loader: 'handlebars!trim-lines' }
    ]
  }
};
```
