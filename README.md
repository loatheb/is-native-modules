# Is-Native-Modules
[![Build Status](https://travis-ci.org/loatheb/is-native-modules.svg?branch=master)](https://travis-ci.org/loatheb/is-native-modules) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   [![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)    
> check the module is native module or not

### import

```shell
npm i --save is-native-modules
```

* CommonJS

  ```js
  const isNativeModules = require('is-native-modules')
  ```

* ES6 module
 
  ```js
  import isNativeModules from 'is-native-modules'
  ```

### usage

```js
isNativeModules('path') // true

isNativeModules('other_module') // false

isNativeModules(['path', 'fs']) // [true, true]

isNativeModules(['other_module', 'some_module']) // [false, false]

isNativeModules([['path', 'fs'], ['other_module', 'some_module']]) // [[true, true], [false, false]]

```
