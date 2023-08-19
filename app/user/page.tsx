export async function UserList() {
    const userList = await fetch("/api/auth/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
      })
      console.log(`userList`,userList)
      return (<>
        <h1>User List</h1>
        {/* {userList.map(user => (<p>user.name</p>))} */}
        </>)
}
