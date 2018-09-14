var register = {
    transactions: [],
}

function addTransaction(transaction) {
    register.transactions.push(transaction);
}
function reset() {
    register.transactions = []
}
function getTotal() {
    var itemTotal = []
    var allItemsTogetherTotal = 0
    for (let i = 0; i < register.transactions.length; i++) {
        for (let j = 0; j < register.transactions[i].items.length; j++) {
            var singleItemTotal = register.transactions[i].items[j].price * register.transactions[i].items[j].quantity
            itemTotal.push(singleItemTotal)
        }
    }
    for (var k = 0; k < itemTotal.length; k++) {
        allItemsTogetherTotal += itemTotal[k]
    }
    return allItemsTogetherTotal
}

function getFormattedTotal() {
    return getTotal().toFixed(2)
}

module.exports = {
    register,
    addTransaction,
    getTotal,
    getFormattedTotal,
    reset,

};