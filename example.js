class LinkedListNode {
  constructor(data) {
    this.#data = data; // Sets data to a private value
    this.#next = null; // Another instance of LinkedListNode - a singular child
    // this.#children = [];  // For tree structures, an array of children
    // this.#left, this.#right = null;   // Binary trees
  }

  add(node) {
    // is there a next property?
    // no, this node can be our next
    this.#next = node;
    // yes, delegate to the current "next" node
    this.#next.add(node);
  }
}
