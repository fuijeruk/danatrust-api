const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json(['Hello World!']);
});

const serverPort = process.env.OPENSHIFT_NODEJS_PORT || 3000;
const serverIP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(serverPort, serverIP, () => {
  console.log('kopda-api listening on port ' + serverPort);
})
