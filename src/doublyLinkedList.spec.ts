import { describe, it, expect } from "vitest";
import { DoublyLinkedList } from "./doublyLinkedList";

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
});
