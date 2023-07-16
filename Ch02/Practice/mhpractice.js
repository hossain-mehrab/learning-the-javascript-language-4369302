(base) mehrabdevelopment@Mds-MacBook-Pro learning-the-javascript-language-4369302 % node
Welcome to Node.js v18.6.0.
Type ".help" for more information.
> "This is a string"
'This is a string'
> 'This is a string"
'This is a string"
^^^^^^^^^^^^^^^^^^

Uncaught SyntaxError: Invalid or unexpected token
> 'Thi'
'Thi'
>  "This "This""
 "This "This""
        ^^^^

Uncaught SyntaxError: Unexpected identifier
> 'This "This"'
'This "This"'
> 'this'this''
'this'this''
      ^^^^

Uncaught SyntaxError: Unexpected token 'this'
> "this'this'"
"this'this'"
> "Thius's"
"Thius's"
> "This"s"
"This"s"
      ^

Uncaught SyntaxError: Unexpected identifier
> "This \"Mehrab"\"
"This \"Mehrab"\"
               ^

Uncaught SyntaxError: Invalid or unexpected token
> "This \"Mehrab\""
'This "Mehrab"'
> "This /"Mehrab/""
"This /"Mehrab/""
        ^^^^^^

Uncaught SyntaxError: Unexpected identifier
> "This /
"This /
^^^^^^^

Uncaught SyntaxError: Invalid or unexpected token
> "This is \
... Joe's Favorite \
... String EVER";
"This is Joe's Favorite String EVER"
> "This is \
... Md Mehrab Hossain "
'This is Md Mehrab Hossain '
> "This is \"Md Mehrab\""
'This is "Md Mehrab"'
> var mT1 = 20, mT2 ="Mehrab";
undefined
> mT1
20
> mT2
'Mehrab'
> 
> var myString = "Md Mehrab Hossain"
undefined
> myString.
... 
... 
AbortController                   AbortSignal
AggregateError                    Array
ArrayBuffer                       Atomics
BigInt                            BigInt64Array
BigUint64Array                    Blob
Boolean                           BroadcastChannel
Buffer                            ByteLengthQueuingStrategy
CompressionStream                 CountQueuingStrategy
DOMException                      DataView
Date                              DecompressionStream
Error                             EvalError
Event                             EventTarget
FinalizationRegistry              Float32Array
Float64Array                      FormData
Function                          Headers
Infinity                          Int16Array
Int32Array                        Int8Array
Intl                              JSON
Map                               Math
MessageChannel                    MessageEvent
MessagePort                       NaN
Number                            Object
Promise                           Proxy
RangeError                        ReadableByteStreamController
ReadableStream                    ReadableStreamBYOBReader
ReadableStreamBYOBRequest         ReadableStreamDefaultController
ReadableStreamDefaultReader       ReferenceError
Reflect                           RegExp
Request                           Response
Set                               SharedArrayBuffer
String                            Symbol
SyntaxError                       TextDecoder
TextDecoderStream                 TextEncoder
TextEncoderStream                 TransformStream
TransformStreamDefaultController  TypeError
URIError                          URL
URLSearchParams                   Uint16Array
Uint32Array                       Uint8Array
Uint8ClampedArray                 WeakMap
WeakRef                           WeakSet
WebAssembly                       WritableStream
WritableStreamDefaultController   WritableStreamDefaultWriter
_                                 _error
assert                            async_hooks
atob                              btoa
buffer                            child_process
clearImmediate                    clearInterval
clearTimeout                      cluster
console                           constants
crypto                            decodeURI
decodeURIComponent                dgram
diagnostics_channel               dns
domain                            encodeURI
encodeURIComponent                escape
eval                              events
fetch                             fs
global                            globalThis
http                              http2
https                             inspector
isFinite                          isNaN
mT1                               mT2
module                            myString
net                               os
parseFloat                        parseInt
path                              perf_hooks
performance                       process
punycode                          querystring
queueMicrotask                    readline
repl                              require
setImmediate                      setInterval
setTimeout                        stream
string_decoder                    structuredClone
sys                               timers
tls                               trace_events
tty                               undefined
unescape                          url
util                              v8
vm                                wasi
worker_threads                    zlib

__proto__                         hasOwnProperty
isPrototypeOf                     propertyIsEnumerable
toLocaleString                    toString
valueOf

constructor

