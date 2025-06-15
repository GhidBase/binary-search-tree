const { Node, Tree, prettyPrint } = require("./bst.js");

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

array.sort((a, b) => a - b);
// console.log(array);

let tree = new Tree(array);
// tree.prettyPrint()

prettyPrint(tree.root);
tree.insert(6);
tree.insert(11);
tree.insert(10);
tree.insert(12);
console.log("\n");
tree.deleteItem(7);
prettyPrint(tree.root);
