/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    // Check to see if this list is empty
    if (this.first === null) this.first = newNode;
    if (this.last !== null) newNode.next = this.last;
    // console.log(this.last);
    // newNode.next = this.last;
    this.last = newNode;

    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      console.error('THE STACK IS EMPTY');
    } else {
      this.last = this.last.next;
      this.size--;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) {
      console.error('THE STACK IS EMPTY');
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
