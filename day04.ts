//泛型  generic 泛指的类型

function join<T>(first: T, second: T) {
  return `${first}${second}`;
}

function map<T>(params: T[]) {
  return params;
}

function join2<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

function join3<T>(first: T, second: T): T {
  return first;
}

join<string>("1", "1");

join2<number, string>(1, "1"); //两种泛型

join2(true, 1); //自动推断

map<string>(["1", "2"]);
