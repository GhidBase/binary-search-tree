const { Node, Tree, prettyPrint } = require("./bst.js");

// let array = [50, 30, 70, 20, 40, 60, 80, 35, 45, 65, 75, 85, 34, 36];
let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 8000, 9000, 300];
// let array = [1, 3, 4, 5];
/* let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]; */


array.sort((a, b) => a - b);
// console.log(array);

let tree = new Tree(array);

console.log("\n");

console.log("Initial tree based on original array");
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.insert(8000);
tree.insert(9000);
tree.insert(300);
tree.deleteItem(9);
tree.deleteItem(23);

console.log(`\n\nTree after 3 insertions and 2 removals`);
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.rebalance();

console.log(`\n\nTree after rebalancing`);
prettyPrint(tree.root);

console.log(tree.isBalanced());