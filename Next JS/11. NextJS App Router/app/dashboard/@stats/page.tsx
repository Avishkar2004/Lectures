const waitFor = (sec: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 2000));

const StatsPage = async () => {
  await waitFor(6);
  return (
    <div>
      <h2>Stats Page</h2>
    </div>
  );
};

export default StatsPage;
