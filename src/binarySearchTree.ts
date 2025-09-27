import {
  DataStructure,
  NodeInterface,
  EMPTY_DATASTRUCTURE_MESSAGE,
  ELEMENT_NOT_FOUND_MESSAGE,
} from "./dataStructureInterface";

interface BinaryNode<T> extends NodeInterface<T> {
  leftNode: BinaryNode<T> | null;
  rightNode: BinaryNode<T> | null;
}

// export class BinarySearchTree<T> implements DataStructure<T> {
export class BinarySearchTree<T> {
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

  public search(valueToSearch: T): NodeInterface<T> {
    if (!this.root) {
      throw new Error(EMPTY_DATASTRUCTURE_MESSAGE);
    }

    let current: BinaryNode<T> | null = this.root;

    while (current) {
      if (current.value === valueToSearch) {
        return current;
      } else if (current.value >= valueToSearch) {
        current = current.leftNode;
      } else if (current.value < valueToSearch) {
        current = current.rightNode;
      }
    }
    throw new Error(ELEMENT_NOT_FOUND_MESSAGE);
  }

  public remove(valueToRemove: T): boolean {
    // case 1: tree is empty
    if (!this.root) {
      throw new Error(EMPTY_DATASTRUCTURE_MESSAGE);
    }

    let current: BinaryNode<T> | null = this.root;
    let ancestor: BinaryNode<T> = this.root;
    while (current) {
      if (current.value === valueToRemove) {
        if (current === this.root && !current.leftNode && !current.rightNode) {
          // case 2: match in a single node tree
          this.root = null;
          break;
        } else if (!current.leftNode && !current.rightNode) {
          // case 3: if match is a leaf node in a multiple node tree
          if (ancestor.leftNode === current) {
            ancestor.leftNode = null;
          } else {
            ancestor.rightNode = null;
          }
          break;
        } else if (current === this.root) {
          // case 4: if match is the root node in a multiple node tree
          this.leftTrimBranches(current);
          if (current.rightNode) {
            this.root = current.rightNode;
          } else {
            this.root = current.leftNode;
          }
          break;
        } else {
          // case 5: match is between root and leaf nodes
          this.leftTrimBranches(current);
          if (current.value < ancestor.value) {
            // case 4.1: match is the left node of the ancestor
            // attach subtree to the left node of the ancestoer
            ancestor.leftNode = current.rightNode;
          } else {
            // case 4.2: match is the right node of the ancestor
            // attach subtree to the right node of the ancestoer
            ancestor.rightNode = current.rightNode;
          }
        }
        return true;
      } else if (current.value <= valueToRemove) {
        ancestor = current;
        current = current.rightNode;
      } else if (current.value > valueToRemove) {
        ancestor = current;
        current = current.leftNode;
      }
    }
    return false;
  }

  private leftTrimBranches(node: BinaryNode<T>): void {
    if (node.leftNode && node.rightNode) {
      let current = node.rightNode;
      let leftMostLeaf = current;
      // the left most leaf in right branch
      while (current.leftNode) {
        current = current.leftNode;
      }
      leftMostLeaf = current;

      // assign left branch to the left most leaf
      leftMostLeaf.leftNode = node.leftNode;

      // trim the left branch
      node.leftNode = null;
    }
  }
}

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(16);
// binarySearchTree.insert(17);
// binarySearchTree.insert(13);
// binarySearchTree.insert(14);
// binarySearchTree.insert(11);
// binarySearchTree.insert(12);
// binarySearchTree.insert(10);
// binarySearchTree.insert(15);

// // Act
// binarySearchTree.remove(13);
