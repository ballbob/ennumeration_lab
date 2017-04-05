var Enumeration = function() {

}

Enumeration.prototype = {

  // your code here!
 // var findcallback = function(element, index, array){}

  find: function(array, searchFunction){
    var result
    array.forEach(function(element){
      if(searchFunction(element) === true){
      result = element 
      }
    })
    return result
  }

}

module.exports = Enumeration;