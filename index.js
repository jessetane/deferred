function Deferred (cb) {
  var res = null
  var rej = null
  var p = new Promise((a, b) => {
    res = a
    rej = b
  })
  if (typeof cb === 'function') {
    p = p.then(function () { cb(null, ...arguments) }).catch(cb)
  }
  p.resolve = res
  p.reject = rej
  return p
}

export default Deferred
