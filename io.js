var ipc = require('electron').ipcRenderer
var authButton = document.getElementById('auth-button')
var fs = require('fs');

/*
 * input stdin and set data to html
 */
function input() {
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
