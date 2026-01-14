/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1960:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=/*#__PURE__*/e(__nccwpck_require__(4683)),n=function(e,r){try{var u,c=e;switch(c.type){case"ArrayExpression":return Promise.resolve(o(c.elements,r));case"BinaryExpression":return Promise.resolve(Promise.all([n(c.left,r),n(c.right,r)])).then(function(e){return i[c.operator](e[0],e[1])});case"CallExpression":var a,l,f,p=function(){if("function"==typeof l){var e=l,n=e.apply,t=a;return Promise.resolve(o(c.arguments,r)).then(function(r){return Promise.resolve(n.call(e,t,r))})}},m="MemberExpression"===c.callee.type?Promise.resolve(t(c.callee,r)).then(function(e){a=(f=e)[0],l=f[1]}):Promise.resolve(n(c.callee,r)).then(function(e){l=e});return Promise.resolve(m&&m.then?m.then(p):p());case"ConditionalExpression":return Promise.resolve(n(c.test,r)).then(function(e){return Promise.resolve(n(e?c.consequent:c.alternate,r))});case"Identifier":return Promise.resolve(r[c.name]);case"Literal":return Promise.resolve(c.value);case"LogicalExpression":var v=function(e){return u?e:Promise.resolve(Promise.all([n(c.left,r),n(c.right,r)])).then(function(e){return i[c.operator](e[0],e[1])})},h="||"===c.operator?Promise.resolve(n(c.left,r)).then(function(e){return e?(u=1,e):Promise.resolve(n(c.right,r)).then(function(e){return u=1,e})}):function(){if("&&"===c.operator)return Promise.resolve(n(c.left,r)).then(function(e){return e?Promise.resolve(n(c.right,r)).then(function(e){return u=1,e}):(u=1,e)})}();return Promise.resolve(h&&h.then?h.then(v):v(h));case"MemberExpression":return Promise.resolve(t(c,r)).then(function(e){return e[1]});case"ThisExpression":return Promise.resolve(r);case"UnaryExpression":var d=s[c.operator];return Promise.resolve(n(c.argument,r)).then(function(e){return d.call(s,e)});default:return Promise.resolve(void 0)}}catch(e){return Promise.reject(e)}},t=function(e,r){try{return Promise.resolve(n(e.object,r)).then(function(t){function o(){if(/^__proto__|prototype|constructor$/.test(u))throw Error('Access to member "'+u+'" disallowed.');return[t,t[u]]}var u,i=function(){if(e.computed)return Promise.resolve(n(e.property,r)).then(function(e){u=e});u=e.property.name}();return i&&i.then?i.then(o):o()})}catch(e){return Promise.reject(e)}},o=function(e,r){try{return Promise.resolve(Promise.all(e.map(function(e){return n(e,r)})))}catch(e){return Promise.reject(e)}},u={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},i={"||":function(e,r){return e||r},"&&":function(e,r){return e&&r},"|":function(e,r){return e|r},"^":function(e,r){return e^r},"&":function(e,r){return e&r},"==":function(e,r){return e==r},"!=":function(e,r){return e!=r},"===":function(e,r){return e===r},"!==":function(e,r){return e!==r},"<":function(e,r){return e<r},">":function(e,r){return e>r},"<=":function(e,r){return e<=r},">=":function(e,r){return e>=r},"<<":function(e,r){return e<<r},">>":function(e,r){return e>>r},">>>":function(e,r){return e>>>r},"+":function(e,r){return e+r},"-":function(e,r){return e-r},"*":function(e,r){return e*r},"/":function(e,r){return e/r},"%":function(e,r){return e%r}},s={"-":function(e){return-e},"+":function(e){return+e},"~":function(e){return~e},"!":function(e){return!e}};function c(e,r){return e.map(function(e){return l(e,r)})}function a(e,r){var n,t=l(e.object,r);if(n=e.computed?l(e.property,r):e.property.name,/^__proto__|prototype|constructor$/.test(n))throw Error('Access to member "'+n+'" disallowed.');return[t,t[n]]}function l(e,r){var n=e;switch(n.type){case"ArrayExpression":return c(n.elements,r);case"BinaryExpression":return i[n.operator](l(n.left,r),l(n.right,r));case"CallExpression":var t,o,u;if("MemberExpression"===n.callee.type?(t=(u=a(n.callee,r))[0],o=u[1]):o=l(n.callee,r),"function"!=typeof o)return;return o.apply(t,c(n.arguments,r));case"ConditionalExpression":return l(n.test,r)?l(n.consequent,r):l(n.alternate,r);case"Identifier":return r[n.name];case"Literal":return n.value;case"LogicalExpression":var f=l(n.left,r);return"||"===n.operator&&f?f:"&&"!==n.operator||f?i[n.operator](f,l(n.right,r)):f;case"MemberExpression":return a(n,r)[1];case"ThisExpression":return r;case"UnaryExpression":return s[n.operator](l(n.argument,r));default:return}}Object.defineProperty(exports, "parse", ({enumerable:!0,get:function(){return r.default}})),exports.addBinaryOp=function(e,n,t){t?(r.default.addBinaryOp(e,n),i[e]=t):(r.default.addBinaryOp(e,u[e]||1),i[e]=n)},exports.addUnaryOp=function(e,n){r.default.addUnaryOp(e),s[e]=n},exports.compile=function(e){return l.bind(null,r.default(e))},exports.compileAsync=function(e){return n.bind(null,r.default(e))},exports.eval=l,exports.evalAsync=n;
//# sourceMappingURL=expression-eval.js.map


/***/ }),

/***/ 2896:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * A mutex lock for coordination across async functions
 */
class AwaitLock {
    constructor() {
        this._acquired = false;
        this._waitingResolvers = [];
    }
    /**
     * Acquires the lock, waiting if necessary for it to become free if it is already locked. The
     * returned promise is fulfilled once the lock is acquired.
     *
     * After acquiring the lock, you **must** call `release` when you are done with it.
     */
    acquireAsync() {
        if (!this._acquired) {
            this._acquired = true;
            return Promise.resolve();
        }
        return new Promise(resolve => {
            this._waitingResolvers.push(resolve);
        });
    }
    /**
     * Acquires the lock if it is free and otherwise returns immediately without waiting. Returns
     * `true` if the lock was free and is now acquired, and `false` otherwise,
     */
    tryAcquire() {
        if (!this._acquired) {
            this._acquired = true;
            return true;
        }
        return false;
    }
    /**
     * Releases the lock and gives it to the next waiting acquirer, if there is one. Each acquirer
     * must release the lock exactly once.
     */
    release() {
        if (!this._acquired) {
            throw new Error(`Cannot release an unacquired lock`);
        }
        if (this._waitingResolvers.length > 0) {
            let resolve = this._waitingResolvers.shift();
            resolve();
        }
        else {
            this._acquired = false;
        }
    }
}
exports["default"] = AwaitLock;
//# sourceMappingURL=AwaitLock.js.map

/***/ }),

/***/ 9380:
/***/ ((module) => {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if(a===b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ 8793:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 4691:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var balanced = __nccwpck_require__(9380);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m) return [str];

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  if (/\$$/.test(m.pre)) {    
    for (var k = 0; k < post.length; k++) {
      var expansion = pre+ '{' + m.body + '}' + post[k];
      expansions.push(expansion);
    }
  } else {
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(',') >= 0;
    if (!isSequence && !isOptions) {
      // {a},b}
      if (m.post.match(/,(?!,).*\}/)) {
        str = m.pre + '{' + m.body + escClose + m.post;
        return expand(str);
      }
      return [str];
    }

    var n;
    if (isSequence) {
      n = m.body.split(/\.\./);
    } else {
      n = parseCommaParts(m.body);
      if (n.length === 1) {
        // x{{a,b}}y ==> x{a}y x{b}y
        n = expand(n[0], false).map(embrace);
        if (n.length === 1) {
          return post.map(function(p) {
            return m.pre + n[0] + p;
          });
        }
      }
    }

    // at this point, n is the parts, and we know it's not a comma set
    // with a single entry.
    var N;

    if (isSequence) {
      var x = numeric(n[0]);
      var y = numeric(n[1]);
      var width = Math.max(n[0].length, n[1].length)
      var incr = n.length == 3
        ? Math.abs(numeric(n[2]))
        : 1;
      var test = lte;
      var reverse = y < x;
      if (reverse) {
        incr *= -1;
        test = gte;
      }
      var pad = n.some(isPadded);

      N = [];

      for (var i = x; test(i, y); i += incr) {
        var c;
        if (isAlphaSequence) {
          c = String.fromCharCode(i);
          if (c === '\\')
            c = '';
        } else {
          c = String(i);
          if (pad) {
            var need = width - c.length;
            if (need > 0) {
              var z = new Array(need + 1).join('0');
              if (i < 0)
                c = '-' + z + c.slice(1);
              else
                c = z + c;
            }
          }
        }
        N.push(c);
      }
    } else {
      N = [];

      for (var j = 0; j < n.length; j++) {
        N.push.apply(N, expand(n[j], false));
      }
    }

    for (var j = 0; j < N.length; j++) {
      for (var k = 0; k < post.length; k++) {
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion)
          expansions.push(expansion);
      }
    }
  }

  return expansions;
}



/***/ }),

/***/ 3410:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __nccwpck_require__(8793)
const ieee754 = __nccwpck_require__(7952)
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ 2341:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newCachedEnforcer = exports.CachedEnforcer = void 0;
const enforcer_1 = __nccwpck_require__(4871);
// CachedEnforcer wraps Enforcer and provides decision cache
class CachedEnforcer extends enforcer_1.Enforcer {
    constructor() {
        super(...arguments);
        this.enableCache = true;
        this.m = new Map();
    }
    // invalidateCache deletes all the existing cached decisions.
    invalidateCache() {
        this.m = new Map();
    }
    // setEnableCache determines whether to enable cache on e nforce(). When enableCache is enabled, cached result (true | false) will be returned for previous decisions.
    setEnableCache(enableCache) {
        this.enableCache = enableCache;
    }
    static canCache(...rvals) {
        return rvals.every((n) => typeof n === 'string');
    }
    static getCacheKey(...rvals) {
        return rvals.join('$$');
    }
    getCache(key) {
        return this.m.get(key);
    }
    setCache(key, value) {
        this.m.set(key, value);
    }
    // enforce decides whether a "subject" can access a "object" with the operation "action", input parameters are usually: (sub, obj, act).
    // if rvals is not string , ingore the cache
    async enforce(...rvals) {
        if (!this.enableCache) {
            return super.enforce(...rvals);
        }
        let key = '';
        const cache = CachedEnforcer.canCache(...rvals);
        if (cache) {
            key = CachedEnforcer.getCacheKey(...rvals);
            const res = this.getCache(key);
            if (res !== undefined) {
                return res;
            }
        }
        const res = await super.enforce(...rvals);
        if (cache) {
            this.setCache(key, res);
        }
        return res;
    }
}
exports.CachedEnforcer = CachedEnforcer;
// newCachedEnforcer creates a cached enforcer via file or DB.
async function newCachedEnforcer(...params) {
    return enforcer_1.newEnforcerWithClass(CachedEnforcer, ...params);
}
exports.newCachedEnforcer = newCachedEnforcer;


/***/ }),

/***/ 2709:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Config = void 0;
const persist_1 = __nccwpck_require__(1908);
class Config {
    constructor(fs) {
        this.data = new Map();
        if (fs) {
            this.fs = fs;
        }
    }
    /**
     * newConfig create an empty configuration representation from file.
     *
     * @param confName the path of the model file.
     * @return the constructor of Config.
     * @deprecated use {@link newConfigFromFile} instead.
     */
    static newConfig(confName) {
        return this.newConfigFromFile(confName);
    }
    /**
     * newConfigFromFile create an empty configuration representation from file.
     * @param path the path of the model file.
     * @param fs {@link FileSystem}
     */
    static newConfigFromFile(path, fs) {
        const config = new Config(fs);
        config.parse(path);
        return config;
    }
    /**
     * newConfigFromText create an empty configuration representation from text.
     *
     * @param text the model text.
     * @return the constructor of Config.
     */
    static newConfigFromText(text) {
        const config = new Config();
        config.parseBuffer(Buffer.from(text));
        return config;
    }
    /**
     * addConfig adds a new section->key:value to the configuration.
     */
    addConfig(section, option, value) {
        if (section === '') {
            section = Config.DEFAULT_SECTION;
        }
        const hasKey = this.data.has(section);
        if (!hasKey) {
            this.data.set(section, new Map());
        }
        const item = this.data.get(section);
        if (item) {
            item.set(option, value);
            return item.has(option);
        }
        else {
            return false;
        }
    }
    parse(path) {
        const body = (this.fs ? this.fs : persist_1.mustGetDefaultFileSystem()).readFileSync(path);
        this.parseBuffer(Buffer.isBuffer(body) ? body : Buffer.from(body));
    }
    parseBuffer(buf) {
        const lines = buf
            .toString()
            .split('\n')
            .filter((v) => v);
        const linesCount = lines.length;
        let section = '';
        let currentLine = '';
        const seenSections = new Set();
        lines.forEach((n, index) => {
            let commentPos = n.indexOf(Config.DEFAULT_COMMENT);
            if (commentPos > -1) {
                n = n.slice(0, commentPos);
            }
            commentPos = n.indexOf(Config.DEFAULT_COMMENT_SEM);
            if (commentPos > -1) {
                n = n.slice(0, commentPos);
            }
            const line = n.trim();
            if (!line) {
                return;
            }
            const lineNumber = index + 1;
            if (line.startsWith('[') && line.endsWith(']')) {
                if (currentLine.length !== 0) {
                    this.write(section, lineNumber - 1, currentLine);
                    currentLine = '';
                }
                section = line.substring(1, line.length - 1);
                if (seenSections.has(section)) {
                    throw new Error(`Duplicated section: ${section} at line ${lineNumber}`);
                }
                seenSections.add(section);
            }
            else {
                let shouldWrite = false;
                if (line.endsWith(Config.DEFAULT_MULTI_LINE_SEPARATOR)) {
                    currentLine += line.substring(0, line.length - 1).trim();
                }
                else {
                    currentLine += line;
                    shouldWrite = true;
                }
                if (shouldWrite || lineNumber === linesCount) {
                    this.write(section, lineNumber, currentLine);
                    currentLine = '';
                }
            }
        });
    }
    write(section, lineNum, line) {
        const equalIndex = line.indexOf('=');
        if (equalIndex === -1) {
            throw new Error(`parse the content error : line ${lineNum}`);
        }
        const key = line.substring(0, equalIndex);
        const value = line.substring(equalIndex + 1);
        this.addConfig(section, key.trim(), value.trim());
    }
    getBool(key) {
        return !!this.get(key);
    }
    getInt(key) {
        return Number.parseInt(this.get(key), 10);
    }
    getFloat(key) {
        return Number.parseFloat(this.get(key));
    }
    getString(key) {
        return this.get(key);
    }
    getStrings(key) {
        const v = this.get(key);
        return v.split(',');
    }
    set(key, value) {
        if (!key) {
            throw new Error('key is empty');
        }
        let section = '';
        let option;
        const keys = key.toLowerCase().split('::');
        if (keys.length >= 2) {
            section = keys[0];
            option = keys[1];
        }
        else {
            option = keys[0];
        }
        this.addConfig(section, option, value);
    }
    get(key) {
        let section;
        let option;
        const keys = key.toLowerCase().split('::');
        if (keys.length >= 2) {
            section = keys[0];
            option = keys[1];
        }
        else {
            section = Config.DEFAULT_SECTION;
            option = keys[0];
        }
        const item = this.data.get(section);
        const itemChild = item && item.get(option);
        return itemChild ? itemChild : '';
    }
}
exports.Config = Config;
Config.DEFAULT_SECTION = 'default';
Config.DEFAULT_COMMENT = '#';
Config.DEFAULT_COMMENT_SEM = ';';
Config.DEFAULT_MULTI_LINE_SEPARATOR = '\\';


/***/ }),

/***/ 8724:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoreEnforcer = void 0;
const expression_eval_1 = __nccwpck_require__(1960);
const effect_1 = __nccwpck_require__(8181);
const model_1 = __nccwpck_require__(9913);
const rbac_1 = __nccwpck_require__(8216);
const enforceContext_1 = __nccwpck_require__(190);
const util_1 = __nccwpck_require__(7080);
const log_1 = __nccwpck_require__(7242);
/**
 * CoreEnforcer defines the core functionality of an enforcer.
 */
class CoreEnforcer {
    constructor() {
        this.fm = model_1.FunctionMap.loadFunctionMap();
        this.eft = new effect_1.DefaultEffector();
        this.matcherMap = new Map();
        this.defaultEnforceContext = new enforceContext_1.EnforceContext('r', 'p', 'e', 'm');
        this.watcher = null;
        this.watcherEx = null;
        this.enabled = true;
        this.autoSave = true;
        this.autoBuildRoleLinks = true;
        this.autoNotifyWatcher = true;
        this.acceptJsonRequest = false;
    }
    /**
     * setFileSystem sets a file system to read the model file or the policy file.
     * @param fs {@link FileSystem}
     */
    setFileSystem(fs) {
        this.fs = fs;
    }
    /**
     * getFileSystem gets the file system,
     */
    getFileSystem() {
        return this.fs;
    }
    getExpression(asyncCompile, exp) {
        const matcherKey = `${asyncCompile ? 'ASYNC[' : 'SYNC['}${exp}]`;
        expression_eval_1.addBinaryOp('in', 1, util_1.customIn);
        let expression = this.matcherMap.get(matcherKey);
        if (!expression) {
            exp = util_1.bracketCompatible(exp);
            expression = asyncCompile ? expression_eval_1.compileAsync(exp) : expression_eval_1.compile(exp);
            this.matcherMap.set(matcherKey, expression);
        }
        return expression;
    }
    /**
     * loadModel reloads the model from the model CONF file.
     * Because the policy is attached to a model,
     * so the policy is invalidated and needs to be reloaded by calling LoadPolicy().
     */
    loadModel() {
        this.model = model_1.newModelFromFile(this.modelPath, this.fs);
        this.model.printModel();
    }
    /**
     * getModel gets the current model.
     *
     * @return the model of the enforcer.
     */
    getModel() {
        return this.model;
    }
    /**
     * setModel sets the current model.
     *
     * @param m the model.
     */
    setModel(m) {
        this.model = m;
    }
    /**
     * getAdapter gets the current adapter.
     *
     * @return the adapter of the enforcer.
     */
    getAdapter() {
        return this.adapter;
    }
    /**
     * setAdapter sets the current adapter.
     *
     * @param adapter the adapter.
     */
    setAdapter(adapter) {
        this.adapter = adapter;
    }
    /**
     * setWatcher sets the current watcher.
     *
     * @param watcher the watcher.
     */
    setWatcher(watcher) {
        this.watcher = watcher;
        watcher.setUpdateCallback(async () => await this.loadPolicy());
    }
    /**
     * setWatcherEx sets the current watcherEx.
     *
     * @param watcherEx the watcherEx.
     */
    setWatcherEx(watcherEx) {
        this.watcherEx = watcherEx;
    }
    /**
     * setRoleManager sets the current role manager.
     *
     * @param rm the role manager.
     */
    setRoleManager(rm) {
        this.rmMap.set('g', rm);
    }
    /**
     * setRoleManager sets the role manager for the named policy.
     *
     * @param ptype the named policy.
     * @param rm the role manager.
     */
    setNamedRoleManager(ptype, rm) {
        this.rmMap.set(ptype, rm);
    }
    /**
     * getRoleManager gets the current role manager.
     */
    getRoleManager() {
        return this.rmMap.get('g');
    }
    /**
     * getNamedRoleManager gets role manager by name.
     */
    getNamedRoleManager(name) {
        return this.rmMap.get(name);
    }
    /**
     * setEffector sets the current effector.
     *
     * @param eft the effector.
     */
    setEffector(eft) {
        this.eft = eft;
    }
    /**
     * clearPolicy clears all policy.
     */
    clearPolicy() {
        this.model.clearPolicy();
    }
    initRmMap() {
        this.rmMap = new Map();
        const rm = this.model.model.get('g');
        if (rm) {
            for (const ptype of rm.keys()) {
                this.rmMap.set(ptype, new rbac_1.DefaultRoleManager(10));
            }
        }
    }
    sortPolicies() {
        var _a;
        (_a = this.model.model.get('p')) === null || _a === void 0 ? void 0 : _a.forEach((value, key) => {
            const policy = value.policy;
            const tokens = value.tokens;
            if (policy && tokens) {
                const priorityIndex = tokens.indexOf(`${key}_priority`);
                if (priorityIndex !== -1) {
                    policy.sort((a, b) => {
                        return parseInt(a[priorityIndex], 10) - parseInt(b[priorityIndex], 10);
                    });
                }
            }
        });
    }
    /**
     * loadPolicy reloads the policy from file/database.
     */
    async loadPolicy() {
        this.model.clearPolicy();
        await this.adapter.loadPolicy(this.model);
        this.sortPolicies();
        this.model.sortPoliciesBySubjectHierarchy();
        if (this.autoBuildRoleLinks) {
            await this.buildRoleLinksInternal();
        }
    }
    /**
     * loadFilteredPolicy reloads a filtered policy from file/database.
     *
     * @param filter the filter used to specify which type of policy should be loaded.
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async loadFilteredPolicy(filter) {
        this.model.clearPolicy();
        this.sortPolicies();
        this.model.sortPoliciesBySubjectHierarchy();
        return this.loadIncrementalFilteredPolicy(filter);
    }
    /**
     * LoadIncrementalFilteredPolicy append a filtered policy from file/database.
     *
     * @param filter the filter used to specify which type of policy should be appended.
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async loadIncrementalFilteredPolicy(filter) {
        if ('isFiltered' in this.adapter) {
            await this.adapter.loadFilteredPolicy(this.model, filter);
        }
        else {
            throw new Error('filtered policies are not supported by this adapter');
        }
        this.sortPolicies();
        if (this.autoBuildRoleLinks) {
            await this.buildRoleLinksInternal();
        }
        return true;
    }
    /**
     * isFiltered returns true if the loaded policy has been filtered.
     *
     * @return if the loaded policy has been filtered.
     */
    isFiltered() {
        if ('isFiltered' in this.adapter) {
            return this.adapter.isFiltered();
        }
        return false;
    }
    /**
     * savePolicy saves the current policy (usually after changed with
     * Casbin API) back to file/database.
     */
    async savePolicy() {
        if (this.isFiltered()) {
            throw new Error('Cannot save a filtered policy');
        }
        const flag = await this.adapter.savePolicy(this.model);
        if (!flag) {
            return false;
        }
        if (this.watcherEx) {
            return await this.watcherEx.updateForSavePolicy(this.model);
        }
        else if (this.watcher) {
            return await this.watcher.update();
        }
        return true;
    }
    /**
     * enableEnforce changes the enforcing state of Casbin, when Casbin is
     * disabled, all access will be allowed by the enforce() function.
     *
     * @param enable whether to enable the enforcer.
     */
    enableEnforce(enable) {
        this.enabled = enable;
    }
    /**
     * enableLog changes whether to print Casbin log to the standard output.
     *
     * @param enable whether to enable Casbin's log.
     */
    enableLog(enable) {
        log_1.getLogger().enableLog(enable);
    }
    /**
     * enableAutoSave controls whether to save a policy rule automatically to
     * the adapter when it is added or removed.
     *
     * @param autoSave whether to enable the AutoSave feature.
     */
    enableAutoSave(autoSave) {
        this.autoSave = autoSave;
    }
    /**
     * enableAutoNotifyWatcher controls whether to save a policy rule automatically notify the Watcher when it is added or removed.
     * @param enable whether to enable the AutoNotifyWatcher feature.
     */
    enableAutoNotifyWatcher(enable) {
        this.autoNotifyWatcher = enable;
    }
    /**
     * enableAcceptJsonRequest determines whether to attempt parsing request args as JSON
     *
     * @param enable whether to attempt parsing request args as JSON
     */
    enableAcceptJsonRequest(enable) {
        this.acceptJsonRequest = enable;
    }
    /**
     * enableAutoBuildRoleLinks controls whether to save a policy rule
     * automatically to the adapter when it is added or removed.
     *
     * @param autoBuildRoleLinks whether to automatically build the role links.
     */
    enableAutoBuildRoleLinks(autoBuildRoleLinks) {
        this.autoBuildRoleLinks = autoBuildRoleLinks;
    }
    /**
     * add matching function to RoleManager by ptype
     * @param ptype g
     * @param fn the function will be added
     */
    async addNamedMatchingFunc(ptype, fn) {
        const rm = this.rmMap.get(ptype);
        if (rm) {
            return await rm.addMatchingFunc(fn);
        }
        throw Error('Target ptype not found.');
    }
    /**
     * add domain matching function to RoleManager by ptype
     * @param ptype g
     * @param fn the function will be added
     */
    async addNamedDomainMatchingFunc(ptype, fn) {
        const rm = this.rmMap.get(ptype);
        if (rm) {
            return await rm.addDomainMatchingFunc(fn);
        }
    }
    /**
     * buildRoleLinks manually rebuild the role inheritance relations.
     */
    async buildRoleLinks() {
        return this.buildRoleLinksInternal();
    }
    /**
     * buildIncrementalRoleLinks provides incremental build the role inheritance relations.
     * @param op policy operation
     * @param ptype g
     * @param rules policies
     */
    async buildIncrementalRoleLinks(op, ptype, rules) {
        let rm = this.rmMap.get(ptype);
        if (!rm) {
            rm = new rbac_1.DefaultRoleManager(10);
            this.rmMap.set(ptype, rm);
        }
        await this.model.buildIncrementalRoleLinks(rm, op, 'g', ptype, rules);
    }
    async buildRoleLinksInternal() {
        for (const rm of this.rmMap.values()) {
            await rm.clear();
            await this.model.buildRoleLinks(this.rmMap);
        }
    }
    *privateEnforce(asyncCompile = true, explain = false, matcher, enforceContext = new enforceContext_1.EnforceContext('r', 'p', 'e', 'm'), ...rvals) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (!this.enabled) {
            return true;
        }
        let explainIndex = -1;
        const functions = {};
        this.fm.getFunctions().forEach((value, key) => {
            functions[key] = value;
        });
        const astMap = this.model.model.get('g');
        astMap === null || astMap === void 0 ? void 0 : astMap.forEach((value, key) => {
            const rm = value.rm;
            functions[key] = asyncCompile ? util_1.generateGFunction(rm) : util_1.generateSyncedGFunction(rm);
        });
        let expString;
        if (!matcher) {
            expString = (_b = (_a = this.model.model.get('m')) === null || _a === void 0 ? void 0 : _a.get(enforceContext.mType)) === null || _b === void 0 ? void 0 : _b.value;
        }
        else {
            expString = util_1.removeComments(util_1.escapeAssertion(matcher));
        }
        if (!expString) {
            throw new Error('Unable to find matchers in model');
        }
        const effectExpr = (_d = (_c = this.model.model.get('e')) === null || _c === void 0 ? void 0 : _c.get(enforceContext.eType)) === null || _d === void 0 ? void 0 : _d.value;
        if (!effectExpr) {
            throw new Error('Unable to find policy_effect in model');
        }
        const HasEval = util_1.hasEval(expString);
        let expression = undefined;
        const p = (_e = this.model.model.get('p')) === null || _e === void 0 ? void 0 : _e.get(enforceContext.pType);
        const policyLen = (_f = p === null || p === void 0 ? void 0 : p.policy) === null || _f === void 0 ? void 0 : _f.length;
        const rTokens = (_h = (_g = this.model.model.get('r')) === null || _g === void 0 ? void 0 : _g.get(enforceContext.rType)) === null || _h === void 0 ? void 0 : _h.tokens;
        const rTokensLen = rTokens === null || rTokens === void 0 ? void 0 : rTokens.length;
        const effectStream = this.eft.newStream(effectExpr);
        if (policyLen && policyLen !== 0 && expString.includes(`${enforceContext.pType}_`)) {
            for (let i = 0; i < policyLen; i++) {
                const parameters = {};
                if ((rTokens === null || rTokens === void 0 ? void 0 : rTokens.length) !== rvals.length) {
                    throw new Error(`invalid request size: expected ${rTokensLen}, got ${rvals.length}, rvals: ${rvals}"`);
                }
                if (this.acceptJsonRequest) {
                    // Attempt to parse each request parameter as JSON; continue with string if failed
                    rTokens.forEach((token, j) => {
                        try {
                            parameters[token] = JSON.parse(rvals[j]);
                        }
                        catch (_a) {
                            parameters[token] = rvals[j];
                        }
                    });
                }
                else {
                    rTokens.forEach((token, j) => {
                        parameters[token] = rvals[j];
                    });
                }
                p === null || p === void 0 ? void 0 : p.tokens.forEach((token, j) => {
                    parameters[token] = p === null || p === void 0 ? void 0 : p.policy[i][j];
                });
                if (HasEval) {
                    const ruleNames = util_1.getEvalValue(expString);
                    let expWithRule = expString;
                    for (const ruleName of ruleNames) {
                        if (ruleName in parameters) {
                            const rule = util_1.escapeAssertion(parameters[ruleName]);
                            expWithRule = util_1.replaceEval(expWithRule, ruleName, rule);
                        }
                        else {
                            throw new Error(`${ruleName} not in ${parameters}`);
                        }
                    }
                    expression = this.getExpression(asyncCompile, expWithRule);
                }
                else {
                    if (expression === undefined) {
                        expression = this.getExpression(asyncCompile, expString);
                    }
                }
                const context = Object.assign(Object.assign({}, parameters), functions);
                const result = asyncCompile ? yield expression(context) : expression(context);
                let eftRes;
                switch (typeof result) {
                    case 'boolean':
                        eftRes = result ? effect_1.Effect.Allow : effect_1.Effect.Indeterminate;
                        break;
                    case 'number':
                        if (result === 0) {
                            eftRes = effect_1.Effect.Indeterminate;
                        }
                        else {
                            eftRes = result;
                        }
                        break;
                    case 'string':
                        if (result === '') {
                            eftRes = effect_1.Effect.Indeterminate;
                        }
                        else {
                            eftRes = effect_1.Effect.Allow;
                        }
                        break;
                    default:
                        throw new Error('matcher result should only be of type boolean, number, or string');
                }
                const eft = parameters[`${enforceContext.pType}_eft`];
                if (eft && eftRes === effect_1.Effect.Allow) {
                    if (eft === 'allow') {
                        eftRes = effect_1.Effect.Allow;
                    }
                    else if (eft === 'deny') {
                        eftRes = effect_1.Effect.Deny;
                    }
                    else {
                        eftRes = effect_1.Effect.Indeterminate;
                    }
                }
                const [res, rec, done] = effectStream.pushEffect(eftRes);
                if (rec) {
                    explainIndex = i;
                }
                if (done) {
                    break;
                }
            }
        }
        else {
            explainIndex = 0;
            const parameters = {};
            rTokens === null || rTokens === void 0 ? void 0 : rTokens.forEach((token, j) => {
                parameters[token] = rvals[j];
            });
            (_j = p === null || p === void 0 ? void 0 : p.tokens) === null || _j === void 0 ? void 0 : _j.forEach((token) => {
                parameters[token] = '';
            });
            expression = this.getExpression(asyncCompile, expString);
            const context = Object.assign(Object.assign({}, parameters), functions);
            const result = asyncCompile ? yield expression(context) : expression(context);
            if (result) {
                effectStream.pushEffect(effect_1.Effect.Allow);
            }
            else {
                effectStream.pushEffect(effect_1.Effect.Indeterminate);
            }
        }
        const res = effectStream.current();
        // only generate the request --> result string if the message
        // is going to be logged.
        if (log_1.getLogger().isEnable()) {
            let reqStr = 'Request: ';
            for (let i = 0; i < rvals.length; i++) {
                if (i !== rvals.length - 1) {
                    reqStr += `${rvals[i]}, `;
                }
                else {
                    reqStr += rvals[i];
                }
            }
            reqStr += ` ---> ${res}`;
            log_1.logPrint(reqStr);
        }
        if (explain) {
            if (explainIndex === -1) {
                return [res, []];
            }
            return [res, ((_k = p === null || p === void 0 ? void 0 : p.policy) === null || _k === void 0 ? void 0 : _k[explainIndex]) || []];
        }
        return res;
    }
    /**
     * If the matchers does not contain an asynchronous method, call it faster.
     *
     * enforceSync decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    enforceSync(...rvals) {
        if (rvals[0] instanceof enforceContext_1.EnforceContext) {
            const enforceContext = rvals.shift();
            return util_1.generatorRunSync(this.privateEnforce(false, false, '', enforceContext, ...rvals));
        }
        return util_1.generatorRunSync(this.privateEnforce(false, false, '', this.defaultEnforceContext, ...rvals));
    }
    /**
     * If the matchers does not contain an asynchronous method, call it faster.
     *
     * enforceSync decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request and the reason rule.
     */
    enforceExSync(...rvals) {
        if (rvals[0] instanceof enforceContext_1.EnforceContext) {
            const enforceContext = rvals.shift();
            return util_1.generatorRunSync(this.privateEnforce(false, true, '', enforceContext, ...rvals));
        }
        return util_1.generatorRunSync(this.privateEnforce(false, true, '', this.defaultEnforceContext, ...rvals));
    }
    /**
     * Same as enforceSync. To be removed.
     */
    enforceWithSyncCompile(...rvals) {
        return this.enforceSync(...rvals);
    }
    /**
     * enforce decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    async enforce(...rvals) {
        if (rvals[0] instanceof enforceContext_1.EnforceContext) {
            const enforceContext = rvals.shift();
            return util_1.generatorRunAsync(this.privateEnforce(true, false, '', enforceContext, ...rvals));
        }
        return util_1.generatorRunAsync(this.privateEnforce(true, false, '', this.defaultEnforceContext, ...rvals));
    }
    /**
     * enforceWithMatcher decides whether a "subject" can access a "object" with
     * the operation "action" but with the matcher passed,
     * input parameters are usually: (matcher, sub, obj, act).
     *
     * @param matcher matcher string.
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    async enforceWithMatcher(matcher, ...rvals) {
        if (rvals[0] instanceof enforceContext_1.EnforceContext) {
            const enforceContext = rvals.shift();
            return util_1.generatorRunAsync(this.privateEnforce(true, false, matcher, enforceContext, ...rvals));
        }
        return util_1.generatorRunAsync(this.privateEnforce(true, false, matcher, this.defaultEnforceContext, ...rvals));
    }
    /**
     * enforce decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request and the reason rule.
     */
    async enforceEx(...rvals) {
        if (rvals[0] instanceof enforceContext_1.EnforceContext) {
            const enforceContext = rvals.shift();
            return util_1.generatorRunAsync(this.privateEnforce(true, true, '', enforceContext, ...rvals));
        }
        return util_1.generatorRunAsync(this.privateEnforce(true, true, '', this.defaultEnforceContext, ...rvals));
    }
    /**
     * enforceExWithMatcher decides whether a "subject" can access a "object" with
     * the operation "action" but with the matcher passed,
     *  input parameters are usually: (matcher, sub, obj, act).
     *
     * @param matcher matcher string.
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request and the reason rule.
     */
    async enforceExWithMatcher(matcher, ...rvals) {
        if (rvals[0] instanceof enforceContext_1.EnforceContext) {
            const enforceContext = rvals.shift();
            return util_1.generatorRunAsync(this.privateEnforce(true, true, matcher, enforceContext, ...rvals));
        }
        return util_1.generatorRunAsync(this.privateEnforce(true, true, matcher, this.defaultEnforceContext, ...rvals));
    }
    /**
     * batchEnforce enforces each request and returns result in a bool array.
     * @param rvals the request need to be mediated, usually an array
     *              of array of strings, can be class instances if ABAC is used.
     * @returns whether to allow the requests.
     */
    async batchEnforce(rvals) {
        return await Promise.all(rvals.map((rval) => this.enforce(...rval)));
    }
}
exports.CoreEnforcer = CoreEnforcer;


