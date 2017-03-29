var ipc = require('electron').ipcRenderer
var authButton = document.getElementById('auth-button')
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

/*
 * input stdin and set data to html
 */
function input() {
  var fs = require('fs');
  fs.readFile('/tmp/a', 'utf8', function (err, data) {
    if (err) return console.log(err)

    document.getElementById('input').value = data
  });
}

/*
 * output filterd data to stdout
 */
function output() {
  authButton.addEventListener('click', function(){
      ipc.once('actionReply', function(event, response){
          processResponse(response)
      })
      ipc.send('invokeAction', 'someData');
  });
}
