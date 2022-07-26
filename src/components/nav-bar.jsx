// SFC -> stateless functional component
const NavBar = ({ amount }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid justify-content-start'>
        <b className='navbar-brand'>Counters</b>
        <span className='badge badge-lg bg-success'>{amount || 0}</span>
      </div>
    </nav>
  );
};

export default NavBar;
