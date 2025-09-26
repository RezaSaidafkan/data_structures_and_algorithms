import { describe, it, expect } from "vitest";
import { BinarySearchTree } from "./binarySearchTree";
import {
  EMPTY_LIST_MESSAGE,
  ELEMENT_NOT_FOUND_MESSAGE,
} from "./dataStructureInterface";

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

  describe("search", () => {
    it("should throw error if the tree is empty", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();

      // Act & Assert
      expect(() => binarySearchTree.search(10)).toThrowError(
        EMPTY_LIST_MESSAGE
      );
    });

    it("should find the proper node in various cases", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(20);
      binarySearchTree.insert(10);
      binarySearchTree.insert(30);
      binarySearchTree.insert(25);
      binarySearchTree.insert(0);

      // Act & Assert
      expect(binarySearchTree.search(20)).toEqual(
        expect.objectContaining({
          value: 20,
          leftNode: expect.objectContaining({
            value: 10,
          }),
          rightNode: expect.objectContaining({
            value: 30,
          }),
        })
      );

      expect(binarySearchTree.search(10)).toEqual(
        expect.objectContaining({
          value: 10,
          leftNode: expect.objectContaining({
            value: 0,
          }),
          rightNode: null,
        })
      );

      expect(binarySearchTree.search(30)).toEqual(
        expect.objectContaining({
          value: 30,
          leftNode: expect.objectContaining({
            value: 25,
          }),
          rightNode: null,
        })
      );

      // able to find leaf nodes

      expect(binarySearchTree.search(0)).toEqual(
        expect.objectContaining({
          value: 0,
          leftNode: null,
          rightNode: null,
        })
      );

      expect(binarySearchTree.search(25)).toEqual(
        expect.objectContaining({
          value: 25,
          leftNode: null,
          rightNode: null,
        })
      );
    });
  });
});
