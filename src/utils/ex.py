class Node:
    def __init__(self,data):
        self.data = data
        self.ref = None
class Circular_Linked_List:
    def __init__(self):
        self.head = None
    def add(self,data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.ref = self.head
        else:
            n = self.head
            while n.ref != self.head:
                n = n.ref
            n.ref = new_node
            new_node.ref = self.head
            self.head = new_node
    def delete_at_begin(self):
        if self.head == None:
            print("Linked list is empty")
        elif self.head.ref == self.head:
            self.head = None
        else:
            n = self.head
            while n.ref != self.head:
                n = n.ref
            n.ref = self.head.ref
            self.head = self.head.ref
    def delete_at_end(self):
        if self.head is None:
            print("Linked List is empty")
        elif self.head.ref == self.head:
            self.head = None
        else:
            n = self.head
            while n.ref.ref != self.head:
                n = n.ref
            n.ref = self.head
    def delete_by_value(self):
        x = int(input("Enter the value to be deleted: "))
        if self.head is None:
            print("Linked List is empty")
        elif self.head.ref == self.head:
            if self.head.data == x:
                self.head = None
                print("after deleting",x,"the linked list is empty")
            else:
                print(x,"is not present in the linked list")
        else:
            if self.head.data == x:
                n = self.head
                while n.ref != self.head:
                    n = n.ref
                n.ref = self.head.ref
                self.head = self.head.ref
                return
            n = self.head
            while n.ref.ref != self.head:
                if n.ref.data == x:
                    break
                n = n.ref
            if n.ref.ref != self.head:
                n.ref = n.ref.ref
            else:
                if n.ref.data == x:
                    n.ref = self.head
                else:
                    print(x,"is not present in the Linked List")
    def delete_after_node(self):
        x = int(input("Enter the data value of the node for which the after node should be deleted: "))
        if self.head == None:
            print("Linkd list is empty")
        elif self.head.ref == self.head:
            if self.head.data == x:
                print("There is no node after",x)
            else:
                print(x,"is not present in the Linked list")
        else:
            if self.head.data == x:
                self.head.ref = self.head.ref.ref
                return
            n = self.head
            while n.ref.ref != self.head:
                if n.ref.data == x:
                    break
                n = n.ref
            if n.ref.ref != self.head:
                n.ref.ref = n.ref.ref.ref
            else:
                if n.ref.data == x:
                    print("There is no node after",x)
                else:
                    print(x,"is not present in the Linked List")
    def delete_before_node(self):
        x = int(input("Enter the data value of the node for which the before node should be deleted: "))
        if self.head == None:
            print("Linked List is empty")
        elif self.head.ref == self.head:
            if self.head.data == x:
                print("There is no node before",x) 
            else:
                print(x,"is not present in the Linked List")
        elif self.head.ref.ref == self.head:
            if self.head.ref.data == x:
                self.head.ref.ref = self.head.ref
                self.head = self.head.ref
            else:
                print(x,"is not present in the Linked List")
        else:
            if self.head.data == x:
                print("There is no node before",x)
                return
            n = self.head
            while n.ref.ref.ref != self.head:
                if n.ref.ref.data == x:
                    break
                n = n.ref
            if n.ref.ref != self.head:
                n.ref = n.ref.ref
            else:
                if n.ref.ref.data == x:
                    n.ref = n.ref.ref
                else:
                    print(x,"is not present in the Linked List")
                    
    def Traversig(self):
        n = self.head
        if self.head.ref == self.head:
            print(self.head.data)
        else:
            while n.ref != self.head:
                print(n.data)
                n = n.ref
            print(n.data)        
        
cl = Circular_Linked_List()
cl.add(10)
cl.add(20)
cl.add(30)
cl.add(40)
cl.add(50)
cl.add(60)
print("Traversing before deletion")
cl.Traversig()
cl.delete_at_begin()
print("Traversing after deleting first node")
cl.delete_at_end()
print("Traversing after deleting second node")
cl.delete_by_value()
# cl.delete_after_node()
# cl.delete_before_node()
print("Traversing after deletion")
cl.Traversig()
