import { AlignJustify, LogOut } from 'lucide-react';
import React from 'react';

const AdminHeader = ({setOpen}) => {
  return (
    <div>
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <button onClick={()=>setOpen(true)} className='lg:hidden sm:block'>
        <AlignJustify />
        <span className='sr-only'>Toggle Menu</span>
      </button>
      
      <div className='flex flex-1 justify-end'>
        <button className='inline-flex gap-2 bg-black text-white items-center rounded-md px-4 py-2 text-sm font-medium shadow'>
          <LogOut className="mr-1" />
          Logout
        </button>
      </div>
    </header>
    </div>
  );
};

export default AdminHeader;

