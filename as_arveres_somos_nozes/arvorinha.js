class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class ramo{
    constructor() {
        this.raiz = null;
    }
    add(data){
        const node = this.raiz;
        if (node === null){
            this.raiz = new Node(data);
            return;
        } else {
            const st = function(node) {
                if (data < node.data) {
                    if (node.left === null){
                        node.left = new Node(data);
                        return;
                }}else if (node.left !== null){
                    return st(node.left);
                }
                else if (data > node.data){
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right !== null){
                        return st(node.right)
                    }
                }
            }
        }
    return st(node);
    }
}
menor(); {
    let current = this.raiz;
    while(current.left !== null){
        current = current.left;
    }
    return current.data;
}
maior() ;{
    let current = this.raiz;
    while(current.right !== null){
        current = current.right;
    }
    return current.data;
}
achar(data);{
    let current = this.raiz
    while (current.data !== data){
        if(data<current.data){
            current = current.left;
        }else{
            current = current.right
        }
    }
    if (current === null){
        return null;
    }
    return current;
}

remove(data);{
    const removenode = function(node, data){
        if(node == null){
            return null;
        }
        if (data == node.data) {
            if (node.left == null && node.right == null){
                return null;
            }
            if(node.left == null){
                return node.rigt;
            }
            if(node.rigt == null){
                return node.left
            }
            var tempnode = node.right;
            while (tempnode.left !== null){
                tempnode = tempnode.left
            }
            node.data = tempnode.data;
            node.rigt = removenode(node.left, data);
            return node;
        } else if (data < node.data) {
            node.left = removenode(node.left, data);
            return node;
        }else {
            node.rigt = removenode(node.rigt, data);
            return node;
        }
    }
    this.root = removenode(this.root, data);
}


const arvre = new ramo()
arvre.add(5)
arvre.add(3)
arvre.add(7)
arvre.add(9)
arvre.add(8)
arvre.add(2)
arvre.add(11)
arvre.add(1)
console.log(arvre.right)