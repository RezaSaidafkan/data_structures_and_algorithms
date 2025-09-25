import {
  DataStructure,
  NodeInterface,
  EMPTY_LIST_MESSAGE,
  ELEMENT_NOT_FOUND_MESSAGE,
} from "./dataStructureInterface";

interface DoublyLinkedNode<T> extends NodeInterface<T> {
  value: T;
  next: DoublyLinkedNode<T> | null;
  prev: DoublyLinkedNode<T> | null;
}

export class DoublyLinkedList<T> implements DataStructure<T> {
  constructor(
    private head: DoublyLinkedNode<T> | null = null,
    private tail: DoublyLinkedNode<T> | null = null
  ) {}

  public insert(valueToInsert: T): void {
    const newNode = {
      value: valueToInsert,
      next: null,
      prev: null,
    } as DoublyLinkedNode<T>;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  public search(valueToSearch: T): NodeInterface<T> {
    if (!this.head) {
      throw new Error(EMPTY_LIST_MESSAGE);
    }
    let current: DoublyLinkedNode<T> | null = this.head;
    while (current) {
      if (current.value === valueToSearch) {
        return current;
      }
      current = current.next;
    }
    throw Error(ELEMENT_NOT_FOUND_MESSAGE);
  }

  public traverse(): NodeInterface<T> {
    if (!this.head) {
      throw new Error(EMPTY_LIST_MESSAGE);
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  public reverserTraverse(): NodeInterface<T> {
    if (!this.tail) {
      throw new Error(EMPTY_LIST_MESSAGE);
    }
    let current = this.tail;
    while (current.prev) {
      current = current.prev;
    }
    return current;
  }
}
