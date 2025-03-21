// CODE ORIGIN:
// https://github.com/MarkBind/markbind/blob/ea7cf57e067f0880d470265fad2fae8a0d3eaa24/packages/core/src/plugins/default/markbind-plugin-tree.ts

/**
 * Creates tree-like visualisations.
 * Transforms the content in <tree> tags into corresponding textual representations
 * that are easier to visualise the relationships.
 * A common use case is folder structures visualisations.
 */
import has from 'lodash/has';

const _ = { has };

const TOKEN = {
  child: '├── ',
  lastChild: '└── ',
  connector: '│   ',
  space: '    ',
  newLine: '\n',
};

export class TreeNode {
  content: string;
  parent: TreeNode | null;
  children: TreeNode[];
  level: number;

  constructor(content: string, parent: TreeNode | null, children: TreeNode[], level: number) {
    this.content = content;
    this.parent = parent;
    this.children = children;
    this.level = level;
  }

  /**
   * Returns true if this node is the last child of its parent.
   * A root node is considered to be the last child.
   * This is used to determine the correct connector to use.
   */
  isLastChild(): boolean {
    if (this.parent === null) {
      return true;
    }
    return this.parent.children[this.parent.children.length - 1] === this;
  }

  /**
   * Returns the token to append before the content.
   */
  getPositionalToken(): string {
    return this.isLastChild() ? TOKEN.lastChild : TOKEN.child;
  }

  /**
   * Determines the level of a line.
   * Every 2 spaces from the start of the line means 1 level.
   * The root node is level 0.
   */
  static levelize(line: string): number {
    const lineMatch = line.match(/^\s*/) ?? [''];
    return Math.floor(lineMatch[0].length / 2);
  }

  /**
   * Returns formatted TreeNode content.
   * Removes dashes (-), asterisks (*), or plus signs (+) at the beginning of the line
   */
  static getContent(raw: string): string {
    return raw.trim().replace(/^[-+*]\s/, '');
  }

  /**
   * Creates TreeNode objects from the raw text.
   * @param raw - The raw text to parse.
   * @return The dummy root node of the tree.
   */
  static parse(raw: string): TreeNode {
    const lines = raw.split(TOKEN.newLine).filter(line => line.trim() !== '');
    const rootNode = new TreeNode('.', null, [], -1); // dummy root node
    const prevParentStack = [rootNode];
    let prevLevel = rootNode.level;
    let prevParent = rootNode;
    let prevNode = rootNode;
    lines
      .forEach((line) => {
        const level = TreeNode.levelize(line);
        const content = TreeNode.getContent(line);

        if (level > prevLevel) {
          prevParentStack.push(prevNode);
          prevParent = prevNode;
        } else if (level < prevLevel) {
          for (let i = 0; i < prevLevel - level; i += 1) {
            prevParentStack.pop();
          }
          prevParent = prevParentStack[prevParentStack.length - 1];
        }

        const newNode = new TreeNode(content, prevParent, [], level);
        prevParent.children.push(newNode);
        prevLevel = level;
        prevNode = newNode;
      });
    return rootNode;
  }

  /**
   * Traverses the tree and appends the tokens to the given array.
   * @param currNode - The node to traverse.
   * @param result - The array to append the tokens to.
   */
  static traverse(currNode: TreeNode, result: string[]) {
    if (!currNode.children) {
      return;
    }
    if (currNode.parent === null) {
      result.push(`${currNode.content}${TOKEN.newLine}`);
    } else {
      const tokens = [
        TOKEN.newLine,
        currNode.content,
        currNode.getPositionalToken(),
      ];

      // computes the strings appended to the content of the TreeNode
      let curr: TreeNode | null = currNode.parent;
      while (curr && _.has(curr, 'parent.parent')) {
        tokens.push(curr.isLastChild() ? TOKEN.space : TOKEN.connector);
        curr = curr.parent;
      }

      result.push(tokens.reverse().join(''));
    }
    currNode.children.forEach((child: TreeNode) => {
      TreeNode.traverse(child, result);
    });
  }

  /**
   * Returns the TreeNode as a string.
   * This assumes that the node is a root node.
   */
  toString(): string {
    const treeTokens: string[] = [];
    TreeNode.traverse(this, treeTokens);
    return treeTokens.join('');
  }

  /**
   * Returns the rendered tree.
   * @param raw - The raw text to parse.
   */
  static visualize(raw: string): string {
    const dummyRootNode = TreeNode.parse(raw);
    console.log(dummyRootNode);
    const final = dummyRootNode.children
      .reduce((prev, curr) => {
        curr.parent = null;
        return prev + curr.toString();
      }, '');
    console.log(final);
    return final;
  }
}