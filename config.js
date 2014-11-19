var config = {
  // debug 为 true 时，用于本地调试
  debug: true,
  session_secret: 'broadcasts_secret', // 务必修改
  db: 'mongodb://127.0.0.1/broadcasts',
 // db:'mongodb://127.0.0.1/donodejs',
  db_name: 'broadcasts'
  //db_name: 'donodejs'
 }
 module.exports = config;
 