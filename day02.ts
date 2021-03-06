interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Dog {
  fly: boolean;
  run: () => {};
}
//类型断言的方式进行类型保护
function trainAnial(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).run();
  }
}

//in 语法进行类型保护
function trainAnial2(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.run();
  }
}

//typeof 语法进行类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  } else {
    return first + second;
  }
}

//instanceof 语法做类型保护
class NumberObj {
  constructor(public count: number) {}
}

function add2(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
}
