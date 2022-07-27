import User from "./user";
import { Component } from "react";

class Users extends Component {
  state = {
    loading: true,
    users: [],
  };

  handleEdit = (selectedUser) => {
    const users = [...this.state.users];
    const idx = users.findIndex((user) => user === selectedUser);
    const user = users[idx];
    user.name = "Arslonbek Alimbayev";
    user.email = "ars@domain.com";
    user.phone = "+998 99 896 13 48";
    user.website = "epicreact.dev";
    user.city = "Tashkent";
    this.setState({ users });
  };

  handleDelete = (selectedUser) => {
    const users = this.state.users.filter((user) => user !== selectedUser);
    this.setState({ users });
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setTimeout(() => {
      const users = data.map(
        ({ id, name, email, address: { city }, phone, website }) => ({
          id,
          name,
          email,
          city,
          website,
          phone,
        })
      );

      this.setState({ loading: false, users });
    }, 1000);
  }

  render() {
    const { users, loading } = this.state;

    if (loading)
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}>
          <h1>Loading...</h1>
        </div>
      );

    return (
      <div className='container'>
        <h1>Users list</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>city</th>
              <th>website</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user.id}
                user={user}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
