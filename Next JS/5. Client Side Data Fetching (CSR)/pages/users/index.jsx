import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const userPage = () => {


    const { data, error, } = useSWR("https://dummyjson.com/users", fetcher)
    console.log(data)
    if (error) {
        return <h1>Error happened</h1>
    }

    if (!data) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>User</h1>
            {data.users &&
                data.users &&
                data.users.map(user =>
                    <Link href={`/users/${user.id}`} key={user.id}>
                        <div style={{ padding: 5, justifyContent: "center" }}>{user.firstName}</div></Link>
                )
            }

        </div>
    )
}


export default userPage;