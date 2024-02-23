const User = {
  name: "avi",
  email: "avi@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "avi", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 322 };
}
