
/////////////////////////////////////
(function(){
   
globalThis.getNeatParams = function (func) {
   let str = func
   return ""; // UGH not now, todo
}

})()
///////////////////////////////////////


// Please see https://github.com/icecream17/handy-js-stuff
// Comment line 11 if you want to redefine any of the functions with external code.
Object.defineProperty(globalThis, "makeFunctionNative", {
   enumerable: false,
   configurable: true,
   writable: true,
   value: (function nativeCodeClosure() {
      function makeFunctionNative(func) {
         func.toString = (function toString() {return `function ${this.name} ${getNeatParams(func)} { [native code] }`}).bind(func)
         func.toString.toString = 
      }
      return makeFunctionNative(makeFunctionNative);
   })()
}


Object.defineProperty(globalThis, "defineGlobals", {
   enumerable: false,
   configurable: true,
   writable: true,
   value: (function nativeCodeClosure() {
      function defineGlobals(allVariables) {
         for (let [key, value] of Object.entries(allVariables) {
            allVariables[key] = {
               enumerable: false,
               configurable: true,
               writable: true,
               "value": value
            };
         }

         Object.defineProperties(globalThis, allVariables);
      }
      defineGlobals.toString = "function defineGlobals { [native code] }";
      return defineGlobals;
   })()
});

Object.defineProperty(globalThis, "isStrict", {
   enumerable: false,
   configurable: true,
   writable: true,
   get: function isStrict (keys, values) {
      try {NaN = 7} catch {return false}
      return true
   }
});

Object.defineProperty(Object, "shallowCopy", {
   enumerable: false,
   configurable: true,
   writable: true,
   value: 
}

globalThis.defineGlobals({

   /*  keys, values => for..of keys, values
    *  keys Array   => for..of keys, values = indices
    *  keys Object  => for..of keys, values = object values
    */
   Enum:
   function Enum (arg1, arg2) {
      function createEnumObject() {
         let enumObject = {};
         if (arg2 === undefined) {
            return Object.shallowCopy(arg1);
         } else {
            for (let i = 0; i < arg1.length; i++) {
               enumObject[arg1[i]] = arg2[i]
            }
         }
         return enumObject;
      }
   
      const handler = {
         get(target, name) {
            if (!(name in target)) throw new ReferenceError(`No such enumerator: ${name}`);
            return target[name];
         },
         set() {
            throw new Error('Cannot add/update properties on an Enum instance after it is defined')
         }
       };

       return new Proxy(createEnumObject(), handler);
   }
});
