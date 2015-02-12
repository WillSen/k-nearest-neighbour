var Node = function(object){
  for (var key in object){
    this[key] = object[key];
  };
}

var NodeList = function(k){
  this.nodes = [];
  this.k = k;
}

NodeList.prototype.add = function(node) {
    this.nodes.push(node);
};

NodeList.prototype.calculateRanges = function() {
  this.areas = {min: 1000000, max: 0};
  this.rooms = {min: 1000000, max: 0};
  for (var i in this.nodes)
  {
    if (this.nodes[i].rooms < this.rooms.min)
    {
        this.rooms.min = this.nodes[i].rooms;
    }

    if (this.nodes[i].rooms > this.rooms.max)
    {
        this.rooms.max = this.nodes[i].rooms;
    }

    if (this.nodes[i].area < this.areas.min)
    {
        this.areas.min = this.nodes[i].area;
    }

    if (this.nodes[i].area > this.areas.max)
    {
        this.areas.max = this.nodes[i].area;
    }
  }

};