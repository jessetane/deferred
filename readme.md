# Deferred
Externally resolvable promise.

## Why
I couldn't find exactly this on npm.

## Example
``` javascript
import Deferred from 'deferred'

function optionalCallback (err, res) {
  if (err) console.error('callback fail', err)
  else console.log('callback success', res)
}

var d = new Deferred(optionalCallback)
d
  .then(() => console.log('promise resolved'))
  .catch(err => console.error('promise rejected', err))

// d.resolve(42)
d.reject(new Error('broken promise'))
```

## License
MIT
