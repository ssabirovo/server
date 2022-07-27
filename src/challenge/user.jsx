const User = ({ user, onDelete, onEdit }) => {
  return (
    <tr>
      <th>{user.id}</th>
      <th>{user.name}</th>
      <th>{user.email}</th>
      <th>{user.phone}</th>
      <th>{user.city}</th>
      <th>{user.website}</th>
      <th>
        <button className='btn btn-sm btn-info' onClick={() => onEdit(user)}>
          Edit
        </button>
        <button
          className='btn btn-sm ms-2 btn-danger'
          onClick={() => onDelete(user)}>
          Delete
        </button>
      </th>
    </tr>
  );
};

export default User;
