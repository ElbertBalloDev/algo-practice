class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push = value => {
    this.storage[this.count] = value;
    this.count++;
  };

  pop = () => {
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  size = () => this.count; 

  peek = () => this.storage[this.count - 1];
};

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log("peek", newStack.peek());
console.log("pop", newStack.pop());
console.log("peek", newStack.peek());
console.log("size", newStack.size());
