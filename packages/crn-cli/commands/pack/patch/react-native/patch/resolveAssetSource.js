/**
 * 处理拆包后的资源加载路径解析
 */

'use strict';

const AssetRegistry = require('AssetRegistry');
const AssetSourceResolver = require('AssetSourceResolver');

import type {ResolvedAssetSource} from 'AssetSourceResolver';

let _customSourceTransformer, _serverURL, _scriptURL;

let _sourceCodeScriptURL: ?string;
function getSourceCodeScriptURL(): ?string {
  //CRN BEGIN
  //拆包后的路径解析相关
  if (global.CRN_PACKAGE_PATH) {
    return global.CRN_PACKAGE_PATH;
  }
  //CRN END
  if (_sourceCodeScriptURL) {
    return _sourceCodeScriptURL;
  }

  let sourceCode =
    global.nativeExtensions && global.nativeExtensions.SourceCode;
  if (!sourceCode) {
    const NativeModules = require('NativeModules');
    sourceCode = NativeModules && NativeModules.SourceCode;
  }
  _sourceCodeScriptURL = sourceCode.scriptURL;
  return _sourceCodeScriptURL;
}

function getDevServerURL(): ?string {
  if (_serverURL === undefined) {
    const sourceCodeScriptURL = getSourceCodeScriptURL();
    const match =
      sourceCodeScriptURL && sourceCodeScriptURL.match(/^https?:\/\/.*?\//);
    if (match) {
      // jsBundle was loaded from network
      _serverURL = match[0];
    } else {
      // jsBundle was loaded from file
      _serverURL = null;
    }
  }
  return _serverURL;
}

function _coerceLocalScriptURL(scriptURL: ?string): ?string {
  if (scriptURL) {
    if (scriptURL.startsWith('assets://')) {
      // android: running from within assets, no offline path to use
      return null;
    }
    scriptURL = scriptURL.substring(0, scriptURL.lastIndexOf('/') + 1);
    if (!scriptURL.includes('://')) {
      // Add file protocol in case we have an absolute file path and not a URL.
      // This shouldn't really be necessary. scriptURL should be a URL.
      scriptURL = 'file://' + scriptURL;
    }
  }
  return scriptURL;
}

function getScriptURL(): ?string {
  if (_scriptURL === undefined) {
    _scriptURL = _coerceLocalScriptURL(getSourceCodeScriptURL());
  }
  return _scriptURL;
}

function setCustomSourceTransformer(
  transformer: (resolver: AssetSourceResolver) => ResolvedAssetSource,
): void {
  _customSourceTransformer = transformer;
}

/**
 * `source` is either a number (opaque type returned by require('./foo.png'))
 * or an `ImageSource` like { uri: '<http location || file path>' }
 */
function resolveAssetSource(source: any): ?ResolvedAssetSource {
  if (typeof source === 'object') {
    return source;
  }

  const asset = AssetRegistry.getAssetByID(source);
  if (!asset) {
    return null;
  }

  const resolver = new AssetSourceResolver(
    getDevServerURL(),
    getScriptURL(),
    asset,
  );
  if (_customSourceTransformer) {
    return _customSourceTransformer(resolver);
  }
  return resolver.defaultAsset();
}

module.exports = resolveAssetSource;
module.exports.pickScale = AssetSourceResolver.pickScale;
module.exports.setCustomSourceTransformer = setCustomSourceTransformer;