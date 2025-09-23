import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "./singlyLinkedList";

const EMPTY_LIST_MESSAGE = "Singly Linked List is empty";
const ELEMENT_NOT_FOUND_MESSAGE = "Element not found in the list";

describe("Singly Linked List", () => {
  it("should create an empty list", () => {
    const singlyLinkedList = new SinglyLinkedList();
    expect(singlyLinkedList).toBeDefined();
  });

  it("should insert values at the end of the list", () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.insert(10);
    singlyLinkedList.insert(20);
    singlyLinkedList.insert(30);
    expect(singlyLinkedList).toBeDefined();
  });

  it("should remove values from the list", () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.insert(10);
    singlyLinkedList.insert(20);
    singlyLinkedList.insert(30);
    expect(singlyLinkedList.remove(20)).toBe(true);
    expect(singlyLinkedList.remove(10)).toBe(true);
    expect(() => singlyLinkedList.remove(50)).toThrowError(
      ELEMENT_NOT_FOUND_MESSAGE
    ); // removing non-existing
    expect(singlyLinkedList.remove(30)).toBe(true);
    expect(() => singlyLinkedList.remove(40)).toThrowError(EMPTY_LIST_MESSAGE); // removing from an empty list
  });
});
