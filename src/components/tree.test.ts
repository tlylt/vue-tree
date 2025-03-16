import { describe, it, expect } from 'vitest';
import { TreeNode } from './tree';

describe('TreeNode', () => {
    it('should correctly parse a simple tree structure', () => {
        const raw = `
            - root
                - child1
                - child2
                    - grandchild1
                    - grandchild2
        `;
        const tree = TreeNode.parse(raw);
        expect(tree.children.length).toBe(1);
        expect(tree.children[0].content).toBe('root');
        expect(tree.children[0].children.length).toBe(2);
        expect(tree.children[0].children[0].content).toBe('child1');
        expect(tree.children[0].children[1].content).toBe('child2');
        expect(tree.children[0].children[1].children.length).toBe(2);
        expect(tree.children[0].children[1].children[0].content).toBe('grandchild1');
        expect(tree.children[0].children[1].children[1].content).toBe('grandchild2');
    });

    it('should correctly visualize a simple tree structure', () => {
        const raw = `
            - root
                - child1
                - child2
                    - grandchild1
                    - grandchild2
        `;
        const expected = `
root
├── child1
└── child2
    ├── grandchild1
    └── grandchild2
`;
        const result = TreeNode.visualize(raw);
        expect(result.trim()).toBe(expected.trim());
    });

    it('should correctly identify the last child', () => {
        const raw = `
            - root
                - child1
                - child2
        `;
        const tree = TreeNode.parse(raw);
        const root = tree.children[0];
        expect(root.children[0].isLastChild()).toBe(false);
        expect(root.children[1].isLastChild()).toBe(true);
    });

    it('should correctly levelize lines', () => {
        expect(TreeNode.levelize('  - level1')).toBe(1);
        expect(TreeNode.levelize('    - level2')).toBe(2);
        expect(TreeNode.levelize('      - level3')).toBe(3);
    });

    it('should correctly get content from raw lines', () => {
        expect(TreeNode.getContent('  - content')).toBe('content');
        expect(TreeNode.getContent('  * content')).toBe('content');
        expect(TreeNode.getContent('  + content')).toBe('content');
    });
});