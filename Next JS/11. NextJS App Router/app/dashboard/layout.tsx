const DashboardLayout = (props: any) => {
  return (
    <div>
      <nav>
        <h3>Navbar</h3>
      </nav>
      <div>{props.children}</div>
      <div>{props.user}</div>
      <div>{props.stats}</div>
    </div>
  );
};

export default DashboardLayout;
