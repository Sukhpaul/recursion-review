// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // output arr = []
 //anon fucntion
  // for each child node
    //check if classllist = classname
      //if true push to output arr
    //if node also has child node: repeat
  
  var newArr = [];

  var recurseChildNode = (function(node){

    if (node.classList && node.classList.contains(className)) {
      newArr.push(node);
    }
    if (node.childNodes.length > 0) {
      _.each(node.childNodes, function(childNode) {
        recurseChildNode(childNode);
      });
    }
    
  });

  recurseChildNode(document.body); 

return newArr;

};
