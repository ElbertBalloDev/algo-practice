class MySet {
  constructor() {
    this.collection = [];
  }

  has = (element) => this.collection.indexOf(element) !== -1;

  values = () => this.collection;

  add = (element) => {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };

  remove = (element) => {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  size = () => this.collection.length;

  union = (otherSet) => {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  };

  intersection = (otherSet) => {
    const intersectionSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  difference = (otherSet) => {
    const differenceSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        this.differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  subset = (otherSet) => {
    const firstSet = this.values();
    return firstSet.every((values) => {
      return otherSet.has(values);
    });
  };
}

const setA = new MySet();
const setB = new MySet();
setA.add("a");
setB.add("a");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

const setC = new Set();
const setD = new Set();
setA.add("a");
setB.add("a");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));