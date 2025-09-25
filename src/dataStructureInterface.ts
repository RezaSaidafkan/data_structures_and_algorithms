export const EMPTY_LIST_MESSAGE = "Singly Linked List is empty";
export const ELEMENT_NOT_FOUND_MESSAGE = "Element not found in the list";

export interface NodeInterface<T> {
  value: T;
}

export interface DataStructure<T> {
  insert(newValue: T): void;
  search(valueToSearch: T): NodeInterface<T>;
  traverse(): NodeInterface<T>;
  reverserTraverse(): NodeInterface<T>;
}
