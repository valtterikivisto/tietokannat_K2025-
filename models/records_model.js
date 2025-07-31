const db = require('../database');

const record = {
    getAll: function(callback) {
        return db.query('CALL p1()', callback);
    },
    getOne: function(id, callback) {
        return db.query("CALL findOne(?)", [id], callback);
    },
    addRecord: function(record, callback) {
        return db.query("CALL addRecord(?, ?, ?)", 
            [record.idOpintojakso, record.idOpiskelija, record.Arvosana], callback);
    },
    deleteRecord: function(record, callback) {
        return db.query("DELETE FROM Arviointi WHERE idOpiskelija = ? AND idOpintojakso = ?", [record.idOpiskelija, record.idOpintojakso], callback);
    }
};

module.exports = record;