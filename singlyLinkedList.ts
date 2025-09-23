// Pre: value to insert
// Post: value inserted at the end of the list

type LinkedNode = {
  value: any;
  next: LinkedNode | null;
};

class SinglyLinkedList {
  constructor(protected head: LinkedNode | null) {}

  public insert(newValue: any) {
    const newNode = { value: newValue } as unknown as LinkedNode;
    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }

  public printList(): void {
    let tail = this.head;
    while (tail) {
      console.log(tail.value);
      tail = tail.next;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList(null);

singlyLinkedList.insert(10);
singlyLinkedList.insert(20);

singlyLinkedList.printList();
