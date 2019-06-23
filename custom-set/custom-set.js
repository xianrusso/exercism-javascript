export class CustomSet {
  constructor(args) {
    this.args = args || [];
  }

  get size() {
    return this.args.length;
  }

  empty() {
    return this.size === 0;
  }

  contains(item) {
    return this.args.includes(item);
  }

  add(item) {
    if (!this.contains(item)) this.args.push(item);
    return this;
  }

  subset(set) {
    return this.args.every(i => set.contains(i));
  }

  disjoint(set) {
    return !this.args.some(x => set.args.includes(x));
  }

  eql(set) {
    return this.subset(set) && this.size === set.size;
  }

  union(set) {
    const result = new CustomSet(this.args);
    set.args.forEach(e => result.add(e));
    return result;
  }

  intersection(set) {
    return new CustomSet(this.args.filter(e => set.contains(e)));
  }

  difference(set) {
    return new CustomSet(this.args.filter(e => !set.contains(e)));
  }
}
