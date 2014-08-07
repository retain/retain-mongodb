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
  api._init = _init;

  return api;
};

function _init()
{
  MongoClient.connect(this.config.host+':'+this.config.port+'/'+this.config.name, function(err, db) 
  {
    if(err) throw err;

    this._db = db;
  })
}

function _new(record)
{
  db.products.insert( { item: "card", qty: 15 } )
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