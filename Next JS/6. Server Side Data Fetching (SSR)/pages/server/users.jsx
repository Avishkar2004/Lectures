const UserPage = (props) => {
    console.log(props)
    return (
        <div>
            <h4>
                Users (SSR)
                {props.data.users.map(user => <li key={user.id}>{user.firstName}</li>)}
            </h4>
        </div>
    )
}

export const getServerSideProps = async () => {
    const data = await (await fetch("https://dummyjson.com/users")).json()
    return {
        props: {
            data
        }
    };
}

export default UserPage;