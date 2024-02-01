import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 relative gap-3">
      <SideBar />

      <div className="bg-gray-100 col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
