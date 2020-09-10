module.exports = {
    resultMultipleToObject: (datas) => {
        return datas ? datas.map(data => data.toObject()) : "";
    },
    resultToObject: (data) => {
        return datas ? data.toObject() : "";
    }
};