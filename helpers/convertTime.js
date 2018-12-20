function convertTime(data) {
    return `${new Date(data).getHours()}:${new Date(data).getMinutes()}`
}

module.exports = convertTime