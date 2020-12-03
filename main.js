// Please see https://github.com/icecream17/handy-js-stuff
// Comment line 11 if you want to redefine any of the functions with external code.

Object.defineProperty(globalThis, "defineGlobals", {
   value:
   function defineConstantGlobals(allVariables) {
      for (let [key, value] of Object.entries(allVariables) {
         allVariables[key] = {
            "value": value,
            writable: false,
            set: function constantGlobalCannotBeChanged(value) {throw "You cannot change this! Hmmph. (is-constant)"}
         };
      }
      
      Object.defineProperties(globalThis, allVariables);
   }
});

Object.defineProperty(globalThis, "isStrict", {
   get:
   function isStrict (keys, values) {
      try {NaN = 7} catch {return false}
      return true
   }
});

globalThis.defineGlobals({

   /*  keys, values => for..of keys, values
    *  keys Array   => for..of keys, values = indices
    *  keys Object  => for..of keys, values = object values
    */
   Enum:
   function Enum (keys, values, allowUnusualType = false) {
      function createStartEnum() {
         return {};
      }
   
      const handler = {
         get(target, name) {
            if (typeof target[name] !== 'undefined') return target[name];
            throw new Error(`No such enumerator: ${name}`);
         },
         set() {
            throw new Error('Cannot add/update properties on an Enum instance after it is defined')
         }
       };

       return new Proxy(createStartEnum(), handler);
   }
});
