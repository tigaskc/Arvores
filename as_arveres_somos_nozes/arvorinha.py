
class node:
    
    def __init__(self, v):
        self.right = None
        self.left = None
        self.v = v
    
    def add(self, v):
        if v<self.v:
            if self.left is None:
                self.left = node(v)
            else:
                self.left.add(v)
        else:
            if self.right is None:
                self.right = node(v)
            else:
                self.right.add(v)



arvore = node(5)
arvore.add(2)
arvore.add(1)
arvore.add(3)
arvore.add(6)
arvore.add(-1)
arvore.add(9)

print(arvore.left.v)
    