const { Node, Tree, prettyPrint } = require("./bst.js");

// let array = [50, 30, 70, 20, 40, 60, 80, 35, 45, 65, 75, 85, 34, 36];
let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// let array = [1, 3, 4, 5];

array.sort((a, b) => a - b);
// console.log(array);

let tree = new Tree(array);
// tree.prettyPrint()

prettyPrint(tree.root);
// tree.insert(6);
// tree.insert(11);
// tree.insert(10);
// tree.insert(12);
console.log("\n");
// tree.deleteItem(8);
// tree.deleteItem(3);
prettyPrint(tree.root);
// console.log(tree.root)

// test with immediate child removal for two child situation
// test with down-stream child removal for two child situation
