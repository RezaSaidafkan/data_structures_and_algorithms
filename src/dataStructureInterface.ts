export interface NodeInterface<T> {
  value: T;
}

export interface DataStructure<T> {
  insert(newValue: T): void;
  search(valueToSearch: T): NodeInterface<T>;
}
