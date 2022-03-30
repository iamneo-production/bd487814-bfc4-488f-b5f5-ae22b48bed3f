import React from "react"

function Usercard( ){
    return(
<Card className="input">
        <form onSubmit={addUserHandler} className="input-form">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="text" />
            <button type="submit">Add User</button>
        </form>
</Card>);
}

export default Usercard;