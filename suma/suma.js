function suma( a, b ) {
    if ( typeof(a) !== 'number' ||
         typeof(b) !== 'number' ) {
        return 'Klaida: duok skaicius';
    }
    if ( !isFinite(a) ||
         !isFinite(b) ) {
        return 'Klaida: turi buti normalus skaiciai';
    }
    return a + b;
}

module.exports = suma;