... 
AbortController                   AbortSignal
AggregateError                    Array
ArrayBuffer                       Atomics
BigInt                            BigInt64Array
BigUint64Array                    Blob
Boolean                           BroadcastChannel
Buffer                            ByteLengthQueuingStrategy
CompressionStream                 CountQueuingStrategy
DOMException                      DataView
Date                              DecompressionStream
Error                             EvalError
Event                             EventTarget
FinalizationRegistry              Float32Array
Float64Array                      FormData
Function                          Headers
Infinity                          Int16Array
Int32Array                        Int8Array
Intl                              JSON
Map                               Math
MessageChannel                    MessageEvent
MessagePort                       NaN
Number                            Object
Promise                           Proxy
RangeError                        ReadableByteStreamController
ReadableStream                    ReadableStreamBYOBReader
ReadableStreamBYOBRequest         ReadableStreamDefaultController
ReadableStreamDefaultReader       ReferenceError
Reflect                           RegExp
Request                           Response
Set                               SharedArrayBuffer
String                            Symbol
SyntaxError                       TextDecoder
TextDecoderStream                 TextEncoder
TextEncoderStream                 TransformStream
TransformStreamDefaultController  TypeError
URIError                          URL
URLSearchParams                   Uint16Array
Uint32Array                       Uint8Array
Uint8ClampedArray                 WeakMap
WeakRef                           WeakSet
WebAssembly                       WritableStream
WritableStreamDefaultController   WritableStreamDefaultWriter
_                                 _error
assert                            async_hooks
atob                              btoa
buffer                            child_process
clearImmediate                    clearInterval
clearTimeout                      cluster
console                           constants
crypto                            decodeURI
decodeURIComponent                dgram
diagnostics_channel               dns
domain                            encodeURI
encodeURIComponent                escape
eval                              events
fetch                             fs
global                            globalThis
http                              http2
https                             inspector
isFinite                          isNaN
mT1                               mT2
module                            myString
net                               os
parseFloat                        parseInt
path                              perf_hooks
performance                       process
punycode                          querystring
queueMicrotask                    readline
repl                              require
setImmediate                      setInterval
setTimeout                        stream
string_decoder                    structuredClone
sys                               timers
tls                               trace_events
tty                               undefined
unescape                          url
util                              v8
vm                                wasi
worker_threads                    zlib

__proto__                         hasOwnProperty
isPrototypeOf                     propertyIsEnumerable
toLocaleString                    toString
valueOf

constructor

... 
> myString.
myString.__proto__             myString.hasOwnProperty        myString.isPrototypeOf
myString.propertyIsEnumerable  myString.toLocaleString

myString.anchor                myString.at                    myString.big
myString.blink                 myString.bold                  myString.charAt
myString.charCodeAt            myString.codePointAt           myString.concat
myString.constructor           myString.endsWith              myString.fixed
myString.fontcolor             myString.fontsize              myString.includes
myString.indexOf               myString.italics               myString.lastIndexOf
myString.length                myString.link                  myString.localeCompare
myString.match                 myString.matchAll              myString.normalize
myString.padEnd                myString.padStart              myString.repeat
myString.replace               myString.replaceAll            myString.search
myString.slice                 myString.small                 myString.split
myString.startsWith            myString.strike                myString.sub
myString.substr                myString.substring             myString.sup
myString.toLocaleLowerCase     myString.toLocaleUpperCase     myString.toLowerCase
myString.toString              myString.toUpperCase           myString.trim
myString.trimEnd               myString.trimLeft              myString.trimRight
myString.trimStart             myString.valueOf

> myString.
myString.__proto__             myString.hasOwnProperty        myString.isPrototypeOf
myString.propertyIsEnumerable  myString.toLocaleString

myString.anchor                myString.at                    myString.big
myString.blink                 myString.bold                  myString.charAt
myString.charCodeAt            myString.codePointAt           myString.concat
myString.constructor           myString.endsWith              myString.fixed
myString.fontcolor             myString.fontsize              myString.includes
myString.indexOf               myString.italics               myString.lastIndexOf
myString.length                myString.link                  myString.localeCompare
myString.match                 myString.matchAll              myString.normalize
myString.padEnd                myString.padStart              myString.repeat
myString.replace               myString.replaceAll            myString.search
myString.slice                 myString.small                 myString.split
myString.startsWith            myString.strike                myString.sub
myString.substr                myString.substring             myString.sup
myString.toLocaleLowerCase     myString.toLocaleUpperCase     myString.toLowerCase
myString.toString              myString.toUpperCase           myString.trim
myString.trimEnd               myString.trimLeft              myString.trimRight
myString.trimStart             myString.valueOf

> myString.
myString.__proto__             myString.hasOwnProperty        myString.isPrototypeOf
myString.propertyIsEnumerable  myString.toLocaleString

myString.anchor                myString.at                    myString.big
myString.blink                 myString.bold                  myString.charAt
myString.charCodeAt            myString.codePointAt           myString.concat
myString.constructor           myString.endsWith              myString.fixed
myString.fontcolor             myString.fontsize              myString.includes
myString.indexOf               myString.italics               myString.lastIndexOf
myString.length                myString.link                  myString.localeCompare
myString.match                 myString.matchAll              myString.normalize
myString.padEnd                myString.padStart              myString.repeat
myString.replace               myString.replaceAll            myString.search
myString.slice                 myString.small                 myString.split
myString.startsWith            myString.strike                myString.sub
myString.substr                myString.substring             myString.sup
myString.toLocaleLowerCase     myString.toLocaleUpperCase     myString.toLowerCase
myString.toString              myString.toUpperCase           myString.trim
myString.trimEnd               myString.trimLeft              myString.trimRight
myString.trimStart             myString.valueOf

> myString.
myString.__proto__             myString.hasOwnProperty        myString.isPrototypeOf
myString.propertyIsEnumerable  myString.toLocaleString

