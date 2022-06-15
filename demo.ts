// interface Item {
//   name: string;
// }

// /*
// 类中泛型
// T继承Item 所以需要有所有item的属性  否则会报错

// */
// class DataManager<T extends Item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// // const data = new DataManager([1, 2, 3]);
// const data = new DataManager([{ name: "1" }, { name: "2" }, { name: "3" }]);
// data.getItem(0);



class DataManager<T extends number|string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

interface Test {
  name:string
}

const data = new DataManager<string>([]);