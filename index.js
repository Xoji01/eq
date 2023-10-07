// users.forEach(item => {
// let e=item.email.split('.').at(-1)
// if (emails[e]) {
//     emails[e].push(item.email)
// }
// else {
// other.push(item.email)
// }})
// console.log(emails, other);

let products = [
    {
        name: "milk",
        type: "milk",
        price: 16000
    },
    {
        name: "cheese",
        type: "milk",
        price: 25999
    },
    {
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {
        name: "govyadina",
        type: "meat",
        price: 90000
    },
    {
        name: "baranina",
        type: "meat",
        price: 94000
    },
    {
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {
        name: "vodka",
        type: "alcohol",
        price: 20000
    },
    {
        name: "tekila",
        type: "alcohol",
        price: 50000
    },
    {
        name: "pivo",
        type: "alcohol",
        price: 17000
    },
    {
        name: "champain",
        type: "alcohol",
        price: 100000
    },
]
let total = 0
products.forEach((it) => { total += it.price })
console.log('Общая цена ' + total)
// // 1. посчитать общую сумму всех товаров
// 2. посчитать общую сумму всех товаров конкретной категории
// 3. посчитать сколько товаров конкретной категории 
// 4. найти средний прайс всех товаров
// let type = 'alcohol'

let aq = products.reduce((a, b) => { return a + b.price }, 0)
console.log(aq / products.length)
let cate = 'meat'
products.filter(product => product.type === cate);
let count = cate.length
console.log(`${cate}: ${count}`);

let types = {
    meat: [],
    milk: [],
    alcohol: []
}
let ee = products.filter((product)=> {
    if (product.type==='meat') {
        types.meat++
    }
    else if (product.type === 'milk') {
        types.milk ++
    }
    else if (product.type === 'alcohol') {
        types.alcohol++
    }
})

console.log(ee, types);