'use client';

import React from 'react';
import Link from 'next/link';
import { TablerIconsProps } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  link: string;
  label: string;
  children: React.ReactNode;
}

export function NavLink({ link, label, children }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      data-active={undefined}
      href={`${pathname}${link}`}
      key={label}
      className="flex items-center no-underline text-sm text-gray-200 p-3 rounded font-semibold hover:bg-gray-200 hover:text-black data-active:bg-blue-200 data-active:text-blue-800"
    >
      {children}
      <span>{label}</span>
    </Link>
  );
}
