/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module '@babel/preset-react'\\nRequire stack:\\n- /home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/files/plugins.js\\n- /home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/files/index.js\\n- /home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/index.js\\n- /home/andy/Documents/logos-jewellery/node_modules/babel-loader/lib/index.js\\n- /home/andy/Documents/logos-jewellery/node_modules/loader-runner/lib/loadLoader.js\\n- /home/andy/Documents/logos-jewellery/node_modules/loader-runner/lib/LoaderRunner.js\\n- /home/andy/Documents/logos-jewellery/node_modules/webpack/lib/NormalModule.js\\n- /home/andy/Documents/logos-jewellery/node_modules/webpack/lib/NormalModuleFactory.js\\n- /home/andy/Documents/logos-jewellery/node_modules/webpack/lib/Compiler.js\\n- /home/andy/Documents/logos-jewellery/node_modules/webpack/lib/webpack.js\\n- /home/andy/Documents/logos-jewellery/node_modules/webpack/bin/webpack.js\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)\\n    at resolve (internal/modules/cjs/helpers.js:80:19)\\n    at resolveStandardizedName (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/files/plugins.js:111:7)\\n    at resolvePreset (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/files/plugins.js:59:10)\\n    at loadPreset (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/files/plugins.js:78:20)\\n    at loadPreset.next (<anonymous>)\\n    at createDescriptor (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/config-descriptors.js:187:16)\\n    at createDescriptor.next (<anonymous>)\\n    at step (/home/andy/Documents/logos-jewellery/node_modules/gensync/index.js:261:32)\\n    at evaluateAsync (/home/andy/Documents/logos-jewellery/node_modules/gensync/index.js:291:5)\\n    at /home/andy/Documents/logos-jewellery/node_modules/gensync/index.js:44:11\\n    at Array.forEach (<anonymous>)\\n    at Function.async (/home/andy/Documents/logos-jewellery/node_modules/gensync/index.js:43:15)\\n    at Function.all (/home/andy/Documents/logos-jewellery/node_modules/gensync/index.js:216:13)\\n    at Generator.next (<anonymous>)\\n    at createDescriptors (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/config-descriptors.js:142:41)\\n    at createDescriptors.next (<anonymous>)\\n    at createPresetDescriptors (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/config-descriptors.js:134:17)\\n    at createPresetDescriptors.next (<anonymous>)\\n    at presets (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/config-descriptors.js:73:26)\\n    at presets.next (<anonymous>)\\n    at mergeChainOpts (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/config-chain.js:420:34)\\n    at mergeChainOpts.next (<anonymous>)\\n    at /home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/config-chain.js:378:14\\n    at Generator.next (<anonymous>)\\n    at loadFileChain (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/config-chain.js:232:24)\\n    at loadFileChain.next (<anonymous>)\\n    at buildRootChain (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/config-chain.js:135:31)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/home/andy/Documents/logos-jewellery/node_modules/@babel/core/lib/config/partial.js:101:62)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);