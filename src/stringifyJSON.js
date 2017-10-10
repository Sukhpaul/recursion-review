// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null){
    return 'null';
} 
  if (typeof obj === 'string') {
    return '"' + obj.toString() + '"';
}
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
} if (Array.isArray(obj)){
    if (obj.length > 0){
      return '[' + _.map(obj,function(element){
        return stringifyJSON(element);
    }) + ']';
    }
    return '[]';
} if (typeof obj === 'object'){
    if (Object.keys(obj).length === 0) {
      return '{}';
    }   
   // var newObj = {};
   // for (var key in obj){
   //    debugger;
   //    var stringifyKey = stringifyJSON(key);
   //    var stringifyValue = stringifyJSON(obj[key]);
   //    newObj[stringifyKey] = stringifyValue; 
   // }
   //  return '{' + newObj + '}';
  var stringed = [];
  for (var key in obj){
    if (typeof obj[key] === 'function' || obj[key] === undefined) {
      return '{}';
    }
      var stringifyKey = stringifyJSON(key);
      var stringifyValue = stringifyJSON(obj[key]);
      stringed.push(stringifyKey + ':' + stringifyValue);
    }
    return '{' + stringed + '}';
} 
};
