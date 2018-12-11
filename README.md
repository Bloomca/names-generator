# Names Generator

This is a simple library to generate human readable, yet gibberish names, similar to what Heroku, Netlify and others do.

```js
const generateName = require('generate-name');
for (let i = 0; i < 5; i++) {
  console.log(generateName());
}
```

Output will be something like:

```sh
> node test-generate-name.js
swimmer-volatile
volt-fanatical
porter-remarkable
baggage-rambunctious
affect-warlike
```

## Requirements

Node.js 4+ or browser.

## License

MIT