/***/ }),

/***/ 8:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultEffector = void 0;
const defaultEffectorStream_1 = __nccwpck_require__(6712);
/**
 * DefaultEffector is default effector for Casbin.
 */
class DefaultEffector {
    newStream(expr) {
        return new defaultEffectorStream_1.DefaultEffectorStream(expr);
    }
}
exports.DefaultEffector = DefaultEffector;


/***/ }),

/***/ 6712:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultEffectorStream = void 0;
const effector_1 = __nccwpck_require__(2517);
/**
 * DefaultEffectorStream is the default implementation of EffectorStream.
 */
class DefaultEffectorStream {
    constructor(expr) {
        this.done = false;
        this.res = false;
        this.rec = false;
        this.expr = expr;
    }
    current() {
        return this.res;
    }
    pushEffect(eft) {
        switch (this.expr) {
            case "some(where (p_eft == allow))" /* ALLOW */:
                if (eft === effector_1.Effect.Allow) {
                    this.res = true;
                    this.done = true;
                    this.rec = true;
                }
                break;
            case "!some(where (p_eft == deny))" /* DENY */:
                this.res = true;
                if (eft === effector_1.Effect.Deny) {
                    this.res = false;
                    this.done = true;
                    this.rec = true;
                }
                break;
            case "some(where (p_eft == allow)) && !some(where (p_eft == deny))" /* ALLOW_AND_DENY */:
                if (eft === effector_1.Effect.Allow) {
                    this.res = true;
                    this.rec = true;
                }
                else if (eft === effector_1.Effect.Deny) {
                    this.res = false;
                    this.done = true;
                    this.rec = true;
                }
                else {
                    this.rec = false;
                }
                break;
            case "priority(p_eft) || deny" /* PRIORITY */:
            case "subjectPriority(p_eft) || deny" /* SUBJECT_PRIORITY */:
                if (eft !== effector_1.Effect.Indeterminate) {
                    this.res = eft === effector_1.Effect.Allow;
                    this.done = true;
                    this.rec = true;
                }
                break;
            default:
                throw new Error('unsupported effect');
        }
        return [this.res, this.rec, this.done];
    }
}
exports.DefaultEffectorStream = DefaultEffectorStream;


/***/ }),

/***/ 2517:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Effect = void 0;
var Effect;
(function (Effect) {
    Effect[Effect["Allow"] = 1] = "Allow";
    Effect[Effect["Indeterminate"] = 2] = "Indeterminate";
    Effect[Effect["Deny"] = 3] = "Deny";
})(Effect = exports.Effect || (exports.Effect = {}));


/***/ }),

/***/ 2789:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8181:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(2517), exports);
__exportStar(__nccwpck_require__(2789), exports);
__exportStar(__nccwpck_require__(8), exports);
__exportStar(__nccwpck_require__(6712), exports);


/***/ }),

/***/ 190:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2023 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newEnforceContext = exports.EnforceContext = void 0;
class EnforceContext {
    constructor(rType, pType, eType, mType) {
        this.pType = pType;
        this.eType = eType;
        this.mType = mType;
        this.rType = rType;
    }
}
exports.EnforceContext = EnforceContext;
exports.newEnforceContext = (index) => {
    return new EnforceContext('r' + index, 'p' + index, 'e' + index, 'm' + index);
};


/***/ }),

/***/ 4871:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newEnforcer = exports.newEnforcerWithClass = exports.Enforcer = void 0;
const managementEnforcer_1 = __nccwpck_require__(3040);
const model_1 = __nccwpck_require__(9913);
const persist_1 = __nccwpck_require__(1908);
const log_1 = __nccwpck_require__(7242);
const util_1 = __nccwpck_require__(7080);
/**
 * Enforcer = ManagementEnforcer + RBAC API.
 */
class Enforcer extends managementEnforcer_1.ManagementEnforcer {
    /**
     * initWithFile initializes an enforcer with a model file and a policy file.
     * @param modelPath model file path
     * @param policyPath policy file path
     * @param lazyLoad lazyLoad whether to load policy at initial time
     */
    async initWithFile(modelPath, policyPath, lazyLoad = false) {
        const a = new persist_1.FileAdapter(policyPath, this.fs);
        await this.initWithAdapter(modelPath, a, lazyLoad);
    }
    /**
     * initWithFile initializes an enforcer with a model file and a policy file.
     * @param modelPath model file path
     * @param policyString policy CSV string
     * @param lazyLoad whether to load policy at initial time
     */
    async initWithString(modelPath, policyString, lazyLoad = false) {
        const a = new persist_1.StringAdapter(policyString);
        await this.initWithAdapter(modelPath, a, lazyLoad);
    }
    /**
     * initWithAdapter initializes an enforcer with a database adapter.
     * @param modelPath model file path
     * @param adapter current adapter instance
     * @param lazyLoad whether to load policy at initial time
     */
    async initWithAdapter(modelPath, adapter, lazyLoad = false) {
        const m = model_1.newModelFromFile(modelPath, this.fs);
        await this.initWithModelAndAdapter(m, adapter, lazyLoad);
        this.modelPath = modelPath;
    }
    /**
     * initWithModelAndAdapter initializes an enforcer with a model and a database adapter.
     * @param m model instance
     * @param adapter current adapter instance
     * @param lazyLoad whether to load policy at initial time
     */
    async initWithModelAndAdapter(m, adapter, lazyLoad = false) {
        if (adapter) {
            this.adapter = adapter;
        }
        this.model = m;
        this.model.printModel();
        this.initRmMap();
        if (!lazyLoad && this.adapter) {
            await this.loadPolicy();
        }
    }
    /**
     * getRolesForUser gets the roles that a user has.
     *
     * @param name the user.
     * @param domain the domain.
     * @return the roles that the user has.
     */
    async getRolesForUser(name, domain) {
        const rm = this.rmMap.get('g');
        if (rm) {
            if (domain === undefined) {
                return rm.getRoles(name);
            }
            else {
                return rm.getRoles(name, domain);
            }
        }
        throw new Error("RoleManager didn't exist.");
    }
    /**
     * getUsersForRole gets the users that has a role.
     *
     * @param name the role.
     * @param domain the domain.
     * @return the users that has the role.
     */
    async getUsersForRole(name, domain) {
        const rm = this.rmMap.get('g');
        if (rm) {
            if (domain === undefined) {
                return rm.getUsers(name);
            }
            else {
                return rm.getUsers(name, domain);
            }
        }
        throw new Error("RoleManager didn't exist.");
    }
    /**
     * hasRoleForUser determines whether a user has a role.
     *
     * @param name the user.
     * @param role the role.
     * @param domain the domain.
     * @return whether the user has the role.
     */
    async hasRoleForUser(name, role, domain) {
        const roles = await this.getRolesForUser(name, domain);
        let hasRole = false;
        for (const r of roles) {
            if (r === role) {
                hasRole = true;
                break;
            }
        }
        return hasRole;
    }
    /**
     * addRoleForUser adds a role for a user.
     * Returns false if the user already has the role (aka not affected).
     *
     * @param user the user.
     * @param role the role.
     * @param domain the domain.
     * @return succeeds or not.
     */
    async addRoleForUser(user, role, domain) {
        if (domain === undefined) {
            return this.addGroupingPolicy(user, role);
        }
        else {
            return this.addGroupingPolicy(user, role, domain);
        }
    }
    /**
     * deleteRoleForUser deletes a role for a user.
     * Returns false if the user does not have the role (aka not affected).
     *
     * @param user the user.
     * @param role the role.
     * @param domain the domain.
     * @return succeeds or not.
     */
    async deleteRoleForUser(user, role, domain) {
        if (!user) {
            throw new Error('user must not be empty');
        }
        if (!role) {
            throw new Error('role must not be empty');
        }
        if (domain === undefined) {
            return this.removeGroupingPolicy(user, role);
        }
        else {
            return this.removeGroupingPolicy(user, role, domain);
        }
    }
    /**
     * deleteRolesForUser deletes all roles for a user.
     * Returns false if the user does not have any roles (aka not affected).
     *
     * @param user the user.
     * @param domain the domain.
     * @return succeeds or not.
     */
    async deleteRolesForUser(user, domain) {
        if (!user) {
            throw new Error('user must not be empty');
        }
        if (domain === undefined) {
            const subIndex = this.getFieldIndex('p', "sub" /* Subject */);
            return this.removeFilteredGroupingPolicy(subIndex, user);
        }
        else {
            return this.removeFilteredGroupingPolicy(0, user, '', domain);
        }
    }
    /**
     * deleteUser deletes a user.
     * Returns false if the user does not exist (aka not affected).
     *
     * @param user the user.
     * @return succeeds or not.
     */
    async deleteUser(user) {
        if (!user) {
            throw new Error('user must not be empty');
        }
        const subIndex = this.getFieldIndex('p', "sub" /* Subject */);
        const res1 = await this.removeFilteredGroupingPolicy(subIndex, user);
        const res2 = await this.removeFilteredPolicy(subIndex, user);
        return res1 || res2;
    }
    /**
     * deleteRole deletes a role.
     * Returns false if the role does not exist (aka not affected).
     *
     * @param role the role.
     * @return succeeds or not.
     */
    async deleteRole(role) {
        if (!role) {
            throw new Error('role must not be empty');
        }
        const subIndex = this.getFieldIndex('p', "sub" /* Subject */);
        const res1 = await this.removeFilteredGroupingPolicy(subIndex, role);
        const res2 = await this.removeFilteredPolicy(subIndex, role);
        return res1 || res2;
    }
    /**
     * deletePermission deletes a permission.
     * Returns false if the permission does not exist (aka not affected).
     *
     * @param permission the permission, usually be (obj, act). It is actually the rule without the subject.
     * @return succeeds or not.
     */
    async deletePermission(...permission) {
        if (permission.length === 0) {
            throw new Error('permission must not be empty');
        }
        return this.removeFilteredPolicy(1, ...permission);
    }
    /**
     * addPermissionForUser adds a permission for a user or role.
     * Returns false if the user or role already has the permission (aka not affected).
     *
     * @param user the user.
     * @param permission the permission, usually be (obj, act). It is actually the rule without the subject.
     * @return succeeds or not.
     */
    async addPermissionForUser(user, ...permission) {
        permission.unshift(user);
        return this.addPolicy(...permission);
    }
    /**
     * deletePermissionForUser deletes a permission for a user or role.
     * Returns false if the user or role does not have the permission (aka not affected).
     *
     * @param user the user.
     * @param permission the permission, usually be (obj, act). It is actually the rule without the subject.
     * @return succeeds or not.
     */
    async deletePermissionForUser(user, ...permission) {
        if (!user) {
            throw new Error('user must not be empty');
        }
        permission.unshift(user);
        return this.removePolicy(...permission);
    }
    /**
     * deletePermissionsForUser deletes permissions for a user or role.
     * Returns false if the user or role does not have any permissions (aka not affected).
     *
     * @param user the user.
     * @return succeeds or not.
     */
    async deletePermissionsForUser(user) {
        if (!user) {
            throw new Error('user must not be empty');
        }
        const subIndex = this.getFieldIndex('p', "sub" /* Subject */);
        return this.removeFilteredPolicy(subIndex, user);
    }
    /**
     * getPermissionsForUser gets permissions for a user or role.
     *
     * @param user the user.
     * @return the permissions, a permission is usually like (obj, act). It is actually the rule without the subject.
     */
    async getPermissionsForUser(user) {
        const subIndex = this.getFieldIndex('p', "sub" /* Subject */);
        return this.getFilteredPolicy(subIndex, user);
    }
    /**
     * hasPermissionForUser determines whether a user has a permission.
     *
     * @param user the user.
     * @param permission the permission, usually be (obj, act). It is actually the rule without the subject.
     * @return whether the user has the permission.
     */
    async hasPermissionForUser(user, ...permission) {
        permission.unshift(user);
        return this.hasPolicy(...permission);
    }
    /**
     * getImplicitRolesForUser gets implicit roles that a user has.
     * Compared to getRolesForUser(), this function retrieves indirect roles besides direct roles.
     * For example:
     * g, alice, role:admin
     * g, role:admin, role:user
     *
     * getRolesForUser("alice") can only get: ["role:admin"].
     * But getImplicitRolesForUser("alice") will get: ["role:admin", "role:user"].
     */
    async getImplicitRolesForUser(name, ...domain) {
        const res = new Set();
        const q = [name];
        let n;
        while ((n = q.shift()) !== undefined) {
            for (const rm of this.rmMap.values()) {
                const role = await rm.getRoles(n, ...domain);
                role.forEach((r) => {
                    if (!res.has(r)) {
                        res.add(r);
                        q.push(r);
                    }
                });
            }
        }
        return Array.from(res);
    }
    /**
     * getImplicitPermissionsForUser gets implicit permissions for a user or role.
     * Compared to getPermissionsForUser(), this function retrieves permissions for inherited roles.
     * For example:
     * p, admin, data1, read
     * p, alice, data2, read
     * g, alice, admin
     *
     * getPermissionsForUser("alice") can only get: [["alice", "data2", "read"]].
     * But getImplicitPermissionsForUser("alice") will get: [["admin", "data1", "read"], ["alice", "data2", "read"]].
     */
    async getImplicitPermissionsForUser(user, ...domain) {
        const roles = await this.getImplicitRolesForUser(user, ...domain);
        roles.unshift(user);
        const res = [];
        const withDomain = domain && domain.length !== 0;
        for (const n of roles) {
            if (withDomain) {
                const p = await this.getFilteredPolicy(0, n, ...domain);
                res.push(...p);
            }
            else {
                const p = await this.getPermissionsForUser(n);
                res.push(...p);
            }
        }
        return res;
    }
    /**
     * getImplicitResourcesForUser returns all policies that user obtaining in domain.
     */
    async getImplicitResourcesForUser(user, ...domain) {
        const permissions = await this.getImplicitPermissionsForUser(user, ...domain);
        const res = [];
        for (const permission of permissions) {
            if (permission[0] === user) {
                res.push(permission);
                continue;
            }
            let resLocal = [[user]];
            const tokensLength = permission.length;
            const t = [];
            for (const token of permission) {
                if (token === permission[0]) {
                    continue;
                }
                const tokens = await this.getImplicitUsersForRole(token, ...domain);
                tokens.push(token);
                t.push(tokens);
            }
            for (let i = 0; i < tokensLength - 1; i++) {
                const n = [];
                for (const tokens of t[i]) {
                    for (const policy of resLocal) {
                        const t = [...policy];
                        t.push(tokens);
                        n.push(t);
                    }
                }
                resLocal = n;
            }
            res.push(...resLocal);
        }
        return res;
    }
    /**
     * getImplicitUsersForRole gets implicit users that a role has.
     * Compared to getUsersForRole(), this function retrieves indirect users besides direct users.
     * For example:
     * g, alice, role:admin
     * g, role:admin, role:user
     *
     * getUsersForRole("user") can only get: ["role:admin"].
     * But getImplicitUsersForRole("user") will get: ["role:admin", "alice"].
     */
    async getImplicitUsersForRole(role, ...domain) {
        const res = new Set();
        const q = [role];
        let n;
        while ((n = q.shift()) !== undefined) {
            for (const rm of this.rmMap.values()) {
                const user = await rm.getUsers(n, ...domain);
                user.forEach((u) => {
                    if (!res.has(u)) {
                        res.add(u);
                        q.push(u);
                    }
                });
            }
        }
        return Array.from(res);
    }
    /**
     * getRolesForUserInDomain gets the roles that a user has inside a domain
     * An alias for getRolesForUser with the domain params.
     *
     * @param name the user.
     * @param domain the domain.
     * @return the roles that the user has.
     */
    async getRolesForUserInDomain(name, domain) {
        return this.getRolesForUser(name, domain);
    }
    /**
     * getUsersForRoleInFomain gets the users that has a role inside a domain
     * An alias for getUsesForRole with the domain params.
     *
     * @param name the role.
     * @param domain the domain.
     * @return the users that has the role.
     */
    async getUsersForRoleInDomain(name, domain) {
        return this.getUsersForRole(name, domain);
    }
    /**
     * getImplicitUsersForPermission gets implicit users for a permission.
     * For example:
     * p, admin, data1, read
     * p, bob, data1, read
     * g, alice, admin
     *
     * getImplicitUsersForPermission("data1", "read") will get: ["alice", "bob"].
     * Note: only users will be returned, roles (2nd arg in "g") will be excluded.
     */
    async getImplicitUsersForPermission(...permission) {
        const res = [];
        const policySubjects = await this.getAllSubjects();
        const subjects = util_1.arrayRemoveDuplicates([...policySubjects, ...this.model.getValuesForFieldInPolicyAllTypes('g', 0)]);
        const inherits = this.model.getValuesForFieldInPolicyAllTypes('g', 1);
        for (const user of subjects) {
            const allowed = await this.enforce(user, ...permission);
            if (allowed) {
                res.push(user);
            }
        }
        return res.filter((n) => !inherits.some((m) => n === m));
    }
    /**
     * getDomainsForUser gets all domains that a user has.
     */
    async getDomainsForUser(user) {
        const domains = [];
        for (const rm of this.rmMap.values()) {
            const domain = await rm.getDomains(user);
            domains.push(...domain);
        }
        return domains;
    }
    /**
     * getAllDomains gets all domains.
     */
    async getAllDomains() {
        const domains = [];
        for (const rm of this.rmMap.values()) {
            const domain = await rm.getAllDomains();
            domains.push(...domain);
        }
        return util_1.arrayRemoveDuplicates(domains);
    }
}
exports.Enforcer = Enforcer;
async function newEnforcerWithClass(enforcer, ...params) {
    var _a;
    // inject the FS
    if (!persist_1.getDefaultFileSystem()) {
        try {
            if (typeof process !== 'undefined' && ((_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node)) {
                const fs = await Promise.resolve().then(() => __importStar(__nccwpck_require__(9896)));
                const defaultFileSystem = {
                    readFileSync(path, encoding) {
                        return fs.readFileSync(path, { encoding });
                    },
                    writeFileSync(path, text, encoding) {
                        return fs.writeFileSync(path, text, encoding);
                    },
                };
                persist_1.setDefaultFileSystem(defaultFileSystem);
            }
        }
        catch (ignored) { }
    }
    const e = new enforcer();
    let parsedParamLen = 0;
    if (params.length >= 1) {
        const enableLog = params[params.length - 1];
        if (typeof enableLog === 'boolean') {
            log_1.getLogger().enableLog(enableLog);
            parsedParamLen++;
        }
    }
    if (params.length - parsedParamLen === 2) {
        if (typeof params[0] === 'string') {
            if (typeof params[1] === 'string') {
                await e.initWithFile(params[0].toString(), params[1].toString());
            }
            else {
                await e.initWithAdapter(params[0].toString(), params[1], params[2] === true);
            }
        }
        else {
            if (typeof params[1] === 'string') {
                throw new Error('Invalid parameters for enforcer.');
            }
            else {
                await e.initWithModelAndAdapter(params[0], params[1]);
            }
        }
    }
    else if (params.length - parsedParamLen === 1) {
        if (typeof params[0] === 'string') {
            await e.initWithFile(params[0], '');
        }
        else {
            await e.initWithModelAndAdapter(params[0]);
        }
    }
    else if (params.length === parsedParamLen) {
        await e.initWithFile('', '');
    }
    else {
        throw new Error('Invalid parameters for enforcer.');
    }
    return e;
}
exports.newEnforcerWithClass = newEnforcerWithClass;
/**
 * newEnforcer creates an enforcer via file or DB.
 *
 * File:
 * ```js
 * const e = new Enforcer('path/to/basic_model.conf', 'path/to/basic_policy.csv');
 * ```
 *
 * MySQL DB:
 * ```js
 * const a = new MySQLAdapter('mysql', 'mysql_username:mysql_password@tcp(127.0.0.1:3306)/');
 * const e = new Enforcer('path/to/basic_model.conf', a);
 * ```
 *
 * @param params
 */
async function newEnforcer(...params) {
    return newEnforcerWithClass(Enforcer, ...params);
}
exports.newEnforcer = newEnforcer;


/***/ }),

/***/ 263:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.casbinJsGetPermissionForUser = void 0;
const util_1 = __nccwpck_require__(7080);
/**
 * Experiment!
 * getPermissionForCasbinJs returns a string include the whole model.
 * You can pass the returned string to the frontend and manage your webpage widgets and APIs with Casbin.js.
 * @param e the initialized enforcer
 * @param user the user
 */
async function casbinJsGetPermissionForUser(e, user) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const obj = {};
    const m = e.getModel().model;
    let s = '';
    s += '[request_definition]\n';
    s += `r = ${(_b = (_a = m.get('r')) === null || _a === void 0 ? void 0 : _a.get('r')) === null || _b === void 0 ? void 0 : _b.value.replace(/_/g, '.')}\n`;
    s += '[policy_definition]\n';
    s += `p = ${(_d = (_c = m.get('p')) === null || _c === void 0 ? void 0 : _c.get('p')) === null || _d === void 0 ? void 0 : _d.value.replace(/_/g, '.')}\n`;
    if (((_e = m.get('g')) === null || _e === void 0 ? void 0 : _e.get('g')) !== undefined) {
        s += '[role_definition]\n';
        s += `g = ${(_g = (_f = m.get('g')) === null || _f === void 0 ? void 0 : _f.get('g')) === null || _g === void 0 ? void 0 : _g.value}\n`;
    }
    s += '[policy_effect]\n';
    s += `e = ${(_j = (_h = m.get('e')) === null || _h === void 0 ? void 0 : _h.get('e')) === null || _j === void 0 ? void 0 : _j.value.replace(/_/g, '.')}\n`;
    s += '[matchers]\n';
    s += `m = ${(_l = (_k = m.get('m')) === null || _k === void 0 ? void 0 : _k.get('m')) === null || _l === void 0 ? void 0 : _l.value.replace(/_/g, '.')}`;
    obj['m'] = s;
    const policy = util_1.deepCopy(await e.getPolicy());
    const groupPolicy = util_1.deepCopy(await e.getGroupingPolicy());
    policy.forEach((item) => {
        item.unshift('p');
    });
    groupPolicy.forEach((item) => {
        item.unshift('g');
    });
    obj['p'] = [...policy, ...groupPolicy];
    return JSON.stringify(obj);
}
exports.casbinJsGetPermissionForUser = casbinJsGetPermissionForUser;


/***/ }),

/***/ 6463:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Util = void 0;
const Util = __importStar(__nccwpck_require__(7080));
exports.Util = Util;
__exportStar(__nccwpck_require__(2709), exports);
__exportStar(__nccwpck_require__(4871), exports);
__exportStar(__nccwpck_require__(2341), exports);
__exportStar(__nccwpck_require__(1637), exports);
__exportStar(__nccwpck_require__(8181), exports);
__exportStar(__nccwpck_require__(9913), exports);
__exportStar(__nccwpck_require__(1908), exports);
__exportStar(__nccwpck_require__(8216), exports);
__exportStar(__nccwpck_require__(7242), exports);
__exportStar(__nccwpck_require__(190), exports);
__exportStar(__nccwpck_require__(263), exports);


/***/ }),

/***/ 1594:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InternalEnforcer = void 0;
const coreEnforcer_1 = __nccwpck_require__(8724);
const model_1 = __nccwpck_require__(9913);
/**
 * InternalEnforcer = CoreEnforcer + Internal API.
 */
class InternalEnforcer extends coreEnforcer_1.CoreEnforcer {
    /**
     * addPolicyInternal adds a rule to the current policy.
     */
    async addPolicyInternal(sec, ptype, rule, useWatcher) {
        if (this.model.hasPolicy(sec, ptype, rule)) {
            return false;
        }
        // Persist when an adapter is configured and autoSave is enabled.
        if (this.adapter && this.autoSave) {
            try {
                await this.adapter.addPolicy(sec, ptype, rule);
            }
            catch (e) {
                if (e.message !== 'not implemented') {
                    throw e;
                }
            }
        }
        if (useWatcher) {
            if (this.autoNotifyWatcher) {
                // error intentionally ignored
                if (this.watcherEx) {
                    this.watcherEx.updateForAddPolicy(sec, ptype, ...rule);
                }
                else if (this.watcher) {
                    this.watcher.update();
                }
            }
        }
        const ok = this.model.addPolicy(sec, ptype, rule);
        if (sec === 'g' && ok) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, [rule]);
        }
        return ok;
    }
    // addPolicies adds rules to the current policy.
    // removePolicies removes rules from the current policy.
    async addPoliciesInternal(sec, ptype, rules, useWatcher) {
        for (const rule of rules) {
            if (this.model.hasPolicy(sec, ptype, rule)) {
                return false;
            }
        }
        // Persist when an adapter is configured and autoSave is enabled.
        if (this.adapter && this.autoSave) {
            if ('addPolicies' in this.adapter) {
                try {
                    await this.adapter.addPolicies(sec, ptype, rules);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            else {
                throw new Error('cannot to save policy, the adapter does not implement the BatchAdapter');
            }
        }
        if (useWatcher) {
            if (this.autoNotifyWatcher) {
                // error intentionally ignored
                if (this.watcherEx) {
                    this.watcherEx.updateForAddPolicies(sec, ptype, ...rules);
                }
                else if (this.watcher) {
                    this.watcher.update();
                }
            }
        }
        const [ok, effects] = await this.model.addPolicies(sec, ptype, rules);
        if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, effects);
        }
        return ok;
    }
    /**
     * addPoliciesInternalEx adds rules to the current policy.
     * Unlike addPoliciesInternal, this method will filter out rules that already exist
     * and continue to add the remaining rules instead of returning false immediately.
     */
    async addPoliciesInternalEx(sec, ptype, rules, useWatcher) {
        // Filter out existing rules
        const newRules = rules.filter((rule) => !this.model.hasPolicy(sec, ptype, rule));
        // If no new rules to add, return false
        if (newRules.length === 0) {
            return false;
        }
        // Persist when an adapter is configured and autoSave is enabled.
        if (this.adapter && this.autoSave) {
            if ('addPolicies' in this.adapter) {
                try {
                    await this.adapter.addPolicies(sec, ptype, newRules);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            else {
                throw new Error('cannot save policy, the adapter does not implement the BatchAdapter');
            }
        }
        if (useWatcher) {
            if (this.autoNotifyWatcher) {
                // error intentionally ignored
                if (this.watcherEx) {
                    this.watcherEx.updateForAddPolicies(sec, ptype, ...newRules);
                }
                else if (this.watcher) {
                    this.watcher.update();
                }
            }
        }
        const [ok, effects] = await this.model.addPolicies(sec, ptype, newRules);
        if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, effects);
        }
        return ok;
    }
    /**
     * updatePolicyInternal updates a rule from the current policy.
     */
    async updatePolicyInternal(sec, ptype, oldRule, newRule, useWatcher) {
        if (!this.model.hasPolicy(sec, ptype, oldRule)) {
            return false;
        }
        // Persist when an adapter is configured and autoSave is enabled.
        if (this.adapter && this.autoSave) {
            if ('updatePolicy' in this.adapter) {
                try {
                    await this.adapter.updatePolicy(sec, ptype, oldRule, newRule);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            else {
                throw new Error('cannot to update policy, the adapter does not implement the UpdatableAdapter');
            }
        }
        if (useWatcher) {
            if (this.autoNotifyWatcher) {
                // In fact I think it should wait for the respond, but they implement add_policy() like this
                // error intentionally ignored
                if (this.watcher) {
                    this.watcher.update();
                }
            }
        }
        const ok = this.model.updatePolicy(sec, ptype, oldRule, newRule);
        if (sec === 'g' && ok) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, [oldRule]);
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, [newRule]);
        }
        return ok;
    }
    /**
     * removePolicyInternal removes a rule from the current policy.
     */
    async removePolicyInternal(sec, ptype, rule, useWatcher) {
        if (!this.model.hasPolicy(sec, ptype, rule)) {
            return false;
        }
        // Persist when an adapter is configured and autoSave is enabled.
        if (this.adapter && this.autoSave) {
            try {
                await this.adapter.removePolicy(sec, ptype, rule);
            }
            catch (e) {
                if (e.message !== 'not implemented') {
                    throw e;
                }
            }
        }
        if (useWatcher) {
            if (this.autoNotifyWatcher) {
                // error intentionally ignored
                if (this.watcherEx) {
                    this.watcherEx.updateForRemovePolicy(sec, ptype, ...rule);
                }
                else if (this.watcher) {
                    this.watcher.update();
                }
            }
        }
        const ok = await this.model.removePolicy(sec, ptype, rule);
        if (sec === 'g' && ok) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, [rule]);
        }
        return ok;
    }
    // removePolicies removes rules from the current policy.
    async removePoliciesInternal(sec, ptype, rules, useWatcher) {
        for (const rule of rules) {
            if (!this.model.hasPolicy(sec, ptype, rule)) {
                return false;
            }
        }
        // Persist when an adapter is configured and autoSave is enabled.
        if (this.adapter && this.autoSave) {
            if ('removePolicies' in this.adapter) {
                try {
                    await this.adapter.removePolicies(sec, ptype, rules);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            else {
                throw new Error('cannot to save policy, the adapter does not implement the BatchAdapter');
            }
        }
        if (useWatcher) {
            if (this.autoNotifyWatcher) {
                // error intentionally ignored
                if (this.watcherEx) {
                    this.watcherEx.updateForRemovePolicies(sec, ptype, ...rules);
                }
                else if (this.watcher) {
                    this.watcher.update();
                }
            }
        }
        const [ok, effects] = this.model.removePolicies(sec, ptype, rules);
        if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, effects);
        }
        return ok;
    }
    /**
     * removeFilteredPolicyInternal removes rules based on field filters from the current policy.
     */
    async removeFilteredPolicyInternal(sec, ptype, fieldIndex, fieldValues, useWatcher) {
        // Persist when an adapter is configured and autoSave is enabled.
        if (this.adapter && this.autoSave) {
            try {
                await this.adapter.removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues);
            }
            catch (e) {
                if (e.message !== 'not implemented') {
                    throw e;
                }
            }
        }
        if (useWatcher) {
            if (this.autoNotifyWatcher) {
                // error intentionally ignored
                if (this.watcherEx) {
                    this.watcherEx.updateForRemoveFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues);
                }
                else if (this.watcher) {
                    this.watcher.update();
                }
            }
        }
        const [ok, effects] = this.model.removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues);
        if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, effects);
        }
        return ok;
    }
    /**
     * get field index in model.fieldMap.
     */
    getFieldIndex(ptype, field) {
        return this.model.getFieldIndex(ptype, field);
    }
    /**
     *  set index of field
     */
    setFieldIndex(ptype, field, index) {
        var _a;
        const assertion = (_a = this.model.model.get('p')) === null || _a === void 0 ? void 0 : _a.get(ptype);
        assertion === null || assertion === void 0 ? void 0 : assertion.fieldIndexMap.set(field, index);
    }
    async addPolicyWithoutNotify(sec, ptype, rule) {
        if (this.model.hasPolicy(sec, ptype, rule)) {
            return false;
        }
        const ok = this.model.addPolicy(sec, ptype, rule);
        if (sec === 'g' && ok) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, [rule]);
        }
        return ok;
    }
    async addPoliciesWithoutNotify(sec, ptype, rules) {
        for (const rule of rules) {
            if (this.model.hasPolicy(sec, ptype, rule)) {
                return false;
            }
        }
        const [ok, effects] = await this.model.addPolicies(sec, ptype, rules);
        if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, effects);
        }
        return ok;
    }
    async addPoliciesWithoutNotifyEx(sec, ptype, rules) {
        const newRules = rules.filter((rule) => !this.model.hasPolicy(sec, ptype, rule));
        if (newRules.length === 0) {
            return false;
        }
        const [ok, effects] = await this.model.addPolicies(sec, ptype, newRules);
        if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, effects);
        }
        return ok;
    }
    async updatePolicyWithoutNotify(sec, ptype, oldRule, newRule) {
        if (!this.model.hasPolicy(sec, ptype, oldRule)) {
            return false;
        }
        const ok = this.model.updatePolicy(sec, ptype, oldRule, newRule);
        if (sec === 'g' && ok) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, [oldRule]);
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, [newRule]);
        }
        return ok;
    }
    async removePolicyWithoutNotify(sec, ptype, rule) {
        if (!this.model.hasPolicy(sec, ptype, rule)) {
            return false;
        }
        const ok = await this.model.removePolicy(sec, ptype, rule);
        if (sec === 'g' && ok) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, [rule]);
        }
        return ok;
    }
    async removePoliciesWithoutNotify(sec, ptype, rules) {
        for (const rule of rules) {
            if (!this.model.hasPolicy(sec, ptype, rule)) {
                return false;
            }
        }
        const [ok, effects] = this.model.removePolicies(sec, ptype, rules);
        if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, effects);
        }
        return ok;
    }
    async removeFilteredPolicyWithoutNotify(sec, ptype, fieldIndex, fieldValues) {
        const [ok, effects] = this.model.removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues);
        if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
            await this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, effects);
        }
        return ok;
    }
    async updatePoliciesWithoutNotify(sec, ptype, oldRules, newRules) {
        // Mirror the Go updatePoliciesWithoutNotify; reuse the existing internal flow.
        // Because updatePoliciesInternal isn't implemented yet, fall back to per-item updates.
        if (oldRules.length !== newRules.length) {
            throw new Error('the length of oldRules should be equal to the length of newRules');
        }
        for (let i = 0; i < oldRules.length; i++) {
            const ok = await this.updatePolicyWithoutNotify(sec, ptype, oldRules[i], newRules[i]);
            if (!ok) {
                return false;
            }
        }
        return true;
    }
}
exports.InternalEnforcer = InternalEnforcer;


/***/ }),

/***/ 3879:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultLogger = void 0;
// DefaultLogger is the implementation for a Logger
class DefaultLogger {
    constructor() {
        this.enable = false;
    }
    enableLog(enable) {
        this.enable = enable;
    }
    isEnable() {
        return this.enable;
    }
    print(...v) {
        if (this.enable) {
            console.log(...v);
        }
    }
    printf(format, ...v) {
        if (this.enable) {
            console.log(format, ...v);
        }
    }
}
exports.DefaultLogger = DefaultLogger;


/***/ }),