myString.anchor                myString.at                    myString.big
myString.blink                 myString.bold                  myString.charAt
myString.charCodeAt            myString.codePointAt           myString.concat
myString.constructor           myString.endsWith              myString.fixed
myString.fontcolor             myString.fontsize              myString.includes
myString.indexOf               myString.italics               myString.lastIndexOf
myString.length                myString.link                  myString.localeCompare
myString.match                 myString.matchAll              myString.normalize
myString.padEnd                myString.padStart              myString.repeat
myString.replace               myString.replaceAll            myString.search
myString.slice                 myString.small                 myString.split
myString.startsWith            myString.strike                myString.sub
myString.substr                myString.substring             myString.sup
myString.toLocaleLowerCase     myString.toLocaleUpperCase     myString.toLowerCase
myString.toString              myString.toUpperCase           myString.trim
myString.trimEnd               myString.trimLeft              myString.trimRight
myString.trimStart             myString.valueOf

> myString.
myString.__proto__             myString.hasOwnProperty        myString.isPrototypeOf
myString.propertyIsEnumerable  myString.toLocaleString

myString.anchor                myString.at                    myString.big
myString.blink                 myString.bold                  myString.charAt
myString.charCodeAt            myString.codePointAt           myString.concat
myString.constructor           myString.endsWith              myString.fixed
myString.fontcolor             myString.fontsize              myString.includes
myString.indexOf               myString.italics               myString.lastIndexOf
myString.length                myString.link                  myString.localeCompare
myString.match                 myString.matchAll              myString.normalize
myString.padEnd                myString.padStart              myString.repeat
myString.replace               myString.replaceAll            myString.search
myString.slice                 myString.small                 myString.split
myString.startsWith            myString.strike                myString.sub
myString.substr                myString.substring             myString.sup
myString.toLocaleLowerCase     myString.toLocaleUpperCase     myString.toLowerCase
myString.toString              myString.toUpperCase           myString.trim
myString.trimEnd               myString.trimLeft              myString.trimRight
myString.trimStart             myString.valueOf

> myString.toLocaleLowerCase()
'md mehrab hossain'
> myString.toUpperCase();
'MD MEHRAB HOSSAIN'
> `This is` 
'This is'
> `This is ${myString}`
'This is \x1C\x1CMd Mehrab Hossain'
> `This is : ${myString}`
'This is : \x1C\x1CMd Mehrab Hossain'
> `This is :" ${myString}"`
'This is :" \x1C\x1CMd Mehrab Hossain"'
> `This I say to you: "${myString}". Huzzah!`
'This I say to you: "Md Mehrab Hossain". Huzzah!'
> `This is : ${myString}`
'This is : Md Mehrab Hossain'
> var myName = `This is : ${myString}`
undefined
> 
> myName
'This is : Md Mehrab Hossain'
> var myNumber = 32;
undefined
> myNumber.
myNumber.__proto__             myNumber.hasOwnProperty        myNumber.isPrototypeOf
myNumber.propertyIsEnumerable

myNumber.constructor           myNumber.toExponential         myNumber.toFixed
myNumber.toLocaleString        myNumber.toPrecision           myNumber.toString
myNumber.valueOf

> myNumber.toPrecision
[Function: toPrecision]
> 12.5
12.5
> var numDecimal = 12.78787787
undefined
> Math.round(nuDecimal)
Uncaught ReferenceError: nuDecimal is not defined
> Math.round(numDecimal)
13
> numDecimal
12.78787787
> numDecimal.constructor
[Function: Number]
> Number.round(numDecimal)
Uncaught TypeError: Number.round is not a function
> Math.
Math.__proto__             Math.constructor           Math.hasOwnProperty
Math.isPrototypeOf         Math.propertyIsEnumerable  Math.toLocaleString
Math.toString              Math.valueOf

Math.E                     Math.LN10                  Math.LN2
Math.LOG10E                Math.LOG2E                 Math.PI
Math.SQRT1_2               Math.SQRT2                 Math.abs
Math.acos                  Math.acosh                 Math.asin
Math.asinh                 Math.atan                  Math.atan2
Math.atanh                 Math.cbrt                  Math.ceil
Math.clz32                 Math.cos                   Math.cosh
Math.exp                   Math.expm1                 Math.floor
Math.fround                Math.hypot                 Math.imul
Math.log                   Math.log10                 Math.log1p
Math.log2                  Math.max                   Math.min
Math.pow                   Math.random                Math.round
Math.sign                  Math.sin                   Math.sinh
Math.sqrt                  Math.tan                   Math.tanh
Math.trunc

> Math.__proto__ 
[Object: null prototype] {}
> Math.random
[Function: random]
> Math.random()
0.054176931052660304
> Nan
Uncaught ReferenceError: Nan is not defined
> NaN
NaN
> Infinity
Infinity
> -Infinity
-Infinity
> |-Infinity|
|-Infinity|
^

Uncaught SyntaxError: Unexpected token '|'
> 
> modulas
Uncaught ReferenceError: modulas is not defined


