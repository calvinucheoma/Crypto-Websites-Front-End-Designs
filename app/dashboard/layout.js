'use client';
import { Lato } from 'next/font/google';
import '../globals.css';
import Sidebar from '../components/layout/Sidebar';
import { useRouter } from 'next/navigation';
import useCurrentUser from '../hooks/useCurrentUser';
import { useEffect } from 'react';
import useSidebarModal from '../hooks/useSidebarModal';
import { GiHamburgerMenu } from 'react-icons/gi';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const { currentUser } = useCurrentUser();

  const { isSidebarOpen, openSidebar } = useSidebarModal();

  // Prevent scrolling when the sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  // console.log(currentUser);

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser, router]);

  if (!currentUser) {
    //add loading spinner?
    return (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className={`${lato.className} bodyContainer md:flex`}>
      {/* Hamburger icon for small screens */}
      <div className="md:hidden sticky top-0 z-30 p-4 bg-slate-50 flex items-center gap-2 shadow-2xl">
        <button onClick={openSidebar} className="cursor-pointer">
          <GiHamburgerMenu size={24} />
        </button>
        <p className="text-lg max-sm:text-base font-semibold">Open Sidebar</p>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:flex md:transform-none transition-transform duration-300 ease-in-out bg-white md:bg-transparent w-4/5 md:w-[300px]`}
      >
        <Sidebar />
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" />
      )}

      {/* Main Content */}
      <div className="w-full max-md:min-h-[calc(100vh-56px)] md:w-[calc(100vw-300px)] bg-gray-200">
        {children}
      </div>
    </div>
  );
}
