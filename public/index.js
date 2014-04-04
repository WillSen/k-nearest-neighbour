var Node = function(object){
  for (var key in object){
    this[key] = object[key];
  };
}