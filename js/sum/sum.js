function sum(a, b) {
    if (typeof a !== 'number' ||
        typeof b !== 'number') {
        return false;
    }
    if (a > b) {
        return b + a;
    }
    return b + a;
}


module.exports = sum;