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
  },

  map: function(array, mapFunction){
    var result =[];
    array.forEach(function(element){
      result.push(mapFunction(element))
    })
    return result
  },

  filter: function(array,filterFunction){
    var result = [];
    array.forEach(function(element){
      if(filterFunction(element)){
    result.push(element)}
    })
    return result
  },

  some: function(array,someFunction){
    result = false;
    array.forEach(function(element){
      if (someFunction(element) === true){
        result = true
      }
    })
    return result
  }, 

  every: function(array,everyFunction){
    var violations = 0 
    array.forEach(function(element){
      if(everyFunction(element) === false){
        violations ++
      }
    })
    if(violations > 0){
      return false
    }else{
      return true
    }
  },

  reduce: function(array, reduceFunction){
    var accumulator = 0
    var result = 0
    array.forEach(function(element){

      result += element 
    })
    return result
  }

}

module.exports = Enumeration;