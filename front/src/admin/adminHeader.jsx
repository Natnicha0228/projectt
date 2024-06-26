import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHeader({ user, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <div className="navbar bg-yellow-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/add">Homepage</a></li>
            <li><a href="พอร์ตโฟลิโอ">Portfolio</a></li>
            <li><a href="เกี่ยวกับ">About</a></li>
          </ul>
        </div>
      </div>
      <div className="flex-1 d-flex">
        <a className="btn btn-ghost text-xl">สวัสดี {user.firstName}</a>
      </div>
      <div>
        <li>
          <button onClick={handleLogoutClick} style={{ fontWeight: 'bold', cursor: 'pointer' }}>ออกจากระบบ</button>
        </li>
      </div>
    </div>
  );
}

export default AdminHeader;