/***/ 7242:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(3879), exports);
__exportStar(__nccwpck_require__(7280), exports);
__exportStar(__nccwpck_require__(1540), exports);


/***/ }),

/***/ 1540:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logPrintf = exports.logPrint = exports.getLogger = exports.setLogger = void 0;
const defaultLogger_1 = __nccwpck_require__(3879);
let logger = new defaultLogger_1.DefaultLogger();
// setLogger sets the current logger.
function setLogger(l) {
    logger = l;
}
exports.setLogger = setLogger;
// getLogger returns the current logger.
function getLogger() {
    return logger;
}
exports.getLogger = getLogger;
// logPrint prints the log.
function logPrint(...v) {
    logger.print(...v);
}
exports.logPrint = logPrint;
// logPrintf prints the log with the format.
function logPrintf(format, ...v) {
    logger.printf(format, ...v);
}
exports.logPrintf = logPrintf;


/***/ }),

/***/ 7280:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 3040:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManagementEnforcer = void 0;
const internalEnforcer_1 = __nccwpck_require__(1594);
/**
 * ManagementEnforcer = InternalEnforcer + Management API.
 */
class ManagementEnforcer extends internalEnforcer_1.InternalEnforcer {
    /**
     * getAllSubjects gets the list of subjects that show up in the current policy.
     *
     * @return all the subjects in "p" policy rules. It actually collects the
     *         0-index elements of "p" policy rules. So make sure your subject
     *         is the 0-index element, like (sub, obj, act). Duplicates are removed.
     */
    async getAllSubjects() {
        return this.getAllNamedSubjects('p');
    }
    /**
     * getAllNamedSubjects gets the list of subjects that show up in the currentnamed policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the subjects in policy rules of the ptype type. It actually
     *         collects the 0-index elements of the policy rules. So make sure
     *         your subject is the 0-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllNamedSubjects(ptype) {
        return this.model.getValuesForFieldInPolicy('p', ptype, 0);
    }
    /**
     * getAllObjects gets the list of objects that show up in the current policy.
     *
     * @return all the objects in "p" policy rules. It actually collects the
     *         1-index elements of "p" policy rules. So make sure your object
     *         is the 1-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllObjects() {
        return this.getAllNamedObjects('p');
    }
    /**
     * getAllNamedObjects gets the list of objects that show up in the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the objects in policy rules of the ptype type. It actually
     *         collects the 1-index elements of the policy rules. So make sure
     *         your object is the 1-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllNamedObjects(ptype) {
        return this.model.getValuesForFieldInPolicy('p', ptype, 1);
    }
    /**
     * getAllActions gets the list of actions that show up in the current policy.
     *
     * @return all the actions in "p" policy rules. It actually collects
     *         the 2-index elements of "p" policy rules. So make sure your action
     *         is the 2-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllActions() {
        return this.getAllNamedActions('p');
    }
    /**
     * GetAllNamedActions gets the list of actions that show up in the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the actions in policy rules of the ptype type. It actually
     *         collects the 2-index elements of the policy rules. So make sure
     *         your action is the 2-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllNamedActions(ptype) {
        return this.model.getValuesForFieldInPolicy('p', ptype, 2);
    }
    /**
     * getAllRoles gets the list of roles that show up in the current policy.
     *
     * @return all the roles in "g" policy rules. It actually collects
     *         the 1-index elements of "g" policy rules. So make sure your
     *         role is the 1-index element, like (sub, role).
     *         Duplicates are removed.
     */
    async getAllRoles() {
        return this.getAllNamedRoles('g');
    }
    /**
     * getAllNamedRoles gets the list of roles that show up in the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @return all the subjects in policy rules of the ptype type. It actually
     *         collects the 0-index elements of the policy rules. So make
     *         sure your subject is the 0-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllNamedRoles(ptype) {
        return this.model.getValuesForFieldInPolicy('g', ptype, 1);
    }
    /**
     * getPolicy gets all the authorization rules in the policy.
     *
     * @return all the "p" policy rules.
     */
    async getPolicy() {
        return this.getNamedPolicy('p');
    }
    /**
     * getFilteredPolicy gets all the authorization rules in the policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "p" policy rules.
     */
    async getFilteredPolicy(fieldIndex, ...fieldValues) {
        return this.getFilteredNamedPolicy('p', fieldIndex, ...fieldValues);
    }
    /**
     * getNamedPolicy gets all the authorization rules in the named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return the "p" policy rules of the specified ptype.
     */
    async getNamedPolicy(ptype) {
        return this.model.getPolicy('p', ptype);
    }
    /**
     * getFilteredNamedPolicy gets all the authorization rules in the named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "p" policy rules of the specified ptype.
     */
    async getFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues) {
        return this.model.getFilteredPolicy('p', ptype, fieldIndex, ...fieldValues);
    }
    /**
     * getGroupingPolicy gets all the role inheritance rules in the policy.
     *
     * @return all the "g" policy rules.
     */
    async getGroupingPolicy() {
        return this.getNamedGroupingPolicy('g');
    }
    /**
     * getFilteredGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value "" means not to match this field.
     * @return the filtered "g" policy rules.
     */
    async getFilteredGroupingPolicy(fieldIndex, ...fieldValues) {
        return this.getFilteredNamedGroupingPolicy('g', fieldIndex, ...fieldValues);
    }
    /**
     * getNamedGroupingPolicy gets all the role inheritance rules in the policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @return the "g" policy rules of the specified ptype.
     */
    async getNamedGroupingPolicy(ptype) {
        return this.model.getPolicy('g', ptype);
    }
    /**
     * getFilteredNamedGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "g" policy rules of the specified ptype.
     */
    async getFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues) {
        return this.model.getFilteredPolicy('g', ptype, fieldIndex, ...fieldValues);
    }
    /**
     * hasPolicy determines whether an authorization rule exists.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return whether the rule exists.
     */
    async hasPolicy(...params) {
        return this.hasNamedPolicy('p', ...params);
    }
    /**
     * hasNamedPolicy determines whether a named authorization rule exists.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return whether the rule exists.
     */
    async hasNamedPolicy(ptype, ...params) {
        return this.model.hasPolicy('p', ptype, params);
    }
    /**
     * addPolicy adds an authorization rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    async addPolicy(...params) {
        return this.addNamedPolicy('p', ...params);
    }
    /**
     * addPolicies adds authorization rules to the current policy.
     * If the rule already exists, the function returns false and the rules will not be added.
     * Otherwise the function returns true by adding the new rules.
     *
     * @param rules the "p" policy rules, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    async addPolicies(rules) {
        return this.addNamedPolicies('p', rules);
    }
    /**
     * addNamedPolicy adds an authorization rule to the current named policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return succeeds or not.
     */
    async addNamedPolicy(ptype, ...params) {
        return this.addPolicyInternal('p', ptype, params, true);
    }
    /**
     * addNamedPolicies adds authorization rules to the current named policy.
     * If the rule already exists, the function returns false and the rules will not be added.
     * Otherwise the function returns true by adding the new rules.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param rules the "p" policy rules.
     * @return succeeds or not.
     */
    async addNamedPolicies(ptype, rules) {
        return this.addPoliciesInternal('p', ptype, rules, true);
    }
    /**
     * addPoliciesEx adds authorization rules to the current policy.
     * If a rule already exists, the function will skip it and continue to add the remaining rules.
     * The function returns true if at least one rule was added successfully.
     *
     * @param rules the "p" policy rules, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    async addPoliciesEx(rules) {
        return this.addNamedPoliciesEx('p', rules);
    }
    /**
     * addNamedPoliciesEx adds authorization rules to the current named policy.
     * If a rule already exists, the function will skip it and continue to add the remaining rules.
     * The function returns true if at least one rule was added successfully.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param rules the "p" policy rules.
     * @return succeeds or not.
     */
    async addNamedPoliciesEx(ptype, rules) {
        return this.addPoliciesInternalEx('p', ptype, rules, true);
    }
    /**
     * updatePolicy updates an authorization rule from the current policy.
     * If the rule not exists, the function returns false.
     * Otherwise the function returns true by changing it to the new rule.
     *
     * @return succeeds or not.
     * @param oldRule the policy will be remove
     * @param newRule the policy will be added
     */
    async updatePolicy(oldRule, newRule) {
        return this.updateNamedPolicy('p', oldRule, newRule);
    }
    /**
     * updateNamedPolicy updates an authorization rule from the current named policy.
     * If the rule not exists, the function returns false.
     * Otherwise the function returns true by changing it to the new rule.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param oldRule the policy rule will be remove
     * @param newRule the policy rule will be added
     * @return succeeds or not.
     */
    async updateNamedPolicy(ptype, oldRule, newRule) {
        return this.updatePolicyInternal('p', ptype, oldRule, newRule, true);
    }
    /**
     * removePolicy removes an authorization rule from the current policy.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    async removePolicy(...params) {
        return this.removeNamedPolicy('p', ...params);
    }
    /**
     * removePolicies removes an authorization rules from the current policy.
     *
     * @param rules the "p" policy rules, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    async removePolicies(rules) {
        return this.removeNamedPolicies('p', rules);
    }
    /**
     * removeFilteredPolicy removes an authorization rule from the current policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    async removeFilteredPolicy(fieldIndex, ...fieldValues) {
        return this.removeFilteredNamedPolicy('p', fieldIndex, ...fieldValues);
    }
    /**
     * removeNamedPolicy removes an authorization rule from the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return succeeds or not.
     */
    async removeNamedPolicy(ptype, ...params) {
        return this.removePolicyInternal('p', ptype, params, true);
    }
    /**
     * removeNamedPolicies removes authorization rules from the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param rules the "p" policy rules.
     * @return succeeds or not.
     */
    async removeNamedPolicies(ptype, rules) {
        return this.removePoliciesInternal('p', ptype, rules, true);
    }
    /**
     * removeFilteredNamedPolicy removes an authorization rule from the current named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    async removeFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues) {
        return this.removeFilteredPolicyInternal('p', ptype, fieldIndex, fieldValues, true);
    }
    /**
     * hasGroupingPolicy determines whether a role inheritance rule exists.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return whether the rule exists.
     */
    async hasGroupingPolicy(...params) {
        return this.hasNamedGroupingPolicy('g', ...params);
    }
    /**
     * hasNamedGroupingPolicy determines whether a named role inheritance rule exists.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return whether the rule exists.
     */
    async hasNamedGroupingPolicy(ptype, ...params) {
        return this.model.hasPolicy('g', ptype, params);
    }
    /**
     * addGroupingPolicy adds a role inheritance rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    async addGroupingPolicy(...params) {
        return this.addNamedGroupingPolicy('g', ...params);
    }
    /**
     * addGroupingPolicies adds a role inheritance rules to the current policy.
     * If the rule already exists, the function returns false and the rules will not be added.
     * Otherwise the function returns true by adding the new rules.
     *
     * @param rules the "g" policy rules, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    async addGroupingPolicies(rules) {
        return this.addNamedGroupingPolicies('g', rules);
    }
    /**
     * addNamedGroupingPolicy adds a named role inheritance rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return succeeds or not.
     */
    async addNamedGroupingPolicy(ptype, ...params) {
        return this.addPolicyInternal('g', ptype, params, true);
    }
    /**
     * addNamedGroupingPolicies adds named role inheritance rules to the current policy.
     * If the rule already exists, the function returns false and the rules will not be added.
     * Otherwise the function returns true by adding the new rules.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param rules the "g" policy rule.
     * @return succeeds or not.
     */
    async addNamedGroupingPolicies(ptype, rules) {
        return this.addPoliciesInternal('g', ptype, rules, true);
    }
    /**
     * addGroupingPoliciesEx adds role inheritance rules to the current policy.
     * If a rule already exists, the function will skip it and continue to add the remaining rules.
     * The function returns true if at least one rule was added successfully.
     *
     * @param rules the "g" policy rules, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    async addGroupingPoliciesEx(rules) {
        return this.addNamedGroupingPoliciesEx('g', rules);
    }
    /**
     * addNamedGroupingPoliciesEx adds named role inheritance rules to the current policy.
     * If a rule already exists, the function will skip it and continue to add the remaining rules.
     * The function returns true if at least one rule was added successfully.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param rules the "g" policy rules.
     * @return succeeds or not.
     */
    async addNamedGroupingPoliciesEx(ptype, rules) {
        return this.addPoliciesInternalEx('g', ptype, rules, true);
    }
    /**
     * removeGroupingPolicy removes a role inheritance rule from the current policy.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    async removeGroupingPolicy(...params) {
        return this.removeNamedGroupingPolicy('g', ...params);
    }
    /**
     * removeGroupingPolicies removes role inheritance rules from the current policy.
     *
     * @param rules the "g" policy rules, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    async removeGroupingPolicies(rules) {
        return this.removeNamedGroupingPolicies('g', rules);
    }
    /**
     * removeFilteredGroupingPolicy removes a role inheritance rule from the current policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    async removeFilteredGroupingPolicy(fieldIndex, ...fieldValues) {
        return this.removeFilteredNamedGroupingPolicy('g', fieldIndex, ...fieldValues);
    }
    /**
     * removeNamedGroupingPolicy removes a role inheritance rule from the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return succeeds or not.
     */
    async removeNamedGroupingPolicy(ptype, ...params) {
        return this.removePolicyInternal('g', ptype, params, true);
    }
    /**
     * removeNamedGroupingPolicies removes role inheritance rules from the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param rules the "g" policy rules.
     * @return succeeds or not.
     */
    async removeNamedGroupingPolicies(ptype, rules) {
        return this.removePoliciesInternal('g', ptype, rules, true);
    }
    /**
     * removeFilteredNamedGroupingPolicy removes a role inheritance rule from the current named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    async removeFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues) {
        return this.removeFilteredPolicyInternal('g', ptype, fieldIndex, fieldValues, true);
    }
    /**
     * UpdateGroupingPolicy updates an rule to the current named policy.
     *
     * @param oldRule the old rule.
     * @param newRule the new rule.
     * @return succeeds or not.
     */
    async updateGroupingPolicy(oldRule, newRule) {
        return this.updateNamedGroupingPolicy('g', oldRule, newRule);
    }
    /**
     * updateNamedGroupingPolicy updates an rule to the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param oldRule the old rule.
     * @param newRule the new rule.
     * @return succeeds or not.
     */
    async updateNamedGroupingPolicy(ptype, oldRule, newRule) {
        return this.updatePolicyInternal('g', ptype, oldRule, newRule, true);
    }
    /**
     * addFunction adds a customized function.
     * @param name custom function name
     * @param func function
     */
    async addFunction(name, func) {
        this.fm.addFunction(name, func);
    }
    async selfAddPolicy(sec, ptype, rule) {
        return this.addPolicyWithoutNotify(sec, ptype, rule);
    }
    async selfAddPolicies(sec, ptype, rules) {
        return this.addPoliciesWithoutNotify(sec, ptype, rules);
    }
    async selfRemovePolicy(sec, ptype, rule) {
        return this.removePolicyWithoutNotify(sec, ptype, rule);
    }
    async selfRemovePolicies(sec, ptype, rules) {
        return this.removePoliciesWithoutNotify(sec, ptype, rules);
    }
    async selfRemoveFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues) {
        return this.removeFilteredPolicyWithoutNotify(sec, ptype, fieldIndex, fieldValues);
    }
    async selfUpdatePolicy(sec, ptype, oldRule, newRule) {
        return this.updatePolicyWithoutNotify(sec, ptype, oldRule, newRule);
    }
    async selfUpdatePolicies(sec, ptype, oldRules, newRules) {
        return this.updatePoliciesWithoutNotify(sec, ptype, oldRules, newRules);
    }
}
exports.ManagementEnforcer = ManagementEnforcer;


/***/ }),

/***/ 2313:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Assertion = void 0;
const rbac = __importStar(__nccwpck_require__(8216));
const log_1 = __nccwpck_require__(7242);
const model_1 = __nccwpck_require__(964);
// Assertion represents an expression in a section of the model.
// For example: r = sub, obj, act
class Assertion {
    /**
     * constructor is the constructor for Assertion.
     */
    constructor() {
        this.key = '';
        this.value = '';
        this.tokens = [];
        this.policy = [];
        this.rm = new rbac.DefaultRoleManager(10);
        this.fieldIndexMap = new Map();
    }
    async buildIncrementalRoleLinks(rm, op, rules) {
        this.rm = rm;
        const count = (this.value.match(/_/g) || []).length;
        if (count < 2) {
            throw new Error('the number of "_" in role definition should be at least 2');
        }
        for (let rule of rules) {
            if (rule.length < count) {
                throw new Error('grouping policy elements do not meet role definition');
            }
            if (rule.length > count) {
                rule = rule.slice(0, count);
            }
            switch (op) {
                case model_1.PolicyOp.PolicyAdd:
                    await this.rm.addLink(rule[0], rule[1], ...rule.slice(2));
                    break;
                case model_1.PolicyOp.PolicyRemove:
                    await this.rm.deleteLink(rule[0], rule[1], ...rule.slice(2));
                    break;
                default:
                    throw new Error('unsupported operation');
            }
        }
    }
    async buildRoleLinks(rm) {
        this.rm = rm;
        const count = (this.value.match(/_/g) || []).length;
        if (count < 2) {
            throw new Error('the number of "_" in role definition should be at least 2');
        }
        for (let rule of this.policy) {
            if (rule.length > count) {
                rule = rule.slice(0, count);
            }
            await this.rm.addLink(rule[0], rule[1], ...rule.slice(2));
        }
        log_1.logPrint(`Role links for: ${this.key}`);
        await this.rm.printRoles();
    }
}
exports.Assertion = Assertion;


/***/ }),

/***/ 6295:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FunctionMap = void 0;
const util = __importStar(__nccwpck_require__(7080));
// FunctionMap represents the collection of Function.
class FunctionMap {
    /**
     * constructor is the constructor for FunctionMap.
     */
    constructor() {
        this.functions = new Map();
    }
    // loadFunctionMap loads an initial function map.
    static loadFunctionMap() {
        const fm = new FunctionMap();
        fm.addFunction('keyMatch', util.keyMatchFunc);
        fm.addFunction('keyGet', util.keyGetFunc);
        fm.addFunction('keyMatch2', util.keyMatch2Func);
        fm.addFunction('keyGet2', util.keyGet2Func);
        fm.addFunction('keyMatch3', util.keyMatch3Func);
        fm.addFunction('keyMatch4', util.keyMatch4Func);
        fm.addFunction('keyMatch5', util.keyMatch5Func);
        fm.addFunction('regexMatch', util.regexMatchFunc);
        fm.addFunction('ipMatch', util.ipMatchFunc);
        fm.addFunction('globMatch', util.globMatch);
        return fm;
    }
    // addFunction adds an expression function.
    addFunction(name, func) {
        if (!this.functions.get(name)) {
            this.functions.set(name, func);
        }
    }
    // getFunctions return all functions.
    getFunctions() {
        return this.functions;
    }
}
exports.FunctionMap = FunctionMap;


/***/ }),

/***/ 9913:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(2313), exports);
__exportStar(__nccwpck_require__(6295), exports);
__exportStar(__nccwpck_require__(964), exports);


/***/ }),

/***/ 964:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newModelFromString = exports.newModelFromFile = exports.newModel = exports.Model = exports.requiredSections = exports.PolicyOp = exports.sectionNameMap = void 0;
const util = __importStar(__nccwpck_require__(7080));
const config_1 = __nccwpck_require__(2709);
const assertion_1 = __nccwpck_require__(2313);
const log_1 = __nccwpck_require__(7242);
const rbac_1 = __nccwpck_require__(8216);
const defaultDomain = '';
const defaultSeparator = '::';
exports.sectionNameMap = {
    r: 'request_definition',
    p: 'policy_definition',
    g: 'role_definition',
    e: 'policy_effect',
    m: 'matchers',
};
var PolicyOp;
(function (PolicyOp) {
    PolicyOp[PolicyOp["PolicyAdd"] = 0] = "PolicyAdd";
    PolicyOp[PolicyOp["PolicyRemove"] = 1] = "PolicyRemove";
})(PolicyOp = exports.PolicyOp || (exports.PolicyOp = {}));
exports.requiredSections = ['r', 'p', 'e', 'm'];
class Model {
    /**
     * constructor is the constructor for Model.
     */
    constructor() {
        this.model = new Map();
    }
    loadAssertion(cfg, sec, key) {
        const secName = exports.sectionNameMap[sec];
        const value = cfg.getString(`${secName}::${key}`);
        return this.addDef(sec, key, value);
    }
    getKeySuffix(i) {
        if (i === 1) {
            return '';
        }
        return i.toString();
    }
    loadSection(cfg, sec) {
        let i = 1;
        for (;;) {
            if (!this.loadAssertion(cfg, sec, sec + this.getKeySuffix(i))) {
                break;
            }
            else {
                i++;
            }
        }
    }
    // addDef adds an assertion to the model.
    addDef(sec, key, value) {
        if (value === '') {
            return false;
        }
        const ast = new assertion_1.Assertion();
        ast.key = key;
        ast.value = value;
        ast.fieldIndexMap = new Map();
        if (sec === 'r' || sec === 'p') {
            const tokens = value.split(',').map((n) => n.trim());
            for (let i = 0; i < tokens.length; i++) {
                tokens[i] = key + '_' + tokens[i];
            }
            ast.tokens = tokens;
        }
        else if (sec === 'm') {
            const stringArguments = value.match(/\"(.*?)\"/g) || [];
            stringArguments.forEach((n, index) => {
                value = value.replace(n, `$<${index}>`);
            });
            value = util.escapeAssertion(value);
            stringArguments.forEach((n, index) => {
                value = value.replace(`$<${index}>`, n);
            });
            const invalidOperators = /(?<![&|])&(?!&)|(?<![&|])\|(?!\|)|&{3,}|\|{3,}/g;
            if (invalidOperators.test(value)) {
                throw new Error(`Invalid operator in matcher`);
            }
            ast.value = value;
        }
        else {
            ast.value = util.escapeAssertion(value);
        }
        const nodeMap = this.model.get(sec);
        if (nodeMap) {
            nodeMap.set(key, ast);
        }
        else {
            const assertionMap = new Map();
            assertionMap.set(key, ast);
            this.model.set(sec, assertionMap);
        }
        return true;
    }
    /**
     * loadModel loads the model from model CONF file.
     * @param path the model file path
     * @param fs {@link FileSystem}
     * @deprecated {@link loadModelFromFile}
     */
    loadModel(path, fs) {
        this.loadModelFromFile(path, fs);
    }
    /**
     * loadModelFromFile loads the model from model CONF file.
     * @param path the model file path
     * @param fs {@link FileSystem}
     */
    loadModelFromFile(path, fs) {
        const cfg = config_1.Config.newConfigFromFile(path, fs);
        this.loadModelFromConfig(cfg);
    }
    // loadModelFromText loads the model from the text.
    loadModelFromText(text) {
        const cfg = config_1.Config.newConfigFromText(text);
        this.loadModelFromConfig(cfg);
    }
    loadModelFromConfig(cfg) {
        for (const s in exports.sectionNameMap) {
            this.loadSection(cfg, s);
        }
        const ms = [];
        exports.requiredSections.forEach((n) => {
            if (!this.hasSection(n)) {
                ms.push(exports.sectionNameMap[n]);
            }
        });
        if (ms.length > 0) {
            throw new Error(`missing required sections: ${ms.join(',')}`);
        }
    }
    hasSection(sec) {
        return this.model.get(sec) !== undefined;
    }
    // printModel prints the model to the log.
    printModel() {
        log_1.logPrint('Model:');
        this.model.forEach((value, key) => {
            value.forEach((ast, astKey) => {
                log_1.logPrint(`${key}.${astKey}: ${ast.value}`);
            });
        });
    }
    // buildIncrementalRoleLinks provides incremental build the role inheritance relations.
    async buildIncrementalRoleLinks(rm, op, sec, ptype, rules) {
        var _a, _b;
        if (sec === 'g') {
            await ((_b = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(ptype)) === null || _b === void 0 ? void 0 : _b.buildIncrementalRoleLinks(rm, op, rules));
        }
    }
    // buildRoleLinks initializes the roles in RBAC.
    async buildRoleLinks(rmMap) {
        const astMap = this.model.get('g');
        if (!astMap) {
            return;
        }
        for (const key of astMap.keys()) {
            const ast = astMap.get(key);
            let rm = rmMap.get(key);
            if (!rm) {
                rm = new rbac_1.DefaultRoleManager(10);
                rmMap.set(key, rm);
            }
            await (ast === null || ast === void 0 ? void 0 : ast.buildRoleLinks(rm));
        }
    }
    // clearPolicy clears all current policy.
    clearPolicy() {
        this.model.forEach((value, key) => {
            if (key === 'p' || key === 'g') {
                value.forEach((ast) => {
                    ast.policy = [];
                });
            }
        });
    }
    // getPolicy gets all rules in a policy.
    getPolicy(sec, key) {
        var _a;
        const policy = [];
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (ast) {
            policy.push(...ast.policy);
        }
        return policy;
    }
    // hasPolicy determines whether a model has the specified policy rule.
    hasPolicy(sec, key, rule) {
        var _a;
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (!ast) {
            return false;
        }
        return ast.policy.some((n) => util.arrayEquals(n, rule));
    }
    // addPolicy adds a policy rule to the model.
    addPolicy(sec, key, rule) {
        var _a;
        if (!this.hasPolicy(sec, key, rule)) {
            const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
            if (!ast) {
                return false;
            }
            const policy = ast.policy;
            const tokens = ast.tokens;
            const priorityIndex = tokens.indexOf(`${key}_priority`);
            if (priorityIndex !== -1) {
                const priorityRule = rule[priorityIndex];
                const insertIndex = policy.findIndex((oneRule) => oneRule[priorityIndex] >= priorityRule);
                if (priorityIndex === -1) {
                    policy.push(rule);
                }
                else {
                    policy.splice(insertIndex, 0, rule);
                }
            }
            else {
                policy.push(rule);
            }
            return true;
        }
        return false;
    }
    // addPolicies adds policy rules to the model.
    addPolicies(sec, ptype, rules) {
        var _a;
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(ptype);
        if (!ast) {
            return [false, []];
        }
        for (const rule of rules) {
            if (this.hasPolicy(sec, ptype, rule)) {
                return [false, []];
            }
        }
        const priorityFlag = ast.tokens.indexOf(`${ptype}_priority`) !== -1;
        if (priorityFlag) {
            rules.forEach((rule) => {
                this.addPolicy(sec, ptype, rule);
            });
        }
        else {
            ast.policy = ast.policy.concat(rules);
        }
        return [true, rules];
    }
    // updatePolicy updates a policy from the model
    updatePolicy(sec, ptype, oldRule, newRule) {
        var _a;
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(ptype);
        if (!ast) {
            return false;
        }
        const index = ast.policy.findIndex((r) => util.arrayEquals(r, oldRule));
        if (index === -1) {
            return false;
        }
        const priorityIndex = ast.tokens.indexOf(`${ptype}_priority`);
        if (priorityIndex !== -1) {
            if (oldRule[priorityIndex] === newRule[priorityIndex]) {
                ast.policy[index] = newRule;
            }
            else {
                // this.removePolicy(sec, ptype, oldRule);
                // this.addPolicy(sec, ptype, newRule);
                throw new Error('new rule should have the same priority with old rule.');
            }
        }
        else {
            ast.policy[index] = newRule;
        }
        return true;
    }
    // removePolicy removes a policy rule from the model.
    removePolicy(sec, key, rule) {
        var _a;
        if (this.hasPolicy(sec, key, rule)) {
            const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
            if (!ast) {
                return false;
            }
            ast.policy = ast.policy.filter((r) => !util.arrayEquals(rule, r));
            return true;
        }
        return false;
    }
    // removePolicies removes policy rules from the model.
    removePolicies(sec, ptype, rules) {
        var _a;
        const effects = [];
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(ptype);
        if (!ast) {
            return [false, []];
        }
        for (const rule of rules) {
            if (!this.hasPolicy(sec, ptype, rule)) {
                return [false, []];
            }
        }
        for (const rule of rules) {
            ast.policy = ast.policy.filter((r) => {
                const equals = util.arrayEquals(rule, r);
                if (equals) {
                    effects.push(r);
                }
                return !equals;
            });
        }
        return [true, effects];
    }
    // getFilteredPolicy gets rules based on field filters from a policy.
    getFilteredPolicy(sec, key, fieldIndex, ...fieldValues) {
        var _a;
        const res = [];
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (!ast) {
            return res;
        }
        for (const rule of ast.policy) {
            let matched = true;
            for (let i = 0; i < fieldValues.length; i++) {
                const fieldValue = fieldValues[i];
                if (fieldValue !== '' && rule[fieldIndex + i] !== fieldValue) {
                    matched = false;
                    break;
                }
            }
            if (matched) {
                res.push(rule);
            }
        }
        return res;
    }
    // removeFilteredPolicy removes policy rules based on field filters from the model.
    removeFilteredPolicy(sec, key, fieldIndex, ...fieldValues) {
        var _a;
        const res = [];
        const effects = [];
        let bool = false;
        if (fieldValues.length === 0) {
            return [false, effects];
        }
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (!ast) {
            return [false, []];
        }
        for (const rule of ast.policy) {
            let matched = true;
            for (let i = 0; i < fieldValues.length; i++) {
                const fieldValue = fieldValues[i];
                if (fieldValue !== '' && rule[fieldIndex + i] !== fieldValue) {
                    matched = false;
                    break;
                }
            }
            if (matched) {
                bool = true;
                effects.push(rule);
            }
            else {
                res.push(rule);
            }
        }
        if (effects.length !== 0) {
            ast.policy = res;
        }
        return [bool, effects];
    }
    // getValuesForFieldInPolicy gets all values for a field for all rules in a policy, duplicated values are removed.
    getValuesForFieldInPolicy(sec, key, fieldIndex) {
        var _a;
        const values = [];
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (!ast) {
            return values;
        }
        return util.arrayRemoveDuplicates(ast.policy.map((n) => n[fieldIndex]));
    }
    // getValuesForFieldInPolicyAllTypes gets all values for a field for all rules in a policy of all ptypes, duplicated values are removed.
    getValuesForFieldInPolicyAllTypes(sec, fieldIndex) {
        const values = [];
        const ast = this.model.get(sec);
        if (!ast) {
            return values;
        }
        for (const ptype of ast.keys()) {
            values.push(...this.getValuesForFieldInPolicy(sec, ptype, fieldIndex));
        }
        return util.arrayRemoveDuplicates(values);
    }
    // printPolicy prints the policy to log.
    printPolicy() {
        if (!log_1.getLogger().isEnable()) {
            return;
        }
        log_1.logPrint('Policy:');
        this.model.forEach((map, key) => {
            if (key === 'p' || key === 'g') {
                map.forEach((ast) => {
                    log_1.logPrint(`key, : ${ast.value}, : , ${ast.policy}`);
                });
            }
        });
    }
    /**
     * return the field index in fieldMap, if no this field in fieldMap, add it.
     */
    getFieldIndex(ptype, field) {
        var _a;
        const assertion = (_a = this.model.get('p')) === null || _a === void 0 ? void 0 : _a.get(ptype);
        if (!assertion) {
            return -1;
        }
        let index = assertion.fieldIndexMap.get(field);
        if (index) {
            return index;
        }
        const pattern = ptype + '_' + field;
        index = -1;
        for (let i = 0; i < assertion.tokens.length; i++) {
            if (assertion.tokens[i] === pattern) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            return index;
        }
        assertion.fieldIndexMap.set(field, index);
        return index;
    }
    /**
     * sort policies by subject hieraichy
     */
    sortPoliciesBySubjectHierarchy() {
        var _a, _b, _c;
        if (((_b = (_a = this.model.get('e')) === null || _a === void 0 ? void 0 : _a.get('e')) === null || _b === void 0 ? void 0 : _b.value) !== "subjectPriority(p_eft) || deny" /* SUBJECT_PRIORITY */) {
            return;
        }
        (_c = this.model.get('p')) === null || _c === void 0 ? void 0 : _c.forEach((assertion, ptype) => {
            const domainIndex = this.getFieldIndex(ptype, "dom" /* Domain */);
            const subIndex = this.getFieldIndex(ptype, "sub" /* Subject */);
            // eslint-disable-next-line
            const subjectHierarchyMap = this.getSubjectHierarchyMap(this.model.get('g').get('g').policy);
            assertion.policy.sort((policyA, policyB) => {
                const domainA = domainIndex === -1 ? defaultDomain : policyA[domainIndex];
                const domainB = domainIndex === -1 ? defaultDomain : policyB[domainIndex];
                // eslint-disable-next-line
                const priorityA = subjectHierarchyMap.get(this.getNameWithDomain(domainA, policyA[subIndex]));
                // eslint-disable-next-line
                const priorityB = subjectHierarchyMap.get(this.getNameWithDomain(domainB, policyB[subIndex]));
                return priorityB - priorityA;
            });
        });
    }
    /**
     * Calculate the priority of each policy store in Map<string, number>
     */
    getSubjectHierarchyMap(groupPolicies) {
        const subjectHierarchyMap = new Map();
        if (!groupPolicies) {
            return subjectHierarchyMap;
        }
        const policyMap = new Map();
        let domain = defaultDomain;
        groupPolicies.forEach((policy) => {
            if (policy.length !== 2)
                domain = policy[this.getFieldIndex('p', "dom" /* Domain */)];
            const child = this.getNameWithDomain(domain, policy[this.getFieldIndex('p', "sub" /* Subject */)]);
            const parent = this.getNameWithDomain(domain, policy[this.getFieldIndex('p', "obj" /* Object */)]);
            policyMap.set(child, parent);
            if (!subjectHierarchyMap.has(child)) {
                subjectHierarchyMap.set(child, 0);
            }
            if (!subjectHierarchyMap.has(parent)) {
                subjectHierarchyMap.set(parent, 0);
            }
            subjectHierarchyMap.set(child, 1);
        });
        const set = new Set();
        subjectHierarchyMap.forEach((_, key) => {
            if (subjectHierarchyMap.get(key) !== 0)
                set.add(key);
        });
        while (set.size !== 0) {
            for (const child of set.values()) {
                this.findHierarchy(policyMap, subjectHierarchyMap, set, child);
            }
        }
        return subjectHierarchyMap;
    }
    findHierarchy(policyMap, subjectHierarchyMap, set, child) {
        set.delete(child);
        // eslint-disable-next-line
        const parent = policyMap.get(child);
        if (set.has(parent)) {
            this.findHierarchy(policyMap, subjectHierarchyMap, set, parent);
        }
        // eslint-disable-next-line
        subjectHierarchyMap.set(child, subjectHierarchyMap.get(parent) + 10);
    }
    /**
     * get full name with domain
     */
    getNameWithDomain(domain, name) {
        return domain + defaultSeparator + name;
    }
}
exports.Model = Model;
/**
 * newModel creates a model.
 */
function newModel(...text) {
    const m = new Model();
    if (text.length === 2) {
        if (text[0] !== '') {
            m.loadModelFromFile(text[0]);
        }
    }
    else if (text.length === 1) {
        m.loadModelFromText(text[0]);
    }
    else if (text.length !== 0) {
        throw new Error('Invalid parameters for model.');
    }
    return m;
}
exports.newModel = newModel;
/**
 * newModelFromFile creates a model from a .CONF file.
 */
function newModelFromFile(path, fs) {
    const m = new Model();
    if (path) {
        m.loadModelFromFile(path, fs);
    }
    return m;
}
exports.newModelFromFile = newModelFromFile;
/**
 * newModelFromString creates a model from a string which contains model text.
 */
function newModelFromString(text) {
    const m = new Model();
    m.loadModelFromText(text);
    return m;
}
exports.newModelFromString = newModelFromString;


/***/ }),

