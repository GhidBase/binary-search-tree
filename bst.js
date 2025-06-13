class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(array = null) {
        this.array = array;
        this.array = [...new Set(array)];
        this.array.sort((a, b) => a - b);
        this.root = this.buildTree(this.array);
    }

    buildTree(array) {
        let start = 0;
        let end = array.length - 1;
        let middle = start + Math.floor((end - start) / 2);
        let leftNode = null;
        let rightNode = null;

        // base case
        if (start > end) {
            return null;
        }
        // console.log("current node");
        // console.log(`start: ${start}`);
        // console.log(`end: ${end}`);
        // console.log(`middle: ${middle}`);
        // left side
        if (array[middle - 1] !== null && array[middle - 1] !== undefined) {
            const leftArray = array.slice(start, middle);
            // console.log(`left array: ${leftArray}`);
            leftNode = this.buildTree(leftArray);
        }

        // console.log(`middle: ${array[middle]}`);

        if (array[middle + 1] !== null && array[middle + 1] !== undefined) {
            const rightArray = array.slice(middle + 1, end + 1);
            // console.log(`right array: ${rightArray}`);
            rightNode = this.buildTree(rightArray);
        }
        // console.log("\n");

        return new Node(array[middle], leftNode, rightNode);

        // right side
    }

    insert(value, root) {
        // base case is an insertion

        // recursive case is when there's a child node

        if (value < root.data) {
            if (root.left != null) {
                this.insert(value, root.left);
            } else {
                root.left = new Node(value);
            }
        } else if (value > root.data) {
            if (root.right != null) {
                this.insert(value, root.right);
            } else {
                root.right = new Node(value);
            }
        }
        return;
    }
}

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}

module.exports = { Node, Tree, prettyPrint };
