const cart = [10, 244, 2, 99, 122, 30, 23, 200]
let finalValue = 0
let discountValue = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        discountValue += (value - discount)
    } else {
        discountValue += value
    }

});

cart.forEach(value => {
        finalValue += value
});

console.log(`O valor total da sua compra foi de ${finalValue.toFixed(2)}, porém com todos os descontos no produto o valor final foi de ${discountValue.toFixed(2)}`)