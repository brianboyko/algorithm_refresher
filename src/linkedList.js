export class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor(rootData) {
    this.head = new LLNode(rootData);
    this.tail = this.head;
  }
  createNode(data) {
    return new LLNode(data);
  }
  push(data) {
    const node = new LLNode(data);
    this.tail.next = node;
    this.tail = node;
  }
  insertAfter(node, newNode) {
    newNode.next = node.next;
    node.next = newNode;
  }
  deleteAfter(node) {
    node.next = node.next.next;
  }
  searchList(value, key) {
    let node = this.head;
    let comp = key ? node.data[key] : node.data;
    while (node !== null && comp !== value) {
      node = node.next;
      comp = key ? node.data[key] : node.data;
    }
    return node;
  }
  testForCyclicity() {
    let rabbit = this.head;
    let tortoise = this.head;
    let count = 0;
    while (rabbit !== null) {
      count += 1;
      if (count % 2 === 0) {
        tortoise = tortoise.next;
      }
      rabbit = rabbit.next;
      if (rabbit === tortoise) {
        return true;
      }
    }
    return false;
  }
  exportToArray() {
    if (this.testForCyclicity()) {
      throw new Error("Cannot export cyclicial List");
    }
    let arr = [];
    let node = this.head;
    while (node !== null) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}

export default LinkedList;
