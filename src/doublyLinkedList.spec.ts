import { describe, it, expect } from "vitest";
import { DoublyLinkedList } from "./doublyLinkedList";
import { EMPTY_DATASTRUCTURE_MESSAGE } from "./dataStructureInterface";

describe("doublyLinkedList", () => {
  describe("insert", () => {
    it("should create an empty list", () => {
      // Arrange
      const doublyLinkedList = new DoublyLinkedList();

      // Act & Assert
      expect(doublyLinkedList).toEqual(
        expect.objectContaining({
          head: null,
          tail: null,
        })
      );
    });

    it("should add node as head & tail to an empty link", () => {
      // Arrange
      const doublyLinkedList = new DoublyLinkedList();

      // Act & Assert
      doublyLinkedList.insert(10);
      expect(doublyLinkedList).toEqual(
        expect.objectContaining({
          head: expect.objectContaining({ value: 10 }),
          tail: expect.objectContaining({ value: 10 }),
        })
      );
    });

    it("should append node to an already populated linked list", () => {
      // Arrange
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.insert(10);
      doublyLinkedList.insert(20);
      doublyLinkedList.insert(30);

      // Act & Assert
      expect(doublyLinkedList).toEqual(
        expect.objectContaining({
          head: expect.objectContaining({ value: 10 }),
          tail: expect.objectContaining({ value: 30 }),
        })
      );
    });
  });

  describe("search", () => {
    it("should throw if list is empty", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();

      // Act & Assert
      expect(() => doubleLinkedList.search("some value")).toThrowError(
        EMPTY_DATASTRUCTURE_MESSAGE
      );
    });

    it("should find the correct node if searched on a single node list", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();
      doubleLinkedList.insert(10);

      // Act & Assert
      expect(doubleLinkedList.search(10)).toEqual(
        expect.objectContaining({ value: 10 })
      );

      expect(doubleLinkedList).toEqual(
        expect.objectContaining({
          head: expect.objectContaining({ value: 10 }),
          tail: expect.objectContaining({ value: 10 }),
        })
      );
    });

    it("should find the correct node in a non-singular list", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();
      doubleLinkedList.insert(10);
      doubleLinkedList.insert(20);
      doubleLinkedList.insert(30);

      // Act, Assert
      expect(doubleLinkedList.search(20)).toEqual(
        expect.objectContaining({
          value: 20,
          next: expect.objectContaining({ value: 30 }),
          prev: expect.objectContaining({ value: 10 }),
        })
      );

      expect(doubleLinkedList).toEqual(
        expect.objectContaining({
          head: doubleLinkedList.search(10),
          tail: doubleLinkedList.search(30),
        })
      );
    });
  });

  describe("remove", () => {
    it("should throw if list is empty", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();

      // Act & Assert
      expect(() => doubleLinkedList.search("some value")).toThrowError(
        EMPTY_DATASTRUCTURE_MESSAGE
      );
    });

    it("should return true and remove the head node if it matches in a single node list", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();
      doubleLinkedList.insert(10);

      // Act & Assert
      expect(doubleLinkedList.remove(10)).toBeTruthy;
      expect(doubleLinkedList).toEqual(
        expect.objectContaining({
          head: null,
          tail: null,
        })
      );
    });

    it("should return true and remove the head node if it matches in a multiple node list", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();
      doubleLinkedList.insert(10);
      doubleLinkedList.insert(20);
      doubleLinkedList.insert(30);

      // Act & Assert
      expect(doubleLinkedList.remove(10)).toBeTruthy;
      expect(doubleLinkedList).toEqual(
        expect.objectContaining({
          head: expect.objectContaining({ value: 20 }),
          tail: expect.objectContaining({ value: 30 }),
        })
      );
    });

    it("should return true and remove the tail node if it matches in a multiple node list", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();
      doubleLinkedList.insert(10);
      doubleLinkedList.insert(20);
      doubleLinkedList.insert(30);

      // Act & Assert
      expect(doubleLinkedList.remove(30)).toBeTruthy;
      expect(doubleLinkedList).toEqual(
        expect.objectContaining({
          head: expect.objectContaining({ value: 10 }),
          tail: expect.objectContaining({ value: 20 }),
        })
      );
    });

    it("should return true and remove a middle node if it matches in a multiple node list", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();
      doubleLinkedList.insert(10);
      doubleLinkedList.insert(20);
      doubleLinkedList.insert(30);

      // Act & Assert
      expect(doubleLinkedList.remove(20)).toBeTruthy;
      expect(doubleLinkedList).toEqual(
        expect.objectContaining({
          head: expect.objectContaining({ value: 10 }),
          tail: expect.objectContaining({ value: 30 }),
        })
      );
    });
  });

  describe("traverse", () => {
    it("should throw if the list is empty", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();

      // Act & Assert
      expect(() => doubleLinkedList.traverse()).toThrowError(
        EMPTY_DATASTRUCTURE_MESSAGE
      );
    });

    it("should successfully reach to tail node when list is not empty", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();
      doubleLinkedList.insert(10);
      doubleLinkedList.insert(20);
      doubleLinkedList.insert(30);

      // Act & Assert
      expect(doubleLinkedList.traverse()).toEqual(
        expect.objectContaining({ value: 30 })
      );
    });
  });

  describe("reverserTraverse", () => {
    it("should throw if the list is empty", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();

      // Act & Assert
      expect(() => doubleLinkedList.reverseTraverse()).toThrowError(
        EMPTY_DATASTRUCTURE_MESSAGE
      );
    });

    it("should successfully reach to head node when list is not empty", () => {
      // Arrange
      const doubleLinkedList = new DoublyLinkedList();
      doubleLinkedList.insert(10);
      doubleLinkedList.insert(20);
      doubleLinkedList.insert(30);

      // Act & Assert
      expect(doubleLinkedList.reverseTraverse()).toEqual(
        expect.objectContaining({ value: 10 })
      );
    });
  });
});
