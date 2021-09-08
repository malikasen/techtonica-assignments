import React, { useState } from 'react';


function DeleteUser({deleteUser}) {
  const [deleteUserId, setDeleteUserId] = useState();
  const onSubmit = (e) => {
    e.preventDefault()
    deleteUser(deleteUserId);
    setDeleteUserId('');
  }
  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#">
        <fieldset>
          <label>User ID</label>
          <input type="text" id="delete-user-id" value={deleteUserId}
  onChange={(e) => setDeleteUserId(e.target.value)}/>
        </fieldset>
        <input type="submit" onClick={onSubmit} />
        {/* <input type="submit" onClick={(e) => deleteUser(deleteUserId, e)} /> */}
      </form>
    </div>
  )
}
export default DeleteUser;