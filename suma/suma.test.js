const suma = require('./suma.js');

it('tikriname teisinga suma (1)', ()=>{
    expect( suma(2, 5) ).toBe( 7 );
})

it('tikriname teisinga suma (2)', ()=>{
    expect( suma(88, 12) ).toBe( 100 );
})

it('tikriname teisinga suma (3)', ()=>{
    expect( suma(-4, 4) ).toBe( 0 );
})

it('netinkami kintamieji', ()=>{
    expect( suma('asdf', 'asd') ).toBe('Klaida: duok skaicius');
})

it('netinkami kintamieji', ()=>{
    expect( suma(858, 'asd') ).toBe('Klaida: duok skaicius');
})

it('netinkami kintamieji', ()=>{
    expect( suma('asd', 85) ).toBe('Klaida: duok skaicius');
})

it('netinkami kintamieji', ()=>{
    expect( suma(Infinity, 85) ).toBe('Klaida: turi buti normalus skaiciai');
})

it('netinkami kintamieji', ()=>{
    expect( suma(99, Infinity) ).toBe('Klaida: turi buti normalus skaiciai');
})

it('netinkami kintamieji', ()=>{
    expect( suma(NaN, 85) ).toBe('Klaida: turi buti normalus skaiciai');
})

it('netinkami kintamieji', ()=>{
    expect( suma(99, NaN) ).toBe('Klaida: turi buti normalus skaiciai');
})