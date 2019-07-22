// norint paleisti viena karta testa: npm test
// norint kad testai pasileistu automatiskai: npm run watch

const uniqueWords = require('./unique-words.js');

it('Correct test (1)', ()=>{
    expect( uniqueWords([['a', 'b'], ['a', 'c']]) ).toEqual(['a', 'b', 'c']);
})

it('Correct test (2)', ()=>{
    expect( uniqueWords([['a', 'b'], ['c']]) ).toEqual(['a', 'b', 'c']);
})

it('Correct test (3)', ()=>{
    expect( uniqueWords([]) ).toEqual([]);
})

it('Correct test (4)', ()=>{
    expect( uniqueWords('asd') ).toEqual([]);
})

it('Correct test (5)', ()=>{
    expect( uniqueWords(['a']) ).toEqual([]);
})

it('Correct test (6)', ()=>{
    expect( uniqueWords([['a', 551, [], 'b'], ['a', true, 'c']]) ).toEqual(['a', 'b', 'c']);
})

it('Correct test (7)', ()=>{
    expect( uniqueWords() ).toEqual([]);
})


const works = [
    {
        img: 'serlokas.png',
        title: 'Sherlokas',
        tags: ['html', 'css']
    },
    {
        img: 'zalia-mergaite.png',
        title: 'Zalia mergaite',
        tags: ['html', 'css']
    },
    {
        img: 'sign-up.png',
        title: 'Sign up',
        tags: ['html', 'css', 'advanced']
    },
    {
        img: 'coming-soon.png',
        title: 'Coming soon',
        tags: ['html', 'css', 'responsive']
    },
    {
        img: 'car-racing.png',
        title: 'Racing game',
        tags: ['css', 'js']
    },
    {
        img: 'portfolio.png',
        title: 'Portfolio',
        tags: ['responsive', 'js', 'advanced']
    }
];

it('Correct test (8)', ()=>{
    expect( uniqueWords( works, 'tags' ) ).toEqual(['html', 'css', 'advanced', 'responsive', 'js']);
})

it('Correct test (9)', ()=>{
    expect( uniqueWords( works, 'hack' ) ).toEqual([]);
})
