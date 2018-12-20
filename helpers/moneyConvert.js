function moneyConvert(data) {
    return `IDR ${data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}

module.exports = moneyConvert