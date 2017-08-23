function purgeSpaces(string){
  var arr = string.split('');
  var newArr = [];
  var newString = "";

  for(var i = 0; i < arr.length; i++){

    if(arr[i] !== ' ' && arr[i] !== '\r' && arr[i] !== '\t' &&
      arr[i] !== '\v' && arr[i] !== '\n' && arr[i] !== '\f'){
      newString += arr[i];
      newArr.push(arr[i]);
    }

  }

  return newString;
}

onmessage = function(message){

    var testString=purgeSpaces(message.data);
    var pattern=/^\{(((\"([a-zA-Z_]+_*\d*[a-zA-Z]*)+\"\:)+)((\d*)|(true|false)|((\"([^\"]*)\"))|((\[((\"[^\"]*\")|\d*|(true|false)))(((,\"[^\"]*\")|(,\d+)|,(true|false)))*\])|(\{\}))?((,(\"([a-zA-Z_]+_*\d*[a-zA-Z]*)+\"\:){1}((\d+)|(true|false)+|((\"([^\"]*)\"))+|((\[((\"[^\"]*\")|\d*|(true|false)))(((,\"[^\"]*\")|(,\d+)|,(true|false)))*\])|(\{\}))+)*)?)?\}/g;
    
    if(pattern.test(testString)){

      postMessage(`The input JSON string is valid JSON \r\r\r ${testString}`);

    } else{

      postMessage(`The input JSON string is invalid.

Properties and values must be surrounded by quotes. 

The colon (:) must separate each property from its value.

The string must start and end with curly brackets.

Valid values are either, boolean(true or false), number,

a normal character string, an array of these values or an empty

json string.

A comma must be placed at the end of each property/value pair

except for the LAST property/value pair in the string.`);

    }

};