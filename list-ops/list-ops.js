export class List {
  constructor(arr) {
    this.values = arr || [];
  }

  append(newList) {
    return new List([...this.values, ...newList.values]);
  }
  
  concat(lists) {
    let newList = this;
    for (let i = 0; i < lists.values.length; i++) {
      newList = newList.append(lists.values[i]);
    }
    return newList;
  }

  filter(condition) {
    let newList = [];
    for (let i = 0; i < this.values.length; i++) {
      if (condition(this.values[i])) {
        newList.push(this.values[i]);
      }
    }
    return new List(newList);
  }

  length() {
    return this.values.length;
  }

  map(condition) {
    let newList = [];
    for (let i = 0; i < this.values.length; i++) {
      let val = condition(this.values[i]);
      newList.push(val);
    }
    return new List(newList);
  }

  foldl(func, init) {
    let val = init;
    for (let i = 0; i < this.values.length; i++) {
      val = func(val, this.values[i]);
    }
    return val;
  }

  foldr(func, init) {
    let val = init;
    for (let i = 0; i < this.values.length; i++) {
      val = func(val, this.values[this.values.length - i - 1]);
    }
    return val;
  }

  reverse() {
    let newList = [];
    for (let i = 0; i < this.values.length; i++) {
      newList.push(this.values[this.values.length - i - 1]);
    }
    return new List(newList);
  }

}
