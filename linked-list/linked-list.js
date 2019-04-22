export class LinkedList {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}
	
	count() {
		return this.size;
	}

	push(value) {
		const newElem = new Element(value);
		if (!this.head) this.head = newElem;
		if (!!this.tail) {
			const penult = this.tail;
			penult.next = newElem;
			newElem.prev = penult;
		}
		this.tail = newElem;
		this.size++;
	}

	pop() {
		const elemToPop = this.tail;
		const penult = elemToPop.prev;
		if (!!penult) {
			this.tail = penult;
			this.tail.next = null;
		} else {
			this.head = null;
			this.tail = null;
		}
		this.size--;
		return elemToPop.value;
	}

	shift() {
		const elemToShift = this.head;
		const sec = elemToShift.next;
		if (!!sec) {
			this.head = sec;
			this.head.prev = null;
		} else {
			this.head = null;
			this.tail = null;
		}
		this.size--;
		return elemToShift.value;
	}

	unshift(value) {
		const newElem = new Element(value);
		if (!this.tail) this.tail = newElem;
		if (!!this.head) {
			const begin = this.head;
			begin.prev = newElem;
			newElem.next = begin;
		}
		this.head = newElem;
		this.size++
	}

	delete(val) {
		let elem = this.head;

		for (let i = 0; i < this.size; i++) {
			if (elem.value === val) {
				if (elem.prev) {
					elem.prev.next = elem.next;
				}
				if (!elem.prev) {
					this.head = elem.next;			
				}
				if (elem.next) {
					elem.next.prev = elem.prev;
				}
				if (!elem.next) {
					this.tail = elem.prev;
				}
				this.size--;
			}
			elem = elem.next;
		}
	}
}

class Element {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
};
