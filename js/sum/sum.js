function sum(a, b) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        isNaN(a) ||
        isNaN(b)) {
        return false;
    }
    return b + a;
}


module.exports = sum;