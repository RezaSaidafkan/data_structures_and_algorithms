// Pre: value to insert
// Post: value inserted at the end of the list

import {
  DataStructure,
  NodeInterface,
  EMPTY_LIST_MESSAGE,
  ELEMENT_NOT_FOUND_MESSAGE,
} from "./dataStructureInterface";

interface LinkedNode<T> extends NodeInterface<T> {
  value: T;
  next: LinkedNode<T> | null;
}

export class SinglyLinkedList<T> implements DataStructure<T> {
  constructor(
    protected head: LinkedNode<T> | null = null,
    protected tail: LinkedNode<T> | null = null
  ) {}

  public insert(newValue: T): void {
    const newNode = { value: newValue, next: null } as LinkedNode<T>;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  public remove(valueToRemove: T): boolean {
    if (!this.head) {
      throw new Error(EMPTY_LIST_MESSAGE);
    }

    if (this.head.value === valueToRemove) {
      if (this.head === this.tail) {
        // Check if same node, not same value
        this.head = null;
        this.tail = null;
        return true;
      } else {
        this.head = this.head.next;
        return true;
      }
    }
    let current: LinkedNode<T> | null = this.head;
    while (current.next) {
      // if value matches the head & tail
      if (current.next.value === valueToRemove) {
        if (current.next === this.tail) {
          this.tail = current;
          this.tail.next = null;
        } else {
          current.next = current.next.next; // Remove the node
        }
        return true;
      }
      current = current.next;
    }
    throw new Error(ELEMENT_NOT_FOUND_MESSAGE);
  }

  public search(valueToFind: T): LinkedNode<T> {
    if (!this.head) {
      throw new Error(EMPTY_LIST_MESSAGE);
    }
    let current: LinkedNode<T> | null = this.head; // in case currrent is a tail, current.next would be null
    while (current) {
      if (current.value === valueToFind) {
        return current;
      }
      current = current.next;
    }
    throw new Error(ELEMENT_NOT_FOUND_MESSAGE);
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

  public reverseTraverse(): NodeInterface<T> {
    if (!this.head) {
      throw new Error(EMPTY_LIST_MESSAGE);
    }

    let current = this.head;
    let currentTail = this.tail;

    while (currentTail !== this.head) {
      if (current.next === currentTail) {
        currentTail = current;
        current = this.head;
      }
    }
    return current;
  }

  public printList(): string {
    let output = "";
    let current = this.head;
    while (current) {
      if (current === this.tail) {
        output = output + `${current.value}`;
      } else {
        output = output + `${current.value}->`;
      }
      current = current.next;
    }
    if (!output) {
      return EMPTY_LIST_MESSAGE;
    }
    return output;
  }
}

// const singlyLinkedList = new SinglyLinkedList();

// singlyLinkedList.insert(10);
// singlyLinkedList.insert(20);
// singlyLinkedList.insert(30);
// singlyLinkedList.insert(40);

// singlyLinkedList.printList();
// console.log("removing 20");
// singlyLinkedList.remove(20);
// singlyLinkedList.printList();
// console.log("removing 10");
// singlyLinkedList.remove(10);
// singlyLinkedList.printList();
// console.log("removing 30");
// singlyLinkedList.remove(30);
// singlyLinkedList.printList();
// console.log("removing 20 which doesn't exist");
// singlyLinkedList.remove(20);
// singlyLinkedList.printList();
// console.log("removing 40");
// singlyLinkedList.remove(40);
// singlyLinkedList.printList();
