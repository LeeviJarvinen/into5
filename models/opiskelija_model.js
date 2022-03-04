const db = require('../database');

const opiskelija = {
  getById: function(id, callback) {
    return db.query('select * from opiskelija where id_opiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (enimi,snimi,osoite) values(?,?,?)',
      [opiskelija.enimi, opiskelija.snimi, opiskelija.osoite],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set enimi=?,snimi=?, osoite=? where id_opiskelija=?',
      [opiskelija.enimi, opiskelija.snimi, opiskelija.osoite, id],
      callback
    );
  }
};
module.exports = opiskelija;