const isNativeModules = require('../index')

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
