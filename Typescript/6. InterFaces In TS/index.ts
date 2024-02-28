// // interface

// interface User {
//   readonly dbId: number;
//   email: string;
//   userId: number;
//   googleId?: string;
//   //   startTrial: () => string ; another way to doing this
//   //startTrial is method
//   startTrial(): string;
//   getCoupon(couponName: string, value: number): number;
// }

// const avi: User = {
//   dbId: 1,
//   email: "avi@gmail.com",
//   userId: 1,
//   startTrial: () => {
//     return "trail started";
//   },
//   getCoupon: (name: "avishkar2004", off: 10) => {
//     return 10;
//   },
// };

// avi.email = "jyo@gmail.com";



//

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string ; another way to doing this
  //startTrial is method
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const avi: Admin = {
  dbId: 1,
  role: "admin",
  email: "avi@gmail.com",
  userId: 1,
  githubToken: "github",
  startTrial: () => {
    return "trail started";
  },
  getCoupon: (name: "avishkar2004", off: 10) => {
    return 10;
  },
};

avi.email = "jyo@gmail.com";
