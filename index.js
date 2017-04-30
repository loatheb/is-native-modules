const nativeModules = process.binding('natives')

module.exports = isNativeModules.isNativeModules = isNativeModules['default'] = isNativeModules

function isNativeModules(name) {
  return nativeModules.hasOwnProperty(name)
}