/***/ 3455:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7881:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9519:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchFileAdapter = void 0;
const fileAdapter_1 = __nccwpck_require__(2065);
/**
 * BatchFileAdapter is the file adapter for Casbin.
 * It can add policies and remove policies.
 * @deprecated The class should not be used, you should use FileAdapter.
 */
class BatchFileAdapter extends fileAdapter_1.FileAdapter {
    /**
     * FileAdapter is the constructor for FileAdapter.
     * @param {string} filePath filePath the path of the policy file.
     */
    constructor(filePath) {
        super(filePath);
    }
}
exports.BatchFileAdapter = BatchFileAdapter;


/***/ }),

/***/ 8619:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultFilteredAdapter = exports.Filter = void 0;
const fileAdapter_1 = __nccwpck_require__(2065);
const helper_1 = __nccwpck_require__(6370);
const util_1 = __nccwpck_require__(7080);
class Filter {
    constructor() {
        this.g = [];
        this.p = [];
    }
}
exports.Filter = Filter;
class DefaultFilteredAdapter extends fileAdapter_1.FileAdapter {
    constructor(filePath) {
        super(filePath);
        this.filtered = false;
    }
    // loadPolicy loads all policy rules from the storage.
    async loadPolicy(model) {
        this.filtered = false;
        await super.loadPolicy(model);
    }
    async loadFilteredPolicy(model, filter) {
        if (!filter) {
            await this.loadPolicy(model);
            return;
        }
        if (!this.filePath) {
            throw new Error('invalid file path, file path cannot be empty');
        }
        await this.loadFilteredPolicyFile(model, filter, helper_1.Helper.loadPolicyLine);
        this.filtered = true;
    }
    async loadFilteredPolicyFile(model, filter, handler) {
        const bodyBuf = await util_1.readFile(this.filePath);
        const lines = bodyBuf.toString().split('\n');
        lines.forEach((n, index) => {
            const line = n;
            if (!line || DefaultFilteredAdapter.filterLine(line, filter)) {
                return;
            }
            handler(line, model);
        });
    }
    isFiltered() {
        return this.filtered;
    }
    async savePolicy(model) {
        if (this.filtered) {
            throw new Error('cannot save a filtered policy');
        }
        await super.savePolicy(model);
        return true;
    }
    static filterLine(line, filter) {
        if (!filter) {
            return false;
        }
        const p = line.split(',');
        if (p.length === 0) {
            return true;
        }
        let filterSlice = [];
        switch (p[0].trim()) {
            case 'p':
                filterSlice = filter.p;
                break;
            case 'g':
                filterSlice = filter.g;
                break;
        }
        return DefaultFilteredAdapter.filterWords(p, filterSlice);
    }
    static filterWords(line, filter) {
        if (line.length < filter.length + 1) {
            return true;
        }
        let skipLine = false;
        for (let i = 0; i < filter.length; i++) {
            if (filter[i] && filter[i] !== filter[i + 1]) {
                skipLine = true;
                break;
            }
        }
        return skipLine;
    }
}
exports.DefaultFilteredAdapter = DefaultFilteredAdapter;


/***/ }),

/***/ 2065:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileAdapter = void 0;
const helper_1 = __nccwpck_require__(6370);
const util_1 = __nccwpck_require__(7080);
const fileSystem_1 = __nccwpck_require__(2033);
/**
 * FileAdapter is the file adapter for Casbin.
 * It can load policy from file or save policy to file.
 */
class FileAdapter {
    /**
     * FileAdapter is the constructor for FileAdapter.
     *
     * @param filePath filePath the path of the policy file.
     * @param fs {@link FileSystem}
     */
    constructor(filePath, fs) {
        this.filePath = filePath;
        this.fs = fs;
    }
    async loadPolicy(model) {
        if (!this.filePath) {
            // throw new Error('invalid file path, file path cannot be empty');
            return;
        }
        await this.loadPolicyFile(model, helper_1.Helper.loadPolicyLine);
    }
    async loadPolicyFile(model, handler) {
        const bodyBuf = await (this.fs ? this.fs : fileSystem_1.mustGetDefaultFileSystem()).readFileSync(this.filePath);
        const lines = bodyBuf.toString().split('\n');
        lines.forEach((line) => {
            if (!line || line.trim().startsWith('#')) {
                return;
            }
            handler(line, model);
        });
    }
    /**
     * savePolicy saves all policy rules to the storage.
     */
    async savePolicy(model) {
        if (!this.filePath) {
            // throw new Error('invalid file path, file path cannot be empty');
            return false;
        }
        let result = '';
        const pList = model.model.get('p');
        if (!pList) {
            return false;
        }
        pList.forEach((n) => {
            n.policy.forEach((m) => {
                result += n.key + ', ';
                result += util_1.arrayToString(m);
                result += '\n';
            });
        });
        const gList = model.model.get('g');
        if (!gList) {
            return false;
        }
        gList.forEach((n) => {
            n.policy.forEach((m) => {
                result += n.key + ', ';
                result += util_1.arrayToString(m.map((element) => this.escapeCsv(element)));
                result += '\n';
            });
        });
        await this.savePolicyFile(result.trim());
        return true;
    }
    escapeCsv(value) {
        // If the value contains a comma, wrap it in double quotes and escape any existing double quotes
        if (value.includes(',')) {
            return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
    }
    async savePolicyFile(text) {
        (this.fs ? this.fs : fileSystem_1.mustGetDefaultFileSystem()).writeFileSync(this.filePath, text);
    }
    /**
     * addPolicy adds a policy rule to the storage.
     */
    async addPolicy(sec, ptype, rule) {
        throw new Error('not implemented');
    }
    /**
     * addPolicies adds policy rules to the storage.
     This is part of the Auto-Save feature.
     */
    async addPolicies(sec, ptype, rules) {
        throw new Error('not implemented');
    }
    /**
     * UpdatePolicy updates a policy rule from storage.
     * This is part of the Auto-Save feature.
     */
    updatePolicy(sec, ptype, oldRule, newRule) {
        throw new Error('not implemented');
    }
    /**
     * removePolicy removes a policy rule from the storage.
     */
    async removePolicy(sec, ptype, rule) {
        throw new Error('not implemented');
    }
    /**
     * removePolicies removes policy rules from the storage.
     * This is part of the Auto-Save feature.
     */
    async removePolicies(sec, ptype, rules) {
        throw new Error('not implemented');
    }
    /**
     * removeFilteredPolicy removes policy rules that match the filter from the storage.
     */
    async removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues) {
        throw new Error('not implemented');
    }
}
exports.FileAdapter = FileAdapter;


/***/ }),

/***/ 2033:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mustGetDefaultFileSystem = exports.getDefaultFileSystem = exports.setDefaultFileSystem = void 0;
let defaultFileSystem = undefined;
const ErrorNoFileSystem = new Error('please set the default FileSystem by call the setDefaultFileSystem');
exports.setDefaultFileSystem = (fs) => {
    defaultFileSystem = fs;
};
exports.getDefaultFileSystem = () => defaultFileSystem;
exports.mustGetDefaultFileSystem = () => {
    if (defaultFileSystem) {
        return defaultFileSystem;
    }
    throw ErrorNoFileSystem;
};


/***/ }),

/***/ 2282:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6370:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Helper = exports.PolicyLoader = exports.BracketAwareCsvParser = exports.BasicCsvParser = void 0;
const sync_1 = __nccwpck_require__(1110);
class BasicCsvParser {
    parse(line) {
        if (!line || line.trimStart().charAt(0) === '#') {
            return null;
        }
        return sync_1.parse(line, {
            delimiter: ',',
            skip_empty_lines: true,
            trim: true,
            relax_quotes: true,
        });
    }
}
exports.BasicCsvParser = BasicCsvParser;
class BracketAwareCsvParser {
    constructor(baseParser = new BasicCsvParser()) {
        this.baseParser = baseParser;
    }
    parse(line) {
        const rawTokens = this.baseParser.parse(line);
        if (!rawTokens || !rawTokens[0]) {
            return null;
        }
        const tokens = rawTokens[0];
        const processedTokens = [];
        let currentToken = '';
        let bracketCount = 0;
        for (const token of tokens) {
            for (const char of token) {
                if (char === '(')
                    bracketCount++;
                else if (char === ')')
                    bracketCount--;
            }
            currentToken += (currentToken ? ',' : '') + token;
            if (bracketCount === 0) {
                processedTokens.push(currentToken);
                currentToken = '';
            }
        }
        if (bracketCount !== 0) {
            throw new Error(`Unmatched brackets in policy line: ${line}`);
        }
        return processedTokens.length > 0 ? [processedTokens] : null;
    }
}
exports.BracketAwareCsvParser = BracketAwareCsvParser;
class PolicyLoader {
    constructor(parser = new BracketAwareCsvParser()) {
        this.parser = parser;
    }
    loadPolicyLine(line, model) {
        const tokens = this.parser.parse(line);
        if (!tokens || !tokens[0]) {
            return;
        }
        let key = tokens[0][0].trim();
        if (key.startsWith('"') && key.endsWith('"')) {
            key = key.slice(1, -1);
        }
        const sec = key.substring(0, 1);
        const item = model.model.get(sec);
        if (!item) {
            return;
        }
        const policy = item.get(key);
        if (!policy) {
            return;
        }
        const values = tokens[0].slice(1).map((v) => {
            if (v.startsWith('"') && v.endsWith('"')) {
                v = v.slice(1, -1);
            }
            return v.replace(/""/g, '"').trim();
        });
        policy.policy.push(values);
    }
}
exports.PolicyLoader = PolicyLoader;
class Helper {
    static loadPolicyLine(line, model) {
        Helper.policyLoader.loadPolicyLine(line, model);
    }
}
exports.Helper = Helper;
Helper.policyLoader = new PolicyLoader();


/***/ }),

/***/ 1908:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(3455), exports);
__exportStar(__nccwpck_require__(2065), exports);
__exportStar(__nccwpck_require__(736), exports);
__exportStar(__nccwpck_require__(6370), exports);
__exportStar(__nccwpck_require__(8736), exports);
__exportStar(__nccwpck_require__(2393), exports);
__exportStar(__nccwpck_require__(2282), exports);
__exportStar(__nccwpck_require__(8619), exports);
__exportStar(__nccwpck_require__(7881), exports);
__exportStar(__nccwpck_require__(9519), exports);
__exportStar(__nccwpck_require__(3579), exports);
__exportStar(__nccwpck_require__(2033), exports);


/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringAdapter = void 0;
const helper_1 = __nccwpck_require__(6370);
/**
 * StringAdapter is the string adapter for Casbin.
 * It can load policy from a string.
 */
class StringAdapter {
    /**
     * StringAdapter is the constructor for StringAdapter.
     * @param {string} policy policy formatted as a CSV string.
     */
    constructor(policy) {
        this.policy = policy;
    }
    async loadPolicy(model) {
        if (!this.policy) {
            throw new Error('Invalid policy, policy document cannot be false-y');
        }
        await this.loadRules(model, helper_1.Helper.loadPolicyLine);
    }
    async loadRules(model, handler) {
        const rules = this.policy.split('\n');
        rules.forEach((n, index) => {
            if (!n) {
                return;
            }
            handler(n, model);
        });
    }
    /**
     * savePolicy saves all policy rules to the storage.
     */
    async savePolicy(model) {
        throw new Error('not implemented');
    }
    /**
     * addPolicy adds a policy rule to the storage.
     */
    async addPolicy(sec, ptype, rule) {
        throw new Error('not implemented');
    }
    /**
     * removePolicy removes a policy rule from the storage.
     */
    async removePolicy(sec, ptype, rule) {
        throw new Error('not implemented');
    }
    /**
     * removeFilteredPolicy removes policy rules that match the filter from the storage.
     */
    async removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues) {
        throw new Error('not implemented');
    }
}
exports.StringAdapter = StringAdapter;


/***/ }),

/***/ 3579:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2021 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8736:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2393:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2022 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2070:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultRoleManager = void 0;
const log_1 = __nccwpck_require__(7242);
// DEFAULT_DOMAIN defines the default domain space.
const DEFAULT_DOMAIN = 'casbin::default';
// loadOrDefault returns the existing value for the key if present.
// Otherwise, it stores and returns the given value.
function loadOrDefault(map, key, value) {
    const read = map.get(key);
    if (read === undefined) {
        map.set(key, value);
        return value;
    }
    return read;
}
/**
 * Role represents the data structure for a role in RBAC.
 */
class Role {
    constructor(name) {
        this.name = name;
        this.roles = [];
    }
    addRole(role) {
        if (this.roles.some((n) => n.name === role.name)) {
            return;
        }
        this.roles.push(role);
    }
    deleteRole(role) {
        this.roles = this.roles.filter((n) => n.name !== role.name);
    }
    hasRole(name, hierarchyLevel) {
        if (this.name === name) {
            return true;
        }
        if (hierarchyLevel <= 0) {
            return false;
        }
        for (const role of this.roles) {
            if (role.hasRole(name, hierarchyLevel - 1)) {
                return true;
            }
        }
        return false;
    }
    hasDirectRole(name) {
        return this.roles.some((n) => n.name === name);
    }
    toString() {
        return this.name + this.roles.join(', ');
    }
    getRoles() {
        return this.roles.map((n) => n.name);
    }
}
class Roles extends Map {
    constructor() {
        super();
    }
    hasRole(name, matchingFunc) {
        let ok = false;
        if (matchingFunc) {
            this.forEach((value, key) => {
                if (matchingFunc(name, key)) {
                    ok = true;
                }
            });
        }
        else {
            return this.has(name);
        }
        return ok;
    }
    createRole(name, matchingFunc) {
        const role = loadOrDefault(this, name, new Role(name));
        if (matchingFunc) {
            this.forEach((value, key) => {
                if (matchingFunc(name, key) && name !== key) {
                    // Add new role to matching role
                    const role1 = loadOrDefault(this, key, new Role(key));
                    role.addRole(role1);
                }
            });
        }
        return role;
    }
}
// RoleManager provides a default implementation for the RoleManager interface
class DefaultRoleManager {
    /**
     * DefaultRoleManager is the constructor for creating an instance of the
     * default RoleManager implementation.
     *
     * @param maxHierarchyLevel the maximized allowed RBAC hierarchy level.
     */
    constructor(maxHierarchyLevel) {
        this.hasPattern = false;
        this.hasDomainPattern = false;
        this.hasDomainHierarchy = false;
        this.allDomains = new Map();
        this.allDomains.set(DEFAULT_DOMAIN, new Roles());
        this.maxHierarchyLevel = maxHierarchyLevel;
    }
    /**
     * addMatchingFunc support use pattern in g
     * @param name name
     * @param fn matching function
     * @deprecated
     */
    async addMatchingFunc(name, fn) {
        this.hasPattern = true;
        if (typeof name === 'string' && fn) {
            this.matchingFunc = fn;
        }
        else if (typeof name === 'function') {
            this.matchingFunc = name;
        }
        else {
            throw new Error('error: domain should be 1 parameter');
        }
    }
    /**
     * addDomainMatchingFunc support use domain pattern in g
     * @param fn domain matching function
     * ```
     */
    async addDomainMatchingFunc(fn) {
        this.hasDomainPattern = true;
        this.domainMatchingFunc = fn;
    }
    /**
     * addDomainHierarchy sets a rolemanager to define role inheritance between domains
     * @param rm RoleManager to define domain hierarchy
     */
    async addDomainHierarchy(rm) {
        if (!(rm === null || rm === void 0 ? void 0 : rm.syncedHasLink))
            throw Error('Domain hierarchy must be syncronous.');
        this.hasDomainHierarchy = true;
        this.domainHierarchyManager = rm;
    }
    generateTempRoles(domain) {
        if (!this.hasPattern && !this.hasDomainPattern && !this.hasDomainHierarchy) {
            return loadOrDefault(this.allDomains, domain, new Roles());
        }
        const extraDomain = new Set([domain]);
        if (this.hasDomainPattern || this.hasDomainHierarchy) {
            this.allDomains.forEach((value, key) => {
                var _a;
                if ((this.hasDomainPattern && this.domainMatchingFunc(domain, key)) ||
                    (((_a = this.domainHierarchyManager) === null || _a === void 0 ? void 0 : _a.syncedHasLink) && this.domainHierarchyManager.syncedHasLink(key, domain))) {
                    extraDomain.add(key);
                }
            });
        }
        const allRoles = new Roles();
        extraDomain.forEach((dom) => {
            loadOrDefault(this.allDomains, dom, new Roles()).forEach((value, key) => {
                const role1 = allRoles.createRole(value.name, this.matchingFunc);
                value.getRoles().forEach((n) => {
                    role1.addRole(allRoles.createRole(n, this.matchingFunc));
                });
            });
        });
        return allRoles;
    }
    /**
     * addLink adds the inheritance link between role: name1 and role: name2.
     * aka role: name1 inherits role: name2.
     * domain is a prefix to the roles.
     */
    async addLink(name1, name2, ...domain) {
        if (domain.length === 0) {
            domain = [DEFAULT_DOMAIN];
        }
        else if (domain.length > 1) {
            throw new Error('error: domain should be 1 parameter');
        }
        const allRoles = loadOrDefault(this.allDomains, domain[0], new Roles());
        const role1 = loadOrDefault(allRoles, name1, new Role(name1));
        const role2 = loadOrDefault(allRoles, name2, new Role(name2));
        role1.addRole(role2);
    }
    /**
     * clear clears all stored data and resets the role manager to the initial state.
     */
    async clear() {
        this.allDomains = new Map();
        this.allDomains.set(DEFAULT_DOMAIN, new Roles());
    }
    /**
     * deleteLink deletes the inheritance link between role: name1 and role: name2.
     * aka role: name1 does not inherit role: name2 any more.
     * domain is a prefix to the roles.
     */
    async deleteLink(name1, name2, ...domain) {
        if (domain.length === 0) {
            domain = [DEFAULT_DOMAIN];
        }
        else if (domain.length > 1) {
            throw new Error('error: domain should be 1 parameter');
        }
        const allRoles = loadOrDefault(this.allDomains, domain[0], new Roles());
        if (!allRoles.has(name1) || !allRoles.has(name2)) {
            return;
        }
        const role1 = loadOrDefault(allRoles, name1, new Role(name1));
        const role2 = loadOrDefault(allRoles, name2, new Role(name2));
        role1.deleteRole(role2);
    }
    /**
     * hasLink determines whether role: name1 inherits role: name2.
     * domain is a prefix to the roles.
     */
    syncedHasLink(name1, name2, ...domain) {
        if (domain.length === 0) {
            domain = [DEFAULT_DOMAIN];
        }
        else if (domain.length > 1) {
            throw new Error('error: domain should be 1 parameter');
        }
        if (name1 === name2) {
            return true;
        }
        const allRoles = this.generateTempRoles(domain[0]);
        if (!allRoles.hasRole(name1, this.matchingFunc) || !allRoles.hasRole(name2, this.matchingFunc)) {
            return false;
        }
        const role1 = allRoles.createRole(name1, this.matchingFunc);
        return role1.hasRole(name2, this.maxHierarchyLevel);
    }
    async hasLink(name1, name2, ...domain) {
        return new Promise((resolve) => resolve(this.syncedHasLink(name1, name2, ...domain)));
    }
    /**
     * getRoles gets the roles that a subject inherits.
     * domain is a prefix to the roles.
     */
    async getRoles(name, ...domain) {
        if (domain.length === 0) {
            domain = [DEFAULT_DOMAIN];
        }
        else if (domain.length > 1) {
            throw new Error('error: domain should be 1 parameter');
        }
        const allRoles = this.generateTempRoles(domain[0]);
        if (!allRoles.hasRole(name, this.matchingFunc)) {
            return [];
        }
        return allRoles.createRole(name, this.matchingFunc).getRoles();
    }
    /**
     * getUsers gets the users that inherits a subject.
     * domain is an unreferenced parameter here, may be used in other implementations.
     */
    async getUsers(name, ...domain) {
        if (domain.length === 0) {
            domain = [DEFAULT_DOMAIN];
        }
        else if (domain.length > 1) {
            throw new Error('error: domain should be 1 parameter');
        }
        const allRoles = this.generateTempRoles(domain[0]);
        if (!allRoles.hasRole(name, this.matchingFunc)) {
            return [];
        }
        const users = [];
        for (const user of allRoles.values()) {
            if (user.hasDirectRole(name))
                users.push(user.name);
        }
        return users;
    }
    /**
     * printRoles prints all the roles to log.
     */
    async printRoles() {
        if (log_1.getLogger().isEnable()) {
            [...this.allDomains.values()].forEach((n) => {
                log_1.logPrint(n.toString());
            });
        }
    }
    /**
     * getDomains gets domains that a user has.
     */
    async getDomains(name) {
        const domains = [];
        this.allDomains.forEach((roles, domain) => {
            // Skip the default domain if there are other domains
            if (domain === DEFAULT_DOMAIN && this.allDomains.size > 1) {
                return;
            }
            const role = roles.get(name);
            if (role) {
                // Check if role has any roles it inherits OR if any other role inherits from it
                const hasRoles = role.getRoles().length > 0;
                const hasUsers = this.hasUserForRole(roles, name);
                if (hasRoles || hasUsers) {
                    domains.push(domain);
                }
            }
        });
        return domains;
    }
    /**
     * getAllDomains gets all domains.
     */
    async getAllDomains() {
        const domains = Array.from(this.allDomains.keys());
        // Filter out the default domain if there are other domains
        if (domains.length > 1) {
            return domains.filter((d) => d !== DEFAULT_DOMAIN);
        }
        return domains;
    }
    hasUserForRole(roles, name) {
        for (const role of roles.values()) {
            if (role.hasDirectRole(name)) {
                return true;
            }
        }
        return false;
    }
}
exports.DefaultRoleManager = DefaultRoleManager;


/***/ }),

/***/ 8216:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(2070), exports);
__exportStar(__nccwpck_require__(3263), exports);


/***/ }),

/***/ 3263:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 1637:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newSyncedEnforcer = exports.SyncedEnforcer = void 0;
const enforcer_1 = __nccwpck_require__(4871);
const await_lock_1 = __importDefault(__nccwpck_require__(2896));
// SyncedEnforcer wraps Enforcer and provides synchronized access
class SyncedEnforcer extends enforcer_1.Enforcer {
    constructor() {
        super(...arguments);
        this.lock = new await_lock_1.default();
    }
    /**
     * setWatcher sets the current watcher.
     *
     * @param watcher the watcher.
     */
    setWatcher(watcher) {
        this.watcher = watcher;
        this.watcher.setUpdateCallback(() => this.loadPolicy());
    }
    /**
     * loadPolicy reloads the policy from file/database.
     */
    async loadPolicy() {
        await this.lock.acquireAsync();
        return super.loadPolicy().finally(() => this.lock.release());
    }
    /**
     * clearPolicy clears all policy.
     */
    clearPolicy() {
        this.lock
            .acquireAsync()
            .then(() => super.clearPolicy())
            .finally(() => this.lock.release());
    }
    /**
     * savePolicy saves the current policy (usually after changed with Casbin API) back to file/database.
     */
    async savePolicy() {
        await this.lock.acquireAsync();
        return super.savePolicy().finally(() => this.lock.release());
    }
    /**
     * buildRoleLinks manually rebuild the role inheritance relations.
     */
    async buildRoleLinks() {
        await this.lock.acquireAsync();
        return super.buildRoleLinks().finally(() => this.lock.release());
    }
    /**
     * If the matchers does not contain an asynchronous method, call it faster.
     *
     * enforceWithSyncCompile decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    enforceWithSyncCompile(...rvals) {
        return super.enforceWithSyncCompile(...rvals);
    }
    /**
     * enforce decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    async enforce(...rvals) {
        await this.lock.acquireAsync();
        return super.enforce(...rvals).finally(() => this.lock.release());
    }
    /**
     * getAllSubjects gets the list of subjects that show up in the current policy.
     *
     * @return all the subjects in "p" policy rules. It actually collects the
     *         0-index elements of "p" policy rules. So make sure your subject
     *         is the 0-index element, like (sub, obj, act). Duplicates are removed.
     */
    async getAllSubjects() {
        return this.getAllNamedSubjects('p');
    }
    /**
     * getAllNamedSubjects gets the list of subjects that show up in the currentnamed policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the subjects in policy rules of the ptype type. It actually
     *         collects the 0-index elements of the policy rules. So make sure
     *         your subject is the 0-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllNamedSubjects(ptype) {
        await this.lock.acquireAsync();
        return super.getAllNamedSubjects(ptype).finally(() => this.lock.release());
    }
    /**
     * getAllObjects gets the list of objects that show up in the current policy.
     *
     * @return all the objects in "p" policy rules. It actually collects the
     *         1-index elements of "p" policy rules. So make sure your object
     *         is the 1-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllObjects() {
        return this.getAllNamedObjects('p');
    }
    /**
     * getAllNamedObjects gets the list of objects that show up in the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the objects in policy rules of the ptype type. It actually
     *         collects the 1-index elements of the policy rules. So make sure
     *         your object is the 1-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllNamedObjects(ptype) {
        await this.lock.acquireAsync();
        return super.getAllNamedObjects(ptype).finally(() => this.lock.release());
    }
    /**
     * getAllActions gets the list of actions that show up in the current policy.
     *
     * @return all the actions in "p" policy rules. It actually collects
     *         the 2-index elements of "p" policy rules. So make sure your action
     *         is the 2-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllActions() {
        return this.getAllNamedActions('p');
    }
    /**
     * GetAllNamedActions gets the list of actions that show up in the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the actions in policy rules of the ptype type. It actually
     *         collects the 2-index elements of the policy rules. So make sure
     *         your action is the 2-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllNamedActions(ptype) {
        await this.lock.acquireAsync();
        return super.getAllNamedActions(ptype).finally(() => this.lock.release());
    }
    /**
     * getAllRoles gets the list of roles that show up in the current policy.
     *
     * @return all the roles in "g" policy rules. It actually collects
     *         the 1-index elements of "g" policy rules. So make sure your
     *         role is the 1-index element, like (sub, role).
     *         Duplicates are removed.
     */
    async getAllRoles() {
        return this.getAllNamedRoles('g');
    }
    /**
     * getAllNamedRoles gets the list of roles that show up in the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @return all the subjects in policy rules of the ptype type. It actually
     *         collects the 0-index elements of the policy rules. So make
     *         sure your subject is the 0-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    async getAllNamedRoles(ptype) {
        await this.lock.acquireAsync();
        return super.getAllNamedRoles(ptype).finally(() => this.lock.release());
    }
    /**
     * getPolicy gets all the authorization rules in the policy.
     *
     * @return all the "p" policy rules.
     */
    async getPolicy() {
        return this.getNamedPolicy('p');
    }
    /**
     * getFilteredPolicy gets all the authorization rules in the policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "p" policy rules.
     */
    async getFilteredPolicy(fieldIndex, ...fieldValues) {
        return this.getFilteredNamedPolicy('p', fieldIndex, ...fieldValues);
    }
    /**
     * getNamedPolicy gets all the authorization rules in the named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return the "p" policy rules of the specified ptype.
     */
    async getNamedPolicy(ptype) {
        await this.lock.acquireAsync();
        return super.getNamedPolicy(ptype).finally(() => this.lock.release());
    }
    /**
     * getFilteredNamedPolicy gets all the authorization rules in the named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "p" policy rules of the specified ptype.
     */
    async getFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues) {
        await this.lock.acquireAsync();
        return super.getFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues).finally(() => this.lock.release());
    }
    /**
     * getGroupingPolicy gets all the role inheritance rules in the policy.
     *
     * @return all the "g" policy rules.
     */
    async getGroupingPolicy() {
        return this.getNamedGroupingPolicy('g');
    }
    /**
     * getFilteredGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value "" means not to match this field.
     * @return the filtered "g" policy rules.
     */
    async getFilteredGroupingPolicy(fieldIndex, ...fieldValues) {
        return this.getFilteredNamedGroupingPolicy('g', fieldIndex, ...fieldValues);
    }
    /**
     * getNamedGroupingPolicy gets all the role inheritance rules in the policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @return the "g" policy rules of the specified ptype.
     */
    async getNamedGroupingPolicy(ptype) {
        await this.lock.acquireAsync();
        return super.getNamedGroupingPolicy(ptype).finally(() => this.lock.release());
    }
    /**
     * getFilteredNamedGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "g" policy rules of the specified ptype.
     */
    async getFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues) {
        await this.lock.acquireAsync();
        return super.getFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues).finally(() => this.lock.release());
    }
    /**
     * hasPolicy determines whether an authorization rule exists.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return whether the rule exists.
     */
    async hasPolicy(...params) {
        return this.hasNamedPolicy('p', ...params);
    }
    /**
     * hasNamedPolicy determines whether a named authorization rule exists.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return whether the rule exists.
     */
    async hasNamedPolicy(ptype, ...params) {
        await this.lock.acquireAsync();
        return super.hasNamedPolicy(ptype, ...params).finally(() => this.lock.release());
    }
    /**
     * addPolicy adds an authorization rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    async addPolicy(...params) {
        return this.addNamedPolicy('p', ...params);
    }
    /**
     * addNamedPolicy adds an authorization rule to the current named policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return succeeds or not.
     */
    async addNamedPolicy(ptype, ...params) {
        await this.lock.acquireAsync();
        return super.addNamedPolicy(ptype, ...params).finally(() => this.lock.release());
    }
    /**
     * removePolicy removes an authorization rule from the current policy.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    async removePolicy(...params) {
        return this.removeNamedPolicy('p', ...params);
    }
    /**
     * removeFilteredPolicy removes an authorization rule from the current policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    async removeFilteredPolicy(fieldIndex, ...fieldValues) {
        return this.removeFilteredNamedPolicy('p', fieldIndex, ...fieldValues);
    }
    /**
     * removeNamedPolicy removes an authorization rule from the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return succeeds or not.
     */
    async removeNamedPolicy(ptype, ...params) {
        await this.lock.acquireAsync();
        return this.removePolicyInternal('p', ptype, params, true).finally(() => this.lock.release());
    }
    /**
     * removeFilteredNamedPolicy removes an authorization rule from the current named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    async removeFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues) {
        await this.lock.acquireAsync();
        return super.removeFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues).finally(() => this.lock.release());
    }
    /**
     * hasGroupingPolicy determines whether a role inheritance rule exists.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return whether the rule exists.
     */
    async hasGroupingPolicy(...params) {
        return this.hasNamedGroupingPolicy('g', ...params);
    }
    /**
     * hasNamedGroupingPolicy determines whether a named role inheritance rule exists.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return whether the rule exists.
     */
    async hasNamedGroupingPolicy(ptype, ...params) {
        await this.lock.acquireAsync();
        return super.hasNamedGroupingPolicy(ptype, ...params).finally(() => this.lock.release());
    }
    /**
     * addGroupingPolicy adds a role inheritance rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    async addGroupingPolicy(...params) {
        return this.addNamedGroupingPolicy('g', ...params);
    }
    /**
     * addNamedGroupingPolicy adds a named role inheritance rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return succeeds or not.
     */
    async addNamedGroupingPolicy(ptype, ...params) {
        await this.lock.acquireAsync();
        return super.addNamedGroupingPolicy(ptype, ...params).finally(() => this.lock.release());
    }
    /**
     * removeGroupingPolicy removes a role inheritance rule from the current policy.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    async removeGroupingPolicy(...params) {
        return this.removeNamedGroupingPolicy('g', ...params);
    }
    /**
     * removeFilteredGroupingPolicy removes a role inheritance rule from the current policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    async removeFilteredGroupingPolicy(fieldIndex, ...fieldValues) {
        return this.removeFilteredNamedGroupingPolicy('g', fieldIndex, ...fieldValues);
    }
    /**
     * removeNamedGroupingPolicy removes a role inheritance rule from the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return succeeds or not.
     */
    async removeNamedGroupingPolicy(ptype, ...params) {
        await this.lock.acquireAsync();
        return super.removeNamedGroupingPolicy(ptype, ...params).finally(() => this.lock.release());
    }
    /**
     * removeFilteredNamedGroupingPolicy removes a role inheritance rule from the current named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    async removeFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues) {
        await this.lock.acquireAsync();
        return super.removeFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues).finally(() => this.lock.release());
    }
    /**
     * UpdateGroupingPolicy updates an rule to the current named policy.
     *
     * @param oldRule the old rule.
     * @param newRule the new rule.
     * @return succeeds or not.
     */
    async updateGroupingPolicy(oldRule, newRule) {
        return super.updateGroupingPolicy(oldRule, newRule);
    }
    /**
     * updateNamedGroupingPolicy updates an rule to the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param oldRule the old rule.
     * @param newRule the new rule.
     * @return succeeds or not.
     */
    async updateNamedGroupingPolicy(ptype, oldRule, newRule) {
        return super.updateNamedGroupingPolicy(ptype, oldRule, newRule);
    }
    /**
     * add matching function to RoleManager by ptype
     * @param ptype g
     * @param fn the function will be added
     */
    async addNamedMatchingFunc(ptype, fn) {
        await this.lock.acquireAsync();
        return super.addNamedMatchingFunc(ptype, fn).finally(() => this.lock.release());
    }
    /**
     * add domain matching function to RoleManager by ptype
     * @param ptype g
     * @param fn the function will be added
     */
    async addNamedDomainMatchingFunc(ptype, fn) {
        await this.lock.acquireAsync();
        return super.addNamedDomainMatchingFunc(ptype, fn).finally(() => {
            this.lock.release();
        });
    }
}
exports.SyncedEnforcer = SyncedEnforcer;
// newSyncedEnforcer creates a synchronized enforcer via file or DB.
async function newSyncedEnforcer(...params) {
    return enforcer_1.newEnforcerWithClass(SyncedEnforcer, ...params);
}
exports.newSyncedEnforcer = newSyncedEnforcer;


/***/ }),

