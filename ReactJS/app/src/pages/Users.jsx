import { usersList } from "../constants/users"

const Users = () => {
    return <div>
        <h1>Users</h1>
        {
            usersList.map((user) => {
                return <div key={user.id} className="bg-primary text-light m-2 p-2">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.website}</p>
                </div>
            })
        }
    </div>
}

export default Users;