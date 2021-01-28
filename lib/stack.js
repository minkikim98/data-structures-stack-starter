// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (this.top === null) this.top = newNode;
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
        return ++ this.length;
    }
    pop() {
        if (this.length === 0) return null;
        else if (this.length === 1) {
            const temp = this.top.value;
            this.top = null;
            this.length --;
            return temp;
        } else {
            const temp = this.top.value;
            const secondNode = this.top.next;
            this.top = secondNode;
            this.length --;
            return temp;
        }
    }
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
