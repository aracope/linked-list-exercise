/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error('List is empty!');

    let current = this.head;
    if (this.length === 1) {
      const val = current.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
    while (current.next !== this.tail) {
      current = current.next;
    }
    const val = this.tail.val;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("List is empty!");
    const val = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length)
      throw new Error('Invalid index!');
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length)
      throw new Error('Invalid index!');
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length)
      throw new Error('Invalid index!');

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length)
      throw new Error('Invalid index!');

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let current = this.head;
    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