/***/ 6506:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.globMatch = exports.keyMatch5Func = exports.keyMatch4Func = exports.generateGFunction = exports.generateSyncedGFunction = exports.ipMatchFunc = exports.regexMatchFunc = exports.keyMatch3Func = exports.keyGet2Func = exports.keyMatch2Func = exports.keyGetFunc = exports.keyMatchFunc = void 0;
const ip_1 = __nccwpck_require__(2955);
const minimatch_1 = __nccwpck_require__(4994);
// regexMatch determines whether key1 matches the pattern of key2 in regular expression.
function regexMatch(key1, key2) {
    return new RegExp(key2).test(key1);
}
// keyMatch determines whether key1 matches the pattern of key2 (similar to RESTful path),
// key2 can contain a *.
// For example, '/foo/bar' matches '/foo/*'
function keyMatch(key1, key2) {
    const pos = key2.indexOf('*');
    if (pos === -1) {
        return key1 === key2;
    }
    if (key1.length > pos) {
        return key1.slice(0, pos) === key2.slice(0, pos);
    }
    return key1 === key2.slice(0, pos);
}
// keyMatchFunc is the wrapper for keyMatch.
function keyMatchFunc(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyMatch(name1, name2);
}
exports.keyMatchFunc = keyMatchFunc;
// KeyGet returns the matched part
// For example, "/foo/bar/foo" matches "/foo/*"
// "bar/foo" will been returned
function keyGet(key1, key2) {
    const pos = key2.indexOf('*');
    if (pos === -1) {
        return '';
    }
    if (key1.length > pos) {
        if (key1.slice(0, pos) === key2.slice(0, pos)) {
            return key1.slice(pos, key1.length);
        }
    }
    return '';
}
// keyGetFunc is the wrapper for keyGet.
function keyGetFunc(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyGet(name1, name2);
}
exports.keyGetFunc = keyGetFunc;
// keyMatch2 determines whether key1 matches the pattern of key2 (similar to RESTful path),
// key2 can contain a *.
// For example, '/foo/bar' matches '/foo/*', '/resource1' matches '/:resource'
function keyMatch2(key1, key2) {
    key2 = key2.replace(/\/\*/g, '/.*');
    const regexp = new RegExp(/(.*):[^/]+(.*)/g);
    for (;;) {
        if (!key2.includes('/:')) {
            break;
        }
        key2 = key2.replace(regexp, '$1[^/]+$2');
    }
    if (key2 === '*') {
        key2 = '(.*)';
    }
    return regexMatch(key1, '^' + key2 + '$');
}
// keyMatch2Func is the wrapper for keyMatch2.
function keyMatch2Func(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyMatch2(name1, name2);
}
exports.keyMatch2Func = keyMatch2Func;
// KeyGet2 returns value matched pattern
// For example, "/resource1" matches "/:resource"
// if the pathVar == "resource", then "resource1" will be returned
function keyGet2(key1, key2, pathVar) {
    if (keyMatch2(key1, key2)) {
        const re = new RegExp('[^/]+', 'g');
        const keys = key2.match(re);
        const values = key1.match(re);
        if (!keys || !values) {
            return '';
        }
        const index = keys.indexOf(`:${pathVar}`);
        if (index === -1) {
            return '';
        }
        return values[index];
    }
    else {
        return '';
    }
}
function keyGet2Func(...args) {
    const [arg0, arg1, arg2] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    const name3 = (arg2 || '').toString();
    return keyGet2(name1, name2, name3);
}
exports.keyGet2Func = keyGet2Func;
// keyMatch3 determines whether key1 matches the pattern of key2 (similar to RESTful path), key2 can contain a *.
// For example, '/foo/bar' matches '/foo/*', '/resource1' matches '/{resource}'
function keyMatch3(key1, key2) {
    key2 = key2.replace(/\/\*/g, '/.*');
    const regexp = new RegExp(/(.*){[^/]+}(.*)/g);
    for (;;) {
        if (!key2.includes('/{')) {
            break;
        }
        key2 = key2.replace(regexp, '$1[^/]+$2');
    }
    return regexMatch(key1, '^' + key2 + '$');
}
// keyMatch3Func is the wrapper for keyMatch3.
function keyMatch3Func(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyMatch3(name1, name2);
}
exports.keyMatch3Func = keyMatch3Func;
// keyMatch4 determines whether key1 matches the pattern of key2 (similar to RESTful path), key2 can contain a *.
// Besides what keyMatch3 does, keyMatch4 can also match repeated patterns:
// "/parent/123/child/123" matches "/parent/{id}/child/{id}"
// "/parent/123/child/456" does not match "/parent/{id}/child/{id}"
// But keyMatch3 will match both.
function keyMatch4(key1, key2) {
    key2 = key2.replace(/\/\*/g, '/.*');
    const tokens = [];
    let j = -1;
    for (let i = 0; i < key2.length; i++) {
        const c = key2.charAt(i);
        if (c === '{') {
            j = i;
        }
        else if (c === '}') {
            tokens.push(key2.substring(j, i + 1));
        }
    }
    let regexp = new RegExp(/(.*){[^/]+}(.*)/g);
    for (;;) {
        if (!key2.includes('/{')) {
            break;
        }
        key2 = key2.replace(regexp, '$1([^/]+)$2');
    }
    regexp = new RegExp('^' + key2 + '$');
    let values = regexp.exec(key1);
    if (!values) {
        return false;
    }
    values = values.slice(1);
    if (tokens.length !== values.length) {
        throw new Error('KeyMatch4: number of tokens is not equal to number of values');
    }
    const m = new Map();
    tokens.forEach((n, index) => {
        const key = tokens[index];
        let v = m.get(key);
        if (!v) {
            v = [];
        }
        if (values) {
            v.push(values[index]);
        }
        m.set(key, v);
    });
    for (const value of m.values()) {
        if (value.length > 1) {
            for (let i = 1; i < values.length; i++) {
                if (values[i] !== values[0]) {
                    return false;
                }
            }
        }
    }
    return true;
}
// keyMatch4Func is the wrapper for keyMatch4.
function keyMatch4Func(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyMatch4(name1, name2);
}
exports.keyMatch4Func = keyMatch4Func;
// KeyMatch determines whether key1 matches the pattern of key2 and ignores the parameters in key2.
// For example, "/foo/bar?status=1&type=2" matches "/foo/bar"
function KeyMatch5(key1, key2) {
    const i = key1.indexOf('?');
    if (i !== -1) {
        key1 = key1.slice(0, i);
    }
    key2 = key2.replace(/\/\*/g, '/.*');
    const regexp = new RegExp(/(.*){[^/]+}(.*)/g);
    for (;;) {
        if (!key2.includes('/{')) {
            break;
        }
        key2 = key2.replace(regexp, '$1[^/]+$2');
    }
    return regexMatch(key1, '^' + key2 + '$');
}
// keyMatch5Func is the wrapper for KeyMatch5.
function keyMatch5Func(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return KeyMatch5(name1, name2);
}
exports.keyMatch5Func = keyMatch5Func;
// regexMatchFunc is the wrapper for regexMatch.
function regexMatchFunc(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return regexMatch(name1, name2);
}
exports.regexMatchFunc = regexMatchFunc;
// ipMatch determines whether IP address ip1 matches the pattern of IP address ip2,
// ip2 can be an IP address or a CIDR pattern.
// For example, '192.168.2.123' matches '192.168.2.0/24'
function ipMatch(ip1, ip2) {
    // check ip1
    if (!(ip_1.ip.isV4Format(ip1) || ip_1.ip.isV6Format(ip1))) {
        throw new Error('invalid argument: ip1 in ipMatch() function is not an IP address.');
    }
    // check ip2
    const cidrParts = ip2.split('/');
    if (cidrParts.length === 2) {
        return ip_1.ip.cidrSubnet(ip2).contains(ip1);
    }
    else {
        if (!(ip_1.ip.isV4Format(ip2) || ip_1.ip.isV6Format(ip2))) {
            console.log(ip2);
            throw new Error('invalid argument: ip2 in ipMatch() function is not an IP address.');
        }
        return ip_1.ip.isEqual(ip1, ip2);
    }
}
// ipMatchFunc is the wrapper for ipMatch.
function ipMatchFunc(...args) {
    const [arg0, arg1] = args;
    const ip1 = (arg0 || '').toString();
    const ip2 = (arg1 || '').toString();
    return ipMatch(ip1, ip2);
}
exports.ipMatchFunc = ipMatchFunc;
/**
 * Returns true if the specified `string` matches the given glob `pattern`.
 *
 * @param string String to match
 * @param pattern Glob pattern to use for matching.
 * @returns Returns true if the string matches the glob pattern.
 *
 * @example
 * ```javascript
 * globMatch("abc.conf", "*.conf") => true
 * ```
 */
function globMatch(string, pattern) {
    // The minimatch doesn't support the pattern starts with *
    // See https://github.com/isaacs/minimatch/issues/195
    if (pattern[0] === '*' && pattern[1] === '/') {
        pattern = pattern.substring(1);
    }
    return minimatch_1.minimatch(string, pattern);
}
exports.globMatch = globMatch;
// generateGFunction is the factory method of the g(_, _) function.
function generateGFunction(rm) {
    const memorized = new Map();
    return async function (...args) {
        const key = args.toString();
        let value = memorized.get(key);
        if (value) {
            return value;
        }
        const [arg0, arg1] = args;
        const name1 = (arg0 || '').toString();
        const name2 = (arg1 || '').toString();
        if (!rm) {
            value = name1 === name2;
        }
        else if (args.length === 2) {
            value = await rm.hasLink(name1, name2);
        }
        else {
            const domain = args[2].toString();
            value = await rm.hasLink(name1, name2, domain);
        }
        memorized.set(key, value);
        return value;
    };
}
exports.generateGFunction = generateGFunction;
// generateSyncedGFunction is the synchronous factory method of the g(_, _) function.
function generateSyncedGFunction(rm) {
    const memorized = new Map();
    return function (...args) {
        const key = args.toString();
        let value = memorized.get(key);
        if (value) {
            return value;
        }
        const [arg0, arg1] = args;
        const name1 = (arg0 || '').toString();
        const name2 = (arg1 || '').toString();
        if (!rm) {
            value = name1 === name2;
        }
        else if (!(rm === null || rm === void 0 ? void 0 : rm.syncedHasLink)) {
            throw new Error('RoleManager requires syncedHasLink for synchronous execution');
        }
        else if (args.length === 2) {
            value = rm.syncedHasLink(name1, name2);
        }
        else {
            const domain = args[2].toString();
            value = rm.syncedHasLink(name1, name2, domain);
        }
        memorized.set(key, value);
        return value;
    };
}
exports.generateSyncedGFunction = generateSyncedGFunction;


/***/ }),

/***/ 7080:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(6506), exports);
__exportStar(__nccwpck_require__(4834), exports);


/***/ }),

