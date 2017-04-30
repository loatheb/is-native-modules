var nativeModules = process.binding('natives')

module.exports = isNativeModules.isNativeModules = isNativeModules['default'] = isNativeModules

function isNativeModules(name) {
  return Array.isArray(name) ? name.map(isNativeModules) : nativeModules.hasOwnProperty(name)
}
