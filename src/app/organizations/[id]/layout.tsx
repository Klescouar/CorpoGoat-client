import React from 'react';
import {
  IconDeviceGamepad,
  IconLogout,
  IconUser,
  IconChartHistogram,
} from '@tabler/icons-react';
import { UserButton } from '@/app/components/UserButton/UserButton';
import { NavLink } from '@/app/components/NavLink/NavLink';

const data = [
  { link: '/games', label: 'Games', icon: IconDeviceGamepad },
  { link: '/users', label: 'Users', icon: IconUser },
  { link: '/championship', label: 'Championship', icon: IconChartHistogram },
];

export default function Navbar() {
  return (
    <nav className="h-full w-[300px] p-5 flex flex-col border-r border-gray-300 dark:border-dark-4 bg-slate-800">
      <div className="flex-grow">
        <UserButton />
        <div className="mt-5">
          {data.map((item) => (
            <NavLink key={item.link} link={item.link} label={item.label}>
              <item.icon
                className="text-gray-6 dark:text-dark-2 mr-3 w-6 h-6"
                stroke={1.5}
              />
            </NavLink>
          ))}
        </div>
      </div>

      <div>
        <NavLink link="/api/auth/logout" label="Logout">
          <IconLogout
            stroke={1.5}
            className="text-gray-6 dark:text-dark-2 mr-3 w-6 h-6"
          />
        </NavLink>
      </div>
    </nav>
  );
}
