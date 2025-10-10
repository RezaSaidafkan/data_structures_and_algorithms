import {describe, it, expect} from 'vitest';
import { HeapTree, HeapNode } from './heap';
import {EMPTY_DATASTRUCTURE_MESSAGE, ELEMENT_NOT_FOUND_MESSAGE} from './dataStructureInterface'


describe('head', () => {
    describe('insert', () => {
        it('should insert new values in order, swapping a node with its direct parent', () => {
            // Arrange
            const heapTree = new HeapTree();

            // Act
            heapTree.insert(1)
            heapTree.insert(4)
            heapTree.insert(3)
            heapTree.insert(2)
            heapTree.insert(5)

            // Assert
            expect(heapTree).toEqual(expect.objectContaining(
                {'heapArray': [
                    expect.objectContaining({value: 1}),
                    expect.objectContaining({value: 2}),
                    expect.objectContaining({value: 3}),
                    expect.objectContaining({value: 4}),
                    expect.objectContaining({value: 5}),
                    ]
                })
            )
        })

        it('should insert new values in order, swapping a node with all its parent', () => {
            // Arrange
            const heapTree = new HeapTree();

            // Act
            heapTree.insert(4)
            heapTree.insert(2)
            heapTree.insert(3)
            heapTree.insert(1)
            heapTree.insert(5)
            
            // Assert
            expect(heapTree).toEqual(expect.objectContaining(
                {'heapArray': [
                    expect.objectContaining({value: 1}),
                    expect.objectContaining({value: 2}),
                    expect.objectContaining({value: 3}),
                    expect.objectContaining({value: 4}),
                    expect.objectContaining({value: 5}),
                    ]
                })
            )
        })
    })

    describe('search', () => {
        it('should throw if the heapTree is empty', () => {
            // Arrange
            const heapTree = new HeapTree();

            // Act & Assert
            expect(() => heapTree.search('some value')).toThrow(EMPTY_DATASTRUCTURE_MESSAGE)
        })

        it('should return the matching HeapNode in a single node array', () => {
            // Arrange
            const heapTree = new HeapTree();
            heapTree.insert(1);

            // Act & Assert
            expect(heapTree.search(1)).toEqual(expect.objectContaining(
                {value: 1}
            ))
        })
        
        it('should return the matching HeapNode in a multiple node array', () => {
            // Arrange
            const heapTree = new HeapTree();
            heapTree.insert(1);
            heapTree.insert(5);
            heapTree.insert(4);
            heapTree.insert(3);
            heapTree.insert(2);
            

            // Act & Assert
            expect(heapTree.search(5)).toEqual(expect.objectContaining(
                {value: 5}
            ))
        })
    })
})