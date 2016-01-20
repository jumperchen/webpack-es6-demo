export class Integer {
    constructor(n) {
        this.n = n;
    }
    toString() {
        return `[${this.n}]`;
    }
    equals(other) {
        return other instanceof Integer ? other.n === this.n : other === this.n;
    }
}
