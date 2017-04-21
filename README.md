# Is-Native-Modules
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
```