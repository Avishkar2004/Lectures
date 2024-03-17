const score: Array<number> = [];

const names: Array<string> = [];

function indentitityOne(val: boolean | number): boolean | number {
  return val;
}

function indentitityTwo(val: any): any {
  return val;
}

//this is default one
function indentitityThree<Type>(val: Type): Type {
  return val;
}

// you are locking value
indentitityThree(true);

//This is shortcut
function indentitityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  types: number;
}

//this is a way you can pass on object
// indentitityFour<Bootle>({});

//! Using Type Parameters in Generic Constraints

interface Datebase {
  connetion: string;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends Datebase>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(2, {});