/***/ 2955:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// This is a minimal subset of node-ip for handling IPMatch
// https://github.com/indutny/node-ip/blob/master/lib/ip.js
//
// ### License
//
// This software is licensed under the MIT License.
//
// Copyright Fedor Indutny, 2012.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ip = void 0;
const buffer_1 = __nccwpck_require__(3410);
const ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
const ipv6Regex = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;
exports.ip = {
    toBuffer: function (ip, buff, offset) {
        offset = offset ? offset : 0;
        let result;
        if (this.isV4Format(ip)) {
            result = buff || new buffer_1.Buffer(offset + 4);
            ip.split(/\./g).map(function (byte) {
                offset = offset ? offset : 0;
                result[offset++] = parseInt(byte, 10) & 0xff;
            });
        }
        else if (this.isV6Format(ip)) {
            const sections = ip.split(':', 8);
            let i;
            for (i = 0; i < sections.length; i++) {
                const isv4 = this.isV4Format(sections[i]);
                let v4Buffer;
                if (isv4) {
                    v4Buffer = this.toBuffer(sections[i]);
                    sections[i] = v4Buffer.slice(0, 2).toString('hex');
                }
                if (v4Buffer && ++i < 8) {
                    sections.splice(i, 0, v4Buffer.slice(2, 4).toString('hex'));
                }
            }
            if (sections[0] === '') {
                while (sections.length < 8)
                    sections.unshift('0');
            }
            else if (sections[sections.length - 1] === '') {
                while (sections.length < 8)
                    sections.push('0');
            }
            else if (sections.length < 8) {
                for (i = 0; i < sections.length && sections[i] !== ''; i++) { }
                const argv = [i, 1];
                for (i = 9 - sections.length; i > 0; i--) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    argv.push('0');
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line prefer-spread
                sections.splice.apply(sections, argv);
            }
            result = buff || new buffer_1.Buffer(offset + 16);
            for (i = 0; i < sections.length; i++) {
                const word = parseInt(sections[i], 16);
                result[offset++] = (word >> 8) & 0xff;
                result[offset++] = word & 0xff;
            }
        }
        if (!result) {
            throw Error('Invalid ip address: ' + ip);
        }
        return result;
    },
    toString: function (buff, offset, length) {
        offset = offset ? offset : 0;
        length = length || buff.length - offset;
        let result = [];
        if (length === 4) {
            // IPv4
            for (let i = 0; i < length; i++) {
                result.push(buff[offset + i]);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            result = result.join('.');
        }
        else if (length === 16) {
            // IPv6
            for (let i = 0; i < length; i += 2) {
                result.push(buff.readUInt16BE(offset + i).toString(16));
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            result = result.join(':');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            result = result.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            result = result.replace(/:{3,4}/, '::');
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return result;
    },
    isV4Format: function (ip) {
        return ipv4Regex.test(ip);
    },
    isV6Format: function (ip) {
        return ipv6Regex.test(ip);
    },
    fromPrefixLen: function (prefixlen, family) {
        if (prefixlen > 32) {
            family = 'ipv6';
        }
        else {
            family = _normalizeFamily(typeof family === 'string' ? family : '');
        }
        let len = 4;
        if (family === 'ipv6') {
            len = 16;
        }
        const buff = new buffer_1.Buffer(len);
        for (let i = 0, n = buff.length; i < n; ++i) {
            let bits = 8;
            if (prefixlen < 8) {
                bits = prefixlen;
            }
            prefixlen -= bits;
            buff[i] = ~(0xff >> bits) & 0xff;
        }
        return exports.ip.toString(buff);
    },
    mask: function (addr, mask) {
        const addrBuffer = exports.ip.toBuffer(addr);
        const maskBuffer = exports.ip.toBuffer(mask);
        const result = new buffer_1.Buffer(Math.max(addrBuffer.length, maskBuffer.length));
        let i;
        // Same protocol - do bitwise and
        if (addrBuffer.length === maskBuffer.length) {
            for (i = 0; i < addrBuffer.length; i++) {
                result[i] = addrBuffer[i] & maskBuffer[i];
            }
        }
        else if (maskBuffer.length === 4) {
            // IPv6 address and IPv4 mask
            // (Mask low bits)
            for (i = 0; i < maskBuffer.length; i++) {
                result[i] = addrBuffer[addrBuffer.length - 4 + i] & maskBuffer[i];
            }
        }
        else {
            // IPv6 mask and IPv4 addr
            for (let i = 0; i < result.length - 6; i++) {
                result[i] = 0;
            }
            // ::ffff:ipv4
            result[10] = 0xff;
            result[11] = 0xff;
            for (i = 0; i < addrBuffer.length; i++) {
                result[i + 12] = addrBuffer[i] & maskBuffer[i + 12];
            }
            i = i + 12;
        }
        for (; i < result.length; i++)
            result[i] = 0;
        return exports.ip.toString(result);
    },
    subnet: function (addr, mask) {
        const networkAddress = exports.ip.toLong(exports.ip.mask(addr, mask));
        // Calculate the mask's length.
        const maskBuffer = exports.ip.toBuffer(mask);
        let maskLength = 0;
        for (let i = 0; i < maskBuffer.length; i++) {
            if (maskBuffer[i] === 0xff) {
                maskLength += 8;
            }
            else {
                let octet = maskBuffer[i] & 0xff;
                while (octet) {
                    octet = (octet << 1) & 0xff;
                    maskLength++;
                }
            }
        }
        return {
            contains: function (other) {
                return networkAddress === exports.ip.toLong(exports.ip.mask(other, mask));
            },
        };
    },
    cidrSubnet: function (cidrString) {
        const cidrParts = cidrString.split('/');
        const addr = cidrParts[0];
        if (cidrParts.length !== 2)
            throw new Error('invalid CIDR subnet: ' + addr);
        const mask = exports.ip.fromPrefixLen(parseInt(cidrParts[1], 10));
        return exports.ip.subnet(addr, mask);
    },
    isEqual: function (a, b) {
        let aBuffer = exports.ip.toBuffer(a);
        let bBuffer = exports.ip.toBuffer(b);
        // Same protocol
        if (aBuffer.length === bBuffer.length) {
            for (let i = 0; i < aBuffer.length; i++) {
                if (aBuffer[i] !== bBuffer[i])
                    return false;
            }
            return true;
        }
        // Swap
        if (bBuffer.length === 4) {
            const t = bBuffer;
            bBuffer = aBuffer;
            aBuffer = t;
        }
        // a - IPv4, b - IPv6
        for (let i = 0; i < 10; i++) {
            if (bBuffer[i] !== 0)
                return false;
        }
        const word = bBuffer.readUInt16BE(10);
        if (word !== 0 && word !== 0xffff)
            return false;
        for (let i = 0; i < 4; i++) {
            if (aBuffer[i] !== bBuffer[i + 12])
                return false;
        }
        return true;
    },
    toLong: function (ip) {
        let ipl = 0;
        ip.split('.').forEach(function (octet) {
            ipl <<= 8;
            ipl += parseInt(octet);
        });
        return ipl >>> 0;
    },
    fromLong: function (ipl) {
        return (ipl >>> 24) + '.' + ((ipl >> 16) & 255) + '.' + ((ipl >> 8) & 255) + '.' + (ipl & 255);
    },
};
function _normalizeFamily(family) {
    return family ? family.toLowerCase() : 'ipv4';
}


/***/ }),

/***/ 4834:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bracketCompatible = exports.customIn = exports.deepCopy = exports.generatorRunAsync = exports.generatorRunSync = exports.getEvalValue = exports.replaceEval = exports.hasEval = exports.writeFile = exports.readFile = exports.setEquals = exports.paramsToString = exports.arrayToString = exports.arrayRemoveDuplicates = exports.array2DEquals = exports.arrayEquals = exports.removeComments = exports.escapeAssertion = void 0;
// escapeAssertion escapes the dots in the assertion,
// because the expression evaluation doesn't support such variable names.
const persist_1 = __nccwpck_require__(1908);
const escapeAssertionReg = new RegExp(/([()\s|&,=!><+\-*/]|^)((r|p)[0-9]*)\./g);
function escapeAssertion(s) {
    s = s.replace(escapeAssertionReg, (match) => {
        // Replace only the last dot with underscore (preserve the prefix character)
        const lastDotIdx = match.lastIndexOf('.');
        if (lastDotIdx > 0) {
            return match.substring(0, lastDotIdx) + '_';
        }
        return match;
    });
    return s;
}
exports.escapeAssertion = escapeAssertion;
// removeComments removes the comments starting with # in the text.
function removeComments(s) {
    const pos = s.indexOf('#');
    return pos > -1 ? s.slice(0, pos).trim() : s;
}
exports.removeComments = removeComments;
// arrayEquals determines whether two string arrays are identical.
function arrayEquals(a = [], b = []) {
    const aLen = a.length;
    const bLen = b.length;
    if (aLen !== bLen) {
        return false;
    }
    for (let i = 0; i < aLen; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
exports.arrayEquals = arrayEquals;
// array2DEquals determines whether two 2-dimensional string arrays are identical.
function array2DEquals(a = [], b = []) {
    const aLen = a.length;
    const bLen = a.length;
    if (aLen !== bLen) {
        return false;
    }
    for (let i = 0; i < aLen; i++) {
        if (!arrayEquals(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
exports.array2DEquals = array2DEquals;
// arrayRemoveDuplicates removes any duplicated elements in a string array.
function arrayRemoveDuplicates(s) {
    return [...new Set(s)];
}
exports.arrayRemoveDuplicates = arrayRemoveDuplicates;
// arrayToString gets a printable string for a string array.
function arrayToString(a) {
    return a.join(', ');
}
exports.arrayToString = arrayToString;
// paramsToString gets a printable string for variable number of parameters.
function paramsToString(...v) {
    return v.join(', ');
}
exports.paramsToString = paramsToString;
// setEquals determines whether two string sets are identical.
function setEquals(a, b) {
    return arrayEquals(a.sort(), b.sort());
}
exports.setEquals = setEquals;
// readFile return a promise for readFile.
function readFile(path, encoding) {
    const fs = persist_1.mustGetDefaultFileSystem();
    return new Promise((resolve, reject) => {
        try {
            fs.readFileSync(path, encoding || 'utf8');
            resolve();
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.readFile = readFile;
// writeFile return a promise for writeFile.
function writeFile(path, file, encoding) {
    const fs = persist_1.mustGetDefaultFileSystem();
    return new Promise((resolve, reject) => {
        try {
            fs.writeFileSync(path, file, encoding || 'utf-8');
            resolve();
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.writeFile = writeFile;
const evalRegG = new RegExp(/\beval\(([^),]*)\)/g);
const evalReg = new RegExp(/\beval\(([^),]*)\)/);
// hasEval determine whether matcher contains function eval
function hasEval(s) {
    return evalReg.test(s);
}
exports.hasEval = hasEval;
// replaceEval replace function eval with the value of its parameters
function replaceEval(s, ruleName, rule) {
    return s.replace(`eval(${ruleName})`, '(' + rule + ')');
}
exports.replaceEval = replaceEval;
// getEvalValue returns the parameters of function eval
function getEvalValue(s) {
    const subMatch = s.match(evalRegG);
    const rules = [];
    if (!subMatch) {
        return [];
    }
    for (const rule of subMatch) {
        const index = rule.indexOf('(');
        rules.push(rule.slice(index + 1, -1));
    }
    return rules;
}
exports.getEvalValue = getEvalValue;
// generatorRunSync handle generator function in Sync model and return value which is not Promise
function generatorRunSync(iterator) {
    let { value, done } = iterator.next();
    while (true) {
        if (value instanceof Promise) {
            throw new Error('cannot handle Promise in generatorRunSync, Please use generatorRunAsync');
        }
        if (!done) {
            const temp = value;
            ({ value, done } = iterator.next(temp));
        }
        else {
            return value;
        }
    }
}
exports.generatorRunSync = generatorRunSync;
// generatorRunAsync handle generator function in Async model and return Promise
async function generatorRunAsync(iterator) {
    let { value, done } = iterator.next();
    while (true) {
        if (!done) {
            const temp = await value;
            ({ value, done } = iterator.next(temp));
        }
        else {
            return value;
        }
    }
}
exports.generatorRunAsync = generatorRunAsync;
function deepCopy(obj) {
    if (typeof obj !== 'object')
        return;
    const newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
exports.deepCopy = deepCopy;
function customIn(a, b) {
    if (b instanceof Array) {
        return b.includes(a);
    }
    return (a in b);
}
exports.customIn = customIn;
function bracketCompatible(exp) {
    // TODO: This function didn't support nested bracket.
    if (!(exp.includes(' in ') && exp.includes(' ('))) {
        return exp;
    }
    const re = / \([^)]*\)/g;
    const array = exp.split('');
    let reResult;
    while ((reResult = re.exec(exp)) !== null) {
        if (!reResult[0].includes(',')) {
            continue;
        }
        array[reResult.index + 1] = '[';
        array[re.lastIndex - 1] = ']';
    }
    exp = array.join('');
    return exp;
}
exports.bracketCompatible = bracketCompatible;


/***/ }),

/***/ 7952:
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 4683:
/***/ (function(module, exports) {

//     JavaScript Expression Parser (JSEP) 0.3.5
//     JSEP may be freely distributed under the MIT License
//     https://ericsmekens.github.io/jsep/

/*global module: true, exports: true, console: true */
(function (root) {
	'use strict';
	// Node Types
	// ----------

	// This is the full set of types that any JSEP node can be.
	// Store them here to save space when minified
	var COMPOUND = 'Compound',
		IDENTIFIER = 'Identifier',
		MEMBER_EXP = 'MemberExpression',
		LITERAL = 'Literal',
		THIS_EXP = 'ThisExpression',
		CALL_EXP = 'CallExpression',
		UNARY_EXP = 'UnaryExpression',
		BINARY_EXP = 'BinaryExpression',
		LOGICAL_EXP = 'LogicalExpression',
		CONDITIONAL_EXP = 'ConditionalExpression',
		ARRAY_EXP = 'ArrayExpression',

		PERIOD_CODE = 46, // '.'
		COMMA_CODE  = 44, // ','
		SQUOTE_CODE = 39, // single quote
		DQUOTE_CODE = 34, // double quotes
		OPAREN_CODE = 40, // (
		CPAREN_CODE = 41, // )
		OBRACK_CODE = 91, // [
		CBRACK_CODE = 93, // ]
		QUMARK_CODE = 63, // ?
		SEMCOL_CODE = 59, // ;
		COLON_CODE  = 58, // :

		throwError = function(message, index) {
			var error = new Error(message + ' at character ' + index);
			error.index = index;
			error.description = message;
			throw error;
		},

	// Operations
	// ----------

	// Set `t` to `true` to save space (when minified, not gzipped)
		t = true,
	// Use a quickly-accessible map to store all of the unary operators
	// Values are set to `true` (it really doesn't matter)
		unary_ops = {'-': t, '!': t, '~': t, '+': t},
	// Also use a map for the binary operations but set their values to their
	// binary precedence for quick reference:
	// see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
		binary_ops = {
			'||': 1, '&&': 2, '|': 3,  '^': 4,  '&': 5,
			'==': 6, '!=': 6, '===': 6, '!==': 6,
			'<': 7,  '>': 7,  '<=': 7,  '>=': 7,
			'<<':8,  '>>': 8, '>>>': 8,
			'+': 9, '-': 9,
			'*': 10, '/': 10, '%': 10
		},
	// Get return the longest key length of any object
		getMaxKeyLen = function(obj) {
			var max_len = 0, len;
			for(var key in obj) {
				if((len = key.length) > max_len && obj.hasOwnProperty(key)) {
					max_len = len;
				}
			}
			return max_len;
		},
		max_unop_len = getMaxKeyLen(unary_ops),
		max_binop_len = getMaxKeyLen(binary_ops),
	// Literals
	// ----------
	// Store the values to return for the various literals we may encounter
		literals = {
			'true': true,
			'false': false,
			'null': null
		},
	// Except for `this`, which is special. This could be changed to something like `'self'` as well
		this_str = 'this',
	// Returns the precedence of a binary operator or `0` if it isn't a binary operator
		binaryPrecedence = function(op_val) {
			return binary_ops[op_val] || 0;
		},
	// Utility function (gets called from multiple places)
	// Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
		createBinaryExpression = function (operator, left, right) {
			var type = (operator === '||' || operator === '&&') ? LOGICAL_EXP : BINARY_EXP;
			return {
				type: type,
				operator: operator,
				left: left,
				right: right
			};
		},
		// `ch` is a character code in the next three functions
		isDecimalDigit = function(ch) {
			return (ch >= 48 && ch <= 57); // 0...9
		},
		isIdentifierStart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},
		isIdentifierPart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
					(ch >= 48 && ch <= 57) || // 0...9
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},

		// Parsing
		// -------
		// `expr` is a string with the passed in expression
		jsep = function(expr) {
			// `index` stores the character number we are currently at while `length` is a constant
			// All of the gobbles below will modify `index` as we move along
			var index = 0,
				charAtFunc = expr.charAt,
				charCodeAtFunc = expr.charCodeAt,
				exprI = function(i) { return charAtFunc.call(expr, i); },
				exprICode = function(i) { return charCodeAtFunc.call(expr, i); },
				length = expr.length,

				// Push `index` up to the next non-space character
				gobbleSpaces = function() {
					var ch = exprICode(index);
					// space or tab
					while(ch === 32 || ch === 9 || ch === 10 || ch === 13) {
						ch = exprICode(++index);
					}
				},

				// The main parsing function. Much of this code is dedicated to ternary expressions
				gobbleExpression = function() {
					var test = gobbleBinaryExpression(),
						consequent, alternate;
					gobbleSpaces();
					if(exprICode(index) === QUMARK_CODE) {
						// Ternary expression: test ? consequent : alternate
						index++;
						consequent = gobbleExpression();
						if(!consequent) {
							throwError('Expected expression', index);
						}
						gobbleSpaces();
						if(exprICode(index) === COLON_CODE) {
							index++;
							alternate = gobbleExpression();
							if(!alternate) {
								throwError('Expected expression', index);
							}
							return {
								type: CONDITIONAL_EXP,
								test: test,
								consequent: consequent,
								alternate: alternate
							};
						} else {
							throwError('Expected :', index);
						}
					} else {
						return test;
					}
				},

				// Search for the operation portion of the string (e.g. `+`, `===`)
				// Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
				// and move down from 3 to 2 to 1 character until a matching binary operation is found
				// then, return that binary operation
				gobbleBinaryOp = function() {
					gobbleSpaces();
					var biop, to_check = expr.substr(index, max_binop_len), tc_len = to_check.length;
					while(tc_len > 0) {
						// Don't accept a binary op when it is an identifier.
						// Binary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
						if(binary_ops.hasOwnProperty(to_check) && (
							!isIdentifierStart(exprICode(index)) ||
							(index+to_check.length< expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
						)) {
							index += tc_len;
							return to_check;
						}
						to_check = to_check.substr(0, --tc_len);
					}
					return false;
				},

				// This function is responsible for gobbling an individual expression,
				// e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
				gobbleBinaryExpression = function() {
					var ch_i, node, biop, prec, stack, biop_info, left, right, i, cur_biop;

					// First, try to get the leftmost thing
					// Then, check to see if there's a binary operator operating on that leftmost thing
					left = gobbleToken();
					biop = gobbleBinaryOp();

					// If there wasn't a binary operator, just return the leftmost node
					if(!biop) {
						return left;
					}

					// Otherwise, we need to start a stack to properly place the binary operations in their
					// precedence structure
					biop_info = { value: biop, prec: binaryPrecedence(biop)};

					right = gobbleToken();
					if(!right) {
						throwError("Expected expression after " + biop, index);
					}
					stack = [left, biop_info, right];

					// Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
					while((biop = gobbleBinaryOp())) {
						prec = binaryPrecedence(biop);

						if(prec === 0) {
							break;
						}
						biop_info = { value: biop, prec: prec };

						cur_biop = biop;
						// Reduce: make a binary expression from the three topmost entries.
						while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
							right = stack.pop();
							biop = stack.pop().value;
							left = stack.pop();
							node = createBinaryExpression(biop, left, right);
							stack.push(node);
						}

						node = gobbleToken();
						if(!node) {
							throwError("Expected expression after " + cur_biop, index);
						}
						stack.push(biop_info, node);
					}

					i = stack.length - 1;
					node = stack[i];
					while(i > 1) {
						node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
						i -= 2;
					}
					return node;
				},

				// An individual part of a binary expression:
				// e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
				gobbleToken = function() {
					var ch, to_check, tc_len;

					gobbleSpaces();
					ch = exprICode(index);

					if(isDecimalDigit(ch) || ch === PERIOD_CODE) {
						// Char code 46 is a dot `.` which can start off a numeric literal
						return gobbleNumericLiteral();
					} else if(ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
						// Single or double quotes
						return gobbleStringLiteral();
					} else if (ch === OBRACK_CODE) {
						return gobbleArray();
					} else {
						to_check = expr.substr(index, max_unop_len);
						tc_len = to_check.length;
						while(tc_len > 0) {
						// Don't accept an unary op when it is an identifier.
						// Unary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
							if(unary_ops.hasOwnProperty(to_check) && (
								!isIdentifierStart(exprICode(index)) ||
								(index+to_check.length < expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
							)) {
								index += tc_len;
								return {
									type: UNARY_EXP,
									operator: to_check,
									argument: gobbleToken(),
									prefix: true
								};
							}
							to_check = to_check.substr(0, --tc_len);
						}

						if (isIdentifierStart(ch) || ch === OPAREN_CODE) { // open parenthesis
							// `foo`, `bar.baz`
							return gobbleVariable();
						}
					}

					return false;
				},
				// Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
				// keep track of everything in the numeric literal and then calling `parseFloat` on that string
				gobbleNumericLiteral = function() {
					var number = '', ch, chCode;
					while(isDecimalDigit(exprICode(index))) {
						number += exprI(index++);
					}

					if(exprICode(index) === PERIOD_CODE) { // can start with a decimal marker
						number += exprI(index++);

						while(isDecimalDigit(exprICode(index))) {
							number += exprI(index++);
						}
					}

					ch = exprI(index);
					if(ch === 'e' || ch === 'E') { // exponent marker
						number += exprI(index++);
						ch = exprI(index);
						if(ch === '+' || ch === '-') { // exponent sign
							number += exprI(index++);
						}
						while(isDecimalDigit(exprICode(index))) { //exponent itself
							number += exprI(index++);
						}
						if(!isDecimalDigit(exprICode(index-1)) ) {
							throwError('Expected exponent (' + number + exprI(index) + ')', index);
						}
					}


					chCode = exprICode(index);
					// Check to make sure this isn't a variable name that start with a number (123abc)
					if(isIdentifierStart(chCode)) {
						throwError('Variable names cannot start with a number (' +
									number + exprI(index) + ')', index);
					} else if(chCode === PERIOD_CODE) {
						throwError('Unexpected period', index);
					}

					return {
						type: LITERAL,
						value: parseFloat(number),
						raw: number
					};
				},

				// Parses a string literal, staring with single or double quotes with basic support for escape codes
				// e.g. `"hello world"`, `'this is\nJSEP'`
				gobbleStringLiteral = function() {
					var str = '', quote = exprI(index++), closed = false, ch;

					while(index < length) {
						ch = exprI(index++);
						if(ch === quote) {
							closed = true;
							break;
						} else if(ch === '\\') {
							// Check for all of the common escape codes
							ch = exprI(index++);
							switch(ch) {
								case 'n': str += '\n'; break;
								case 'r': str += '\r'; break;
								case 't': str += '\t'; break;
								case 'b': str += '\b'; break;
								case 'f': str += '\f'; break;
								case 'v': str += '\x0B'; break;
								default : str += ch;
							}
						} else {
							str += ch;
						}
					}

					if(!closed) {
						throwError('Unclosed quote after "'+str+'"', index);
					}

					return {
						type: LITERAL,
						value: str,
						raw: quote + str + quote
					};
				},

				// Gobbles only identifiers
				// e.g.: `foo`, `_value`, `$x1`
				// Also, this function checks if that identifier is a literal:
				// (e.g. `true`, `false`, `null`) or `this`
				gobbleIdentifier = function() {
					var ch = exprICode(index), start = index, identifier;

					if(isIdentifierStart(ch)) {
						index++;
					} else {
						throwError('Unexpected ' + exprI(index), index);
					}

					while(index < length) {
						ch = exprICode(index);
						if(isIdentifierPart(ch)) {
							index++;
						} else {
							break;
						}
					}
					identifier = expr.slice(start, index);

					if(literals.hasOwnProperty(identifier)) {
						return {
							type: LITERAL,
							value: literals[identifier],
							raw: identifier
						};
					} else if(identifier === this_str) {
						return { type: THIS_EXP };
					} else {
						return {
							type: IDENTIFIER,
							name: identifier
						};
					}
				},

				// Gobbles a list of arguments within the context of a function call
				// or array literal. This function also assumes that the opening character
				// `(` or `[` has already been gobbled, and gobbles expressions and commas
				// until the terminator character `)` or `]` is encountered.
				// e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
				gobbleArguments = function(termination) {
					var ch_i, args = [], node, closed = false;
					var separator_count = 0;
					while(index < length) {
						gobbleSpaces();
						ch_i = exprICode(index);
						if(ch_i === termination) { // done parsing
							closed = true;
							index++;
							if(termination === CPAREN_CODE && separator_count && separator_count >= args.length){
								throwError('Unexpected token ' + String.fromCharCode(termination), index);
							}
							break;
						} else if (ch_i === COMMA_CODE) { // between expressions
							index++;
							separator_count++;
							if(separator_count !== args.length) { // missing argument
								if(termination === CPAREN_CODE) {
									throwError('Unexpected token ,', index);
								}
								else if(termination === CBRACK_CODE) {
									for(var arg = args.length; arg< separator_count; arg++) {
										args.push(null);
									}
								}
							}
						} else {
							node = gobbleExpression();
							if(!node || node.type === COMPOUND) {
								throwError('Expected comma', index);
							}
							args.push(node);
						}
					}
					if (!closed) {
						throwError('Expected ' + String.fromCharCode(termination), index);
					}
					return args;
				},

				// Gobble a non-literal variable name. This variable name may include properties
				// e.g. `foo`, `bar.baz`, `foo['bar'].baz`
				// It also gobbles function calls:
				// e.g. `Math.acos(obj.angle)`
				gobbleVariable = function() {
					var ch_i, node;
					ch_i = exprICode(index);

					if(ch_i === OPAREN_CODE) {
						node = gobbleGroup();
					} else {
						node = gobbleIdentifier();
					}
					gobbleSpaces();
					ch_i = exprICode(index);
					while(ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
						index++;
						if(ch_i === PERIOD_CODE) {
							gobbleSpaces();
							node = {
								type: MEMBER_EXP,
								computed: false,
								object: node,
								property: gobbleIdentifier()
							};
						} else if(ch_i === OBRACK_CODE) {
							node = {
								type: MEMBER_EXP,
								computed: true,
								object: node,
								property: gobbleExpression()
							};
							gobbleSpaces();
							ch_i = exprICode(index);
							if(ch_i !== CBRACK_CODE) {
								throwError('Unclosed [', index);
							}
							index++;
						} else if(ch_i === OPAREN_CODE) {
							// A function call is being made; gobble all the arguments
							node = {
								type: CALL_EXP,
								'arguments': gobbleArguments(CPAREN_CODE),
								callee: node
							};
						}
						gobbleSpaces();
						ch_i = exprICode(index);
					}
					return node;
				},

				// Responsible for parsing a group of things within parentheses `()`
				// This function assumes that it needs to gobble the opening parenthesis
				// and then tries to gobble everything within that parenthesis, assuming
				// that the next thing it should see is the close parenthesis. If not,
				// then the expression probably doesn't have a `)`
				gobbleGroup = function() {
					index++;
					var node = gobbleExpression();
					gobbleSpaces();
					if(exprICode(index) === CPAREN_CODE) {
						index++;
						return node;
					} else {
						throwError('Unclosed (', index);
					}
				},

				// Responsible for parsing Array literals `[1, 2, 3]`
				// This function assumes that it needs to gobble the opening bracket
				// and then tries to gobble the expressions as arguments.
				gobbleArray = function() {
					index++;
					return {
						type: ARRAY_EXP,
						elements: gobbleArguments(CBRACK_CODE)
					};
				},

				nodes = [], ch_i, node;

			while(index < length) {
				ch_i = exprICode(index);

				// Expressions can be separated by semicolons, commas, or just inferred without any
				// separators
				if(ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
					index++; // ignore separators
				} else {
					// Try to gobble each expression individually
					if((node = gobbleExpression())) {
						nodes.push(node);
					// If we weren't able to find a binary expression and are out of room, then
					// the expression passed in probably has too much
					} else if(index < length) {
						throwError('Unexpected "' + exprI(index) + '"', index);
					}
				}
			}

			// If there's only one expression just try returning the expression
			if(nodes.length === 1) {
				return nodes[0];
			} else {
				return {
					type: COMPOUND,
					body: nodes
				};
			}
		};

	// To be filled in by the template
	jsep.version = '0.3.5';
	jsep.toString = function() { return 'JavaScript Expression Parser (JSEP) v' + jsep.version; };

	/**
	 * @method jsep.addUnaryOp
	 * @param {string} op_name The name of the unary op to add
	 * @return jsep
	 */
	jsep.addUnaryOp = function(op_name) {
		max_unop_len = Math.max(op_name.length, max_unop_len);
		unary_ops[op_name] = t; return this;
	};

	/**
	 * @method jsep.addBinaryOp
	 * @param {string} op_name The name of the binary op to add
	 * @param {number} precedence The precedence of the binary op (can be a float)
	 * @return jsep
	 */
	jsep.addBinaryOp = function(op_name, precedence) {
		max_binop_len = Math.max(op_name.length, max_binop_len);
		binary_ops[op_name] = precedence;
		return this;
	};

	/**
	 * @method jsep.addLiteral
	 * @param {string} literal_name The name of the literal to add
	 * @param {*} literal_value The value of the literal
	 * @return jsep
	 */
	jsep.addLiteral = function(literal_name, literal_value) {
		literals[literal_name] = literal_value;
		return this;
	};

	/**
	 * @method jsep.removeUnaryOp
	 * @param {string} op_name The name of the unary op to remove
	 * @return jsep
	 */
	jsep.removeUnaryOp = function(op_name) {
		delete unary_ops[op_name];
		if(op_name.length === max_unop_len) {
			max_unop_len = getMaxKeyLen(unary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllUnaryOps
	 * @return jsep
	 */
	jsep.removeAllUnaryOps = function() {
		unary_ops = {};
		max_unop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeBinaryOp
	 * @param {string} op_name The name of the binary op to remove
	 * @return jsep
	 */
	jsep.removeBinaryOp = function(op_name) {
		delete binary_ops[op_name];
		if(op_name.length === max_binop_len) {
			max_binop_len = getMaxKeyLen(binary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllBinaryOps
	 * @return jsep
	 */
	jsep.removeAllBinaryOps = function() {
		binary_ops = {};
		max_binop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeLiteral
	 * @param {string} literal_name The name of the literal to remove
	 * @return jsep
	 */
	jsep.removeLiteral = function(literal_name) {
		delete literals[literal_name];
		return this;
	};

	/**
	 * @method jsep.removeAllLiterals
	 * @return jsep
	 */
	jsep.removeAllLiterals = function() {
		literals = {};

		return this;
	};

	// In desktop environments, have a way to restore the old value for `jsep`
	if (false) { var old_jsep; } else {
		// In Node.JS environments
		if ( true && module.exports) {
			exports = module.exports = jsep;
		} else {
			exports.parse = jsep;
		}
	}
}(this));


/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 2316:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// translate the various posix character classes into unicode properties
// this works across all unicode locales
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseClass = void 0;
// { <posix class>: [<translation>, /u flag required, negated]
const posixClasses = {
    '[:alnum:]': ['\\p{L}\\p{Nl}\\p{Nd}', true],
    '[:alpha:]': ['\\p{L}\\p{Nl}', true],
    '[:ascii:]': ['\\x' + '00-\\x' + '7f', false],
    '[:blank:]': ['\\p{Zs}\\t', true],
    '[:cntrl:]': ['\\p{Cc}', true],
    '[:digit:]': ['\\p{Nd}', true],
    '[:graph:]': ['\\p{Z}\\p{C}', true, true],
    '[:lower:]': ['\\p{Ll}', true],
    '[:print:]': ['\\p{C}', true],
    '[:punct:]': ['\\p{P}', true],
    '[:space:]': ['\\p{Z}\\t\\r\\n\\v\\f', true],
    '[:upper:]': ['\\p{Lu}', true],
    '[:word:]': ['\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}', true],
    '[:xdigit:]': ['A-Fa-f0-9', false],
};
// only need to escape a few things inside of brace expressions
// escapes: [ \ ] -
const braceEscape = (s) => s.replace(/[[\]\\-]/g, '\\$&');
// escape all regexp magic characters
const regexpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// everything has already been escaped, we just have to join
const rangesToString = (ranges) => ranges.join('');
// takes a glob string at a posix brace expression, and returns
// an equivalent regular expression source, and boolean indicating
// whether the /u flag needs to be applied, and the number of chars
// consumed to parse the character class.
// This also removes out of order ranges, and returns ($.) if the
// entire class just no good.
const parseClass = (glob, position) => {
    const pos = position;
    /* c8 ignore start */
    if (glob.charAt(pos) !== '[') {
        throw new Error('not in a brace expression');
    }
    /* c8 ignore stop */
    const ranges = [];
    const negs = [];
    let i = pos + 1;
    let sawStart = false;
    let uflag = false;
    let escaping = false;
    let negate = false;
    let endPos = pos;
    let rangeStart = '';
    WHILE: while (i < glob.length) {
        const c = glob.charAt(i);
        if ((c === '!' || c === '^') && i === pos + 1) {
            negate = true;
            i++;
            continue;
        }
        if (c === ']' && sawStart && !escaping) {
            endPos = i + 1;
            break;
        }
        sawStart = true;
        if (c === '\\') {
            if (!escaping) {
                escaping = true;
                i++;
                continue;
            }
            // escaped \ char, fall through and treat like normal char
        }
        if (c === '[' && !escaping) {
            // either a posix class, a collation equivalent, or just a [
            for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)) {
                if (glob.startsWith(cls, i)) {
                    // invalid, [a-[] is fine, but not [a-[:alpha]]
                    if (rangeStart) {
                        return ['$.', false, glob.length - pos, true];
                    }
                    i += cls.length;
                    if (neg)
                        negs.push(unip);
                    else
                        ranges.push(unip);
                    uflag = uflag || u;
                    continue WHILE;
                }
            }
        }
        // now it's just a normal character, effectively
        escaping = false;
        if (rangeStart) {
            // throw this range away if it's not valid, but others
            // can still match.
            if (c > rangeStart) {
                ranges.push(braceEscape(rangeStart) + '-' + braceEscape(c));
            }
            else if (c === rangeStart) {
                ranges.push(braceEscape(c));
            }
            rangeStart = '';
            i++;
            continue;
        }
        // now might be the start of a range.
        // can be either c-d or c-] or c<more...>] or c] at this point
        if (glob.startsWith('-]', i + 1)) {
            ranges.push(braceEscape(c + '-'));
            i += 2;
            continue;
        }
        if (glob.startsWith('-', i + 1)) {
            rangeStart = c;
            i += 2;
            continue;
        }
        // not the start of a range, just a single character
        ranges.push(braceEscape(c));
        i++;
    }
    if (endPos < i) {
        // didn't see the end of the class, not a valid class,
        // but might still be valid as a literal match.
        return ['', false, 0, false];
    }
    // if we got no ranges and no negates, then we have a range that
    // cannot possibly match anything, and that poisons the whole glob
    if (!ranges.length && !negs.length) {
        return ['$.', false, glob.length - pos, true];
    }
    // if we got one positive range, and it's a single character, then that's
    // not actually a magic pattern, it's just that one literal character.
    // we should not treat that as "magic", we should just return the literal
    // character. [_] is a perfectly valid way to escape glob magic chars.
    if (negs.length === 0 &&
        ranges.length === 1 &&
        /^\\?.$/.test(ranges[0]) &&
        !negate) {
        const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
        return [regexpEscape(r), false, endPos - pos, false];
    }
    const sranges = '[' + (negate ? '^' : '') + rangesToString(ranges) + ']';
    const snegs = '[' + (negate ? '' : '^') + rangesToString(negs) + ']';
    const comb = ranges.length && negs.length
        ? '(' + sranges + '|' + snegs + ')'
        : ranges.length
            ? sranges
            : snegs;
    return [comb, uflag, endPos - pos, true];
};
exports.parseClass = parseClass;
//# sourceMappingURL=brace-expressions.js.map

/***/ }),

/***/ 8930:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.escape = void 0;
/**
 * Escape all magic characters in a glob pattern.
 *
 * If the {@link windowsPathsNoEscape | GlobOptions.windowsPathsNoEscape}
 * option is used, then characters are escaped by wrapping in `[]`, because
 * a magic character wrapped in a character class can only be satisfied by
 * that exact character.  In this mode, `\` is _not_ escaped, because it is
 * not interpreted as a magic character, but instead as a path separator.
 */
const escape = (s, { windowsPathsNoEscape = false, } = {}) => {
    // don't need to escape +@! because we escape the parens
    // that make those magic, and escaping ! as [!] isn't valid,
    // because [!]] is a valid glob class meaning not ']'.
    return windowsPathsNoEscape
        ? s.replace(/[?*()[\]]/g, '[$&]')
        : s.replace(/[?*()[\]\\]/g, '\\$&');
};
exports.escape = escape;
//# sourceMappingURL=escape.js.map

/***/ }),

/***/ 4994:
/***/ (function(module, __unused_webpack_exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const index_js_1 = __importDefault(__nccwpck_require__(5469));
module.exports = Object.assign(index_js_1.default, { default: index_js_1.default, minimatch: index_js_1.default });
//# sourceMappingURL=index-cjs.js.map

/***/ }),

/***/ 5469:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unescape = exports.escape = exports.Minimatch = exports.match = exports.makeRe = exports.braceExpand = exports.defaults = exports.filter = exports.GLOBSTAR = exports.sep = exports.minimatch = void 0;
const brace_expansion_1 = __importDefault(__nccwpck_require__(4691));
const brace_expressions_js_1 = __nccwpck_require__(2316);
const escape_js_1 = __nccwpck_require__(8930);
const unescape_js_1 = __nccwpck_require__(9105);
const minimatch = (p, pattern, options = {}) => {
    assertValidPattern(pattern);
    // shortcut: comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === '#') {
        return false;
    }
    return new Minimatch(pattern, options).match(p);
};
exports.minimatch = minimatch;
exports["default"] = exports.minimatch;
// Optimized checking for the most common glob patterns.
const starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
const starDotExtTest = (ext) => (f) => !f.startsWith('.') && f.endsWith(ext);
const starDotExtTestDot = (ext) => (f) => f.endsWith(ext);
const starDotExtTestNocase = (ext) => {
    ext = ext.toLowerCase();
    return (f) => !f.startsWith('.') && f.toLowerCase().endsWith(ext);
};
const starDotExtTestNocaseDot = (ext) => {
    ext = ext.toLowerCase();
    return (f) => f.toLowerCase().endsWith(ext);
};
const starDotStarRE = /^\*+\.\*+$/;
const starDotStarTest = (f) => !f.startsWith('.') && f.includes('.');
const starDotStarTestDot = (f) => f !== '.' && f !== '..' && f.includes('.');
const dotStarRE = /^\.\*+$/;
const dotStarTest = (f) => f !== '.' && f !== '..' && f.startsWith('.');
const starRE = /^\*+$/;
const starTest = (f) => f.length !== 0 && !f.startsWith('.');
const starTestDot = (f) => f.length !== 0 && f !== '.' && f !== '..';
const qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
const qmarksTestNocase = ([$0, ext = '']) => {
    const noext = qmarksTestNoExt([$0]);
    if (!ext)
        return noext;
    ext = ext.toLowerCase();
    return (f) => noext(f) && f.toLowerCase().endsWith(ext);
};
const qmarksTestNocaseDot = ([$0, ext = '']) => {
    const noext = qmarksTestNoExtDot([$0]);
    if (!ext)
        return noext;
    ext = ext.toLowerCase();
    return (f) => noext(f) && f.toLowerCase().endsWith(ext);
};
const qmarksTestDot = ([$0, ext = '']) => {
    const noext = qmarksTestNoExtDot([$0]);
    return !ext ? noext : (f) => noext(f) && f.endsWith(ext);
};
const qmarksTest = ([$0, ext = '']) => {
    const noext = qmarksTestNoExt([$0]);
    return !ext ? noext : (f) => noext(f) && f.endsWith(ext);
};
const qmarksTestNoExt = ([$0]) => {
    const len = $0.length;
    return (f) => f.length === len && !f.startsWith('.');
};
const qmarksTestNoExtDot = ([$0]) => {
    const len = $0.length;
    return (f) => f.length === len && f !== '.' && f !== '..';
};
/* c8 ignore start */
const defaultPlatform = (typeof process === 'object' && process
    ? (typeof process.env === 'object' &&
        process.env &&
        process.env.__MINIMATCH_TESTING_PLATFORM__) ||
        process.platform
    : 'posix');
const path = {
    win32: { sep: '\\' },
    posix: { sep: '/' },
};
/* c8 ignore stop */
exports.sep = defaultPlatform === 'win32' ? path.win32.sep : path.posix.sep;
exports.minimatch.sep = exports.sep;
exports.GLOBSTAR = Symbol('globstar **');
exports.minimatch.GLOBSTAR = exports.GLOBSTAR;
const plTypes = {
    '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
    '?': { open: '(?:', close: ')?' },
    '+': { open: '(?:', close: ')+' },
    '*': { open: '(?:', close: ')*' },
    '@': { open: '(?:', close: ')' },
};
// any single thing other than /
// don't need to escape / when using new RegExp()
const qmark = '[^/]';
// * => any number of characters
const star = qmark + '*?';
// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
const twoStarDot = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?';
// not a ^ or / followed by a dot,
// followed by anything, any number of times.
const twoStarNoDot = '(?:(?!(?:\\/|^)\\.).)*?';
// "abc" -> { a:true, b:true, c:true }
const charSet = (s) => s.split('').reduce((set, c) => {
    set[c] = true;
    return set;
}, {});
// characters that need to be escaped in RegExp.
const reSpecials = charSet('().*{}+?[]^$\\!');
// characters that indicate we have to add the pattern start
const addPatternStartSet = charSet('[.(');
const filter = (pattern, options = {}) => (p) => (0, exports.minimatch)(p, pattern, options);
exports.filter = filter;
exports.minimatch.filter = exports.filter;
const ext = (a, b = {}) => Object.assign({}, a, b);
const defaults = (def) => {
    if (!def || typeof def !== 'object' || !Object.keys(def).length) {
        return exports.minimatch;
    }
    const orig = exports.minimatch;
    const m = (p, pattern, options = {}) => orig(p, pattern, ext(def, options));
    return Object.assign(m, {
        Minimatch: class Minimatch extends orig.Minimatch {
            constructor(pattern, options = {}) {
                super(pattern, ext(def, options));
            }
            static defaults(options) {
                return orig.defaults(ext(def, options)).Minimatch;
            }
        },
        unescape: (s, options = {}) => orig.unescape(s, ext(def, options)),
        escape: (s, options = {}) => orig.escape(s, ext(def, options)),
        filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
        defaults: (options) => orig.defaults(ext(def, options)),
        makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
        braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
        match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
        sep: orig.sep,
        GLOBSTAR: exports.GLOBSTAR,
    });
};
exports.defaults = defaults;
exports.minimatch.defaults = exports.defaults;
// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
const braceExpand = (pattern, options = {}) => {
    assertValidPattern(pattern);
    // Thanks to Yeting Li <https://github.com/yetingli> for
    // improving this regexp to avoid a ReDOS vulnerability.
    if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        // shortcut. no need to expand.
        return [pattern];
    }
    return (0, brace_expansion_1.default)(pattern);
};
exports.braceExpand = braceExpand;
exports.minimatch.braceExpand = exports.braceExpand;
const MAX_PATTERN_LENGTH = 1024 * 64;
const assertValidPattern = (pattern) => {
    if (typeof pattern !== 'string') {
        throw new TypeError('invalid pattern');
    }
    if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError('pattern is too long');
    }
};
// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
const makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
exports.makeRe = makeRe;
exports.minimatch.makeRe = exports.makeRe;
const match = (list, pattern, options = {}) => {
    const mm = new Minimatch(pattern, options);
    list = list.filter(f => mm.match(f));
    if (mm.options.nonull && !list.length) {
        list.push(pattern);
    }
    return list;
};
exports.match = match;
exports.minimatch.match = exports.match;
// replace stuff like \* with *
const globUnescape = (s) => s.replace(/\\(.)/g, '$1');
const globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
const regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
class Minimatch {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    regexp;
    constructor(pattern, options = {}) {
        assertValidPattern(pattern);
        options = options || {};
        this.options = options;
        this.pattern = pattern;
        this.platform = options.platform || defaultPlatform;
        this.isWindows = this.platform === 'win32';
        this.windowsPathsNoEscape =
            !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
            this.pattern = this.pattern.replace(/\\/g, '/');
        }
        this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
        this.regexp = null;
        this.negate = false;
        this.nonegate = !!options.nonegate;
        this.comment = false;
        this.empty = false;
        this.partial = !!options.partial;
        this.nocase = !!this.options.nocase;
        this.windowsNoMagicRoot =
            options.windowsNoMagicRoot !== undefined
                ? options.windowsNoMagicRoot
                : !!(this.isWindows && this.nocase);
        this.globSet = [];
        this.globParts = [];
        this.set = [];
        // make the set of regexps etc.
        this.make();
    }
    hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) {
            return true;
        }
        for (const pattern of this.set) {
            for (const part of pattern) {
                if (typeof part !== 'string')
                    return true;
            }
        }
        return false;
    }
    debug(..._) { }
    make() {
        const pattern = this.pattern;
        const options = this.options;
        // empty patterns and comments match nothing.
        if (!options.nocomment && pattern.charAt(0) === '#') {
            this.comment = true;
            return;
        }
        if (!pattern) {
            this.empty = true;
            return;
        }
        // step 1: figure out negation, etc.
        this.parseNegate();
        // step 2: expand braces
        this.globSet = [...new Set(this.braceExpand())];
        if (options.debug) {
            this.debug = (...args) => console.error(...args);
        }
        this.debug(this.pattern, this.globSet);
        // step 3: now we have a set, so turn each one into a series of
        // path-portion matching patterns.
        // These will be regexps, except in the case of "**", which is
        // set to the GLOBSTAR object for globstar behavior,
        // and will not contain any / characters
        //
        // First, we preprocess to make the glob pattern sets a bit simpler
        // and deduped.  There are some perf-killing patterns that can cause
        // problems with a glob walk, but we can simplify them down a bit.
        const rawGlobParts = this.globSet.map(s => this.slashSplit(s));
        this.globParts = this.preprocess(rawGlobParts);
        this.debug(this.pattern, this.globParts);
        // glob --> regexps
        let set = this.globParts.map((s, _, __) => {
            if (this.isWindows && this.windowsNoMagicRoot) {
                // check if it's a drive or unc path.
                const isUNC = s[0] === '' &&
                    s[1] === '' &&
                    (s[2] === '?' || !globMagic.test(s[2])) &&
                    !globMagic.test(s[3]);
                const isDrive = /^[a-z]:/i.test(s[0]);
                if (isUNC) {
                    return [...s.slice(0, 4), ...s.slice(4).map(ss => this.parse(ss))];
                }
                else if (isDrive) {
                    return [s[0], ...s.slice(1).map(ss => this.parse(ss))];
                }
            }
            return s.map(ss => this.parse(ss));
        });
        this.debug(this.pattern, set);
        // filter out everything that didn't compile properly.
        this.set = set.filter(s => s.indexOf(false) === -1);
        // do not treat the ? in UNC paths as magic
        if (this.isWindows) {
            for (let i = 0; i < this.set.length; i++) {
                const p = this.set[i];
                if (p[0] === '' &&
                    p[1] === '' &&
                    this.globParts[i][2] === '?' &&
                    typeof p[3] === 'string' &&
                    /^[a-z]:$/i.test(p[3])) {
                    p[2] = '?';
                }
            }
        }
        this.debug(this.pattern, this.set);
    }
    // various transforms to equivalent pattern sets that are
    // faster to process in a filesystem walk.  The goal is to
    // eliminate what we can, and push all ** patterns as far
    // to the right as possible, even if it increases the number
    // of patterns that we have to process.
    preprocess(globParts) {
        // if we're not in globstar mode, then turn all ** into *
        if (this.options.noglobstar) {
            for (let i = 0; i < globParts.length; i++) {
                for (let j = 0; j < globParts[i].length; j++) {
                    if (globParts[i][j] === '**') {
                        globParts[i][j] = '*';
                    }
                }
            }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            // aggressive optimization for the purpose of fs walking
            globParts = this.firstPhasePreProcess(globParts);
            globParts = this.secondPhasePreProcess(globParts);
        }
        else if (optimizationLevel >= 1) {
            // just basic optimizations to remove some .. parts
            globParts = this.levelOneOptimize(globParts);
        }
        else {
            globParts = this.adjascentGlobstarOptimize(globParts);
        }
        return globParts;
    }
    // just get rid of adjascent ** portions
    adjascentGlobstarOptimize(globParts) {
        return globParts.map(parts => {
            let gs = -1;
            while (-1 !== (gs = parts.indexOf('**', gs + 1))) {
                let i = gs;
                while (parts[i + 1] === '**') {
                    i++;
                }
                if (i !== gs) {
                    parts.splice(gs, i - gs);
                }
            }
            return parts;
        });
    }
    // get rid of adjascent ** and resolve .. portions
    levelOneOptimize(globParts) {
        return globParts.map(parts => {
            parts = parts.reduce((set, part) => {
                const prev = set[set.length - 1];
                if (part === '**' && prev === '**') {
                    return set;
                }
                if (part === '..') {
                    if (prev && prev !== '..' && prev !== '.' && prev !== '**') {
                        set.pop();
                        return set;
                    }
                }
                set.push(part);
                return set;
            }, []);
            return parts.length === 0 ? [''] : parts;
        });
    }
    levelTwoFileOptimize(parts) {
        if (!Array.isArray(parts)) {
            parts = this.slashSplit(parts);
        }
        let didSomething = false;
        do {
            didSomething = false;
            // <pre>/<e>/<rest> -> <pre>/<rest>
            if (!this.preserveMultipleSlashes) {
                for (let i = 1; i < parts.length - 1; i++) {
                    const p = parts[i];
                    // don't squeeze out UNC patterns
                    if (i === 1 && p === '' && parts[0] === '')
                        continue;
                    if (p === '.' || p === '') {
                        didSomething = true;
                        parts.splice(i, 1);
                        i--;
                    }
                }
                if (parts[0] === '.' &&
                    parts.length === 2 &&
                    (parts[1] === '.' || parts[1] === '')) {
                    didSomething = true;
                    parts.pop();
                }
            }
            // <pre>/<p>/../<rest> -> <pre>/<rest>
            let dd = 0;
            while (-1 !== (dd = parts.indexOf('..', dd + 1))) {
                const p = parts[dd - 1];
                if (p && p !== '.' && p !== '..' && p !== '**') {
                    didSomething = true;
                    parts.splice(dd - 1, 2);
                    dd -= 2;
                }
            }
        } while (didSomething);
        return parts.length === 0 ? [''] : parts;
    }
    // First phase: single-pattern processing
    // <pre> is 1 or more portions
    // <rest> is 1 or more portions
    // <p> is any portion other than ., .., '', or **
    // <e> is . or ''
    //
    // **/.. is *brutal* for filesystem walking performance, because
    // it effectively resets the recursive walk each time it occurs,
    // and ** cannot be reduced out by a .. pattern part like a regexp
    // or most strings (other than .., ., and '') can be.
    //
    // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
    // <pre>/<e>/<rest> -> <pre>/<rest>
    // <pre>/<p>/../<rest> -> <pre>/<rest>
    // **/**/<rest> -> **/<rest>
    //
    // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
    // this WOULD be allowed if ** did follow symlinks, or * didn't
    firstPhasePreProcess(globParts) {
        let didSomething = false;
        do {
            didSomething = false;
            // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
            for (let parts of globParts) {
                let gs = -1;
                while (-1 !== (gs = parts.indexOf('**', gs + 1))) {
                    let gss = gs;
                    while (parts[gss + 1] === '**') {
                        // <pre>/**/**/<rest> -> <pre>/**/<rest>
                        gss++;
                    }
                    // eg, if gs is 2 and gss is 4, that means we have 3 **
                    // parts, and can remove 2 of them.
                    if (gss > gs) {
                        parts.splice(gs + 1, gss - gs);
                    }
                    let next = parts[gs + 1];
                    const p = parts[gs + 2];
                    const p2 = parts[gs + 3];
                    if (next !== '..')
                        continue;
                    if (!p ||
                        p === '.' ||
                        p === '..' ||
                        !p2 ||
                        p2 === '.' ||
                        p2 === '..') {
                        continue;
                    }
                    didSomething = true;
                    // edit parts in place, and push the new one
                    parts.splice(gs, 1);
                    const other = parts.slice(0);
                    other[gs] = '**';
                    globParts.push(other);
                    gs--;
                }
                // <pre>/<e>/<rest> -> <pre>/<rest>
                if (!this.preserveMultipleSlashes) {
                    for (let i = 1; i < parts.length - 1; i++) {
                        const p = parts[i];
                        // don't squeeze out UNC patterns
                        if (i === 1 && p === '' && parts[0] === '')
                            continue;
                        if (p === '.' || p === '') {
                            didSomething = true;
                            parts.splice(i, 1);
                            i--;
                        }
                    }
                    if (parts[0] === '.' &&
                        parts.length === 2 &&
                        (parts[1] === '.' || parts[1] === '')) {
                        didSomething = true;
                        parts.pop();
                    }
                }
                // <pre>/<p>/../<rest> -> <pre>/<rest>
                let dd = 0;
                while (-1 !== (dd = parts.indexOf('..', dd + 1))) {
                    const p = parts[dd - 1];
                    if (p && p !== '.' && p !== '..' && p !== '**') {
                        didSomething = true;
                        const needDot = dd === 1 && parts[dd + 1] === '**';
                        const splin = needDot ? ['.'] : [];
                        parts.splice(dd - 1, 2, ...splin);
                        if (parts.length === 0)
                            parts.push('');
                        dd -= 2;
                    }
                }
            }
        } while (didSomething);
        return globParts;
    }
    // second phase: multi-pattern dedupes
    // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
    // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
    // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
    //
    // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
    // ^-- not valid because ** doens't follow symlinks
    secondPhasePreProcess(globParts) {
        for (let i = 0; i < globParts.length - 1; i++) {
            for (let j = i + 1; j < globParts.length; j++) {
                const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
                if (!matched)
                    continue;
                globParts[i] = matched;
                globParts[j] = [];
            }
        }
        return globParts.filter(gs => gs.length);
    }
    partsMatch(a, b, emptyGSMatch = false) {
        let ai = 0;
        let bi = 0;
        let result = [];
        let which = '';
        while (ai < a.length && bi < b.length) {
            if (a[ai] === b[bi]) {
                result.push(which === 'b' ? b[bi] : a[ai]);
                ai++;
                bi++;
            }
            else if (emptyGSMatch && a[ai] === '**' && b[bi] === a[ai + 1]) {
                result.push(a[ai]);
                ai++;
            }
            else if (emptyGSMatch && b[bi] === '**' && a[ai] === b[bi + 1]) {
                result.push(b[bi]);
                bi++;
            }
            else if (a[ai] === '*' &&
                b[bi] &&
                (this.options.dot || !b[bi].startsWith('.')) &&
                b[bi] !== '**') {
                if (which === 'b')
                    return false;
                which = 'a';
                result.push(a[ai]);
                ai++;
                bi++;
            }
            else if (b[bi] === '*' &&
                a[ai] &&
                (this.options.dot || !a[ai].startsWith('.')) &&
                a[ai] !== '**') {
                if (which === 'a')
                    return false;
                which = 'b';
                result.push(b[bi]);
                ai++;
                bi++;
            }
            else {
                return false;
            }
        }
        // if we fall out of the loop, it means they two are identical
        // as long as their lengths match
        return a.length === b.length && result;
    }
    parseNegate() {
        if (this.nonegate)
            return;
        const pattern = this.pattern;
        let negate = false;
        let negateOffset = 0;
        for (let i = 0; i < pattern.length && pattern.charAt(i) === '!'; i++) {
            negate = !negate;
            negateOffset++;
        }
        if (negateOffset)
            this.pattern = pattern.slice(negateOffset);
        this.negate = negate;
    }
    // set partial to true to test if, for example,
    // "/a/b" matches the start of "/*/b/*/d"
    // Partial means, if you run out of file before you run
    // out of pattern, then that's fine, as long as all
    // the parts match.
    matchOne(file, pattern, partial = false) {
        const options = this.options;
        // a UNC pattern like //?/c:/* can match a path like c:/x
        // and vice versa
        if (this.isWindows) {
            const fileUNC = file[0] === '' &&
                file[1] === '' &&
                file[2] === '?' &&
                typeof file[3] === 'string' &&
                /^[a-z]:$/i.test(file[3]);
            const patternUNC = pattern[0] === '' &&
                pattern[1] === '' &&
                pattern[2] === '?' &&
                typeof pattern[3] === 'string' &&
                /^[a-z]:$/i.test(pattern[3]);
            if (fileUNC && patternUNC) {
                const fd = file[3];
                const pd = pattern[3];
                if (fd.toLowerCase() === pd.toLowerCase()) {
                    file[3] = pd;
                }
            }
            else if (patternUNC && typeof file[0] === 'string') {
                const pd = pattern[3];
                const fd = file[0];
                if (pd.toLowerCase() === fd.toLowerCase()) {
                    pattern[3] = fd;
                    pattern = pattern.slice(3);
                }
            }
            else if (fileUNC && typeof pattern[0] === 'string') {
                const fd = file[3];
                if (fd.toLowerCase() === pattern[0].toLowerCase()) {
                    pattern[0] = fd;
                    file = file.slice(3);
                }
            }
        }
        // resolve and reduce . and .. portions in the file as well.
        // dont' need to do the second phase, because it's only one string[]
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            file = this.levelTwoFileOptimize(file);
        }
        this.debug('matchOne', this, { file, pattern });
        this.debug('matchOne', file.length, pattern.length);
        for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
            this.debug('matchOne loop');
            var p = pattern[pi];
            var f = file[fi];
            this.debug(pattern, p, f);
            // should be impossible.
            // some invalid regexp stuff in the set.
            /* c8 ignore start */
            if (p === false) {
                return false;
            }
            /* c8 ignore stop */
            if (p === exports.GLOBSTAR) {
                this.debug('GLOBSTAR', [pattern, p, f]);
                // "**"
                // a/**/b/**/c would match the following:
                // a/b/x/y/z/c
                // a/x/y/z/b/c
                // a/b/x/b/x/c
                // a/b/c
                // To do this, take the rest of the pattern after
                // the **, and see if it would match the file remainder.
                // If so, return success.
                // If not, the ** "swallows" a segment, and try again.
                // This is recursively awful.
                //
                // a/**/b/**/c matching a/b/x/y/z/c
                // - a matches a
                // - doublestar
                //   - matchOne(b/x/y/z/c, b/**/c)
                //     - b matches b
                //     - doublestar
                //       - matchOne(x/y/z/c, c) -> no
                //       - matchOne(y/z/c, c) -> no
                //       - matchOne(z/c, c) -> no
                //       - matchOne(c, c) yes, hit
                var fr = fi;
                var pr = pi + 1;
                if (pr === pl) {
                    this.debug('** at the end');
                    // a ** at the end will just swallow the rest.
                    // We have found a match.
                    // however, it will not swallow /.x, unless
                    // options.dot is set.
                    // . and .. are *never* matched by **, for explosively
                    // exponential reasons.
                    for (; fi < fl; fi++) {
                        if (file[fi] === '.' ||
                            file[fi] === '..' ||
                            (!options.dot && file[fi].charAt(0) === '.'))
                            return false;
                    }
                    return true;
                }
                // ok, let's see if we can swallow whatever we can.
                while (fr < fl) {
                    var swallowee = file[fr];
                    this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
                    // XXX remove this slice.  Just pass the start index.
                    if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                        this.debug('globstar found match!', fr, fl, swallowee);
                        // found a match.
                        return true;
                    }
                    else {
                        // can't swallow "." or ".." ever.
                        // can only swallow ".foo" when explicitly asked.
                        if (swallowee === '.' ||
                            swallowee === '..' ||
                            (!options.dot && swallowee.charAt(0) === '.')) {
                            this.debug('dot detected!', file, fr, pattern, pr);
                            break;
                        }
                        // ** swallows a segment, and continue.
                        this.debug('globstar swallow a segment, and continue');
                        fr++;
                    }
                }
                // no match was found.
                // However, in partial mode, we can't say this is necessarily over.
                /* c8 ignore start */
                if (partial) {
                    // ran out of file
                    this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
                    if (fr === fl) {
                        return true;
                    }
                }
                /* c8 ignore stop */
                return false;
            }
            // something other than **
            // non-magic patterns just have to match exactly
            // patterns with magic have been turned into regexps.
            let hit;
            if (typeof p === 'string') {
                hit = f === p;
                this.debug('string match', p, f, hit);
            }
            else {
                hit = p.test(f);
                this.debug('pattern match', p, f, hit);
            }
            if (!hit)
                return false;
        }
        // Note: ending in / means that we'll get a final ""
        // at the end of the pattern.  This can only match a
        // corresponding "" at the end of the file.
        // If the file ends in /, then it can only match a
        // a pattern that ends in /, unless the pattern just
        // doesn't have any more for it. But, a/b/ should *not*
        // match "a/b/*", even though "" matches against the
        // [^/]*? pattern, except in partial mode, where it might
        // simply not be reached yet.
        // However, a/b/ should still satisfy a/*
        // now either we fell off the end of the pattern, or we're done.
        if (fi === fl && pi === pl) {
            // ran out of pattern and filename at the same time.
            // an exact hit!
            return true;
        }
        else if (fi === fl) {
            // ran out of file, but still had pattern left.
            // this is ok if we're doing the match as part of
            // a glob fs traversal.
            return partial;
        }
        else if (pi === pl) {
            // ran out of pattern, still have file left.
            // this is only acceptable if we're on the very last
            // empty segment of a file with a trailing slash.
            // a/* should match a/b/
            return fi === fl - 1 && file[fi] === '';
            /* c8 ignore start */
        }
        else {
            // should be unreachable.
            throw new Error('wtf?');
        }
        /* c8 ignore stop */
    }
    braceExpand() {
        return (0, exports.braceExpand)(this.pattern, this.options);
    }
    parse(pattern) {
        assertValidPattern(pattern);
        const options = this.options;
        // shortcuts
        if (pattern === '**')
            return exports.GLOBSTAR;
        if (pattern === '')
            return '';
        // far and away, the most common glob pattern parts are
        // *, *.*, and *.<ext>  Add a fast check method for those.
        let m;
        let fastTest = null;
        if ((m = pattern.match(starRE))) {
            fastTest = options.dot ? starTestDot : starTest;
        }
        else if ((m = pattern.match(starDotExtRE))) {
            fastTest = (options.nocase
                ? options.dot
                    ? starDotExtTestNocaseDot
                    : starDotExtTestNocase
                : options.dot
                    ? starDotExtTestDot
                    : starDotExtTest)(m[1]);
        }
        else if ((m = pattern.match(qmarksRE))) {
            fastTest = (options.nocase
                ? options.dot
                    ? qmarksTestNocaseDot
                    : qmarksTestNocase
                : options.dot
                    ? qmarksTestDot
                    : qmarksTest)(m);
        }
        else if ((m = pattern.match(starDotStarRE))) {
            fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
        }
        else if ((m = pattern.match(dotStarRE))) {
            fastTest = dotStarTest;
        }
        let re = '';
        let hasMagic = false;
        let escaping = false;
        // ? => one single character
        const patternListStack = [];
        const negativeLists = [];
        let stateChar = false;
        let uflag = false;
        let pl;
        // . and .. never match anything that doesn't start with .,
        // even when options.dot is set.  However, if the pattern
        // starts with ., then traversal patterns can match.
        let dotTravAllowed = pattern.charAt(0) === '.';
        let dotFileAllowed = options.dot || dotTravAllowed;
        const patternStart = () => dotTravAllowed
            ? ''
            : dotFileAllowed
                ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
                : '(?!\\.)';
        const subPatternStart = (p) => p.charAt(0) === '.'
            ? ''
            : options.dot
                ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
                : '(?!\\.)';
        const clearStateChar = () => {
            if (stateChar) {
                // we had some state-tracking character
                // that wasn't consumed by this pass.
                switch (stateChar) {
                    case '*':
                        re += star;
                        hasMagic = true;
                        break;
                    case '?':
                        re += qmark;
                        hasMagic = true;
                        break;
                    default:
                        re += '\\' + stateChar;
                        break;
                }
                this.debug('clearStateChar %j %j', stateChar, re);
                stateChar = false;
            }
        };
        for (let i = 0, c; i < pattern.length && (c = pattern.charAt(i)); i++) {
            this.debug('%s\t%s %s %j', pattern, i, re, c);
            // skip over any that are escaped.
            if (escaping) {
                // completely not allowed, even escaped.
                // should be impossible.
                /* c8 ignore start */
                if (c === '/') {
                    return false;
                }
                /* c8 ignore stop */
                if (reSpecials[c]) {
                    re += '\\';
                }
                re += c;
                escaping = false;
                continue;
            }
            switch (c) {
                // Should already be path-split by now.
                /* c8 ignore start */
                case '/': {
                    return false;
                }
                /* c8 ignore stop */
                case '\\':
                    clearStateChar();
                    escaping = true;
                    continue;
                // the various stateChar values
                // for the "extglob" stuff.
                case '?':
                case '*':
                case '+':
                case '@':
                case '!':
                    this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);
                    // if we already have a stateChar, then it means
                    // that there was something like ** or +? in there.
                    // Handle the stateChar, then proceed with this one.
                    this.debug('call clearStateChar %j', stateChar);
                    clearStateChar();
                    stateChar = c;
                    // if extglob is disabled, then +(asdf|foo) isn't a thing.
                    // just clear the statechar *now*, rather than even diving into
                    // the patternList stuff.
                    if (options.noext)
                        clearStateChar();
                    continue;
                case '(': {
                    if (!stateChar) {
                        re += '\\(';
                        continue;
                    }
                    const plEntry = {
                        type: stateChar,
                        start: i - 1,
                        reStart: re.length,
                        open: plTypes[stateChar].open,
                        close: plTypes[stateChar].close,
                    };
                    this.debug(this.pattern, '\t', plEntry);
                    patternListStack.push(plEntry);
                    // negation is (?:(?!(?:js)(?:<rest>))[^/]*)
                    re += plEntry.open;
                    // next entry starts with a dot maybe?
                    if (plEntry.start === 0 && plEntry.type !== '!') {
                        dotTravAllowed = true;
                        re += subPatternStart(pattern.slice(i + 1));
                    }
                    this.debug('plType %j %j', stateChar, re);
                    stateChar = false;
                    continue;
                }
                case ')': {
                    const plEntry = patternListStack[patternListStack.length - 1];
                    if (!plEntry) {
                        re += '\\)';
                        continue;
                    }
                    patternListStack.pop();
                    // closing an extglob
                    clearStateChar();
                    hasMagic = true;
                    pl = plEntry;
                    // negation is (?:(?!js)[^/]*)
                    // The others are (?:<pattern>)<type>
                    re += pl.close;
                    if (pl.type === '!') {
                        negativeLists.push(Object.assign(pl, { reEnd: re.length }));
                    }
                    continue;
                }
                case '|': {
                    const plEntry = patternListStack[patternListStack.length - 1];
                    if (!plEntry) {
                        re += '\\|';
                        continue;
                    }
                    clearStateChar();
                    re += '|';
                    // next subpattern can start with a dot?
                    if (plEntry.start === 0 && plEntry.type !== '!') {
                        dotTravAllowed = true;
                        re += subPatternStart(pattern.slice(i + 1));
                    }
                    continue;
                }
                // these are mostly the same in regexp and glob
                case '[':
                    // swallow any state-tracking char before the [
                    clearStateChar();
                    const [src, needUflag, consumed, magic] = (0, brace_expressions_js_1.parseClass)(pattern, i);
                    if (consumed) {
                        re += src;
                        uflag = uflag || needUflag;
                        i += consumed - 1;
                        hasMagic = hasMagic || magic;
                    }
                    else {
                        re += '\\[';
                    }
                    continue;
                case ']':
                    re += '\\' + c;
                    continue;
                default:
                    // swallow any state char that wasn't consumed
                    clearStateChar();
                    re += regExpEscape(c);
                    break;
            } // switch
        } // for
        // handle the case where we had a +( thing at the *end*
        // of the pattern.
        // each pattern list stack adds 3 chars, and we need to go through
        // and escape any | chars that were passed through as-is for the regexp.
        // Go through and escape them, taking care not to double-escape any
        // | chars that were already escaped.
        for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
            let tail;
            tail = re.slice(pl.reStart + pl.open.length);
            this.debug(this.pattern, 'setting tail', re, pl);
            // maybe some even number of \, then maybe 1 \, followed by a |
            tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
                if (!$2) {
                    // the | isn't already escaped, so escape it.
                    $2 = '\\';
                    // should already be done
                    /* c8 ignore start */
                }
                /* c8 ignore stop */
                // need to escape all those slashes *again*, without escaping the
                // one that we need for escaping the | character.  As it works out,
                // escaping an even number of slashes can be done by simply repeating
                // it exactly after itself.  That's why this trick works.
                //
                // I am sorry that you have to see this.
                return $1 + $1 + $2 + '|';
            });
            this.debug('tail=%j\n   %s', tail, tail, pl, re);
            const t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;
            hasMagic = true;
            re = re.slice(0, pl.reStart) + t + '\\(' + tail;
        }
        // handle trailing things that only matter at the very end.
        clearStateChar();
        if (escaping) {
            // trailing \\
            re += '\\\\';
        }
        // only need to apply the nodot start if the re starts with
        // something that could conceivably capture a dot
        const addPatternStart = addPatternStartSet[re.charAt(0)];
        // Hack to work around lack of negative lookbehind in JS
        // A pattern like: *.!(x).!(y|z) needs to ensure that a name
        // like 'a.xyz.yz' doesn't match.  So, the first negative
        // lookahead, has to look ALL the way ahead, to the end of
        // the pattern.
        for (let n = negativeLists.length - 1; n > -1; n--) {
            const nl = negativeLists[n];
            const nlBefore = re.slice(0, nl.reStart);
            const nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
            let nlAfter = re.slice(nl.reEnd);
            const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter;
            // Handle nested stuff like *(*.js|!(*.json)), where open parens
            // mean that we should *not* include the ) in the bit that is considered
            // "after" the negated section.
            const closeParensBefore = nlBefore.split(')').length;
            const openParensBefore = nlBefore.split('(').length - closeParensBefore;
            let cleanAfter = nlAfter;
            for (let i = 0; i < openParensBefore; i++) {
                cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
            }
            nlAfter = cleanAfter;
            const dollar = nlAfter === '' ? '(?:$|\\/)' : '';
            re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        }
        // if the re is not "" at this point, then we need to make sure
        // it doesn't match against an empty path part.
        // Otherwise a/* will match a/, which it should not.
        if (re !== '' && hasMagic) {
            re = '(?=.)' + re;
        }
        if (addPatternStart) {
            re = patternStart() + re;
        }
        // if it's nocase, and the lcase/uppercase don't match, it's magic
        if (options.nocase && !hasMagic && !options.nocaseMagicOnly) {
            hasMagic = pattern.toUpperCase() !== pattern.toLowerCase();
        }
        // skip the regexp for non-magical patterns
        // unescape anything in it, though, so that it'll be
        // an exact match against a file etc.
        if (!hasMagic) {
            return globUnescape(re);
        }
        const flags = (options.nocase ? 'i' : '') + (uflag ? 'u' : '');
        try {
            const ext = fastTest
                ? {
                    _glob: pattern,
                    _src: re,
                    test: fastTest,
                }
                : {
                    _glob: pattern,
                    _src: re,
                };
            return Object.assign(new RegExp('^' + re + '$', flags), ext);
            /* c8 ignore start */
        }
        catch (er) {
            // should be impossible
            // If it was an invalid regular expression, then it can't match
            // anything.  This trick looks for a character after the end of
            // the string, which is of course impossible, except in multi-line
            // mode, but it's not a /m regex.
            this.debug('invalid regexp', er);
            return new RegExp('$.');
        }
        /* c8 ignore stop */
    }
    makeRe() {
        if (this.regexp || this.regexp === false)
            return this.regexp;
        // at this point, this.set is a 2d array of partial
        // pattern strings, or "**".
        //
        // It's better to use .match().  This function shouldn't
        // be used, really, but it's pretty convenient sometimes,
        // when you just want to work with a regex.
        const set = this.set;
        if (!set.length) {
            this.regexp = false;
            return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar
            ? star
            : options.dot
                ? twoStarDot
                : twoStarNoDot;
        const flags = options.nocase ? 'i' : '';
        // regexpify non-globstar patterns
        // if ** is only item, then we just do one twoStar
        // if ** is first, and there are more, prepend (\/|twoStar\/)? to next
        // if ** is last, append (\/twoStar|) to previous
        // if ** is in the middle, append (\/|\/twoStar\/) to previous
        // then filter out GLOBSTAR symbols
        let re = set
            .map(pattern => {
            const pp = pattern.map(p => typeof p === 'string'
                ? regExpEscape(p)
                : p === exports.GLOBSTAR
                    ? exports.GLOBSTAR
                    : p._src);
            pp.forEach((p, i) => {
                const next = pp[i + 1];
                const prev = pp[i - 1];
                if (p !== exports.GLOBSTAR || prev === exports.GLOBSTAR) {
                    return;
                }
                if (prev === undefined) {
                    if (next !== undefined && next !== exports.GLOBSTAR) {
                        pp[i + 1] = '(?:\\/|' + twoStar + '\\/)?' + next;
                    }
                    else {
                        pp[i] = twoStar;
                    }
                }
                else if (next === undefined) {
                    pp[i - 1] = prev + '(?:\\/|' + twoStar + ')?';
                }
                else if (next !== exports.GLOBSTAR) {
                    pp[i - 1] = prev + '(?:\\/|\\/' + twoStar + '\\/)' + next;
                    pp[i + 1] = exports.GLOBSTAR;
                }
            });
            return pp.filter(p => p !== exports.GLOBSTAR).join('/');
        })
            .join('|');
        // must match entire pattern
        // ending in a * or ** will make it less strict.
        re = '^(?:' + re + ')$';
        // can match anything, as long as it's not this.
        if (this.negate)
            re = '^(?!' + re + ').*$';
        try {
            this.regexp = new RegExp(re, flags);
            /* c8 ignore start */
        }
        catch (ex) {
            // should be impossible
            this.regexp = false;
        }
        /* c8 ignore stop */
        return this.regexp;
    }
    slashSplit(p) {
        // if p starts with // on windows, we preserve that
        // so that UNC paths aren't broken.  Otherwise, any number of
        // / characters are coalesced into one, unless
        // preserveMultipleSlashes is set to true.
        if (this.preserveMultipleSlashes) {
            return p.split('/');
        }
        else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
            // add an extra '' for the one we lose
            return ['', ...p.split(/\/+/)];
        }
        else {
            return p.split(/\/+/);
        }
    }
    match(f, partial = this.partial) {
        this.debug('match', f, this.pattern);
        // short-circuit in the case of busted things.
        // comments, etc.
        if (this.comment) {
            return false;
        }
        if (this.empty) {
            return f === '';
        }
        if (f === '/' && partial) {
            return true;
        }
        const options = this.options;
        // windows: need to use /, not \
        if (this.isWindows) {
            f = f.split('\\').join('/');
        }
        // treat the test path as a set of pathparts.
        const ff = this.slashSplit(f);
        this.debug(this.pattern, 'split', ff);
        // just ONE of the pattern sets in this.set needs to match
        // in order for it to be valid.  If negating, then just one
        // match means that we have failed.
        // Either way, return on the first hit.
        const set = this.set;
        this.debug(this.pattern, 'set', set);
        // Find the basename of the path by looking for the last non-empty segment
        let filename = ff[ff.length - 1];
        if (!filename) {
            for (let i = ff.length - 2; !filename && i >= 0; i--) {
                filename = ff[i];
            }
        }
        for (let i = 0; i < set.length; i++) {
            const pattern = set[i];
            let file = ff;
            if (options.matchBase && pattern.length === 1) {
                file = [filename];
            }
            const hit = this.matchOne(file, pattern, partial);
            if (hit) {
                if (options.flipNegate) {
                    return true;
                }
                return !this.negate;
            }
        }
        // didn't get any hits.  this is success if it's a negative
        // pattern, failure otherwise.
        if (options.flipNegate) {
            return false;
        }
        return this.negate;
    }
    static defaults(def) {
        return exports.minimatch.defaults(def).Minimatch;
    }
}
exports.Minimatch = Minimatch;
/* c8 ignore start */
var escape_js_2 = __nccwpck_require__(8930);
Object.defineProperty(exports, "escape", ({ enumerable: true, get: function () { return escape_js_2.escape; } }));
var unescape_js_2 = __nccwpck_require__(9105);
Object.defineProperty(exports, "unescape", ({ enumerable: true, get: function () { return unescape_js_2.unescape; } }));
/* c8 ignore stop */
exports.minimatch.Minimatch = Minimatch;
exports.minimatch.escape = escape_js_1.escape;
exports.minimatch.unescape = unescape_js_1.unescape;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9105:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unescape = void 0;
/**
 * Un-escape a string that has been escaped with {@link escape}.
 *
 * If the {@link windowsPathsNoEscape} option is used, then square-brace
 * escapes are removed, but not backslash escapes.  For example, it will turn
 * the string `'[*]'` into `*`, but it will not turn `'\\*'` into `'*'`,
 * becuase `\` is a path separator in `windowsPathsNoEscape` mode.
 *
 * When `windowsPathsNoEscape` is not set, then both brace escapes and
 * backslash escapes are removed.
 *
 * Slashes (and backslashes in `windowsPathsNoEscape` mode) cannot be escaped
 * or unescaped.
 */
const unescape = (s, { windowsPathsNoEscape = false, } = {}) => {
    return windowsPathsNoEscape
        ? s.replace(/\[([^\/\\])\]/g, '$1')
        : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, '$1$2').replace(/\\([^\/])/g, '$1');
};
exports.unescape = unescape;
//# sourceMappingURL=unescape.js.map

