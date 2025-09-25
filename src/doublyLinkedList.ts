type DoublyLinkedNode = {
  value: any;
  next: DoublyLinkedNode | null;
  prev: DoublyLinkedNode | null;
};

export class DoublyLinkedList {
  constructor(
    private head: DoublyLinkedNode | null = null,
    private tail: DoublyLinkedNode | null = null
  ) {}

  public insert<T>(valueToInsert: T): void {
    const newNode = {
      value: valueToInsert,
      next: null,
      prev: null,
    } as DoublyLinkedNode;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail!.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
}
