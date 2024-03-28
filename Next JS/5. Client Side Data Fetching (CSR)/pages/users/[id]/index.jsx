import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const userInfoPage = () => {
    const [userInfo, setUserInfo] = useState()
    const router = useRouter();
    console.log(userInfo)

    useEffect(() => {
        const id = router.query.id
        async function getUserById(id) {
            const data = await fetch(`https://dummyjson.com/users/${id}`)
            setUserInfo(await data.json())
        }
        getUserById(id)
    }, [router.query.id]);

    return (
        <div>
            <h2>{userInfo?.firstName}</h2>
            <h2>{userInfo?.lastName}</h2>
            <h2>{userInfo?.email}</h2>
        </div>
    )
}

export default userInfoPage;