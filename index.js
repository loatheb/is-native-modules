const nativeModules = process.binding('natives')

module.exports = name => nativeModules.hasOwnProperty(name)
