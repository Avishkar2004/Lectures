// user => kuch bhi name => setting
// user/avi/setting

import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  console.log("Router", router);
  return (
    <div>
        {/* "username" bcoz that's our parent folder */}
      <h1>This is setting page for Page for {router.query.user}</h1>
    </div>
  );
};

export default Page;
