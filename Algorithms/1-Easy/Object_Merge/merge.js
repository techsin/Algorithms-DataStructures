(function() {

    Object.defineProperty(Object.prototype, 'merge', { enumerable: false, configurable: false, writable: false, value: merge });


    function merge(obj = {}, func) {
        let new_obj = {};
        let org_keys = Object.keys(this);

        for (let k in this) {
            new_obj[k] = this[k];
        }

        for (let k in obj) {

            if (typeof func == 'function' && org_keys.includes(k)) {
                new_obj[k] = func(k, this[k], obj[k]);
            } else {
                new_obj[k] = obj[k];
            }

        }
        return new_obj;
    }
})();


/*
Results


h1 = { "a" : 1, "b" : 2 }
h2 = { "c" : 3, "d" : 4 }

h1.merge(h2)
// Object {a: 1, b: 2, c: 3, d: 4}

//Overriding with custom function 

h1 = { "a" : 1, "b" : 2 }
h2 = { "c" : 3, "d" : 4 }

h1.merge(h2, function(k, old, n) { return old-n;})
// Object {a: 1, b: 2, c: 3, d: 4}

h2.b=10
h1.merge(h2, function(k, old, n) { return old-n;})
//Object {a: 1, b: -8, c: 3, d: 4}



*/
