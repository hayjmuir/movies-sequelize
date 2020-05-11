var orm = require("../config/orm.js");

var movie = {
  selectAll: function(cb) {
    orm.selectAll('movies', function(res) {
      cb(res);
    });
  },

  insertOne: function(col, vals, cb){
    orm.insertOne('movies', col, vals, function(res){
        cb(res);
    });
},

updateOne: function(objColsVals, condition, cb){
    orm.updateOne('movies', objColsVals, condition, function(res){
        cb(res);
    });
}

};

// Export 
module.exports = movie;