const UserPage = (props) => {

    return (
        <div>
            <h4>Static Site Generation - SSG</h4>
            {props.data.users.map(user => <li key={user.id}>{user.firstName}</li>)}

        </div>
    );
};


export const getServerSideProps = async () => {
    const data = await (await fetch("https://dummyjson.com/users")).json()
    return {
        props: {
            data
        }
    };
}

export default UserPage;

