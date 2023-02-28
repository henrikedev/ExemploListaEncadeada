class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

class LinkedList {
  // construtor ...

  // adiciona um elemento ao final da lista
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // adiciona um elemento no início da lista
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // remove o primeiro elemento da lista
  removeFirst() {
    if (!this.head) {
      return null;
    }
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
    }
    this.length--;
    return removedNode;
  }

  // remove o último elemento da lista
  removeLast() {
    if (!this.tail) {
      return null;
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      previousNode.next = null;
      this.tail = previousNode;
    }
    this.length--;
    return currentNode;
  }

  // busca um elemento na lista pelo valor
  find(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}
const linkedList = new LinkedList();

// adiciona elementos
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);

// remove elementos
linkedList.removeFirst();
linkedList.removeLast();

// busca elementos
console.log(linkedList.find(2)); // Node { value: 2, next: Node { value: 3, next: null } }
console.log(linkedList.find(4)); // null
