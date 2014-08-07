"use strict"

var Q = require("q");
var MongoClient = require('mongodb').MongoClient
var format = require('util').format;

module.exports = function(){

  var api = {}

  api.config = 
  {
    host: "mongodb://127.0.0.1",
    port: "27017",
    name: "retain"
  };

  api.new = _new;
  api.set = _set;
  api.find = _find;
  api.all = _all;
  api.remove = _remove;
  api.search = _search;
  api._save = _save;
  api._initiated = false;
  api._init = _init;

  return api;
};

function _init(fn)
{
  var self = this;

  if(this._initiated)
  {
    fn()
    return;
  }

  MongoClient.connect(this.config.host+':'+this.config.port+'/'+this.config.name, function(err, db) 
  {
    if(err) throw err;

    self._db = db;
    self._initiated = true;
    fn();
  })
}

function _new(record)
{
  var self = this;

  var deferred = Q.defer();

  this._init(function()
  {
    var query = self._db.collection(self.config.name).insert( record, function(err, objects)
    {
      _queryHandler(deferred,err, objects);
    } );
  });

  return deferred.promise;

}

function _set(record)
{

}

function _find(id)
{

}


function _all(records)
{

}

function _remove(record)
{

}

function _search(record)
{

}

function _save()
{

}

function _queryHandler(deferred, err, objects)
{
  if(err) 
  {
    deferred.reject(new Error(err.message));
  } 
  else 
  {
    deferred.resolve(objects);
  }
}





