class Tree {
    constructor(data) {
        this.data = data;
        this.children = [];

    }
    addNode(data) {
        const node = new Tree(data);
        this.children.push(node);
    }
    search(searchNode) {
        let contains = false;
        if (this.data === searchNode) return true;
        for (let i = 0; i < this.children.length; i++) {
            if (this.search(searchNode)) {
                contains = true;
            }
        }
        return contains;
    }
}


const tree = new Tree('greeting');
tree.addNode('English');
tree.addNode('Chinese');
tree.children[0].addNode('sup');
tree.children[0].addNode('hey');
tree.children[0].addNode('hello');
tree.children[1].addNode('ni hao');
tree.children[1].addNode('zao an');

console.log(tree.search('zao an'));
