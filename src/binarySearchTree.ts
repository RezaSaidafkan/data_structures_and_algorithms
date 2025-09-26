import {
  DataStructure,
  NodeInterface,
  EMPTY_LIST_MESSAGE,
  ELEMENT_NOT_FOUND_MESSAGE,
} from "./dataStructureInterface";

interface BinaryNode<T> extends NodeInterface<T> {
  leftNode: BinaryNode<T> | null;
  rightNode: BinaryNode<T> | null;
}

export class BinarySearchTree<T> implements DataStructure<T> {
  constructor(private root: BinaryNode<T> | null = null) {}

  public insert(newValue: T): void {
    const newNode = {
      value: newValue,
      leftNode: null,
      rightNode: null,
    } as BinaryNode<T>;

    if (!this.root) {
      this.root = newNode;
    } else {
      let current: BinaryNode<T> | null = this.root;
      while (current) {
        if (newValue < current.value) {
          if (current.leftNode) {
            current = current.leftNode;
          } else {
            current.leftNode = newNode;
            current = null;
          }
        } else if (newValue >= current.value) {
          if (current.rightNode) {
            current = current.rightNode;
          } else {
            current.rightNode = newNode;
            current = null;
          }
        }
      }
    }
  }
}
