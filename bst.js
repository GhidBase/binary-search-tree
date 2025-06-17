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

    insert(value) {
        const insertNode = (current) => {
            if (value < current.data) {
                if (current.left != null) {
                    insertNode(current.left);
                } else {
                    current.left = new Node(value);
                }
            } else if (value > current.data) {
                if (current.right != null) {
                    insertNode(current.right);
                } else {
                    current.right = new Node(value);
                }
            }
            return;
        };

        insertNode(this.root);
    }

    deleteItem(value) {
        const findNextHighestNodeParent = (current, parent) => {
            if (current.left !== null) {
                return findNextHighestNodeParent(current.left, current);
            } else {
                return [current, parent];
            }
        };

        const removeNode = (current) => {
            {
                if (value < current.data) {
                    let foundNode = removeNode(current.left);
                    // if the foundNode had no children just remove it
                    if (foundNode) {
                        current.left = null;
                    }
                    return;
                }

                if (value > current.data) {
                    let foundNode = removeNode(current.right);
                    // if the foundNode had no children just remove it
                    if (foundNode) {
                        current.right = null;
                    }
                    return;
                }

                // return true if there are no children
                if (current.left === null && current.right === null) {
                    return true;
                }

                // if value == current
                // find the next highest value and replace this value
                let nextHighestNode;
                let nextHighestParent;
                let find = findNextHighestNodeParent(current.right, current);
                nextHighestNode = find[0];
                nextHighestParent = find[1];
                current.data = nextHighestNode.data;

                // if the nextHighestNode is a direct child
                // set right to it's right instead to skip it
                // this works for single child situations and
                // two child situations
                if (nextHighestNode == current.right) {
                    current.right = nextHighestNode.right;
                    return;
                }

                if (nextHighestNode.right !== null) {
                    // if the next highest node has a child
                    // set it's parent's left to that child
                    // instead of the next highest node
                    // this should also work for single and two
                    // child situations
                    nextHighestParent.left = nextHighestNode.right;
                } else {
                    nextHighestParent.left = null;
                }

                return;
            }
        };

        removeNode(this.root);
    }

    find(value) {
        const findNode = (current) => {
            if (current.data > value) {
                return findNode(current.left);
            }

            if (current.data < value) {
                return findNode(current.right);
            }

            if (current.data == value) {
                return current;
            }
        };
        return findNode(this.root);
    }

    levelOrder(callback) {
        const breadthFirst = (current) => {
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
            // queue.shift();
            callback(current);
            return current;
        };

        let queue = [this.root];
        for (let i = 0; i < queue.length; i++) {
            breadthFirst(queue[i]);
        }
    }

    inorder(callback) {
        const depthTraverse = (current) => {
            if (current.left !== null) {
                depthTraverse(current.left);
            }

            callback(current);

            if (current.right !== null) {
                depthTraverse(current.right);
            }
        };

        depthTraverse(this.root);
    }

    preorder(callback) {
        const depthTraverse = (current) => {
            callback(current);

            if (current.left !== null) {
                depthTraverse(current.left);
            }

            if (current.right !== null) {
                depthTraverse(current.right);
            }
        };

        depthTraverse(this.root);
    }

    postOrder(callback) {
        const depthTraverse = (current) => {
            if (current.left !== null) {
                depthTraverse(current.left);
            }

            if (current.right !== null) {
                depthTraverse(current.right);
            }

            callback(current);
        };

        depthTraverse(this.root);
    }

    depth(value) {
        const findNode = (current) => {
            if (current.data > value && current.left) {
                let currentDepth = findNode(current.left);
                if (currentDepth !== null) {
                    return ++currentDepth;
                }
            }

            if (current.data < value && current.right) {
                let currentDepth = findNode(current.right);
                if (currentDepth !== null) {
                    return ++currentDepth;
                }
            }

            if (current.data == value) {
                return 0;
            }
            return null;
        };

        return findNode(this.root);
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
