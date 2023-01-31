type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface Test {
  a: string;
  b: number;
}

// 涉及的知识点
// mapped类型 使用in关键字取出一个类型的key
// indexed
// keyof 将一个对象类型的key变成union类型
