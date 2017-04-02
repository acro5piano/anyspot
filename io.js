var ipc = require('electron').ipcRenderer
var authButton = document.getElementById('auth-button')
var fs = require('fs');

/*
 * input stdin and set data to html
 */
function input() {
  // fs.readFile('/tmp/a', 'utf8', function (err, data) {
  //   if (err) return console.log(err)
  //   document.getElementById('input').value = data
  // });

  // ウィンドウ一覧
  p = require('child_process')
  p.exec("wmctrl -l | perl -pe 's/  / /g' | cut -d ' ' -f 4- | perl -pe 's;^\s*N/A\s;;g' ", (err, stdout, stderr)=> {
    console.log(stdout)
    document.getElementById('input').value = stdout
  })
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
