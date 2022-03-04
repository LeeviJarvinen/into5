const db = require('../database');

const arviointi = {
  getById: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (paivamaara,arvosana) values(?,?)',
      [arviointi.paivamaara, arviointi.arvosana,],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set paivamaara=?,arvosana=? where id_arviointi=?',
      [arviointi.paivamaara, arviointi.arvosana, id],
      callback
    );
  }
};
module.exports = arviointi;