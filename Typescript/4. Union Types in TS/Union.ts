let score: number = 33; // i want number any time

let MyScore: number | string = 33; // number and string as well

MyScore = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  Username: string;
  id: number;
};

let Avi: User | Admin = { name: "avi", id: 12 };

Avi = { Username: "hi", id: 12 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDbId(3);
getDbId("3");

//arrays

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
//! it can be all number or all string
const data3 : string[] | number[] = ["1", "2", "3"]

//! u can use number and string as well
const data4 : (string | number)[] = ["1", "2", 3]

//! this is a literal type assignment
let pi :3.24 = 3.24
 