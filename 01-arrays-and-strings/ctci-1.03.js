function urlify(str) {
  return str.replaceAll(' ', '%20');
}

module.exports = { urlify };