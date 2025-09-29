import { describe, it, expect } from "vitest";
import { BinarySearchTree } from "./binarySearchTree";
import {
  EMPTY_DATASTRUCTURE_MESSAGE,
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
        EMPTY_DATASTRUCTURE_MESSAGE
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

  describe("delete", () => {
    it("should throw if the tree is empty", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();

      // Act & Assert
      expect(() => binarySearchTree.remove("some value")).toThrowError(
        EMPTY_DATASTRUCTURE_MESSAGE
      );
    });

    it("should remove matched node which in a single node tree", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(16);

      // Act
      binarySearchTree.remove(16);

      // Assert
      expect(binarySearchTree).toEqual(expect.objectContaining({ root: null }));
    });

    it("should remove a leaf matched node in a multiple node tree which was a left node", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(16);
      binarySearchTree.insert(17);
      binarySearchTree.insert(13);
      binarySearchTree.insert(14);
      binarySearchTree.insert(11);
      binarySearchTree.insert(12);
      binarySearchTree.insert(10);
      binarySearchTree.insert(15);

      // Act
      binarySearchTree.remove(10);

      // // Assert
      expect(binarySearchTree).toEqual(
        expect.objectContaining({
          root: expect.objectContaining({
            value: 16,
            leftNode: expect.objectContaining({
              value: 13,
              rightNode: expect.objectContaining({
                value: 14,
                leftNode: null,
                rightNode: expect.objectContaining({
                  value: 15,
                  leftNode: null,
                  rightNode: null,
                }),
              }),
              leftNode: expect.objectContaining({
                value: 11,
                leftNode: null,
                rightNode: expect.objectContaining({
                  value: 12,
                  leftNode: null,
                  rightNode: null,
                }),
              }),
            }),
            rightNode: expect.objectContaining({
              value: 17,
              leftNode: null,
              rightNode: null,
            }),
          }),
        })
      );
    });

    it("should remove a leaf matched node in a multiple node tree which was a right node", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(16);
      binarySearchTree.insert(17);
      binarySearchTree.insert(13);
      binarySearchTree.insert(14);
      binarySearchTree.insert(11);
      binarySearchTree.insert(12);
      binarySearchTree.insert(10);
      binarySearchTree.insert(15);

      // Act
      binarySearchTree.remove(12);

      // // Assert
      expect(binarySearchTree).toEqual(
        expect.objectContaining({
          root: expect.objectContaining({
            value: 16,
            leftNode: expect.objectContaining({
              value: 13,
              rightNode: expect.objectContaining({
                value: 14,
                leftNode: null,
                rightNode: expect.objectContaining({
                  value: 15,
                  leftNode: null,
                  rightNode: null,
                }),
              }),
              leftNode: expect.objectContaining({
                value: 11,
                rightNode: null,
                leftNode: expect.objectContaining({
                  value: 10,
                  leftNode: null,
                  rightNode: null,
                }),
              }),
            }),
            rightNode: expect.objectContaining({
              value: 17,
              leftNode: null,
              rightNode: null,
            }),
          }),
        })
      );
    });

    it("should remove a matched middle node in a multiple node tree which was a left node", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(16);
      binarySearchTree.insert(17);
      binarySearchTree.insert(13);
      binarySearchTree.insert(14);
      binarySearchTree.insert(11);
      binarySearchTree.insert(12);
      binarySearchTree.insert(10);
      binarySearchTree.insert(15);

      // Act
      binarySearchTree.remove(11);

      // // Assert
      expect(binarySearchTree).toEqual(
        expect.objectContaining({
          root: expect.objectContaining({
            value: 16,
            leftNode: expect.objectContaining({
              value: 13,
              leftNode: expect.objectContaining({
                value: 12,
                leftNode: expect.objectContaining({
                  value: 10,
                  leftNode: null,
                  rightNode: null,
                }),
              }),
              rightNode: expect.objectContaining({
                value: 14,
                rightNode: expect.objectContaining({
                  value: 15,
                  leftNode: null,
                  rightNode: null,
                }),
                leftNode: null,
              }),
            }),
            rightNode: expect.objectContaining({
              value: 17,
              leftNode: null,
              rightNode: null,
            }),
          }),
        })
      );
    });

    it("should remove a matched middle node in a multiple node tree which was a right node", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(16);
      binarySearchTree.insert(17);
      binarySearchTree.insert(13);
      binarySearchTree.insert(14);
      binarySearchTree.insert(11);
      binarySearchTree.insert(12);
      binarySearchTree.insert(10);
      binarySearchTree.insert(15);

      // Act
      binarySearchTree.remove(14);

      // // Assert
      expect(binarySearchTree).toEqual(
        expect.objectContaining({
          root: expect.objectContaining({
            value: 16,
            leftNode: expect.objectContaining({
              value: 13,
              rightNode: expect.objectContaining({
                value: 15,
                leftNode: null,
                rightNode: null,
              }),
              leftNode: expect.objectContaining({
                value: 11,
                leftNode: expect.objectContaining({
                  value: 10,
                  leftNode: null,
                  rightNode: null,
                }),
                rightNode: expect.objectContaining({
                  value: 12,
                  leftNode: null,
                  rightNode: null,
                }),
              }),
            }),
            rightNode: expect.objectContaining({
              value: 17,
              leftNode: null,
              rightNode: null,
            }),
          }),
        })
      );
    });
  });

  describe("preOrderTraverse", () => {
    it("should throw when tree is empty", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();

      // Act & Assert
      const gen = binarySearchTree.preOrderTraverse();
      expect(() => gen.next()).toThrowError(EMPTY_DATASTRUCTURE_MESSAGE);
    });

    it("should yield the root in a single node tree", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(1);

      // Act
      const gen = binarySearchTree.preOrderTraverse();

      // Assert
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 1 }));
    });

    it("should visit through nodes from left branches", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(16);
      binarySearchTree.insert(17);
      binarySearchTree.insert(13);
      binarySearchTree.insert(14);
      binarySearchTree.insert(11);
      binarySearchTree.insert(12);
      binarySearchTree.insert(9);
      binarySearchTree.insert(10);
      binarySearchTree.insert(15);

      // Act & Assert
      const gen = binarySearchTree.preOrderTraverse();
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 16 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 13 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 11 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 9 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 10 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 12 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 14 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 15 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 17 }));
    });
  });

  describe("postOrderTraverse", () => {
    it("should throw when tree is empty", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();

      // Act & Assert
      const gen = binarySearchTree.postOrderTraverse();
      expect(() => gen.next()).toThrowError(EMPTY_DATASTRUCTURE_MESSAGE);
    });

    it("should yield the root in a single node tree", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(1);

      // Act
      const gen = binarySearchTree.postOrderTraverse();

      // Assert
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 1 }));
    });

    it("should visit through nodes from left branches", () => {
      // Arrange
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.insert(16);
      binarySearchTree.insert(17);
      binarySearchTree.insert(13);
      binarySearchTree.insert(14);
      binarySearchTree.insert(11);
      binarySearchTree.insert(12);
      binarySearchTree.insert(9);
      binarySearchTree.insert(10);
      binarySearchTree.insert(15);

      // Act & Assert
      const gen = binarySearchTree.postOrderTraverse();
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 10 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 9 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 12 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 11 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 15 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 14 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 13 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 17 }));
      expect(gen.next().value).toEqual(expect.objectContaining({ value: 16 }));
    });
  });
});
