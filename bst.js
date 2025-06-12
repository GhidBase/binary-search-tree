class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    buildTree(array) {
        let start = 0;
        let end = array.length - 1;
        let middle = start + Math.floor((end - start) / 2);

        // base case
        if (start > end) {
            return null;
        }
        console.log("current node");
        console.log(`start: ${start}`);
        console.log(`end: ${end}`);
        console.log(`middle: ${middle}`);
        // left side
        if (middle - 1 !== null) {
            const leftArray = array.slice(start, middle);
            console.log(`left array: ${leftArray}`);
            // this.buildTree(leftArray);
        }
        
        console.log(`middle: ${array[middle]}`);
        
        if (middle + 1 !== null) {
            const rightArray = array.slice(middle + 1, end + 1);
            console.log(`right array: ${rightArray}`);
        }
        console.log("\n");

        // right side
    }
}

module.exports = { Node, Tree };
