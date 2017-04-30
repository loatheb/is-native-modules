const isNativeModules = require('..')

const nativesModuleNames = 'assert child_process cluster crypto dns domain events fs http https net os path querystring readline repl stream string_decoder timers tls tty dgram url util v8 vm zlib'

const otherModuleNames = 'some_module other_module fake_module'

describe('single real module', () => {
  it('natives module should be true', () => {
    expect(nativesModuleNames.split(' ').every(isNativeModules))
      .toBe(true)
  })
})

describe('single fake module', () => {
  it('not native modules should be false', () => {
    expect(otherModuleNames.split(' ').every(isNativeModules))
      .toBe(false)
  })
})

describe('real modules array params', () => {
  const nativesModuleNamesArray = nativesModuleNames.split(' ')
  it('natives module should be a array true', () => {
    expect(isNativeModules(nativesModuleNamesArray))
      .toEqual(nativesModuleNamesArray.map(module => true))
  })
})

describe('fake modules array params', () => {
  const otherModuleNamesArray = otherModuleNames.split(' ')
  it('natives module should be a array true', () => {
    expect(isNativeModules(otherModuleNamesArray))
      .toEqual(otherModuleNamesArray.map(module => false))
  })
})

describe('modules multidimensional array params', () => {
  const nativesModuleNamesArray = nativesModuleNames.split(' ')
  const otherModuleNamesArray = otherModuleNames.split(' ')
  it('module should return a two-dimensional array', () => {
    expect(isNativeModules([nativesModuleNamesArray, otherModuleNamesArray]))
      .toEqual([Array(nativesModuleNamesArray.length).fill(true), Array(otherModuleNamesArray.length).fill(false)])
  })
})
