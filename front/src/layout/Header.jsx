import React from 'react';
import useAuth from '../hooks/useAuth';
import AdminHeader from '../admin/adminHeader';
import UserHeader from "../ีuser/UserHeader"; 
import GuestHeader from '../Guest/GuestHeader';

function Header() {
  const { user, logout } = useAuth();

  const handleLogoutClick = () => {
    logout(); 
  };

  if (user?.role === 'ADMIN') {
    return <AdminHeader user={user} handleLogoutClick={handleLogoutClick} />;
  } else if (user?.id) {
    return <UserHeader user={user} handleLogoutClick={handleLogoutClick} />;
  } else {
    return <GuestHeader />;
  }
}

export default Header;
