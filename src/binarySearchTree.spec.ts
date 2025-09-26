import { describe, it, expect } from "vitest";
import { BinarySearchTree } from "./binarySearchTree";
import { EMPTY_LIST_MESSAGE } from "./dataStructureInterface";

describe("BinarySearchTree", () => {
  describe("insert", () => {
    it("should insert a root node if the tree is empty", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();

      // Act
      binarySearchTree.insert(10);

      // Assert
      expect(binarySearchTree).toEqual(
        expect.objectContaining({
          root: expect.objectContaining({
            value: 10,
            leftNode: null,
            rightNode: null,
          }),
        })
      );
    });

    it("should insert node to the left of the root node in a single node tree, when value is lower", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(20);

      // Act
      binarySearchTree.insert(10);

      // Assert
      expect(binarySearchTree).toEqual(
        expect.objectContaining({
          root: expect.objectContaining({
            value: 20,
            rightNode: null,
            leftNode: expect.objectContaining({
              leftNode: null,
              rightNode: null,
              value: 10,
            }),
          }),
        })
      );
    });

    it("should insert node to the right of the root node in a single node tree, when value is higher", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(20);

      // Act
      binarySearchTree.insert(30);

      // Assert
      expect(binarySearchTree).toEqual(
        expect.objectContaining({
          root: expect.objectContaining({
            value: 20,
            leftNode: null,
            rightNode: expect.objectContaining({
              leftNode: null,
              rightNode: null,
              value: 30,
            }),
          }),
        })
      );
    });

    it("should insert node to the correct leafs of a multiple node tree, when value is lower", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(20);
      binarySearchTree.insert(10);
      binarySearchTree.insert(30);

      // Act
      binarySearchTree.insert(0);
      binarySearchTree.insert(25);

      // Assert
      expect(binarySearchTree).toEqual(
        expect.objectContaining({
          root: expect.objectContaining({
            value: 20,
            rightNode: expect.objectContaining({
              leftNode: expect.objectContaining({
                leftNode: null,
                rightNode: null,
                value: 25,
              }),
              rightNode: null,
              value: 30,
            }),
            leftNode: expect.objectContaining({
              leftNode: expect.objectContaining({
                leftNode: null,
                rightNode: null,
                value: 0,
              }),
              rightNode: null,
              value: 10,
            }),
          }),
        })
      );
    });
  });
});
