class User {
  //! setter
  private _CourseCount = 1;

  readonly city = "pune";
  constructor(public email: string, private name: string) {}


  //! private method
  private deleteToken() {
    console.log("Token deleted");
  }

  //! getter
  get AppleEmail(): string {
    return `Apple ${this.email}`;
  }

  //! getter
  get CourseCount(): number {
    return this._CourseCount;
  }

  //! setter with any type
  set CourseCount(CourseNum)  {
    if(CourseNum <= 1 ){
        throw new Error( 'At least one course is required.' );
    }
    this._CourseCount = CourseNum
  }
}

