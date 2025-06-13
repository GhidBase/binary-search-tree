const { Node, Tree, prettyPrint } = require("./bst.js");

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

array.sort((a, b) => a - b);
// console.log(array);

let tree = new Tree(array);
// tree.prettyPrint()

prettyPrint(tree.root)