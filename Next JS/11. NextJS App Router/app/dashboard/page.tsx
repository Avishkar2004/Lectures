const DashboardPage = () => {
  async function sayHello(params: any) {
    "use server";
    console.log(params);
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <form action={sayHello}>
        <input type="email" name="email" /> <button>Submit</button>
      </form>{" "}
    </div>
  );
};

export default DashboardPage;
