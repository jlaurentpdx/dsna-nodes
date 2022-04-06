class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (!this.left) this.left = node;
    else if (!this.right) this.right = node;
    else if (!this.left.left && !this.left.right) this.left.add(node);
    else this.right.add(node);
  }

  findPerson(name) {
    // if name matches the value in this node, return this value
    // else, check right tree for name
    // else, check left tree for name
    // if the name cannot be found, return null

    if (this.value === name) return this.value;
    else if (this.left) return this.left.findPerson(name);
    else if (this.right) return this.right.findPerson(name);
    else return null;
  }
}

const tree = new PersonTreeNode({ name: "Alchemy" });
const human0 = new PersonTreeNode({ name: "Marty N." });
const human1 = new PersonTreeNode({ name: "Dan M." });
const human2 = new PersonTreeNode({ name: "Julie N." });
const human3 = new PersonTreeNode({ name: "Dani C." });
const human4 = new PersonTreeNode({ name: "Megan N." });

tree.add(human0);
tree.add(human1);
tree.add(human2);
tree.add(human3);
tree.add(human4);
console.log(tree);
console.log(tree.findPerson("Marty N."));
console.log(tree.findPerson("Dan M."));
console.log(tree.findPerson("Dani C."));
console.log(tree.findPerson("Mark Z."));
