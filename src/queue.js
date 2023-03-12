/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    // Check to see if this list is empty
    if (this.first === null) this.first = newNode;
    if (this.last !== null) this.last.next = newNode;

    this.last = newNode;

    this.size++;

    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      console.error('The Queue is empty');
    } else {
      const value = this.first.val;
      const nextInLine = this.first.next;
      this.first = nextInLine;
      this.size--;
      return value;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) {
      console.log('THE QUEUE is EMPTY');
    } else {
      const value = this.first.val;
      return value;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
