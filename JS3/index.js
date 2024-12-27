class rectangle{
    #h;
    #w;
    constructor(h,w){
        this.#h = h;
        this.#w = w;
    }

    get h(){
        return this.#h;
    }

    get w(){
        return this.#w;
    }

    get area(){
        return this.calcArea();
    }

    calcArea(){
        return this.#h * this.#w;
    }
}

const obj = new rectangle(10,20);
// console.log(obj.#h); error private field
console.log(obj.h);
console.log(obj.area);
console.log(obj.calcArea());