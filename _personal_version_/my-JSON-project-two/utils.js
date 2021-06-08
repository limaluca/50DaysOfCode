module.exports = {
    getHiringDate: function(timestamp) {
        const date = new Date(timestamp)
        const year = date.getFullYear();
        const month = date.getMonth();
        const hiringDate = `${month} de ${year}`
        return hiringDate;
    }
}