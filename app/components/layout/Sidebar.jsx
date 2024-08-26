'use client';

import useCurrentUser from '@/app/hooks/useCurrentUser';
import useSidebarModal from '@/app/hooks/useSidebarModal';
import { navLinks } from '@/app/utils/navLinks';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Listbox,
  ListboxItem,
} from '@nextui-org/react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiLogout } from 'react-icons/ci';
import { MdArrowRight } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import AddProjectModal from '../modals/AddProjectModal';

const Sidebar = () => {
  const pathname = usePathname();

  const { removeCurrentUser } = useCurrentUser();

  const { closeSidebar } = useSidebarModal();

  return (
    <nav className="flex flex-col items-center gap-8 pt-6 border bg-slate-50 w-full h-full relative">
      {/* Close Sidebar */}
      <div className="md:hidden absolute top-2 right-4 bg-red-100 cursor-pointer">
        <FaTimes color="red" size={28} onClick={closeSidebar} />
      </div>

      <h1 className="w-full text-3xl max-sm:text-2xl font-bold text-left ml-[40px] max-md:mt-6">
        COIN CONNECT
      </h1>

      <Listbox
        variant="shadow"
        color="primary"
        aria-label="Sidebar Actions"
        className="h-full"
      >
        {navLinks.map(({ title, subLinks, route, icon: Icon }) => {
          if (title === 'Integrations') {
            return (
              <ListboxItem
                key={title}
                className={clsx(
                  'mb-4 max-md:mb-8',
                  pathname.startsWith(route) && 'bg-blue-700 text-white'
                )}
                startContent={<Icon size={24} />}
                endContent={
                  pathname.startsWith(route) ? (
                    <MdArrowRight color="white" size={24} />
                  ) : null
                }
              >
                <Dropdown>
                  <DropdownTrigger>
                    <p
                      className={clsx(
                        'text-lg max-md:text-base font-semibold'
                        // pathname.startsWith(route) && 'text-white'
                      )}
                    >
                      {title}
                    </p>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Dropdown Variants"
                    color="primary"
                    variant="shadow"
                    className="p-2 w-full"
                  >
                    {subLinks.map(({ title, route }) => (
                      <DropdownItem key="code">
                        <Link href={route} onClick={closeSidebar}>
                          <p
                            className={clsx(
                              'text-lg max-md:text-base font-medium',
                              pathname === route &&
                                'bg-blue-500 text-white px-2 py-1 rounded-lg w-full'
                            )}
                          >
                            {title}
                          </p>
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </ListboxItem>
            );
          } else {
            return (
              <ListboxItem
                key={title}
                // href={route}
                startContent={<Icon size={24} />}
                endContent={
                  pathname === route ? (
                    <MdArrowRight color="white" size={24} />
                  ) : null
                }
                className={clsx(
                  'mb-4 max-md:mb-8',
                  pathname === route && 'bg-blue-700 text-white'
                )}
              >
                <Link href={route} onClick={closeSidebar}>
                  <p className="text-lg max-md:text-base font-semibold">
                    {title}
                  </p>
                </Link>
              </ListboxItem>
            );
          }
        })}

        <ListboxItem
          key="Log Out"
          startContent={<CiLogout size={24} />}
          onClick={() => {
            removeCurrentUser();
            closeSidebar();
          }}
          className="mt-12 max-md:mt-16 border-t-2 border-gray-300"
        >
          <p className="text-lg max-md:text-base font-semibold">Log Out</p>
        </ListboxItem>
      </Listbox>
    </nav>
  );
};

export default Sidebar;

{
  /* <ul className="flex flex-col gap-4 w-full">
        {navLinks.map(({ id, title, route, icon: Icon }) => {
          return (
            <li
              key={id}
              className={clsx(
                "w-full pl-[40px] py-2 text-black transition rounded-lg hover:bg-black hover:text-white",
                pathname === route && "bg-black text-white"
              )}
            >
              <Link href={route}>
                <div className="flex gap-4 items-center">
                  <Icon size={24} />
                  <p className="text-lg max-sm:text-xs font-semibold">
                    {title}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul> */
}
