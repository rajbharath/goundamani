var express = require('express');
var fs = require('fs');
var app = express();
var TOTAL_FILES = 7;

app.use(express.static('files'));

app.post('/', (req, res) => {
    console.log('Audio');
    res.status(200).send(response);
});

app.post('/audio/:audioName', (req, res) => {
   res.setHeader("content-type", "audio/mp3");
   fs.createReadStream("./files/"+ getRandomInt() +".mp3").pipe(res);
});


function getRandomInt() {
  return Math.floor(Math.random()*10) % TOTAL_FILES + 1
}

let portNumber = 5000;
app.listen(portNumber, function () {
  console.log('Goundamani Backend listening on port ' + portNumber);
});


var response = {
  version: '1.0',
  sessionAttributes: {},
  response: {
    outputSpeech: {
      type: 'SSML',
      ssml: '<speak><audio src=\"https://4b1ae59f.ngrok.io/1.mp3\" /></speak>'
    }
  }

}
