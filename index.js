var exec = require('child_process').exec;

const express = require('express');
//const url = require('url');
const app = express();
const port = 8080

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/service/', (request, response) => {
  //var url_parts = url.parse(request.url, true);
  //var query = url_parts.query;
  var key = request.query.key;
  var remote = request.query.remote;
  console.log(`Key is ${key}`);
  console.log(`Remote is ${remote}`);
  if (key && remote) {
    console.log('sending command');
    dir = exec(`irsend SEND_ONCE ${remote} ${key}`, function(err, stdout, stderr) {
      if (err) {
        console.log('error sending command: ', err);
      }
      console.log(stdout);
    });

    dir.on('exit', function (code) {
      console.log('exit complete with code ', code);
    });
  }
  response.sendStatus(`Remote ${remote} and ${key} sent`);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
