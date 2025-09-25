import { DataStructure, NodeInterface } from "./dataStructureInterface";

interface DoublyLinkedNode<T> extends NodeInterface<T> {
  value: any;
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
    }
    this.tail!.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
}
