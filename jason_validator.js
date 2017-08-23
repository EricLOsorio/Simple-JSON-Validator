window.onload=(function(){
  
  var button=document.getElementById('button');
  var inputString=document.getElementById('inputString');
  var output=document.getElementById('output');
  var outputRadio=document.getElementById('textOutput');


  button.addEventListener('click', function() {

  	var originalString=inputString.value;

    var worker = new Worker( 'worker.js');

    worker.postMessage(originalString);

    worker.onmessage = function (message) {

      output.innerHTML = message.data;

    };

      outputRadio.checked=true;

  });

});

