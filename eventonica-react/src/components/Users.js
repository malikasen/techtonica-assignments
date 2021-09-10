import React, { useState, useEffect } from 'react';
import DeleteUser from './DeleteUser'

function Users() {
  const [apiResponse, setApiResponse] = useState([]);

  // console.log("apiResponse", apiResponse)
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("http://localhost:3000/users")
      .then(res => {
        return res.json()
      })
      .then(res => setApiResponse(res))
      .then(() => setUsers(apiResponse));
  };

  useEffect(() => {
    getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    console.log('users', users);
  }, []);
 
  // const marlin = { name: "Marlin", email: "marlin@gmail.com", id:"1" };
  // const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
  // const dory = { name: "Dory", email: "dory@gmail.com" , id: "3"};
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const addUser = e => {
    e.preventDefault();
    const newUser = {id: id, name: name, email: email};
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    setId('');
  };
  const deleteUser = (deleteId) => {
    const newUsers = users.filter(i=>i.id !== deleteId)
    setUsers(newUsers);
    console.log(newUsers);
  };
  return (
    <div>
      <section className="user-management">
        <h2>User Management</h2>

        <ul id="users-list">
          {/* {apiResponse} */}
          {users.map((user) => {
            return <li key={user.id}>Name: {user.name}, email: {user.email}</li>
          })}
        </ul>

        <div>
          <h3>Add User</h3>
          <form id="add-user" action="#">
            <fieldset>
              <label>Name</label>
              <input type="text" id="add-user-name" value={name}
  onChange={(e) => setName(e.target.value)} />
            </fieldset>
            <fieldset>
              <label>Email</label>
              <input type="text" id="add-user-email" value={email}
  onChange={(e) => setEmail(e.target.value)} />
            </fieldset>
            <fieldset>
              <label>ID</label>
              <input type="number" id="add-user-id" value={id}
  onChange={(e) => setId(e.target.value)} />
            </fieldset>
            <input type="submit" value="Add" onClick={addUser}/>
          </form>
        </div>
        <DeleteUser deleteUser={deleteUser} />
      </section>
    </div>
  )
}
export default Users;