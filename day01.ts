const flag: boolean = true;
const number: number = 1;
const str: string = "hello";

enum Color {
  RED,
  PINK,
  BLUE,
}

const pink: Color = Color.PINK;
console.log(pink); // 1

const flag1: number[] = [1, 2, 3];
const flag2: Array<number> = [1, 2, 3];

const flag3: [string, number] = ["hello", 1]; //元组（ Tuple ）表示一个已知数量和类型的数组

const sym1 = Symbol("hello");
const sym2 = Symbol("hello");
console.log(Symbol("hello") === Symbol("hello"));

let u: undefined = undefined;
let n: null = null;

let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error

function hello(name: string): void {} //void 表示没有任何类型 当一个函数没有返回值时 TS 会认为它的返回值是 void 类型。
function neverReach(): never {
  throw new Error("an error");
} //never 一般表示用户无法达到的类型


let objectCase: object;
objectCase = 1; // error
objectCase = "a"; // error
objectCase = true; // error
objectCase = null; // error
objectCase = undefined; // error
objectCase = {}; // ok

let ObjectCase: Object;
ObjectCase = 1; // ok
ObjectCase = "a"; // ok
ObjectCase = true; // ok
ObjectCase = null; // error
ObjectCase = undefined; // error
ObjectCase = {}; // ok
