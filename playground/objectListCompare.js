
const a = [{1: "O"}, {2: "X"}, {4: "O"}, {5: "X"}, {6: "O"}, {8: "O"}, {9: "O"}] 
const b = [{1: "O"}, {2: "X"}, {3: "X"}, {4: "O"}, {5: "X"}, {6: "O"}, {8: "O"}, {9: "O"}] 

function comparer(otherArray){
  return function(current){
    return otherArray.filter(function(other){
      return Object.keys(other)[0] == Object.keys(current)[0]
    }).length === 0;
  }
}

var onlyInA = a.filter(comparer(b));
var onlyInB = b.filter(comparer(a));

const result = onlyInA.concat(onlyInB);

console.log(result);