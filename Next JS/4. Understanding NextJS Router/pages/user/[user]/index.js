import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser = () => ({ user: { name: "Avishkar" }, loading: false });

function Page() {
  const router = useRouter();
  const user = useUser();

  console.log("Router", router);

  useEffect(() => {
    if (user.user == null) {
      router.replace("/");
    }
  }, [router, user.user]);

  return (
    <div>
      <h1>This is a index page for {router.query.user}</h1>
      <button
        onClick={(e) =>
          router.push({
            pathname: "/user/[user]/setting",
            query: { user: router.query.user },
          })
        }
      >
        Open Setting Page
      </button>
      <div>
        <button onClick={(e) => router.replace("/")}>Go TO Home Page</button>
        <button onClick={(e) => router.reload()}>Reload</button>
      </div>
    </div>
  );
}

export default Page;
