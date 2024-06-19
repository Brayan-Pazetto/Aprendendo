const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item) => item * 2)

// const list = [
//     {name: 'Brayan', vip: true},
//     {name: 'Julia', vip: true},
//     {name: 'Clari', vip: true},
//     {name: 'Bruno', vip: false},
//     {name: 'Carla', vip: false},
//     {name: 'Sani', vip: true},
//     {name: 'Pedro', vip: false},
// ]

// const newList = list.map(user => {
//     const newUser = {
//         name: user.name,
//         braceletColor: user.vip ? 'Black' : 'Green'
//     }

// return newUser

// })

// console.log(newList)

const list = [
    {name: 'Brayan', testGrade: 7 },
    {name: 'Julia', testGrade: 6 },
    {name: 'Clari', testGrade: 10 },
    {name: 'Bruno', testGrade: 2},
    {name: 'Marcia', testGrade: 8 },
    {name: 'Sani', testGrade: 5 },
    {name: 'Pedro', testGrade: 3 },
]

const newList = list.map(user => {
    const newUser = {
        name: user.name,
        Result: user.testGrade > 5 ? 'Aproved' : 'Reproved'
    }

return newUser

})

console.log(newList)