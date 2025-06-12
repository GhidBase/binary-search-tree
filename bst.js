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
        console.log(start);
        console.log(end);
        console.log(middle);
        // left side
        if (middle - 1 !== null) {
            const leftArray = array.slice(start, middle);
            console.log(leftArray);
            // this.buildTree();
        }
        console.log(array[middle]);
        if (middle + 1 !== null) {
            const rightArray = array.slice(middle + 1, end + 1);
            console.log(rightArray);
        }

        // right side
    }
}

module.exports = { Node, Tree };
