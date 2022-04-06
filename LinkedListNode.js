class LinkedListNode {
  #value = "";
  #next = null; // next will be our single "child" node

  constructor(value) {
    this.#value = value; // value is the value we want to store
  }

  add(node) {
    // if the current "next" is null, set "next" to the incoming node
    if (!this.#next) {
      this.#next = node;
    } else {
      // otherwise, pass it to the existing "next" node's add method
      this.#next.add(node);
    }
  }

  getList() {
    // create a string that displays the value of each node
    // if there is no "next," display the current value;
    if (!this.#next) return this.#value;
    // otherwise, concatenate the value of the next node
    return `${this.#value} ${this.#next.getList()}`;
  }

  remove(node) {
    // pass in a node object
    // if "node" refers to the current node, set the next of the caller to this.next
    if (this === node) {
      return;
    }
  }
}

const root = new LinkedListNode("A");
const nodeB = new LinkedListNode("B");
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode("C");
const nodeD = new LinkedListNode("D");
const nodeE = new LinkedListNode("E");
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
