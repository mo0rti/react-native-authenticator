// a simple memoize function that takes in a function and returns a memoized function
export const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];  // just taking one argument here
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}