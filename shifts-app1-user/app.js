const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM usertable", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(result);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


