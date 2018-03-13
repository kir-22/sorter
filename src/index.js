class Sorter {
  constructor() {
    // your implementation
    this.array=new Array();
    this.compareFunc=function(a,b){return a-b;}
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    indices.sort(function(a,b){return a-b;})
    var arr=[];
    for(var i=0; i<indices.length; i++){arr.push(this.array[indices[i]]);}
    arr.sort(this.compareFunc);
    for(var j=0;j<indices.length;j++){this.array.splice(indices[j],1 arr[j]);}
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunc=compareFunction;
  }
}

module.exports = Sorter;
