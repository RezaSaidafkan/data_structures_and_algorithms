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

    describe('remove', () => {
        it('should throw if the heapTree is empty', () => {
            // Arrange
            const heapTree = new HeapTree()

            // Act & Assert
            expect(() => heapTree.remove('some value')).toThrowError(EMPTY_DATASTRUCTURE_MESSAGE)
        })

        it('should return true and make heap empty if it matches in a single node heap tree', () => {
            // Arrange
            const heapTree = new HeapTree()
            heapTree.insert(1);

            // Act & Assert
            expect(heapTree.remove(1)).toBeTruthy()
            expect(heapTree).toEqual(expect.arrayContaining([]))
        })

        it('should return true and order the heap tree properly if it matches in a multiple node tree: CASE 1', () => {
            // Arrange
            const heapTree = new HeapTree();
            // 1, 3, 2, 5, 4, 7, 6
            heapTree.insert(1);
            heapTree.insert(3);
            heapTree.insert(2);
            heapTree.insert(5);
            heapTree.insert(4);
            heapTree.insert(7);
            heapTree.insert(6);

            // Act & Assert
            // 1, 3, 6, 5, 4, 7
            expect(heapTree.remove(2)).toBeTruthy()
            expect(heapTree).toEqual(expect.objectContaining(
                {
                    'heapArray': [
                        expect.objectContaining({value: 1}),
                        expect.objectContaining({value: 3}),
                        expect.objectContaining({value: 6}),
                        expect.objectContaining({value: 5}),
                        expect.objectContaining({value: 4}),
                        expect.objectContaining({value: 7}),                        
                    ]
                }
                ))
        })
        
        it('should return true and order the heap tree properly if it matches in a multiple node tree: CASE 2', () => {
            // Arrange
            const heapTree = new HeapTree();
            // 1, 6, 2, 7, 8, 3
            heapTree.insert(1);
            heapTree.insert(6);
            heapTree.insert(2);
            heapTree.insert(7);
            heapTree.insert(8);
            heapTree.insert(3);

            // Act & Assert
            // 1, 6, 2, 3, 8
            // 1, 3, 2, 6, 8
            
            expect(heapTree.remove(7)).toBeTruthy()
            expect(heapTree).toEqual(expect.objectContaining(
                {
                    'heapArray': [
                        expect.objectContaining({value: 1}),
                        expect.objectContaining({value: 3}),
                        expect.objectContaining({value: 2}),
                        expect.objectContaining({value: 6}),
                        expect.objectContaining({value: 8}),
                    ]
                }
                ))
        })

        it('should return true and handle removing the last element', () => {
            const heapTree = new HeapTree();
            heapTree.insert(1)
            heapTree.insert(2)
            heapTree.insert(3)

            // initial internal array should be [1,2,3]
            expect(heapTree.remove(3)).toBeTruthy()
            expect(heapTree).toEqual(expect.objectContaining(
                {'heapArray': [
                    expect.objectContaining({value: 1}),
                    expect.objectContaining({value: 2}),
                ]}
            ))
        })

        it('should throw ELEMENT_NOT_FOUND_MESSAGE when removing a non-existent value', () => {
            const heapTree = new HeapTree();
            heapTree.insert(1)
            heapTree.insert(2)

            expect(() => heapTree.remove(999)).toThrow(ELEMENT_NOT_FOUND_MESSAGE)
        })

    })
})