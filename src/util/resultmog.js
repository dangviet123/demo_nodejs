module.exports = {
    resultMultipleToObject: (datas) => {
        return datas ? datas.map(data => data.toObject()) : "";
    },
    resultToObject: (data) => {
        return data ? data.toObject() : "";
    }
};