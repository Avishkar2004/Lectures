const waitFor = (sec: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 2000));

const UserPage = async () => {
  await waitFor(2);
  return (
    <div>
      <h1>User page</h1>
    </div>
  );
};

export default UserPage;
