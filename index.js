module.exports = async function * (iterators) {
  for (let iterator of iterators) {
    // can be lazy functions returning streams
    if (typeof iterator[Symbol.asyncIterator] !== 'function') iterator = iterator()
    yield * iterator
  }
}