/***/ }),

/***/ 1110:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


class CsvError extends Error {
  constructor(code, message, options, ...contexts) {
    if (Array.isArray(message)) message = message.join(" ").trim();
    super(message);
    if (Error.captureStackTrace !== undefined) {
      Error.captureStackTrace(this, CsvError);
    }
    this.code = code;
    for (const context of contexts) {
      for (const key in context) {
        const value = context[key];
        this[key] = Buffer.isBuffer(value)
          ? value.toString(options.encoding)
          : value == null
            ? value
            : JSON.parse(JSON.stringify(value));
      }
    }
  }
}

const is_object = function (obj) {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};

const normalize_columns_array = function (columns) {
  const normalizedColumns = [];
  for (let i = 0, l = columns.length; i < l; i++) {
    const column = columns[i];
    if (column === undefined || column === null || column === false) {
      normalizedColumns[i] = { disabled: true };
    } else if (typeof column === "string") {
      normalizedColumns[i] = { name: column };
    } else if (is_object(column)) {
      if (typeof column.name !== "string") {
        throw new CsvError("CSV_OPTION_COLUMNS_MISSING_NAME", [
          "Option columns missing name:",
          `property "name" is required at position ${i}`,
          "when column is an object literal",
        ]);
      }
      normalizedColumns[i] = column;
    } else {
      throw new CsvError("CSV_INVALID_COLUMN_DEFINITION", [
        "Invalid column definition:",
        "expect a string or a literal object,",
        `got ${JSON.stringify(column)} at position ${i}`,
      ]);
    }
  }
  return normalizedColumns;
};

class ResizeableBuffer {
  constructor(size = 100) {
    this.size = size;
    this.length = 0;
    this.buf = Buffer.allocUnsafe(size);
  }
  prepend(val) {
    if (Buffer.isBuffer(val)) {
      const length = this.length + val.length;
      if (length >= this.size) {
        this.resize();
        if (length >= this.size) {
          throw Error("INVALID_BUFFER_STATE");
        }
      }
      const buf = this.buf;
      this.buf = Buffer.allocUnsafe(this.size);
      val.copy(this.buf, 0);
      buf.copy(this.buf, val.length);
      this.length += val.length;
    } else {
      const length = this.length++;
      if (length === this.size) {
        this.resize();
      }
      const buf = this.clone();
      this.buf[0] = val;
      buf.copy(this.buf, 1, 0, length);
    }
  }
  append(val) {
    const length = this.length++;
    if (length === this.size) {
      this.resize();
    }
    this.buf[length] = val;
  }
  clone() {
    return Buffer.from(this.buf.slice(0, this.length));
  }
  resize() {
    const length = this.length;
    this.size = this.size * 2;
    const buf = Buffer.allocUnsafe(this.size);
    this.buf.copy(buf, 0, 0, length);
    this.buf = buf;
  }
  toString(encoding) {
    if (encoding) {
      return this.buf.slice(0, this.length).toString(encoding);
    } else {
      return Uint8Array.prototype.slice.call(this.buf.slice(0, this.length));
    }
  }
  toJSON() {
    return this.toString("utf8");
  }
  reset() {
    this.length = 0;
  }
}

// white space characters
// https://en.wikipedia.org/wiki/Whitespace_character
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes#Types
// \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff
const np = 12;
const cr$1 = 13; // `\r`, carriage return, 0x0D in hexadécimal, 13 in decimal
const nl$1 = 10; // `\n`, newline, 0x0A in hexadecimal, 10 in decimal
const space = 32;
const tab = 9;

const init_state = function (options) {
  return {
    bomSkipped: false,
    bufBytesStart: 0,
    castField: options.cast_function,
    commenting: false,
    // Current error encountered by a record
    error: undefined,
    enabled: options.from_line === 1,
    escaping: false,
    escapeIsQuote:
      Buffer.isBuffer(options.escape) &&
      Buffer.isBuffer(options.quote) &&
      Buffer.compare(options.escape, options.quote) === 0,
    // columns can be `false`, `true`, `Array`
    expectedRecordLength: Array.isArray(options.columns)
      ? options.columns.length
      : undefined,
    field: new ResizeableBuffer(20),
    firstLineToHeaders: options.cast_first_line_to_header,
    needMoreDataSize: Math.max(
      // Skip if the remaining buffer smaller than comment
      options.comment !== null ? options.comment.length : 0,
      // Skip if the remaining buffer can be delimiter
      ...options.delimiter.map((delimiter) => delimiter.length),
      // Skip if the remaining buffer can be escape sequence
      options.quote !== null ? options.quote.length : 0,
    ),
    previousBuf: undefined,
    quoting: false,
    stop: false,
    rawBuffer: new ResizeableBuffer(100),
    record: [],
    recordHasError: false,
    record_length: 0,
    recordDelimiterMaxLength:
      options.record_delimiter.length === 0
        ? 0
        : Math.max(...options.record_delimiter.map((v) => v.length)),
    trimChars: [
      Buffer.from(" ", options.encoding)[0],
      Buffer.from("\t", options.encoding)[0],
    ],
    wasQuoting: false,
    wasRowDelimiter: false,
    timchars: [
      Buffer.from(Buffer.from([cr$1], "utf8").toString(), options.encoding),
      Buffer.from(Buffer.from([nl$1], "utf8").toString(), options.encoding),
      Buffer.from(Buffer.from([np], "utf8").toString(), options.encoding),
      Buffer.from(Buffer.from([space], "utf8").toString(), options.encoding),
      Buffer.from(Buffer.from([tab], "utf8").toString(), options.encoding),
    ],
  };
};

const underscore = function (str) {
  return str.replace(/([A-Z])/g, function (_, match) {
    return "_" + match.toLowerCase();
  });
};

const normalize_options = function (opts) {
  const options = {};
  // Merge with user options
  for (const opt in opts) {
    options[underscore(opt)] = opts[opt];
  }
  // Normalize option `encoding`
  // Note: defined first because other options depends on it
  // to convert chars/strings into buffers.
  if (options.encoding === undefined || options.encoding === true) {
    options.encoding = "utf8";
  } else if (options.encoding === null || options.encoding === false) {
    options.encoding = null;
  } else if (
    typeof options.encoding !== "string" &&
    options.encoding !== null
  ) {
    throw new CsvError(
      "CSV_INVALID_OPTION_ENCODING",
      [
        "Invalid option encoding:",
        "encoding must be a string or null to return a buffer,",
        `got ${JSON.stringify(options.encoding)}`,
      ],
      options,
    );
  }
  // Normalize option `bom`
  if (
    options.bom === undefined ||
    options.bom === null ||
    options.bom === false
  ) {
    options.bom = false;
  } else if (options.bom !== true) {
    throw new CsvError(
      "CSV_INVALID_OPTION_BOM",
      [
        "Invalid option bom:",
        "bom must be true,",
        `got ${JSON.stringify(options.bom)}`,
      ],
      options,
    );
  }
  // Normalize option `cast`
  options.cast_function = null;
  if (
    options.cast === undefined ||
    options.cast === null ||
    options.cast === false ||
    options.cast === ""
  ) {
    options.cast = undefined;
  } else if (typeof options.cast === "function") {
    options.cast_function = options.cast;
    options.cast = true;
  } else if (options.cast !== true) {
    throw new CsvError(
      "CSV_INVALID_OPTION_CAST",
      [
        "Invalid option cast:",
        "cast must be true or a function,",
        `got ${JSON.stringify(options.cast)}`,
      ],
      options,
    );
  }
  // Normalize option `cast_date`
  if (
    options.cast_date === undefined ||
    options.cast_date === null ||
    options.cast_date === false ||
    options.cast_date === ""
  ) {
    options.cast_date = false;
  } else if (options.cast_date === true) {
    options.cast_date = function (value) {
      const date = Date.parse(value);
      return !isNaN(date) ? new Date(date) : value;
    };
  } else if (typeof options.cast_date !== "function") {
    throw new CsvError(
      "CSV_INVALID_OPTION_CAST_DATE",
      [
        "Invalid option cast_date:",
        "cast_date must be true or a function,",
        `got ${JSON.stringify(options.cast_date)}`,
      ],
      options,
    );
  }
  // Normalize option `columns`
  options.cast_first_line_to_header = null;
  if (options.columns === true) {
    // Fields in the first line are converted as-is to columns
    options.cast_first_line_to_header = undefined;
  } else if (typeof options.columns === "function") {
    options.cast_first_line_to_header = options.columns;
    options.columns = true;
  } else if (Array.isArray(options.columns)) {
    options.columns = normalize_columns_array(options.columns);
  } else if (
    options.columns === undefined ||
    options.columns === null ||
    options.columns === false
  ) {
    options.columns = false;
  } else {
    throw new CsvError(
      "CSV_INVALID_OPTION_COLUMNS",
      [
        "Invalid option columns:",
        "expect an array, a function or true,",
        `got ${JSON.stringify(options.columns)}`,
      ],
      options,
    );
  }
  // Normalize option `group_columns_by_name`
  if (
    options.group_columns_by_name === undefined ||
    options.group_columns_by_name === null ||
    options.group_columns_by_name === false
  ) {
    options.group_columns_by_name = false;
  } else if (options.group_columns_by_name !== true) {
    throw new CsvError(
      "CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME",
      [
        "Invalid option group_columns_by_name:",
        "expect an boolean,",
        `got ${JSON.stringify(options.group_columns_by_name)}`,
      ],
      options,
    );
  } else if (options.columns === false) {
    throw new CsvError(
      "CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME",
      [
        "Invalid option group_columns_by_name:",
        "the `columns` mode must be activated.",
      ],
      options,
    );
  }
  // Normalize option `comment`
  if (
    options.comment === undefined ||
    options.comment === null ||
    options.comment === false ||
    options.comment === ""
  ) {
    options.comment = null;
  } else {
    if (typeof options.comment === "string") {
      options.comment = Buffer.from(options.comment, options.encoding);
    }
    if (!Buffer.isBuffer(options.comment)) {
      throw new CsvError(
        "CSV_INVALID_OPTION_COMMENT",
        [
          "Invalid option comment:",
          "comment must be a buffer or a string,",
          `got ${JSON.stringify(options.comment)}`,
        ],
        options,
      );
    }
  }
  // Normalize option `comment_no_infix`
  if (
    options.comment_no_infix === undefined ||
    options.comment_no_infix === null ||
    options.comment_no_infix === false
  ) {
    options.comment_no_infix = false;
  } else if (options.comment_no_infix !== true) {
    throw new CsvError(
      "CSV_INVALID_OPTION_COMMENT",
      [
        "Invalid option comment_no_infix:",
        "value must be a boolean,",
        `got ${JSON.stringify(options.comment_no_infix)}`,
      ],
      options,
    );
  }
  // Normalize option `delimiter`
  const delimiter_json = JSON.stringify(options.delimiter);
  if (!Array.isArray(options.delimiter))
    options.delimiter = [options.delimiter];
  if (options.delimiter.length === 0) {
    throw new CsvError(
      "CSV_INVALID_OPTION_DELIMITER",
      [
        "Invalid option delimiter:",
        "delimiter must be a non empty string or buffer or array of string|buffer,",
        `got ${delimiter_json}`,
      ],
      options,
    );
  }
  options.delimiter = options.delimiter.map(function (delimiter) {
    if (delimiter === undefined || delimiter === null || delimiter === false) {
      return Buffer.from(",", options.encoding);
    }
    if (typeof delimiter === "string") {
      delimiter = Buffer.from(delimiter, options.encoding);
    }
    if (!Buffer.isBuffer(delimiter) || delimiter.length === 0) {
      throw new CsvError(
        "CSV_INVALID_OPTION_DELIMITER",
        [
          "Invalid option delimiter:",
          "delimiter must be a non empty string or buffer or array of string|buffer,",
          `got ${delimiter_json}`,
        ],
        options,
      );
    }
    return delimiter;
  });
  // Normalize option `escape`
  if (options.escape === undefined || options.escape === true) {
    options.escape = Buffer.from('"', options.encoding);
  } else if (typeof options.escape === "string") {
    options.escape = Buffer.from(options.escape, options.encoding);
  } else if (options.escape === null || options.escape === false) {
    options.escape = null;
  }
  if (options.escape !== null) {
    if (!Buffer.isBuffer(options.escape)) {
      throw new Error(
        `Invalid Option: escape must be a buffer, a string or a boolean, got ${JSON.stringify(options.escape)}`,
      );
    }
  }
  // Normalize option `from`
  if (options.from === undefined || options.from === null) {
    options.from = 1;
  } else {
    if (typeof options.from === "string" && /\d+/.test(options.from)) {
      options.from = parseInt(options.from);
    }
    if (Number.isInteger(options.from)) {
      if (options.from < 0) {
        throw new Error(
          `Invalid Option: from must be a positive integer, got ${JSON.stringify(opts.from)}`,
        );
      }
    } else {
      throw new Error(
        `Invalid Option: from must be an integer, got ${JSON.stringify(options.from)}`,
      );
    }
  }
  // Normalize option `from_line`
  if (options.from_line === undefined || options.from_line === null) {
    options.from_line = 1;
  } else {
    if (
      typeof options.from_line === "string" &&
      /\d+/.test(options.from_line)
    ) {
      options.from_line = parseInt(options.from_line);
    }
    if (Number.isInteger(options.from_line)) {
      if (options.from_line <= 0) {
        throw new Error(
          `Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(opts.from_line)}`,
        );
      }
    } else {
      throw new Error(
        `Invalid Option: from_line must be an integer, got ${JSON.stringify(opts.from_line)}`,
      );
    }
  }
  // Normalize options `ignore_last_delimiters`
  if (
    options.ignore_last_delimiters === undefined ||
    options.ignore_last_delimiters === null
  ) {
    options.ignore_last_delimiters = false;
  } else if (typeof options.ignore_last_delimiters === "number") {
    options.ignore_last_delimiters = Math.floor(options.ignore_last_delimiters);
    if (options.ignore_last_delimiters === 0) {
      options.ignore_last_delimiters = false;
    }
  } else if (typeof options.ignore_last_delimiters !== "boolean") {
    throw new CsvError(
      "CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS",
      [
        "Invalid option `ignore_last_delimiters`:",
        "the value must be a boolean value or an integer,",
        `got ${JSON.stringify(options.ignore_last_delimiters)}`,
      ],
      options,
    );
  }
  if (options.ignore_last_delimiters === true && options.columns === false) {
    throw new CsvError(
      "CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS",
      [
        "The option `ignore_last_delimiters`",
        "requires the activation of the `columns` option",
      ],
      options,
    );
  }
  // Normalize option `info`
  if (
    options.info === undefined ||
    options.info === null ||
    options.info === false
  ) {
    options.info = false;
  } else if (options.info !== true) {
    throw new Error(
      `Invalid Option: info must be true, got ${JSON.stringify(options.info)}`,
    );
  }
  // Normalize option `max_record_size`
  if (
    options.max_record_size === undefined ||
    options.max_record_size === null ||
    options.max_record_size === false
  ) {
    options.max_record_size = 0;
  } else if (
    Number.isInteger(options.max_record_size) &&
    options.max_record_size >= 0
  ) ; else if (
    typeof options.max_record_size === "string" &&
    /\d+/.test(options.max_record_size)
  ) {
    options.max_record_size = parseInt(options.max_record_size);
  } else {
    throw new Error(
      `Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(options.max_record_size)}`,
    );
  }
  // Normalize option `objname`
  if (
    options.objname === undefined ||
    options.objname === null ||
    options.objname === false
  ) {
    options.objname = undefined;
  } else if (Buffer.isBuffer(options.objname)) {
    if (options.objname.length === 0) {
      throw new Error(`Invalid Option: objname must be a non empty buffer`);
    }
    if (options.encoding === null) ; else {
      options.objname = options.objname.toString(options.encoding);
    }
  } else if (typeof options.objname === "string") {
    if (options.objname.length === 0) {
      throw new Error(`Invalid Option: objname must be a non empty string`);
    }
    // Great, nothing to do
  } else if (typeof options.objname === "number") ; else {
    throw new Error(
      `Invalid Option: objname must be a string or a buffer, got ${options.objname}`,
    );
  }
  if (options.objname !== undefined) {
    if (typeof options.objname === "number") {
      if (options.columns !== false) {
        throw Error(
          "Invalid Option: objname index cannot be combined with columns or be defined as a field",
        );
      }
    } else {
      // A string or a buffer
      if (options.columns === false) {
        throw Error(
          "Invalid Option: objname field must be combined with columns or be defined as an index",
        );
      }
    }
  }
  // Normalize option `on_record`
  if (options.on_record === undefined || options.on_record === null) {
    options.on_record = undefined;
  } else if (typeof options.on_record !== "function") {
    throw new CsvError(
      "CSV_INVALID_OPTION_ON_RECORD",
      [
        "Invalid option `on_record`:",
        "expect a function,",
        `got ${JSON.stringify(options.on_record)}`,
      ],
      options,
    );
  }
  // Normalize option `on_skip`
  // options.on_skip ??= (err, chunk) => {
  //   this.emit('skip', err, chunk);
  // };
  if (
    options.on_skip !== undefined &&
    options.on_skip !== null &&
    typeof options.on_skip !== "function"
  ) {
    throw new Error(
      `Invalid Option: on_skip must be a function, got ${JSON.stringify(options.on_skip)}`,
    );
  }
  // Normalize option `quote`
  if (
    options.quote === null ||
    options.quote === false ||
    options.quote === ""
  ) {
    options.quote = null;
  } else {
    if (options.quote === undefined || options.quote === true) {
      options.quote = Buffer.from('"', options.encoding);
    } else if (typeof options.quote === "string") {
      options.quote = Buffer.from(options.quote, options.encoding);
    }
    if (!Buffer.isBuffer(options.quote)) {
      throw new Error(
        `Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(options.quote)}`,
      );
    }
  }
  // Normalize option `raw`
  if (
    options.raw === undefined ||
    options.raw === null ||
    options.raw === false
  ) {
    options.raw = false;
  } else if (options.raw !== true) {
    throw new Error(
      `Invalid Option: raw must be true, got ${JSON.stringify(options.raw)}`,
    );
  }
  // Normalize option `record_delimiter`
  if (options.record_delimiter === undefined) {
    options.record_delimiter = [];
  } else if (
    typeof options.record_delimiter === "string" ||
    Buffer.isBuffer(options.record_delimiter)
  ) {
    if (options.record_delimiter.length === 0) {
      throw new CsvError(
        "CSV_INVALID_OPTION_RECORD_DELIMITER",
        [
          "Invalid option `record_delimiter`:",
          "value must be a non empty string or buffer,",
          `got ${JSON.stringify(options.record_delimiter)}`,
        ],
        options,
      );
    }
    options.record_delimiter = [options.record_delimiter];
  } else if (!Array.isArray(options.record_delimiter)) {
    throw new CsvError(
      "CSV_INVALID_OPTION_RECORD_DELIMITER",
      [
        "Invalid option `record_delimiter`:",
        "value must be a string, a buffer or array of string|buffer,",
        `got ${JSON.stringify(options.record_delimiter)}`,
      ],
      options,
    );
  }
  options.record_delimiter = options.record_delimiter.map(function (rd, i) {
    if (typeof rd !== "string" && !Buffer.isBuffer(rd)) {
      throw new CsvError(
        "CSV_INVALID_OPTION_RECORD_DELIMITER",
        [
          "Invalid option `record_delimiter`:",
          "value must be a string, a buffer or array of string|buffer",
          `at index ${i},`,
          `got ${JSON.stringify(rd)}`,
        ],
        options,
      );
    } else if (rd.length === 0) {
      throw new CsvError(
        "CSV_INVALID_OPTION_RECORD_DELIMITER",
        [
          "Invalid option `record_delimiter`:",
          "value must be a non empty string or buffer",
          `at index ${i},`,
          `got ${JSON.stringify(rd)}`,
        ],
        options,
      );
    }
    if (typeof rd === "string") {
      rd = Buffer.from(rd, options.encoding);
    }
    return rd;
  });
  // Normalize option `relax_column_count`
  if (typeof options.relax_column_count === "boolean") ; else if (
    options.relax_column_count === undefined ||
    options.relax_column_count === null
  ) {
    options.relax_column_count = false;
  } else {
    throw new Error(
      `Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(options.relax_column_count)}`,
    );
  }
  if (typeof options.relax_column_count_less === "boolean") ; else if (
    options.relax_column_count_less === undefined ||
    options.relax_column_count_less === null
  ) {
    options.relax_column_count_less = false;
  } else {
    throw new Error(
      `Invalid Option: relax_column_count_less must be a boolean, got ${JSON.stringify(options.relax_column_count_less)}`,
    );
  }
  if (typeof options.relax_column_count_more === "boolean") ; else if (
    options.relax_column_count_more === undefined ||
    options.relax_column_count_more === null
  ) {
    options.relax_column_count_more = false;
  } else {
    throw new Error(
      `Invalid Option: relax_column_count_more must be a boolean, got ${JSON.stringify(options.relax_column_count_more)}`,
    );
  }
  // Normalize option `relax_quotes`
  if (typeof options.relax_quotes === "boolean") ; else if (
    options.relax_quotes === undefined ||
    options.relax_quotes === null
  ) {
    options.relax_quotes = false;
  } else {
    throw new Error(
      `Invalid Option: relax_quotes must be a boolean, got ${JSON.stringify(options.relax_quotes)}`,
    );
  }
  // Normalize option `skip_empty_lines`
  if (typeof options.skip_empty_lines === "boolean") ; else if (
    options.skip_empty_lines === undefined ||
    options.skip_empty_lines === null
  ) {
    options.skip_empty_lines = false;
  } else {
    throw new Error(
      `Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(options.skip_empty_lines)}`,
    );
  }
  // Normalize option `skip_records_with_empty_values`
  if (typeof options.skip_records_with_empty_values === "boolean") ; else if (
    options.skip_records_with_empty_values === undefined ||
    options.skip_records_with_empty_values === null
  ) {
    options.skip_records_with_empty_values = false;
  } else {
    throw new Error(
      `Invalid Option: skip_records_with_empty_values must be a boolean, got ${JSON.stringify(options.skip_records_with_empty_values)}`,
    );
  }
  // Normalize option `skip_records_with_error`
  if (typeof options.skip_records_with_error === "boolean") ; else if (
    options.skip_records_with_error === undefined ||
    options.skip_records_with_error === null
  ) {
    options.skip_records_with_error = false;
  } else {
    throw new Error(
      `Invalid Option: skip_records_with_error must be a boolean, got ${JSON.stringify(options.skip_records_with_error)}`,
    );
  }
  // Normalize option `rtrim`
  if (
    options.rtrim === undefined ||
    options.rtrim === null ||
    options.rtrim === false
  ) {
    options.rtrim = false;
  } else if (options.rtrim !== true) {
    throw new Error(
      `Invalid Option: rtrim must be a boolean, got ${JSON.stringify(options.rtrim)}`,
    );
  }
  // Normalize option `ltrim`
  if (
    options.ltrim === undefined ||
    options.ltrim === null ||
    options.ltrim === false
  ) {
    options.ltrim = false;
  } else if (options.ltrim !== true) {
    throw new Error(
      `Invalid Option: ltrim must be a boolean, got ${JSON.stringify(options.ltrim)}`,
    );
  }
  // Normalize option `trim`
  if (
    options.trim === undefined ||
    options.trim === null ||
    options.trim === false
  ) {
    options.trim = false;
  } else if (options.trim !== true) {
    throw new Error(
      `Invalid Option: trim must be a boolean, got ${JSON.stringify(options.trim)}`,
    );
  }
  // Normalize options `trim`, `ltrim` and `rtrim`
  if (options.trim === true && opts.ltrim !== false) {
    options.ltrim = true;
  } else if (options.ltrim !== true) {
    options.ltrim = false;
  }
  if (options.trim === true && opts.rtrim !== false) {
    options.rtrim = true;
  } else if (options.rtrim !== true) {
    options.rtrim = false;
  }
  // Normalize option `to`
  if (options.to === undefined || options.to === null) {
    options.to = -1;
  } else {
    if (typeof options.to === "string" && /\d+/.test(options.to)) {
      options.to = parseInt(options.to);
    }
    if (Number.isInteger(options.to)) {
      if (options.to <= 0) {
        throw new Error(
          `Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(opts.to)}`,
        );
      }
    } else {
      throw new Error(
        `Invalid Option: to must be an integer, got ${JSON.stringify(opts.to)}`,
      );
    }
  }
  // Normalize option `to_line`
  if (options.to_line === undefined || options.to_line === null) {
    options.to_line = -1;
  } else {
    if (typeof options.to_line === "string" && /\d+/.test(options.to_line)) {
      options.to_line = parseInt(options.to_line);
    }
    if (Number.isInteger(options.to_line)) {
      if (options.to_line <= 0) {
        throw new Error(
          `Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(opts.to_line)}`,
        );
      }
    } else {
      throw new Error(
        `Invalid Option: to_line must be an integer, got ${JSON.stringify(opts.to_line)}`,
      );
    }
  }
  return options;
};

