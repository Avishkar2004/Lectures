// class User {
//   // automatically marked in type script is public
//   public email: string;
//   private name: string; // #name: string
//   //you can not bcoz it's private , it is only accesible only in class
//   readonly city: string = "Jaipur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const avishkar = new User("avi@gmail.com", "avi");

class User {
  readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string,
    private UserId: string
  ) {}
}


const avi = new User("a@k.com", "hitesh")