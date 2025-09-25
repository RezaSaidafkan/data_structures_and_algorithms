import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "./singlyLinkedList";
import {
  EMPTY_LIST_MESSAGE,
  ELEMENT_NOT_FOUND_MESSAGE,
} from "./dataStructureInterface";

describe("Singly Linked List", () => {
  describe("insert", () => {
    it("should create an empty list", () => {
      // Arrange & Act
      const singlyLinkedList = new SinglyLinkedList();

      // Assert
      expect(singlyLinkedList).toEqual(
        expect.objectContaining({
          head: null,
          tail: null,
        })
      );
    });

    it("should insert values at the end of the list", () => {
      // Arrange & Act
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.insert(10);
      singlyLinkedList.insert(20);
      singlyLinkedList.insert(30);

      // Assert
      expect(singlyLinkedList).toEqual(
        expect.objectContaining({
          head: expect.objectContaining({ value: 10 }),
          tail: expect.objectContaining({ value: 30 }),
        })
      );
    });
  });

  describe("remove", () => {
    it("should remove values from the list", () => {
      // Arrange
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.insert(10);
      singlyLinkedList.insert(20);
      singlyLinkedList.insert(30);

      // Act & Assert
      expect(singlyLinkedList.remove(20)).toBe(true);
      expect(singlyLinkedList.remove(10)).toBe(true);

      expect(singlyLinkedList).toEqual(
        expect.objectContaining({
          head: expect.objectContaining({ value: 30 }),
          tail: expect.objectContaining({ value: 30 }),
        })
      );
      expect(() => singlyLinkedList.remove(50)).toThrowError(
        ELEMENT_NOT_FOUND_MESSAGE
      ); // removing non-existing
      expect(singlyLinkedList.remove(30)).toBe(true);
      expect(() => singlyLinkedList.remove(40)).toThrowError(
        EMPTY_LIST_MESSAGE
      ); // removing from an empty list
    });
  });

  describe("search", () => {
    it("it should find the existing node", () => {
      // Arrange
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.insert(20);
      singlyLinkedList.insert(10);

      // Act & Assert
      expect(singlyLinkedList.search(10).value).toBe(10);
      expect(singlyLinkedList.search(20).value).toBe(20);
      expect(() => singlyLinkedList.search(30)).toThrowError(
        ELEMENT_NOT_FOUND_MESSAGE
      );
    });

    it("it should throw error when searching in an empty list", () => {
      // Arrange
      const singlyLinkedList = new SinglyLinkedList();

      // Act & Assert
      expect(() => singlyLinkedList.search(10)).toThrowError(
        EMPTY_LIST_MESSAGE
      );
    });
  });

  describe("traverse", () => {
    it("it should traverse a populated linked list and return true", () => {
      // Arrange, Act & Assert
      const singlyLinkedList = new SinglyLinkedList();
      expect(singlyLinkedList.insert(10)).toBeTruthy;
      expect(singlyLinkedList.insert(20)).toBeTruthy;
    });

    it("should traverse a single node list and return true", () => {
      // Arrange, Act & Assert
      const singlyLinkedList = new SinglyLinkedList();
      expect(singlyLinkedList.insert(10)).toBeTruthy;
    });

    it("should throw if the list is empty", () => {
      // Arrange, Act & Assert
      const singlyLinkedList = new SinglyLinkedList();
      expect(() => singlyLinkedList.traverse()).toThrowError(
        EMPTY_LIST_MESSAGE
      );
    });
  });

  describe("reverseTraverse", () => {
    it("should traverse a populated list in reverse and return true", () => {
      // Arrange
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.insert(10);
      singlyLinkedList.insert(20);

      // Act & Assert
      expect(singlyLinkedList.reverseTraverse()).toBeTruthy();
    });

    it("should traverse a single node list in reverse and return true", () => {
      // Arrange
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.insert(10);

      // Act & Assert
      expect(singlyLinkedList.reverseTraverse()).toBeTruthy();
    });

    it("should throw traversing an empty single node list in reverse", () => {
      // Arrange, Act & Assert
      const singlyLinkedList = new SinglyLinkedList();

      expect(() => singlyLinkedList.reverseTraverse()).toThrowError(
        EMPTY_LIST_MESSAGE
      );
    });
  });
});
