import React from 'react';
import { NavLink } from 'react-router-dom';
import { HandPlatter, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
const SideBar = () => {
  return (
    <div className=" h-screen  p-4 bg-gray-300 col-span-3  overflow-auto sticky left-0 top-0">
      <aside>
        <ul className="flex flex-col justify-center ">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              cn(
                'bg-gray-500 text-white p-3 my-1 rounded  hover:text-white transition-all flex items-center  gap-2',
                {
                  'bg-primary': isActive,
                },
              )
            }
          >
            <LayoutDashboard className="h-6 w-6 shrink-0"></LayoutDashboard>
            <span className=" truncate">Dashboard</span>
          </NavLink>
          <NavLink
            to="/admin/add-service"
            className={({ isActive }) =>
              cn(
                'bg-gray-500 text-white p-3 my-1 rounded  hover:text-white transition-all flex items-center  gap-2',
                {
                  'bg-primary': isActive,
                },
              )
            }
          >
            <HandPlatter className="h-6 w-6 shrink-0"></HandPlatter>
            <span className=" truncate">Add service</span>
          </NavLink>
          <NavLink
            to="/admin/serviceList"
            className={({ isActive }) =>
              cn(
                'bg-gray-500 text-white p-3 my-1 rounded  hover:text-white transition-all flex items-center  gap-2',
                {
                  'bg-primary': isActive,
                },
              )
            }
          >
            <HandPlatter className="h-6 w-6 shrink-0"></HandPlatter>
            <span className=" truncate">Service List</span>
          </NavLink>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