const isRecordEmpty = function (record) {
  return record.every(
    (field) =>
      field == null || (field.toString && field.toString().trim() === ""),
  );
};

const cr = 13; // `\r`, carriage return, 0x0D in hexadécimal, 13 in decimal
const nl = 10; // `\n`, newline, 0x0A in hexadecimal, 10 in decimal

const boms = {
  // Note, the following are equals:
  // Buffer.from("\ufeff")
  // Buffer.from([239, 187, 191])
  // Buffer.from('EFBBBF', 'hex')
  utf8: Buffer.from([239, 187, 191]),
  // Note, the following are equals:
  // Buffer.from "\ufeff", 'utf16le
  // Buffer.from([255, 254])
  utf16le: Buffer.from([255, 254]),
};

const transform = function (original_options = {}) {
  const info = {
    bytes: 0,
    comment_lines: 0,
    empty_lines: 0,
    invalid_field_length: 0,
    lines: 1,
    records: 0,
  };
  const options = normalize_options(original_options);
  return {
    info: info,
    original_options: original_options,
    options: options,
    state: init_state(options),
    __needMoreData: function (i, bufLen, end) {
      if (end) return false;
      const { encoding, escape, quote } = this.options;
      const { quoting, needMoreDataSize, recordDelimiterMaxLength } =
        this.state;
      const numOfCharLeft = bufLen - i - 1;
      const requiredLength = Math.max(
        needMoreDataSize,
        // Skip if the remaining buffer smaller than record delimiter
        // If "record_delimiter" is yet to be discovered:
        // 1. It is equals to `[]` and "recordDelimiterMaxLength" equals `0`
        // 2. We set the length to windows line ending in the current encoding
        // Note, that encoding is known from user or bom discovery at that point
        // recordDelimiterMaxLength,
        recordDelimiterMaxLength === 0
          ? Buffer.from("\r\n", encoding).length
          : recordDelimiterMaxLength,
        // Skip if remaining buffer can be an escaped quote
        quoting ? (escape === null ? 0 : escape.length) + quote.length : 0,
        // Skip if remaining buffer can be record delimiter following the closing quote
        quoting ? quote.length + recordDelimiterMaxLength : 0,
      );
      return numOfCharLeft < requiredLength;
    },
    // Central parser implementation
    parse: function (nextBuf, end, push, close) {
      const {
        bom,
        comment_no_infix,
        encoding,
        from_line,
        ltrim,
        max_record_size,
        raw,
        relax_quotes,
        rtrim,
        skip_empty_lines,
        to,
        to_line,
      } = this.options;
      let { comment, escape, quote, record_delimiter } = this.options;
      const { bomSkipped, previousBuf, rawBuffer, escapeIsQuote } = this.state;
      let buf;
      if (previousBuf === undefined) {
        if (nextBuf === undefined) {
          // Handle empty string
          close();
          return;
        } else {
          buf = nextBuf;
        }
      } else if (previousBuf !== undefined && nextBuf === undefined) {
        buf = previousBuf;
      } else {
        buf = Buffer.concat([previousBuf, nextBuf]);
      }
      // Handle UTF BOM
      if (bomSkipped === false) {
        if (bom === false) {
          this.state.bomSkipped = true;
        } else if (buf.length < 3) {
          // No enough data
          if (end === false) {
            // Wait for more data
            this.state.previousBuf = buf;
            return;
          }
        } else {
          for (const encoding in boms) {
            if (boms[encoding].compare(buf, 0, boms[encoding].length) === 0) {
              // Skip BOM
              const bomLength = boms[encoding].length;
              this.state.bufBytesStart += bomLength;
              buf = buf.slice(bomLength);
              // Renormalize original options with the new encoding
              this.options = normalize_options({
                ...this.original_options,
                encoding: encoding,
              });
              // Options will re-evaluate the Buffer with the new encoding
              ({ comment, escape, quote } = this.options);
              break;
            }
          }
          this.state.bomSkipped = true;
        }
      }
      const bufLen = buf.length;
      let pos;
      for (pos = 0; pos < bufLen; pos++) {
        // Ensure we get enough space to look ahead
        // There should be a way to move this out of the loop
        if (this.__needMoreData(pos, bufLen, end)) {
          break;
        }
        if (this.state.wasRowDelimiter === true) {
          this.info.lines++;
          this.state.wasRowDelimiter = false;
        }
        if (to_line !== -1 && this.info.lines > to_line) {
          this.state.stop = true;
          close();
          return;
        }
        // Auto discovery of record_delimiter, unix, mac and windows supported
        if (this.state.quoting === false && record_delimiter.length === 0) {
          const record_delimiterCount = this.__autoDiscoverRecordDelimiter(
            buf,
            pos,
          );
          if (record_delimiterCount) {
            record_delimiter = this.options.record_delimiter;
          }
        }
        const chr = buf[pos];
        if (raw === true) {
          rawBuffer.append(chr);
        }
        if (
          (chr === cr || chr === nl) &&
          this.state.wasRowDelimiter === false
        ) {
          this.state.wasRowDelimiter = true;
        }
        // Previous char was a valid escape char
        // treat the current char as a regular char
        if (this.state.escaping === true) {
          this.state.escaping = false;
        } else {
          // Escape is only active inside quoted fields
          // We are quoting, the char is an escape chr and there is a chr to escape
          // if(escape !== null && this.state.quoting === true && chr === escape && pos + 1 < bufLen){
          if (
            escape !== null &&
            this.state.quoting === true &&
            this.__isEscape(buf, pos, chr) &&
            pos + escape.length < bufLen
          ) {
            if (escapeIsQuote) {
              if (this.__isQuote(buf, pos + escape.length)) {
                this.state.escaping = true;
                pos += escape.length - 1;
                continue;
              }
            } else {
              this.state.escaping = true;
              pos += escape.length - 1;
              continue;
            }
          }
          // Not currently escaping and chr is a quote
          // TODO: need to compare bytes instead of single char
          if (this.state.commenting === false && this.__isQuote(buf, pos)) {
            if (this.state.quoting === true) {
              const nextChr = buf[pos + quote.length];
              const isNextChrTrimable =
                rtrim && this.__isCharTrimable(buf, pos + quote.length);
              const isNextChrComment =
                comment !== null &&
                this.__compareBytes(comment, buf, pos + quote.length, nextChr);
              const isNextChrDelimiter = this.__isDelimiter(
                buf,
                pos + quote.length,
                nextChr,
              );
              const isNextChrRecordDelimiter =
                record_delimiter.length === 0
                  ? this.__autoDiscoverRecordDelimiter(buf, pos + quote.length)
                  : this.__isRecordDelimiter(nextChr, buf, pos + quote.length);
              // Escape a quote
              // Treat next char as a regular character
              if (
                escape !== null &&
                this.__isEscape(buf, pos, chr) &&
                this.__isQuote(buf, pos + escape.length)
              ) {
                pos += escape.length - 1;
              } else if (
                !nextChr ||
                isNextChrDelimiter ||
                isNextChrRecordDelimiter ||
                isNextChrComment ||
                isNextChrTrimable
              ) {
                this.state.quoting = false;
                this.state.wasQuoting = true;
                pos += quote.length - 1;
                continue;
              } else if (relax_quotes === false) {
                const err = this.__error(
                  new CsvError(
                    "CSV_INVALID_CLOSING_QUOTE",
                    [
                      "Invalid Closing Quote:",
                      `got "${String.fromCharCode(nextChr)}"`,
                      `at line ${this.info.lines}`,
                      "instead of delimiter, record delimiter, trimable character",
                      "(if activated) or comment",
                    ],
                    this.options,
                    this.__infoField(),
                  ),
                );
                if (err !== undefined) return err;
              } else {
                this.state.quoting = false;
                this.state.wasQuoting = true;
                this.state.field.prepend(quote);
                pos += quote.length - 1;
              }
            } else {
              if (this.state.field.length !== 0) {
                // In relax_quotes mode, treat opening quote preceded by chrs as regular
                if (relax_quotes === false) {
                  const info = this.__infoField();
                  const bom = Object.keys(boms)
                    .map((b) =>
                      boms[b].equals(this.state.field.toString()) ? b : false,
                    )
                    .filter(Boolean)[0];
                  const err = this.__error(
                    new CsvError(
                      "INVALID_OPENING_QUOTE",
                      [
                        "Invalid Opening Quote:",
                        `a quote is found on field ${JSON.stringify(info.column)} at line ${info.lines}, value is ${JSON.stringify(this.state.field.toString(encoding))}`,
                        bom ? `(${bom} bom)` : undefined,
                      ],
                      this.options,
                      info,
                      {
                        field: this.state.field,
                      },
                    ),
                  );
                  if (err !== undefined) return err;
                }
              } else {
                this.state.quoting = true;
                pos += quote.length - 1;
                continue;
              }
            }
          }
          if (this.state.quoting === false) {
            const recordDelimiterLength = this.__isRecordDelimiter(
              chr,
              buf,
              pos,
            );
            if (recordDelimiterLength !== 0) {
              // Do not emit comments which take a full line
              const skipCommentLine =
                this.state.commenting &&
                this.state.wasQuoting === false &&
                this.state.record.length === 0 &&
                this.state.field.length === 0;
              if (skipCommentLine) {
                this.info.comment_lines++;
                // Skip full comment line
              } else {
                // Activate records emition if above from_line
                if (
                  this.state.enabled === false &&
                  this.info.lines +
                    (this.state.wasRowDelimiter === true ? 1 : 0) >=
                    from_line
                ) {
                  this.state.enabled = true;
                  this.__resetField();
                  this.__resetRecord();
                  pos += recordDelimiterLength - 1;
                  continue;
                }
                // Skip if line is empty and skip_empty_lines activated
                if (
                  skip_empty_lines === true &&
                  this.state.wasQuoting === false &&
                  this.state.record.length === 0 &&
                  this.state.field.length === 0
                ) {
                  this.info.empty_lines++;
                  pos += recordDelimiterLength - 1;
                  continue;
                }
                this.info.bytes = this.state.bufBytesStart + pos;
                const errField = this.__onField();
                if (errField !== undefined) return errField;
                this.info.bytes =
                  this.state.bufBytesStart + pos + recordDelimiterLength;
                const errRecord = this.__onRecord(push);
                if (errRecord !== undefined) return errRecord;
                if (to !== -1 && this.info.records >= to) {
                  this.state.stop = true;
                  close();
                  return;
                }
              }
              this.state.commenting = false;
              pos += recordDelimiterLength - 1;
              continue;
            }
            if (this.state.commenting) {
              continue;
            }
            if (
              comment !== null &&
              (comment_no_infix === false ||
                (this.state.record.length === 0 &&
                  this.state.field.length === 0))
            ) {
              const commentCount = this.__compareBytes(comment, buf, pos, chr);
              if (commentCount !== 0) {
                this.state.commenting = true;
                continue;
              }
            }
            const delimiterLength = this.__isDelimiter(buf, pos, chr);
            if (delimiterLength !== 0) {
              this.info.bytes = this.state.bufBytesStart + pos;
              const errField = this.__onField();
              if (errField !== undefined) return errField;
              pos += delimiterLength - 1;
              continue;
            }
          }
        }
        if (this.state.commenting === false) {
          if (
            max_record_size !== 0 &&
            this.state.record_length + this.state.field.length > max_record_size
          ) {
            return this.__error(
              new CsvError(
                "CSV_MAX_RECORD_SIZE",
                [
                  "Max Record Size:",
                  "record exceed the maximum number of tolerated bytes",
                  `of ${max_record_size}`,
                  `at line ${this.info.lines}`,
                ],
                this.options,
                this.__infoField(),
              ),
            );
          }
        }
        const lappend =
          ltrim === false ||
          this.state.quoting === true ||
          this.state.field.length !== 0 ||
          !this.__isCharTrimable(buf, pos);
        // rtrim in non quoting is handle in __onField
        const rappend = rtrim === false || this.state.wasQuoting === false;
        if (lappend === true && rappend === true) {
          this.state.field.append(chr);
        } else if (rtrim === true && !this.__isCharTrimable(buf, pos)) {
          return this.__error(
            new CsvError(
              "CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE",
              [
                "Invalid Closing Quote:",
                "found non trimable byte after quote",
                `at line ${this.info.lines}`,
              ],
              this.options,
              this.__infoField(),
            ),
          );
        } else {
          if (lappend === false) {
            pos += this.__isCharTrimable(buf, pos) - 1;
          }
          continue;
        }
      }
      if (end === true) {
        // Ensure we are not ending in a quoting state
        if (this.state.quoting === true) {
          const err = this.__error(
            new CsvError(
              "CSV_QUOTE_NOT_CLOSED",
              [
                "Quote Not Closed:",
                `the parsing is finished with an opening quote at line ${this.info.lines}`,
              ],
              this.options,
              this.__infoField(),
            ),
          );
          if (err !== undefined) return err;
        } else {
          // Skip last line if it has no characters
          if (
            this.state.wasQuoting === true ||
            this.state.record.length !== 0 ||
            this.state.field.length !== 0
          ) {
            this.info.bytes = this.state.bufBytesStart + pos;
            const errField = this.__onField();
            if (errField !== undefined) return errField;
            const errRecord = this.__onRecord(push);
            if (errRecord !== undefined) return errRecord;
          } else if (this.state.wasRowDelimiter === true) {
            this.info.empty_lines++;
          } else if (this.state.commenting === true) {
            this.info.comment_lines++;
          }
        }
      } else {
        this.state.bufBytesStart += pos;
        this.state.previousBuf = buf.slice(pos);
      }
      if (this.state.wasRowDelimiter === true) {
        this.info.lines++;
        this.state.wasRowDelimiter = false;
      }
    },
    __onRecord: function (push) {
      const {
        columns,
        group_columns_by_name,
        encoding,
        info,
        from,
        relax_column_count,
        relax_column_count_less,
        relax_column_count_more,
        raw,
        skip_records_with_empty_values,
      } = this.options;
      const { enabled, record } = this.state;
      if (enabled === false) {
        return this.__resetRecord();
      }
      // Convert the first line into column names
      const recordLength = record.length;
      if (columns === true) {
        if (skip_records_with_empty_values === true && isRecordEmpty(record)) {
          this.__resetRecord();
          return;
        }
        return this.__firstLineToColumns(record);
      }
      if (columns === false && this.info.records === 0) {
        this.state.expectedRecordLength = recordLength;
      }
      if (recordLength !== this.state.expectedRecordLength) {
        const err =
          columns === false
            ? new CsvError(
                "CSV_RECORD_INCONSISTENT_FIELDS_LENGTH",
                [
                  "Invalid Record Length:",
                  `expect ${this.state.expectedRecordLength},`,
                  `got ${recordLength} on line ${this.info.lines}`,
                ],
                this.options,
                this.__infoField(),
                {
                  record: record,
                },
              )
            : new CsvError(
                "CSV_RECORD_INCONSISTENT_COLUMNS",
                [
                  "Invalid Record Length:",
                  `columns length is ${columns.length},`, // rename columns
                  `got ${recordLength} on line ${this.info.lines}`,
                ],
                this.options,
                this.__infoField(),
                {
                  record: record,
                },
              );
        if (
          relax_column_count === true ||
          (relax_column_count_less === true &&
            recordLength < this.state.expectedRecordLength) ||
          (relax_column_count_more === true &&
            recordLength > this.state.expectedRecordLength)
        ) {
          this.info.invalid_field_length++;
          this.state.error = err;
          // Error is undefined with skip_records_with_error
        } else {
          const finalErr = this.__error(err);
          if (finalErr) return finalErr;
        }
      }
      if (skip_records_with_empty_values === true && isRecordEmpty(record)) {
        this.__resetRecord();
        return;
      }
      if (this.state.recordHasError === true) {
        this.__resetRecord();
        this.state.recordHasError = false;
        return;
      }
      this.info.records++;
      if (from === 1 || this.info.records >= from) {
        const { objname } = this.options;
        // With columns, records are object
        if (columns !== false) {
          const obj = {};
          // Transform record array to an object
          for (let i = 0, l = record.length; i < l; i++) {
            if (columns[i] === undefined || columns[i].disabled) continue;
            // Turn duplicate columns into an array
            if (
              group_columns_by_name === true &&
              obj[columns[i].name] !== undefined
            ) {
              if (Array.isArray(obj[columns[i].name])) {
                obj[columns[i].name] = obj[columns[i].name].concat(record[i]);
              } else {
                obj[columns[i].name] = [obj[columns[i].name], record[i]];
              }
            } else {
              obj[columns[i].name] = record[i];
            }
          }
          // Without objname (default)
          if (raw === true || info === true) {
            const extRecord = Object.assign(
              { record: obj },
              raw === true
                ? { raw: this.state.rawBuffer.toString(encoding) }
                : {},
              info === true ? { info: this.__infoRecord() } : {},
            );
            const err = this.__push(
              objname === undefined ? extRecord : [obj[objname], extRecord],
              push,
            );
            if (err) {
              return err;
            }
          } else {
            const err = this.__push(
              objname === undefined ? obj : [obj[objname], obj],
              push,
            );
            if (err) {
              return err;
            }
          }
          // Without columns, records are array
        } else {
          if (raw === true || info === true) {
            const extRecord = Object.assign(
              { record: record },
              raw === true
                ? { raw: this.state.rawBuffer.toString(encoding) }
                : {},
              info === true ? { info: this.__infoRecord() } : {},
            );
            const err = this.__push(
              objname === undefined ? extRecord : [record[objname], extRecord],
              push,
            );
            if (err) {
              return err;
            }
          } else {
            const err = this.__push(
              objname === undefined ? record : [record[objname], record],
              push,
            );
            if (err) {
              return err;
            }
          }
        }
      }
      this.__resetRecord();
    },
    __firstLineToColumns: function (record) {
      const { firstLineToHeaders } = this.state;
      try {
        const headers =
          firstLineToHeaders === undefined
            ? record
            : firstLineToHeaders.call(null, record);
        if (!Array.isArray(headers)) {
          return this.__error(
            new CsvError(
              "CSV_INVALID_COLUMN_MAPPING",
              [
                "Invalid Column Mapping:",
                "expect an array from column function,",
                `got ${JSON.stringify(headers)}`,
              ],
              this.options,
              this.__infoField(),
              {
                headers: headers,
              },
            ),
          );
        }
        const normalizedHeaders = normalize_columns_array(headers);
        this.state.expectedRecordLength = normalizedHeaders.length;
        this.options.columns = normalizedHeaders;
        this.__resetRecord();
        return;
      } catch (err) {
        return err;
      }
    },
    __resetRecord: function () {
      if (this.options.raw === true) {
        this.state.rawBuffer.reset();
      }
      this.state.error = undefined;
      this.state.record = [];
      this.state.record_length = 0;
    },
    __onField: function () {
      const { cast, encoding, rtrim, max_record_size } = this.options;
      const { enabled, wasQuoting } = this.state;
      // Short circuit for the from_line options
      if (enabled === false) {
        return this.__resetField();
      }
      let field = this.state.field.toString(encoding);
      if (rtrim === true && wasQuoting === false) {
        field = field.trimRight();
      }
      if (cast === true) {
        const [err, f] = this.__cast(field);
        if (err !== undefined) return err;
        field = f;
      }
      this.state.record.push(field);
      // Increment record length if record size must not exceed a limit
      if (max_record_size !== 0 && typeof field === "string") {
        this.state.record_length += field.length;
      }
      this.__resetField();
    },
    __resetField: function () {
      this.state.field.reset();
      this.state.wasQuoting = false;
    },
    __push: function (record, push) {
      const { on_record } = this.options;
      if (on_record !== undefined) {
        const info = this.__infoRecord();
        try {
          record = on_record.call(null, record, info);
        } catch (err) {
          return err;
        }
        if (record === undefined || record === null) {
          return;
        }
      }
      push(record);
    },
    // Return a tuple with the error and the casted value
    __cast: function (field) {
      const { columns, relax_column_count } = this.options;
      const isColumns = Array.isArray(columns);
      // Dont loose time calling cast
      // because the final record is an object
      // and this field can't be associated to a key present in columns
      if (
        isColumns === true &&
        relax_column_count &&
        this.options.columns.length <= this.state.record.length
      ) {
        return [undefined, undefined];
      }
      if (this.state.castField !== null) {
        try {
          const info = this.__infoField();
          return [undefined, this.state.castField.call(null, field, info)];
        } catch (err) {
          return [err];
        }
      }
      if (this.__isFloat(field)) {
        return [undefined, parseFloat(field)];
      } else if (this.options.cast_date !== false) {
        const info = this.__infoField();
        return [undefined, this.options.cast_date.call(null, field, info)];
      }
      return [undefined, field];
    },
    // Helper to test if a character is a space or a line delimiter
    __isCharTrimable: function (buf, pos) {
      const isTrim = (buf, pos) => {
        const { timchars } = this.state;
        loop1: for (let i = 0; i < timchars.length; i++) {
          const timchar = timchars[i];
          for (let j = 0; j < timchar.length; j++) {
            if (timchar[j] !== buf[pos + j]) continue loop1;
          }
          return timchar.length;
        }
        return 0;
      };
      return isTrim(buf, pos);
    },
    // Keep it in case we implement the `cast_int` option
    // __isInt(value){
    //   // return Number.isInteger(parseInt(value))
    //   // return !isNaN( parseInt( obj ) );
    //   return /^(\-|\+)?[1-9][0-9]*$/.test(value)
    // }
    __isFloat: function (value) {
      return value - parseFloat(value) + 1 >= 0; // Borrowed from jquery
    },
    __compareBytes: function (sourceBuf, targetBuf, targetPos, firstByte) {
      if (sourceBuf[0] !== firstByte) return 0;
      const sourceLength = sourceBuf.length;
      for (let i = 1; i < sourceLength; i++) {
        if (sourceBuf[i] !== targetBuf[targetPos + i]) return 0;
      }
      return sourceLength;
    },
    __isDelimiter: function (buf, pos, chr) {
      const { delimiter, ignore_last_delimiters } = this.options;
      if (
        ignore_last_delimiters === true &&
        this.state.record.length === this.options.columns.length - 1
      ) {
        return 0;
      } else if (
        ignore_last_delimiters !== false &&
        typeof ignore_last_delimiters === "number" &&
        this.state.record.length === ignore_last_delimiters - 1
      ) {
        return 0;
      }
      loop1: for (let i = 0; i < delimiter.length; i++) {
        const del = delimiter[i];
        if (del[0] === chr) {
          for (let j = 1; j < del.length; j++) {
            if (del[j] !== buf[pos + j]) continue loop1;
          }
          return del.length;
        }
      }
      return 0;
    },
    __isRecordDelimiter: function (chr, buf, pos) {
      const { record_delimiter } = this.options;
      const recordDelimiterLength = record_delimiter.length;
      loop1: for (let i = 0; i < recordDelimiterLength; i++) {
        const rd = record_delimiter[i];
        const rdLength = rd.length;
        if (rd[0] !== chr) {
          continue;
        }
        for (let j = 1; j < rdLength; j++) {
          if (rd[j] !== buf[pos + j]) {
            continue loop1;
          }
        }
        return rd.length;
      }
      return 0;
    },
    __isEscape: function (buf, pos, chr) {
      const { escape } = this.options;
      if (escape === null) return false;
      const l = escape.length;
      if (escape[0] === chr) {
        for (let i = 0; i < l; i++) {
          if (escape[i] !== buf[pos + i]) {
            return false;
          }
        }
        return true;
      }
      return false;
    },
    __isQuote: function (buf, pos) {
      const { quote } = this.options;
      if (quote === null) return false;
      const l = quote.length;
      for (let i = 0; i < l; i++) {
        if (quote[i] !== buf[pos + i]) {
          return false;
        }
      }
      return true;
    },
    __autoDiscoverRecordDelimiter: function (buf, pos) {
      const { encoding } = this.options;
      // Note, we don't need to cache this information in state,
      // It is only called on the first line until we find out a suitable
      // record delimiter.
      const rds = [
        // Important, the windows line ending must be before mac os 9
        Buffer.from("\r\n", encoding),
        Buffer.from("\n", encoding),
        Buffer.from("\r", encoding),
      ];
      loop: for (let i = 0; i < rds.length; i++) {
        const l = rds[i].length;
        for (let j = 0; j < l; j++) {
          if (rds[i][j] !== buf[pos + j]) {
            continue loop;
          }
        }
        this.options.record_delimiter.push(rds[i]);
        this.state.recordDelimiterMaxLength = rds[i].length;
        return rds[i].length;
      }
      return 0;
    },
    __error: function (msg) {
      const { encoding, raw, skip_records_with_error } = this.options;
      const err = typeof msg === "string" ? new Error(msg) : msg;
      if (skip_records_with_error) {
        this.state.recordHasError = true;
        if (this.options.on_skip !== undefined) {
          this.options.on_skip(
            err,
            raw ? this.state.rawBuffer.toString(encoding) : undefined,
          );
        }
        // this.emit('skip', err, raw ? this.state.rawBuffer.toString(encoding) : undefined);
        return undefined;
      } else {
        return err;
      }
    },
    __infoDataSet: function () {
      return {
        ...this.info,
        columns: this.options.columns,
      };
    },
    __infoRecord: function () {
      const { columns, raw, encoding } = this.options;
      return {
        ...this.__infoDataSet(),
        error: this.state.error,
        header: columns === true,
        index: this.state.record.length,
        raw: raw ? this.state.rawBuffer.toString(encoding) : undefined,
      };
    },
    __infoField: function () {
      const { columns } = this.options;
      const isColumns = Array.isArray(columns);
      return {
        ...this.__infoRecord(),
        column:
          isColumns === true
            ? columns.length > this.state.record.length
              ? columns[this.state.record.length].name
              : null
            : this.state.record.length,
        quoting: this.state.wasQuoting,
      };
    },
  };
};

const parse = function (data, opts = {}) {
  if (typeof data === "string") {
    data = Buffer.from(data);
  }
  const records = opts && opts.objname ? {} : [];
  const parser = transform(opts);
  const push = (record) => {
    if (parser.options.objname === undefined) records.push(record);
    else {
      records[record[0]] = record[1];
    }
  };
  const close = () => {};
  const err1 = parser.parse(data, false, push, close);
  if (err1 !== undefined) throw err1;
  const err2 = parser.parse(undefined, true, push, close);
  if (err2 !== undefined) throw err2;
  return records;
};

exports.CsvError = CsvError;
exports.parse = parse;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(6463);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;