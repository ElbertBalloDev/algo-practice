class Queue {
  constructor() {
    this.collection = [];
  }

  print = () => console.log(this.collection);
  enqueue = (element) => this.collection.push(element);
  dequeue = () => this.collection.shift();
  front = () => this.collection[0];
  size = () => this.collection.length;
  isEmpty = () => this.collection.length === 0;
}

const q = new Queue(); 
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();