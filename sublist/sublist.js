export class List {
    constructor(args) {
        this.args = args || [];   
    }

    compare(list) {
        let result = [];
        let sub = false;
        let sup = false;
        let eq = false;
        let str = '';

        if (this.args.length > list.args.length) {
            sup = true;
            for (let i of list.args) {
                str+=i;
                if (this.args.includes(i)) {
                    result.push(true);
                } else {
                    result.push(false);
                }
            }
        } else if (this.args.length < list.args.length) {
            sub = true;
            for (let i of this.args) {
                str+=i;
                if (list.args.includes(i)) {
                    result.push(true);
                } else {
                    result.push(false);
                }
            }
        } else {
            for (let i of this.args) {
                if (this.args.indexOf(i) === list.args.indexOf(i)) {
                    eq = true;
                } else {
                    eq = false;
                }
            }
        }
        
        if ((this.args.length === 0 && list.args.length === 0) || (!result.includes(false) && eq)) {
            return "EQUAL";
        } else if ((this.args.length === 0 && list.args.length > 0) || (!result.includes(false) && sub && list.args.join("").includes(str))) {
            return "SUBLIST";
        } else if ((this.args.length > 0 && list.args.length === 0) || (!result.includes(false) && sup && this.args.join("").includes(str))) {
            return "SUPERLIST";
        } else {
            return "UNEQUAL";
        }
    }
}
