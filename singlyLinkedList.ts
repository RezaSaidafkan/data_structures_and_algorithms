// Pre: value to insert
// Post: value inserted at the end of the list

type LinkedNode = {
  value: any;
  next: LinkedNode | null;
};

class SinglyLinkedList {
  constructor(
    protected head: LinkedNode | null = null,
    protected tail: LinkedNode | null = null
  ) {}

  public insert(newValue: any) {
    const newNode = { value: newValue } as unknown as LinkedNode;
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = current.next;
    }
  }

  public remove(valueToRemove: any) {
    if (!this.head) {
      throw Error("Singly Linked List is empty");
    }
    let current: LinkedNode | null = this.head;
    let preCurrent: LinkedNode | null = this.head;
    while (current && preCurrent) {
      if (current.value === valueToRemove) {
        // if value matches the head
        if (current === this.head) {
          this.head = current.next;
          // if match was the only node
          if (current === this.tail) {
            this.tail = null;
          }
          return true;
        }
        // if match was the tail
        if (current === this.tail) {
          this.tail = preCurrent;
        }
        // if value is after head
        preCurrent.next = current.next;
        return true;
      }
      preCurrent = current;
      current = current.next;
    }
    return false;
  }

  public printList(): void {
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
      console.log("Singly Linked List is empty");
    }
    console.log(output);
  }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.insert(10);
singlyLinkedList.insert(20);
singlyLinkedList.insert(30);
singlyLinkedList.insert(40);

singlyLinkedList.printList();
console.log("removing 20");
singlyLinkedList.remove(20);
singlyLinkedList.printList();
console.log("removing 10");
singlyLinkedList.remove(10);
singlyLinkedList.printList();
console.log("removing 30");
singlyLinkedList.remove(30);
singlyLinkedList.printList();
console.log("removing 20 which doesn't exist");
singlyLinkedList.remove(20);
singlyLinkedList.printList();
console.log("removing 40");
singlyLinkedList.remove(40);
singlyLinkedList.printList();
