// norint paleisti viena karta testa: npm test
// norint kad testai pasileistu automatiskai: npm run watch

const uniqueWords = require('./unique-words.js');

it('Correct test (1)', ()=>{
    expect( uniqueWords([['a', 'b'], ['a', 'c']]) ).toEqual(['a', 'b', 'c']);
})