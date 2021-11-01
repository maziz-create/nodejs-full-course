// 1
// const foo = () => {
//     return 'bar';
// }

// module.exports = foo;   



// 2
// const foo = () => {
//     return 'bar';
// }

// const bar = () => {
//     return 'foo';
// }

// module.exports.foo /* solda nasıl alınacağınıı yazdık. */ = foo;
// module.exports.bar = bar;


//3
const foo = () => {
    return 'bar';
}

const bar = () => {
    return 'foo';
}

module.exports.fooFunction = foo;
module.exports.barFunction = bar;