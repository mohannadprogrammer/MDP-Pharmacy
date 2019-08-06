module.exports = async (items) => {
    let total = 0;
    for (item of items) {
        total += item.price
    }
    return total;
}