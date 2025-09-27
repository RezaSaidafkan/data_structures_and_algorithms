export const EMPTY_DATASTRUCTURE_MESSAGE = "Data dtructure is empty";
export const ELEMENT_NOT_FOUND_MESSAGE =
  "Element not found in the data structure";

export interface NodeInterface<T> {
  value: T;
}

export interface DataStructure<T> {
  insert(newValue: T): void;
  search(valueToSearch: T): NodeInterface<T>;
  remove(valueToRemove: T): boolean;
  traverse(): NodeInterface<T>;
  reverseTraverse(): NodeInterface<T>;
}
